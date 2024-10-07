import React from 'react'
import cssStyle from "./service.module.css"
console.log(cssStyle,"Css-Style")
export default function ServicePage() {
  return (
    <div>
      <h1 className={cssStyle.red}>This is service page</h1>
    </div>
  )
}
