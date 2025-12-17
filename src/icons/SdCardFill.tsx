import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sd-card-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSAwSDUuOTE0YTEuNSAxLjUgMCAwIDAtMS4wNi40NEwyLjQzOSAyLjg1M0ExLjUgMS41IDAgMCAwIDIgMy45MTRWMTQuNUExLjUgMS41IDAgMCAwIDMuNSAxNmg5YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTNBMS41IDEuNSAwIDAgMCAxMi41IDBtLTcgMi43NWEuNzUuNzUgMCAwIDEgLjc1Ljc1djJhLjc1Ljc1IDAgMCAxLTEuNSAwdi0yYS43NS43NSAwIDAgMSAuNzUtLjc1bTIgMGEuNzUuNzUgMCAwIDEgLjc1Ljc1djJhLjc1Ljc1IDAgMCAxLTEuNSAwdi0yYS43NS43NSAwIDAgMSAuNzUtLjc1bTIuNzUuNzV2MmEuNzUuNzUgMCAwIDEtMS41IDB2LTJhLjc1Ljc1IDAgMCAxIDEuNSAwbTEuMjUtLjc1YS43NS43NSAwIDAgMSAuNzUuNzV2MmEuNzUuNzUgMCAwIDEtMS41IDB2LTJhLjc1Ljc1IDAgMCAxIC43NS0uNzUiLz4KPC9zdmc+)*/
const SdCardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sd-card-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 0H5.914a1.5 1.5 0 0 0-1.06.44L2.439 2.853A1.5 1.5 0 0 0 2 3.914V14.5A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0m-7 2.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m2 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m2.75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0m1.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"/>
</svg>
      )}
    />
  );

export default SdCardFill;
