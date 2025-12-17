import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-vo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41MDggMTFoMS40MjlsMS45OS01Ljk5OUg2LjYxTDUuMjc3IDkuNzA4SDUuMjJMMy44NzUgNS4wMDFIMi41ek0xMy41IDguMzl2LS43N2MwLTEuNjk2LS45NjItMi43MzMtMi41NjYtMi43MzNTOC4zNjMgNS45MTYgOC4zNjMgNy42MjF2Ljc2OWMwIDEuNjkxLjk2NyAyLjcyNCAyLjU3IDIuNzI0IDEuNjA1IDAgMi41NjctMS4wMzMgMi41NjctMi43MjRtLTEuMjA0LS43Nzh2Ljc4MmMwIDEuMTU2LS41NzEgMS43MzItMS4zNjIgMS43MzItLjc5NiAwLTEuMzYzLS41NzYtMS4zNjMtMS43MzJ2LS43ODJjMC0xLjE1Ni41NjctMS43MzYgMS4zNjMtMS43MzYuNzkgMCAxLjM2Mi41OCAxLjM2MiAxLjczNiIvPgogIDxwYXRoIGQ9Ik0xNCAzYTEgMSAwIDAgMSAxIDF2OGExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTF6TTIgMmEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMnoiLz4KPC9zdmc+)*/
const BadgeVo: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-vo"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5zM13.5 8.39v-.77c0-1.696-.962-2.733-2.566-2.733S8.363 5.916 8.363 7.621v.769c0 1.691.967 2.724 2.57 2.724 1.605 0 2.567-1.033 2.567-2.724m-1.204-.778v.782c0 1.156-.571 1.732-1.362 1.732-.796 0-1.363-.576-1.363-1.732v-.782c0-1.156.567-1.736 1.363-1.736.79 0 1.362.58 1.362 1.736"/>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default BadgeVo;
