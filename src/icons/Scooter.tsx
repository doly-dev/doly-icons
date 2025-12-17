import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![scooter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDIuNWEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAwIDFoLS4zOWwxLjQgN2EyLjUgMi41IDAgMSAxLS45OC4xOTVsLS4xODktLjkzOC0yLjQzIDMuNTI3QS41LjUgMCAwIDEgOS41IDEzSDQuOTVhMi41IDIuNSAwIDEgMSAwLTFoNC4yODdsMi44MzEtNC4xMUwxMS4wOSAzSDkuNWEuNS41IDAgMCAxLS41LS41TTMuOTE1IDEyYTEuNSAxLjUgMCAxIDAgMCAxSDIuNWEuNS41IDAgMCAxIDAtMXptOC44MTctLjc4OUExLjQ5OSAxLjQ5OSAwIDAgMCAxMy41IDE0YTEuNSAxLjUgMCAwIDAgLjIxMy0yLjk4NWwuMjc3IDEuMzg3YS41LjUgMCAwIDEtLjk4LjE5NnoiLz4KPC9zdmc+)*/
const Scooter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="scooter"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5M3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196z"/>
</svg>
      )}
    />
  );

export default Scooter;
