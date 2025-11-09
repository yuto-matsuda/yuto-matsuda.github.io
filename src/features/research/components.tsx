import { Modal } from "@/components/modal";

export function ResearchAwardModal({
  isOpen,
  closeModal,
  title,
  certificate,
}: {
  isOpen: boolean
  closeModal: () => void
  title: string
  certificate: string
}) {
  return (
    <Modal className='relative bg-white rounded-xl p-4' isOpen={isOpen} bgClose={closeModal} scrollOff>
      <img
        src={certificate}
        alt={title}
        className='max-w-[80vw] max-h-[80vh] object-contain border border-gray-400 mx-auto pointer-events-none'
      />
    </Modal>
  )
}