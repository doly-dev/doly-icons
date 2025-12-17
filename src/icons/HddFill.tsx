import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMGEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptMi41IDFhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFtMiAwYS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxTS45MSA3LjIwNEEzIDMgMCAwIDEgMiA3aDEyYy4zODQgMCAuNzUyLjA3MiAxLjA5LjIwNGwtMS44NjctMy40MjJBMS41IDEuNSAwIDAgMCAxMS45MDYgM0g0LjA5NGExLjUgMS41IDAgMCAwLTEuMzE3Ljc4MnoiLz4KPC9zdmc+)*/
const HddFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M.91 7.204A3 3 0 0 1 2 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0 0 11.906 3H4.094a1.5 1.5 0 0 0-1.317.782z"/>
</svg>
      )}
    />
  );

export default HddFill;
