import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![signpost-split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA3VjEuNDE0YTEgMSAwIDAgMSAyIDBWMmg1YTEgMSAwIDAgMSAuOC40bC45NzUgMS4zYS41LjUgMCAwIDEgMCAuNkwxNC44IDUuNmExIDEgMCAwIDEtLjguNEg5djEwSDd2LTVIMmExIDEgMCAwIDEtLjgtLjRMLjIyNSA5LjNhLjUuNSAwIDAgMSAwLS42TDEuMiA3LjRBMSAxIDAgMCAxIDIgN3ptMSAzVjhIMmwtLjc1IDFMMiAxMHptMC01aDZsLjc1LTFMMTQgM0g4eiIvPgo8L3N2Zz4=)*/
const SignpostSplit: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="signpost-split"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7zm1 3V8H2l-.75 1L2 10zm0-5h6l.75-1L14 3H8z"/>
</svg>
      )}
    />
  );

export default SignpostSplit;
