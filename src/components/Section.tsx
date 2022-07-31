import React from 'react';
import SectionTitle from './SectionTitle';
import '../App.css';

const Section = (props: any) => {
  const { title } = props;
  return (
    <section className="section">
      <SectionTitle title={title}></SectionTitle>
      <div></div>
    </section>
  );
};

export default Section;
