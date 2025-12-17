import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![eyeglasses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA2YTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNG0yLjYyNS41NDdhMyAzIDAgMCAwLTUuNTg0Ljk1M0guNWEuNS41IDAgMCAwIDAgMWguNTQxQTMgMyAwIDAgMCA3IDhhMSAxIDAgMCAxIDIgMCAzIDMgMCAwIDAgNS45NTkuNWguNTQxYS41LjUgMCAwIDAgMC0xaC0uNTQxYTMgMyAwIDAgMC01LjU4NC0uOTUzQTIgMiAwIDAgMCA4IDZjLS41MzIgMC0xLjAxNi4yMDgtMS4zNzUuNTQ3TTE0IDhhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwIi8+Cjwvc3ZnPg==)*/
const Eyeglasses: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="eyeglasses"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
      )}
    />
  );

export default Eyeglasses;
