import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MjggMi45NzNhLjc1Ljc1IDAgMCAxIC40NzIuNjk2djguNjYyYS43NS43NSAwIDAgMS0uNDcyLjY5NmwtNy4yNSAyLjlhLjc1Ljc1IDAgMCAxLS41NTcgMGwtNy4yNS0yLjlBLjc1Ljc1IDAgMCAxIDAgMTIuMzMxVjMuNjY5YS43NS43NSAwIDAgMSAuNDcxLS42OTZMNy40NDMuMTg0bC4wMDQtLjAwMS4yNzQtLjExYS43NS43NSAwIDAgMSAuNTU4IDBsLjI3NC4xMS4wMDQuMDAxem0tMS4zNzQuNTI3TDggNS45NjIgMS44NDYgMy41IDEgMy44Mzl2LjRsNi41IDIuNnY3LjkyMmwuNS4yLjUtLjJWNi44NGw2LjUtMi42di0uNGwtLjg0Ni0uMzM5WiIvPgo8L3N2Zz4=)*/
const BoxFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>
      )}
    />
  );

export default BoxFill;
