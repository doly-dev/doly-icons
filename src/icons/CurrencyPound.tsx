import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![currency-pound](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA4LjU4NWgxLjk2OWMuMTE1LjQ2NS4xODYuOTM5LjE4NiAxLjQzIDAgMS4zODUtLjczNiAyLjQ5Ni0yLjA3NSAyLjc3MVYxNEgxMnYtMS4yNEg2LjQ5MnYtLjEyOWMuODI1LS41MjUgMS4xMzUtMS40NDYgMS4xMzUtMi42OTQgMC0uNDY1LS4wNy0uOTEzLS4xNjgtMS4zNTJoMy4yOXYtLjk3Mkg3LjIyYy0uMTg2LS43MjMtLjM3Mi0xLjQ1NS0uMzcyLTIuMjQ3IDAtMS4yNzQgMS4wNDctMi4wNjYgMi41OC0yLjA2NmE1LjMgNS4zIDAgMCAxIDIuMTAzLjQ2NVYyLjQ1NkE1LjYgNS42IDAgMCAwIDkuMzQ4IDJDNi44NjUgMiA1LjMyMiAzLjI5MSA1LjMyMiA1LjM2NmMwIC43NzUuMTk1IDEuNTE1LjM5OSAyLjI0N0g0eiIvPgo8L3N2Zz4=)*/
const CurrencyPound: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="currency-pound"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.3 5.3 0 0 1 2.103.465V2.456A5.6 5.6 0 0 0 9.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4z"/>
</svg>
      )}
    />
  );

export default CurrencyPound;
