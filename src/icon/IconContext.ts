import * as React from 'react';
import { IconBaseProps } from './type';

const context = React.createContext<IconBaseProps>({});

export const IconProvider = context.Provider;

export default context;