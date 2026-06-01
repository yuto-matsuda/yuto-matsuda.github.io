export interface EducationalBackground {
    period: string
    affiliation: string[]
}

export interface AwardsRecieved {
    date: string
    awards: string[]
}

export const eduBg: EducationalBackground[] = [
    {
        period: '2019.4-2022.3',
        affiliation: ['岡山県立岡山工業高等学校 情報技術科'],
    },
    {
        period: '2022.4-2026.3',
        affiliation: [
            '岡山大学 工学部 工学科 情報・電気・数理データサイエンス系 情報工学コース',
            'コンヴィヴィアルコンピューティング研究室',
        ],
    },
    {
        period: '2023.8-2023.9',
        affiliation: ['Ruhr Universität Bochum / ZFA (Summer School 2023)'],
    },
    {
        period: '2026.4-now',
        affiliation: [
            '岡山大学大学院 環境生命自然科学研究科 計算機科学コース 博士前期課程',
            'コンヴィヴィアルコンピューティング研究室',
        ],
    },
];

export const awardsRecieved: AwardsRecieved[] = [
    {
        date: '2021.2.12',
        awards: ['第65回 情報技術検定 特別表彰'],
    },
    {
        date: '2021.8.4',
        awards: ['岡山県高等学校職業教育技術顕彰'],
    },
    {
        date: '2022.2.3',
        awards: ['岡山県高等学校工業教育技術顕彰'],
    },
    {
        date: '2022.2.8',
        awards: [
            '岡山県立岡山工業高等学校 情報技術科 優等賞',
            'ジュニアマイスター顕彰 全国工業高等学校長協会理事長賞 (121pt)',
        ],
    },
    {
        date: '2023.11.12',
        awards: ['2023年度Web×IoTメイカーズチャレンジ 英田エンジニアリング賞'],
    },
    {
        date: '2024.4.24',
        awards: ['岡山大学工学部 令和5年度学業成績優秀賞'],
    },
    {
        date: '2024.4.30',
        awards: ['岡山大学工学部 令和6年度学業成績優秀賞'],
    },
    {
        date: '2025.9.13',
        awards: [
            'Tornadoハッカソン2025 優秀賞',
            'Tornadoハッカソン2025 チームラボ賞'
        ],
    },
    {
        date: '2025.9.18',
        awards: [
            '第87回UBI研究会 UBIヤングリサーチャー賞',
            '第44回CDS研究会 デモ・ポスターコミュニケーション部門賞'
        ],
    },
    {
        date: '2025.11.1',
        awards: ['第8回 金光賞'],
    },
    {
        date: '2026.5.15',
        awards: ['第207回DPS研究会 優秀ポスター賞'],
    },
    {
        date: '2026.5.31',
        awards: ['TERACKATHON 10th カタルシス賞'],
    },
];