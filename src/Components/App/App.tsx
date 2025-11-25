import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import css from "./App.module.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  return (
    <div className={css.container}>
      <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
}

// import Product from "../Product/Product";

// <Product
//   name="Tacos With Lime"
//   imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//   price={10.99}
// />
// <Product
//   name="Fries and Burger"
//   imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//   price={14.29}
// />
