import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/Seo"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title="contact" description="" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get In Touch?</h3>
            <p>
              My name is Miguel Parra, I am a Front end web developer who likes
              Reactjs, Nextjs and Gatsbyjs. This is a Gatsby site that uses some
              graphql queries and the new gatsby image plugin. It also gets the
              content from a Headless CMS called Contentful.
            </p>
            <p>
              I just wanted to start with a few recipes to learn a bit about
              cooking and to surprise my family. Let me know what you think
              miguel.developer.angel@gmail.com
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/xeqvlvaz"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
