import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-exe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMmgtMXYtMWgxYTEgMSAwIDAgMCAxLTFWNC41aC0yQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2OUgyVjJhMiAyIDAgMCAxIDItMmg1LjV6TTIuNTc1IDE1LjIwMkguNzg1di0xLjA3M0gyLjQ3di0uNjA2SC43ODV2LTEuMDI1aDEuNzl2LS42NDhIMHYzLjk5OWgyLjU3NXpNNi4zMSAxMS44NWgtLjg5M2wtLjgyMyAxLjQzOWgtLjAzNmwtLjgzMi0xLjQzOWgtLjkzMWwxLjIyNyAxLjk4My0xLjIzOSAyLjAxNmguODYxbC44NTMtMS40MTVoLjAzNWwuODUgMS40MTVoLjkwOGwtMS4yNTQtMS45OTJ6bTEuMDI1IDMuMzUyaDEuNzl2LjY0N0g2LjU0OFYxMS44NWgyLjU3NnYuNjQ4aC0xLjc5djEuMDI1aDEuNjg0di42MDZINy4zMzR2MS4wNzNaIi8+Cjwvc3ZnPg==)*/
const FiletypeExe: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-exe"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575zM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z"/>
</svg>
      )}
    />
  );

export default FiletypeExe;
