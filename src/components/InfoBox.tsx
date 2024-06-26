import { type ReactNode } from 'react';

type InfoBoxProps = {
	mode: 'hint' | 'warning';
    severity?: 'low' | 'medium' | 'high'
	children: ReactNode;
};

export default function InfoBox({ mode, children, severity }: InfoBoxProps) {
	if (mode === 'hint') {
		return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		);
	}

	return (
		<aside className={`infobox infobox-warning--${severity}`}>
			<h1>Warning!</h1>
			<p>{children}</p>
		</aside>
	);
}
