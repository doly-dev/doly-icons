import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layout-three-columns](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBMS41IDEuNSAwIDAgMSAxLjUgMGgxM0ExLjUgMS41IDAgMCAxIDE2IDEuNXYxM2ExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTEzQTEuNSAxLjUgMCAwIDEgMCAxNC41ek0xLjUgMWEuNS41IDAgMCAwLS41LjV2MTNhLjUuNSAwIDAgMCAuNS41SDVWMXpNMTAgMTVWMUg2djE0em0xIDBoMy41YS41LjUgMCAwIDAgLjUtLjV2LTEzYS41LjUgMCAwIDAtLjUtLjVIMTF6Ii8+Cjwvc3ZnPg==)*/
const LayoutThreeColumns: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layout-three-columns"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z"/>
</svg>
      )}
    />
  );

export default LayoutThreeColumns;
