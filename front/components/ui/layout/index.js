import classes from "@styles/ui/layout/layout.module.scss";
import { UpIcon } from "../svg/index";
import Link from "next/link";

import { GithubIcon, LinkedinIcon, EnvelopIcon } from "../svg/index";

function Layout({ children }) {
  function goTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__content}>
          <Link href="/">
            <a className={classes.header__author}>
              <span className={classes.header__lastname}>BUQUET</span> Valérian
            </a>
          </Link>
          <a href="mailto:valerian.buquet@gmail.com" className={classes.header__contact}>
            <div className={classes.header__contact__label}>Contact moi</div>
            <div className={classes.header__contact__icon}>
              <EnvelopIcon />
            </div>
          </a>
        </div>
      </header>

      <main className={classes.main}>
        <div className={classes.main__content}>{children}</div>
      </main>

      <footer className={classes.footer}>
        <div className={classes.footer__sidebar}>
          <div className={`${classes.footer__sidebar_item}`}>
            <btn className={classes.btnToTop} onClick={goTop}>
              <UpIcon />
            </btn>
          </div>
        </div>

        <div className={classes.footer__social}>
          <div className={`${classes.footer__social_item} ${classes.footer__social_label}`}>Suivez-moi</div>
          <a
            href="https://www.linkedin.com/in/val%C3%A9rian-buquet-4899b9128/"
            className={`${classes.footer__social_item} ${classes.footer__social_item_icon}`}
          >
            <LinkedinIcon />
          </a>
          <a href="https://github.com/Nairelav" className={`${classes.footer__social_item} ${classes.footer__social_item_icon}`}>
            <GithubIcon />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Layout;
