import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppRootStateType } from '@/app/store'
import { ArrowLeft } from '@/assets/icons/arrowLeft'
import photo from '@/assets/icons/photo.svg'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TextField } from '@/components/textField'
import { Typography } from '@/components/typography'

import styles from './profile.module.scss'

import { profileActions } from './profile.slice'

export const Profile = () => {
  const dispatch = useDispatch()

  const name = useSelector((state: AppRootStateType) => state.profile.name)
  const familyName = useSelector((state: AppRootStateType) => state.profile.familyName)
  const fatherName = useSelector((state: AppRootStateType) => state.profile.fatherName)
  const login = useSelector((state: AppRootStateType) => state.profile.login)
  const identificationCode = useSelector(
    (state: AppRootStateType) => state.profile.identificationCode
  )

  const handleProfileUpdate = () => {
    if (
      editName === '' ||
      editFamilyName === '' ||
      editLogin === '' ||
      editIdentificationCode === ''
    ) {
      alert('Личные данные не введены')

      return
    }
    dispatch(
      profileActions.updateProfile({
        familyName: editFamilyName,
        fatherName: editFatherName,
        identificationCode: editIdentificationCode,
        login: editLogin,
        name: editName,
      })
    )
    alert('Личные данные обновлены')
  }

  const [editName, setEditName] = useState(name)
  const [editFamilyName, setEditFamilyName] = useState(familyName)
  const [editFatherName, setEditFatherName] = useState(fatherName)
  const [editLogin, setEditLogin] = useState(login)
  const [editIdentificationCode, setEditIdentificationCode] = useState(identificationCode)

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
            <Typography variant={'h3'}>
              {name} {familyName}
            </Typography>
            <Typography className={styles.yellowText} variant={'body2'}>
              Активный
            </Typography>
            <Button className={styles.button}>Пользователь</Button>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.profileData}>
          <Typography style={{ color: '#272A33' }} variant={'s1'}>
            Личные данные
          </Typography>
          <div className={styles.inputs}>
            <div className={styles.names}>
              <TextField
                label={'Имя*'}
                onChange={e => setEditName(e.target.value)}
                placeholder={'Введите имя'}
                value={editName}
              />
              <TextField
                label={'Фамилия*'}
                onChange={e => setEditFamilyName(e.target.value)}
                placeholder={'Введите фамилию'}
                value={editFamilyName}
              />
            </div>
            <div className={styles.names}>
              <TextField
                label={'Отчество'}
                onChange={e => setEditFatherName(e.target.value)}
                placeholder={'Введите отчество'}
                value={editFatherName}
              />
              <TextField
                label={'Идентификационный номер*'}
                onChange={e => setEditIdentificationCode(e.target.value)}
                placeholder={'Введите идентификационный номер'}
                value={editIdentificationCode}
              />
            </div>
            <TextField
              className={styles.oneInput}
              label={'Логин*'}
              onChange={e => setEditLogin(e.target.value)}
              placeholder={'Введите логин'}
              value={editLogin}
            />
          </div>
        </div>
        <Contacts />
        <Passwords />
        <Button className={styles.saveButton} onClick={handleProfileUpdate}>
          Сохранить
        </Button>
      </div>

      <Footer />
    </div>
  )
}

const Contacts = () => {
  const dispatch = useDispatch()
  const mail = useSelector((state: AppRootStateType) => state.profile.mail)

  const phone = useSelector((state: AppRootStateType) => state.profile.phone)

  const handleContactsUpdate = () => {
    if (editPhone === '') {
      alert('Мобильный номер должен быть указан')

      return
    }
    dispatch(
      profileActions.updateProfile({
        mail: editMail,
        phone: editPhone,
      })
    )
    alert('Контакты обновлены')
    setIsEditContactsAvailable(false)
  }
  const [editMail, setEditMail] = useState(mail)
  const [editPhone, setEditPhone] = useState(phone)

  const [isEditContactsAvailable, setIsEditContactsAvailable] = useState(false)

  return (
    <div className={styles.profileData}>
      <div className={styles.line}></div>
      <div className={styles.profileDataHeader}>
        <Typography style={{ color: '#272A33' }} variant={'s1'}>
          Контакты
        </Typography>
        {isEditContactsAvailable ? (
          <Button
            onClick={handleContactsUpdate}
            style={{ padding: '5px 10px', width: '100px' }}
            variant={'blue'}
          >
            Сохранить
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditContactsAvailable(true)}
            style={{ width: '100px' }}
            variant={'text'}
          >
            Редактировать
          </Button>
        )}
      </div>

      <div className={styles.inputs}>
        <div className={styles.names}>
          <TextField
            disabled={!isEditContactsAvailable}
            label={'Адрес электронной почты'}
            onChange={e => setEditMail(e.target.value)}
            placeholder={
              isEditContactsAvailable ? 'Введите адрес электронной почты' : 'agsr@mail.ru'
            }
            value={editMail}
          />
          <TextField
            disabled={!isEditContactsAvailable}
            label={'Мобильный номер*'}
            onChange={e => setEditPhone(e.target.value)}
            placeholder={isEditContactsAvailable ? 'Введите номер телефона' : '+375 29 123 44 55'}
            value={editPhone}
          />
        </div>
      </div>
    </div>
  )
}

const Passwords = () => {
  const dispatch = useDispatch()
  const password = useSelector((state: AppRootStateType) => state.profile.password)

  const [isEditPasswordAvailable, setIsEditPasswordAvailable] = useState(false)
  const [editPassword, setEditPassword] = useState('')

  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')
  const handlePasswordUpdate = () => {
    if (newPassword === '' || repeatNewPassword === '' || editPassword === '') {
      alert('Данные не введены')

      return
    }

    if (newPassword !== repeatNewPassword || password !== editPassword) {
      alert('Пароли не совпадают')

      return
    }

    dispatch(
      profileActions.updateProfile({
        password: 'newpassword',
      })
    )
    alert('Пароль обновлен')
    setEditPassword('')
    setNewPassword('')
    setRepeatNewPassword('')
    setIsEditPasswordAvailable(false)
  }

  return (
    <div className={styles.profileData}>
      <div className={styles.line}></div>
      <div className={styles.profileDataHeader}>
        <Typography style={{ color: '#272A33' }} variant={'s1'}>
          Пароль
        </Typography>
        {isEditPasswordAvailable ? (
          <Button
            onClick={handlePasswordUpdate}
            style={{ padding: '5px 10px', width: '100px' }}
            variant={'blue'}
          >
            Сохранить
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditPasswordAvailable(true)}
            style={{ width: '100px' }}
            variant={'text'}
          >
            Редактировать
          </Button>
        )}
      </div>
      <TextField
        className={styles.oneInput}
        disabled={!isEditPasswordAvailable}
        label={'Текущий пароль'}
        onChange={e => setEditPassword(e.target.value)}
        placeholder={!isEditPasswordAvailable ? '**********' : 'Введите текущий пароль'}
        value={editPassword}
        variant={'password'}
      />
      <div className={styles.inputs}>
        <div className={styles.names}>
          <TextField
            label={'Новый пароль'}
            onChange={e => setNewPassword(e.target.value)}
            placeholder={!isEditPasswordAvailable ? '**********' : 'Введите новый пароль'}
            value={newPassword}
            variant={'password'}
          />
          <TextField
            disabled={!isEditPasswordAvailable}
            label={'Подтвердите пароль*'}
            onChange={e => setRepeatNewPassword(e.target.value)}
            placeholder={!isEditPasswordAvailable ? '**********' : 'Подтвердите новый пароль'}
            value={repeatNewPassword}
            variant={'password'}
          />
        </div>
      </div>
    </div>
  )
}
