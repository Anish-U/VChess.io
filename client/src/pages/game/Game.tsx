import './game.css';

import ChessBoard from '../../components/chessBoard/ChessBoard';
import VideoBox from '../../components/videoBox/VideoBox';

const Game = () => {
	return (
		<>
			<div className='homeContainer'>
				<ChessBoard />
				<div className='videoContainer'>
					<VideoBox />
					<VideoBox />
				</div>
			</div>
		</>
	);
};

export default Game;
