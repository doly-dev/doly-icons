import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-bar-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjY0NiAxMS44NTRhLjUuNSAwIDAgMCAuNzA4IDBMOCA4LjIwN2wzLjY0NiAzLjY0N2EuNS41IDAgMCAwIC43MDgtLjcwOGwtNC00YS41LjUgMCAwIDAtLjcwOCAwbC00IDRhLjUuNSAwIDAgMCAwIC43MDhNMi40IDUuMmMwIC4yMi4xOC40LjQuNGgxMC40YS40LjQgMCAwIDAgMC0uOEgyLjhhLjQuNCAwIDAgMC0uNC40Ii8+Cjwvc3ZnPg==)*/
const ChevronBarUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-bar-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708M2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4"/>
</svg>
      )}
    />
  );

export default ChevronBarUp;
