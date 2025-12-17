import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![crosshair2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAwYS41LjUgMCAwIDEgLjUuNXYuNTE4QTcgNyAwIDAgMSAxNC45ODIgNy41aC41MThhLjUuNSAwIDAgMSAwIDFoLS41MThBNyA3IDAgMCAxIDguNSAxNC45ODJ2LjUxOGEuNS41IDAgMCAxLTEgMHYtLjUxOEE3IDcgMCAwIDEgMS4wMTggOC41SC41YS41LjUgMCAwIDEgMC0xaC41MThBNyA3IDAgMCAxIDcuNSAxLjAxOFYuNUEuNS41IDAgMCAxIDggMG0tLjUgMi4wMkE2IDYgMCAwIDAgMi4wMiA3LjVoMS4wMDVBNSA1IDAgMCAxIDcuNSAzLjAyNXptMSAxLjAwNUE1IDUgMCAwIDEgMTIuOTc1IDcuNWgxLjAwNUE2IDYgMCAwIDAgOC41IDIuMDJ6TTEyLjk3NSA4LjVBNSA1IDAgMCAxIDguNSAxMi45NzV2MS4wMDVhNiA2IDAgMCAwIDUuNDgtNS40OHpNNy41IDEyLjk3NUE1IDUgMCAwIDEgMy4wMjUgOC41SDIuMDJhNiA2IDAgMCAwIDUuNDggNS40OHpNMTAgOGEyIDIgMCAxIDAtNCAwIDIgMiAwIDAgMCA0IDAiLz4KPC9zdmc+)*/
const Crosshair2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="crosshair2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
</svg>
      )}
    />
  );

export default Crosshair2;
