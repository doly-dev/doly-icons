import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![passport-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA2YTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNCIvPgogIDxwYXRoIGQ9Ik0yIDMuMjUyYTEuNSAxLjUgMCAwIDEgMS4yMzItMS40NzZsOC0xLjQ1NEExLjUgMS41IDAgMCAxIDEzIDEuNzk3di40N0EyIDIgMCAwIDEgMTQgNHYxMGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTEuNTEtLjY4OCAxLjUgMS41IDAgMCAxLS40OS0xLjExVjMuMjUzWk01IDhhMyAzIDAgMSAwIDYgMCAzIDMgMCAwIDAtNiAwbTAgNC41YS41LjUgMCAwIDAgLjUuNWg1YS41LjUgMCAwIDAgMC0xaC01YS41LjUgMCAwIDAtLjUuNSIvPgo8L3N2Zz4=)*/
const PassportFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="passport-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
  <path d="M2 3.252a1.5 1.5 0 0 1 1.232-1.476l8-1.454A1.5 1.5 0 0 1 13 1.797v.47A2 2 0 0 1 14 4v10a2 2 0 0 1-2 2H4a2 2 0 0 1-1.51-.688 1.5 1.5 0 0 1-.49-1.11V3.253ZM5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 4.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default PassportFill;
