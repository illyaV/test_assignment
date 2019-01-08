import React from 'react'

const DummyList = props =>
	<div className={'tab-description'}>
		id: {props.listData.id}
		<br/>
		title: {props.listData.title}
		<br/>
		order: {props.listData.order}
		<br/>
		path: {props.listData.path}
	</div>
;

export default DummyList
