import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-raw](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMnYtMWExIDEgMCAwIDAgMS0xVjQuNWgtMkExLjUgMS41IDAgMCAxIDkuNSAzVjFINGExIDEgMCAwIDAtMSAxdjlIMlYyYTIgMiAwIDAgMSAyLTJoNS41ek0xLjU5NyAxMS44NUgwdjMuOTk5aC43ODJ2LTEuNDkxaC43MWwuNyAxLjQ5MWgxLjY1MWwuMzEzLTEuMDI4aDEuMzM2bC4zMTQgMS4wMjhoLjg0TDUuMzEgMTEuODVoLS45MjVsLTEuMzI5IDMuOTYtLjc4My0xLjU3MkExLjE4IDEuMTggMCAwIDAgMyAxMy4xMTZxMC0uMzg0LS4xNjctLjY2OGExLjEgMS4xIDAgMCAwLS40NzgtLjQ0IDEuNyAxLjcgMCAwIDAtLjc1OC0uMTU4bS0uODE1IDEuOTEzdi0xLjI5MmguN2EuNzQuNzQgMCAwIDEgLjUwNy4xN3EuMTk0LjE3LjE5NC40OSAwIC4zMTUtLjE5NC40NzQtLjE5LjE1OC0uNTE4LjE1OHptNC4wNjMtMS4xNDguNDg5IDEuNjE3SDQuMzJsLjQ5LTEuNjE3em00LjAwNi40NDUtLjc0IDIuNzg5aC0uNzNMNi4zMjYgMTEuODVoLjg1NWwuNjAxIDIuOTAzaC4wMzhsLjcwNi0yLjkwM2guNjgzbC43MDYgMi45MDNoLjA0bC41OTYtMi45MDNoLjg1OGwtMS4wNTUgMy45OTloLS43M2wtLjc0LTIuNzg5SDguODVaIi8+Cjwvc3ZnPg==)*/
const FiletypeRaw: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-raw"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.597 11.85H0v3.999h.782v-1.491h.71l.7 1.491h1.651l.313-1.028h1.336l.314 1.028h.84L5.31 11.85h-.925l-1.329 3.96-.783-1.572A1.18 1.18 0 0 0 3 13.116q0-.384-.167-.668a1.1 1.1 0 0 0-.478-.44 1.7 1.7 0 0 0-.758-.158m-.815 1.913v-1.292h.7a.74.74 0 0 1 .507.17q.194.17.194.49 0 .315-.194.474-.19.158-.518.158zm4.063-1.148.489 1.617H4.32l.49-1.617zm4.006.445-.74 2.789h-.73L6.326 11.85h.855l.601 2.903h.038l.706-2.903h.683l.706 2.903h.04l.596-2.903h.858l-1.055 3.999h-.73l-.74-2.789H8.85Z"/>
</svg>
      )}
    />
  );

export default FiletypeRaw;
