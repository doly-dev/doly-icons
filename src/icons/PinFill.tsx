import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pin-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC4xNDYuMTQ2QS41LjUgMCAwIDEgNC41IDBoN2EuNS41IDAgMCAxIC41LjVjMCAuNjgtLjM0MiAxLjE3NC0uNjQ2IDEuNDc5LS4xMjYuMTI1LS4yNS4yMjQtLjM1NC4yOTh2NC40MzFsLjA3OC4wNDhjLjIwMy4xMjcuNDc2LjMxNC43NTEuNTU1QzEyLjM2IDcuNzc1IDEzIDguNTI3IDEzIDkuNWEuNS41IDAgMCAxLS41LjVoLTR2NC41YzAgLjI3Ni0uMjI0IDEuNS0uNSAxLjVzLS41LTEuMjI0LS41LTEuNVYxMGgtNGEuNS41IDAgMCAxLS41LS41YzAtLjk3My42NC0xLjcyNSAxLjE3LTIuMTg5QTYgNiAwIDAgMSA1IDYuNzA4VjIuMjc3YTMgMyAwIDAgMS0uMzU0LS4yOThDNC4zNDIgMS42NzQgNCAxLjE3OSA0IC41YS41LjUgMCAwIDEgLjE0Ni0uMzU0Ii8+Cjwvc3ZnPg==)*/
const PinFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pin-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354"/>
</svg>
      )}
    />
  );

export default PinFill;
