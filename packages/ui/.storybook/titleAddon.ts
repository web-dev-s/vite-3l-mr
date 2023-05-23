// .storybook/titleAddon.ts

import addons from '@storybook/addons'
import { STORY_RENDERED } from '@storybook/core-events'
import type { Story, Group } from '@storybook/api'

addons.register('TitleAddon', (api) => {
  const cunstomTitle = 'Monorepo UI - Design System' // Define your customTitle title
  let interval: number | null = null
  const setTitle = () => {
    interval && clearTimeout(interval)
    let storyData: Story | Group | null = null
    try {
      storyData = api.getCurrentStoryData() // Some time get error
    } catch (e) {}
    let title
    if (!storyData) {
      title = cunstomTitle
    } else {
      title = `${(storyData as Story)?.kind} - ${
        storyData.name
      } ⋅ ${cunstomTitle}`
    }
    if (document.title !== title) {
      // As few dom operations as possible
      document.title = title
    }
    interval = setTimeout(setTitle, 100)
  }
  setTitle()
  api.on(STORY_RENDERED, (_story) => {
    setTitle()
  })
})
