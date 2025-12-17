import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-tm-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yem0zLjI5NSAzLjk5NVYxMUg0LjEwNFY1Ljk5NWgtMS43VjVIN3YuOTk0SDUuMjk1ek04LjY5MiA3LjAxVjExSDcuNjMzVjUuMDAxaDEuMjA5bDEuNzEgMy44OTRoLjAzOWwxLjcxLTMuODk0SDEzLjVWMTFoLTEuMDcyVjcuMDFoLS4wNTdsLTEuNDIgMy4yMzloLS43NzNMOC43NSA3LjAwOGgtLjA1OHoiLz4KPC9zdmc+)*/
const BadgeTmFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-tm-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.295 3.995V11H4.104V5.995h-1.7V5H7v.994H5.295zM8.692 7.01V11H7.633V5.001h1.209l1.71 3.894h.039l1.71-3.894H13.5V11h-1.072V7.01h-.057l-1.42 3.239h-.773L8.75 7.008h-.058z"/>
</svg>
      )}
    />
  );

export default BadgeTmFill;
