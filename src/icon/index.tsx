import React, { cloneElement, ReactElement, SVGProps } from 'react';
import IconBase, { IconBaseProps } from './IconBase';

interface ThirdIconProps extends IconBaseProps {
  /**
   * @description svg 组件。
   * @deprecated 即将废弃，请使用 `renderSVG` 替代。原因是以后不使用 `React.cloneElement` ，无法覆盖上下文配置。
   */
  component: ReactElement;
}

interface ThirdIconSVGProps extends IconBaseProps {
  /**
   * @description 自定义 svg 组件
   * @param mergeSVGProps 合并上下文配置和组件配置的 `svgProps`。
   * @example
   * renderSVG={(mergeSVGProps)=>{
   *   return (
   *     <svg
   *       viewBox="0 0 1024 1024"
   *       xmlns="http://www.w3.org/2000/svg"
   *       fill="currentColor"
   *       width="1em"
   *       height="1em"
   *       {...mergeSVGProps}
   *     >
   *       ...
   *     </svg>
   *   )
   * }}
   */
  renderSVG: (mergeSVGProps: SVGProps<SVGSVGElement>) => ReactElement;
}

interface SVGSymbolIconProps extends IconBaseProps {
  /**
   * @description 使用 SVG Symbol 图标。方便开发者调用在 iconfont 上的图标 或者 使用自定义的 SVG Symbol 。
   * @see {@link https://www.iconfont.cn/ iconfont}
   * @see {@link https://css-tricks.com/svg-symbol-good-choice-icons/ SVG symbol a Good Choice for Icons}
   */
  symbolId: string;
}

export type IconProps = ThirdIconProps | SVGSymbolIconProps;

function Icon(props: ThirdIconProps): ReactElement;
function Icon(props: ThirdIconSVGProps): ReactElement;
function Icon(props: SVGSymbolIconProps): ReactElement;
function Icon(props: ThirdIconProps | ThirdIconSVGProps | SVGSymbolIconProps) {
  const {
    // @ts-ignore
    component,
    // @ts-ignore
    symbolId,
    // @ts-ignore
    renderSVG,
    ...restProps
  } = props || {};

  return (
    <IconBase
      {...restProps}
      renderChild={(childProps) => {
        if (renderSVG) {
          return renderSVG(childProps);
        }
        if (component) {
          return cloneElement(component, childProps);
        }
        if (symbolId) {
          return (
            <svg width="1em" height="1em" fill="currentColor" {...childProps}>
              <use xlinkHref={`#${symbolId}`} />
            </svg>
          );
        }
        return null;
      }}
    />
  );
}

export default Icon;
