import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <>
            <li
                className="item"
                key={item.id}>
                <input
                    name="item"
                    onChange={() => handleCheck(item.id)}
                    type="checkbox"
                    checked={item.checked}
                />
                <label
                    onDoubleClick={() => handleCheck(item.id)}
                    htmlFor="item">
                    {item.item}
                </label>
                <FaTrashAlt
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDelete(item.id)}
                />
            </li>
        </>
    );
};

export default LineItem;
