import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![camera-video-off-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC45NjEgMTIuMzY1YTIgMiAwIDAgMCAuNTIyLTEuMTAzbDMuMTEgMS4zODJBMSAxIDAgMCAwIDE2IDExLjczMVY0LjI2OWExIDEgMCAwIDAtMS40MDYtLjkxM2wtMy4xMTEgMS4zODJBMiAyIDAgMCAwIDkuNSAzSDQuMjcyem0tMTAuMTE0LTlBMiAyIDAgMCAwIDAgNXY2YTIgMiAwIDAgMCAyIDJoNS43Mjh6bTkuNzQ2IDExLjkyNS0xMC0xNCAuODE0LS41OCAxMCAxNHoiLz4KPC9zdmc+)*/
const CameraVideoOffFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="camera-video-off-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272zm-10.114-9A2 2 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728zm9.746 11.925-10-14 .814-.58 10 14z"/>
</svg>
      )}
    />
  );

export default CameraVideoOffFill;
