import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard-pulse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAxLjVhLjUuNSAwIDAgMC0uNS0uNWgtM2EuNS41IDAgMCAwLS41LjV2MWEuNS41IDAgMCAwIC41LjVoM2EuNS41IDAgMCAwIC41LS41em0tNSAwQTEuNSAxLjUgMCAwIDEgNi41IDBoM0ExLjUgMS41IDAgMCAxIDExIDEuNXYxQTEuNSAxLjUgMCAwIDEgOS41IDRoLTNBMS41IDEuNSAwIDAgMSA1IDIuNXptLTIgMGgxdjFIM2ExIDEgMCAwIDAtMSAxVjE0YTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMVYzLjVhMSAxIDAgMCAwLTEtMWgtMXYtMWgxYTIgMiAwIDAgMSAyIDJWMTRhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWMy41YTIgMiAwIDAgMSAyLTJtNi45NzkgMy44NTZhLjUuNSAwIDAgMC0uOTY4LjA0TDcuOTIgMTAuNDlsLS45NC0zLjEzNWEuNS41IDAgMCAwLS44OTUtLjEzM0w0LjIzMiAxMEgzLjVhLjUuNSAwIDAgMCAwIDFoMWEuNS41IDAgMCAwIC40MTYtLjIyM2wxLjQxLTIuMTE1IDEuMTk1IDMuOTgyYS41LjUgMCAwIDAgLjk2OC0uMDRMOS41OCA3LjUxbC45NCAzLjEzNUEuNS41IDAgMCAwIDExIDExaDEuNWEuNS41IDAgMCAwIDAtMWgtMS4xMjh6Ii8+Cjwvc3ZnPg==)*/
const ClipboardPulse: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard-pulse"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2m6.979 3.856a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.895-.133L4.232 10H3.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .416-.223l1.41-2.115 1.195 3.982a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h1.5a.5.5 0 0 0 0-1h-1.128z"/>
</svg>
      )}
    />
  );

export default ClipboardPulse;
