import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ticket-perforated-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0LjVBMS41IDEuNSAwIDAgMSAxLjUgM2gxM0ExLjUgMS41IDAgMCAxIDE2IDQuNVY2YS41LjUgMCAwIDEtLjUuNSAxLjUgMS41IDAgMCAwIDAgMyAuNS41IDAgMCAxIC41LjV2MS41YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTNBMS41IDEuNSAwIDAgMSAwIDExLjVWMTBhLjUuNSAwIDAgMSAuNS0uNSAxLjUgMS41IDAgMSAwIDAtM0EuNS41IDAgMCAxIDAgNnptNC0xdjFoMXYtMXptMSAzdi0xSDR2MXptNyAwdi0xaC0xdjF6bS0xLTJoMXYtMWgtMXptLTYgM0g0djFoMXptNyAxdi0xaC0xdjF6bS03IDFINHYxaDF6bTcgMXYtMWgtMXYxem0tOCAxdjFoMXYtMXptNyAxaDF2LTFoLTF6Ii8+Cjwvc3ZnPg==)*/
const TicketPerforatedFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ticket-perforated-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z"/>
</svg>
      )}
    />
  );

export default TicketPerforatedFill;
