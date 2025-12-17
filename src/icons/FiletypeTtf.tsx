import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-ttf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMmgtMnYtMWgyYTEgMSAwIDAgMCAxLTFWNC41aC0yQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2OUgyVjJhMiAyIDAgMCAxIDItMmg1LjV6TTEuOTI4IDE1Ljg0OXYtMy4zMzdoMi4yNjl2My4zMzdoLjc5NHYtMy4zMzdoMS4xMzd2LS42NjJIMHYuNjYyaDEuMTM0djMuMzM3em01LjMxNS0xLjU5djEuNTloLS43OTFWMTEuODVIOXYuNjUzSDcuMjQzdjEuMTE3aDEuNjA1di42Mzh6Ii8+Cjwvc3ZnPg==)*/
const FiletypeTtf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-ttf"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.928 15.849v-3.337h2.269v3.337h.794v-3.337h1.137v-.662H0v.662h1.134v3.337zm5.315-1.59v1.59h-.791V11.85H9v.653H7.243v1.117h1.605v.638z"/>
</svg>
      )}
    />
  );

export default FiletypeTtf;
