const SingleCard = ({ card, handleChoice, turned, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<div className="card">
			<div className={turned ? 'turned' : ''}>
				<img className="front" src={card.src} alt="card front" />
				<img
					className="back"
					src="/img/cover.png"
					onClick={handleClick}
					alt="cover"
				/>
			</div>
		</div>
	);
};

export default SingleCard;
