import hkCMSImg from '@/assets/heiterkeit-cms.png';
import sleemuuPRImg from '@/assets/sleemuu-PR.webp';
import sushiVideo from '@/assets/sushi-king.mp4';
import shMethodImg from '@/assets/web-syntaxhighlighter_method.png';
import Link from '@/components/link';
import { PMList, PMParagraph, PMSection, ProductModal } from "./components";

export function CoropitaModal({
  isOpen,
  closeModal,
  thumbnail
}: {
  isOpen: boolean
  closeModal: () => void
  thumbnail: string
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='コロピタ' thumbnail={thumbnail}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          当時蔓延していたコロナの予防を促進することを目的としたWebアプリです。
          ゲーミフィケーションにより日々の体調管理を促します。
          高3の卒業研究で制作しました。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>Ruby on Rails</li>
          <li>jQuery</li>
          <li>Ajax</li>
          <li>SQLite</li>
        </PMList>
      </PMSection>
   </ProductModal>     
  )
}

export function BugttoruModal({
  isOpen,
  closeModal,
  thumbnail
}: {
  isOpen: boolean
  closeModal: () => void
  thumbnail: string
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='バグっとる' thumbnail={thumbnail}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          入った虫を自動で捕まえるIoT虫カゴです。
          画像認識技術により虫を検知します。
          2023年度Web×IoTメイカーズチャレンジにて制作しました。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>Python</li>
          <li>Raspberry Pi</li>
        </PMList>
      </PMSection>
      <PMSection heading='受賞'>
        <PMParagraph>英田エンジニアリング賞</PMParagraph>
      </PMSection>
   </ProductModal>     
  )
}

export function HeiterkeitModal({
  isOpen,
  closeModal,
  thumbnail
}: {
  isOpen: boolean
  closeModal: () => void
  thumbnail: string
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='Heiterkeit' thumbnail={thumbnail}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          プログラミングや語学について発信する自作ブログです。
          フロントに加えてCMSも制作し、独自のマークダウンで様々なReactコンポーネントを使用可能にしました。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>Next.js</li>
          <li>ConoHa VPS</li>
        </PMList>
      </PMSection>
      <PMSection heading='CMS'>
        <img
          src={hkCMSImg}
          alt='Heiterkeit CMS'
          className='w-full border border-gray-400 rounded-lg mx-auto mb-8'
        />
      </PMSection>
      <PMSection heading='リンク'>
        <Link to='https://heiterkeit.jp/'>Heiterkeit</Link>
      </PMSection>
   </ProductModal>     
  )
}

export function SushiKingModal({
  isOpen,
  closeModal,
  thumbnail
}: {
  isOpen: boolean
  closeModal: () => void
  thumbnail: string
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='SUSHI KING' thumbnail={thumbnail}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          Webブラウザ上で動作するおすし屋さんシミュレーションゲームです。
          大学の講義で6人チームで作成しました。
          ライブラリ等は一切使わず、Vanilla JSで作成しています。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>JavaScript</li>
        </PMList>
      </PMSection>
      <PMSection heading='デモ動画'>
        <video
          src={sushiVideo}
          controls
          muted
          className='w-full border border-gray-400 rounded-lg mx-auto mb-8'
        />
      </PMSection>
      <PMSection heading='リンク'>
        <Link to='https://prapro-ou.github.io/FILO/production'>SUSHI KING</Link>
      </PMSection>
   </ProductModal>     
  )
}

export function WebSyntaxHighlighterModal({
  isOpen,
  closeModal,
  thumbnail
}: {
  isOpen: boolean
  closeModal: () => void
  thumbnail: string
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='Web SyntaxHighlighter' thumbnail={thumbnail}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          Webコンテンツへの組み込みを目的として作成したVSCode風シンタックスハイライタです。
          簡易的なWYSIWYGエディタも一緒に実装しました。
          対応ソース言語はBash, C, HTML, CSS/SCSSの4つですが、随時アップデート予定です。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>TypeScript</li>
          <li>webpack</li>
        </PMList>
      </PMSection>
      <PMSection heading='実装方針'>
        <img
          src={shMethodImg}
          alt='Web SyntaxHighlighter 実装方針'
          className='w-full border border-gray-400 rounded-lg mx-auto mb-8'
        />
      </PMSection>
      <PMSection heading='リンク'>
        <Link to='https://yuto-matsuda.github.io/web-syntax-highlighter/'>Web SyntaxHighlighter</Link>
      </PMSection>
   </ProductModal>     
  )
}

export function CertificateExamModal({
  isOpen,
  closeModal,
  thumbnail
}: {
  isOpen: boolean
  closeModal: () => void
  thumbnail: string
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='情報技術検定1級対策モジュール' thumbnail={thumbnail}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          教育実習中に開発した、情報技術検定1級対策用の補助教材です。
          クイックソート等のアルゴリズムのステップ実行が可能で、ミスの多いトレースを可視化することで直感的な理解を図ります。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>React</li>
        </PMList>
      </PMSection>
      <PMSection heading='リンク'>
        <Link to='https://yuto-matsuda.github.io/certificate-exam-tracer/'>情報技術検定1級対策モジュール</Link>
      </PMSection>
   </ProductModal>     
  )
}

export function SleemuuModal({
  isOpen,
  closeModal,
  thumbnail
}: {
  isOpen: boolean
  closeModal: () => void
  thumbnail: string
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='Sleemuu' thumbnail={thumbnail}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          チームみんなで「良い睡眠」を取ることでペットを育てる、協力型睡眠改善アプリです。
          iOSアプリに加えて管理者用のWebアプリも提供しており、チームメンバーの管理や睡眠レポート作成機能を有しています。
          教育機関がこれらの機能を活用することで、団体での睡眠改善を図ります。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>React Native</li>
          <li>Expo</li>
          <li>React</li>
          <li>Hono</li>
        </PMList>
      </PMSection>
      <PMSection heading='アプリPR'>
        <img
          src={sleemuuPRImg}
          alt='Sleemuu PR'
          className='w-full border border-gray-400 rounded-lg mx-auto mb-8'
        />
      </PMSection>
   </ProductModal>     
  )
}