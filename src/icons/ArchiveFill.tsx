import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![archive-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNjQzIDE1QzEzLjk3OSAxNSAxNSAxMy44NDUgMTUgMTIuNVY1SDF2Ny41QzEgMTMuODQ1IDIuMDIxIDE1IDMuMzU3IDE1ek01LjUgN2g1YS41LjUgMCAwIDEgMCAxaC01YS41LjUgMCAwIDEgMC0xTS44IDFhLjguOCAwIDAgMC0uOC44VjNhLjguOCAwIDAgMCAuOC44aDE0LjRBLjguOCAwIDAgMCAxNiAzVjEuOGEuOC44IDAgMCAwLS44LS44eiIvPgo8L3N2Zz4=)*/
const ArchiveFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="archive-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
</svg>
      )}
    />
  );

export default ArchiveFill;
