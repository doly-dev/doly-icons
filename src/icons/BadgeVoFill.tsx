import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-vo-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuMjk2IDguMzk0di0uNzgyYzAtMS4xNTYtLjU3MS0xLjczNi0xLjM2Mi0xLjczNi0uNzk2IDAtMS4zNjMuNTgtMS4zNjMgMS43MzZ2Ljc4MmMwIDEuMTU2LjU2NyAxLjczMiAxLjM2MyAxLjczMi43OSAwIDEuMzYyLS41NzYgMS4zNjItMS43MzIiLz4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yem0xMS41IDUuNjJ2Ljc3YzAgMS42OTEtLjk2MiAyLjcyNC0yLjU2NiAyLjcyNFM4LjM2MyAxMC4wODEgOC4zNjMgOC4zOXYtLjc3YzAtMS43MDQuOTY3LTIuNzMzIDIuNTctMi43MzMgMS42MDUgMCAyLjU2NyAxLjAzNyAyLjU2NyAyLjczNHpNNS45MzcgMTFINC41MDhMMi41IDUuMDAxaDEuMzc1TDUuMjIgOS43MDhoLjA1N0w2LjYxIDUuMDAxaDEuMzE4eiIvPgo8L3N2Zz4=)*/
const BadgeVoFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-vo-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.296 8.394v-.782c0-1.156-.571-1.736-1.362-1.736-.796 0-1.363.58-1.363 1.736v.782c0 1.156.567 1.732 1.363 1.732.79 0 1.362-.576 1.362-1.732"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm11.5 5.62v.77c0 1.691-.962 2.724-2.566 2.724S8.363 10.081 8.363 8.39v-.77c0-1.704.967-2.733 2.57-2.733 1.605 0 2.567 1.037 2.567 2.734zM5.937 11H4.508L2.5 5.001h1.375L5.22 9.708h.057L6.61 5.001h1.318z"/>
</svg>
      )}
    />
  );

export default BadgeVoFill;
