<template>
  <div id="app">
    <DataTable :headers="headers" :items="items">
      <CTableRow slot="item" slot-scope="{ item }">
          <CTableCell>{{ item.id }}</CTableCell>
          <CTableCell>{{ item.name }}</CTableCell>
      </CTableRow>
    </DataTable>
  </div>
</template>

<script>
import DataTable from './components/DataTable';
import CTableRow from './components/CTableRow';
import CTableCell from './components/CTableCell';

export default {
  name: 'app',
  components: { CTableCell, CTableRow, DataTable },
  data() {
    return {
      headers: [
        { text: "Foo" },
        { text: "Bar" },
      ],
      items: [
        { id: 1, name: 'Name #1'},
        { id: 2, name: 'Name #2'},
        { id: 3, name: 'Name #3'}
      ]
    };
  },
};
</script>
