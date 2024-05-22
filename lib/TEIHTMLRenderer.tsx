/** @jsxImportSource @emotion/react 
import { css } from "@emotion/react";*/
import { useEffect, useState } from "react";
import TEINode from "./components/TEINode";
import Box from "@mui/material/Box";

export interface TEIItem {
  id: any,
  item: any,
  setNote: any,
  attributes: any,
  children: TEIItem[]
}

interface TEIHTMLRendererProps {
  TEIDocumentURL: string,
  setNote: (e: any) => void,
}

export const TEIHTMLRenderer: React.FC<TEIHTMLRendererProps> = ({ TEIDocumentURL, setNote }) => {
  const [TEIRoot, setTEIRoot] = useState<TEIItem[]>([]);

  useEffect(() => {
    fetch(TEIDocumentURL).then((response) =>
      response.json().then((articleJSON) => {
        console.log("Article JSONified :", articleJSON)
        setTEIRoot(
          [articleJSON],
        );
      }).catch(e => console.warn("Error during JSONification :", e))
    ).catch(e => console.warn("Error during TEIDocumentURL fetching (", TEIDocumentURL, ')', e));
  }, [TEIDocumentURL, setNote]);

  return (
    <Box>
      {TEIRoot.map((item, index) => (
        <TEINode key={'root'+index} item={item} setNote={setNote} />
      ))}
    </Box>
  );
}