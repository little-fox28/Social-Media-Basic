import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/Layout';
import Modal from '../components/Modal';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import { Toaster } from 'react-hot-toast';
import EditModal from '@/components/modals/EditModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModal />
      <RegisterModal />
      <LoginModal />
      <Modal actionLabel="Submit" isOpen={false} title="Test modal" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
