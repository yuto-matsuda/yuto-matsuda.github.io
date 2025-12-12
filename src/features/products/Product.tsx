import useModal from '@/hooks/useModal';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Product } from './contents';

export default function Product({
  content
}: {
  content: Product 
}) {
  const [isOpen, openModal, closeModal] = useModal();
  const { id, title, img, description, tags, modal: Modal, awards } = content;

  const awardBorderClasses: Record<string, string> = {
    gold:   'border-yellow-400',
    silver: 'border-gray-400',
    other:  'border-orange-400',
  };

  const awardTextClasses: Record<string, string> = {
    gold:   'text-yellow-400',
    silver: 'text-gray-400',
    other:  'text-orange-400',
  };

  return (
    <>
      <div 
        onClick={() => openModal(id)}
        className={`
          relative cursor-pointer bg-white rounded-xl shadow hover:shadow-lg p-4 group 
          ${awards && `border-4 ${awardBorderClasses[awards[0]]}`}
        `}>
        <div className='w-full h-40 border border-gray-400 rounded-xl overflow-hidden mb-2'>
          <img
            src={img}
            alt={title}
            className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110'
          />
        </div>
        <h2 className='text-lg font-semibold text-center mb-2'>{title}</h2>
        <p className='text-sm mb-2'>{description}</p>
        <div className='text-right'>
          {tags.map((tag, i) => 
            <span
              key={i}
              className='text-xs border border-gray-400 rounded-3xl py-1 px-2 ml-2'
            >
              <span className='font-semibold text-cyan-600 pr-1'>#</span>
              {tag}
            </span>
          )}
        </div>
        {awards && awards.map((award, i) => (
          <FontAwesomeIcon key={i} icon={faAward} className={`absolute bottom-3 text-2xl ${awardTextClasses[award]}`} style={{ left: 10 + (i * 30) }} />
        ))}
      </div>
      <Modal isOpen={isOpen(id)} closeModal={closeModal} thumbnail={img} />
    </>
  )
}
