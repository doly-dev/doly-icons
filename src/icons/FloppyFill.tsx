import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![floppy-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBMS41IDEuNSAwIDAgMSAxLjUgMEgzdjUuNUExLjUgMS41IDAgMCAwIDQuNSA3aDdBMS41IDEuNSAwIDAgMCAxMyA1LjVWMGguMDg2YTEuNSAxLjUgMCAwIDEgMS4wNi40NGwxLjQxNSAxLjQxNEExLjUgMS41IDAgMCAxIDE2IDIuOTE0VjE0LjVhMS41IDEuNSAwIDAgMS0xLjUgMS41SDE0di01LjVBMS41IDEuNSAwIDAgMCAxMi41IDloLTlBMS41IDEuNSAwIDAgMCAyIDEwLjVWMTZoLS41QTEuNSAxLjUgMCAwIDEgMCAxNC41eiIvPgogIDxwYXRoIGQ9Ik0zIDE2aDEwdi01LjVhLjUuNSAwIDAgMC0uNS0uNWgtOWEuNS41IDAgMCAwLS41LjV6bTktMTZINHY1LjVhLjUuNSAwIDAgMCAuNS41aDdhLjUuNSAwIDAgMCAuNS0uNXpNOSAxaDJ2NEg5eiIvPgo8L3N2Zz4=)*/
const FloppyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="floppy-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z"/>
  <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z"/>
</svg>
      )}
    />
  );

export default FloppyFill;
