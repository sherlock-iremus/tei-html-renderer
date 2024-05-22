import Typography from "@mui/material/Typography";

function Note(props: any) {
  return <Typography /*variant="note"*/ component="span"
    onClick={() => props.setNote(props)}>📝</Typography>
}

export default Note;