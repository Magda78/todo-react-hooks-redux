import React from 'react';
import './Warning.css';
import WarningIcon from '@material-ui/icons/Warning';

function Warning() {
	return (
		<div className="warning">
			<div className="warning__info">
				<WarningIcon />
				<p>Input field can't be empty</p>
			</div>
		</div>
	);
}

export default Warning;
