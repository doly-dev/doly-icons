import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![backpack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC4wNCA3LjQzYTQgNCAwIDAgMSA3LjkyIDAgLjUuNSAwIDEgMS0uOTkuMTQgMyAzIDAgMCAwLTUuOTQgMCAuNS41IDAgMSAxLS45OS0uMTRNNCA5LjVhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgLjUuNXY0YS41LjUgMCAwIDEtLjUuNWgtN2EuNS41IDAgMCAxLS41LS41em0xIC41djNoNnYtM2gtMXYuNWEuNS41IDAgMCAxLTEgMFYxMHoiLz4KICA8cGF0aCBkPSJNNiAyLjM0MVYyYTIgMiAwIDEgMSA0IDB2LjM0MWMyLjMzLjgyNCA0IDMuMDQ3IDQgNS42NTl2NS41YTIuNSAyLjUgMCAwIDEtMi41IDIuNWgtN0EyLjUgMi41IDAgMCAxIDIgMTMuNVY4YTYgNiAwIDAgMSA0LTUuNjU5TTcgMnYuMDgzYTYgNiAwIDAgMSAyIDBWMmExIDEgMCAwIDAtMiAwbTEgMWE1IDUgMCAwIDAtNSA1djUuNUExLjUgMS41IDAgMCAwIDQuNSAxNWg3YTEuNSAxLjUgMCAwIDAgMS41LTEuNVY4YTUgNSAwIDAgMC01LTUiLz4KPC9zdmc+)*/
const Backpack: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="backpack"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
  <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"/>
</svg>
      )}
    />
  );

export default Backpack;
