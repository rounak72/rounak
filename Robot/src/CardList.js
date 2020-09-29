import React from 'react';
import 'tachyons';
import Card from './Card';


function CardList({robots}) {

    const cardComponent = robots.map((user, i) => {
        return <Card id={robots[i].id} username={robots[i].username} email={robots[i].email} />
    });

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;




