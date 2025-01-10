import React from 'react'
import {motion} from "motion/react"

const LightGestureAnimation = ({content}) => {
  return (
    <div>
      <motion.div>
        {content}
      </motion.div>
    </div>
  )
}

export default LightGestureAnimation
