import React from 'react';
import Item from './../Item/Item';

function List({submit}) {
    return (
        <div>
            <h2>My LIst</h2>
            <Item />
            { submit.map(item => {
                return (
                    <Item 
                    id={item.id}
                    title={item.title}
                    />
                )
            })
              
            }         
        </div>
    )
}

export default List
