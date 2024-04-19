import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
	goals: {
		id: number;
		title: string;
		description: string;
	};
	onDeleteGoal: () => void;
};

export default function CourseGoalList({
	goals,
	onDeleteGoal,
}: CourseGoalListProps) {
	return (
		<ul>
			{goals.map((goal) => (
				<li key={goal.id}>
					<CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
						{goal.description}
					</CourseGoal>
				</li>
			))}
		</ul>
	);
}
