import React from 'react';
import { motion } from 'framer-motion';

const Motion = ({ children, ...rest }) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            {...rest}
        >
        {children}
        </motion.div>
    );
};

export default Motion;