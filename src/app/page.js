import Head from 'next/head';
import Video from './components/Video';

export default function Home() {
  const videos = [
    { title: 'Rick Astley', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { title: 'Lil Wayne', src: 'https://www.youtube.com/embed/3fumBcKC6RE' },
      { title: 'Lofi hip hop', src: 'https://www.youtube.com/embed/5qap5aO4i9A' }, 
      { title: 'Adventure in the Wild', src: 'https://www.youtube.com/embed/M6gWY5lS9KU' },
      { title: 'Tech Talk', src: 'https://www.youtube.com/embed/C0DPdy98e4c ' },
      { title: 'Big Buck Bunny', src: 'https://www.youtube.com/embed/aqz-KE-bpKQ'},
      
      
    ];
     
    

  return (
    <div className=" container mx-auto p-4  ">
      <Head>
        <title>Video Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
  <h1 className="text-3xl font-bold mb-4 text-center "></h1>


      <Video videos={videos} />
    </div>
  );
}