import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![easel-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC40NzMuMzM3YS41LjUgMCAwIDAtLjk0NiAwTDYuOTU0IDJIMmExIDEgMCAwIDAtMSAxdjdhMSAxIDAgMCAwIDEgMWgxLjg1bC0xLjMyMyAzLjgzN2EuNS41IDAgMSAwIC45NDYuMzI2TDQuOTA4IDExSDcuNXYyLjVhLjUuNSAwIDAgMCAxIDBWMTFoMi41OTJsMS40MzUgNC4xNjNhLjUuNSAwIDAgMCAuOTQ2LS4zMjZMMTIuMTUgMTFIMTRhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTFIOS4wNDZ6Ii8+Cjwvc3ZnPg==)*/
const EaselFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="easel-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046z"/>
</svg>
      )}
    />
  );

export default EaselFill;
