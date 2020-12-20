import React, { useState, useEffect} from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";


export default function TinderCards() {

const [people, setPeople] = useState([]);


useEffect(()=>{

async function fetchData(){
	const req = await axios.get("/cards");

	setPeople(req.data);
}
fetchData();
}, [])


const swiped = (direction,nameToDelete) => {
  console.log('removing: ' + nameToDelete)
}

const outOfFrame = (name) => {
  console.log(name + ' left the screen')
} 

    return (
        <div className="tinder-cards">
		
		<div className="tinder-container">
			{people.map((person) => {
					return(
						<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up, down"]}
						onSwipe= {(dir)=> swiped(dir, person.name)}
						onCardLeftScreenn={()=> outOfFrame(person.name)}
						><div className="card" style={{backgroundImage:`url(${person.url})`}} >
							<h3>{person.name}</h3>
						</div>
							
						</TinderCard>
						)
				})}
		</div>
			
		</div>
    );
}