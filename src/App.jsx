import dragonImage from '../assets/SnapInsta.to_649195870_17894794086415208_5478445729998427920_n.webp';
import keychainImage from '../assets/SnapInsta.to_583519230_17881467567415208_215387425160546860_n.webp';
import incenseImage from '../assets/SnapInsta.to_487310979_17852994096415208_8470044533978223098_n.webp';
import clipImage from '../assets/SnapInsta.to_581850319_17880982815415208_1858432965323066728_n.webp';
import turtleImage from '../assets/SnapInsta.to_582067793_17880743700415208_6143721638547533509_n.webp';
import repoImage from '../assets/SnapInsta.to_488207080_17854523691415208_6182813340027053045_n.jpg';
import pencilVideo from '../assets/SnapInsta.to_AQOaWUGSjmZDJ6rTLbHPDNHdzyqVVFZl-dQ44R9Wtt3MpGyZldhs0IRY6udxJ_ukbgVZGtqbDGfTm7nA2EYQjmbjWILW9w2BgRPja-8.mp4';
import keychainVideo from '../assets/SnapInsta.to_AQPWFNzNO6rWTKvIKPhJsehTEo9pN79Y4TvymdFlTBPDXz8YyH1zjyMA1DoLDxLCb7Ogw7hjqEq8o21cLgjIpi38T1TpDd7ssXkFSSA.mp4';
import rotatingVideo from '../assets/SnapInsta.to_AQOf4Obi4ooQ3iV8z3C93AbY-jmwItRHNluravkUxkV4rEJ1XCAWZeNAN5ewZoJwry6aey4O36pa2et1QLY0w2ZNivNolPaSX4x7mM0.mp4';

const products = [
  {
    title: 'Dragones articulados',
    description: 'Decoracion, coleccion y regalos con presencia visual fuerte.',
    image: dragonImage,
    accent: 'dragon',
  },
  {
    title: 'Llaveros customizados',
    description: 'Nombres, logos y detalles a pedido para regalos personalizados.',
    image: keychainImage,
    accent: 'keychain',
  },
  {
    title: 'Porta incienso',
    description: 'Objetos funcionales con caracter artesanal y acabado calido.',
    image: incenseImage,
    accent: 'incense',
  },
  {
    title: 'Broche para bolsas',
    description: 'Piezas practicas para el dia a dia hechas con criterio util.',
    image: clipImage,
    accent: 'clip',
  },
  {
    title: 'Tortuga apoya vasos',
    description: 'Detalles utiles con personalidad para escritorio, cocina o regalo.',
    image: turtleImage,
    accent: 'turtle',
  },
  {
    title: 'Muneco R.E.P.O.',
    description: 'Base con nombre y colores personalizables para fans y coleccionistas.',
    image: repoImage,
    accent: 'repo',
  },
];

const steps = [
  'Nos escribis por Instagram con tu idea, referencia o lo que queres resolver.',
  'Definimos tamano, color, materiales y nivel de personalizacion para tu pieza.',
  'Imprimimos, te mostramos el resultado y coordinamos entrega o retiro.',
];

const reel = [
  {
    title: 'Portalapices giratorio',
    video: rotatingVideo,
  },
  {
    title: 'Llavero personalizado',
    video: keychainVideo,
  },
  {
    title: 'Trabajo en accion',
    video: pencilVideo,
  },
];

const badges = ['Decoracion', 'Regalos unicos', 'Accesorios utiles'];

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <main className="landing">
        <section className="section hero-section">
          <div className="hero-copy card-surface">
            <span className="eyebrow">Impresiones 3D en Argentina</span>
            <h1>SKY 3D Impresiones</h1>
            <p className="hero-body">
              Hacemos trabajos personalizados para regalar, decorar y resolver ideas utiles con impresion 3D.
            </p>
            <p className="hero-quote">Donde el cielo solo es el comienzo.</p>

            <div className="hero-actions">
              <a className="button button-dark" href="#trabajos">
                Ver trabajos
              </a>
              <a
                className="button button-gold"
                href="https://www.instagram.com/sky3dimpresiones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
              >
                Escribir por Instagram
              </a>
            </div>

            <div className="proof-strip">
              Decoracion, regalos, accesorios y piezas utiles hechas a pedido.
            </div>
          </div>

          <div className="hero-visual card-surface">
            <figure className="hero-image-frame">
              <img src={dragonImage} alt="Dragones articulados impresos en 3D" />
            </figure>

            <div className="hero-badges">
              {badges.map((label) => (
                <div className="mini-card" key={label}>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="trabajos">
          <div className="section-heading">
            <span className="eyebrow eyebrow-soft">Trabajos destacados</span>
            <h2>Piezas utiles, decorativas y personalizadas</h2>
            <p>
              Una muestra del tipo de impresiones que pueden pedir por mensaje directo en Instagram.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className={`product-card accent-${product.accent}`} key={product.title}>
                <div className="product-media">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="product-copy">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reel-section">
          <div className="section-heading section-heading-compact">
            <span className="eyebrow eyebrow-soft">En movimiento</span>
            <h2>Algunas piezas se disfrutan mejor en video</h2>
          </div>

          <div className="reel-grid">
            {reel.map((item) => (
              <article className="reel-card" key={item.title}>
                <video autoPlay loop muted playsInline preload="metadata">
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="reel-caption">{item.title}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading section-heading-compact">
            <h2>Como trabajamos</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step}>
                <span className="step-index">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section">
          <div className="section-heading section-heading-compact">
            <h2>Hablemos de tu proxima impresion</h2>
            <p>
              SKY 3D Impresiones trabaja por pedido. Cuanto mas clara sea tu idea, mas rapido te pasamos opciones.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-primary">
              <h3>Canal principal</h3>
              <p>
                Mensaje directo por Instagram para consultas, precios, reservas y trabajos personalizados.
              </p>
              <a
                className="button button-dark"
                href="https://www.instagram.com/sky3dimpresiones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
              >
                Abrir Instagram
              </a>
            </div>

            <div className="contact-secondary">
              <p>Piezas decorativas</p>
              <p>Accesorios utiles</p>
              <p>Regalos personalizados</p>
            </div>
          </div>
        </section>

        <footer className="section site-footer">
          <div className="site-footer-inner">
            <p>
              Founders{' '}
              <a
                href="https://www.instagram.com/jdg20431?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
              >
                @jdg20431
              </a>{' '}
              y{' '}
              <a
                href="https://www.instagram.com/eliodehaetano/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noreferrer"
              >
                @eliodehaetano
              </a>
            </p>
            <p>
              Sitio desarrollado por{' '}
              <a href="https://dylangonzaloferreyra.github.io" target="_blank" rel="noreferrer">
                Dylan Gonzalo Ferreyra
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}