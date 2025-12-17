import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-tm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4yOTUgMTFWNS45OTVIN1Y1SDIuNDAzdi45OTRoMS43MDFWMTF6bTMuMzk3IDBWNy4wMWguMDU4bDEuNDI4IDMuMjM5aC43NzNsMS40Mi0zLjI0aC4wNTdWMTFIMTMuNVY1LjAwMWgtMS4ybC0xLjcxIDMuODk0aC0uMDM5bC0xLjcxLTMuODk0SDcuNjM0VjExaDEuMDZ6Ii8+CiAgPHBhdGggZD0iTTE0IDNhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMXpNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yeiIvPgo8L3N2Zz4=)*/
const BadgeTm: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-tm"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.295 11V5.995H7V5H2.403v.994h1.701V11zm3.397 0V7.01h.058l1.428 3.239h.773l1.42-3.24h.057V11H13.5V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H7.634V11h1.06z"/>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default BadgeTm;
