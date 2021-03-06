import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

import Paper, { PaperContent } from "./paper"
import ContentGallery from "../components/content-gallery"

const PapersOverview = (props: { levelFilter: string[] }) => {
  const { levelFilter } = props
  const [offset, setOffset] = useState(0)
  const pageLimit = 4
  const allPapers = useStaticQuery<{
    allContentYaml: { nodes: { papers: PaperContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { papers: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          papers {
            authors
            title
            year
            link
            excerpt
            level
            tags
          }
        }
      }
    }
  `).allContentYaml.nodes[0].papers

  const filteredPapers = allPapers.filter((paper) =>
    levelFilter.includes(paper.level)
  )
  let filteredOffSet = offset
  if (filteredOffSet > filteredPapers.length) {
    filteredOffSet = Math.floor(filteredPapers.length / pageLimit) * pageLimit
  }

  const currentPapers = filteredPapers.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLength={filteredPapers.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Papers"
      allTo="/learning-ddd/papers"
    >
      {currentPapers.map((paper) => {
        return <Paper key={paper.title} paper={paper} />
      })}
    </ContentGallery>
  )
}

export default PapersOverview
