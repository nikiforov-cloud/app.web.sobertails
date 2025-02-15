import React from 'react';
import './Card.scss';
import LazyImage from '@/components/LazyImage/LazyImage.tsx';
import { Item } from '@/index';

const Card: React.FC<{ item: Item }> = ({ item }) => {
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    ...ingredients
  } = item;

  const ingredientRows = Object.keys(ingredients)
    .filter((key) => key.includes('strIngredient') && ingredients[key])
    .map((key, index) => {
      const measureKey = `strMeasure${key.replace('strIngredient', '')}`;
      return (
        <tr key={index}>
          <td>{ingredients[key]}</td>
          <td>{ingredients[measureKey]}</td>
        </tr>
      );
    });

  return (
    <div className="Card">
      <div className="CardColumn">
        <div className="CardColumnBlock">
          <h2>{strDrink}</h2>
          <p>{strCategory}</p>
          <p>{strAlcoholic}</p>
          <p>{strGlass}</p>
        </div>
        <div className="CardColumnBlock">
          <h3>Instructions:</h3>
          <p>{strInstructions}</p>
        </div>
        <div className="CardColumnBlock">
          <h3>List of ingredients:</h3>
          <table>
            <tbody>{ingredientRows}</tbody>
          </table>
        </div>
      </div>
      <div className="CardColumn">
        <LazyImage src={strDrinkThumb} alt={strDrink} />
      </div>
    </div>
  );
};

export default Card;
