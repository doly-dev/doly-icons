import * as React from 'react';
import { Menu, Dropdown, message, Typography } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ThreeDots } from 'doly-icons';
import { downloadSvg } from './utils';
import styles from './Actions.less';

const Copy: React.FC<{ text: string }> = ({ text, children }) => (
  <CopyToClipboard
    text={text}
    onCopy={() => {
      message.success(
        <>
          复制成功！<Typography.Text code>{text}</Typography.Text>
        </>,
      );
    }}
  >
    {children}
  </CopyToClipboard>
);

const Actions: React.FunctionComponent<{
  componentName: string;
  fileName: string;
  fontSize: number;
  color: string;
}> = ({ componentName, fileName, fontSize, color }) => {
  const reactComponentText = `<${componentName} />`;
  const customReactComponentText = `<${componentName} style={{ fontSize: ${fontSize}, color: '${color}' }} />`;

  const downloadCustom = React.useCallback(() => {
    const url = `${PATH_ROOT}assets/icons/${fileName}.svg`;

    downloadSvg(url, fileName, {
      fontSize,
      color,
    });
  }, [color, fileName, fontSize]);

  const menu = (
    <Menu>
      <Menu.Item key="copy-component-name">
        <Copy text={componentName}>
          <div>复制组件名称</div>
        </Copy>
      </Menu.Item>
      <Menu.Item key="copy-react-component">
        <Copy text={reactComponentText}>
          <div>复制 JSX</div>
        </Copy>
      </Menu.Item>
      <Menu.Item key="copy-custom-react-component">
        <Copy text={customReactComponentText}>
          <div>复制当前样式 JSX</div>
        </Copy>
      </Menu.Item>
      <Menu.Item key="download-svg-name">
        <Copy text={fileName}>
          <div>复制 SVG 文件名称</div>
        </Copy>
      </Menu.Item>
      <Menu.Item key="download-svg">
        <a href={`${PATH_ROOT}assets/icons/${fileName}.svg`} download>
          下载 SVG
        </a>
      </Menu.Item>
      <Menu.Item key="download-custom-svg">
        <a onClick={downloadCustom}>下载当前样式 SVG</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} arrow destroyPopupOnHide>
      <ThreeDots className={styles.more} />
    </Dropdown>
  );
};

export default Actions;
