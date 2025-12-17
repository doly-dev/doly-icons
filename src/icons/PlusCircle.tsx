import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![plus-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTggNGEuNS41IDAgMCAxIC41LjV2M2gzYS41LjUgMCAwIDEgMCAxaC0zdjNhLjUuNSAwIDAgMS0xIDB2LTNoLTNhLjUuNSAwIDAgMSAwLTFoM3YtM0EuNS41IDAgMCAxIDggNCIvPgo8L3N2Zz4=)*/
const PlusCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="plus-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
      )}
    />
  );

export default PlusCircle;
