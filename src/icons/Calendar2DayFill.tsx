import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-day-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41bTkuOTU0IDNIMi41NDVjLS4zIDAtLjU0NS4yMjQtLjU0NS41djFjMCAuMjc2LjI0NC41LjU0NS41aDEwLjkxYy4zIDAgLjU0NS0uMjI0LjU0NS0uNXYtMWMwLS4yNzYtLjI0NC0uNS0uNTQ2LS41bS0yLjI0IDQuODU1YS40MjguNDI4IDAgMSAwIDAtLjg1NS40MjYuNDI2IDAgMCAwLS40MjkuNDNjMCAuMjM4LjE5Mi40MjUuNDMuNDI1em0uMzM3LjU2M2gtLjY3MnY0LjEwNWguNjcyem0tNi44NjcgNC4xMDV2LTIuM2gyLjI2MXYtLjYxSDQuNjg0VjcuODAxaDIuNDY0di0uNjFINHY1LjMzMnptMy4yOTYgMGguNjc2VjkuOThjMC0uNTU0LjIyNy0xLjAwNy45NTMtMS4wMDcuMTI1IDAgLjI1OC4wMDQuMzI5LjAxNXYtLjYxM2EyIDIgMCAwIDAtLjI1NC0uMDJjLS41ODIgMC0uODkxLjMyLTEuMDEyLjU2N2gtLjAydi0uNTA0SDcuOTh6Ii8+Cjwvc3ZnPg==)*/
const Calendar2DayFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-day-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-2.24 4.855a.428.428 0 1 0 0-.855.426.426 0 0 0-.429.43c0 .238.192.425.43.425zm.337.563h-.672v4.105h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98z"/>
</svg>
      )}
    />
  );

export default Calendar2DayFill;
