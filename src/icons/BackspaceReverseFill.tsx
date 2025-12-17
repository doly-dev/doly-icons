import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![backspace-reverse-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAzYTIgMiAwIDAgMSAyLTJoNy4wOGEyIDIgMCAwIDEgMS41MTkuNjk4bDQuODQzIDUuNjUxYTEgMSAwIDAgMSAwIDEuMzAyTDEwLjYgMTQuM2EyIDIgMCAwIDEtMS41Mi43SDJhMiAyIDAgMCAxLTItMnptOS44NTQgMi44NTRhLjUuNSAwIDAgMC0uNzA4LS43MDhMNyA3LjI5MyA0Ljg1NCA1LjE0NmEuNS41IDAgMSAwLS43MDguNzA4TDYuMjkzIDhsLTIuMTQ3IDIuMTQ2YS41LjUgMCAwIDAgLjcwOC43MDhMNyA4LjcwN2wyLjE0NiAyLjE0N2EuNS41IDAgMCAwIC43MDgtLjcwOEw3LjcwNyA4eiIvPgo8L3N2Zz4=)*/
const BackspaceReverseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="backspace-reverse-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8z"/>
</svg>
      )}
    />
  );

export default BackspaceReverseFill;
