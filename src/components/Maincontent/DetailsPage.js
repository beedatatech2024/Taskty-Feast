import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-80 w-80 rounded-md shadow-2xl">
        </div>
      ) : (
        <div className='m-10'>
          <div className='flex'>
            <div>
              <img src={item.recipe.image} alt="image_not_found" className='h-80 w-80 rounded-md shadow-2xl'/>
              <h1>Item Name: {item.recipe.label}</h1>
              <p>Diet: {item.recipe.dietLabels}</p>
            </div>
            <div className="px-5">
              <h1 className='text-xl font-bold'>Ingredients Used</h1>
              {item.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </div>
            <div className='px-5'>
              <h1 className='text-xl font-bold'>Nutritions</h1>
              {item.recipe.digest.map((nutrition, index) => (
                <li key={nutrition.label}>{nutrition.label}: {nutrition.total}</li>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
