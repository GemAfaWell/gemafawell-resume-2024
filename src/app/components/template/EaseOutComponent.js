'use client'

import { AnimatePresence, motion } from 'framer-motion';

const EaseOut = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.33 }}
            >
                {children}
            </motion.div>

        </AnimatePresence>
    )
};

export default EaseOut;