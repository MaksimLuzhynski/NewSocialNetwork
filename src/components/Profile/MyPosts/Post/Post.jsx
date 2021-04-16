import classes from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" />
             {props.message}
             <div>like {props.like}</div>
        </div>
    )
}