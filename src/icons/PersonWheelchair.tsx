import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-wheelchair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgM2ExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM20tLjY2MyAyLjE0NmExLjUgMS41IDAgMCAwLS40Ny0yLjExNWwtMi41LTEuNTA4YTEuNSAxLjUgMCAwIDAtMS42NzYuMDg2bC0yLjMyOSAxLjc1YS44NjYuODY2IDAgMCAwIDEuMDUxIDEuMzc1TDcuMzYxIDMuMzdsLjkyMi43MS0yLjAzOCAyLjQ0NUE0LjczIDQuNzMgMCAwIDAgMi42MjggNy42N2wxLjA2NCAxLjA2NWEzLjI1IDMuMjUgMCAwIDEgNC41NzQgNC41NzRsMS4wNjQgMS4wNjNhNC43MyA0LjczIDAgMCAwIDEuMDktMy45OThsMS4wNDMtLjI5Mi0uMTg3IDIuOTkxYS44NzIuODcyIDAgMSAwIDEuNzQxLjA5OGwuMjA2LTQuMTIxQTEgMSAwIDAgMCAxMi4yMjQgOGgtMi43OXpNMy4wMjMgOS40OGEzLjI1IDMuMjUgMCAwIDAgNC40OTYgNC40OTZsMS4wNzcgMS4wNzdhNC43NSA0Ljc1IDAgMCAxLTYuNjUtNi42NXoiLz4KPC9zdmc+)*/
const PersonWheelchair: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-wheelchair"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z"/>
</svg>
      )}
    />
  );

export default PersonWheelchair;
