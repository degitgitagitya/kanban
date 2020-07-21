export const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Do something",
      assignee: "Jane",
      startDate: "2020-07-21",
      endDate: "2020-07-27",
      tags: "Research",
    },
    "task-2": {
      id: "task-2",
      title: "Do a and b",
      assignee: "Steven",
      startDate: "2020-07-21",
      endDate: "2020-07-25",
      tags: "Design",
    },
    "task-3": {
      id: "task-3",
      title: "Create something",
      assignee: "July",
      startDate: "2020-07-21",
      endDate: "2020-07-23",
      tags: "Backend",
    },
    "task-4": {
      id: "task-4",
      title: "Fix something",
      assignee: "Kelvin",
      startDate: "2020-07-21",
      endDate: "2020-07-24",
      tags: "Research",
    },
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "Backlog",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
      color: "#FFBA08",
    },
    "card-2": {
      id: "card-2",
      title: "To Do",
      taskIds: [],
      color: "#17C9FF",
    },
    "card-3": {
      id: "card-3",
      title: "Done",
      taskIds: [],
      color: "#14E668",
    },
  },
  cardOrder: ["card-1", "card-2", "card-3"],
};
