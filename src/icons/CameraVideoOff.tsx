import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![camera-video-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC45NjEgMTIuMzY1YTIgMiAwIDAgMCAuNTIyLTEuMTAzbDMuMTEgMS4zODJBMSAxIDAgMCAwIDE2IDExLjczMVY0LjI2OWExIDEgMCAwIDAtMS40MDYtLjkxM2wtMy4xMTEgMS4zODJBMiAyIDAgMCAwIDkuNSAzSDQuMjcybC43MTQgMUg5LjVhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0uMTQ0LjUxOHpNMS40MjggNC4xOEExIDEgMCAwIDAgMSA1djZhMSAxIDAgMCAwIDEgMWg1LjAxNGwuNzE0IDFIMmEyIDIgMCAwIDEtMi0yVjVjMC0uNjc1LjMzNC0xLjI3Mi44NDctMS42MzR6TTE1IDExLjczbC0zLjUtMS41NTV2LTQuMzVMMTUgNC4yNjl6bS00LjQwNyAzLjU2LTEwLTE0IC44MTQtLjU4IDEwIDE0eiIvPgo8L3N2Zz4=)*/
const CameraVideoOff: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="camera-video-off"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518zM1.428 4.18A1 1 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634zM15 11.73l-3.5-1.555v-4.35L15 4.269zm-4.407 3.56-10-14 .814-.58 10 14z"/>
</svg>
      )}
    />
  );

export default CameraVideoOff;
