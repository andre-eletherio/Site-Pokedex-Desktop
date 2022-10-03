import styled from "styled-components"

const Card = styled.section`
    height: 222px;
    width: 451px;
    border-radius: 12px;
    position: relative;
    background-color: #fff;
    position: fixed;
    top: calc(50vh - 111px);
    left: calc(50% - 225.5px);
    display: flex;
    justify-content: center;
    z-index: 100;
`;

const Title = styled.h1`
    position: absolute;
    width: 176px;
    height: 72px;
    left: 138px;
    top: 61px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */


    color: #000000;
`;

const Description = styled.p`
    position: absolute;
    width: 334px;
    height: 24px;
    left: 64px;
    top: 133px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    color: #000000;
`;

export function Removed() {
  return (
    <Card>
        <Title>{"Oh, no!"}</Title>
        <Description>{"O Pokémon foi removido da sua Pokédex"}</Description>
    </Card>
  )
}
