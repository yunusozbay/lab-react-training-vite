import React from 'react'

function Greetings({lang, children}) {
    console.log(lang)
  return (
    <div>
       <div>{lang==='de' ? `Hallo ${children}` : `Bonjour ${children}` }</div>
    </div>
  )
}

export default Greetings