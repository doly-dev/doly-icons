import * as React from 'react';
import { Helmet } from 'react-helmet';
import Icon from 'doly-icons';
import styles from './demo.module.less';

const Demo = () => {
  return (
    <>
      <Helmet>
        {/* 建议下载到项目中使用。如果一定要引入在线地址，建议在页面入口引入，避免重复加载。 */}
        <script src="//at.alicdn.com/t/font_3061930_ney4a0jv5ul.js" type="text/javascript" />
      </Helmet>
      <div className={styles.iconList}>
        <Icon symbolId="loading" spin />
        <Icon symbolId="viewgallery" />
        <Icon symbolId="viewlist" />
        <Icon symbolId="vip" style={{ color: 'red' }} />
        <Icon symbolId="vip-fill" style={{ fontSize: 48 }} />
      </div>
    </>
  );
};

export default Demo;
