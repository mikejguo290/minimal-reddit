import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, clearSearchTerm } from '../../features/Search/searchSlice';

export const NoSearchResults = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearch);

    const handleClick = () =>{
        dispatch(clearSearchTerm());
    }
    
    return (
        <div className="noSearchResult">
            <h3>{`No posts matching "${searchTerm}"`}</h3>
            <button className="resetSearch" onClick={handleClick}>Reset search</button>
        </div>
    );
}