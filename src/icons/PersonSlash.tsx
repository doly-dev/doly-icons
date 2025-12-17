import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuODc5IDEwLjQxNGEyLjUwMSAyLjUwMSAwIDAgMC0zLjQ2NSAzLjQ2NXptLjcwNy43MDctMy40NjUgMy40NjVhMi41MDEgMi41MDEgMCAwIDAgMy40NjUtMy40NjVtLTQuNTYtMS4wOTZhMy41IDMuNSAwIDEgMSA0Ljk0OSA0Ljk1IDMuNSAzLjUgMCAwIDEtNC45NS00Ljk1Wk0xMSA1YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgME04IDdhMiAyIDAgMSAwIDAtNCAyIDIgMCAwIDAgMCA0bS4yNTYgN2E0LjUgNC41IDAgMCAxLS4yMjktMS4wMDRIM2MuMDAxLS4yNDYuMTU0LS45ODYuODMyLTEuNjY0QzQuNDg0IDEwLjY4IDUuNzExIDEwIDggMTBxLjM5IDAgLjc0LjAyNWMuMjI2LS4zNDEuNDk2LS42NS44MDQtLjkxOFE4Ljg0NCA5LjAwMiA4IDljLTUgMC02IDMtNiA0czEgMSAxIDF6Ii8+Cjwvc3ZnPg==)*/
const PersonSlash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-slash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465m-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg>
      )}
    />
  );

export default PersonSlash;
