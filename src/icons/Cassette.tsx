import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cassette](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA4YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMm05LTFhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwTTcgNmExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMSAwIDAtMnoiLz4KICA8cGF0aCBkPSJNMS41IDJBMS41IDEuNSAwIDAgMCAwIDMuNXY5QTEuNSAxLjUgMCAwIDAgMS41IDE0aDEzYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtOUExLjUgMS41IDAgMCAwIDE0LjUgMnpNMSAzLjVhLjUuNSAwIDAgMSAuNS0uNWgxM2EuNS41IDAgMCAxIC41LjV2OWEuNS41IDAgMCAxLS41LjVoLS42OTFsLTEuMzYyLTIuNzI0QS41LjUgMCAwIDAgMTIgMTBINGEuNS41IDAgMCAwLS40NDcuMjc2TDIuMTkgMTNIMS41YS41LjUgMCAwIDEtLjUtLjV6TTExLjY5MSAxMWwxIDJIMy4zMDlsMS0yeiIvPgo8L3N2Zz4=)*/
const Cassette: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cassette"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 6a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z"/>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-.691l-1.362-2.724A.5.5 0 0 0 12 10H4a.5.5 0 0 0-.447.276L2.19 13H1.5a.5.5 0 0 1-.5-.5zM11.691 11l1 2H3.309l1-2z"/>
</svg>
      )}
    />
  );

export default Cassette;
