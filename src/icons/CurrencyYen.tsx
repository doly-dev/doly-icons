import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

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
