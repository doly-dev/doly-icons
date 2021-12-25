import store from 'store2';

const { local } = store.namespace('doly_icons');

const FilterKey = '__icons_filter__';

export const getFilterStore = (field?: string) => {
  const data = local.get(FilterKey) || {};
  return field ? data[field] : data;
};

export const setFilterStore = (field: string, value: any) => {
  const data = getFilterStore();
  data[field] = value;
  local.set(FilterKey, data);
};

export const setAllFilterStore = (data: any) => {
  local.set(FilterKey, data);
};

export const removeFilterStore = () => {
  local.remove(FilterKey);
};
