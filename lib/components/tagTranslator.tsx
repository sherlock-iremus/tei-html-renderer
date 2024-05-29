import { Fragment } from "react";
import Paragraph from "./transcriptions/Paragraph";
import Italics from "./transcriptions/Italics";
import Title from "./transcriptions/Title";
import NotHandledTag from "./transcriptions/NotHandledTag";
import Item from "./transcriptions/Item";
import EditionTitle from "./transcriptions/EditionTitle";
import Quote from "./transcriptions/Quote";
import Label from "./transcriptions/Label";
import Verse from "./transcriptions/Verse";
import VerseSpace from "./transcriptions/VerseSpace";
import Note from "./transcriptions/Note";
import Ref from "./transcriptions/Ref";
import Image from "./transcriptions/Image";
import { TEIParentItem } from "../TEIHTMLRenderer"

function computeNode(node: TEIParentItem, setNote: any) {
    //TODO: on ne devrait pas avoir à faire cette condition puisque tous les objets reçus ici ont un attribut children
    if (node.children) {
        return <Fragment>
            {node.children.map(item =>
                <Item
                    key={item.id}
                    item={item}
                    setNote={setNote}
                />
            )}
        </Fragment>
    }
}

export function tagTranslate(tag: any, node: TEIParentItem, setNote: any) {
    const computedNode = computeNode(node, setNote);
    switch (tag) {
        case "p":
            return <Paragraph>
                {computedNode}
            </Paragraph>;
        case "hi":
            return <Italics>
                {computedNode}
            </Italics>;
        case "head":
            return <Title>
                {computedNode}
            </Title>;
        case "bibl":
            return <div>
                {computedNode};
            </div>;
        case "title":
            return <EditionTitle>
                {computedNode}
            </EditionTitle>;
        case "quote":
            return <Quote>
                {computedNode}
            </Quote>;
        case "ab":
            return <span>
                {computedNode}
            </span>;
        case "label":
            return <Label>
                {computedNode}
            </Label>;
        case "l":
            return <Verse>
                {computedNode}
            </Verse>;
        case "space":
            return <VerseSpace>
                {computedNode}
            </VerseSpace>;
        case "div":
            return <div>{computedNode}</div>;
        case "note":
            return <Note setNote={setNote} attributes={node.attributes}>
                {computedNode}
            </Note>;
        case "lg":
            return <div>
                {computedNode}
            </div>;
        case "ref":
            return <Ref
                attributes={node.attributes}
            >
                {computedNode}
            </Ref>;
        case "figure":
            return <div>
                {computedNode}
            </div>;
        case "graphic":
            return <Image
                attributes={node.attributes}
            >
                {computedNode}
            </Image>;
        case "lb":
            return <br />;
        default:
            console.log("Unknown tag : ", node);
            return <NotHandledTag
                tag={tag}
            >
                {computedNode}
            </NotHandledTag>
    }

}