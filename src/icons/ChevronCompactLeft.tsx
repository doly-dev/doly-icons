import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-compact-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjIyNCAxLjU1M2EuNS41IDAgMCAxIC4yMjMuNjdMNi41NiA4bDIuODg4IDUuNzc2YS41LjUgMCAxIDEtLjg5NC40NDhsLTMtNmEuNS41IDAgMCAxIDAtLjQ0OGwzLTZhLjUuNSAwIDAgMSAuNjctLjIyMyIvPgo8L3N2Zz4=)*/
const ChevronCompactLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-compact-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
</svg>
      )}
    />
  );

export default ChevronCompactLeft;
