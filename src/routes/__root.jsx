import * as React from 'react'
import {
  Link,
  Outlet,
  createRootRoute,
} from '@tanstack/react-router'
import Layout from '../components/Layout'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}
