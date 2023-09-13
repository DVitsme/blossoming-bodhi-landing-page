'use client';

import ContentWithTitles from '@/components/ContentWithTitles';
import Hero from '@/components/Hero';
import Image from 'next/image';
import SplitWithImage from '../components/SplitWithImage';
import VideoHalfSplit from '../components/VideoHalfSplit';
import NewsletterCTA from '@/components/NewsletterCTA';
import Footer from '@/components/Footer';
import Quote from '@/components/Quote';
import FlodeskSalesFunnel from '@/components/FlodeskSalesFunnel';
import JoinOurTeam from '@/components/JoinOurTeam';

export default function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <ContentWithTitles />
      <SplitWithImage />
      <VideoHalfSplit position="left" />
      <VideoHalfSplit position="right" />
      <FlodeskSalesFunnel />
      <JoinOurTeam />
      {/* <NewsletterCTA /> */}
      <Footer />
    </div>
  );
}
