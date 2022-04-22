import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Overview</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='You Can Write Notes Here'
              label='Showcase'
              path='/application'
            />
            <CardItem
              src='images/img-2.jpg'
              text ='You Can Edit & Delete Notes'
              label='Showcase'
              path='/application'
            />
          {/* </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Preview Notes'
              label='Showcase'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Preview '
              label='Showcase'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Notes-5'
              label='Showcase'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
