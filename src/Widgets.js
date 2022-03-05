import React from 'react';

import './Widgets.css';

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle('Tuto React LinkedIn', 'Top news - 9099 readers')}
			{newsArticle('Une news totalement lambda', 'Top news - 4000 readers')}
			{newsArticle('Odyssian Blaze', 'Top news - 19099 readers')}
		</div>
	);
}

export default Widgets;
