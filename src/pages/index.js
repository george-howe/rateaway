import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql, useStaticQuery } from "gatsby";
import RatingContainer from "../components/RatingContainer/RatingContainer";
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
            overallRating
          }
        }
      }
    }
  `)

  const ratings = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <RatingDropdown ratings={ratings} />
      <RatingContainer ratings={ratings} />
    </Layout>
  )
}

export default Home;

// export const Head = () => <title>Home Page</title>;
