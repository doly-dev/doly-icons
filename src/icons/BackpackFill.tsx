import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![backpack-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAxM3YtM2g0di41YS41LjUgMCAwIDAgMSAwVjEwaDF2M3oiLz4KICA8cGF0aCBkPSJNNiAydi4zNDFDMy42NyAzLjE2NSAyIDUuMzg4IDIgOHY1LjVBMi41IDIuNSAwIDAgMCA0LjUgMTZoN2EyLjUgMi41IDAgMCAwIDIuNS0yLjVWOGE2IDYgMCAwIDAtNC01LjY1OVYyYTIgMiAwIDEgMC00IDBtMi0xYTEgMSAwIDAgMSAxIDF2LjA4M2E2IDYgMCAwIDAtMiAwVjJhMSAxIDAgMCAxIDEtMW0wIDNhNCA0IDAgMCAxIDMuOTYgMy40My41LjUgMCAxIDEtLjk5LjE0IDMgMyAwIDAgMC01Ljk0IDAgLjUuNSAwIDEgMS0uOTktLjE0QTQgNCAwIDAgMSA4IDRNNC41IDloN2EuNS41IDAgMCAxIC41LjV2NGEuNS41IDAgMCAxLS41LjVoLTdhLjUuNSAwIDAgMS0uNS0uNXYtNGEuNS41IDAgMCAxIC41LS41Ii8+Cjwvc3ZnPg==)*/
const BackpackFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="backpack-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
  <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default BackpackFill;
