import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![broadcast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy4wNSAzLjA1YTcgNyAwIDAgMCAwIDkuOS41LjUgMCAwIDEtLjcwNy43MDcgOCA4IDAgMCAxIDAtMTEuMzE0LjUuNSAwIDAgMSAuNzA3LjcwN20yLjEyMiAyLjEyMmE0IDQgMCAwIDAgMCA1LjY1Ni41LjUgMCAxIDEtLjcwOC43MDggNSA1IDAgMCAxIDAtNy4wNzIuNS41IDAgMCAxIC43MDguNzA4bTUuNjU2LS43MDhhLjUuNSAwIDAgMSAuNzA4IDAgNSA1IDAgMCAxIDAgNy4wNzIuNS41IDAgMSAxLS43MDgtLjcwOCA0IDQgMCAwIDAgMC01LjY1Ni41LjUgMCAwIDEgMC0uNzA4bTIuMTIyLTIuMTJhLjUuNSAwIDAgMSAuNzA3IDAgOCA4IDAgMCAxIDAgMTEuMzEzLjUuNSAwIDAgMS0uNzA3LS43MDcgNyA3IDAgMCAwIDAtOS45LjUuNSAwIDAgMSAwLS43MDd6TTEwIDhhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwIi8+Cjwvc3ZnPg==)*/
const Broadcast: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="broadcast"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
      )}
    />
  );

export default Broadcast;
