
import React, { useState, useEffect } from 'react';

const PizzaOrder = ({ pizzaType }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrderPlaced(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('El componente se actualizó');
  });

  const handleCancelOrder = () => {
    if (window.confirm('¿Estás seguro de que deseas cancelar tu pedido de pizza?')) {
      console.log('El pedido ha sido cancelado');
    }
  };

  return (
    <div>
      {orderPlaced ? (
        <div>
          <h2>¡Pedido de pizza {pizzaType} realizado con éxito!</h2>
          <button onClick={handleCancelOrder}>Cancelar Pedido</button>
        </div>
      ) : (
        <h2>Cargando pedido...</h2>
      )}
    </div>
  );
};

export default PizzaOrder;
