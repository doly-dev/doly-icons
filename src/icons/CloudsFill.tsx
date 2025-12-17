import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clouds-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNDczIDlhNC41IDQuNSAwIDAgMC04LjcyLS45OUEzIDMgMCAwIDAgMyAxNGg4LjVhMi41IDIuNSAwIDEgMC0uMDI3LTUiLz4KICA8cGF0aCBkPSJNMTQuNTQ0IDkuNzcyYTMuNSAzLjUgMCAwIDAtMi4yMjUtMS42NzYgNS41IDUuNSAwIDAgMC02LjMzNy00LjAwMiA0LjAwMiA0LjAwMiAwIDAgMSA3LjM5Mi45MSAyLjUgMi41IDAgMCAxIDEuMTcgNC43Njl6Ii8+Cjwvc3ZnPg==)*/
const CloudsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clouds-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"/>
  <path d="M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676 5.5 5.5 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"/>
</svg>
      )}
    />
  );

export default CloudsFill;
