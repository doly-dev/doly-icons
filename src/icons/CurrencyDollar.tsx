import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![currency-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAxMC43ODFjLjE0OCAxLjY2NyAxLjUxMyAyLjg1IDMuNTkxIDMuMDAzVjE1aDEuMDQzdi0xLjIxNmMyLjI3LS4xNzkgMy42NzgtMS40MzggMy42NzgtMy4zIDAtMS41OS0uOTQ3LTIuNTEtMi45NTYtMy4wMjhsLS43MjItLjE4N1YzLjQ2N2MxLjEyMi4xMSAxLjg3OS43MTQgMi4wNyAxLjYxNmgxLjQ3Yy0uMTY2LTEuNi0xLjU0LTIuNzQ4LTMuNTQtMi44NzVWMUg3LjU5MXYxLjIzM2MtMS45MzkuMjMtMy4yNyAxLjQ3Mi0zLjI3IDMuMTU2IDAgMS40NTQuOTY2IDIuNDgzIDIuNjYxIDIuOTE3bC42MS4xNjJ2NC4wMzFjLTEuMTQ5LS4xNy0xLjk0LS44LTIuMTMxLTEuNzE4em0zLjM5MS0zLjgzNmMtMS4wNDMtLjI2My0xLjYtLjgyNS0xLjYtMS42MTYgMC0uOTQ0LjcwNC0xLjY0MSAxLjgtMS44Mjh2My40OTVsLS4yLS4wNXptMS41OTEgMS44NzJjMS4yODcuMzIzIDEuODUyLjg1OSAxLjg1MiAxLjc2OSAwIDEuMDk3LS44MjYgMS44MjgtMi4yIDEuOTM5VjguNzN6Ii8+Cjwvc3ZnPg==)*/
const CurrencyDollar: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="currency-dollar"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
</svg>
      )}
    />
  );

export default CurrencyDollar;
