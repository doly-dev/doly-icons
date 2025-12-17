import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-frown-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2TTcgNi41QzcgNy4zMjggNi41NTIgOCA2IDhzLTEtLjY3Mi0xLTEuNVM1LjQ0OCA1IDYgNXMxIC42NzIgMSAxLjVtLTIuNzE1IDUuOTMzYS41LjUgMCAwIDEtLjE4My0uNjgzQTQuNSA0LjUgMCAwIDEgOCA5LjVhNC41IDQuNSAwIDAgMSAzLjg5OCAyLjI1LjUuNSAwIDAgMS0uODY2LjVBMy41IDMuNSAwIDAgMCA4IDEwLjVhMy41IDMuNSAwIDAgMC0zLjAzMiAxLjc1LjUuNSAwIDAgMS0uNjgzLjE4M00xMCA4Yy0uNTUyIDAtMS0uNjcyLTEtMS41UzkuNDQ4IDUgMTAgNXMxIC42NzIgMSAxLjVTMTAuNTUyIDggMTAgOCIvPgo8L3N2Zz4=)*/
const EmojiFrownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-frown-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
      )}
    />
  );

export default EmojiFrownFill;
