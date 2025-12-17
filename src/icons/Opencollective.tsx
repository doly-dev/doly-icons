import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![opencollective](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLW9wYWNpdHk9Ii40IiBkPSJNMTIuOTk1IDguMTk1YzAgLjkzNy0uMzEyIDEuOTEyLS43OCAyLjY5M2wxLjk5IDEuOTljLjk3Ni0xLjMyNyAxLjYtMi45NjYgMS42LTQuNjgzIDAtMS43OTUtLjYyNC0zLjQzNC0xLjU2MS00Ljc2bC0yLjA2OCAyLjAyOGMuNDY4Ljc4MS43OCAxLjY3OS43OCAyLjczMnoiLz4KICA8cGF0aCBkPSJNOCAxMy4xNTFhNC45OTUgNC45OTUgMCAxIDEgMC05Ljk5YzEuMDE1IDAgMS45NTEuMjczIDIuNzMyLjgybDEuOTUtMi4wM2E3LjgwNSA3LjgwNSAwIDEgMCAuMDQgMTIuNDQ5bC0xLjk1MS0yLjAzYTUuMDcgNS4wNyAwIDAgMS0yLjczMi43ODF6Ii8+Cjwvc3ZnPg==)*/
const Opencollective: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="opencollective"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillOpacity=".4" d="M12.995 8.195c0 .937-.312 1.912-.78 2.693l1.99 1.99c.976-1.327 1.6-2.966 1.6-4.683 0-1.795-.624-3.434-1.561-4.76l-2.068 2.028c.468.781.78 1.679.78 2.732z"/>
  <path d="M8 13.151a4.995 4.995 0 1 1 0-9.99c1.015 0 1.951.273 2.732.82l1.95-2.03a7.805 7.805 0 1 0 .04 12.449l-1.951-2.03a5.07 5.07 0 0 1-2.732.781z"/>
</svg>
      )}
    />
  );

export default Opencollective;
