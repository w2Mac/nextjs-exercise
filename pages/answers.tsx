import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
      <Layout title="Answers">  
      <h4>How this happen?</h4>
      <p>The first challenge that I experienced was trying to build the site through Netlify as my build setting was incorrect. After adding "export" to build script to create the necessary "out/" directory and debugging the code, I was able to load the simple site that I have. Then I tried to implement slider into the site to make my answers presentable. Unfortunately, I still have much to lear on React in order to implement it successfully</p>
      <h4>How was Netlify?</h4>
      <p>Honestly, I didn't experienced any issue with the service as the build logs were detailed enough for me to troubelshoot and the deployment was fast and painless. The issue I had is with my code, hence it is not the service fault. It is the one between the keyboard and the chair.</p>
      <h4>5 Favorite?</h4>
      <ul>
        <li>Manage a Support team</li>
        <li>Respond to 50+ support requests via email or chat most days</li>
        <li>Dig through server logs to troubleshoot a customer's website behavior</li>
        <li>Find and recruit teammates for the Support team</li>
        <li>Help train and onboard new support teammates</li>
      </ul>
      <h4>5 Least Favorite?</h4>
      <ul>
        <li>Work with prospective customers to explain our service and the pricing model</li>
        <li>Respond to Netlify customers on Twitter</li>
        <li>Write and maintain documentation for our software and blog posts for our website</li>
        <li>Work with people to figure out if Netlify's service can solve a particular workflow or integration challenge they have</li>
        <li>Debug a customer's build using a programming language and framework that you've never seen before</li>
      </ul>
      <h4>Favorite Technical Documentation Link</h4>
      <ul>
        <li><a className="Link" href="https://www.netlify.com/blog/2020/03/12/learn-jamstack-with-a-free-3.5-hour-video-of-demos-and-examples/?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex">Learn JAMstack with a free 3.5 hour video of demos and examples</a></li>
        <li>As someone who composed and delivered technical training before, the tutorial and the page is excellently designed. The material is simple, so audiences from multiple technical backgrounds will be able to understand, but challenging enough which helps drive the point across.</li>
      </ul>
      <h4>Why do you think SSL/HTTPS is important?</h4> 
      <ul>
        <li>SSL/HTTPS is the industry standard now. Even if your site is a static site that requires no input from the users, it will still retrieve some information from the user side.</li>
        <li>SSL will ensure that any information users sent into the site is encrypted. Hence this will avoid “man-in-the-middle” attacks where user's data could be retrieved easily during the transit process.</li>
      </ul>
      <h4>Major challenges of DNS for end-users?</h4>
      <ul>
        <li>End-users would like to be able to set up everything through wizard where they could just input a value to make it work. It is not easy to configure DNN in such a way without understanding the value that they need.</li>
        <li>It is not centralized. When you are building your site, you would need a service to host it, domain name, then you would need to configure your domain name to point to the site through DNS. Adding a CDN into the mix will increase the complexity that not all end-users have the technical knowledge to successfully configure it.</li>
      </ul>
      <h4>Site won't build?</h4>
      <p>I’m sorry to hear that your site wasn’t able to complete the build process successfully. In order to troubleshoot this issue further, could you please provide me the following information:</p>
      <ul>
        <li>May I know if you are able to build it successfully in your local environment?</li>
        <li>Please take note that Netlify builds is case sensitive, could you please double-check if your code is case sensitive since error messages that result may not clearly indicate this.</li>
        <li>Please provide me with the build ERROR message you received to better understand the issue on your end.</li>  
      </ul>
      <p>The above information will help me start my investigation of your issue. Also, I highly recommend reviewing our <a classname="Link" href="https://docs.netlify.com/configure-builds/troubleshooting-tips/">build troubleshooting article</a> as it contains useful information related to your issue.</p>
      </Layout>
    );  
}
export default IndexPage