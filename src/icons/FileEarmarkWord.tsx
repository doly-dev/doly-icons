import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-word](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS40ODUgNi44NzlhLjUuNSAwIDEgMC0uOTcuMjQybDEuNSA2YS41LjUgMCAwIDAgLjk2Ny4wMUw4IDkuNDAybDEuMDE4IDMuNzNhLjUuNSAwIDAgMCAuOTY3LS4wMWwxLjUtNmEuNS41IDAgMCAwLS45Ny0uMjQybC0xLjAzNiA0LjE0NC0uOTk3LTMuNjU1YS41LjUgMCAwIDAtLjk2NCAwbC0uOTk3IDMuNjU1TDUuNDg1IDYuODh6Ii8+CiAgPHBhdGggZD0iTTE0IDE0VjQuNUw5LjUgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJNOS41IDNBMS41IDEuNSAwIDAgMCAxMSA0LjVoMlYxNGExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoNS41eiIvPgo8L3N2Zz4=)*/
const FileEarmarkWord: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-word"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkWord;
