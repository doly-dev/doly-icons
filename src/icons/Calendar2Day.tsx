import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![calendar2-day](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC42ODQgMTIuNTIzdi0yLjNoMi4yNjF2LS42MUg0LjY4NFY3LjgwMWgyLjQ2NHYtLjYxSDR2NS4zMzJ6bTMuMjk2IDBoLjY3NlY5Ljk4YzAtLjU1NC4yMjctMS4wMDcuOTUzLTEuMDA3LjEyNSAwIC4yNTguMDA0LjMyOS4wMTV2LS42MTNhMiAyIDAgMCAwLS4yNTQtLjAyYy0uNTgyIDAtLjg5MS4zMi0xLjAxMi41NjdoLS4wMnYtLjUwNEg3Ljk4em0yLjgwNS01LjA5M2MwIC4yMzguMTkyLjQyNS40My40MjVhLjQyOC40MjggMCAxIDAgMC0uODU1LjQyNi40MjYgMCAwIDAtLjQzLjQzbS4wOTQgNS4wOTNoLjY3MlY4LjQxOGgtLjY3MnoiLz4KICA8cGF0aCBkPSJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFoOFYuNWEuNS41IDAgMCAxIDEgMFYxaDFhMiAyIDAgMCAxIDIgMnYxMWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYzYTIgMiAwIDAgMSAyLTJoMVYuNWEuNS41IDAgMCAxIC41LS41TTIgMmExIDEgMCAwIDAtMSAxdjExYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTF6Ii8+CiAgPHBhdGggZD0iTTIuNSA0YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41SDNhLjUuNSAwIDAgMS0uNS0uNXoiLz4KPC9zdmc+)*/
const Calendar2Day: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar2-day"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43m.094 5.093h.672V8.418h-.672z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default Calendar2Day;
