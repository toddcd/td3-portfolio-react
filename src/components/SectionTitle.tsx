import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const titleVariant = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 50,
    transition: { type: 'spring', delay: 0.2, stiffness: 120 },
  },
};

function SectionTitle(props: any) {
  const { title } = props;
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: title === '00. Home' ? '0px' : '-75px',
    // onChange: (inView) => {},
  });

  return (
    <div ref={ref}>
      {inView && (
        <motion.div variants={titleVariant} initial="hidden" animate="visible">
          <Typography variant="h5" className="bold">
            {title}
          </Typography>
        </motion.div>
      )}
    </div>
  );
}

export default SectionTitle;
