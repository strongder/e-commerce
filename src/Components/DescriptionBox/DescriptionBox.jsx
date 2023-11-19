import React from 'react'
import '../DescriptionBox/DescriptionBox.scss'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilititate 
                buying and selling of products or servieces over the internet
                serves as a virtual marketplace where businesses and aindivid
                showcase their products, interact with customers, and coduc
                transactions without the need for a physical presence. E-com
                websites have gainde immense popularity due to their conveni
                accessibility, adn the global reah they offer.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox