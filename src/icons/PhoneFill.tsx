import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![phone-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAyYTIgMiAwIDAgMSAyLTJoNmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yem02IDExYTEgMSAwIDEgMC0yIDAgMSAxIDAgMCAwIDIgMCIvPgo8L3N2Zz4=)*/
const PhoneFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="phone-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>
      )}
    />
  );

export default PhoneFill;
