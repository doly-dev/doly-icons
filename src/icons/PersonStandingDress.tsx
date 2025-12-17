import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-standing-dress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAzYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzbS0uNSAxMi4yNVYxMmgxdjMuMjVhLjc1Ljc1IDAgMCAwIDEuNSAwVjEyaDFsLTEtNXYtLjIxNWEuMjg1LjI4NSAwIDAgMSAuNTYtLjA3OGwuNzkzIDIuNzc3YS43MTEuNzExIDAgMSAwIDEuMzY0LS40MDVsLTEuMDY1LTMuNDYxQTMgMyAwIDAgMCA4Ljc4NCAzLjVINy4yMTZhMyAzIDAgMCAwLTIuODY4IDIuMTE4TDMuMjgzIDkuMDc5YS43MTEuNzExIDAgMSAwIDEuMzY1LjQwNWwuNzkzLTIuNzc3YS4yODUuMjg1IDAgMCAxIC41Ni4wNzhWN2wtMSA1aDF2My4yNWEuNzUuNzUgMCAwIDAgMS41IDBaIi8+Cjwvc3ZnPg==)*/
const PersonStandingDress: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-standing-dress"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z"/>
</svg>
      )}
    />
  );

export default PersonStandingDress;
