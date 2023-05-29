import React from 'react';
import Square from "../Square/Square";
import {character} from "../../types";

interface IPlayingFieldProps {
    items: character[];
    openSquare: (index: number) => void;
}



const PlayingField: React.FC<IPlayingFieldProps> = ({items, openSquare}) => {

        const all = items.map((sell, index) => {
            return <Square onSquareClick={() => openSquare(index)} hasItem={sell.hasItem} clicked={sell.clicked}/>
        })



    return (
        <div className="container">
            {all}
        </div>
    );
};

export default PlayingField;