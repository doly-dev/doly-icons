import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stripe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptNi4yMjYgNS4zODVjLS41ODQgMC0uOTM3LjE2NC0uOTM3LjU5MyAwIC40NjguNjA3LjY3NCAxLjM2LjkzIDEuMjI4LjQxNSAyLjg0NC45NjMgMi44NTEgMi45OTNDMTEuNSAxMS44NjggOS45MjQgMTMgNy42MyAxM2E3LjcgNy43IDAgMCAxLTMuMDA5LS42MjZWOS43NThjLjkyNi41MDYgMi4wOTUuODggMy4wMS44OC42MTcgMCAxLjA1OC0uMTY1IDEuMDU4LS42NzEgMC0uNTE4LS42NTgtLjc1NS0xLjQ1My0xLjA0MUM2LjAyNiA4LjQ5IDQuNSA3Ljk0IDQuNSA2LjExIDQuNSA0LjE2NSA1Ljk4OCAzIDguMjI2IDNhNy4zIDcuMyAwIDAgMSAyLjczNC41MDV2Mi41ODNjLS44MzgtLjQ1LTEuODk2LS43MDMtMi43MzQtLjcwMyIvPgo8L3N2Zz4=)*/
const Stripe: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stripe"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.226 5.385c-.584 0-.937.164-.937.593 0 .468.607.674 1.36.93 1.228.415 2.844.963 2.851 2.993C11.5 11.868 9.924 13 7.63 13a7.7 7.7 0 0 1-3.009-.626V9.758c.926.506 2.095.88 3.01.88.617 0 1.058-.165 1.058-.671 0-.518-.658-.755-1.453-1.041C6.026 8.49 4.5 7.94 4.5 6.11 4.5 4.165 5.988 3 8.226 3a7.3 7.3 0 0 1 2.734.505v2.583c-.838-.45-1.896-.703-2.734-.703"/>
</svg>
      )}
    />
  );

export default Stripe;
