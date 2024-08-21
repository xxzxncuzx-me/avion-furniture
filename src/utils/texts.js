import Delivery from '../icons/delivery.svg'
import Checkmark from '../icons/checkmark--outline.svg'; 
import Purchase from '../icons/purchase.svg'
import Sprout from '../icons/sprout.svg'
import Linkedin from '../icons/linkedin.svg'
import Facebook from '../icons/facebook.svg'
import Instagram from '../icons/instagram.svg'
import Skype from '../icons/skype.svg'
import Twitter from '../icons/twitter.svg'
import Pinterest from '../icons/pinterest.svg'

export default {
    homepage: {
        features: [
            {
                id: 1,
                icon: Delivery,
                title: 'Next day as standard',
                description: 'Order before 3pm and get your order the next day as standard'
            },
            {
                id: 2,
                icon: Checkmark,
                title: 'Made by true artisans',
                description: 'Handmade crafted goods made with real passion and craftmanship'
            },
            {
                id: 3,
                icon: Purchase,
                title: 'Unbeatable prices',
                description: 'For our materials and quality you won’t find better prices anywhere'
            },
            {
                id: 4,
                icon: Sprout,
                title: 'Recycled packaging',
                description: 'We use 100% recycled to ensure our footprint is more manageable'
            },
        ]
    },
    footer: {
        medias: [
            {
                icon: Linkedin
            },
            {
                icon: Facebook
            },
            {
                icon: Instagram
            },
            {
                icon: Skype
            },
            {
                icon: Twitter
            },
            {
                icon: Pinterest
            }
        ]

    }
}