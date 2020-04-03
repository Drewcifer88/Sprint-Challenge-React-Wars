import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const [characters, setCharacter] = useState([])
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response.data);
                setCharacter(response.data.results);
            })
           .catch(error => {
               console.log("error", error)
           });
    },[])

    return (
        <div>
         {characters.map(character => {
             return (
                <CharacterCard 
                character={character}
                />
             );
         })}   
        </div>
    )
}

export default CharacterList;