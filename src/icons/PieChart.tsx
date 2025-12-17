import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pie-chart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41IDEuMDE4YTcgNyAwIDAgMC00Ljc5IDExLjU2Nkw3LjUgNy43OTN6bTEgMFY3LjVoNi40ODJBNyA3IDAgMCAwIDguNSAxLjAxOE0xNC45ODIgOC41SDguMjA3bC00Ljc5IDQuNzlBNyA3IDAgMCAwIDE0Ljk4MiA4LjVNMCA4YTggOCAwIDEgMSAxNiAwQTggOCAwIDAgMSAwIDgiLz4KPC9zdmc+)*/
const PieChart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pie-chart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
</svg>
      )}
    />
  );

export default PieChart;
