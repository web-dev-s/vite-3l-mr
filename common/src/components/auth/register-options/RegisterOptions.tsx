import { Button, Container, Label } from '@monorepo-ui/components'
import { Yes } from '@monorepo-ui/icons'
import { omit } from 'lodash'
import { FC } from 'react'
import { StyledRegisterOptions } from './RegisterOptions.style'

export type RegisterOptionsProps = {
  optionButtons?: string[]
  modifiers?: unknown[] | string
  onSelect?: (selectedIndex: number) => void
}

/**
 * Description @function RegisterOptions @typedef props:RegisterOptionsProps
 * @param optionButtons - option buttons labels  **{string[] }**
 * @param onSelect - callback for passing index of selected option { (selectedIndex:number)=>void }
 * @param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ unknown[] | string }**
 * @returns {JSX} JSX
 */
export const RegisterOptions: FC<RegisterOptionsProps> = (props) => {
  const { optionButtons, onSelect } = props
  return (
    <StyledRegisterOptions {...omit(props, ['onSelect', 'optionButtons'])}>
      <Container modifiers={['authPageForm']}>
        <Label label={'Select an option'} modifiers={['h4']} />
        {optionButtons?.map((i, idx) => {
          return (
            <Button
              key={idx}
              type={'button'}
              modifiers={['secondary', 'stretched', 'top24']}
              icon={Yes}
              text={i}
              disabled={false}
              onClick={() => onSelect?.(idx)}
            />
          )
        })}
      </Container>
    </StyledRegisterOptions>
  )
}

RegisterOptions.displayName = 'RegisterOptions'
