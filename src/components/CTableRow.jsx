export default {
  name: 'CTableRow',
  functional: true,
  render(h, context) {
    return <tr class="row">{context.slots().default}</tr>
  }
}
