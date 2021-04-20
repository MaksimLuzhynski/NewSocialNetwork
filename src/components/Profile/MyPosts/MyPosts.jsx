import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

let postsData = [
    { id: 1, message: "Hi, everyone!", likesCount: "47" },
    { id: 2, message: "Hello, it's my fist post.", likesCount: "6" },
    { id: 3, message: "Hellow", likesCount: "0" },
];

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
            </div>
        </div>

    )
}