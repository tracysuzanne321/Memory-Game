import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImg = [
	{ src: '/img/arms.png' },
	{ src: '/img/potion.png' },
	{ src: '/img/scroll.png' },
	{ src: '/img/sheild.png' },
	{ src: '/img/singleSword.png' },
	{ src: '/img/sword.png' },
];

const App = () => {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choice1, setChoice1] = useState(null);
	const [choice2, setChoice2] = useState(null);

	const shuffleCards = () => {
		const shuffledCards = [...cardImg, ...cardImg]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setCards(shuffledCards);
		setTurns(0);
	};
	const handleChoice = (card) => {
		choice1 ? setChoice2(card) : setChoice1(card);
	};

	const resetTurn = () => {
		setChoice1(null);
		setChoice2(null);
		setTurns((prevTurns) => prevTurns + 1);
	};

	useEffect(() => {}, [choice1, choice2]);

	return (
		<div className="App">
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>Start Game</button>
			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard card={card} handleChoice={handleChoice} />
				))}
			</div>
		</div>
	);
};

export default App;
