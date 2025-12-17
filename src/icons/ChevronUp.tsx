import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDUuNzA3bC01LjY0NiA1LjY0N2EuNS41IDAgMCAxLS43MDgtLjcwOHoiLz4KPC9zdmc+)*/
const ChevronUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>
      )}
    />
  );

export default ChevronUp;
