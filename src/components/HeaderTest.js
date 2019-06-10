import React from "react"
import PropTypes from "prop-types"

const HeaderTest = ( props ) => ( 
  <div>
    This is a basic component to play around with the Gatsby static site template.
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
