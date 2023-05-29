import React from 'react';

interface ICounterProps {
    restartGame: React.MouseEventHandler;

}
const Reset: React.FC<ICounterProps> = props => {
    return (
        <div>
            <div><button className='btn' onClick={props.restartGame}>Reset</button></div>
        </div>
    );
};

export default Reset;