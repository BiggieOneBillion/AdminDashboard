import React, { useReducer } from 'react'

const initialState = {
    filterInput: "",
    filterCategory: "",
}

const useFilterTable = () => {
    const [state, dispatch] = useReducer(initialState, reducer)
  return (
    <div>
      
    </div>
  )
}

export default useFilterTable
