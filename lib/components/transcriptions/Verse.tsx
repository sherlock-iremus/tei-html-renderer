import Typography from "@mui/material/Typography";

function Verse(props: any) {
    return <Typography component="div" //variant="article"
     fontStyle="italic">
        {props.children}
    </Typography>
}

export default Verse;