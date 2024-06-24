import React , {useContext} from 'react'
import { Details } from './UseContext'

const Child2 = () => {
  const {name, age} = useContext(Details);
  
  return (
    <div>
      <h1>Child 2</h1>

      <p><span>{name}</span></p>
      <p><span>{age}</span></p>

      
    </div>
  )
}

export default Child2