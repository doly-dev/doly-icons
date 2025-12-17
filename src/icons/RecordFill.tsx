import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![record-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDEzQTUgNSAwIDEgMCA4IDNhNSA1IDAgMCAwIDAgMTAiLz4KPC9zdmc+)*/
const RecordFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="record-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"/>
</svg>
      )}
    />
  );

export default RecordFill;
