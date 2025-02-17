import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="footer-pri">
        <section className="icons">
          <ul>
            <li>
              <a href="facebook.com" target="_blank">
                <img src="./imagens/fb.png" alt="" />
              </a>
            </li>
            <li>
              <a href="twitter.com" target="_blank">
                <img src="./imagens/tw.png" alt="" />
              </a>
            </li>
            <li>
              <a href="instagram.com" target="_blank">
                <img src="./imagens/ig.png" alt="" />
              </a>
            </li>
          </ul>
        </section>
        <div className="logo">
          <img src="./imagens/logo.png" alt="Oragano logo" />
        </div>
        <p className="footer_text">Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
