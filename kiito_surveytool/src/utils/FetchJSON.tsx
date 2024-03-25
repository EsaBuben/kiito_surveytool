import { CircularProgress } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'
import { Etusivu } from '../components';

let data : any;
let brancher : Dispatch<SetStateAction<any>>;

function showError(e : any)
{
	brancher("error"); 
	console.log(e);
}

function configureApp(c : any)
{
	data = c;
	brancher("etusivu");
}


function FetchJSON() {
	if (data == null)
	{
		data = {};
		fetch("src/test.json", { method : "GET", mode : "cors", credentials : "include" }).
			then( r => r.json() ).then( j => configureApp(j) ).catch( e => showError(e));
	}
	return (<Spinner state="init"/>);
}




function Spinner( props : any )
{
	let [ branch, setBranch ] = React.useState(props.state);
	brancher = setBranch;
	let ret : JSX.Element;
	switch (branch)
	{
		case "init": ret = <CircularProgress key="spin" />; break;
		case "etusivu": ret = <Etusivu data={data}/>; break;
		default: ret = <div key="err">Ei saatu konffista ny... kato konsolia...</div>;
	}
	return ret;
}


export default FetchJSON