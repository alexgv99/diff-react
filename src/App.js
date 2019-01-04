import React from 'react';
import './App.css';

import DiffSideBySide from './ReactDiffSideBySide';
import DiffInLine from './ReactDiffInLine';

import { lhs, rhs } from './examples';

const App = () => (
	<>
		<h1> RENDER SIDE BY SIDE </h1>
		<DiffSideBySide lhs={lhs} rhs={rhs} type="json" />
		<h1> RENDER IN LINE </h1>
		<DiffInLine lhs={lhs} rhs={rhs} type="json" />
	</>
);

export default App;
