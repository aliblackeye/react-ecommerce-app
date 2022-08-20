import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 430px) {
      ${props}
    } ;
  `;
};

export const smallMobile = (props) => {
  return css`
    @media only screen and (max-width: 330px) {
      ${props}
      .MuiBadge-badge {
        font-size: 8px !important;
        width: 10px !important;
        height: 10px !important;
        padding: 0 !important;
        left: -8px;
      }

      .MuiSvgIcon-root {
        width: 16px;
      }
    } ;
  `;
};
