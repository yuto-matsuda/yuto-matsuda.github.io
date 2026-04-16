import profileBg from '@/assets/profile-bg.jpg';
import profile from '@/assets/profile.jpg';
import { Modal, ModalCloseButton } from "@/components/modal";
import { useIsMobile } from "@/hooks/useIsMobile";
import useModal from "@/hooks/useModal";
import { faAward, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { awardsRecieved, eduBg, type AwardsRecieved, type EducationalBackground } from './contents';

export default function ProfileCard() {
  const [isOpen, openModal, closeModal] = useModal();

  return (
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
            岡山県出身22歳。
            岡山大学修士1年生で、2025年度からは<a href='https://cocolab.jp/' target='_blank' className='text-mga-blue border-b border-mga-blue px-1'>コンヴィヴィアルコンピューティング研究室</a>にてセンシングやAI, データ分析をメインテーマに研究しています。
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
      <ProfileModal isOpen={isOpen('academic-history')} closeModal={closeModal} title='学歴・留学歴' contents={eduBg} />
      <ProfileModal isOpen={isOpen('award-history')}    closeModal={closeModal} title='表彰・受賞歴' contents={awardsRecieved} />
    </div>
  )
}

function isEducationalBackGround(value: unknown): value is EducationalBackground {
  if (typeof value !== 'object' || value === null) return false;

  const { period, affiliation } = value as Record<keyof EducationalBackground, unknown>;
  if (typeof period !== 'string')  return false;
  if (!Array.isArray(affiliation)) return false;
  if (!affiliation.every((item) => typeof item === 'string')) return false;
  
  return true;
}

function ProfileModal({
  isOpen,
  closeModal,
  title,
  contents,
}: {
  isOpen: boolean
  closeModal: () => void
  title: string
  contents: EducationalBackground[] | AwardsRecieved[]
}) {
  const isMobile = useIsMobile();

  return (
    <Modal isOpen={isOpen} bgClose={closeModal} className='relative w-[85%] max-w-2xl h-8/12 bg-mga-6 rounded-xl'>
      {isMobile ? (
        <ModalCloseButton theme='green' top={12} right={12} size='sm' onClose={closeModal} />
      ) : (
        <ModalCloseButton theme='green' top={16} right={16} size='md' onClose={closeModal} />
      )}
      <div className='w-full sm:max-w-xl my-4 mx-auto px-4'>
        <h1 className='relative w-fit text-white text-xl md:text-2xl font-semibold text-center px-2 pb-0.5 mx-auto mb-8'>
          {title}
        </h1>
        <div className='flex flex-col space-y-3 text-white'>
          {contents.map((content, i) => {
            if (isEducationalBackGround(contents[0])) {
              const { period, affiliation } = content as EducationalBackground
              return <ModalContent key={i} heading={period} list={affiliation} />
            } else {
              const { date, awards } = content as AwardsRecieved
              return <ModalContent key={i} heading={date} list={awards} />
            }
          })}
        </div>
      </div>
    </Modal>
  )
}

function ModalContent({
  heading,
  list,
}: {
  heading: string
  list: string[]
}) {
  return (
    <div className='border-b border-mga-2 pb-3'>
      <h2 className='font-bold text-mga-2 mb-0.5'>{heading}</h2>
      <ul className='text-sm list-disc ml-6'>
        {list.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    </div>
  )
}