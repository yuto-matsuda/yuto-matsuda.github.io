import ubiPosterAward from '@/assets/awards/ytv_202509_UBI_poster.png';
import { ResearchAwardModal } from './components';

export function UBI87Award({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ResearchAwardModal isOpen={isOpen} closeModal={closeModal} title='デモ・ポスターコミュニケーション賞' certificate={ubiPosterAward} />
  )
}