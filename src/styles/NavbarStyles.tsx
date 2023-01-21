import tw, { styled } from 'twin.macro'

export const Navigation = styled.nav`
  ${tw`flex justify-start items-center sm:justify-between gap-x-10 text-white text-[13px] leading-[25px] font-bold tracking-[2px] uppercase border-b-0 border-border`}

  // Hamburger button
  button:first-child {
    ${tw`inline-block md:hidden`}
  }

  // Cart button
  button:last-child {
    ${tw`ml-auto sm:ml-0`}
  }

  // Links list item
  li {
    ${tw`hover:text-primary-200 transition duration-300`}
  }
`

export const NavigationLinks = styled.ul`
  ${tw`gap-x-8 hidden md:flex`}
`
