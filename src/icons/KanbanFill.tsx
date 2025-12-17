import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![kanban-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDExYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yem01IDJoMWExIDEgMCAwIDEgMSAxdjNhMSAxIDAgMCAxLTEgMWgtMWExIDEgMCAwIDEtMS0xVjNhMSAxIDAgMCAxIDEtMW0tNSAxYTEgMSAwIDAgMSAxLTFoMWExIDEgMCAwIDEgMSAxdjdhMSAxIDAgMCAxLTEgMWgtMWExIDEgMCAwIDEtMS0xem05LTFoMWExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDAgMS0xIDFoLTFhMSAxIDAgMCAxLTEtMVYzYTEgMSAwIDAgMSAxLTEiLz4KPC9zdmc+)*/
const KanbanFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="kanban-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default KanbanFill;
