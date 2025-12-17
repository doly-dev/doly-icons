import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-download-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBhNS41MyA1LjUzIDAgMCAwLTMuNTk0IDEuMzQyYy0uNzY2LjY2LTEuMzIxIDEuNTItMS40NjQgMi4zODNDMS4yNjYgNC4wOTUgMCA1LjU1NSAwIDcuMzE4IDAgOS4zNjYgMS43MDggMTEgMy43ODEgMTFINy41VjUuNWEuNS41IDAgMCAxIDEgMFYxMWg0LjE4OEMxNC41MDIgMTEgMTYgOS41NyAxNiA3Ljc3M2MwLTEuNjM2LTEuMjQyLTIuOTY5LTIuODM0LTMuMTk0QzEyLjkyMyAxLjk5OSAxMC42OSAwIDggMG0tLjM1NCAxNS44NTRhLjUuNSAwIDAgMCAuNzA4IDBsMy0zYS41LjUgMCAwIDAtLjcwOC0uNzA4TDguNSAxNC4yOTNWMTFoLTF2My4yOTNsLTIuMTQ2LTIuMTQ3YS41LjUgMCAwIDAtLjcwOC43MDh6Ii8+Cjwvc3ZnPg==)*/
const CloudDownloadFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-download-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
</svg>
      )}
    />
  );

export default CloudDownloadFill;
