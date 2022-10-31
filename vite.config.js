import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') {
    return {}
  }

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'stimulus-sortable'
      },
      rollupOptions: {
        external: ['@rails/request.js', 'sortablejs', '@hotwired/stimulus'],
        output: {
          globals: {
            '@rails/request.js': 'Request.js',
            'sortablejs': 'Sortable',
            '@hotwired/stimulus': 'Stimulus'
          }
        }
      }
    }
  }
}
