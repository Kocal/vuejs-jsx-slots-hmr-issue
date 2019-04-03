import CTable from './CTable';
import CTableRow from './CTableRow';
import CTableHead from './CTableHead';

export default {
  name: 'DataTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  render(h) {
    const head = this.headers.map(header => <CTableHead>{header}</CTableHead>);
    const rows = this.items.map(item => this.$scopedSlots.item({ item }));

    return (
      <CTable>
        <CTableRow slot="head">
          {head}
        </CTableRow>
        {rows}
      </CTable>
    );
  },
};
