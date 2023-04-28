<script setup lang="ts">
import { reactive } from 'vue'
import { Cell, Grid } from '@/uitls/Grid'

const MouseKey = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
  DOWN: 3,
  UP: 4
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault()
})

console.clear()
console.log('Page View')

const myGrid = new Grid(8, 10)
const grid = reactive(myGrid)

function onmousedown (event: MouseEvent, r: number, c: number) {
  if (event.button === MouseKey.LEFT) {
    const x = c - 1
    const y = r - 1
    const cell: Cell = myGrid.getCell(x, y)
    myGrid.dragStart(cell)
  }
}

function onmouseup (event: MouseEvent, r: number, c: number) {
  if (event.button === MouseKey.LEFT) {
    const x = c - 1
    const y = r - 1
    const cell: Cell = myGrid.getCell(x, y)
    myGrid.dragFinish(cell)
  }
}

function onmouseleave () {
  myGrid.dragCancel()
}

</script>

<template>
  <div class="page-about">
      <div class="cells-box" @mouseleave="onmouseleave">
        <div v-for="r in grid.row" :key="r">
          <div
            v-for="c in grid.column"
            :key="c"
            class="cell flex-center flex-inline"
            @mousedown="onmousedown($event, r, c)"
            @mouseup="onmouseup($event, r, c)">
            ( {{ c - 1 }}, {{ r - 1 }} )
          </div>
        </div>
      </div>
  </div>
</template>

<style>
.page-about {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 24px;
}
.cells-box {
  display: inline-block;
  width: auto;
  border: 1px solid #EEEEEE;
  white-space: nowrap;
}
.cell {
  box-sizing: border-box;
  vertical-align: top;
  width: 60px;
  height: 60px;
  border: 1px solid #EEEEEE;
  user-select: none;
}
</style>
