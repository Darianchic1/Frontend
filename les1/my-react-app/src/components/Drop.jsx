import React, { useState } from 'react';
import styled from 'styled-components'

function Drop(props){
    const Container = styled.div`
        position: relative;
        display: inline-block;
    `
    
    const Button = styled.button`
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        fontSize: 16px;
    `
    
    const List = styled.ul`
        position: absolute;
        background-color: #fff;
        border: 1px solid #ccc;
        margin-top: 5px;
        list-style-type: none;
        padding: 0;
        z-index: 1000;
    `
    
    const Item = styled.li`
        padding: 10px;
        cursor: pointer;
    `

    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <Container>
            <Button onClick={toggleDropdown} >
                {selectedOption || props.by}
            </Button>
            {isOpen && (
                <List>
                    {props.options.map((option, index) => (
                        <Item
                            key={index}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </Item>
                    ))}
                </List>
            )}
        </Container>
    )
}

export default Drop;
