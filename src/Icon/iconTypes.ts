import React from 'react';
import { iconNameType } from './Icon';

export interface IconBaseProps {
  width?: number;
  height?: number;
  rotate?: number;
}

export interface IconProps extends IconBaseProps {
  iconName: iconNameType;
}

export function withIconBaseProps<P extends IconBaseProps>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return function Wrapped(props: P) {
    const { width = 16, height = 16, rotate = 0, ...rest } = props;
    return React.createElement(Component, {
      width,
      height,
      rotate,
      ...(rest as P),
    });
  };
}
