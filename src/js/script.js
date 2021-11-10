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

const MEDIA_QUERY = window.matchMedia("(min-width: 1024;)");

const align_functions = {
  margin: (alignTo=["center", "center"]) => {
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
  },
  table_cell: (alignTo=["center", "center"]) => {
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
  },
  positions: (alignTo=["center", "center"]) => {
    const align_number = {
      right: 2,
      center: 1,
      left: 0 
    };
  
    const left_position = (align_number[`${alignTo[0]}`] * 100) / 2;
    const top_position = (align_number[`${alignTo[1]}`] * 100) / 2;
    
    ALIGN_OBJ.positions.child.style = `left: ${left_position}%; top: ${top_position}%; transform: translate(-${left_position}%, -${top_position}%);`;
    ALIGN_OBJ.positions.align_status = [alignTo[0], alignTo[1]];
  },
  flexbox: (alignTo=["center", "center"]) => {
    const flex_value = {
      right: "flex-end",
      center: "center",
      left: "flex-start"
    };
  
    const justify_content = flex_value[`${alignTo[0]}`];
    const align_items = flex_value[`${alignTo[1]}`];
  
    ALIGN_OBJ.flexbox.obj.style = `justify-content: ${justify_content}; align-items: ${align_items};`;
    ALIGN_OBJ.flexbox.align_status = [alignTo[0], alignTo[1]];
  },
  grid: (alignTo=["center", "center"]) => {
    const grid_cell = {
      right: 3,
      center: 2,
      left: 1
    };
  
    const column_cell = grid_cell[`${alignTo[0]}`];
    const row_cell = grid_cell[`${alignTo[1]}`];
    
    ALIGN_OBJ.grid.child.style = `grid-column: ${column_cell}; grid-row: ${row_cell};`;
    ALIGN_OBJ.grid.align_status = [alignTo[0], alignTo[1]];
  }
};

const alignAll = (moveAxis="x", index_operator=-1, global_align_status={}) => {
  let index_arr = 0;

  if (moveAxis !== "x") { index_arr = 1; }

  Object.entries(global_align_status).forEach(([key, value]) => {
    const align_index = POSIBLE_ALIGN.indexOf(value[index_arr]) + (index_operator);
    if (align_index >= 0 && align_index <= (POSIBLE_ALIGN.length - 1)) {
      if (moveAxis === "x") { align_functions[key]([POSIBLE_ALIGN[align_index], value[1]]); }
        else { align_functions[key]([value[0], POSIBLE_ALIGN[align_index]]); }
    }
  });
};

const checkGlobalAlign = () => {
  const global_align = {};
  Object.entries(ALIGN_OBJ).forEach(([key, value]) => { global_align[key] = value.align_status; });
  return global_align;
};

window.onload = () => {

};

window.onkeydown = (event) => {
  if (KEY_CODES.includes(event.keyCode)) {
    event.preventDefault();
    
    const index_key_down = KEY_CODES.indexOf(event.keyCode);
    const global_align = checkGlobalAlign();
    const index_align = {};

    Object.entries(global_align).forEach(([key, values]) => {
      index_align[key] = [POSIBLE_ALIGN.indexOf(values[0]), POSIBLE_ALIGN.indexOf(values[1])];
    });
 
    switch (index_key_down) {
      case 0:
        alignAll("x", -1, global_align);
        break;
      case 1:
        alignAll("y", -1, global_align);
        break;
      case 2:
        alignAll("x", 1, global_align);
        break;
      case 3:
        alignAll("y", 1, global_align);
        break;
      default:
        console.error("Error: Invalid Key Down Index")
        break;
    }
  }
}