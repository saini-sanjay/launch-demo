import React from 'react';

const Display = ({contact,ondelete})=>{
//	const{}=props;
	return(
		<div>
		<p>Name              phone</p>
		{ contact.map((value,index) =>{
		  return(
		  	<div className="sanjay">
		  {`${index+1}.${value.name}         ${value.phone}  `}<input  className="input"type="button" value="Delete" onClick={()=>{console.log("sanjay");ondelete(index)}}/>
		  </div>
		  );
		})
	     }
		</div>
		);
}
export default Display;