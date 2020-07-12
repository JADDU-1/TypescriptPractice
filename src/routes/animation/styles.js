import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`flex flex-wrap w-screen h-screen p-2`}
`
export const EachVideo = styled.div`
  ${tw`flex flex-col  p-2`}
`

export const PrimaryCard = styled.div`
  ${tw`flex justify-center items-end border rounded mb-2 h-40 w-40 hover:h-64 hover:w-64`}
`
export const SecondaryCard = styled.div`
  ${tw`flex items-end flex-col  flex-wrap border rounded `}
  width:100%;
  /* position: absolute;
  top: 300px; */
`
export const Button = styled.button`
  ${tw`absolute text-2xl z-10 p-2 text-white hover:text-red-800 `}
`
export const View = styled.button`
  ${tw`absolute text-white z-10 hover:text-red-500 p-2`}
`
export const Video = styled.video`
  ${tw`sticky z-0 `}
`
export const CardVideo = styled.video`
  ${tw`sticky z-0 object-cover `}
  height:100%;
`
