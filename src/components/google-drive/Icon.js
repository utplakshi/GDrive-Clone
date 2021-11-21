import React from 'react'
import { faFile, faFileAudio, faFileImage, faFilePdf, faFilePowerpoint, faFileVideo, faFileWord } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icon({ file }) {
    if(file.type.split("/")[0] === 'image') {
        return (
            <FontAwesomeIcon icon={faFileImage} size="md" className="mr-2"/>
        )
    } else if(file.type.split("/")[0] === 'audio') {
        return (
            <FontAwesomeIcon icon={faFileAudio} size="md" className="mr-2"/>
        )
    } else if(file.type.split("/")[0] === 'video') {
        return (
            <FontAwesomeIcon icon={faFileVideo} size="md" className="mr-2"/>
        )
    } else if(file.type.split("/")[0] === 'text') {
        return (
            <FontAwesomeIcon icon={faFile} size="md" className="mr-2"/>
        )
    } else if(file.type === 'application/pdf') {
        return (
            <FontAwesomeIcon icon={faFilePdf} size="md" className="mr-2"/>
        )
    }
    else if(file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        return (
            <FontAwesomeIcon icon={faFileWord} size="md" className="mr-2"/>
        )
    } else if(file.type === 'application/vnd.ms-powerpoint' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        return (
            <FontAwesomeIcon icon={faFilePowerpoint} size="md" className="mr-2"/>
        )
    }
     else { 
        return (
            <FontAwesomeIcon icon={faFile} size="md" className="mr-2"/>
        )
    }
}
