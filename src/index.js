import { Controller } from 'stimulus'
import Sortable from 'sortablejs'
import { patch } from '@rails/request.js'

export default class extends Controller {
  static values = {
    resourceName: String,
    paramName: String,
    animation: Number,
    handle: String
  }

  initialize () {
    this.end = this.end.bind(this)
  }

  connect () {
    this.sortable = new Sortable(this.element, {
      ...this.defaultOptions,
      ...this.options
    })
  }

  disconnect () {
    this.sortable.destroy()
    this.sortable = undefined
  }

  async end ({ item, newIndex }) {
    if (!item.dataset.sortableUpdateUrl) return

    const resourceName = this.resourceNameValue
    const paramName = this.paramNameValue || 'position'
    const param = resourceName ? `${resourceName}[${paramName}]` : paramName

    const data = new FormData()
    data.append(param, newIndex + 1)

    await patch(item.dataset.sortableUpdateUrl, { body: data })

    this.ended()
  }

  ended () {
    const event = new CustomEvent('sortable-ended')
    window.dispatchEvent(event)
  }

  get options () {
    return {
      animation: this.animationValue || this.defaultOptions.animation || 150,
      handle: this.handleValue || this.defaultOptions.handle || undefined,
      onEnd: this.end
    }
  }

  get defaultOptions () {
    return {}
  }
}
