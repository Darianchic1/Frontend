import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sidebar() {

    const Container = styled.div`
        width: 10%;
        background-color: #F1F2F8;
        padding: 15px;
        height: 1000px;
        position: fixed;
    `

    const P = styled.p`
        font-size: 20px;
        margin-top: -5px;
    `

    return (
        <Container>
                <P>Desktop</P>
                <P>Projects</P>
                <P style={{color: '#5FACF2'}}>Tasks</P>
                <P>Clients</P>
        </Container>
    );
};

export default Sidebar;
