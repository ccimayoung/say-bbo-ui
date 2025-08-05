export interface SelectProps {
  size?: 'small' | 'medium' | 'large';
  placeholder: string;
  options: OptionType[];
  width?: string;
  disabled?: boolean;
}

export interface OptionType {
  label: string;
  value: string;
}
