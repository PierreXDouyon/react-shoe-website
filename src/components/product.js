import React, {useEffect, useState} from 'react'
import { Modal } from 'react-responsive-modal';
import "../product.css";

const Product = ({}) => {
    
    const [isMobile, setIsMobile] = useState(false)
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");

    const productInfo = JSON.parse(localStorage.getItem("product"))
 
    //choose the screen size 
    const onCloseModal = () => setOpen(false);
    const onOpenModal = () => {
        setOpen(true)
      };
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    
    const onSubmit  = () => {
        onCloseModal();
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
                            <button className="button1" onClick={() => {onOpenModal()}}> Add to Bag </button>
                            <h2>£{productInfo.price}</h2>
                        </div>
                        <button className="button2" onClick={() => {onOpenModal()}}> Sign-up & save 10% </button>
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
                        <h2>${productInfo.price}</h2>
                        
                    </div>
                    <button className="button2" onClick={() => {onOpenModal()}}> Sign-up & save 10% </button>
                </div>
            </div>  
            }

            <Modal open={open} onClose={onCloseModal} center>
                <div className="emailForm">
                    <h2>Sign-up for 10% Discount!</h2>
                    <div className='content'>
                        please put your email below
                    </div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={() => {onSubmit()}}>Submit</button>
                </div>                
            </Modal>
             
                    
        </div>
    )
}


export default Product;