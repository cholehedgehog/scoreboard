import React, {memo} from "react";
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from "./Crown";

const Player = ({name, score, id, removePlayer, changeScore, isHighScore}) => {
    return (      
      <div className="player">        
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Crown isHighScore = {isHighScore}/>
          {name}
        </span>
  
        <Counter 
            score={score}
            changeScore={changeScore}
            id={id}
        />
      </div>
    );
  }

  const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
  }

  Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    changeScore: PropTypes.func.isRequired,
    isHighScore: PropTypes.bool
  }

  export default memo(Player, playerPropsAreEqual);