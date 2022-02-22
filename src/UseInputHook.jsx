import React, { useState } from 'react'

//useInput Hook을 만들어 보았다!
// useInput은 react component가 아니라, 완전히 다른 function이다!
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  }
  return { value, onChange };
   // 이렇게 적으면 하단에 return 에서 적을 수 있다.
}


const UseInputHook = () => {
  const maxLen = value => value.length <= 10 
  // const maxLen = value => !value.includes('@')
  const name = useInput('Ms.', maxLen)
  return (
        <div> 
      <input placeholder='Name' {...name} />
        </div>
  )
}

export default UseInputHook