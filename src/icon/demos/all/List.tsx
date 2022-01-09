import * as React from 'react';
import { Row, Col } from 'antd';
import classnames from 'classnames';
import * as Icons from 'doly-icons';
import type { IconClassDataItem } from './dataMain';
import Actions from './Actions';
import styles from './List.less';

const colSpan = {
  xxl: 1,
  lg: 3,
  md: 4,
  sm: 6,
  xs: 8,
};

const IconList: React.FunctionComponent<IconClassDataItem> = ({ title, list }) => {
  return (
    <div className={styles.demoList}>
      <h3>
        {title}({list.length})
      </h3>
      <Row gutter={[16, 16]}>
        {list.map((item) => {
          // @ts-ignore
          const C = Icons[item.componentName];

          return (
            <Col key={item.name} {...colSpan}>
              <div className={styles.item}>
                <div className={classnames(styles.icon, `icon-${item.name}`)}>
                  <C />
                </div>
                <div className={styles.info}>
                  <div className={styles.inner}>
                    <div className={styles.name}>{item.cnName}</div>
                    <div className={styles.enName}>{item.name}</div>
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
    </div>
  );
};

export default IconList;
