<template>
  <b-card-body>
    <div class="table-responsive">
      <table
        :id="id"
        class="table table-striped"
        role="grid"
        data-toggle="data-table"
      >
        <thead>
          <tr class="ligth">
            <th v-for="(header, index) in headers"
                :key="index">
              {{header.label}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listData"
            :key="index"
          >
<!--            <slot :name="header.key"></slot>-->
            <slot v-for="header in headers" :name="header.key">
              <td>
                {{ item[header.key] }}
              </td>
            </slot>
          </tr>
        </tbody>
      </table>
    </div>
  </b-card-body>
</template>
<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: String,
      default: 'table-widget'
    },
    url: {
      type: String,
      default: ''
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      listData: [],
    };
  },
  methods: {
    getList(url) {
      axios
        .get(url)
        .then((response) => {
          // handle success
          // console.log(response?.data?.data);
          this.listData = response?.data?.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
  },
};
</script>
