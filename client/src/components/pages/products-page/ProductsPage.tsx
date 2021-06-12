import React, { FC } from 'react';
import Sidebar from '../../side-bar/Sidebar';
import './style.scss';
import { productItems } from '../../../data/data';
import { Link } from 'react-router-dom';

const ProductsPage: FC = () => {
  const renderProducts = () => {
    return productItems.map((item) => {
      return (
        <div className="products__item">
          <Link to={`/products/${item.id}`}>
            <div className="products__image">
              <img src={item.image} alt="Product" />
            </div>
          </Link>
          <div className="products__info">
            <div className="products__name">{item.name}</div>
            <div className="products__price">{item.price}</div>
          </div>
          <Link to={`/products/${item.id}`}>
            <button className="products__button">View</button>
          </Link>
          <button className="products__button">Add to cart</button>
        </div>
      );
    });
  };
  return (
    <div className="products">
      <div className="products__container">
        <Sidebar />
        <div className="products__content">
          <div className="products__items">{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
