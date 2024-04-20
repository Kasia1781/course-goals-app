import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

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
	if (goals.length === 0) {
		return (
			<InfoBox mode='hint'>
				You haven't got any goals yet. Start adding some!
			</InfoBox>
		);
	}

	let warningBox: ReactNode;

	if (goals.length >= 4) {
		warningBox = (
			<InfoBox mode='warning' severity='high'>Masz zbyt wiele celów na liście</InfoBox>
		);
	}

	return (
		<>
			{warningBox}
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
							{goal.description}
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	);
}
