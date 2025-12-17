import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![type-strikethrough](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4zMzMgNS42ODZjMCAuMzEuMDgzLjU4MS4yNy44MTRINS4xNjZhMi44IDIuOCAwIDAgMS0uMDk5LS43NmMwLTEuNjI3IDEuNDM2LTIuNzY4IDMuNDgtMi43NjggMS45NjkgMCAzLjM5IDEuMTc1IDMuNDQ1IDIuODVoLTEuMjNjLS4xMS0xLjA4LS45NjQtMS43NDMtMi4yNS0xLjc0My0xLjIzIDAtMi4xOC42MDItMi4xOCAxLjYwN3ptMi4xOTQgNy40NzhjLTIuMTUzIDAtMy41ODktMS4xMDctMy43MDUtMi44MWgxLjIzYy4xNDQgMS4wNiAxLjEyOSAxLjcwMyAyLjU0NCAxLjcwMyAxLjM0IDAgMi4zMS0uNzA1IDIuMzEtMS42NzUgMC0uODI3LS41NDctMS4zNzQtMS45MTQtMS42NzVMOC4wNDYgOC41SDF2LTFoMTR2MWgtMy41MDRjLjQ2OC40MzcuNjc1Ljk5NC42NzUgMS42OTcgMCAxLjgyNi0xLjQzNiAyLjk2Ny0zLjY0NCAyLjk2NyIvPgo8L3N2Zz4=)*/
const TypeStrikethrough: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="type-strikethrough"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.8 2.8 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967"/>
</svg>
      )}
    />
  );

export default TypeStrikethrough;
