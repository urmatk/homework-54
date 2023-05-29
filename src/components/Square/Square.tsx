import React from 'react';
import ring from "../../img/ring.png";

interface ISquareProps {
    hasItem: boolean;
    clicked: boolean;
    onSquareClick: React.MouseEventHandler;
}

const Square: React.FC<ISquareProps> = props=> {

    console.log(props.clicked);
    const squareStyle: React.CSSProperties = {
        width: '60px',
        height: '60px',
        backgroundColor: 'lightslategray',
        margin: '1px',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    if (props.clicked) {
        squareStyle.backgroundColor = 'antiquewhite';
    }

    if (props.clicked && props.hasItem) {
        squareStyle.backgroundImage = `url(${ring})`;
    }

    return (
        <div style={squareStyle} onClick={props.onSquareClick}>
            {props.hasItem}
            {props.clicked}
        </div>
    );
};

export default Square;
