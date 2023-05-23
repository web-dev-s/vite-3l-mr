import { FC } from 'react'
import {
  Audio,
  BallTriangle,
  Bars,
  CradleLoader,
  Circles,
  CirclesWithBar,
  Grid,
  Hearts,
  LineWave,
  MutatingDots,
  Oval,
  Plane,
  Puff,
  RevolvingDot,
  RotatingSquare,
  Rings,
  TailSpin,
  ThreeDots,
  ThreeCircles,
  Triangle,
  Watch
} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Style } from 'react-loader-spinner/dist/type'
import { useTheme } from 'styled-components'
import { ModifiersConfig } from 'styled-components-modifiers'
import { StyledSpinnerWrapper } from './Spinner.style'

// https://mhnpd.github.io/react-loader-spinner/
const LoaderSpinners = {
  audio: Audio,
  ballTriangle: BallTriangle,
  bars: Bars,
  cradleLoader: CradleLoader,
  circles: Circles,
  circlesWithBar: CirclesWithBar,
  grid: Grid,
  hearts: Hearts,
  lineWave: LineWave,
  mutatingDots: MutatingDots,
  oval: Oval,
  plane: Plane,
  puff: Puff,
  revolvingDot: RevolvingDot,
  rotatingSquare: RotatingSquare,
  rings: Rings,
  tailsSpin: TailSpin,
  threeDots: ThreeDots,
  threeCircles: ThreeCircles,
  triangle: Triangle,
  watch: Watch
} as const

type BaseProps = {
  height?: string | number
  width?: string | number
  color?: string
  ariaLabel?: string
  wrapperStyle?: Style
  visible?: boolean
}
type AudioProps = BaseProps
type BarsProps = BaseProps
type CirclesProps = BaseProps
type HeartsProps = BaseProps
type TriangleProps = BaseProps
type CradleLoaderProps = Omit<BaseProps, 'height' | 'width' | 'color'>

type BallTriangleProps = BaseProps & {
  radius?: string | number
}
type GridProps = BaseProps & {
  radius?: string | number
}
type RingsProps = BaseProps & {
  radius?: string | number
}
type TailSpinProps = BaseProps & {
  radius?: string | number
}
type ThreeDotsProps = BaseProps & {
  radius?: string | number
}
type WatchProps = BaseProps & {
  radius?: string | number
}
type PlaneProps = Omit<BaseProps, 'width' | 'height'> & {
  secondaryColor?: string
}
type MutatingDotsProps = BaseProps & {
  radius?: string | number
  secondaryColor?: string
}
type PuffProps = BaseProps & {
  radius?: string | number
  secondaryColor?: string
}
type RevolvingDotProps = BaseProps & {
  radius?: string | number
  secondaryColor?: string
}
type RotatingSquareProps = Omit<BaseProps, 'wrapperClass'> & {
  style?: Style
  strokeWidth?: string | number
}
type OvalProps = BaseProps & {
  strokeWidth?: string | number
  strokeWidthSecondary?: string | number
  secondaryColor?: string
}
type LineWaveProps = BaseProps & {
  firstLineColor?: string
  middleLineColor?: string
  lastLineColor?: string
}
type CirclesWithBarProps = BaseProps & {
  outerCircleColor?: string
  innerCircleColor?: string
  barColor?: string
}
type ThreeCirclesProps = BaseProps & {
  outerCircleColor?: string
  innerCircleColor?: string
  middleCircleColor?: string
}

export type spinnerTypes = {
  audio: AudioProps
  ballTriangle: BallTriangleProps
  bars: BarsProps
  cradleLoader: CradleLoaderProps
  circles: CirclesProps
  circlesWithBar: CirclesWithBarProps
  grid: GridProps
  hearts: HeartsProps
  lineWave: LineWaveProps
  mutatingDots: MutatingDotsProps
  oval: OvalProps
  plane: PlaneProps
  puff: PuffProps
  revolvingDot: RevolvingDotProps
  rotatingSquare: RotatingSquareProps
  rings: RingsProps
  tailsSpin: TailSpinProps
  threeDots: ThreeDotsProps
  threeCircles: ThreeCirclesProps
  triangle: TriangleProps
  watch: WatchProps
}

export type SpinnersIntersection = AudioProps &
  BallTriangleProps &
  BarsProps &
  CirclesProps &
  CirclesWithBarProps &
  CradleLoaderProps &
  GridProps &
  HeartsProps &
  LineWaveProps &
  MutatingDotsProps &
  OvalProps &
  PlaneProps &
  PuffProps &
  RevolvingDotProps &
  RingsProps &
  RotatingSquareProps &
  TailSpinProps &
  ThreeCirclesProps &
  ThreeDotsProps &
  TriangleProps &
  WatchProps

type WrapperClassDynamicType<SpinnerType> =
  SpinnerType extends RotatingSquareProps
    ? { wrapperClass?: '' }
    : { wrapperClass?: string }

export type SpinnerProps = {
  type?: keyof typeof LoaderSpinners
  presets?: 'primaryColor' | 'secondaryColor' | 'primaryText' | 'secondaryText'
  customStyled?: Style
  customModifiers?: ModifiersConfig
  modifiers?: string[] | string
} & SpinnersIntersection &
  WrapperClassDynamicType<RotatingSquareProps>

/**
 * Props Description @function Spinner @typedef props:SpinnerProps
 * @param type - spinner type to render **{"audio" | "ballTriangle" | "bars" | "cradleLoader" | "circles" | "circlesWithBar" | "grid" | "hearts" | "lineWave" | "mutatingDots" | "oval" | "plane" | "puff" | "revolvingDot" | "rotatingSquare" | "rings" | "tailsSpin" | "threeDots" | "threeCircles" | "triangle" | "watch"}**
 * @param color - spinner color **{ string }**
 * @param width - spinner width **{ string }**
 * @param height - spinner height **{ string }**
 * @param radius - spinner radius **{ number }**
 * @param wrapperStyle - spinner wrapper style **{@linkcode Style}**
 * @param wrapperClass - spinner wrapper className **{ string }**
 * @param visible: visibility **{ boolean }**
 * @param presets - color and secondary color presets **{'primaryText' | 'primaryColor' | 'secondaryText' | 'secondaryColor'}**
 * @param customStyled -  client side style prop {@linkcode Style }
 * @param customModifiers -  client modifiers config {@linkcode ModifiersConfig }
 * @param modifiers - accessing style preset defined in MODIFIERS_CONFIG **{ 'spacedLeft10'| 'spacedRight10 }**

 *  @example <Spinner {...args} type={'watch'} radius={45} />
 */

// https://medium.com/raccoons-group/why-you-probably-shouldnt-use-react-fc-to-type-your-react-components-37ca1243dd13

export const Spinner: FC<SpinnerProps> = ({
  type,
  presets,
  visible,
  ...props
}) => {
  const LoaderSpinner = LoaderSpinners[type ?? 'oval']

  const theme = useTheme()
  let color = theme.palette.primary.main
  let secondaryColor = theme.palette.secondary.main

  switch (presets) {
    case 'primaryText':
      color = theme.palette.textPrimary.main
      secondaryColor = theme.palette.textSecondary.main
      break
    case 'primaryColor':
      color = theme.palette.primary.main
      secondaryColor = theme.palette.secondary.main
      break
    case 'secondaryText':
      color = theme.palette.textSecondary.main
      secondaryColor = theme.palette.textPrimary.main
      break
    case 'secondaryColor':
      color = theme.palette.secondary.main
      secondaryColor = theme.palette.primary.main
      break
  }

  return visible ? (
    <StyledSpinnerWrapper {...props}>
      <LoaderSpinner color={color} secondaryColor={secondaryColor} {...props} />
    </StyledSpinnerWrapper>
  ) : null
}

Spinner.defaultProps = {
  width: 50,
  height: 50,
  radius: 50,
  ariaLabel: 'loading',
  presets: 'primaryText',
  visible: true,
  modifiers: [],
  type: 'audio'
}
