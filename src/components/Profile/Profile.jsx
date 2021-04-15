import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7o0Y6fn7TosTRZR-rYSCxf4Zy29T_mLujOQ&usqp=CAU"></img>
            </div>
            <div>
                avatar + discription
            </div>
            <MyPosts/>
        </div>
    )
}