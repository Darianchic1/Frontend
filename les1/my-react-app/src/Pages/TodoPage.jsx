import styled from 'styled-components'
import TodoList from '../components/TodoList'
import Drop from '../components/Drop'

function TodoPage(){
    const Container = styled.div`
        background-color: #F1F2F8;
        padding: 10px;
        width: 85%;
        margin-left: 15%;
        height: 800px;
    `

    const Drops = styled.div`
        display: flex;
        flex-direction: row;
        gap: 1%;
        margin-bottom: 3%;
    `

    return(
        <Container>
            <Drops>
                <Drop by="By status" options={['Backlog', 'In progress', 'Done']}/>
                <Drop by="By actor" options={['All members', 'Me']}/>
                <Drop by="By deadline" options={['This week', 'Next week', 'Next month']}/>
            </Drops>
            <TodoList/>
        </Container>
    )
}

export default TodoPage