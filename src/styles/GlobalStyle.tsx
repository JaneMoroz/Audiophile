import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`bg-background font-body`,
  },
  h1: {
    ...tw`text-[56px] font-bold leading-[56px] tracking-[2px] uppercase`,
  },
  h2: {
    ...tw`text-[40px] font-bold leading-[44px] tracking-[1.5px] uppercase`,
  },
  h3: {
    ...tw`text-[32px] font-bold leading-[36px] tracking-[1.15px]  uppercase`,
  },
  h4: {
    ...tw`text-[28px] font-bold leading-[38px] tracking-[2px]  uppercase`,
  },
  h5: {
    ...tw`text-[24px] font-bold leading-[33px] tracking-[1.7px]  uppercase`,
  },
  h6: {
    ...tw`text-[18px] font-bold leading-[24px] tracking-[1.3px]  uppercase`,
  },
  p: {
    ...tw`text-[15px] font-normal leading-[25px]`,
  },
})

export default function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}
