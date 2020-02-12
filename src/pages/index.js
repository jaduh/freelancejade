import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import BlogCards from "../components/BlogCards"
import FeaturedBlog from "../components/FeaturedBlog"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <SEO title="Jade Yorks" />
<header>

<div className = "een ">


</div>
<div className = "twee">




<h1 className= "aangenaam"><span className="enter wit jade"> Ik help bedrijven als de jouwe
  </span> <span className="enter wit jade">impact maken met verhalen</span> </h1>
  <Link to="/sales"><button>Vertel me meer</button></Link>



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
