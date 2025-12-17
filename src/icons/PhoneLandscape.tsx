import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![phone-landscape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA0LjVhMSAxIDAgMCAxIDEtMWgxMmExIDEgMCAwIDEgMSAxdjZhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTF6bS0xIDZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJIMmEyIDIgMCAwIDAtMiAyeiIvPgogIDxwYXRoIGQ9Ik0xNCA3LjVhMSAxIDAgMSAwLTIgMCAxIDEgMCAwIDAgMiAwIi8+Cjwvc3ZnPg==)*/
const PhoneLandscape: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="phone-landscape"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2z"/>
  <path d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>
      )}
    />
  );

export default PhoneLandscape;
