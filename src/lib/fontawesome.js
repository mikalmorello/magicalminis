import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// React renders SVG icons directly; skip injecting duplicate CSS.
config.autoAddCss = false

export { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
