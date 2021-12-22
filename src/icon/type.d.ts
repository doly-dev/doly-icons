import { HTMLAttributes, SVGProps } from 'react';

export interface IconBaseProps extends HTMLAttributes<HTMLSpanElement> {
  spin?: boolean;
  spinReverse?: boolean;
  svgProps?: SVGProps<SVGSVGElement>;
}
