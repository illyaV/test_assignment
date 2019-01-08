import React from 'react'

const DummyChart = props =>
	<div className={'tab-description'}>
		id: {props.chartData.id}
		<br/>
		title: {props.chartData.title}
		<br/>
		order: {props.chartData.order}
		<br/>
		path: {props.chartData.path}
	</div>
;

export default DummyChart
