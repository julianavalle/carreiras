import Card from './Card'
import classes from './HeroesCards.module.css';
import HeroItem from './heroItem/HeroItem'

const HEROES = [
    {
        id: 'h1',
        name: 'Hela',
        aliases: 'Goddess of Death',
        gender: 'Female',
        publisher: 'Marvel Comics',
        alignment: 'Bad',
        race: 'Asgardian',
        egos: 'No alter egos found',
        group:  '-',
        relatives: 'Loki (father), Thor (Uncle)',
        intelligence: 63,
        strength: 100,
        speed: 46,
        durability: 100,
        power: 100,
        combat: 45
    },

    {
        id: 'h2',
        name: 'Hela',
        aliases: 'Goddess of Death',
        gender: 'Female',
        publisher: 'Marvel Comics',
        alignment: 'Bad',
        race: 'Asgardian',
        egos: 'No alter egos found',
        group:  '-',
        relatives: 'Loki (father), Thor (Uncle)',
        intelligence: 63,
        strength: 100,
        speed: 46,
        durability: 100,
        power: 100,
        combat: 45
    },

    {
        id: 'h3',
        name: 'Hela',
        aliases: 'Goddess of Death',
        gender: 'Female',
        publisher: 'Marvel Comics',
        alignment: 'Bad',
        race: 'Asgardian',
        egos: 'No alter egos found',
        group:  '-',
        relatives: 'Loki (father), Thor (Uncle)',
        intelligence: 63,
        strength: 100,
        speed: 46,
        durability: 100,
        power: 100,
        combat: 45
    },
];

const HeroesCards = () => {
    const heroesList = HEROES.map(hero => <HeroItem key={hero.id} name={hero.name}/>);

    return <section className={classes.heroes}>
        <div>
            <Card>
                <div>
                    {heroesList}
                </div>
            </Card>
        </div>
    </section>
};

export default HeroesCards;