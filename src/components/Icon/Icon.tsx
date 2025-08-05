import { DownArrowIcon } from './iconFile/DownArrowIcon';
import { PlusIcon } from './iconFile/PlusIcon';
import { XIcon } from './iconFile/XIcon ';
import { IconProps } from './iconTypes';

export const ICON_COMPONENTS = {
  DownArrowIcon,
  PlusIcon,
  XIcon,
} as const;

export type iconNameType = keyof typeof ICON_COMPONENTS;

export const Icon: React.FC<IconProps> = ({
  iconName,
  width,
  height,
  rotate,
}) => {
  const IconComponent = ICON_COMPONENTS[iconName];

  return <IconComponent width={width} height={height} rotate={rotate} />;
};
