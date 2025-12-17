import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![briefcase-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDFBMS41IDEuNSAwIDAgMCA1IDIuNVYzSDEuNUExLjUgMS41IDAgMCAwIDAgNC41djEuMzg0bDcuNjE0IDIuMDNhMS41IDEuNSAwIDAgMCAuNzcyIDBMMTYgNS44ODRWNC41QTEuNSAxLjUgMCAwIDAgMTQuNSAzSDExdi0uNUExLjUgMS41IDAgMCAwIDkuNSAxem0wIDFoM2EuNS41IDAgMCAxIC41LjVWM0g2di0uNWEuNS41IDAgMCAxIC41LS41Ii8+CiAgPHBhdGggZD0iTTAgMTIuNUExLjUgMS41IDAgMCAwIDEuNSAxNGgxM2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWNi44NUw4LjEyOSA4Ljk0N2EuNS41IDAgMCAxLS4yNTggMEwwIDYuODV6Ii8+Cjwvc3ZnPg==)*/
const BriefcaseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="briefcase-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
</svg>
      )}
    />
  );

export default BriefcaseFill;
