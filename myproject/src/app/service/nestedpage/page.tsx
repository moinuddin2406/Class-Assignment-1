import React from 'react'
import cssStyle from"./nested.module.css"
console.log(cssStyle,"CSS-Style")
export default function NestedPage() {
  return (
    <div>
      <h1 className={cssStyle.white}>This is Nested Page</h1>
    </div>
  )
}
