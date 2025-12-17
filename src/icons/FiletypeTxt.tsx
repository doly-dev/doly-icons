import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-txt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMmgtMnYtMWgyYTEgMSAwIDAgMCAxLTFWNC41aC0yQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2OUgyVjJhMiAyIDAgMCAxIDItMmg1LjV6TTEuOTI4IDE1Ljg0OXYtMy4zMzdoMS4xMzZ2LS42NjJIMHYuNjYyaDEuMTM0djMuMzM3em00LjY4OS0zLjk5OWgtLjg5NEw0LjkgMTMuMjg5aC0uMDM1bC0uODMyLTEuNDM5aC0uOTMybDEuMjI4IDEuOTgzLTEuMjQgMi4wMTZoLjg2MmwuODUzLTEuNDE1aC4wMzVsLjg1IDEuNDE1aC45MDdsLTEuMjUzLTEuOTkyem0xLjkzLjY2MnYzLjMzN2gtLjc5NHYtMy4zMzdINi42MTl2LS42NjJoMy4wNjR2LjY2Mkg4LjU0NloiLz4KPC9zdmc+)*/
const FiletypeTxt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-txt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.928 15.849v-3.337h1.136v-.662H0v.662h1.134v3.337zm4.689-3.999h-.894L4.9 13.289h-.035l-.832-1.439h-.932l1.228 1.983-1.24 2.016h.862l.853-1.415h.035l.85 1.415h.907l-1.253-1.992zm1.93.662v3.337h-.794v-3.337H6.619v-.662h3.064v.662H8.546Z"/>
</svg>
      )}
    />
  );

export default FiletypeTxt;
