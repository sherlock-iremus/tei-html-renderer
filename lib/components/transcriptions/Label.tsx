/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import Typography from "@mui/material/Typography";

function Label(props: any) {
  return <Typography
    component="h3"
    // variant="article"
    align="justify"
    fontWeight="bold"
    textAlign="center"
    css={css`                    
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    `}
  >
    {props.children}
  </Typography>
}

export default Label;