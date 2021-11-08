// Made By Bl4ky113

const ALIGN_OBJ = {
  margin: {
    obj: document.getElementsByClassName("align--margin")[0],
  },
  table_cell:{ 
    obj: document.getElementsByClassName("align--table-cell")[0]
  },
  positions: {
    obj: document.getElementsByClassName("align--positions")[0]
  },
  flexbox: {
    obj: document.getElementsByClassName("align--flexbox")[0]
  },
  grid: {
    obj: document.getElementsByClassName("align--grid")[0]
  }
};

Object.entries(ALIGN_OBJ).forEach(([key, align]) => {
  align["child"] = align.obj.firstChild;
});

const KEY_CODES = [37, 38 , 39, 40];

const alignMargin = (alignTo=["center", "center"]) => {
  const width = ALIGN_OBJ.margin.child.offsetWidth;
  const height = ALIGN_OBJ.margin.child.offsetHeight;

  const multiplier = {
    right: 2,
    center: 1,
    left: 0
  };

  const left_margin = (multiplier[`${alignTo[0]}`] * width) / 16;
  const top_margin = (multiplier[`${alignTo[1]}`] * height) / 16;

  ALIGN_OBJ.margin.child.style = `margin-left: ${left_margin}rem; margin-top: ${top_margin}rem;`;
};

const alignTableCell = (alignTo=["center", "left"]) => {
  const text_value = {
    right: "right",
    center: "center",
    left: "left"
  };
  const vertical_value = {
    right: "top;",
    center: "middle; padding-top: 0.15rem;",
    left: "bottom; padding-top: 0.25rem;"
  };

  const text_align = text_value[`${alignTo[0]}`];
  const vertical_align = vertical_value[`${alignTo[1]}`];

  ALIGN_OBJ.table_cell.obj.style = `text-align: ${text_align}; vertical-align: ${vertical_align};`;
};

const alignPositions = (alignTo=["center", "center"]) => {
  const align_number = {
    right: 2,
    center: 1,
    left: 0 
  };

  const left_position = (align_number[`${alignTo[0]}`] * 100) / 2;
  const top_position = (align_number[`${alignTo[1]}`] * 100) / 2;

  ALIGN_OBJ.positions.child.style = `left: ${left_position}%; top: ${top_position}%; transform: translate(-${left_position}%, -${top_position}%);`;
};

const alignFlexbox = (alignTo=["center", "center"]) => {
  const flex_value = {
    right: "flex-end",
    center: "center",
    left: "flex-start"
  };

  const justify_content = flex_value[`${alignTo[0]}`];
  const align_items = flex_value[`${alignTo[1]}`];

  ALIGN_OBJ.flexbox.obj.style = `justify-content: ${justify_content}; align-items: ${align_items};`;
};

const alignGrid = (alignTo=["center", "center"]) => {
  const grid_cell = {
    right: 3,
    center: 2,
    left: 1
  };

  const column_cell = grid_cell[`${alignTo[0]}`];
  const row_cell = grid_cell[`${alignTo[1]}`];
  
  ALIGN_OBJ.grid.child.style = `grid-column: ${column_cell}; grid-row: ${row_cell};`;
};

window.onload = () => {
  
};

// window.onkeydown = (event) => {
//   if (KEY_CODES.includes(event.keyCode)) {
    
//   }
// }

