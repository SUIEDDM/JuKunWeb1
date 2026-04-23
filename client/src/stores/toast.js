import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const visible = ref(false)
  const type = ref('info')
  const title = ref('')
  const message = ref('')

  let timeout = null

  const show = (options) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    type.value = options.type || 'info'
    title.value = options.title || ''
    message.value = options.message || ''
    visible.value = true

    timeout = setTimeout(() => {
      hide()
    }, options.duration || 3000)
  }

  const hide = () => {
    visible.value = false
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  const success = (title, message = '') => {
    show({ type: 'success', title, message })
  }

  const error = (title, message = '') => {
    show({ type: 'error', title, message })
  }

  const info = (title, message = '') => {
    show({ type: 'info', title, message })
  }

  return {
    visible,
    type,
    title,
    message,
    show,
    hide,
    success,
    error,
    info
  }
})
