import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stoplights-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDBhMiAyIDAgMCAwLTIgMkgyYy4xNjcuNS44IDEuNiAyIDJ2MkgyYy4xNjcuNS44IDEuNiAyIDJ2MkgyYy4xNjcuNS44IDEuNiAyIDJ2MWEyIDIgMCAwIDAgMiAyaDRhMiAyIDAgMCAwIDItMnYtMWMxLjItLjQgMS44MzMtMS41IDItMmgtMlY4YzEuMi0uNCAxLjgzMy0xLjUgMi0yaC0yVjRjMS4yLS40IDEuODMzLTEuNSAyLTJoLTJhMiAyIDAgMCAwLTItMnptMy41IDMuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMG0wIDRhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBNOCAxM2ExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgMyIvPgo8L3N2Zz4=)*/
const StoplightsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stoplights-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6 0a2 2 0 0 0-2 2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1c1.2-.4 1.833-1.5 2-2h-2V8c1.2-.4 1.833-1.5 2-2h-2V4c1.2-.4 1.833-1.5 2-2h-2a2 2 0 0 0-2-2zm3.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
      )}
    />
  );

export default StoplightsFill;
