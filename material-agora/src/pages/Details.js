import { Fragment } from "react";
import { useParams } from "react-router";

const Details = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Details Page</h1>
            <p>{params.heroId}</p>
        </Fragment>

    ) 
};

export default Details;