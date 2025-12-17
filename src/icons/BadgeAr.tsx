import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-ar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMy43OTQgMTEgLjQ3LTEuNTQySDYuMjdMNi43MzkgMTFIOEw1Ljk5NiA1LjAwMUg0LjYwN0wyLjU5NSAxMXptMS41MDMtNC44NTIuNzM0IDIuNDI2aC0xLjUybC43MzQtMi40MjZ6bTUuNTk4LTEuMTQ3SDguNVYxMWgxLjE3M1Y4Ljc2M2gxLjA2NEwxMS43ODcgMTFoMS4zMjdMMTEuOTEgOC41ODNDMTIuNDU1IDguMzczIDEzIDcuNzc5IDEzIDYuOWMwLTEuMTQ3LS43NzMtMS45LTIuMTA1LTEuOXptLTEuMjIyIDIuODdWNS45MzNoMS4wNWMuNjMgMCAxLjA1LjM0NyAxLjA1Ljk4OSAwIC42MzMtLjQwOC45NS0xLjA2Ny45NXoiLz4KICA8cGF0aCBkPSJNMTQgM2ExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xek0yIDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6Ii8+Cjwvc3ZnPg==)*/
const BadgeAr: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-ar"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m3.794 11 .47-1.542H6.27L6.739 11H8L5.996 5.001H4.607L2.595 11zm1.503-4.852.734 2.426h-1.52l.734-2.426zm5.598-1.147H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95z"/>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default BadgeAr;
