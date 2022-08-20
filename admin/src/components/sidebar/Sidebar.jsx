import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context as ThemeContext } from "../../context/themeContext.js";

function Sidebar() {

  const { dispatch } = useContext(ThemeContext)

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Link to="/"><span className="logo">KP Admin</span></Link>
      </div>
      <div className="sidebar-center">

        <div className="sidebar-lists">
          <span className="list-title">ANA</span>
          <ul>
            <Link to="/"><li><DashboardIcon /><span>Gösterge Paneli</span></li></Link>
          </ul>
        </div>

        <div className="sidebar-lists">
          <span className="list-title">LİSTELER</span>
          <ul>
            <Link to='/users'> <li><PersonOutlineIcon /><span>Kullanıcılar</span></li></Link>
            <Link to='/products'> <li><StoreIcon /><span>Ürünler</span></li> </Link>
            <Link to='/orders'> <li><CreditCardIcon /><span>Siparişler</span></li> </Link>
            <li><LocalShippingIcon /><span>Sevkiyatlar</span></li>
          </ul>
        </div>

        <div className="sidebar-lists">
          <span className="list-title">KULLANIŞLI</span>
          <ul>
            <li><AssessmentIcon /><span>İstatistikler</span></li>
            <li><NotificationsIcon /><span>Bildirimler</span></li>
          </ul>
        </div>

        <div className="sidebar-lists">
          <span className="list-title">SERVİSLER</span>
          <ul>
            <li><HealthAndSafetyIcon /><span>Sistem Sağlığı</span></li>
            <li><FeedIcon /><span>Günlükler</span></li>
            <li><SettingsIcon /><span>Ayarlar</span></li>
          </ul>
        </div>

        <div className="sidebar-lists">
          <span className="list-title">KULLANICI</span>
          <ul>
            <li><AccountCircleIcon /><span>Profil</span></li>
            <li><ExitToAppIcon /><span>Çıkış Yap</span></li>
          </ul>
        </div>

      </div>
      <div className="sidebar-bottom">
        <span className="list-title">TEMA</span>
        <div className="themes">
          <button className="white" onClick={() => dispatch({ type: "LIGHT" })}></button>
          <button className="black" onClick={() => dispatch({ type: "DARK" })}></button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar