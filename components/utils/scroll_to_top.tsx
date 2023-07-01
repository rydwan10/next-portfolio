import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <button
                className={`z-50 fixed bottom-4 right-4 p-4 bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-400 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={scrollToTop}
            >
                &#8593;
            </button>
        </>
    );
};

export default ScrollToTopButton;