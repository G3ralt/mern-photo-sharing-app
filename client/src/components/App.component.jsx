import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import Posts from './posts/Posts.component';
import postsActions from '../store/actions/posts.actions';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'

const useStyles = makeStyles(() => ({
    appBar: {
        color: '#6c97ce',
        borderRadius: 20,
        margin: '35px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,79,121,0.8) 50%, rgba(0,212,255,1) 100%)',
    },
    feed: {
        paddingTop: '10px',
    }
}));

const App = () => {

    const dispatch = useDispatch();
    const classNames = useStyles();

    useEffect(() => {
        dispatch(postsActions.getPosts(0));
    }, [dispatch]);


    return (
        <Container maxWidth="lg">
            <AppBar className={classNames.appBar} position="static">
                <Typography variant="h2" align="center">Moments</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        className={classNames.feed}
                        container
                        spacing={3}
                        justifyContent="center"
                    >
                        <Posts />
                        {/* <Grid item xs={12} sm={4}>
                            <CreatePost />
                        </Grid> */}
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;