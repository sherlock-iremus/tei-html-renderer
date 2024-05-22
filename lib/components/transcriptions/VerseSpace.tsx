import Typography from "@mui/material/Typography";

function VerseSpace(props: any) {
    return <Typography
        mr={4} component="span"
    >
        {props.children}
    </Typography>
}

export default VerseSpace;