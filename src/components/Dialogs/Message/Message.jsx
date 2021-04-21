import classes from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>)
}
