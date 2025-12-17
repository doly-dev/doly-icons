import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![p-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTUuNSA0LjAwMlYxMmgxLjI4M1Y5LjE2NGgxLjY2OEMxMC4wMzMgOS4xNjQgMTEgOC4wOCAxMSA2LjU4NmMwLTEuNDgyLS45NTUtMi41ODQtMi41MzgtMi41ODR6bTIuNzcgNC4wNzJjLjg5MyAwIDEuNDE5LS41NDUgMS40MTktMS40ODhzLS41MjYtMS40ODItMS40Mi0xLjQ4Mkg2Ljc3OHYyLjk3eiIvPgo8L3N2Zz4=)*/
const PCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="p-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002V12h1.283V9.164h1.668C10.033 9.164 11 8.08 11 6.586c0-1.482-.955-2.584-2.538-2.584zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z"/>
</svg>
      )}
    />
  );

export default PCircleFill;
