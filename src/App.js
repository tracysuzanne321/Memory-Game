import { useState } from 'react';
import './App.css';
const cardImg = [
	{ src: '/images/arms.png' },
	{ src: '/images/potion.png' },
	{ src: '/images/scroll.png' },
	{ src: '/images/sheild.png' },
	{ src: '/images/singleSword.png' },
	{ src: '/images/sword.png' },
];

const App = () => {
	const [card, setCard] = useState([]);
	const [turns, setTurns] = useState(0);

	const shuffleCards = () => {
		const shuffledCards = [...cardImg, ...cardImg]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setCard(shuffledCards);
		setTurns(0);
	};

	console.log(card, turns);
	return (
		<div className="App">
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>Start Game</button>
		</div>
	);
};

export default App;
