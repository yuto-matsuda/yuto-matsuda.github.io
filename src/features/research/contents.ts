// Reference: https://mathlandscape.com/latex-bib/
import { UBI87Award } from "./awardModals"

export interface Research {
    id: string
    publications: {
        bibtex: boolean
        paper: boolean
        poster: boolean
        slide: string | null
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
    awards?: Award[]
}

interface Award {
    name:   string
    url?:   string
    modal?: React.ComponentType<any>
}

export const journalPapers: Research[] = [
    {
        id: 'BraiLoop_202603_xxx',
        publications: {
            bibtex: false,
            paper: false,
            poster: false,
            slide: null,
        },
        entry: 'article',
        title: 'Tactile Paving Detection and Classification Method Based on Cyclist-Participatory Road Image Sensing',
        author: 'Yuto Matsuda, Yuki Matsuda',
        bookTitle: 'IEEE Access',
        pages: 'xxx',
        url: 'xxx',
        date: '2026',
    }
];

export const internationalConferences: Research[] = [
    {
        id: 'BraiLoop_202601_ICDCN-MUSICAL',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/2aw9vM6TdZSr5v?hostedIn=slideshare&page=upload',
        },
        entry: 'inproceedings',
        title: 'Tactile Paving Detection and Classification Method Based on Cyclist-Participatory Road Image Sensing',
        author: 'Yuto Matsuda, Yuki Matsuda',
        bookTitle: 'Companion Proceedings of the 27th International Conference on Distributed Computing and Networking',
        pages: '78--83',
        url: 'https://doi.org/10.1145/3737611.3776614',
        date: '2026-1-6',
        location: 'Nara Kasugano International Forum IRAKA, Nara, Japan',
    }
];

export const domesticConferences: Research[] = [
    // {
    //     id: 'ytv_202605_DPS',
    //     publications: {
    //         bibtex: true,
    //         paper: true,
    //         poster: false,
    //         slide: null,
    //     },
    //     entry: 'inproceedings',
    //     title: '非特定テレビ視聴履歴データを用いた朝帯視聴の重要性分析',
    //     author: '松田悠斗, 林虎太朗, 松田裕貴, 池尻拓巨, 横田哲弥, 松田裕貴',
    //     bookTitle: 'xxx',
    //     // volume: 127,
    //     // number: 325,
    //     pages: '',
    //     url: '',
    //     date: '2026-5-13',
    //     location: '沖縄県 宮古島市 宮古島市未来創造センター',
    // },
    {
        id: 'BraiLoop_202601_SeMI',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/fomQ0v6GMtDDoi?hostedIn=slideshare&page=upload',
        },
        entry: 'inproceedings',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック検出における性能向上方法の模索',
        author: '松田悠斗, 松田裕貴',
        bookTitle: '電子情報通信学会技術研究報告, センサネットワークとモバイルインテリジェンス研究会（SeMI）',
        volume: 125,
        number: 325,
        pages: '79--84',
        url: 'https://ken.ieice.org/ken/paper/20260123dcRB/',
        date: '2026-1-23',
        location: '大分県由布市 三菱電機 湯布院保養所',
    },
    {
        id: 'ytv_hayashi_202601_SeMI',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: null,
        },
        entry: 'inproceedings',
        title: '非特定テレビ視聴履歴データの視聴時間帯特徴に基づく視聴行動クラスタリング分析',
        author: '林虎太朗, 松田悠斗, 松田裕貴, 池尻拓巨, 横田哲弥, 松田裕貴',
        bookTitle: '電子情報通信学会技術研究報告, センサネットワークとモバイルインテリジェンス研究会（SeMI）',
        volume: 125,
        number: 325,
        pages: '1--6',
        url: 'https://ken.ieice.org/ken/paper/20260122ZcqZ/',
        date: '2026-1-22',
        location: '大分県由布市 三菱電機 湯布院保養所',
    },
    {
        id: 'BraiLoop_202509_IPSJ-Kansai',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/m6JmaqnjHfQufV?hostedIn=slideshare&page=upload',
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
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/1hOM6ZIFCOPZ4f?hostedIn=slideshare&page=upload',
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
        awards: [
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
        id: 'Brailoop_202602_bthesis',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: null,
        },
        entry: 'thesis',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック検出・分類手法の提案と評価',
        bookTitle: '岡山大学 工学部 特別研究報告書',
        pages: '1--24',
        date: '2026-2-9',
    },
    {
        id: 'coropita_202201_okako',
        publications: {
            bibtex: false,
            paper: true,
            poster: false,
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/J4C9CukwhGLvAp',
        },
        entry: 'thesis',
        title: 'コロナ予防アプリの制作',
        bookTitle: '岡山県立岡山工業高等学校 卒業研究発表',
        pages: '1--4',
        date: '2022-1-21',
    },
];