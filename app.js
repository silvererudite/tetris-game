document.addEventListener('DOMContentLoaded', ()=>{
    
    let grid = document.getElementById("container")
    for(var i=0; i<200; i++){
        let div = document.createElement("div")
        grid.appendChild(div);
    }
    //console.log(grid.childNodes)
    const scoreDisplay = document.querySelector("#score")
    const startDisplay = document.querySelector("#start-btn")
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const width = 10

    const lTetrimino = [
        [1, width+1, width*2+1, 2],
        [width, width+1,width+2, width*2+2],
        [width*2, width*2+1, width+1, 1],
        [width, width*2, width*2+1,width*2+2]
]
const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]
  const theTetriminoes = [lTetrimino,zTetromino, tTetromino, iTetromino, oTetromino]

  let currentPosition = 4
  let current = theTetriminoes[0][0]
  
  //draw
  function draw(){
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetrimino')
    })
  }

  draw()
  
})