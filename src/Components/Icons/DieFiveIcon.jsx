import { PropTypes } from 'prop-types'

function DieFiveIcon({color}) {
  return (
    <svg 
      fill={color} 
      width="40" 
      height="40" 
      viewBox="2 2 28 28" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM7.613 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM7.613 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM15.974 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM24.335 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12zM24.335 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12z"></path>
    </svg>
  )
}

DieFiveIcon.propTypes = {
  color: PropTypes.string
}


export default DieFiveIcon