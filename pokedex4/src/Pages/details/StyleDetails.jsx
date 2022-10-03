import styled from "styled-components";

export const Screen = styled.section`
    min-height: calc(160px + 188px + 663px + 163px);
    width: 100%;
    background-color:#5E5E5E;
    position: relative;
    top: 0;
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

export const Delete = styled.button`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 4px 10px;
    color: #fff;

    position: absolute;
    width: 226px;
    height: 57px;
    right: 82.33px;
    top: 51px;

    background: #FF6262;
    border-radius: 8px;

    border: none;
    cursor: pointer;
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
    width: 100%;
    display: flex;
    position: relative;
`;

export const Title = styled.h1`
    width: 220px;
    height: 72px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    position: absolute;
    left: 40px;
    top: 60px;
    /* identical to box height */


    color: #FFFFFF;
`;

export const Main = styled.section`
    width: 1389.14px;
    height: 663px;
    position: relative;
    top: 188px;
    margin: 0 auto;

    border-radius: 37.8857px;
`;

export const ImgTop = styled.div`
    position: absolute;
    width: 282px;
    height: 282px;
    left: 44px;
    top: 26px;

    background: url(image.png), #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
`;

export const ImgBottom = styled.div`
    position: absolute;
    width: 282px;
    height: 282px;
    left: 44px;
    top: 355px;

    background: url(image.png), #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
`;

export const MiddleCard = styled.div`
    position: absolute;
    width: 343px;
    height: 613px;
    left: 360px;
    top: 24px;

    background: #FFFFFF;
    border-radius: 12px;
`;

export const InfoMiddle = styled.div`
    position: absolute;
    width: 307px;
    /* height: 257px; */
    left: 378px;
    top: 43px;
    z-index: 30;
    font-family: 'Inter';
    font-size: 100%;
`;

export const BaseStats = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 27px;
    /* line-height: 29px; */
    margin-bottom: 18px;
    color: #000000;
`;

export const Bar = styled.div`
    height: 14px;
    width: 100%;
    background-color: #ff6600;
    border-radius: 3px;
    margin-left: 18px;
`;

export const DivStats = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 12% 68%;
    text-align: end;
    margin-top: 14px;
    align-items: center;
`;

export const Number = styled.p`
    position: absolute;
    width: 30px;
    height: 19px;
    left: 774px;
    top: 24px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
`;

export const Name = styled.h1`
    position: absolute;
    height: 58px;
    left: 771px;
    top: 39px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* identical to box height */


    color: #FFFFFF;
`;

export const ImgPokemon = styled.img`   
    position: absolute;
    width: 300px;
    height: 300px;
    left: 309px;
    top: -340px;
    z-index: 10;
`;

export const CardRight = styled.div`
    position: relative;
    width: 292px;
    height: 453px;
    left: 771px;
    top: 184px;

    background: #FFFFFF;
    border-radius: 8px;
`;

export const Moves = styled.h1`
    position: absolute;
    width: 87px;
    height: 29px;
    left: 789px;
    top: 202px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 29px;
    /* identical to box height */


    color: #000000;
`;

export const DivTypes = styled.div`
    display: flex;
    position: absolute;
    height: 31px;
    left: 774px;
    top: 107px;
    gap: 18px;
`;

export const Type = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 17px;
    height: 31px;

    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
`;

export const TypeName = styled.p`
    height: 21px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */


    color: #FFFFFF;
`;

export const DivMoves = styled.div`
    width: 100%;
    height: auto;

    position: absolute;
    left: 18px;
    top: 74px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Move = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    /* line-height: 17px; */
    padding: 10px;
    width: fit-content;
    
    background-color: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
`;

export const ImgBack = styled.img`
    position: absolute;
    right: -7px;
    top: 0;
    height: 743px;
`;