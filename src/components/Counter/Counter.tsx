import React from 'react';
interface ICounterProps {
    counter: number;

}

const Counter: React.FC<ICounterProps> = props => {

    return (
        <div>
          <p>Tries: {props.counter}</p>
        </div>
    );
};

export default Counter;