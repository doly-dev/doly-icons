import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![signpost-2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yOTMuNzA3QTEgMSAwIDAgMCA3IDEuNDE0VjJIMmExIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMWg1djFIMi41YTEgMSAwIDAgMC0uOC40TC43MjUgOC43YS41LjUgMCAwIDAgMCAuNmwuOTc1IDEuM2ExIDEgMCAwIDAgLjguNEg3djVoMnYtNWg1YTEgMSAwIDAgMCAxLTFWOGExIDEgMCAwIDAtMS0xSDlWNmg0LjVhMSAxIDAgMCAwIC44LS40bC45NzUtMS4zYS41LjUgMCAwIDAgMC0uNkwxNC4zIDIuNGExIDEgMCAwIDAtLjgtLjRIOXYtLjU4NkExIDEgMCAwIDAgNy4yOTMuNzA3Ii8+Cjwvc3ZnPg==)*/
const Signpost2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="signpost-2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707"/>
</svg>
      )}
    />
  );

export default Signpost2Fill;
