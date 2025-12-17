import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBNOCA3YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNG0wIDUuOTk2VjE0SDNzLTEgMC0xLTEgMS00IDYtNHEuODQ1LjAwMiAxLjU0NC4xMDdhNC41IDQuNSAwIDAgMC0uODAzLjkxOEExMSAxMSAwIDAgMCA4IDEwYy0yLjI5IDAtMy41MTYuNjgtNC4xNjggMS4zMzItLjY3OC42NzgtLjgzIDEuNDE4LS44MzIgMS42NjR6TTkgMTNhMSAxIDAgMCAxIDEtMXYtMWEyIDIgMCAxIDEgNCAwdjFhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDFoLTRhMSAxIDAgMCAxLTEtMXptMy0zYTEgMSAwIDAgMC0xIDF2MWgydi0xYTEgMSAwIDAgMC0xLTEiLz4KPC9zdmc+)*/
const PersonLock: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-lock"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default PersonLock;
