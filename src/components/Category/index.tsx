import React from 'react';
import CircularCard from './CircularCard';
import { Container, Title, } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

export interface iCategory {
  title: string;
}

const Categories: iCategory[] = [
  { title: "male" },
  { title: "female" },
  { title: "All" },
  { title: "Popular" },
  { title: "New" },
  { title: "Shoes" },
  { title: "Upper" },
  { title: "Lower" }
];

const Index: React.FC = () => {
  const smallScreen = useMediaQuery('(min-width:56.25rem)')

  return (
    <Container size={"md"} >
      <Title align='center'>Explore Your Category</Title>
      <Carousel
        slideGap={smallScreen ? 0 : "md"}
        slidesToScroll={1}
        slideSize={smallScreen ? "25%" : "40%"}
        withControls={false}
        my={20}
        loop={true}
      >
        {Categories.map((cate, ind) => (
          <Carousel.Slide key={cate.title + ind}>
            <CircularCard title={cate.title} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Index;
