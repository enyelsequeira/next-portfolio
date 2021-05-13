import Image from 'next/image';
import React from 'react';

const isOuterLink = (link: string) => {
  if (link === "code" || link === "site") {
    return "_blank"
  }
  return;
}

const MarkdownComponents = {
  h1: (props) => <p className="text-t-primary text-4xl capitalize font-display" {...props} />,
  h2: (props) => <h2 {...props} />,
  a: (props) => {
    // console.log("children", props)
    return <a className="no-underline capitalize" target={isOuterLink(props.children)} href={props.href}>{props.children}</a>
  },
  span: (props) => {
    return <span className="text-t-ternary ">{props.children}</span>
  },

  img: (props) => {
    console.log(props);
    return (
      <>
        {props.src && <Image className="rounded-xl" width="500" height="300" src={props.src} alt={props.alt} layout="responsive" />}
      </>
    )
  },


}
export default MarkdownComponents
