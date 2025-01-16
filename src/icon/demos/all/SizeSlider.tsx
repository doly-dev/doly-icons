import type { InputNumberProps, SliderSingleProps } from 'antd';
import { Col, InputNumber, Row, Slider } from 'antd';
import { useControllableValue } from 'rc-hooks';
import * as React from 'react';
import styles from './SizeSlider.module.less';

interface SizeSliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: number;
  step?: number;
  precision?: number;
  onChange?: (value: number) => void;
  sliderProps?: SliderSingleProps;
  inputProps?: InputNumberProps;
}

const SizeSlider: React.FC<SizeSliderProps> = ({
  min = 12,
  max = 64,
  step = 1,
  precision = 0,
  sliderProps,
  inputProps,
  ...restProps
}) => {
  const [state, setState] = useControllableValue(restProps);

  return (
    <Row gutter={16} style={{ flexWrap: 'nowrap' }}>
      <Col flex={1} className={styles.slider}>
        <Slider
          min={min}
          max={max}
          step={step}
          {...sliderProps}
          value={state}
          onChange={setState}
        />
      </Col>
      <Col style={{ width: 90 }} className={styles.inputNumber}>
        <InputNumber
          min={min}
          max={max}
          precision={precision}
          step={step}
          {...inputProps}
          value={state}
          // @ts-ignore
          onChange={setState}
        />
      </Col>
    </Row>
  );
};

export default SizeSlider;
