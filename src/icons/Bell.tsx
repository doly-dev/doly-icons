import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNmEyIDIgMCAwIDAgMi0ySDZhMiAyIDAgMCAwIDIgMk04IDEuOTE4bC0uNzk3LjE2MUE0IDQgMCAwIDAgNCA2YzAgLjYyOC0uMTM0IDIuMTk3LS40NTkgMy43NDItLjE2Ljc2Ny0uMzc2IDEuNTY2LS42NjMgMi4yNThoMTAuMjQ0Yy0uMjg3LS42OTItLjUwMi0xLjQ5LS42NjMtMi4yNThDMTIuMTM0IDguMTk3IDEyIDYuNjI4IDEyIDZhNCA0IDAgMCAwLTMuMjAzLTMuOTJ6TTE0LjIyIDEyYy4yMjMuNDQ3LjQ4MS44MDEuNzggMUgxYy4yOTktLjE5OS41NTctLjU1My43OC0xQzIuNjggMTAuMiAzIDYuODggMyA2YzAtMi40MiAxLjcyLTQuNDQgNC4wMDUtNC45MDFhMSAxIDAgMSAxIDEuOTkgMEE1IDUgMCAwIDEgMTMgNmMwIC44OC4zMiA0LjIgMS4yMiA2Ii8+Cjwvc3ZnPg==)*/
const Bell: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bell"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
      )}
    />
  );

export default Bell;
