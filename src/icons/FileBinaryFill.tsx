import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-binary-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41MjYgOS4yNzNjLS41NDIgMC0uODMyLjU2My0uODMyIDEuNjEycTAgLjEzMy4wMDYuMjUybDEuNTYtMS4xNDNjLS4xMjYtLjQ3NC0uMzc1LS43Mi0uNzMzLS43MnptLS43MzIgMi41MDhjLjEyNi40NzIuMzcyLjcxOC43MzIuNzE4LjU0IDAgLjgzLS41NjMuODMtMS42MTRxMC0uMTI5LS4wMDYtLjI1eiIvPgogIDxwYXRoIGQ9Ik0xMiAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJNNy4wNSAxMC44ODVjMCAxLjQxNS0uNTQ4IDIuMjA2LTEuNTI0IDIuMjA2QzQuNTQ4IDEzLjA5IDQgMTIuMyA0IDEwLjg4NWMwLTEuNDEyLjU0OC0yLjIwMyAxLjUyNi0yLjIwMy45NzYgMCAxLjUyNC43OSAxLjUyNCAyLjIwM20zLjgwNSAxLjUyVjEzaC0zdi0uNTk1aDEuMTgxVjkuNWgtLjA1bC0xLjEzNi43NDd2LS42ODhsMS4xOS0uNzg2aC42OXYzLjYzM3oiLz4KPC9zdmc+)*/
const FileBinaryFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-binary-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.526 9.273c-.542 0-.832.563-.832 1.612q0 .133.006.252l1.56-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614q0-.129-.006-.25z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M7.05 10.885c0 1.415-.548 2.206-1.524 2.206C4.548 13.09 4 12.3 4 10.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203m3.805 1.52V13h-3v-.595h1.181V9.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633z"/>
</svg>
      )}
    />
  );

export default FileBinaryFill;
