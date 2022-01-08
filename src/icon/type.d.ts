import type { CSSProperties, HTMLAttributes, SVGProps } from 'react';

type CSSVariable = {
  [key: `--${string}`]: string | number;
};

export interface IconBaseProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  spin?: boolean;
  spinReverse?: boolean;
  svgProps?: SVGProps<SVGSVGElement>;
  style?: CSSProperties & CSSVariable;
}
