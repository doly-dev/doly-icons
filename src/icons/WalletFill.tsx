import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wallet-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDJBMS41IDEuNSAwIDAgMCAwIDMuNXYyaDZhLjUuNSAwIDAgMSAuNS41YzAgLjI1My4wOC42NDQuMzA2Ljk1OC4yMDcuMjg4LjU1Ny41NDIgMS4xOTQuNTQycy45ODctLjI1NCAxLjE5NC0uNTQyQzkuNDIgNi42NDQgOS41IDYuMjUzIDkuNSA2YS41LjUgMCAwIDEgLjUtLjVoNnYtMkExLjUgMS41IDAgMCAwIDE0LjUgMnoiLz4KICA8cGF0aCBkPSJNMTYgNi41aC01LjU1MWEyLjcgMi43IDAgMCAxLS40NDMgMS4wNDJDOS42MTMgOC4wODggOC45NjMgOC41IDggOC41cy0xLjYxMy0uNDEyLTIuMDA2LS45NThBMi43IDIuNyAwIDAgMSA1LjU1MSA2LjVIMHY2QTEuNSAxLjUgMCAwIDAgMS41IDE0aDEzYTEuNSAxLjUgMCAwIDAgMS41LTEuNXoiLz4KPC9zdmc+)*/
const WalletFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wallet-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
</svg>
      )}
    />
  );

export default WalletFill;
