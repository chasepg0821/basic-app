import React, { useEffect } from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import Layout from '../components/Layout/Layout';
import { useSetRecoilState } from 'recoil';
import { themeState } from '../atoms';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
