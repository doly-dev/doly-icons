import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![currency-rupee](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAzLjA2aDIuNzI2YzEuMjIgMCAyLjEyLjU3NSAyLjMyNSAxLjcyNEg0djEuMDUxaDUuMDUxQzguODU1IDcuMDAxIDggNy41NTggNi43ODggNy41NThINHYxLjMxN0w4LjQzNyAxNGgyLjExTDYuMDk1IDguODg0aC44NTVjMi4zMTYtLjAxOCAzLjQ2NS0xLjQ3NiAzLjY4OC0zLjA0OUgxMlY0Ljc4NGgtMS4zNDVjLS4wOC0uNzc4LS4zNTctMS4zMzUtLjc5My0xLjczMkgxMlYySDR6Ii8+Cjwvc3ZnPg==)*/
const CurrencyRupee: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="currency-rupee"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>
      )}
    />
  );

export default CurrencyRupee;
