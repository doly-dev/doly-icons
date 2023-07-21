import type { ReactElement, Ref } from 'react';
import React, { useMemo } from 'react';
import type { IconBaseProps } from './IconBase';
import IconBase from './IconBase';

type IconBaseRef = {
  ref?: Ref<HTMLSpanElement>;
};

interface ThirdIconProps extends IconBaseProps, IconBaseRef {
  component: ReactElement;
}

interface SVGSymbolIconProps extends IconBaseProps, IconBaseRef {
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
