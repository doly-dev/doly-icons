import { words } from 'ut2';
import allIcons from './data';
import { Theme } from './enum';

// 图标分类
let CategoriesOptions: { label: React.ReactNode; value: any; total?: number }[] = [
  {
    label: '所有类别',
    value: '',
  },
];

export type IconClassDataItem = {
  title: string;
  list: typeof allIcons;
};

// 分类数据
const clsData: IconClassDataItem[] = [];

allIcons.forEach((iconItem) => {
  const currItem = clsData.find((item) => item.title === iconItem.cnCategories);

  if (!currItem) {
    clsData.push({
      title: iconItem.cnCategories,
      list: [iconItem],
    });
    CategoriesOptions.push({
      label: iconItem.cnCategories,
      value: iconItem.cnCategories,
    });
  } else {
    currItem.list.push(iconItem);
  }
});

// 图标总数量
let total = 0;
CategoriesOptions = CategoriesOptions.map((item) => {
  const clsInfo = clsData.find((clsItem) => clsItem.title === item.label);
  if (clsInfo) {
    const clsLen = clsInfo?.list.length || 0;
    total += clsLen;
    return {
      ...item,
      total: clsLen,
    };
  }
  return item;
});
// 总数量
CategoriesOptions[0].total = total;

type FilterParam = {
  category?: string;
  theme?: Theme;
  keyword?: string;
};

const filterClassData = ({ category, theme, keyword }: FilterParam) => {
  const ret = clsData
    .map((clsItem) => {
      if (!category || clsItem.title === category) {
        return {
          title: clsItem.title,
          list: clsItem.list.filter((item) => {
            const enableTheme =
              theme === Theme.All ||
              (theme === Theme.Fill && item.fill) ||
              (theme === Theme.Outline && !item.fill);

            if (enableTheme) {
              if (!keyword) {
                return true;
              }

              const description = (
                item.name +
                item.cnName +
                item.tags +
                item.cnTags +
                (item.remark || '')
              ).toLowerCase();
              const keywords = words(keyword.toLowerCase());

              return keywords.every((item) => description.indexOf(item) > -1);
            }

            return false;
          }),
        };
      }

      return {
        title: '',
        list: [],
      };
    })
    .filter((clsItem) => clsItem.title && clsItem.list.length > 0);

  return ret;
};

export { clsData, CategoriesOptions, filterClassData };
