import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![device-hdd-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43ODUgOS44OTZBMy4wMDEgMy4wMDEgMCAwIDAgOCA0YTMgMyAwIDAgMC0uODkxIDUuODY1Yy42NjctLjQ0IDEuMzk2LS45MSAxLjk1NS0xLjI2OC4yMjQtLjE0NC40ODMuMTE1LjM0LjM0ek05IDdhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwIi8+CiAgPHBhdGggZD0iTTQgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptOSAxLjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtMCAxM2EuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0tOS41LjVhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFNNCAxLjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtMi44ODIgMTEuMTc3YTEuMTAyIDEuMTAyIDAgMCAxLTEuNTYtMS41NTljLjEtLjA5OC4zOTYtLjMxNC43OTUtLjU4OGE0IDQgMCAxIDEgMS45NDYuNDdjLS41MzcuODEzLTEuMDIgMS41MTUtMS4xODEgMS42NzciLz4KPC9zdmc+)*/
const DeviceHddFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="device-hdd-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.785 9.896A3.001 3.001 0 0 0 8 4a3 3 0 0 0-.891 5.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34zM9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm9 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-9.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.882 11.177a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588a4 4 0 1 1 1.946.47c-.537.813-1.02 1.515-1.181 1.677"/>
</svg>
      )}
    />
  );

export default DeviceHddFill;
