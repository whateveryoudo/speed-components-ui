<template>
  <Demo :code="code">
    <div class="demo-wrapper">
      <s-query-filter
        :search-where="searchWhere"
        :default-search-where="defaultSearchWhere"
        :col="6"
        @search="handleSearch"
      />
    </div>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SearchWhereItem } from '@/components/QueryFilter/type'

// 搜索配置
const searchWhere = ref<SearchWhereItem[]>([
  {
    key: 'name',
    label: '姓名',
    val: '',
    filterCom: 'input',
    type: 'FormInput'
  },
  {
    key: 'age',
    label: '年龄',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormInputNumber'
  },
  {
    key: 'status',
    label: '状态',
    val: '',
    filterCom: 'select',
    type: 'FormSelect',
    props: {
      relaOptFlag: 'status'
    }
  },
  {
    key: 'date',
    label: '日期',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormDatePicker',
    props: {
      valueFormat: 'YYYY-MM-DD'
    }
  },
  {
    key: 'time',
    label: '时间',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormTimePicker',
    props: {
      valueFormat: 'HH:mm:ss'
    }
  },
  {
    key: 'datetime',
    label: '日期时间',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormDateTimePicker',
    props: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  {
    key: 'switch',
    label: '开关',
    val: '',
    filterCom: 'select',
    type: 'FormSwitch'
  },
  {
    key: 'multiple',
    label: '多选',
    val: [],
    filterCom: 'select',
    type: 'FormSelectMultiple',
    props: {
      relaOptFlag: 'tags'
    }
  }
])

// 默认搜索条件
const defaultSearchWhere = ref<SearchWhereItem[]>([
  {
    key: 'name',
    label: '姓名',
    val: '',
    filterCom: 'input',
    type: 'FormInput'
  },
  {
    key: 'age',
    label: '年龄',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormInputNumber'
  },
  {
    key: 'status',
    label: '状态',
    val: '',
    filterCom: 'select',
    type: 'FormSelect',
    props: {
      relaOptFlag: 'status'
    }
  }
])

// 搜索回调
const handleSearch = (values: SearchWhereItem[], isSearch: boolean) => {
  console.log('搜索条件:', values)
  console.log('是否点击搜索:', isSearch)
}

const code = `<template>
  <s-query-filter
    :search-where="searchWhere"
    :default-search-where="defaultSearchWhere"
    :col="6"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SearchWhereItem } from '@/components/QueryFilter/type'

// 搜索配置
const searchWhere = ref<SearchWhereItem[]>([
  {
    key: 'name',
    label: '姓名',
    val: '',
    filterCom: 'input',
    type: 'FormInput'
  },
  {
    key: 'age',
    label: '年龄',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormInputNumber'
  },
  {
    key: 'status',
    label: '状态',
    val: '',
    filterCom: 'select',
    type: 'FormSelect',
    props: {
      relaOptFlag: 'status'
    }
  },
  {
    key: 'date',
    label: '日期',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormDatePicker',
    props: {
      valueFormat: 'YYYY-MM-DD'
    }
  },
  {
    key: 'time',
    label: '时间',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormTimePicker',
    props: {
      valueFormat: 'HH:mm:ss'
    }
  },
  {
    key: 'datetime',
    label: '日期时间',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormDateTimePicker',
    props: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  {
    key: 'switch',
    label: '开关',
    val: '',
    filterCom: 'select',
    type: 'FormSwitch'
  },
  {
    key: 'multiple',
    label: '多选',
    val: [],
    filterCom: 'select',
    type: 'FormSelectMultiple',
    props: {
      relaOptFlag: 'tags'
    }
  }
])

// 默认搜索条件
const defaultSearchWhere = ref<SearchWhereItem[]>([
  {
    key: 'name',
    label: '姓名',
    val: '',
    filterCom: 'input',
    type: 'FormInput'
  },
  {
    key: 'age',
    label: '年龄',
    val: '',
    filterCom: 'inputNumber',
    type: 'FormInputNumber'
  },
  {
    key: 'status',
    label: '状态',
    val: '',
    filterCom: 'select',
    type: 'FormSelect',
    props: {
      relaOptFlag: 'status'
    }
  }
])

// 搜索回调
const handleSearch = (values: SearchWhereItem[], isSearch: boolean) => {
  console.log('搜索条件:', values)
  console.log('是否点击搜索:', isSearch)
}
<\/script>`
</script>

<style scoped lang="less">
.demo-wrapper {
  width: 100%;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
}
</style> 