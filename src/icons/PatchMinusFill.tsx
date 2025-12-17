import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![patch-minus-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuMDY3Ljg3YTIuODkgMi44OSAwIDAgMC00LjEzNCAwbC0uNjIyLjYzOC0uODktLjAxMWEyLjg5IDIuODkgMCAwIDAtMi45MjQgMi45MjRsLjAxLjg5LS42MzYuNjIyYTIuODkgMi44OSAwIDAgMCAwIDQuMTM0bC42MzcuNjIyLS4wMTEuODlhMi44OSAyLjg5IDAgMCAwIDIuOTI0IDIuOTI0bC44OS0uMDEuNjIyLjYzNmEyLjg5IDIuODkgMCAwIDAgNC4xMzQgMGwuNjIyLS42MzcuODkuMDExYTIuODkgMi44OSAwIDAgMCAyLjkyNC0yLjkyNGwtLjAxLS44OS42MzYtLjYyMmEyLjg5IDIuODkgMCAwIDAgMC00LjEzNGwtLjYzNy0uNjIyLjAxMS0uODlhMi44OSAyLjg5IDAgMCAwLTIuOTI0LTIuOTI0bC0uODkuMDF6TTYgNy41aDRhLjUuNSAwIDAgMSAwIDFINmEuNS41IDAgMCAxIDAtMSIvPgo8L3N2Zz4=)*/
const PatchMinusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="patch-minus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default PatchMinusFill;
