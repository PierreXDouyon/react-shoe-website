import React, { useState, StrictMode } from "react";
import { connect } from 'react-redux';
import Carousel from "react-simply-carousel";
import '../index.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate} from 'react-router-dom';

const App = ({ qty, dispatch }) => {
    const navigate = useNavigate();
    const [activeSlide1, setActiveSlide1] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [activeSlide3, setActiveSlide3] = useState(0);
    const products = [
        "https://cdn.pixabay.com/photo/2020/01/06/23/45/watercolor-4746520_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/11/25/12/53/watercolour-2976746_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/07/18/15/43/animal-3546613_1280.jpg",
        "https://cdn.pixabay.com/photo/2021/03/13/10/23/hut-6091451_1280.jpg"
    ];

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

    const handlePrevClick = () => {
        setActiveSlide1(activeSlide1 - 1 >= 0 ? activeSlide1 - 1 : products.length - 1);
    };
    
    const handleNextClick = () => {
        setActiveSlide1((activeSlide1 + 1) % products.length);
    };

    const ViewProduct = (product) => {
        console.log(product);
        navigate("/product");
        // onOpenModal(product)
    }

    const navIconClass = navOpen ? 'open' : '';
    return (
        <div className={'wrapper'}>
            <div id="mySidenav" className={navOpen ? 'sidenav active' : 'sidenav'}>
            <button className="closebtn" onClick={()=>closeNav()}>&times;</button>
                
                <div className="sidenav-content">
                    <div className="sidenav-logo">
                        <a href="#">Artist.</a>
                    </div>
                    <h2>Artist with water colour</h2>
                    <p>Watercolour is a painting method in which the paints are made of pigments suspended in a water-based solution.</p>
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
                        activeSlideIndex={activeSlide1}
                        responsiveProps={[
                            {
                            itemsToShow: 3,
                            itemsToScroll: 1,
                            minWidth: 768,
                            },
                        ]}
                        onRequestChange={setActiveSlide1}
                        forwardBtnProps={{
                            show:false,
                        children: ">",
                        style: {
                            width: 20,
                            height: 20,
                            minWidth: 20,
                            alignSelf: "center",
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
                            alignSelf: "center",
                            borderRadius:"50%"
                        }
                        }}
                        speed={600}
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
                            <img src={item} onClick={() => onOpenModal(index)} />
                        </div>
                        ))}
                    </Carousel>
                    <div className="slider-click">
                        <button onClick={()=>handlePrevClick()}>&lt;</button>
                        <button onClick={()=>handleNextClick()}>&gt;</button>
                    </div>                    
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
                        speed={600}
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
                            <img src={item} onClick={() => onOpenModal(index)} />
                        </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div id="main" className={navOpen ? 'active' : ''}>
                <div className="menu" onClick={()=>toggleNav()}>
                    <div id="nav-icon" className={navIconClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div>
            <Modal open={open} onClose={onCloseModal} classNames="kkkkkk-modal" center>
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
                        show:true,
                    children: ">",
                    style: {
                        width: 20,
                        height: 20,
                        minWidth: 20,
                        alignSelf: "center",
                        borderRadius:"50%"
                    }
                    }}
                    backwardBtnProps={{
                        show:true,
                    children: "<",
                    style: {
                        width: 20,
                        height: 20,
                        minWidth: 20,
                        alignSelf: "center",
                        borderRadius:"50%"
                    }
                    }}
                    speed={600}
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
                        <img src={item} />
                        <div className="productView">
                            <button onClick={() => {ViewProduct(item)}}>View</button>
                        </div>
                    </div>
                    ))}
                </Carousel>                            
            </Modal>
        </div>
                <div className="main-content">
                    <p>Watercolors can also be made opaque by adding Chinese white.</p>
                </div>
                <ul className="social-icons">
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-square-tumblr"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default connect()(App)