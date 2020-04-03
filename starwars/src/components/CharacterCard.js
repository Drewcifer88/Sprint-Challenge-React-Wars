import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;

padding: 2%;
background-color: white;
border-radius: 8px;
box-sizing: border-box;
margin-left: 20%;
margin-right: 20%;
margin-bottom: 5%;
`

const CharacterCard = ({character}) => {
    return (
        <Container>
        <div>
            <h1>{character.name}</h1>
            <p>{character.height}</p>
            <p>{character.mass}</p>
            <p>{character.hair_color}</p>
        </div>
        </Container>
    )
}

export default CharacterCard;