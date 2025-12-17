import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-no-parking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2bTUuMjktMy40MTZMOS42MyA4LjkyM0MxMC41IDguNTIzIDExIDcuNjYgMTEgNi41ODZjMC0xLjQ4Mi0uOTU1LTIuNTg0LTIuNTM4LTIuNTg0SDUuNXYuNzlMMy40MTYgMi43MWE3IDcgMCAwIDEgOS44NzQgOS44NzRtLS43MDYuNzA3QTcgNyAwIDAgMSAyLjcxIDMuNDE3bDIuNzkgMi43OVYxMmgxLjI4M1Y5LjE2NGgxLjY3NHpNOC43MjYgOC4wMTkgNi43NzcgNi4wN3YtLjk2Nkg4LjI3Yy44OTMgMCAxLjQxOS41MzkgMS40MTkgMS40ODIgMCAuNzY5LS4zNSAxLjI3My0uOTYzIDEuNDMzbS0xLjk0OS0uNTM0LjU5LjU5aC0uNTl6Ii8+Cjwvc3ZnPg==)*/
const SignNoParking: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-no-parking"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m5.29-3.416L9.63 8.923C10.5 8.523 11 7.66 11 6.586c0-1.482-.955-2.584-2.538-2.584H5.5v.79L3.416 2.71a7 7 0 0 1 9.874 9.874m-.706.707A7 7 0 0 1 2.71 3.417l2.79 2.79V12h1.283V9.164h1.674zM8.726 8.019 6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433m-1.949-.534.59.59h-.59z"/>
</svg>
      )}
    />
  );

export default SignNoParking;
