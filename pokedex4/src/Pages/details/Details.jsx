import { Screen, Header, Img, AllPoke, Body, Main, Title, LeftArr, ImgTop, ImgBottom, MiddleCard, Number, Name, ImgPokemon, CardRight, InfoMiddle, BaseStats, DivStats, Moves, Delete, Type, DivTypes, TypeName, Move, DivMoves, ImgBack, Bar } from "./StyleDetails"
import opa from '../../Pages/home/img/image.svg'
import { goToHome, goToPokedex } from '../../Routes/Coordinator'
import leftArrow from '../pokedex/img/leftArrow.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { BASE_URL } from '../../constants/BASE_URL'
import { getType } from "../../hooks/getColors"
import { Removed } from '../home/components/cardCatch/Removed'
import back from '../home/img/back.svg'

export function Details() {
    const [pokemon, setPokemon] = useState({})
    const [showRem, setShowRem] = useState(false)

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        axios.get(
            BASE_URL + "/pokemon/" + params.id
        ).then((res) => setPokemon(res.data))
    }, [])

    const removePokemon = (pokemon) => {
        let getLocal = JSON.parse(localStorage.getItem("catchedPokemons"))
        const catchedPokemons = getLocal.filter((poke) => poke.name !== pokemon.name)
        localStorage.setItem("catchedPokemons", JSON.stringify(catchedPokemons))
        setShowRem(true)
        setTimeout(function () {
            setShowRem(false);
            goToPokedex(navigate)
        }, 1000);
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const cardColor = pokemon.types && getType(pokemon?.types[0].type.name)

    const types = pokemon.types?.map((type, i) => {
        const { color, symbol } = getType(type.type.name)
        return <Type key={i} style={{ backgroundColor: color }}> <img src={symbol} alt="" /> <TypeName>{capitalizeFirstLetter(type.type.name)}</TypeName> </Type>
    })

    const moves = pokemon?.moves && pokemon?.moves.slice(0, 4).map((poke) => <Move key={poke.move.name}>{capitalizeFirstLetter(poke.move.name)}</Move>)

    let sum = 0
    const stats = pokemon.stats?.map((poke, i) => {
        sum += poke.base_stat
        let color = poke.base_stat > 60 ? "#ffe357" : "#ff6600"
        return <DivStats key={i}><p>{poke.stat.name === "special-defense" ? "Sp. Def" : poke.stat.name === "special-attack" ? "Sp. Atk" : capitalizeFirstLetter(poke.stat.name)}</p><p>{poke.base_stat}</p><Bar style={{width: poke.base_stat * 1.5, backgroundColor: color}}/></DivStats>
    })

    return (
        <Screen>
            <Header>
                <LeftArr src={leftArrow} alt="" />
                <AllPoke onClick={() => goToHome(navigate)}>Todos Pokémons</AllPoke>
                <Img src={opa} alt="" />
                <Delete onClick={() => removePokemon(pokemon)}>Excluir da Pokédex</Delete>
            </Header>
            <Body>
                <Title>Detalhes</Title>
                <Main style={{ backgroundColor: cardColor?.cardColor }}>
                    <ImgBack src={back} alt="" />
                    <ImgTop style={{ backgroundImage: `url(${pokemon.sprites?.front_default})`, backgroundSize: "cover" }}></ImgTop>
                    <ImgBottom style={{ backgroundImage: `url(${pokemon.sprites?.back_default})`, backgroundSize: "cover" }} ></ImgBottom>
                    <MiddleCard></MiddleCard>
                    <InfoMiddle>
                        <BaseStats>Base stats</BaseStats>
                        {stats}
                        <DivStats><p>Total:</p><p>{sum}</p></DivStats>
                    </InfoMiddle>
                    <Number>#{pokemon.id < 10 ? "0" + pokemon.id : pokemon.id}</Number>
                    <Name>{pokemon?.name && capitalizeFirstLetter(pokemon?.name)}</Name>
                    <DivTypes>
                        {types}
                    </DivTypes>
                    <CardRight>
                    <ImgPokemon src={pokemon.sprites?.other["official-artwork"].front_default} />
                        <DivMoves>
                            {moves}
                        </DivMoves>
                    </CardRight>
                    <Moves>Moves:</Moves>
                    {showRem && <Removed />}
                </Main>
            </Body>
        </Screen>
    )
}
