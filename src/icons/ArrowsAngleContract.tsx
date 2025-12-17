import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-angle-contract](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uMTcyIDE1LjgyOGEuNS41IDAgMCAwIC43MDcgMGw0LjA5Ni00LjA5NlYxNC41YS41LjUgMCAxIDAgMSAwdi0zLjk3NWEuNS41IDAgMCAwLS41LS41SDEuNWEuNS41IDAgMCAwIDAgMWgyLjc2OEwuMTcyIDE1LjEyMWEuNS41IDAgMCAwIDAgLjcwN00xNS44MjguMTcyYS41LjUgMCAwIDAtLjcwNyAwbC00LjA5NiA0LjA5NlYxLjVhLjUuNSAwIDEgMC0xIDB2My45NzVhLjUuNSAwIDAgMCAuNS41SDE0LjVhLjUuNSAwIDAgMCAwLTFoLTIuNzY4TDE1LjgyOC44NzlhLjUuNSAwIDAgMCAwLS43MDciLz4KPC9zdmc+)*/
const ArrowsAngleContract: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-angle-contract"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
</svg>
      )}
    />
  );

export default ArrowsAngleContract;
