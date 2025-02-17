import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Link, Outlet, useParams } from 'react-router-dom'
import { Col, Row, Wrap, Title, Header1, Description } from '../../components/atomic'
import slogan from '../../assets/mainpage_1.jpg'
import instagram from '../../assets/mainpage_instagram.jpg'
import youtube from '../../assets/mainpage_youtube.jpg'
import logo from '../../assets/implude.svg'
import NewsCard from './NewsCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'
import NewsThumbsList from './NewsThumbs.json'

const { recruit } = NewsThumbsList

const mainCss = {
  container : {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 5rem',
    flexDirection: 'Column',
    gap: '13.75rem',
    alignItems: 'center',
  },
  slogansns : {
    display: 'flex',
    gap: '2vw',
    width: '90vw'
  },
  slogan: {
    flexGrow: '2',
    position: 'relative'
  },
  sns: {
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'Column',
    gap: '2vw',
  },
  img: {
    borderRadius: '30px',
    width: '100%'
  },
  sloganMent: {
    color: 'white',
    fontSize: '3.3vw',
    fontWeight: '700',
    position: 'relative',
    top: '67.5%',
    left: '7%',
    height: '0'
  },
  message: {
    background: 'var(--gray-0)',
    border: '1px solid var(--gray-100)',
    borderRadius: '20px',
    fontSize: '5vw',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '8rem 0',
    margin: '0 3rem'
  },
  blue: {
    color: 'var(--brand-500)'
  },
}

const news = {
  title: {
    fontSize: '4rem',
    fontWeight: '700',
    textAlign: 'center'
  },
  ulContainer: {
    overflowX: 'hidden',
    display: 'flex',
    justifyContent: 'center'
  },
  ul: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
    marginTop: '7.5rem',
    width: '1920px'
  },
  li: {
    width: '297px',
    height: '528px',
    flex: '1 0 297px',
    background: 'var(--gray-100)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    pointerEvents: 'none'
  },
  mainli: {
    width: '387px',
    height: '688px',
    flex: '1 0 387px',
    background: 'var(--gray-100)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden'
  }
}

// 빈 뉴스
// {
//   imgSrc : null,
//   title1 : '',
//   title2 : '',
//   link : '',
//   linkMsg : '',
//   color : ''
// },

const newsData = [
  {
    imgSrc : null,
    title1 : '',
    title2 : '',
    link : '',
    linkMsg : '',
    color : ''
  },
  {
    imgSrc : null,
    title1 : '',
    title2 : '',
    link : '',
    linkMsg : '',
    color : ''
  },
  { // 맨 처음 메인으로 보여줄 뉴스
    imgSrc : recruit,
    title1 : '임플루드',
    title2 : '신규 부원 모집!!',
    link : 'https://surfing.dimigo.in/circle/65e0b0a9160ba664e8e7518e/',
    linkMsg : '지원 바로가기',
    color : 'var(--caution-500)'
  },
  {
    imgSrc : null,
    title1 : '',
    title2 : '',
    link : '',
    linkMsg : '',
    color : ''
  },
  {
    imgSrc : null,
    title1 : '',
    title2 : '',
    link : '',
    linkMsg : '',
    color : ''
  },
]

const mainNewsIdx = 2

export default function MainPage() {

  const [newsDataState, setMyArray] = useState([...newsData]);
  

  function newsRight() {
    if(newsDataState[3].imgSrc) {
      const newArray = [...newsDataState.slice(1), newsDataState[0]];
      setMyArray(newArray);
    } else {
      alert('다음 뉴스가 존재하지 않습니다.')
    }
  }

  function newsLeft() {
    if(newsDataState[1].imgSrc) {
      const newArray = [newsDataState[newsDataState.length - 1], ...newsDataState.slice(0, -1)];
      setMyArray(newArray);
    } else {
      alert('다음 뉴스가 존재하지 않습니다.')
    }
  }

  const layout1400 = useMediaQuery({ query: '(max-width: 1400px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' })
  const isBarHastobeThin = useMediaQuery({ query: '(max-width: 800px)' })
  const layout768 = useMediaQuery({ query: '(max-width: 768px)' })
  const isArrowHastogoUp = useMediaQuery({ query: '(max-width: 560px)' })

  if(isTabletOrMobile) {
    mainCss.container = {
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem',
      flexDirection: 'Column',
      gap: '7rem'
    }
    mainCss.slogan = {
      flexGrow: '2',
      position: 'relative',
      marginBottom: '2vw',
      width: '100%'
    }
    mainCss.slogansns = {
      width: 'calc(100vw - 4rem)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }
    mainCss.img = {
      borderRadius: '15px',
      width: '100%'
    }
    mainCss.sns = {
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'row',
      gap: '2vw',
    }
    mainCss.sloganMent = {
      color: 'white',
      fontSize: '5vw',
      fontWeight: '700',
      position: 'relative',
      height: '0',
      top: '31vw',
      left: '3vw'
    }
    mainCss.message = {
      background: 'var(--gray-0)',
      border: '1px solid var(--gray-100)',
      borderRadius: '20px',
      fontSize: '8vw',
      textAlign: 'center',
      fontWeight: 'bold',
      padding: '8rem 0',
      margin: '0 3rem'
    }
    news.title = {
      fontSize: '3rem',
      fontWeight: '700',
      textAlign: 'center'
    }
    mainCss.first = {
      fontSize: '100px',
    }
  } else {
    mainCss.container = {
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem 5rem',
      flexDirection: 'Column',
      gap: '13.75rem'
    }
    mainCss.slogansns = {
      display: 'flex',
      gap: '2vw',
      width: '90vw'
    }
    mainCss.img = {
      borderRadius: '30px',
      width: '100%'
    }
    mainCss.slogan = {
      flexGrow: '2',
      position: 'relative'
    },
    mainCss.sns = {
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'Column',
      gap: '2vw',
    },
    mainCss.sloganMent = {
      color: 'white',
      fontSize: '3.3vw',
      fontWeight: '700',
      position: 'relative',
      top: '67.5%',
      left: '7%',
      height: '0'
    }
    mainCss.message = {
      background: 'var(--gray-0)',
      border: '1px solid var(--gray-100)',
      borderRadius: '20px',
      fontSize: '5vw',
      textAlign: 'center',
      fontWeight: 'bold',
      padding: '8rem 0',
      margin: '0 3rem'
    }
    news.title = {
      fontSize: '4rem',
      fontWeight: '700',
      textAlign: 'center'
    }   
  }

  function messageBar(n) {
    const animation = keyframes`
      0% {
        width: ${isTabletOrMobile ? `${n / 32}rem` : `${n / 24}rem`}
      }
      50% {
        width: ${isTabletOrMobile ? `${n / 32}rem` : `${n / 24 + 2}rem`}
      }
      100% {
        width: ${isTabletOrMobile ? `${n / 32}rem` : `${n / 24}rem`}
      }
    `
    const ReturnSpan = styled.span`
      width: ${isTabletOrMobile ? `${n / 32}rem` : `${n / 24}rem`};
      height: ${isBarHastobeThin ? '0.5rem' : '0.7rem'};
      background: black;
      display: inline-block;
      position: relative;
      bottom: 1.5vw;
      animation: ${animation} 3s ease-in-out infinite;
    `
    return <ReturnSpan />
  }

  const common = `
    transform: scale(1.7) ${isBarHastobeThin ? 'translateY(2.1rem)' : 'translateY(20.5rem)'};
    position: relative;
    z-index: 3;
    cursor: pointer;
    border-radius: 20px;
    padding: 0.3rem;
    box-sizing: content-box;
  `

  const Right = styled(ArrowRight)`
    ${common}
    right: ${isBarHastobeThin ? (layout768 ? (isArrowHastogoUp ? '-10.5rem' : '-20.5rem') : '-11.5rem') : '-15.5rem'};
  `

  const Left = styled(ArrowLeft)`
    ${common}
    left: ${isBarHastobeThin ? (layout768 ? (isArrowHastogoUp ? '-10.5rem' : '-20.5rem') : '-11.5rem') : '-15.5rem'};
  `

  return (
    <div style={mainCss.container}>
      <div style = {mainCss.message}>
        당신의 상상이 현실이 되도록<br />
        {messageBar(200)} <span style = {mainCss.blue}>IMPLUDE</span>
      </div>
      <div style={mainCss.message}> {/* 임플루드 문구 부분 244 */}
        YOUR {messageBar(244)} <span style={mainCss.blue}>(IM)</span>PACT <br />
        <span style={mainCss.blue}>(P)</span>ASSION {messageBar(96)} <span style={mainCss.blue}>(L)</span>EARN {messageBar(132)} <br />
        FUT<span style={mainCss.blue}>(U)</span>RE {messageBar(188)} <span style={mainCss.blue}>(D)</span>REAM <br />
        {messageBar(114)} POTENTIAL {messageBar(62)} T<span style={mainCss.blue}>(E)</span>AM
      </div>
    </div>
  )
}
