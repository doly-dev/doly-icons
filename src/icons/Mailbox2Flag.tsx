import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mailbox2-flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuNSA4LjVWMy43MDdsLjg1NC0uODUzQS41LjUgMCAwIDAgMTEuNSAyLjV2LTJBLjUuNSAwIDAgMCAxMSAwSDkuNWEuNS41IDAgMCAwLS41LjV2OHoiLz4KICA8cGF0aCBkPSJNNCAzaDR2MUg2LjY0NkE0IDQgMCAwIDEgOCA3djZoN1Y3YTMgMyAwIDAgMC0zLTNWM2E0IDQgMCAwIDEgNCA0djZhMSAxIDAgMCAxLTEgMUgxYTEgMSAwIDAgMS0xLTFWN2E0IDQgMCAwIDEgNC00bS41ODUgNC4xNTdDNC44MzYgNy4yNjQgNSA3LjMzNCA1IDdhMSAxIDAgMCAwLTIgMGMwIC4zMzQuMTY0LjI2NC40MTUuMTU3QzMuNTggNy4wODcgMy43ODIgNyA0IDdzLjQyLjA4Ni41ODUuMTU3Ii8+Cjwvc3ZnPg==)*/
const Mailbox2Flag: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mailbox2-flag"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8z"/>
  <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m.585 4.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7s.42.086.585.157"/>
</svg>
      )}
    />
  );

export default Mailbox2Flag;
