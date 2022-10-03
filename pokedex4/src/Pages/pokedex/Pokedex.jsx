import { Screen, Header, Img, AllPoke, Body, Main, Title, LeftArr } from "./StylePokedex"
import opa from '../../Pages/home/img/image.svg'
import { useNavigate } from "react-router-dom"
import {goToHome} from '../../Routes/Coordinator'
import {Card} from '../home/components/cardPokemon/Card'
import leftArrow from './img/leftArrow.svg'
import { useEffect, useState } from "react"

export function Pokedex() {
    const navigate = useNavigate()
    const [pokeList, setPokelist] = useState()
    const [activateRender, setActivateRender] = useState(false)

    useEffect(()=> {
        setPokelist(localStorage.getItem("catchedPokemons").length > 2 && JSON.parse(localStorage.getItem("catchedPokemons")))
    }, [activateRender])

    const removePokemon = (pokemon) => {
        let getLocal = JSON.parse(localStorage.getItem("catchedPokemons"))
        const catchedPokemons = getLocal.filter((poke)=> poke.name !== pokemon.name)
        localStorage.setItem("catchedPokemons", JSON.stringify(catchedPokemons))
        setActivateRender(!activateRender)
    }

    return (
        <Screen>
            <Header>
                <LeftArr src={leftArrow} alt="" />
                <AllPoke onClick={()=> goToHome(navigate)}>Todos Pokémons</AllPoke>
                <Img src={opa} alt="" />
            </Header>
            <Body>
                <Title>Meus Pokémons</Title>
                <Main>
                    {localStorage.getItem("catchedPokemons").length > 2 ? pokeList?.map((poke, i)=><Card key={i} pokemon={poke} onClickPokemon={removePokemon} class={"excluir"} text="excluir" />) : <p></p>}
                    {/* {showGot && <Gotcha/>} */}
                </Main>
            </Body>
        </Screen>
    )
}
