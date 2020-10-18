import { Controller } from 'stimulus'
import Sortable from 'sortablejs'
import Rails from '@rails/ujs'

export default class extends Controller {
  connect () {
    const options = {
      animation: this.data.get('animation') || 150,
      handle: this.data.get('handle') || undefined,
      onEnd: this.end.bind(this)
    }

    this.sortable = new Sortable(this.element, options)
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
}
