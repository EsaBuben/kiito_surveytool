import { CircularProgress } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'
import { Etusivu } from '../components';

let data : any;
let setup_array:any[];
let brancher : Dispatch<SetStateAction<any>>;

function showError(e : any)
{
	brancher("error");
	console.log(e);
}

function configureApp(datalist : any)
{
	//first 2 list positions for localization data, tasot
	//const datalistdepth:number = 4
	setup_array = []
	// value state management
	datalist.map((o:any) =>{
		setup_array = o.sivut.map( (o:any)=>{
					return o.kategoriat.flatMap((o:any)=>{
						return o.tasot.map((o:any)=>{
								return o.kysymykset.map(() =>{
									return 0
								})
							})
				})
		})
	})
	data = datalist[0];
	brancher("etusivu");
}


function FetchJSON() {
	if (data == null)
	{
		const jsonpath :string = "test_header.json";
		//data={}
		fetch(jsonpath,
			{ method : "GET", mode : "cors", credentials : "include" }).
			then( r => r.json()
			).then(
				 pathjson => {
					 	let jsonPromises = pathjson.jsonfiles.map((file:any) => fetch(file.file,
								{ method : "GET", mode : "cors", credentials : "include" }).then(
								r => r.json()
							)
						)
						return Promise.all(jsonPromises)
				 }
			).then(data => configureApp(data)).catch(e => showError(e))
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
		case "etusivu": ret = <Etusivu data={data} setupArr={setup_array}/>; break;
		default: ret = <div key="err">Ei saatu konffista ny... kato konsolia...</div>;
	}
	return ret;
}


export default FetchJSON
