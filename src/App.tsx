import CourseGoal from './components/CourseGoal';
import Header from './components/Header';

import goalsImage from './assets/goals.jpg';
import { useState } from 'react';

export default function App() {
	type CourseGoal = {
		id: number;
		title: string;
		description: string;
	};

	const [goals, setGoals] = useState<CourseGoal>([]);

	function handleAddGoal() {
		setGoals((prevGoal) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: 'Learn React + TS',
				description: 'Learn it in depth',
			};
			return [...prevGoal, newGoal];
		});
	}

	return (
		<main>
			<Header image={{ src: goalsImage, alt: 'A list of goals' }}>
				<h1>Your Course Goal</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal title={goal.title}>{goal.description}</CourseGoal>
					</li>
				))}
			</ul>
		</main>
	);
}
