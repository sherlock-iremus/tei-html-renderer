import { TEIItem } from "./TEIHTMLRenderer";

export function xmlToJson(xml: string): TEIItem {
  // Step 2: Parse the XML document
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "application/xml");

  // Step 3: Convert XML to JSON according to custom rules
  return xmlifyElement(xmlDoc.documentElement);
}

function xmlifyElement(xml: Element): TEIItem {
  return {
    id: getPathTo(xml),
    tag: xml.tagName,
    attributes: getAllAttributes(xml),
    children: [
      ...[...xml.children].map((child) => xmlifyElement(child)),
      ...(xml.children.length === 0
        ? [{ id: getPathTo(xml) + "/text()[1]", text: xml.textContent ? xml.textContent : '' }]
        : []),
    ],
  };
}

function getAllAttributes(node: Element) {
  const attributes: any = {};
  if (node.attributes) {
    for (let i = 0; i < node.attributes.length; i++) {
      const attr = node.attributes[i];
      attributes[attr.name] = attr.value;
    }
  }
  return attributes;
}

function getPathTo(node: Element | null | undefined): string {
  if (!node?.parentNode) return "";
  var ix = 0;
  var siblings = node?.parentNode?.children;
  if (siblings) {
    for (var i = 0; i < siblings?.length; i++) {
      var sibling = siblings.item(i);
      if (sibling === node)
        return (
          getPathTo(sibling?.parentElement) +
          "/" +
          node?.tagName +
          "[" +
          (ix + 1) +
          "]"
        );
      if (sibling?.nodeType === 1 && sibling?.tagName === node?.tagName) ix++;
    }
  }
  return "";
}
