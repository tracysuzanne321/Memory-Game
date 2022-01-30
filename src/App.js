import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImg = [
	{ src: '/img/arms.png', matched: false },
	{ src: '/img/potion.png', matched: false },
	{ src: '/img/scroll.png', matched: false },
	{ src: '/img/sheild.png', matched: false },
	{ src: '/img/singleSword.png', matched: false },
	{ src: '/img/sword.png', matched: false },
];

const App = () => {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choice1, setChoice1] = useState(null);
	const [choice2, setChoice2] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const handleChoice = (card) => {
		console.log(card);
		choice1 ? setChoice2(card) : setChoice1(card);
	};
	useEffect(() => {
		if (choice1 && choice2) {
			setDisabled(true);

			if (choice1.src === choice2.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choice1.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setTimeout(() => resetTurn(), 1000);
			}
		}
	}, [choice1, choice2]);

	const mixCards = () => {
		const mixedCards = [...cardImg, ...cardImg]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setChoice1(null);
		setChoice2(null);
		setCards(mixedCards);
		setTurns(0);
	};

	const resetTurn = () => {
		setChoice1(null);
		setChoice2(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	};

	useEffect(() => {
		mixCards();
	}, []);

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={mixCards}>New Game</button>

			<div className="card-content">
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						turned={card === choice1 || card === choice2 || card.matched}
						disabled={disabled}
					/>
				))}
			</div>

			<p>Turns: {turns}</p>
		</div>
	);
};
export default App;
