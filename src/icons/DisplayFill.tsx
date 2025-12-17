import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![display-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxMnEwIDEtLjI1IDEuNUg1YS41LjUgMCAwIDAgMCAxaDZhLjUuNSAwIDAgMCAwLTFoLS43NVExMCAxMyAxMCAxMmg0YzIgMCAyLTIgMi0yVjRjMC0yLTItMi0yLTJIMkMwIDIgMCA0IDAgNHY2YzAgMiAyIDIgMiAyeiIvPgo8L3N2Zz4=)*/
const DisplayFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="display-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 12q0 1-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75Q10 13 10 12h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2z"/>
</svg>
      )}
    />
  );

export default DisplayFill;
