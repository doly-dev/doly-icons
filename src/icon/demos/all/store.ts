import store from 'store2';
import type { DefaultConfig, DefaultFilter } from './context';

const { local } = store.namespace('doly_icons');

const FilterKey = '__icons_filter__';

export function getFilterStore(): typeof DefaultFilter | undefined;
export function getFilterStore(field: string): any;
export function getFilterStore(field?: string) {
  const data = local.get(FilterKey);
  return field ? data?.[field] : data;
}

export function setFilterStore(field: keyof typeof DefaultFilter, value: any) {
  const data = getFilterStore() || {};
  // @ts-ignore
  data[field] = value;
  local.set(FilterKey, data);
}

export function setAllFilterStore(data: any) {
  local.set(FilterKey, data);
}

export function removeFilterStore() {
  local.remove(FilterKey);
}

const ConfigKey = '__icons_config__';

export function getConfigStore(): typeof DefaultConfig | undefined;
export function getConfigStore(field: string): any;
export function getConfigStore(field?: string) {
  const data = local.get(ConfigKey);
  return field ? data?.[field] : data;
}

export function setConfigStore(field: keyof typeof DefaultConfig, value: any) {
  const data = getConfigStore() || {};
  // @ts-ignore
  data[field] = value;
  local.set(ConfigKey, data);
}

export function setAllConfigStore(data: Partial<typeof DefaultConfig>) {
  local.set(ConfigKey, data);
}

export function removeConfigStore() {
  local.remove(ConfigKey);
}
