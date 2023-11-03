import { motion } from 'framer-motion';

interface FadeInFromBottomProps {
    children: React.ReactNode;
    duration: number;
}

const FadeInFromBottom: React.FC<FadeInFromBottomProps> = ({ children, duration }) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInFromBottom;