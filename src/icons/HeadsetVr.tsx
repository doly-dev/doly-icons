import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![headset-vr](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxLjI0OGMxLjg1NyAwIDMuNTI2LjY0MSA0LjY1IDEuNzk0YTUgNSAwIDAgMSAyLjUxOCAxLjA5QzEzLjkwNyAxLjQ4MiAxMS4yOTUgMCA4IDAgNC43NSAwIDIuMTIgMS40OC44NDQgNC4xMjJhNSA1IDAgMCAxIDIuMjg5LTEuMDQ3QzQuMjM2IDEuODcyIDUuOTc0IDEuMjQ4IDggMS4yNDgiLz4KICA8cGF0aCBkPSJNMTIgMTJhNCA0IDAgMCAxLTIuNzg2LTEuMTNsLS4wMDItLjAwMmExLjYgMS42IDAgMCAwLS4yNzYtLjE2N0EyLjIgMi4yIDAgMCAwIDggMTAuNWMtLjQxNCAwLS43MjkuMTAzLS45MzUuMjAxYTEuNiAxLjYgMCAwIDAtLjI3Ny4xNjdsLS4wMDIuMDAyQTQgNCAwIDEgMSA0IDRoOGE0IDQgMCAwIDEgMCA4Ii8+Cjwvc3ZnPg==)*/
const HeadsetVr: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="headset-vr"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1.248c1.857 0 3.526.641 4.65 1.794a5 5 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a5 5 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248"/>
  <path d="M12 12a4 4 0 0 1-2.786-1.13l-.002-.002a1.6 1.6 0 0 0-.276-.167A2.2 2.2 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.6 1.6 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8"/>
</svg>
      )}
    />
  );

export default HeadsetVr;
