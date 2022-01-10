import { createContext } from 'react';
import type { IconBaseProps } from './type';

const context = createContext<
  IconBaseProps & {
    // 内容安全政策
    // ref: https://developers.google.com/web/fundamentals/security/csp/
    // ref: https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/nonce
    csp?: {
      nonce?: string;
    };
  }
>({});

export const IconProvider = context.Provider;

export default context;
