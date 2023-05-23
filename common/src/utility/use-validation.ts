import { useMemo } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input'
import * as yup from 'yup'
import yupPassword from 'yup-password'

yupPassword(yup)

const regLower = /[a-zёа-яϗἀα-ω]/
const regUpper = /[A-ZЁА-ЯΆΈΑ-Ω]/
const regNumber = /[0-9]/
const regSpecialCaseChars = /^(?=.*[!@#$%^&*()_+\-=[\]{};`':"\\|,.<>/?])/

export const useValidation = () => {
  return useMemo(() => {
    return {
      yup,
      schemas: {
        email: yup
          .string()
          .email('Provided input is not a valid email address')
          .required('Email is required'),
        password: yup
          .string()
          .min(8, 'Password must have at least 8 characters')
          .max(32, 'Password must have at maximum 32 characters')
          .matches(
            regLower,
            'Must contain at least one lowercase latin, cyrillic or greek'
          )
          .matches(
            regUpper,
            'Must contain at least one uppercase latin, cyrillic or greek'
          )
          .matches(regNumber, 'Must contain at least one number')
          .matches(
            regSpecialCaseChars,
            'Must contain at least one special case character'
          ),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Passwords does not match')
          .required('Password confirmation is required'),
        firstName: yup
          .string()
          .min(1, 'First name must have at least one character')
          .required('First name is required'),
        lastName: yup
          .string()
          .min(1, 'Last name must have at least one character')
          .required('Last name is required'),
        suffix: yup.string(),
        title: yup
          .string()
          .min(1, 'Title must have at least one character')
          .required('Title is required'),
        organization: yup
          .string()
          .min(1, 'Organization must have at least one character')
          .required('Organization is required'),
        phoneNumber: yup.string().test({
          name: 'phone-pattern',
          message: 'Phone number is not valid',
          test: (value = '') => value == '' || isValidPhoneNumber(value)
        }),
        address1: yup.string(),
        address2: yup.string(),
        city: yup.string(),
        state: yup.string(),
        zip: yup.string(),
        agreePolicy: yup
          .bool()
          .oneOf(
            [true],
            'Checking this box is REQUIRED to proceed to registration.'
          )
          .required('Checking this box is REQUIRED to proceed to registration.')
      },
      pinSchema: {
        pin: yup
          .string()
          .min(4, 'Your pin must be at least 4 digits')
          .required('Pin is required.')
      },
      confirmCodeSchema: {
        confirmationCode: yup
          .string()
          .min(4, 'Your confirmation code must be at least 4 digits')
          .required('Code is required.')
      }
    }
  }, [])
}
