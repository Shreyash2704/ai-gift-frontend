import React from 'react';
import { Button, Card, Rate } from 'antd';
import '../App.css'

const GiftCard = ({ gift }) => {
  return (
    <Card cover={<img className="gift-image_" alt={gift.title} src={gift.image} style={{ width: 500, height: 200,marginRight:'5px' }} />}>

      
      <h2 className="gift-title">{gift.title}</h2>
      <div className="gift-price">
        <p>Price: {gift.price}</p>
        <p className="previous-price">Previous Price: {gift.old_price}</p>
      </div>
      <div className="condition-rating">
        <p>Condition: {gift.second_hand_condition}</p>
        <Rate allowHalf defaultValue={gift.rating} />
        
      </div>
      <div className="reviews">
      <p>Reviews: {gift.reviews}</p>
      <p className="">Number of Comparisons: {gift.number_of_comparisons}</p>
      </div>
      <div className="store-rating">
        <p>Store Reviews: {gift.store_reviews}</p>
        <p>Store Rating: {gift.store_rating}</p>
        
      </div>
      


      <p className="gift-description">{gift.description}</p>
      <Button className="buy-button" type="primary">
        Buy Gift
      </Button>

    </Card>
  );
};

export default GiftCard;