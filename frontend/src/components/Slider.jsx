import { useState } from "react";
import { sliderItems } from "../data.js";

import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { mobile } from "../responsive.js";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #fff;
    position: relative;
    overflow: hidden;

    ${mobile({display:"none"})};
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ececec; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin:auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity:0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: transform 1.5s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;

    background-color: #${props => props.bg};

`

const ImgContainer = styled.div`
    flex:1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex:1;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    transition: all 0.5s ease;
    
    &:hover {
        transform: scale(1.2);
        background-color: #95eaea;
    }
    
`




function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left" && slideIndex > 0) {
            setSlideIndex(slideIndex - 1)
        }

        else if (direction === "right" && slideIndex < sliderItems.length -1) {
            setSlideIndex(slideIndex + 1)
        }
    }

    return (
        <Container>
            <Arrow direction={"left"} onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>GÖZ AT</Button>
                        </InfoContainer>
                    </Slide>
                ))}



            </Wrapper>
            <Arrow direction={"right"} onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider;