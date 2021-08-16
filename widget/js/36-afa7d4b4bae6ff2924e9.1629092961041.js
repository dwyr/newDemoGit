webpackJsonp([36],{

/***/ 1481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 公文管理草稿
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

var _EditeVisit = __webpack_require__(1518);

var _EditeVisit2 = _interopRequireDefault(_EditeVisit);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(89);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _antd.Modal.confirm;

var OfficeDraft = (_dec = (0, _mobxReact.inject)('OfficeManageStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(OfficeDraft, _React$Component);

	function OfficeDraft(props) {
		var _this3 = this;

		_classCallCheck(this, OfficeDraft);

		var _this2 = _possibleConstructorReturn(this, (OfficeDraft.__proto__ || Object.getPrototypeOf(OfficeDraft)).call(this, props));

		_this2.handleEdit = function (param) {
			var dataArray = mobx.toJS(_this2.store.maintableData).map(function (item) {
				return Object.assign(item, { selested: false });
			});
			var dindex = dataArray.findIndex(function (item) {
				return item.id == param.id;
			});
			dataArray.splice(dindex, 1, Object.assign(param, { selested: true, isRead: true }));
			_this2.store.maintableData = Object.assign([], dataArray);
			_this2.store.draftId = param.id;
			_this2.store.temList = Object.assign({}, mobx.toJS(_this2.store.digtalTemData).filter(function (item) {
				return item.type == param.type;
			})[0]);
			_this2.store.getJournalById(param.id).then(function (res) {
				_this2.store.detailData = Object.assign({}, res);
			});
		};

		_this2.handleInfiniteOnLoad = function () {
			var dataArray = mobx.toJS(_this2.store.maintableData);
			if (_this2.store.maintotalCount === dataArray.length) {
				return;
			}
			_this2.store.loading = true;
			_this2.store.mainQuery.pageIndex = _this2.store.mainQuery.pageIndex + 1;
			_this2.store.getJournalMainPageNew().then(function (res) {
				var data = res;
				dataArray = dataArray.concat(data.body);
				_this2.store.maintableData = Object.assign([], dataArray);
				_this2.store.loading = false;
			});
		};

		_this2.showText = function (timeString, hm) {
			var date = new Date(timeString);
			var today = new Date();
			today.setHours(0);
			today.setMinutes(0);
			today.setSeconds(0);
			// today 为今天凌晨的时间
			var dayTime = 24 * 60 * 60 * 1000;
			var delta = today - date; // 得到相差的时间 ms
			if (delta > 0) {
				if (delta <= dayTime) {
					return '昨天 ' + hm;
				} else if (delta <= 2 * dayTime) {
					return '前天 ' + hm;
				}
			} else if (-delta < dayTime) {
				return '今天 ' + hm;
			}
			return (0, _moment2.default)(timeString).format("MM-DD HH:mm");
		};

		_this2.onClose = function () {
			_this2.store.visible = false;
		};

		_this2.handleClick = function (type) {
			_this2.store.mainQuery.orderType = type;
			_this2.store.mainQuery.pageIndex = 1;
			_this2.store.mainQuery.pageSize = 10;
			_this2.store.getJournalMainPage().then(function (res) {
				if (res) {
					if (mobx.toJS(_this2.store.maintableData).length > 0) {
						// 初始化默认值，列表第一项
						var param = mobx.toJS(_this2.store.maintableData)[0];
						_this2.selectClick(param);
					} else {
						return false;
					}
				}
			});
		};

		_this2.onChangeState = function (type, item, e) {
			var newData = JSON.parse(JSON.stringify(_this2.state[type]));
			var index = newData.findIndex(function (vitem) {
				return vitem == item.type;
			});
			var checked = e.target.checked;

			if (index == -1) {
				// 新增
				_this2.setState(_defineProperty({}, type, [].concat(_toConsumableArray(newData), [item.type])), function () {
					// 查询
					_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
						type: Object.assign([], _this2.state[type]),
						pageIndex: 1,
						pageSize: 10
					});
					_this2.store.getJournalMainPage();
				});
			} else {
				if (checked == false) {
					// 取消选中
					newData.splice(index, 1);
					_this2.setState(_defineProperty({}, type, Object.assign([], newData)), function () {
						// 查询
						_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
							type: Object.assign([], _this2.state[type]),
							pageIndex: 1,
							pageSize: 10
						});
						_this2.store.getJournalMainPage();
					});
				}
			}
		};

		_this2.onSelect = function (value) {
			// 查询
			_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
				text: value,
				pageIndex: 1,
				pageSize: 10
			});
			_this2.store.getJournalMainPage();
		};

		_this2.onChange = function (value) {
			// 查询
			_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
				text: value,
				pageIndex: 1,
				pageSize: 10
			});
			_this2.store.getJournalMainPage();
		};

		_this2.onAsync = function (type, id, index) {
			_this2.store.syncAssignment(id).then(function (res) {
				if (res) {
					_antd.message.success("同步成功");
					// 前端同步数据
					var detailData = JSON.parse(JSON.stringify(_this2.store.detailData));
					var assignments = detailData[type];
					assignments[index].isSync = 1; // 同步成功
					_this2.store.detailData = Object.assign(detailData, _defineProperty({}, type, assignments));
				}
			});
		};

		_this2.onRef = function (ref) {
			_this2.child = ref;
		};

		_this2.getTable = function () {
			var _this = _this2;
			_this.store.mainQuery = Object.assign(mobx.toJS(_this.store.mainQuery), {
				saveType: 1, // saveType = 1草稿箱 saveType=2是提交的日志
				text: "",
				tag: [],
				type: [],
				orderType: 0,
				pageIndex: 1,
				pageSize: 10,
				category: 2
			});
			_this.store.getJournalMainPage().then(function (res) {
				if (res) {
					if (mobx.toJS(_this.store.maintableData).length > 0) {
						// 初始化默认值，列表第一项
						var param = mobx.toJS(_this.store.maintableData)[0];
						_this.selectClick(param);
					} else {
						return false;
					}
				}
			});
		};

		_this2.showDeleteConfirm = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
				var _this;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this = _this2;

								confirm({
									title: '您确定删除吗?',
									okText: '确定',
									okType: 'danger',
									cancelText: '取消',
									onOk: function onOk() {
										_this.store.delJournal(id).then(function (res) {
											if (res) {
												_antd.message.success("删除成功");
												_this.getTable();
											}
										});
									},
									onCancel: function onCancel() {
										console.log('Cancel');
									}
								});

							case 2:
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

		_this2.updateState = function (type, params) {
			_this2.setState(_defineProperty({}, type, params));
		};

		_this2.selectClick = function (param) {
			_this2.handleEdit(param);
		};

		_this2.handleRoute = function () {
			_this2.store.digtalKey = "2";
			_this2.props.history.push("/digital/office");
			_events2.default.emit("journal", "2");
		};

		_this2.handleDraftRoute = function () {
			_this2.store.digtalKey = 0;
			_this2.props.history.push("/digital/draft");
			_events2.default.emit("draft", "3");
		};

		_this2.hanndleVis = function () {
			var mainQuery = _this2.store.mainQuery;

			var orderType = mobx.toJS(mainQuery).orderType;
			if (orderType == 0) {
				_this2.handleClick(1);
			} else if (orderType == 1) {
				_this2.handleClick(2);
			} else {
				_this2.handleClick(1);
			}
		};

		_this2.hanndleVis2 = function () {
			var mainQuery = _this2.store.mainQuery;

			var orderType = mobx.toJS(mainQuery).orderType;
			if (orderType == 0) {
				_this2.handleClick(4);
			} else if (orderType == 4) {
				_this2.handleClick(3);
			} else {
				_this2.handleClick(4);
			}
		};

		_this2.store = _this2.props.OfficeManageStore;
		_this2.state = {
			digtalTem: [], // 类型
			ratio: 100
		};
		return _this2;
	}

	_createClass(OfficeDraft, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;
			this.store.getJournalTypeList();
			this.store.getJournalTagList();
			this.store.getUserPermissionByAppCode();
			// 获取大文件上传sts
			this.store.getSts();
			// 初始化查询
			_this.getTable();
			// 时间监听
			_this.DraftEmitter = _events2.default.addListener('draft', function (draft) {
				_this.getTable();
			});
			window.addEventListener("resize", function () {
				_this.setState({
					ratio: (0, _utils.detectZoom)()
				});
			}, false);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (this.DraftEmitter) {
				_events2.default.removeListener(this.DraftEmitter);
			}
			window.removeEventListener("resize", function () {
				this.setState({
					ratio: 100
				});
			}, false);
		}

		// 切换详情


		// 获取下一页信息


		// 前天、昨天、今天判断


		// 设置状态


		// 重查


		// 删除草稿


		// 选中点击


		// 提交发布成功，跳转到知识管理


		// 草稿保存成功，跳转到草稿箱

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _store = this.store,
			    maintableData = _store.maintableData,
			    loading = _store.loading,
			    hasMore = _store.hasMore,
			    maintotalCount = _store.maintotalCount,
			    digtalTemData = _store.digtalTemData,
			    mainQuery = _store.mainQuery,
			    tagList = _store.tagList,
			    detailData = _store.detailData,
			    hasJournal = _store.hasJournal,
			    temList = _store.temList;

			var options = mobx.toJS(tagList).map(function (opt) {
				return opt.name;
			});
			var menu = _react2.default.createElement(
				_antd.Menu,
				null,
				mobx.toJS(digtalTemData).map(function (item, index) {
					return _react2.default.createElement(
						_antd.Menu.Item,
						{ key: item.type },
						_react2.default.createElement(
							_antd.Checkbox,
							{
								checked: _this4.state["digtalTem"].includes(item.type),
								key: item.type + "-" + index,
								onChange: _this4.onChangeState.bind(_this4, "digtalTem", item)
							},
							item.name
						)
					);
				})
			);
			var orderType = mobx.toJS(mainQuery).orderType;
			var temType = mobx.toJS(temList).type;
			var ratio = this.state.ratio;


			return _react2.default.createElement(
				_antd.Row,
				{ className: 'w clearfix' },
				_react2.default.createElement(
					'div',
					{ className: 'fl', style: { paddingRight: '16px', width: '330px' } },
					_react2.default.createElement(
						'div',
						{ className: 'clearfix', style: {
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flext-start',
								padding: '0 0 10px 0',
								borderBottom: '1px solid #e6e6e6' } },
						_react2.default.createElement(
							_antd.Button,
							{ size: 'small', type: 'link', style: { padding: '0 2px' }, onClick: this.hanndleVis },
							'\u6700\u65B0'
						),
						_react2.default.createElement(
							'span',
							{ style: { display: 'inline-block' } },
							_react2.default.createElement(_antd.Icon, { onClick: this.handleClick.bind(this, 2), type: 'caret-up', className: orderType == 1 ? "caret-up digital_icon_active" : "digital_icon caret-up" }),
							_react2.default.createElement(_antd.Icon, { onClick: this.handleClick.bind(this, 1), type: 'caret-down', className: orderType == 2 ? "caret-down digital_icon_active" : "digital_icon caret-down" })
						),
						_react2.default.createElement(
							_antd.Button,
							{ size: 'small', type: 'link', style: { marginLeft: '1px', padding: '0 2px' }, onClick: this.hanndleVis2 },
							'\u6700\u70ED'
						),
						_react2.default.createElement(
							'span',
							{ style: { display: 'inline-block' } },
							_react2.default.createElement(_antd.Icon, { onClick: this.handleClick.bind(this, 3), type: 'caret-up', className: orderType == 4 ? "caret-up digital_icon_active" : "digital_icon caret-up" }),
							_react2.default.createElement(_antd.Icon, { onClick: this.handleClick.bind(this, 4), type: 'caret-down', className: orderType == 3 ? "caret-down digital_icon_active" : "digital_icon caret-down" })
						),
						_react2.default.createElement(
							_antd.Dropdown,
							{ overlay: menu, trigger: ['click'] },
							_react2.default.createElement(
								_antd.Button,
								{ size: 'small', className: 'ml5' },
								'\u7C7B\u578B ',
								_react2.default.createElement(_antd.Icon, { style: { fontSize: '12px' }, type: 'filter' })
							)
						),
						_react2.default.createElement(
							_antd.AutoComplete,
							{
								className: 'certain-category-search fr',
								dropdownClassName: 'certain-category-search-dropdown',
								dropdownMatchSelectWidth: false,
								dropdownStyle: { width: 125 },
								size: 'middle',
								style: { width: '145px', marginLeft: '6px' },
								dataSource: options,
								placeholder: '\u8BF7\u8F93\u5165',
								optionLabelProp: 'value',
								onSelect: this.onSelect,
								onSearch: this.onChange
							},
							_react2.default.createElement(_antd.Input, { suffix: _react2.default.createElement(_antd.Icon, { type: 'search', className: 'certain-category-icon' }) })
						)
					),
					_react2.default.createElement(
						_antd.Affix,
						{ offsetTop: 60 },
						_react2.default.createElement(
							'div',
							{ className: 'require-table' },
							_react2.default.createElement(
								_reactCustomScrollbars.Scrollbars,
								{
									style: {
										minHeight: "500px",
										height: "calc(100vh - " + ratio < 100 ? 300 + 3 * ratio : 300 + "px)"
									},
									autoHide: false },
								mobx.toJS(maintableData).length > 0 ? _react2.default.createElement(
									_reactInfiniteScroller2.default,
									{
										initialLoad: false,
										pageStart: 0,
										loadMore: this.handleInfiniteOnLoad.bind(this),
										hasMore: !loading && hasMore,
										useWindow: false
									},
									mobx.toJS(maintableData).length > 0 && mobx.toJS(maintableData).map(function (item, index) {
										return _react2.default.createElement(
											'div',
											{
												className: item.selested == true ? "require-tr require-tr-active" : "require-tr",
												onClick: _this4.selectClick.bind(_this4, item),
												key: 'tab-' + index },
											_react2.default.createElement(
												'span',
												{ className: item.isRead == true ? "require-td" : "require-td active", title: item.title },
												item.title
											),
											_react2.default.createElement(
												'span',
												{ className: 'require-title' },
												_react2.default.createElement(
													'span',
													{ className: 'mr5' },
													item.userName
												),
												item.tags == null ? null : item.tags.map(function (item, index) {
													return _react2.default.createElement(
														_antd.Tag,
														{
															className: index >= 2 ? "hidden" : "",
															color: 'gold' },
														item.name
													);
												})
											),
											_react2.default.createElement(
												'span',
												{ className: 'require-lavel' },
												(0, _moment2.default)(item.actualTime).format("YYYY-MM-DD")
											),
											_react2.default.createElement(_antd.Icon, { type: 'close', onClick: _this4.showDeleteConfirm.bind(_this4, item.id), title: '删除',
												className: "require-del",
												style: { position: 'absolute', right: '10px', top: '10px', color: 'rgb(217, 0, 27' }
											})
										);
									}),
									loading && hasMore && _react2.default.createElement(
										'div',
										{ className: 'demo-loading-container' },
										_react2.default.createElement(_antd.Spin, null)
									)
								) : _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } })
							)
						),
						_react2.default.createElement(
							'div',
							{ style: {
									fontSize: '12px',
									color: 'rgb(153, 153, 153)'
								} },
							'\u5171 ' + maintotalCount + ' \u6761 '
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'fl', style: { width: 'calc(100% - 350px)', borderLeft: '1px solid #EBEBEB', minHeight: '350px', paddingLeft: '15px' } },
					temType === "weekreport" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_EditeVisit2.default, {
						onRef: this.onRef,
						store: this.store,
						detailData: mobx.toJS(detailData),
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						getTable: this.getTable,
						temType: temType
					}) : null,
					temType === "factoryreport" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_EditeVisit2.default, {
						onRef: this.onRef,
						store: this.store,
						detailData: mobx.toJS(detailData),
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						getTable: this.getTable,
						temType: temType
					}) : null
				)
			);
		}
	}]);

	return OfficeDraft;
}(_react2.default.Component)) || _class) || _class);
exports.default = OfficeDraft;

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 编辑表单
                  * 2020-07-21
                  * dangw@bocspace.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _EditeFormVisit = __webpack_require__(716);

var _EditeFormVisit2 = _interopRequireDefault(_EditeFormVisit);

var _EditeFormMonthlySharing = __webpack_require__(712);

var _EditeFormMonthlySharing2 = _interopRequireDefault(_EditeFormMonthlySharing);

var _EditeFormSummary = __webpack_require__(715);

var _EditeFormSummary2 = _interopRequireDefault(_EditeFormSummary);

var _EditeFormReplay = __webpack_require__(714);

var _EditeFormReplay2 = _interopRequireDefault(_EditeFormReplay);

var _EditeFormNews = __webpack_require__(713);

var _EditeFormNews2 = _interopRequireDefault(_EditeFormNews);

var _EditeFormWeekreport = __webpack_require__(717);

var _EditeFormWeekreport2 = _interopRequireDefault(_EditeFormWeekreport);

var _EditeFormFactoryreport = __webpack_require__(711);

var _EditeFormFactoryreport2 = _interopRequireDefault(_EditeFormFactoryreport);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditeVisit = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(EditeVisit, _React$Component);

	function EditeVisit(props) {
		_classCallCheck(this, EditeVisit);

		var _this2 = _possibleConstructorReturn(this, (EditeVisit.__proto__ || Object.getPrototypeOf(EditeVisit)).call(this, props));

		_this2.saveDraft = function () {
			_this2.child.saveDraft();
		};

		_this2.handleSubmit = function () {
			_this2.child.handleSubmit();
		};

		_this2.onClose = function () {
			_this2.child.onClose();
		};

		_this2.onRef = function (ref) {
			_this2.child = ref;
		};

		_this2.updateState = function (type, data) {
			_this2.setState(_defineProperty({}, type, data));
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			loading: false
		};
		return _this2;
	}

	_createClass(EditeVisit, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;
			var pathname = _this.props.pathname;

			if (pathname && pathname.includes("/digital/draft") && _this.store.draftId != "") {
				// 定时器
				_this.timer = setInterval(function () {
					// 心跳接口 30s跳动一个
					_this.child.saveAuto(0);
				}, 30000);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			// 页面离开时清楚定时器
			this.timer && clearInterval(this.timer);
			this.timer = null;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 3 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 20 }
				}
			};
			var _props = this.props,
			    detailData = _props.detailData,
			    temType = _props.temType;
			var loading = this.state.loading;


			return _react2.default.createElement(
				_antd.Form,
				formItemLayout,
				temType == "visit" ? _react2.default.createElement(_EditeFormVisit2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: mobx.toJS(detailData),
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					onCancle: this.props.onCancle,
					updateState: this.updateState,
					pathname: this.props.pathname
				}) : null,
				temType == "monthlySharing" ? _react2.default.createElement(_EditeFormMonthlySharing2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: mobx.toJS(detailData),
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					onCancle: this.props.onCancle,
					updateState: this.updateState,
					pathname: this.props.pathname
				}) : null,
				temType == "summary" ? _react2.default.createElement(_EditeFormSummary2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: mobx.toJS(detailData),
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					onCancle: this.props.onCancle,
					updateState: this.updateState,
					pathname: this.props.pathname
				}) : null,
				temType == "replay" ? _react2.default.createElement(_EditeFormReplay2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: mobx.toJS(detailData),
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					onCancle: this.props.onCancle,
					updateState: this.updateState,
					pathname: this.props.pathname
				}) : null,
				temType == "news" ? _react2.default.createElement(_EditeFormNews2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: mobx.toJS(detailData),
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					onCancle: this.props.onCancle,
					updateState: this.updateState,
					pathname: this.props.pathname
				}) : null,
				temType == "weekreport" ? _react2.default.createElement(_EditeFormWeekreport2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: mobx.toJS(detailData),
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					onCancle: this.props.onCancle,
					updateState: this.updateState,
					pathname: this.props.pathname
				}) : null,
				temType == "factoryreport" ? _react2.default.createElement(_EditeFormFactoryreport2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: mobx.toJS(detailData),
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					onCancle: this.props.onCancle,
					updateState: this.updateState,
					pathname: this.props.pathname
				}) : null,
				_react2.default.createElement(
					_antd.Form.Item,
					{
						wrapperCol: {
							xs: { span: 24 },
							sm: { span: 24 }
						},
						className: 'clearfix tr mt20 pl20 pr20 fixed_bottom',
						style: {
							width: this.props.appStore.collapsed ? "calc(100% - 470px)" : " calc(100% - 590px)"
						}
					},
					this.props.isWeekShow != undefined && this.props.isWeekShow == false ? null : _react2.default.createElement(
						_antd.Button,
						{ className: 'fl',
							shape: 'round',
							style: {
								position: 'relative',
								top: '4px'
							},
							type: 'primary',
							onClick: this.saveDraft },
						'\u4FDD\u5B58\u8349\u7A3F'
					),
					_react2.default.createElement(
						_antd.Popconfirm,
						{ placement: 'top', title: '\u786E\u5B9A\u8981\u53D6\u6D88\u672C\u6B21\u7F16\u8F91\u5417?', onConfirm: function onConfirm() {
								return _this3.onClose();
							} },
						_react2.default.createElement(
							_antd.Button,
							{ shape: 'round', style: { marginRight: 8 } },
							'\u8FD4\u56DE'
						)
					),
					_react2.default.createElement(
						_antd.Button,
						{ shape: 'round',
							loading: loading,
							onClick: this.handleSubmit,
							type: 'primary' },
						'\u63D0\u4EA4\u53D1\u5E03'
					)
				)
			);
		}
	}]);

	return EditeVisit;
}(_react2.default.Component)) || _class) || _class);
exports.default = EditeVisit;

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


/***/ })

});
//# sourceMappingURL=36-afa7d4b4bae6ff2924e9.1629092961041.js.map