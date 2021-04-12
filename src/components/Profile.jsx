import classes from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IkOfF9qPvJbdtc9-Cusnip1k4AGuUytvtg&usqp=CAU"></img>
            </div>
            <div>
                avatar + discription
            </div>
            <div>
                My posts
                <div>
                    New posts
                    <div className={classes.posts}>
                        <div className={classes.item}>post10000</div>
                        <div className={classes.item}>post2</div>
                        <div className={classes.item}>post3</div>
                        <div className={classes.item}>post4</div>
                        <div className={classes.item}>post5</div>
                    </div>
                </div>
            </div>
        </div>
    )
}