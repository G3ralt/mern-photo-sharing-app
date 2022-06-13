import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import moment from 'moment';


const Post = ({ post }) => {

    const imageUrl = post.urls.small;
    const description = post.description;
    const userName = post.user.username;
    const profileImage = post.user.profile_image.small;

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={profileImage} alt={userName}>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={userName}
                subheader={moment(post.created_at).fromNow()}
            />
            <CardMedia
                component="img"
                height="300"
                image={imageUrl}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;