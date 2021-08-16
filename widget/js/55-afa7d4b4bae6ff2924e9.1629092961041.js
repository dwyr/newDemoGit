webpackJsonp([55],{

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 合同情况表
                  * dangwbocspace.cn
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _reactCustomScrollbars = __webpack_require__(336);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobxReact = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customizeRenderEmpty = function customizeRenderEmpty() {
	return _react2.default.createElement(
		'div',
		{ style: { textAlign: 'center', padding: '50px 0' } },
		_react2.default.createElement('img', {
			width: '150px',
			height: '100px',
			src: './images/not_found.png' }),
		_react2.default.createElement(
			'p',
			{ style: {
					fontSize: '14px',
					fontFamily: 'PingFangSC-Regular,PingFang S',
					fontWeight: '400',
					color: 'rgba(75,80,81,1)'
				} },
			'\u6682\u65E0\u6570\u636E'
		)
	);
};

var Contract = (_dec = (0, _mobxReact.inject)('kanbanStore'), _dec(_class = function (_React$Component) {
	_inherits(Contract, _React$Component);

	function Contract(props) {
		_classCallCheck(this, Contract);

		var _this = _possibleConstructorReturn(this, (Contract.__proto__ || Object.getPrototypeOf(Contract)).call(this, props));

		_this.getReportByTime = function () {
			var _this$state = _this.state,
			    id = _this$state.id,
			    month = _this$state.month,
			    value1 = _this$state.value1;

			var params = { "classifyId": id, "year": value1, "beginMonth": month, "endMonth": month };
			if (month === "season1") {
				params = { "classifyId": id, "year": value1, "beginMonth": "01", "endMonth": "03" };
			} else if (month === "season2") {
				params = { "classifyId": id, "year": value1, "beginMonth": "04", "endMonth": "06" };
			} else if (month === "season3") {
				params = { "classifyId": id, "year": value1, "beginMonth": "07", "endMonth": "09" };
			} else if (month === "season4") {
				params = { "classifyId": id, "year": value1, "beginMonth": "10", "endMonth": "12" };
			} else if (month === "fullyear") {
				params = { "classifyId": id, "year": value1, "beginMonth": "01", "endMonth": "12" };
			}

			_this.props.kanbanStore.getReportByClassifyId(params).then(function (res) {
				if (res) {

					var arr = [];
					res[0]['charts'].series.map(function (item) {
						arr = arr.concat(item.value);
					});
					var newArray = Array.from(new Set(arr));
					var maxNum = Math.max.apply(Math, _toConsumableArray(newArray));

					_this.setState({
						capitalData: Object.assign([], res[0]['datas']),
						xAxis: Object.assign([], res[0]['charts'].category), // x轴
						series: Object.assign([], res[0]['charts'].series.map(function (item) {
							return {
								name: item.name,
								type: 'bar',
								data: item.value,
								barWidth: 10,
								itemStyle: {
									emphasis: {
										barBorderRadius: 3
									},
									normal: {
										barBorderRadius: 3
									}
								}
							};
						})), // 图表数据
						legend: res[0]['charts'].series.map(function (item) {
							return item.name;
						}),
						max: maxNum,
						columns: res[0].schemas.map(function (item, vindex) {
							return {
								title: item.title,
								dataIndex: item.name,
								align: 'center',
								className: 'vt',
								width: 100,
								render: function render(text, row, index) {
									if (vindex == 0) {
										if (index == 0) {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													'\u5408\u8BA1'
												),
												props: {
													colSpan: 2,
													className: 'tab_td_bg vt'
												}
											};
										} else if (index == 1) {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													text
												),
												props: {
													rowSpan: 6,
													className: 'tab_td_bg vt'
												}
											};
										} else if (index == 7) {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													text
												),
												props: {
													rowSpan: 5,
													className: 'tab_td_bg vt'
												}
											};
										} else if (index == 12) {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													text
												),
												props: {
													rowSpan: 11,
													className: 'tab_td_bg vt'
												}
											};
										} else if (index == 23) {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													text
												),
												props: {
													rowSpan: 8,
													className: 'tab_td_bg vt'
												}
											};
										} else if (index == 31) {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													text
												),
												props: {
													rowSpan: 6,
													className: 'tab_td_bg vt'
												}
											};
										} else if (index == 37) {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													text
												),
												props: {
													rowSpan: 6,
													className: 'tab_td_bg vt'
												}
											};
										} else {
											return {
												children: _react2.default.createElement(
													'span',
													null,
													text
												),
												props: {
													rowSpan: 0,
													className: 'tab_td_bg vt'
												}
											};
										}
									} else if (vindex == 1) {
										var obj = {
											children: text,
											props: {
												className: 'tab_td_bg'
											}
										};
										if (index == 0) {
											obj.props.colSpan = 0;
										}
										return obj;
									} else {
										return text;
									}
								},
								children: item.children !== null ? item.children.map(function (v) {
									return {
										title: v.title,
										dataIndex: v.name,
										align: 'center',
										className: 'vt',
										width: 100
									};
								}) : null
							};
						})
					});
				}
			});
		};

		_this.getLastUpdatedTime = function () {
			var params = {
				"level": 2,
				"parentId": ""
			};
			return _this.props.kanbanStore.getLastTime(params);
		};

		_this.handleMenuClick = function (e) {
			var value = e.key;
			_this.setState({
				value: e.item.props.children,
				month: value
			}, function () {
				_this.getReportByTime();
			});
		};

		_this.handleYearClick = function (e) {
			_this.setState({
				value1: e.item.props.children
			}, function () {
				_this.getReportByTime();
			});
		};

		_this.state = {
			key: '1',
			yearData: [{
				id: '',
				name: '2019'
			}], // 年份
			selData: [{
				id: '01',
				name: '1月'
			}, {
				id: '02',
				name: '2月'
			}, {
				id: '03',
				name: '3月'
			}, {
				id: '04',
				name: '4月'
			}, {
				id: '05',
				name: '5月'
			}, {
				id: '06',
				name: '6月'
			}, {
				id: '07',
				name: '7月'
			}, {
				id: '08',
				name: '8月'
			}, {
				id: '09',
				name: '9月'
			}, {
				id: '10',
				name: '10月'
			}, {
				id: '11',
				name: '11月'
			}, {
				id: '12',
				name: '12月'
			}, {
				id: 'season1',
				name: '1季度'
			}, {
				id: 'season2',
				name: '2季度'
			}, {
				id: 'season3',
				name: '3季度'
			}, {
				id: 'season4',
				name: '4季度'
			}, {
				id: 'fullyear',
				name: '年度'
			}],
			value: '年度',
			value1: '2019',
			id: '12', // 合同表id
			time: null, // 最后更新时间
			capitalData: [], // 数据
			xAxis: [], // x轴
			series: [], // 图表数据
			legend: [],
			max: null,
			columns: [],
			month: '' //月份
		};
		return _this;
	}

	_createClass(Contract, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// 获取当前年份数据
			var currentYear = (0, _moment2.default)().year();
			/*
   * 年份数据来源：从2019年开始， 截至到当前的年份
   * */
			if (currentYear <= 2019) {
				this.setState({
					yearData: [{
						name: '2019'
					}]
				});
			} else {
				var num = Number(currentYear);
				var _data = [];
				for (var i = 2019; i <= num; i++) {
					_data.push({ name: String(i) });
				}
				this.setState({
					yearData: Object.assign([], _data.reverse())
				});
			}
			var data = {
				'01': '1月',
				'02': '2月',
				'03': '3月',
				'04': '4月',
				'05': '5月',
				'06': '6月',
				'07': '7月',
				'08': '8月',
				'09': '9月',
				'10': '10月',
				'11': '11月',
				'12': '12月'
			};
			var mont = (0, _moment2.default)().month() + 1;
			var search = this.props.location.search;
			var id = _url2.default.parse(search, true).query.id;
			var time = _url2.default.parse(search, true).query.time;
			var key = _url2.default.parse(search, true).query.key;
			var mon = _url2.default.parse(search, true).query.month;
			var month = mon == undefined ? mont : mon;
			var lastTime = null; // 最后更新时间

			// 没有时间
			if (time == undefined) {
				// 根据id查询时间
				this.getLastUpdatedTime().then(function (res) {
					if (res) {
						var capitalInfo = res.filter(function (item) {
							return item.code === "htqk";
						});
						if (capitalInfo.length > 0) {
							lastTime = capitalInfo[0]['lastUpdateTime'];
							_this2.setState({
								time: Number(lastTime)
							});
						}
					}
				});
			} else {
				this.setState({
					time: Number(time)
				});
			}

			this.setState({
				id: id,
				key: key,
				value: data[month],
				month: month.toString(),
				value1: currentYear.toString()
			}, function () {
				// 获取初始数据
				_this2.getReportByTime();
			});
		}

		// 获取最后时间


		// 切换年份

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    yearData = _state.yearData,
			    selData = _state.selData,
			    value = _state.value,
			    value1 = _state.value1,
			    time = _state.time,
			    capitalData = _state.capitalData,
			    xAxis = _state.xAxis,
			    series = _state.series,
			    legend = _state.legend,
			    max = _state.max,
			    key = _state.key;

			var option = {
				color: ['#44A0FF', '#A3D4FF', '#F7B964'],
				title: {
					text: '合同情况显示板',
					left: 'center',
					textStyle: {
						color: 'rgb(61, 77, 102)',
						fontWeight: 'bold',
						fontStyle: 'normal',
						fontFamily: 'Microsoft YaHei UI',
						fontSize: '13'
					}
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {
					data: legend,
					y: 'bottom'
				},
				grid: {
					left: '2%',
					right: '4%',
					containLabel: true
				},
				toolbox: {
					show: true,
					feature: {
						mark: { show: true },
						dataView: { show: false, readOnly: false },
						magicType: { show: false, type: ['line', 'bar'] },
						restore: { show: false },
						saveAsImage: { show: false }
					}
				},
				calculable: true,
				xAxis: [{
					type: 'category',
					data: xAxis
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					}
					//max: max,
					//min: 0,
					//splitNumber: 10,
					//boundaryGap : [ 0.2, 0.2 ]
				}],
				series: series
			};
			var menu = _react2.default.createElement(
				_reactCustomScrollbars.Scrollbars,
				{ style: { height: 200 } },
				_react2.default.createElement(
					_antd.Menu,
					{ className: 'con_menu', onClick: this.handleMenuClick },
					selData.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Menu.Item,
							{ key: item.id },
							item.name
						);
					})
				)
			);
			var menu1 = _react2.default.createElement(
				_reactCustomScrollbars.Scrollbars,
				{ style: { height: 200 } },
				_react2.default.createElement(
					_antd.Menu,
					{ className: 'con_menu', onClick: this.handleYearClick },
					yearData.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Menu.Item,
							{ key: 'year' + index },
							item.name
						);
					})
				)
			);
			var defaultKey = this.props.kanbanStore.defaultKey;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'con_bottom' },
					_react2.default.createElement(
						_antd.Breadcrumb,
						{ separator: '>', style: { margin: '0' } },
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							{ href: "#/home?key=" + defaultKey },
							'\u7ECF\u8425\u770B\u677F'
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							{ href: "#/home?key=" + key },
							'\u8425\u9500'
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							'\u5408\u540C\u60C5\u51B5\u8868'
						)
					)
				),
				_react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 24 },
						_react2.default.createElement(
							'div',
							{ className: 'mt20 mb20' },
							_react2.default.createElement(
								'span',
								{ className: 'con_title' },
								'\u5408\u540C\u60C5\u51B5\u8868 '
							),
							_react2.default.createElement(
								'span',
								{ className: 'con_time ml35' },
								'\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4:'
							),
							_react2.default.createElement(
								'span',
								{
									className: 'con_time_content ml15' },
								(0, _moment2.default)(time).format("YYYY-MM-DD HH:mm:ss")
							)
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 24 },
						_react2.default.createElement(
							_antd.Dropdown,
							{ overlay: menu1 },
							_react2.default.createElement(
								_antd.Button,
								{ style: { width: 82 } },
								value1,
								' ',
								_react2.default.createElement(_antd.Icon, { type: 'down' })
							)
						),
						_react2.default.createElement(
							_antd.Dropdown,
							{ overlay: menu },
							_react2.default.createElement(
								_antd.Button,
								{ className: 'ml15', style: { width: 82 } },
								value,
								' ',
								_react2.default.createElement(_antd.Icon, { type: 'down' })
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Card,
					{ bordered: true, className: 'mt20', style: { width: '100%' } },
					_react2.default.createElement(
						'h3',
						{ className: 'kanban_title mb20' },
						'\u8D22\u52A1\u5408\u540C\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
					),
					_react2.default.createElement(
						_antd.Row,
						null,
						_react2.default.createElement(
							_antd.Col,
							{ span: 10 },
							_react2.default.createElement(
								_antd.Affix,
								{ offsetTop: 120 },
								_react2.default.createElement(_echartsForReact2.default, { option: option,
									notMerge: true,
									lazyUpdate: true,
									style: { height: '400px' } })
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 14 },
							_react2.default.createElement(
								_antd.Affix,
								{ offsetTop: 60 },
								_react2.default.createElement(_antd.Table, { columns: this.state.columns,
									dataSource: [],
									size: "small",
									pagination: false,
									title: function title() {
										return '合同情况明细';
									},
									className: 'ci_table2 ci_table3 ci_table6',
									bordered: true })
							),
							_react2.default.createElement(
								_antd.ConfigProvider,
								{ renderEmpty: customizeRenderEmpty },
								_react2.default.createElement(_antd.Table, { columns: this.state.columns,
									dataSource: capitalData,
									size: "small",
									showHeader: false,
									pagination: false,
									className: 'ci_table2 ci_table3 ci_table7',
									rowClassName: function rowClassName(record, index) {
										var className = index % 2 ? 'deep_gray' : 'shallow_gray';
										return className;
									},
									bordered: true })
							)
						)
					)
				)
			);
		}
	}]);

	return Contract;
}(_react2.default.Component)) || _class);
exports.default = Contract;

/***/ })

});
//# sourceMappingURL=55-afa7d4b4bae6ff2924e9.1629092961041.js.map