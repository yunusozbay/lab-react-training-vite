import React from 'react'
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function IdCard({firstName, lastName, gender, height, birth, picture}) {
  return (
    <div className='card'>
      <div className='pics' >
        <img src ={picture} alt="pic"/>
      </div>
      <div>
        <div>Firstname: {firstName}</div>
        <div>Lastname: {lastName}</div>
        <div>Gender: {gender}</div>
        <div>Height: {height/100}m</div>
        <div>Birth: {weekday[birth.getDay()]} {birth.toLocaleDateString()}</div>
      </div>
    </div>
  )
}

export default IdCard