import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![screwdriver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAuOTk1Ljk5NSAwbDMuMDY0IDIuMTlhMSAxIDAgMCAxIC40MTcuODA5di4wN2MwIC4yNjQuMTA1LjUxNy4yOTEuNzA0bDUuNjc3IDUuNjc2LjkwOS0uMzAzYTEgMSAwIDAgMSAxLjAxOC4yNGwzLjMzOCAzLjMzOWEuOTk1Ljk5NSAwIDAgMSAwIDEuNDA2TDE0LjEzIDE1LjcxYS45OTUuOTk1IDAgMCAxLTEuNDA2IDBsLTMuMzM3LTMuMzRhMSAxIDAgMCAxLS4yNC0xLjAxOGwuMzAyLS45MDktNS42NzYtNS42NzdhMSAxIDAgMCAwLS43MDQtLjI5MUgzYTEgMSAwIDAgMS0uODEtLjQxN3ptMTEuMjkzIDkuNTk1YS40OTcuNDk3IDAgMSAwLS43MDMuNzAzbDIuOTg0IDIuOTg0YS40OTcuNDk3IDAgMCAwIC43MDMtLjcwM3oiLz4KPC9zdmc+)*/
const Screwdriver: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="screwdriver"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 .995.995 0l3.064 2.19a1 1 0 0 1 .417.809v.07c0 .264.105.517.291.704l5.677 5.676.909-.303a1 1 0 0 1 1.018.24l3.338 3.339a.995.995 0 0 1 0 1.406L14.13 15.71a.995.995 0 0 1-1.406 0l-3.337-3.34a1 1 0 0 1-.24-1.018l.302-.909-5.676-5.677a1 1 0 0 0-.704-.291H3a1 1 0 0 1-.81-.417zm11.293 9.595a.497.497 0 1 0-.703.703l2.984 2.984a.497.497 0 0 0 .703-.703z"/>
</svg>
      )}
    />
  );

export default Screwdriver;
