import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![highlighter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4wOTYuNjQ0YTIgMiAwIDAgMSAyLjc5MS4wMzZsMS40MzMgMS40MzNhMiAyIDAgMCAxIC4wMzUgMi43OTFsLS40MTMuNDM1LTguMDcgOC45OTVhLjUuNSAwIDAgMS0uMzcyLjE2NmgtM2EuNS41IDAgMCAxLS4yMzQtLjA1OGwtLjQxMi40MTJBLjUuNSAwIDAgMSAyLjUgMTVoLTJhLjUuNSAwIDAgMS0uMzU0LS44NTRsMS40MTItMS40MTJBLjUuNSAwIDAgMSAxLjUgMTIuNXYtM2EuNS41IDAgMCAxIC4xNjYtLjM3Mmw4Ljk5NS04LjA3em0tLjExNSAxLjQ3TDIuNzI3IDkuNTJsMy43NTMgMy43NTMgNy40MDYtOC4yNTR6bTMuNTg1IDIuMTcuMDY0LS4wNjhhMSAxIDAgMCAwLS4wMTctMS4zOTZMMTMuMTggMS4zODdhMSAxIDAgMCAwLTEuMzk2LS4wMThsLS4wNjguMDY1ek01LjI5MyAxMy41IDIuNSAxMC43MDd2MS41ODZMMy43MDcgMTMuNXoiLz4KPC9zdmc+)*/
const Highlighter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="highlighter"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"/>
</svg>
      )}
    />
  );

export default Highlighter;
