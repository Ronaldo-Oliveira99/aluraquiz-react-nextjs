import styled from 'styled-components'

const QBox = styled.div`
    width: 70;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0px;
    padding: 20px;
    box-sizing: border-box;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 50px auto;
    background-color: #ffff;

`
const Alternative = styled.div`
    position: relative;
    padding: 10px;
    background-color:#edededcc;
    display: block;
    width: 70%;
    margin: 10px 20px;
    outline: none;
    border: none;
    font-size: 1em;
    color: rgb(59, 56, 56);
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    text-align: left;
    h1{
        text-align: left;
    }

`



export {QBox, Alternative };