import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suit-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAxYzIuMjEgMCA0IDEuNzU1IDQgMy45MkM4IDIuNzU1IDkuNzkgMSAxMiAxczQgMS43NTUgNCAzLjkyYzAgMy4yNjMtMy4yMzQgNC40MTQtNy42MDggOS42MDhhLjUxMy41MTMgMCAwIDEtLjc4NCAwQzMuMjM0IDkuMzM0IDAgOC4xODMgMCA0LjkyIDAgMi43NTUgMS43OSAxIDQgMSIvPgo8L3N2Zz4=)*/
const SuitHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suit-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
</svg>
      )}
    />
  );

export default SuitHeartFill;
