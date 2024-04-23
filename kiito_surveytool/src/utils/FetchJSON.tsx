import { CircularProgress } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'
import { Frontpage } from '../components';

let data : any; // new sivut taulukko
let localData: any; //etusivun otsikot
let setup_array:any[];
let brancher : Dispatch<SetStateAction<any>>;

function showError(e : any)
{
	brancher("error");
	console.log(e);
}

function configureApp(datalist : any, localdata:any)
{
	//first 2 list positions for localization data, tasot
	//const datalistdepth:number = 4
	setup_array = []
	// value state management
	datalist.map((o:any) =>{
		setup_array.push(o.kategoriat.flatMap((o:any)=>{
						return o.tasot.map((o:any)=>{
								return o.kysymykset.map(() =>{
									return 0
								})
							})
				}))
		})

	//console.log(localdata)
	data = datalist;
	localData = localdata
	brancher("etusivu");
}


function FetchJSON() {
	if (data == null)
	{
		const config :string = "sisallys.json";
		let localdata:any={}
		fetch(config,
			{ method : "GET", mode : "cors", credentials : "include" }).
			then( r => r.json()
			).then(
				 config => {
					 localdata = config
					 	let jsonPromises =  config.kyselyt.map((path:any) => fetch(path,
								{ method : "GET", mode : "cors", credentials : "include" }).then(
								r => r.json()
							)
						)
						return Promise.all(jsonPromises)
				 }
			).then(data => configureApp(data, localdata)).catch(e => showError(e))
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
		case "etusivu": ret = <Frontpage data={data} localData={localData} setupArr={setup_array}/>; break;
		default: ret = <div key="err">Error loading the page</div>;
	}
	return ret;
}


export default FetchJSON
