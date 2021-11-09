// Made By Bl4ky113

const ALIGN_OBJ = {
  margin: {
    obj: document.getElementsByClassName("align--margin")[0],
    align_status: ["left", "left"] 
  },
  table_cell:{ 
    obj: document.getElementsByClassName("align--table-cell")[0],
    align_status: ["left", "left"] 
  },
  positions: {
    obj: document.getElementsByClassName("align--positions")[0],
    align_status: ["left", "left"]
  },
  flexbox: {
    obj: document.getElementsByClassName("align--flexbox")[0],
    align_status: ["left", "left"]
  },
  grid: {
    obj: document.getElementsByClassName("align--grid")[0],
    align_status: ["left", "left"]
  }
};

Object.values(ALIGN_OBJ).forEach(value => {
  value["child"] = value.obj.firstChild;
});

const KEY_CODES = [37, 38, 39, 40];
const POSIBLE_ALIGN = ["left", "center", "right"];

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
  ALIGN_OBJ.margin.align_status = [alignTo[0], alignTo[1]];
};

const alignTableCell = (alignTo=["center", "center"]) => {
  const text_value = {
    right: "right",
    center: "center",
    left: "left"
  };
  const vertical_value = {
    right: "bottom; padding-top: 0.25rem;",
    center: "middle; padding-top: 0.15rem;",
    left: "top;"
  };

  const text_align = text_value[`${alignTo[0]}`];
  const vertical_align = vertical_value[`${alignTo[1]}`];
  
  ALIGN_OBJ.table_cell.obj.style = `text-align: ${text_align}; vertical-align: ${vertical_align};`;
  ALIGN_OBJ.table_cell.align_status = [alignTo[0], alignTo[1]];
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
  ALIGN_OBJ.positions.align_status = [alignTo[0], alignTo[1]];
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
  ALIGN_OBJ.flexbox.align_status = [alignTo[0], alignTo[1]];
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
  ALIGN_OBJ.grid.align_status = [alignTo[0], alignTo[1]];
};

const alignAll = (alignTo=["center", "center"]) => {
  alignMargin(alignTo);
  alignTableCell(alignTo);
  alignPositions(alignTo);
  alignFlexbox(alignTo);
  alignGrid(alignTo);
};

const checkGlobalAlign = () => {
  let global_align = {
    x: [],
    y: []
  };

  Object.values(ALIGN_OBJ).forEach(value => {
    global_align.x.push(value.align_status[0]);
    global_align.y.push(value.align_status[1]);
  });

  let first_x = global_align.x[0];
  let same_val_x = true;
  for (let value of global_align.x) {
    if (value != first_x) {
      same_val_x = false;
      break;
    }
  }

  let first_y = global_align.y[0];
  let same_val_y = true;
  for (let value of global_align.y) {
    if (value != first_y) {
      same_val_y = false;
      break;
    }
  }

  let return_value = [];
  if (same_val_x === true) { return_value[0] = global_align.x[0]; }
    else { return_value[0] = global_align.x; }

  if (same_val_y === true) { return_value[1] = global_align.y[0]; }
    else { return_value[1] = global_align.y; }

  return return_value;
};

window.onload = () => {
  alignAll();
};

window.onkeydown = (event) => {
  if (KEY_CODES.includes(event.keyCode)) {
    const index_key_down = KEY_CODES.indexOf(event.keyCode);
    const global_align = checkGlobalAlign();
    const index_global_align = {
      x: POSIBLE_ALIGN.indexOf(global_align[0]),
      y: POSIBLE_ALIGN.indexOf(global_align[1])
    };

    switch (index_key_down) {
      case 0:
        if (index_global_align.x > 0) { index_global_align.x -= 1; }
        alignAll([POSIBLE_ALIGN[index_global_align.x], global_align[1]])
        break;
      case 1:
        if (index_global_align.y > 0) { index_global_align.y -= 1; }
        alignAll([global_align[0], POSIBLE_ALIGN[index_global_align.y]])
        break;
      case 2:
        if (index_global_align.x < (POSIBLE_ALIGN.length - 1)) { index_global_align.x += 1; }
        alignAll([POSIBLE_ALIGN[index_global_align.x], global_align[1]])
        break;
      case 3:
        if (index_global_align.y < (POSIBLE_ALIGN.length - 1)) { index_global_align.y += 1; }
        alignAll([global_align[0], POSIBLE_ALIGN[index_global_align.y]])
        break;
      default:
        console.error("Error: Invalid Key Down Index")
        break;
    }

    console.log(index_global_align)
  }
}

