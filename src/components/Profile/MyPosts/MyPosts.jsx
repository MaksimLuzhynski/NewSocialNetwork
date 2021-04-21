import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

let postsData = [
    { id: 1, message: "Hi, everyone!", likesCount: "47" },
    { id: 2, message: "Hello, it's my fist post.", likesCount: "6" },
    { id: 3, message: "Hellow", likesCount: "0" },
];

let postsElements = postsData.map(item => <Post message={item.message} likesCount={item.likesCount} />)

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
                {postsElements}
            </div>
        </div>

    )
}