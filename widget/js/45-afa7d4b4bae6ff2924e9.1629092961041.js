webpackJsonp([45],{

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 人员情况表
                  * qiufh@bocspace.cn
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _reactCustomScrollbars = __webpack_require__(336);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _StaffStatusStore = __webpack_require__(2112);

var _StaffStatusStore2 = _interopRequireDefault(_StaffStatusStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var StaffStatus = (_dec = (0, _mobxReact.inject)('kanbanStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(StaffStatus, _React$Component);

	function StaffStatus(props) {
		_classCallCheck(this, StaffStatus);

		var _this = _possibleConstructorReturn(this, (StaffStatus.__proto__ || Object.getPrototypeOf(StaffStatus)).call(this, props));

		_this.getLastUpdatedTime = function () {
			var params = {
				"level": 2,
				"parentId": ""
			};
			return _this.store.getReportClassifys(params);
		};

		_this.handleChange = function () {
			var _this$state = _this.state,
			    month = _this$state.month,
			    value1 = _this$state.value1,
			    id = _this$state.id;

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
			_this.getReportByTime(params);
		};

		_this.onChange = function () {};

		_this.onSelect = function (d) {
			console.log('select');
			console.log(d);
		};

		_this.disabledDate = function (current) {
			console.log(current, '当前');
			//return current && current.valueOf() > Date.now();
		};

		_this.getReportByTime = function (params) {
			_this.renderData(params);
		};

		_this.fillTableData = function (item) {
			if (item.name === "各部门人员分布") {
				if (item.schemas) {
					_this.store.archTableColumn = item.schemas;
				}
				if (item.datas) {
					_this.store.archTableData = item.datas;
					var chartsData = item.datas.filter(function (item) {
						return item.post !== '合计';
					});
					_this.store.archChartData = chartsData.map(function (item) {
						return Object.assign({}, { 'value': item.peopleCount }, { 'name': item.post });
					});
				}
			}
			if (item.name === "司龄及性别分布") {
				if (item.schemas) {
					_this.store.ageSexTableColumn = item.schemas;
				}
				if (item.datas) {
					_this.store.ageSexTableData = item.datas;
					var _chartsData = item.datas.filter(function (item) {
						return item.seniority !== '合计';
					});
					_this.store.ageSexChartData = _chartsData.map(function (item) {
						return Object.assign({}, { 'value': item.total }, { 'name': item.seniority });
					});
				}
			}
		};

		_this.renderData = function (params) {
			_this.store.getReportByClassifyId(params).then(function (res) {
				if (res) {
					res.map(function (item, index) {
						_this.fillTableColumn(item); //填充表头数据
					});
				}
				return res;
			}).then(function (res) {
				if (res) {
					res.map(function (item, index) {
						_this.fillTableData(item); // 填充表体数据
						_this.fillChartData(item); // 填充图表数据
					});
				}
			});
		};

		_this.fillTableColumn = function (item) {
			if (item.name === "各部门人员分布") {
				if (item.schemas) {
					_this.store.archTableColumn = item.schemas.map(function (item) {
						return Object.assign({}, { 'dataIndex': item.name }, { 'title': item.title }, { 'align': 'center' });
					});
				}
			}
			if (item.name === "司龄及性别分布") {
				if (item.schemas) {
					_this.store.ageSexTableColumn = item.schemas.map(function (item) {
						return Object.assign({}, { 'dataIndex': item.name }, { 'title': item.title }, { 'align': 'center' });
					});
				}
			}
		};

		_this.fillTableData = function (item) {
			if (item.name === "各部门人员分布") {
				if (item.datas) {
					_this.store.archTableData = item.datas;
				}
			}
			if (item.name === "司龄及性别分布") {
				if (item.datas) {
					_this.store.ageSexTableData = item.datas;
				}
			}
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

		_this.totalFontBold = function (text, row, index) {
			if (text === "合计") {
				return {
					children: _react2.default.createElement(
						'span',
						null,
						text
					),
					props: {
						className: 'tab_td_bg fwb'
					}
				};
			}
			return text;
		};

		_this.store = new _StaffStatusStore2.default();
		_this.state = {
			id: '41', // 表id
			key: '4',
			time: null,
			value: '年度',
			value1: '2019',
			month: '', //月份
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
			}]
		};
		return _this;
	}

	_createClass(StaffStatus, [{
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
			var search = this.props.location.search;
			var id = _url2.default.parse(search, true).query.id;
			var key = _url2.default.parse(search, true).query.key;
			var time = _url2.default.parse(search, true).query.time;
			var mont = (0, _moment2.default)().month() + 1;
			var mon = _url2.default.parse(search, true).query.month;
			var month = mon == undefined ? mont : mon;
			var lastTime = null; // 最后更新时间

			// 没有时间
			if (time == undefined) {
				// 根据id查询时间
				this.getLastUpdatedTime().then(function (res) {
					if (res) {
						var capitalInfo = res.filter(function (item) {
							return item.code === "ryqk";
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

	}, {
		key: 'fillChartData',
		value: function fillChartData(item) {
			if (item.name === "各部门人员分布") {
				if (item.charts) {
					this.store.archLegendData = item.charts.category;
					this.store.archChartData = item.charts.series;
				}
			}
			if (item.name === "司龄及性别分布") {
				if (item.charts) {
					this.store.ageSexLegendData = item.charts.category;
					this.store.ageSexChartData = item.charts.series;
				}
			}
		}

		// 切换年份

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    yearData = _state.yearData,
			    selData = _state.selData,
			    value = _state.value,
			    value1 = _state.value1,
			    key = _state.key,
			    time = _state.time;

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
			var columns2 = [{
				title: '部门名称',
				dataIndex: 'post',
				align: 'center',
				className: 'vt'
			}, {
				title: '人数',
				dataIndex: 'peopleCount',
				align: 'center',
				className: 'vt'
			}, {
				title: '占比',
				dataIndex: 'percentage',
				align: 'center',
				className: 'vt'
			}, {
				title: '职级结构',
				dataIndex: 'phone',
				align: 'center',
				children: [{
					title: 'M6/P6',
					dataIndex: 'mp6',
					align: 'center',
					className: 'vt th_bg1'
				}, {
					title: 'M5/P5',
					dataIndex: 'mp5',
					align: 'center',
					className: 'vt th_bg1'
				}, {
					title: 'M4/P4',
					dataIndex: 'mp4',
					align: 'center',
					className: 'vt th_bg1'
				}, {
					title: 'P3',
					dataIndex: 'p3',
					align: 'center',
					className: 'vt th_bg1'
				}, {
					title: 'P2',
					dataIndex: 'p2',
					align: 'center',
					className: 'vt th_bg1'
				}]
			}];
			var columns3 = [{
				title: '司龄',
				dataIndex: 'seniority',
				align: 'center',
				className: 'vt'
				// render:this.totalFontBold
			}, {
				title: '人数',
				dataIndex: 'phone',
				align: 'center',
				children: [{
					title: '男',
					dataIndex: 'man',
					align: 'center',
					className: 'vt th_bg1'
				}, {
					title: '女',
					dataIndex: 'woman',
					align: 'center',
					className: 'vt th_bg1'
				}, {
					title: '合计',
					dataIndex: 'total',
					align: 'center',
					className: 'vt th_bg1'
				}, {
					title: '占比',
					dataIndex: 'percentage',
					align: 'center',
					className: 'vt th_bg1'
				}]
			}];

			var option1 = {
				title: {
					text: '各部门人员分布情况',
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
				grid: {
					left: '3%',
					right: '3%',
					bottom: '15%',
					containLabel: true
				},
				legend: {
					bottom: 0,
					data: this.store.archLegendData
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
									width: '50%',
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
					data: this.store.archChartData,
					color: ['#87BDFA', '#9C96F1', '#63C8C6', '#BADBF6', '#AEDFF1', '#F2D6BC', '#8EABD0', '#47BAC1']
				}]
			};

			var option2 = {
				title: {
					text: '司龄分布情况',
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
					data: this.store.ageSexLegendData
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
									width: '50%',
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
					data: this.store.ageSexChartData,
					color: ['#47BAC1', '#7FC8EA', '#B5E3E5', '#6DD4B3', '#A6E59F', '#59BFCB']
				}]
			};

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
								'\u4EBA\u529B'
							),
							_react2.default.createElement(
								_antd.Breadcrumb.Item,
								null,
								'\u4EBA\u5458\u60C5\u51B5\u8868'
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
									'\u4EBA\u5458\u60C5\u51B5\u8868 '
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
							'\u4EBA\u624D\u7ED3\u6784\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4EBA\uFF09'
						),
						_react2.default.createElement(
							_antd.Row,
							null,
							_react2.default.createElement(
								_antd.Col,
								{ span: 10 },
								_react2.default.createElement(_echartsForReact2.default, {
									notMerge: true,
									style: { height: '382px' },
									lazyUpdate: true,
									option: option1 })
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 14 },
								_react2.default.createElement(_antd.Table, { columns: columns2,
									dataSource: this.store.archTableData,
									size: "small",
									pagination: false,
									title: function title() {
										return '各部门人员分布情况';
									},
									className: 'ci_table2 ci_table5',
									rowClassName: function rowClassName(record, index) {
										var className = index % 2 ? 'shallow_gray' : 'deep_gray_1';
										return className;
									},
									bordered: true })
							)
						)
					),
					_react2.default.createElement(
						_antd.Card,
						{ bordered: true, className: 'mt20', style: { width: '100%' } },
						_react2.default.createElement(
							'h3',
							{ className: 'kanban_title mb20' },
							'\u53F8\u9F84\u53CA\u6027\u522B\u5206\u5E03\uFF08\u5355\u4F4D\uFF1A\u4EBA\uFF09'
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
									style: { height: '314px' },
									option: option2 })
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 14 },
								_react2.default.createElement(_antd.Table, { columns: columns3,
									dataSource: this.store.ageSexTableData,
									size: "small",
									pagination: false,
									title: function title() {
										return '司龄及性别分布明细';
									},
									className: 'ci_table2 ci_table5',
									rowClassName: function rowClassName(record, index) {
										var className = index % 2 ? 'shallow_gray' : 'deep_gray_1';
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

	return StaffStatus;
}(_react2.default.Component)) || _class) || _class);
exports.default = StaffStatus;

/***/ }),

/***/ 2112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9; /*
                                                                                                                                                        * 经营看板-人员情况表store
                                                                                                                                                        */


var _mobx = __webpack_require__(12);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _wisdomsee = __webpack_require__(151);

var _wisdomsee2 = _interopRequireDefault(_wisdomsee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var StaffStatusStore = (_class = function () {
	function StaffStatusStore() {
		_classCallCheck(this, StaffStatusStore);

		_initDefineProp(this, 'archTableData', _descriptor, this);

		_initDefineProp(this, 'ageSexTableData', _descriptor2, this);

		_initDefineProp(this, 'archLegendData', _descriptor3, this);

		_initDefineProp(this, 'ageSexLegendData', _descriptor4, this);

		_initDefineProp(this, 'archChartData', _descriptor5, this);

		_initDefineProp(this, 'ageSexChartData', _descriptor6, this);

		_initDefineProp(this, 'archTableColumn', _descriptor7, this);

		_initDefineProp(this, 'ageSexTableColumn', _descriptor8, this);

		_initDefineProp(this, 'lastUpdatedTime', _descriptor9, this);
	} // 人才结构表体数据
	// 司龄及性别分布表体数据

	// legend数据
	// legend数据
	// 人才结构图表数据
	// 司龄及性别分布图表数据

	// 人才结构表头数据
	// 司龄及性别分布表头数据


	_createClass(StaffStatusStore, [{
		key: 'getReportByClassifyId',


		// 根据分类查询报表
		value: function getReportByClassifyId(param) {
			return (0, _api.requestPost)('getReportByClassifyId', _config2.default.wisdomsee.getReportByClassifyId, _wisdomsee2.default.wisdomsee.getReportByClassifyId, param);
		}

		// 看板分类查询

	}, {
		key: 'getReportClassifys',
		value: function getReportClassifys(param) {
			return (0, _api.requestPost)('getReportClassifys', _config2.default.wisdomsee.getReportClassifys, _wisdomsee2.default.wisdomsee.getReportClassifys, param);
		}
	}]);

	return StaffStatusStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'archTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'ageSexTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'archLegendData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'ageSexLegendData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'archChartData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'ageSexChartData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'archTableColumn', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'ageSexTableColumn', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'lastUpdatedTime', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getReportByClassifyId', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getReportByClassifyId'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getReportClassifys', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getReportClassifys'), _class.prototype)), _class);
exports.default = StaffStatusStore;

/***/ })

});
//# sourceMappingURL=45-afa7d4b4bae6ff2924e9.1629092961041.js.map