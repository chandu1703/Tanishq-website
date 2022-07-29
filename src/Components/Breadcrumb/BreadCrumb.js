// import * as React from 'react';
 
// import {Breadcrumbs,Link} from '@mui/material';
 
// import './breadcrumb.css'
// import {withRouter} from 'react-router-dom';

//  function BasicBreadcrumbs(props) {
//  const{history,location:{pathname}}=props;
//  console.log(props)
//   const pathnames=pathname.split('/').filter(x=>x);
//   return (
//     <div role="presentation" className='breadcrumb'>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link className='link' onClick={()=>history.push('/')}>HOME</Link>
//         {pathnames.map((name,index)=>{
//           const routeTo=`/${pathname.slice(0,index+1).join*'/'}`
//           return(
//             <Link onClick={()=>history.push(routeTo)}>{name}</Link>
//           )
//         })}
         
//       </Breadcrumbs>
//     </div>
//   );
// }

// export default withRouter(BasicBreadcrumbs)

import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './breadcrumb.css'
const BreadCrumbApp=()=>{
 const location =useLocation();
 const breadCrumbView=()=>{
  const {pathname}=location;
  const pathnames=pathname.split("/").filter((item)=>item);
  return(
    <div className='breadcrumb'>
      <Breadcrumb>
           {pathnames.length>0?(
            <Breadcrumb.Item>
            <Link to='/' className='link'>HOME</Link>
            </Breadcrumb.Item>
           ):(
            
            <div> HOME/</div>
           
           )}
           <div className='breadflex'> 
           {pathnames.map((name,index)=>{
            const routeTo=`/${pathnames.slice(0,index+1).join('/')}`;
            const isLast=index=== pathnames.length-1;
            return isLast?(
              <Breadcrumb.Item>
              {name.toUpperCase()}
              </Breadcrumb.Item>
            ):(
              <Breadcrumb.Item>
              <Link to={`${routeTo}`}>{name.toUpperCase()}</Link>
              </Breadcrumb.Item>
            )
           })}
           </div>
      </Breadcrumb>
    </div>
  )
 }
 return <>{breadCrumbView()}</>
}

export default BreadCrumbApp