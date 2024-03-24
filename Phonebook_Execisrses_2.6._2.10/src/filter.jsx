import React from "react";

const Filter = ({value, onSearch}) => {
    return (
        <div>
           Filter: <input value={value} onChange={onSearch}/>
        </div>
    )
}
export default Filter;