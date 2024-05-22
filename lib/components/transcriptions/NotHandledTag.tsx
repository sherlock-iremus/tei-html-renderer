function NotHandledTag(props: any) {
    return <div
        style={{"backgroundColor": "red", "width": "50px", "height": "50px"}}
        id={props.tag}>
        {props.children}
    </div>
}

export default NotHandledTag;