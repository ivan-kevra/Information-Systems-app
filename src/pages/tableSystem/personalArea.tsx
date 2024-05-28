import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ArrowLeft } from '@/assets/icons/arrowLeft'
import gridIcon from '@/assets/icons/gridIcon.svg'
import infoIcon from '@/assets/icons/infoIcon.svg'
import openedEye from '@/assets/icons/openedEye.svg'
import plusIcon from '@/assets/icons/plusIcon.svg'
import sortIcon from '@/assets/icons/sortIcon.svg'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Pagination } from '@/components/pagination/pagination'
import { TextField } from '@/components/textField'
import { Typography } from '@/components/typography'

import styles from './personalArea.module.scss'

export const PersonalArea = () => {
  const [activeItem, setActiveItem] = useState('Реестры')

  const changeActiveItem = (item: string) => {
    setActiveItem(item)
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.menu}>
        <div className={styles.links}>
          <Link className={styles.link} to={'/'}>
            <ArrowLeft />
            Главная
          </Link>
          <Link className={styles.activeLink} to={'/'}>
            <ArrowLeft color={'#272A33'} />
            Личный кабинет
          </Link>
        </div>
        <nav className={styles.navigation}>
          <Typography variant={'h2'}>Личный кабинет</Typography>
          <ol className={styles.ol}>
            <li
              className={activeItem === 'Реестры' ? styles.activeLi : styles.li}
              onClick={() => changeActiveItem('Реестры')}
            >
              Реестры
            </li>
            <li
              className={activeItem === 'Электронные сервисы' ? styles.activeLi : styles.li}
              onClick={() => changeActiveItem('Электронные сервисы')}
            >
              Электронные сервисы
            </li>
            <li
              className={activeItem === 'Потребление данных' ? styles.activeLi : styles.li}
              onClick={() => changeActiveItem('Потребление данных')}
            >
              Потребление данных
            </li>
            <li
              className={activeItem === 'Справочники' ? styles.activeLi : styles.li}
              onClick={() => changeActiveItem('Справочники')}
            >
              Справочники
            </li>
            <li
              className={activeItem === 'Отчёты' ? styles.activeLi : styles.li}
              onClick={() => changeActiveItem('Отчёты')}
            >
              Отчёты
            </li>
          </ol>
        </nav>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            <Typography variant={'s1'}>Выбор ИС/СР для внесения метаданных</Typography>
            <TextField
              className={styles.input}
              placeholder={'Выберите ИС/СР для внесения метаданных...'}
              variant={'search'}
            />
          </div>

          <Button className={styles.button}>Показать</Button>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <Button className={styles.button} variant={'white'}>
              <img src={openedEye} />
              Просмотр ИС/ИР
            </Button>
            <Button className={styles.secondButton} variant={'white'}>
              <img src={infoIcon} />
              Доп сведения ИС/ИР
            </Button>
            <Button className={styles.addButton}>
              <img src={plusIcon} />
              Добавить
            </Button>
          </div>
          <div className={styles.icons}>
            <img src={gridIcon} />
            <img src={sortIcon} />
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  )
}
