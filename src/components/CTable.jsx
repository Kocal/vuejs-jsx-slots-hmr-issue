export default {
  name: 'CTable',
  functional: true,
  render(h, context) {
    return (
      <table class="my-table">
        <thead class="thead">
          {context.slots().head}
        </thead>
        <tbody>
          {context.slots().default}
        </tbody>
      </table>
    )
  }
}
