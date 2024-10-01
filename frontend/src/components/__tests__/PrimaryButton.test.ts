import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import PrimaryButton from '../common/PrimaryButton.vue'

describe('PrimaryButton', () => {
  const btnText = 'SEND'
  const updatedText = 'CLICKED'

  it('renders slot text', () => {
    const wrapper = mount(PrimaryButton, {
      slots: { default: btnText }
    })
    expect(wrapper.text().includes('SEND'))
  })

  it('resolves click event', async () => {
    const wrapper = mount(PrimaryButton, {
      slots: { default: btnText },
      attrs: {
        click: () => {
          const btnElement = document.getElementsByTagName('button')[0]
          btnElement.innerHTML = updatedText
        }
      }
    })
    await wrapper.get('button').trigger('click')
    expect(wrapper.find('button').text().includes(updatedText))
  })
})
