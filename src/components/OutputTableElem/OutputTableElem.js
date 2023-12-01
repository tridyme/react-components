import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow  from '@material-ui/core/TableRow';
import TableContainer  from '@material-ui/core/TableContainer';
const mockData = {
	x: { text: 'x', unit: { text: 'm' }, value: [0,1,2] },
	y: { text: 'y', unit: { text: 'm' }, value: [0,1,2] },
	DepZ: { text: 'DepZ', unit: { text: 'mm' }, value: [10,10,10] },
};

const OutputTableElem = ({
	data,
	title, 
}) => {

const headers = Object.keys( data);
const values = Object.values( data);

const maxLength = Math.max(...Object.values(data).map((item) => item.value.length));

return (
	<div>
		<p style={{ fontSize: 18, textAlign:'center', fontWeight:'bold', marginTop:'2rem'}}> {title}</p>
		{/* <div  style={{ maxHeight: '300px', overflow: 'auto' , width:'100%'}} > */}
		<Table style={{width: '100%', textAlign:'center'}}>
			<TableHead>
				<TableRow>
						{headers.map((header,index)=>	
							<TableCell  style={{ textAlign: 'center', borderBottom:'none', fontWeight:'bold'}} > {values[index].text}
							</TableCell>
						)}
				</TableRow>
				<TableRow>
						{headers.map((header,index)=>	
							<TableCell  style={{ textAlign: 'center', borderTop:'none', padding: '1px',  fontWeight:'bold'}} > {`${values[index].unit.text}`}
							</TableCell>
						)}
				</TableRow>
			</TableHead>
			<TableBody>
			{[...Array(maxLength)].map((_, rowIndex) => (
				<TableRow key={rowIndex} >
					{headers.map((header, colIndex) => (
						<TableCell key={colIndex} style={{ textAlign: 'center'}} >{data[header].value[rowIndex]}</TableCell>
					))}
				</TableRow>
			))}
			</TableBody>
		</Table>
		{/* </div> */}
	</div>
	);
}

export default OutputTableElem ;