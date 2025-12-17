import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-open-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjQ3IDEuMzE4YTEgMSAwIDAgMC0uOTQgMGwtNiAzLjJBMSAxIDAgMCAwIDEgNS40di44MTdsMy4yMzUgMS45NGEyLjggMi44IDAgMCAwLS4yMzMgMS4wMjdMMSA3LjM4NHY1LjczM2wzLjQ3OS0yLjA4N3EuMjI0LjQxNC41NTguODNsLTQuMDAyIDIuNDAyQTEgMSAwIDAgMCAyIDE1aDEyYTEgMSAwIDAgMCAuOTY1LS43MzhsLTQuMDAyLTIuNDAxcS4zMzQtLjQxOC41NTgtLjgzMUwxNSAxMy4xMTdWNy4zODNsLTMuMDAyIDEuODAxYTIuOCAyLjggMCAwIDAtLjIzMy0xLjAyNkwxNSA2LjIxN1Y1LjRhMSAxIDAgMCAwLS41My0uODgyek03LjA2LjQzNWEyIDIgMCAwIDEgMS44ODIgMGw2IDMuMkEyIDIgMCAwIDEgMTYgNS40VjE0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjUuNGEyIDIgMCAwIDEgMS4wNTktMS43NjV6TTggNy45OTNjMS42NjQtMS43MTEgNS44MjUgMS4yODMgMCA1LjEzMi01LjgyNS0zLjg1LTEuNjY0LTYuODQzIDAtNS4xMzIiLz4KPC9zdmc+)*/
const EnvelopeOpenHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-open-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l3.235 1.94a2.8 2.8 0 0 0-.233 1.027L1 7.384v5.733l3.479-2.087q.224.414.558.83l-4.002 2.402A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738l-4.002-2.401q.334-.418.558-.831L15 13.117V7.383l-3.002 1.801a2.8 2.8 0 0 0-.233-1.026L15 6.217V5.4a1 1 0 0 0-.53-.882zM7.06.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default EnvelopeOpenHeart;
