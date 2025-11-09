// Reference: https://mathlandscape.com/latex-bib/
// BibTeXがどこからかダウンロードできるなら，それをTS形式に変換する関数をつくるのもあり

import { UBI87Award } from "./awardModals"

export interface Research {
    id: string
    publications: {
        bibtex: boolean
        paper: boolean
        poster: boolean
        slide: boolean
    }
    entry: 'article' | 'inproceedings' | 'thesis'
    title: string
    author?: string
    bookTitle: string
    volume?: string | number
    number?: string | number
    pages: string
    url?: string
    date: string
    location?: string
    award?: Award[]
}

interface Award {
    name:   string
    url?:   string
    modal?: React.ComponentType<any>
}

export const internationalConferences: Research[] = [
    {
        id: 'BraiLoop_202501_ICDCN-MUSICAL',
        publications: {
            bibtex: true,
            paper: false,
            poster: false,
            slide: false,
        },
        entry: 'inproceedings',
        title: 'Tactile Paving Detection and Classification Method Based on Cyclist-Participatory Road Image Sensing',
        author: 'Yuto Matsuda, Yuki Matsuda',
        bookTitle: 'ICDCN MUSICAL 2026',
        number: 'xx',
        pages: '1--6',
        date: '2026-1-xx',
        location: 'Nara Kasugano International Forum IRAKA, Nara, Japan',
    }
];

export const domesticConferences: Research[] = [
    // {
    //     id: 'BraiLoop_202601_SeMI',
    //     publications: {
    //         bibtex: true,
    //         paper: true,
    //         poster: false,
    //         slide: true,
    //     },
    //     entry: 'inproceedings',
    //     title: '自転車ユーザ参加型路面画像センシングにおける点字ブロック検出性能向上手法の検討',
    //     author: '松田悠斗, 松田裕貴',
    //     bookTitle: 'xxx',
    //     volume: 'xxx',
    //     pages: 'xxx',
    //     url: 'xxx',
    //     date: '2026-1-26',
    //     location: '大分県由布市 湯布院保養所',
    // },
    {
        id: 'BraiLoop_202509_IPSJ-Kansai',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: true,
        },
        entry: 'inproceedings',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック配置情報の収集手法の検討',
        author: '松田悠斗, 松田裕貴',
        bookTitle: '2025年度 情報処理学会関西支部 支部大会 講演論文集',
        volume: 2025,
        pages: '1--8',
        url: 'https://ipsj.ixsq.nii.ac.jp/records/2004479',
        date: '2025-9-28',
        location: 'オンライン',
    },
    {
        id: 'ytv_202509_UBI',
        publications: {
            bibtex: true,
            paper: true,
            poster: true,
            slide: true,
        },
        entry: 'inproceedings',
        title: '非特定テレビ視聴履歴データを用いた就寝前後における視聴チャンネルの関係性分析',
        author: '松田悠斗, 林虎太朗, 松田裕貴, 池尻拓巨, 横田哲弥, 松田裕貴',
        bookTitle: '研究報告ユビキタスコンピューティングシステム（UBI）',
        number: 49,
        volume: '2025-UBI-87',
        pages: '1--8',
        url: 'https://ipsj.ixsq.nii.ac.jp/records/2003948',
        date: '2025-9-18',
        location: '富山県富山市 富山県民会館',
        award: [
            {
                name: 'UBIヤングリサーチャー賞',
                url: 'https://sigubi.ipsj.or.jp/excellent/',
            },
            {
                name: 'デモ・ポスターコミュニケーション部門賞',
                modal: UBI87Award,
            },
        ],
    },
];

export const theses: Research[] = [
    {
        id: 'coropita_202201_okako',
        publications: {
            bibtex: false,
            paper: true,
            poster: false,
            slide: true,
        },
        entry: 'thesis',
        title: 'コロナ予防アプリの制作',
        bookTitle: '岡山県立岡山工業高等学校 卒業研究発表',
        pages: '1--4',
        date: '2022-1-21',
    }
];