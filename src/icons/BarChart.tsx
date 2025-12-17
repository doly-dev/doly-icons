import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bar-chart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAxMUgydjNoMnptNS00SDd2N2gyem01LTV2MTJoLTJWMnptLTItMWExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoMmExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXpNNiA3YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjdhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF6bS01IDRhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const BarChart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bar-chart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default BarChart;
