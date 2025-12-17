import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd-stack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMTBhMSAxIDAgMCAxIDEgMXYxYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xdi0xYTEgMSAwIDAgMSAxLTF6TTIgOWEyIDIgMCAwIDAtMiAydjFhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi0xYTIgMiAwIDAgMC0yLTJ6Ii8+CiAgPHBhdGggZD0iTTUgMTEuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0tMiAwYS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwTTE0IDNhMSAxIDAgMCAxIDEgMXYxYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMXpNMiAyYTIgMiAwIDAgMC0yIDJ2MWEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yeiIvPgogIDxwYXRoIGQ9Ik01IDQuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0tMiAwYS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwIi8+Cjwvc3ZnPg==)*/
const HddStack: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd-stack"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"/>
  <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
  <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default HddStack;
