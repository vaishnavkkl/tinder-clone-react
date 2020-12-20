import React from "react";
import "./SwipeButton.css";
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

export default function SwipeButton(){
	return <div className="swipe-button">
		<IconButton className="swipe-repeat">
			<ReplayIcon fontSize="large" />
		</IconButton>
		<IconButton className="swipe-left">
			<CloseIcon fontSize="large" />
		</IconButton>
		<IconButton className="swipe-star">
			<StarRateIcon fontSize="large" />
		</IconButton>
		<IconButton className="swipe-right">
			<FavoriteIcon fontSize="large" />
		</IconButton>
		<IconButton className="swipe-lightning">
			<FlashOnIcon fontSize="large" />
		</IconButton>
	</div>
}