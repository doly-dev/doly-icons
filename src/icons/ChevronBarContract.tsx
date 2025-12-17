import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-bar-contract](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjY0NiAxNC44NTRhLjUuNSAwIDAgMCAuNzA4IDBMOCAxMS4yMDdsMy42NDYgMy42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhsLTQtNGEuNS41IDAgMCAwLS43MDggMGwtNCA0YS41LjUgMCAwIDAgMCAuNzA4bTAtMTMuNzA4YS41LjUgMCAwIDEgLjcwOCAwTDggNC43OTNsMy42NDYtMy42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAwLS43MDhNMSA4YS41LjUgMCAwIDEgLjUtLjVoMTNhLjUuNSAwIDAgMSAwIDFoLTEzQS41LjUgMCAwIDEgMSA4Ii8+Cjwvc3ZnPg==)*/
const ChevronBarContract: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-bar-contract"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.646 14.854a.5.5 0 0 0 .708 0L8 11.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708m0-13.708a.5.5 0 0 1 .708 0L8 4.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8"/>
</svg>
      )}
    />
  );

export default ChevronBarContract;
