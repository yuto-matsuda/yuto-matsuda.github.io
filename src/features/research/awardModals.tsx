import UBI87PosterAward from '@/assets/awards/ytv_202509_UBI_poster.png';
import DPS207PosterAward from '@/assets/awards/ytv_202605_DPS_poster.png';
import { ResearchAwardModal } from './components';

export function UBI87Award({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ResearchAwardModal isOpen={isOpen} closeModal={closeModal} title='デモ・ポスターコミュニケーション賞' certificate={UBI87PosterAward} />
  )
}

export function DPS207Award({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ResearchAwardModal isOpen={isOpen} closeModal={closeModal} title='優秀ポスター賞' certificate={DPS207PosterAward} />
  )
}