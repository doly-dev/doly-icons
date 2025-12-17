import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![joystick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAgMmEyIDIgMCAwIDEtMS41IDEuOTM3djUuMDg3Yy44NjMuMDgzIDEuNS4zNzcgMS41LjcyNiAwIC40MTQtLjg5NS43NS0yIC43NXMtMi0uMzM2LTItLjc1YzAtLjM1LjYzNy0uNjQzIDEuNS0uNzI2VjMuOTM3QTIgMiAwIDEgMSAxMCAyIi8+CiAgPHBhdGggZD0iTTAgOS42NjV2MS43MTdhMSAxIDAgMCAwIC41NTMuODk0bDYuNTUzIDMuMjc3YTIgMiAwIDAgMCAxLjc4OCAwbDYuNTUzLTMuMjc3YTEgMSAwIDAgMCAuNTUzLS44OTRWOS42NjVjMC0uMS0uMDYtLjE5LS4xNTItLjIzTDkuNSA2LjcxNXYuOTkzbDUuMjI3IDIuMTc4YS4xMjUuMTI1IDAgMCAxIC4wMDEuMjNsLTUuOTQgMi41NDZhMiAyIDAgMCAxLTEuNTc2IDBsLTUuOTQtMi41NDZhLjEyNS4xMjUgMCAwIDEgLjAwMS0uMjNMNi41IDcuNzA4bC0uMDEzLS45ODhMLjE1MiA5LjQzNWEuMjUuMjUgMCAwIDAtLjE1Mi4yMyIvPgo8L3N2Zz4=)*/
const Joystick: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="joystick"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2"/>
  <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23"/>
</svg>
      )}
    />
  );

export default Joystick;
