import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-laughing](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTEyLjMzMSA5LjVhMSAxIDAgMCAxIDAgMUE1IDUgMCAwIDEgOCAxM2E1IDUgMCAwIDEtNC4zMy0yLjVBMSAxIDAgMCAxIDQuNTM1IDloNi45M2ExIDEgMCAwIDEgLjg2Ni41TTcgNi41YzAgLjgyOC0uNDQ4IDAtMSAwcy0xIC44MjgtMSAwUzUuNDQ4IDUgNiA1czEgLjY3MiAxIDEuNW00IDBjMCAuODI4LS40NDggMC0xIDBzLTEgLjgyOC0xIDBTOS40NDggNSAxMCA1czEgLjY3MiAxIDEuNSIvPgo8L3N2Zz4=)*/
const EmojiLaughing: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-laughing"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
      )}
    />
  );

export default EmojiLaughing;
