import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();

    useEffect(() => {
        if(pageYOffset > 100){
            $('.scroll-to-top').fadeIn();
        }else{
            $('.scroll-to-top').fadeOut();
        }
    }, [pageYOffset])

    return (
        <>
            <Link className="scroll-to-top rounded" to="#wrapper" smooth={true} duration={1000} onClick={() => scroll.scrollToTop()}>
                <i className="fas fa-angle-up"></i>
            </Link>
        </>
    )
}

export default ScrollToTop
