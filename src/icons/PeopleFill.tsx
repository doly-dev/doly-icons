import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![people-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAxNHMtMSAwLTEtMSAxLTQgNS00IDUgMyA1IDQtMSAxLTEgMXptNC02YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNm0tNS43ODQgNkEyLjI0IDIuMjQgMCAwIDEgNSAxM2MwLTEuMzU1LjY4LTIuNzUgMS45MzYtMy43MkE2LjMgNi4zIDAgMCAwIDUgOWMtNCAwLTUgMy01IDRzMSAxIDEgMXpNNC41IDhhMi41IDIuNSAwIDEgMCAwLTUgMi41IDIuNSAwIDAgMCAwIDUiLz4KPC9zdmc+)*/
const PeopleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="people-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
      )}
    />
  );

export default PeopleFill;
