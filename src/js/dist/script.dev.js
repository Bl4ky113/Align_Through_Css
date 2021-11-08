"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Made By Bl4ky113
var ALIGN_OBJ = {
  margin: {
    obj: document.getElementsByClassName("align--margin")[0]
  },
  table_cell: {
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
Object.entries(ALIGN_OBJ).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      align = _ref2[1];

  align["child"] = align.obj.firstChild;
});
var KEY_CODES = [37, 38, 39, 40];

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
};

var alignTableCell = function alignTableCell() {
  var alignTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["center", "left"];
  var text_value = {
    right: "right",
    center: "center",
    left: "left"
  };
  var vertical_value = {
    right: "top;",
    center: "middle; padding-top: 0.15rem;",
    left: "bottom; padding-top: 0.25rem;"
  };
  var text_align = text_value["".concat(alignTo[0])];
  var vertical_align = vertical_value["".concat(alignTo[1])];
  ALIGN_OBJ.table_cell.obj.style = "text-align: ".concat(text_align, "; vertical-align: ").concat(vertical_align, ";");
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
};

window.onload = function () {}; // window.onkeydown = (event) => {
//   if (KEY_CODES.includes(event.keyCode)) {
//   }
// }