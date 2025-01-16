import type { DropdownProps, MenuProps } from 'antd';
import { App, Dropdown, Typography } from 'antd';
import { copyImageToClipboard } from 'copy-image-clipboard';
import copy from 'copy-to-clipboard';
import { ThreeDots } from 'doly-icons';
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { saveSvgAsPng, svgAsPngUri } from 'save-svg-as-png';
import { dataURLToBlob } from 'util-helpers';
import styles from './Actions.module.less';
import Context from './context';
import { downloadSvg, formatPx, pixelRatio } from './utils';

const VIEWBOX_SIZE = 16;

function getPngScale(pngSize: number) {
  return pngSize / pixelRatio / VIEWBOX_SIZE;
}

function getSvgToPngOptions({
  pngBackgroundColor,
  pngSize,
}: {
  pngBackgroundColor: string;
  pngSize: number;
}) {
  return {
    scale: getPngScale(pngSize),
    backgroundColor: pngBackgroundColor,
    excludeCss: true,
  };
}

export const CopyComponent: React.FC<{ text: string; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  const { message } = App.useApp();
  return (
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
};

export function useActions(fileName: string) {
  const { message } = App.useApp();
  const { fontSize, color, pngBackgroundColor, pngSize } = React.useContext(Context);
  const svgNodeRef = React.useRef<SVGSVGElement | null>();

  const updateSvgNode = (withStyle = true) => {
    svgNodeRef.current = document
      .querySelector(`.icon-${fileName} svg`)
      ?.cloneNode(true) as SVGSVGElement;
    if (withStyle) {
      const realSize = formatPx(fontSize);
      svgNodeRef.current.setAttribute('width', `${realSize}`);
      svgNodeRef.current.setAttribute('height', `${realSize}`);
      svgNodeRef.current.setAttribute('fill', color);
    }
  };

  const downloadPng = () => {
    updateSvgNode();
    saveSvgAsPng(
      svgNodeRef.current,
      `${fileName}.png`,
      getSvgToPngOptions({ pngBackgroundColor, pngSize }),
    );
    svgNodeRef.current = null;
  };

  const copyPng = async () => {
    updateSvgNode();
    const pngUri = await svgAsPngUri(
      svgNodeRef.current,
      getSvgToPngOptions({ pngBackgroundColor, pngSize }),
    );
    // console.log(pngUri);
    try {
      try {
        await copyImageToClipboard(pngUri);
        message.success('PNG 复制成功！');
      } catch (err) {
        // ref: https://github.com/LuanEdCosta/copy-image-clipboard/issues/37
        const canUseClipboardItem = typeof ClipboardItem !== 'undefined';
        if (canUseClipboardItem) {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': dataURLToBlob(pngUri) }),
          ]);
          message.success('PNG 复制成功！');
        }
      }
    } catch (err) {
      message.error('PNG 复制失败！');
    }
    svgNodeRef.current = null;
  };

  const copySvg = () => {
    updateSvgNode();
    let div = document.createElement('div');
    div.append(svgNodeRef.current as SVGSVGElement);
    // console.log(typeof div.innerHTML);
    copy(div.innerHTML, {
      format: 'text/plain',
      onCopy: () => {
        message.success('SVG 复制成功！');
        // @ts-ignore
        div = null;
        svgNodeRef.current = null;
      },
    });
  };

  return {
    copyPng,
    copySvg,
    downloadPng,
  };
}

interface ActionsProps extends DropdownProps {
  componentName: string;
  fileName: string;
}

const Actions: React.FC<ActionsProps> = ({ componentName, fileName, ...restProps }) => {
  const { fontSize, color } = React.useContext(Context);
  const { copyPng, copySvg, downloadPng } = useActions(fileName);

  const reactComponentText = `<${componentName} />`;

  const downloadCustom = React.useCallback(() => {
    const url = `${PATH_ROOT}assets/icons/${fileName}.svg`;

    downloadSvg(url, fileName, {
      fontSize,
      color,
    });
  }, [color, fileName, fontSize]);

  const menuItems: MenuProps['items'] = [
    {
      key: 'copy-component-name',
      label: (
        <CopyComponent text={componentName}>
          <div>复制组件名称</div>
        </CopyComponent>
      ),
    },
    {
      key: 'copy-react-component',
      label: (
        <CopyComponent text={reactComponentText}>
          <div>复制 JSX</div>
        </CopyComponent>
      ),
    },
    {
      key: 'copy-svg',
      label: <a onClick={copySvg}>复制 SVG</a>,
    },
    {
      key: 'copy-png',
      label: <a onClick={copyPng}>复制 PNG</a>,
    },
    {
      key: 'download-svg',
      label: <a onClick={downloadCustom}>下载 SVG</a>,
    },
    {
      key: 'download-png',
      label: <a onClick={downloadPng}>下载 PNG</a>,
    },
  ];

  return (
    <Dropdown
      menu={{
        items: menuItems,
      }}
      arrow={{ pointAtCenter: true }}
      destroyPopupOnHide
      {...restProps}
    >
      <ThreeDots className={styles.more} />
    </Dropdown>
  );
};

export default Actions;
