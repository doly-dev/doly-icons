import { App, Empty, FloatButton } from 'antd';
import { Funnel } from 'doly-icons';
import { useSetState, useUpdateEffect } from 'rc-hooks';
import React from 'react';
import Context, { DefaultConfig, DefaultFilter } from './context';
import { filterClassData } from './dataMain';
import Filter from './Filter';
import styles from './index.module.less';
import List from './List';
import { getConfigStore, getFilterStore, setAllConfigStore } from './store';
import { formatPx, isIE, resetScrollTop } from './utils';

const AllIcons = () => {
  const [state, setState] = useSetState(() => {
    const defaultFilter = getFilterStore() || DefaultFilter;
    const defaultConfig = getConfigStore() || DefaultConfig;
    return {
      filter: defaultFilter,
      options: defaultConfig,
      result: filterClassData(defaultFilter),
    };
  });
  const timerRef = React.useRef<any>(null);

  useUpdateEffect(() => {
    setState({ result: filterClassData(state.filter) });
  }, [state.filter?.keyword, state.filter?.category, state.filter?.theme]);

  const iconWrapperStyles = React.useMemo(
    () =>
      isIE
        ? {
            fontSize: state.filter.fontSize,
            color: state.filter.color,
          }
        : {
            '--doly-icon-font-size': formatPx(state.filter?.fontSize),
            '--doly-icon-color': state.filter?.color,
          },
    [state.filter?.color, state.filter?.fontSize],
  );

  React.useEffect(() => {
    const footerDom = document.querySelector('.__dumi-default-layout-footer-meta') as HTMLElement;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      resetScrollTop();
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (footerDom) {
        footerDom.style.display = 'none';
      }
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (footerDom) {
        footerDom.style.display = '';
      }
    };
  }, []);

  return (
    <App>
      <Context.Provider value={{ ...state.filter, ...state.options, result: state.result }}>
        <div className={styles.demo}>
          <div className={styles.formArea}>
            <Filter
              options={state.options}
              onOptionsChange={(value) => {
                setState({ options: value });
              }}
              filter={state.filter}
              onFilterChange={(value) => {
                setState({ filter: value });
              }}
            />
          </div>
          {state.result.length <= 0 && <Empty description="暂无数据" />}
          <div style={iconWrapperStyles as React.CSSProperties}>
            <List data={state.result} />
          </div>
          <FloatButton
            // tooltip={`${options.isShowFilter ? '隐藏' : '显示'}筛选项`}
            onClick={() => {
              setState((s) => {
                const newOpts = {
                  ...s.options,
                  isShowFilter: !s.options.isShowFilter,
                };
                setAllConfigStore(newOpts);
                return {
                  ...s,
                  options: newOpts,
                };
              });
            }}
            type={!state.options.isShowFilter ? 'primary' : 'default'}
            shape="square"
            description={!state.options.isShowFilter ? '显示' : '隐藏'}
            icon={<Funnel />}
          />
        </div>
      </Context.Provider>
    </App>
  );
};

export default AllIcons;
