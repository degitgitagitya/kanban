import React from "react";
import Task from "./Task";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

const CardContainer = styled.div`
  width: 32%;
  border-radius: 10px;
  background-color: white;
  padding: 15px;
  border: 1px solid lightgray;
`;

const CardTitle = styled.div`
  font-family: sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
`;

const TaskContainer = styled.div`
  min-height: 400px;
  width: 100%;
`;

function Card({ changeCategory, card, tasks, index }) {
  const addTask = (title) => {
    changeCategory(title);
  };

  return (
    <React.Fragment>
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <Droppable droppableId={card.id} type="task">
            {(provided2, snapshot) => (
              <CardContainer
                className="shadow-sm"
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.draggableProps}
              >
                <div className="d-flex justify-content-between mb-4">
                  <CardTitle>{card.title}</CardTitle>
                  <button
                    onClick={() => {
                      addTask(card.title);
                    }}
                    className="custom-button-add"
                  >
                    <i className="fas fa-plus mr-2"></i>
                    Add Task
                  </button>
                </div>
                <TaskContainer
                  ref={provided2.innerRef}
                  {...provided2.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided2.placeholder}
                </TaskContainer>
              </CardContainer>
            )}
          </Droppable>
        )}
      </Draggable>
    </React.Fragment>
  );
}

export default Card;
