import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![messenger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA3Ljc2QzAgMy4zMDEgMy40OTMgMCA4IDBzOCAzLjMwMSA4IDcuNzYtMy40OTMgNy43Ni04IDcuNzZjLS44MSAwLTEuNTg2LS4xMDctMi4zMTYtLjMwN2EuNjQuNjQgMCAwIDAtLjQyNy4wM2wtMS41ODguNzAyYS42NC42NCAwIDAgMS0uODk4LS41NjZsLS4wNDQtMS40MjNhLjY0LjY0IDAgMCAwLS4yMTUtLjQ1NkMuOTU2IDEyLjEwOCAwIDEwLjA5MiAwIDcuNzZtNS41NDYtMS40NTktMi4zNSAzLjcyOGMtLjIyNS4zNTguMjE0Ljc2MS41NTEuNTA2bDIuNTI1LTEuOTE2YS40OC40OCAwIDAgMSAuNTc4LS4wMDJsMS44NjkgMS40MDJhMS4yIDEuMiAwIDAgMCAxLjczNS0uMzJsMi4zNS0zLjcyOGMuMjI2LS4zNTgtLjIxNC0uNzYxLS41NTEtLjUwNkw5LjcyOCA3LjM4MWEuNDguNDggMCAwIDEtLjU3OC4wMDJMNy4yODEgNS45OGExLjIgMS4yIDAgMCAwLTEuNzM1LjMyeiIvPgo8L3N2Zz4=)*/
const Messenger: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="messenger"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
</svg>
      )}
    />
  );

export default Messenger;
