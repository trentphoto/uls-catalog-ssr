import $ from 'jquery'
import { TweenMax, Elastic } from 'gsap'

const ease = Elastic.easeOut.config(0.25, 1)

export const pageIntro = (node: HTMLElement, pathname: string) => {
  switch (pathname) {
    case '/':
      homePageIntro()
    default:
      defaultIntro(node)
  }
}

export const pageOutro = (node: HTMLElement) => {
  // first, scroll to the top of the page if we're scrolled more than 100px
  const doc = document.documentElement
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
  if (top > 100) {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      350
    )
  }

  // fade the page out
  TweenMax.fromTo(node, 0.4, { opacity: 1 }, { opacity: 0, ease })
}

// page-specific animations

const homePageIntro = () => {
  TweenMax.staggerFromTo(
    $('.FeatureCard'),
    0.3,
    { opacity: 0, transform: 'translateY(10px)' },
    { opacity: 1, transform: 'translateY(0px)', delay: 0.2 },
    0.1
  )
}

const defaultIntro = (node: HTMLElement) => {
  TweenMax.fromTo(node, 0.5, { opacity: 0 }, { opacity: 1, ease, delay: 0.4 })
  TweenMax.fromTo(
    $('.Hero__h1'),
    0.5,
    { opacity: 0, transform: 'translateX(-10px)' },
    { opacity: 1, transform: 'translateX(0px)', ease, delay: 0.4 }
  )
  TweenMax.fromTo(
    $('.PostContentWrapper'),
    0.5,
    { opacity: 0, transform: 'translateY(-20px)' },
    { opacity: 1, transform: 'translateY(0px)', ease, delay: 0.6 }
  )
}
