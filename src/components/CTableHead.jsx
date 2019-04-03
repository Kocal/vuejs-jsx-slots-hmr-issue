export default {
  name: 'CTableHead',
  functional: true,
  render(h, context) {
    return <th class="data-col">{context.slots().default}</th>
  }
}
