import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![currency-euro](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA5LjQyaDEuMDYzQzUuNCAxMi4zMjMgNy4zMTcgMTQgMTAuMzQgMTRjLjYyMiAwIDEuMTY3LS4wNjggMS42NTktLjE4NXYtMS4zYy0uNDg0LjExOS0xLjA0NS4xNy0xLjY1OS4xNy0yLjEgMC0zLjQ1NS0xLjE5OC0zLjc3NS0zLjI2NGg0LjAxN3YtLjkyOEg2LjQ5N3YtLjkzNnEtLjAwMi0uMTY1LjAwOC0uMzI5aDQuMDc4di0uOTI3SDYuNjE4Yy4zODgtMS44OTggMS43MTktMi45ODUgMy43MjMtMi45ODUuNjE0IDAgMS4xNzUuMDUgMS42NTkuMTc3VjIuMTk0QTYuNiA2LjYgMCAwIDAgMTAuMzQxIDJjLTIuOTI4IDAtNC44MiAxLjU2OS01LjI0NCA0LjNINHYuOTI4aDEuMDF2MS4yNjVINHYuOTI4eiIvPgo8L3N2Zz4=)*/
const CurrencyEuro: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="currency-euro"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/>
</svg>
      )}
    />
  );

export default CurrencyEuro;
