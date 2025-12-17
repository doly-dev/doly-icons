import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![thunderbolt-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAzYTEgMSAwIDAgMC0xIDF2Ny4yOTNBMSAxIDAgMCAwIC4yOTMgMTJMMiAxMy43MDdhMSAxIDAgMCAwIC43MDcuMjkzaDEwLjU4NmExIDEgMCAwIDAgLjcwNy0uMjkzTDE1LjcwNyAxMmExIDEgMCAwIDAgLjI5My0uNzA3VjRhMSAxIDAgMCAwLTEtMXptMi41IDNoOWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTlhLjUuNSAwIDAgMS0uNS0uNXYtMWEuNS41IDAgMCAxIC41LS41Ii8+Cjwvc3ZnPg==)*/
const ThunderboltFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="thunderbolt-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 3a1 1 0 0 0-1 1v7.293A1 1 0 0 0 .293 12L2 13.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293L15.707 12a1 1 0 0 0 .293-.707V4a1 1 0 0 0-1-1zm2.5 3h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default ThunderboltFill;
