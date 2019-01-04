import React from 'react';
import PropTypes from 'prop-types';
import { diffChars, diffWords, diffSentences, diffJson } from 'diff';

const fnMap = {
	chars: diffChars,
	words: diffWords,
	sentences: diffSentences,
	json: diffJson
};

class ReactDiff extends React.Component {
	render() {
		var diff = fnMap[this.props.type](this.props.lhs, this.props.rhs);
		var result = diff.map(function(part, index) {
			var spanStyle = {
				backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'transparent'
			};
			return (
				<span key={index} style={spanStyle}>
					{part.value}
				</span>
			);
		});
		return (
			<pre className="diff-result" style={{ backgroundColor: 'lightgray' }}>
				{result}
			</pre>
		);
	}
}

ReactDiff.propTypes = {
	lhs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	rhs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	type: PropTypes.oneOf(['chars', 'words', 'sentences', 'json'])
};

export default ReactDiff;
