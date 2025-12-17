import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41IDUuNWEuNS41IDAgMCAwLTEgMHYuNjM0bC0uNTQ5LS4zMTdhLjUuNSAwIDEgMC0uNS44NjZMNiA3bC0uNTQ5LjMxN2EuNS41IDAgMSAwIC41Ljg2NmwuNTQ5LS4zMTdWOC41YS41LjUgMCAxIDAgMSAwdi0uNjM0bC41NDkuMzE3YS41LjUgMCAxIDAgLjUtLjg2Nkw4IDdsLjU0OS0uMzE3YS41LjUgMCAxIDAtLjUtLjg2NmwtLjU0OS4zMTd6bS0yIDQuNWEuNS41IDAgMCAwIDAgMWg1YS41LjUgMCAwIDAgMC0xem0wIDJhLjUuNSAwIDAgMCAwIDFoNWEuNS41IDAgMCAwIDAtMXoiLz4KICA8cGF0aCBkPSJNMTQgMTRWNC41TDkuNSAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMk05LjUgM0ExLjUgMS41IDAgMCAwIDExIDQuNWgyVjE0YTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMWg1LjV6Ii8+Cjwvc3ZnPg==)*/
const FileEarmarkMedical: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-medical"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkMedical;
