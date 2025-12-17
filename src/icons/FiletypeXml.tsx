import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-xml](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMnYtMWExIDEgMCAwIDAgMS0xVjQuNWgtMkExLjUgMS41IDAgMCAxIDkuNSAzVjFINGExIDEgMCAwIDAtMSAxdjlIMlYyYTIgMiAwIDAgMSAyLTJoNS41ek0zLjUyNyAxMS44NWgtLjg5M2wtLjgyMyAxLjQzOWgtLjAzNkwuOTQzIDExLjg1SC4wMTJsMS4yMjcgMS45ODNMMCAxNS44NWguODYxbC44NTMtMS40MTVoLjAzNWwuODUgMS40MTVoLjkwOGwtMS4yNTQtMS45OTJ6bS45NTQgMy45OTl2LTIuNjZoLjAzOGwuOTUyIDIuMTU5aC41MTZsLjk0Ni0yLjE2aC4wMzh2Mi42NjFoLjcxNVYxMS44NWgtLjhsLTEuMTQgMi41OTZoLS4wMjVMNC41OCAxMS44NWgtLjgwNnYzLjk5OXptNC43MS0uNjc0aDEuNjk2di42NzRIOC40VjExLjg1aC43OTF6Ii8+Cjwvc3ZnPg==)*/
const FiletypeXml: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-xml"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.527 11.85h-.893l-.823 1.439h-.036L.943 11.85H.012l1.227 1.983L0 15.85h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992zm.954 3.999v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596h-.025L4.58 11.85h-.806v3.999zm4.71-.674h1.696v.674H8.4V11.85h.791z"/>
</svg>
      )}
    />
  );

export default FiletypeXml;
