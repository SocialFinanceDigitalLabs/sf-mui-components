import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import moment from 'moment'
import {
  DateFieldContainer,
  DateFieldNarrow,
  DateFieldWide,
  DateFieldMid,
} from './DateSelect.styles'
import { range } from '../../../util';

export type DateObj = {
  day: string
  month: string
  year: string
}

interface DateSelectProps {
  day: string
  month: string
  year: string
  minYear?: number
  maxYear?: number
  onChange: (date: DateObj) => void
}

const currentYear = moment().year()

const DateSelect = (props: DateSelectProps): JSX.Element => {
  const { day, month, year, minYear=currentYear-10, maxYear=currentYear+5 } = props


  const validateDays = (month: string, year: string): boolean => {
    const nonLeapYear = '2022'
    const length = moment(
      `${year !== '' ? year : nonLeapYear}:${month}`,
      'YYYY-MMMM'
    ).daysInMonth()

    return !(length < Number(day))
  }

  const renderDays = () => {
    const length =
      month && year ? moment(`${year}:${month}`, 'YYYY-MMMM').daysInMonth() : 31

    const output = new Array(length).fill('')

    return output.map((val, i) => {
      return (
        <MenuItem key={i + 1} value={i + 1}>
          {i + 1}
        </MenuItem>
      )
    })
  }

  const renderMonths = () => {
    return moment.months().map((val, i) => {
      return (
        <MenuItem key={val} value={val}>
          {val}
        </MenuItem>
      )
    })
  }

  const renderYears = () => {
    return Array.from(range(minYear, maxYear+1)).map(
      (val) => {
        return (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        )
      }
    )
  }

  return (
    <DateFieldContainer>
      <DateFieldNarrow>
        <TextField
          fullWidth
          id="date-select-day"
          select
          label="Date"
          value={day}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.onChange({
              day: event.target.value,
              month,
              year,
            })
          }}
        >
          {renderDays()}
        </TextField>
      </DateFieldNarrow>

      <DateFieldWide>
        <TextField
          fullWidth
          id="date-select-month"
          select
          label="Month"
          value={month}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.onChange({
              day: validateDays(event.target.value, year) ? day : '',
              month: event.target.value,
              year,
            })
          }}
        >
          {renderMonths()}
        </TextField>
      </DateFieldWide>

      <DateFieldMid>
        <TextField
          fullWidth
          id="date-select-year"
          select
          label="Year"
          value={year}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (month !== '') {
              props.onChange({
                day: validateDays(month, event.target.value) ? day : '',
                month,
                year: event.target.value,
              })
            } else {
              props.onChange({
                day,
                month,
                year: event.target.value,
              })
            }
          }}
        >
          {renderYears()}
        </TextField>
      </DateFieldMid>
    </DateFieldContainer>
  )
}

export default DateSelect
