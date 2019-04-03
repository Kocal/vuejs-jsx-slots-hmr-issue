export default {
  name: 'CTableCell',
  functional: true,
  render(h, context) {
    return <td class="data-col">{context.slots().default}</td>
  }
}
