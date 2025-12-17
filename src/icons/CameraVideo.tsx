import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![camera-video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDVhMiAyIDAgMCAxIDItMmg3LjVhMiAyIDAgMCAxIDEuOTgzIDEuNzM4bDMuMTEtMS4zODJBMSAxIDAgMCAxIDE2IDQuMjY5djcuNDYyYTEgMSAwIDAgMS0xLjQwNi45MTNsLTMuMTExLTEuMzgyQTIgMiAwIDAgMSA5LjUgMTNIMmEyIDIgMCAwIDEtMi0yem0xMS41IDUuMTc1IDMuNSAxLjU1NlY0LjI2OWwtMy41IDEuNTU2ek0yIDRhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoNy41YTEgMSAwIDAgMCAxLTFWNWExIDEgMCAwIDAtMS0xeiIvPgo8L3N2Zz4=)*/
const CameraVideo: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="camera-video"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default CameraVideo;
