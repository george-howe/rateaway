import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql, useStaticQuery } from "gatsby";
import RatingBox from "../components/RatingBox/RatingBox";
import RatingDropdown from '../components/RatingDropdown/RatingDropdown';
import './index.scss';

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

  const ratings = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      {/* {
        data.allMarkdownRemark.nodes.map(node => (
          <RatingBox node={node} />
        ))
      } */}
      <RatingDropdown ratings={ratings} />
      <RatingBox ratings={ratings} />
    </Layout>
  )
}

export default Home;

// export const Head = () => <title>Home Page</title>;
