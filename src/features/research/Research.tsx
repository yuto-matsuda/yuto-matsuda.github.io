import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion';
import type { Research } from '@/features/research/contents';
import useModal from '@/hooks/useModal';
import { faBookOpen, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Research({
  title,
  works,
  color,
}: {
  title: string
  works: Research[]
  color: 'blue' | 'purple' | 'green'
}) {
  const [isOpen, openModal, closeModal] = useModal();

  const researchNum = works.length;

  const getDateStr = (title: string, date: string) => {
    const isJapanese = (str: string) => {
      return /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF01-\uFF60\uFFE0-\uFFE6]/.test(str);
    }

    const englishMonthDict: Record<string, string> = {
      '1':  'Jan.',
      '2':  'Feb.',
      '3':  'Mar.',
      '4':  'Apr.',
      '5':  'May',
      '6':  'Jun.',
      '7':  'Jul.',
      '8':  'Aug.',
      '9':  'Sep.',
      '10': 'Oct.',
      '11': 'Nov.',
      '12': 'Dec.',
    };

    const [year, month, day] = date.split('-');

    return isJapanese(title) ? `${year}年${month}月${day}日` : `${englishMonthDict[month]} ${day}th, ${year}`;
  }

  const themeColors = {
    blue:   'text-mga-blue',
    purple: 'text-mga-purple',
    green:  'text-mga-green',
  };  

  return (
    <div className='border border-gray-300 rounded-xl py-4 px-4 md:px-8 space-y-4'>
      <h2 className='text-xl text-mga-black text-center font-semibold'>{title}</h2>
      {works.map((research, i) => 
        <div key={i} className='flex gap-2 w-full text-sm md:text-base'>
          <div className='select-none'>
            {String(i + 1).padStart(String(researchNum).length, '0')}.
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div>
              <p className={`text-sm md:text-base font-semibold ${themeColors[color]}`}>{research.title}</p>
              <Author author={research.author} />
              <p className='text-sm '>
                <span className='pr-1'>{research.bookTitle},</span>
                {research.volume && <span className='pr-1'>Vol.{research.volume},</span>}
                {research.number && <span className='pr-1'>{typeof(research.number) === 'number' && 'No.'}{research.number},</span>}
                <span className='pr-1'>pp.{research.pages},</span>
                {research.location && <span className='pr-1'>{research.location},</span>}
                <span>{getDateStr(research.title, research.date)}</span>
              </p>
            </div>
            {research.awards && (
              <div className='flex gap-2 flex-wrap'>
                {research.awards.map(({ name, url, modal: Modal }, i) => {
                  const className = 'w-fit text-xs text-mga-3 font-semibold bg-radial-light rounded-2xl py-0.5 px-2'
                  if (url) {
                    return <a key={i} href={url} target='_blank' className={className}>{name}</a>
                  } else if (Modal) {
                    return (
                      <React.Fragment key={i}>
                        <button className={`cursor-pointer ${className}`} onClick={() => openModal(research.id)}>{name}</button>
                        <Modal isOpen={isOpen(research.id)} closeModal={closeModal} />
                      </React.Fragment>
                    )
                  } else {
                    return <div key={i} className={className}>{name}</div>
                  }
                })}
              </div>
            )}
            <div className='flex flex-col gap-2 w-full'>
              <div className='flex gap-2 flex-wrap w-full'>
                <Accordion groupId={color}>
                  <AccordionItem id={research.id}>
                    <AccordionTrigger>
                      <PublishButton id={research.id} type='bibtex' publish={research.publications.bibtex}>BibTeX</PublishButton>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
                <PublishButton id={research.id} type='paper' publish={research.publications.paper}>Paper</PublishButton>
                <PublishButton id={research.id} type='poster' publish={research.publications.poster}>Poster</PublishButton>
                <PublishButton id={research.id} type='slide' publish={research.publications.slide}>Slide</PublishButton>
              </div>
              {research.publications.bibtex && 
                <Accordion groupId={color}>
                  <AccordionItem id={research.id}>
                    <AccordionContent className='bg-gray-100 rounded-xl'>
                      <BibTeX research={research} />
                    </AccordionContent>
                  </AccordionItem>  
                </Accordion>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Author({
  author
}: {
  author: string | undefined
}) {
  if (!author) return <></>
  
  const bolds = ['松田悠斗', 'Yuto Matsuda']
  const pattern = new RegExp(`(${bolds.join('|')})`, 'gi');
  const parts = author.split(pattern);
  return (
    <p className='text-sm'>
      {parts.map((part, i) =>
        bolds.some(b => b === part) ? (
          <strong key={i}>{part}</strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

function PublishButton({
  id,
  type,
  publish = false,
  children
}: {
  id: string
  type: 'bibtex' | 'paper' | 'poster' | 'slide'
  publish?: boolean
  children: React.ReactNode
}) {
  const dir = type === 'bibtex' ? type : type + 's';
  const disabledStyle = 'opacity-50 cursor-not-allowed pointer-events-none';

  return type === 'bibtex' ? (
    <button
      className={`flex items-center bg-mga-3 text-xs md:text-sm text-white rounded-lg px-1 md:px-2 py-1 transition-color duration-300 hover:bg-mga-1 cursor-pointer ${!publish && disabledStyle}`}
    >
        <FontAwesomeIcon icon={faBookOpen} className='pr-1' />
        {children}
    </button>
  ) : (
    <a
      href={`/portfolio/${dir}/${id}.pdf`}
      target='_blank'
      className={`flex items-center bg-mga-3 text-xs md:text-sm text-white rounded-lg px-1 md:px-2 py-1 transition-color duration-300 hover:bg-mga-1 ${!publish && disabledStyle}`}
    >
        <FontAwesomeIcon icon={faFilePdf} className='pr-1' />
        {children}
    </a>
  )
}

export function BibTeX({
  research
}: {
  research: Research
}) {
  let bibtex = `@${research.entry}{bib:${research.id},\n`;
  bibtex += `\tauthor={${research.author ? research.author.replaceAll(',', ' and') : '松田悠斗'}},\n`;
  bibtex += `\ttitle={${research.title}},\n`;
  bibtex += `\tbooktitle={${research.bookTitle}},\n`;
  if (research.volume) bibtex += `\tvolume={${research.volume}},\n`;
  if (research.number) bibtex += `\tnumber={${research.number}},\n`;
  bibtex += `\tyear={${research.date.split('-')[0]}},\n`;
  bibtex += `\tpages={${research.pages}},\n`;
  if (research.url) bibtex += `\turl={${research.url}}\n`;
  bibtex += '}';

  return (
    // なぜかw-16をつけないとpaddingをはみだす(値はなんでもいい)
    <pre className='text-xs md:text-sm font-mono px-4 py-2 w-16'>
      <code>{bibtex}</code>
    </pre>
  )
}