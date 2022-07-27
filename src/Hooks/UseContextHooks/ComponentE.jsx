import React, {useContext} from 'react'
import {userName} from "./HooksUseContext"

const ComponentE = () => {
     const user = useContext(userName);
     console.log(user);
  return (
    <div>ComponentE
     {user ? <h2>My name is {user.name}</h2> : null}
    </div>
  )
}

export default ComponentE;