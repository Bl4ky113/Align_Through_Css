// Made By Bl4ky113

const ALIGN_OBJ = {
  margin: {
    obj: document.getElementsByClassName("align--margin")[0],
    code_obj: document.getElementById("code_margin"),
    align_status: ["left", "left"],
    code_scss: `<span class="selector">.align </span>{\n width: <span class="value">15rem</span>;\n height: <span class="value">15rem</span>;\n\n <span class="selector">.align__child</span> {\n  width: <span class="value">5rem</span>;\n  height: <span class="value">5rem</span>;\n\n  margin-top: <span class="value">$VALUE_2$rem</span>;\n  margin-left: <span class="value">$VALUE_1$rem</span>;\n }\n}`
  },
  table_cell:{ 
    obj: document.getElementsByClassName("align--table-cell")[0],
    code_obj: document.getElementById("code_table_cell"),
    align_status: ["left", "left"],
    code_scss: `<span class="selector">.align </span>{\n text-align: <span class="value">$VALUE_1$</span>;\n vertical-align: <span class="value">$VALUE_2$</span>;\n\n display: <span class="value">table-cell</span>;\n\n <span class="selector">.align__child</span> {\n  display: <span class="value">inline-block</span>;\n }\n}`
  },
  positions: {
    obj: document.getElementsByClassName("align--positions")[0],
    code_obj: document.getElementById("code_positions"),
    align_status: ["left", "left"],
    code_scss: `<span class="selector">.align </span>{\n position: <span class="value">relative</span>;\n\n <span class="selector">.align__child</span> {\n  position: <span class="value">absolute</span>;\n  top: <span class="value">$VALUE_1$%</span>;\n  left: <span class="value">$VALUE_2$%</span>;\n  transform: <span class="value">translate(-$VALUE_2$%, -$VALUE_1$%)</span>;\n }\n}`
  },
  flexbox: {
    obj: document.getElementsByClassName("align--flexbox")[0],
    code_obj: document.getElementById("code_flexbox"),
    align_status: ["left", "left"],
    code_scss: `<span class="selector">.align </span>{\n display: <span class="value">flex</span>;\n\n justify-content: <span class="value">$VALUE_1$</span>;\n align-items: <span class="value">$VALUE_2$</span>\n}`
  },
  grid: {
    obj: document.getElementsByClassName("align--grid")[0],
    code_obj: document.getElementById("code_grid"),
    align_status: ["left", "left"],
    code_scss: `<span class="selector">.align </span>{\n display: <span class="value">grid</span>;\n grid-template: <span class="value">repeat(3, 1fr) / repeat(3, 1fr)</span>;\n\n <span class="selector">.align__child</span> {\n  grid-column: <span class="value">$VALUE_1$</span>;\n  grid-row: <span class="value">$VALUE_2$</span>;\n\n }\n}`
  }
};

Object.values(ALIGN_OBJ).forEach(value => {
  value["child"] = value.obj.firstChild;
});

const FONT_SIZE = parseFloat(window.getComputedStyle(document.body).fontSize);
const KEY_CODES = [37, 38, 39, 40];
const POSIBLE_ALIGN = ["left", "center", "right"];
const DEVICE_SCREEN = {
  x: window.screen.width,
  y: window.screen.height,
};

let touch_coordinates = {
  initial: {
    x: 0,
    y: 0
  },
  final: {
    x: 0,
    y: 0
  }
};

const align_functions = {
  margin: (alignTo=["center", "center"]) => {
    const width = ALIGN_OBJ.margin.child.offsetWidth;
    const height = ALIGN_OBJ.margin.child.offsetHeight;
  
    const multiplier = {
      right: 2,
      center: 1,
      left: 0
    };
  
    const left_margin = (multiplier[`${alignTo[0]}`] * width) / FONT_SIZE;
    const top_margin = (multiplier[`${alignTo[1]}`] * height) / FONT_SIZE;
    
    ALIGN_OBJ.margin.child.style = `margin-left: ${left_margin}rem; margin-top: ${top_margin}rem;`;
    ALIGN_OBJ.margin.align_status = [alignTo[0], alignTo[1]];
    ALIGN_OBJ.margin.code_obj.innerHTML = ALIGN_OBJ.margin.code_scss.replace("$VALUE_1$", top_margin).replace("$VALUE_2$", left_margin);
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
    ALIGN_OBJ.table_cell.code_obj.innerHTML = ALIGN_OBJ.table_cell.code_scss.replace("$VALUE_1$", text_align).replace("$VALUE_2$", vertical_align.replace(/;.*/g, ""));
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
    ALIGN_OBJ.positions.code_obj.innerHTML = ALIGN_OBJ.positions.code_scss.replace(/\$VALUE_1\$/g, top_position).replace(/\$VALUE_2\$/g, left_position);
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
    ALIGN_OBJ.flexbox.code_obj.innerHTML = ALIGN_OBJ.flexbox.code_scss.replace("$VALUE_1$", justify_content).replace("$VALUE_2$", align_items);
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
    ALIGN_OBJ.grid.code_obj.innerHTML = ALIGN_OBJ.grid.code_scss.replace("$VALUE_1$", column_cell).replace("$VALUE_2$", row_cell);
  }
};

const alignElement = (element="", moveAxis="x", index_operator=-1, align_status=[]) => {
  let index_arr =  moveAxis !== "x" ? 1 : 0;
  const align_index = POSIBLE_ALIGN.indexOf(align_status[index_arr]) + (index_operator);

  if (align_index >= 0 && align_index <= (POSIBLE_ALIGN.length - 1)) {
    if (moveAxis === "x") {
      align_functions[element]([POSIBLE_ALIGN[align_index], align_status[1]]);
    } else {
      align_functions[element]([align_status[0], POSIBLE_ALIGN[align_index]]);
    }
  }
};

const alignAll = (moveAxis="x", index_operator=-1, global_align_status={}) => {
  Object.entries(global_align_status).forEach(([key, value]) => {
    alignElement(key, moveAxis, index_operator, value);
  });
};

const checkGlobalAlign = () => {
  const global_align = {};
  Object.entries(ALIGN_OBJ).forEach(([key, value]) => { global_align[key] = value.align_status; });
  return global_align;
};

const calcCoordinatesAlign = (initial={}, final={}) => {
  const differences = {
    x: initial.x - final.x,
    y: initial.y - final.y
  };
  const align_coordinates = {
    axis: "",
    operator: 0,
    difference: 0
  };

  if (Math.abs(differences.x) > Math.abs(differences.y)) {
    align_coordinates.axis = "x";
    align_coordinates.difference = differences.x;
  } else {
    align_coordinates.axis = "y";
    align_coordinates.difference = differences.y;
  }
  
  if (align_coordinates.difference > 0) {
    align_coordinates.operator = -1;
  } else {
    align_coordinates.operator = 1;
  }

  return align_coordinates;
};

window.onload = () => {
  Object.values(align_functions).forEach( funct => funct());
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
};

window.ontouchstart = (event) => {
  touch_coordinates.initial.x = event.changedTouches[0].clientX;
  touch_coordinates.initial.y = event.changedTouches[0].clientY;
};

window.ontouchend = (event) => {
  touch_coordinates.final.x = event.changedTouches[0].clientX;
  touch_coordinates.final.y = event.changedTouches[0].clientY;

  let coordinates_obj = calcCoordinatesAlign(touch_coordinates.initial, touch_coordinates.final);
  
  if (event.target.className === "grid-display__obj" && Math.abs(coordinates_obj.difference) > 25) {
    let align_target = {
      align_name: event.target.parentElement.previousElementSibling.className.replace("align align--", "").replace("-", "_"),
    };
    align_target["align_status"] = ALIGN_OBJ[align_target.align_name].align_status;
    
    alignElement(align_target.align_name, coordinates_obj.axis, coordinates_obj.operator, align_target.align_status);
  }
};