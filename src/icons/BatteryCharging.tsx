import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![battery-charging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41ODUgMi41NjhhLjUuNSAwIDAgMSAuMjI2LjU4TDguNjc3IDYuODMyaDEuOTlhLjUuNSAwIDAgMSAuMzY0Ljg0M2wtNS4zMzQgNS42NjdhLjUuNSAwIDAgMS0uODQyLS40OUw1Ljk5IDkuMTY3SDRhLjUuNSAwIDAgMS0uMzY0LS44NDNsNS4zMzMtNS42NjdhLjUuNSAwIDAgMSAuNjE2LS4wOXoiLz4KICA8cGF0aCBkPSJNMiA0aDQuMzMybC0uOTQgMUgyYTEgMSAwIDAgMC0xIDF2NGExIDEgMCAwIDAgMSAxaDIuMzhsLS4zMDggMUgyYTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yIi8+CiAgPHBhdGggZD0iTTIgNmgyLjQ1TDIuOTA4IDcuNjM5QTEuNSAxLjUgMCAwIDAgMy4zMTMgMTBIMnptOC41OTUtMi0uMzA4IDFIMTJhMSAxIDAgMCAxIDEgMXY0YTEgMSAwIDAgMS0xIDFIOS4yNzZsLS45NDIgMUgxMmEyIDIgMCAwIDAgMi0yVjZhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNMTIgMTBoLTEuNzgzbDEuNTQyLTEuNjM5cS4xNDYtLjE1Ni4yNDEtLjM0em0wLTMuMzU0VjZoLS42NDZhMS41IDEuNSAwIDAgMSAuNjQ2LjY0Nk0xNiA4YTEuNSAxLjUgMCAwIDEtMS41IDEuNXYtM0ExLjUgMS41IDAgMCAxIDE2IDgiLz4KPC9zdmc+)*/
const BatteryCharging: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="battery-charging"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>
  <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>
  <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
  <path d="M12 10h-1.783l1.542-1.639q.146-.156.241-.34zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646M16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
</svg>
      )}
    />
  );

export default BatteryCharging;
