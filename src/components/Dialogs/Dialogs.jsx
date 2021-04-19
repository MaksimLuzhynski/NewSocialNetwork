import classes from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Sveta</div>
                <div className={classes.dialog}>Victor</div>
                <div className={classes.dialog}>Bob</div>
                <div className={classes.dialog}>Max</div>
                <div className={classes.dialog}>Sasha</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hellow</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}