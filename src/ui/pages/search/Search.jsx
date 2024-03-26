import React from 'react';
import './search.css';
import { Input } from 'reactstrap';
import logo from '../../../assets/img/search.png'

export default function Search() {
    return (
        <>
            <div className="search_container">
                <div className="heading">
                    SEARCH HERE
                </div>
                <div className="search_box">
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="input_field">
                        <Input placeholder='Search Here...' /><button>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}
