import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons"

export default function Folder({ folder }) {
  return (
    <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
      variant="outline-dark"
      className="text-truncate w-100 pl-3 pr-5 py-2"
      as={Link}
    >
      <FontAwesomeIcon icon={faFolder} className="mr-3" />
      <span>{folder.name}</span>
    </Button>
  )
}
