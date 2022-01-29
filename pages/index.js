import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TEch Dream Expo Summit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Tech Dream Expo Summit 2022" />
        <p className="Tech Dream Expo Startup Summit, is to bring together startups, students who intend to enter into entrepreneurship, entrepreneurs and tech savvies under one umbrella to share and explore the importance of mentorship, leadership and entrepreneurship as young people. The event is planned to give opportunities for startups to exhibit their ideas, projects, aspirations and admirations for the benefits of gaining technical, entrepreneurial and developmental advices from industry players. The ideas they will share will help to culminate into finding right mentorships and probable partnerships with stakeholders.
The aspirations of this event are based on four major agendas;">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
