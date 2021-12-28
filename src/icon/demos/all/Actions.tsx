import * as React from 'react';
import { Menu, Dropdown, message, Typography } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ThreeDots } from 'doly-icons';
import { saveSvgAsPng } from 'save-svg-as-png';
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
  // const customReactComponentText = `<${componentName} style={{ fontSize: ${fontSize}, color: '${color}' }} />`;

  const downloadCustom = React.useCallback(() => {
    const url = `${PATH_ROOT}assets/icons/${fileName}.svg`;

    downloadSvg(url, fileName, {
      fontSize,
      color,
    });
  }, [color, fileName, fontSize]);

  const downloadPng = React.useCallback(() => {
    let svgNode = document.querySelector(`.icon-${fileName} svg`)?.cloneNode(true) as SVGSVGElement;
    svgNode.setAttribute('width', `${fontSize}`);
    svgNode.setAttribute('height', `${fontSize}`);
    svgNode.setAttribute('fill', color);
    saveSvgAsPng(svgNode, `${fileName}.png`);
    // @ts-ignore
    svgNode = null;
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
      <Menu.Divider />
      <Menu.Item key="download-svg">
        <a onClick={downloadCustom}>下载 SVG</a>
      </Menu.Item>
      <Menu.Item key="download-png">
        <a onClick={downloadPng}>下载 PNG</a>
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
