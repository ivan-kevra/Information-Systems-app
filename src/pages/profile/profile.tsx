import { Link } from 'react-router-dom'

import { ArrowLeft } from '@/assets/icons/arrowLeft'
import photo from '@/assets/icons/photo.svg'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TextField } from '@/components/textField'
import { Typography } from '@/components/typography'

import styles from './profile.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '@/app/store'
import { profileActions } from './profile.slice'
import { useState } from 'react'

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
        name: editName,
        familyName: editFamilyName,
        fatherName: editFatherName,
        login: editLogin,
        identificationCode: editIdentificationCode,
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
                placeholder={'Введите имя'}
                value={editName}
                onChange={e => setEditName(e.target.value)}
              />
              <TextField
                label={'Фамилия*'}
                placeholder={'Введите фамилию'}
                value={editFamilyName}
                onChange={e => setEditFamilyName(e.target.value)}
              />
            </div>
            <div className={styles.names}>
              <TextField
                label={'Отчество'}
                placeholder={'Введите отчество'}
                value={editFatherName}
                onChange={e => setEditFatherName(e.target.value)}
              />
              <TextField
                label={'Идентификационный номер*'}
                placeholder={'Введите идентификационный номер'}
                value={editIdentificationCode}
                onChange={e => setEditIdentificationCode(e.target.value)}
              />
            </div>
            <TextField
              className={styles.oneInput}
              label={'Логин*'}
              placeholder={'Введите логин'}
              value={editLogin}
              onChange={e => setEditLogin(e.target.value)}
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
            style={{ width: '100px', padding: '5px 10px' }}
            variant={'blue'}
            onClick={handleContactsUpdate}
          >
            Сохранить
          </Button>
        ) : (
          <Button
            style={{ width: '100px' }}
            variant={'text'}
            onClick={() => setIsEditContactsAvailable(true)}
          >
            Редактировать
          </Button>
        )}
      </div>

      <div className={styles.inputs}>
        <div className={styles.names}>
          <TextField
            label={'Адрес электронной почты'}
            placeholder={isEditContactsAvailable ? 'Введите адрес электронной почты' : 'agsr@mail.ru'}
            value={editMail}
            onChange={e => setEditMail(e.target.value)}
            disabled={!isEditContactsAvailable}
          />
          <TextField
            label={'Мобильный номер*'}
            placeholder={isEditContactsAvailable ? 'Введите номер телефона' : '+375 29 123 44 55'}
            value={editPhone}
            onChange={e => setEditPhone(e.target.value)}
            disabled={!isEditContactsAvailable}
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
            style={{ width: '100px', padding: '5px 10px' }}
            variant={'blue'}
            onClick={handlePasswordUpdate}
          >
            Сохранить
          </Button>
        ) : (
          <Button
            style={{ width: '100px' }}
            variant={'text'}
            onClick={() => setIsEditPasswordAvailable(true)}
          >
            Редактировать
          </Button>
        )}
      </div>
      <TextField
        className={styles.oneInput}
        label={'Текущий пароль'}
        placeholder={!isEditPasswordAvailable ? '**********' : 'Введите текущий пароль'}
        variant={'password'}
        value={editPassword}
        onChange={e => setEditPassword(e.target.value)}
        disabled={!isEditPasswordAvailable}
      />
      <div className={styles.inputs}>
        <div className={styles.names}>
          <TextField
            label={'Новый пароль'}
            placeholder={!isEditPasswordAvailable ? '**********' : 'Введите новый пароль'}
            variant={'password'}
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <TextField
            label={'Подтвердите пароль*'}
            placeholder={!isEditPasswordAvailable ? '**********' : 'Подтвердите новый пароль'}
            variant={'password'}
            value={repeatNewPassword}
            onChange={e => setRepeatNewPassword(e.target.value)}
            disabled={!isEditPasswordAvailable}
          />
        </div>
      </div>
    </div>
  )
}
