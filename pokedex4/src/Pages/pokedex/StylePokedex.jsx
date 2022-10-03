import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color:#5E5E5E;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

export const Header = styled.section`
    width: 100%;
    height: 160px;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: relative;
`;

export const LeftArr = styled.img`
    width: 7.29px;
    height: 14.58px;
    position: absolute;
    left: 82.33px;
`;

export const Img = styled.img`
margin: 0 auto;
`;

export const AllPoke = styled.p`
    position: absolute;
    width: 210px;
    height: 36px;
    left: 100px;
    top: 62px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    text-decoration-line: underline;

    color: #1A1A1A;

    cursor: pointer;
`;

export const Body = styled.section`
    min-height: calc(100vh - 160px);
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    width: 1360px;
    margin: 0 auto;
`;

export const Main = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 53px 20px;
`;

export const Title = styled.h1`
    width: 404px;
    height: 72px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    width: 100%;
    color: #FFFFFF;
    margin-bottom: 56px;
`;