<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import type { ButtonInstance } from './components/Button/types'


const buttonRef = ref<ButtonInstance | null>(null)

const openedValue = ref(['a'])

const onOpen = () => {
  console.log('open')
  // alert('clicked')
  // createMessage({ message: 'hello world', duration: 0, showClose: true })
  // tooltipRef.value?.show()
}
const close = () => {
  console.log('open')
  // tooltipRef.value?.hide()
}

onMounted(() => {
  if (buttonRef.value) {
    // Access the buttonRef instance here
    console.log('buttonRef', buttonRef.value.ref)
  }
})
</script>

<template>
  <main>
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
        <div> this is content a aaa </div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div> this is cccc test </div>
      </CollapseItem>
    </Collapse>
    {{ openedValue }}
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
