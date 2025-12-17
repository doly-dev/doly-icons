import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![vinyl-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA2YTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNG0wIDNhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyIi8+CiAgPHBhdGggZD0iTTE2IDhBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgME00IDhhNCA0IDAgMSAwIDggMCA0IDQgMCAwIDAtOCAwIi8+Cjwvc3ZnPg==)*/
const VinylFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="vinyl-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/>
</svg>
      )}
    />
  );

export default VinylFill;
