import { Controller } from 'stimulus'
import Sortable from 'sortablejs'
import Rails from '@rails/ujs'

export default class extends Controller {

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

  end ({ item, newIndex }) {
    if (!item.dataset.sortableUpdateUrl || !window._rails_loaded) return

    const resourceName = this.data.get('resourceName')
    const param = resourceName ? `${resourceName}[position]` : 'position'

    const data = new FormData()
    data.append(param, newIndex + 1)

    Rails.ajax({
      url: item.dataset.sortableUpdateUrl,
      type: 'PATCH',
      data
    })
  }

  get options () {
    return {
      animation: this.data.get('animation') || this.defaultOptions.animation || 150,
      handle: this.data.get('handle') || this.defaultOptions.handle || undefined,
      onEnd: this.end
    }
  }

  get defaultOptions () {
    return {}
  }
}
