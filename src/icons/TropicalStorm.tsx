import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tropical-storm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA5LjVhMiAyIDAgMSAwIDAtNCAyIDIgMCAwIDAgMCA0Ii8+CiAgPHBhdGggZD0iTTkuNSAyYy0uOSAwLTEuNzUuMjE2LTIuNTAxLjZBNSA1IDAgMCAxIDEzIDcuNWE2LjUgNi41IDAgMSAxLTEzIDAgLjUuNSAwIDAgMSAxIDAgNS41IDUuNSAwIDAgMCA4LjAwMSA0LjlBNSA1IDAgMCAxIDMgNy41YTYuNSA2LjUgMCAwIDEgMTMgMCAuNS41IDAgMCAxLTEgMEE1LjUgNS41IDAgMCAwIDkuNSAyTTggMy41YTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOCIvPgo8L3N2Zz4=)*/
const TropicalStorm: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tropical-storm"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2M8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>
</svg>
      )}
    />
  );

export default TropicalStorm;
