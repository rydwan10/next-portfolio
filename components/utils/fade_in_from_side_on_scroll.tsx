import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInFromSideOnScrollProps {
    children: React.ReactNode;
    duration: number;
    direction: 'left' | 'right'; // Specify the direction as 'left' or 'right'
}

const FadeInFromSideOnScroll: React.FC<FadeInFromSideOnScrollProps> = ({
    children,
    duration,
    direction,
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -20 : 20,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    const animation = inView ? 'visible' : 'hidden';

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={variants}
            transition={{ duration }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInFromSideOnScroll;
