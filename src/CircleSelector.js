import React from 'react';
import "./CircleSelector.css";

const CircleSelector = props => (
    <div className='CircleSelector'>
       <button className={props.selectedCircle === 1 ? 'selected' : ''} onClick={()=> props.handleSelectedCircle(1)}>Select Circle 1</button>
       <button className={props.selectedCircle === 2 ? 'selected' : ''} onClick={()=> props.handleSelectedCircle(2)}>Select Circle 2</button>
       <button className={props.selectedCircle === 3 ? 'selected' : ''} onClick={()=> props.handleSelectedCircle(3)}>Select Circle 3</button>
       <button className={props.selectedCircle === 4 ? 'selected' : ''} onClick={()=> props.handleSelectedCircle(4)}>Select Circle 4</button> 
    </div>
);

export default CircleSelector;