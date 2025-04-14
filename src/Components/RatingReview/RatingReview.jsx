import React from 'react'

function RatingReview({ rating }) {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star, index) => {
                return (
                    <span
                        key={index}
                        className='start'
                        style={{
                            cursor: 'pointer',
                            color: rating >= star ? '#ffb700' : 'gray',
                            fontSize: `15px`,
                        }}
                    >
                        {' '}
                        ★{' '}
                    </span>
                )
            })}
        </div>
    )
}

export default RatingReview