import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Carousel from "react-simply-carousel";
import '../index.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate} from 'react-router-dom';

const App = ({ }) => {
    const navigate = useNavigate();
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [activeSlide3, setActiveSlide3] = useState(0);
    const isdarkdefault = localStorage.getItem("darkmode")?JSON.parse(localStorage.getItem("darkmode")):false;
    const [isdark, setDarkMode] = useState(isdarkdefault);
    
    const products = [
        {img:"assets/image/IMG_6794-removebg-preview.png",category: "Men’s Shoe", name:"Maxlete Boost", description:"A shoe that gives you a boost of energy and speed. This shoe features a lightweight design, a responsive cushioning system, and a durable rubber outsole. Maxlete Boost is the perfect shoe for sprinters, jumpers, and hurdlers who want to achieve their personal bests.", price:220.99},
        {img:"assets/image/IMG_6799-removebg-preview.png",category: "Women’s Shoe", name:"Maxlete Flex", description:"A shoe that adapts to your foot shape and movement. This shoe features a flexible mesh upper, a supportive midsole, and a grooved outsole. Maxlete Flex is the ideal shoe for runners, walkers, and joggers who want to enjoy a comfortable and natural ride.", price:165.99},
        {img:"assets/image/IMG_6800-removebg-preview.png",category: "Men’s Shoe", name:"Maxlete Zone", description:"A shoe that helps you zone in on your performance. This shoe features a breathable knit upper, a stabilizing heel counter, and a shock-absorbing midsole. Maxlete Zone is the optimal shoe for distance runners, marathoners, and triathletes who want to stay focused and comfortable for long periods of time.", price:188.99},
        {img:"assets/image/IMG_6801-removebg-preview.png",category: "Women’s Shoe", name:"Maxlete Flow", description:"A shoe that lets you flow with your creativity and style. This shoe features a colorful canvas upper, a cushioned insole, and a vulcanized outsole. Maxlete Flow is the excellent shoe for skateboarders, dancers, and artists who want to express themselves and have fun.", price:173.99},
        {img:"assets/image/IMG_6802-removebg-preview.png",category: "Men’s Shoe", name:"Maxlete Force", description:"A shoe that unleashes your force and power. This shoe features a sturdy synthetic upper, a reinforced toe cap, and a rugged outsole. Maxlete Force is the supreme shoe for weightlifters, wrestlers, and rugby players who want to lift more, grapple harder, and tackle stronger.", price:207.99},
        {img:"assets/image/IMG_6803-removebg-preview.png",category: "Men’s Shoe", name:"Maxlete Edge", description:"A shoe that gives you an edge over your competition. This shoe features a sleek leather upper, a padded collar, and a grippy outsole. Maxlete Edge is the ultimate shoe for basketball players, soccer players, and tennis players who want to dominate the court or the field.", price:263.99}
    
    ]


    const [open, setOpen] = useState(false);

    const onOpenModal = (index) => {
        setActiveSlide3(index)
        setOpen(true)
    };
    const onCloseModal = () => setOpen(false);

    const [navOpen, setNavOpen] = useState(true);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    }

    const closeNav = () => {
        setNavOpen(false);
    }

    const ViewProduct = (product) => {
        localStorage.setItem('product', JSON.stringify(product))
        // window.location.href = "/web-framework/react-shoe/product"
        const ProductNavigateEvt = new CustomEvent("ProductNavigate", {detail: "product"});
        document.dispatchEvent(ProductNavigateEvt);
        navigate('/web-framework/react-shoe/product');
    }

    const darkmodeClick = (e) => {
        setDarkMode(e.detail);
    }

    useEffect(() => {
        document.addEventListener("DarkmodeHandle", darkmodeClick);
          return () => {
            document.removeEventListener("DarkmodeHandle", darkmodeClick);
          }
      }, []);    
    const navIconClass = navOpen ? 'open' : '';
    const mainBackground = isdark ? "assets/image/hero-image-dark-mode.jpeg":"assets/image/hero-image.jpeg";
    return (
        <div className={'wrapper'}>
            <div id="mySidenav" className={navOpen ? 'sidenav active' : 'sidenav'}>
            {/* <button className="closebtn" onClick={()=>closeNav()}>&times;</button> */}
                
                <div className="sidenav-content">
                    <div className="sidenav-logo">
                        <h1>MAXLETE</h1>
                    </div>
                    <h2>Maximize Your Performance in Style</h2>
                    <p>The Ultimate Shoe for Your 90s Nostalgia. Stylish, Durable, Comfortable, & 100% Made from Recycled Materials! <span>&#x267B;</span> </p>
                    <h2>View our latest Fall Collection</h2>
                    <Carousel
                        containerProps={{
                        style: {
                            width: "100%",
                            justifyContent: "center",
                            userSelect: "none"
                        }
                        }}
                        autoplay={true}
                        preventScrollOnSwipe
                        swipeTreshold={600}
                        activeSlideIndex={activeSlide2}
                        responsiveProps={[
                            {
                            itemsToShow: 3,
                            itemsToScroll: 1,
                            minWidth: 768,
                            },
                        ]}
                        onRequestChange={setActiveSlide2}
                        forwardBtnProps={{
                            show:false,
                        children: ">",
                        style: {
                            width: 60,
                            height: 60,
                            minWidth: 60,
                            alignSelf: "center"
                        }
                        }}
                        backwardBtnProps={{
                            show:false,
                        children: "<",
                        style: {
                            width: 60,
                            height: 60,
                            minWidth: 60,
                            alignSelf: "center"
                        }
                        }}
                        dotsNav={{
                        show: true,
                        itemBtnProps: {
                            style: {
                            height: 13,
                            width: 13,
                            borderRadius: "50%",
                            marginTop:10,
                            marginLeft:5,
                            border: 2,
                            background: "white"
                            }
                        },
                        activeItemBtnProps: {
                            style: {
                            height: 13,
                            width: 13,
                            marginTop:10,
                            marginLeft:5,
                            borderRadius: "50%",
                            border: 2,
                            background: "black"
                            }
                        }
                        }}
                        speed={8500}
                        centerMode
                    >
                        {products.map((item, index) => (
                        <div
                            className="image-item"
                            style={{
                            width: 90,
                            height: 90,
                            margin: 5,
                            border: "5px solid transparent",
                            textAlign: "center",
                            }}
                            key={index}
                            
                        >
                            <img src={item.img} onClick={() => onOpenModal(index)} />
                        </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div id="main" className={navOpen ? 'active' : ''}>
                <img src={mainBackground} className={navOpen ? 'mainBackgroundImg' : 'mainBackgroundImg-close'} />
            
                <div className="menu" onClick={()=>toggleNav()}>
                    <div id="nav-icon" className={navIconClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div>
                    <Modal open={open} onClose={onCloseModal} modalId="landing-modal" center closeOnOverlayClick={false}>
                        <Carousel
                            containerProps={{
                            style: {
                                width: "100%",
                                justifyContent: "center",
                                userSelect: "none"
                            }
                            }}
                            preventScrollOnSwipe
                            swipeTreshold={60}
                            activeSlideIndex={activeSlide3}
                            responsiveProps={[
                                {
                                itemsToShow: 1,
                                itemsToScroll: 1,
                                minWidth: 768,
                                },
                            ]}
                            onRequestChange={setActiveSlide3}
                            forwardBtnProps={{
                                show:false,
                            children: ">",
                            style: {
                                width: 20,
                                height: 20,
                                minWidth: 20,
                                alignSelf: "left",
                                borderRadius:"50%"
                            }
                            }}
                            backwardBtnProps={{
                                show:false,
                            children: "<",
                            style: {
                                width: 20,
                                height: 20,
                                minWidth: 20,
                                alignSelf: "end",
                                borderRadius:"50%"
                            }
                            }}
                            dotsNav={{
                                show: true,
                                itemBtnProps: {
                                    style: {
                                    height: 13,
                                    width: 13,
                                    borderRadius: "50%",
                                    marginTop:10,
                                    marginLeft:5,
                                    border: 2,
                                    background: "white"
                                    }
                                },
                                activeItemBtnProps: {
                                    style: {
                                    height: 13,
                                    width: 13,
                                    marginTop:10,
                                    marginLeft:5,
                                    borderRadius: "50%",
                                    border: 2,
                                    background: "black"
                                    }
                                }
                                }}
                            speed={2500}
                            centerMode
                        >
                            {products.map((item, index) => (
                            <div
                                className="image-item"
                                style={{
                                width: 79,
                                height: 79,
                                margin: 10,
                                border: "5px solid transparent",
                                textAlign: "center",
                                }}
                                key={index}
                            >
                                <img src={item.img} />
                                <div className="productView">
                                    <button onClick={() => {ViewProduct(item)}}>More</button>
                                </div>
                            </div>
                            ))}
                        </Carousel>                     
                    </Modal>
                </div>
                <div className="main-content">
                    <p>Watercolors can also be made opaque by adding Chinese white.</p>
                </div>
            </div>
        </div>
    )
}

export default connect()(App)