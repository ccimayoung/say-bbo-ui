import React from 'react';
import { withIconBaseProps, IconBaseProps } from '../iconTypes';

const PlusIconBase: React.FC<IconBaseProps> = ({ width, height, rotate }) => {
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
        d="M7.37499 12.375C7.37499 12.7202 7.65481 13 7.99999 13C8.34517 13 8.62499 12.7202 8.62499 12.375L8.62499 8.62499L12.375 8.62499C12.7202 8.62499 13 8.34517 13 7.99999C13 7.65482 12.7202 7.37499 12.375 7.37499L8.62499 7.37499L8.62499 3.62498C8.62499 3.27981 8.34517 2.99998 7.99999 2.99998C7.65481 2.99998 7.37499 3.27981 7.37499 3.62498L7.37499 7.37499L3.62498 7.37499C3.2798 7.37499 2.99998 7.65482 2.99998 7.99999C2.99998 8.34517 3.2798 8.62499 3.62498 8.62499L7.37499 8.62499L7.37499 12.375Z"
        fill="#292929"
      />
    </svg>
  );
};

export const PlusIcon = withIconBaseProps(PlusIconBase);
