import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![postcard-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yem02IDIuNXY3YS41LjUgMCAwIDEtMSAwdi03YS41LjUgMCAwIDEgMSAwbTMuNS44NzhjMS40ODItMS40MiA0Ljc5NSAxLjM5MiAwIDQuNjIyLTQuNzk1LTMuMjMtMS40ODItNi4wNDMgMC00LjYyMk0yIDUuNWEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAwIDFoLTNhLjUuNSAwIDAgMS0uNS0uNW0wIDJhLjUuNSAwIDAgMSAuNS0uNWgzYS41LjUgMCAwIDEgMCAxaC0zYS41LjUgMCAwIDEtLjUtLjVtMCAyYS41LjUgMCAwIDEgLjUtLjVoM2EuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const PostcardHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="postcard-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 2.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0m3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622M2 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default PostcardHeartFill;
