webpackJsonp([42],{

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            *报表管理--报表列表
            *qiufh@bocspace.cn
            */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(32);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _BpmStore = __webpack_require__(1577);

var _BpmStore2 = _interopRequireDefault(_BpmStore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

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
			'\u6682\u65E0\u4EFB\u52A1'
		)
	);
};

var MyTask = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(MyTask, _React$Component);

	function MyTask(props) {
		_classCallCheck(this, MyTask);

		var _this = _possibleConstructorReturn(this, (MyTask.__proto__ || Object.getPrototypeOf(MyTask)).call(this, props));

		_this.state = {
			activeKey: '0', // 激活的key,
			bredacrumbItems: [{ "label": "项目看板", "link": "" }, { "label": "我的任务", "link": "#/report" }],
			totalCount: 0 // 进行中 or  已完成
		};

		_this.getIncompleteTask = function () {
			_this.store.currentTaskParams = Object.assign({}, {
				state: 2,
				pageIndex: 1,
				pageSize: 10
			});
			_this.store.getCurrentTaskList();
		};

		_this.getCompletedTask = function () {
			_this.store.getListData({
				pageIndex: 1,
				pageSize: 10,
				state: 3
			}).then(function (res) {
				_this.setState({
					totalCount: res.totalCount
				});
			});
		};

		_this.onShowSizeChange = function (current, pageSize) {
			_this.store.currentTaskParams.pageIndex = 1;
			_this.store.currentTaskParams.pageSize = pageSize;
			if (_this.state.activeKey == "0") {
				_this.store.currentTaskParams.state = 2;
			} else {
				_this.store.currentTaskParams.state = 3;
			}
			_this.store.getCurrentTaskList();
		};

		_this.onChange = function (pageNumber) {
			_this.store.currentTaskParams.pageIndex = pageNumber;
			_this.store.getCurrentTaskList();
		};

		_this.tabsOnchange = function (key) {
			_this.setState({
				activeKey: key
			}, function () {
				_this.store.currentTaskParams = Object.assign(mobx.toJS(_this.store.currentTaskParams), {
					pageIndex: 1,
					pageSize: 10
				});
				if (key == 0) {
					// 未完成
					_this.store.currentTaskParams.state = 2;
					_this.store.getCurrentTaskList();

					_this.store.getListData({
						pageIndex: 1,
						pageSize: 10,
						state: 3
					}).then(function (res) {
						_this.setState({
							totalCount: res.totalCount
						});
					});
				} else {
					_this.store.currentTaskParams.state = 3;
					_this.store.getCurrentTaskList();

					_this.store.getListData({
						pageIndex: 1,
						pageSize: 10,
						state: 2
					}).then(function (res) {
						_this.setState({
							totalCount: res.totalCount
						});
					});
				}
			});
		};

		_this.backProgressList = function () {
			_this.props.history.push('/bpm/progresslist');
		};

		_this.store = new _BpmStore2.default();
		return _this;
	}

	_createClass(MyTask, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadPageInfo();
		}
	}, {
		key: 'loadPageInfo',
		value: function loadPageInfo() {
			this.getIncompleteTask();
			this.getCompletedTask();
		}

		// 进行中


		// 已完成


		//返回列表页

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    bredacrumbItems = _state.bredacrumbItems,
			    activeKey = _state.activeKey,
			    totalCount = _state.totalCount;

			var urlObj = { 1: 'workdetail', 2: 'labor', 3: 'productdetail', 4: 'exhibition', 5: 'exhibition' };
			var columns = [{ title: '任务', dataIndex: 'name', align: 'left' }, { title: '所属项目', dataIndex: 'projectName', align: 'left' }, { title: '截止日期', dataIndex: 'endTime', align: 'center', render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						text == 0 || text == null ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				} }, { title: '完成比例', dataIndex: 'rate', align: 'center', render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						text,
						'%'
					);
				} }, { title: '操作', dataIndex: '', align: 'center',
				render: function render(text, record) {
					var address = urlObj[record.projectType];
					// pid不为空，子任务需要展开； pid为空，主任务不需要展开
					var url = record.pid != null ? '/bpm/' + address + '?projectid=' + record.projectId + '&id=' + record.id + '&pid=' + record.pid + '&temId=' + record.projectType : '/bpm/' + address + '?projectid=' + record.projectId + '&id=' + record.id + '&temId=' + record.projectType;
					var actionName = "";
					var isEdit = "";
					if (record.rate >= 100) {
						actionName = "查看";
						isEdit = 1;
					} else {
						actionName = "填报";
						isEdit = 2;
					}
					return _react2.default.createElement(
						'a',
						{ onClick: function onClick(e) {
								_this2.props.history.push(url + "&isEdit=" + isEdit);
							} },
						actionName
					);
				}
			}];
			var linkItems = bredacrumbItems.map(function (item, index) {
				if (index == 1) {
					return _react2.default.createElement(
						_antd.Breadcrumb.Item,
						null,
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0)' },
							item.label
						)
					);
				} else {
					return _react2.default.createElement(
						_antd.Breadcrumb.Item,
						null,
						_react2.default.createElement(
							'a',
							{ href: 'javascript:void(0)', onClick: _this2.backProgressList },
							item.label
						)
					);
				}
			});
			var _store = this.store,
			    currentTaskTotal = _store.currentTaskTotal,
			    currentTaskList = _store.currentTaskList,
			    currentTaskParams = _store.currentTaskParams;

			var inCom = activeKey == "0" ? currentTaskTotal : totalCount; // 进行中
			var Com = activeKey == "1" ? currentTaskTotal : totalCount; // 已完成
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'con_bottom' },
					_react2.default.createElement(
						_antd.Breadcrumb,
						{ separator: '>' },
						linkItems
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mt20' },
					_react2.default.createElement(
						_antd.Tabs,
						{ activeKey: activeKey, onChange: this.tabsOnchange },
						_react2.default.createElement(
							TabPane,
							{
								tab: _react2.default.createElement(
									'span',
									null,
									'进行中 (' + inCom + ')'
								),
								key: '0' },
							_react2.default.createElement(
								_antd.ConfigProvider,
								{ renderEmpty: customizeRenderEmpty },
								_react2.default.createElement(_antd.Table, {
									className: 'm_table',
									columns: columns,
									dataSource: mobx.toJS(currentTaskList),
									size: 'middle',
									pagination: false
								}),
								_react2.default.createElement(_antd.Pagination, {
									className: 'mt20 tc',
									showSizeChanger: true,
									onShowSizeChange: this.onShowSizeChange,
									onChange: this.onChange,
									total: currentTaskTotal,
									showQuickJumper: true,
									current: mobx.toJS(currentTaskParams).pageIndex,
									showTotal: function showTotal(total) {
										return '\u5171 ' + total + ' \u6761\u8BB0\u5F55';
									}
								})
							)
						),
						_react2.default.createElement(
							TabPane,
							{
								tab: _react2.default.createElement(
									'span',
									null,
									'已完成 (' + Com + ')'
								),
								key: '1' },
							_react2.default.createElement(
								_antd.ConfigProvider,
								{ renderEmpty: customizeRenderEmpty },
								_react2.default.createElement(_antd.Table, {
									className: 'm_table',
									columns: columns,
									dataSource: mobx.toJS(currentTaskList),
									size: 'middle',
									pagination: false
								}),
								_react2.default.createElement(_antd.Pagination, {
									className: 'mt20 tc',
									showSizeChanger: true,
									onShowSizeChange: this.onShowSizeChange,
									onChange: this.onChange,
									total: currentTaskTotal,
									showQuickJumper: true,
									current: mobx.toJS(currentTaskParams).pageIndex,
									showTotal: function showTotal(total) {
										return '\u5171 ' + total + ' \u6761\u8BB0\u5F55';
									}
								})
							)
						)
					)
				)
			);
		}
	}]);

	return MyTask;
}(_react2.default.Component)) || _class) || _class;

exports.default = MyTask;

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

/***/ })

});
//# sourceMappingURL=42-afa7d4b4bae6ff2924e9.1629092961041.js.map