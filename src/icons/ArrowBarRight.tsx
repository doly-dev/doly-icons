import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-bar-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDhhLjUuNSAwIDAgMCAuNS41aDUuNzkzbC0yLjE0NyAyLjE0NmEuNS41IDAgMCAwIC43MDguNzA4bDMtM2EuNS41IDAgMCAwIDAtLjcwOGwtMy0zYS41LjUgMCAwIDAtLjcwOC43MDhMMTIuMjkzIDcuNUg2LjVBLjUuNSAwIDAgMCA2IDhtLTIuNSA3YS41LjUgMCAwIDEtLjUtLjV2LTEzYS41LjUgMCAwIDEgMSAwdjEzYS41LjUgMCAwIDEtLjUuNSIvPgo8L3N2Zz4=)*/
const ArrowBarRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-bar-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
</svg>
      )}
    />
  );

export default ArrowBarRight;
