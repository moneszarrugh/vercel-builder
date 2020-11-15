import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
// library.add(fas)
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons/faSwatchbook'
import { faDollyFlatbed } from '@fortawesome/free-solid-svg-icons/faDollyFlatbed'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons/faSortAmountDown'
import { faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons/faSortNumericDownAlt'
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons/faSortNumericDown'
import { faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons/faSortAlphaDownAlt'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons/faSortAlphaDown'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons/faGlobeEurope'
import { faWeight } from '@fortawesome/free-solid-svg-icons/faWeight' //weight
import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons/faRulerHorizontal' //ruler-horizontal
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons/faRulerVertical' //ruler-vertical
import { faRuler } from '@fortawesome/free-solid-svg-icons/faRuler' //ruler
import { faTape } from '@fortawesome/free-solid-svg-icons/faTape' //tape
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown' //angle-down
import { faHandPointer } from '@fortawesome/free-solid-svg-icons/faHandPointer' //hand-pointer
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup' //layer-group
import { faEuroSign } from '@fortawesome/free-solid-svg-icons/faEuroSign' //euro-sign
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign' //dollar-sign
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes' //box
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox' //boxes
import { faPercentage } from '@fortawesome/free-solid-svg-icons/faPercentage' //percentage
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/faMoneyBill' //money-bill
import { faWarehouse } from '@fortawesome/free-solid-svg-icons/faWarehouse' //warehouse
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes' //times
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare' //facebook-square
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger' //facebook-messenger
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare' //twitter-square
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons/faYoutubeSquare' //youtube-square
import { faViber } from '@fortawesome/free-brands-svg-icons/faViber' //viber
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp' //whatsapp
import { faTty } from '@fortawesome/free-solid-svg-icons/faTty' //tty
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock' //clock
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie' //user-tie
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle' //info-circle
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt' //map-marked-alt
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt' //mobile-alt
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText' //envelope-open-text
import { faShareSquare } from '@fortawesome/free-solid-svg-icons/faShareSquare' //share-square
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink' //link
import { faHands } from '@fortawesome/free-solid-svg-icons/faHands' //hands
import { faUserLock } from '@fortawesome/free-solid-svg-icons/faUserLock' //user-lock

library.add(
  faTools,
  faSwatchbook,
  faDollyFlatbed,
  faFilter,
  faSortAmountDown,
  faSortNumericDownAlt,
  faSortNumericDown,
  faSortAlphaDownAlt,
  faSortAlphaDown,
  faSearch,
  faGlobeEurope,
  faWeight,
  faRulerHorizontal,
  faRulerVertical,
  faRuler,
  faTape,
  faAngleDown,
  faHandPointer,
  faLayerGroup,
  faEuroSign,
  faDollarSign,
  faBoxes,
  faBox,
  faPercentage,
  faMoneyBill,
  faWarehouse,
  faTimes,
  faFacebookSquare,
  faFacebookMessenger,
  faViber,
  faWhatsapp,
  faTwitterSquare,
  faYoutubeSquare,
  faTty,
  faClock,
  faUserTie,
  faInfoCircle,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelopeOpenText,
  faShareSquare,
  faLink,
  faHands,
  faUserLock
)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
