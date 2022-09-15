import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-3">
          <Container>
          <Outlet></Outlet>
          </Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout