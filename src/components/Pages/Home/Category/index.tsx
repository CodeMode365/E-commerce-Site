import React from 'react';
import CircularCard from './CircularCard';
import { Container, Title, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Data } from './Data';

const Index: React.FC = () => {
  const smallScreen = useMediaQuery('(min-width:56.25rem)')

  return (
    <Container size={"md"} >
      <Title align='center'>Explore Your Category</Title>
      <Carousel
        slideSize="25%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '33.33%', slideGap: "sm" }, { maxWidth: 'md', slideSize: '33.33%', slideGap: "md" }]}
        slideGap="xl"
        align="start"
        slidesToScroll={1}
        loop={true}
      >
        {Data.map((cate, ind) => (
          <Carousel.Slide key={cate.title + ind}>
            <CircularCard title={cate.title} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Divider my={20} mx={30} />
    </Container>
  );
};

export default Index;
