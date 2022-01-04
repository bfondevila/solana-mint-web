import style from "./social.module.scss";

const SocialLinks = (props) => (
  <div
    className={`${style.socialLinks} ${props.inverted ? style.inverted : ""}`}
  >
    <a
      href="https://twitter.com/estrellavolcan"
      target="_blank"
      title="Twitter"
    >
      <img src="/images/logos/twitter.png" alt="Twitter" />
    </a>
    <a
      href="https://www.instagram.com/estrellavolcan"
      target="_blank"
      title="Instagram"
    >
      <img src="/images/logos/instagram.png" alt="Instagram" />
    </a>
    <a href="https://t.me/estrellavolcan" target="_blank" title="Telegram">
      <img src="/images/logos/telegram.png" alt="Telegram" />
    </a>
  </div>
);

export default SocialLinks;
