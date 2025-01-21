import React, {
  useContext,
  CSSProperties,
  HTMLAttributes,
  SVGProps,
  ReactNode,
  RefObject,
} from 'react';
import classnames from 'classnames';
import IconContext from './IconContext';
import { useInsertStyle } from './dynamicStyle';

const prefixClass = 'doly-icon';

const classes = {
  spin: `${prefixClass}-spin`,
  spinReverse: `${prefixClass}-spin-reverse`,
};

// svg 默认属性
const defaultSvgProps = {
  'aria-hidden': true,
  focusable: false,
};

type StyleWithVariable<V extends string = never> = CSSProperties & Partial<Record<V, string>>;

export interface IconBaseProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'children'> {
  /**
   * @description 旋转动画。
   * @default false
   */
  spin?: boolean;

  /**
   * @description 反向旋转动画，优先级比 spin 高。
   * @default false
   */
  spinReverse?: boolean;

  /**
   * @description svg 标签属性。
   */
  svgProps?: SVGProps<SVGSVGElement>;
  style?: StyleWithVariable<
    '--doly-icon-font-size' | '--doly-icon-color' | '--doly-icon-spin-duration'
  >;

  ref?: RefObject<HTMLSpanElement>;
}

const IconBase: React.FC<
  IconBaseProps & {
    /**
     * 自定义渲染子节点。
     *
     * @param childProps 合并上下文配置和组件配置的 `svgProps`。
     * @returns
     */
    renderChild: (childProps: SVGProps<SVGSVGElement>) => ReactNode;
  }
> = ({ spin, spinReverse, className, style, svgProps, renderChild, ...restProps }) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref,
    csp,
    spin: ctxSpin,
    spinReverse: ctxSpinReverse,
    className: ctxClassName,
    style: ctxStyle,
    svgProps: ctxSvgProps,
    ...ctxRestProps
  } = useContext(IconContext);

  const realSpin = typeof spin !== 'undefined' ? spin : ctxSpin;
  const realSpinReverse = typeof spinReverse !== 'undefined' ? spinReverse : ctxSpinReverse;

  useInsertStyle(csp);

  const mergeProps = {
    ...defaultSvgProps,
    ...ctxSvgProps,
    ...svgProps,
  };

  return (
    <span
      className={classnames(
        prefixClass,
        {
          [classes.spin]: realSpin,
          [classes.spinReverse]: realSpinReverse,
        },
        ctxClassName,
        className,
      )}
      role="img"
      style={{ ...ctxStyle, ...style } as CSSProperties}
      {...ctxRestProps}
      {...restProps}
    >
      {renderChild(mergeProps)}
    </span>
  );
};

IconBase.displayName = 'IconBase';

export default IconBase;
