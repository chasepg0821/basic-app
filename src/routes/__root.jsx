import React, {useEffect} from 'react'
import {
  Outlet,
  createRootRoute,
} from '@tanstack/react-router'
import Layout from '../components/Layout'
import { useSetRecoilState } from 'recoil'
import { themeState } from '../atoms'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const setTheme = useSetRecoilState(themeState)
   
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify("system"));
    setTheme("system");
  }, [setTheme])

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}
