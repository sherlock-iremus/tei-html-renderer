function Italics(props: any) {
    return <span
        style={{"fontStyle": "italic"}}
    >
            {props.children}
    </span>
}

export default Italics;