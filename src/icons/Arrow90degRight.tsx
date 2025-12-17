import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-90deg-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC44NTQgNC44NTRhLjUuNSAwIDAgMCAwLS43MDhsLTQtNGEuNS41IDAgMCAwLS43MDguNzA4TDEzLjI5MyA0SDMuNUEyLjUgMi41IDAgMCAwIDEgNi41djhhLjUuNSAwIDAgMCAxIDB2LThBMS41IDEuNSAwIDAgMSAzLjUgNWg5Ljc5M2wtMy4xNDcgMy4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOHoiLz4KPC9zdmc+)*/
const Arrow90degRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-90deg-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"/>
</svg>
      )}
    />
  );

export default Arrow90degRight;
