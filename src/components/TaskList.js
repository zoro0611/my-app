import Filter from "./Filter";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  min-width: 300px;
`;

const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  background-color: #f8f8f8;
`;
function TaskList() {
  return (
    <Wrapper>
      <Filter />
      <TaskItemContainer>
          <TaskItem id="1"/>
          <TaskItem id="2"/>
          <TaskItem id="3"/>
      </TaskItemContainer>
    </Wrapper>
  );
}

export default TaskList;