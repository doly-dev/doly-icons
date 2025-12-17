import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAgMTIuNzk2VjMuMjA0TDQuNTE5IDh6bS0uNjU5Ljc1My01LjQ4LTQuNzk2YTEgMSAwIDAgMSAwLTEuNTA2bDUuNDgtNC43OTZBMSAxIDAgMCAxIDExIDMuMjA0djkuNTkyYTEgMSAwIDAgMS0xLjY1OS43NTMiLz4KPC9zdmc+)*/
const CaretLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
</svg>
      )}
    />
  );

export default CaretLeft;
