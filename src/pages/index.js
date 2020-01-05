import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import BlogCards from "../components/BlogCards"
import FeaturedBlog from "../components/FeaturedBlog"

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <SEO title="Jade Yorks" />
<header>

<div className = "een ">


</div>
<div className = "twee">




<h1 className= "aangenaam"><span className="enter wit jade"> Hoi, ik ben Jade<span role="img" aria-label="wave emoji">
            🙋🏾 </span>
</span> <span className="enter wit">Copywriter, storyteller en ik help bedrijven </span> <span className="enter wit"> als de jouwe impact maken  met verhalen</span></h1>


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
