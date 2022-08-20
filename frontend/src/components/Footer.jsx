import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;    
    ${mobile({flexDirection: 'column'})};
`

const Left = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding:20px;
`

const Logo = styled.h1`
`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    transition: all 1s ease;

    &:hover {
        transform: rotate(-360deg)
    }
`

const Center = styled.div`
    flex:1;
    padding:20px;

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;

`

const Right = styled.div`
    flex:1;
    padding:20px;
`

const ContactItem = styled.h3`
    flex:1;
    ${mobile({fontSize: "14px"})};
`

const PaymentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

`

const PaymentImage = styled.img`
    width:48px;
`

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>Karagöz Pazarlama</Logo>
                <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nihil exercitationem itaque, expedita dolorum earum laborum. In expedita doloremque facere officiis aut debitis quaerat dolore ullam ea, fugiat et saepe. Ipsa placeat est deserunt veritatis, facilis dolorum. Quidem, accusantium a.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="f6556d" >
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTubeIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Bağlantılar</Title>
                <List>
                    <ListItem>Ana Sayfa</ListItem>
                    <ListItem>Sepet</ListItem>
                    <ListItem>Kulaklıklar</ListItem>
                    <ListItem>Çantalar</ListItem>
                    <ListItem>Bileklikler</ListItem>
                    <ListItem>Saatler</ListItem>
                    <ListItem>Hesabım</ListItem>
                    <ListItem>Sipariş Takibi</ListItem>
                </List>
            </Center>

            <Right>
                <Title>İletişim</Title>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10" }} /> +90 552 648 37 36
                </ContactItem>
                <ContactItem>
                    <EmailOutlinedIcon style={{ marginRight: "10" }} /> contact@keypi.com
                </ContactItem>
                <ContactItem>
                    <FmdGoodIcon style={{ marginRight: "10" }} /> Mehmet Akif Mah. Osmangazi Cad. 34785
                </ContactItem>
                <PaymentItem>
                    <PaymentImage src="./img/footer/mastercard.png" />
                    <PaymentImage src="./img/footer/ae.png" />
                    <PaymentImage src="./img/footer/troy.svg" />
                    <PaymentImage src="./img/footer/visa.png" />
                </PaymentItem>
            </Right>
        </Container>
    )
}

export default Footer