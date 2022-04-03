import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ rev }) => {

    const { name, id, picture, review, rating } = rev;
    return (
        <div>
            <div className='card'>

               
                    <div className='card-info align-items-center p-3'>
                        <div className='image'>
                            <img src={picture} alt="" />

                        </div>
                        <div >
                            <p>Name: {name}</p>
                            <p>Review: {review}</p>
                            <p>Rating: {rating}</p>
                        </div>
                    </div>
                
            </div>


        </div>
    );
};

export default ReviewCard;