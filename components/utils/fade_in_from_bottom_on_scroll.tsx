import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInFromBottomOnScrollProps {
    children: React.ReactNode;
    duration: number;
    threshold?: number;
}

const FadeInFromBottomOnScroll: React.FC<FadeInFromBottomOnScrollProps> = ({ children, duration, threshold = 0.8 }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: threshold });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
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

export default FadeInFromBottomOnScroll;
