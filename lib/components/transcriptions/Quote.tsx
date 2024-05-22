/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Box from "@mui/material/Box";

function Quote(props: any) {
  return <Box
    css={css`
          margin: 2vh auto 2vh auto;
          width: fit-content;
          //border: 1px solid rgba(0, 0, 0, 0.12);
          padding-left: 5px;
          padding-right: 5px
      `}
  >
    {props.children}
  </Box>
}

export default Quote;