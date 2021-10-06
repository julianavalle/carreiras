import classes from './HeroItem.module.css';

const HeroItem = props => {
    return <div className={classes.hero}>
        <div>
            <h3 className={classes.name}>
               {props.name} 
            </h3>

            <h1>
               {props.aliases}
            </h1>
        </div>

        <div>

        </div>
    </div>
}

export default HeroItem;