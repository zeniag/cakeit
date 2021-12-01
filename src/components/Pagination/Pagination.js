import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./Pagination.styles"

const Pagination = ({ catUri, page, totalPages }) => {
  return (
    <>
      <h2>
        Navigation - Page {page} / {totalPages}
      </h2>
      <Wrapper isFirst={page === 1}>
        {page > 1 && (
          <Link to={`${catUri}${page === 2 ? "" : page - 1}`} className="back">
            Previous
          </Link>
        )}
        {page < totalPages && (
          <Link to={`${catUri}${page + 1}`} className="forward">
            Next
          </Link>
        )}
      </Wrapper>
    </>
  )
}

export default Pagination
