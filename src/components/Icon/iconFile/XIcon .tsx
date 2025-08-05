import React from 'react';
import { withIconBaseProps, IconBaseProps } from '../iconTypes';

const XIconBase: React.FC<IconBaseProps> = ({ width, height, rotate }) => {
  return (
    <svg
      width={width}
      height={height}
      style={{ transform: `rotate(${rotate}deg)` }}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7949 11.7377C11.0553 11.9981 11.4774 11.9981 11.7377 11.7377C11.9981 11.4774 11.9981 11.0553 11.7377 10.7949L8.90931 7.96651L11.7377 5.13809C11.9981 4.87774 11.9981 4.45563 11.7377 4.19528C11.4774 3.93493 11.0553 3.93493 10.7949 4.19528L7.96651 7.0237L5.13807 4.19526C4.87772 3.93491 4.45561 3.93491 4.19526 4.19526C3.93491 4.45561 3.93491 4.87772 4.19526 5.13807L7.0237 7.96651L4.19526 10.7949C3.93491 11.0553 3.93491 11.4774 4.19526 11.7377C4.45561 11.9981 4.87772 11.9981 5.13807 11.7377L7.96651 8.90931L10.7949 11.7377Z"
        fill="#292929"
      />
    </svg>
  );
};

export const XIcon = withIconBaseProps(XIconBase);
