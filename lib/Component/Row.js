'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Util = require('./Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by BG236557 on 2016/5/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Row = function (_Component) {
    _inherits(Row, _Component);

    function Row(props) {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));
    }

    _createClass(Row, [{
        key: 'cellRender',
        value: function cellRender() {
            var output = [];
            var _props = this.props,
                data = _props.data,
                cols = _props.cols,
                isKey = _props.isKey,
                checked = _props.checked,
                isSelect = _props.isSelect,
                colIndex = _props.colIndex,
                selectRow = _props.selectRow,
                hideSelectColumn = _props.hideSelectColumn;


            var _key = data[isKey];
            var colSpan = void 0,
                colTarget = void 0;

            if (isSelect && !hideSelectColumn) {
                output.push(_react2['default'].createElement(
                    'td',
                    { key: _key, style: { backgroundColor: checked && selectRow.bgColor, textAlign: 'center' },
                        'data-input': selectRow.mode },
                    _react2['default'].createElement('input', { type: selectRow.mode, checked: checked, readOnly: true })
                ));
            }

            cols.map(function (key, i, col) {
                var cell = data[key.id],
                    dataFormat = key.dataFormat,
                    props = { colSpan: null, rowSpan: null };

                var style = {
                    width: key.width,
                    maxWidth: key.width,
                    textAlign: key.dataAlign,
                    display: key.hidden && 'none',
                    backgroundColor: isSelect && checked && (selectRow.bgColor || "#ffd800")
                };

                if (dataFormat) {
                    cell = dataFormat(data[key.id], data, colIndex, i, col);
                }
                if (colSpan && colTarget < i && i < colSpan) return;
                if (key.render) {
                    props = key.render(colIndex, data[key.id], data, col) || props;
                    colSpan = props.colSpan + i;
                    colTarget = i;
                }
                if (props.colSpan === 0 || props.rowSpan === 0) return;
                output.push(_react2['default'].createElement(
                    'td',
                    { style: style,
                        key: '' + _key + i,
                        colSpan: props.colSpan,
                        rowSpan: props.rowSpan,
                        title: typeof cell === 'string' || typeof cell === 'number' ? cell : null
                    },
                    cell
                ));
            });
            return output;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                data = _props2.data,
                hover = _props2.hover,
                checked = _props2.checked,
                isSelect = _props2.isSelect,
                selectRow = _props2.selectRow,
                hoverStyle = _props2.hoverStyle,
                onMouseOut = _props2.onMouseOut,
                onMouseOver = _props2.onMouseOver;

            return _react2['default'].createElement(
                'tr',
                {
                    style: hover ? hoverStyle : {},
                    onMouseOut: onMouseOut,
                    onMouseOver: onMouseOver,
                    onClick: isSelect ? function () {
                        return selectRow.onSelect(!checked, data);
                    } : function () {
                        return false;
                    } },
                this.cellRender()
            );
        }
    }]);

    return Row;
}(_react.Component);

exports['default'] = Row;


Row.defaultProps = {
    hideSelectColumn: false,
    selectRow: {
        mode: 'none',
        bgColor: '#ffd800',
        selected: [],
        onSelect: _Util.empty,
        onSelectAll: _Util.empty
    }
};