import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
    const {name} = useParams();
  return (
    <div>About {name}</div>
  )
}
