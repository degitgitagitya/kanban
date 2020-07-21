import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import ReactModal from "react-modal";

import Container from "../Components/Container";
import Card from "../Components/Card";

import { initialData } from "../Data/initialData.js";
import MEMBERS from "../Data/Member";

import uuid from "uuid/v4";

const TAGS = [
  {
    id: 1,
    name: "Research",
  },
  {
    id: 2,
    name: "Backend",
  },
  {
    id: 3,
    name: "Design",
  },
];
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 25px;
`;

const Home = () => {
  const [state, setState] = useState(initialData);
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("Jane");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tags, setTags] = useState("Research");
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");

  const handleAddButton = () => {
    let x = state;
    const temp = uuid();

    if (category === "Backlog") {
      x.cards["card-1"].taskIds.push(temp);
    } else if (category === "To Do") {
      x.cards["card-2"].taskIds.push(temp);
    } else {
      x.cards["card-3"].taskIds.push(temp);
    }

    x.tasks[temp] = {
      id: temp,
      title: title,
      assignee: assignee,
      startDate: startDate,
      endDate: endDate,
      tags: tags,
    };

    setState(x);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onDragEnd = (result) => {
    const { draggableId, source, destination, type } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    if (type === "card") {
      const newCardOrder = Array.from(state.cardOrder);
      newCardOrder.splice(source.index, 1);
      newCardOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        cardOrder: newCardOrder,
      };
      setState(newState);
      return;
    }

    if (type === "task") {
      const start = state.cards[source.droppableId];
      const finish = state.cards[destination.droppableId];

      if (start === finish) {
        const card = state.cards[source.droppableId];
        const newTaskIds = Array.from(card.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newCard = {
          ...card,
          taskIds: newTaskIds,
        };
        const newState = {
          ...state,
          cards: {
            ...state.cards,
            [newCard.id]: newCard,
          },
        };
        setState(newState);
        return;
      }

      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...state,
        cards: {
          ...state.cards,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      setState(newState);
      return;
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <ReactModal
        isOpen={showModal}
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <h5>New Task</h5>
        <hr />
        <div className="mb-3">
          <div>Title</div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <div>Tags</div>
          <select
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            className="form-control"
          >
            {TAGS.map((tag) => {
              return (
                <option value={tag.name} key={tag.id}>
                  {tag.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-3">
          <div>Assignee</div>
          <select
            onChange={(e) => setAssignee(e.target.value)}
            value={assignee}
            className="form-control"
          >
            {MEMBERS.map((member) => {
              return (
                <option key={member.id} value={member.name}>
                  {member.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-3">
          <div>Start Date</div>
          <input
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            placeholder="Start Date"
            className="form-control"
            type="date"
          />
        </div>

        <div className="mb-3">
          <div>End Date</div>
          <input
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            placeholder="End Date"
            className="form-control"
            type="date"
          />
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="custom-modal-button-add shadow-sm"
            onClick={handleAddButton}
          >
            Add
          </button>

          <button
            className="custom-modal-button-cancel shadow-sm"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </ReactModal>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-cards" direction="horizontal" type="card">
          {(provided) => (
            <CardContainer ref={provided.innerRef} {...provided.droppableProps}>
              {state.cardOrder.map((cardId, index) => {
                const card = state.cards[cardId];
                const tasks = card.taskIds.map((taskId) => state.tasks[taskId]);
                return (
                  <Card
                    changeCategory={(title) => {
                      setCategory(title);
                      openModal();
                    }}
                    key={cardId}
                    card={card}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </CardContainer>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Home;
