import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd-rack-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2MWEyIDIgMCAwIDAgMiAyaDF2MkgyYTIgMiAwIDAgMC0yIDJ2MWEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTFhMiAyIDAgMCAwLTItMmgtMVY3aDFhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6bS41IDNhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFtMiAwYS41LjUgMCAxIDEgMC0xIC41LjUgMCAwIDEgMCAxbS0yIDdhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFtMiAwYS41LjUgMCAxIDEgMC0xIC41LjUgMCAwIDEgMCAxTTEyIDd2Mkg0Vjd6Ii8+Cjwvc3ZnPg==)*/
const HddRackFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd-rack-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 7v2H4V7z"/>
</svg>
      )}
    />
  );

export default HddRackFill;
