import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import BlogCards from "../components/BlogCards"
import FeaturedBlog from "../components/FeaturedBlog"
import Pijltje from "../Icons/downward.png"

import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <SEO title="Jade Yorks" />
<header>

<div className = "een ">


</div>
<div className = "twee">




<h1 className= "aangenaam"><span className="enter wit jade"> Hi, ik ben Jade.
  </span>
  <a href="https://expert-experimenter-9255.ck.page/4769f9e9f1
"><span className="enter wit">Schrijf je in voor mijn nieuwsbrief</span></a>
   <span className="enter pink"> en volg mijn avonturen voor meer impact met verhalen</span>
</h1>






</div>

</header>
      <BlogCards data={data.blog}/>
    </Layout>
  );
}

export default IndexPage;


export const query = graphql`
{
  blog: allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: { fileAbsolutePath: { regex: "/blogs/"}}
    ) {
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          title
          date
          read
          topic
          image {
            childImageSharp{
                sizes(maxWidth: 630) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
        }
        excerpt(pruneLength: 200)
      }
    }
  }
}
`
