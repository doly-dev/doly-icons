import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![gift](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAyLjVhMi41IDIuNSAwIDAgMSA1IDAgMi41IDIuNSAwIDAgMSA1IDB2LjAwNmMwIC4wNyAwIC4yNy0uMDM4LjQ5NEgxNWExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXY3LjVhMS41IDEuNSAwIDAgMS0xLjUgMS41aC0xMUExLjUgMS41IDAgMCAxIDEgMTQuNVY3YTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDIuMDM4QTMgMyAwIDAgMSAzIDIuNTA2em0xLjA2OC41SDd2LS41YTEuNSAxLjUgMCAxIDAtMyAwYzAgLjA4NS4wMDIuMjc0LjA0NS40M3pNOSAzaDIuOTMybC4wMjMtLjA3Yy4wNDMtLjE1Ni4wNDUtLjM0NS4wNDUtLjQzYTEuNSAxLjUgMCAwIDAtMyAwek0xIDR2Mmg2VjR6bTggMHYyaDZWNHptNSAzSDl2OGg0LjVhLjUuNSAwIDAgMCAuNS0uNXptLTcgOFY3SDJ2Ny41YS41LjUgMCAwIDAgLjUuNXoiLz4KPC9zdmc+)*/
const Gift: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gift"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
</svg>
      )}
    />
  );

export default Gift;
