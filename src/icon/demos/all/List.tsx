import { Col, Row, Typography } from 'antd';
import classnames from 'classnames';
import * as Icons from 'doly-icons';
import { debounce } from 'lodash';
import { useUpdateEffect } from 'rc-hooks';
import * as React from 'react';
import { VariableSizeList } from 'react-window';
import Actions, { CopyComponent, useActions } from './Actions';
import Context, { ClickIconAction } from './context';
import type { IconClassDataItem } from './dataMain';
import styles from './List.less';

enum Screen {
  XXL = 1600,
  LG = 992,
  MD = 768,
  SM = 576,
  XS = 0,
}

enum ScreenColumns {
  XXL = 12,
  LG = 8,
  MD = 6,
  SM = 4,
  XS = 3,
}

enum ScreenPadding {
  XXL = 58 * 2,
  LG = 58 * 2,
  MD = 58 * 2,
  SM = 16 * 2,
  XS = 16 * 2,
}

const colSpan = {
  xxl: 2,
  lg: 3,
  md: 4,
  sm: 6,
  xs: 8,
};

const getColumnsAndPadding = () => {
  const w = window.innerWidth;
  let cols = ScreenColumns.XS;
  let padding = ScreenPadding.XS;

  if (w > Screen.XXL) {
    cols = ScreenColumns.XXL;
    padding = ScreenPadding.XXL;
  } else if (w > Screen.LG) {
    cols = ScreenColumns.LG;
    padding = ScreenPadding.LG;
  } else if (w > Screen.MD) {
    cols = ScreenColumns.MD;
    padding = ScreenPadding.MD;
  } else if (w > Screen.SM) {
    cols = ScreenColumns.SM;
    padding = ScreenPadding.SM;
  }
  return { cols, padding };
};

const ColHeight = 116;
const TitleHeight = 66;
const RowGap = 16;

const IconName: React.FC<{ children: React.ReactNode; name: string; componentName: string }> = ({
  children,
  name,
  componentName,
}) => {
  const { clickIconAction } = React.useContext(Context);
  const { copyPng, copySvg } = useActions(name);

  const view = (
    <div
      className={classnames(styles.icon, `icon-${name}`)}
      onClick={() => {
        if (clickIconAction === ClickIconAction.CopySvg) {
          copySvg();
        } else if (clickIconAction === ClickIconAction.CopyPng) {
          copyPng();
        }
      }}
    >
      {children}
    </div>
  );

  return clickIconAction === ClickIconAction.CopyComponentName ||
    clickIconAction === ClickIconAction.CopyJSX ? (
    <CopyComponent
      text={
        clickIconAction === ClickIconAction.CopyComponentName
          ? componentName
          : `<${componentName} />`
      }
    >
      {view}
    </CopyComponent>
  ) : (
    view
  );
};

const IconList: React.FunctionComponent<{ data: IconClassDataItem[] }> = ({ data }) => {
  const listRef = React.useRef<any>();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const screenInfoRef = React.useRef<ReturnType<typeof getColumnsAndPadding>>();
  screenInfoRef.current = getColumnsAndPadding();
  const { isShowFilter } = React.useContext(Context);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [width, setWidth] = React.useState(window.innerWidth - screenInfoRef.current.padding);

  const formatData = () => {
    const ret: (
      | { list: IconClassDataItem['list']; height: number }
      | { title: string; len: number; height: number }
    )[] = [];
    data.forEach(({ title, list }) => {
      ret.push({
        title,
        len: list.length,
        height: TitleHeight,
      });

      const cols = screenInfoRef.current?.cols || 3;

      const rows = Math.ceil(list.length / cols);
      for (let i = 0; i < rows; i++) {
        ret.push({
          list: list.slice(i * cols, (i + 1) * cols),
          height: i !== rows - 1 ? ColHeight + RowGap : ColHeight,
        });
      }
    });
    return ret;
  };

  const retData = formatData();

  const getItemSize = (index: number) => {
    return retData[index].height;
  };

  const RowItem = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const curr = retData[index];

    let view: React.ReactNode = null;

    if ('title' in curr) {
      view = (
        <h3>
          {curr.title}({curr.len})
        </h3>
      );
    } else {
      view = (
        <Row gutter={[16, 16]}>
          {curr.list.map((item) => {
            // @ts-ignore
            const C = Icons[item.componentName];

            return (
              <Col key={item.name} {...colSpan}>
                <div className={styles.item}>
                  <IconName name={item.name} componentName={item.componentName}>
                    <C />
                  </IconName>
                  <div className={styles.info}>
                    <div className={styles.inner}>
                      <div className={styles.cnName}>
                        <Typography.Text ellipsis={{ tooltip: item.cnName }}>
                          {item.cnName}
                        </Typography.Text>
                      </div>
                      <div className={styles.enName}>
                        <Typography.Text ellipsis={{ tooltip: item.name }}>
                          {item.name}
                        </Typography.Text>
                      </div>
                      {/* <div className={styles.cnName}>{item.cnName}</div>
                      <div className={styles.enName}>{item.name}</div> */}
                    </div>
                    <div className={styles.extra}>
                      <Actions componentName={item.componentName} fileName={item.name} />
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      );
    }

    return (
      <div className={styles.demoList} style={style}>
        {view}
      </div>
    );
  };

  useUpdateEffect(() => {
    if (listRef.current && retData.length > 0) {
      retData.forEach((_, i) => {
        listRef.current.resetAfterIndex(i);
      });
    }
  }, [retData]);

  const resizeRef = React.useRef<() => any>();

  if (!resizeRef.current) {
    resizeRef.current = debounce(() => {
      const target = wrapperRef.current;
      if (target) {
        screenInfoRef.current = getColumnsAndPadding();
        const padding = screenInfoRef.current?.padding || 16;
        setHeight(window.innerHeight - target.getBoundingClientRect().top - 16);
        setWidth(window.innerWidth - padding);
      }
    }, 300);
  }

  React.useEffect(() => {
    if (resizeRef.current) {
      const fn = resizeRef.current;
      window.addEventListener('resize', fn);

      return () => {
        window.removeEventListener('resize', fn);
      };
    }
  }, []);

  React.useEffect(() => {
    resizeRef.current?.();
  }, [data, isShowFilter]);

  return (
    <div ref={wrapperRef}>
      <VariableSizeList
        height={height}
        itemCount={retData.length}
        itemSize={getItemSize}
        width={width}
        ref={listRef}
        className={styles.listWrapper}
      >
        {RowItem}
      </VariableSizeList>
    </div>
  );
};

export default IconList;
