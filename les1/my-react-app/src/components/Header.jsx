import styled from 'styled-components';

function Header(){

    const Container = styled.div`
        background-color: #F1F2F8;
        padding: 10px;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    `

    const H1 = styled.div`
        color: #5FACF2;
        font-size: 35px;
        font-family: "Gill Sans", sans-serif;
    `

    return(
        <Container>
            <H1>O! Task</H1>

        </Container>
    )
}

export default Header;