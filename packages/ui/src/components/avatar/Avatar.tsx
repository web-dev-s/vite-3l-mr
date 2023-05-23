import { omit } from 'lodash'
import { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { CSSObject } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { avatarPlaceholderImage, Camera } from '../../icons'
import { Label } from '../label/Label'
import { StyledAvatarContainer } from './Avatar.style'

export type AvatarProps = {
  avatarImage?: string
  onAvatarSet?: (avatar: File) => void
  customStyled?: CSSObject
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
}

/**
 * Props Description @function Avatar @typedef props:AvatarProps
 * @param avatarImage - avatar image **{string}**
 * @param onAvatarSet - forwarded file source of avatar **{(avatar: File) => void}**
 * @param customStyled - client side style prop **{@linkcode CSSObject}**
 * @param customModifiers - client modifiers config **{@linkcode ModifiersConfig}**
 * @param modifiers - accessing style preset defined **{ 'viewOnly'}**
 * @returns {JSX} JSX
 */

export const Avatar: FC<AvatarProps> = (props) => {
  const { avatarImage, onAvatarSet, customStyled } = props

  const [avatar, setAvatar] = useState<any>(avatarImage)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    // eslint-disable-next-line padding-line-between-statements
    ;(() => setAvatar(avatarImage))()
  }, [avatarImage])

  const onDrop = useCallback(
    (acceptedFiles: File[]) =>
      acceptedFiles.forEach((file: FileList[number]) => {
        setErrorMessage('')

        if (file?.type?.toString().indexOf('image/') > -1) {
          const fileUploaded = file
          const reader = new FileReader()
          reader.readAsDataURL(fileUploaded)

          reader.onloadend = function (e) {
            if (e && 'target' in e && e?.target) {
              setAvatar(e?.target.result)
            }
          }

          onAvatarSet?.(fileUploaded)
        }
      }),
    [onAvatarSet]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.ico', '.svg', '.heic']
    },
    multiple: false,
    onDrop,
    onError: (err: Error) => setErrorMessage(err?.message)
  })

  return (
    <StyledAvatarContainer {...omit(props, ['onAvatarSet'])}>
      <div className={'avatar-container'}>
        <input {...getInputProps()} className={'logoDragInput'} />
        <img
          alt="lg"
          src={avatar ? avatar : avatarPlaceholderImage}
          className={'image'}
          app-variant-drag-active={isDragActive ? 'true' : 'false'}
          style={customStyled}
        />
      </div>
      <div
        className={'cam-button'}
        app-drag-active={isDragActive ? 'true' : 'false'}
        {...getRootProps()}
      >
        <Camera className={'cam-button-image'} />
      </div>
      {errorMessage && <Label modifiers={['error']} label={errorMessage} />}
    </StyledAvatarContainer>
  )
}

Avatar.defaultProps = {
  modifiers: []
}
