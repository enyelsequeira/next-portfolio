import Image from 'next/image';
import React from 'react';



const MarkdownComponents = {
  h1: (props) => <p className="text-t-primary text-4xl capitalize font-display" {...props} />,
  h2: (props) => <h2 {...props} />,
  a: (props) => {
    return <a className="text-red-400 no-underline" target="_blank" href={props.href}>{props.children}</a>
  },
  span: (props) => {
    return <span className="text-t-ternary ">{props.children}</span>
  },

  img: (props) => {
    console.log(props);
    return (
      <>
        {props.src && <Image className="rounded-xl" width="500" height="300" src={props.src} alt={props.alt} layout="responsive"  />}
        </>
    )
  },


}
export default MarkdownComponents
