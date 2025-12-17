import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pause-btn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4yNSA1QzUuNTYgNSA1IDUuNTYgNSA2LjI1djMuNWExLjI1IDEuMjUgMCAxIDAgMi41IDB2LTMuNUM3LjUgNS41NiA2Ljk0IDUgNi4yNSA1bTMuNSAwYy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYzLjVhMS4yNSAxLjI1IDAgMSAwIDIuNSAwdi0zLjVDMTEgNS41NiAxMC40NCA1IDkuNzUgNSIvPgogIDxwYXRoIGQ9Ik0wIDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTE1IDBhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF6Ii8+Cjwvc3ZnPg==)*/
const PauseBtn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pause-btn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default PauseBtn;
