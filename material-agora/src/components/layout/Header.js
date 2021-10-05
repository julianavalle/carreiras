import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = props =>{
    return <header className={classes.header}>
        <div className={classes.logo}>Heros</div>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/heros' activeClassName={classes.active}>All Heros</NavLink>
                </li>

                <li>
                    <NavLink to='/groups' activeClassName={classes.active}>Groups</NavLink>
                </li>
            </ul>
        </nav>
    </header>
};

export default Header;