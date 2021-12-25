import React, { ReactElement, useMemo } from 'react';
import IconBase, { IconBaseProps } from './IconBase';

interface ThirdIconProps extends IconBaseProps {
  component: ReactElement;
}

interface SVGSymbolIconProps extends IconBaseProps {
  symbolId: string;
}

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
