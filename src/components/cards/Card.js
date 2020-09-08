import React from 'react';
import styled from "styled-components";

import img from '../../assets/ny.jpg'

function Card(props) {

    const CardContainer = styled.div`
        background: url(${img}) no-repeat center;
        background-size: cover;
        background-repeat: no-repeat;
        /* border: 2px solid red; */
        color: whitesmoke;
        width: 29%;
        height: 100px;
        /* max-width: 28%; */
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 3px;
        flex-grow: 1;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `;

    const CardHeader = styled.div`
        position: absolute;
        width: 20%;
        height: 15%;
        left: 0px;
        top: 10px;
        font-size: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #70C783;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        &:after {
            /* content: ''; */
            /* position: relative; */
            /* left: 60px; */
            height: 0;
            width: 0;
            border-left: 20px solid #70C783;
            border-right: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-top: 20px solid transparent;
        }
    `;

    return (
        <CardContainer>
            <CardHeader>
                <div>{props.city}</div>
            </CardHeader>
            <div class='text'>
                <h3>{props.city}</h3>
                <h5>{props.state}</h5> 
            </div>
            <div class='attributes'>
                <span class='rent-price bottom-right'>{'$1,379 / mo'}</span>
            </div>
            
        </CardContainer>
    )
}

export default Card;