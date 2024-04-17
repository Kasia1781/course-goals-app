import CourseGoal from './components/CourseGoal';
import Header from './components/Header';

import goalsImage from './assets/goals.jpg';

export default function App() {
	return (
		<main>
			<Header image={{ src: goalsImage, alt: 'A list of goals' }}>
				<h1>Your Course Goal</h1>
			</Header>
			<CourseGoal title='Learn React + TS'>
				<p>Learn in from the ground up</p>
			</CourseGoal>
		</main>
	);
}
