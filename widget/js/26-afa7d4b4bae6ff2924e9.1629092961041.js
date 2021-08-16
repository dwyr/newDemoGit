webpackJsonp([26],{

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * OKR
                  * dangwei@bacspace.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactCustomScrollbars = __webpack_require__(336);

var _antd = __webpack_require__(17);

var _DingtalkTree = __webpack_require__(1780);

var _DingtalkTree2 = _interopRequireDefault(_DingtalkTree);

var _OkrTable = __webpack_require__(1950);

var _OkrTable2 = _interopRequireDefault(_OkrTable);

var _ZjComment = __webpack_require__(1958);

var _ZjComment2 = _interopRequireDefault(_ZjComment);

var _BpmStore = __webpack_require__(1577);

var _BpmStore2 = _interopRequireDefault(_BpmStore);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;
var confirm = _antd.Modal.confirm;
var Okr = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Okr, _React$Component);

	function Okr(props) {
		_classCallCheck(this, Okr);

		var _this2 = _possibleConstructorReturn(this, (Okr.__proto__ || Object.getPrototypeOf(Okr)).call(this, props));

		_this2.getWeeks = function (currentYear) {
			_this2.store.getWeeks(currentYear).then(function (res) {
				_this2.store.weeksData = Object.assign([], res);
				var activeweeks = res.filter(function (item) {
					return item.isDefault == true;
				})[0];
				_this2.store.activeweeks = Object.assign({}, activeweeks);
				_this2.store.getWeekDetails(activeweeks.id);
				_this2.store.getMonthDetails(activeweeks.month);
				_this2.store.getAtts({
					type: 'week',
					code: activeweeks.id
				});
				_this2.store.getComments({
					type: 'week',
					code: activeweeks.id
				});
			});
		};

		_this2.onRef = function (ref) {
			_this2.child = ref;
		};

		_this2.onCommentRef = function (ref) {
			_this2.comment = ref;
		};

		_this2.handleYearClick = function (e) {
			_this2.setState({
				value: e.item.props.children
			}, function () {
				_this2.getWeeks(_this2.state.value);
			});
		};

		_this2.saveAttachment = function (arr) {
			var _this2$state = _this2.state,
			    key = _this2$state.key,
			    season = _this2$state.season,
			    value = _this2$state.value;
			var activeweeks = _this2.store.activeweeks;

			var params = {
				type: "",
				code: "",
				attachments: arr.map(function (item) {
					return Object.assign({}, {
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						id: item.id
					});
				})
			};
			if (key == "1") {
				params.type = "week";
				params.code = mobx.toJS(activeweeks).id;
				_this2.store.saveAtt(params).then(function (res) {
					if (res == true) {
						_antd.message.success("保存成功");
						_this2.store.getAtts({
							type: 'week',
							code: activeweeks.id
						});
					}
				});
			} else if (key == "2") {
				params.type = "season";
				params.code = value + season;
				_this2.store.saveAtt(params).then(function (res) {
					if (res == true) {
						_antd.message.success("保存成功");
						_this2.store.getAtts({
							type: 'week',
							code: value + season
						});
					}
				});
			} else {
				params.type = "year";
				params.code = value;
				_this2.store.saveAtt(params).then(function (res) {
					if (res == true) {
						_antd.message.success("保存成功");
						_this2.store.getAtts({
							type: 'week',
							code: value + season
						});
					}
				});
			}
		};

		_this2.delNode = function (id) {
			var _this2$state2 = _this2.state,
			    key = _this2$state2.key,
			    season = _this2$state2.season,
			    value = _this2$state2.value;
			var activeweeks = _this2.store.activeweeks;

			var params = {
				type: "",
				code: "",
				attachmentId: id
			};
			if (key == "1") {
				params.type = "week";
				params.code = mobx.toJS(activeweeks).id;
			} else if (key == "2") {
				params.type = "season";
				params.code = value + season;
			} else {
				params.type = "year";
				params.code = value;
			}
			_this2.store.delAtt(params).then(function (res) {
				if (res == true) {
					_antd.message.success("删除成功");
				}
			});
		};

		_this2.callback = function (type) {
			_this2.setState({
				key: type
			});
			var _this2$state3 = _this2.state,
			    value = _this2$state3.value,
			    season = _this2$state3.season;

			switch (type) {
				case "1":
					_this2.getWeeks(value);
					break;
				case "2":
					var param = value + season;
					_this2.store.getSeasonDetails(param);
					_this2.store.getAtts({
						type: 'season',
						code: param
					});
					_this2.store.getComments({
						type: 'season',
						code: param
					});
					break;
				case "3":
					_this2.store.getYearDetails(value);
					_this2.store.getAtts({
						type: 'year',
						code: value
					});
					_this2.store.getComments({
						type: 'year',
						code: value
					});
					break;
				default:
					break;
			}
		};

		_this2.handleWeekClick = function (type) {
			var _this = _this2;
			var _this$store = _this.store,
			    activeweeks = _this$store.activeweeks,
			    weeksData = _this$store.weeksData,
			    defaultWeeksData = _this$store.defaultWeeksData,
			    weekData = _this$store.weekData;

			var aweeks = JSON.parse(JSON.stringify(activeweeks));
			var wData = JSON.parse(JSON.stringify(weeksData));
			var dtWeeksData = JSON.parse(JSON.stringify(defaultWeeksData));
			var aWeeksData = JSON.parse(JSON.stringify(weekData));
			var index = wData.findIndex(function (item) {
				return item.id == aweeks.id;
			});
			var activeIndex = 0;
			if (type == 1) {
				// 向上
				if (index == 0) {
					_antd.message.warn("当前是第一周");
					return false;
				}
				activeIndex = index - 1;
			} else {
				// 向下
				if (index == wData.length - 1) {
					_antd.message.warn("当前是最后一周");
					return false;
				}
				activeIndex = index + 1;
			}

			// 校验：内容有没有变动
			var defaultSource = dtWeeksData.map(function (item) {
				return {
					"orders": item.orders,
					"keyResult": item.keyResult,
					"workItems": item.workItems,
					"associationDescription": item.associationDescription,
					"results": item.results
				};
			});
			var currentSource = aWeeksData.map(function (item) {
				return {
					"orders": item.orders,
					"keyResult": item.keyResult,
					"workItems": item.workItems,
					"associationDescription": item.associationDescription,
					"results": item.results
				};
			});
			var isChange = JSON.stringify(defaultSource) == JSON.stringify(currentSource); // 内容是否变动
			if (isChange == false) {
				confirm({
					title: '是否要切换周，并清空当前所填写数据?',
					onOk: function onOk() {
						var active = wData[activeIndex];
						_this.store.activeweeks = Object.assign({}, active);
						_this.store.getWeekDetails(active.id);
						_this.store.getAtts({
							type: 'week',
							code: active.id
						});
						_this.store.getComments({
							type: 'week',
							code: active.id
						});
						if (activeweeks.month !== active.month) {
							// 清空月数据
							_this.store.getMonthDetails(active.month);
						}
					},
					onCancel: function onCancel() {}
				});
			} else {
				var active = wData[activeIndex];
				_this.store.activeweeks = Object.assign({}, active);
				_this.store.getWeekDetails(active.id);
				_this.store.getAtts({
					type: 'week',
					code: active.id
				});
				_this.store.getComments({
					type: 'week',
					code: active.id
				});
				if (activeweeks.month !== active.month) {
					// 清空月数据
					_this.store.getMonthDetails(active.month);
				}
			}
		};

		_this2.saveData = function (type, dataSource) {
			_this2.store[type + 'Data'] = Object.assign([], dataSource);
		};

		_this2.onChangeRadio = function (e) {
			var value = e.target.value;

			_this2.setState({
				season: value
			}, function () {
				var param = _this2.state.value + value;
				_this2.store.getSeasonDetails(param);
				_this2.store.getAtts({
					type: 'season',
					code: param
				});
				_this2.store.getComments({
					type: 'season',
					code: param
				});
			});
		};

		_this2.handleSubmit = function () {
			var _this2$state4 = _this2.state,
			    key = _this2$state4.key,
			    value = _this2$state4.value,
			    season = _this2$state4.season;

			switch (key) {
				case "1":
					_this2.store.saveWeekDetails();
					_this2.store.saveMonthDetails().then(function (res) {
						if (res == true) {
							_antd.message.success("保存成功");
						}
					});
					break;
				case "2":
					var param = value + season;
					_this2.store.saveSeasonDetails(param).then(function (res) {
						if (res == true) {
							_antd.message.success("保存成功");
						}
					});
					break;
				case "3":
					_this2.store.saveYearDetails(value).then(function (res) {
						if (res == true) {
							_antd.message.success("保存成功");
						}
					});
					break;
				default:
					break;
			}
		};

		_this2.saveComment = function (text) {
			var _this2$state5 = _this2.state,
			    key = _this2$state5.key,
			    season = _this2$state5.season,
			    value = _this2$state5.value;
			var activeweeks = _this2.store.activeweeks;

			var params = {
				type: "",
				code: "",
				comment: { text: text }
			};
			if (key == "1") {
				params.type = "week";
				params.code = mobx.toJS(activeweeks).id;
				_this2.store.saveComment(params).then(function (res) {
					if (res == true) {
						_antd.message.success("保存成功");
						_this2.comment.clearState();
						_this2.store.getComments({
							type: 'week',
							code: activeweeks.id
						});
					}
				});
			} else if (key == "2") {
				params.type = "season";
				params.code = value + season;
				_this2.store.saveComment(params).then(function (res) {
					if (res == true) {
						_antd.message.success("保存成功");
						_this2.comment.clearState();
						_this2.store.getComments({
							type: 'season',
							code: value + season
						});
					}
				});
			} else {
				params.type = "year";
				params.code = value;
				_this2.store.saveComment(params).then(function (res) {
					if (res == true) {
						_antd.message.success("保存成功");
						_this2.comment.clearState();
						_this2.store.getComments({
							type: 'year',
							code: value
						});
					}
				});
			}
		};

		_this2.delComment = function (id) {
			var _this2$state6 = _this2.state,
			    key = _this2$state6.key,
			    season = _this2$state6.season,
			    value = _this2$state6.value;
			var activeweeks = _this2.store.activeweeks;

			var params = {
				type: "",
				code: "",
				commentId: id
			};
			if (key == "1") {
				params.type = "week";
				params.code = mobx.toJS(activeweeks).id;
				_this2.store.delComment(params).then(function (res) {
					if (res == true) {
						_antd.message.success("删除成功");
						_this2.store.getComments({
							type: 'week',
							code: activeweeks.id
						});
					}
				});
			} else if (key == "2") {
				params.type = "season";
				params.code = value + season;
				_this2.store.delComment(params).then(function (res) {
					if (res == true) {
						_antd.message.success("删除成功");
						_this2.store.getComments({
							type: 'season',
							code: value + season
						});
					}
				});
			} else {
				params.type = "year";
				params.code = value;
				_this2.store.delComment(params).then(function (res) {
					if (res == true) {
						_antd.message.success("删除成功");
						_this2.store.getComments({
							type: 'year',
							code: value
						});
					}
				});
			}
		};

		_this2.handleSelect = function (keys) {
			_this2.store.userId = keys["key"];
			_this2.store.userName = keys["title"];
			var _this2$state7 = _this2.state,
			    value = _this2$state7.value,
			    season = _this2$state7.season;
			var key = _this2.state.key;

			switch (key) {
				case "1":
					_this2.getWeeks(value);
					break;
				case "2":
					var param = value + season;
					_this2.store.getSeasonDetails(param);
					_this2.store.getAtts({
						type: 'season',
						code: param
					});
					_this2.store.getComments({
						type: 'season',
						code: param
					});
					break;
				case "3":
					_this2.store.getYearDetails(value);
					_this2.store.getAtts({
						type: 'year',
						code: value
					});
					_this2.store.getComments({
						type: 'year',
						code: value
					});
					break;
				default:
					break;
			}
		};

		_this2.handleDelete = function (id) {
			var _this2$store = _this2.store,
			    seasonData = _this2$store.seasonData,
			    yearData = _this2$store.yearData;
			var key = _this2.state.key;

			if (key == "2") {
				var dataSource = JSON.parse(JSON.stringify(seasonData));
				var data = dataSource.filter(function (item) {
					return item.id !== id;
				});
				_this2.saveData("season", data);
			} else {
				var dataSource2 = JSON.parse(JSON.stringify(yearData));
				var data2 = dataSource2.filter(function (item) {
					return item.id !== id;
				});
				_this2.saveData("year", data2);
			}
		};

		_this2.toggle = function () {
			_this2.setState({
				visible: !_this2.state.visible
			});
		};

		_this2.store = new _BpmStore2.default();
		_this2.state = {
			years: [{
				id: '',
				name: '2019'
			}], // 年份
			value: '2019',
			weekAddData: { // 周新增
				id: "",
				orders: "",
				keyResult: "",
				workItems: "",
				associationDescription: "",
				results: ""
			},
			yearAddData: { // 年新增
				id: "",
				orders: "",
				objective: "",
				uniformity: "",
				keyResult: "",
				depend: "",
				dependencyDescription: "",
				confidenceLevel: "",
				completion: "",
				score: ""
			},
			season: "01",
			key: '1',
			visible: false // 卡片
		};
		return _this2;
	}

	_createClass(Okr, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			this.store.getSts();
			// 获取当前年份数据
			var currentYear = (0, _moment2.default)().year();
			/*
   * 年份数据来源：从2019年开始， 截至到当前的年份
   * */
			if (currentYear <= 2019) {
				this.setState({
					years: [{
						name: '2019'
					}]
				});
			} else {
				var num = Number(currentYear);
				var data = [];
				for (var i = 2019; i <= num; i++) {
					data.push({ name: String(i) });
				}
				this.setState({
					years: Object.assign([], data.reverse()),
					value: currentYear.toString()
				}, function () {
					var userInfo = _this3.props.appStore.userInfo;

					var userId = mobx.toJS(userInfo).id;
					var userName = mobx.toJS(userInfo).realname;
					_this3.store.userId = userId;
					_this3.store.userName = userName;
					_this3.getWeeks(currentYear);
				});
			}
		}

		// 切换年份


		// 保存附件


		// 删除附件


		// 切换上、下周


		// 更新数据


		// 保存


		// 删除评论


		// 删除一行


		// 切换

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    key = _state.key,
			    years = _state.years,
			    value = _state.value,
			    weekAddData = _state.weekAddData,
			    yearAddData = _state.yearAddData,
			    season = _state.season,
			    visible = _state.visible;
			var _store = this.store,
			    ossData = _store.ossData,
			    activeweeks = _store.activeweeks,
			    weekData = _store.weekData,
			    monthData = _store.monthData,
			    seasonData = _store.seasonData,
			    yearData = _store.yearData,
			    okrAtts = _store.okrAtts,
			    okrComments = _store.okrComments,
			    userName = _store.userName;

			var menu = _react2.default.createElement(
				_reactCustomScrollbars.Scrollbars,
				{ style: { height: 200 } },
				_react2.default.createElement(
					_antd.Menu,
					{ className: 'con_menu', onClick: this.handleYearClick },
					years.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Menu.Item,
							{ key: 'year' + index },
							item.name
						);
					})
				)
			);
			var operations = _react2.default.createElement(
				'div',
				{ style: {
						width: '100%',
						height: 'auto',
						marginRight: '30px'
					} },
				_react2.default.createElement(
					'span',
					{ style: { fontSize: '14px', fontWeight: '700', marginRight: '30px' } },
					'OKR\u8BC4\u5B9A - ',
					userName
				),
				_react2.default.createElement(
					_antd.Dropdown,
					{ overlay: menu },
					_react2.default.createElement(
						_antd.Button,
						{ style: { width: 82 } },
						value,
						' ',
						_react2.default.createElement(_antd.Icon, { type: 'down' })
					)
				),
				_react2.default.createElement(
					_antd.Button,
					{ className: 'ml30', type: 'primary', onClick: this.handleSubmit },
					'\u4FDD\u5B58'
				)
			);
			var columns = [{
				title: '优先级',
				dataIndex: 'orders',
				editable: true,
				align: 'center',
				width: '130px',
				type: 'number'
			}, {
				title: _react2.default.createElement(
					'div',
					null,
					'\u5173\u952E\u6210\u679C',
					_react2.default.createElement('br', null),
					'\uFF08key Result\uFF09'
				),
				dataIndex: 'keyResult',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: '对应工作事项',
				dataIndex: 'workItems',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: '与关键成果关联说明',
				dataIndex: 'associationDescription',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: '执行结果',
				dataIndex: 'results',
				editable: true,
				align: 'center',
				type: 'textarea'
			}];
			var JiColumns = [{
				title: '序号',
				dataIndex: 'orders',
				align: 'center',
				width: '80px',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							className: 'pr' },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
									return _this4.handleDelete(record.id);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									width: '35px',
									color: '#F17E7E',
									fontSize: '20px',
									position: 'absolute',
									left: '-10px',
									top: '50%',
									transform: 'translateY(-50%)'
								},
								type: 'minus-circle' })
						),
						text
					);
				}
			}, {
				title: _react2.default.createElement(
					'div',
					null,
					'\u6211\u7684\u76EE\u6807Objectives',
					_react2.default.createElement('br', null),
					'\uFF08\u6211\u4EEC\u60F3\u8981\u5B9E\u73B0\u4EC0\u4E48\uFF09'
				),
				dataIndex: 'objective',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: _react2.default.createElement(
					'div',
					null,
					'\u4E00\u81F4\u6027',
					_react2.default.createElement('br', null),
					'\uFF08\u4E0E\u4E0A\u4E00\u7EA7OKR\u4E00\u81F4\u6027\uFF09'
				),
				dataIndex: 'uniformity',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: _react2.default.createElement(
					'div',
					null,
					'\u5173\u952E\u6210\u679C',
					_react2.default.createElement('br', null),
					'\uFF08Key Result\uFF09'
				),
				dataIndex: 'keyResult',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: '依赖谁',
				dataIndex: 'depend',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: '依赖关系描述',
				dataIndex: 'dependencyDescription',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: _react2.default.createElement(
					'div',
					null,
					'\u4FE1\u5FC3\u6307\u6570',
					_react2.default.createElement('br', null),
					'\uFF081-10\uFF09'
				),
				dataIndex: 'confidenceLevel',
				editable: true,
				align: 'center',
				type: 'number'
			}, {
				title: '完成情况描述',
				dataIndex: 'completion',
				editable: true,
				align: 'center',
				type: 'textarea'
			}, {
				title: '最终打分',
				dataIndex: 'score',
				editable: true,
				align: 'center',
				type: 'number'
			}];
			var attachments = okrAtts != null ? okrAtts.map(function (vitem) {
				return Object.assign({}, {
					uid: vitem.id,
					name: vitem.fileName,
					status: 'done',
					url: vitem.filePath,
					fileId: vitem.fileId,
					fileName: vitem.fileName,
					filePath: vitem.filePath,
					id: vitem.id
				});
			}) : [];
			return _react2.default.createElement(
				_antd.Row,
				{ className: 'pr' },
				_react2.default.createElement(
					_antd.Tooltip,
					{ title: visible ? "展开" : "收起" },
					_react2.default.createElement(_antd.Icon, { type: visible ? "double-left" : "double-right",
						onClick: this.toggle,
						placement: 'top',
						style: {
							position: 'absolute',
							top: visible ? "10px" : '8px',
							left: visible ? "-15px" : 0,
							cursor: 'pointer',
							zIndex: 2
						} })
				),
				_react2.default.createElement(
					_antd.Col,
					{ span: '5', className: visible ? "hidden" : "" },
					_react2.default.createElement(
						_antd.Affix,
						{ offsetTop: 60 },
						_react2.default.createElement(
							_reactCustomScrollbars.Scrollbars,
							{
								autoHide: true,
								autoHideTimeout: 1000,
								autoHideDuration: 200,
								autoHeight: true,
								autoHeightMin: 0,
								autoHeightMax: 'calc(100vh - 180px)',
								thumbMinSize: 30,
								universal: true },
							_react2.default.createElement(_DingtalkTree2.default, {
								userSearch: true,
								onRef: this.onRef,
								store: this.store,
								showLine: true,
								handleSelect: this.handleSelect
							})
						)
					)
				),
				_react2.default.createElement(
					_antd.Col,
					{ span: visible ? "24" : "19", style: { borderLeft: visible ? 'none' : '1px solid #EBEBEB', minHeight: '350px', paddingLeft: visible ? 0 : '15px' } },
					_react2.default.createElement(
						_antd.Tabs,
						{ size: "small", className: 'okr_tabs', activeKey: key, onChange: this.callback,
							tabBarExtraContent: operations },
						_react2.default.createElement(
							TabPane,
							{ tab: '\u5468', key: '1' },
							_react2.default.createElement(
								'h4',
								{ style: {
										fontSize: '15px',
										fontWeight: '400',
										marginBottom: '15px'
									} },
								mobx.toJS(activeweeks).weekMonthName
							),
							_react2.default.createElement(
								'div',
								{ className: 'clearfix mb10' },
								_react2.default.createElement(
									_antd.Tooltip,
									{ placement: 'top', title: "上一周" },
									_react2.default.createElement(_antd.Icon, { onClick: this.handleWeekClick.bind(this, '1'), className: 'fl pointer',
										style: { fontSize: '24px' }, type: 'step-backward' })
								),
								_react2.default.createElement(
									_antd.Tooltip,
									{ placement: 'top', title: "下一周" },
									_react2.default.createElement(_antd.Icon, { onClick: this.handleWeekClick.bind(this, '2'), className: 'fr pointer',
										style: { fontSize: '24px' }, type: 'step-forward' })
								)
							),
							_react2.default.createElement(_OkrTable2.default, {
								type: 'week',
								saveData: this.saveData,
								dataSource: mobx.toJS(weekData),
								addData: weekAddData,
								columns: columns }),
							_react2.default.createElement('hr', { style: { marginTop: '0' } }),
							_react2.default.createElement(
								'h4',
								{ style: {
										fontSize: '15px',
										fontWeight: '400',
										marginBottom: '15px'
									} },
								mobx.toJS(activeweeks).monthName
							),
							_react2.default.createElement(_OkrTable2.default, {
								type: 'month',
								saveData: this.saveData,
								dataSource: mobx.toJS(monthData),
								addData: weekAddData,
								columns: columns })
						),
						_react2.default.createElement(
							TabPane,
							{ tab: '\u5B63', key: '2' },
							_react2.default.createElement(
								_antd.Radio.Group,
								{ className: 'mb15', onChange: this.onChangeRadio, value: season,
									buttonStyle: 'solid' },
								_react2.default.createElement(
									_antd.Radio.Button,
									{ value: '01' },
									'\u4E00\u5B63\u5EA6'
								),
								_react2.default.createElement(
									_antd.Radio.Button,
									{ value: '02' },
									'\u4E8C\u5B63\u5EA6'
								),
								_react2.default.createElement(
									_antd.Radio.Button,
									{ value: '03' },
									'\u4E09\u5B63\u5EA6'
								),
								_react2.default.createElement(
									_antd.Radio.Button,
									{ value: '04' },
									'\u56DB\u5B63\u5EA6'
								)
							),
							_react2.default.createElement(_OkrTable2.default, {
								type: 'season',
								saveData: this.saveData,
								dataSource: mobx.toJS(seasonData),
								addData: yearAddData,
								columns: JiColumns })
						),
						_react2.default.createElement(
							TabPane,
							{ tab: '\u5E74', key: '3' },
							_react2.default.createElement(_OkrTable2.default, {
								type: 'year',
								saveData: this.saveData,
								dataSource: mobx.toJS(yearData),
								addData: yearAddData,
								columns: JiColumns })
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u9644\u4EF6', colon: false },
						_react2.default.createElement(_MyUpload2.default, {
							saveAttachment: this.saveAttachment,
							delNode: this.delNode,
							disabled: false,
							multiple: true,
							ossData: mobx.toJS(ossData),
							fileList: attachments
						})
					),
					_react2.default.createElement(_ZjComment2.default, {
						onRef: this.onCommentRef,
						okrComments: mobx.toJS(okrComments),
						saveComment: this.saveComment,
						delComment: this.delComment
					})
				)
			);
		}
	}]);

	return Okr;
}(_react2.default.Component)) || _class) || _class);
exports.default = Okr;

/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _aliOss = __webpack_require__(232);

var _aliOss2 = _interopRequireDefault(_aliOss);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 附件组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


function getBase64(img, callback) {
	var reader = new FileReader();
	reader.addEventListener('load', function () {
		return callback(reader.result);
	});
	reader.readAsDataURL(img);
}

var client = function client(self) {
	var token = self.state.token;
	// ali-oss v6.x版本的写法

	return new _aliOss2.default({
		accessKeyId: token.access_key_id,
		accessKeySecret: token.access_key_secret,
		stsToken: token.stsToken,
		region: token.region, //
		bucket: token.bucket, //
		endpoint: token.OSS_ENDPOINT
	});
};

var uploadPath = function uploadPath(path, file) {
	// 上传文件的路径，使用日期命名文件目录
	return (0, _moment2.default)().format('YYYYMMDD') + '/' + file.uid + '/' + file.name;
};

var UploadToOss = function UploadToOss(self, path, file) {
	var url = uploadPath(path, file);
	return new Promise(function (resolve, reject) {
		client(self).multipartUpload(url, file).then(function (data) {
			resolve(data); //上传成功后返回的上传结果，?后面的都去掉就能正常访问了
		}).catch(function (error) {
			reject(error);
		});
	});
};

var MyUpload = function (_React$Component) {
	_inherits(MyUpload, _React$Component);

	function MyUpload(props) {
		_classCallCheck(this, MyUpload);

		var _this = _possibleConstructorReturn(this, (MyUpload.__proto__ || Object.getPrototypeOf(MyUpload)).call(this, props));

		_this.handleChange = function (info) {
			var status = info.file.status;

			// 记录新上传的
			var fileList = [].concat(_toConsumableArray(info.fileList));
			var oldFileList = JSON.parse(JSON.stringify(fileList)).filter(function (file) {
				return file.status && file.status === 'done';
			}); // 之前保存过的
			var newFileList = JSON.parse(JSON.stringify(fileList));
			newFileList = newFileList.filter(function (file) {
				if (file.status && file.status === 'done') {
					return false;
				}
				return true;
			});
			newFileList = newFileList.map(function (file) {
				if (file.originFileObj) {
					var url = _this.state.host + uploadPath('path', file);
					return Object.assign({}, {
						uid: file.uid,
						name: file.name,
						status: "done",
						url: url,
						fileId: null,
						fileName: file.name,
						filePath: url,
						id: ""
					});
				}
				return file;
			});
			if (status == undefined) {
				// 处理附件
				var array = JSON.parse(JSON.stringify([].concat(_toConsumableArray(oldFileList), _toConsumableArray(newFileList))));
				var arr = [];
				array.length && array.map(function (item, index) {
					arr.push({
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						pid: _this.props.pid,
						projectId: _this.props.projectId,
						id: item.id
					});
				});
				_this.props.saveAttachment(arr);
			} else if (status === "removed") {
				// 删除
				var id = info.file.id;
				if (id !== "" || id !== null) {
					// 删除已有的
					_this.props.delNode(id);
				}
			}
			_this.setState({
				fileList: [].concat(_toConsumableArray(oldFileList), _toConsumableArray(newFileList))
			});
		};

		_this.beforeUpload = function (file) {
			var isJPG = file.type === 'image/jpeg';
			if (false) {
				_antd.message.error('You can only upload JPG file!');
			}
			var isLt2M = file.size / 1024 / 1024 < 2000;
			if (!isLt2M) {
				_antd.message.error('Image must smaller than 2MB!');
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = function () {
				// 使用ossupload覆盖默认的上传方法
				UploadToOss(_this, '上传路径oss配置信息', file).then(function (data) {
					return data;
				});
			};
			return false; // 不调用默认的上传方法
		};

		_this.state = {
			fileList: _this.props.fileList,
			loading: false,
			token: {
				access_key_id: '', //'STS.NUKFXpmcLY7gZeyDE7jMW6M5v', // oss的key_id
				access_key_secret: '', //'5S1Ky3Beef6ZtXxTRPBMPvqV9ouTWkvMTmGhffJqeLK8', // oss的secret
				stsToken: '', //'CAISgwN1q6Ft5B2yfSjIr5b+DeLEgLxt7vWMWEPIoEViZsJ72YielDz2IH1IfXdtBuAasvU3lGtZ6/8dlol1QJhdclfYdo176NFd/AKjYozO/cWx7K0Zjpa+X2OUDkZuMwFigKOrIunGc9KBNnpq/00amMlSHFfPdlihNoLzkPwDR98LXw6+QCNbDdNNXGVLo9MbMn2jBJTVNQXx0EbdCEd0ty12i2509cbaxdaHuD7fl0HCw/UJvOaBJYO/PeBmO41jdsqxwO1uf7Dd7TZU7BFGlsJxl7cWwSrbmdufDlJNgXCBKPGG3dBzCwV7a6MmYYImysLxjvploOfeup3qwhJWR4FvXj/YWZqrzbmEepqgPc1rcq3gaTafkIKfN5/xsWFfaHkAZgRRYIhjeD0iGR0qTjOdaI3foQCWPVn6FPTUifFvgcMkkG+Fp4TaewK9JJyCyjsdN5MGaEclCgUbx2SJcNVdLlAVLQ44V+rJHN0jN0ED8Pzy0grJTWh70mpHAjgJzUQydssagAGXmVE/ez8kLqCrzcFDMBg0c51Wv7sCHrBF1JJ1jhjZ39U8mUKpdznlIoOk5Jxav599Kdj4ZsNH8D4nshRzAZiZ1Qi5a+PsMWpet0mOIu/fntu5xezXssVECv68Pg8tos5Rf/Tcs1L8axm0WIxk2PFOtH59IPj8RhevwczGTOmCaQ\u003d\u003d',
				region: 'oss-cn-beijing', // oss的region
				bucket: 'xinlj', // oss的bucket
				OSS_ENDPOINT: 'oss-cn-beijing.aliyuncs.com' // 自己oss服务器的配置信息
			},
			host: 'https://xinlj.oss-cn-beijing.aliyuncs.com/' // 阿里云host
		};
		return _this;
	}

	_createClass(MyUpload, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.fileList) != JSON.stringify(this.props.fileList)) {
				this.setState({
					fileList: nextProps.fileList
				});
			}
			if (JSON.stringify(nextProps.ossData) != JSON.stringify(this.props.ossData)) {
				var token = JSON.parse(JSON.stringify(this.state.token));
				this.setState({
					token: Object.assign(token, {
						access_key_id: nextProps.ossData.accessKeyId, // oss的key_id
						access_key_secret: nextProps.ossData.accessKeySecret, // oss的secret
						stsToken: nextProps.ossData.securityToken
					})
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.fileList) {
				this.setState({
					fileList: this.props.fileList
				});
			}
			if (this.props.ossData) {
				var token = JSON.parse(JSON.stringify(this.state.token));
				this.setState({
					token: Object.assign(token, {
						access_key_id: this.props.ossData.accessKeyId, // oss的key_id
						access_key_secret: this.props.ossData.accessKeySecret, // oss的secret
						stsToken: this.props.ossData.securityToken
					})
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var fileList = this.state.fileList;

			var props = {
				name: 'file',
				multiple: this.props.multiple == undefined ? true : this.props.multiple,
				onChange: this.handleChange,
				beforeUpload: this.beforeUpload,
				listType: 'text',
				className: 'upload-list-inline',
				disabled: this.props.disabled
			};
			return _react2.default.createElement(
				_antd.Upload,
				_extends({}, props, { fileList: fileList }),
				fileList.length >= 1 && this.props.multiple == false ? null : _react2.default.createElement(_antd.Icon, { style: { fontSize: '25px', color: '#53B3E5' }, type: 'cloud-upload' })
			);
		}
	}]);

	return MyUpload;
}(_react2.default.Component);

exports.default = MyUpload;

/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44; /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 项目看板store
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _mobx = __webpack_require__(12);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

var _authorization = __webpack_require__(97);

var _authorization2 = _interopRequireDefault(_authorization);

var _okr = __webpack_require__(1578);

var _okr2 = _interopRequireDefault(_okr);

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

var BpmStore = (_class = function () {
	function BpmStore() {
		_classCallCheck(this, BpmStore);

		_initDefineProp(this, 'maxHeight', _descriptor, this);

		_initDefineProp(this, 'projectBoardList', _descriptor2, this);

		_initDefineProp(this, 'projectBoardParams', _descriptor3, this);

		_initDefineProp(this, 'allProjectList', _descriptor4, this);

		_initDefineProp(this, 'allProjectParams', _descriptor5, this);

		_initDefineProp(this, 'allProjectTotal', _descriptor6, this);

		_initDefineProp(this, 'myTaskRunningNum', _descriptor7, this);

		_initDefineProp(this, 'dealyWarnningList', _descriptor8, this);

		_initDefineProp(this, 'productProportion', _descriptor9, this);

		_initDefineProp(this, 'topContractAmount', _descriptor10, this);

		_initDefineProp(this, 'currentTaskList', _descriptor11, this);

		_initDefineProp(this, 'currentTaskParams', _descriptor12, this);

		_initDefineProp(this, 'dealyWarnningParams', _descriptor13, this);

		_initDefineProp(this, 'hasMore', _descriptor14, this);

		_initDefineProp(this, 'currentTaskTotal', _descriptor15, this);

		_initDefineProp(this, 'deliverRate', _descriptor16, this);

		_initDefineProp(this, 'moneyBackRate', _descriptor17, this);

		_initDefineProp(this, 'projectStage', _descriptor18, this);

		_initDefineProp(this, 'projectStatus', _descriptor19, this);

		_initDefineProp(this, 'productTyleList', _descriptor20, this);

		_initDefineProp(this, 'masterList', _descriptor21, this);

		_initDefineProp(this, 'masterIds', _descriptor22, this);

		_initDefineProp(this, 'projectBoardListDone', _descriptor23, this);

		_initDefineProp(this, 'products', _descriptor24, this);

		_initDefineProp(this, 'personList', _descriptor25, this);

		_initDefineProp(this, 'projectList', _descriptor26, this);

		_initDefineProp(this, 'yearMonth', _descriptor27, this);

		_initDefineProp(this, 'personMonthTask', _descriptor28, this);

		_initDefineProp(this, 'projectStages', _descriptor29, this);

		_initDefineProp(this, 'personParams', _descriptor30, this);

		_initDefineProp(this, 'personResources', _descriptor31, this);

		_initDefineProp(this, 'state', _descriptor32, this);

		_initDefineProp(this, 'ossData', _descriptor33, this);

		_initDefineProp(this, 'weeksData', _descriptor34, this);

		_initDefineProp(this, 'activeweeks', _descriptor35, this);

		_initDefineProp(this, 'userId', _descriptor36, this);

		_initDefineProp(this, 'userName', _descriptor37, this);

		_initDefineProp(this, 'weekData', _descriptor38, this);

		_initDefineProp(this, 'monthData', _descriptor39, this);

		_initDefineProp(this, 'seasonData', _descriptor40, this);

		_initDefineProp(this, 'yearData', _descriptor41, this);

		_initDefineProp(this, 'defaultWeeksData', _descriptor42, this);

		_initDefineProp(this, 'okrAtts', _descriptor43, this);

		_initDefineProp(this, 'okrComments', _descriptor44, this);
	} // 项目看板列表(未完成)
	// 全部项目明细列表 state 完成100，关闭200 阶段1-7
	//进度延迟预警列表

	//产品占比
	//项目订单排名
	//获取当前任务列表

	//@observable unTaskTotal = 0;  // 未完成

	//交付完成率
	//回款完成率

	_createClass(BpmStore, [{
		key: 'getProjectBoardList',


		// 项目看板列表(未完成)查询
		value: function getProjectBoardList() {
			var _this = this;

			return (0, _api.requestPost)('getProjectBoardList', _config2.default.bpm.getProjectBoardList, _bpm2.default.bpm.getProjectBoardList, this.projectBoardParams).then(function (res) {
				_this.projectBoardList = Object.assign([], res);
				_this.projectBoardListDone = true;
			});
		}

		// 全部项目明细列表查询

	}, {
		key: 'getAllProjectList',
		value: function getAllProjectList() {
			var _this2 = this;

			return (0, _api.requestPost)('getAllProjectList', _config2.default.bpm.getAllProjectList, _bpm2.default.bpm.getAllProjectList, this.allProjectParams).then(function (res) {
				_this2.allProjectList = Object.assign([], typeof res.body !== "undefined" ? res.body.map(function (item, index) {
					return item;
				}) : []);
				_this2.allProjectParams.pageIndex = res.pageIndex;
				_this2.allProjectParams.pageSize = res.pageSize;
				_this2.allProjectTotal = res.totalCount;
			});
		}

		// 获取产品占比

	}, {
		key: 'getProductProportion',
		value: function getProductProportion() {
			var _this3 = this;

			return (0, _api.requestPost)('getProductProportion', _config2.default.bpm.getProductProportion, _bpm2.default.bpm.getProductProportion).then(function (res) {
				_this3.productProportion = Object.assign([], res);
			});
		}

		// 获取项目订单排名

	}, {
		key: 'getTopContractAmountList',
		value: function getTopContractAmountList() {
			var _this4 = this;

			return (0, _api.requestPost)('getTopContractAmountList', _config2.default.bpm.getTopContractAmountList, _bpm2.default.bpm.getTopContractAmountList).then(function (res) {
				_this4.topContractAmount = Object.assign([], res);
			});
		}

		// 获取当前任务（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)

	}, {
		key: 'getCurrentTaskList',
		value: function getCurrentTaskList() {
			var _this5 = this;

			return (0, _api.requestPost)('getCurrentTaskList', _config2.default.bpm.getCurrentTaskList, _bpm2.default.bpm.getCurrentTaskList, this.currentTaskParams).then(function (res) {
				_this5.currentTaskList = Object.assign([], res.body);
				if (_this5.currentTaskParams.state == 1) {
					//进度延迟预警
					_this5.dealyWarnningList = Object.assign([], res.body);
				}

				// if(this.currentTaskParams.state==2) {
				// 	emitter.emit("getMytaskNum", res.totalCount);
				// }

				_this5.currentTaskParams.pageIndex = res.pageIndex;
				_this5.currentTaskParams.pageSize = res.pageSize;
				_this5.currentTaskTotal = res.totalCount;
			});
		}

		// 获取当前任务（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)

	}, {
		key: 'getWarnningList',
		value: function getWarnningList() {
			var _this6 = this;

			return (0, _api.requestPost)('getCurrentTaskList', _config2.default.bpm.getCurrentTaskList, _bpm2.default.bpm.getCurrentTaskList, this.dealyWarnningParams).then(function (res) {
				if (res && res['body'].length > 0) {
					var tempData = _this6.dealyWarnningList;
					_this6.dealyWarnningList = tempData.concat(res['body']);
					_this6.dealyWarnningParams.pageIndex = _this6.dealyWarnningParams.pageIndex + 1;
				} else {
					_this6.hasMore = false;
				}
			});
		}

		// 获取进行中/已完成总数

	}, {
		key: 'getListData',
		value: function getListData(param) {
			return (0, _api.requestPost)('getCurrentTaskList', _config2.default.bpm.getCurrentTaskList, _bpm2.default.bpm.getCurrentTaskList, param).then(function (res) {
				return res;
			});
		}

		// 获取交付完成率

	}, {
		key: 'getDeliverRate',
		value: function getDeliverRate() {
			var _this7 = this;

			return (0, _api.requestPost)('getDeliverRate', _config2.default.bpm.getDeliverRate, _bpm2.default.bpm.getDeliverRate).then(function (res) {
				_this7.deliverRate = res;
			});
		}

		// 获取回款完成率

	}, {
		key: 'getMoneyBackRate',
		value: function getMoneyBackRate() {
			var _this8 = this;

			return (0, _api.requestPost)('getMoneyBackRate', _config2.default.bpm.getMoneyBackRate, _bpm2.default.bpm.getMoneyBackRate).then(function (res) {
				_this8.moneyBackRate = res;
			});
		}

		// 获取我的任务数

	}, {
		key: 'getMyTaskCount',
		value: function getMyTaskCount() {
			return (0, _api.requestPost)('getMyTaskCount', _config2.default.bpm.getMyTaskCount, _bpm2.default.bpm.getMyTaskCount).then(function (res) {
				_events2.default.emit("getMytaskNum", res);
			});
		}
	}, {
		key: 'getProductTypeList',

		// 获取产品类型
		value: function getProductTypeList() {
			var _this9 = this;

			return (0, _api.requestPost)('getProductTypeList', _config2.default.bpm.getProductTypeList, _bpm2.default.bpm.getProductTypeList).then(function (res) {
				_this9.productTyleList = Object.assign([], res.map(function (item) {
					return { text: item.typeName, value: item.typeName };
				}));
				_this9.products = Object.assign([], res);
			});
		}

		// 获取负责人列表

	}, {
		key: 'getMasterList',
		value: function getMasterList() {
			var _this10 = this;

			return (0, _api.requestPost)('getMasterList', _config2.default.bpm.getMasterList, _bpm2.default.bpm.getMasterList).then(function (res) {
				_this10.masterList = Object.assign([], res.map(function (item) {
					return { text: item.userName, value: item.userName };
				}));
				_this10.masterIds = Object.assign([], res.map(function (item) {
					return Object.assign({}, { id: item.userId, typeName: item.userName });
				}));
			});
		}
	}, {
		key: 'getUserInfoListByRoleCode',
		// 人员
		// 获取人员数据
		value: function getUserInfoListByRoleCode() {
			var _this11 = this;

			return (0, _api.requestPost)('getUserInfoListByRoleCode', _config2.default.authorization.getUserInfoListByRoleCode, _authorization2.default.authorization.getUserInfoListByRoleCode, {
				appId: "bocspace",
				code: "bocspace.group",
				pageIndex: 1, // 暂时处理
				pageSize: 10000 // 暂时这样处理
			}).then(function (res) {
				_this11.personList = Object.assign([], res.body);
			});
		}
	}, {
		key: 'getCalendarProjectList',
		//日历项目
		// 日历项目列表
		value: function getCalendarProjectList() {
			var _this12 = this;

			return (0, _api.requestPost)('getCalendarProjectList', _config2.default.bpm.getCalendarProjectList, _bpm2.default.bpm.getCalendarProjectList, {}).then(function (res) {
				_this12.projectList = Object.assign([], res);
			});
		} // 当前月份

	}, {
		key: 'getPersonMonthTaskState',

		// 人员列表
		value: function getPersonMonthTaskState(param) {
			var _this13 = this;

			return (0, _api.requestPost)('getPersonMonthTaskState', _config2.default.bpm.getPersonMonthTaskState, _bpm2.default.bpm.getPersonMonthTaskState, {
				yearMonth: this.yearMonth,
				userId: param
			}).then(function (res) {
				_this13.personMonthTask = Object.assign([], res);
			});
		}
	}, {
		key: 'getProjectStagesByIds',
		// 项目信息
		// 获取项目全部状态信息通过ids
		value: function getProjectStagesByIds(param) {
			var _this14 = this;

			return (0, _api.requestPost)('getProjectStagesByIds', _config2.default.bpm.getProjectStagesByIds, _bpm2.default.bpm.getProjectStagesByIds, {
				yearMonth: this.yearMonth,
				projectIds: param
			}).then(function (res) {
				_this14.projectStages = Object.assign([], res.data == null ? [] : res.data);
			});
		}

		// 获取钉钉的部门

	}, {
		key: 'getDepartment',
		value: function getDepartment() {
			return (0, _api.requestPost)('getDepartment', _config2.default.authorization.getDepartment, _authorization2.default.authorization.getDepartment, {
				appid: 'bocspace',
				pid: '1'
			});
		}

		// 获取钉钉部门的用户列表

	}, {
		key: 'getUserInfoListByDingtalk',
		value: function getUserInfoListByDingtalk(param) {
			return (0, _api.requestPost)('getUserInfoListByDingtalk', _config2.default.authorization.getUserInfoListByDingtalk, _authorization2.default.authorization.getUserInfoListByDingtalk, {
				appid: 'bocspace',
				pageIndex: 1,
				pageSize: 100,
				depId: param
			});
		}
		// 获取全部部门与人员

	}, {
		key: 'getDepartmentAndUsers',
		value: function getDepartmentAndUsers(name) {
			return (0, _api.requestPost)('getDepartmentAndUsers', _config2.default.authorization.getDepartmentAndUsers, _authorization2.default.authorization.getDepartmentAndUsers, {
				appid: 'bocspace',
				name: name
			});
		}
	}, {
		key: 'getPersonScheduleResources',
		// 日程数据
		// 人员日程排期
		value: function getPersonScheduleResources() {
			var _this15 = this;

			return (0, _api.requestPost)('getPersonScheduleResources', _config2.default.bpm.getPersonScheduleResources, _bpm2.default.bpm.getPersonScheduleResources, Object.assign({}, this.personParams)).then(function (res) {
				_this15.personResources = Object.assign([], res.data == null ? [] : res.data);
			});
		}
	}, {
		key: 'getAllStages',

		// 获取产品类型
		value: function getAllStages() {
			var _this16 = this;

			return (0, _api.requestPost)('getAllStages', _config2.default.bpm.getAllStages, _bpm2.default.bpm.getAllStages).then(function (res) {
				if (res) {
					_this16.state = Object.assign([], res.map(function (item) {
						return Object.assign({}, {
							id: item.id,
							typeName: item.stageName
						});
					}));
				}
			});
		}
	}, {
		key: 'getSts',
		// 阿里云上传参数

		// 获取大文件上传sts
		value: function getSts() {
			var _this17 = this;

			return (0, _api.requestPost)('getSts', _config2.default.bpm.getSts, _bpm2.default.bpm.getSts, {}).then(function (res) {
				var str = typeof res == "string" ? JSON.parse(res) : res;
				if (str) {
					_this17.ossData = Object.assign({}, str);
				}
			});
		} // 当年所有的周数据
		// 当前周
		// 人员id
		// 人员name
		// 当前周数据
		// 当前月数据
		// 当前季数据
		// 当前年数据
		// 当前周数据默认
		// okr附件

	}, {
		key: 'getWeeks',
		// okr评论

		// 返回查询年的周数据
		value: function getWeeks(param) {
			return (0, _api.requestPost)('getWeeks', _config2.default.okr.getWeeks, _okr2.default.okr.getWeeks, {
				year: param
			});
		}

		// 获取周明细

	}, {
		key: 'getWeekDetails',
		value: function getWeekDetails(param) {
			var _this18 = this;

			return (0, _api.requestPost)('getWeekDetails', _config2.default.okr.getWeekDetails, _okr2.default.okr.getWeekDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this18.weekData = Object.assign([], res);
				_this18.defaultWeeksData = Object.assign([], res);;
			});
		}

		// 获取月明细

	}, {
		key: 'getMonthDetails',
		value: function getMonthDetails(param) {
			var _this19 = this;

			return (0, _api.requestPost)('getMonthDetails', _config2.default.okr.getMonthDetails, _okr2.default.okr.getMonthDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this19.monthData = Object.assign([], res);
			});
		}

		// 获取季明细

	}, {
		key: 'getSeasonDetails',
		value: function getSeasonDetails(param) {
			var _this20 = this;

			return (0, _api.requestPost)('getSeasonDetails', _config2.default.okr.getSeasonDetails, _okr2.default.okr.getSeasonDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this20.seasonData = Object.assign([], res);
			});
		}

		// 获取年明细

	}, {
		key: 'getYearDetails',
		value: function getYearDetails(param) {
			var _this21 = this;

			return (0, _api.requestPost)('getYearDetails', _config2.default.okr.getYearDetails, _okr2.default.okr.getYearDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this21.yearData = Object.assign([], res);
			});
		}

		// 保存周明细

	}, {
		key: 'saveWeekDetails',
		value: function saveWeekDetails() {
			return (0, _api.requestPost)('saveWeekDetails', _config2.default.okr.saveWeekDetails, _okr2.default.okr.saveWeekDetails, {
				list: this.weekData,
				code: this.activeweeks.id,
				userId: this.userId
			});
		}

		// 保存月明细

	}, {
		key: 'saveMonthDetails',
		value: function saveMonthDetails() {
			return (0, _api.requestPost)('saveMonthDetails', _config2.default.okr.saveMonthDetails, _okr2.default.okr.saveMonthDetails, {
				list: this.monthData,
				code: this.activeweeks.month,
				userId: this.userId
			});
		}

		// 保存季明细

	}, {
		key: 'saveSeasonDetails',
		value: function saveSeasonDetails(param) {
			return (0, _api.requestPost)('saveSeasonDetails', _config2.default.okr.saveSeasonDetails, _okr2.default.okr.saveSeasonDetails, {
				list: this.seasonData,
				code: param,
				userId: this.userId
			});
		}

		// 保存年明细

	}, {
		key: 'saveYearDetails',
		value: function saveYearDetails(param) {
			return (0, _api.requestPost)('saveYearDetails', _config2.default.okr.saveYearDetails, _okr2.default.okr.saveYearDetails, {
				list: this.yearData,
				code: param,
				userId: this.userId
			});
		}

		// 获取评论的附件列表

	}, {
		key: 'getAtts',
		value: function getAtts(params) {
			var _this22 = this;

			return (0, _api.requestPost)('getAtts', _config2.default.okr.getAtts, _okr2.default.okr.getAtts, {
				type: params.type,
				code: params.code,
				userId: this.userId
			}).then(function (res) {
				_this22.okrAtts = Object.assign([], res);
			});
		}

		// 获取评论内容

	}, {
		key: 'getComments',
		value: function getComments(params) {
			var _this23 = this;

			return (0, _api.requestPost)('getComments', _config2.default.okr.getComments, _okr2.default.okr.getComments, {
				type: params.type,
				code: params.code,
				userId: this.userId
			}).then(function (res) {
				_this23.okrComments = Object.assign([], res);
			});
		}

		// 保存附件

	}, {
		key: 'saveAtt',
		value: function saveAtt(params) {
			return (0, _api.requestPost)('saveAtts', _config2.default.okr.saveAtts, _okr2.default.okr.saveAtts, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				attachments: params.attachments
			});
		}

		// 保存评论

	}, {
		key: 'saveComment',
		value: function saveComment(params) {
			return (0, _api.requestPost)('saveComment', _config2.default.okr.saveComment, _okr2.default.okr.saveComment, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				comment: params.comment
			});
		}

		// 删除附件

	}, {
		key: 'delAtt',
		value: function delAtt(params) {
			return (0, _api.requestPost)('delAtt', _config2.default.okr.delAtt, _okr2.default.okr.delAtt, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				attachmentId: params.attachmentId
			});
		}

		// 删除评论

	}, {
		key: 'delComment',
		value: function delComment(params) {
			return (0, _api.requestPost)('delComment', _config2.default.okr.delComment, _okr2.default.okr.delComment, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				commentId: params.commentId
			});
		}
	}]);

	return BpmStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'maxHeight', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'projectBoardList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'projectBoardParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			beginTime: (0, _moment2.default)().startOf('year').valueOf(),
			endTime: (0, _moment2.default)().endOf("year").valueOf(),
			text: ''
		};
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'allProjectList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'allProjectParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { //明细查询参数
			beginTime: (0, _moment2.default)().startOf('year').valueOf(),
			endTime: (0, _moment2.default)().endOf("year").valueOf(),
			text: '',
			products: [],
			state: [],
			masterIds: [],
			pageIndex: 1,
			pageSize: 10
		};
	}
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'allProjectTotal', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'myTaskRunningNum', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'dealyWarnningList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'productProportion', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'topContractAmount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'currentTaskList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'currentTaskParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { //获取当前任务列表参数 当前（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)
			state: 1,
			pageIndex: 1,
			pageSize: 10
		};
	}
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'dealyWarnningParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { //获取当前任务列表参数 当前（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)
			state: 1,
			pageIndex: 1,
			pageSize: 10
		};
	}
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'hasMore', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return true;
	}
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'currentTaskTotal', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'deliverRate', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'moneyBackRate', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'projectStage', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [// 项目的不同阶段
		{ "stageId": "1", "name": "项目信息" }, { "stageId": "9", "name": "项目评估" }, { "stageId": "2", "name": "方案设计" }, { "stageId": "3", "name": "投标准备" }, { "stageId": "4", "name": "合同签订" }, { "stageId": "5", "name": "实施过程" }, { "stageId": "6", "name": "交付验收" }, { "stageId": "10", "name": "实施交付" }, { "stageId": "7", "name": "开票收款" }, { "stageId": "8", "name": "产品设计" }];
	}
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'projectStatus', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [// 项目状态
		{ "text": "项目信息", "value": "项目信息" }, { "text": "项目评估", "value": "项目评估" }, { "text": "方案设计", "value": "方案设计" }, { "text": "投标准备", "value": "投标准备" }, { "text": "合同签订", "value": "合同签订" }, { "text": "实施过程", "value": "实施过程" }, { "text": "交付验收", "value": "交付验收" }, { "text": "实施交付", "value": "实施交付" }, { "text": "开票收款", "value": "开票收款" }, { "text": "全部完成", "value": "全部完成" }, { "text": "产品设计", "value": "产品设计" }, { "text": "中途关闭", "value": "中途关闭" }];
	}
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'productTyleList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'masterList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'masterIds', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'projectBoardListDone', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProjectBoardList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProjectBoardList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getAllProjectList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllProjectList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getProductProportion', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProductProportion'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getTopContractAmountList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getTopContractAmountList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getCurrentTaskList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getCurrentTaskList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getWarnningList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getWarnningList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getListData', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getListData'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDeliverRate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDeliverRate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMoneyBackRate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getMoneyBackRate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMyTaskCount', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getMyTaskCount'), _class.prototype), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'products', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProductTypeList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProductTypeList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMasterList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getMasterList'), _class.prototype), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'personList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getUserInfoListByRoleCode', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserInfoListByRoleCode'), _class.prototype), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'projectList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getCalendarProjectList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getCalendarProjectList'), _class.prototype), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'yearMonth', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return '';
	}
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'personMonthTask', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getPersonMonthTaskState', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPersonMonthTaskState'), _class.prototype), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, 'projectStages', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProjectStagesByIds', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProjectStagesByIds'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDepartment', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDepartment'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getUserInfoListByDingtalk', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserInfoListByDingtalk'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDepartmentAndUsers', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDepartmentAndUsers'), _class.prototype), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, 'personParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { // 参数
			ids: [],
			beginTime: (0, _moment2.default)().startOf('day').valueOf(),
			endTime: (0, _moment2.default)().endOf("day").valueOf()
		};
	}
}), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, 'personResources', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getPersonScheduleResources', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPersonScheduleResources'), _class.prototype), _descriptor32 = _applyDecoratedDescriptor(_class.prototype, 'state', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getAllStages', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllStages'), _class.prototype), _descriptor33 = _applyDecoratedDescriptor(_class.prototype, 'ossData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"securityToken": "",
			"accessKeyId": "",
			"accessKeySecret": "",
			"expiration": null
		};
	}
}), _descriptor34 = _applyDecoratedDescriptor(_class.prototype, 'weeksData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor35 = _applyDecoratedDescriptor(_class.prototype, 'activeweeks', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {};
	}
}), _descriptor36 = _applyDecoratedDescriptor(_class.prototype, 'userId', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _descriptor37 = _applyDecoratedDescriptor(_class.prototype, 'userName', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _descriptor38 = _applyDecoratedDescriptor(_class.prototype, 'weekData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor39 = _applyDecoratedDescriptor(_class.prototype, 'monthData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor40 = _applyDecoratedDescriptor(_class.prototype, 'seasonData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor41 = _applyDecoratedDescriptor(_class.prototype, 'yearData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor42 = _applyDecoratedDescriptor(_class.prototype, 'defaultWeeksData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor43 = _applyDecoratedDescriptor(_class.prototype, 'okrAtts', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor44 = _applyDecoratedDescriptor(_class.prototype, 'okrComments', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
})), _class);
exports.default = BpmStore;

/***/ }),

/***/ 1578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Config = {
	// OKR评定系统
	okr: {
		getWeeks: "query($year: Int) {\n\t\tgetWeeks(year: $year)\n\t\t\t{\n\t\t\tid\n\t\t\tname\n\t\t\tmonth\n\t\t\tmonthName\n\t\t\tisDefault\n\t\t\tweekMonthName\n\t\t}\n\t}", // 返回查询年的周数据

		getWeekDetails: "query($code: Int, $userId: String) {\n\t\tgetWeekDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tweekId\n\t\t\tuserId\n\t\t\torders\n\t\t\tkeyResult\n\t\t\tworkItems\n\t\t\tassociationDescription\n\t\t\tresults\n\t\t}\n\t}", // 获取周明细

		getMonthDetails: "query($code: Int, $userId: String) {\n\t\tgetMonthDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tmonthId\n\t\t\tuserId\n\t\t\torders\n\t\t\tkeyResult\n\t\t\tworkItems\n\t\t\tassociationDescription\n\t\t\tresults\n\t\t}\n\t}", // 获取月明细

		getSeasonDetails: "query($code: Int, $userId: String) {\n\t\tgetSeasonDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tseasonId\n\t\t\tuserId\n\t\t\torders\n\t\t\tobjective\n\t\t\tuniformity\n\t\t\tkeyResult\n\t\t\tdepend\n\t\t\tdependencyDescription\n\t\t\tconfidenceLevel\n\t\t\tcompletion\n\t\t\tscore\n\t\t}\n\t}", // 获取季明细

		getYearDetails: "query($code: Int, $userId: String) {\n\t\tgetYearDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tyearId\n\t\t\tuserId\n\t\t\torders\n\t\t\tobjective\n\t\t\tuniformity\n\t\t\tkeyResult\n\t\t\tdepend\n\t\t\tdependencyDescription\n\t\t\tconfidenceLevel\n\t\t\tcompletion\n\t\t\tscore\n\t\t}\n\t}", // 获取年明细

		saveWeekDetails: "mutation($list: [InputWeekDetail], $code: Int, $userId: String) {\n\t\tsaveWeekDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存周明细

		saveMonthDetails: "mutation($list: [InputMonthDetail], $code: Int, $userId: String) {\n\t\tsaveMonthDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存月明细

		saveSeasonDetails: "mutation($list: [InputSeasonDetail], $code: Int, $userId: String) {\n\t\tsaveSeasonDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存季明细

		saveYearDetails: "mutation($list: [InputYearDetail], $code: Int, $userId: String) {\n\t\tsaveYearDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存年明细

		getAtts: "query($type: String, $code: Int, $userId: String) {\n\t\tgetAtts(type: $type, code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\ttype\n\t\t\ttypeId\n\t\t\ttypeUserId\n\t\t\tuserId\n\t\t\tfileId\n\t\t\tfileName\n\t\t\tfileType\n\t\t\tfilePath\n\t\t\tcreateTime\n\t\t}\n\t}", // 获取评论的附件列表

		getComments: "query($type: String, $code: Int, $userId: String) {\n\t\tgetComments(type: $type, code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\ttype\n\t\t\ttypeId\n\t\t\ttypeUserId\n\t\t\tuserId\n\t\t\ttext\n\t\t\tcreateTime\n\t\t\tuserName\n\t\t}\n\t}", // 获取评论内容

		saveAtts: "mutation($type: String, $code: Int, $userId: String, $attachments: [InputAttachment]) {\n\t\tsaveAtts(type: $type, code: $code, userId: $userId, attachments: $attachments)\n\t}", // 保存附件

		saveComment: "mutation($type: String, $code: Int, $userId: String, $comment: InputComment) {\n\t\tsaveComment(type: $type, code: $code, userId: $userId, comment: $comment)\n\t}", // 保存评论

		delAtt: "mutation($type: String, $code: Int, $userId: String, $attachmentId: String) {\n\t\tdelAtt(type: $type, code: $code, userId: $userId, attachmentId: $attachmentId)\n\t}", // 删除附件

		delComment: "mutation($type: String, $code: Int, $userId: String, $commentId: String) {\n\t\tdelComment(type: $type, code: $code, userId: $userId, commentId: $commentId)\n\t}", // 删除评论

		getWeekAndMonthDetails: "query($weekCode: Int, $userId: String) {\n\t\tgetWeekAndMonthDetails(weekCode: $weekCode, userId: $userId)\n\t\t{\n\t\t\tweekDetail\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tweekId\n\t\t\t\tuserId\n\t\t\t\torders\n\t\t\t\tkeyResult\n\t\t\t\tworkItems\n\t\t\t\tassociationDescription\n\t\t\t\tresults\n\t\t\t}\n\t\t\tmonthDetail\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tmonthId\n\t\t\t\tuserId\n\t\t\t\torders\n\t\t\t\tkeyResult\n\t\t\t\tworkItems\n\t\t\t\tassociationDescription\n\t\t\t\tresults\n\t\t\t}\n\t\t}\n\t}", // 获取周和月明细

		saveWeekAndMonthDetails: "mutation($weeks: [InputWeekDetail], $months: [InputMonthDetail], $weekCode: Int, $userId: String) {\n\t\tsaveWeekAndMonthDetails(weeks: $weeks, months: $months, weekCode: $weekCode, userId: $userId)\n\t}" // 保存周月明细

	}
};
exports.default = Config;

/***/ }),

/***/ 1780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp, _initialiseProps; /*
                                              * 钉钉部门树组件
                                              * dangw@bocspace.com
                                              * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _lodash = __webpack_require__(231);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = _antd.Tree.TreeNode;
var Search = _antd.Input.Search;

var dataList = [];

var DingtalkTree = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
	_inherits(DingtalkTree, _React$Component);

	function DingtalkTree(props) {
		_classCallCheck(this, DingtalkTree);

		var _this = _possibleConstructorReturn(this, (DingtalkTree.__proto__ || Object.getPrototypeOf(DingtalkTree)).call(this, props));

		_initialiseProps.call(_this);

		_this.store = _this.props.store;
		_this.state = {
			expandedKeys: [],
			autoExpandParent: true,
			checkedKeys: [],
			treeData: [],
			searchValue: '',
			filterTreeData: [], // 过滤树
			parent: [], //父节点
			selectedKeys: [] // 选中
		};
		return _this;
	}

	_createClass(DingtalkTree, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// 获取数据
			this.store.getDepartmentAndUsers("").then(function (res) {
				// 记录父亲节点
				var parent = [];
				res.forEach(function (item, index) {
					if (item.userInfos == null) {
						parent.push(item.id);
					} else if (Array.isArray(item.userInfos)) {
						parent.push(item.id);
					}
				});
				res.map(function (item) {
					if (item.userInfos == null) {
						// 删除userInfos == null
						item.key = item.id;
						item.title = item.name;
						delete item.userInfos;
					} else if (Array.isArray(item.userInfos)) {
						var userInfos = item.userInfos;
						item.key = item.id;
						item.title = item.name;
						// 转换userInfos To children
						item.children = userInfos.map(function (mitem) {
							return Object.assign({}, {
								key: mitem.id,
								title: mitem.realname,
								isLeaf: true
							});
						});
					}
				});
				var treeData = _this2.transFormTree(res);
				_this2.setState({
					treeData: treeData,
					parent: parent,
					selectedKeys: _this2.store.userId != undefined ? [_this2.store.userId] : [],
					expandedKeys: _this2.store.userId != undefined ? [_this2.store.userId] : []
				}, function () {
					dataList = []; // 初始化状态
				});
			});

			this.props.onRef(this);
		}

		// 将数据转换为json树


		// 展开


		// 选中


		// 选中

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    searchValue = _state.searchValue,
			    treeData = _state.treeData,
			    expandedKeys = _state.expandedKeys,
			    autoExpandParent = _state.autoExpandParent,
			    checkedKeys = _state.checkedKeys,
			    filterTreeData = _state.filterTreeData,
			    selectedKeys = _state.selectedKeys;

			this.generateList(treeData);
			var _props = this.props,
			    userSearch = _props.userSearch,
			    showLine = _props.showLine;

			var data = searchValue == null || searchValue == "" || searchValue == -1 ? treeData : filterTreeData;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: userSearch ? "tc mb10" : "hidden" },
					_react2.default.createElement(Search, {
						placeholder: '\u8F93\u5165\u59D3\u540D\u641C\u7D22',
						onChange: function onChange(e) {
							return _this3.onChange(e);
						},
						style: { width: '80%' }
					})
				),
				_react2.default.createElement(
					_antd.Tree,
					{
						onExpand: this.onExpand,
						expandedKeys: expandedKeys,
						autoExpandParent: autoExpandParent,
						onCheck: this.onCheck,
						checkedKeys: checkedKeys,
						checkable: !showLine,
						showLine: showLine,
						onSelect: showLine ? this.onSelect : null,
						selectedKeys: selectedKeys
					},
					this.renderTreeNodes(data)
				)
			);
		}
	}]);

	return DingtalkTree;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.transFormTree = function (data) {
		var result = [];
		if (!Array.isArray(data)) {
			return result;
		}
		var map = {};
		data.forEach(function (item) {
			map[item.id] = item;
		});
		data.forEach(function (item) {
			var parent = map[item.parentId];
			if (parent) {
				(parent.children || (parent.children = [])).push(item);
			} else {
				result.push(item);
			}
		});
		return result;
	};

	this.onExpand = function (expandedKeys) {
		_this4.setState({
			expandedKeys: expandedKeys,
			autoExpandParent: false
		});
	};

	this.onCheck = function (checkedKeys) {
		// 模糊搜索状态
		var _state2 = _this4.state,
		    searchValue = _state2.searchValue,
		    parent = _state2.parent;

		var isSearch = searchValue == null || searchValue == "" || searchValue == -1 ? true : false; // true 正常选择  false 模糊搜索
		var array = [];
		// 过滤checkedKeys
		if (isSearch == false) {
			// 模糊
			array = checkedKeys.filter(function (item) {
				return !parent.includes(item);
			});
		} else {
			array = checkedKeys;
		}
		// 去重
		var params = Array.from(new Set([].concat(_toConsumableArray(_this4.state.checkedKeys), _toConsumableArray(array))));

		_this4.setState({ checkedKeys: isSearch ? array : params }, function () {
			var userSearch = _this4.props.userSearch;

			if (userSearch) {
				// 是使用
				var personParams = JSON.parse(JSON.stringify(_this4.store.personParams));
				_this4.store.personParams = Object.assign(personParams, {
					ids: Object.assign([], _this4.state.checkedKeys)
				});
				_this4.store.getPersonScheduleResources();
			} else {
				// 未使用
				// 将
				_this4.props.handPersonChange(_this4.state.checkedKeys);
			}
		});
	};

	this.renderTreeNodes = function (data) {
		return data.map(function (item) {
			var searchValue = _this4.state.searchValue;

			var index = item.title.indexOf(searchValue);
			var beforeStr = item.title.substr(0, index);
			var afterStr = item.title.substr(index + searchValue.length);
			var title = index > -1 ? _react2.default.createElement(
				'span',
				null,
				beforeStr,
				_react2.default.createElement(
					'span',
					{ style: { color: '#f50' } },
					searchValue
				),
				afterStr
			) : _react2.default.createElement(
				'span',
				null,
				item.title
			);

			if (item.children) {
				return _react2.default.createElement(
					TreeNode,
					{ title: title, key: item.key, dataRef: item },
					_this4.renderTreeNodes(item.children)
				);
			}
			return _react2.default.createElement(TreeNode, { key: item.key, title: item.title,
				className: searchValue !== "" && item.title.includes(searchValue) ? "active_search" : "",
				isLeaf: item.isLeaf, dataRef: item });
		});
	};

	this.onChange = function (e) {
		var userSearch = _this4.props.userSearch;

		var value = userSearch ? e.target.value : e; // 是否使用
		var val = _lodash2.default.trim(value);
		if (val !== '') {
			// 模糊搜索name不为空
			_this4.store.getDepartmentAndUsers(val).then(function (res) {
				// 已选中的keys 筛选中的keys
				if (Array.isArray(res)) {
					res.map(function (item) {
						if (item.userInfos == null) {
							// 删除userInfos == null
							item.key = item.id;
							item.title = item.name;
							delete item.userInfos;
						} else if (Array.isArray(item.userInfos)) {
							var userInfos = item.userInfos;
							item.key = item.id;
							item.title = item.name;
							// 转换userInfos To children
							item.children = userInfos.map(function (mitem) {
								return Object.assign({}, {
									key: mitem.id,
									title: mitem.realname,
									isLeaf: true
								});
							});
						}
					});
					var filterTreeData = _this4.transFormTree(res);
					var expandedKeys = dataList.map(function (item) {
						if (item.title.indexOf(val) > -1) {
							return _this4.getParentKey(item.title, filterTreeData);
						}
						return null;
					});
					_this4.setState({
						expandedKeys: expandedKeys,
						searchValue: val,
						autoExpandParent: true,
						filterTreeData: filterTreeData
					});
				}
			});
		} else {
			_this4.setState({
				searchValue: -1,
				autoExpandParent: false
			});
		}
	};

	this.generateList = function (data) {
		for (var i = 0; i < data.length; i++) {
			var node = data[i];
			var key = node.key;
			dataList.push({ key: key, title: node.title });
			if (node.children) {
				_this4.generateList(node.children);
			}
		}
	};

	this.getParentKey = function (title, tree) {
		var parentKey = void 0;
		for (var i = 0; i < tree.length; i++) {
			var node = tree[i];
			if (node.children) {
				if (node.children.some(function (item) {
					return item.title === title;
				})) {
					parentKey = node.key;
				} else if (_this4.getParentKey(title, node.children)) {
					parentKey = _this4.getParentKey(title, node.children);
				}
			}
		}
		return parentKey;
	};

	this.onSelect = function (selectedKeys, info) {
		var node = info.node;
		var props = node.props;
		var dataRef = props.dataRef;

		if (dataRef.parentId == undefined) {
			// 父亲节点不可点击
			_this4.setState({
				selectedKeys: Object.assign([], selectedKeys)
			}, function () {
				// 触发右侧事件
				//console.log('selected', selectedKeys, dataRef);
				_this4.props.handleSelect(dataRef);
			});
		} else {
			//message.warn("请选择人员")
			return false;
		}
	};
}, _temp)) || _class;

exports.default = DingtalkTree;

/***/ }),

/***/ 1950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _class2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _uuid = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * OKRTable组件
                                                                                                                                                                                                                             * */


var EditableContext = _react2.default.createContext();
var EditableRow = function EditableRow(_ref) {
	var form = _ref.form,
	    index = _ref.index,
	    props = _objectWithoutProperties(_ref, ['form', 'index']);

	return _react2.default.createElement(
		EditableContext.Provider,
		{ value: form },
		_react2.default.createElement('tr', props)
	);
};
var EditableFormRow = _antd.Form.create()(EditableRow);
var TextArea = _antd.Input.TextArea;

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

var EditableCell = function (_React$Component) {
	_inherits(EditableCell, _React$Component);

	function EditableCell() {
		var _ref2;

		var _temp, _this, _ret;

		_classCallCheck(this, EditableCell);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
			editing: true
		}, _this.save = function (e) {
			var _this$props = _this.props,
			    record = _this$props.record,
			    handleSave = _this$props.handleSave;

			_this.form.validateFields(function (error, values) {
				if (error && error[e.currentTarget.id]) {
					return;
				}
				handleSave(_extends({}, record, values));
			});
		}, _this.renderCell = function (form) {
			_this.form = form;
			var _this$props2 = _this.props,
			    children = _this$props2.children,
			    dataIndex = _this$props2.dataIndex,
			    record = _this$props2.record,
			    title = _this$props2.title,
			    handleDelete = _this$props2.handleDelete,
			    type = _this$props2.type;
			var editing = _this.state.editing;

			if (type == 'number') {
				if (dataIndex == "orders") {
					// 优先级
					return editing ? _react2.default.createElement(
						_antd.Form.Item,
						{ style: { margin: 0 } },
						form.getFieldDecorator(dataIndex, {
							rules: [{
								required: false,
								message: title + '\u662F\u5FC5\u8F93'
							}],
							initialValue: record[dataIndex]
						})(_react2.default.createElement(
							'div',
							{ className: 'w clearfix' },
							_react2.default.createElement(
								_antd.Popconfirm,
								{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
										return handleDelete(record.id);
									} },
								_react2.default.createElement(_antd.Icon, {
									style: {
										width: '35px',
										color: '#F17E7E',
										fontSize: '20px'
									},
									type: 'minus-circle' })
							),
							_react2.default.createElement(_antd.InputNumber, {
								style: {
									width: 'calc(100% - 35px)'
								},
								defaultValue: record[dataIndex],
								ref: function ref(node) {
									return _this.input = node;
								},
								onPressEnter: _this.save,
								onBlur: _this.save
							})
						))
					) : _react2.default.createElement(
						'div',
						{ className: 'w clearfix' },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
									return handleDelete(record);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									width: '35px',
									color: '#F17E7E',
									fontSize: '22px'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(
							'div',
							{
								className: 'editable-cell-value-wrap',
								style: {
									width: 'calc(100% - 35px)',
									minHeight: '31px'
								}
							},
							children
						)
					);
				} else {
					// 数字
					return editing ? _react2.default.createElement(
						_antd.Form.Item,
						{ style: { margin: 0 } },
						form.getFieldDecorator(dataIndex, {
							rules: [{
								required: false,
								message: title + '\u662F\u5FC5\u8F93'
							}],
							initialValue: record[dataIndex]
						})(_react2.default.createElement(_antd.InputNumber, {
							defaultValue: record[dataIndex],
							ref: function ref(node) {
								return _this.input = node;
							},
							onPressEnter: _this.save,
							onBlur: _this.save
						}))
					) : _react2.default.createElement(
						'div',
						{ className: 'w clearfix' },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
									return handleDelete(record);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									width: '35px',
									color: '#F17E7E',
									fontSize: '22px',
									float: 'left'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(
							'div',
							{
								className: 'editable-cell-value-wrap',
								style: {
									float: 'right',
									width: 'calc(100% - 35px)',
									minHeight: '31px'
								}
							},
							children
						)
					);
				}
			} else if (type == 'textarea') {
				// 文本域
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(TextArea, {
						ref: function ref(node) {
							return _this.input = node;
						},
						onPressEnter: _this.save,
						onBlur: _this.save,
						placeholder: '\u8BF7\u8F93\u5165',
						autoSize: { minRows: 2, maxRows: 5 }
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
					},
					children
				);
			} else {
				// 文本
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(_antd.Input, {
						ref: function ref(node) {
							return _this.input = node;
						},
						onPressEnter: _this.save,
						onBlur: _this.save,
						placeholder: '\u8BF7\u8F93\u5165'
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
					},
					children
				);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(EditableCell, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    editable = _props.editable,
			    dataIndex = _props.dataIndex,
			    title = _props.title,
			    record = _props.record,
			    index = _props.index,
			    handleSave = _props.handleSave,
			    children = _props.children,
			    restProps = _objectWithoutProperties(_props, ['editable', 'dataIndex', 'title', 'record', 'index', 'handleSave', 'children']);

			return _react2.default.createElement(
				'td',
				restProps,
				editable ? _react2.default.createElement(
					EditableContext.Consumer,
					null,
					this.renderCell
				) : children
			);
		}
	}]);

	return EditableCell;
}(_react2.default.Component);

var OkrTable = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
	_inherits(OkrTable, _React$Component2);

	function OkrTable(props) {
		_classCallCheck(this, OkrTable);

		var _this2 = _possibleConstructorReturn(this, (OkrTable.__proto__ || Object.getPrototypeOf(OkrTable)).call(this, props));

		_this2.handleAdd = function () {
			var dataSource = _this2.state.dataSource;
			var _this2$props = _this2.props,
			    addData = _this2$props.addData,
			    type = _this2$props.type;

			var newData = Object.assign({}, addData, { id: "!" + (0, _uuid.v4)(), orders: dataSource.length + 1 });
			_this2.setState({
				dataSource: [].concat(_toConsumableArray(dataSource), [newData])
			}, function () {
				// 更新保存数据
				_this2.props.saveData(type, _this2.state.dataSource);
			});
		};

		_this2.handleDelete = function (id) {
			var type = _this2.props.type;

			var dataSource = [].concat(_toConsumableArray(_this2.state.dataSource));
			_this2.setState({
				dataSource: dataSource.filter(function (item) {
					return item.id !== id;
				})
			}, function () {
				// 更新保存数据
				_this2.props.saveData(type, _this2.state.dataSource);
			});
		};

		_this2.handleSave = function (row) {
			var type = _this2.props.type;

			var newData = [].concat(_toConsumableArray(_this2.state.dataSource));
			var index = newData.findIndex(function (item) {
				return row.id === item.id;
			});
			var item = newData[index];
			newData.splice(index, 1, _extends({}, item, row));
			_this2.setState({ dataSource: newData }, function () {
				// 更新保存数据
				_this2.props.saveData(type, _this2.state.dataSource);
			});
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			dataSource: [],
			addData: {}
		};
		return _this2;
	}

	_createClass(OkrTable, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var dataSource = nextProps.dataSource,
			    addData = nextProps.addData;

			if (dataSource != this.props.dataSource) {
				this.setState({
					dataSource: dataSource,
					addData: Object.assign({}, addData)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props2 = this.props,
			    dataSource = _props2.dataSource,
			    addData = _props2.addData;

			this.setState({
				dataSource: dataSource,
				addData: Object.assign({}, addData)
			});
		}

		// 增加一行


		// 删除一行


		// 保存

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var dataSource = this.state.dataSource;
			var columns = this.props.columns;

			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var massColu = columns != undefined && columns.map(function (col) {
				if (!col.editable) {
					return col;
				}
				return _extends({}, col, {
					onCell: function onCell(record) {
						return {
							record: record,
							editable: col.editable,
							dataIndex: col.dataIndex,
							title: col.title,
							type: col.type,
							handleSave: _this3.handleSave,
							handleDelete: _this3.handleDelete
						};
					}
				});
			});
			return _react2.default.createElement(
				_antd.ConfigProvider,
				{ renderEmpty: customizeRenderEmpty },
				_react2.default.createElement(_antd.Table, {
					components: components,
					rowClassName: function rowClassName() {
						return 'editable-row';
					},
					className: 'expand_table bpm_table',
					bordered: true,
					dataSource: dataSource,
					columns: massColu,
					pagination: false,
					size: "middle",
					rowKey: function rowKey(row) {
						return row.id;
					}
				}),
				_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
					style: { margin: '16px 0', color: '#4BA4BE', fontSize: '22px' },
					type: 'plus-circle' })
			);
		}
	}]);

	return OkrTable;
}(_react2.default.Component)) || _class2;

exports.default = OkrTable;

/***/ }),

/***/ 1958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 评论组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * dangw@bocspace.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


var TextArea = _antd.Input.TextArea;

var CommentList = function CommentList(_ref) {
	var comments = _ref.comments;
	return _react2.default.createElement(_antd.List, {
		dataSource: comments,
		header: comments.length + ' ' + (comments.length > 1 ? '评论' : '评论'),
		itemLayout: 'horizontal',
		renderItem: function renderItem(props) {
			return _react2.default.createElement(_antd.Comment, props);
		}
	});
};
var Editor = function Editor(_ref2) {
	var onChange = _ref2.onChange,
	    onSubmit = _ref2.onSubmit,
	    submitting = _ref2.submitting,
	    value = _ref2.value;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_antd.Form.Item,
			null,
			_react2.default.createElement(TextArea, { rows: 4, onChange: onChange, value: value, placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u7559\u8A00' })
		),
		_react2.default.createElement(
			_antd.Form.Item,
			null,
			_react2.default.createElement(
				_antd.Button,
				{ htmlType: 'submit', loading: submitting, onClick: onSubmit, type: 'primary' },
				'\u8BC4\u8BBA'
			)
		)
	);
};

var ZjComment = function (_React$Component) {
	_inherits(ZjComment, _React$Component);

	function ZjComment() {
		var _ref3;

		var _temp, _this, _ret;

		_classCallCheck(this, ZjComment);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = ZjComment.__proto__ || Object.getPrototypeOf(ZjComment)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
			comments: [],
			submitting: false,
			value: ''
		}, _this.handleSubmit = function () {
			if (!_this.state.value) {
				return;
			}

			_this.setState({
				submitting: true
			});

			setTimeout(function () {
				_this.props.saveComment(_this.state.value);
			}, 1000);
		}, _this.handleChange = function (e) {
			_this.setState({
				value: e.target.value
			});
		}, _this.clearState = function () {
			_this.setState({
				submitting: false,
				value: ''
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ZjComment, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this2 = this;

			var okrComments = nextProps.okrComments,
			    delComment = nextProps.delComment;

			if (okrComments != this.props.okrComments) {
				this.setState({
					comments: okrComments.map(function (item) {
						return Object.assign({}, {
							id: item.id,
							author: item.userName,
							avatar: _react2.default.createElement(_antd.Avatar, { style: { backgroundColor: '#87d068' }, icon: 'user' }),
							content: _react2.default.createElement(
								'p',
								null,
								item.text
							),
							datetime: (0, _moment2.default)(item.createTime).format("YYYY-MM-DD HH:mm:ss"),
							actions: [_react2.default.createElement(
								'span',
								{ key: 'comment-list-reply-to-0', onClick: delComment.bind(_this2, item.id) },
								'\u5220\u9664'
							)]
						});
					})
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onRef(this);
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    comments = _state.comments,
			    submitting = _state.submitting,
			    value = _state.value;


			return _react2.default.createElement(
				'div',
				null,
				comments.length > 0 && _react2.default.createElement(CommentList, { comments: comments }),
				_react2.default.createElement(_antd.Comment, {
					avatar: _react2.default.createElement(_antd.Avatar, {
						src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						//style={{backgroundColor: '#87d068'}}
						// icon="user"
					}),
					content: _react2.default.createElement(Editor, {
						onChange: this.handleChange,
						onSubmit: this.handleSubmit,
						submitting: submitting,
						value: value
					})
				})
			);
		}
	}]);

	return ZjComment;
}(_react2.default.Component);

exports.default = ZjComment;

/***/ })

});
//# sourceMappingURL=26-afa7d4b4bae6ff2924e9.1629092961041.js.map