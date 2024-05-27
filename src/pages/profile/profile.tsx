import { Link } from 'react-router-dom'

import { ArrowLeft } from '@/assets/icons/arrowLeft'
import photo from '@/assets/icons/photo.svg'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TextField } from '@/components/textField'
import { Typography } from '@/components/typography'

import styles from './profile.module.scss'

export const Profile = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>
        <div className={styles.links}>
          <Link className={styles.link} to={'/'}>
            <ArrowLeft />
            Главная
          </Link>
          <Link className={styles.activeLink} to={'/'}>
            <ArrowLeft color={'#272A33'} />
            Профиль
          </Link>
        </div>
        <Typography variant={'h2'}>Профиль</Typography>
      </div>
      <div className={styles.content}>
        <div className={styles.photoAndName}>
          <img src={photo} />
          <div className={styles.name}>
            <Typography variant={'h3'}>Имя Фамилия</Typography>
            <Typography className={styles.yellowText} variant={'body2'}>
              Активный
            </Typography>
            <Button className={styles.button}>Пользователь</Button>
          </div>
        </div>
        <div className={styles.profileData}>
          <Typography style={{ color: '#272A33' }} variant={'s1'}>
            Личные данные
          </Typography>
          <div className={styles.inputs}>
            <div className={styles.names}>
              <TextField label={'Имя*'} placeholder={'Введите имя'} />
              <TextField label={'Фамилия*'} placeholder={'Введите фамилию'} />
            </div>
            <div className={styles.names}>
              <TextField label={'Отчество'} placeholder={'Введите отчество'} />
              <TextField
                label={'Идентификационный номер*'}
                placeholder={'Введите идентификационный номер'}
              />
            </div>
            <TextField className={styles.oneInput} label={'Логин*'} placeholder={'Введите логин'} />
          </div>
        </div>
        <div className={styles.profileData}>
          <div className={styles.profileDataHeader}>
            <Typography style={{ color: '#272A33' }} variant={'s1'}>
              Контакты
            </Typography>
            <Button style={{ width: '100px' }} variant={'text'}>
              Редактировать
            </Button>
          </div>

          <div className={styles.inputs}>
            <div className={styles.names}>
              <TextField label={'Адрес электронной почты'} placeholder={'agsr@mail.ru'} />
              <TextField label={'Мобильный номер*'} placeholder={'+375 29 123 44 55'} />
            </div>
          </div>
        </div>
        <div className={styles.profileData}>
          <div className={styles.profileDataHeader}>
            <Typography style={{ color: '#272A33' }} variant={'s1'}>
              Контакты
            </Typography>
            <Button style={{ width: '100px' }} variant={'text'}>
              Редактировать
            </Button>
          </div>
          <TextField
            className={styles.oneInput}
            label={'Текущий пароль'}
            placeholder={'**********'}
            variant={'password'}
          />
          <div className={styles.inputs}>
            <div className={styles.names}>
              <TextField label={'Новый пароль'} placeholder={'**********'} variant={'password'} />
              <TextField
                label={'Подтвердите пароль*'}
                placeholder={'**********'}
                variant={'password'}
              />
            </div>
          </div>
        </div>
        <Button className={styles.saveButton}>Сохранить</Button>
      </div>
      <Footer />
    </div>
  )
}
