import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>Typography</h1>
      <p><strong>&lt;p&gt; &lt;ul&gt; &lt;li&gt;</strong></p>
      <p>
      THE QUICK BROWN FOX<br/>
      JUMPED OVER THE LAZY DOG</p>
      <p>The <strong>quick</strong> brow fox</p>
      <p>jumped <em>over</em> the lay dog.</p>
      <h1 className="mt-2">
        &lt;h1&gt;<br/>
        THE QUICK BROWN FOX<br/>
        Jumped Over the lazy dog<br/>
      </h1>
      <h2 className="mt-2">
        &lt;h2&gt;<br/>
        THE QUICK BROWN FOX<br/>
        Jumped Over the lazy dog<br/>
      </h2>
      <h3 className="mt-2">
        &lt;h3&gt;<br/>
        THE QUICK BROWN FOX<br/>
        Jumped Over the lazy dog<br/>
      </h3>
      <h4 className="mt-2">
        &lt;h4&gt;<br/>
        THE QUICK BROWN FOX<br/>
        Jumped Over the lazy dog<br/>
      </h4>
    </div>
  </Layout>
)

export default IndexPage
