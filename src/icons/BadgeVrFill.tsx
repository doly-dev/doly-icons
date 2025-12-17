import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-vr-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS42NzMgNS45MzN2MS45MzhoMS4wMzNjLjY2IDAgMS4wNjgtLjMxNiAxLjA2OC0uOTUgMC0uNjQtLjQyMi0uOTg4LTEuMDUtLjk4OHoiLz4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem01LjkzNyA3IDEuOTktNS45OTlINi42MUw1LjI3NyA5LjcwOEg1LjIyTDMuODc1IDUuMDAxSDIuNUw0LjUwOCAxMXpNOC41IDUuMDAxVjExaDEuMTczVjguNzYzaDEuMDY0TDExLjc4NyAxMWgxLjMyN0wxMS45MSA4LjU4M0MxMi40NTUgOC4zNzMgMTMgNy43NzkgMTMgNi45YzAtMS4xNDctLjc3My0xLjktMi4xMDUtMS45SDguNXoiLz4KPC9zdmc+)*/
const BadgeVrFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-vr-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.673 5.933v1.938h1.033c.66 0 1.068-.316 1.068-.95 0-.64-.422-.988-1.05-.988z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.937 7 1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zM8.5 5.001V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9H8.5z"/>
</svg>
      )}
    />
  );

export default BadgeVrFill;
