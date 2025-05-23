/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProvider, Gear, HeartFill } from '../src';

describe('renader icons snapshot', () => {
  it('render as built-in icon', () => {
    const { asFragment } = render(
      <div>
        <Gear spin />
        <HeartFill style={{ color: 'red' }} />
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render as custom icon', () => {
    const PuzzleSVG = (
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="1em"
        height="1em"
      >
        <path d="M516.757333 149.333333a120.896 120.896 0 0 1 114.005334 161.173334h104.064a64 64 0 0 1 64 64V810.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-87.104c0-15.701333 11.989333-28.629333 27.306666-30.08l2.922667-0.149334a90.666667 90.666667 0 0 0 4.394667-181.226666L264.896 512a30.229333 30.229333 0 0 1-30.08-27.306667L234.666667 481.749333v-107.242666a64 64 0 0 1 64-64h104.064a120.704 120.704 0 0 1-6.869334-40.32C395.861333 184.746667 431.274667 149.333333 516.757333 149.333333z m0 64a56.896 56.896 0 0 0-53.674666 75.861334l30.144 85.312H298.666667v77.184a154.730667 154.730667 0 0 1 5.162666 300.693333l-5.162666 1.258667V810.666667h436.16V374.528l-194.56-0.021333 30.144-85.333334A56.896 56.896 0 0 0 516.736 213.333333z" />
      </svg>
    );

    const { asFragment } = render(<Icon component={PuzzleSVG} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render as renderSVG', () => {
    const { asFragment } = render(
      <Icon
        renderSVG={(mergeSVGProps) => (
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="1em"
            height="1em"
            {...mergeSVGProps}
          >
            <path d="M516.757333 149.333333a120.896 120.896 0 0 1 114.005334 161.173334h104.064a64 64 0 0 1 64 64V810.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-87.104c0-15.701333 11.989333-28.629333 27.306666-30.08l2.922667-0.149334a90.666667 90.666667 0 0 0 4.394667-181.226666L264.896 512a30.229333 30.229333 0 0 1-30.08-27.306667L234.666667 481.749333v-107.242666a64 64 0 0 1 64-64h104.064a120.704 120.704 0 0 1-6.869334-40.32C395.861333 184.746667 431.274667 149.333333 516.757333 149.333333z m0 64a56.896 56.896 0 0 0-53.674666 75.861334l30.144 85.312H298.666667v77.184a154.730667 154.730667 0 0 1 5.162666 300.693333l-5.162666 1.258667V810.666667h436.16V374.528l-194.56-0.021333 30.144-85.333334A56.896 56.896 0 0 0 516.736 213.333333z" />
          </svg>
        )}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render as renderSVG, unuse merge svg props', () => {
    const { asFragment } = render(
      <Icon
        renderSVG={() => (
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M516.757333 149.333333a120.896 120.896 0 0 1 114.005334 161.173334h104.064a64 64 0 0 1 64 64V810.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-87.104c0-15.701333 11.989333-28.629333 27.306666-30.08l2.922667-0.149334a90.666667 90.666667 0 0 0 4.394667-181.226666L264.896 512a30.229333 30.229333 0 0 1-30.08-27.306667L234.666667 481.749333v-107.242666a64 64 0 0 1 64-64h104.064a120.704 120.704 0 0 1-6.869334-40.32C395.861333 184.746667 431.274667 149.333333 516.757333 149.333333z m0 64a56.896 56.896 0 0 0-53.674666 75.861334l30.144 85.312H298.666667v77.184a154.730667 154.730667 0 0 1 5.162666 300.693333l-5.162666 1.258667V810.666667h436.16V374.528l-194.56-0.021333 30.144-85.333334A56.896 56.896 0 0 0 516.736 213.333333z" />
          </svg>
        )}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render as virtual svg symbol', () => {
    const { asFragment } = render(<Icon symbolId="vip" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render as built-in icon with use css variables', () => {
    const { asFragment } = render(
      <div>
        <Gear style={{ '--doly-icon-color': '#e91e63' }} />
        <HeartFill style={{ '--doly-icon-font-size': '16px', '--doly-icon-color': '#e91e63' }} />
        <HeartFill style={{ '--doly-icon-spin-duration': '2s' }} />
      </div>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render with provider', () => {
    const { asFragment } = render(
      <IconProvider value={{ style: { color: 'yellow' } }}>
        <Gear />
        <HeartFill style={{ color: 'red' }} />
      </IconProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
