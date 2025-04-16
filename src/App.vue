<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Input from './components/Input/Input.vue'
import Switch from '@/components/Switch/Switch.vue'
import Select from './components/Select/Select.vue'
import { createMessage } from './components/Message/method'
import type { MenuOption } from './components/Dropdown/types'
import type { ButtonInstance } from './components/Button/types'
import type { TooltipInstance } from './components/Tooltip/types'

const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)

const openedValue = ref(['a'])
const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' },
]

const switchVal = ref(false)
const test = ref('')

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const handleFetch = (query: any) => {
  if (!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
  .then(res => res.json())
  .then(( { items }) => {
    return items.slice(0, 10).map((item: { name: any; node_id: any }) => ({ label: item.name, value: item.node_id }))
  })
}

const onOpen = () => {
  console.log('open')
  createMessage({ message: 'hello world', duration: 0, showClose: true })
  tooltipRef.value?.show()
}
const close = () => {
  console.log('open')
  tooltipRef.value?.hide()
}
const selectVal = ref('')

const inlineConsole = (...args: any) => {
  console.log(...args)
}

onMounted(() => {
  createMessage({ message: 'hello world', showClose: true })
  createMessage({ message: 'hello world again', duration: 0, type: 'success', showClose: true })
  createMessage({ message: 'hello world three', duration: 0, type: 'danger', showClose: true })
  if (buttonRef.value) {
    // Access the buttonRef instance here
    console.log('buttonRef', buttonRef.value.ref)
  }
})
</script>

<template>
  <main>
    <Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options"
      @visible-change="(e) => inlineConsole('visible change', e)"
      @select="(e) => inlineConsole('select', e)"
      ref="tooltipRef"
    >
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </Dropdown>
    <!-- <Tooltip trigger="hover" ref="tooltipRef" manual content="Tooltip Content" placement="bottom">
      <Button @click="onOpen">Hover me</Button>
    </Tooltip> -->
    <Icon icon="fa-solid fa-user-secret" type="primary" />
    <Button ref="buttonRef" @click="onOpen">Test Button1</Button>
    <Button plain @click="close">Plain Button close</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />
    <Collapse v-model="openedValue">
      <CollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div>this is bbbbb test</div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </CollapseItem>
    </Collapse>
    {{ openedValue }}
    <Input v-model="test" clearable placeholder="输入字符以后可以点击清空"/>
    <Switch v-model="switchVal" activeText="ON" inactiveText="OFF"/>
    <br />
    <Select 
    v-model="selectVal" 
    placeholder="搜索远程结果"
    filterable
    remote
    :remote-method="handleFetch"
  />
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
