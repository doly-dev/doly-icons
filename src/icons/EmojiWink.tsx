import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-wink](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTQuMjg1IDkuNTY3YS41LjUgMCAwIDEgLjY4My4xODNBMy41IDMuNSAwIDAgMCA4IDExLjVhMy41IDMuNSAwIDAgMCAzLjAzMi0xLjc1LjUuNSAwIDEgMSAuODY2LjVBNC41IDQuNSAwIDAgMSA4IDEyLjVhNC41IDQuNSAwIDAgMS0zLjg5OC0yLjI1LjUuNSAwIDAgMSAuMTgzLS42ODNNNyA2LjVDNyA3LjMyOCA2LjU1MiA4IDYgOHMtMS0uNjcyLTEtMS41UzUuNDQ4IDUgNiA1czEgLjY3MiAxIDEuNW0xLjc1Ny0uNDM3YS41LjUgMCAwIDEgLjY4LjE5NC45My45MyAwIDAgMCAuODEzLjQ5M2MuMzM5IDAgLjY0NS0uMTkuODEzLS40OTNhLjUuNSAwIDEgMSAuODc0LjQ4NkExLjkzIDEuOTMgMCAwIDEgMTAuMjUgNy43NWMtLjczIDAtMS4zNTYtLjQxMi0xLjY4Ny0xLjAwN2EuNS41IDAgMCAxIC4xOTQtLjY4Ii8+Cjwvc3ZnPg==)*/
const EmojiWink: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-wink"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.757-.437a.5.5 0 0 1 .68.194.93.93 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.93 1.93 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68"/>
</svg>
      )}
    />
  );

export default EmojiWink;
