import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useMediaQuery } from '../utilities/Hooks';

const bodyVariant = {};
const h1Variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
};
const h3Variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.85 },
  },
};

function Greeting(props: any) {
  const { title } = props;
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <section className="section">
      <SectionTitle title={title} />
      <motion.div
        variants={h1Variant}
        initial="hidden"
        animate="visible"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.span variants={h1Variant}>
          <Typography
            variant={isDesktop ? 'h1' : 'h3'}
            fontWeight="medium"
            textAlign="left"
          >
            Todd C. Davis.
          </Typography>
        </motion.span>
        <motion.span variants={h3Variant}>
          {isDesktop ? (
            <Typography variant="h3" fontWeight="medium" textAlign="left">
              {'Software Engineer / Product Manager'}
            </Typography>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" fontWeight="medium" textAlign="left">
                {'Software Engineer /'}
              </Typography>
              <Typography variant="h5" fontWeight="medium" textAlign="left">
                {'Product Manager'}
              </Typography>
            </div>
          )}
        </motion.span>
      </motion.div>
    </section>
  );
}

export default Greeting;
