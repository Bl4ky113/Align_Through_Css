"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
var DEVICE_SCREEN = {
  x: window.screen.width,
  y: window.screen.height
};
var touch_coordinates = {
  initial: {
    x: 0,
    y: 0
  },
  "final": {
    x: 0,
    y: 0
  }
};
var align_functions = {
  margin: function margin() {
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
  },
  table_cell: function table_cell() {
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
  },
  positions: function positions() {
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
  },
  flexbox: function flexbox() {
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
  },
  grid: function grid() {
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
  }
};

var alignAll = function alignAll() {
  var moveAxis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "x";
  var index_operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  var global_align_status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index_arr = 0;

  if (moveAxis !== "x") {
    index_arr = 1;
  }

  Object.entries(global_align_status).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var align_index = POSIBLE_ALIGN.indexOf(value[index_arr]) + index_operator;

    if (align_index >= 0 && align_index <= POSIBLE_ALIGN.length - 1) {
      if (moveAxis === "x") {
        align_functions[key]([POSIBLE_ALIGN[align_index], value[1]]);
      } else {
        align_functions[key]([value[0], POSIBLE_ALIGN[align_index]]);
      }
    }
  });
};

var checkGlobalAlign = function checkGlobalAlign() {
  var global_align = {};
  Object.entries(ALIGN_OBJ).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    global_align[key] = value.align_status;
  });
  return global_align;
};

var calcCoordinatesAlign = function calcCoordinatesAlign() {
  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _final = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var differences = {
    x: initial.x - _final.x,
    y: initial.y - _final.y
  };
  var align_coordinates = {
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

window.onkeydown = function (event) {
  if (KEY_CODES.includes(event.keyCode)) {
    event.preventDefault();
    var index_key_down = KEY_CODES.indexOf(event.keyCode);
    var global_align = checkGlobalAlign();
    var index_align = {};
    Object.entries(global_align).forEach(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          values = _ref6[1];

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
        console.error("Error: Invalid Key Down Index");
        break;
    }
  }
};

window.ontouchstart = function (event) {
  touch_coordinates.initial.x = event.changedTouches[0].clientX;
  touch_coordinates.initial.y = event.changedTouches[0].clientY;
};

window.ontouchend = function (event) {
  touch_coordinates["final"].x = event.changedTouches[0].clientX;
  touch_coordinates["final"].y = event.changedTouches[0].clientY;
  var coordinates_obj = calcCoordinatesAlign(touch_coordinates.initial, touch_coordinates["final"]);

  if (event.target.className === "grid-display__obj" && Math.abs(coordinates_obj.difference) <= DEVICE_SCREEN[coordinates_obj.axis] * 0.5) {
    var align_target = {
      class_name: event.target.parentElement.previousElementSibling.className.replace("align align--", "").replace("-", "_")
    };
    align_target["align_status"] = ALIGN_OBJ[align_target.class_name].align_status;
    var index_arr = 0;

    if (coordinates_obj.axis !== "x") {
      index_arr = 1;
    }

    var align_index = POSIBLE_ALIGN.indexOf(align_target.align_status[index_arr]) + coordinates_obj.operator;

    if (align_index >= 0 && align_index <= POSIBLE_ALIGN.length - 1) {
      if (coordinates_obj.axis === "x") {
        align_functions[align_target.class_name]([POSIBLE_ALIGN[align_index], align_target.align_status[1]]);
      } else {
        align_functions[align_target.class_name]([align_target.align_status[0], POSIBLE_ALIGN[align_index]]);
      }
    }
  }
};