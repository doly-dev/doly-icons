import * as React from 'react';
import Icon from 'doly-icons';
import styles from './demo.less';

const Demo = () => {
  const HomeSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path fillOpacity=".01" fill="#fff" d="M0 0h48v48H0z" />
      <path d="M9 18v24h30V18L24 6 9 18z" />
      <path strokeWidth="3" stroke="currentColor" d="M9 42V18l-5 4L24 6l20 16-5-4v24H9z" />
      <path strokeWidth="3" stroke="currentColor" d="M19 29v13h10V29H19z" />
      <path strokeWidth="3" stroke="currentColor" d="M9 42h30" />
    </svg>
  );

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

  const EmailSVG = (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="1em"
      height="1em"
    >
      <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l64 54.250667V746.666667h597.333334V429.44l64-54.250667zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z m-9.6 64h-578.133334L512 523.882667 801.066667 277.333333z" />
    </svg>
  );

  const LoadingSVG = (
    <svg viewBox="0 0 120 120" width="1em" height="1em">
      <defs>
        <line
          id="l"
          x1="60"
          x2="60"
          y1="7"
          y2="27"
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </defs>
      <g>
        <use xlinkHref="#l" opacity=".27" />
        <use xlinkHref="#l" opacity=".27" transform="rotate(30 60,60)" />
        <use xlinkHref="#l" opacity=".27" transform="rotate(60 60,60)" />
        <use xlinkHref="#l" opacity=".27" transform="rotate(90 60,60)" />
        <use xlinkHref="#l" opacity=".27" transform="rotate(120 60,60)" />
        <use xlinkHref="#l" opacity=".27" transform="rotate(150 60,60)" />
        <use xlinkHref="#l" opacity=".37" transform="rotate(180 60,60)" />
        <use xlinkHref="#l" opacity=".46" transform="rotate(210 60,60)" />
        <use xlinkHref="#l" opacity=".56" transform="rotate(240 60,60)" />
        <use xlinkHref="#l" opacity=".66" transform="rotate(270 60,60)" />
        <use xlinkHref="#l" opacity=".75" transform="rotate(300 60,60)" />
        <use xlinkHref="#l" opacity=".85" transform="rotate(330 60,60)" />
      </g>
    </svg>
  );

  return (
    <div className={styles.iconList}>
      <Icon component={HomeSVG} style={{ color: 'blue' }} />
      <Icon component={PuzzleSVG} />
      <Icon component={EmailSVG} />
      <Icon component={LoadingSVG} spin style={{ fontSize: 16, color: 'red' }} />
      <Icon component={LoadingSVG} spin style={{ color: 'red' }} />
      <Icon component={LoadingSVG} spin />
    </div>
  );
};

export default Demo;
