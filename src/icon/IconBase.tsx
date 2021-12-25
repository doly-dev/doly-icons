import React, { cloneElement, forwardRef, ReactElement, useContext } from 'react';
import classnames from 'classnames';
import IconContext from './IconContext';
import { IconBaseProps } from './type';
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

const IconBase = forwardRef<HTMLSpanElement, IconBaseProps>(
  ({ spin, spinReverse, className, style, svgProps, children, ...restProps }, ref) => {
    const {
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
        role="img"
        className={classnames(
          prefixClass,
          {
            [classes.spin]: realSpin,
            [classes.spinReverse]: realSpinReverse,
          },
          ctxClassName,
          className,
        )}
        style={{ ...ctxStyle, ...style }}
        {...ctxRestProps}
        {...restProps}
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

export type { IconBaseProps };

export default IconBase;
