import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![smartwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSA1YS41LjUgMCAwIDAtMSAwdjNINmEuNS41IDAgMCAwIDAgMWgyLjVhLjUuNSAwIDAgMCAuNS0uNXoiLz4KICA8cGF0aCBkPSJNNCAxLjY2N3YuMzgzQTIuNSAyLjUgMCAwIDAgMiA0LjV2N2EyLjUgMi41IDAgMCAwIDIgMi40NXYuMzgzQzQgMTUuMjUzIDQuNzQ2IDE2IDUuNjY3IDE2aDQuNjY2Yy45MiAwIDEuNjY3LS43NDYgMS42NjctMS42Njd2LS4zODNhMi41IDIuNSAwIDAgMCAyLTIuNDVWOGguNWEuNS41IDAgMCAwIC41LS41di0yYS41LjUgMCAwIDAtLjUtLjVIMTR2LS41YTIuNSAyLjUgMCAwIDAtMi0yLjQ1di0uMzgzQzEyIC43NDcgMTEuMjU0IDAgMTAuMzMzIDBINS42NjdDNC43NDcgMCA0IC43NDYgNCAxLjY2N000LjUgM2g3QTEuNSAxLjUgMCAwIDEgMTMgNC41djdhMS41IDEuNSAwIDAgMS0xLjUgMS41aC03QTEuNSAxLjUgMCAwIDEgMyAxMS41di03QTEuNSAxLjUgMCAwIDEgNC41IDMiLz4KPC9zdmc+)*/
const Smartwatch: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="smartwatch"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/>
  <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/>
</svg>
      )}
    />
  );

export default Smartwatch;
