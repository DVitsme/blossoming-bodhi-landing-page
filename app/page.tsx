<<<<<<< HEAD
'use client';

=======
>>>>>>> f52cc5c236ad6d1b64498b0685c303ccc6dcd866
import ContentWithTitles from '@/components/ContentWithTitles';
import Hero from '@/components/Hero';
import Image from 'next/image';
import SplitWithImage from '../components/SplitWithImage';
import VideoHalfSplit from '../components/VideoHalfSplit';
import NewsletterCTA from '@/components/NewsletterCTA';
import Footer from '@/components/Footer';
import Quote from '@/components/Quote';
<<<<<<< HEAD
import FlodeskSalesFunnel from '@/components/FlodeskSalesFunnel';
import JoinOurTeam from '@/components/JoinOurTeam';
=======
>>>>>>> f52cc5c236ad6d1b64498b0685c303ccc6dcd866

export default function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <ContentWithTitles />
      <SplitWithImage />
      <VideoHalfSplit position="left" />
      <VideoHalfSplit position="right" />
<<<<<<< HEAD
      <FlodeskSalesFunnel />
      <JoinOurTeam />
      {/* <NewsletterCTA /> */}
=======
      <NewsletterCTA />
>>>>>>> f52cc5c236ad6d1b64498b0685c303ccc6dcd866
      <Footer />
    </div>
  );
}
