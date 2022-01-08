import { createContext } from 'react';
import type { IconBaseProps } from './type';

const context = createContext<IconBaseProps>({});

export const IconProvider = context.Provider;

export default context;
