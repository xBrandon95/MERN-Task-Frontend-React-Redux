import TaskItem from './TaskItem';

const ListTasks = () => {
  const taskProject = [
    { id: 1, name: 'Elegir Plataforma', state: true },
    { id: 2, name: 'Elegir Colores', state: false },
    { id: 3, name: 'Elegir Desarrollo', state: true },
  ];

  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>

      <ul className="list-tasks">
        {taskProject.length === 0 ? (
          <li className="task">No hay tareas</li>
        ) : (
          taskProject.map(task => <TaskItem key={task.id} task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-delete">
        &times; Eliminar Proyecto
      </button>
    </>
  );
};

export default ListTasks;
