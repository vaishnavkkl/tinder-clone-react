import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logo from "./tinder-logo.png";
import "./Header.css";
import MessageIcon from '@material-ui/icons/Message';

export default function Header(){
	return (
		<div className="header">
			
			<IconButton>
			<PersonIcon fontSize="large" className="header-icon" /></IconButton>
			<img src={logo} alt="tinder logo" className="tinder-logo" />
			<IconButton>
			<MessageIcon fontSize="large" className="message-icon" /></IconButton>
		</div>
	);
}