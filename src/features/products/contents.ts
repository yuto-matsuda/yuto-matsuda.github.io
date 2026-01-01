import buguttoru from '@/assets/buguttoru.jpg';
import certificateExamTracer from '@/assets/certificate-exam-tracer.png';
import coropita from '@/assets/coropita.png';
import heiterkeit from '@/assets/heiterkeit.png';
import sleemuu from '@/assets/sleemuu.png';
import sushiking from '@/assets/sushiking.png';
import webSyntaxHighlighter from '@/assets/web-syntaxhighlighter.png';
import { BugttoruModal, CertificateExamModal, CoropitaModal, HeiterkeitModal, SleemuuModal, SushiKingModal, WebSyntaxHighlighterModal } from './modals';

export interface Product {
    id: string
    title: string
    img: string
    description: string
    tags: string[]
    modal: React.ComponentType<any>
    awards?: string[]
}

export const products: Product[] = [
    {
        id: 'coropita',
        title: 'コロピタ',
        img: coropita,
        description: 'ゲーミフィケーションでコロナ予防を促進。高3の卒業研究で制作。',
        tags: ['Ruby on Rails', 'jQuery'],
        modal: CoropitaModal,
    },
    {
        id: 'bugttoru',
        title: 'バグっとる',
        img: buguttoru,
        description: '入った虫を自動で捕まえるIoT虫カゴ。(2023年度Web×IoTメイカーズチャレンジ)',
        tags: ['Python', 'Raspberry Pi'],
        modal: BugttoruModal,
        awards: ['other'],
    },
    {
        id: 'heiterkeit',
        title: 'Heiterkeit',
        img: heiterkeit,
        description: 'プログラミング・語学を中心に発信するブログ。オリジナルCMSも作成。',
        tags: ['Next.js', 'ConoHa VPS'],
        modal: HeiterkeitModal,
    },
    {
        id: 'sushi-king',
        title: 'SUSHI KING',
        img: sushiking,
        description: 'おすし屋さんシミュレーションゲーム。大学講義でのチーム制作プロダクト。',
        tags: ['JavaScript', 'オブジェクト指向'],
        modal: SushiKingModal,
    },
    {
        id: 'web-syntax-highlighter',
        title: 'Web SyntaxHighlighter',
        img: webSyntaxHighlighter,
        description: 'VSCode風シンタックスハイライタ。独自のアルゴリズムでソース言語を解析。',
        tags: ['TypeScript', 'webpack'],
        modal: WebSyntaxHighlighterModal,
    },
    {
        id: 'certificate-exam-tracer',
        title: '情報技術検定1級対策モジュール',
        img: certificateExamTracer,
        description: '教育実習中の補助教材用に開発。ソートアルゴリズムのステップ実行等が可能。',
        tags: ['React', 'ソートアルゴリズム'],
        modal: CertificateExamModal,
    },
    {
        id: 'sleemuu',
        title: 'Sleemuu',
        img: sleemuu,
        description: '協力型睡眠改善アプリ。(Tornadoハッカソン2025)',
        tags: ['React Native', 'React'],
        awards: ['silver', 'other'],
        modal: SleemuuModal,
    },
    // {
    //     id: 'brailoop',
    //     title: 'BraiLoop',
    //     img: sleemuu,
    //     description: 'カメラ付き自転車で走るだけ！街中の点字ブロックデータを収集。',
    //     tags: ['YOLO11', 'M5Stack'],
    //     modal: SleemuuModal,
    // },
    // {
    //     id: 'mapotheke',
    //     title: 'MAPotheke',
    //     img: sleemuu,
    //     description: 'Apotheke(ドイツの薬局)を集める、それだけのアプリです。',
    //     tags: ['YOLO12', 'React'],
    //     modal: SleemuuModal,
    // },
];