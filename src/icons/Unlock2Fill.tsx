import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![unlock2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBjMS4wNyAwIDIuMDQxLjQyIDIuNzU5IDEuMTA0bC4xNC4xNC4wNjIuMDhhLjUuNSAwIDAgMS0uNzEuNjc1bC0uMDc2LS4wNjYtLjIxNi0uMjA1QTMgMyAwIDAgMCA1IDR2Mmg2LjVBMi41IDIuNSAwIDAgMSAxNCA4LjV2NWEyLjUgMi41IDAgMCAxLTIuNSAyLjVoLTdBMi41IDIuNSAwIDAgMSAyIDEzLjV2LTVhMi41IDIuNSAwIDAgMSAyLTIuNDVWNGE0IDQgMCAwIDEgNC00Ii8+Cjwvc3ZnPg==)*/
const Unlock2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="unlock2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 0c1.07 0 2.041.42 2.759 1.104l.14.14.062.08a.5.5 0 0 1-.71.675l-.076-.066-.216-.205A3 3 0 0 0 5 4v2h6.5A2.5 2.5 0 0 1 14 8.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4"/>
</svg>
      )}
    />
  );

export default Unlock2Fill;
