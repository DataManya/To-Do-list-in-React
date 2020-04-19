import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

import './ListItems.css';

function ListItems(props) {
    const items = props.items;

    const [checked, setChecked] = useState(false);

    const listItems = items.map(item => {
        
        return <div className="list" key={item.key}>
        
            <p>  
             <FontAwesomeIcon className="faicons1"
                        icon={item.checked ? 'check-circle' : 'circle'}
                        onClick={() => props.handleCheck(item.key)} 
                        />

                <input type="text"
                    id={item.key}
                    value={item.text}
                    onChange={
                        (e)=>{
                        props.setUpdate(e.target.value,item.key)
                    }
                    }/>
                <span>
                    <FontAwesomeIcon className="faicons"
                        icon='trash'
                        onClick={() => props.deleteItem(item.key)
                        } />
                </span>
            </p>

        </div>
    })
    return (
        <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
        </div>
    )
}

export default ListItems;