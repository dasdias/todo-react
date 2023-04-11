import { useState } from "react";

type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
}

export function TodoList(props: PropsType) {


	const [taskName, setTaskName] = useState('')

	function getTaskName(value: string) {
		setTaskName(value);
	}

	return (
		<div>
			<h2>{props.title}</h2>
			<input type="text" value={taskName} onChange={(e) => { getTaskName(e.target.value) }} />
			<button>+</button>
			<ul>
				{
					props.tasks.map((task) => {
						return (
							<li>{task.title}
								<button>Delete</button>
							</li>
						)
					})
				}

				<li>List 2</li>
			</ul>
			<button>All</button>
			<button>Active</button>
			<button>Complite</button>
		</div>
	);
}