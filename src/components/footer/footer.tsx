import { Button } from "../button";
import { Typography } from "../typography";
import styles from "./footer.module.scss";
import logo from "@/assets/icons/logo.svg";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.item}>
          <img src={logo} />
          <Typography variant="body2" className={styles.body2}>
            Автоматизированная информационная <br />
            система «Реестры»
          </Typography>
          <Typography variant="body2" className={styles.body2}>
            © АИС «Реестры», 2022.
            <br />
            Все права защищены.
          </Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="h4">Техническая поддержка</Typography>
          <div className={styles.numbers}>
            <Typography variant="body2">+375 25 111 22 33 </Typography>
            <Typography variant="body2">+375 29 222 44 55</Typography>
            <Typography variant="body2">dev@agsr.by</Typography>
            <Button variant="text">Связаться с поддержкой</Button>
          </div>
        </div>
        <div className={styles.item} style={{ paddingLeft: "25px" }}>
          <Typography variant="h4">Контакты</Typography>
          <div className={styles.numbers}>
            <Typography variant="body2">+375 29 222 44 88 </Typography>
            <Typography variant="body2">dev@agsr.by</Typography>
            <Typography variant="body2">
              г. Минск, ул. К.Цеткин, д. 24-705
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <div className={styles.line}></div>
        <div className={styles.elements}>
          <Button
            as="a"
            href="https://brrb.by/"
            variant="link"
            className={styles.bank}
          />
          <Button
            as="a"
            href="https://google.com/"
            variant="link"
            className={styles.partner}
          >
            Условный партнер
          </Button>
          <Button
            as="a"
            href="https://google.com/"
            variant="link"
            className={styles.partner}
          >
            Условный партнер
          </Button>
          <Button
            as="a"
            href="https://google.com/"
            variant="link"
            className={styles.partner}
          >
            Условный партнер
          </Button>
          <Button
            as="a"
            href="https://google.com/"
            variant="link"
            className={styles.partner}
          >
            Условный партнер
          </Button>
        </div>
        <div className={styles.developers}>
          <div className={styles.line}></div>
          <Typography variant="body2" className={styles.body2}>
            © АИС «Реестры» <br />
            Разработчк: ОАО «Агентство сервисизации и реинжиниринга» (г. Минск,
            ул. К. Цеткин, д. 24–705 dev@agsr.by)
          </Typography>
        </div>
      </div>
    </div>
  );
};
