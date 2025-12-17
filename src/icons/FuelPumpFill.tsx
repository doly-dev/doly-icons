import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fuel-pump-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAyYTIgMiAwIDAgMSAyLTJoNmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxIDIgMnYuNWEuNS41IDAgMCAwIDEgMFY4aC0uNWEuNS41IDAgMCAxLS41LS41VjQuMzc1YS41LjUgMCAwIDEgLjUtLjVoMS40OTVjLS4wMTEtLjQ3Ni0uMDUzLS44OTQtLjIwMS0xLjIyMmEuOTcuOTcgMCAwIDAtLjM5NC0uNDU4Yy0uMTg0LS4xMS0uNDY0LS4xOTUtLjktLjE5NWEuNS41IDAgMCAxIDAtMXEuODQ2LS4wMDIgMS40MTIuMzM2Yy4zODMuMjI4LjYzNC41NTEuNzk0LjkwNy4yOTUuNjU1LjI5NCAxLjQ2NS4yOTQgMi4wODFWNy41YS41LjUgMCAwIDEtLjUuNUgxNXY0LjVhMS41IDEuNSAwIDAgMS0zIDBWMTJhMSAxIDAgMCAwLTEtMXY0aC41YS41LjUgMCAwIDEgMCAxSC41YS41LjUgMCAwIDEgMC0xSDF6bTIuNSAwYS41LjUgMCAwIDAtLjUuNXY1YS41LjUgMCAwIDAgLjUuNWg1YS41LjUgMCAwIDAgLjUtLjV2LTVhLjUuNSAwIDAgMC0uNS0uNXoiLz4KPC9zdmc+)*/
const FuelPumpFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fuel-pump-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default FuelPumpFill;
