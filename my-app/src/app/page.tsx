import React from 'react'

export default function page() {
  return (
    <>

    <div className="form">
      <form action="">
      <label className='label'  htmlFor="">name::</label>
      <input required type="text" />
      <label className='label'  htmlFor="">email::</label>
      <input required type="email" />
      <label className='label' htmlFor="">password::</label>
      <input required type="password" />
      <input className='submit' type="submit" />

    </form>
  
    </div>
 <div className="aas"></div>
 
    </>

  )
}
