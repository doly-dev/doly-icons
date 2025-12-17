import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-4k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC44MDcgNS4wMDFDNC4wMjEgNi4yOTggMy4yMDMgNy42IDIuNSA4LjkxN3YuOTcxaDIuOTA1VjExaDEuMTEyVjkuODg4aC43MzNWOC45M2gtLjczM1Y1LjAwMXptLTEuMjMgMy45M3YtLjAzMmE0NyA0NyAwIDAgMSAxLjc2Ni0zLjAwMWguMDYyVjguOTN6bTkuODMxLTMuOTNoLTEuMzA2TDkuODM1IDcuNjg3aC0uMDU3VjVIOC41OXY2aDEuMTg3VjkuMDc1bC42MTUtLjY5OUwxMi4wNzIgMTFIMTMuNWwtMi4yMzItMy40MTV6Ii8+CiAgPHBhdGggZD0iTTE0IDNhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMXpNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yeiIvPgo8L3N2Zz4=)*/
const Badge4k: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-4k"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.807 5.001C4.021 6.298 3.203 7.6 2.5 8.917v.971h2.905V11h1.112V9.888h.733V8.93h-.733V5.001zm-1.23 3.93v-.032a47 47 0 0 1 1.766-3.001h.062V8.93zm9.831-3.93h-1.306L9.835 7.687h-.057V5H8.59v6h1.187V9.075l.615-.699L12.072 11H13.5l-2.232-3.415z"/>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default Badge4k;
