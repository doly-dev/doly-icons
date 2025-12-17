import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![send-arrow-down-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS44NTQuMTQ2YS41LjUgMCAwIDEgLjExLjU0TDEzLjAyNiA4LjAzQTQuNSA0LjUgMCAwIDAgOCAxMi41YzAgLjUgMCAxLjUtLjc3My4zNmwtMS41OS0yLjQ5OEwuNjQ0IDcuMTg0bC0uMDAyLS4wMDEtLjQxLS4yNjFhLjUuNSAwIDAgMSAuMDgzLS44ODZsLjQ1Mi0uMTguMDAxLS4wMDFMMTUuMzE0LjAzNWEuNS41IDAgMCAxIC41NC4xMTFNNi42MzcgMTAuMDdsNy40OTQtNy40OTQuNDcxLTEuMTc4LTEuMTc4LjQ3MUw1LjkzIDkuMzYzbC4zMzguMjE1YS41LjUgMCAwIDEgLjE1NC4xNTR6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20uMzU0LTEuNjQ2YS41LjUgMCAwIDEtLjcyMi0uMDE2bC0xLjE0OS0xLjI1YS41LjUgMCAxIDEgLjczNy0uNjc2bC4yOC4zMDVWMTFhLjUuNSAwIDAgMSAxIDB2MS43OTNsLjM5Ni0uMzk3YS41LjUgMCAwIDEgLjcwOC43MDh6Ii8+Cjwvc3ZnPg==)*/
const SendArrowDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="send-arrow-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z"/>
  <path fillRule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>
      )}
    />
  );

export default SendArrowDownFill;
