import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![kanban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuNSAxYTEgMSAwIDAgMSAxIDF2MTJhMSAxIDAgMCAxLTEgMWgtMTFhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTF6bS0xMS0xYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMWEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNNi41IDNhMSAxIDAgMCAxIDEtMWgxYTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxaC0xYTEgMSAwIDAgMS0xLTF6bS00IDBhMSAxIDAgMCAxIDEtMWgxYTEgMSAwIDAgMSAxIDF2N2ExIDEgMCAwIDEtMSAxaC0xYTEgMSAwIDAgMS0xLTF6bTggMGExIDEgMCAwIDEgMS0xaDFhMSAxIDAgMCAxIDEgMXYxMGExIDEgMCAwIDEtMSAxaC0xYTEgMSAwIDAgMS0xLTF6Ii8+Cjwvc3ZnPg==)*/
const Kanban: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="kanban"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default Kanban;
