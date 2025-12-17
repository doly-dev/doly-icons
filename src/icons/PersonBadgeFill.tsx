import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-badge-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yem00LjUgMGEuNS41IDAgMCAwIDAgMWgzYS41LjUgMCAwIDAgMC0xek04IDExYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNm01IDIuNzU1QzEyLjE0NiAxMi44MjUgMTAuNjIzIDEyIDggMTJzLTQuMTQ2LjgyNi01IDEuNzU1VjE0YTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xeiIvPgo8L3N2Zz4=)*/
const PersonBadgeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-badge-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default PersonBadgeFill;
