import { Modal, ModalCloseButton } from "@/components/modal";
import { useIsMobile } from "@/hooks/useIsMobile";

export function ProductModal({
  isOpen,
  closeModal,
  title,
  thumbnail,
  children
}: {
  isOpen: boolean
  closeModal: () => void
  title: string
  thumbnail: string
  children: React.ReactNode
}) {
  const isMobile = useIsMobile();

  return (
    <Modal className='relative w-[85%] max-w-4xl h-8/12 bg-white rounded-xl' isOpen={isOpen} bgClose={closeModal}>
      {isMobile ? (
        <ModalCloseButton top={12} right={12} size='sm' onClose={closeModal} />
      ) : (
        <ModalCloseButton top={16} right={16} size='md' onClose={closeModal} />
      )}
      <div className='w-full sm:max-w-xl lg:max-w-3xl my-4 mx-auto px-4'>
        <h1 className='relative w-fit text-xl md:text-2xl font-semibold text-center px-2 pb-0.5 mx-auto mb-8'>
          {title}
          <span className='absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-300 via-teal-200 to-blue-300 rounded'></span>
          {/* <span className='absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-300 via-pink-200 to-purple-300 rounded'></span> */}
        </h1>
        <div className="relative w-full max-w-[600px] aspect-[16/9] mx-auto mb-8">
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover border border-gray-400 rounded-xl"
          />
        </div>
        {children}
      </div>
    </Modal>
  )
}

export function PMSection({
  heading,
  children
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className='border-t border-gray-300 pt-4 mb-4'>
      <h2 className='text-lg font-semibold mb-4'>{heading}</h2>
      {children}
    </div>
  )
}

export function PMParagraph({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <p className='text-sm'>{children}</p>
  )
}

export function PMList({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ul className='list-disc ml-5'>
      {children}
    </ul>
  )
}