import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IC41YS41LjUgMCAwIDAtMSAwVjFIMmEyIDIgMCAwIDAtMiAydjExYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYzYTIgMiAwIDAgMC0yLTJoLTFWLjVhLjUuNSAwIDAgMC0xIDBWMUg0ek0xIDNhMSAxIDAgMCAxIDEtMWgxMmExIDEgMCAwIDEgMSAxdjExYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xem0yIC41YS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNWgxMGEuNS41IDAgMCAwIC41LS41VjRhLjUuNSAwIDAgMC0uNS0uNXptNSA0LjQ5M2MxLjY2NC0xLjcxMSA1LjgyNSAxLjI4MyAwIDUuMTMyLTUuODI1LTMuODUtMS42NjQtNi44NDMgMC01LjEzMiIvPgo8L3N2Zz4=)*/
const Calendar2Heart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default Calendar2Heart;
