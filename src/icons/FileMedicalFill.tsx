import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-medical-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTguNSA0LjV2LjYzNGwuNTQ5LS4zMTdhLjUuNSAwIDEgMSAuNS44NjZMOSA2bC41NDkuMzE3YS41LjUgMCAxIDEtLjUuODY2TDguNSA2Ljg2NlY3LjVhLjUuNSAwIDAgMS0xIDB2LS42MzRsLS41NDkuMzE3YS41LjUgMCAxIDEtLjUtLjg2Nkw3IDZsLS41NDktLjMxN2EuNS41IDAgMCAxIC41LS44NjZsLjU0OS4zMTdWNC41YS41LjUgMCAxIDEgMSAwTTUuNSA5aDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMSAwLTFtMCAyaDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMSAwLTEiLz4KPC9zdmc+)*/
const FileMedicalFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-medical-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8.5 4.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5a.5.5 0 1 1 1 0M5.5 9h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default FileMedicalFill;
