import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoteIcon from './assets/logos/note.svg?react';
import mainVisual from './assets/main-visual.jpg';
import profileBg from './assets/profile-bg.jpg';
import profile from './assets/profile.jpg';
import Footer from './components/footer';
import MainContainer from './components/mainContainer';
import { Modal, ModalCloseButton } from './components/modal';
import Certification from './features/certifications/Certification';
import { certifications } from './features/certifications/contents';
import { products } from './features/products/contents';
import Product from './features/products/Product';
import { domesticConferences, internationalConferences, theses } from './features/research/contents';
import Research from './features/research/Research';
import { useIsMobile } from './hooks/useIsMobile';
import useModal from './hooks/useModal';

export default function App() {
  const isMobile = useIsMobile();
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <>
      {/* <Header /> */}
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
            <div className='flex flex-col md:flex-row border border-gray-300 rounded-xl shadow'>
              <div className='relative w-full md:w-2/5 h-[200px] md:h-[300px] object-cover'>
                <img src={profileBg} alt='Yuto Matsuda' className='w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl' />
                <div className='absolute inset-0 bg-black/20 rounded-t-xl md:rounded-tr-none rounded-l-xl' />
                <img src={profile} alt='Yuto Matsuda' className='absolute bottom-0 right-1/2 md:top-1/2 md:right-0 w-[100px] aspect-square rounded-full object-cover translate-x-[50%] md:translate-x-1/2 translate-y-1/2 md:translate-y-[-50%] border-4 border-white' />
              </div>
              <div className='grid grid-rows-[auto_1fr_auto] gap-4 md:gap-0 w-full mt-[60px] md:mt-4 md:w-3/5 my-4'>
                <div className='flex flex-col items-center'>
                  <p className='text-xl font-bold'>松田 悠斗</p>
                  <p className='text-sm'>Yuto Matsuda</p>
                </div>
                <div className='flex items-center justify-center mx-4 md:mx-0 md:ml-[70px] md:mr-4'>
                  <p>
                    岡山県出身21歳。
                    岡山大学4回生で、2025年度からは<a href='https://cocolab.jp/' target='_blank' className='text-mga-blue border-b border-mga-blue px-1'>コンヴィヴィアルコンピューティング研究室</a>にてセンシングやAI, データ分析をメインテーマに研究しています。
                    得意分野はWebアプリ開発です。
                  </p>
                </div>
                <div className='flex gap-4 justify-center text-sm'>
                  <button onClick={() => openModal('academic-history')} className='bg-mga-3 text-white rounded-3xl w-36 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-mga-2 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faGraduationCap} className='mr-1' />
                    学歴・留学歴
                  </button>
                  <button onClick={() => openModal('award-history')} className='bg-mga-3 text-white rounded-3xl w-36 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-mga-2 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faAward} className='mr-1' />
                    表彰・受賞歴
                  </button>
                </div>
              </div>
            </div>
            <Modal isOpen={isOpen('academic-history')} bgClose={closeModal} className='relative w-[85%] max-w-2xl h-8/12 bg-mga-6 rounded-xl'>
              {isMobile ? (
                <ModalCloseButton theme='green' top={12} right={12} size='sm' onClose={closeModal} />
              ) : (
                <ModalCloseButton theme='green' top={16} right={16} size='md' onClose={closeModal} />
              )}
              <div className='w-full sm:max-w-xl my-4 mx-auto px-4'>
                <h1 className='relative w-fit text-white text-xl md:text-2xl font-semibold text-center px-2 pb-0.5 mx-auto mb-8'>
                  学歴・留学歴
                </h1>
                <div className='flex flex-col space-y-3 text-white'>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2019.4-2022.3</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>岡山県立岡山工業高等学校 情報技術科</li>
                    </ul>
                  </div>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2022.4-2026.3</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>岡山大学 工学部 工学科 情報・電気・数理データサイエンス系 情報工学コース</li>
                      <li>コンヴィヴィアルコンピューティング研究室</li>
                    </ul>
                  </div>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2023.8-2023.9</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>Ruhr Universität Bochum / ZFA (Summer School 2023)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Modal>
            <Modal isOpen={isOpen('award-history')} bgClose={closeModal} className='relative w-[85%] max-w-2xl h-8/12 bg-mga-6 rounded-xl'>
              {isMobile ? (
                <ModalCloseButton theme='green' top={12} right={12} size='sm' onClose={closeModal} />
              ) : (
                <ModalCloseButton theme='green' top={16} right={16} size='md' onClose={closeModal} />
              )}
              <div className='w-full sm:max-w-xl my-4 mx-auto px-4'>
                <h1 className='relative w-fit text-white text-xl md:text-2xl font-semibold text-center px-2 pb-0.5 mx-auto mb-8'>
                  表彰・受賞歴
                </h1>
                <div className='flex flex-col space-y-3 text-white'>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2021.2.12</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>第65回 情報技術検定 特別表彰</li>
                    </ul>
                  </div>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2021.8.4</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>岡山県高等学校職業教育技術顕彰</li>
                    </ul>
                  </div>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2022.2.3</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>岡山県高等学校工業教育技術顕彰</li>
                    </ul>
                  </div>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2022.2.8</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>岡山県立岡山工業高等学校 情報技術科 優等賞</li>
                      <li>ジュニアマイスター顕彰 全国工業高等学校長協会理事長賞 (121pt)</li>
                    </ul>
                  </div>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2024.5.xx</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>岡山大学工学部 成績優秀賞</li>
                    </ul>
                  </div>
                  <div className='border-b border-mga-2 pb-3'>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2025.5.xx</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>岡山大学工学部 成績優秀賞</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className='font-bold text-mga-2 mb-0.5'>2025.11.1</h2>
                    <ul className='text-sm list-disc ml-6'>
                      <li>第8回 金光賞</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Modal>
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
              {products.map(({ id, title, img, description, tags, modal: Modal, award }) =>
                <div key={id}>
                  <Product
                    title={title}
                    img={img}
                    description={description}
                    tags={tags}
                    award={award}
                    onClick={() => openModal(id)}
                  />
                  <Modal isOpen={isOpen(id)} closeModal={closeModal} thumbnail={img} />
                </div>
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