import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![symmetry-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAyLjVhLjUuNSAwIDAgMC0uOTM5LS4yNGwtNiAxMUEuNS41IDAgMCAwIC41IDE0aDZhLjUuNSAwIDAgMCAuNS0uNXptMi4zNzYtLjQ4NGEuNS41IDAgMCAxIC41NjMuMjQ1bDYgMTFBLjUuNSAwIDAgMSAxNS41IDE0aC02YS41LjUgMCAwIDEtLjUtLjV2LTExYS41LjUgMCAwIDEgLjM3Ni0uNDg0TTEwIDQuNDZWMTNoNC42NTh6Ii8+Cjwvc3ZnPg==)*/
const SymmetryVertical: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="symmetry-vertical"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484M10 4.46V13h4.658z"/>
</svg>
      )}
    />
  );

export default SymmetryVertical;
