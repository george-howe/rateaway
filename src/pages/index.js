import * as React from "react";
import Layout from "../components/Layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
//import RatingBox from "../components/RatingBox/RatingBox";
import RatingDropdown from '../components/RatingDropdown/RatingDropdown';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            name
            takeaway
            notes
            rating
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {/* {
        data.allMarkdownRemark.nodes.map(node => (
          <RatingBox node={node} />
        ))
      } */}
      <RatingDropdown ratings={data.allMarkdownRemark.nodes}/>
    </Layout>
  )
}

export default Home;

// export const Head = () => <title>Home Page</title>;
