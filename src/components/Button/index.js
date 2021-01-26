import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const H3 = styled.h1`
    text-align: center;
    color: #f44336;
    &:hover {
        color:#ff7961;
    }
`
const Ahef = styled.a`
    text-decoration: none;
    cursor: pointer;

`
const Div = styled.div`
    background-color: #d7e32;
    padding:5px;
    width:50%;
    margin: 40px auto;
`
export default function Buttons(){
    return(
        <Div>

            <Link href="/quiz">
            <Ahef><H3>INICIAR QUIZ </H3></Ahef>     
            </Link>

        </Div>
    )
}