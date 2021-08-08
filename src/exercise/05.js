import * as React from 'react'
import '../box-styles.css'

function Box({children, className = '', style = {}, size = '', props}) {
  return (
    <div
      className={`box box--${size} ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightBlue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
