import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![heartbreak-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC45MzEuNTg2IDcgM2wxLjUgNC0yIDNMOCAxNUMyMi41MzQgNS4zOTYgMTMuNzU3LTIuMjEgOC45MzEuNTg2TTcuMzU4Ljc3IDUuNSAzIDcgN2wtMS41IDMgMS44MTUgNC41MzdDLTYuNTMzIDQuOTYgMi42ODUtMi40NjcgNy4zNTguNzciLz4KPC9zdmc+)*/
const HeartbreakFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heartbreak-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
</svg>
      )}
    />
  );

export default HeartbreakFill;
