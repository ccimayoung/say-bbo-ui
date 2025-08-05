import styled from '@emotion/styled';
import { defaultTheme } from './theme';

export const Font = styled.p<fontProps>`
  ${({ fontType }) => handleFontStyle(fontType)};
  font-family: Pretendard;
  margin: ${(props) => props.margin};
  color: ${(props) => (props.color ? props.color : defaultTheme.colors.black)};
  width: ${(props) => (props.width ? props.width : '100%')};
  text-align: ${(props) => props.sort};
  white-space: ${(props) => props.whiteSpace};
  padding: ${(props) => props.padding};
`;

export const handleFontStyle = (fontType: fontHandleType) => {
  switch (fontType) {
    case 'Body_S':
      return ' font-size: 12px;  line-height: 16px;   font-weight : 400;';
    case 'Body_M':
      return 'font-size: 14px;  line-height: 18px;   font-weight : 400;';
    case 'Body_M_Semibold':
      return 'font-size: 14px;  line-height: 18px;   font-weight : 600;';
    case 'Body_L':
      return 'font-size: 16px;  line-height: 24px;   font-weight : 400;';
    case 'SubHead_S':
      return 'font-size: 18px;  line-height: 24px;   font-weight : 600;';
    case 'SubHead_M':
      return 'font-size: 20px;  line-height: 28px;   font-weight : 600;';
    case 'SubHead_L':
      return 'font-size: 22px;  line-height: 30px;   font-weight : 600;';
    case 'Head_S':
      return 'font-size: 28px;  line-height: 32px;  font-weight : 800;';
    case 'Head_M':
      return 'font-size: 32px;  line-height: 40px;   font-weight : 800;';
    case 'Head_L':
      return 'font-size: 40px;  line-height: 48px;   font-weight : 800;';
  }
};

type fontProps = {
  width?: string;
  margin?: string;
  sort?: string;
  color?: string;
  fontType: fontHandleType;
  lineHeight?: string;
  whiteSpace?: string;
  padding?: string;
};

export type fontHandleType =
  | 'Body_S'
  | 'Body_M'
  | 'Body_M_Semibold'
  | 'Body_L'
  | 'SubHead_S'
  | 'SubHead_M'
  | 'SubHead_L'
  | 'Head_S'
  | 'Head_M'
  | 'Head_L';
