import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suitcase-lg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAyYTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAyaDMuNUExLjUgMS41IDAgMCAxIDE2IDMuNXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNUgxNGEuNS41IDAgMCAxLTEgMEgzYS41LjUgMCAwIDEtMSAwaC0uNUExLjUgMS41IDAgMCAxIDAgMTIuNXYtOUExLjUgMS41IDAgMCAxIDEuNSAyem0xIDBoNGExIDEgMCAwIDAtMS0xSDdhMSAxIDAgMCAwLTEgMU0xLjUgM2EuNS41IDAgMCAwLS41LjV2OWEuNS41IDAgMCAwIC41LjVIM1Yzek0xNSAxMi41di05YS41LjUgMCAwIDAtLjUtLjVIMTN2MTBoMS41YS41LjUgMCAwIDAgLjUtLjVtLTMgLjVWM0g0djEweiIvPgo8L3N2Zz4=)*/
const SuitcaseLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suitcase-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z"/>
</svg>
      )}
    />
  );

export default SuitcaseLg;
