import React from 'react'
import cssStyle from "./contact.module.css";
console.log(cssStyle,"CSS-Style")
export default function ContactPage() {
  return (
    <div>
      <h1 className={cssStyle.blue}>This is contact page</h1>
    </div>
  )
}
