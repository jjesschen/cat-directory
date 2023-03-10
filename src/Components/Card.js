import React from 'react'; 

const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br4 pa3 ma2 grow bw1 shadow-5'>
            <img alt='cats' src={`https://robohash.org/${id}?set=set4`} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;