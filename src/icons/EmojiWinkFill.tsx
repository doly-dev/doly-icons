import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-wink-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAwYTggOCAwIDEgMSAwIDE2QTggOCAwIDAgMSA4IDBNNyA2LjVDNyA1LjY3MiA2LjU1MiA1IDYgNXMtMSAuNjcyLTEgMS41UzUuNDQ4IDggNiA4czEtLjY3MiAxLTEuNU00LjI4NSA5LjU2N2EuNS41IDAgMCAwLS4xODMuNjgzQTQuNSA0LjUgMCAwIDAgOCAxMi41YTQuNSA0LjUgMCAwIDAgMy44OTgtMi4yNS41LjUgMCAxIDAtLjg2Ni0uNUEzLjUgMy41IDAgMCAxIDggMTEuNWEzLjUgMy41IDAgMCAxLTMuMDMyLTEuNzUuNS41IDAgMCAwLS42ODMtLjE4M201LjE1Mi0zLjMxYS41LjUgMCAwIDAtLjg3NC40ODZjLjMzLjU5NS45NTggMS4wMDcgMS42ODcgMS4wMDdzMS4zNTYtLjQxMiAxLjY4Ny0xLjAwN2EuNS41IDAgMCAwLS44NzQtLjQ4Ni45My45MyAwIDAgMS0uODEzLjQ5My45My45MyAwIDAgMS0uODEzLS40OTMiLz4KPC9zdmc+)*/
const EmojiWinkFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-wink-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5M4.285 9.567a.5.5 0 0 0-.183.683A4.5 4.5 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.5 3.5 0 0 1 8 11.5a3.5 3.5 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183m5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007s1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.93.93 0 0 1-.813.493.93.93 0 0 1-.813-.493"/>
</svg>
      )}
    />
  );

export default EmojiWinkFill;
