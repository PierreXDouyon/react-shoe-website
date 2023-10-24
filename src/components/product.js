import React, {useEffect, useState} from 'react'
import "../product.css";

const Product = ({}) => {
    
    const [isMobile, setIsMobile] = useState(false)

    const productInfo = {
        img: "https://preview.ibb.co/cRRaiy/nike.png",
        category: "Men's shoe",
        name: "Nike Air Max 270",
        description: "The Nike Air Max 270 Men's Shoe is inspired by two icons of big Air: the Air Max 180 and Air Max 93. It features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
        price: "114.95"
    }
 
    //choose the screen size 
    const handleResize = () => {
        console.log(window.innerWidth);
      if (window.innerWidth < 720) {
        console.log("-- mobile?")
          setIsMobile(true)
      } else {
        console.log("desktop??")
          setIsMobile(false)
      }
    }
    
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })
    return (
        <div className="rounded-background-box">
            {isMobile && 
                <div className='mobile'>
                    <div className="left-rounded-column-mobile">
                        <div className="product-mobile">
                            <img className="tablet float" src={productInfo.img} />
                        </div>
                    </div>
                    <div className="right-rounded-column">
                        <div className="product-info">
                            <h3>{productInfo.category}</h3>
                            <h1> {productInfo.name} </h1>
                            <p><a className="link-active" href="#"><span style={{fontWeight:600}}>Choose size</span></a> | <a className="link" href="#"><span style={{fontWeight:600}}>Reviews</span></a> | <a className="link" href="#"><span style={{fontWeight:600}}>Delivery & returns</span></a></p>
                            <p> {productInfo.description}</p> 
                        </div>
                        <div className="cart-price">
                            <button className="button1"> Add to Bag </button>
                            <h2>£{productInfo.price}</h2>
                        </div>
                    </div>
                </div>
            }
            {!isMobile && 
            <div className='desktop'>
                <div className="left-rounded-column">
                    <div className="product">
                    <img className="tablet float" src={productInfo.img} />
                    </div>
                </div>
                <div className="right-rounded-column">
                    <div className="product-info">
                        <h3>{productInfo.category}</h3>
                        <h1> {productInfo.name} </h1>
                        <p><a className="link-active" href="#"><span style={{fontWeight:600}}>Choose size</span></a> | <a className="link" href="#"><span style={{fontWeight:600}}>Reviews</span></a> | <a className="link" href="#"><span style={{fontWeight:600}}>Delivery & returns</span></a></p>
                        <p> {productInfo.description}</p> 
                    </div>
                    <div className="cart-price">
                        <button className="button1"> Add to Bag </button>
                        <h2>£{productInfo.price}</h2>
                    </div>
                </div>
            </div>  
            }
             
                    
        </div>
    )
}


export default Product;