import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-seam-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41MjggMi45NzNhLjc1Ljc1IDAgMCAxIC40NzIuNjk2djguNjYyYS43NS43NSAwIDAgMS0uNDcyLjY5NmwtNy4yNSAyLjlhLjc1Ljc1IDAgMCAxLS41NTcgMGwtNy4yNS0yLjlBLjc1Ljc1IDAgMCAxIDAgMTIuMzMxVjMuNjY5YS43NS43NSAwIDAgMSAuNDcxLS42OTZMNy40NDMuMTg0bC4wMS0uMDAzLjI2OC0uMTA4YS43NS43NSAwIDAgMSAuNTU4IDBsLjI2OS4xMDguMDEuMDAzek0xMC40MDQgMiA0LjI1IDQuNDYxIDEuODQ2IDMuNSAxIDMuODM5di40bDYuNSAyLjZ2Ny45MjJsLjUuMi41LS4yVjYuODRsNi41LTIuNnYtLjRsLS44NDYtLjMzOUw4IDUuOTYxIDUuNTk2IDVsNi4xNTQtMi40NjF6Ii8+Cjwvc3ZnPg==)*/
const BoxSeamFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-seam-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
</svg>
      )}
    />
  );

export default BoxSeamFill;
