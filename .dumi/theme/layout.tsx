// .dumi/theme/layout.tsx(本地主题) 或 src/layout.tsx(主题包)
import type { IRouteComponentProps } from '@umijs/types';
import { ConfigProvider, theme as antdTheme } from 'antd';
import Layout from 'dumi-theme-default/src/layout';
import { usePrefersColor } from 'dumi/theme';
import { useSafeState } from 'rc-hooks';
import React, { useEffect, useRef } from 'react';

export default ({ children, ...props }: IRouteComponentProps) => {
  const [prefersColor, setPrefersColor] = useSafeState<string>();
  const [theme] = usePrefersColor();
  const timer = useRef<any>();

  useEffect(() => {
    clearTimeout(timer.current);

    if (theme === 'auto') {
      const htmlPrefersColor = document.documentElement.dataset['prefersColor'];
      if (htmlPrefersColor) {
        setPrefersColor(htmlPrefersColor);
      } else {
        timer.current = setTimeout(() => {
          setPrefersColor(document.documentElement.dataset['prefersColor']);
        }, 3000);
      }
    } else {
      setPrefersColor(theme);
    }
  }, [theme]);

  return (
    <Layout {...props}>
      <ConfigProvider
        theme={{
          algorithm: prefersColor === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </Layout>
  );
};
