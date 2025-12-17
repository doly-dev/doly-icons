import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pause-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTUgNi4yNWExLjI1IDEuMjUgMCAxIDEgMi41IDB2My41YTEuMjUgMS4yNSAwIDEgMS0yLjUgMHptMy41IDBhMS4yNSAxLjI1IDAgMSAxIDIuNSAwdjMuNWExLjI1IDEuMjUgMCAxIDEtMi41IDB6Ii8+Cjwvc3ZnPg==)*/
const PauseCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pause-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
</svg>
      )}
    />
  );

export default PauseCircle;
