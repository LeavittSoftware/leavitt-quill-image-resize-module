export default {
	modules: [
		'DisplaySize',
		'Resize',
	],
	overlayStyles: {
		position: 'absolute',
		boxSizing: 'border-box',
		border: '1px dashed #757575',
	},
	handleStyles: {
		position: 'absolute',
		height: '12px',
		width: '12px',
		backgroundColor: 'white',
		border: '1px solid #9EA7B5',
		boxSizing: 'border-box',
		opacity: '0.80',
	},
	displayStyles: {
		position: 'absolute',
		font: '12px/1.0 Arial, Helvetica, sans-serif',
		padding: '4px 8px',
		textAlign: 'center',
		backgroundColor: 'white',
		color: '#333',
		border: '1px solid #9EA7B5',
		boxSizing: 'border-box',
		opacity: '0.80',
		cursor: 'default',
	}
};
