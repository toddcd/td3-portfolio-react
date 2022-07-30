import React from 'react';
import { Slide, Typography, Fade } from '@mui/material';
import '../App.css';

const SectionComp = (props: any) => {
  const { name, color } = props;

  return (
    <section id={name} className="section" style={{ background: color }}>
      <div>
        <Slide
          direction="down"
          timeout={1500}
          in={true}
          mountOnEnter
          unmountOnExit
        >
          <Typography variant="h1">TD3 Studios</Typography>
        </Slide>
      </div>
      <div>
        <Fade timeout={2500} in={true} mountOnEnter unmountOnExit>
          <Typography variant="h2" className="bold">
            {name}
          </Typography>
        </Fade>
      </div>
    </section>
  );
};

export default SectionComp;
