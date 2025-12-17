import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-in-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjYzNiAyLjVhLjUuNSAwIDAgMC0uNS0uNUgyLjVBMS41IDEuNSAwIDAgMCAxIDMuNXYxMEExLjUgMS41IDAgMCAwIDIuNSAxNWgxMGExLjUgMS41IDAgMCAwIDEuNS0xLjVWNi44NjRhLjUuNSAwIDAgMC0xIDBWMTMuNWEuNS41IDAgMCAxLS41LjVoLTEwYS41LjUgMCAwIDEtLjUtLjV2LTEwYS41LjUgMCAwIDEgLjUtLjVoNi42MzZhLjUuNSAwIDAgMCAuNS0uNSIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMTAuNWEuNS41IDAgMCAwIC41LjVoNWEuNS41IDAgMCAwIDAtMUg2LjcwN2w4LjE0Ny04LjE0NmEuNS41IDAgMCAwLS43MDgtLjcwOEw2IDkuMjkzVjUuNWEuNS41IDAgMCAwLTEgMHoiLz4KPC9zdmc+)*/
const BoxArrowInDownLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-in-down-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fillRule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0z"/>
</svg>
      )}
    />
  );

export default BoxArrowInDownLeft;
