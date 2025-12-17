import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![signpost-split-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAxNmgyVjZoNWExIDEgMCAwIDAgLjgtLjRsLjk3NS0xLjNhLjUuNSAwIDAgMCAwLS42TDE0LjggMi40QTEgMSAwIDAgMCAxNCAySDl2LS41ODZhMSAxIDAgMCAwLTIgMFY3SDJhMSAxIDAgMCAwLS44LjRMLjIyNSA4LjdhLjUuNSAwIDAgMCAwIC42bC45NzUgMS4zYTEgMSAwIDAgMCAuOC40aDV6Ii8+Cjwvc3ZnPg==)*/
const SignpostSplitFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="signpost-split-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z"/>
</svg>
      )}
    />
  );

export default SignpostSplitFill;
