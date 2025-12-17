import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![gender-ambiguous](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41IDFhLjUuNSAwIDAgMSAwLTFoNGEuNS41IDAgMCAxIC41LjV2NGEuNS41IDAgMCAxLTEgMFYxLjcwN2wtMy40NSAzLjQ1QTQgNCAwIDAgMSA4LjUgMTAuOTdWMTNIMTBhLjUuNSAwIDAgMSAwIDFIOC41djEuNWEuNS41IDAgMCAxLTEgMFYxNEg2YS41LjUgMCAwIDEgMC0xaDEuNXYtMi4wM2E0IDQgMCAxIDEgMy40NzEtNi42NDhMMTQuMjkzIDF6bS0uOTk3IDQuMzQ2YTMgMyAwIDEgMC01LjAwNiAzLjMwOSAzIDMgMCAwIDAgNS4wMDYtMy4zMXoiLz4KPC9zdmc+)*/
const GenderAmbiguous: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gender-ambiguous"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"/>
</svg>
      )}
    />
  );

export default GenderAmbiguous;
