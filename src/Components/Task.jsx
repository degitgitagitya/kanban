import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const TaskList = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #f7f6f3;
  cursor: pointer;
  padding: 1rem;
`;

const TaskListText = styled.div`
  color: #fffff;
  font-weight: 500;
`;

const TaskLabelContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-center;
`;

const InitialName = styled.div`
  background-color: #def9f3;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  color: teal;
  text-align: center;
`;

const Tags = styled.div`
  margin-left: 0.3rem;
  border-radius: 1rem;
  padding: 0rem 0.5rem;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
`;

const DayCount = styled.div`
  color: #a9a9a9;
  font-weight: 500;
`;

function Task({ task, index }) {
  const date1 = new Date(task.endDate);
  const date2 = new Date();
  const diff = date1.getDate() - date2.getDate();
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskList
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskListText>{task.title}</TaskListText>
          <TaskLabelContainer>
            <div className="d-flex">
              <InitialName>{task.assignee.slice(0, 1)}</InitialName>
              <Tags
                bg={
                  task.tags === "Research"
                    ? "#fff3d2"
                    : task.tags === "Backend"
                    ? "#ffe5f0"
                    : "#e3efff"
                }
                color={
                  task.tags === "Research"
                    ? "#efbe21"
                    : task.tags === "Backend"
                    ? "#f14ca3"
                    : "#247bd2"
                }
              >
                {task.tags}
              </Tags>
            </div>
            <DayCount>{diff} days</DayCount>
          </TaskLabelContainer>
        </TaskList>
      )}
    </Draggable>
  );
}

export default Task;
