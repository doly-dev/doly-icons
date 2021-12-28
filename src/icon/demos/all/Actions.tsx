import * as React from 'react';
import { Menu, Dropdown, message, Typography } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copy from 'copy-to-clipboard';
import { copyImageToClipboard } from 'copy-image-clipboard';
import { ThreeDots } from 'doly-icons';
import { saveSvgAsPng, svgAsPngUri } from 'save-svg-as-png';
import { downloadSvg } from './utils';
import styles from './Actions.less';

const CopyComponent: React.FC<{ text: string }> = ({ text, children }) => (
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
  const svgNodeRef = React.useRef<SVGSVGElement | null>();
  const reactComponentText = `<${componentName} />`;
  // const customReactComponentText = `<${componentName} style={{ fontSize: ${fontSize}, color: '${color}' }} />`;

  const downloadCustom = React.useCallback(() => {
    const url = `${PATH_ROOT}assets/icons/${fileName}.svg`;

    downloadSvg(url, fileName, {
      fontSize,
      color,
    });
  }, [color, fileName, fontSize]);

  const updateSvgNode = React.useCallback(
    (withStyle = true) => {
      svgNodeRef.current = document
        .querySelector(`.icon-${fileName} svg`)
        ?.cloneNode(true) as SVGSVGElement;
      if (withStyle) {
        svgNodeRef.current.setAttribute('width', `${fontSize}`);
        svgNodeRef.current.setAttribute('height', `${fontSize}`);
        svgNodeRef.current.setAttribute('fill', color);
      }
    },
    [color, fileName, fontSize],
  );

  const downloadPng = React.useCallback(() => {
    updateSvgNode();
    saveSvgAsPng(svgNodeRef.current, `${fileName}.png`);
    svgNodeRef.current = null;
  }, [fileName, updateSvgNode]);

  const copyPng = React.useCallback(async () => {
    updateSvgNode();
    const pngUri = await svgAsPngUri(svgNodeRef.current);
    // console.log(pngUri);
    try {
      copyImageToClipboard(pngUri);
      message.success('复制成功！');
    } catch (err) {
      message.error('复制失败！');
    }
    svgNodeRef.current = null;
  }, [updateSvgNode]);

  const copySvg = React.useCallback(async () => {
    updateSvgNode();
    let div = document.createElement('div');
    div.append(svgNodeRef.current as SVGSVGElement);
    // console.log(typeof div.innerHTML);
    copy(div.innerHTML, {
      format: 'text/plain',
      onCopy: () => {
        message.success('复制成功！');
        // @ts-ignore
        div = null;
        svgNodeRef.current = null;
      },
    });
  }, [updateSvgNode]);

  const menu = (
    <Menu>
      <Menu.Item key="copy-component-name">
        <CopyComponent text={componentName}>
          <div>复制组件名称</div>
        </CopyComponent>
      </Menu.Item>
      <Menu.Item key="copy-react-component">
        <CopyComponent text={reactComponentText}>
          <div>复制 JSX</div>
        </CopyComponent>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="copy-svg">
        <a onClick={copySvg}>复制 SVG</a>
      </Menu.Item>
      <Menu.Item key="copy-png">
        <a onClick={copyPng}>复制 PNG</a>
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
