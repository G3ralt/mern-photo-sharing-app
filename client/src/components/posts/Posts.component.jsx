import { CircularProgress, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post.component";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import postsActions from "../../store/actions/posts.actions";
import { useState } from "react";

const FeedItem = ({ children }) => (
    <Grid
        item
        xs={12}
        sm={10}
        md={8}
        lg={7}
    >
        {children}
    </Grid>
);

const Posts = () => {
    const posts = useSelector(state => state?.posts?.items);
    const loading = useSelector(state => state?.posts.loading);
    const hasError = useSelector(state => state?.posts.error);
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(2);

    const loadMore = () => {
        dispatch(postsActions.getPosts({ pageNumber }));
        setPageNumber(pageNumber + 1);
    };

    const [sentryRef] = useInfiniteScroll({
        loading,
        hasNextPage: true,
        onLoadMore: loadMore,
        disabled: hasError,
        rootMargin: '0px 0px 500px 0px',
        delayInMs: '1000',
    });

    return (
        <>
            {posts.map((post, i) => (
                <FeedItem key={`${post.id}${i}`}>
                    <Post post={post}></Post>
                </FeedItem>
            ))}
            <Grid
                container
                justifyContent='center'
                ref={sentryRef}
            >
                {<CircularProgress />}
            </Grid>
        </>
    );
};

export default Posts;