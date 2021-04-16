import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post
                    message="Hi, everyone!"
                    like="3"
                />
                <Post
                    message="Hello, it's my fist post."
                    like="41"
                />
                <Post />
            </div>
        </div>

    )
}