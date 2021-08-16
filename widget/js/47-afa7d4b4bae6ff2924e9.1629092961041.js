webpackJsonp([47],{

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 资金情况表
                  * qiufh@bocspace.cn
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _antd = __webpack_require__(17);

var _reactCustomScrollbars = __webpack_require__(336);

var _mobxReact = __webpack_require__(22);

var _CapitalStore = __webpack_require__(2109);

var _CapitalStore2 = _interopRequireDefault(_CapitalStore);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

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
	'season2': '1-6月',
	'season3': '1-9月',
	'season4': '1-12月',
	'fullyear': '1-12月'
};

var Capital = (_dec = (0, _mobxReact.inject)('kanbanStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Capital, _React$Component);

	function Capital(props) {
		_classCallCheck(this, Capital);

		var _this = _possibleConstructorReturn(this, (Capital.__proto__ || Object.getPrototypeOf(Capital)).call(this, props));

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

		_this.getReportByTime = function (params) {
			_this.store.getReportByClassifyId(params).then(function (res) {
				if (res) {
					_this.store.capitalData = Object.assign([], res[0]['datas']);
				}
			});
		};

		_this.getLastUpdatedTime = function () {
			var params = {
				"level": 2,
				"parentId": ""
			};
			_this.store.getReportClassifys(params).then(function (res) {
				if (res) {
					var capitalInfo = res.filter(function (item) {
						return item.code === "zjqk";
					});
					if (capitalInfo.length > 0) {
						_this.store.lastUpdatedTime = (0, _moment2.default)(capitalInfo[0]['lastUpdateTime']).format("YYYY-MM-DD HH:mm:ss");
					}
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

		_this.store = new _CapitalStore2.default();
		_this.state = {
			id: '17', // 表id
			key: '1',
			value: '年度',
			value1: '2019',
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
			month: '' //月份
		};
		return _this;
	}

	_createClass(Capital, [{
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
			this.getLastUpdatedTime();
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
			var key = _url2.default.parse(search, true).query.key;
			// const time = url.parse(search, true).query.time;
			var mon = _url2.default.parse(search, true).query.month;
			var month = mon == undefined ? mont : mon;
			this.setState({
				id: id,
				key: key,
				// time: Number(time),
				value: data[month],
				month: month.toString(),
				value1: currentYear.toString()
			}, function () {
				_this2.handleChange();
			});
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
			    month = _state.month;

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
			var columns = [{
				title: '项目',
				dataIndex: 'project',
				align: 'center',
				className: 'capital_col',
				render: function render(text, row, index) {
					if (text === "合计") {
						return {
							children: _react2.default.createElement(
								'span',
								null,
								text
							)
						};
					}
					return text;
				}
			}, {
				title: '合同金额',
				dataIndex: 'contract',
				align: 'center',
				className: 'capital_col'
			}, {
				title: dataObj[month] + '累计开票金额',
				dataIndex: 'totalInvoice',
				align: 'center',
				className: 'capital_col'
			}, {
				title: dataObj[month] + '累计回款',
				dataIndex: 'totalBack',
				align: 'center',
				className: 'capital_col'
			}, {
				title: '回款占开票比',
				align: 'center',
				className: 'capital_col',
				dataIndex: 'rate'

			}];

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
							'\u8D22\u52A1'
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							'\u8D44\u91D1\u60C5\u51B5\u8868'
						)
					)
				),
				_react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: '24' },
						_react2.default.createElement(
							'div',
							{ className: 'mt20 mb20' },
							_react2.default.createElement(
								'span',
								{ className: 'con_title' },
								'\u8D44\u91D1\u60C5\u51B5\u8868 '
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
								this.store.lastUpdatedTime
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
						'\u8D44\u91D1\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
					),
					_react2.default.createElement(
						_antd.Row,
						null,
						_react2.default.createElement(
							_antd.Col,
							{ span: '24' },
							_react2.default.createElement(
								_antd.ConfigProvider,
								{ renderEmpty: customizeRenderEmpty },
								_react2.default.createElement(_antd.Table, { columns: columns,
									dataSource: this.store.capitalData,
									size: "small",
									title: function title() {
										return '资金情况表';
									},
									pagination: false,
									className: 'ci_table2 ci_table5',
									rowClassName: function rowClassName(record, index) {
										var className = index % 2 ? 'shallow_gray' : 'shallow_blue';
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

	return Capital;
}(_react2.default.Component)) || _class) || _class);
exports.default = Capital;

/***/ }),

/***/ 2109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2; /*
                                                      * 经营看板-资金store
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

var CapitalStore = (_class = function () {
	function CapitalStore() {
		_classCallCheck(this, CapitalStore);

		_initDefineProp(this, 'capitalData', _descriptor, this);

		_initDefineProp(this, 'lastUpdatedTime', _descriptor2, this);
	} // 资金数据


	_createClass(CapitalStore, [{
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

	return CapitalStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'capitalData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'lastUpdatedTime', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getReportByClassifyId', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getReportByClassifyId'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getReportClassifys', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getReportClassifys'), _class.prototype)), _class);
exports.default = CapitalStore;

/***/ })

});
//# sourceMappingURL=47-afa7d4b4bae6ff2924e9.1629092961041.js.map