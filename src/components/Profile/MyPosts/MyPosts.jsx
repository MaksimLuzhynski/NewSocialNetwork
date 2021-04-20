import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post
                    message="Hi, everyone!"
                    likesCount="3"
                />
                <Post
                    message="Hello, it's my fist post."
                    likesCount="41"
                />
                <Post />
            </div>
        </div>

    )
}