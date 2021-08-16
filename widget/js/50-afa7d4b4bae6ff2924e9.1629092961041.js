webpackJsonp([50],{

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 专项费用表
                  * * dangwbocspace.cn
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

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dataObj = {
	'01': '1-1月',
	'02': '1-2月',
	'03': '1-3月',
	'04': '1-4月',
	'05': '1-5月',
	'06': '1-6月',
	'07': '1-7月',
	'08': '1-8月',
	'09': '1-9月',
	'10': '1-10月',
	'11': '1-11月',
	'12': '1-12月',
	'season1': '1-3月',
	'season2': '4-6月',
	'season3': '7-9月',
	'season4': '10-12月',
	'fullyear': '1-12月'
};

var height = {
	0: '414px',
	1: '550px',
	2: '380px'
};

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

var Zxfy = (_dec = (0, _mobxReact.inject)('kanbanStore'), _dec(_class = function (_React$Component) {
	_inherits(Zxfy, _React$Component);

	function Zxfy(props) {
		_classCallCheck(this, Zxfy);

		var _this = _possibleConstructorReturn(this, (Zxfy.__proto__ || Object.getPrototypeOf(Zxfy)).call(this, props));

		_this.getLastUpdatedTime = function () {
			var params = {
				"level": 2,
				"parentId": ""
			};
			return _this.props.kanbanStore.getLastTime(params);
		};

		_this.getReportByTime = function (params) {
			_this.props.kanbanStore.getReportByClassifyId(params).then(function (res) {
				if (res) {
					_this.setState({
						capitalData: Object.assign([], res.filter(function (item) {
							return item.name === "专项费用整体情况";
						})[0]['datas']),
						tableData: res.filter(function (item) {
							return item.name !== "专项费用整体情况";
						}).map(function (item, index) {
							// charts : {},  datas : [], id : "",name : '', schemas : []
							return Object.assign(item, {
								schemas: item.schemas.map(function (vitem, vindex) {
									if (vindex == 0) {
										// 第一列固定
										return {
											title: vitem.title,
											dataIndex: vitem.name,
											width: '150px',
											align: 'center',
											className: 'vt',
											fixed: 'left'
										};
									} else {
										return {
											title: vitem.title,
											dataIndex: vitem.name,
											align: 'center',
											className: 'vt'
										};
									}
								})
							});
						})
					});
				}
			});
		};

		_this.handleMenuClick = function (e) {
			var value = e.key;
			_this.setState({
				value: e.item.props.children,
				month: value
			}, function () {
				_this.handleChange();
			});
		};

		_this.handleYearClick = function (e) {
			_this.setState({
				value1: e.item.props.children
			}, function () {
				_this.handleChange();
			});
		};

		_this.handleChange = function () {
			var _this$state = _this.state,
			    month = _this$state.month,
			    value1 = _this$state.value1,
			    id = _this$state.id;

			var params = { "classifyId": id, "year": value1, "beginMonth": "01", "endMonth": month };
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
			_this.getReportByTime(params);
		};

		_this.changeOption = function (params) {
			return {
				title: {
					text: params.chartName + "图",
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
					trigger: 'item',
					formatter: "{b} : {c} <br/>{a} : {d}%"
				},
				legend: {
					bottom: 0,
					data: params.category
				},
				grid: {
					left: '2%',
					right: '4%',
					top: '3%',
					containLabel: true
				},
				toolbox: {
					show: true,
					feature: {
						mark: { show: true },
						dataView: { show: false, readOnly: false },
						magicType: {
							show: true,
							type: ['pie', 'funnel'],
							option: {
								funnel: {
									x: '25%',
									width: '45%',
									funnelAlign: 'left',
									max: 1548
								}
							}
						},
						restore: { show: false },
						saveAsImage: { show: false }
					}
				},
				calculable: true,
				series: [{
					name: '占比',
					type: 'pie',
					radius: ['40%', '65%'],
					center: ['50%', '50%'],
					label: {
						normal: {
							show: false,
							formatter: "{d}%",
							position: 'inner',
							textStyle: {
								color: '#FFF',
								fontSize: 12
							}
						}
					},
					data: params.series,
					color: ['#87BDFA', '#9C96F1', '#63C8C6', '#BADBF6', '#AEDFF1', '#F2D6BC', '#8EABD0']
				}]
			};
		};

		_this.state = {
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
			valKey: '',
			value1: '2019',
			key: '1',
			id: '', // 合同表id
			time: null, // 最后更新时间
			capitalData: [], // 数据
			tableData: [], // 3个图表数据
			columns: [{
				title: '专项活动',
				dataIndex: 'tel',
				align: 'center'
			}, {
				title: '累计',
				dataIndex: 'phone',
				align: 'center'
			}],
			month: ''
		};
		return _this;
	}

	_createClass(Zxfy, [{
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
				'12': '12月',
				'season1': '1季度',
				'season2': '2季度',
				'season3': '3季度',
				'season4': '4季度',
				'fullyear': '年度'
			};
			var mont = (0, _moment2.default)().month() + 1;
			var search = this.props.location.search;
			var id = _url2.default.parse(search, true).query.id;
			var key = _url2.default.parse(search, true).query.key;
			var time = _url2.default.parse(search, true).query.time;
			var mon = _url2.default.parse(search, true).query.month;
			var month = mon == undefined ? mont : mon;
			var lastTime = null; // 最后更新时间

			// 没有时间
			if (time == undefined) {
				// 根据id查询时间
				this.getLastUpdatedTime().then(function (res) {
					if (res) {
						var capitalInfo = res.filter(function (item) {
							return item.code === "zxfy";
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
				_this2.handleChange();
			});
		}

		// 获取最后时间


		// 切换年份


		// 动态图表

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    yearData = _state.yearData,
			    selData = _state.selData,
			    value = _state.value,
			    value1 = _state.value1,
			    time = _state.time,
			    capitalData = _state.capitalData,
			    tableData = _state.tableData,
			    key = _state.key,
			    month = _state.month;

			var columns1 = [{
				title: '全年专项费用',
				dataIndex: 'yearAll',
				align: 'center',
				className: 'vt'
			}, {
				title: dataObj[month] + '累计',
				dataIndex: 'all',
				align: 'center',
				className: 'vt'
			}, {
				title: '完成率',
				dataIndex: 'rate',
				align: 'center',
				className: 'vt'
			}];
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
					_antd.ConfigProvider,
					{ renderEmpty: customizeRenderEmpty },
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
								'\u8D22\u52A1'
							),
							_react2.default.createElement(
								_antd.Breadcrumb.Item,
								null,
								'\u4E13\u9879\u8D39\u7528\u8868'
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
									'\u4E13\u9879\u8D39\u7528\u8868 '
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
							'\u4E13\u9879\u8D39\u7528\u6574\u4F53\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
						),
						_react2.default.createElement(_antd.Table, { columns: columns1,
							dataSource: capitalData,
							size: "small",
							pagination: false,
							className: 'ci_table2',
							title: function title() {
								return '专项费用整体情况';
							},
							bordered: true })
					),
					tableData && tableData.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Card,
							{ key: 'card_' + index, bordered: true, className: 'mt20', style: { width: '100%' } },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20' },
								item.name + "情况",
								'\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
							),
							_react2.default.createElement(
								_antd.Row,
								null,
								_react2.default.createElement(
									_antd.Col,
									{ span: 10 },
									_react2.default.createElement(_echartsForReact2.default, {
										notMerge: true,
										lazyUpdate: true,
										option: _this3.changeOption(item.charts),
										style: { height: height[index] } })
								),
								_react2.default.createElement(
									_antd.Col,
									{ span: 14 },
									_react2.default.createElement(_antd.Table, { columns: item.schemas,
										dataSource: item.datas,
										size: "small",
										pagination: false,
										className: 'ci_table2 ci_table5',
										title: function title() {
											return item.name + "明细";
										},
										rowClassName: function rowClassName(record, index) {
											var className = index % 2 ? 'shallow_gray' : 'deep_gray_1';
											return className;
										},
										scroll: { x: item.schemas.length * 100 },
										bordered: true })
								)
							)
						);
					})
				)
			);
		}
	}]);

	return Zxfy;
}(_react2.default.Component)) || _class);
exports.default = Zxfy;

/***/ })

});
//# sourceMappingURL=50-afa7d4b4bae6ff2924e9.1629092961041.js.map