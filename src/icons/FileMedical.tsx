import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDQuNWEuNS41IDAgMCAwLTEgMHYuNjM0bC0uNTQ5LS4zMTdhLjUuNSAwIDEgMC0uNS44NjZMNyA2bC0uNTQ5LjMxN2EuNS41IDAgMSAwIC41Ljg2NmwuNTQ5LS4zMTdWNy41YS41LjUgMCAxIDAgMSAwdi0uNjM0bC41NDkuMzE3YS41LjUgMCAxIDAgLjUtLjg2Nkw5IDZsLjU0OS0uMzE3YS41LjUgMCAxIDAtLjUtLjg2NmwtLjU0OS4zMTd6TTUuNSA5YS41LjUgMCAwIDAgMCAxaDVhLjUuNSAwIDAgMCAwLTF6bTAgMmEuNS41IDAgMCAwIDAgMWg1YS41LjUgMCAwIDAgMC0xeiIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAxIDItMmg4YTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ6bTEwLTFINGExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMSIvPgo8L3N2Zz4=)*/
const FileMedical: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-medical"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 4.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L7 6l-.549.317a.5.5 0 1 0 .5.866l.549-.317V7.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L9 6l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zM5.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default FileMedical;
