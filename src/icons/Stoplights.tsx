import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stoplights](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA1YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzbTAgNGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM20xLjUgMi41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwIi8+CiAgPHBhdGggZD0iTTQgMmEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMmgyYy0uMTY3LjUtLjggMS42LTIgMnYyaDJjLS4xNjcuNS0uOCAxLjYtMiAydjJoMmMtLjE2Ny41LS44IDEuNi0yIDJ2MWEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMnYtMWMtMS4yLS40LTEuODMzLTEuNS0yLTJoMlY4Yy0xLjItLjQtMS44MzMtMS41LTItMmgyVjRjLTEuMi0uNC0xLjgzMy0xLjUtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXYxMWExIDEgMCAwIDAgMSAxaDRhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==)*/
const Stoplights: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stoplights"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c-1.2-.4-1.833-1.5-2-2h2V8c-1.2-.4-1.833-1.5-2-2h2V4c-1.2-.4-1.833-1.5-2-2zm2-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default Stoplights;
