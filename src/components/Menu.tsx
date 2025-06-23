import React from 'react';
import PizzaCard from './PizzaCard';

interface Pizza {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuProps {
  pizzas: Pizza[];
}

const Menu: React.FC<MenuProps> = ({ pizzas }) => {
  return (
    <section id="menu" className="menu fade-in">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
