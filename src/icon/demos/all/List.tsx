import { Col, Row, Typography } from 'antd';
import classnames from 'classnames';
import * as Icons from 'doly-icons';
import { debounce } from 'ut2';
import { useDebounce, useUpdateEffect } from 'rc-hooks';
import React from 'react';
import { VariableSizeList } from 'react-window';
import Actions, { CopyComponent, useActions } from './Actions';
import Context from './context';
import { IconClassDataItem } from './dataMain';
import styles from './List.module.less';
import { ClickIconActionOptions, EClickIconAction } from './constants';

enum Screen {
  // XXL = 1600,
  LG = 992,
  MD = 768,
  SM = 576,
  XS = 0,
}

enum ScreenColumns {
  // XXL = 12,
  LG = 8,
  MD = 6,
  SM = 4,
  XS = 3,
}

enum ScreenPadding {
  // XXL = 58 * 2,
  LG = 58 * 2,
  MD = 58 * 2,
  SM = 16 * 2,
  XS = 16 * 2,
}

const colSpan = {
  // xxl: 2,
  lg: 3,
  md: 4,
  sm: 6,
  xs: 8,
};

const getColumnsAndPadding = () => {
  const w = window.innerWidth;
  let cols = ScreenColumns.XS;
  let padding = ScreenPadding.XS;

  // if (w > Screen.XXL) {
  //   cols = ScreenColumns.XXL;
  //   padding = ScreenPadding.XXL;
  // } else
  if (w > Screen.LG) {
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
  const hasClickAction = clickIconAction !== EClickIconAction.None;
  const actionName = hasClickAction
    ? ClickIconActionOptions.find((item) => item.value === clickIconAction)?.label
    : undefined;

  const view = (
    <div
      className={classnames(styles.icon, { [styles.iconAction]: hasClickAction }, `icon-${name}`)}
      onClick={() => {
        if (clickIconAction === EClickIconAction.CopySvg) {
          copySvg();
        } else if (clickIconAction === EClickIconAction.CopyPng) {
          copyPng();
        }
      }}
      title={actionName ? `点击${actionName}` : undefined}
    >
      {children}
    </div>
  );

  return clickIconAction === EClickIconAction.CopyComponentName ||
    clickIconAction === EClickIconAction.CopyJSX ? (
    <CopyComponent
      text={
        clickIconAction === EClickIconAction.CopyComponentName
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

const IconItem: React.FC<{ data: IconClassDataItem['list'][0] }> = ({ data }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const { name, componentName, cnName } = data || {};
  // @ts-ignore
  const C = Icons[componentName];

  const debounceOpen = useDebounce(open, 300);

  return (
    <div className={classnames(styles.item, { [styles.itemHover]: debounceOpen })} ref={wrapperRef}>
      <IconName name={name} componentName={componentName}>
        <C />
      </IconName>
      <div className={styles.info}>
        <div className={styles.inner}>
          <div className={styles.cnName}>
            <Typography.Text
              ellipsis={{
                tooltip: {
                  title: cnName,
                  getPopupContainer() {
                    return wrapperRef.current!;
                  },
                },
              }}
            >
              {cnName}
            </Typography.Text>
          </div>
          <div className={styles.enName}>
            <Typography.Text
              ellipsis={{
                tooltip: {
                  title: name,
                  getPopupContainer() {
                    return wrapperRef.current!;
                  },
                },
              }}
            >
              {name}
            </Typography.Text>
          </div>
          {/* <div className={styles.cnName}>{cnName}</div>
                      <div className={styles.enName}>{name}</div> */}
        </div>
        <div className={styles.extra}>
          <Actions
            componentName={componentName}
            fileName={name}
            open={open}
            onOpenChange={setOpen}
          />
        </div>
      </div>
    </div>
  );
};

const IconList: React.FC<{ data: IconClassDataItem[] }> = ({ data }) => {
  const listRef = React.useRef<any>();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const { isShowFilter } = React.useContext(Context);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [width, setWidth] = React.useState<string | number>('auto');

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

      const cols = getColumnsAndPadding()?.cols || 3;

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
            return (
              <Col key={item.name} {...colSpan}>
                <IconItem data={item} />
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
        const rect = target.getBoundingClientRect();
        setHeight(window.innerHeight - rect.top - 16);
        setWidth(rect.width);
      }
    }, 100);
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
