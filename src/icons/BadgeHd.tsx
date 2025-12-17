import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-hd](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4zOTYgMTFWNS4wMDFINi4yMDl2Mi40NEgzLjY4N1Y1SDIuNXY2aDEuMTg3VjguNDNoMi41MjJWMTF6TTguNSA1LjAwMVYxMWgyLjE4OGMxLjgxMSAwIDIuNjg1LTEuMTA3IDIuNjg1LTMuMDE1IDAtMS44OTQtLjg2LTIuOTg0LTIuNjg0LTIuOTg0em0xLjE4Ny45NjdoLjg0M2MxLjExMiAwIDEuNjIyLjY4NiAxLjYyMiAyLjA0IDAgMS4zNTMtLjUwNSAyLjAyLTEuNjIyIDIuMDJoLS44NDN6Ii8+CiAgPHBhdGggZD0iTTE0IDNhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMXpNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yeiIvPgo8L3N2Zz4=)*/
const BadgeHd: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-hd"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843z"/>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default BadgeHd;
