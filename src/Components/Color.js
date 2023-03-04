import React from 'react';
import ItemList from './ItemList';

const Color = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            <div>
                {items.length ? (
                    <ItemList
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ) : (
                    <p>There are no items</p>
                )}
            </div>
        </>
    );
};

export default Color;
