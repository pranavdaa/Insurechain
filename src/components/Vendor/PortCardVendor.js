import React from 'react';

const PortCardVendor = props => {

  return (
    <tr>
      <td data-label="policyID" style={{textAlign:"center"}}>{props.portCard[0]}</td>
      <td data-label="newvendor" style={{textAlign:"center"}}>{props.vendorMapping[props.portCard[3]]}</td>
      <td data-label="oldvendor" style={{textAlign:"center"}}>{props.vendorMapping[props.portCard[2]]}</td>
      {/* <td data-label="details" style={{textAlign:"center"}}>{props.portCard[1]}</td> */}
      <td data-label="details" style={{textAlign:"center"}}>
        <a href={`https://${props.portCard[1]}.ipfs.infura-ipfs.io`}>View Details</a>
      </td>



      <td data-label="policyType" style={{textAlign:"center"}}>{props.portCard[4]}</td>
      {props.handleStatusComment(
        props.portCard[2], 
        props.portCard[3], 
        props.portCard[6])
      }
      { 
        props.handlePortButtons(
          props.portCard[2], 
          props.portCard[3], 
          props.portCard[0],
          props.portCard[6], 
          props.portCard[1], 
          props.portCard[4])
      }
    </tr>
  )
};

export default PortCardVendor;