import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![camera-reels-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAzYTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIvPgogIDxwYXRoIGQ9Ik05IDZhMyAzIDAgMSAxIDAtNiAzIDMgMCAwIDEgMCA2Ii8+CiAgPHBhdGggZD0iTTkgNmguNWEyIDIgMCAwIDEgMS45ODMgMS43MzhsMy4xMS0xLjM4MkExIDEgMCAwIDEgMTYgNy4yNjl2Ny40NjJhMSAxIDAgMCAxLTEuNDA2LjkxM2wtMy4xMTEtMS4zODJBMiAyIDAgMCAxIDkuNSAxNkgyYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yeiIvPgo8L3N2Zz4=)*/
const CameraReelsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="camera-reels-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
</svg>
      )}
    />
  );

export default CameraReelsFill;
