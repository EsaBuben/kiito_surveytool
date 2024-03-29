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
	data = c[0];
	brancher("etusivu");
}


function FetchJSON() {
	if (data == null)
	{
		const jsonpath :string = "test_header.json";
		data={}
		fetch(jsonpath,
			{ method : "GET", mode : "cors", credentials : "include" }).
			then( r => r.json()
			).then(
				 pathjson => {
					 	let jsonPromises = pathjson.jsonfiles.map((file:any) =>{
							return fetch(file.file,
								{ method : "GET", mode : "cors", credentials : "include" }).then(
								r => r.json()
							);
						})
						return Promise.all(jsonPromises)
				 }
			).then(testArray => configureApp(testArray)).catch(e => showError(e))
	}
	return (<Spinner state="init"/>);
}

// fetch(API_URL_DIARY)
//     .then(response => response.json())
//     .then(data => {
//         console.log("old", data);
//         return data;
//     })
//     .then(async data => {
//         await Promise.all(data.map((e, index, array) => {
//             return fetch(API_URL_FOOD_DETAILS + e.foodid)
//                 .then(response => response.json())
//                 .then(data => {
//                     array[index] = {...e, ...data};
//                     console.log("update");
//                 })
//         }));
//
//         console.log("new", data)
//     });


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
