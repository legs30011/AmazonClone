import React from 'react'
import { Info, ProductContainer } from './style';import { Title } from '@/styles/sharedstyles';
import Price from '../Price';
import Rating from '../Rating';
;

interface ProductProps{
    id:string;
    title:string;
    image:string;
    price:number;
    rating:number;
}

const Product = ({id,title,image,price,rating}:ProductProps) => {
  return (
    <ProductContainer>
        <img src={image} alt={title} />
        <Info>
             <Title>{title}</Title>
             <Price itemPrice={price}></Price>
             <Rating ratingNumber={rating}></Rating>
        </Info>
    </ProductContainer>
  );
};

export default Product;