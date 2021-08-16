webpackJsonp([8],{

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 需求管理
            * dangw@glodon.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactCustomScrollbars = __webpack_require__(336);

var _reactInfiniteScroller = __webpack_require__(1529);

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _RequirementAdd = __webpack_require__(2062);

var _RequirementAdd2 = _interopRequireDefault(_RequirementAdd);

var _RequirementEdit = __webpack_require__(2063);

var _RequirementEdit2 = _interopRequireDefault(_RequirementEdit);

var _lodash = __webpack_require__(231);

var _lodash2 = _interopRequireDefault(_lodash);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _requirement = __webpack_require__(1661);

var _requirement2 = _interopRequireDefault(_requirement);

var _api = __webpack_require__(30);

var _RequirementStore = __webpack_require__(2114);

var _RequirementStore2 = _interopRequireDefault(_RequirementStore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var CheckboxGroup = _antd.Checkbox.Group;
var Search = _antd.Input.Search;
var confirm = _antd.Modal.confirm;
var typeColors = {
	'普通': "url('./images/normal.svg') no-repeat",
	'紧急': "url('./images/waring.svg') no-repeat",
	'非常紧急': "url('./images/error.svg') no-repeat"
};
var clickTasks = [];

var Requirement = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Requirement, _React$Component);

	function Requirement(props) {
		var _this3 = this;

		_classCallCheck(this, Requirement);

		var _this2 = _possibleConstructorReturn(this, (Requirement.__proto__ || Object.getPrototypeOf(Requirement)).call(this, props));

		_this2.handleClick = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
				var addVisible, clickTask;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								addVisible = _this2.state.addVisible;

								if (!(addVisible == false)) {
									_context.next = 3;
									break;
								}

								return _context.abrupt('return', false);

							case 3:
								clickTask = _lodash2.default.debounce(function () {

									// 获取需求
									(0, _api.requestPost)('getRequirement', _config2.default.management.getRequirement, _requirement2.default.requirement.getRequirement, { id: param.id }).then(function (res) {
										var data = res;
										_this2.store.readVisible = true;
										_this2.store.readData = Object.assign({}, {
											"id": data.id,
											"title": data.title,
											"category": data.category,
											"level": data.level,
											"demandName": data.demandName,
											"demandPhone": data.demandPhone,
											"demandStation": data.demandStation,
											"description": data.description,
											"product": data.product,
											"attachments": data.attachments !== null ? data.attachments.map(function (item, index) {
												return Object.assign(item, {
													'uid': item.id,
													'name': item.fileName,
													'status': 'done',
													'url': item.filePath
												});
											}) : []
										});
									});

									clickTasks = [];
								}, 200);

								clickTasks.push(clickTask);
								clickTask();

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this3);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();

		_this2.handleDoubleClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (clickTasks.length > 0) {
								_lodash2.default.map(clickTasks, function (task) {
									return task.cancel();
								});
							}

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this3);
		}));

		_this2.getTableData = function () {
			// 查询
			(0, _api.requestPost)('getRequirementPage', _config2.default.management.getRequirementPage, _requirement2.default.requirement.getRequirementPage, {
				all: _this2.store.all,
				text: _this2.store.text,
				product: _this2.store.product,
				status: mobx.toJS(_this2.store.status),
				pageIndex: _this2.store.pageIndex,
				pageSize: _this2.store.pageSize
			}).then(function (res) {
				var data = res;
				_this2.store.tableData = Object.assign([], data.body.map(function (item, index) {
					if (index == 0) {
						return Object.assign(item, { selested: true });
					} else {
						return Object.assign(item, { selested: false });
					}
				}));
				_this2.store.totalCount = data.totalCount;
				if (mobx.toJS(_this2.store.tableData).length > 0) {
					// 初始化默认值，列表第一项
					var param = mobx.toJS(_this2.store.tableData)[0];
					_this2.handleEdit(param);
				} else {
					return false;
				}
			});
		};

		_this2.onChange = function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(checkedValues) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_this2.store.status = Object.assign([], checkedValues);
								_this2.getTableData();

							case 2:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x2) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this2.onSearch = function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(value) {
				var val;
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								val = _lodash2.default.trim(value);

								_this2.store.text = val;
								_this2.getTableData();

							case 3:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, _this3);
			}));

			return function (_x3) {
				return _ref4.apply(this, arguments);
			};
		}();

		_this2.checkLi = function () {
			var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(value) {
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_this2.store.all = value;
								_this2.getTableData();

							case 2:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, _this3);
			}));

			return function (_x4) {
				return _ref5.apply(this, arguments);
			};
		}();

		_this2.handleToggle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
			return regeneratorRuntime.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							_this2.setState({
								toggle: !_this2.state.toggle
							});

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, _this3);
		}));

		_this2.handleAdd = function () {
			_this2.setState({
				addVisible: true,
				editVisible: false
			}, function () {
				(0, _api.requestPost)('addRequirement', _config2.default.management.addRequirement, _requirement2.default.requirement.addRequirement, {}).then(function (res) {
					var data = res;
					_this2.store.addFields = Object.assign({}, {
						"id": data.id,
						"title": data.title,
						"category": data.category,
						"level": data.level,
						"demandName": data.demandName,
						"demandPhone": data.demandPhone,
						"demandStation": data.demandStation,
						"description": data.description,
						"attachments": data.attachments !== null ? data.attachments.map(function (item, index) {
							return Object.assign(item, {
								'uid': item.id,
								'name': item.fileName,
								'status': 'done',
								'url': item.filePath
							});
						}) : []
					});
				});
			});
		};

		_this2.handleEdit = function (param) {
			// 该需求是草稿
			if (param.isSave == false) {
				_this2.setState({
					editVisible: false,
					addVisible: true
				}, function () {
					_this2.store.requirementId = param.id;
					// 获取需求
					(0, _api.requestPost)('getRequirement', _config2.default.management.getRequirement, _requirement2.default.requirement.getRequirement, { id: param.id }).then(function (res) {
						var data = res;
						_this2.store.addFields = Object.assign({}, {
							"id": data.id,
							"title": data.title,
							"category": data.category,
							"level": data.level,
							"demandName": data.demandName,
							"demandPhone": data.demandPhone,
							"demandStation": data.demandStation,
							"description": data.description,
							"product": data.product,
							"attachments": data.attachments !== null ? data.attachments.map(function (item, index) {
								return Object.assign(item, {
									'uid': item.id,
									'name': item.fileName,
									'status': 'done',
									'url': item.filePath
								});
							}) : []
						});
					});
				});
			} else {
				// 该需求已提交
				_this2.setState({
					editVisible: true,
					addVisible: false
				}, function () {
					_this2.store.requirementId = param.id;
					_this2.store.statusActive = param.status;

					// 获取需求
					(0, _api.requestPost)('getRequirement', _config2.default.management.getRequirement, _requirement2.default.requirement.getRequirement, { id: param.id }).then(function (res) {
						var data = res;
						_this2.store.editFields = Object.assign({}, {
							"id": data.id,
							"title": data.title,
							"category": data.category,
							"level": data.level,
							"demandName": data.demandName,
							"demandPhone": data.demandPhone,
							"demandStation": data.demandStation,
							"description": data.description,
							"product": data.product,
							"attachments": data.attachments !== null ? data.attachments.map(function (item, index) {
								return Object.assign(item, {
									'uid': item.id,
									'name': item.fileName,
									'status': 'done',
									'url': item.filePath
								});
							}) : []
						});
					});

					// 获取最近一次分析
					(0, _api.requestPost)('getLastAnalysisByRequirementId', _config2.default.management.getLastAnalysisByRequirementId, _requirement2.default.requirement.getLastAnalysisByRequirementId, { requirementId: param.id }).then(function (res) {
						var data = res;
						_this2.store.anActive = data.id; // 当前默认分析id
						_this2.store.isSave = data.isSave; // 当前默认分析是否保存
						_this2.store.analysisFields = Object.assign({}, {
							"id": data.id,
							"toUserId": data.toUserId,
							"toUserName": data.toUserName,
							"bsa": data.bsa,
							"note": data.note,
							"status": data.status,
							"record": data.record,
							"userId": data.userId,
							"userName": data.userName,
							"createTime": data.createTime,
							"isSave": data.isSave,
							"requirementId": data.requirementId,
							"attachments": data.attachments !== null ? data.attachments.map(function (item, index) {
								return Object.assign(item, {
									'uid': item.id,
									'name': item.fileName,
									'status': 'done',
									'url': item.filePath
								});
							}) : []
						}); // 分析字段

						if (data.id !== null) {
							//  获取关联
							(0, _api.requestPost)('getAnalysisRelationPage', _config2.default.management.getAnalysisRelationPage, _requirement2.default.requirement.getAnalysisRelationPage, {
								analysisId: _this2.store.anActive, pageIndex: 1, pageSize: 50
							}).then(function (res) {
								_this2.store.lisTable = Object.assign([], res.body);
							});
						}
					});

					// 获取分析列表
					(0, _api.requestPost)('getAnalysisList', _config2.default.management.getAnalysisList, _requirement2.default.requirement.getAnalysisList, { requirementId: param.id }).then(function (res) {
						_this2.store.analysisList = Object.assign([], res);
					});
				});
			}
		};

		_this2.handclickEdit = function (param) {
			var dataArray = mobx.toJS(_this2.store.tableData).map(function (item) {
				return Object.assign(item, { selested: false });
			});
			var dindex = dataArray.findIndex(function (item) {
				return item.id == param.id;
			});
			dataArray.splice(dindex, 1, Object.assign(param, { selested: true }));
			_this2.store.tableData = Object.assign([], dataArray);
			_this2.handleEdit(param);
		};

		_this2.handleNext = function () {
			var dataArray = mobx.toJS(_this2.store.tableData).map(function (item) {
				return Object.assign(item, { selested: false });
			});
			var dindex = dataArray.findIndex(function (item) {
				return item.id == _this2.store.requirementId;
			});
			// 如果当前的索引值+1 等于 左侧列表数据的长度，则提示列表数据已经到底了
			if (dindex + 1 === mobx.toJS(_this2.store.tableData).length) {
				_antd.message.warn("列表数据已经到底了!");
				return false;
			}
			var param = dataArray[dindex + 1];
			dataArray.splice(dindex + 1, 1, Object.assign(param, { selested: true }));
			// console.log(dataArray, '进入下一条')
			_this2.store.tableData = Object.assign([], dataArray);
			_this2.store.requirementId = param.id;
			_this2.handleEdit(param);
		};

		_this2.showDeleteConfirm = function () {
			var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
				var _this;

				return regeneratorRuntime.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_this = _this2;

								confirm({
									title: '您确定删除吗?',
									okText: '确定',
									okType: 'danger',
									cancelText: '取消',
									onOk: function onOk() {
										(0, _api.requestPost)('delRequirement', _config2.default.management.delRequirement, _requirement2.default.requirement.delRequirement, {
											requirementId: id
										}).then(function (res) {
											if (res == true) {
												_antd.message.success("删除成功！");
												//
												_this.getTableData();
											} else {
												_antd.message.error('删除失败！');
											}
										});
									},
									onCancel: function onCancel() {
										console.log('Cancel');
									}
								});

							case 2:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, _this3);
			}));

			return function (_x5) {
				return _ref7.apply(this, arguments);
			};
		}();

		_this2.handleInfiniteOnLoad = function () {
			var dataArray = mobx.toJS(_this2.store.tableData);
			if (_this2.store.totalCount === dataArray.length) {
				return;
			}
			_this2.store.loading = true;
			_this2.store.pageIndex = _this2.store.pageIndex + 1;

			(0, _api.requestPost)('getRequirementPage', _config2.default.management.getRequirementPage, _requirement2.default.requirement.getRequirementPage, {
				all: _this2.store.all,
				text: _this2.store.text,
				status: mobx.toJS(_this2.store.status),
				pageIndex: _this2.store.pageIndex,
				pageSize: _this2.store.pageSize
			}).then(function (res) {
				var data = res;
				dataArray = dataArray.concat(data.body);
				_this2.store.tableData = Object.assign([], dataArray);
				_this2.store.loading = false;
			});
		};

		_this2.getSimilarityRequirementPage = function () {}
		// requestPost('getSimilarityRequirementPage', Config.management.getSimilarityRequirementPage, Schemas.requirement.getSimilarityRequirementPage, {
		// 	all: this.store.all,
		// 	text: this.store.text,
		// 	word: this.store.word,
		// 	status: mobx.toJS(this.store.status),
		// 	pageIndex: this.store.pageIndex,
		// 	pageSize: this.store.pageSize
		// }).then((res) => {
		// 	this.store.tableData = Object.assign([], res.body);
		// })


		// 产品
		;

		_this2.changePro = function (value) {
			console.log(value);
			_this2.store.product = value;
			_this2.getTableData();
		};

		_this2.store = new _RequirementStore2.default();
		_this2.state = {
			productData: [{ name: '全部', value: '' }, { name: '标箱', value: '标箱' }, { name: '展厅', value: '展厅' }, { name: '劳务箱', value: '劳务箱' }, { name: '大临', value: '大临' }, { name: '其它', value: '其它' }], // 产品
			leftSearchData: ['新需求', '已受理', '已完成', '不考虑'], // 左侧搜索条件
			search: [{ name: '全部', value: true }, { name: '我的', value: false }], // 筛选条件
			toggle: true, // 切换面包屑
			addVisible: true, // 新增页面
			editVisible: false, // 编辑页面
			readData: { // 只读需求的数据
				visible: false,
				data: {}
			}
		};
		return _this2;
	}

	_createClass(Requirement, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getTableData();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}

		// 单击事件


		// 双击事件


		//  新增


		// 编辑


		// 点击编辑


		// 提交下一条，跳转


		// 获取下一页信息


		// 检索

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    leftSearchData = _state.leftSearchData,
			    search = _state.search,
			    toggle = _state.toggle,
			    addVisible = _state.addVisible,
			    editVisible = _state.editVisible,
			    productData = _state.productData;


			return _react2.default.createElement(
				'div',
				{ className: 'container-fluid clearfix' },
				_react2.default.createElement(
					'div',
					{ className: 'side-col', style: { width: toggle ? '325px' : '50px' } },
					_react2.default.createElement(Search, {
						style: {
							width: '80%'
						},
						size: 'middle',
						onSearch: this.onSearch,
						placeholder: '\u641C\u7D22',
						className: toggle ? "" : "hidden" }),
					_react2.default.createElement('span', { className: toggle ? "require-add" : "fl", onClick: this.handleAdd }),
					_react2.default.createElement(CheckboxGroup, { options: leftSearchData,
						className: toggle ? "require-checkbox" : "hidden",
						value: mobx.toJS(this.store.status),
						onChange: this.onChange }),
					_react2.default.createElement(
						'div',
						{ className: toggle ? "tl pl15" : "hidden" },
						_react2.default.createElement(
							'span',
							{ className: 'mr5 f12' },
							'\u4EA7\u54C1:'
						),
						_react2.default.createElement(
							_antd.Select,
							{
								placeholder: '\u8BF7\u9009\u62E9...',
								onChange: this.changePro.bind(this),
								style: { width: '85px', height: '30px' },
								value: this.store.product,
								size: "small"
							},
							productData.map(function (item, index) {
								return _react2.default.createElement(
									Option,
									{ key: 'product' + index, value: item.value },
									item.name
								);
							})
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'require-table2' },
						_react2.default.createElement(
							'div',
							{ className: 'clearfix', style: { marginBottom: '10px' } },
							_react2.default.createElement(
								'ul',
								{ className: toggle ? "require-ul fl" : "hidden" },
								search.map(function (item, index) {
									return _react2.default.createElement(
										'li',
										{ key: 'li' + index,
											onClick: _this4.checkLi.bind(_this4, item.value),
											className: _this4.store.all == item.value ? "active pointer" : "pointer" },
										item.name
									);
								})
							),
							_react2.default.createElement(
								'div',
								{ className: toggle ? "fr pointer" : "fl  pointer", onClick: this.handleToggle },
								toggle ? _react2.default.createElement(_antd.Icon, { type: 'menu-fold' }) : _react2.default.createElement(_antd.Icon, { type: 'menu-unfold' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: toggle ? "" : "hidden" },
							_react2.default.createElement(
								_reactCustomScrollbars.Scrollbars,
								{
									style: { height: "calc(100vh - 260px)" },
									autoHide: true },
								mobx.toJS(this.store.tableData).length > 0 ? _react2.default.createElement(
									_reactInfiniteScroller2.default,
									{
										initialLoad: false,
										pageStart: 0,
										loadMore: this.handleInfiniteOnLoad.bind(this),
										hasMore: !this.store.loading && this.store.hasMore,
										useWindow: false
									},
									mobx.toJS(this.store.tableData).length > 0 && mobx.toJS(this.store.tableData).map(function (item, index) {
										return _react2.default.createElement(
											'div',
											{ className: item.selested == true ? "require-tr require-tr-active" : "require-tr",
												onClick: _this4.handclickEdit.bind(_this4, item),
												onDoubleClick: _this4.handleDoubleClick.bind(item),
												key: 'tab-' + index },
											_react2.default.createElement(
												'div',
												{ className: 'pr' },
												_react2.default.createElement(
													'span',
													{ className: 'require-td', title: item.title },
													item.title
												),
												_react2.default.createElement('span', { className: 'require-edit', title: '查看相似需求',
													onClick: _this4.handleClick.bind(_this4, item) }),
												_react2.default.createElement(_antd.Icon, { type: 'pushpin',
													title: '\u8349\u7A3F',
													className: item.isSave == false ? "" : "hidden",
													style: { position: 'absolute', right: '5px', top: '15px', color: 'rgb(217, 0, 27' }
												}),
												_react2.default.createElement(_antd.Icon, { type: 'close', onClick: _this4.showDeleteConfirm.bind(_this4, item.id), title: '删除',
													className: item.isSave == false ? "require-del" : "hidden",
													style: { position: 'absolute', right: '5px', top: '-5px', color: 'rgb(217, 0, 27' } }),
												_react2.default.createElement('span', { className: 'require-lavel',
													style: { background: item.level ? typeColors[item.level] : 'transparent' } })
											),
											_react2.default.createElement(
												'div',
												{ className: 'clearfix', style: { marginTop: '5px' } },
												_react2.default.createElement(
													'span',
													{
														className: 'fl require-title' },
													(0, _moment2.default)(item.createTime).format("YYYY-MM-DD HH:mm"),
													'\xA0\xA0',
													item.userName
												),
												_react2.default.createElement(
													'span',
													{ className: 'fr require-title mr25' },
													item.status
												)
											)
										);
									}),
									this.store.loading && this.store.hasMore && _react2.default.createElement(
										'div',
										{ className: 'demo-loading-container' },
										_react2.default.createElement(_antd.Spin, null)
									)
								) : _react2.default.createElement(_antd.Empty, null)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'main-col', style: { width: toggle ? 'calc(100% - 350px)' : 'calc(100% - 50px)' } },
					_react2.default.createElement(_RequirementAdd2.default, {
						store: this.store,
						visible: addVisible,
						getTableData: this.getTableData,
						getSimilarityRequirementPage: this.getSimilarityRequirementPage
					}),
					_react2.default.createElement(_RequirementEdit2.default, {
						store: this.store,
						visible: editVisible,
						handleNext: this.handleNext,
						getTableData: this.getTableData
					})
				)
			);
		}
	}]);

	return Requirement;
}(_react2.default.Component)) || _class;

exports.default = Requirement;

/***/ }),

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll(props) {
    _classCallCheck(this, InfiniteScroll);

    var _this = _possibleConstructorReturn(this, (InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call(this, props));

    _this.scrollListener = _this.scrollListener.bind(_this);
    _this.eventListenerOptions = _this.eventListenerOptions.bind(_this);
    _this.mousewheelListener = _this.mousewheelListener.bind(_this);
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.pageLoaded = this.props.pageStart;
      this.options = this.eventListenerOptions();
      this.attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isReverse && this.loadMore) {
        var parentElement = this.getParentElement(this.scrollComponent);
        parentElement.scrollTop = parentElement.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop;
        this.loadMore = false;
      }
      this.attachScrollListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachScrollListener();
      this.detachMousewheelListener();
    }
  }, {
    key: 'isPassiveSupported',
    value: function isPassiveSupported() {
      var passive = false;

      var testOptions = {
        get passive() {
          passive = true;
        }
      };

      try {
        document.addEventListener('test', null, testOptions);
        document.removeEventListener('test', null, testOptions);
      } catch (e) {
        // ignore
      }
      return passive;
    }
  }, {
    key: 'eventListenerOptions',
    value: function eventListenerOptions() {
      var options = this.props.useCapture;

      if (this.isPassiveSupported()) {
        options = {
          useCapture: this.props.useCapture,
          passive: true
        };
      }
      return options;
    }

    // Set a defaut loader for all your `InfiniteScroll` components

  }, {
    key: 'setDefaultLoader',
    value: function setDefaultLoader(loader) {
      this.defaultLoader = loader;
    }
  }, {
    key: 'detachMousewheelListener',
    value: function detachMousewheelListener() {
      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.removeEventListener('mousewheel', this.mousewheelListener, this.options ? this.options : this.props.useCapture);
    }
  }, {
    key: 'detachScrollListener',
    value: function detachScrollListener() {
      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.getParentElement(this.scrollComponent);
      }

      scrollEl.removeEventListener('scroll', this.scrollListener, this.options ? this.options : this.props.useCapture);
      scrollEl.removeEventListener('resize', this.scrollListener, this.options ? this.options : this.props.useCapture);
    }
  }, {
    key: 'getParentElement',
    value: function getParentElement(el) {
      var scrollParent = this.props.getScrollParent && this.props.getScrollParent();
      if (scrollParent != null) {
        return scrollParent;
      }
      return el && el.parentNode;
    }
  }, {
    key: 'filterProps',
    value: function filterProps(props) {
      return props;
    }
  }, {
    key: 'attachScrollListener',
    value: function attachScrollListener() {
      var parentElement = this.getParentElement(this.scrollComponent);

      if (!this.props.hasMore || !parentElement) {
        return;
      }

      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = parentElement;
      }

      scrollEl.addEventListener('mousewheel', this.mousewheelListener, this.options ? this.options : this.props.useCapture);
      scrollEl.addEventListener('scroll', this.scrollListener, this.options ? this.options : this.props.useCapture);
      scrollEl.addEventListener('resize', this.scrollListener, this.options ? this.options : this.props.useCapture);

      if (this.props.initialLoad) {
        this.scrollListener();
      }
    }
  }, {
    key: 'mousewheelListener',
    value: function mousewheelListener(e) {
      // Prevents Chrome hangups
      // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
      if (e.deltaY === 1 && !this.isPassiveSupported()) {
        e.preventDefault();
      }
    }
  }, {
    key: 'scrollListener',
    value: function scrollListener() {
      var el = this.scrollComponent;
      var scrollEl = window;
      var parentNode = this.getParentElement(el);

      var offset = void 0;
      if (this.props.useWindow) {
        var doc = document.documentElement || document.body.parentNode || document.body;
        var scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;
        if (this.props.isReverse) {
          offset = scrollTop;
        } else {
          offset = this.calculateOffset(el, scrollTop);
        }
      } else if (this.props.isReverse) {
        offset = parentNode.scrollTop;
      } else {
        offset = el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;
      }

      // Here we make sure the element is visible as well as checking the offset
      if (offset < Number(this.props.threshold) && el && el.offsetParent !== null) {
        this.detachScrollListener();
        this.beforeScrollHeight = parentNode.scrollHeight;
        this.beforeScrollTop = parentNode.scrollTop;
        // Call loadMore after detachScrollListener to allow for non-async loadMore functions
        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore(this.pageLoaded += 1);
          this.loadMore = true;
        }
      }
    }
  }, {
    key: 'calculateOffset',
    value: function calculateOffset(el, scrollTop) {
      if (!el) {
        return 0;
      }

      return this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
    }
  }, {
    key: 'calculateTopPosition',
    value: function calculateTopPosition(el) {
      if (!el) {
        return 0;
      }
      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var renderProps = this.filterProps(this.props);

      var children = renderProps.children,
          element = renderProps.element,
          hasMore = renderProps.hasMore,
          initialLoad = renderProps.initialLoad,
          isReverse = renderProps.isReverse,
          loader = renderProps.loader,
          loadMore = renderProps.loadMore,
          pageStart = renderProps.pageStart,
          ref = renderProps.ref,
          threshold = renderProps.threshold,
          useCapture = renderProps.useCapture,
          useWindow = renderProps.useWindow,
          getScrollParent = renderProps.getScrollParent,
          props = _objectWithoutProperties(renderProps, ['children', 'element', 'hasMore', 'initialLoad', 'isReverse', 'loader', 'loadMore', 'pageStart', 'ref', 'threshold', 'useCapture', 'useWindow', 'getScrollParent']);

      props.ref = function (node) {
        _this2.scrollComponent = node;
        if (ref) {
          ref(node);
        }
      };

      var childrenArray = [children];
      if (hasMore) {
        if (loader) {
          isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
        } else if (this.defaultLoader) {
          isReverse ? childrenArray.unshift(this.defaultLoader) : childrenArray.push(this.defaultLoader);
        }
      }
      return _react2.default.createElement(element, props, childrenArray);
    }
  }]);

  return InfiniteScroll;
}(_react.Component);

InfiniteScroll.propTypes = {
  children: _propTypes2.default.node.isRequired,
  element: _propTypes2.default.node,
  hasMore: _propTypes2.default.bool,
  initialLoad: _propTypes2.default.bool,
  isReverse: _propTypes2.default.bool,
  loader: _propTypes2.default.node,
  loadMore: _propTypes2.default.func.isRequired,
  pageStart: _propTypes2.default.number,
  ref: _propTypes2.default.func,
  getScrollParent: _propTypes2.default.func,
  threshold: _propTypes2.default.number,
  useCapture: _propTypes2.default.bool,
  useWindow: _propTypes2.default.bool
};
InfiniteScroll.defaultProps = {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  ref: null,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  useCapture: false,
  loader: null,
  getScrollParent: null
};
exports.default = InfiniteScroll;
module.exports = exports['default'];


/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1528)


/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Config = {
	// 需求管理
	requirement: {
		addRequirement: "mutation {\n\t\taddRequirement\n\t\t{\n\t\t\tid\n\t\t\tnumber\n\t\t\tseq\n\t\t\ttitle\n\t\t\tcategory\n\t\t\tlevel\n\t\t\tdemandName\n\t\t\tdemandPhone\n\t\t\tdemandStation\n\t\t\tdescription\n\t\t\tstatus\n\t\t\ttoUserName\n\t\t\tuserName\n\t\t\tuserId\n\t\t\tcreateTime\n\t\t\tisSave\n\t\t\tattachments\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tfileName\n\t\t\t\tfileId\n\t\t\t\ttype\n\t\t\t\tsourceId\n\t\t\t\tfilePath\n\t\t\t}\n\t\t\tproduct\n\t\t}\n\t}", // 新增需求 返回Requirement

		saveRequirement: "mutation($type: Int, $requirement: InputRequirement) {\n\t\tsaveRequirement(type: $type, requirement: $requirement)\n\t\t{\n\t\t\tid\n\t\t\tnumber\n\t\t\tseq\n\t\t\ttitle\n\t\t\tcategory\n\t\t\tlevel\n\t\t\tdemandName\n\t\t\tdemandPhone\n\t\t\tdemandStation\n\t\t\tdescription\n\t\t\tstatus\n\t\t\ttoUserName\n\t\t\tuserName\n\t\t\tuserId\n\t\t\tcreateTime\n\t\t\tisSave\n\t\t\tattachments\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tfileName\n\t\t\t\tfileId\n\t\t\t\ttype\n\t\t\t\tsourceId\n\t\t\t\tfilePath\n\t\t\t}\n\t\t\tproduct\n\t\t}\n\t}", // 需求保存 草稿和提交 [0,提交，1草稿]

		addAnalysis: "mutation($requirementId: String) {\n\t\taddAnalysis(requirementId: $requirementId)\n\t\t{\n\t\t\tid\n\t\t\ttoUserId\n\t\t\ttoUserName\n\t\t\tbsa\n\t\t\tnote\n\t\t\tstatus\n\t\t\trecord\n\t\t\tuserId\n\t\t\tuserName\n\t\t\tcreateTime\n\t\t\tisSave\n\t\t\trequirementId\n\t\t\tattachments\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tfileName\n\t\t\t\tfileId\n\t\t\t\ttype\n\t\t\t\tsourceId\n\t\t\t\tfilePath\n\t\t\t}\n\t\t}\n\t}", // 新增分析 返回Analysis

		saveAnalysis: "mutation($type: Int, $analysis: InputAnalysis) {\n\t\tsaveAnalysis(type: $type, analysis: $analysis)\n\t\t{\n\t\t\tid\n\t\t\ttoUserId\n\t\t\ttoUserName\n\t\t\tbsa\n\t\t\tnote\n\t\t\tstatus\n\t\t\trecord\n\t\t\tuserId\n\t\t\tuserName\n\t\t\tcreateTime\n\t\t\tisSave\n\t\t\trequirementId\n\t\t\tattachments\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tfileName\n\t\t\t\tfileId\n\t\t\t\ttype\n\t\t\t\tsourceId\n\t\t\t\tfilePath\n\t\t\t}\n\t\t}\n\t}", // 保存 草稿和提交 [0,提交，1草稿]

		addAttachment: "mutation($attachment: InputAttachment) {\n\t\taddAttachment(attachment: $attachment)\n\t\t{\n\t\t\tid\n\t\t\tfileName\n\t\t\tfileId\n\t\t\ttype\n\t\t\tsourceId\n\t\t\tfilePath\n\t\t}\n\t}", // 添加附件 Type 1,需求 2分析

		delAttachment: "mutation($id: String) {\n\t\tdelAttachment(id: $id)\n\t}", // 删除附件

		addAnalysisRelation: "mutation($requirementIds: [String], $analysisId: String, $relation: String) {\n\t\taddAnalysisRelation(requirementIds: $requirementIds, analysisId: $analysisId, relation: $relation)\n\t}", // 增加关联

		delAnalysisRelation: "mutation($id: String) {\n\t\tdelAnalysisRelation(id: $id)\n\t}", // 删除关联

		getAnalysisRelationPage: "query($analysisId: String, $pageIndex: Long, $pageSize: Long) {\n\t\tgetAnalysisRelationPage(analysisId: $analysisId, pageIndex: $pageIndex, pageSize: $pageSize)\n\t\t{\n\t\t\tbody\n\t\t\t{\n\t\t\t\trequirementId\n\t\t\t\ttitle\n\t\t\t\trelation\n\t\t\t\tid\n\t\t\t}\n\t\t\tpageIndex\n\t\t\tpageSize\n\t\t\ttotalCount\n\t\t\tpageCount\n\t\t}\n\t}", // 获取关联列表分页

		getAnalysis: "query($id: String) {\n\t\tgetAnalysis(id: $id)\n\t\t{\n\t\t\tid\n\t\t\ttoUserId\n\t\t\ttoUserName\n\t\t\tbsa\n\t\t\tnote\n\t\t\tstatus\n\t\t\trecord\n\t\t\tuserId\n\t\t\tuserName\n\t\t\tcreateTime\n\t\t\tisSave\n\t\t\trequirementId\n\t\t\tattachments\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tfileName\n\t\t\t\tfileId\n\t\t\t\ttype\n\t\t\t\tsourceId\n\t\t\t\tfilePath\n\t\t\t}\n\t\t}\n\t}", // 获取分析

		getAnalysisList: "query($requirementId: String) {\n\t\tgetAnalysisList(requirementId: $requirementId)\n\t\t\t{\n\t\t\tid\n\t\t\tname\n\t\t\tisSave\n\t\t}\n\t}", // 获取分析列表

		getLastAnalysisByRequirementId: "query($requirementId: String) {\n\t\tgetLastAnalysisByRequirementId(requirementId: $requirementId)\n\t\t{\n\t\t\tid\n\t\t\ttoUserId\n\t\t\ttoUserName\n\t\t\tbsa\n\t\t\tnote\n\t\t\tstatus\n\t\t\trecord\n\t\t\tuserId\n\t\t\tuserName\n\t\t\tcreateTime\n\t\t\tisSave\n\t\t\trequirementId\n\t\t\tattachments\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tfileName\n\t\t\t\tfileId\n\t\t\t\ttype\n\t\t\t\tsourceId\n\t\t\t\tfilePath\n\t\t\t}\n\t\t}\n\t}", // 获取最近一条分析

		getRequirement: "query($id: String) {\n\t\tgetRequirement(id: $id)\n\t\t{\n\t\t\tid\n\t\t\tnumber\n\t\t\tseq\n\t\t\ttitle\n\t\t\tcategory\n\t\t\tlevel\n\t\t\tdemandName\n\t\t\tdemandPhone\n\t\t\tdemandStation\n\t\t\tdescription\n\t\t\tstatus\n\t\t\ttoUserName\n\t\t\tuserName\n\t\t\tuserId\n\t\t\tcreateTime\n\t\t\tisSave\n\t\t\tattachments\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tfileName\n\t\t\t\tfileId\n\t\t\t\ttype\n\t\t\t\tsourceId\n\t\t\t\tfilePath\n\t\t\t}\n\t\t\tproduct\n\t\t}\n\t}", // 获取需求

		getRequirementPage: "query($all: Boolean, $text: String, $product: String, $status: [String], $pageIndex: Long, $pageSize: Long) {\n\t\tgetRequirementPage(all: $all, text: $text, product: $product, status: $status, pageIndex: $pageIndex, pageSize: $pageSize)\n\t\t{\n\t\t\tbody\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tnumber\n\t\t\t\tseq\n\t\t\t\ttitle\n\t\t\t\tcategory\n\t\t\t\t\tlevel\n\t\t\t\tdemandName\n\t\t\t\tdemandPhone\n\t\t\t\tdemandStation\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\ttoUserName\n\t\t\t\tuserName\n\t\t\t\tuserId\n\t\t\t\tcreateTime\n\t\t\t\tisSave\n\t\t\t\tattachments\n\t\t\t\t\t{\n\t\t\t\t\tid\n\t\t\t\t\tfileName\n\t\t\t\t\tfileId\n\t\t\t\t\ttype\n\t\t\t\t\tsourceId\n\t\t\t\t\tfilePath\n\t\t\t\t}\n\t\t\t\tproduct\n\t\t\t}\n\t\t\tpageIndex\n\t\t\tpageSize\n\t\t\ttotalCount\n\t\t\tpageCount\n\t\t}\n\t}", // 需求分页

		delRequirement: "mutation($requirementId: String) {\n\t\tdelRequirement(requirementId: $requirementId)\n\t}", // 只删草稿

		getRequirementHistoryPage: "query($text: String, $status: [String], $pageIndex: Long, $pageSize: Long) {\n\t\tgetRequirementHistoryPage(text: $text, status: $status, pageIndex: $pageIndex, pageSize: $pageSize)\n\t\t{\n\t\t\tbody\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tnumber\n\t\t\t\tseq\n\t\t\t\ttitle\n\t\t\t\tcategory\n\t\t\t\t\tlevel\n\t\t\t\tdemandName\n\t\t\t\tdemandPhone\n\t\t\t\tdemandStation\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\ttoUserName\n\t\t\t\tuserName\n\t\t\t\tuserId\n\t\t\t\tcreateTime\n\t\t\t\tisSave\n\t\t\t\tattachments\n\t\t\t\t\t{\n\t\t\t\t\tid\n\t\t\t\t\tfileName\n\t\t\t\t\tfileId\n\t\t\t\t\ttype\n\t\t\t\t\tsourceId\n\t\t\t\t\tfilePath\n\t\t\t\t}\n\t\t\t\tproduct\n\t\t\t}\n\t\t\tpageIndex\n\t\t\tpageSize\n\t\t\ttotalCount\n\t\t\tpageCount\n\t\t}\n\t}", // 获取我浏览的

		splitRequirement: "mutation($num: Int, $requirementId: String) {\n\t\tsplitRequirement(num: $num, requirementId: $requirementId)\n\t}", // 拆分需求

		finishRequirement: "mutation($requirementId: String) {\n\t\tfinishRequirement(requirementId: $requirementId)\n\t}", // 更改需求状态为已完成

		getSimilarityRequirementPage: "query($all: Boolean, $text: String, $word: String, $status: [String], $pageIndex: Long, $pageSize: Long) {\n\t\tgetSimilarityRequirementPage(all: $all, text: $text, word: $word, status: $status, pageIndex: $pageIndex, pageSize: $pageSize)\n\t\t{\n\t\t\tbody\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tnumber\n\t\t\t\tseq\n\t\t\t\ttitle\n\t\t\t\tcategory\n\t\t\t\t\tlevel\n\t\t\t\tdemandName\n\t\t\t\tdemandPhone\n\t\t\t\tdemandStation\n\t\t\t\tdescription\n\t\t\t\tstatus\n\t\t\t\ttoUserName\n\t\t\t\tuserName\n\t\t\t\tuserId\n\t\t\t\tcreateTime\n\t\t\t\tisSave\n\t\t\t\tattachments\n\t\t\t\t\t{\n\t\t\t\t\tid\n\t\t\t\t\tfileName\n\t\t\t\t\tfileId\n\t\t\t\t\ttype\n\t\t\t\t\tsourceId\n\t\t\t\t\tfilePath\n\t\t\t\t}\n\t\t\t\tproduct\n\t\t\t}\n\t\t\tpageIndex\n\t\t\tpageSize\n\t\t\ttotalCount\n\t\t\tpageCount\n\t\t}\n\t}", // 根据相似度进行需求分页

		getUserInfoListByRoleCode: "query($appId: String, $code: String, $pageIndex: Long, $pageSize: Long) {\n\t\tgetUserInfoListByRoleCode(appId: $appId, code: $code, pageIndex: $pageIndex, pageSize: $pageSize)\n\t\t{\n\t\t\tbody\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tnickname\n\t\t\t\trealname\n\t\t\t\tphone\n\t\t\t\temail\n\t\t\t\tgender\n\t\t\t\tavatar\n\t\t\t\tisActive\n\t\t\t\tauths\n\t\t\t\tstation\n\t\t\t\tcreadepartment\n\t\t\t}\n\t\t\tpageIndex\n\t\t\tpageSize\n\t\t\ttotalCount\n\t\t\tpageCount\n\t\t}\n\t}" // 根据角色code获取用户信息

	}
};
exports.default = Config;

/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArray = findInArray;
exports.isFunction = isFunction;
exports.isNum = isNum;
exports.int = int;
exports.dontSetMe = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array
/*: Array<any> | TouchList*/
, callback
/*: Function*/
)
/*: any*/
{
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func
/*: any*/
)
/*: boolean %checks*/
{
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num
/*: any*/
)
/*: boolean %checks*/
{
  return typeof num === 'number' && !isNaN(num);
}

function int(a
/*: string*/
)
/*: number*/
{
  return parseInt(a, 10);
}

function dontSetMe(props
/*: Object*/
, propName
/*: string*/
, componentName
/*: string*/
) {
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}

/***/ }),

/***/ 1781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 基于antd select组件封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * dangw@glodon.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


var Option = _antd.Select.Option;

var AsyncSelect = function (_React$Component) {
  _inherits(AsyncSelect, _React$Component);

  function AsyncSelect(props) {
    _classCallCheck(this, AsyncSelect);

    var _this = _possibleConstructorReturn(this, (AsyncSelect.__proto__ || Object.getPrototypeOf(AsyncSelect)).call(this, props));

    _this.handleChange = function (value, e) {
      if (value === undefined) return false;
      _this.setState({ value: value === undefined ? "" : value });
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value, e);
      }
    };

    _this.handleFocus = function () {
      fetch(_this.props.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          query: _this.props.query,
          variables: { "appId": "bocspace", "code": "bocspace.group", "pageIndex": 1, "pageSize": 100 }
        })
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var data = void 0;
        if (json.data.getUserInfoListByRoleCode == null) {
          data = Object.assign([]);
        } else {
          data = json.data.getUserInfoListByRoleCode.body;
        }
        if (_this.props.dataMapFunc) {
          data = data.map(function (item) {
            return _this.props.dataMapFunc(item);
          });
        }
        _this.setState({
          data: data
        });
      });
    };

    _this.state = {
      data: [],
      value: props.value || ''
    };
    return _this;
  }

  _createClass(AsyncSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps && this.props.value !== nextProps.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.url) {
        return;
      }
      this.handleFocus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.state.data.map(function (d, i) {
        return _react2.default.createElement(
          Option,
          { value: d.realname, key: _this2.props.type + i, val: d },
          d.realname
        );
      });

      return _react2.default.createElement(
        _antd.Select,
        {
          value: this.props.value,
          placeholder: this.props.placeholder,
          style: this.props.style,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.props.onBlur,
          disabled: this.props.disabled
        },
        options
      );
    }
  }]);

  return AsyncSelect;
}(_react2.default.Component);

exports.default = AsyncSelect;


AsyncSelect.propTypes = {
  style: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string, // 默认值
  url: _propTypes2.default.string,
  dataMapFunc: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};

/***/ }),

/***/ 1835:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.offsetXYFromParent = offsetXYFromParent;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTranslation = getTranslation;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.addUserSelectStyles = addUserSelectStyles;
exports.removeUserSelectStyles = removeUserSelectStyles;
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;

var _shims = __webpack_require__(1665);

var _getPrefix = _interopRequireWildcard(__webpack_require__(2227));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchesSelectorFunc = '';

function matchesSelector(el
/*: Node*/
, selector
/*: string*/
)
/*: boolean*/
{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, _shims.isFunction)(el[method]);
    });
  } // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable


  if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false; // $FlowIgnore: Doesn't think elements are indexable

  return el[matchesSelectorFunc](selector);
} // Works up the tree to the draggable itself attempting to match selector.


function matchesSelectorAndParentsTo(el
/*: Node*/
, selector
/*: string*/
, baseNode
/*: Node*/
)
/*: boolean*/
{
  var node = el;

  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions);

  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions);

  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims.int)(computedStyle.borderTopWidth);
  height += (0, _shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims.int)(computedStyle.borderLeftWidth);
  width += (0, _shims.int)(computedStyle.borderRightWidth);
  return width;
}

function innerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims.int)(computedStyle.paddingTop);
  height -= (0, _shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims.int)(computedStyle.paddingLeft);
  width -= (0, _shims.int)(computedStyle.paddingRight);
  return width;
} // Get from offsetParent


function offsetXYFromParent(evt
/*: {clientX: number, clientY: number}*/
, offsetParent
/*: HTMLElement*/
, scale
/*: number*/
)
/*: ControlPosition*/
{
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x,
    y: y
  };
}

function createCSSTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: Object*/
{
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default), translation);
}

function createSVGTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: string*/
{
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}

function getTranslation(_ref2, positionOffset
/*: PositionOffsetControlPosition*/
, unitSuffix
/*: string*/
)
/*: string*/
{
  var x = _ref2.x,
      y = _ref2.y;
  var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");

  if (positionOffset) {
    var defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }

  return translation;
}

function getTouch(e
/*: MouseTouchEvent*/
, identifier
/*: number*/
)
/*: ?{clientX: number, clientY: number}*/
{
  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e
/*: MouseTouchEvent*/
)
/*: ?number*/
{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
} // User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed


function addUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');

  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;

  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection'); // $FlowIgnore: IE

    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      var selection = (doc.defaultView || window).getSelection();

      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {// probably IE
  }
}

function addClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}

function removeClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
  }
}

/***/ }),

/***/ 1910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(2225),
    Draggable = _require.default,
    DraggableCore = _require.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = DraggableCore;

/***/ }),

/***/ 1911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (undefined) (_console = console).log.apply(_console, arguments);
}

/***/ }),

/***/ 1912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundPosition = getBoundPosition;
exports.snapToGrid = snapToGrid;
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.getControlPosition = getControlPosition;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;

var _shims = __webpack_require__(1665);

var _domFns = __webpack_require__(1835);

function getBoundPosition(draggable
/*: Draggable*/
, x
/*: number*/
, y
/*: number*/
)
/*: [number, number]*/
{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y]; // Clone new bounds

  var bounds = draggable.props.bounds;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode;

    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }

    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
    };
  } // Keep x and y below right and bottom limits...


  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom); // But above left and top limits.

  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}

function snapToGrid(grid
/*: [number, number]*/
, pendingX
/*: number*/
, pendingY
/*: number*/
)
/*: [number, number]*/
{
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
} // Get {x, y} positions from event.


function getControlPosition(e
/*: MouseTouchEvent*/
, touchIdentifier
/*: ?number*/
, draggableCore
/*: DraggableCore*/
)
/*: ?ControlPosition*/
{
  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch

  var node = findDOMNode(draggableCore); // User can provide an offsetParent if desired.

  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
} // Create an data object exposed by <DraggableCore>'s events


function createCoreData(draggable
/*: DraggableCore*/
, x
/*: number*/
, y
/*: number*/
)
/*: DraggableData*/
{
  var state = draggable.state;
  var isStart = !(0, _shims.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX,
      deltaY: y - state.lastY,
      lastX: state.lastX,
      lastY: state.lastY,
      x: x,
      y: y
    };
  }
} // Create an data exposed by <Draggable>'s events


function createDraggableData(draggable
/*: Draggable*/
, coreData
/*: DraggableData*/
)
/*: DraggableData*/
{
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
} // A lot faster than stringify/parse


function cloneBounds(bounds
/*: Bounds*/
)
/*: Bounds*/
{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable
/*: Draggable | DraggableCore*/
)
/*: HTMLElement*/
{
  var node = draggable.findDOMNode();

  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  } // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME


  return node;
}

/***/ }),

/***/ 1913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDraggable = __webpack_require__(1910);

var _utils = __webpack_require__(2230);

var _propTypes = __webpack_require__(1914);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Resizable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Resizable, _React$Component);

  function Resizable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", undefined);

    _defineProperty(_assertThisInitialized(_this), "lastHandleRect", null);

    _defineProperty(_assertThisInitialized(_this), "slack", null);

    return _this;
  }

  var _proto = Resizable.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.resetData();
  };

  _proto.lockAspectRatio = function lockAspectRatio(width, height, aspectRatio) {
    height = width / aspectRatio;
    width = height * aspectRatio;
    return [width, height];
  };

  _proto.resetData = function resetData() {
    this.lastHandleRect = this.slack = null;
  } // Clamp width and height within provided constraints
  ;

  _proto.runConstraints = function runConstraints(width, height) {
    var _ref = [this.props.minConstraints, this.props.maxConstraints],
        min = _ref[0],
        max = _ref[1];
    if (!min && !max) return [width, height]; // If constraining to min and max, we need to also fit width and height to aspect ratio.

    if (this.props.lockAspectRatio) {
      var resizingHorizontally = height === this.props.height;

      if (resizingHorizontally) {
        var ratio = this.props.width / this.props.height;
        height = width / ratio;
        width = height * ratio;
      } else {
        // Take into account vertical resize with N/S handles on locked aspect
        // ratio. Calculate the change height-first, instead of width-first
        var _ratio = this.props.height / this.props.width;

        width = height / _ratio;
        height = width * _ratio;
      }
    }

    var oldW = width,
        oldH = height; // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.

    var _ref2 = this.slack || [0, 0],
        slackW = _ref2[0],
        slackH = _ref2[1];

    width += slackW;
    height += slackH;

    if (min) {
      width = Math.max(min[0], width);
      height = Math.max(min[1], height);
    }

    if (max) {
      width = Math.min(max[0], width);
      height = Math.min(max[1], height);
    } // If the width or height changed, we must have introduced some slack. Record it for the next iteration.


    this.slack = [slackW + (oldW - width), slackH + (oldH - height)];
    return [width, height];
  }
  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */
  ;

  _proto.resizeHandler = function resizeHandler(handlerName, axis) {
    var _this2 = this;

    return function (e, _ref3) {
      var node = _ref3.node,
          deltaX = _ref3.deltaX,
          deltaY = _ref3.deltaY;
      // Reset data in case it was left over somehow (should not be possible)
      if (handlerName === 'onResizeStart') _this2.resetData(); // Axis restrictions

      var canDragX = (_this2.props.axis === 'both' || _this2.props.axis === 'x') && axis !== 'n' && axis !== 's';
      var canDragY = (_this2.props.axis === 'both' || _this2.props.axis === 'y') && axis !== 'e' && axis !== 'w'; // No dragging possible.

      if (!canDragX && !canDragY) return; // Decompose axis for later use

      var axisV = axis[0];
      var axisH = axis[axis.length - 1]; // intentionally not axis[1], so that this catches axis === 'w' for example
      // Track the element being dragged to account for changes in position.
      // If a handle's position is changed between callbacks, we need to factor this in to the next callback.
      // Failure to do so will cause the element to "skip" when resized upwards or leftwards.

      var handleRect = node.getBoundingClientRect();

      if (_this2.lastHandleRect != null) {
        // If the handle has repositioned on either axis since last render,
        // we need to increase our callback values by this much.
        // Only checking 'n', 'w' since resizing by 's', 'w' won't affect the overall position on page,
        if (axisH === 'w') {
          var deltaLeftSinceLast = handleRect.left - _this2.lastHandleRect.left;
          deltaX += deltaLeftSinceLast;
        }

        if (axisV === 'n') {
          var deltaTopSinceLast = handleRect.top - _this2.lastHandleRect.top;
          deltaY += deltaTopSinceLast;
        }
      } // Storage of last rect so we know how much it has really moved.


      _this2.lastHandleRect = handleRect; // Reverse delta if using top or left drag handles.

      if (axisH === 'w') deltaX = -deltaX;
      if (axisV === 'n') deltaY = -deltaY; // Update w/h by the deltas. Also factor in transformScale.

      var width = _this2.props.width + (canDragX ? deltaX / _this2.props.transformScale : 0);
      var height = _this2.props.height + (canDragY ? deltaY / _this2.props.transformScale : 0); // Run user-provided constraints.

      var _this2$runConstraints = _this2.runConstraints(width, height);

      width = _this2$runConstraints[0];
      height = _this2$runConstraints[1];
      var dimensionsChanged = width !== _this2.props.width || height !== _this2.props.height; // Call user-supplied callback if present.

      var cb = typeof _this2.props[handlerName] === 'function' ? _this2.props[handlerName] : null; // Don't call 'onResize' if dimensions haven't changed.

      var shouldSkipCb = handlerName === 'onResize' && !dimensionsChanged;

      if (cb && !shouldSkipCb) {
        if (typeof e.persist === 'function') e.persist();
        cb(e, {
          node: node,
          size: {
            width: width,
            height: height
          },
          handle: axis
        });
      } // Reset internal data


      if (handlerName === 'onResizeStop') _this2.resetData();
    };
  };

  _proto.renderResizeHandle = function renderResizeHandle(resizeHandleAxis) {
    var handle = this.props.handle;

    if (handle) {
      if (typeof handle === 'function') {
        return handle(resizeHandleAxis);
      }

      return handle;
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "react-resizable-handle react-resizable-handle-" + resizeHandleAxis
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    // Pass along only props not meant for the `<Resizable>`.`
    // eslint-disable-next-line no-unused-vars
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        draggableOpts = _this$props.draggableOpts,
        width = _this$props.width,
        height = _this$props.height,
        handle = _this$props.handle,
        handleSize = _this$props.handleSize,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        onResize = _this$props.onResize,
        onResizeStop = _this$props.onResizeStop,
        onResizeStart = _this$props.onResizeStart,
        resizeHandles = _this$props.resizeHandles,
        transformScale = _this$props.transformScale,
        p = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"]); // What we're doing here is getting the child of this element, and cloning it with this element's props.
    // We are then defining its children as:
    // Its original children (resizable's child's children), and
    // One or more draggable handles.


    return (0, _utils.cloneElement)(children, _objectSpread(_objectSpread({}, p), {}, {
      className: (className ? className + " " : '') + "react-resizable",
      children: [].concat(children.props.children, resizeHandles.map(function (handleAxis) {
        return /*#__PURE__*/_react.default.createElement(_reactDraggable.DraggableCore, _extends({}, draggableOpts, {
          key: "resizableHandle-" + handleAxis,
          onStop: _this3.resizeHandler('onResizeStop', handleAxis),
          onStart: _this3.resizeHandler('onResizeStart', handleAxis),
          onDrag: _this3.resizeHandler('onResize', handleAxis)
        }), _this3.renderResizeHandle(handleAxis));
      }))
    }));
  };

  return Resizable;
}(_react.default.Component);

exports.default = Resizable;

_defineProperty(Resizable, "propTypes", _propTypes.resizableProps);

_defineProperty(Resizable, "defaultProps", {
  handleSize: [20, 20],
  lockAspectRatio: false,
  axis: 'both',
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity],
  resizeHandles: ['se'],
  transformScale: 1
});

/***/ }),

/***/ 1914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resizableProps = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(20));

var _reactDraggable = __webpack_require__(1910);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizableProps = {
  /*
  * Restricts resizing to a particular axis (default: 'both')
  * 'both' - allows resizing by width or height
  * 'x' - only allows the width to be changed
  * 'y' - only allows the height to be changed
  * 'none' - disables resizing altogether
  * */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
  className: _propTypes.default.string,

  /*
  * Require that one and only one child be present.
  * */
  children: _propTypes.default.element.isRequired,

  /*
  * These will be passed wholesale to react-draggable's DraggableCore
  * */
  draggableOpts: _propTypes.default.shape({
    allowAnyClick: _propTypes.default.bool,
    cancel: _propTypes.default.string,
    children: _propTypes.default.node,
    disabled: _propTypes.default.bool,
    enableUserSelectHack: _propTypes.default.bool,
    offsetParent: _propTypes.default.node,
    grid: _propTypes.default.arrayOf(_propTypes.default.number),
    handle: _propTypes.default.string,
    nodeRef: _propTypes.default.object,
    onStart: _propTypes.default.func,
    onDrag: _propTypes.default.func,
    onStop: _propTypes.default.func,
    onMouseDown: _propTypes.default.func,
    scale: _propTypes.default.number
  }),

  /*
  * Initial height
  * */
  height: _propTypes.default.number.isRequired,

  /*
  * Customize cursor resize handle
  * */
  handle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),

  /*
  * If you change this, be sure to update your css
  * */
  handleSize: _propTypes.default.arrayOf(_propTypes.default.number),
  lockAspectRatio: _propTypes.default.bool,

  /*
  * Max X & Y measure
  * */
  maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  /*
  * Min X & Y measure
  * */
  minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  /*
  * Called on stop resize event
  * */
  onResizeStop: _propTypes.default.func,

  /*
  * Called on start resize event
  * */
  onResizeStart: _propTypes.default.func,

  /*
  * Called on resize event
  * */
  onResize: _propTypes.default.func,

  /*
  * Defines which resize handles should be rendered (default: 'se')
  * 's' - South handle (bottom-center)
  * 'w' - West handle (left-center)
  * 'e' - East handle (right-center)
  * 'n' - North handle (top-center)
  * 'sw' - Southwest handle (bottom-left)
  * 'nw' - Northwest handle (top-left)
  * 'se' - Southeast handle (bottom-right)
  * 'ne' - Northeast handle (top-center)
  * */
  resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),

  /*
  * If `transform: scale(n)` is set on the parent, this should be set to `n`.
  * */
  transformScale: _propTypes.default.number,

  /*
   * Initial width
   */
  width: _propTypes.default.number.isRequired
};
exports.resizableProps = resizableProps;

/***/ }),

/***/ 2062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 需求管理 新增组件
            * dangw@glodon.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _requirement = __webpack_require__(1661);

var _requirement2 = _interopRequireDefault(_requirement);

var _RequirementRead = __webpack_require__(2064);

var _RequirementRead2 = _interopRequireDefault(_RequirementRead);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import GlobalStore from "@/store/GlobalStore";

var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea;

var RequirementAdd = (0, _mobxReact.observer)(_class = function (_Component) {
	_inherits(RequirementAdd, _Component);

	function RequirementAdd(props) {
		_classCallCheck(this, RequirementAdd);

		var _this2 = _possibleConstructorReturn(this, (RequirementAdd.__proto__ || Object.getPrototypeOf(RequirementAdd)).call(this, props));

		_this2.handleChange = function (type, e) {
			_this2.store.addFields[type] = e.target.value;
			if (type == 'title') {
				_this2.store.word = e.target.value;
				_this2.props.getSimilarityRequirementPage();
			}
		};

		_this2.onChange = function (type, value) {
			_this2.store.addFields[type] = value;
		};

		_this2.handleBlur = function () {
			var requirement = JSON.parse(JSON.stringify(_this2.store.addFields));
			// 如果标题为空，不自动保存
			if (requirement.title == "" || requirement.title == null) {
				return false;
			}
			delete requirement.attachments;
			var param = {
				type: 1,
				requirement: requirement
			};
			_this2.store.saveRequirement(param);
		};

		_this2.onClick = function () {
			var requirement = JSON.parse(JSON.stringify(_this2.store.addFields));
			var str = "";
			if (requirement.title == "" || requirement.title == null) {
				str += "标题是必输项 ";
				_antd.message.warn(str);
				return false;
			}
			delete requirement.attachments;
			var param = {
				type: 0,
				requirement: requirement
			};
			_this2.store.saveRequirement(param).then(function (res) {
				var data = res;
				if (data == undefined) {
					_antd.message.error('提交失败！');
				} else {
					_antd.message.success("提交成功！");
					// 清空默认值
					_this2.store.addFields = Object.assign({}, {
						"title": "",
						"category": [],
						"level": "",
						"product": "",
						"demandName": "",
						"demandPhone": "",
						"demandStation": "",
						"description": "",
						"attachments": [],
						"id": ""
					});
					_this2.props.getTableData();
				}
			});
		};

		_this2.fileChange = function (info) {
			var status = info.file.status;
			if (status === 'done') {
				// 上传成功
				_antd.message.success(info.file.name + '\u4E0A\u4F20\u6210\u529F\uFF01');
			} else if (status === 'error') {
				_antd.message.error(info.file.name + '\u4E0A\u4F20\u5931\u8D25\uFF01');
			} else if (status === 'removed') {
				console.log('2');
			}

			var fileList = [].concat(_toConsumableArray(info.fileList));
			fileList = JSON.parse(JSON.stringify(fileList));
			fileList = fileList.filter(function (file) {
				if (file.status === 'error') {
					return false;
				}
				return true;
			});
			fileList = fileList.map(function (file) {
				if (file.response) {
					file.url = file.response.body[0].fileURL;
				}
				return file;
			});
			fileList = fileList.filter(function (file) {
				if (file.response) {
					return file.response.status === 'ok';
				}
				return true;
			});
			_this2.store.addFields.attachments = Object.assign([], [].concat(_toConsumableArray(fileList)));
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			levelData: ['普通', '紧急', '非常紧急'], // 优先级
			fileList: mobx.toJS(_this2.store.addFields.attachments), // 附件
			productData: ['标箱', '展厅', '劳务箱', '大临', '其它'] // 产品
		};
		return _this2;
	}

	_createClass(RequirementAdd, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 保存草稿


		// 提交


		// 文件变化

	}, {
		key: 'render',
		value: function render() {
			var _this = this;
			var _this$state = _this.state,
			    levelData = _this$state.levelData,
			    productData = _this$state.productData;

			var formItemLayout1 = {
				labelCol: { span: 2 },
				wrapperCol: { span: 22 }
			};
			var options = [{
				value: 'bug',
				label: 'bug',
				children: null
			}, {
				value: '需求',
				label: '需求',
				children: [{
					value: '房体',
					label: '房体'
				}, {
					value: '配套',
					label: '配套'
				}, {
					value: '软件',
					label: '软件'
				}, {
					value: '创意',
					label: '创意'
				}]
			}, {
				value: '优化',
				label: '优化',
				children: [{
					value: '房体',
					label: '房体'
				}, {
					value: '配套',
					label: '配套'
				}, {
					value: '软件',
					label: '软件'
				}, {
					value: '创意',
					label: '创意'
				}]
			}];
			var props = {
				data: {
					type: 1, // 需求
					sourceId: _this.store.addFields.id // 需求的id
				},
				name: 'file',
				multiple: true,
				action: _config2.default.management.multiUpload,
				onChange: _this.fileChange,
				onRemove: function onRemove(file) {
					return new Promise(function (resolve, reject) {
						(0, _api.requestPost)('delAttachment', _config2.default.management.delAttachment, _requirement2.default.requirement.delAttachment, { id: file.response.body[0].id }).then(function (res) {
							if (res == true) {
								_antd.message.success("删除成功！");
								resolve(res);
							} else {
								_antd.message.error('删除失败！');
								resolve(res);
							}
						});
					});
				},
				fileList: mobx.toJS(this.store.addFields.attachments)
			};
			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 8 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 16 }
				}
			};
			var getFieldDecorator = this.props.form.getFieldDecorator;

			return _react2.default.createElement(
				'div',
				{ className: this.props.visible ? "container-fluid pr" : "hidden" },
				_react2.default.createElement(
					_antd.Form,
					{ layout: 'inline' },
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w', label: '\u9700\u6C42\u6807\u9898' }, formItemLayout),
								getFieldDecorator('email', {
									rules: [{
										required: true,
										message: '请输入需求标题'
									}]
								})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u9700\u6C42\u6807\u9898...',
									onBlur: this.handleBlur,
									onChange: this.handleChange.bind(this, 'title'),
									value: this.store.addFields.title
								}))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w', label: '\u4EA7\u54C1' }, formItemLayout),
								_react2.default.createElement(
									_antd.Select,
									{
										placeholder: '\u8BF7\u9009\u62E9...',
										onChange: this.onChange.bind(this, 'product'),
										onBlur: this.handleBlur,
										style: { width: '100%' },
										value: this.store.addFields.product
									},
									productData.map(function (item, index) {
										return _react2.default.createElement(
											Option,
											{ key: 'product' + index, value: item },
											item
										);
									})
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w', label: '分类' }, formItemLayout),
								_react2.default.createElement(_antd.Cascader, {
									placeholder: '\u8BF7\u9009\u62E9...',
									options: options,
									expandTrigger: 'click',
									onBlur: this.handleBlur,
									onChange: this.onChange.bind(this, 'category'),
									value: this.store.addFields.category
								})
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w', label: '\u4F18\u5148\u7EA7' }, formItemLayout),
								_react2.default.createElement(
									_antd.Select,
									{
										placeholder: '\u8BF7\u9009\u62E9...',
										onChange: this.onChange.bind(this, 'level'),
										onBlur: this.handleBlur,
										style: { width: '100%' },
										value: this.store.addFields.level
									},
									levelData.map(function (item, index) {
										return _react2.default.createElement(
											Option,
											{ key: 'level' + index, value: item },
											item
										);
									})
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w', label: '\u53CD\u9988\u4EBA' }, formItemLayout),
								_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u53CD\u9988\u4EBA',
									onBlur: this.handleBlur,
									onChange: this.handleChange.bind(this, 'demandName'),
									value: this.store.addFields.demandName
								})
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w', label: '\u53CD\u9988\u4EBA\u624B\u673A' }, formItemLayout),
								_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u53CD\u9988\u4EBA\u624B\u673A',
									onBlur: this.handleBlur,
									onChange: this.handleChange.bind(this, 'demandPhone'),
									value: this.store.addFields.demandPhone
								})
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w', label: '\u53CD\u9988\u4EBA\u5C97\u4F4D' }, formItemLayout),
								_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u53CD\u9988\u4EBA\u5C97\u4F4D',
									onBlur: this.handleBlur,
									onChange: this.handleChange.bind(this, 'demandStation'),
									value: this.store.addFields.demandStation
								})
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w require-des', label: '\u63CF\u8FF0' }, formItemLayout1),
								_react2.default.createElement(TextArea, {
									placeholder: '\u8BF7\u8BE6\u7EC6\u63CF\u8FF0\u9700\u6C42',
									onBlur: this.handleBlur,
									id: 'box',
									onChange: this.handleChange.bind(this, 'description'),
									value: this.store.addFields.description,
									rows: 4 })
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({ className: 'w require-des', label: '\u9644\u4EF6' }, formItemLayout1),
								_react2.default.createElement(
									_antd.Upload.Dragger,
									props,
									_react2.default.createElement(
										'p',
										{ className: 'ant-upload-drag-icon' },
										_react2.default.createElement('span', { className: 'require-upload' }),
										_react2.default.createElement('span', { style: { color: '#8C8C8C' } }),
										'\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\u6216',
										_react2.default.createElement(
											'span',
											{
												style: { color: '#268DFF', verticalAlign: 'top' } },
											'\u6D4F\u89C8'
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'require-addSub' },
					_react2.default.createElement(
						'span',
						{ className: 'title', style: {
								color: '#268DFF', fontSize: '13px'
							} },
						'\u63D0\u4EA4\u540E\u4E0D\u53EF\u4FEE\u6539\uFF0C\u8BF7\u786E\u8BA4\u540E\u63D0\u4EA4'
					),
					_react2.default.createElement(
						_antd.Button,
						{ type: 'primary', className: 'mr25', onClick: this.onClick },
						'\u63D0\u4EA4'
					)
				),
				_react2.default.createElement(_RequirementRead2.default, {
					store: this.store
				})
			);
		}
	}]);

	return RequirementAdd;
}(_react.Component)) || _class;

var WrappedRegistrationForm = _antd.Form.create({})(RequirementAdd);
exports.default = WrappedRegistrationForm;

/***/ }),

/***/ 2063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 需求管理 编辑组件
            * dangw@glodon.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _api = __webpack_require__(30);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _requirement = __webpack_require__(1661);

var _requirement2 = _interopRequireDefault(_requirement);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _GlobalStore = __webpack_require__(153);

var _GlobalStore2 = _interopRequireDefault(_GlobalStore);

var _AsyncSelectOld = __webpack_require__(1781);

var _AsyncSelectOld2 = _interopRequireDefault(_AsyncSelectOld);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea;

var RequirementEdit = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(RequirementEdit, _Component);

  function RequirementEdit(props) {
    var _this3 = this;

    _classCallCheck(this, RequirementEdit);

    var _this2 = _possibleConstructorReturn(this, (RequirementEdit.__proto__ || Object.getPrototypeOf(RequirementEdit)).call(this, props));

    _this2.handleChange = function (type, e) {
      //console.log(type, e.target.value)
      _this2.store.analysisFields[type] = e.target.value;
    };

    _this2.onSelChange = function (type, value) {
      //console.log(value, '11')
      _this2.store.analysisFields[type] = value;
      //console.log(this.store.analysisFields[type], '000')
    };

    _this2.handleBlur = function () {
      var requirement = JSON.parse(JSON.stringify(_this2.store.analysisFields));
      // 如果标题为空，不自动保存
      if (requirement.title == "" || requirement.title == null) {
        return false;
      }
      delete requirement.attachments;
      var param = {
        type: 1,
        analysis: requirement
      };
      _this2.store.saveAnalysis(param);
    };

    _this2.onClick = function (callback) {
      var requirement = JSON.parse(JSON.stringify(_this2.store.analysisFields));
      console.log(requirement, 'requirement');
      /*let str = ""
      if (requirement.title == ""||requirement.title==null) {
        str += "标题是必输项 "
        message.warn(str);
        return false;
      }*/
      delete requirement.attachments;
      var param = {
        type: 0,
        analysis: requirement
      };
      _this2.store.saveAnalysis(param).then(function (res) {
        var data = res;
        if (data == undefined) {
          _antd.message.error('提交失败！');
        } else {
          _antd.message.success("提交成功！");
          // 提交成功之后，提交按钮变成已完成
          _this2.store.isSave = true; // 当前分析变为已提交状态
          if (typeof callback == "function") callback();
        }
      });
    };

    _this2.onNextClick = function (e) {
      e.preventDefault();
      var _this = _this2;
      _this.onClick(function () {
        _this.props.handleNext();
      });
    };

    _this2.checkList = function (item) {
      if (_this2.store.isSave == false) {
        _antd.message.warn("请先保存本次分析！");
        return false;
      }

      _this2.store.anActive = item.id;
      _this2.store.isSave = item.isSave;

      (0, _api.requestPost)('getAnalysis', _config2.default.management.getAnalysis, _requirement2.default.requirement.getAnalysis, {
        id: item.id
      }).then(function (res) {
        var data = res;
        _this2.store.analysisFields = Object.assign({}, {
          "id": data.id,
          "toUserId": data.toUserId,
          "toUserName": data.toUserName,
          "bsa": data.bsa,
          "note": data.note,
          "status": data.status,
          "record": data.record,
          "userId": data.userId,
          "userName": data.userName,
          "createTime": data.createTime,
          "isSave": data.isSave,
          "requirementId": data.requirementId,
          "attachments": data.attachments !== null ? data.attachments.map(function (item, index) {
            return Object.assign(item, {
              'uid': item.id,
              'name': item.fileName,
              'status': 'done',
              'url': item.filePath
            });
          }) : []
        }); // 分析字段

        //  获取关联
        (0, _api.requestPost)('getAnalysisRelationPage', _config2.default.management.getAnalysisRelationPage, _requirement2.default.requirement.getAnalysisRelationPage, {
          analysisId: _this2.store.anActive, pageIndex: 1, pageSize: 50
        }).then(function (res) {
          _this2.store.lisTable = Object.assign([], res.body);
        });
      });
    };

    _this2.handleOk = function () {
      (0, _api.requestPost)('addAnalysisRelation', _config2.default.management.addAnalysisRelation, _requirement2.default.requirement.addAnalysisRelation, {
        requirementIds: _this2.state.selectedRows.map(function (item) {
          return item.id;
        }),
        analysisId: _this2.store.anActive,
        relation: _this2.state.relation
      }).then(function (res) {
        _antd.message.success("关联成功！");
        _this2.setState({
          selectedRowKeys: [],
          selectedRows: [],
          relation: '',
          rolesModal: false
        }, function () {
          // 已列表
          (0, _api.requestPost)('getAnalysisRelationPage', _config2.default.management.getAnalysisRelationPage, _requirement2.default.requirement.getAnalysisRelationPage, {
            analysisId: _this2.store.anActive, pageIndex: 1, pageSize: 50
          }).then(function (res) {
            _this2.store.lisTable = Object.assign([], res.body);
          });
        });
      });
    };

    _this2.handleRouls = function () {
      _this2.setState({
        rolesModal: true
      }, function () {
        _this2.store.rolesPageIndex = 1;
        _this2.store.rolesPageSize = 20;
        _this2.getTableData();
      });
    };

    _this2.getTableData = function () {
      (0, _api.requestPost)('getRequirementHistoryPage', _config2.default.management.getRequirementHistoryPage, _requirement2.default.requirement.getRequirementHistoryPage, {
        text: _this2.store.text,
        status: mobx.toJS(_this2.store.status),
        pageIndex: _this2.store.rolesPageIndex,
        pageSize: _this2.store.rolesPageSize
      }).then(function (res) {
        _this2.store.rolesTable = Object.assign([], data.body);
        _this2.store.rolesPageIndex = data.pageIndex;
        _this2.store.rolesPageSize = data.pageSize;
        _this2.store.rolesTotalCount = data.totalCount;
      });
    };

    _this2.handleCancel = function () {
      _this2.setState({
        rolesModal: false,
        selectedRowKeys: [],
        selectedRows: [],
        relation: ''
      });
    };

    _this2.showSizeChange = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.store.rolesPageIndex = 1;
                _this2.store.rolesPageSize = pageSize;
                _this2.getTableData();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this2.onChange = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.store.rolesPageIndex = pageNumber;
                _this2.getTableData();

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this2.handSelect = function (selectedRowKeys, selectedRows) {
      _this2.setState({
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      });
    };

    _this2.onSelect = function (value) {
      _this2.setState({
        relation: value
      });
    };

    _this2.cancel = function () {};

    _this2.handSplit = function () {
      (0, _api.requestPost)('splitRequirement', _config2.default.management.splitRequirement, _requirement2.default.requirement.splitRequirement, {
        num: _this2.store.num, requirementId: _this2.store.requirementId
      }).then(function (res) {
        if (res == true) {
          _antd.message.success("拆分成功！");
          _this2.props.getTableData();
        } else {
          _antd.message.error("拆分失败！");
        }
      });
    };

    _this2.handInput = function (e) {
      _this2.store.num = e.target.value;
    };

    _this2.confirm = function (id) {
      (0, _api.requestPost)('delAnalysisRelation', _config2.default.management.delAnalysisRelation, _requirement2.default.requirement.delAnalysisRelation, {
        id: id
      }).then(function (res) {
        if (res == true) {
          _antd.message.success('取消链接成功！');
          (0, _api.requestPost)('getAnalysisRelationPage', _config2.default.management.getAnalysisRelationPage, _requirement2.default.requirement.getAnalysisRelationPage, {
            analysisId: _this2.store.anActive, pageIndex: 1, pageSize: 50
          }).then(function (res) {
            _this2.store.lisTable = Object.assign([], res.body);
          });
        } else {
          _antd.message.error('取消链接失败！');
        }
      });
    };

    _this2.handleAdd = function () {
      (0, _api.requestPost)('addAnalysis', _config2.default.management.addAnalysis, _requirement2.default.requirement.addAnalysis, {
        requirementId: _this2.store.requirementId
      }).then(function (res) {
        var data = res;
        _this2.store.anActive = data.id; // 当前默认分析id
        _this2.store.isSave = data.isSave; // 当前默认分析是否保存
        _this2.store.analysisFields = Object.assign({}, {
          "id": data.id,
          "toUserId": data.toUserId,
          "toUserName": data.toUserName,
          "bsa": data.bsa,
          "note": data.note,
          "status": data.status,
          "record": data.record,
          "userId": data.userId,
          "userName": data.userName,
          "createTime": data.createTime,
          "isSave": data.isSave,
          "requirementId": data.requirementId,
          "attachments": data.attachments !== null ? data.attachments.map(function (item, index) {
            return Object.assign(item, {
              'uid': item.id,
              'name': item.fileName,
              'status': 'done',
              'url': item.filePath
            });
          }) : []
        }); // 分析字段

        //  获取关联
        (0, _api.requestPost)('getAnalysisRelationPage', _config2.default.management.getAnalysisRelationPage, _requirement2.default.requirement.getAnalysisRelationPage, {
          analysisId: _this2.store.anActive, pageIndex: 1, pageSize: 50
        }).then(function (res) {
          _this2.store.lisTable = Object.assign([], res.body);
        });

        //成功获取分析列表
        (0, _api.requestPost)('getAnalysisList', _config2.default.management.getAnalysisList, _requirement2.default.requirement.getAnalysisList, { requirementId: _this2.store.requirementId }).then(function (res) {
          _this2.store.analysisList = Object.assign([], res);
        });
      });
    };

    _this2.onFinishRequirement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              (0, _api.requestPost)('finishRequirement', _config2.default.management.finishRequirement, _requirement2.default.requirement.finishRequirement, {
                requirementId: _this2.store.requirementId
              }).then(function (res) {
                _antd.message.success('更改需求状态为已完成！');
                _this2.store.statusActive = "已完成";
              });

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }));

    _this2.fileChange = function (info) {
      var status = info.file.status;
      if (status === 'done') {
        // 上传成功
        _antd.message.success(info.file.name + '\u4E0A\u4F20\u6210\u529F\uFF01');
      } else if (status === 'error') {
        _antd.message.error(info.file.name + '\u4E0A\u4F20\u5931\u8D25\uFF01');
      } else if (status === 'removed') {}
      var fileList = [].concat(_toConsumableArray(info.fileList));
      fileList = JSON.parse(JSON.stringify(fileList));
      fileList = fileList.filter(function (file) {
        if (file.status === 'error') {
          return false;
        }
        return true;
      });
      fileList = fileList.map(function (file) {
        if (file.response) {
          file.url = file.response.body[0].fileURL;
        }
        return file;
      });
      fileList = fileList.filter(function (file) {
        if (file.response) {
          return file.response.status === 'ok';
        }
        return true;
      });
      _this2.store.analysisFields.attachments = Object.assign([], [].concat(_toConsumableArray(fileList)));
    };

    _this2.store = _this2.props.store;
    _this2.state = {
      levelData: ['受理', '不考虑'], // 结果
      bsaData: ['B', 'S', 'A'], // BSA
      rolesModal: false, // 关联
      rolesData: ['重复于', '依赖于', '属于'], //
      selectedRowKeys: [], // 多选
      selectedRows: [], // 选项
      relation: '' //关系
    };
    return _this2;
  }

  _createClass(RequirementEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}

    // 保存草稿


    // 提交


    // 提交并进入下一条


    // 切换分析列表


    // 关联链接


    // 新增关联


    // 获取关联列表


    // 多选


    // 拆分


    // 取消连接


    // 新增分析


    // 点击已完成


    // 文件变化

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          levelData = _state.levelData,
          bsaData = _state.bsaData,
          rolesModal = _state.rolesModal,
          rolesData = _state.rolesData,
          selectedRows = _state.selectedRows;

      var formItemLayout = null;
      var formItemLayout1 = {
        labelCol: { span: 1 },
        wrapperCol: { span: 23 }
      };
      var formItemLayout2 = {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 }
      };
      var columns = [{
        title: '需求',
        dataIndex: 'title',
        key: 'title'
      }];
      var rowSelection = {
        onChange: function onChange(selectedRowKeys, selectedRows) {
          _this4.handSelect(selectedRowKeys, selectedRows);
        },
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            name: record.name
          };
        }
      };
      var props = {
        data: {
          type: 2, // 分析
          sourceId: this.store.anActive // 分析的id
        },
        name: 'file',
        multiple: true,
        action: _config2.default.management.multiUpload,
        onChange: this.fileChange,
        onRemove: function onRemove(file) {
          return new Promise(function (resolve, reject) {
            (0, _api.requestPost)('delAttachment', _config2.default.management.delAttachment, _requirement2.default.requirement.delAttachment, { id: file.response.body[0].id }).then(function (res) {
              if (res == true) {
                _antd.message.success("删除成功！");
                resolve(res);
              } else {
                _antd.message.error('删除失败！');
                resolve(res);
              }
            });
          });
        },
        fileList: mobx.toJS(this.store.analysisFields.attachments)
      };

      return _react2.default.createElement(
        'div',
        { className: this.props.visible ? "container-fluid pb100" : "hidden" },
        _react2.default.createElement(
          'div',
          { className: 'analysis-head' },
          _react2.default.createElement(
            'div',
            { className: 'analysis-title' },
            this.store.editFields.number
          ),
          _react2.default.createElement(
            _antd.Row,
            null,
            _react2.default.createElement(
              _antd.Col,
              { span: 12, className: 'analysis-desc' },
              this.store.editFields.title
            ),
            _react2.default.createElement(
              _antd.Col,
              { span: 12, className: _GlobalStore2.default.requirementAnalysis ? "tr" : "hidden" },
              _react2.default.createElement(
                'div',
                { style: { marginLeft: '16px' } },
                _react2.default.createElement(
                  'span',
                  { className: 'analysis-title' },
                  '\u62C6\u5206\u6210'
                ),
                _react2.default.createElement(_antd.Input, {
                  onChange: this.handInput,
                  style: { width: '32px', margin: '0 8px' } }),
                _react2.default.createElement(
                  'span',
                  { className: 'analysis-title mr10' },
                  '\u4E2A'
                ),
                _react2.default.createElement(
                  _antd.Button,
                  {
                    onClick: this.handSplit,
                    type: 'primary', ghost: true },
                  '\u6267\u884C'
                )
              )
            )
          ),
          _react2.default.createElement(
            _antd.Row,
            { className: 'analysis-row', style: { marginBottom: '15px', color: "#333" } },
            _react2.default.createElement(
              _antd.Col,
              { span: 3, className: 'tr' },
              '\u4EA7\u54C1\uFF1A'
            ),
            _react2.default.createElement(
              _antd.Col,
              { span: 21 },
              mobx.toJS(this.store.editFields.product),
              _react2.default.createElement(
                'span',
                { className: 'ml20' },
                '\u5206\u7C7B\uFF1A ',
                mobx.toJS(this.store.editFields.category) && mobx.toJS(this.store.editFields.category).join(" ")
              ),
              _react2.default.createElement(
                'span',
                { className: 'ml20' },
                '\u4F18\u5148\u7EA7: ',
                this.store.editFields.level,
                ' '
              )
            )
          ),
          _react2.default.createElement(
            _antd.Row,
            { className: 'analysis-row', style: { marginBottom: '15px', color: "#333" } },
            _react2.default.createElement(
              _antd.Col,
              { span: 3, className: 'tr' },
              '\u63D0\u62A5\u4EBA\uFF1A'
            ),
            _react2.default.createElement(
              _antd.Col,
              { span: 21 },
              this.store.editFields.userName,
              _react2.default.createElement(
                'span',
                { className: 'ml20' },
                '\u63D0\u62A5\u65F6\u95F4\uFF1A ',
                (0, _moment2.default)(this.store.editFields.createTime).format("YYYY-MM-DD HH:mm")
              ),
              _react2.default.createElement(
                'span',
                { className: 'ml20' },
                '\u53CD\u9988\u4EBA: ',
                this.store.editFields.demandName,
                ' '
              )
            )
          ),
          _react2.default.createElement(
            _antd.Row,
            { className: 'analysis-row', style: { marginBottom: '15px', color: "#333" } },
            _react2.default.createElement(
              _antd.Col,
              { span: 3, className: 'tr' },
              '\u53CD\u9988\u4EBA\u624B\u673A\uFF1A'
            ),
            _react2.default.createElement(
              _antd.Col,
              { span: 21 },
              this.store.editFields.demandPhone,
              _react2.default.createElement(
                'span',
                { className: 'ml20' },
                '\u53CD\u9988\u4EBA\u5C97\u4F4D: ',
                this.store.editFields.demandStation,
                ' '
              )
            )
          ),
          _react2.default.createElement(
            _antd.Row,
            { className: 'analysis-row', style: { margin: '32px 0', color: "#333" } },
            _react2.default.createElement(
              _antd.Col,
              { span: 3, className: 'tr' },
              '\u63CF\u8FF0\uFF1A'
            ),
            _react2.default.createElement(
              _antd.Col,
              { span: 21 },
              this.store.editFields.description
            )
          ),
          _react2.default.createElement(
            _antd.Row,
            { className: 'analysis-row', style: { color: "#333" } },
            _react2.default.createElement(
              _antd.Col,
              { span: 3, className: 'tr' },
              '\u9644\u4EF6\uFF1A'
            ),
            _react2.default.createElement(
              _antd.Col,
              { span: 21 },
              this.store.editFields.attachments && mobx.toJS(this.store.editFields.attachments).length > 0 ? _react2.default.createElement(_antd.List, {
                size: 'small',
                header: null,
                footer: null,
                bordered: false,
                dataSource: mobx.toJS(this.store.editFields.attachments),
                renderItem: function renderItem(item, index) {
                  return _react2.default.createElement(
                    _antd.List.Item,
                    { className: 'analysis-fujian', key: index },
                    _react2.default.createElement(
                      'a',
                      { target: '_bank', href: item.url, title: item.name },
                      item.name
                    )
                  );
                }
              }) : null
            )
          ),
          _react2.default.createElement(
            _antd.Row,
            { style: { margin: '60px 0 15px 0' }, className: 'clearfix' },
            _GlobalStore2.default.requirementAnalysis ? _react2.default.createElement(_antd.Icon, { type: 'plus-square', className: 'analysis-add', onClick: this.handleAdd }) : null,
            _react2.default.createElement(
              'ul',
              { className: 'ans-ul' },
              mobx.toJS(this.store.analysisList.map(function (item, index) {
                return _react2.default.createElement(
                  'li',
                  { className: _this4.store.anActive == item.id ? "pointer active" : "pointer",
                    onClick: _this4.checkList.bind(_this4, item),
                    key: 'list' + index },
                  item.name,
                  _react2.default.createElement(_antd.Divider, { type: 'vertical' })
                );
              }))
            )
          ),
          _react2.default.createElement(
            _antd.Form,
            { layout: 'inline' },
            _react2.default.createElement(
              _antd.Row,
              { style: { marginBottom: '15px' } },
              _react2.default.createElement(
                _antd.Form.Item,
                _extends({ className: 'ant-col-24', label: '\u5206\u6790\u4EBA', style: { marginRight: '50px' } }, formItemLayout2),
                _react2.default.createElement(
                  'span',
                  null,
                  this.store.analysisFields.userName
                )
              ),
              _react2.default.createElement(
                _antd.Form.Item,
                _extends({ label: '\u5206\u6790\u65F6\u95F4' }, formItemLayout2, { className: this.store.isSave == false ? "hidden" : "ant-col-24" }),
                _react2.default.createElement(
                  'span',
                  null,
                  (0, _moment2.default)(this.store.analysisFields.createTime).format("YYYY-MM-DD HH:mm")
                )
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { style: { marginBottom: '15px' } },
              _react2.default.createElement(
                _antd.Form.Item,
                _extends({ className: 'ant-col-24', label: '\u5206\u6790\u8BB0\u5F55' }, formItemLayout2),
                _react2.default.createElement(TextArea, {
                  placeholder: '\u8BF7\u8F93\u5165\u5206\u6790\u5185\u5BB9',
                  onBlur: this.handleBlur,
                  onChange: this.handleChange.bind(this, 'record'),
                  value: this.store.analysisFields.record,
                  disabled: !_GlobalStore2.default.requirementAnalysis || this.store.isSave == true,
                  rows: 4 })
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { className: 'analysis-row', style: { marginBottom: '15px', color: "#333" } },
              _react2.default.createElement(
                _antd.Col,
                { span: 3, className: 'tr' },
                '\u5206\u6790\u7ED3\u679C\uFF1A'
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 21 },
                _react2.default.createElement(
                  'div',
                  { className: 'dib mr25' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u7ED3\u679C\uFF1A'
                  ),
                  _react2.default.createElement(
                    _antd.Select,
                    {
                      placeholder: '\u8BF7\u9009\u62E9...',
                      onChange: this.onSelChange.bind(this, 'status'),
                      onBlur: this.handleBlur,
                      style: { width: '150px' },
                      value: this.store.analysisFields.status,
                      disabled: !_GlobalStore2.default.requirementAnalysis || this.store.isSave == true
                    },
                    levelData.map(function (item, index) {
                      return _react2.default.createElement(
                        Option,
                        { key: 'hjiguo' + index, value: item },
                        item
                      );
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'dib mr25' },
                  _react2.default.createElement(
                    'span',
                    null,
                    'BSA\uFF1A'
                  ),
                  _react2.default.createElement(
                    _antd.Select,
                    {
                      placeholder: '\u8BF7\u9009\u62E9...',
                      onChange: this.onSelChange.bind(this, 'bsa'),
                      onBlur: this.handleBlur,
                      style: { width: '150px' },
                      value: this.store.analysisFields.bsa,
                      disabled: !_GlobalStore2.default.requirementAnalysis || this.store.isSave == true
                    },
                    bsaData.map(function (item, index) {
                      return _react2.default.createElement(
                        Option,
                        { key: 'bsa' + index, value: item },
                        item
                      );
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'dib' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u8D23\u4EFB\u4EBA\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_AsyncSelectOld2.default, {
                      url: _config2.default.authorization.getUserInfoListByRoleCode,
                      style: { width: 150 },
                      onChange: this.onSelChange.bind(this, 'toUserName'),
                      value: this.store.analysisFields.toUserName,
                      query: _requirement2.default.requirement.getUserInfoListByRoleCode,
                      onBlur: this.handleBlur,
                      disabled: !_GlobalStore2.default.requirementAnalysis || this.store.isSave == true
                    })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { style: { marginTop: '30px' } },
              _react2.default.createElement(
                _antd.Form.Item,
                _extends({ className: 'ant-col-24', label: '\u5904\u7406\u9644\u4EF6' }, formItemLayout2),
                _react2.default.createElement(
                  _antd.Upload.Dragger,
                  _extends({}, props, {
                    disabled: !_GlobalStore2.default.requirementAnalysis || this.store.isSave == true
                  }),
                  _react2.default.createElement(
                    'p',
                    { className: 'ant-upload-drag-icon' },
                    _react2.default.createElement('span', { className: 'require-upload' }),
                    _react2.default.createElement('span', { style: { color: '#8C8C8C' } }),
                    '\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\u6216',
                    _react2.default.createElement(
                      'span',
                      {
                        style: { color: '#268DFF', verticalAlign: 'top' } },
                      '\u6D4F\u89C8'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { style: { margin: '30px 0' } },
              _react2.default.createElement(
                _antd.Form.Item,
                _extends({ className: 'ant-col-24', label: '\u5173\u8054' }, formItemLayout2),
                _react2.default.createElement(
                  _antd.Button,
                  { disabled: !_GlobalStore2.default.requirementAnalysis || this.store.isSave == true, type: 'dashed',
                    onClick: this.handleRouls, style: { width: '100%', height: '48px' } },
                  _react2.default.createElement(_antd.Icon, { type: 'plus' }),
                  ' \u4ECE\u9700\u6C42\u6C60\u4E2D\u6DFB\u52A0'
                )
              )
            ),
            _react2.default.createElement(_antd.List, {
              size: 'small',
              header: null,
              footer: null,
              bordered: false,
              dataSource: mobx.toJS(this.store.lisTable),
              renderItem: function renderItem(item, index) {
                return _react2.default.createElement(
                  _antd.List.Item,
                  { key: index, style: { textAlign: 'center' } },
                  _react2.default.createElement(
                    'span',
                    { style: { color: '#595959' }, className: 'fl' },
                    item.relation
                  ),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    {
                      style: { color: '#268DFF' } },
                    ' ',
                    item.title
                  ),
                  _react2.default.createElement(
                    _antd.Popconfirm,
                    {
                      title: '\u60A8\u786E\u5B9A\u8981\u53D6\u6D88\u94FE\u63A5\u5417?',
                      onConfirm: _this4.confirm.bind(_this4, item.id),
                      onCancel: _this4.cancel,
                      okText: '\u786E\u5B9A',
                      cancelText: '\u53D6\u6D88'
                    },
                    _react2.default.createElement(
                      _antd.Button,
                      { size: 'small', className: 'fr', type: 'dashed' },
                      '\u53D6\u6D88\u94FE\u63A5'
                    )
                  )
                );
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _GlobalStore2.default.requirementAnalysis && this.store.anActive !== null ? "require-addSub" : "hidden" },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              _antd.Button,
              { className: this.store.isSave == false ? "fr ml10 mt25" : "hidden",
                onClick: this.onNextClick,
                type: 'primary', disabled: !_GlobalStore2.default.requirementAnalysis },
              '\u63D0\u4EA4\u5E76\u8FDB\u5165\u4E0B\u4E00\u6761'
            ),
            this.store.isSave == false ? _react2.default.createElement(
              _antd.Button,
              { onClick: this.onClick, className: 'fr ml10 mt25', ghost: true, type: 'primary',
                disabled: !_GlobalStore2.default.requirementAnalysis },
              '\u63D0\u4EA4'
            ) : _react2.default.createElement(
              _antd.Button,
              { disabled: this.store.statusActive == "已完成", onClick: this.onFinishRequirement,
                className: 'fr ml10 mt25', ghost: true, type: 'primary' },
              '\u5DF2\u5B8C\u6210'
            ),
            _react2.default.createElement(
              'div',
              { className: 'fr',
                style: {
                  color: '#268DFF', fontSize: '13px'
                } },
              this.store.isSave == false ? "提交后不可修改，请确认后提交" : "若该需求已经被实现则点击已完成，点击后需求状态为“已完成”"
            )
          )
        ),
        _react2.default.createElement(
          _antd.Modal,
          {
            title: '\u5173\u8054',
            visible: rolesModal,
            onCancel: this.handleCancel,
            className: 'analysis-table',
            footer: [_react2.default.createElement(
              'div',
              { className: 'fl' },
              _react2.default.createElement(
                'span',
                { className: 'f12' },
                '\u6B64\u95EE\u9898'
              ),
              _react2.default.createElement(
                _antd.Select,
                {
                  placeholder: '\u8BF7\u9009\u62E9...',
                  onChange: this.onSelect,
                  onBlur: this.handleBlur,
                  style: { marginLeft: '10px', width: '100px' }
                },
                rolesData.map(function (item, index) {
                  return _react2.default.createElement(
                    Option,
                    { key: 'roles' + index, value: item },
                    item
                  );
                })
              )
            ), _react2.default.createElement(
              _antd.Button,
              { key: 'back', onClick: this.handleCancel },
              '\u53D6\u6D88'
            ), _react2.default.createElement(
              _antd.Button,
              { key: 'submit', type: 'primary', disabled: selectedRows.length == 0, onClick: this.handleOk },
              '\u94FE\u63A5'
            )]
          },
          _react2.default.createElement(_antd.Table, { columns: columns,
            size: 'small',
            rowSelection: rowSelection,
            pagination: false,
            dataSource: mobx.toJS(this.store.rolesTable) }),
          _react2.default.createElement(_antd.Pagination, {
            style: { margin: '10px', textAlign: 'center' },
            current: this.store.rolesPageIndex,
            pageSize: this.store.rolesPageSize,
            pageSizeOptions: ["20", "50", "100", "500"],
            total: this.store.rolesTotalCount,
            showSizeChanger: true,
            onShowSizeChange: this.showSizeChange,
            onChange: this.onChange,
            showLessItems: true,
            showQuickJumper: true })
        )
      );
    }
  }]);

  return RequirementEdit;
}(_react.Component)) || _class;

exports.default = RequirementEdit;

/***/ }),

/***/ 2064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 点击需求时查看功能
            * dangw@glodon.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactResizable = __webpack_require__(2231);

__webpack_require__(2167);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequirementRead = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(RequirementRead, _Component);

  function RequirementRead(props) {
    _classCallCheck(this, RequirementRead);

    var _this = _possibleConstructorReturn(this, (RequirementRead.__proto__ || Object.getPrototypeOf(RequirementRead)).call(this, props));

    _this.onClose = function () {
      _this.store.readVisible = false;
    };

    _this.onResize = function (event, _ref) {
      var element = _ref.element,
          size = _ref.size;

      _this.setState({ height: size.height });
    };

    _this.store = _this.props.store;
    _this.state = {
      height: 308 // 高度
    };
    return _this;
  }

  _createClass(RequirementRead, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: this.store.readVisible == true ? "analysis-read container-fiuld" : "hidden" },
        _react2.default.createElement(
          _reactResizable.Resizable,
          {
            height: this.state.height,
            width: "350px",
            axis: 'y',
            onResize: this.onResize,
            minConstraints: [350, 308]
          },
          _react2.default.createElement(
            'div',
            { style: { height: this.state.height + 'px' } },
            _react2.default.createElement(_antd.Icon, { type: 'close',
              className: 'analysis-close',
              onClick: this.onClose
            }),
            _react2.default.createElement(
              'div',
              { className: 'analysis-title' },
              this.store.readData.number
            ),
            _react2.default.createElement(
              _antd.Row,
              null,
              _react2.default.createElement(
                _antd.Col,
                { span: 18, className: 'analysis-desc' },
                this.store.readData.title
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { className: 'analysis-row clearfix' },
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u4EA7\u54C1\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    {
                      className: 'ml10' },
                    mobx.toJS(this.store.readData.product)
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u5206\u7C7B\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    {
                      className: 'ml10' },
                    mobx.toJS(this.store.readData.category) && mobx.toJS(this.store.readData.category).join(" ")
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u4F18\u5148\u7EA7\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'ml10' },
                    this.store.readData.level
                  )
                )
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { className: 'analysis-row clearfix' },
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u63D0\u62A5\u4EBA\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'ml10' },
                    this.store.readData.userName
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u63D0\u62A5\u65F6\u95F4\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    {
                      className: 'ml10' },
                    (0, _moment2.default)(this.store.readData.createTime).format("YYYY-MM-DD HH:mm")
                  )
                )
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { className: 'analysis-row clearfix' },
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u53CD\u9988\u4EBA\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'ml10' },
                    this.store.readData.demandName
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u53CD\u9988\u4EBA\u624B\u673A\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'ml10' },
                    this.store.readData.demandPhone
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 6 },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u53CD\u9988\u4EBA\u5C97\u4F4D\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'ml10' },
                    this.store.readData.demandStation
                  )
                )
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { className: 'analysis-row', style: { margin: '32px 0', color: "#333" } },
              _react2.default.createElement(
                _antd.Col,
                { span: 1 },
                '\u63CF\u8FF0\uFF1A'
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 21 },
                this.store.readData.description
              )
            ),
            _react2.default.createElement(
              _antd.Row,
              { className: 'analysis-row', style: { color: "#333" } },
              _react2.default.createElement(
                _antd.Col,
                { span: 1 },
                '\u9644\u4EF6\uFF1A'
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 21 },
                this.store.readData.attachments && mobx.toJS(this.store.readData.attachments).length > 0 ? _react2.default.createElement(_antd.List, {
                  size: 'small',
                  header: null,
                  footer: null,
                  bordered: false,
                  dataSource: mobx.toJS(this.store.readData.attachments),
                  renderItem: function renderItem(item, index) {
                    return _react2.default.createElement(
                      _antd.List.Item,
                      { className: 'analysis-fujian', key: index },
                      _react2.default.createElement(
                        'a',
                        { target: '_bank', href: item.url, title: item.name },
                        item.name
                      )
                    );
                  }
                }) : null
              )
            )
          )
        )
      );
    }
  }]);

  return RequirementRead;
}(_react.Component)) || _class;

exports.default = RequirementRead;

/***/ }),

/***/ 2114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28; /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 需求管理 store
                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _mobx = __webpack_require__(12);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _requirement = __webpack_require__(1661);

var _requirement2 = _interopRequireDefault(_requirement);

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

var RequirementStore = (_class = function () {
  function RequirementStore() {
    _classCallCheck(this, RequirementStore);

    _initDefineProp(this, 'totalCount', _descriptor, this);

    _initDefineProp(this, 'loading', _descriptor2, this);

    _initDefineProp(this, 'hasMore', _descriptor3, this);

    _initDefineProp(this, 'pageIndex', _descriptor4, this);

    _initDefineProp(this, 'pageSize', _descriptor5, this);

    _initDefineProp(this, 'status', _descriptor6, this);

    _initDefineProp(this, 'product', _descriptor7, this);

    _initDefineProp(this, 'all', _descriptor8, this);

    _initDefineProp(this, 'text', _descriptor9, this);

    _initDefineProp(this, 'tableData', _descriptor10, this);

    _initDefineProp(this, 'addFields', _descriptor11, this);

    _initDefineProp(this, 'editFields', _descriptor12, this);

    _initDefineProp(this, 'analysisFields', _descriptor13, this);

    _initDefineProp(this, 'editAnalysisFields', _descriptor14, this);

    _initDefineProp(this, 'analysisList', _descriptor15, this);

    _initDefineProp(this, 'anActive', _descriptor16, this);

    _initDefineProp(this, 'rolesPageIndex', _descriptor17, this);

    _initDefineProp(this, 'rolesPageSize', _descriptor18, this);

    _initDefineProp(this, 'rolesTotalCount', _descriptor19, this);

    _initDefineProp(this, 'rolesTable', _descriptor20, this);

    _initDefineProp(this, 'lisTable', _descriptor21, this);

    _initDefineProp(this, 'num', _descriptor22, this);

    _initDefineProp(this, 'requirementId', _descriptor23, this);

    _initDefineProp(this, 'isSave', _descriptor24, this);

    _initDefineProp(this, 'statusActive', _descriptor25, this);

    _initDefineProp(this, 'readVisible', _descriptor26, this);

    _initDefineProp(this, 'readData', _descriptor27, this);

    _initDefineProp(this, 'word', _descriptor28, this);
  } // 左侧checkbox筛选
  // 产品
  // 筛选条件 true 全部 false 我的
  // 关键字
  // 列表数据
  //编辑需求字段
  // 新增分析字段
  // 编辑分析字段
  // 分析列表
  // 当前选中的分析
  // 关联分页
  // 关联分页
  // 关联分页
  // 关联列表
  // 已关联列表
  // 拆分
  // 需求id
  // 当前分析是否保存 false 未保存 true 保存
  // 当前需求状态
  // 需求只读
  // 需求只读数据


  _createClass(RequirementStore, [{
    key: 'saveRequirement',
    // 分词检索

    // 保存需求
    value: function saveRequirement(param) {
      return (0, _api.requestPost)('saveRequirement', _config2.default.management.saveRequirement, _requirement2.default.requirement.saveRequirement, param);
    }

    // 保存分析

  }, {
    key: 'saveAnalysis',
    value: function saveAnalysis(param) {
      return (0, _api.requestPost)('saveAnalysis', _config2.default.management.saveAnalysis, _requirement2.default.requirement.saveAnalysis, param);
    }
  }]);

  return RequirementStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'totalCount', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'loading', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'hasMore', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'pageIndex', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'status', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'product', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'all', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'text', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'tableData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'addFields', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return { // 新增需求字段
      "title": "",
      "category": [],
      "level": "",
      "product": "",
      "demandName": "",
      "demandPhone": "",
      "demandStation": "",
      "description": "",
      "attachments": [],
      "id": ""
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'editFields', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'analysisFields', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      "id": "",
      "toUserId": "",
      "toUserName": "",
      "bsa": "",
      "note": "",
      "status": "",
      "record": "",
      "userId": "",
      "userName": "",
      "createTime": "",
      "isSave": false,
      "requirementId": "",
      "attachments": []
    };
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'editAnalysisFields', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'analysisList', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'anActive', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'rolesPageIndex', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'rolesPageSize', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'rolesTotalCount', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'rolesTable', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'lisTable', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'num', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'requirementId', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'isSave', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'statusActive', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'readVisible', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'readData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'word', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _applyDecoratedDescriptor(_class.prototype, 'saveRequirement', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveRequirement'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveAnalysis', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveAnalysis'), _class.prototype)), _class);
exports.default = RequirementStore;

/***/ }),

/***/ 2145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}", ""]);

// exports


/***/ }),

/***/ 2167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2145);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../../css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggableCore", {
  enumerable: true,
  get: function get() {
    return _DraggableCore.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(20));

var _reactDom = _interopRequireDefault(__webpack_require__(80));

var _classnames = _interopRequireDefault(__webpack_require__(29));

var _domFns = __webpack_require__(1835);

var _positionFns = __webpack_require__(1912);

var _shims = __webpack_require__(1665);

var _DraggableCore = _interopRequireDefault(__webpack_require__(2226));

var _log = _interopRequireDefault(__webpack_require__(1911));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Define <Draggable>
//
var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  _createClass(Draggable, null, [{
    key: "getDerivedStateFromProps",
    // React 16.3+
    // Arity (props, state)
    value: function getDerivedStateFromProps(_ref, _ref2) {
      var position = _ref.position;
      var prevPropsPosition = _ref2.prevPropsPosition;

      // Set x/y if a new position is provided in props that is different than the previous.
      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
        (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
          position: position,
          prevPropsPosition: prevPropsPosition
        });
        return {
          x: position.x,
          y: position.y,
          prevPropsPosition: _objectSpread({}, position)
        };
      }

      return null;
    }
  }]);

  function Draggable(props
  /*: DraggableProps*/
  ) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, coreData) {
      (0, _log.default)('Draggable: onDragStart: %j', coreData); // Short-circuit if user's callback killed it.

      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData)); // Kills start event on core as well, so move handlers are never bound.


      if (shouldStart === false) return false;

      _this.setState({
        dragging: true,
        dragged: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, coreData) {
      if (!_this.state.dragging) return false;
      (0, _log.default)('Draggable: onDrag: %j', coreData);
      var uiData = (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        x: uiData.x,
        y: uiData.y
      }; // Keep within bounds.

      if (_this.props.bounds) {
        // Save original x and y.
        var x = newState.x,
            y = newState.y; // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY; // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY; // Recalculate slack by noting how much was shaved by the boundPosition handler.

        newState.slackX = _this.state.slackX + (x - newState.x);
        newState.slackY = _this.state.slackY + (y - newState.y); // Update the event we fire to reflect what really happened after bounds took effect.

        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      } // Short-circuit if user's callback killed it.


      var shouldUpdate = _this.props.onDrag(e, uiData);

      if (shouldUpdate === false) return false;

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, coreData) {
      if (!_this.state.dragging) return false; // Short-circuit if user's callback killed it.

      var shouldContinue = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));

      if (shouldContinue === false) return false;
      (0, _log.default)('Draggable: onDragStop: %j', coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        dragging: false,
        slackX: 0,
        slackY: 0
      }; // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.

      var controlled = Boolean(_this.props.position);

      if (controlled) {
        var _this$props$position = _this.props.position,
            x = _this$props$position.x,
            y = _this$props$position.y;
        newState.x = x;
        newState.y = y;
      }

      _this.setState(newState);
    });

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: _objectSpread({}, props.position),
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };

    if (props.position && !(props.onDrag || props.onStop)) {
      // eslint-disable-next-line no-console
      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
    }

    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        dragging: false
      }); // prevents invariant if unmounted while dragging
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactElement<any>*/
    {
      var _classNames;

      var _this$props = this.props,
          axis = _this$props.axis,
          bounds = _this$props.bounds,
          children = _this$props.children,
          defaultPosition = _this$props.defaultPosition,
          defaultClassName = _this$props.defaultClassName,
          defaultClassNameDragging = _this$props.defaultClassNameDragging,
          defaultClassNameDragged = _this$props.defaultClassNameDragged,
          position = _this$props.position,
          positionOffset = _this$props.positionOffset,
          scale = _this$props.scale,
          draggableCoreProps = _objectWithoutProperties(_this$props, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"]);

      var style = {};
      var svgTransform = null; // If this is controlled, we don't want to move it - unless it's dragging.

      var controlled = Boolean(position);
      var draggable = !controlled || this.state.dragging;
      var validPosition = position || defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
        // Set top if vertical drag is enabled
        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
      }; // If this element was SVG, we use the `transform` attribute.

      if (this.state.isElementSVG) {
        svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
      } // Mark with class while dragging


      var className = (0, _classnames.default)(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames)); // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)

      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), React.cloneElement(React.Children.only(children), {
        className: className,
        style: _objectSpread(_objectSpread({}, children.props.style), style),
        transform: svgTransform
      }));
    }
  }]);

  return Draggable;
}(React.Component);

exports.default = Draggable;

_defineProperty(Draggable, "displayName", 'Draggable');

_defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
    left: _propTypes.default.number,
    right: _propTypes.default.number,
    top: _propTypes.default.number,
    bottom: _propTypes.default.number
  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
  defaultClassName: _propTypes.default.string,
  defaultClassNameDragging: _propTypes.default.string,
  defaultClassNameDragged: _propTypes.default.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  positionOffset: _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
}));

_defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: {
    x: 0,
    y: 0
  },
  position: null,
  scale: 1
}));

/***/ }),

/***/ 2226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(20));

var _reactDom = _interopRequireDefault(__webpack_require__(80));

var _domFns = __webpack_require__(1835);

var _positionFns = __webpack_require__(1912);

var _shims = __webpack_require__(1665);

var _log = _interopRequireDefault(__webpack_require__(1911));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Simple abstraction for dragging events names.
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
}; // Default to mouse events.

var dragEventFor = eventsFor.mouse;
/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/

/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
var DraggableCore = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  var _super = _createSuper(DraggableCore);

  function DraggableCore() {
    var _this;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e); // Only accept left-clicks.


      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false; // Get nodes. Be sure to grab relative document (could be iframed)

      var thisNode = _this.findDOMNode();

      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }

      var ownerDocument = thisNode.ownerDocument; // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      } // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.


      if (e.type === 'touchstart') e.preventDefault(); // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.

      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);

      _this.setState({
        touchIdentifier: touchIdentifier
      }); // Get the current drag point from the event. This is used as the offset.


      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent); // Call event handler. If it returns explicit false, cancel.

      (0, _log.default)('calling', _this.props.onStart);

      var shouldUpdate = _this.props.onStart(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) return; // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.

      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument); // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.

      _this.setState({
        dragging: true,
        lastX: x,
        lastY: y
      }); // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.


      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      // Get the current drag point from the event. This is used as the offset.
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX,
            deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        deltaX = _snapToGrid2[0];
        deltaY = _snapToGrid2[1];
        if (!deltaX && !deltaY) return; // skip useless drag

        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent); // Call event handler. If it returns explicit false, trigger end.

      var shouldUpdate = _this.props.onDrag(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents')
          /*: any*/
          )
          /*: MouseTouchEvent*/
          ); // I see why this insanity was deprecated
          // $FlowIgnore

          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

          _this.handleDragStop(event);
        }

        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function (e) {
      if (!_this.state.dragging) return;
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y;
      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y); // Call event handler

      var shouldContinue = _this.props.onStop(e, coreEvent);

      if (shouldContinue === false || _this.mounted === false) return false;

      var thisNode = _this.findDOMNode();

      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent); // Reset the el.

      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      dragEventFor = eventsFor.mouse;
      return _this.handleDragStop(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStop(e);
    });

    return _this;
  }

  _createClass(DraggableCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true; // Touch handlers must be added with {passive: false} to be cancelable.
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention

      var thisNode = this.findDOMNode();

      if (thisNode) {
        (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false; // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.

      var thisNode = this.findDOMNode();

      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
      }
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return React.cloneElement(React.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See 
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(React.Component);

exports.default = DraggableCore;

_defineProperty(DraggableCore, "displayName", 'DraggableCore');

_defineProperty(DraggableCore, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props
  /*: DraggableCoreProps*/
  , propName
  /*: $Keys<DraggableCoreProps>*/
  ) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,

  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,

  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});

_defineProperty(DraggableCore, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});

/***/ }),

/***/ 2227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports.default = void 0;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];

function getPrefix()
/*: string*/
{
  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
  var style = window.document.documentElement.style;
  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}

function browserPrefixToStyle(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}

function kebabToTitleCase(str
/*: string*/
)
/*: string*/
{
  var out = '';
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }

  return out;
} // Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`


var _default = getPrefix();

exports.default = _default;

/***/ }),

/***/ 2229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(20));

var _Resizable = _interopRequireDefault(__webpack_require__(1913));

var _propTypes2 = __webpack_require__(1914);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResizableBox = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ResizableBox, _React$Component);

  function ResizableBox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: _this.props.width,
      height: _this.props.height,
      propsWidth: _this.props.width,
      propsHeight: _this.props.height
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (e, data) {
      var size = data.size;

      if (_this.props.onResize) {
        e.persist && e.persist();

        _this.setState(size, function () {
          return _this.props.onResize && _this.props.onResize(e, data);
        });
      } else {
        _this.setState(size);
      }
    });

    return _this;
  }

  ResizableBox.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    // If parent changes height/width, set that in our state.
    if (state.propsWidth !== props.width || state.propsHeight !== props.height) {
      return {
        width: props.width,
        height: props.height,
        propsWidth: props.width,
        propsHeight: props.height
      };
    }

    return null;
  };

  var _proto = ResizableBox.prototype;

  _proto.render = function render() {
    // Basic wrapper around a Resizable instance.
    // If you use Resizable directly, you are responsible for updating the child component
    // with a new width and height.
    var _this$props = this.props,
        handle = _this$props.handle,
        handleSize = _this$props.handleSize,
        onResize = _this$props.onResize,
        onResizeStart = _this$props.onResizeStart,
        onResizeStop = _this$props.onResizeStop,
        draggableOpts = _this$props.draggableOpts,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis,
        width = _this$props.width,
        height = _this$props.height,
        resizeHandles = _this$props.resizeHandles,
        style = _this$props.style,
        transformScale = _this$props.transformScale,
        props = _objectWithoutPropertiesLoose(_this$props, ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"]);

    return /*#__PURE__*/React.createElement(_Resizable.default, {
      axis: axis,
      draggableOpts: draggableOpts,
      handle: handle,
      handleSize: handleSize,
      height: this.state.height,
      lockAspectRatio: lockAspectRatio,
      maxConstraints: maxConstraints,
      minConstraints: minConstraints,
      onResizeStart: onResizeStart,
      onResize: this.onResize,
      onResizeStop: onResizeStop,
      resizeHandles: resizeHandles,
      transformScale: transformScale,
      width: this.state.width
    }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, style), {}, {
        width: this.state.width + 'px',
        height: this.state.height + 'px'
      })
    })));
  };

  return ResizableBox;
}(React.Component);

exports.default = ResizableBox;

_defineProperty(ResizableBox, "propTypes", _objectSpread(_objectSpread({}, _propTypes2.resizableProps), {}, {
  children: _propTypes.default.element
}));

/***/ }),

/***/ 2230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cloneElement = cloneElement;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React.addons.cloneWithProps look-alike that merges style & className.
function cloneElement(element, props) {
  if (props.style && element.props.style) {
    props.style = _objectSpread(_objectSpread({}, element.props.style), props.style);
  }

  if (props.className && element.props.className) {
    props.className = element.props.className + " " + props.className;
  }

  return /*#__PURE__*/_react.default.cloneElement(element, props);
}

/***/ }),

/***/ 2231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function() {
  throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
};

module.exports.Resizable = __webpack_require__(1913).default;
module.exports.ResizableBox = __webpack_require__(2229).default;


/***/ })

});
//# sourceMappingURL=8-afa7d4b4bae6ff2924e9.1629092961041.js.map