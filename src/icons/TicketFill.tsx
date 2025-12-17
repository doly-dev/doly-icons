import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ticket-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDNBMS41IDEuNSAwIDAgMCAwIDQuNVY2YS41LjUgMCAwIDAgLjUuNSAxLjUgMS41IDAgMSAxIDAgMyAuNS41IDAgMCAwLS41LjV2MS41QTEuNSAxLjUgMCAwIDAgMS41IDEzaDEzYTEuNSAxLjUgMCAwIDAgMS41LTEuNVYxMGEuNS41IDAgMCAwLS41LS41IDEuNSAxLjUgMCAwIDEgMC0zQS41LjUgMCAwIDAgMTYgNlY0LjVBMS41IDEuNSAwIDAgMCAxNC41IDN6Ii8+Cjwvc3ZnPg==)*/
const TicketFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ticket-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z"/>
</svg>
      )}
    />
  );

export default TicketFill;
