import type { CSSProperties, HTMLAttributes, SVGProps } from 'react';

interface CSSPropertiesWithVariable extends CSSProperties {
  [key: `--${string}`]: string | number;
}

export interface IconBaseProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  spin?: boolean;
  spinReverse?: boolean;
  svgProps?: SVGProps<SVGSVGElement>;
  style?: CSSPropertiesWithVariable;
}
