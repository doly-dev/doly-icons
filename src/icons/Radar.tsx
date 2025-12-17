import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![radar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi42MzQgMS4xMzVBNyA3IDAgMCAxIDE1IDhhLjUuNSAwIDAgMS0xIDAgNiA2IDAgMSAwLTYuNSA1Ljk4di0xLjAwNUE1IDUgMCAxIDEgMTMgOGEuNS41IDAgMCAxLTEgMCA0IDQgMCAxIDAtNC41IDMuOTY5di0xLjAxMUEyLjk5OSAyLjk5OSAwIDEgMSAxMSA4YS41LjUgMCAwIDEtMSAwIDIgMiAwIDEgMC0yLjUgMS45MzZ2LTEuMDdhMSAxIDAgMSAxIDEgMFYxNS41YS41LjUgMCAwIDEtMSAwdi0uNTE4YTcgNyAwIDAgMS0uODY2LTEzLjg0NyIvPgo8L3N2Zz4=)*/
const Radar: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="radar"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847"/>
</svg>
      )}
    />
  );

export default Radar;
