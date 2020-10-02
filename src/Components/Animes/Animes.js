import React from "react";
import Anime from "./Anime/Anime"
const animes = props => props.characters.map((x,idx) => {
        return <Anime
            click={ props.clicked.bind(this,idx) }
            name={x.character}
            anime={x.anime}
            key={x.ID}
            changed={(event) => props.changed(event, x.ID)}
        />
});
export default animes;

//esempio metto tutto quello che fa una funzione su di un oggeto o array e lo ritorno per come voglio che sia bindato