import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![volume-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSA0YS41LjUgMCAwIDAtLjgxMi0uMzlMNS44MjUgNS41SDMuNUEuNS41IDAgMCAwIDMgNnY0YS41LjUgMCAwIDAgLjUuNWgyLjMyNWwyLjM2MyAxLjg5QS41LjUgMCAwIDAgOSAxMnpNNi4zMTIgNi4zOSA4IDUuMDR2NS45Mkw2LjMxMiA5LjYxQS41LjUgMCAwIDAgNiA5LjVINHYtM2gyYS41LjUgMCAwIDAgLjMxMi0uMTFNMTIuMDI1IDhhNC41IDQuNSAwIDAgMS0xLjMxOCAzLjE4MkwxMCAxMC40NzVBMy41IDMuNSAwIDAgMCAxMS4wMjUgOCAzLjUgMy41IDAgMCAwIDEwIDUuNTI1bC43MDctLjcwN0E0LjUgNC41IDAgMCAxIDEyLjAyNSA4Ii8+Cjwvc3ZnPg==)*/
const VolumeDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="volume-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11M12.025 8a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
</svg>
      )}
    />
  );

export default VolumeDown;
