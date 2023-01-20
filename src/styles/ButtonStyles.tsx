import tw, { styled } from 'twin.macro'

export const ButtonPrimary = styled.button`
  ${tw`text-white tracking-[1px] uppercase font-bold bg-primary-200 py-3.5 px-8 hover:bg-primary-100 transition duration-300`}
`

export const ButtonSecondary = styled.button`
  ${tw`text-black tracking-[1px] uppercase font-bold bg-white shadow-button py-3.5 px-8 hover:text-white hover:bg-black transition duration-300`}
`
export const ButtonTertiary = styled.button`
  ${tw`flex items-center gap-1.5 text-black tracking-[1px] uppercase font-bold py-3.5 px-8 hover:text-primary-200 transition duration-300`}
  svg {
    ${tw`stroke-primary-200`}
  }
`
