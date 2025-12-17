import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hand-index-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDQuNDY2VjEuNzVhMS43NSAxLjc1IDAgMSAwLTMuNSAwdjUuMzRsLTEuMi4yNGExLjUgMS41IDAgMCAwLTEuMTk2IDEuNjM2bC4zNDUgMy4xMDZhMi41IDIuNSAwIDAgMCAuNDA1IDEuMTFsMS40MzMgMi4xNUExLjUgMS41IDAgMCAwIDYuMDM1IDE2aDYuMzg1YTEuNSAxLjUgMCAwIDAgMS4zMDItLjc1NmwxLjM5NS0yLjQ0MWEzLjUgMy41IDAgMCAwIC40NDQtMS4zODlsLjI3MS0yLjcxNWEyIDIgMCAwIDAtMS45OS0yLjE5OWgtLjU4MWE1IDUgMCAwIDAtLjE5NS0uMjQ4Yy0uMTkxLS4yMjktLjUxLS41NjgtLjg4LS43MTYtLjM2NC0uMTQ2LS44NDYtLjEzMi0xLjE1OC0uMTA4bC0uMTMyLjAxMmExLjI2IDEuMjYgMCAwIDAtLjU2LS42NDIgMi42IDIuNiAwIDAgMC0uNzM4LS4yODhjLS4zMS0uMDYyLS43MzktLjA1OC0xLjA1LS4wNDZ6Ii8+Cjwvc3ZnPg==)*/
const HandIndexFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hand-index-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046z"/>
</svg>
      )}
    />
  );

export default HandIndexFill;
