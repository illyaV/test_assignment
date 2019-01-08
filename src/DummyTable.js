import React from 'react'

const DummyTable = props =>
	<div className={'tab-description'}>
		id: {props.tableData.id}
		<br/>
		title: {props.tableData.title}
		<br/>
		order: {props.tableData.order}
		<br/>
		path: {props.tableData.path}
	</div>
;

export default DummyTable
