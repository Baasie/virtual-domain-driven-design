import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { FC, useState } from "react"
import tw from "twin.macro"

// @ts-ignore
import MeetupSvg from "../images/logo/meetup.svg"

// TODO: NEEDS MAJOR REFACTORING AND DYNAMIC CONFIG, this is UGLY but it works =). Problem I face now is the meetup SVG logo which cannot be imported from graphql dynamicly like other images can (See books for an example)

interface NavigationItem {
  to: string
  label: string
}

const VDDDLogo: FC = ({ data }) => {
  return (
    <Link
      to="/"
      tw="p-4 cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-gray-400"
    >
      <GatsbyImage
        image={data.vdddLogoTp.childImageSharp.gatsbyImageData}
        alt="Virtual DDD"
        tw="object-contain mr-2 h-8"
      />
    </Link>
  )
}

const SocialMenu: FC = ({ data }) => {
  return (
    <button
      className="group"
      tw="relative px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      Socials
      <div tw="absolute top-0 right-0 mt-14 w-32 bg-white rounded shadow-lg z-30 hidden group-hover:block">
        <SocialSubItems data={data} />
      </div>
    </button>
  )
}

const SocialMobileMenu: FC = ({ data }) => {
  return (
    <div tw="relative border-t border-gray-400 w-full">
      <div tw="absolute top-0 right-0 text-gray-500 pt-2 pr-4">Socials</div>
      <SocialSubItems data={data} />
    </div>
  )
}

const SocialSubItems: FC = ({ data }) => {
  return (
    <div>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
        href="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MeetupSvg tw="mr-2 h-8" />
      </a>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center lg:justify-center"
        href="https://twitter.com/VirtualDDD"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyImage
          image={data.twitterLogo.childImageSharp.gatsbyImageData}
          tw="mr-2 h-8"
          alt="Twitter"
        />
        twitter
      </a>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center lg:justify-center"
        href="https://github.com/ddd-cqrs-es/slack-community"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyImage
          image={data.slackLogo.childImageSharp.gatsbyImageData}
          tw="mr-2 h-8"
          alt="Slack"
        />
        Slack
      </a>
    </div>
  )
}

const ContributionMenu: FC = ({ data }) => {
  return (
    <button
      className="group"
      tw="relative px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      Contribute
      <div tw="absolute top-0 right-0 mt-14 w-32 bg-white rounded shadow-lg z-30 hidden group-hover:block">
        <ContributionSubItems data={data} />
      </div>
    </button>
  )
}

const ContributionMobileMenu: FC = ({ data }) => {
  return (
    <div tw="relative border-t border-gray-400 w-full">
      <div tw="absolute top-0 right-0 text-gray-500 pt-2 pr-4">Contribute</div>
      <ContributionSubItems data={data} />
    </div>
  )
}

const ContributionSubItems: FC = ({ data }) => {
  return (
    <div>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
        href="https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyImage
          image={data.githubLogo.childImageSharp.gatsbyImageData}
          tw="mr-2 h-8"
          alt="GitHub"
        />
        Github
      </a>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
        href="https://virtualddd.com/admin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyImage
          image={data.netlifyLogo.childImageSharp.gatsbyImageData}
          tw="mr-2 h-8"
          alt="Netlify"
        />
        Netlify CMS
      </a>
    </div>
  )
}

const DesktopNavigationItem = ({ to, label }: NavigationItem) => {
  return (
    <Link
      to={to}
      tw="relative px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      {label}
    </Link>
  )
}

const MobileNavigationItem = ({ to, label }: NavigationItem) => {
  return (
    <Link
      to={to}
      tw="w-full p-4 text-lg leading-tight cursor-pointer flex-shrink-0 hover:bg-gray-400 hover:text-blue-700"
    >
      {label}
    </Link>
  )
}

const NavbarMobile: FC = ({ data }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div tw="lg:hidden">
      <div tw="w-full flex flex-row items-center justify-between shadow-md">
        <VDDDLogo data={data} />
        <button
          tw="relative flex-shrink-0 flex items-center m-4 px-3 py-2 border rounded border-white hover:text-blue-400 hover:border-blue-400"
          onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
        >
          <svg
            tw="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        tw="block bg-white w-full z-30 shadow-md"
        css={!isMenuOpen && tw`invisible`}
      >
        <div tw="flex flex-col lg:flex-row items-start lg:items-stretch justify-end">
          <MobileNavigationItem to="/sessions" label="Sessions" />
          <MobileNavigationItem to="/learning-ddd" label="Learning DDD" />
          <a
            tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
            href="https://feedback.userreport.com/a15e4e61-2323-40a1-90b4-1267e010e35c/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Propose & Vote!
          </a>
          <a
            tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
            href="https://dddheuristics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heuristics
          </a>
          <SocialMobileMenu data={data} />
          <ContributionMobileMenu data={data} />
        </div>
      </div>
    </div>
  )
}

const NavbarDesktop: FC = ({ data }) => {
  return (
    <div tw="w-4/5 xl:w-2/3 flex items-center justify-between">
      <VDDDLogo data={data} />
      <div tw="flex flex-col lg:flex-row items-start lg:items-stretch justify-end">
        <DesktopNavigationItem to="/sessions" label="Sessions" />
        <DesktopNavigationItem to="/learning-ddd" label="Learning DDD" />
        <a
          tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
          href="https://feedback.userreport.com/a15e4e61-2323-40a1-90b4-1267e010e35c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Propose & Vote!
        </a>
        <a
          tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
          href="https://dddheuristics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heuristics
        </a>
        <SocialMenu data={data} />
        <ContributionMenu data={data} />
      </div>
    </div>
  )
}

const NavBar: FC = () => {
  const data = useStaticQuery(graphql`
    {
      vdddLogoTp: file(relativePath: { eq: "logo/vddd_logo_tp.png" }) {
        childImageSharp {
          gatsbyImageData(height: 32, width: 135, layout: FIXED)
        }
      }
      slackLogo: file(relativePath: { eq: "logo/slack_icon.png" }) {
        childImageSharp {
          gatsbyImageData(height: 24, width: 24, layout: FIXED)
        }
      }
      twitterLogo: file(relativePath: { eq: "logo/twitter.png" }) {
        childImageSharp {
          gatsbyImageData(height: 24, width: 24, layout: FIXED)
        }
      }
      githubLogo: file(relativePath: { eq: "logo/github.png" }) {
        childImageSharp {
          gatsbyImageData(height: 24, width: 24, layout: FIXED)
        }
      }
      netlifyLogo: file(relativePath: { eq: "logo/netlify.png" }) {
        childImageSharp {
          gatsbyImageData(height: 24, width: 24, layout: FIXED)
        }
      }
    }
  `)

  return (
    <div tw="bg-white shadow-md text-blue-600 h-16 sticky top-0 inset-x-0 z-50">
      <NavbarMobile data={data} />
      <div tw="hidden lg:flex flex-row items-center justify-center">
        <NavbarDesktop data={data} />
      </div>
    </div>
  )
}

export default NavBar
