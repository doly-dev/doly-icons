import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down-right-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAyYTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXpNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptNS44NTQgMy4xNDZhLjUuNSAwIDEgMC0uNzA4LjcwOEw5LjI0MyA5Ljk1SDYuNDc1YS41LjUgMCAxIDAgMCAxaDMuOTc1YS41LjUgMCAwIDAgLjUtLjVWNi40NzVhLjUuNSAwIDEgMC0xIDB2Mi43Njh6Ii8+Cjwvc3ZnPg==)*/
const ArrowDownRightSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-right-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 3.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z"/>
</svg>
      )}
    />
  );

export default ArrowDownRightSquare;
