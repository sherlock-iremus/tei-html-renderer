import Typography from "@mui/material/Typography";

function Paragraph(props: any) {
    return <Typography component="p" /*variant="article"*/ align="justify">
            {props.children}
        </Typography>
}

export default Paragraph;