import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![git](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuNjk4IDcuMjg3IDguNzEyLjMwMmExLjAzIDEuMDMgMCAwIDAtMS40NTcgMGwtMS40NSAxLjQ1IDEuODQgMS44NGExLjIyMyAxLjIyMyAwIDAgMSAxLjU1IDEuNTZsMS43NzMgMS43NzRhMS4yMjQgMS4yMjQgMCAwIDEgMS4yNjcgMi4wMjUgMS4yMjYgMS4yMjYgMCAwIDEtMi4wMDItMS4zMzRMOC41OCA1Ljk2M3Y0LjM1M2ExLjIyNiAxLjIyNiAwIDEgMS0xLjAwOC0uMDM2VjUuODg3YTEuMjI2IDEuMjI2IDAgMCAxLS42NjYtMS42MDhMNS4wOTMgMi40NjVsLTQuNzkgNC43OWExLjAzIDEuMDMgMCAwIDAgMCAxLjQ1N2w2Ljk4NiA2Ljk4NmExLjAzIDEuMDMgMCAwIDAgMS40NTcgMGw2Ljk1My02Ljk1M2ExLjAzIDEuMDMgMCAwIDAgMC0xLjQ1NyIvPgo8L3N2Zz4=)*/
const Git: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="git"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
</svg>
      )}
    />
  );

export default Git;
