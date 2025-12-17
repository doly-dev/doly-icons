import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pie-chart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuOTg1IDguNUg4LjIwN2wtNS41IDUuNWE4IDggMCAwIDAgMTMuMjc3LTUuNXpNMiAxMy4yOTJBOCA4IDAgMCAxIDcuNS4wMTV2Ny43Nzh6TTguNS4wMTVWNy41aDcuNDg1QTggOCAwIDAgMCA4LjUuMDE1Ii8+Cjwvc3ZnPg==)*/
const PieChartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pie-chart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/>
</svg>
      )}
    />
  );

export default PieChartFill;
