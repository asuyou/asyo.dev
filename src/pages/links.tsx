import * as React from "react"
import Layout from "components/Layout"
import LinkCard from "components/LinkCard"
import { SocialData } from "src/data/socials"

const LinksPage = () => {
  return (
    <Layout title="Links">
      <div className="prose">
        <h1>Links</h1>
        <p>Just links to some of the places you can find me</p>
      </div>
      {SocialData.map(social => (
        <LinkCard
          name={social.name}
          type={social.type}
          href={social.href}
          data={social.data}
          desc={social.desc}
          Icon={social.Icon}
          key={social.uid}
        />
      ))}
    </Layout>
  )
}

export default LinksPage
