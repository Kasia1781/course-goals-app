import Header from './components/Header';

import goalsImage from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

export default function App() {
	type CourseGoalProps = {
		id: number;
		title: string;
		description: string;
	};

	const [goals, setGoals] = useState<CourseGoalProps>([]);

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

	function handleDeleteGoal(id: number) {
		setGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
	}

	return (
		<main>
			<Header image={{ src: goalsImage, alt: 'A list of goals' }}>
				<h1>Your Course Goal</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals} />
		</main>
	);
}
