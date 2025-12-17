import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-grimace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA2LjI1YzAgLjY5LS40NDggMS4yNS0xIDEuMjVzLTEtLjU2LTEtMS4yNVM1LjQ0OCA1IDYgNXMxIC41NiAxIDEuMjVtMyAxLjI1Yy41NTIgMCAxLS41NiAxLTEuMjVTMTAuNTUyIDUgMTAgNXMtMSAuNTYtMSAxLjI1LjQ0OCAxLjI1IDEgMS4yNW0yLjk4IDMuMjVBMS41IDEuNSAwIDAgMSAxMS41IDEyaC03YTEuNSAxLjUgMCAwIDEtMS40OC0xLjc0N3YtLjAwM0ExLjUgMS41IDAgMCAxIDQuNSA5aDdhMS41IDEuNSAwIDAgMSAxLjQ4IDEuNzQ3em0tOC40OC43NWguMjV2LS43NUgzLjUzMWExIDEgMCAwIDAgLjk2OS43NW03IDBhMSAxIDAgMCAwIC45NjktLjc1SDExLjI1di43NXptLjk2OS0xLjI1YTEgMSAwIDAgMC0uOTY5LS43NWgtLjI1di43NXpNNC41IDkuNWExIDEgMCAwIDAtLjk2OS43NUg0Ljc1VjkuNXptMS43NSAydi0uNzVoLTF2Ljc1em0uNSAwaDF2LS43NWgtMXptMS41IDBoMXYtLjc1aC0xem0xLjUgMGgxdi0uNzVoLTF6bTEtMmgtMXYuNzVoMXptLTEuNSAwaC0xdi43NWgxem0tMS41IDBoLTF2Ljc1aDF6bS0xLjUgMGgtMXYuNzVoMXoiLz4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2bTAtMUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0Ii8+Cjwvc3ZnPg==)*/
const EmojiGrimace: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-grimace"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 6.25c0 .69-.448 1.25-1 1.25s-1-.56-1-1.25S5.448 5 6 5s1 .56 1 1.25m3 1.25c.552 0 1-.56 1-1.25S10.552 5 10 5s-1 .56-1 1.25.448 1.25 1 1.25m2.98 3.25A1.5 1.5 0 0 1 11.5 12h-7a1.5 1.5 0 0 1-1.48-1.747v-.003A1.5 1.5 0 0 1 4.5 9h7a1.5 1.5 0 0 1 1.48 1.747zm-8.48.75h.25v-.75H3.531a1 1 0 0 0 .969.75m7 0a1 1 0 0 0 .969-.75H11.25v.75zm.969-1.25a1 1 0 0 0-.969-.75h-.25v.75zM4.5 9.5a1 1 0 0 0-.969.75H4.75V9.5zm1.75 2v-.75h-1v.75zm.5 0h1v-.75h-1zm1.5 0h1v-.75h-1zm1.5 0h1v-.75h-1zm1-2h-1v.75h1zm-1.5 0h-1v.75h1zm-1.5 0h-1v.75h1zm-1.5 0h-1v.75h1z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14"/>
</svg>
      )}
    />
  );

export default EmojiGrimace;
