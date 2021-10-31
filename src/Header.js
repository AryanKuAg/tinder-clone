import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Tinder from "./tinder.svg";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img src={Tinder} alt="tinder" className="header__logo"></img>
      <IconButton>
        <ChatBubbleIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
