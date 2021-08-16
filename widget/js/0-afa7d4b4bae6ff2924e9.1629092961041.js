webpackJsonp([0],{

/***/ 1899:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2149);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./RankingBoard.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./RankingBoard.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1900:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2150);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./RoseChart.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./RoseChart.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1997:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataViewReact = __webpack_require__(99);

__webpack_require__(2170);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitalFlop111 = function (_React$Component) {
	_inherits(DigitalFlop111, _React$Component);

	function DigitalFlop111(props) {
		_classCallCheck(this, DigitalFlop111);

		var _this = _possibleConstructorReturn(this, (DigitalFlop111.__proto__ || Object.getPrototypeOf(DigitalFlop111)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(DigitalFlop111, [{
		key: 'render',
		value: function render() {
			var digitalFlopData = [{
				title: '营业收入',
				number: {
					number: [mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].yysr],
					content: '{nt}',
					textAlign: 'right',
					style: {
						fill: '#4d99fc',
						fontWeight: 'bold'
					}
				},
				unit: '万'
			}, {
				title: '营业成本',
				number: {
					number: [mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].yycb],
					content: '{nt}',
					textAlign: 'right',
					style: {
						fill: '#f46827',
						fontWeight: 'bold'
					}
				},
				unit: '万'
			}, {
				title: '毛利',
				number: {
					number: [mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].ml],
					content: '{nt}',
					textAlign: 'right',
					style: {
						fill: '#40faee',
						fontWeight: 'bold'
					}
				},
				unit: '万'
			}, {
				title: '费用',
				number: {
					number: [mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].fy],
					content: '{nt}',
					textAlign: 'right',
					style: {
						fill: '#4d99fc',
						fontWeight: 'bold'
					}
				},
				unit: '万'
			}, {
				title: '净利润',
				number: {
					number: [mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].jlr],
					content: '{nt}',
					textAlign: 'right',
					style: {
						fill: '#f46827',
						fontWeight: 'bold'
					}
				},
				unit: '万'
			}];

			return _react2.default.createElement(
				'div',
				{ id: 'digital-flop2' },
				digitalFlopData.map(function (item) {
					return _react2.default.createElement(
						'div',
						{ className: 'digital-flop-item', key: item.title },
						_react2.default.createElement(
							'div',
							{ className: 'digital-flop-title' },
							item.title
						),
						_react2.default.createElement(
							'div',
							{ className: 'digital-flop' },
							_react2.default.createElement(_dataViewReact.DigitalFlop, { config: item.number, style: { width: '80%', height: '50px' } }),
							_react2.default.createElement(
								'p',
								{ style: { display: 'flex',
										alignItems: 'center' } },
								'\u4E07'
							)
						)
					);
				}),
				_react2.default.createElement(_dataViewReact.Decoration10, null)
			);
		}
	}]);

	return DigitalFlop111;
}(_react2.default.Component);

exports.default = DigitalFlop111;

/***/ }),

/***/ 1998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataViewReact = __webpack_require__(99);

__webpack_require__(1899);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          config = _props.config;


      return _react2.default.createElement(
        'div',
        { id: 'ranking-board2' },
        _react2.default.createElement(
          'div',
          { className: 'ranking-board-title' },
          title,
          _react2.default.createElement(_dataViewReact.Decoration3, {
            className: 'rose-chart-deco',
            style: { width: '90px', height: '15px' } })
        ),
        _react2.default.createElement(_dataViewReact.ScrollRankingBoard, { config: config })
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),

/***/ 1999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1899);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _dataViewReact = __webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    title = _props.title,
			    option = _props.option,
			    length = _props.length;


			return _react2.default.createElement(
				'div',
				{ id: 'ranking-board2', style: { width: '20%' } },
				_react2.default.createElement(
					'div',
					{ className: 'ranking-board-title' },
					title,
					_react2.default.createElement(_dataViewReact.Decoration3, {
						className: 'rose-chart-deco',
						style: { width: '90px', height: '15px' } })
				),
				length > 0 && _react2.default.createElement(_echartsForReact2.default, {
					className: 'dv-charts-container',
					option: option,
					notMerge: true,
					lazyUpdate: true
				})
			);
		}
	}]);

	return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),

/***/ 2000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1900);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _echarts = __webpack_require__(345);

var _echarts2 = _interopRequireDefault(_echarts);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _dataViewReact = __webpack_require__(99);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function rmoney(e) {
	return parseFloat(e.replace(/[^\d\.-]/g, ""));
}

var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    yysrChartData = _props.yysrChartData,
			    title = _props.title,
			    type = _props.type,
			    onEvents = _props.onEvents;

			var option = {
				color: ['rgb(255,153,106)', 'rgb(117, 232, 242)', 'rgb(255, 184, 0)'],
				tooltip: {},
				grid: {
					top: '50px',
					left: '10px',
					right: '10px',
					bottom: '10px',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(yysrChartData).category && mobx.toJS(yysrChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
					/*axisLabel: {
     	interval: 0,//横轴信息全部显示
     	rotate: 60,//60度角倾斜显示
     	// formatter: function (val) {
     	// 	return val.split("").join("\n");
     	// } //横轴信息文字竖直显示
     }*/
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(yysrChartData).series && mobx.toJS(yysrChartData).series.map(function (item, index) {
					if (type == "ydsj") {
						// 营业收入
						return {
							name: item.name,
							type: 'line',
							data: item.value.map(function (vitem) {
								return rmoney(vitem);
							}),
							smooth: true,
							sampling: 'average',
							showAllSymbol: true,
							areaStyle: {
								normal: {
									//颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
									color: new _echarts2.default.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgb(255,153,106, 0.89)'
									}, {
										offset: .34,
										color: 'rgb(255,153,106, 0.45)'
									}, {
										offset: 1,
										color: 'rgb(255,153,106, 0.00)'
									}])
								}
							} //区域颜色渐变
						};
					}
				})
			};

			return _react2.default.createElement(
				'div',
				{ id: 'rose-chart2', style: { width: '24%' } },
				_react2.default.createElement(
					'div',
					{ className: 'rose-chart-title' },
					_react2.default.createElement(
						'p',
						null,
						title
					),
					_react2.default.createElement(_dataViewReact.Decoration1, {
						className: 'rose-chart-deco',
						style: { width: '110px', height: '20px' } })
				),
				_react2.default.createElement(_echartsForReact2.default, {
					className: 'dv-charts-container',
					onEvents: onEvents,
					option: option,
					notMerge: true,
					lazyUpdate: true
				})
			);
		}
	}]);

	return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),

/***/ 2001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _dataViewReact = __webpack_require__(99);

__webpack_require__(1900);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    title = _props.title,
			    option = _props.option,
			    onEvents = _props.onEvents;


			return _react2.default.createElement(
				'div',
				{ id: 'rose-chart2', className: title.includes("人员") ? "charts-role" : "", style: { width: title.includes("项目") || title.includes("人员") ? '22%' : '29%' } },
				_react2.default.createElement(
					'div',
					{ className: 'rose-chart-title' },
					_react2.default.createElement(
						'p',
						null,
						title
					),
					_react2.default.createElement(_dataViewReact.Decoration1, {
						className: 'rose-chart-deco',
						style: { width: '110px', height: '20px' } })
				),
				_react2.default.createElement(_echartsForReact2.default, {
					className: 'dv-charts-container',
					onEvents: onEvents,
					height: '100%',
					option: option,
					notMerge: true,
					lazyUpdate: true
				})
			);
		}
	}]);

	return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),

/***/ 2002:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataViewReact = __webpack_require__(99);

__webpack_require__(2171);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	var totalYearTarget = mobx.toJS(props.data).length > 0 && mobx.toJS(props.data)[0].totalYearTarget;
	var totalYearActual = mobx.toJS(props.data).length > 0 && mobx.toJS(props.data)[0].totalYearActual;
	var yearRate = mobx.toJS(props.data).length > 0 && mobx.toJS(props.data)[0].yearRate;
	var config = {
		data: [parseFloat(yearRate) || 0],
		shape: 'round',
		waveHeight: 25,
		waveNum: 2
	};

	return _react2.default.createElement(
		'div',
		{ id: 'water-level-chart2' },
		_react2.default.createElement(
			'div',
			{ className: 'water-level-chart-title' },
			'\u7D2F\u8BA1\u5B8C\u6210\u7387'
		),
		_react2.default.createElement(
			'div',
			{ className: 'chart-container' },
			_react2.default.createElement(_dataViewReact.WaterLevelPond, {
				config: config })
		),
		_react2.default.createElement(
			'div',
			{ className: 'card-footer' },
			_react2.default.createElement(
				'div',
				{ className: 'card-footer-item' },
				_react2.default.createElement(
					'div',
					{ className: 'footer-title', title: '\u5E74\u5EA6\u76EE\u6807' },
					'\u5E74\u5EA6\u76EE\u6807'
				),
				_react2.default.createElement(
					'div',
					{ className: 'footer-detail', title: totalYearTarget },
					_react2.default.createElement(_dataViewReact.DigitalFlop, {
						config: {
							number: [totalYearTarget],
							content: '{nt}',
							textAlign: 'left',
							style: {
								fill: '#26fcd8',
								fontWeight: 'bold',
								fontSize: '12'
							}
						},
						style: { width: '100%', height: '35px' } }),
					_react2.default.createElement(
						'span',
						{ style: { fontSize: '12px' } },
						'\u4E07'
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'card-footer-item' },
				_react2.default.createElement(
					'div',
					{ className: 'footer-title', title: '\u5B9E\u9645\u5B8C\u6210' },
					'\u5B9E\u9645\u5B8C\u6210'
				),
				_react2.default.createElement(
					'div',
					{ className: 'footer-detail', title: totalYearActual },
					_react2.default.createElement(_dataViewReact.DigitalFlop, { config: {
							number: [totalYearActual],
							content: '{nt}',
							textAlign: 'left',
							style: {
								fill: '#26fcd8',
								fontWeight: 'bold',
								fontSize: '12'
							}
						}, style: { width: '100%', height: '35px' } }),
					_react2.default.createElement(
						'span',
						{ style: { fontSize: '12px' } },
						'\u4E07'
					)
				)
			)
		)
	);
};

/***/ }),

/***/ 2003:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

//import TopHeader from './TopHeader'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(32);

var _mobxReact = __webpack_require__(22);

var _dataViewReact = __webpack_require__(99);

var _DigitalFlop = __webpack_require__(1997);

var _DigitalFlop2 = _interopRequireDefault(_DigitalFlop);

var _RankingBoard = __webpack_require__(1998);

var _RankingBoard2 = _interopRequireDefault(_RankingBoard);

var _RankingBoard3 = __webpack_require__(1999);

var _RankingBoard4 = _interopRequireDefault(_RankingBoard3);

var _RoseChart = __webpack_require__(2000);

var _RoseChart2 = _interopRequireDefault(_RoseChart);

var _RoseChart3 = __webpack_require__(2001);

var _RoseChart4 = _interopRequireDefault(_RoseChart3);

var _WaterLevelChart = __webpack_require__(2002);

var _WaterLevelChart2 = _interopRequireDefault(_WaterLevelChart);

__webpack_require__(2172);

var _antd = __webpack_require__(17);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function rmoney(e) {
	return parseFloat(e.replace(/[^\d\.-]/g, ""));
}

var BigScreenTwo = (_dec = (0, _mobxReact.inject)('kanbanStore'), _dec(_class = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(BigScreenTwo, _React$Component);

	function BigScreenTwo(props) {
		_classCallCheck(this, BigScreenTwo);

		var _this2 = _possibleConstructorReturn(this, (BigScreenTwo.__proto__ || Object.getPrototypeOf(BigScreenTwo)).call(this, props));

		_this2.handleCheck = function () {
			var url = window.location.origin + window.location.pathname + "#/bigScreenTwo";
			var win = window.open(url, '_blank');
			win.focus();
		};

		_this2.queryCharts = function (classifyId, type) {
			var param = {
				classifyId: classifyId,
				type: 0
			};
			_this2.props.kanbanStore.getPermissionByClassifyId(param).then(function (res) {
				_this2.setState(_defineProperty({}, type, res));
			});
		};

		_this2.onChartClick = function (type, e) {
			var _this = _this2;
			var name = e.name;

			var data = {
				'1月': '01',
				'2月': '02',
				'3月': '03',
				'4月': '04',
				'5月': '05',
				'6月': '06',
				'7月': '07',
				'8月': '08',
				'9月': '09',
				'10月': '10',
				'11月': '11',
				'12月': '12'
			};
			if (type == '1') {
				// 统一处理日期
				//const month = name && name.slice(-2);
				var month = data[name];
				// 合同
				_this.props.history.push('/kanban/htqk?type=home&key=1&id=12&month=' + month);
			} else if (type == '2') {
				var _month = data[name];
				// 商机
				_this.props.history.push('/kanban/sjqk?type=home&key=2&id=21&month=' + _month);
			} else if (type == '3') {
				var _month2 = data[name];
				// 营业收入
				_this.props.history.push('/kanban/yysr?type=home&key=1&id=14&month=' + _month2);
			} else if (type == '4') {
				var _month3 = data[name];
				// 项目情况
				_this.props.history.push('/kanban/xmqk?type=home&key=3&id=31&month=' + _month3);
			} else if (type == '5') {
				var _month4 = data[name];
				// 人员
				_this.props.history.push('/kanban/ryqk?type=home&key=1&id=41&month=' + _month4);
			} else if (type == '6') {
				var seriesName = e.seriesName;

				var _month5 = data[name];
				var _this2$state = _this2.state,
				    rlState = _this2$state.rlState,
				    jcState = _this2$state.jcState,
				    zxState = _this2$state.zxState;

				if (seriesName == "人力成本") {
					if (rlState) {
						_this.props.history.push('/kanban/rlcb?type=home&key=1&id=13&month=' + _month5);
					} else {
						return false;
					}
				} else if (seriesName == "专项费用") {
					if (zxState) {
						_this.props.history.push('/kanban/zxfy?type=home&key=1&id=15&month=' + _month5);
					} else {
						return false;
					}
				} else if (seriesName == "基础费用") {
					if (jcState) {
						_this.props.history.push('/kanban/jcfy?type=home&key=1&id=16&month=' + _month5);
					} else {
						return false;
					}
				}
			}
		};

		_this2.state = {
			htState: false, //合同权限
			sjState: false, //商机权限
			srState: false, //营业收入权限
			xmState: false, //项目情况权限
			rfState: false, //人员权限
			rlState: false, //人力成本权限
			jcState: false, //基础费用权限
			zxState: false, //专项费用权限
			year: (0, _moment2.default)().year(), // 当前年
			month: (0, _moment2.default)().month() + 1, // 当前月
			data1: [],
			monthData: [],
			monthChartData: [],
			yysrChartData: [],
			ydfyChartData: [],
			ydsjChartData: [],
			ydxmChartData: [],
			ydxmData: [],
			ydryChartData: [],
			bmfbChartData: [], // 部门分布
			min: 0, // 合同完成率最小值
			visible: false
		};
		return _this2;
	}

	_createClass(BigScreenTwo, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			// 查询是否有权限
			this.queryCharts("12", "htState");
			this.queryCharts("21", "sjState");
			this.queryCharts("14", "srState");
			this.queryCharts("31", "xmState");
			this.queryCharts("41", "rfState");
			this.queryCharts("13", "rlState");
			this.queryCharts("16", "jcState");
			this.queryCharts("15", "zxState");

			var param = {
				classifyId: "0",
				year: this.state.year.toString(),
				beginMonth: this.state.month.toString(),
				endMonth: this.state.month.toString()
			};
			this.props.kanbanStore.getReportByClassifyId(param).then(function (res) {
				if (res) {
					_this3.setState({
						data1: Object.assign([], res.filter(function (item) {
							return item.name === "财务情况总览";
						})[0]['datas']),
						monthData: Object.assign([], res.filter(function (item) {
							return item.name === "月度合同情况";
						}))[0]['datas'],
						monthChartData: Object.assign({}, res.filter(function (item) {
							return item.name === "月度合同情况";
						}))[0]['charts'],
						yysrChartData: Object.assign({}, res.filter(function (item) {
							return item.name === "月度营业收入情况";
						}))[0]['charts'],
						ydfyChartData: Object.assign({}, res.filter(function (item) {
							return item.name === "月度费用构成情况";
						}))[0]['charts'],
						ydsjChartData: Object.assign([], res.filter(function (item) {
							return item.name === "月度商机情况";
						}))[0]['charts'],
						ydxmChartData: Object.assign([], res.filter(function (item) {
							return item.name === "月度项目情况";
						}))[0]['charts'],
						ydxmData: Object.assign([], res.filter(function (item) {
							return item.name === "月度项目情况";
						}))[0]['datas'],
						ydryChartData: Object.assign([], res.filter(function (item) {
							return item.name === "月度人员情况";
						}))[0]['charts'],
						bmfbChartData: Object.assign([], res.filter(function (item) {
							return item.name === "各部门人员分布";
						}))[0]['charts']
					});
				}
			});
		}

		// 全屏切换


		// 查询权限


		// 点击柱

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    data1 = _state.data1,
			    monthData = _state.monthData,
			    monthChartData = _state.monthChartData,
			    yysrChartData = _state.yysrChartData,
			    ydfyChartData = _state.ydfyChartData,
			    htState = _state.htState,
			    sjState = _state.sjState,
			    srState = _state.srState,
			    xmState = _state.xmState,
			    rfState = _state.rfState,
			    rlState = _state.rlState,
			    jcState = _state.jcState,
			    zxState = _state.zxState,
			    ydsjChartData = _state.ydsjChartData,
			    ydxmChartData = _state.ydxmChartData,
			    ydxmData = _state.ydxmData,
			    ydryChartData = _state.ydryChartData,
			    year = _state.year,
			    bmfbChartData = _state.bmfbChartData;


			var option1 = {
				color: ['rgb(255,197,48)', 'rgb(255,255,255)', 'rgb(117,232,242)'],
				tooltip: {
					// trigger: 'axis',
					// axisPointer: {            // 坐标轴指示器，坐标轴触发有效
					// 	type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					// }
				},
				grid: {
					top: '50px',
					left: '10px',
					right: '10px',
					bottom: '15px',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(yysrChartData).series && mobx.toJS(yysrChartData).series.map(function (item) {
						return item.name;
					}),
					y: '10px',
					textStyle: {
						color: "#fff",
						fontSize: '12px'
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(yysrChartData).category && mobx.toJS(yysrChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					},
					position: 'left'
				}, {
					type: 'value',
					min: 0, //最小坐标
					max: 150, //最大坐标
					axisTick: {
						show: false
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					splitLine: {
						show: false
					},
					position: 'right'
				}],
				series: mobx.toJS(yysrChartData).series && mobx.toJS(yysrChartData).series.map(function (item) {
					if (item.name == "完成率") {
						return {
							name: item.name,
							data: item.value,
							type: 'line',
							yAxisIndex: 1,
							showAllSymbol: true
						};
					} else {
						return {
							name: item.name,
							data: item.value.map(function (vitem) {
								return rmoney(vitem);
							}),
							barMinHeight: 6, // 显示默认高 3
							type: 'bar',
							barWidth: '20%',
							itemStyle: {
								emphasis: {
									barBorderRadius: 1.5
								},
								normal: {
									barBorderRadius: 1.5
								}
							}
						};
					}
				})

				// 月度费用
			};var option3 = {
				color: ['rgb(24,171,243)', 'rgb(255,255,255)', 'rgb(0,219,149)'],
				tooltip: {
					// trigger: 'axis',
					/* axisPointer: {
        type: 'shadow'
      }*/
				},
				grid: {
					top: '50px',
					left: '10px',
					right: '10px',
					bottom: '15px',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(ydfyChartData).series && mobx.toJS(ydfyChartData).series.map(function (item) {
						return item.name;
					}),
					y: '10px',
					textStyle: {
						color: "#fff",
						fontSize: '12px'
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(ydfyChartData).category && mobx.toJS(ydfyChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(ydfyChartData).series && mobx.toJS(ydfyChartData).series.map(function (item, index) {
					return {
						name: item.name,
						type: 'bar',
						data: item.value,
						barMinHeight: 10, // 显示默认高 10
						barWidth: '20%',
						itemStyle: {
							emphasis: {
								barBorderRadius: 3
							},
							normal: {
								barBorderRadius: 3
							}
						}
					};
				})
			};

			var option2 = {
				color: ['rgb(75, 126, 254)', 'rgb(117, 232, 242)', 'rgb(255, 184, 0)'],
				tooltip: {},
				grid: {
					top: '50px',
					left: '10px',
					right: '10px',
					bottom: '15px',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(monthChartData).series && mobx.toJS(monthChartData).series.map(function (item) {
						return item.name;
					}),
					y: '10px',
					textStyle: {
						color: "#fff",
						fontSize: '12px'
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(monthChartData).category && mobx.toJS(monthChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					},
					position: 'left'
				}, {
					type: 'value',
					min: 0, //最小坐标
					max: 150, //最大坐标
					axisTick: {
						show: false
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					splitLine: {
						show: false
					},
					position: 'right'
				}],
				series: mobx.toJS(monthChartData).series && mobx.toJS(monthChartData).series.map(function (item) {
					if (item.name == "完成率") {
						return {
							name: item.name,
							data: item.value,
							type: 'line',
							yAxisIndex: 1,
							showAllSymbol: true
						};
					} else {
						return {
							name: item.name,
							data: item.value,
							barMinHeight: 6, // 显示默认高 3
							type: 'bar',
							barWidth: '20%',
							itemStyle: {
								emphasis: {
									barBorderRadius: 1.5
								},
								normal: {
									barBorderRadius: 1.5
								}
							}
						};
					}
				})
			};

			var option5 = {
				color: ['rgb(255,153,106)', 'rgb(255,217,106)', 'rgb(255, 184, 0)'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '50px',
					left: '10px',
					right: '10px',
					bottom: '0',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(ydxmChartData).series && mobx.toJS(ydxmChartData).series.map(function (item) {
						return item.name;
					}),
					y: '10px',
					textStyle: {
						color: "#fff",
						fontSize: '12px'
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(ydxmChartData).category && mobx.toJS(ydxmChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(ydxmChartData).series && mobx.toJS(ydxmChartData).series.map(function (item) {
					return {
						name: item.name,
						data: item.value,
						stack: "区域",
						barMinHeight: 10, // 显示默认高 10
						type: 'bar',
						barWidth: '45%',
						itemStyle: {
							emphasis: {
								barBorderRadius: 1.5
							},
							normal: {
								barBorderRadius: 1.5
							}
						}
					};
				})
			};

			var option6 = {
				color: ['rgb(78, 238, 148)', 'rgb(255, 255, 255)', 'rgb(255, 184, 0)'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '50px',
					left: '10px',
					right: '10px',
					bottom: '0px',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(ydryChartData).series && mobx.toJS(ydryChartData).series.map(function (item) {
						return item.name;
					}),
					y: '10px',
					textStyle: {
						color: "#fff",
						fontSize: '12px'
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(ydryChartData).category && mobx.toJS(ydryChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(ydryChartData).series && mobx.toJS(ydryChartData).series.map(function (item) {
					return {
						name: item.name,
						data: item.value,
						stack: "区域",
						type: 'bar',
						barWidth: '45%',
						barMinHeight: 10, // 显示默认高 10
						itemStyle: {
							emphasis: {
								barBorderRadius: 1.5
							},
							normal: {
								barBorderRadius: 1.5
							}
						}
					};
				})
			};

			// 雷达图最大值
			var max;
			var array = [];
			var indicator = [];
			if (mobx.toJS(bmfbChartData).series) {
				var arr = mobx.toJS(bmfbChartData).series && mobx.toJS(bmfbChartData).series[0].value;
				array = Object.assign([], arr);
				var newArray = Array.from(new Set(arr));
				max = Math.max.apply(Math, _toConsumableArray(newArray)) + 5;

				if (mobx.toJS(bmfbChartData).category) {
					indicator = mobx.toJS(bmfbChartData).category.map(function (item, index) {
						return { name: item, max: max };
					});

					var option8 = {
						radar: {
							polygon: true,
							indicator: indicator,
							center: ['50%', '50%'],
							radius: '50%',
							startAngle: -Math.PI,
							axisLabel: {
								labelGap: 2,
								style: {
									fill: '#FFF',
									rotate: -30,
									fontSize: '12px'
								}
							}
						},
						series: [{
							type: 'radar',
							data: array,
							animationCurve: 'easeOutBack',
							itemStyle: {
								normal: {
									areaStyle: {
										type: 'default',
										color: 'rgb(64,250,238)',
										opacity: 0.6
									},
									borderWidth: 0,
									lineStyle: {
										color: "rgb(64,250,238)" // 图表中各个图区域的边框线颜色
									}
								}
							}

						}]
					};
				}
			}

			// 部门分布
			var option7 = {
				title: {
					text: ''
				},
				tooltip: {
					trigger: 'axis'
				},
				grid: {
					top: '10%',
					left: '10%',
					right: '20%',
					bottom: '0',
					containLabel: true
				},
				radar: [{
					indicator: mobx.toJS(bmfbChartData).category && mobx.toJS(bmfbChartData).category.length ? mobx.toJS(bmfbChartData).category.map(function (item, index) {
						return { text: item, max: max };
					}) : [],
					center: ['52%', '55%'],
					radius: '55%',
					startAngle: 180,
					name: {
						show: true, // 是否显示工艺等文字
						formatter: '{value}', // 工艺等文字的显示形式
						textStyle: {
							fontSize: '12px',
							color: '#fff' // 工艺等文字颜色
						}
						//rotate: 60,
					},
					axisLine: { // 坐标轴线
						show: false // 默认显示，属性show控制显示与否
					},
					axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
						show: false,
						textStyle: {
							fontSize: '12px',
							color: '#FFF' // 坐标轴刻度文字的样式
						}
					},
					nameGap: 5,
					scale: true,
					splitArea: {
						show: true,
						areaStyle: {
							color: ["transparent"] // 图表背景网格的颜色
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							width: 1,
							color: 'rgba(255, 255, 255, .6)' // 图表背景网格线的颜色  46596B
						}
					}
				}],
				series: [{
					type: 'radar',
					tooltip: {
						trigger: 'item'
					},
					//symbol: "none", // 去掉图表中各个图区域的边框线拐点
					itemStyle: {
						normal: {
							areaStyle: {
								type: 'default',
								color: 'rgb(64,250,238)',
								opacity: 0.6
							},
							borderWidth: 0,
							lineStyle: {
								color: "rgb(64,250,238)" // 图表中各个图区域的边框线颜色
							}
						}
					},
					data: mobx.toJS(bmfbChartData).series && mobx.toJS(bmfbChartData).series.map(function (item) {
						return {
							name: item.name,
							type: 'radar',
							value: item.value
						};
					})
				}]
			};

			var config1 = {
				data: [{
					name: '累计项目总数',
					value: mobx.toJS(ydxmData).length > 0 && mobx.toJS(ydxmData)[0].total || 0
				}, {
					name: '已交付项目数',
					value: mobx.toJS(ydxmData).length > 0 && mobx.toJS(ydxmData)[0].finish || 0
				}, {
					name: '待交付项目数',
					value: mobx.toJS(ydxmData).length > 0 && mobx.toJS(ydxmData)[0].wait || 0
				}],
				rowNum: 3,
				unit: '家'
			};

			return _react2.default.createElement(
				'div',
				{ id: 'data-view2' },
				_react2.default.createElement(_antd.Icon, {
					title: "全屏显示",
					type: 'fullscreen',
					onClick: this.handleCheck,
					className: "bigScreen_icon"
				}),
				_react2.default.createElement(
					_dataViewReact.BorderBox1,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'main-content' },
						_react2.default.createElement(_DigitalFlop2.default, {
							data1: mobx.toJS(data1)
						}),
						_react2.default.createElement(
							'div',
							{ className: 'main-con' },
							_react2.default.createElement(
								'div',
								{ className: 'main-con-h50' },
								_react2.default.createElement(_RoseChart4.default, {
									title: "月度营业收入情况（单位：万元）",
									option: option1,
									onEvents: srState ? {
										'click': this.onChartClick.bind(this, '3')
									} : null
								}),
								_react2.default.createElement(_RoseChart4.default, {
									title: "月度费用构成情况（单位：万元）",
									option: option3,
									onEvents: {
										'click': this.onChartClick.bind(this, '6')
									}
								}),
								_react2.default.createElement(_RoseChart4.default, {
									title: "月度合同情况（单位：万元）",
									option: option2,
									onEvents: htState ? {
										'click': this.onChartClick.bind(this, '1')
									} : null
								}),
								_react2.default.createElement(_WaterLevelChart2.default, {
									data: mobx.toJS(monthData)
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'main-con-h50', style: { paddingBottom: '5px' } },
								_react2.default.createElement(_RoseChart2.default, {
									title: "月度商机情况（单位：家）",
									yysrChartData: mobx.toJS(ydsjChartData),
									type: 'ydsj',
									onEvents: sjState ? {
										'click': this.onChartClick.bind(this, '2')
									} : null
								}),
								_react2.default.createElement(_RankingBoard2.default, {
									title: year + "年项目情况",
									config: config1
								}),
								_react2.default.createElement(_RoseChart4.default, {
									title: "月度项目情况（单位：家）",
									option: option5,
									onEvents: xmState ? {
										'click': this.onChartClick.bind(this, '4')
									} : null
								}),
								_react2.default.createElement(_RankingBoard4.default, {
									title: "各部门人员分布",
									option: option7,
									length: mobx.toJS(bmfbChartData).category && mobx.toJS(bmfbChartData).category.length
								}),
								_react2.default.createElement(_RoseChart4.default, {
									title: "月度人员情况（单位：人）",
									option: option6,
									onEvents: rfState ? {
										'click': this.onChartClick.bind(this, '5')
									} : null
								})
							)
						)
					)
				)
			);
		}
	}]);

	return BigScreenTwo;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = BigScreenTwo;

/***/ }),

/***/ 2148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, "#digital-flop2 {\n  position: relative;\n  height: 91px;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(6, 30, 93, 0.5);\n  width: 100%;\n}\n#digital-flop2 .rose-chart-title {\n  position: absolute;\n  height: 5px;\n  top: 5px;\n  left: 10px;\n  font-size: 12px;\n  font-weight: bold;\n}\n#digital-flop2 .dv-decoration-10 {\n  position: absolute;\n  width: 95%;\n  left: 2.5%;\n  height: 5px;\n  bottom: 0px;\n}\n#digital-flop2 .digital-flop-item {\n  width: 20%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-left: 3px solid #061e5d;\n  border-right: 3px solid #061e5d;\n}\n#digital-flop2 .digital-flop-title {\n  font-size: 16px;\n  margin-bottom: 20px;\n  position: absolute;\n  top: 8px;\n}\n#digital-flop2 .digital-flop {\n  display: flex;\n  position: absolute;\n  bottom: 8px;\n}\n#digital-flop2 .unit {\n  margin-left: 10px;\n  display: flex;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding-bottom: 13px;\n  position: absolute;\n  bottom: 3px;\n  right: 2px;\n}", ""]);

// exports


/***/ }),

/***/ 2149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, "#ranking-board2 {\n  width: 15%;\n  box-shadow: 0 0 3px blue;\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(6, 30, 93, 0.5);\n  border-top: 2px solid rgba(1, 153, 209, 0.5);\n  box-sizing: border-box;\n  padding: 10px 10px;\n  height: 100%;\n}\n#ranking-board2 .ranking-board-title {\n  font-weight: bold;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  position: relative;\n}\n#ranking-board2 .ranking-board-title .rose-chart-deco {\n  position: absolute;\n  top: 25px;\n  left: 0px;\n}\n#ranking-board2 .dv-scroll-ranking-board {\n  flex: 1;\n}\n#ranking-board2 .ranking-info .rank {\n  display: none;\n}\n#ranking-board2 .dv-charts-container {\n  height: calc(100% - 20px);\n}", ""]);

// exports


/***/ }),

/***/ 2150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, "#rose-chart2 {\n  width: 27.33%;\n  height: 100%;\n  background-color: rgba(6, 30, 93, 0.5);\n  border-top: 2px solid rgba(1, 153, 209, 0.5);\n  box-sizing: border-box;\n  padding-right: 10px;\n}\n#rose-chart2 .rose-chart-title {\n  height: 50px;\n  font-weight: bold;\n  text-indent: 20px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n#rose-chart2 .rose-chart-title .rose-chart-deco {\n  position: absolute;\n  top: 38px;\n  left: 0px;\n}\n#rose-chart2 .dv-charts-container {\n  height: calc(100% - 50px) !important;\n}\n#rose-chart2 .charts-role {\n  padding-right: 0!important;\n}", ""]);

// exports


/***/ }),

/***/ 2151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, "#water-level-chart2 {\n  width: 18%;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: rgba(6, 30, 93, 0.5);\n  border-top: 2px solid rgba(1, 153, 209, 0.5);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n#water-level-chart2 .water-level-chart-title {\n  font-weight: bold;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n#water-level-chart2 .water-level-chart-details {\n  height: 15%;\n  display: flex;\n  justify-content: center;\n  font-size: 17px;\n  align-items: flex-end;\n}\n#water-level-chart2 .water-level-chart-details span {\n  font-size: 35px;\n  font-weight: bold;\n  color: #58a1ff;\n  margin: 0 5px;\n  margin-bottom: -5px;\n}\n#water-level-chart2 .chart-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  padding-top: 15px;\n}\n#water-level-chart2 .dv-water-pond-level {\n  width: 100px;\n  height: 100px;\n  border: 6px solid #19c3eb;\n  border-radius: 50%;\n}\n#water-level-chart2 .dv-water-pond-level ellipse {\n  stroke: transparent !important;\n}\n#water-level-chart2 .dv-water-pond-level text {\n  font-size: 20px;\n}\n#water-level-chart2 .card-footer {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n#water-level-chart2 .card-footer-item {\n  padding: 5px 10px 0px 10px;\n  box-sizing: border-box;\n  width: 40%;\n  background-color: rgba(6, 30, 93, 0.7);\n  border-radius: 3px;\n}\n#water-level-chart2 .card-footer-item .footer-title {\n  font-size: 12px;\n  margin-bottom: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#water-level-chart2 .card-footer-item .footer-detail {\n  color: #1294fb;\n  display: flex;\n  font-size: 12px;\n  align-items: center;\n  height: 20px;\n}\n#water-level-chart2 .card-footer-item .footer-detail .dv-digital-flop {\n  margin-right: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}", ""]);

// exports


/***/ }),

/***/ 2152:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(1516);
exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, "#data-view2 {\n  width: 100%;\n  height: 100%;\n  background-color: #030409;\n  color: #fff;\n  position: relative;\n}\n#data-view2 .bigScreen_icon {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  color: #d9d9d9;\n  cursor: pointer;\n  font-size: 24px;\n  z-index: 9999;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n}\n#data-view2 .bigScreen_icon:hover {\n  opacity: 1;\n}\n#data-view2 #dv-full-screen-container {\n  background-image: url(" + escape(__webpack_require__(2183)) + ");\n  background-size: 100% 100%;\n  box-shadow: 0 0 3px blue;\n  display: flex;\n  flex-direction: column;\n}\n#data-view2 .main-content {\n  height: 100%;\n  width: 100%;\n  padding: 5px;\n}\n#data-view2 .main-content .main-con {\n  width: 100%;\n  height: calc(100% - 91px);\n}\n#data-view2 .main-content .main-con .main-con-h50 {\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: 50%;\n  padding-top: 8px;\n}\n#data-view2 .block-left-right-content {\n  flex: 1;\n  display: flex;\n  margin-top: 20px;\n}\n#data-view2 .block-left-right {\n  display: flex;\n  width: 20%;\n  flex-direction: column;\n}\n#data-view2 .block-top-bottom-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n#data-view2 .block-top-content {\n  height: 50%;\n  display: flex;\n  flex-grow: 0;\n  box-sizing: border-box;\n  padding-bottom: 20px;\n}\n.rose_chart22 .rose-chart {\n  margin-right: 0!important;\n}", ""]);

// exports


/***/ }),

/***/ 2170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2148);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./DigitalFlop.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./DigitalFlop.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2171:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2151);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./WaterLevelChart.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./WaterLevelChart.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2152);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2183:
/***/ (function(module, exports) {

module.exports = "./images/bg-837e99ea750ab1684ed2661cef36cc55.png";

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 经营看板 首页
                  * dangw@glodon.com
                  * */

//import BigScreen from '@/components/kanban/BigScreen';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(80);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(32);

var _antd = __webpack_require__(17);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _index = __webpack_require__(2003);

var _index2 = _interopRequireDefault(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = _antd.Typography.Paragraph;
var Home = (_dec = (0, _mobxReact.inject)('kanbanStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {
			key: '', // 判断key值
			iFrameHeight: '100%' //'0px',  // iframe高度
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {
			var search = nextProps.location.search;
			var ke = _url2.default.parse(search, true).query.key; // 0 经营驾驶 1 财务 2 营销 3 项目 4 人力
			var key = ke == undefined ? nextProps.kanbanStore.navKey : ke; // 切换经营看板时
			this.setState({
				key: key
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var search = this.props.location.search;
			var ke = _url2.default.parse(search, true).query.key; // 0 经营驾驶 1 财务 2 营销 3 项目 4 人力
			var key = ke == undefined ? this.props.kanbanStore.navKey : ke; // 切换经营看板时
			this.setState({
				key: key
			});

			// 1、阻止浏览器刷新重置
			if (localStorage.getItem('navKey') == null || localStorage.getItem('navKey') == undefined) {
				// 获取导航菜单 浏览器刷新重置
				this.props.kanbanStore.getNav({
					level: 1,
					parentId: ""
				}).then(function (res) {
					if (res && res.length > 0) {
						_this2.props.kanbanStore.navsData = Object.assign([], res);
						_this2.props.kanbanStore.navKey = res[0].id; // 当前活动的取第一个数据
						_this2.props.kanbanStore.defaultKey = res[0].id; // 默认取第一个数据
						localStorage.setItem('navKey', res[0].id);
					}
				});
			} else {
				// 2、获取导航菜单 浏览器刷新重置
				this.props.kanbanStore.getNav({
					level: 1,
					parentId: ""
				}).then(function (res) {
					if (res && res.length > 0) {
						_this2.props.kanbanStore.navsData = Object.assign([], res);
					}
				});
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			localStorage.setItem('navKey', null);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$kanbanStore = this.props.kanbanStore,
			    listData = _props$kanbanStore.listData,
			    data1 = _props$kanbanStore.data1,
			    monthData = _props$kanbanStore.monthData,
			    monthChartData = _props$kanbanStore.monthChartData,
			    yysrChartData = _props$kanbanStore.yysrChartData,
			    ydfyChartData = _props$kanbanStore.ydfyChartData,
			    ydsjChartData = _props$kanbanStore.ydsjChartData,
			    ydxmChartData = _props$kanbanStore.ydxmChartData,
			    ydxmData = _props$kanbanStore.ydxmData,
			    ydryChartData = _props$kanbanStore.ydryChartData;
			var key = this.state.key;

			var data = _react2.default.createElement(
				_antd.Row,
				null,
				key == "1" ? mobx.toJS(listData).length > 0 && mobx.toJS(listData).map(function (vitem, vindex) {
					return _react2.default.createElement(
						_antd.Col,
						{ key: "list_" + vindex,
							xs: 24, sm: 12, md: 12, lg: 12, xl: 6 },
						vitem.data && vitem.data.length > 0 ? _react2.default.createElement(
							_antd.Card,
							{ bordered: false, className: 'mt20 mr20 kanban_card', style: { maxWidth: '300px' } },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20' },
								vitem.name
							),
							vitem.data.length > 0 && vitem.data.map(function (item, index) {
								var month = void 0;
								if (Array.isArray(item.month) && item.month.length > 0) {
									month = item.month[0].slice(-2);
								} else {
									// 处理moment月份 0 - 11
									var month2 = (0, _moment2.default)().month() + 1;
									if (month2 <= 9) {
										month = "0" + month2;
									} else {
										month = month2;
									}
								}

								return _react2.default.createElement(
									'div',
									{ className: 'kanban_item item_1' },
									_react2.default.createElement(
										_reactRouterDom.Link,
										{
											to: '/kanban/' + item.code + ('?type=home&id=' + item.id + '&time=' + item.lastUpdateTime + '&key=' + item.parentId) + '&month=' + month },
										_react2.default.createElement(
											'div',
											{ className: 'img tfc' },
											_react2.default.createElement('img', { src: item.ico })
										),
										_react2.default.createElement(
											'p',
											{ className: 'p1' },
											item.name
										),
										_react2.default.createElement(
											'p',
											{ className: 'p2' },
											_react2.default.createElement(
												Paragraph,
												{ ellipsis: true },
												'\u66F4\u65B0\u65F6\u95F4 ',
												(0, _moment2.default)(item.lastUpdateTime).format("YYYY-MM-DD HH:mm:ss")
											)
										)
									)
								);
							})
						) : null
					);
				}) : mobx.toJS(listData).length > 0 && mobx.toJS(listData).map(function (item, index) {
					var month = void 0;
					if (Array.isArray(item.month) && item.month.length > 0) {
						month = item.month[0].slice(-2);
					} else {
						// 处理moment月份 0 - 11
						var month3 = (0, _moment2.default)().month() + 1;
						if (month3 <= 9) {
							month = "0" + month3;
						} else {
							month = month3;
						}
					}

					return _react2.default.createElement(
						_antd.Col,
						{ key: "list_" + index,
							xs: 24, sm: 24, md: 12, lg: 10, xl: 8 },
						_react2.default.createElement(
							'div',
							{ className: 'kanban_item item_1' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/kanban/' + item.code + ('?type=home&id=' + item.id + '&time=' + item.lastUpdateTime + '&key=' + item.parentId) + '&month=' + month },
								_react2.default.createElement(
									'div',
									{ className: 'img tfc' },
									_react2.default.createElement('img', { src: item.ico })
								),
								_react2.default.createElement(
									'p',
									{ className: 'p1' },
									item.name
								),
								_react2.default.createElement(
									'p',
									{ className: 'p2' },
									_react2.default.createElement(
										Paragraph,
										{ ellipsis: true },
										'\u66F4\u65B0\u65F6\u95F4 ',
										(0, _moment2.default)(item.lastUpdateTime).format("YYYY-MM-DD HH:mm:ss")
									)
								)
							)
						)
					);
				})
			);
			return _react2.default.createElement(
				'div',
				{ className: 'h', style: { marginLeft: key == "0" ? "-20px" : "0" } },
				key == "0" ? _react2.default.createElement(_index2.default, null) : data
			);
		}
	}]);

	return Home;
}(_react2.default.Component)) || _class) || _class);
exports.default = Home;

/***/ })

});
//# sourceMappingURL=0-afa7d4b4bae6ff2924e9.1629092961041.js.map