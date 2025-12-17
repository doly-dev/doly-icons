import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-laughing-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2TTcgNi41YzAgLjUwMS0uMTY0LjM5Ni0uNDE1LjIzNUM2LjQyIDYuNjI5IDYuMjE4IDYuNSA2IDYuNXMtLjQyLjEzLS41ODUuMjM1QzUuMTY0IDYuODk2IDUgNyA1IDYuNSA1IDUuNjcyIDUuNDQ4IDUgNiA1czEgLjY3MiAxIDEuNW01LjMzMSAzYTEgMSAwIDAgMSAwIDFBNSA1IDAgMCAxIDggMTNhNSA1IDAgMCAxLTQuMzMtMi41QTEgMSAwIDAgMSA0LjUzNSA5aDYuOTNhMSAxIDAgMCAxIC44NjYuNW0tMS43NDYtMi43NjVDMTAuNDIgNi42MjkgMTAuMjE4IDYuNSAxMCA2LjVzLS40Mi4xMy0uNTg1LjIzNUM5LjE2NCA2Ljg5NiA5IDcgOSA2LjVjMC0uODI4LjQ0OC0xLjUgMS0xLjVzMSAuNjcyIDEgMS41YzAgLjUwMS0uMTY0LjM5Ni0uNDE1LjIzNSIvPgo8L3N2Zz4=)*/
const EmojiLaughingFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-laughing-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235"/>
</svg>
      )}
    />
  );

export default EmojiLaughingFill;
