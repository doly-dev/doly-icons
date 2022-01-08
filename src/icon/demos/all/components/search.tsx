import * as React from 'react';
import type { InputProps } from 'antd';
import { Input } from 'antd';
import { useDebounce } from 'rc-hooks';

// 只支持非受控模式
interface InputExtendProps extends Omit<InputProps, 'value'> {
  wait?: number;
  defaultValue?: any;
  onChange?: (val: any) => void;
}

const InputExtend: React.FC<InputExtendProps> = ({
  wait = 300,
  defaultValue,
  onChange,
  ...restProps
}) => {
  const [innerValue, setInnerValue] = React.useState(defaultValue);
  const debounceInnerValue = useDebounce(innerValue, wait >= 0 ? wait : 0);
  const changeRef = React.useRef<typeof onChange>();
  changeRef.current = onChange;

  React.useEffect(() => {
    changeRef.current?.(debounceInnerValue);
  }, [debounceInnerValue]);

  return (
    <Input.Search
      value={innerValue}
      onChange={(e) => setInnerValue(e.target.value.trim())}
      allowClear
      {...restProps}
    />
  );
};

export default InputExtend;
