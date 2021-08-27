import Head from "next/head";
import Content from "../components/Formations/Content";
import Header from "../components/Header/Header";
import FormationFeatures from "../components/Home/FormationFeatures";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />

      <div>
        <FormationFeatures />
      </div>
      <div className='my-20'>
        <Content />
      </div>
    </div>
  );
}
