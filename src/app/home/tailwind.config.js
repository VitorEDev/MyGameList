module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'status-pendente':  '#f59e0b',
        'status-feito':     '#22c55e',
        'status-andamento': '#0ea5e9',
        'status-ativo':     '#3b82f6',
        'status-inativo':   '#6b7280',
      }
    }
  },
  plugins: [],
}
