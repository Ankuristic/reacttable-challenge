


import { useEffect, useState } from "react";
import  './App.css'
export default function App() {
 const [ data, setData ] = useState([]);
 const[detailsShown,setDetailShown]=useState([])


const toggleShown = username => {
  const shownState = detailsShown.slice();
  const index = shownState.indexOf(username);
  if (index >= 0) {
    shownState.splice(index, 1);
    setDetailShown(shownState);
  } else {
    shownState.push(username);
    setDetailShown(shownState);
  }
};
 useEffect(() => {
   const fetchata = async () => {
 
       const response = await fetch(
         "https://jsonplaceholder.typicode.com/users");
          const data = await response.json();

          setData( data )
      
   }
 
   // Call the function
   fetchata();
}, []);
 
return (
   <div className="App">
     <h1>List of user</h1>
     <table className="table">
       <thead>
         <tr>
           <th>NAME</th>
           <th>EMAIL</th>
           <th>PHONE</th>
         </tr>   
       </thead> 
        
       <tbody>
         {
         data.map( (data,key) =>
         <>
         <tr key={key}>
             <td className='table-data'>{data.name }</td>
             <td className='table-data'>{data.email }</td>
             <td className='table-data'>{data.phone}
             </td>
             <td> 
              <button  className='button'onClick={()=> toggleShown(data.name)}> view details 
              </button>
              </td>
             {/* <td className="button"><button onClick={changeName}> view details</button> </td> */}
         </tr>,
         {detailsShown.includes(data.name) && (
          <tr key={"DETAIL:" + data.name} className="additional-info">
          {/* <thead>
            <th>COMPANY</th>
           <th>WESITE</th>
           <th>ADDRESS</th>
           <tr>
            </thead> */}
          <td colSpan="2"><div>{data.company.name}
            {data.company.bs} {data.company.website}</div>  
            </td>
          </tr>
        )}
        </>
         )
       }
       </tbody>
     </table>
   </div>
 );
}




