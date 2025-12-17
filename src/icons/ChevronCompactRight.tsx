import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-compact-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljc3NiAxLjU1M2EuNS41IDAgMCAxIC42NzEuMjIzbDMgNmEuNS41IDAgMCAxIDAgLjQ0OGwtMyA2YS41LjUgMCAxIDEtLjg5NC0uNDQ4TDkuNDQgOCA2LjU1MyAyLjIyNGEuNS41IDAgMCAxIC4yMjMtLjY3MSIvPgo8L3N2Zz4=)*/
const ChevronCompactRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-compact-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg>
      )}
    />
  );

export default ChevronCompactRight;
