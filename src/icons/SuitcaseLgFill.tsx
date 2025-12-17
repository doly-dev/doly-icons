import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suitcase-lg-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAwYTIgMiAwIDAgMC0yIDJIMS41QTEuNSAxLjUgMCAwIDAgMCAzLjV2OUExLjUgMS41IDAgMCAwIDEuNSAxNEgyYS41LjUgMCAwIDAgMSAwaDEwYS41LjUgMCAwIDAgMSAwaC41YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOUExLjUgMS41IDAgMCAwIDE0LjUgMkgxMWEyIDIgMCAwIDAtMi0yek02IDJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF6TTMgMTNWM2gxdjEwem05IDBWM2gxdjEweiIvPgo8L3N2Zz4=)*/
const SuitcaseLgFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suitcase-lg-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
</svg>
      )}
    />
  );

export default SuitcaseLgFill;
