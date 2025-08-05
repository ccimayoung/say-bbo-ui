import { css } from '@emotion/react';

export const scrollbarStyle = css`
  /* Webkit 기반 브라우저 */
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    padding: 10px 0px;
    height: 30%;
    background: #e5e5ea;
    border-radius: 8px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;
