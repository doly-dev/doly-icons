import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ui-checks-grid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxMGgzYTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMXYtM2ExIDEgMCAwIDEgMS0xbTktOWgzYTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxaC0zYTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xbTAgOWExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDEgMWgzYTEgMSAwIDAgMCAxLTF2LTNhMSAxIDAgMCAwLTEtMXptMC0xMGEyIDIgMCAwIDAtMiAydjNhMiAyIDAgMCAwIDIgMmgzYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yek0yIDlhMiAyIDAgMCAwLTIgMnYzYTIgMiAwIDAgMCAyIDJoM2EyIDIgMCAwIDAgMi0ydi0zYTIgMiAwIDAgMC0yLTJ6bTcgMmEyIDIgMCAwIDEgMi0yaDNhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0yIDJoLTNhMiAyIDAgMCAxLTItMnpNMCAyYTIgMiAwIDAgMSAyLTJoM2EyIDIgMCAwIDEgMiAydjNhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTUuMzU0Ljg1NGEuNS41IDAgMSAwLS43MDgtLjcwOEwzIDMuNzkzbC0uNjQ2LS42NDdhLjUuNSAwIDEgMC0uNzA4LjcwOGwxIDFhLjUuNSAwIDAgMCAuNzA4IDB6Ii8+Cjwvc3ZnPg==)*/
const UiChecksGrid: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ui-checks-grid"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z"/>
</svg>
      )}
    />
  );

export default UiChecksGrid;
