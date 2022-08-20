import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


function Widget({ type }) {

    let data;

    //geçici db

    const amount = 100;
    const difference = 20;

    switch (type) {
        case "user":
            data = {
                title: "KULLANICILAR",
                isMoney: false,
                amount: 129,
                link: "Tüm kullanıcıları gör",
                icon: (
                    <PersonOutlineIcon className="icon" style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
                )
            };
            break;
        case "order":
            data = {
                title: "SİPARİŞLER",
                isMoney: false,
                amount: 24,
                link: "Tüm siparişleri gör",
                icon: (
                    <ShoppingCartOutlinedIcon className="icon" style={{color:"goldenrod",backgroundColor:"rgba(218,165,0,0.2)"}}/>
                )
            };
            break;
        case "earning":
            data = {
                title: "KAZANÇ",
                isMoney: true,
                amount: 8328,
                link: "Net kazancı gör",
                icon: (
                    <MonetizationOnOutlinedIcon className="icon" style={{color:"green",backgroundColor:"rgba(0,255,0,0.2)"}}/>
                )
            };
            break;
        case "balance":
            data = {
                title: "KAR/ZARAR",
                isMoney: false,
                link: "Tüm detayları gör",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"blue",backgroundColor:"#0077ff33"}}/>
                )
            };
            break;

        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.amount} {data.isMoney && "TL"}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon /> {difference} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget