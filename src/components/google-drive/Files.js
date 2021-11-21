// import React from "react"
// import { faFile, faFilePdf } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { Row } from "react-bootstrap"
// import { useAuth } from "../../contexts/AuthContext"

// export default function File({ file }) {
//     const { currentUser } = useAuth()
//   return (
    
//     <a
//     //   href={file.url}
//       href={decryptURL(file.enc_url, currentUser.uid)}
//       target="_blank"
//       className="btn btn-outline-dark text-truncate w-100"
//       id={file.id} //added this for ID
//       rel="noreferrer noopener"
//     >
//       <div style={{height: '100px', borderBottom: '1px solid grey'}}>A</div>
//       <Row className="px-3" style={{alignItems: 'center' }}>
//         <FontAwesomeIcon icon={faFilePdf} size="lg" className="mr-2" style={{color: 'blue'}} />
//         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//           <span className='text-truncate'>{file.name}</span>
//           {/* <span>{date(file.uploadedOn)}</span> */}
//           { console.log(file) }
//         </div>
//       </Row>
      
//     </a>
//   )
// }

// function date(time) {
//   var date = new Date(time);
//   var D = "Uploaded On: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
//   return D;
// }

// function decryptURL(url, id) {
//     var CryptoJS = require("crypto-js");

//     // Decrypt
//     var bytes  = CryptoJS.AES.decrypt(url, id);
//     var originalText = bytes.toString(CryptoJS.enc.Utf8);
//     return originalText;
// }