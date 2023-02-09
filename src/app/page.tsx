import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export const metadata = {
  title: {
    default: 'AngelOn App',
    template: '%s - AngelOn App'
  },
  description: "Engage Your Church Members on the Message."
};
