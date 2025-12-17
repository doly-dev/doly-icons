import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![airplane-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi40MjggMS4xNTFDNi43MDguNTkxIDcuMjEzIDAgOCAwczEuMjkyLjU5MiAxLjU3MiAxLjE1MUM5Ljg2MSAxLjczIDEwIDIuNDMxIDEwIDN2My42OTFsNS4xNyAyLjU4NWExLjUgMS41IDAgMCAxIC44MyAxLjM0MlYxMmEuNS41IDAgMCAxLS41ODIuNDkzbC01LjUwNy0uOTE4LS4zNzUgMi4yNTMgMS4zMTggMS4zMThBLjUuNSAwIDAgMSAxMC41IDE2aC01YS41LjUgMCAwIDEtLjM1NC0uODU0bDEuMzE5LTEuMzE4LS4zNzYtMi4yNTMtNS41MDcuOTE4QS41LjUgMCAwIDEgMCAxMnYtMS4zODJhMS41IDEuNSAwIDAgMSAuODMtMS4zNDJMNiA2LjY5MVYzYzAtLjU2OC4xNC0xLjI3MS40MjgtMS44NDkiLz4KPC9zdmc+)*/
const AirplaneFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="airplane-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849"/>
</svg>
      )}
    />
  );

export default AirplaneFill;
