import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { AiOutlineShopping } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import Trending from './Trending';
import RecentSearch from './RecentSearch';

interface SearchProps {
    handlesearch: () => void;
}

const Search: React.FC<SearchProps> = ({ handlesearch }) => {
    return (
        <div className='search'>
            <div className="search-header">
                <MdArrowBackIosNew onClick={handlesearch}/>
                <h6>Search</h6>
                <AiOutlineShopping className="cart-icon" />
            </div>
            <div className="search-body">
                <div className="search-body-input">
                    <div className="text">
                        <input type="text" name="" id="" placeholder='Looking for something?' />
                    </div>
                    <CgSearch className="search-icon" />
                </div>
                <RecentSearch />

                <Trending />
            </div>
        </div>
    )
}

export default Search