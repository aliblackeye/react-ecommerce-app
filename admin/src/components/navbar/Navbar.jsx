import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { useContext } from "react";
import { Context as ThemeContext } from "../../context/themeContext.js";
function Navbar() {
  
  const { dispatch } = useContext(ThemeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Ara..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon style={{ marginRight: "5px" }} className="icon" /> Türkçe
          </div>
          <div className="item">
            <DarkModeIcon className="icon"  onClick={() => dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img className="avatar" src="https://images.pexels.com/photos/13119234/pexels-photo-13119234.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar