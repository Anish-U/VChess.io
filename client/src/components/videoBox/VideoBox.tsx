import './videoBox.css';

const VideoBox = () => {
	return (
		<>
			<div className='videoBoxContainer'>
				<span className='playerName'>Player Name</span>
				<div className='video'></div>
				<div className='buttonContainer'>
					<button className='controllerButton'></button>
					<button className='controllerButton active'></button>
				</div>
			</div>
		</>
	);
};

export default VideoBox;
