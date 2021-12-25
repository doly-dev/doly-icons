import * as React from 'react';
import { Row, Col } from 'antd';
import * as DolyIcons from 'doly-icons';
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

const IconList: React.FunctionComponent<
  IconClassDataItem & { fontSize: number; color: string }
> = ({ title, list, fontSize, color }) => {
  return (
    <div className={styles.demoList}>
      <h3>
        {title}({list.length})
      </h3>
      <Row gutter={[16, 16]}>
        {list.map((item) => {
          // @ts-ignore
          const C = DolyIcons[item.componentName];

          return (
            <Col key={item.name} {...colSpan}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <C />
                </div>
                <div className={styles.info}>
                  <div className={styles.inner}>
                    <div className={styles.name}>{item.cnName}</div>
                    <div className={styles.enName}>{item.name}</div>
                  </div>
                  <div className={styles.extra}>
                    <Actions
                      componentName={item.componentName}
                      fileName={item.name}
                      fontSize={fontSize}
                      color={color}
                    />
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
