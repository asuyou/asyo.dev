import * as React from "react"
import { Link } from "gatsby"
import { RouteData } from "src/data/routes"
import { SocialData } from "src/data/socials"

const footerTextStyle =
  "text-custom-mutedDark hover:text-custom-muted transition"

const FooterColumn = (props: any) => {
  return <div className="flex flex-col mr-5 space-y-2">{props.children}</div>
}

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center flex-col pb-10">
      <hr className="text-custom-mutedDark my-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FooterColumn>
          <h4 className="text-custom-muted text-lg font-semibold">ASYO</h4>
          <p className="text-custom-mutedDark">Just some random dev</p>
        </FooterColumn>
        <FooterColumn>
          {RouteData.map(route => (
            <Link to={route.href} className={footerTextStyle} key={route.uid}>
              {route.text}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn>
          {SocialData.map(social => (
            <a
              href={social.href}
              target="_blank"
              className={footerTextStyle}
              key={social.uid}
            >
              {social.name}
            </a>
          ))}
        </FooterColumn>
      </div>
      <p className="text-custom-muted">© {year} asyo</p>
    </footer>
  )
}

export default Footer
