import { Fragment } from "react";
import HeroesCards from "../heroesCards/HeroesCards";

import Header from "./Header";
import classes from './Layout.module.css';

const Layout = (props) =>{
    return <Fragment>
        <Header />
        <main className={classes.main}>{props.children}
            <HeroesCards />
        </main>

    </Fragment>
};

export default Layout;