import React, { cloneElement, forwardRef, useContext } from 'react';
import type { CSSProperties, ReactElement, HTMLAttributes, SVGProps } from 'react';
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

interface CSSPropertiesWithVariable extends CSSProperties {
  [key: `--${string}`]: string | number;
}

export interface IconBaseProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  spin?: boolean;
  spinReverse?: boolean;
  svgProps?: SVGProps<SVGSVGElement>;
  style?: CSSPropertiesWithVariable;
}

const IconBase = forwardRef<HTMLSpanElement, IconBaseProps>(
  ({ spin, spinReverse, className, style, svgProps, children, ...restProps }, ref) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    useInsertStyle();

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
        style={{ ...ctxStyle, ...style } as CSSProperties}
        {...ctxRestProps}
        {...restProps}
        role="img"
        ref={ref}
      >
        {children &&
          cloneElement(children as ReactElement, {
            ...defaultSvgProps,
            ...ctxSvgProps,
            ...svgProps,
          })}
      </span>
    );
  },
);

IconBase.displayName = 'IconBase';

export default IconBase;
