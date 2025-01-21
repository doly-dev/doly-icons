import { createContext } from 'react';
import { IconBaseProps } from './IconBase';
import { InjectCssOptions } from './utils';

const context = createContext<
  IconBaseProps & {
    /**
     * @description 内容安全政策。
     * @see {@link https://web.dev/articles/csp?hl=zh-cn 内容安全政策}
     * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/nonce HTMLElement.nonce}
     */
    csp?: InjectCssOptions['csp'];
  }
>({});

export const IconProvider = context.Provider;

export default context;
