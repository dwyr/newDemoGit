webpackJsonp([49],{

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 主页
                  * dangw@glodon.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
var Title = _antd.Typography.Title;

// 转换时间

function getDuration(my_time) {
	var days = my_time / 1000 / 60 / 60 / 24;
	var daysRound = Math.floor(days);
	var hours = my_time / 1000 / 60 / 60 - 24 * daysRound;
	var hoursRound = Math.floor(hours);
	var minutes = my_time / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
	var minutesRound = Math.floor(minutes);
	//var seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
	//console.log('转换时间:', daysRound + '天', hoursRound + '时', minutesRound + '分', seconds + '秒');
	var time = daysRound + '天' + hoursRound + '小时' + minutesRound + '分钟';
	return time;
}

var Primary = (_dec = (0, _mobxReact.inject)('UserStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Primary, _React$Component);

	function Primary(props) {
		_classCallCheck(this, Primary);

		var _this = _possibleConstructorReturn(this, (Primary.__proto__ || Object.getPrototypeOf(Primary)).call(this, props));

		_this.onShowSizeChange = function (current, pageSize) {
			_this.props.UserStore.AwaitpageIndex = current;
			_this.props.UserStore.AwaitpageSize = pageSize;
			_this.props.UserStore.getAwaitReport();
		};

		_this.onChange = function (pageNumber) {
			_this.props.UserStore.AwaitpageIndex = pageNumber;
			_this.props.UserStore.getAwaitReport();
		};

		_this.state = {};
		return _this;
	}

	_createClass(Primary, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.UserStore.getAwaitReport();
		}
	}, {
		key: 'render',
		value: function render() {
			var columns = [{ title: '报表名称', dataIndex: 'classifyName', align: 'center' }, { title: '所属主题', dataIndex: 'theme', align: 'center' }, { title: '所属年月', dataIndex: 'month', align: 'center' }, { title: '填报人员', dataIndex: 'createUserName', align: 'center' }, { title: '剩余时间', dataIndex: 'createTime', align: 'center', render: function render(text, record) {
					if (Number(text) < 0) {
						var val = Math.abs(text);
						return "-" + _moment2.default.duration(val * 1000).days() + "天" + (0, _moment2.default)(val * 1000).format("HH:mm:ss");
					} else {
						return _moment2.default.duration(text * 1000).days() + "天" + (0, _moment2.default)(text * 1000).format("HH:mm:ss");
					}
				} }, {
				title: '操作',
				key: 'operator',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/report/excelimport?classifyName=' + text.classifyName + '&theme=' + text.theme + '&month=' + text.month },
							'Excel\u5BFC\u5165'
						)
					);
				}
			}];
			var _props$UserStore = this.props.UserStore,
			    AwaitpageIndex = _props$UserStore.AwaitpageIndex,
			    AwaittotalCount = _props$UserStore.AwaittotalCount,
			    AwaittableData = _props$UserStore.AwaittableData,
			    avgTime = _props$UserStore.avgTime,
			    monthlyCount = _props$UserStore.monthlyCount;


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
							null,
							'\u7CFB\u7EDF\u7BA1\u7406'
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							'\u4E3B\u9875'
						)
					)
				),
				_react2.default.createElement(
					_antd.Card,
					{ bordered: false, className: 'mt20', style: { width: '100%', height: '100px' } },
					_react2.default.createElement(
						_antd.Row,
						{ style: { height: '56px' } },
						_react2.default.createElement(
							_antd.Col,
							{ style: { height: '100%' }, xs: 24, sm: 24, md: 8, lg: 8, xl: 8, className: 'afc' },
							_react2.default.createElement(
								'p',
								null,
								'\u6211\u7684\u5F85\u529E'
							),
							_react2.default.createElement(
								Title,
								{ level: 3 },
								AwaittotalCount,
								'\u4E2A\u4EFB\u52A1'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8, className: 'afc', style: { height: '100%', borderLeft: '1px solid #e6e6e6', borderRight: '1px solid #e6e6e6' } },
							_react2.default.createElement(
								'p',
								null,
								'\u672C\u6708\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4'
							),
							_react2.default.createElement(
								Title,
								{ level: 3 },
								getDuration(avgTime * 1000)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8, className: 'afc', style: { height: '100%' } },
							_react2.default.createElement(
								'p',
								null,
								'\u5386\u53F2\u5B8C\u6210\u4EFB\u52A1\u6570'
							),
							_react2.default.createElement(
								Title,
								{ level: 3, type: 'warning', style: { color: "#1890ff" } },
								_react2.default.createElement(
									_reactRouterDom.Link,
									{ to: '/report' },
									monthlyCount || "0",
									'\u4E2A\u4EFB\u52A1'
								)
							)
						)
					)
				),
				AwaittotalCount == 0 ? _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						Title,
						{ style: { fontSize: '14px', marginTop: '25px' }, level: 4 },
						'\u5F85\u529E\u4EFB\u52A1\u5217\u8868'
					),
					_react2.default.createElement(
						'div',
						{ className: 'tc mt50' },
						_react2.default.createElement('img', { src: './images/daiban_un.png',
							width: '130px',
							height: '120px',
							alt: '' }),
						_react2.default.createElement(
							'p',
							{ className: 'daiban_un' },
							'\u672C\u6708\u4EFB\u52A1\u5DF2\u5168\u90E8\u5B8C\u6210\uFF0C\u4E3A\u4F60\u70B9\u8D5E'
						)
					)
				) : _react2.default.createElement(
					_antd.ConfigProvider,
					{ renderEmpty: customizeRenderEmpty },
					_react2.default.createElement(_antd.Table, {
						className: 'mt20',
						columns: columns,
						dataSource: mobx.toJS(AwaittableData),
						size: 'middle',
						pagination: false
					}),
					_react2.default.createElement(_antd.Pagination, {
						className: 'mt20 tr',
						showSizeChanger: true,
						onShowSizeChange: this.onShowSizeChange,
						onChange: this.onChange,
						total: AwaittotalCount,
						showQuickJumper: true,
						current: AwaitpageIndex,
						showTotal: function showTotal(total) {
							return '\u5171 ' + total + ' \u6761\u8BB0\u5F55';
						}
					})
				)
			);
		}
	}]);

	return Primary;
}(_react2.default.Component)) || _class) || _class);
exports.default = Primary;

/***/ })

});
//# sourceMappingURL=49-afa7d4b4bae6ff2924e9.1629092961041.js.map