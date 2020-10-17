import { Controller } from 'stimulus'
import Sortable from 'sortablejs'

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
    if (!item.dataset.sortableUpdateUrl || typeof Rails === 'undefined') return

    const data = new FormData()
    data.append('position', newIndex + 1)

    Rails.ajax({
      url: item.dataset.sortableUpdateUrl,
      type: 'PATCH',
      data
    })
  }
}
