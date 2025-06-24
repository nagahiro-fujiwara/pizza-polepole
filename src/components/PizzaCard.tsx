import React from 'react';
import Image from 'next/image';

interface Pizza {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  return (
    <div className="pizza-card">
      <Image src={pizza.image} alt={pizza.name} width={300} height={300} />
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <span>¥{pizza.price.toLocaleString()}</span>
    </div>
  );
};

export default PizzaCard;
