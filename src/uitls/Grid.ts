export class Cell {
  x: number
  y: number
  weight: number
  constructor (x: number, y: number, weight: number = 0) {
    this.x = x
    this.y = y
    this.weight = weight
  }
}

interface GridDragCache {
  startX: number | null
  startY: number | null
  endX: number | null
  endY: number | null
}

export class Grid {
  row: number
  column: number
  cells: Array<any>
  dragFlag: boolean
  dragCache: GridDragCache
  constructor(row: number, column: number) {
    this.row = row
    this.column = column
    this.cells = []

    this.dragFlag = false
    this.dragCache = {
      startX: null,
      startY: null,
      endX: null,
      endY: null
    }

    for (let colIndex = 0; colIndex < column; colIndex++) {
      for (let rowIndex = 0; rowIndex < row; rowIndex++) {
        this.addCell(colIndex, rowIndex, 100)
      }
    }
  }

  _resetDragCache () {
    this.dragCache = {
      startX: null,
      startY: null,
      endX: null,
      endY: null
    }
  }

  addCell (x: number, y: number, data: any) {
    const cell = new Cell(x, y, data)
    const column = this.cells[x]
    if (column) {
      column[y] = cell
    } else {
      this.cells[x] = []
      this.cells[x][y] = cell
    }
  }

  getCell (x: number, y: number) : Cell {
    return this.cells[x][y]
  }

  dragStart (cell: Cell) {
    this.dragCache.startX = cell.x
    this.dragCache.startY = cell.y
    this.dragFlag = true
  }
  dragFinish (cell: Cell) {
    this.dragCache.endX = cell.x
    this.dragCache.endY = cell.y
    console.log(this.dragCache)
    this.dragFlag = false
  }

  dragCancel () {
    this.dragFlag = false
    this._resetDragCache()
    console.log(this.dragCache)
  }

  getTopCell (cell: Cell) {}
  getBottomCell (cell: Cell) {}
  getLeftCell (cell: Cell) {}
  getRightCell (cell: Cell) {}
}
