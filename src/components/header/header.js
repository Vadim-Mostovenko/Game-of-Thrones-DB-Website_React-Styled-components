import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlockDIV = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitleH3 = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinksUL = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlockDIV>
            <HeaderTitleH3>
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </HeaderTitleH3>
            <HeaderLinksUL>
                <li>
                    <Link to='/characters/'>Characters</Link>
                </li>
                <li>
                    <Link to='/houses/'>Houses</Link>
                </li>
                <li>
                    <Link to='/books/'>Books</Link>   
                </li>
            </HeaderLinksUL>
        </HeaderBlockDIV>
    );
};

export default Header;