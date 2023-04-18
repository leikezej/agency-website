import React from 'react'
import Typewriter from "typewriter-effect";

function Text({text}) {

  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        delay: 250,
        loop: true,
        deleteSpeed: 150,
        pauseFor: 150
      }}
    />
  )
}

export default Text