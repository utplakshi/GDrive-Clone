import React from 'react'
import { Container } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import { useParams, useLocation } from "react-router-dom"

export default function Sidebar() {
    const { folderId } = useParams()
    const { state = {} } = useLocation()
    const { folder } = useFolder(folderId, state.folder)

    return (
        <Container className="p-3">
            <h3>Cloud Drive</h3>
            <AddFolderButton currentFolder={folder} />
            <AddFileButton currentFolder={folder} />
            
        </Container>
    )
}
