import { FC } from "react"

interface Props{
  title:string
}

 const SpanComponent: FC<Props> = ({title}) => {
  return(
    <>
    <span className="text-t-ternary">{title}</span>
    </>
  )
}

export default SpanComponent