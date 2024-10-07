import React from 'react'
import cssStyle from "./about.module.css";
console.log(cssStyle,"CSS-Style")
export default function AboutPage() {
  return (
    <div>
        <h1 className={cssStyle.green } >This is about page</h1>
    </div>
  )
}
