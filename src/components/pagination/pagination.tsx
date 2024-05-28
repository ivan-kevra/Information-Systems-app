import { useState } from 'react'

import { DoubleArrowRight } from '@/assets/icons/DoubleArrowRight'
import { ArrowLeft } from '@/assets/icons/arrowLeft'
import { ArrowRight } from '@/assets/icons/arrowRight'
import bookIcon from '@/assets/icons/bookIcon.svg'
import bookMark from '@/assets/icons/bookMark.svg'
import { DoubleArrowLeft } from '@/assets/icons/doubleArrowLeft'
import serverIcon from '@/assets/icons/serverIcon.svg'

import styles from './pagination.module.scss'

import { Button } from '../button'
import { Typography } from '../typography'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '@/app/store'

export const Pagination = () => {
  const itemsList = useSelector((state: AppRootStateType) => state.table.items)
  const [itemsForPage, setItemsForPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)

  const pagesAmount = Math.ceil(itemsList.length / itemsForPage)

  const lastIndex: number = currentPage * itemsForPage
  const firstIndex: number = lastIndex - itemsForPage

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <Typography variant={'s1'}>Список АИС</Typography>
          <div className={styles.tableHeaderButtons}>
            <Typography variant={'b1'}>Показывать по:</Typography>
            <Button
              className={itemsForPage === 9 ? styles.activeButton : styles.button}
              onClick={() => {
                setItemsForPage(9)
                setCurrentPage(1)
              }}
              variant={'white'}
            >
              9
            </Button>
            <Button
              className={itemsForPage === 25 ? styles.activeButton : styles.button}
              onClick={() => {
                setItemsForPage(25)
                setCurrentPage(1)
              }}
              variant={'white'}
            >
              25
            </Button>
            <Button
              className={itemsForPage === 50 ? styles.activeButton : styles.button}
              onClick={() => {
                setCurrentPage(1)
                setItemsForPage(50)
              }}
              variant={'white'}
            >
              50
            </Button>
            <Button
              className={itemsForPage === 100 ? styles.activeButton : styles.button}
              onClick={() => {
                setItemsForPage(100)
                setCurrentPage(1)
              }}
              variant={'white'}
            >
              100
            </Button>
          </div>
        </div>
        <table className={styles.tableContent}>
          <tbody className={styles.tbody}>
            {itemsList.slice(firstIndex, lastIndex).map((item, index) => {
              return (
                <tr className={styles.tr} key={index}>
                  <td className={styles.title}>
                    <Typography className={styles.text} variant={'h4'}>
                      {item.title}
                    </Typography>
                  </td>
                  <td className={styles.td + ' ' + styles.note}>
                    <img src={bookIcon} />
                    <Typography
                      className={item.bookNotes !== 0 ? styles.blueText : styles.blackText}
                      variant={'s1'}
                    >
                      {item.bookNotes}
                    </Typography>
                    <ArrowRight />
                  </td>
                  <td className={styles.td + ' ' + styles.note}>
                    <img src={serverIcon} />
                    <Typography
                      className={item.serverNotes !== 0 ? styles.blueText : styles.blackText}
                      variant={'s1'}
                    >
                      {item.serverNotes}
                    </Typography>
                    <ArrowRight />
                  </td>
                  <td className={styles.td + ' ' + styles.note}>
                    <img src={bookMark} />
                    <Typography
                      className={item.bookmarkNotes !== 0 ? styles.blueText : styles.blackText}
                      variant={'s1'}
                    >
                      {item.bookmarkNotes}
                    </Typography>
                    <ArrowRight />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Buttons
        currentPage={currentPage}
        pagesAmount={pagesAmount}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

type ButtonsProps = {
  currentPage: number
  pagesAmount: number
  setCurrentPage: (page: number) => void
}
const Buttons = ({ currentPage, pagesAmount, setCurrentPage }: ButtonsProps) => {
  const numbers = Array.from({ length: pagesAmount }, (_, i) => i + 1)

  const visiblePages = 7
  const ellipsisValue = -1

  if (numbers.length <= visiblePages) {
    return (
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          variant={'text'}
        >
          <ArrowLeft />
        </Button>
        <Button
          className={styles.button}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          variant={'text'}
        >
          <ArrowLeft />
        </Button>
        {numbers.map((number, index) => (
          <div
            className={currentPage === number ? styles.activeButton : styles.button}
            key={index}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </div>
        ))}
        <Button
          className={styles.button}
          disabled={currentPage === pagesAmount}
          onClick={() => setCurrentPage(currentPage + 1)}
          variant={'text'}
        >
          <ArrowRight />
        </Button>
        <Button
          className={styles.button}
          disabled={currentPage === pagesAmount}
          onClick={() => setCurrentPage(pagesAmount)}
          variant={'text'}
        >
          <ArrowRight />
        </Button>
      </div>
    )
  }
  const visibleNumbers = []

  if (currentPage > 1) {
    visibleNumbers.push(1)
    if (currentPage > 2) {
      visibleNumbers.push(ellipsisValue)
    }
  }
  if (currentPage > numbers.length) {
    visibleNumbers.push(numbers.length)
  }
  if (currentPage === numbers.length - 2) {
    visibleNumbers.push(numbers.length - 3)
  }
  if (currentPage === numbers.length - 1) {
    visibleNumbers.push(numbers.length - 3)
    visibleNumbers.push(numbers.length - 2)
  }
  if (currentPage === numbers.length) {
    visibleNumbers.push(numbers.length - 3)
    visibleNumbers.push(numbers.length - 2)
    visibleNumbers.push(numbers.length - 1)
  }

  visibleNumbers.push(currentPage)

  if (currentPage < numbers.length - 1) {
    visibleNumbers.push(currentPage + 1)
    if (currentPage === 1) {
      visibleNumbers.push(3)
      visibleNumbers.push(4)
    }
    if (currentPage === 2) {
      visibleNumbers.push(4)
    }
    if (currentPage < numbers.length - 2) {
      visibleNumbers.push(ellipsisValue)
    }
  }

  if (currentPage !== numbers.length) {
    visibleNumbers.push(numbers.length)
  }

  return (
    <div className={styles.buttons}>
      <Button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
        variant={'text'}
      >
        <DoubleArrowLeft color={currentPage === 1 ? '#D4D7DB' : '#676A71'} />
      </Button>
      <Button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        variant={'text'}
      >
        <ArrowLeft color={currentPage === 1 ? '#D4D7DB' : '#676A71'} />
      </Button>
      {visibleNumbers.map((number, index) => {
        if (number === ellipsisValue) {
          return (
            <div className={styles.button} key={index}>
              ...
            </div>
          )
        } else {
          return (
            <Button
              className={currentPage === number ? styles.activeButton : styles.button}
              key={index}
              onClick={() => setCurrentPage(number)}
              variant={'text'}
            >
              {number}
            </Button>
          )
        }
      })}
      <Button
        className={styles.button}
        disabled={currentPage === pagesAmount}
        onClick={() => setCurrentPage(currentPage + 1)}
        variant={'text'}
      >
        <ArrowRight color={currentPage === pagesAmount ? '#D4D7DB' : '#676A71'} />
      </Button>
      <Button
        className={styles.button}
        disabled={currentPage === pagesAmount}
        onClick={() => setCurrentPage(pagesAmount)}
        variant={'text'}
      >
        <DoubleArrowRight color={currentPage === pagesAmount ? '#D4D7DB' : '#676A71'} />
      </Button>
    </div>
  )
}
