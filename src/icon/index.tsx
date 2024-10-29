import React, { useMemo, ReactElement, Ref } from 'react';
import IconBase, { IconBaseProps } from './IconBase';

type IconBaseRef = {
  ref?: Ref<HTMLSpanElement>;
};

interface ThirdIconProps extends IconBaseProps, IconBaseRef {
  /**
   * @description svg 组件。
   */
  component: ReactElement;
}

interface SVGSymbolIconProps extends IconBaseProps, IconBaseRef {
  /**
   * @description 使用 SVG Symbol 图标。方便开发者调用在 iconfont 上的图标 或者 使用自定义的 SVG Symbol 。
   * @see {@link https://www.iconfont.cn/ | iconfont}
   * @see {@link https://css-tricks.com/svg-symbol-good-choice-icons/ | SVG symbol a Good Choice for Icons}
   */
  symbolId: string;
}

export type IconProps = ThirdIconProps | SVGSymbolIconProps;

function Icon(props: ThirdIconProps): ReactElement;
function Icon(props: SVGSymbolIconProps): ReactElement;
function Icon(props: ThirdIconProps | SVGSymbolIconProps) {
  const {
    // @ts-ignore
    component,
    // @ts-ignore
    symbolId,
    ...restProps
  } = props || {};

  const child = useMemo(() => {
    if (component) {
      return component;
    }
    if (symbolId) {
      return (
        <svg width="1em" height="1em" fill="currentColor">
          <use xlinkHref={`#${symbolId}`} />
        </svg>
      );
    }
    return null;
  }, [component, symbolId]);

  return <IconBase {...restProps}>{child}</IconBase>;
}

export default Icon;
