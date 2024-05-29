/** @jsxImportSource @emotion/react 
import { css } from "@emotion/react";*/
import { useEffect, useState } from "react";
import TEINode from "./components/TEINode";
import Box from "@mui/material/Box";
import { xmlToJson } from "./utils";

export interface TEIParentItem {
  id: any,
  tag: any,
  attributes: any,
  children: TEIItem[],
}

export interface TEILastItem {
  id: any,
  text: any
}

export type TEIItem = TEILastItem | TEIParentItem;

interface TEIHTMLRendererProps {
  TEIDocumentURL: string,
  setNote: (e: any) => void,
}

export const TEIHTMLRenderer: React.FC<TEIHTMLRendererProps> = ({ TEIDocumentURL, setNote }) => {
  const [TEIRoot, setTEIRoot] = useState<TEIItem[]>([]);

  useEffect(() => {
    fetch(TEIDocumentURL).then((response) =>
      response.text().then((articleXML) => {
        const TEI = xmlToJson(articleXML)
        console.log("Article JSONified :", TEI)
        setTEIRoot([TEI])
      }).catch(e => console.warn("Error during XML JSONification :", e))
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