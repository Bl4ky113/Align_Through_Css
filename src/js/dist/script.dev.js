"use strict";

// Made By Bl4ky113
var ALIGN_OBJ = {
  margin: {
    obj: document.getElementsByClassName("align--margin")[0],
    align_status: ["left", "left"]
  },
  table_cell: {
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
Object.values(ALIGN_OBJ).forEach(function (value) {
  value["child"] = value.obj.firstChild;
});
var KEY_CODES = [37, 38, 39, 40];
var POSIBLE_ALIGN = ["left", "center", "right"];

var alignMargin = function alignMargin() {
  var alignTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["center", "center"];
  var width = ALIGN_OBJ.margin.child.offsetWidth;
  var height = ALIGN_OBJ.margin.child.offsetHeight;
  var multiplier = {
    right: 2,
    center: 1,
    left: 0
  };
  var left_margin = multiplier["".concat(alignTo[0])] * width / 16;
  var top_margin = multiplier["".concat(alignTo[1])] * height / 16;
  ALIGN_OBJ.margin.child.style = "margin-left: ".concat(left_margin, "rem; margin-top: ").concat(top_margin, "rem;");
  ALIGN_OBJ.margin.align_status = [alignTo[0], alignTo[1]];
};

var alignTableCell = function alignTableCell() {
  var alignTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["center", "center"];
  var text_value = {
    right: "right",
    center: "center",
    left: "left"
  };
  var vertical_value = {
    right: "bottom; padding-top: 0.25rem;",
    center: "middle; padding-top: 0.15rem;",
    left: "top;"
  };
  var text_align = text_value["".concat(alignTo[0])];
  var vertical_align = vertical_value["".concat(alignTo[1])];
  ALIGN_OBJ.table_cell.obj.style = "text-align: ".concat(text_align, "; vertical-align: ").concat(vertical_align, ";");
  ALIGN_OBJ.table_cell.align_status = [alignTo[0], alignTo[1]];
};

var alignPositions = function alignPositions() {
  var alignTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["center", "center"];
  var align_number = {
    right: 2,
    center: 1,
    left: 0
  };
  var left_position = align_number["".concat(alignTo[0])] * 100 / 2;
  var top_position = align_number["".concat(alignTo[1])] * 100 / 2;
  ALIGN_OBJ.positions.child.style = "left: ".concat(left_position, "%; top: ").concat(top_position, "%; transform: translate(-").concat(left_position, "%, -").concat(top_position, "%);");
  ALIGN_OBJ.positions.align_status = [alignTo[0], alignTo[1]];
};

var alignFlexbox = function alignFlexbox() {
  var alignTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["center", "center"];
  var flex_value = {
    right: "flex-end",
    center: "center",
    left: "flex-start"
  };
  var justify_content = flex_value["".concat(alignTo[0])];
  var align_items = flex_value["".concat(alignTo[1])];
  ALIGN_OBJ.flexbox.obj.style = "justify-content: ".concat(justify_content, "; align-items: ").concat(align_items, ";");
  ALIGN_OBJ.flexbox.align_status = [alignTo[0], alignTo[1]];
};

var alignGrid = function alignGrid() {
  var alignTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["center", "center"];
  var grid_cell = {
    right: 3,
    center: 2,
    left: 1
  };
  var column_cell = grid_cell["".concat(alignTo[0])];
  var row_cell = grid_cell["".concat(alignTo[1])];
  ALIGN_OBJ.grid.child.style = "grid-column: ".concat(column_cell, "; grid-row: ").concat(row_cell, ";");
  ALIGN_OBJ.grid.align_status = [alignTo[0], alignTo[1]];
};

var alignAll = function alignAll() {
  var alignTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["center", "center"];
  alignMargin(alignTo);
  alignTableCell(alignTo);
  alignPositions(alignTo);
  alignFlexbox(alignTo);
  alignGrid(alignTo);
};

var checkGlobalAlign = function checkGlobalAlign() {
  var global_align = {
    x: [],
    y: []
  };
  Object.values(ALIGN_OBJ).forEach(function (value) {
    global_align.x.push(value.align_status[0]);
    global_align.y.push(value.align_status[1]);
  });
  var first_x = global_align.x[0];
  var same_val_x = true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = global_align.x[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      if (value != first_x) {
        same_val_x = false;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var first_y = global_align.y[0];
  var same_val_y = true;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = global_align.y[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _value = _step2.value;

      if (_value != first_y) {
        same_val_y = false;
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var return_value = [];

  if (same_val_x === true) {
    return_value[0] = global_align.x[0];
  } else {
    return_value[0] = global_align.x;
  }

  if (same_val_y === true) {
    return_value[1] = global_align.y[0];
  } else {
    return_value[1] = global_align.y;
  }

  return return_value;
};

window.onload = function () {
  alignAll();
};

window.onkeydown = function (event) {
  if (KEY_CODES.includes(event.keyCode)) {
    var index_key_down = KEY_CODES.indexOf(event.keyCode);
    var global_align = checkGlobalAlign();
    var index_global_align = {
      x: POSIBLE_ALIGN.indexOf(global_align[0]),
      y: POSIBLE_ALIGN.indexOf(global_align[1])
    };

    switch (index_key_down) {
      case 0:
        if (index_global_align.x > 0) {
          index_global_align.x -= 1;
        }

        alignAll([POSIBLE_ALIGN[index_global_align.x], global_align[1]]);
        break;

      case 1:
        if (index_global_align.y > 0) {
          index_global_align.y -= 1;
        }

        alignAll([global_align[0], POSIBLE_ALIGN[index_global_align.y]]);
        break;

      case 2:
        if (index_global_align.x < POSIBLE_ALIGN.length - 1) {
          index_global_align.x += 1;
        }

        alignAll([POSIBLE_ALIGN[index_global_align.x], global_align[1]]);
        break;

      case 3:
        if (index_global_align.y < POSIBLE_ALIGN.length - 1) {
          index_global_align.y += 1;
        }

        alignAll([global_align[0], POSIBLE_ALIGN[index_global_align.y]]);
        break;

      default:
        console.error("Error: Invalid Key Down Index");
        break;
    }

    console.log(index_global_align);
  }
};