import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import Layout from '../components/Layout';
import Modal from '../components/Modal';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Modal actionLabel="Submit" isOpen={false} title="Test modal" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
