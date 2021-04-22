import classes from './MyPosts.module.css';
import { Post } from './Post/Post';


export const MyPosts = (props) => {

    let postsElements = props.postsData.map(item => <Post message={item.message} likesCount={item.likesCount} />)

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