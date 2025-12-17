import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-font-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTUuMDU3IDRoNS44ODZMMTEgNmgtLjVjLS4xOC0xLjA5Ni0uMzU2LTEuMTkyLTEuNjk0LTEuMjM1bC0uMjk4LS4wMXY2LjA5YzAgLjQ3LjEuNTgyLjkwMy42NTV2LjVINi41OXYtLjVjLjc5OS0uMDczLjg5OC0uMTg0Ljg5OC0uNjU0VjQuNzU1bC0uMjkzLjAxQzUuODU2IDQuODA4IDUuNjggNC45MDUgNS41IDZINXoiLz4KPC9zdmc+)*/
const FileFontFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-font-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5.057 4h5.886L11 6h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v6.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V4.755l-.293.01C5.856 4.808 5.68 4.905 5.5 6H5z"/>
</svg>
      )}
    />
  );

export default FileFontFill;
