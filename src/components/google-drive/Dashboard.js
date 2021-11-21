import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import Folder from "./Folder"
import File from "./File"
// import Files from "./Files"
import { faColumns, faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  return (
    <>
    <Container fluid className="row d-flex" style={{height: '100vh'}}>
      <Col sm={2} className="h-100" style={{borderRight: '1px solid grey'}}>
        <Sidebar />
      </Col>
      <Col sm={10} className="p-0" style={{ flex: '1' }}>
        <Navbar />
        <Container fluid className="p-0 mb-2">
          <div className="d-flex align-items-center px-2 py-1" style={{ borderBottom: "1px solid grey" }}>
            <FolderBreadcrumbs currentFolder={folder} />
            {/* <div>
              <FontAwesomeIcon icon={faColumns} size="lg" className="ml-2"/>
              <FontAwesomeIcon icon={faList} size="lg" className="ml-2"/>
            </div> */}
            <hr />
            {/* <AddFileButton currentFolder={folder} />
            <AddFolderButton currentFolder={folder} /> */}
          </div>
        </Container>
        <Container fluid>
          Folders
          {childFolders.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFolders.map(childFolder => (
                <div
                  key={childFolder.id}
                  style={{ maxWidth: "250px" }}
                  className="p-2"
                >
                  <Folder folder={childFolder} />
                </div>
              ))}
            </div>
          )}
          
          {
          /* {childFolders.length > 0 && childFiles.length > 0 }
          Files
          {childFiles.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFiles.map(childFile => (
                <div
                  key={childFile.id}
                  style={{ maxWidth: "200px" }}
                  className="p-2"
                >
                  {<File file={childFile} /> }
                  <Files file={childFile} />
                </div>
              ))}
            </div>
          )} */
          }
          {childFolders.length > 0 && childFiles.length > 0 }
          Files
          {childFiles.length > 0 && (
            <div className="d-flex flex-wrap p-2">
              {childFiles.map(childFile => (
                <div
                  key={childFile.id}
                  style={{ width: "230px", height: "230px", border: "1px solid grey", borderRadius: "10px", overflow: "hidden" }}
                  className="p-0 m-2"
                >
                  {/* <File file={childFile} /> */}
                  <File file={childFile}/>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Col>
      </Container>
    </>
  )
}
