import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![currency-yen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43NSAxNHYtMi42MjloMi40NDZ2LS45NjdIOC43NXYtMS4zMWgyLjQ0NXYtLjk2N0g5LjEyOEwxMi41IDJoLTEuNjk5TDguMDQ3IDcuMzI3aC0uMDg2TDUuMjA3IDJIMy41bDMuMzYzIDYuMTI3SDQuNzc4di45NjhINy4yNXYxLjMxSDQuNzh2Ljk2NmgyLjQ3VjE0aDEuNTAyeiIvPgo8L3N2Zz4=)*/
const CurrencyYen: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="currency-yen"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z"/>
</svg>
      )}
    />
  );

export default CurrencyYen;
