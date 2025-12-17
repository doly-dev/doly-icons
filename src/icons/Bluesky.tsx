import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bluesky](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy40NjggMS45NDhDNS4zMDMgMy4zMjUgNy4yNzYgNi4xMTggOCA3LjYxNmMuNzI1LTEuNDk4IDIuNjk4LTQuMjkgNC41MzItNS42NjhDMTMuODU1Ljk1NSAxNiAuMTg2IDE2IDIuNjMyYzAgLjQ4OS0uMjggNC4xMDUtLjQ0NCA0LjY5Mi0uNTcyIDIuMDQtMi42NTMgMi41NjEtNC41MDQgMi4yNDYgMy4yMzYuNTUxIDQuMDYgMi4zNzUgMi4yODEgNC4yLTMuMzc2IDMuNDY0LTQuODUyLS44Ny01LjIzLTEuOTgtLjA3LS4yMDQtLjEwMy0uMy0uMTAzLS4yMTggMC0uMDgxLS4wMzMuMDE0LS4xMDIuMjE4LS4zNzkgMS4xMS0xLjg1NSA1LjQ0NC01LjIzMSAxLjk4LTEuNzc4LTEuODI1LS45NTUtMy42NSAyLjI4LTQuMi0xLjg1LjMxNS0zLjkzMi0uMjA1LTQuNTAzLTIuMjQ2Qy4yOCA2LjczNyAwIDMuMTIgMCAyLjYzMiAwIC4xODYgMi4xNDUuOTU1IDMuNDY4IDEuOTQ4Ii8+Cjwvc3ZnPg==)*/
const Bluesky: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bluesky"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
</svg>
      )}
    />
  );

export default Bluesky;
