import { FormEvent } from 'react';

export default function NewGoal() {
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
	}
    
	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor='goal'>Your goal</label>
				<input id='goal' type='text' />
			</p>
			<p>
				<label htmlFor='summary'>short summary</label>
				<input id='summary' type='text' />
				<p>
					<button>Add Goal</button>
				</p>
			</p>
		</form>
	);
}
