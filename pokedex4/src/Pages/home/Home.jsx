import React, { useEffect, useState } from "react";
import opa from './img/image.svg'
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL"
import { Card } from "./components/cardPokemon/Card";
import { Screen, Header, Img, Button, Body, Title, Main } from './StyleHome'
import { Gotcha } from "./components/cardCatch/Gotcha";
import { goToPokedex } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [pokemonList, setPokemonList] = useState([])
    const [showGot, setShowGot] = useState(false)

    useEffect(() => {
        for (let i = 1; i < 34; i++) {
            axios.get(
                BASE_URL + "/pokemon/" + i
            ).then((res) => setPokemonList(pokemonList => [...pokemonList, res.data]))
        }
        localStorage.getItem("catchedPokemons") === null && localStorage.setItem("catchedPokemons", JSON.stringify([]))
    }, [])

    const navigate = useNavigate()

    const addPokemon = (pokemon) => {
        let getLocal = JSON.parse(localStorage.getItem("catchedPokemons"))
        pokemon["captured"] = true
        localStorage.setItem("catchedPokemons", JSON.stringify([...getLocal, pokemon]))
        setShowGot(!showGot)
        setTimeout(function(){
            setShowGot(false);
        },1000);
      }

    const pokeList = () => {
        return pokemonList?.sort((a, b) => a.id - b.id).map((pokemon) => <Card key={pokemon.name} pokemon={pokemon} onClickPokemon={addPokemon} class={"capturar"} text={"Capturar!"} />)
    }

    return (
        <Screen>
            <Header>
                <Img src={opa} alt="" />
                <Button onClick={() => goToPokedex(navigate)}>Pokédex</Button>
            </Header>
            <Body>
                <Title>Todos Pokémons</Title>
                <Main>
                    {pokeList()}
                    {showGot && <Gotcha />}
                </Main>
            </Body>
        </Screen>
    )
}