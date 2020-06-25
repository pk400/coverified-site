import React from 'react'

import './Content.css'

const Content = ({children}) => {
  return (
    <div>
      {children.map((child, i) =>
        <div className={'content-section' + (i % 2 == 0 ? ' primary' : ' secondary')}>
          {child}
        </div>
      )}
    </div>
  )
}

export default Content
