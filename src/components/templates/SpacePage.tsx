import React, { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import useDarkMode from 'use-dark-mode'
import { Canvas } from '@react-three/fiber'
import { useSpring } from '@react-spring/three'

import Footer from '@/components/molecules/Footer'
import ViewPort from '@/components/atoms/ViewPort'
import SpaceScene from '@/components/molecules/SpaceScene'
import siteConfig from '~/site-config'

import styles from '../styles.module.css'

export const SpacePage = () => {
  const darkMode = useDarkMode(false)
  const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
  useEffect(() => {
    document.body.style.background = darkMode.value ? '#111418' : '#E2E2E2'
  }, [darkMode])

  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      <ViewPort set={set} />
      <Canvas className={styles.canvas}>
        <SpaceScene set={set} top={top} mouse={mouse} isDarkMode={darkMode.value} />
      </Canvas>
      <div className={styles.footerWrapper}>
        <Footer isDarkMode={darkMode.value} toggleDarkMode={darkMode.toggle} />
      </div>
    </>
  )
}

export default SpacePage
