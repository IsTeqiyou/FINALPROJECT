import { useState, useEffect } from "react";

// Custom Hook
function useTaskStatus(key) {
  const [Task, setTask] = useState(key);

  useEffect(() => {
    function handleTaskCompleted() {
      setTask(true);
    }
    function handleTaskNotCompleted() {
      setTask(false);
    }
    window.addEventListener("completed", handleTaskCompleted);
    window.addEventListener("notcompleted", handleTaskNotCompleted);

    return () => {
      window.removeEventListener("completed", handleTaskCompleted);
      window.removeEventListener("notcompleted", handleTaskNotCompleted);
    };
  }, []);

  return Task;
}

export function CekTask() {
  const isTaskCompleted = useTaskStatus(true);

  function toggleTaskStatus() {
    const newStatus = !isTaskCompleted;
    window.dispatchEvent(
      new CustomEvent(newStatus ? "completed" : "notcompleted")
    );
  }

  return (
    <div>
      <h1>Tugas Sekarang {isTaskCompleted ? "Selesai" : "Belum Selesai"}</h1>

      <button onClick={toggleTaskStatus}>
        {isTaskCompleted ? "Selesai" : "Belum Selesai"}
      </button>
    </div>
  );
}