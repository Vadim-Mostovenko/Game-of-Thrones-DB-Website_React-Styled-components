import React from 'react'
import styled from 'styled-components';

const SpinnerDiv = styled.div`
    @keyframes ldio-1j19ghutuba {
    0% { opacity: 1 }
    100% { opacity: 0 }
    }
    .ldio-1j19ghutuba div {
    left: 94px;
    top: 48px;
    position: absolute;
    animation: ldio-1j19ghutuba linear 1s infinite;
    background: #0a0a0a;
    width: 12px;
    height: 24px;
    border-radius: 0px / 0px;
    transform-origin: 6px 52px;
    }.ldio-1j19ghutuba div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9166666666666666s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.8333333333333334s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.6666666666666666s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.5833333333333334s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.4166666666666667s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.3333333333333333s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.16666666666666666s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.08333333333333333s;
    background: #0a0a0a;
    }.ldio-1j19ghutuba div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    background: #0a0a0a;
    }
    .loadingio-spinner-spinner-zr6hdy7194r {
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin: 0 auto;
    background: #ffffff;
    }
    .ldio-1j19ghutuba {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
    }
    .ldio-1j19ghutuba div { box-sizing: content-box; }
`;

const Spinner = () => {
    return (
        <SpinnerDiv>
            <div className="loadingio-spinner-spinner-zr6hdy7194r rounded"><div className="ldio-1j19ghutuba">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </SpinnerDiv>
    )
}

export default Spinner