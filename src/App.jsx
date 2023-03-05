import './styles/main.scss';

import ProfilePic from './assets/Foto para link ivy .png';
import MidiaKitPic from './assets/ivy-pic.png';
import logo from './assets/Logo Branca Fundo Rosa.png';
import twitter from './assets/twitter.jpg';
import wppLogo from './assets/wpp-logo.svg';

import LinkButton from './components/link button/LinkButton';

function App() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <div className="profile-pic-container">
          <img className="profile-pic" src={ProfilePic} alt="" />
          <h1 className="name">Ivy Moraes </h1>
        </div>
        <div className="link-list-grid">
          <LinkButton
            text="Aninha"
            link="https://wa.me/5511917031212"
            subText=""
            image={wppLogo}
          />
          <a
            href="https://wa.me/5531999179890?text=Ol%C3%A1%2C%20eu%20sou%20a%20Vanessa%2C%20assessora%20da%20Ivy%20Moraes!%0A%C3%89%20um%20prazer%20poder%20te%20atender%E2%80%A6%20%F0%9F%98%84%20O%20mais%20breve%20poss%C3%ADvel%20retornarei%20o%20seu%20contato!%0AObrigada"
            target="_blank"
            className="vanessa-div"
          >
            <img src={wppLogo} />
            <span>Vanessa</span>
          </a>
          <LinkButton
            text="Léo Imprensa"
            link="https://wa.me/5511967100740"
            subText=""
            image={wppLogo}
          />

          <a href="https://twitter.com/ivymoraesb" target="_blank" className="tt-div">
            <img src="https://seeklogo.com/images/T/twitter-2012-positive-logo-916EDF1309-seeklogo.com.png" />
            <span>Twitter</span>
          </a>
        </div>
        <footer>
          <img className="logo" src={logo} alt="" />
        </footer>
      </div>
    </div>
  );
}

export default App;
