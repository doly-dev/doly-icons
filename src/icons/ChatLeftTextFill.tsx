import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-left-text-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJINC40MTRhMSAxIDAgMCAwLS43MDcuMjkzTC44NTQgMTUuMTQ2QS41LjUgMCAwIDEgMCAxNC43OTN6bTMuNSAxYS41LjUgMCAwIDAgMCAxaDlhLjUuNSAwIDAgMCAwLTF6bTAgMi41YS41LjUgMCAwIDAgMCAxaDlhLjUuNSAwIDAgMCAwLTF6bTAgMi41YS41LjUgMCAwIDAgMCAxaDVhLjUuNSAwIDAgMCAwLTF6Ii8+Cjwvc3ZnPg==)*/
const ChatLeftTextFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-left-text-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default ChatLeftTextFill;
