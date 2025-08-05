import React from 'react';
import { withIconBaseProps, IconBaseProps } from '../iconTypes';

const DownArrowIconBase: React.FC<IconBaseProps> = ({
  width,
  height,
  rotate,
}) => {
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
        d="M12.1316 5.69526C12.3919 5.95561 12.3919 6.37772 12.1316 6.63807L8.46489 10.3047C8.20454 10.5651 7.78243 10.5651 7.52208 10.3047L3.85542 6.63807C3.59507 6.37772 3.59507 5.95561 3.85542 5.69526C4.11577 5.43491 4.53788 5.43491 4.79823 5.69526L7.99349 8.89052L11.1888 5.69526C11.4491 5.43491 11.8712 5.43491 12.1316 5.69526Z"
        fill="#63666C"
      />
    </svg>
  );
};

export const DownArrowIcon = withIconBaseProps(DownArrowIconBase);
