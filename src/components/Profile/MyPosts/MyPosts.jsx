import classes from './MyPosts.module.css';
import { Post } from './Post/Post';
import React from 'react';


export const MyPosts = (props) => {

    let postsElements = props.postsData.map(item => <Post message={item.message} likesCount={item.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}