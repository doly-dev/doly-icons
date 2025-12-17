import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bell-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4xNjQgMTRIMTVjLS4yOTktLjE5OS0uNTU3LS41NTMtLjc4LTEtLjktMS44LTEuMjItNS4xMi0xLjIyLTZxMC0uMzk2LS4wNi0uNzc2bC0uOTM4LjkzOGMuMDIuNzA4LjE1NyAyLjE1NC40NTcgMy41OC4xNjEuNzY3LjM3NyAxLjU2Ni42NjMgMi4yNThINi4xNjR6bTUuNTgxLTkuOTFhNCA0IDAgMCAwLTEuOTQ4LTEuMDFMOCAyLjkxN2wtLjc5Ny4xNjFBNCA0IDAgMCAwIDQgN2MwIC42MjgtLjEzNCAyLjE5Ny0uNDU5IDMuNzQycS0uMDc1LjM1OC0uMTY2LjcxOGwtMS42NTMgMS42NTNxLjAzLS4wNTUuMDU5LS4xMTNDMi42NzkgMTEuMiAzIDcuODggMyA3YzAtMi40MiAxLjcyLTQuNDQgNC4wMDUtNC45MDFhMSAxIDAgMSAxIDEuOTkgMGMuOTQyLjE5IDEuNzg4LjY0NSAyLjQ1NyAxLjI4NHpNMTAgMTVhMiAyIDAgMSAxLTQgMHptLTkuMzc1LjYyNWEuNTMuNTMgMCAwIDAgLjc1Ljc1bDE0Ljc1LTE0Ljc1YS41My41MyAwIDAgMC0uNzUtLjc1eiIvPgo8L3N2Zz4=)*/
const BellSlash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bell-slash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6q0-.396-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164zm5.581-9.91a4 4 0 0 0-1.948-1.01L8 2.917l-.797.161A4 4 0 0 0 4 7c0 .628-.134 2.197-.459 3.742q-.075.358-.166.718l-1.653 1.653q.03-.055.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284zM10 15a2 2 0 1 1-4 0zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75z"/>
</svg>
      )}
    />
  );

export default BellSlash;
