import * as React from 'react';
import { Slider, Row, Col, InputNumber } from 'antd';
import { useDebounce } from 'rc-hooks';

interface SizeSliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  wait?: number;
  onChange?: (value: number) => void;
}

const SizeSlider: React.FunctionComponent<SizeSliderProps> = ({
  min = 12,
  max = 64,
  wait = 300,
  defaultValue,
  onChange,
}) => {
  const [innerValue, setInnerValue] = React.useState(defaultValue);
  const debounceInnerValue = useDebounce(innerValue, wait >= 0 ? wait : 0);
  const changeRef = React.useRef<typeof onChange>();
  changeRef.current = onChange;

  React.useEffect(() => {
    if (debounceInnerValue) {
      changeRef.current?.(debounceInnerValue);
    }
  }, [debounceInnerValue]);

  return (
    <Row gutter={16}>
      <Col flex={1}>
        <Slider min={min} max={max} value={innerValue} onChange={setInnerValue} />
      </Col>
      <Col>
        <InputNumber
          min={min}
          max={max}
          step={1}
          precision={0}
          value={innerValue}
          onChange={setInnerValue}
        />
      </Col>
    </Row>
  );
};

export default SizeSlider;
