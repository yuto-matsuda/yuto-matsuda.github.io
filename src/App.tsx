import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoteIcon from './assets/logos/note.svg?react';
import mainVisual from './assets/main-visual.jpg';
import Footer from './components/footer';
import MainContainer from './components/mainContainer';
import Certification from './features/certifications/Certification';
import { certifications } from './features/certifications/contents';
import { products } from './features/products/contents';
import Product from './features/products/Product';
import ProfileCard from './features/profile/ProfileCard';
import { domesticConferences, internationalConferences, theses } from './features/research/contents';
import Research from './features/research/Research';

export default function App() {
  return (
    <>
      <MainContainer>
        <section id='hero' className='h-screen bg-radial-dark px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center max-w-5xl h-full mx-auto'>
            <div className='md:flex md:flex-col md:items-start w-full md:w-1/2 text-mga-2 '>
              <div className='text-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4 md:mb-8'>Yuto Matsuda</h1>
                <p className='text-xl mb-4 md:mb-16'>Okayama Univ.</p>
                <div className='hidden md:flex md:justify-center gap-6 text-3xl'>
                  <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a href='https://github.com/yuto-matsuda' target='_blank' className='cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href='https://note.com/yuto__matsuda' target='_blank' className='flex items-center cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <NoteIcon className='w-6 h-6 fill-current' />
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full max-w-[320px] md:max-w-none md:w-1/2'>
              <img
                src={mainVisual}
                alt='Yuto Matsuda'
                className='w-auto h-auto border-4 md:border-8 border-mga-2 rounded-xl'
              />
            </div>
            <div className='flex justify-center md:hidden gap-6 text-3xl text-mga-2 mt-8'>
              <a href=''>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href=''>
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href='https://github.com/yuto-matsuda' target='_blank'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='https://note.com/yuto__matsuda' target='_blank' className='flex items-center'>
                <NoteIcon className='w-6 h-6 fill-current' />
              </a>
            </div>
          </div>
        </section>
        
        <section id='profile' className=' py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-mga-black font-semibold text-center mb-8'>Profile</h1>
            <ProfileCard />
          </div>
          {/* <div>
            留学・海外旅行日記のリンク
          </div> */}
        </section>

        <section id='certifications' className='bg-radial-light py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-mga-3 font-semibold text-center mb-8'>Certifications</h1>
            <div className='grid grid-cols-1 gap-4'>
              {certifications.map(({ category, name, association, result, date }) =>
                <Certification
                  key={name}
                  category={category}
                  name={name}
                  association={association}
                  result={result}
                  date={date}
                />
              )}
            </div>
          </div>
        </section>

        <section id='research' className=' py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-mga-black font-semibold text-center mb-8'>Research</h1>
            <div className='space-y-4'>
              {/* <Research title='論文誌' works={journalPapers} color='grass' /> */}
              <Research title='国際学会' works={internationalConferences} color='purple' />
              <Research title='国内研究会' works={domesticConferences} color='blue' />
              <Research title='学位論文' works={theses} color='green' />
            </div>
          </div>
        </section>

        {/* <section id='products' className='bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200 py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'> */}
        <section id='products' className='bg-gradient-to-br from-green-200 via-teal-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-emerald-800 font-semibold text-center mb-8'>Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8'>
              {products.map(product =>
                <Product key={product.id} content={product} />
              )}
            </div>
          </div>
        </section>

        <section id='sns' className='flex justify-center gap-6 text-3xl text-mga-black my-8'>
          <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href='https://github.com/yuto-matsuda' target='_blank' className='cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://note.com/yuto__matsuda' target='_blank' className='flex items-center cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <NoteIcon className='w-6 h-6 fill-current' />
          </a>
        </section>
      </MainContainer>
      <Footer />
    </>
  )
}