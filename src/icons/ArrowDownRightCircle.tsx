import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down-right-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDhhNyA3IDAgMSAwIDE0IDBBNyA3IDAgMCAwIDEgOG0xNSAwQTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBNNS44NTQgNS4xNDZhLjUuNSAwIDEgMC0uNzA4LjcwOEw5LjI0MyA5Ljk1SDYuNDc1YS41LjUgMCAxIDAgMCAxaDMuOTc1YS41LjUgMCAwIDAgLjUtLjVWNi40NzVhLjUuNSAwIDEgMC0xIDB2Mi43Njh6Ii8+Cjwvc3ZnPg==)*/
const ArrowDownRightCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-right-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z"/>
</svg>
      )}
    />
  );

export default ArrowDownRightCircle;
