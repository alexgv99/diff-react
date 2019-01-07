import React from 'react';
import PropTypes from 'prop-types';
import { diffChars, diffWords, diffSentences, diffJson } from 'diff';
import { repeat } from 'lodash';

const fnMap = {
	chars: diffChars,
	words: diffWords,
	sentences: diffSentences,
	json: diffJson
};

class ReactDiff extends React.Component {
	render() {
		var diff = fnMap[this.props.type](this.props.lhs, this.props.rhs);

		var resultLeft = diff.map((part, index) => {
			var spanStyle = {
				backgroundColor: part.removed ? 'salmon' : 'transparent'
			};

			let linha = (
				<span key={index} style={spanStyle} className={`linha ${part.removed ? 'removed' : ''}`}>
					{part.value}
				</span>
			);

			if (part.added) {
				linha = repeat('\n', part.count);
				if (index > 0 && diff[index - 1].removed) {
					const sizeLeft = diff[index - 1].count;
					const sizeRight = part.count;
					if (sizeLeft < sizeRight) {
						linha = <span key={index}>{repeat('\n', Math.abs(sizeLeft - sizeRight))}</span>;
					} else {
						linha = <span key={index}>{''}</span>;
					}
				}
			}

			return linha;
		});

		var resultRight = diff.map((part, index) => {
			var spanStyle = {
				backgroundColor: part.added ? 'lightgreen' : 'transparent'
			};
			let linha = (
				<span key={index} style={spanStyle} className={`linha ${part.added ? 'added' : ''}`}>
					{part.value}
				</span>
			);

			if (part.removed) {
				linha = repeat('\n', part.count);
				if (index < diff.length && diff[index + 1].added) {
					const sizeLeft = part.count;
					const sizeRight = diff[index + 1].count;
					if (sizeLeft > sizeRight) {
						linha = <span key={index}>{repeat('\n', Math.abs(sizeLeft - sizeRight))}</span>;
					} else {
						linha = <span key={index}>{''}</span>;
					}
				}
			}

			return linha;
		});

		return (
			<div style={{ height: '80vh' }}>
				<table>
					<tr style={{ verticalAlign: 'top' }}>
						<td>
							<pre className="diff-result" style={{ backgroundColor: 'lightgray' }}>
								{resultLeft}
							</pre>
						</td>
						<td>
							<pre className="diff-result" style={{ backgroundColor: 'lightgray' }}>
								{resultRight}
							</pre>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}

ReactDiff.propTypes = {
	lhs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	rhs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	type: PropTypes.oneOf(['chars', 'words', 'sentences', 'json'])
};

export default ReactDiff;
