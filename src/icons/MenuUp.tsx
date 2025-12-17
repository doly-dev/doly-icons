import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![menu-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy42NDYgMTUuODU0YS41LjUgMCAwIDAgLjcwOCAwTDEwLjIwNyAxNEgxNGEyIDIgMCAwIDAgMi0yVjNhMiAyIDAgMCAwLTItMkgyYTIgMiAwIDAgMC0yIDJ2OWEyIDIgMCAwIDAgMiAyaDMuNzkzek0xIDlWNmgxNHYzem0xNCAxdjJhMSAxIDAgMCAxLTEgMWgtMy43OTNhMSAxIDAgMCAwLS43MDcuMjkzbC0xLjUgMS41LTEuNS0xLjVBMSAxIDAgMCAwIDUuNzkzIDEzSDJhMSAxIDAgMCAxLTEtMXYtMnptMC01SDFWM2ExIDEgMCAwIDEgMS0xaDEyYTEgMSAwIDAgMSAxIDF6TTIgMTEuNWEuNS41IDAgMCAwIC41LjVoOGEuNS41IDAgMCAwIDAtMWgtOGEuNS41IDAgMCAwLS41LjVtMC00YS41LjUgMCAwIDAgLjUuNWgxMWEuNS41IDAgMCAwIDAtMWgtMTFhLjUuNSAwIDAgMC0uNS41bTAtNGEuNS41IDAgMCAwIC41LjVoNmEuNS41IDAgMCAwIDAtMWgtNmEuNS41IDAgMCAwLS41LjUiLz4KPC9zdmc+)*/
const MenuUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="menu-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793zM1 9V6h14v3zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default MenuUp;
