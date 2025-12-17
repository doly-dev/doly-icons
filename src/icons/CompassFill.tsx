import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![compass-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuNSA4LjUxNmE3LjUgNy41IDAgMSAxLTkuNDYyLTcuMjRBMSAxIDAgMCAxIDcgMGgyYTEgMSAwIDAgMSAuOTYyIDEuMjc2IDcuNSA3LjUgMCAwIDEgNS41MzggNy4yNG0tMy42MS0zLjkwNUw2Ljk0IDcuNDM5IDQuMTEgMTIuMzlsNC45NS0yLjgyOCAyLjgyOC00Ljk1eiIvPgo8L3N2Zz4=)*/
const CompassFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="compass-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
</svg>
      )}
    />
  );

export default CompassFill;
