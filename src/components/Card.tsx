import React from 'react';

interface CardProps {
    width?: string;
    height?: string;
}


const Card = ({width, height}: CardProps) => {
  return (
    <div style={{width, height, background: 'gray'}}>
      Карточка!
    </div>
  )
}

export default Card;