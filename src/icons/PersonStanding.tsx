import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-standing](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAzYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzTTYgNi43NXY4LjVhLjc1Ljc1IDAgMCAwIDEuNSAwVjEwLjVhLjUuNSAwIDAgMSAxIDB2NC43NWEuNzUuNzUgMCAwIDAgMS41IDB2LTguNWEuMjUuMjUgMCAxIDEgLjUgMHYyLjVhLjc1Ljc1IDAgMCAwIDEuNSAwVjYuNWEzIDMgMCAwIDAtMy0zSDdhMyAzIDAgMCAwLTMgM3YyLjc1YS43NS43NSAwIDAgMCAxLjUgMHYtMi41YS4yNS4yNSAwIDAgMSAuNSAwIi8+Cjwvc3ZnPg==)*/
const PersonStanding: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-standing"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0"/>
</svg>
      )}
    />
  );

export default PersonStanding;
