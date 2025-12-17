import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![type-h2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy40OTUgMTNWMy4yMDFINi4xNzR2NC4xNUgxLjMyVjMuMkgwVjEzaDEuMzJWOC41MTNoNC44NTRWMTN6bTMuMTc0LTcuMDcxdi0uMDVjMC0uOTM0LjY2LTEuNzUyIDEuODAxLTEuNzUyIDEuMDA1IDAgMS43Ni42MzkgMS43NiAxLjY1MSAwIC44OTgtLjU4MiAxLjU4LTEuMTIgMi4xOWwtMy42OSA0LjJWMTNoNi4zMzF2LTEuMTQ5aC00LjQ1OHYtLjA3OUwxMy45IDguNzg2Yy45MTktMS4wNDggMS42NjYtMS44NzQgMS42NjYtMy4xMDFDMTUuNTY1IDQuMTQ5IDE0LjM1IDMgMTIuNDk5IDMgMTAuNDYgMyA5LjM4NCA0LjM5MyA5LjM4NCA1Ljg3OXYuMDV6Ii8+Cjwvc3ZnPg==)*/
const TypeH2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="type-h2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13zm3.174-7.071v-.05c0-.934.66-1.752 1.801-1.752 1.005 0 1.76.639 1.76 1.651 0 .898-.582 1.58-1.12 2.19l-3.69 4.2V13h6.331v-1.149h-4.458v-.079L13.9 8.786c.919-1.048 1.666-1.874 1.666-3.101C15.565 4.149 14.35 3 12.499 3 10.46 3 9.384 4.393 9.384 5.879v.05z"/>
</svg>
      )}
    />
  );

export default TypeH2;
