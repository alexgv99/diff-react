import React from 'react';
import PropTypes from 'prop-types';
import Minimap from 'react-minimap';
import 'react-minimap/dist/react-minimap.css';

import './App.css';
import DiffSideBySide from './ReactDiffSideBySide';
import DiffInLine from './ReactDiffInLine';

import { lhs, rhs } from './examples';

const classNames = ['added', 'removed'];

const renderChild = ({ width, height, left, top, node }) => {
	let classNameFound = null;

	node.classList.forEach(className => {
		const classnameaux = className.replace(/'/g, '');
		if (classNames.indexOf(classnameaux) > -1) {
			classNameFound = classnameaux;
			return false;
		}
	});

	const backgroundColor =
		classNameFound === 'added' ? 'lightgreen' : classNameFound === 'removed' ? 'salmon' : 'transparent';
	return (
		<div
			className={node.classList}
			style={{
				position: 'absolute',
				width,
				height,
				left,
				top,
				backgroundColor
			}}
		/>
	);
};
renderChild.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	left: PropTypes.number,
	top: PropTypes.number,
	node: PropTypes.any
};

const App = () => (
	<>
		<h1> RENDER SIDE BY SIDE </h1>
		<div id="tudo">
			<Minimap selector=".linha" height="700" childComponent={renderChild.bind(this)}>
				<DiffSideBySide lhs={lhs} rhs={rhs} type="json" />
			</Minimap>
		</div>
		<h1> RENDER IN LINE </h1>
		<DiffInLine lhs={lhs} rhs={rhs} type="json" />
	</>
);

export default App;
