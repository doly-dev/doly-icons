import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![speedometer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAyYS41LjUgMCAwIDEgLjUuNVY0YS41LjUgMCAwIDEtMSAwVjIuNUEuNS41IDAgMCAxIDggMk0zLjczMiAzLjczMmEuNS41IDAgMCAxIC43MDcgMGwuOTE1LjkxNGEuNS41IDAgMSAxLS43MDguNzA4bC0uOTE0LS45MTVhLjUuNSAwIDAgMSAwLS43MDdNMiA4YS41LjUgMCAwIDEgLjUtLjVoMS41ODZhLjUuNSAwIDAgMSAwIDFIMi41QS41LjUgMCAwIDEgMiA4bTkuNSAwYS41LjUgMCAwIDEgLjUtLjVoMS41YS41LjUgMCAwIDEgMCAxSDEyYS41LjUgMCAwIDEtLjUtLjVtLjc1NC00LjI0NmEuMzkuMzkgMCAwIDAtLjUyNy0uMDJMNy41NDcgNy4zMUEuOTEuOTEgMCAxIDAgOC44NSA4LjU2OWwzLjQzNC00LjI5N2EuMzkuMzkgMCAwIDAtLjAyOS0uNTE4eiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNjY0IDE1Ljg4OUE4IDggMCAxIDEgOS4zMzYuMTFhOCA4IDAgMCAxLTIuNjcyIDE1Ljc4em0tNC42NjUtNC4yODNBMTEuOTUgMTEuOTUgMCAwIDEgOCAxMGMyLjE4NiAwIDQuMjM2LjU4NSA2LjAwMSAxLjYwNmE3IDcgMCAxIDAtMTIuMDAyIDAiLz4KPC9zdmc+)*/
const Speedometer: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="speedometer"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
  <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/>
</svg>
      )}
    />
  );

export default Speedometer;
