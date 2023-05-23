import { Meta, Story } from '@storybook/react'
import { omit } from 'lodash'

import { ElementWrapper, Row, StoryWrapper } from '../helpers/Storybook'
import { Colors } from '../theme'

import * as brandIcons from './brand'
import * as controlIcons from './control'
import * as reactionIcons from './reaction'
import * as tutorialIcons from './tutorial'
import * as uiIcons from './ui'

export default {
  title: 'Icons/Icons',
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: [
          Colors.monorepo,
          Colors.sky,
          Colors.error,
          Colors.warning,
          Colors.success
        ]
      }
    },
    stroke: {
      control: { type: 'color', presetColors: ['red', 'green'] }
    },
    fill: {
      control: { type: 'color', presetColors: ['red', 'green'] }
    }
  }
} as Meta

const icons = {
  'UI Icons': {
    Account: uiIcons.Account,
    AddUser: uiIcons.AddUser,
    ArrowDown: uiIcons.ArrowDown,
    ArrowLeft: uiIcons.ArrowLeft,
    ArrowRight: uiIcons.ArrowRight,
    ArrowUp: uiIcons.ArrowUp,
    BlockUser: uiIcons.BlockUser,
    Calendar: uiIcons.Calendar,
    CalendarAdd: uiIcons.CalendarAdd,
    Camera: uiIcons.Camera,
    Camcorder: uiIcons.Camcorder,
    Chat: uiIcons.Chat,
    Check: uiIcons.Check,
    ChevronDown: uiIcons.ChevronDown,
    ChevronLeft: uiIcons.ChevronLeft,
    ChevronRight: uiIcons.ChevronRight,
    ChevronUp: uiIcons.ChevronUp,
    Clock: uiIcons.Clock,
    Close: uiIcons.Close,
    CreditCard: uiIcons.CreditCard,
    Dances: uiIcons.Dances,
    Email: uiIcons.Email,
    Emotes: uiIcons.Emotes,
    Events: uiIcons.Events,
    Eye: uiIcons.Eye,
    EyeCrossed: uiIcons.EyeCrossed,
    GroupChat: uiIcons.GroupChat,
    Help: uiIcons.Help,
    Information: uiIcons.Information,
    LeaveGroup: uiIcons.LeaveGroup,
    Location: uiIcons.Location,
    MagnifyingGlass: uiIcons.MagnifyingGlass,
    Map: uiIcons.Map,
    Maximize: uiIcons.Maximize,
    Minimize: uiIcons.Minimize,
    Moon: uiIcons.Moon,
    MoonFilled: uiIcons.MoonFilled,
    MoveLeft: uiIcons.MoveLeft,
    MoveRight: uiIcons.MoveRight,
    Options: uiIcons.Options,
    PaperPlaneFilled: uiIcons.PaperPlaneFilled,
    Pencil: uiIcons.Pencil,
    Phone: uiIcons.Phone,
    Play: uiIcons.Play,
    Plus: uiIcons.Plus,
    Random: uiIcons.Random,
    Rename: uiIcons.Rename,
    Reset: uiIcons.Reset,
    Save: uiIcons.Save,
    Settings: uiIcons.Settings,
    Teleport: uiIcons.Teleport,
    ThumbsUp: uiIcons.ThumbsUp,
    TrashCan: uiIcons.TrashCan,
    Upload: uiIcons.Upload,
    View: uiIcons.View
  },
  'Reactions Icons': {
    Hello: reactionIcons.Hello,
    HighWave: reactionIcons.HighWave,
    Clap: reactionIcons.Clap,
    Yes: reactionIcons.Yes,
    No: reactionIcons.No,
    FistBump: reactionIcons.FistBump,
    Beckon: reactionIcons.Beckon
  },
  'Control Icons': {
    HotkeyKey: controlIcons.HotkeyKey,
    Hotkey: controlIcons.Hotkey,
    MouseLeft: controlIcons.MouseLeft,
    MouseRight: controlIcons.MouseRight
  },
  'Tutorial Icons': {
    CharacterCustomize: tutorialIcons.CharacterCustomize
  },
  'Brand Icons': {
    FacebookFilled: brandIcons.FacebookFilled,
    Google: brandIcons.Google,
    GoogleFilled: brandIcons.GoogleFilled,
    LinkedinFilled: brandIcons.LinkedinFilled,
    Wordmark: brandIcons.Wordmark
  }
}

const TemplateExtra: Story<React.SVGProps<SVGSVGElement>> = (svgProps) => (
  <StoryWrapper>
    {Object.entries(icons)?.map(([category, categoryIcons]) => (
      <Row key={category} title={category}>
        {Object.entries(categoryIcons).map(([name, Icon]) => (
          <ElementWrapper description={name} key={name}>
            <Icon
              style={{
                width: 36,
                height: 36,
                ...svgProps?.style
              }}
              {...omit(svgProps, ['style'])}
            />
          </ElementWrapper>
        ))}
      </Row>
    ))}
  </StoryWrapper>
)

export const Generic = TemplateExtra.bind({})
Generic.args = {
  color: Colors.monorepo,
  strokeWidth: 1,
  strokeDasharray: 0
}
