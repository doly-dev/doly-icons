import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![anthropic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjIxOCAyaDIuNDAyTDE2IDEyLjk4N2gtMi40MDJ6TTQuMzc5IDJoMi41MTJsNC4zOCAxMC45ODdIOC44MmwtLjg5NS0yLjMwOGgtNC41OGwtLjg5NiAyLjMwN0gwTDQuMzggMi4wMDF6bTIuNzU1IDYuNjRMNS42MzUgNC43NzcgNC4xMzcgOC42NHoiLz4KPC9zdmc+)*/
const Anthropic: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="anthropic"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M9.218 2h2.402L16 12.987h-2.402zM4.379 2h2.512l4.38 10.987H8.82l-.895-2.308h-4.58l-.896 2.307H0L4.38 2.001zm2.755 6.64L5.635 4.777 4.137 8.64z"/>
</svg>
      )}
    />
  );

export default Anthropic;
