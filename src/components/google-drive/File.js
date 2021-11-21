import React from "react"
import Icon from "./Icon";
// import { Row } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { database } from "../../firebase"

export default function File({ file }) {
    const { currentUser } = useAuth()
  return (
    
    // <a
    // //   href={file.url}
    //   href={decryptURL(file.enc_url, currentUser.uid)}
    //   target="_blank"
    //   className="btn btn-outline-dark text-truncate"
    //   id={file.id} //added this for ID
    //   rel="noreferrer noopener"
    // >
    //   <div style={{height: '100px', borderBottom: '1px solid grey'}}>A</div>
    //   <Row className="px-3" style={{alignItems: 'center' }}>
    //     <FontAwesomeIcon icon={faFilePdf} size="lg" className="mr-2" style={{color: 'blue'}} />
    //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    //       <span className='text-truncate'>{file.name}</span>
    //       {/* <span>{date(file.uploadedOn)}</span> */}
    //       { console.log(file) }
    //     </div>
    //   </Row>
      
    // </a>

    <div onClick={() => openFile(file.enc_url, currentUser.uid)} class="d-flex flex-column h-100">
      <div style={{ flex: "0.8", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }}>
        <span className="h1">{ file.ext }</span>
      </div>
      <div className="px-3 py-1 " style={{ flex: "0.2", borderRadius: "0  0 10px 10px", borderTop: "1px solid grey", display: "flex", alignItems: "center" }}>
        <Icon file = {file} />
        <span className='text-truncate' style={{ flex: "1" }}>{file.name}</span>
        {/* <span>{ retFileType(file) }</span> */}
        <span onClick={() => delFile(file.id)} file-id={file.id} >
          <FontAwesomeIcon icon={faTrash} size="md" className="ml-2" style={{ color: "#ff6666" }} />
        </span>
      </div>
    </div>
  )
}

// function date(time) {
//   var date = new Date(time);
//   var D = "Uploaded On: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
//   return D;
// }

function decryptURL(url, id) {
    var CryptoJS = require("crypto-js");

    // Decrypt
    let txt = url;
    let originalText = '';
    for(var i=0; i<20; i++) {
      let bytes = CryptoJS.AES.decrypt(txt, id);
      let originalText = bytes.toString(CryptoJS.enc.Utf8);
      txt = originalText;
    }
    originalText = txt;
    return originalText;
}

function delFile(id) {
  let click = window.confirm("Are you sure. You want to delete this item from your drive?");
  if(click) {
      database.files.doc(id).delete();
  }
}

function openFile(enc_url, id) {
  let addr = decryptURL(enc_url, id);
  window.open(addr, "_blank");
}























// import { faFile } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import React from "react"
// import { Row } from "react-bootstrap"

// export default function File({ file }) {
//   return (
//     <a
//       href={file.url}
//       target="_blank"
//       className="btn btn-outline-dark text-truncate w-100"
//       id={file.id} //added this for ID
//       rel="noreferrer noopener"
//     >
//       <Row className="px-3">
//         <FontAwesomeIcon icon={faFile} size="lg" className="mr-2" />
//         <div>
//           {file.name}
//         </div>
//       </Row>
      
//     </a>
//   )
// }


// // //Has a problem during file uploding
// // function date(seconds) {
// //   var unixTimestamp = seconds
// //   var date = new Date(unixTimestamp*1000);
// //   // console.log("Unix Timestamp:",unixTimestamp)
// //   // console.log("Date Timestamp:",date.getTime())
// //   // console.log(date);
// //   var D = "Uploaded On: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
// //   // console.log("Date: "+date.getDate()+
// //   //           "/"+(date.getMonth()+1)+
// //   //           "/"+date.getFullYear()+
// //   //           " "+date.getHours()+
// //   //           ":"+date.getMinutes()+
// //   //           ":"+date.getSeconds());
// //   return D;
// // }