import { Paper, Typography } from "@material-ui/core";


const CreatePost = () => {

    const handleSubmit = () => {

    };
    return (
        <Paper className="">
            <form className="" onSubmit={handleSubmit} noValidate autoComplete="off">
                <Typography variant="h6">Save a Moment</Typography>
            </form>
        </Paper>
     );
}
 
export default CreatePost;