import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bullseye](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTggMTNBNSA1IDAgMSAxIDggM2E1IDUgMCAwIDEgMCAxMG0wIDFBNiA2IDAgMSAwIDggMmE2IDYgMCAwIDAgMCAxMiIvPgogIDxwYXRoIGQ9Ik04IDExYTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNm0wIDFhNCA0IDAgMSAwIDAtOCA0IDQgMCAwIDAgMCA4Ii8+CiAgPHBhdGggZD0iTTkuNSA4YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwIi8+Cjwvc3ZnPg==)*/
const Bullseye: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bullseye"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
      )}
    />
  );

export default Bullseye;
