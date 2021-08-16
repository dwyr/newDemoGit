webpackJsonp([11],{

/***/ 1484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 知识管理
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

var _DetailForm = __webpack_require__(1566);

var _DetailForm2 = _interopRequireDefault(_DetailForm);

var _DetailFormVisit = __webpack_require__(1571);

var _DetailFormVisit2 = _interopRequireDefault(_DetailFormVisit);

var _DetailFormMonthlySharing = __webpack_require__(1567);

var _DetailFormMonthlySharing2 = _interopRequireDefault(_DetailFormMonthlySharing);

var _DetailFormSummary = __webpack_require__(1570);

var _DetailFormSummary2 = _interopRequireDefault(_DetailFormSummary);

var _DetailFormReplay = __webpack_require__(1569);

var _DetailFormReplay2 = _interopRequireDefault(_DetailFormReplay);

var _DetailFormNews = __webpack_require__(1568);

var _DetailFormNews2 = _interopRequireDefault(_DetailFormNews);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(89);

var _DigitalComment = __webpack_require__(1542);

var _DigitalComment2 = _interopRequireDefault(_DigitalComment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmartOrg = (_dec = (0, _mobxReact.inject)('DigtalOrgStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(SmartOrg, _React$Component);

	function SmartOrg(props) {
		_classCallCheck(this, SmartOrg);

		var _this2 = _possibleConstructorReturn(this, (SmartOrg.__proto__ || Object.getPrototypeOf(SmartOrg)).call(this, props));

		_this2.handleEdit = function (param) {
			var dataArray = mobx.toJS(_this2.store.maintableData).map(function (item) {
				return Object.assign(item, { selested: false });
			});
			var dindex = dataArray.findIndex(function (item) {
				return item.id == param.id;
			});
			dataArray.splice(dindex, 1, Object.assign(param, { selested: true, isRead: true }));
			_this2.store.maintableData = Object.assign([], dataArray);
			_this2.store.selestedId = param.id;
			_this2.store.draftId = param.id; // 记录草稿ID
			_this2.store.detemList = Object.assign({}, mobx.toJS(_this2.store.digtalTemData).filter(function (item) {
				return item.type == param.type;
			})[0]);
			_this2.store.temList = Object.assign({}, mobx.toJS(_this2.store.digtalTemData).filter(function (item) {
				return item.type == param.type;
			})[0]);
			_this2.store.getJournalById(param.id).then(function (res) {
				_this2.store.deData = Object.assign({}, res);
				//this.store.detailData = Object.assign({}, res);
			});
			// 点赞
			_this2.store.getLikeUsersByJournalId();
			// 评论
			_this2.store.getCommentsByJournalId();
			_this2.store.getJournalIndicators();
			_this2.store.isEdit = false; // 详情态
			if (_this2.child && _this2.child.handleCalc != undefined && typeof _this2.child.handleCalc == "function") {
				_this2.child.handleCalc();
			}
			_this2.store.getNotReadCount();
			_this2.store.getReadUsersByJournalId();
		};

		_this2.handleInfiniteOnLoad = function () {
			var dataArray = mobx.toJS(_this2.store.maintableData);
			if (_this2.store.maintotalCount === dataArray.length) {
				return;
			}
			_this2.store.loading = true;
			_this2.store.mainQuery.pageIndex = _this2.store.mainQuery.pageIndex + 1;
			_this2.store.getJournalMainPageListNew().then(function (res) {
				var data = res;
				dataArray = dataArray.concat(data.body);
				_this2.store.maintableData = Object.assign([], dataArray);
				_this2.store.loading = false;
			});
		};

		_this2.handleClick = function (type) {
			_this2.store.mainQuery.orderType = type;
			_this2.store.mainQuery.readType = 0;
			_this2.store.mainQuery.pageIndex = 1;
			_this2.store.mainQuery.pageSize = 10;
			_this2.store.getJournalMainPageList().then(function (res) {
				if (res) {
					if (mobx.toJS(_this2.store.maintableData).length > 0) {
						// 初始化默认值，列表第一项
						var param = mobx.toJS(_this2.store.maintableData)[0];
						_this2.handleEdit(param);
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
					_this2.store.getJournalMainPageList();
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
						_this2.store.getJournalMainPageList();
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
			_this2.store.getJournalMainPageList();
		};

		_this2.onChange = function (value) {
			// 查询
			_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
				text: value,
				pageIndex: 1,
				pageSize: 10
			});
			_this2.store.getJournalMainPageList();
		};

		_this2.onAsync = function (type, id, index) {
			_this2.store.syncAssignment(id).then(function (res) {
				if (res) {
					_antd.message.success("同步成功");
					// 前端同步数据
					var detailData = JSON.parse(JSON.stringify(_this2.store.deData));
					var assignments = detailData[type];
					assignments[index].isSync = 1; // 同步成功
					_this2.store.deData = Object.assign(detailData, _defineProperty({}, type, assignments));
				}
			});
		};

		_this2.handleAddNew = function (detail) {
			_this2.store.saveAssignments(detail).then(function (res) {
				if (res) {
					_antd.message.success("保存成功");

					// 重查
					_this2.store.getJournalById(_this2.store.selestedId).then(function (res) {
						_this2.store.deData = Object.assign({}, res);
						_this2.child.handleCalc();
					});
				}
			});
		};

		_this2.onRef = function (ref) {
			_this2.child = ref;
		};

		_this2.onRef2 = function (ref) {
			_this2.child2 = ref;
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

		_this2.handleRoute = function () {
			_this2.store.digtalKey = "2";
			_this2.props.history.push("/digital/org");
		};

		_this2.handleDraftRoute = function () {
			_this2.store.digtalKey = 0;
			_this2.props.history.push("/digital/draft");
		};

		_this2.getTable = function () {
			_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
				saveType: 2,
				text: "",
				tag: [],
				type: [],
				orderType: 0,
				pageIndex: 1,
				pageSize: 10,
				category: 1,
				readType: 0
			});
			_this2.store.getJournalMainPageList().then(function (res) {
				if (res) {
					if (mobx.toJS(_this2.store.maintableData).length > 0) {
						// 初始化默认值，列表第一项
						var param = mobx.toJS(_this2.store.maintableData)[0];
						_this2.handleEdit(param);
					} else {
						return false;
					}
				}
			});
		};

		_this2.scrollToAnchor = function (anchorName) {
			if (anchorName) {
				try {
					var anchorElement = document.getElementById(anchorName);
					if (anchorElement) {
						anchorElement.scrollIntoView({ block: 'center' });
					}
				} catch (err) {
					console.log("scrollToAnchorERR=>" + err);
				}
			}
		};

		_this2.checkoutType = function (type, item) {
			if (type == "1") {
				//全部
				_this2.setState({
					digtalTem: []
				}, function () {
					// 查询
					_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
						type: _this2.state.digtalTem,
						pageIndex: 1,
						pageSize: 10
					});
					_this2.store.getJournalMainPageList().then(function (res) {
						if (res) {
							if (mobx.toJS(_this2.store.maintableData).length > 0) {
								// 初始化默认值，列表第一项
								var param = mobx.toJS(_this2.store.maintableData)[0];
								_this2.handleEdit(param);
							} else {
								return false;
							}
						}
					});
				});
			} else if (type == "3") {
				// 收藏
				_this2.setState({
					digtalTem: ["collection"]
				}, function () {
					// 查询
					_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
						type: _this2.state.digtalTem,
						pageIndex: 1,
						pageSize: 10
					});
					_this2.store.getJournalMainPageList().then(function (res) {
						if (res) {
							if (mobx.toJS(_this2.store.maintableData).length > 0) {
								// 初始化默认值，列表第一项
								var param = mobx.toJS(_this2.store.maintableData)[0];
								_this2.handleEdit(param);
							} else {
								return false;
							}
						}
					});
				});
			} else {
				_this2.setState({
					digtalTem: [item.type]
				}, function () {
					// 查询
					_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
						type: _this2.state.digtalTem,
						pageIndex: 1,
						pageSize: 10
					});
					_this2.store.getJournalMainPageList().then(function (res) {
						if (res) {
							if (mobx.toJS(_this2.store.maintableData).length > 0) {
								// 初始化默认值，列表第一项
								var param = mobx.toJS(_this2.store.maintableData)[0];
								_this2.handleEdit(param);
							} else {
								return false;
							}
						}
					});
				});
			}
		};

		_this2.checkreadType = function () {
			var mainQuery = JSON.parse(JSON.stringify(_this2.store.mainQuery));
			if (mainQuery.readType == 0) {
				// 查询
				_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
					readType: 1,
					pageIndex: 1,
					pageSize: 10
				});
				_this2.store.getJournalMainPageList().then(function (res) {
					if (res) {
						if (mobx.toJS(_this2.store.maintableData).length > 0) {
							// 初始化默认值，列表第一项
							var param = mobx.toJS(_this2.store.maintableData)[0];
							_this2.handleEdit(param);
						} else {
							return false;
						}
					}
				});
			} else {
				// 查询
				_this2.store.mainQuery = Object.assign(mobx.toJS(_this2.store.mainQuery), {
					readType: 0,
					pageIndex: 1,
					pageSize: 10
				});
				_this2.store.getJournalMainPageList().then(function (res) {
					if (res) {
						if (mobx.toJS(_this2.store.maintableData).length > 0) {
							// 初始化默认值，列表第一项
							var param = mobx.toJS(_this2.store.maintableData)[0];
							_this2.handleEdit(param);
						} else {
							return false;
						}
					}
				});
			}
		};

		_this2.store = _this2.props.DigtalOrgStore;
		_this2.state = {
			digtalTem: [], // 类型
			ratio: 100
		};
		return _this2;
	}

	_createClass(SmartOrg, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;
			// 初始化查询
			_this.getTable();
			this.store.getJournalTypeList();
			this.store.getJournalTagList();
			this.store.getUserPermissionByAppCode();
			// 时间监听
			_this.emitter = _events2.default.addListener('journal', function (journal) {
				_this.getTable();
			});
			// 获取大文件上传sts
			this.props.DigtalOrgStore.getSts();

			window.addEventListener("resize", function () {
				_this.setState({
					ratio: (0, _utils.detectZoom)()
				});
			}, false);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this = this;
			if (_this.emitter) {
				_events2.default.removeListener(_this.emitter);
			}
			window.removeEventListener("resize", function () {
				_this.setState({
					ratio: 100
				});
			}, false);
		}

		// 切换详情


		// 获取下一页信息


		// 设置状态


		// 保存追加任务


		// 提交发布成功，跳转到知识管理


		// 草稿保存成功，跳转到草稿箱


		// 重查


		// 锚点定位


		// 类型判断


		// 未读

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    digtalTem = _state.digtalTem,
			    ratio = _state.ratio;
			var _store = this.store,
			    notReadCount = _store.notReadCount,
			    maintableData = _store.maintableData,
			    loading = _store.loading,
			    hasMore = _store.hasMore,
			    maintotalCount = _store.maintotalCount,
			    digtalTemData = _store.digtalTemData,
			    mainQuery = _store.mainQuery,
			    tagList = _store.tagList,
			    detailData = _store.detailData,
			    hasJournal = _store.hasJournal,
			    temList = _store.temList,
			    isEdit = _store.isEdit,
			    deData = _store.deData,
			    detemList = _store.detemList;

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
								checked: _this3.state["digtalTem"].includes(item.type),
								key: item.type + "-" + index,
								onChange: _this3.onChangeState.bind(_this3, "digtalTem", item)
							},
							item.name
						)
					);
				})
			);
			var orderType = mobx.toJS(mainQuery).orderType;
			var readType = mobx.toJS(mainQuery).readType;
			var temType = mobx.toJS(detemList).type;

			return _react2.default.createElement(
				_antd.Row,
				{ className: 'w clearfix pr' },
				_react2.default.createElement(
					'ul',
					{ className: 'smartorg_card' },
					_react2.default.createElement(
						'li',
						{ key: 'digtalTemData' + "quanbu",
							className: digtalTem.length == 0 ? "smartorg_card_active" : "",
							onClick: this.checkoutType.bind(this, '1') },
						'\u5168\u90E8'
					),
					mobx.toJS(digtalTemData).map(function (item, index) {
						return _react2.default.createElement(
							'li',
							{ key: 'digtalTemData' + index,
								className: digtalTem.length > 0 && digtalTem.includes(item.type) ? "smartorg_card_active" : "",
								onClick: _this3.checkoutType.bind(_this3, '2', item) },
							item.name
						);
					}),
					_react2.default.createElement(
						'li',
						{ key: 'digtalTemData' + "shoucang",
							className: digtalTem.length > 0 && digtalTem.includes("collection") ? "smartorg_card_active" : "",
							onClick: this.checkoutType.bind(this, '3') },
						'\u6211\u7684\u6536\u85CF'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'fl', style: { paddingRight: '16px', width: '330px', height: "calc(100vh - 180px)" } },
					_react2.default.createElement(
						'div',
						{ className: 'clearfix',
							style: {
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
							{ style: { display: 'inline-block', width: '21px' } },
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
							{ style: { display: 'inline-block', width: '21px' } },
							_react2.default.createElement(_antd.Icon, { onClick: this.handleClick.bind(this, 3), type: 'caret-up', className: orderType == 4 ? "caret-up digital_icon_active" : "digital_icon caret-up" }),
							_react2.default.createElement(_antd.Icon, { onClick: this.handleClick.bind(this, 4), type: 'caret-down', className: orderType == 3 ? "caret-down digital_icon_active" : "digital_icon caret-down" })
						),
						_react2.default.createElement(
							'span',
							{
								onClick: this.checkreadType,
								style: { textAlign: 'center', color: readType == 0 ? "#666" : "#1E91FF", display: 'inline-block', width: '70px', fontSize: '14px', cursor: 'pointer' } },
							'\u672A\u8BFB(',
							notReadCount >= 99 ? "99+" : notReadCount,
							')'
						),
						_react2.default.createElement(
							_antd.AutoComplete,
							{
								className: 'certain-category-search fr',
								dropdownClassName: 'certain-category-search-dropdown',
								dropdownMatchSelectWidth: false,
								dropdownStyle: { width: '125px' },
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
						'div',
						{ className: 'require-table', style: { height: "calc(100% - 63px)" } },
						_react2.default.createElement(
							_reactCustomScrollbars.Scrollbars,
							{
								style: {
									height: "calc(100% - 10px)"
									//minHeight: "100px",
									//height: "calc(100vh - "+ ratio<100?(300+3*ratio):(180)+"px)"
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
											onClick: _this3.handleEdit.bind(_this3, item),
											key: 'tab-' + index },
										_react2.default.createElement(
											'span',
											{
												className: item.isRead == true ? "require-td" : "require-td active",
												title: item.title },
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
										)
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
				),
				_react2.default.createElement(
					'div',
					{ className: 'fl', style: { width: 'calc(100% - 350px)', borderLeft: '1px solid #EBEBEB', minHeight: '350px', paddingLeft: '15px',
							overflowY: 'scroll', height: "calc(100vh - 180px)"
						} },
					temType === "meeting" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_DetailForm2.default, {
						store: this.store,
						detailData: mobx.toJS(deData),
						onAsync: this.onAsync,
						hasJournal: hasJournal,
						handleAddNew: this.handleAddNew,
						onRef: this.onRef,
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						handleDraftRoute: this.handleDraftRoute,
						getTable: this.getTable,
						scrollToAnchor: this.scrollToAnchor
					}) : null,
					temType === "visit" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_DetailFormVisit2.default, {
						store: this.store,
						detailData: mobx.toJS(deData),
						onAsync: this.onAsync,
						hasJournal: hasJournal,
						handleAddNew: this.handleAddNew,
						onRef: this.onRef,
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						handleDraftRoute: this.handleDraftRoute,
						getTable: this.getTable,
						scrollToAnchor: this.scrollToAnchor
					}) : null,
					temType === "monthlySharing" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_DetailFormMonthlySharing2.default, {
						store: this.store,
						detailData: mobx.toJS(deData),
						onAsync: this.onAsync,
						hasJournal: hasJournal,
						handleAddNew: this.handleAddNew,
						onRef: this.onRef,
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						handleDraftRoute: this.handleDraftRoute,
						getTable: this.getTable,
						scrollToAnchor: this.scrollToAnchor
					}) : null,
					temType === "summary" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_DetailFormSummary2.default, {
						store: this.store,
						detailData: mobx.toJS(deData),
						onAsync: this.onAsync,
						hasJournal: hasJournal,
						handleAddNew: this.handleAddNew,
						onRef: this.onRef,
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						handleDraftRoute: this.handleDraftRoute,
						getTable: this.getTable,
						scrollToAnchor: this.scrollToAnchor
					}) : null,
					temType === "replay" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_DetailFormReplay2.default, {
						store: this.store,
						detailData: mobx.toJS(deData),
						onAsync: this.onAsync,
						hasJournal: hasJournal,
						handleAddNew: this.handleAddNew,
						onRef: this.onRef,
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						handleDraftRoute: this.handleDraftRoute,
						getTable: this.getTable,
						scrollToAnchor: this.scrollToAnchor
					}) : null,
					temType === "news" ? mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : _react2.default.createElement(_DetailFormNews2.default, {
						store: this.store,
						detailData: mobx.toJS(deData),
						onAsync: this.onAsync,
						hasJournal: hasJournal,
						handleAddNew: this.handleAddNew,
						onRef: this.onRef,
						pathname: this.props.location.pathname,
						handleRoute: this.handleRoute,
						handleDraftRoute: this.handleDraftRoute,
						getTable: this.getTable,
						scrollToAnchor: this.scrollToAnchor
					}) : null,
					mobx.toJS(maintableData).length == 0 ? _react2.default.createElement(_antd.Empty, { imageStyle: { marginTop: "50px" } }) : !isEdit ? _react2.default.createElement(_DigitalComment2.default, {
						store: this.store
					}) : null
				)
			);
		}
	}]);

	return SmartOrg;
}(_react2.default.Component)) || _class) || _class);
exports.default = SmartOrg;

/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 大文件上传组件
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _aliOss = __webpack_require__(232);

var _aliOss2 = _interopRequireDefault(_aliOss);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactViewer = __webpack_require__(337);

var _reactViewer2 = _interopRequireDefault(_reactViewer);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _journal = __webpack_require__(93);

var _journal2 = _interopRequireDefault(_journal);

var _download = __webpack_require__(68);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _mobxReact = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var MyUpload = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(MyUpload, _React$Component);

	function MyUpload(props) {
		var _this2 = this;

		_classCallCheck(this, MyUpload);

		var _this = _possibleConstructorReturn(this, (MyUpload.__proto__ || Object.getPrototypeOf(MyUpload)).call(this, props));

		_this.getDocumentUrl = function (url) {
			return (0, _api.requestPost)('getDocumentUrl', _config2.default.journal.getDocumentUrl, _journal2.default.journal.getDocumentUrl, { url: url });
		};

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
				/*let array = JSON.parse(JSON.stringify([...oldFileList, ...newFileList]))
    let _this = this;
    _this.setState({
    	loading: true
    });
    setTimeout(function(){
    	_this.props.saveAttachment(array);
    	_this.setState({
    		loading: false
    	});
    }, 3000);*/
			} else if (status === "removed") {
				// 删除
				/*let id = info.file.id;
    if (id !== "" || id !== null) { // 删除已有的
    	// this.props.delNode(id);
    }*/
				var array = JSON.parse(JSON.stringify([].concat(_toConsumableArray(oldFileList), _toConsumableArray(newFileList))));
				_this.props.saveAttachment(array);
			}
		};

		_this.changeSrc = function (res, file) {
			var _this$state = _this.state,
			    fileList = _this$state.fileList,
			    host = _this$state.host;

			var oldFileList = JSON.parse(JSON.stringify(fileList));

			var url = host + uploadPath('path', file);
			var obj = Object.assign({}, {
				uid: file.uid,
				name: file.name,
				status: "done",
				url: url,
				fileId: null,
				fileName: file.name,
				filePath: url,
				id: ""
			});
			var newFileList = [obj];

			// 处理附件
			var array = JSON.parse(JSON.stringify([].concat(_toConsumableArray(oldFileList), newFileList)));
			_this.props.saveAttachment(array);
		};

		_this.beforeUpload = function (file) {
			var accept = _this.props.accept;

			var acceptDefault = ".jpg,.jpeg,.gif,.png,.bmp,.doc,.docx,.xlsx,.xls,.pdf,.ppt,.pptx"; // 默认值限制格式
			if (accept == undefined) {
				// 没有传参数
				var type = file.type.split("/")[1];
				//console.log(accept, file.type, type, 'accept')
				if (!acceptDefault.includes(type)) {
					//message.warn("格式不对");
					//return false;
				}
			} else {
				// 外部传参数
				var _type = file.type.split("/")[1];
				if (!accept.includes(_type)) {
					_antd.message.warn("格式不对, 只允许上传图片");
					return false;
				}
			}
			var isLt2M = file.size / 1024 / 1024 < 2000;
			if (!isLt2M) {
				_antd.message.error('Image must smaller than 2MB!');
			}
			_this.setState({
				loading: true
			}, function () {
				if (_this.props.journalType) {
					_this.store.journal = true; // 记录一次
				}
			});
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = function () {
				// 使用ossupload覆盖默认的上传方法
				UploadToOss(_this, '上传路径oss配置信息', file).then(function (data) {
					return data;
				}).then(function (data) {
					// 处理地址
					var res = data.res;

					if (res.status && res.status == 200) {
						// 单个文件上传成功
						_this.setState({
							loading: false
						}, function () {
							if (_this.props.journalType) {
								_this.store.journal = false; // 记录一次
							}
						});

						_this.changeSrc(res, file);
					}
				}).catch(function (error) {
					_antd.message.error("文件上传失败");
					_this.setState({
						loading: false
					}, function () {
						if (_this.props.journalType) {
							_this.store.journal = false; // 记录一次
						}
					});
					return false;
				});
			};
			return false; // 不调用默认的上传方法
		};

		_this.handlePreview = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
				var isAssetTypeAnImage, getExt, fileList, imageArray;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// 文档
								if (/\.(doc|docx)$/.test(file.name) || /\.(xls|xlsx)$/.test(file.name) || /\.(pdf)$/.test(file.name) || /\.(zip|rar)$/.test(file.name) || /\.(ppt|pptx)$/.test(file.name)) {
									_this.getDocumentUrl(file.filePath).then(function (res) {
										_this.setState({
											previewImage: res,
											previewVisible: true,
											name: file.name,
											filePath: file.filePath
										});
									});
								} else {
									// 图片、音频
									// 文件类型判断
									isAssetTypeAnImage = function isAssetTypeAnImage(ext) {
										return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
									};

									//获取后缀


									getExt = function getExt(filePath) {
										// 去掉url的问号
										if (filePath.indexOf("?") != -1) {
											filePath = filePath.split("?")[0];
										}
										//获取最后一个.的位置
										var index = filePath.lastIndexOf(".");
										//获取后缀
										var ext = filePath.substr(index + 1);
										return ext;
									};

									if (isAssetTypeAnImage(getExt(file.filePath))) {
										// 判断是图片
										fileList = JSON.parse(JSON.stringify(_this.state.fileList));
										imageArray = void 0;

										imageArray = fileList.filter(function (item) {
											return isAssetTypeAnImage(getExt(item.filePath));
										}).map(function (item) {
											return Object.assign({}, {
												src: item.filePath,
												alt: item.name,
												downloadUrl: item.filePath
											});
										});
										_this.setState({
											visible: true,
											imageArray: Object.assign([], imageArray),
											activeIndex: imageArray.findIndex(function (item) {
												return item.src == file.filePath;
											})
										});
									} else {
										// 音频
										_this.setState({
											previewImage: file.filePath,
											previewVisible: true,
											name: file.name,
											filePath: file.filePath
										});
									}
								}

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();

		_this.handleCancel = function (type) {
			return _this.setState(_defineProperty({}, type, false));
		};

		_this.downloadUrl = function () {
			var _this$state2 = _this.state,
			    filePath = _this$state2.filePath,
			    name = _this$state2.name;

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(zip|rar)$/.test(name) || /\.(ppt|pptx)$/.test(name);
			if (isImage) {
				(0, _download.downloadFile)(filePath, name); // 直接下载pdf
			} else {
				_this.downloadImage(filePath, name);
			}
		};

		_this.onDownload = function (file) {
			var filePath = file.filePath,
			    name = file.name;

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(zip|rar)$/.test(name) || /\.(ppt|pptx)$/.test(name);
			if (isImage) {
				(0, _download.downloadFile)(filePath, name); // 直接下载pdf
			} else {
				_this.downloadImage(filePath, name);
			}
		};

		_this.downloadImage = function (filePath, name) {
			//获取最后一个.的位置
			var index = filePath.lastIndexOf(".");
			//获取后缀
			var ext = filePath.substr(index + 1);

			// 直接下载图片
			var x = new XMLHttpRequest();
			x.open("GET", filePath, true);
			x.responseType = 'blob';
			x.onload = function (e) {
				(0, _download.download)(x.response, name, "image/" + ext);
			};
			x.send();
		};

		_this.cancel = function () {
			_this.setState({
				loading: false
			}, function () {
				if (_this.props.journalType) {
					_this.store.journal = false; // 清楚记录
				}
			});
		};

		_this.store = _this.props.appStore;
		_this.state = {
			fileList: _this.props.fileList,
			loading: false,
			token: {
				access_key_id: '', // oss的key_id
				access_key_secret: '', // oss的secret
				stsToken: '',
				region: 'oss-cn-beijing', // oss的region
				bucket: 'xinlj', // oss的bucket
				OSS_ENDPOINT: 'oss-cn-beijing.aliyuncs.com' // 自己oss服务器的配置信息
			},
			host: 'https://xinlj.oss-cn-beijing.aliyuncs.com/', // 阿里云host
			previewVisible: false,
			previewImage: '',
			name: "",
			filePath: "",
			visible: false,
			imageArray: [], // 图片预览
			activeIndex: 0
		};
		return _this;
	}

	_createClass(MyUpload, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.fileList) != JSON.stringify(this.props.fileList)) {
				this.setState({
					fileList: nextProps.fileList.map(function (file) {
						if (/\.(doc|docx)$/.test(file.name)) {
							file.url = './images/word_default.png';
						} else if (/\.(xls|xlsx)$/.test(file.name)) {
							file.url = './images/exel_default.png';
						} else if (/\.(pdf)$/.test(file.name)) {
							file.url = './images/pdf.svg';
						} else if (/\.(zip|rar)$/.test(file.name)) {
							file.url = './images/zip_default.png';
						} else if (/\.(ppt|pptx)$/.test(file.name)) {
							file.url = './images/ppt.png';
						} else {
							var url = file.url;
							if (url.includes("oss-cn-beijing.aliyuncs.com")) {
								// 判断图片时oss上传的
								if (url.indexOf("?") != -1) {
									url = url.split("?")[0];
									file.url = url + '?x-oss-process=image/resize,w_500,limit_0';
								} else {
									file.url = file.url + '?x-oss-process=image/resize,w_500,limit_0';
								}
							} else {
								file.url = file.url;
							}
						}
						return file;
					})
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
			var _this3 = this;

			if (this.props.journalType) {
				this.store.journal = false; // 记录一次
			}
			if (this.props.fileList) {
				this.setState({
					fileList: this.props.fileList.map(function (file) {
						if (/\.(doc|docx)$/.test(file.name)) {
							file.url = './images/word_default.png';
						} else if (/\.(xls|xlsx)$/.test(file.name)) {
							file.url = './images/exel_default.png';
						} else if (/\.(pdf)$/.test(file.name)) {
							file.url = './images/pdf.svg';
						} else if (/\.(zip|rar)$/.test(file.name)) {
							file.url = './images/zip_default.png';
						} else if (/\.(ppt|pptx)$/.test(file.name)) {
							file.url = './images/ppt.png';
						} else {
							var url = file.url;
							if (url.includes("oss-cn-beijing.aliyuncs.com")) {
								// 判断图片时oss上传的
								if (url.indexOf("?") != -1) {
									url = url.split("?")[0];
									file.url = url + '?x-oss-process=image/resize,w_500,limit_0';
								} else {
									file.url = file.url + '?x-oss-process=image/resize,w_500,limit_0';
								}
							} else {
								file.url = file.url;
							}
						}
						return file;
					})
				});
			}

			// 阿里云上传参数
			(0, _api.requestPost)('getSts', _config2.default.bpm.getSts, _bpm2.default.bpm.getSts, {}).then(function (res) {
				var str = typeof res == "string" ? JSON.parse(res) : res;
				if (str) {
					var token = JSON.parse(JSON.stringify(_this3.state.token));
					_this3.setState({
						token: Object.assign(token, {
							access_key_id: str.accessKeyId,
							access_key_secret: str.accessKeySecret,
							stsToken: str.securityToken
						})
					});
				}
			});
		}

		// 只用做删除操作


		// 更新url


		// 手动下载


		// 预览下载


		// 直接下载


		// 取消上传

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    previewVisible = _state.previewVisible,
			    previewImage = _state.previewImage,
			    fileList = _state.fileList,
			    name = _state.name,
			    loading = _state.loading,
			    visible = _state.visible,
			    imageArray = _state.imageArray,
			    activeIndex = _state.activeIndex;
			var _props = this.props,
			    multiple = _props.multiple,
			    disabled = _props.disabled,
			    accept = _props.accept,
			    length = _props.length;

			var acceptDefault = ".jpg,.jpeg,.gif,.png,.bmp,.doc,.docx,.xlsx,.xls,.pdf,.ppt,.pptx"; // 默认值限制格式
			var props = {
				accept: accept == undefined ? acceptDefault : accept,
				name: 'file',
				multiple: multiple,
				onChange: this.handleChange,
				beforeUpload: this.beforeUpload,
				disabled: disabled,
				listType: "picture-card",
				onPreview: this.handlePreview,
				onDownload: this.onDownload,
				showUploadList: {
					showDownloadIcon: true
				}
			};
			var uploadButton = _react2.default.createElement(
				'div',
				{ className: 'pr' },
				_react2.default.createElement(_antd.Icon, { type: loading ? "loading" : "plus" }),
				loading ? _react2.default.createElement(
					'div',
					{ className: 'ant-upload-text' },
					'\u4E0A\u4F20\u4E2D'
				) : null,
				loading ? _react2.default.createElement(_antd.Icon, { type: 'stop',
					title: '\u53D6\u6D88\u4E0A\u4F20',
					style: {
						position: 'absolute',
						top: '-39px',
						right: '-22px',
						fontSize: '15px',
						color: '#1890ff'
					}, onClick: this.cancel }) : null
			);

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(zip|rar)$/.test(name) || /\.(ppt|pptx)$/.test(name);

			return _react2.default.createElement(
				'div',
				{ className: 'affairs_upload' },
				_react2.default.createElement(
					_antd.Upload,
					_extends({}, props, { fileList: fileList }),
					disabled || length >= "1" ? null : uploadButton
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: _react2.default.createElement(
							'div',
							null,
							name,
							_react2.default.createElement(
								'a',
								{ href: 'javascript:;', onClick: this.downloadUrl },
								'\u4E0B\u8F7D'
							)
						),
						width: '50%',
						style: { minHeight: '450px' },
						visible: previewVisible,
						footer: null,
						onCancel: this.handleCancel.bind(this, 'previewVisible') },
					isImage ? _react2.default.createElement('iframe', {
						src: previewImage,
						width: '100%',
						height: '100%',
						style: { minHeight: '450px' },
						frameBorder: '1' }) : _react2.default.createElement('img', { style: { backgroundSize: 'conver', width: '100%', maxHeight: '400px' }, src: previewImage, alt: '' })
				),
				_react2.default.createElement(_reactViewer2.default, {
					visible: visible,
					onClose: this.handleCancel.bind(this, 'visible'),
					images: imageArray,
					activeIndex: activeIndex,
					downloadable: true,
					customToolbar: function customToolbar(toolbars) {
						return toolbars.filter(function (item) {
							return item.key !== "download";
						}).concat([{
							key: "download",
							render: _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement('i', { className: 'react-viewer-icon react-viewer-icon-download' })
							),
							onClick: function onClick(activeImage) {
								var src = activeImage.src,
								    alt = activeImage.alt;

								_this4.downloadImage(src, alt);
							}
						}]);
					}
				})
			);
		}
	}]);

	return MyUpload;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyUpload;

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

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 评论、点赞、浏览量
            * dangwei@bocspace.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _CommonEmail = __webpack_require__(1565);

var _CommonEmail2 = _interopRequireDefault(_CommonEmail);

var _PersonEdit = __webpack_require__(1574);

var _PersonEdit2 = _interopRequireDefault(_PersonEdit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentList = (0, _mobxReact.observer)(_class = function (_Component) {
	_inherits(CommentList, _Component);

	function CommentList(props) {
		_classCallCheck(this, CommentList);

		var _this = _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).call(this, props));

		_this.handleZan = function () {
			_this.store.addOrDelLike().then(function (res) {
				if (res == true) {
					_antd.message.success("操作成功");
					// 更新点赞
					_this.store.getLikeUsersByJournalId();
				}
			});
		};

		_this.handCollection = function () {
			_this.store.addOrDelCollection().then(function (res) {
				if (res == true) {
					_antd.message.success("操作成功");
					// 更新点赞
					_this.store.getJournalIndicators();
				}
			});
		};

		_this.handleVisibleChange = function (visible) {
			_this.setState({ visible: visible });
		};

		_this.handleEdit = function () {
			_this.store.getSharedEditingList().then(function (res) {
				if (res == null || Array.isArray(res) && res.length == 0) {
					_this.setState({
						title: "添加共享人",
						editvisible: true,
						data: res == null ? [] : res
					});
				} else {
					_this.setState({
						title: "编辑共享人",
						editvisible: true,
						data: res == null ? [] : res
					});
				}
			});
		};

		_this.onClose = function (type, param) {
			_this.setState(_defineProperty({}, type, param));
		};

		_this.updateState = function (type, param) {
			_this.setState(_defineProperty({}, type, param));
		};

		_this.store = _this.props.store;
		_this.state = {
			visible: false,
			title: "添加共享人",
			editvisible: false,
			data: [],
			loading: false
		};
		return _this;
	}

	_createClass(CommentList, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 点赞


		// 收藏

	}, {
		key: 'scrollToAnchor',


		// 定位
		value: function scrollToAnchor(key) {
			var scrollToAnchor = this.props.scrollToAnchor;

			scrollToAnchor(key);
		}

		// 共享编辑

	}, {
		key: 'render',
		value: function render() {
			var _store = this.store,
			    getLikeUsers = _store.getLikeUsers,
			    getComments = _store.getComments,
			    journalIndicators = _store.journalIndicators;

			var username = localStorage.getItem('username');
			var isLike = mobx.toJS(getLikeUsers).filter(function (item) {
				return item.userName == username;
			}).length > 0 ? true : false;

			var _mobx$toJS = mobx.toJS(journalIndicators),
			    haveCollection = _mobx$toJS.haveCollection;

			var _props = this.props,
			    pathname = _props.pathname,
			    detailData = _props.detailData,
			    isWeekShow = _props.isWeekShow,
			    userId = _props.userId;

			var isShow = pathname !== undefined && pathname == "/digital/office" ? true : false;
			var _state = this.state,
			    editvisible = _state.editvisible,
			    title = _state.title,
			    data = _state.data,
			    loading = _state.loading;
			// 当前行是否有修改权限

			var isWeek = isWeekShow == undefined ? false : isWeekShow != undefined && isWeekShow;

			return _react2.default.createElement(
				'span',
				null,
				_react2.default.createElement(
					_antd.Tooltip,
					{ title: '\u8BC4\u8BBA' },
					_react2.default.createElement(_antd.Icon, { type: 'message', className: 'commentlist_icon', onClick: this.scrollToAnchor.bind(this, "commentlist") })
				),
				' ',
				_react2.default.createElement(
					'span',
					{ className: 'commentlist_title' },
					mobx.toJS(getComments).length
				),
				_react2.default.createElement(
					_antd.Tooltip,
					{ title: '\u70B9\u8D5E' },
					isLike ? _react2.default.createElement(_antd.Icon, { type: 'like', theme: 'filled', className: 'commentlist_icon pointer', onClick: this.handleZan }) : _react2.default.createElement(_antd.Icon, { type: 'like', className: 'commentlist_icon pointer', onClick: this.handleZan })
				),
				_react2.default.createElement(
					'span',
					{ className: 'commentlist_title' },
					mobx.toJS(getLikeUsers).length
				),
				_react2.default.createElement(
					_antd.Tooltip,
					{ title: '\u5DF2\u8BFB' },
					_react2.default.createElement(_antd.Icon, { type: 'eye', className: 'commentlist_icon' })
				),
				_react2.default.createElement(
					'span',
					{ className: 'commentlist_title' },
					mobx.toJS(journalIndicators).viewCount || 0
				),
				!isShow ? _react2.default.createElement(
					_antd.Tooltip,
					{ title: "收藏" },
					_react2.default.createElement(_antd.Icon, { theme: haveCollection == 1 ? "filled" : "", type: 'star', className: 'commentlist_icon pointer', onClick: this.handCollection })
				) : null,
				_react2.default.createElement(
					_antd.Popover,
					{
						overlayClassName: 'digital_popver',
						placement: 'bottom',
						content: _react2.default.createElement(_CommonEmail2.default, {
							updateState: this.updateState,
							detailData: detailData,
							store: this.store }),
						trigger: 'click',
						visible: this.state.visible,
						onVisibleChange: this.handleVisibleChange
					},
					_react2.default.createElement(
						_antd.Button,
						{ className: 'ml10', type: 'link' },
						'\u5206\u4EAB'
					)
				),
				isWeek ? _react2.default.createElement(
					_antd.Button,
					{ type: 'link', onClick: this.handleEdit },
					'\u5171\u4EAB\u7F16\u8F91'
				) : null,
				_react2.default.createElement(_PersonEdit2.default, {
					title: title,
					visible: editvisible,
					onClose: this.onClose.bind(this, "editvisible", false),
					data: data,
					store: this.store
				}),
				_react2.default.createElement(_antd.Spin, { wrapperClassName: 'dib', tip: '\u6B63\u5728\u751F\u6210,\u8BF7\u7A0D\u7B49...', spinning: loading })
			);
		}
	}]);

	return CommentList;
}(_react.Component)) || _class;

exports.default = CommentList;

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

/***/ 1542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 评论组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * dangw@bocspace.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


var TextArea = _antd.Input.TextArea;

var Editor = function Editor(_ref) {
	var handleClick = _ref.handleClick,
	    onChange = _ref.onChange,
	    onSubmit = _ref.onSubmit,
	    submitting = _ref.submitting,
	    value = _ref.value;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_antd.Form.Item,
			null,
			_react2.default.createElement(TextArea, { rows: 4, onChange: onChange, value: value, placeholder: '' })
		),
		_react2.default.createElement(
			'div',
			{ style: {
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between'
				} },
			_react2.default.createElement(
				_antd.Button,
				{ type: 'link', onClick: handleClick, style: { fontSize: '12px' } },
				'\u53D6\u6D88\u56DE\u590D'
			),
			_react2.default.createElement(
				_antd.Button,
				{ htmlType: 'submit', loading: submitting, onClick: value == null || value == "" ? null : onSubmit, type: 'primary' },
				'\u53D1\u5E03'
			)
		)
	);
};
var Editor2 = function Editor2(_ref2) {
	var onChange = _ref2.onChange,
	    onSubmit = _ref2.onSubmit,
	    submitting = _ref2.submitting,
	    value = _ref2.value;
	return _react2.default.createElement(
		'div',
		{ className: 'mt20' },
		_react2.default.createElement(
			_antd.Form.Item,
			null,
			_react2.default.createElement(TextArea, { rows: 4, onChange: onChange, value: value, placeholder: '' })
		),
		_react2.default.createElement(
			_antd.Form.Item,
			{ className: 'tr' },
			_react2.default.createElement(
				_antd.Button,
				{ htmlType: 'submit', loading: submitting, onClick: value == null || value == "" ? null : onSubmit, type: 'primary' },
				'\u53D1\u5E03'
			)
		)
	);
};

// 封装组件

var ExampleComment = function (_React$Component) {
	_inherits(ExampleComment, _React$Component);

	function ExampleComment() {
		var _ref3;

		var _temp, _this, _ret;

		_classCallCheck(this, ExampleComment);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = ExampleComment.__proto__ || Object.getPrototypeOf(ExampleComment)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
			submitting: false,
			value: '',
			visible: false
		}, _this.handleSubmit = function () {
			if (!_this.state.value) {
				return;
			}
			_this.setState({
				submitting: true
			});
			setTimeout(function () {
				var _this$props = _this.props,
				    addComment = _this$props.addComment,
				    selestedId = _this$props.selestedId,
				    id = _this$props.id,
				    userId = _this$props.userId,
				    pid = _this$props.pid;

				var params = {
					text: _this.state.value,
					mainId: selestedId,
					pid: pid == null ? id : pid,
					pUserId: userId
				};
				addComment(params, function () {
					_this.reset();
				});
			}, 1000);
		}, _this.handleChange = function (e) {
			_this.setState({
				value: e.target.value
			});
		}, _this.handleClick = function () {
			_this.setState({
				visible: !_this.state.visible
			});
		}, _this.reset = function () {
			_this.setState({
				submitting: false,
				value: '',
				visible: false
			});
		}, _this.onDel = function () {
			var _this$props2 = _this.props,
			    delComment = _this$props2.delComment,
			    id = _this$props2.id;

			var params = {
				id: id
			};
			delComment(params, function () {
				_this.reset();
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}
	// 删除


	_createClass(ExampleComment, [{
		key: 'render',
		value: function render() {
			var _state = this.state,
			    value = _state.value,
			    submitting = _state.submitting,
			    visible = _state.visible;
			var _props = this.props,
			    text = _props.text,
			    userName = _props.userName,
			    createTime = _props.createTime,
			    children = _props.children,
			    pid = _props.pid,
			    parentUserName = _props.parentUserName;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = userName == username;
			return _react2.default.createElement(
				_antd.Comment,
				{
					className: pid == null ? "comment_normal" : "comment_normal comment_active",
					actions: [_react2.default.createElement(
						'span',
						{ key: 'comment-nested-delete', className: 'comment-nested' },
						createTime == null ? "2020-08-04" : (0, _moment2.default)(createTime).format("YYYY-MM-DD HH:mm:ss"),
						_react2.default.createElement(
							'span',
							{ className: isShow ? "comment-nested-delete" : "hidden", onClick: this.onDel },
							'\xA0\xB7\xA0\u5220\u9664'
						)
					), _react2.default.createElement(
						'span',
						{ key: 'comment-nested-reply-to', style: { color: "#1890ff" }, onClick: this.handleClick },
						'\u56DE\u590D'
					)],
					author: _react2.default.createElement(
						'a',
						null,
						userName
					),
					avatar: _react2.default.createElement(_antd.Avatar, {
						src: './images/logo_new.png',
						alt: 'Han Solo'
					}),
					content: _react2.default.createElement(
						'p',
						null,
						parentUserName == null || parentUserName == "" ? null : '\u56DE\u590D' + parentUserName + ':',
						' ',
						text
					)
				},
				visible ? _react2.default.createElement(Editor, {
					onChange: this.handleChange,
					onSubmit: this.handleSubmit,
					submitting: submitting,
					value: value,
					handleClick: this.handleClick
				}) : null,
				children
			);
		}
	}]);

	return ExampleComment;
}(_react2.default.Component);

var DigitalComment = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
	_inherits(DigitalComment, _React$Component2);

	function DigitalComment(props) {
		_classCallCheck(this, DigitalComment);

		var _this2 = _possibleConstructorReturn(this, (DigitalComment.__proto__ || Object.getPrototypeOf(DigitalComment)).call(this, props));

		_this2.handleSubmit = function () {
			if (!_this2.state.value) {
				return;
			}

			_this2.setState({
				submitting: true
			});

			setTimeout(function () {
				var params = {
					text: _this2.state.value,
					mainId: _this2.store.selestedId,
					pid: null
				};
				_this2.store.addComment(params).then(function (res) {
					if (res) {
						_antd.message.success("评论成功");
						_this2.setState({
							submitting: false,
							value: ""
						});
						// 更新评论
						_this2.store.getCommentsByJournalId();
					}
				});
			}, 1000);
		};

		_this2.handleChange = function (e) {
			_this2.setState({
				value: e.target.value
			});
		};

		_this2.clearState = function () {
			_this2.setState({
				submitting: false,
				value: ''
			});
		};

		_this2.addComment = function (params, callback) {
			_this2.store.addComment(params).then(function (res) {
				if (res) {
					_antd.message.success("评论成功");
					// 更新评论
					_this2.store.getCommentsByJournalId();
					if (callback) callback();
				}
			});
		};

		_this2.delComment = function (params, callback) {
			_this2.store.delComment(params).then(function (res) {
				if (res) {
					_antd.message.success("删除成功");
					// 更新评论
					_this2.store.getCommentsByJournalId();
					if (callback) callback();
				}
			});
		};

		_this2.renderTreeNodes = function (data) {
			return data.map(function (item) {
				if (item.children) {
					return _react2.default.createElement(
						ExampleComment,
						_extends({ key: item.id }, item, { addComment: _this2.addComment, delComment: _this2.delComment, selestedId: _this2.store.selestedId }),
						_this2.renderTreeNodes(item.children)
					);
				}
				return _react2.default.createElement(ExampleComment, _extends({ key: item.id }, item, { addComment: _this2.addComment, delComment: _this2.delComment, selestedId: _this2.store.selestedId }));
			});
		};

		_this2.handleZan = function () {
			_this2.store.addOrDelLike().then(function (res) {
				if (res == true) {
					_antd.message.success("操作成功");
					// 更新点赞
					_this2.store.getLikeUsersByJournalId();
				}
			});
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			comments: [],
			submitting: false,
			value: ''
		};
		return _this2;
	}

	_createClass(DigitalComment, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 添加评论


		// 删除评论


		// 点赞

	}, {
		key: 'render',
		value: function render() {
			var _state2 = this.state,
			    submitting = _state2.submitting,
			    value = _state2.value;
			var _store = this.store,
			    getLikeUsers = _store.getLikeUsers,
			    getComments = _store.getComments,
			    readUsers = _store.readUsers;

			var treeData = utils.formatList(mobx.toJS(getComments));
			var username = localStorage.getItem('username');
			var isLike = mobx.toJS(getLikeUsers).filter(function (item) {
				return item.userName == username;
			}).length > 0 ? true : false;
			return _react2.default.createElement(
				'div',
				{ className: 'detail_form_bold', style: { paddingLeft: '14px' } },
				_react2.default.createElement(
					'div',
					{ className: 'commentlist_title', style: { textAlign: 'left' } },
					_react2.default.createElement(
						_antd.Tooltip,
						{ title: '\u70B9\u8D5E' },
						isLike ? _react2.default.createElement(_antd.Icon, { theme: 'filled', type: 'like', style: { marginLeft: '0' }, className: 'commentlist_icon pointer mr20', onClick: this.handleZan }) : _react2.default.createElement(_antd.Icon, { type: 'like', style: { marginLeft: '0' }, className: 'commentlist_icon pointer mr20', onClick: this.handleZan })
					),
					mobx.toJS(getLikeUsers).length > 0 ? mobx.toJS(getLikeUsers).map(function (item) {
						return item.userName;
					}).join("、") : null
				),
				_react2.default.createElement(
					'div',
					{ className: 'commentlist_title', style: { textAlign: 'left' } },
					_react2.default.createElement(
						_antd.Tooltip,
						{ title: '\u5DF2\u8BFB' },
						_react2.default.createElement(_antd.Icon, { theme: 'filled', type: 'eye', style: { marginLeft: '0' }, className: 'commentlist_icon pointer mr20' })
					),
					mobx.toJS(readUsers).length > 0 ? mobx.toJS(readUsers).map(function (item) {
						return item.userName;
					}).join("、") : null
				),
				_react2.default.createElement(
					'div',
					{ id: 'commentlist', className: 'detail_form_bold_title', style: { textAlign: 'left' } },
					'\u8BC4\u8BBA'
				),
				_react2.default.createElement(Editor2, {
					onChange: this.handleChange,
					onSubmit: this.handleSubmit,
					submitting: submitting,
					value: value
				}),
				this.renderTreeNodes(treeData)
			);
		}
	}]);

	return DigitalComment;
}(_react2.default.Component)) || _class2;

exports.default = DigitalComment;

/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 内容生成、邮件发送
                  * dangw
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _EditableTagEmail = __webpack_require__(98);

var _EditableTagEmail2 = _interopRequireDefault(_EditableTagEmail);

var _PersonAdd = __webpack_require__(94);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

var _download = __webpack_require__(68);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonEmail2 = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(CommonEmail2, _React$Component);

	function CommonEmail2(props) {
		_classCallCheck(this, CommonEmail2);

		var _this2 = _possibleConstructorReturn(this, (CommonEmail2.__proto__ || Object.getPrototypeOf(CommonEmail2)).call(this, props));

		_this2.getReportUrl = function (id) {
			var _this = _this2;
			_this.setState({
				isLoading: true
			});
			_this.props.updateState("loading", true);
			var detailData = mobx.toJS(_this.props.detailData);
			var journalMain = detailData.journalMain || {};
			var pdfName = journalMain.title;

			_this.timer22 = setInterval(function () {
				_this.store.getDownloadUrl(id).then(function (res) {
					var url = res.url;

					if (url !== null && url !== "") {
						_this.setState({
							isLoading: false
						});
						_this.props.updateState("loading", false);
						(0, _download.downloadFile)(url, pdfName); // 直接下载pdf
						clearInterval(_this.timer22);
					} else {
						if (res.code == 2) {
							_this.setState({
								isLoading: false
							});
							_this.props.updateState("loading", false);
							clearInterval(_this.timer22);
						}
					}
				});
			}, 3000);
		};

		_this2.creatWord = function (type) {
			var detailData = _this2.props.detailData;

			var param = mobx.toJS(detailData);
			if (type == 1) {
				_this2.store.wordDownload(param).then(function (res) {
					_this2.getReportUrl(res);
				});
			} else {
				_this2.store.pdfDownload(param).then(function (res) {
					_this2.getReportUrl(res);
				});
			}
		};

		_this2.sendReport = function () {
			var _this = _this2;
			var _this$state = _this.state,
			    emails = _this$state.emails,
			    userIds = _this$state.userIds,
			    checks = _this$state.checks,
			    ccEmails = _this$state.ccEmails,
			    ccUserIds = _this$state.ccUserIds;

			var isemailUserIds = userIds == null ? [] : userIds;
			var isemails = emails == null ? [] : emails;
			// 选择收件人
			if (isemailUserIds.length == 0 && isemails.length == 0) {
				_antd.message.warn("请先选择邮件收件人");
				return false;
			}
			var detailData = _this2.props.detailData;

			var params = {
				journal: mobx.toJS(detailData),
				emails: emails,
				userIds: userIds == null ? [] : userIds.map(function (item) {
					return item.userId;
				}),
				attType: checks.map(function (item) {
					return typeof item == "string" ? Number(item) : item;
				}),
				ccEmails: ccEmails,
				ccUserIds: ccUserIds == null ? [] : ccUserIds.map(function (item) {
					return item.userId;
				})
			};
			_this2.store.sendEmail(params).then(function (res) {
				if (res == true) {
					_antd.message.success("邮件发送成功");
					_this2.reset();
				}
			});
		};

		_this2.updateState = function (type, data) {
			_this2.setState(_defineProperty({}, type, Object.assign([], data)));
		};

		_this2.reset = function () {
			_this2.setState({
				emails: [], // 邮件
				userIds: [], // 用户
				isLoading: false,
				visible: false,
				checks: [],
				ccEmails: [], // 抄送邮件
				ccUserIds: [] // 抄送用户
			});
		};

		_this2.handleOpen = function () {
			_this2.setState({
				visible: true
			});
		};

		_this2.handleOk = function () {
			_this2.setState({
				visible: false
			});
		};

		_this2.onChange = function (checkedValues) {
			_this2.setState({
				checks: checkedValues
			});
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			tip: "正在生成，请稍等...",
			isLoading: false,
			emails: [], // 邮件
			userIds: [], // 用户,
			visible: false,
			checks: [],
			ccEmails: [], // 抄送邮件
			ccUserIds: [] // 抄送用户
		};
		return _this2;
	}

	_createClass(CommonEmail2, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 间隔3秒获取pdf地址


		// 生成word


		// 发送邮件

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    tip = _state.tip,
			    isLoading = _state.isLoading,
			    emails = _state.emails,
			    userIds = _state.userIds,
			    checks = _state.checks,
			    ccEmails = _state.ccEmails,
			    ccUserIds = _state.ccUserIds;

			var options = [{ label: '附件Word', value: '0' }, { label: '附件PDF', value: '1' }];

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						{ style: {
								listStyle: 'none',
								textAlign: 'left'
							} },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'link', onClick: isLoading ? null : this.creatWord.bind(this, "1") },
							'\u70B9\u51FB\u751F\u6210\u5E76\u5B58\u50A8\u4E3AWord\u6587\u6863'
						)
					),
					_react2.default.createElement(
						'li',
						{ style: {
								listStyle: 'none',
								textAlign: 'left'
							} },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'link', onClick: isLoading ? null : this.creatWord.bind(this, "2") },
							'\u70B9\u51FB\u751F\u6210\u5E76\u5B58\u50A8\u4E3APDF\u6587\u6863'
						)
					),
					_react2.default.createElement(
						'li',
						{ style: {
								listStyle: 'none',
								textAlign: 'left'
							} },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'link', onClick: isLoading ? null : this.handleOpen },
							'\u70B9\u51FB\u53D1\u9001\u90AE\u4EF6'
						),
						_react2.default.createElement(_antd.Checkbox.Group, {
							value: checks,
							options: options,
							onChange: this.onChange
						})
					)
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						maskClosable: false,
						width: '600px',
						zIndex: "1066",
						visible: this.state.visible,
						onCancel: this.reset,
						footer: null
					},
					_react2.default.createElement(
						_antd.Row,
						null,
						_react2.default.createElement(
							_antd.Col,
							{ span: 24 },
							_react2.default.createElement(
								'span',
								{ style: { marginRight: '5px' } },
								'\u6536\u4EF6\u4EBA\uFF1A'
							),
							_react2.default.createElement(_EditableTagEmail2.default, {
								data: emails,
								updateState: this.updateState.bind(this, 'emails'),
								title: "添加收件人"
							}),
							_react2.default.createElement(_PersonAdd2.default, {
								data: userIds,
								updatePerson: this.updateState.bind(this, 'userIds'),
								disabled: false,
								title: "添加收件人"
							})
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 24, className: 'mt15' },
							_react2.default.createElement(
								'span',
								{ style: { marginRight: '5px' } },
								'\u6284\u9001\u4EBA\uFF1A'
							),
							_react2.default.createElement(_EditableTagEmail2.default, {
								data: ccEmails,
								updateState: this.updateState.bind(this, 'ccEmails'),
								title: "添加抄送人"
							}),
							_react2.default.createElement(_PersonAdd2.default, {
								data: ccUserIds,
								updatePerson: this.updateState.bind(this, 'ccUserIds'),
								disabled: false,
								title: "添加抄送人"
							})
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'w tc mt15' },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'primary', onClick: this.sendReport },
							'\u70B9\u51FB\u53D1\u9001\u90AE\u4EF6'
						)
					)
				)
			);
		}
	}]);

	return CommonEmail2;
}(_react2.default.Component)) || _class) || _class);
exports.default = CommonEmail2;

/***/ }),

/***/ 1566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _jsBase = __webpack_require__(95);

var _uuid = __webpack_require__(79);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _reactAudioPlayer = __webpack_require__(703);

var _reactAudioPlayer2 = _interopRequireDefault(_reactAudioPlayer);

var _EditeMeeting = __webpack_require__(1573);

var _EditeMeeting2 = _interopRequireDefault(_EditeMeeting);

var _CommentList = __webpack_require__(1519);

var _CommentList2 = _interopRequireDefault(_CommentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = _antd.Typography.Text;

var DetailForm = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(DetailForm, _React$Component);

  function DetailForm(props) {
    _classCallCheck(this, DetailForm);

    var _this = _possibleConstructorReturn(this, (DetailForm.__proto__ || Object.getPrototypeOf(DetailForm)).call(this, props));

    _this.onAsync = function (type, id, index) {
      _this.props.onAsync(type, id, index);
    };

    _this.remove = function (index) {
      var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
      customList.splice(index, 1);
      _this.setState({
        addAssignments: Object.assign([], customList)
      });
    };

    _this.handleAdd = function () {
      var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
      if (customList.some(function (item) {
        return item.name == "" || item.name == null;
      })) {
        _antd.message.warn("任务名是必填项");
        return false;
      }
      if (customList.some(function (item) {
        return item.userInformations.length == 0;
      })) {
        _antd.message.warn("负责人是必填项");
        return false;
      }
      _this.setState({
        addAssignments: [].concat(_toConsumableArray(customList), [{
          "name": "",
          "userInformations": []
        }])
      });
    };

    _this.updateState = function (type, data) {
      _this.setState(_defineProperty({}, type, Object.assign([], data)));
    };

    _this.updatePerson = function (index, userIds) {
      var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
      fields[index].userInformations = Object.assign([], userIds);
      _this.setState({
        addAssignments: fields
      });
    };

    _this.onChange = function (index, e) {
      var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
      fields[index].name = e.target.value;
      _this.setState({
        addAssignments: fields
      });
    };

    _this.handleSubmit = function () {
      var addAssignments = _this.state.addAssignments;
      // 校验下一步

      if (!addAssignments.some(function (item) {
        return (item.name == "" || item.name == null) && item.userInformations.length == 0;
      })) {
        if (addAssignments.some(function (item) {
          return item.name == "" || item.name == null;
        })) {
          _antd.message.warn("任务名是必填项");
          return false;
        }
        if (addAssignments.some(function (item) {
          return item.userInformations.length == 0;
        })) {
          _antd.message.warn("负责人是必填项");
          return false;
        }
      }

      var detail = addAssignments.filter(function (item) {
        return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
      }).map(function (item) {
        return Object.assign(item, { type: 1 });
      });

      /*let {detailData} = this.props;
      let detail = JSON.parse(JSON.stringify(detailData));
      detail.addAssignments = addAssignments.filter((item)=>{
      return !((item.name == "" || item.name == null)&&(item.userInformations.length == 0))
      });
      */
      _this.props.handleAddNew(detail);
    };

    _this.handleCalc = function () {
      _this.setState({
        addAssignments: Object.assign([]),
        audioSrc: "",
        fileName: ""
      });
    };

    _this.clickChange = function (e) {
      var item = e.item.props.item;

      _this.setState({
        audioSrc: item.filePath,
        fileName: item.fileName
      });
    };

    _this.hanndleChangeEdit = function () {
      _this.store.changeCanEdit().then(function (res) {
        // 判断当前的权限, 是当前人员继续编辑，存在编辑时给出提示
        if (res) {
          var userId = res.userId,
              userName = res.userName;

          var userid = localStorage.getItem("userid");
          if (userId == userid) {
            _this.setState({
              isEdit: !_this.state.isEdit
            }, function () {
              _this.store.isEdit = _this.state.isEdit;
            });
          } else {
            _antd.Modal.warning({
              title: userName + '正在编辑中'
            });
          }
        }
      });
    };

    _this.handleCancle = function () {
      _this.setState({
        isEdit: !_this.state.isEdit
      }, function () {
        _this.store.isEdit = _this.state.isEdit;
      });
    };

    _this.onRef = function (ref) {
      _this.child = ref;
    };

    _this.appendAliyundata = function (base64, audioKey) {
      _this.store.appendToAliyunData({ base64Data: base64, key: audioKey, position: _this.store.aliyunAppendData.nextPosition });
    };

    _this.reSetAliyundata = function () {
      _this.store.aliyunAppendData = {
        id: '',
        position: 0,
        nextPosition: 0,
        key: '',
        success: 0
      };
    };

    _this.store = _this.props.store;
    _this.state = {
      addAssignments: [],
      newAddignments: [],
      audioSrc: "",
      fileName: "",
      isEdit: false // 默认详情态
    };
    return _this;
  }

  _createClass(DetailForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.detailData) != JSON.stringify(this.props.detailData)) {
        this.setState({
          newAddignments: nextProps.detailData.addAssignments == null ? [] : nextProps.detailData.addAssignments,
          addAssignments: []
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onRef(this);
    }

    // 同步


    // 删除字段


    // 人员选择更新


    // 取消


    // 切换编辑


    // 取消

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 0 }
        }
      };
      var formItemLayoutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 3 }
        }
      };
      var _props = this.props,
          detailData = _props.detailData,
          visible = _props.visible;

      var journalMain = detailData.journalMain || {};
      var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
      var assignments = detailData.assignments || [];
      var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};
      var atts = detailData.atts == null ? [] : detailData.atts;
      var attachments = atts == null ? [] : atts.map(function (vitem, vindex) {
        return Object.assign({}, {
          uid: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
          name: vitem.fileName,
          status: 'done',
          url: vitem.filePath,
          fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
          fileName: vitem.fileName,
          filePath: vitem.filePath,
          id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
        });
      });
      var audio = detailData.audio == null ? [] : detailData.audio;
      var _state = this.state,
          addAssignments = _state.addAssignments,
          newAddignments = _state.newAddignments,
          audioSrc = _state.audioSrc,
          fileName = _state.fileName;
      var isEdit = this.store.isEdit;

      var dropDown = _react2.default.createElement(
        _antd.Dropdown,
        {
          overlay: _react2.default.createElement(
            _antd.Menu,
            null,
            audio.map(function (item, index) {
              return _react2.default.createElement(
                _antd.Menu.Item,
                { key: index, onClick: _this2.clickChange, item: item },
                item.fileName
              );
            })
          ) },
        _react2.default.createElement(
          'a',
          { className: 'ant-dropdown-link',
            style: { position: "absolute", right: 0, top: 0 },
            onClick: function onClick(e) {
              return e.preventDefault();
            } },
          audio.length > 0 ? fileName || audio[0].fileName : null,
          _react2.default.createElement(_antd.Icon, { type: 'down' })
        )
      );
      var username = localStorage.getItem("username");
      // 当前行是否有修改权限
      var isShow = journalMain.userName == username;

      return _react2.default.createElement(
        'div',
        { className: 'w pr' },
        _react2.default.createElement(
          'div',
          { style: {
              cursor: 'pointer',
              position: 'absolute',
              right: '0',
              top: '0',
              zIndex: '5'
            } },
          !isEdit && isShow ? _react2.default.createElement(
            _antd.Button,
            { className: visible == true ? "hidden" : "", type: 'link', onClick: this.hanndleChangeEdit },
            '\u7F16\u8F91'
          ) : null
        ),
        !isEdit ? _react2.default.createElement(
          _antd.Form,
          formItemLayoutWithOutLabel,
          _react2.default.createElement(
            _antd.Form.Item,
            { colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'div',
              { className: 'detail_form pr' },
              _react2.default.createElement(
                'p',
                { className: 'form_title' },
                journalMain.title,
                _react2.default.createElement(
                  'span',
                  { style: {
                      display: 'inline-block',
                      maxWidth: '500px',
                      position: 'absolute',
                      top: 0,
                      paddingLeft: '10px'
                    } },
                  journalMain.tags == null ? null : journalMain.tags.map(function (item) {
                    return _react2.default.createElement(
                      _antd.Tag,
                      { color: 'gold', className: 'ml5' },
                      item.name
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'p',
                { className: 'form_name' },
                journalMain.userName,
                _react2.default.createElement(
                  'span',
                  { className: 'form_time' },
                  (0, _utils.showText)((0, _moment2.default)(journalMain.createTime).format("YYYY-MM-DD HH:mm"), (0, _moment2.default)(journalMain.createTime).format("HH:mm"))
                ),
                _react2.default.createElement(_CommentList2.default, {
                  store: this.store,
                  detailData: detailData,
                  scrollToAnchor: this.props.scrollToAnchor
                })
              ),
              audio.length > 0 && dropDown,
              _react2.default.createElement(
                'div',
                { style: {
                    position: 'absolute',
                    right: 0,
                    top: '30px'
                  } },
                audioSrc ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reactAudioPlayer2.default, {
                    src: audioSrc || "",
                    controls: true
                  })
                ) : null
              )
            )
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '',
              colon: false,
              className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4F1A\u8BAE\u4E3B\u9898'
            ),
            _react2.default.createElement(
              'span',
              { className: 'form_nextname' },
              sub.title
            )
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '', colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4F1A\u8BAE\u65E5\u671F'
            ),
            _react2.default.createElement(
              'span',
              { className: 'form_nextname' },
              (0, _moment2.default)(sub.time).format("YYYY年MM月DD日")
            )
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '', colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4F1A\u8BAE\u65F6\u957F'
            ),
            _react2.default.createElement(
              'span',
              { className: 'form_nextname' },
              sub.hours,
              '\u5C0F\u65F6'
            )
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '', colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4F1A\u8BAE\u5730\u70B9'
            ),
            _react2.default.createElement(
              'span',
              { className: 'form_nextname' },
              sub.place
            )
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '',
              colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u53C2\u4F1A\u4EBA\u5458'
            ),
            _react2.default.createElement(
              'span',
              { className: 'form_nextname' },
              sub.people
            )
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '', colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4F1A\u8BAE\u76EE\u6807'
            )
          ),
          _react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.target } }),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '',
              colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4F1A\u8BAE\u7EAA\u8981'
            )
          ),
          _react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.content } }),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '', colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4F1A\u8BAE\u7ED3\u8BBA'
            )
          ),
          _react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.conclusion } }),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '', colon: false, className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u4E0B\u4E00\u6B65\u884C\u52A8'
            )
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { className: 'detail_form_bold' },
            assignments.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'span',
                  {
                    className: 'form_nextname' },
                  index + 1,
                  ' - ',
                  item.name,
                  ' ',
                  item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
                    return vitem.userName;
                  }).join('、'),
                  item.isSync == 1 ? _react2.default.createElement(
                    Text,
                    { type: 'warning', className: 'ml15' },
                    '\u5DF2\u540C\u6B65'
                  ) : _react2.default.createElement(
                    _antd.Button,
                    { className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
                      type: 'link',
                      onClick: _this2.onAsync.bind(_this2, "assignments", item.id, index) },
                    '\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
                  )
                )
              );
            })
          ),
          _react2.default.createElement(
            _antd.Form.Item,
            { label: '', colon: false, className: 'detail_form_bold mt15' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u9644\u4EF6'
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { paddingLeft: '14px' } },
            _react2.default.createElement(_MyUpload2.default, {
              disabled: true,
              fileList: attachments == null ? [] : attachments
            })
          ),
          !this.props.hasJournal ? _react2.default.createElement(
            _antd.Form.Item,
            { label: '',
              colon: false,
              className: newAddignments !== undefined && newAddignments.length == 0 ? "hidden" : "detail_form_bold" },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u8FFD\u52A0\u4EFB\u52A1'
            ),
            newAddignments !== undefined && newAddignments.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'span',
                  {
                    className: 'form_nextname' },
                  index + 1,
                  ' - ',
                  item.name,
                  ' ',
                  item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
                    return vitem.userName;
                  }).join('、'),
                  item.isSync == 1 ? _react2.default.createElement(
                    Text,
                    { type: 'warning', className: 'ml15' },
                    '\u5DF2\u540C\u6B65'
                  ) : _react2.default.createElement(
                    _antd.Button,
                    { className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
                      type: 'link',
                      onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
                    '\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
                  )
                )
              );
            })
          ) : _react2.default.createElement(
            _antd.Form.Item,
            { label: '',
              colon: false,
              className: 'detail_form_bold' },
            _react2.default.createElement(
              'span',
              { className: 'detail_form_bold_title' },
              '\u8FFD\u52A0\u4EFB\u52A1'
            ),
            newAddignments !== undefined && newAddignments.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'span',
                  {
                    className: 'form_nextname' },
                  index + 1,
                  ' - ',
                  item.name,
                  ' ',
                  item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
                    return vitem.userName;
                  }).join('、'),
                  item.isSync == 1 ? _react2.default.createElement(
                    Text,
                    { type: 'warning', className: 'ml15' },
                    '\u5DF2\u540C\u6B65'
                  ) : _react2.default.createElement(
                    _antd.Button,
                    { className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
                      type: 'link',
                      onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
                    '\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
                  )
                )
              );
            })
          ),
          !this.props.hasJournal ? null : _react2.default.createElement(
            _antd.Row,
            { className: 'mb10' },
            _react2.default.createElement(
              _antd.Col,
              { span: 12, className: 'tc' },
              _react2.default.createElement(
                'div',
                null,
                '\u4EFB\u52A1\u540D'
              )
            ),
            _react2.default.createElement(
              _antd.Col,
              { span: 12, className: 'tc' },
              _react2.default.createElement(
                'div',
                null,
                '\u8D1F\u8D23\u4EBA'
              )
            )
          ),
          addAssignments !== undefined && addAssignments.map(function (vitem, vindex) {
            return _react2.default.createElement(
              _antd.Row,
              { key: 'subname+' + vindex,
                style: { paddingTop: '10px', borderBottom: "1px dashed #E6E6E6" } },
              _react2.default.createElement(
                _antd.Col,
                { span: 12, className: 'pr' },
                _react2.default.createElement(
                  _antd.Form.Item,
                  {
                    label: " ",
                    colon: false,
                    labelCol: {
                      xs: { span: 24 },
                      sm: { span: 6 }
                    },
                    wrapperCol: {
                      xs: { span: 24 },
                      sm: { span: 16 }
                    }
                  },
                  _react2.default.createElement(_antd.Input, { value: vitem.name == null ? "" : vitem.name,
                    placeholder: '\u8BF7\u8F93\u5165',
                    onChange: _this2.onChange.bind(_this2, vindex) }),
                  _react2.default.createElement(
                    _antd.Popconfirm,
                    { title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
                        return _this2.remove(vindex);
                      } },
                    _react2.default.createElement(_antd.Button, {
                      shape: 'circle',
                      className: 'dynamic-delete-button',
                      size: 'small',
                      icon: 'minus',
                      type: 'default' })
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Col,
                { span: 12 },
                _react2.default.createElement(
                  _antd.Form.Item,
                  {
                    label: " ",
                    colon: false,
                    labelCol: {
                      xs: { span: 24 },
                      sm: { span: 6 }
                    },
                    wrapperCol: {
                      xs: { span: 24 },
                      sm: { span: 16 }
                    }
                  },
                  _react2.default.createElement(_PersonAddIcon2.default, {
                    data: vitem.userInformations == null ? [] : vitem.userInformations,
                    updatePerson: _this2.updatePerson.bind(_this2, vindex)
                  })
                )
              )
            );
          }),
          !this.props.hasJournal ? null : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _antd.Form.Item,
              formItemLayoutLabel,
              _react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
                style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
                type: 'plus-circle' })
            ),
            _react2.default.createElement(
              _antd.Form.Item,
              _extends({}, formItemLayoutLabel, { className: addAssignments !== undefined && addAssignments.length == 0 ? "hidden" : "tr" }),
              _react2.default.createElement(
                _antd.Button,
                { onClick: this.handleSubmit, type: 'primary', shape: 'round' },
                '\u4FDD\u5B58'
              ),
              _react2.default.createElement(
                _antd.Popconfirm,
                { placement: 'top', title: '\u786E\u5B9A\u8981\u53D6\u6D88\u5417?', onConfirm: function onConfirm() {
                    return _this2.handleCalc();
                  } },
                _react2.default.createElement(
                  _antd.Button,
                  { className: 'ml15', type: 'default', shape: 'round' },
                  '\u53D6\u6D88'
                )
              )
            )
          )
        ) : _react2.default.createElement(_EditeMeeting2.default, {
          onRef: this.onRef,
          store: this.store,
          detailData: detailData,
          onCancle: this.handleCancle,
          pathname: this.props.pathname,
          handleDraftRoute: this.props.handleDraftRoute,
          handleRoute: this.props.handleRoute,
          getTable: this.props.getTable,
          appendAliyundata: this.appendAliyundata,
          reSetAliyundata: this.reSetAliyundata
        })
      );
    }
  }]);

  return DetailForm;
}(_react2.default.Component)) || _class;

exports.default = DetailForm;

/***/ }),

/***/ 1567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单 月思想
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _jsBase = __webpack_require__(95);

var _uuid = __webpack_require__(79);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _reactAudioPlayer = __webpack_require__(703);

var _reactAudioPlayer2 = _interopRequireDefault(_reactAudioPlayer);

var _CommentList = __webpack_require__(1519);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _EditeVisit = __webpack_require__(1518);

var _EditeVisit2 = _interopRequireDefault(_EditeVisit);

var _mobxReact = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = _antd.Typography.Text;

var DetailFormNew = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailFormNew, _React$Component);

	function DetailFormNew(props) {
		_classCallCheck(this, DetailFormNew);

		var _this = _possibleConstructorReturn(this, (DetailFormNew.__proto__ || Object.getPrototypeOf(DetailFormNew)).call(this, props));

		_this.onAsync = function (type, id, index) {
			_this.props.onAsync(type, id, index);
		};

		_this.remove = function (index) {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			customList.splice(index, 1);
			_this.setState({
				addAssignments: Object.assign([], customList)
			});
		};

		_this.handleAdd = function () {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			if (customList.some(function (item) {
				return item.name == "" || item.name == null;
			})) {
				_antd.message.warn("任务名是必填项");
				return false;
			}
			if (customList.some(function (item) {
				return item.userInformations.length == 0;
			})) {
				_antd.message.warn("负责人是必填项");
				return false;
			}
			_this.setState({
				addAssignments: [].concat(_toConsumableArray(customList), [{
					"name": "",
					"userInformations": []
				}])
			});
		};

		_this.updateState = function (type, data) {
			_this.setState(_defineProperty({}, type, Object.assign([], data)));
		};

		_this.updatePerson = function (index, userIds) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].userInformations = Object.assign([], userIds);
			_this.setState({
				addAssignments: fields
			});
		};

		_this.onChange = function (index, e) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].name = e.target.value;
			_this.setState({
				addAssignments: fields
			});
		};

		_this.handleSubmit = function () {
			var addAssignments = _this.state.addAssignments;
			// 校验下一步

			if (!addAssignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (addAssignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (addAssignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			/*let {detailData} = this.props;
   let detail = JSON.parse(JSON.stringify(detailData));
   detail.addAssignments = addAssignments.filter((item)=>{
   	return !((item.name == "" || item.name == null)&&(item.userInformations.length == 0))
   });*/

			var detail = addAssignments.filter(function (item) {
				return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
			}).map(function (item) {
				return Object.assign(item, { type: 1 });
			});
			_this.props.handleAddNew(detail);
		};

		_this.handleCalc = function () {
			_this.setState({
				addAssignments: Object.assign([]),
				audioSrc: "",
				fileName: ""
			});
		};

		_this.clickChange = function (e) {
			var item = e.item.props.item;

			_this.setState({
				audioSrc: item.filePath,
				fileName: item.fileName
			});
		};

		_this.hanndleChangeEdit = function () {
			_this.store.changeCanEdit().then(function (res) {
				// 判断当前的权限, 是当前人员继续编辑，存在编辑时给出提示
				if (res) {
					var userId = res.userId,
					    userName = res.userName;

					var userid = localStorage.getItem("userid");
					if (userId == userid) {
						_this.setState({
							isEdit: !_this.state.isEdit
						}, function () {
							_this.store.isEdit = _this.state.isEdit;
						});
					} else {
						_antd.Modal.warning({
							title: userName + '正在编辑中'
						});
					}
				}
			});
		};

		_this.handleCancle = function () {
			_this.setState({
				isEdit: !_this.state.isEdit
			}, function () {
				_this.store.isEdit = _this.state.isEdit;
			});
		};

		_this.store = _this.props.store;
		_this.state = {
			addAssignments: [],
			newAddignments: [],
			audioSrc: "",
			fileName: "",
			isEdit: false // 默认详情态
		};
		return _this;
	}

	_createClass(DetailFormNew, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.detailData) != JSON.stringify(this.props.detailData)) {
				this.setState({
					newAddignments: nextProps.detailData.addAssignments == null ? [] : nextProps.detailData.addAssignments,
					addAssignments: []
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onRef(this);
		}

		// 同步


		// 删除字段


		// 人员选择更新


		// 取消


		// 切换编辑


		// 取消

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
			var formItemLayoutWithOutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 0 }
				}
			};
			var formItemLayoutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 3 }
				}
			};
			var _props = this.props,
			    detailData = _props.detailData,
			    visible = _props.visible;

			var journalMain = detailData.journalMain || {};
			var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
			var assignments = detailData.assignments || [];
			var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};
			var atts = detailData.atts == null ? [] : detailData.atts;
			var attachments = atts == null ? [] : atts.map(function (vitem, vindex) {
				return Object.assign({}, {
					uid: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					name: vitem.fileName,
					status: 'done',
					url: vitem.filePath,
					fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					fileName: vitem.fileName,
					filePath: vitem.filePath,
					id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
				});
			});
			var audio = detailData.audio == null ? [] : detailData.audio;
			var _state = this.state,
			    addAssignments = _state.addAssignments,
			    newAddignments = _state.newAddignments,
			    audioSrc = _state.audioSrc,
			    fileName = _state.fileName;
			var isEdit = this.store.isEdit;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = journalMain.userName == username;
			var dropDown = _react2.default.createElement(
				_antd.Dropdown,
				{
					overlay: _react2.default.createElement(
						_antd.Menu,
						null,
						audio.map(function (item, index) {
							return _react2.default.createElement(
								_antd.Menu.Item,
								{ key: index, onClick: _this2.clickChange, item: item },
								item.fileName
							);
						})
					) },
				_react2.default.createElement(
					'a',
					{ className: 'ant-dropdown-link',
						style: { position: "absolute", right: 0, top: 0 },
						onClick: function onClick(e) {
							return e.preventDefault();
						} },
					audio.length > 0 ? fileName || audio[0].fileName : null,
					_react2.default.createElement(_antd.Icon, { type: 'down' })
				)
			);

			var formTailLayout = {
				wrapperCol: { span: 22, offset: 2 }
			};

			return _react2.default.createElement(
				'div',
				{ className: 'w pr' },
				_react2.default.createElement(
					'div',
					{ style: {
							cursor: 'pointer',
							position: 'absolute',
							right: '0',
							top: '0',
							zIndex: '5'
						} },
					!isEdit && isShow ? _react2.default.createElement(
						_antd.Button,
						{ className: visible == true ? "hidden" : "", type: 'link', onClick: this.hanndleChangeEdit },
						'\u7F16\u8F91'
					) : null
				),
				!isEdit ? _react2.default.createElement(
					_antd.Form,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(
						_antd.Form.Item,
						{ colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'div',
							{ className: 'detail_form pr' },
							_react2.default.createElement(
								'p',
								{ className: 'form_title' },
								journalMain.title,
								_react2.default.createElement(
									'span',
									{ style: {
											display: 'inline-block',
											maxWidth: '500px',
											position: 'absolute',
											top: 0,
											paddingLeft: '10px'
										} },
									journalMain.tags == null ? null : journalMain.tags.map(function (item) {
										return _react2.default.createElement(
											_antd.Tag,
											{ color: 'gold', className: 'ml5' },
											item.name
										);
									})
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'form_name' },
								journalMain.userName,
								_react2.default.createElement(
									'span',
									{
										className: 'form_time' },
									(0, _utils.showText)((0, _moment2.default)(journalMain.createTime).format("YYYY-MM-DD HH:mm"), (0, _moment2.default)(journalMain.createTime).format("HH:mm"))
								),
								_react2.default.createElement(_CommentList2.default, {
									detailData: detailData,
									store: this.store,
									scrollToAnchor: this.props.scrollToAnchor
								})
							),
							audio.length > 0 && dropDown,
							_react2.default.createElement(
								'div',
								{ style: {
										position: 'absolute',
										right: 0,
										top: '30px'
									} },
								audioSrc ? _react2.default.createElement(_reactAudioPlayer2.default, {
									src: audioSrc || "",
									controls: true
								}) : null
							)
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u53CD\u601D\u4E3B\u9898'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.title
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u53CD\u601D\u65F6\u95F4'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							(0, _moment2.default)(sub.time).format("YYYY年MM月DD日")
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u73B0\u8C61\u4E0E\u6848\u4F8B'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.cases } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u53CD\u601D\u4E0E\u6539\u8FDB'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.introspection } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E0B\u4E00\u6B65\u884C\u52A8'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ className: 'detail_form_bold' },
						assignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "assignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold mt15' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u9644\u4EF6'
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { paddingLeft: '14px' } },
						_react2.default.createElement(_MyUpload2.default, {
							disabled: true,
							fileList: attachments == null ? [] : attachments
						})
					),
					!this.props.hasJournal ? _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: newAddignments !== undefined && newAddignments.length == 0 ? "hidden" : "detail_form_bold" },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					) : _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					!this.props.hasJournal ? null : _react2.default.createElement(
						_antd.Row,
						{ className: 'mb10' },
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u4EFB\u52A1\u540D'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u8D1F\u8D23\u4EBA'
							)
						)
					),
					addAssignments !== undefined && addAssignments.map(function (vitem, vindex) {
						return _react2.default.createElement(
							_antd.Row,
							{ key: 'subname+' + vindex,
								style: { paddingTop: '10px', borderBottom: "1px dashed #E6E6E6" } },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: 'pr' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_antd.Input, { value: vitem.name == null ? "" : vitem.name,
										placeholder: '\u8BF7\u8F93\u5165',
										onChange: _this2.onChange.bind(_this2, vindex) }),
									_react2.default.createElement(
										_antd.Popconfirm,
										{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
												return _this2.remove(vindex);
											} },
										_react2.default.createElement(_antd.Button, {
											shape: 'circle',
											className: 'dynamic-delete-button',
											size: 'small',
											icon: 'minus',
											type: 'default' })
									)
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_PersonAddIcon2.default, {
										data: vitem.userInformations == null ? [] : vitem.userInformations,
										updatePerson: _this2.updatePerson.bind(_this2, vindex)
									})
								)
							)
						);
					}),
					!this.props.hasJournal ? null : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_antd.Form.Item,
							formItemLayoutLabel,
							_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
								style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
								type: 'plus-circle' })
						),
						_react2.default.createElement(
							_antd.Form.Item,
							_extends({}, formItemLayoutLabel, { className: addAssignments !== undefined && addAssignments.length == 0 ? "hidden" : "tr" }),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.handleSubmit, type: 'primary', shape: 'round' },
								'\u4FDD\u5B58'
							),
							_react2.default.createElement(
								_antd.Popconfirm,
								{ placement: 'top', title: '\u786E\u5B9A\u8981\u53D6\u6D88\u5417?', onConfirm: function onConfirm() {
										return _this2.handleCalc();
									} },
								_react2.default.createElement(
									_antd.Button,
									{ className: 'ml15', type: 'default', shape: 'round' },
									'\u53D6\u6D88'
								)
							)
						)
					)
				) : _react2.default.createElement(_EditeVisit2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: detailData,
					onCancle: this.handleCancle,
					pathname: this.props.pathname,
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					temType: 'monthlySharing'
				})
			);
		}
	}]);

	return DetailFormNew;
}(_react2.default.Component)) || _class;

exports.default = DetailFormNew;

/***/ }),

/***/ 1568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单 月思想
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _jsBase = __webpack_require__(95);

var _uuid = __webpack_require__(79);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _reactAudioPlayer = __webpack_require__(703);

var _reactAudioPlayer2 = _interopRequireDefault(_reactAudioPlayer);

var _CommentList = __webpack_require__(1519);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _EditeVisit = __webpack_require__(1518);

var _EditeVisit2 = _interopRequireDefault(_EditeVisit);

var _mobxReact = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = _antd.Typography.Text;

var DetailFormNews = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailFormNews, _React$Component);

	function DetailFormNews(props) {
		_classCallCheck(this, DetailFormNews);

		var _this = _possibleConstructorReturn(this, (DetailFormNews.__proto__ || Object.getPrototypeOf(DetailFormNews)).call(this, props));

		_this.onAsync = function (type, id, index) {
			_this.props.onAsync(type, id, index);
		};

		_this.remove = function (index) {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			customList.splice(index, 1);
			_this.setState({
				addAssignments: Object.assign([], customList)
			});
		};

		_this.handleAdd = function () {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			if (customList.some(function (item) {
				return item.name == "" || item.name == null;
			})) {
				_antd.message.warn("任务名是必填项");
				return false;
			}
			if (customList.some(function (item) {
				return item.userInformations.length == 0;
			})) {
				_antd.message.warn("负责人是必填项");
				return false;
			}
			_this.setState({
				addAssignments: [].concat(_toConsumableArray(customList), [{
					"name": "",
					"userInformations": []
				}])
			});
		};

		_this.updateState = function (type, data) {
			_this.setState(_defineProperty({}, type, Object.assign([], data)));
		};

		_this.updatePerson = function (index, userIds) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].userInformations = Object.assign([], userIds);
			_this.setState({
				addAssignments: fields
			});
		};

		_this.onChange = function (index, e) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].name = e.target.value;
			_this.setState({
				addAssignments: fields
			});
		};

		_this.handleSubmit = function () {
			var addAssignments = _this.state.addAssignments;
			// 校验下一步

			if (!addAssignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (addAssignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (addAssignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			/*let {detailData} = this.props;
   let detail = JSON.parse(JSON.stringify(detailData));
   detail.addAssignments = addAssignments.filter((item)=>{
   	return !((item.name == "" || item.name == null)&&(item.userInformations.length == 0))
   });*/

			var detail = addAssignments.filter(function (item) {
				return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
			}).map(function (item) {
				return Object.assign(item, { type: 1 });
			});
			_this.props.handleAddNew(detail);
		};

		_this.handleCalc = function () {
			_this.setState({
				addAssignments: Object.assign([]),
				audioSrc: "",
				fileName: ""
			});
		};

		_this.clickChange = function (e) {
			var item = e.item.props.item;

			_this.setState({
				audioSrc: item.filePath,
				fileName: item.fileName
			});
		};

		_this.hanndleChangeEdit = function () {
			_this.store.changeCanEdit().then(function (res) {
				// 判断当前的权限, 是当前人员继续编辑，存在编辑时给出提示
				if (res) {
					var userId = res.userId,
					    userName = res.userName;

					var userid = localStorage.getItem("userid");
					if (userId == userid) {
						_this.setState({
							isEdit: !_this.state.isEdit
						}, function () {
							_this.store.isEdit = _this.state.isEdit;
						});
					} else {
						_antd.Modal.warning({
							title: userName + '正在编辑中'
						});
					}
				}
			});
		};

		_this.handleCancle = function () {
			_this.setState({
				isEdit: !_this.state.isEdit
			}, function () {
				_this.store.isEdit = _this.state.isEdit;
			});
		};

		_this.store = _this.props.store;
		_this.state = {
			addAssignments: [],
			newAddignments: [],
			audioSrc: "",
			fileName: "",
			isEdit: false // 默认详情态
		};
		return _this;
	}

	_createClass(DetailFormNews, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.detailData) != JSON.stringify(this.props.detailData)) {
				this.setState({
					newAddignments: nextProps.detailData.addAssignments == null ? [] : nextProps.detailData.addAssignments,
					addAssignments: []
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onRef(this);
		}

		// 同步


		// 删除字段


		// 人员选择更新


		// 取消


		// 切换编辑


		// 取消

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
			var formItemLayoutWithOutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 0 }
				}
			};
			var formItemLayoutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 3 }
				}
			};
			var _props = this.props,
			    detailData = _props.detailData,
			    visible = _props.visible;

			var journalMain = detailData.journalMain || {};
			var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
			var assignments = detailData.assignments || [];
			var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};
			var atts = detailData.atts == null ? [] : detailData.atts;
			var attachments = atts == null ? [] : atts.map(function (vitem, vindex) {
				return Object.assign({}, {
					uid: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					name: vitem.fileName,
					status: 'done',
					url: vitem.filePath,
					fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					fileName: vitem.fileName,
					filePath: vitem.filePath,
					id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
				});
			});
			var audio = detailData.audio == null ? [] : detailData.audio;
			var _state = this.state,
			    addAssignments = _state.addAssignments,
			    newAddignments = _state.newAddignments,
			    audioSrc = _state.audioSrc,
			    fileName = _state.fileName;
			var isEdit = this.store.isEdit;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = journalMain.userName == username;
			var dropDown = _react2.default.createElement(
				_antd.Dropdown,
				{
					overlay: _react2.default.createElement(
						_antd.Menu,
						null,
						audio.map(function (item, index) {
							return _react2.default.createElement(
								_antd.Menu.Item,
								{ key: index, onClick: _this2.clickChange, item: item },
								item.fileName
							);
						})
					) },
				_react2.default.createElement(
					'a',
					{ className: 'ant-dropdown-link',
						style: { position: "absolute", right: 0, top: 0 },
						onClick: function onClick(e) {
							return e.preventDefault();
						} },
					audio.length > 0 ? fileName || audio[0].fileName : null,
					_react2.default.createElement(_antd.Icon, { type: 'down' })
				)
			);

			var formTailLayout = {
				wrapperCol: { span: 22, offset: 2 }
			};

			return _react2.default.createElement(
				'div',
				{ className: 'w pr' },
				_react2.default.createElement(
					'div',
					{ style: {
							cursor: 'pointer',
							position: 'absolute',
							right: '0',
							top: '0',
							zIndex: '5'
						} },
					!isEdit && isShow ? _react2.default.createElement(
						_antd.Button,
						{ className: visible == true ? "hidden" : "", type: 'link', onClick: this.hanndleChangeEdit },
						'\u7F16\u8F91'
					) : null
				),
				!isEdit ? _react2.default.createElement(
					_antd.Form,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(
						_antd.Form.Item,
						{ colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'div',
							{ className: 'detail_form pr' },
							_react2.default.createElement(
								'p',
								{ className: 'form_title' },
								journalMain.title,
								_react2.default.createElement(
									'span',
									{ style: {
											display: 'inline-block',
											maxWidth: '500px',
											position: 'absolute',
											top: 0,
											paddingLeft: '10px'
										} },
									journalMain.tags == null ? null : journalMain.tags.map(function (item) {
										return _react2.default.createElement(
											_antd.Tag,
											{ color: 'gold', className: 'ml5' },
											item.name
										);
									})
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'form_name' },
								journalMain.userName,
								_react2.default.createElement(
									'span',
									{
										className: 'form_time' },
									(0, _utils.showText)((0, _moment2.default)(journalMain.createTime).format("YYYY-MM-DD HH:mm"), (0, _moment2.default)(journalMain.createTime).format("HH:mm"))
								),
								_react2.default.createElement(_CommentList2.default, {
									detailData: detailData,
									store: this.store,
									scrollToAnchor: this.props.scrollToAnchor
								})
							),
							audio.length > 0 && dropDown,
							_react2.default.createElement(
								'div',
								{ style: {
										position: 'absolute',
										right: 0,
										top: '30px'
									} },
								audioSrc ? _react2.default.createElement(_reactAudioPlayer2.default, {
									src: audioSrc || "",
									controls: true
								}) : null
							)
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u65B0\u95FB\u6807\u9898'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.title
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u53D1\u751F\u65F6\u95F4'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							(0, _moment2.default)(sub.time).format("YYYY年MM月DD日")
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u6B63\u6587\u5185\u5BB9'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.content } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E0B\u4E00\u6B65\u884C\u52A8'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ className: 'detail_form_bold' },
						assignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "assignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold mt15' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u9644\u4EF6'
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { paddingLeft: '14px' } },
						_react2.default.createElement(_MyUpload2.default, {
							disabled: true,
							fileList: attachments == null ? [] : attachments
						})
					),
					!this.props.hasJournal ? _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: newAddignments !== undefined && newAddignments.length == 0 ? "hidden" : "detail_form_bold" },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					) : _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					!this.props.hasJournal ? null : _react2.default.createElement(
						_antd.Row,
						{ className: 'mb10' },
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u4EFB\u52A1\u540D'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u8D1F\u8D23\u4EBA'
							)
						)
					),
					addAssignments !== undefined && addAssignments.map(function (vitem, vindex) {
						return _react2.default.createElement(
							_antd.Row,
							{ key: 'subname+' + vindex,
								style: { paddingTop: '10px', borderBottom: "1px dashed #E6E6E6" } },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: 'pr' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_antd.Input, { value: vitem.name == null ? "" : vitem.name,
										placeholder: '\u8BF7\u8F93\u5165',
										onChange: _this2.onChange.bind(_this2, vindex) }),
									_react2.default.createElement(
										_antd.Popconfirm,
										{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
												return _this2.remove(vindex);
											} },
										_react2.default.createElement(_antd.Button, {
											shape: 'circle',
											className: 'dynamic-delete-button',
											size: 'small',
											icon: 'minus',
											type: 'default' })
									)
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_PersonAddIcon2.default, {
										data: vitem.userInformations == null ? [] : vitem.userInformations,
										updatePerson: _this2.updatePerson.bind(_this2, vindex)
									})
								)
							)
						);
					}),
					!this.props.hasJournal ? null : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_antd.Form.Item,
							formItemLayoutLabel,
							_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
								style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
								type: 'plus-circle' })
						),
						_react2.default.createElement(
							_antd.Form.Item,
							_extends({}, formItemLayoutLabel, { className: addAssignments !== undefined && addAssignments.length == 0 ? "hidden" : "tr" }),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.handleSubmit, type: 'primary', shape: 'round' },
								'\u4FDD\u5B58'
							),
							_react2.default.createElement(
								_antd.Popconfirm,
								{ placement: 'top', title: '\u786E\u5B9A\u8981\u53D6\u6D88\u5417?', onConfirm: function onConfirm() {
										return _this2.handleCalc();
									} },
								_react2.default.createElement(
									_antd.Button,
									{ className: 'ml15', type: 'default', shape: 'round' },
									'\u53D6\u6D88'
								)
							)
						)
					)
				) : _react2.default.createElement(_EditeVisit2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: detailData,
					onCancle: this.handleCancle,
					pathname: this.props.pathname,
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					temType: 'news'
				})
			);
		}
	}]);

	return DetailFormNews;
}(_react2.default.Component)) || _class;

exports.default = DetailFormNews;

/***/ }),

/***/ 1569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _jsBase = __webpack_require__(95);

var _uuid = __webpack_require__(79);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _reactAudioPlayer = __webpack_require__(703);

var _reactAudioPlayer2 = _interopRequireDefault(_reactAudioPlayer);

var _CommentList = __webpack_require__(1519);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _EditeVisit = __webpack_require__(1518);

var _EditeVisit2 = _interopRequireDefault(_EditeVisit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = _antd.Typography.Text;

var DetailFormReplay = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailFormReplay, _React$Component);

	function DetailFormReplay(props) {
		_classCallCheck(this, DetailFormReplay);

		var _this = _possibleConstructorReturn(this, (DetailFormReplay.__proto__ || Object.getPrototypeOf(DetailFormReplay)).call(this, props));

		_this.onAsync = function (type, id, index) {
			_this.props.onAsync(type, id, index);
		};

		_this.remove = function (index) {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			customList.splice(index, 1);
			_this.setState({
				addAssignments: Object.assign([], customList)
			});
		};

		_this.handleAdd = function () {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			if (customList.some(function (item) {
				return item.name == "" || item.name == null;
			})) {
				_antd.message.warn("任务名是必填项");
				return false;
			}
			if (customList.some(function (item) {
				return item.userInformations.length == 0;
			})) {
				_antd.message.warn("负责人是必填项");
				return false;
			}
			_this.setState({
				addAssignments: [].concat(_toConsumableArray(customList), [{
					"name": "",
					"userInformations": []
				}])
			});
		};

		_this.updateState = function (type, data) {
			_this.setState(_defineProperty({}, type, Object.assign([], data)));
		};

		_this.updatePerson = function (index, userIds) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].userInformations = Object.assign([], userIds);
			_this.setState({
				addAssignments: fields
			});
		};

		_this.onChange = function (index, e) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].name = e.target.value;
			_this.setState({
				addAssignments: fields
			});
		};

		_this.handleSubmit = function () {
			var addAssignments = _this.state.addAssignments;
			// 校验下一步

			if (!addAssignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (addAssignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (addAssignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			/*let {detailData} = this.props;
   let detail = JSON.parse(JSON.stringify(detailData));
   detail.addAssignments = addAssignments.filter((item)=>{
   	return !((item.name == "" || item.name == null)&&(item.userInformations.length == 0))
   });*/
			var detail = addAssignments.filter(function (item) {
				return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
			}).map(function (item) {
				return Object.assign(item, { type: 1 });
			});
			_this.props.handleAddNew(detail);
		};

		_this.handleCalc = function () {
			_this.setState({
				addAssignments: Object.assign([]),
				audioSrc: "",
				fileName: ""
			});
		};

		_this.clickChange = function (e) {
			var item = e.item.props.item;

			_this.setState({
				audioSrc: item.filePath,
				fileName: item.fileName
			});
		};

		_this.hanndleChangeEdit = function () {
			_this.store.changeCanEdit().then(function (res) {
				// 判断当前的权限, 是当前人员继续编辑，存在编辑时给出提示
				if (res) {
					var userId = res.userId,
					    userName = res.userName;

					var userid = localStorage.getItem("userid");
					if (userId == userid) {
						_this.setState({
							isEdit: !_this.state.isEdit
						}, function () {
							_this.store.isEdit = _this.state.isEdit;
						});
					} else {
						_antd.Modal.warning({
							title: userName + '正在编辑中'
						});
					}
				}
			});
		};

		_this.handleCancle = function () {
			_this.setState({
				isEdit: !_this.state.isEdit
			}, function () {
				_this.store.isEdit = _this.state.isEdit;
			});
		};

		_this.store = _this.props.store;
		_this.state = {
			addAssignments: [],
			newAddignments: [],
			audioSrc: "",
			fileName: "",
			isEdit: false // 默认详情态
		};
		return _this;
	}

	_createClass(DetailFormReplay, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.detailData) != JSON.stringify(this.props.detailData)) {
				this.setState({
					newAddignments: nextProps.detailData.addAssignments == null ? [] : nextProps.detailData.addAssignments,
					addAssignments: []
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onRef(this);
		}

		// 同步


		// 删除字段


		// 人员选择更新


		// 取消


		// 切换编辑


		// 取消

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
			var formItemLayoutWithOutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 0 }
				}
			};
			var formItemLayoutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 3 }
				}
			};
			var _props = this.props,
			    detailData = _props.detailData,
			    visible = _props.visible;

			var journalMain = detailData.journalMain || {};
			var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
			var assignments = detailData.assignments || [];
			var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};
			var atts = detailData.atts == null ? [] : detailData.atts;
			var attachments = atts == null ? [] : atts.map(function (vitem, vindex) {
				return Object.assign({}, {
					uid: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					name: vitem.fileName,
					status: 'done',
					url: vitem.filePath,
					fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					fileName: vitem.fileName,
					filePath: vitem.filePath,
					id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
				});
			});
			var audio = detailData.audio == null ? [] : detailData.audio;
			var _state = this.state,
			    addAssignments = _state.addAssignments,
			    newAddignments = _state.newAddignments,
			    audioSrc = _state.audioSrc,
			    fileName = _state.fileName;
			var isEdit = this.store.isEdit;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = journalMain.userName == username;
			var dropDown = _react2.default.createElement(
				_antd.Dropdown,
				{
					overlay: _react2.default.createElement(
						_antd.Menu,
						null,
						audio.map(function (item, index) {
							return _react2.default.createElement(
								_antd.Menu.Item,
								{ key: index, onClick: _this2.clickChange, item: item },
								item.fileName
							);
						})
					) },
				_react2.default.createElement(
					'a',
					{ className: 'ant-dropdown-link',
						style: { position: "absolute", right: 0, top: 0 },
						onClick: function onClick(e) {
							return e.preventDefault();
						} },
					audio.length > 0 ? fileName || audio[0].fileName : null,
					_react2.default.createElement(_antd.Icon, { type: 'down' })
				)
			);
			var formTailLayout = {
				wrapperCol: { span: 22, offset: 2 }
			};

			return _react2.default.createElement(
				'div',
				{ className: 'w pr' },
				_react2.default.createElement(
					'div',
					{ style: {
							cursor: 'pointer',
							position: 'absolute',
							right: '0',
							top: '0',
							zIndex: '5'
						} },
					!isEdit && isShow ? _react2.default.createElement(
						_antd.Button,
						{ className: visible == true ? "hidden" : "", type: 'link', onClick: this.hanndleChangeEdit },
						'\u7F16\u8F91'
					) : null
				),
				!isEdit ? _react2.default.createElement(
					_antd.Form,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(
						_antd.Form.Item,
						{ colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'div',
							{ className: 'detail_form pr' },
							_react2.default.createElement(
								'p',
								{ className: 'form_title' },
								journalMain.title,
								_react2.default.createElement(
									'span',
									{ style: {
											display: 'inline-block',
											maxWidth: '500px',
											position: 'absolute',
											top: 0,
											paddingLeft: '10px'
										} },
									journalMain.tags == null ? null : journalMain.tags.map(function (item) {
										return _react2.default.createElement(
											_antd.Tag,
											{ color: 'gold', className: 'ml5' },
											item.name
										);
									})
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'form_name' },
								journalMain.userName,
								_react2.default.createElement(
									'span',
									{
										className: 'form_time' },
									(0, _utils.showText)((0, _moment2.default)(journalMain.createTime).format("YYYY-MM-DD HH:mm"), (0, _moment2.default)(journalMain.createTime).format("HH:mm"))
								),
								_react2.default.createElement(_CommentList2.default, {
									detailData: detailData,
									store: this.store,
									scrollToAnchor: this.props.scrollToAnchor
								})
							),
							audio.length > 0 && dropDown,
							_react2.default.createElement(
								'div',
								{ style: {
										position: 'absolute',
										right: 0,
										top: '30px'
									} },
								audioSrc ? _react2.default.createElement(_reactAudioPlayer2.default, {
									src: audioSrc || "",
									controls: true
								}) : null
							)
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u590D\u76D8\u4E3B\u9898'
						),
						' ',
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.title
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u590D\u76D8\u65F6\u95F4'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							(0, _moment2.default)(sub.time).format("YYYY年MM月DD日")
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u590D\u76D8\u53C2\u4E0E\u4EBA'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.people
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u56DE\u987E\u76EE\u6807'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.target } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8BC4\u4F30\u7ED3\u679C'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.assessmentResult } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u5206\u6790\u539F\u56E0'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.analyzeReason } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u603B\u7ED3\u89C4\u5F8B'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.summarizeLaw } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E0B\u4E00\u6B65\u884C\u52A8'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ className: 'detail_form_bold' },
						assignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "assignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold mt15' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u9644\u4EF6'
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { paddingLeft: '14px' } },
						_react2.default.createElement(_MyUpload2.default, {
							disabled: true,
							fileList: attachments == null ? [] : attachments
						})
					),
					!this.props.hasJournal ? _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: newAddignments !== undefined && newAddignments.length == 0 ? "hidden" : "detail_form_bold" },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					) : _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					!this.props.hasJournal ? null : _react2.default.createElement(
						_antd.Row,
						{ className: 'mb10' },
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u4EFB\u52A1\u540D'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u8D1F\u8D23\u4EBA'
							)
						)
					),
					addAssignments !== undefined && addAssignments.map(function (vitem, vindex) {
						return _react2.default.createElement(
							_antd.Row,
							{ key: 'subname+' + vindex,
								style: { paddingTop: '10px', borderBottom: "1px dashed #E6E6E6" } },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: 'pr' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_antd.Input, { value: vitem.name == null ? "" : vitem.name,
										placeholder: '\u8BF7\u8F93\u5165',
										onChange: _this2.onChange.bind(_this2, vindex) }),
									_react2.default.createElement(
										_antd.Popconfirm,
										{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
												return _this2.remove(vindex);
											} },
										_react2.default.createElement(_antd.Button, {
											shape: 'circle',
											className: 'dynamic-delete-button',
											size: 'small',
											icon: 'minus',
											type: 'default' })
									)
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_PersonAddIcon2.default, {
										data: vitem.userInformations == null ? [] : vitem.userInformations,
										updatePerson: _this2.updatePerson.bind(_this2, vindex)
									})
								)
							)
						);
					}),
					!this.props.hasJournal ? null : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_antd.Form.Item,
							formItemLayoutLabel,
							_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
								style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
								type: 'plus-circle' })
						),
						_react2.default.createElement(
							_antd.Form.Item,
							_extends({}, formItemLayoutLabel, { className: addAssignments !== undefined && addAssignments.length == 0 ? "hidden" : "tr" }),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.handleSubmit, type: 'primary', shape: 'round' },
								'\u4FDD\u5B58'
							),
							_react2.default.createElement(
								_antd.Popconfirm,
								{ placement: 'top', title: '\u786E\u5B9A\u8981\u53D6\u6D88\u5417?', onConfirm: function onConfirm() {
										return _this2.handleCalc();
									} },
								_react2.default.createElement(
									_antd.Button,
									{ className: 'ml15', type: 'default', shape: 'round' },
									'\u53D6\u6D88'
								)
							)
						)
					)
				) : _react2.default.createElement(_EditeVisit2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: detailData,
					onCancle: this.handleCancle,
					pathname: this.props.pathname,
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					temType: 'replay'
				})
			);
		}
	}]);

	return DetailFormReplay;
}(_react2.default.Component)) || _class;

exports.default = DetailFormReplay;

/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单 月思想
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _jsBase = __webpack_require__(95);

var _uuid = __webpack_require__(79);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _reactAudioPlayer = __webpack_require__(703);

var _reactAudioPlayer2 = _interopRequireDefault(_reactAudioPlayer);

var _CommentList = __webpack_require__(1519);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _EditeVisit = __webpack_require__(1518);

var _EditeVisit2 = _interopRequireDefault(_EditeVisit);

var _mobxReact = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = _antd.Typography.Text;

var DetailFormSummary = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailFormSummary, _React$Component);

	function DetailFormSummary(props) {
		_classCallCheck(this, DetailFormSummary);

		var _this = _possibleConstructorReturn(this, (DetailFormSummary.__proto__ || Object.getPrototypeOf(DetailFormSummary)).call(this, props));

		_this.onAsync = function (type, id, index) {
			_this.props.onAsync(type, id, index);
		};

		_this.remove = function (index) {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			customList.splice(index, 1);
			_this.setState({
				addAssignments: Object.assign([], customList)
			});
		};

		_this.handleAdd = function () {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			if (customList.some(function (item) {
				return item.name == "" || item.name == null;
			})) {
				_antd.message.warn("任务名是必填项");
				return false;
			}
			if (customList.some(function (item) {
				return item.userInformations.length == 0;
			})) {
				_antd.message.warn("负责人是必填项");
				return false;
			}
			_this.setState({
				addAssignments: [].concat(_toConsumableArray(customList), [{
					"name": "",
					"userInformations": []
				}])
			});
		};

		_this.updateState = function (type, data) {
			_this.setState(_defineProperty({}, type, Object.assign([], data)));
		};

		_this.updatePerson = function (index, userIds) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].userInformations = Object.assign([], userIds);
			_this.setState({
				addAssignments: fields
			});
		};

		_this.onChange = function (index, e) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].name = e.target.value;
			_this.setState({
				addAssignments: fields
			});
		};

		_this.handleSubmit = function () {
			var addAssignments = _this.state.addAssignments;
			// 校验下一步

			if (!addAssignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (addAssignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (addAssignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			/*let {detailData} = this.props;
   let detail = JSON.parse(JSON.stringify(detailData));
   detail.addAssignments = addAssignments.filter((item)=>{
   	return !((item.name == "" || item.name == null)&&(item.userInformations.length == 0))
   });*/

			var detail = addAssignments.filter(function (item) {
				return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
			}).map(function (item) {
				return Object.assign(item, { type: 1 });
			});
			_this.props.handleAddNew(detail);
		};

		_this.handleCalc = function () {
			_this.setState({
				addAssignments: Object.assign([]),
				audioSrc: "",
				fileName: ""
			});
		};

		_this.clickChange = function (e) {
			var item = e.item.props.item;

			_this.setState({
				audioSrc: item.filePath,
				fileName: item.fileName
			});
		};

		_this.hanndleChangeEdit = function () {
			_this.store.changeCanEdit().then(function (res) {
				// 判断当前的权限, 是当前人员继续编辑，存在编辑时给出提示
				if (res) {
					var userId = res.userId,
					    userName = res.userName;

					var userid = localStorage.getItem("userid");
					if (userId == userid) {
						_this.setState({
							isEdit: !_this.state.isEdit
						}, function () {
							_this.store.isEdit = _this.state.isEdit;
						});
					} else {
						_antd.Modal.warning({
							title: userName + '正在编辑中'
						});
					}
				}
			});
		};

		_this.handleCancle = function () {
			_this.setState({
				isEdit: !_this.state.isEdit
			}, function () {
				_this.store.isEdit = _this.state.isEdit;
			});
		};

		_this.store = _this.props.store;
		_this.state = {
			addAssignments: [],
			newAddignments: [],
			audioSrc: "",
			fileName: "",
			isEdit: false // 默认详情态
		};
		return _this;
	}

	_createClass(DetailFormSummary, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.detailData) != JSON.stringify(this.props.detailData)) {
				this.setState({
					newAddignments: nextProps.detailData.addAssignments == null ? [] : nextProps.detailData.addAssignments,
					addAssignments: []
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onRef(this);
		}

		// 同步


		// 删除字段


		// 人员选择更新


		// 取消


		// 切换编辑


		// 取消

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
			var formItemLayoutWithOutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 0 }
				}
			};
			var formItemLayoutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 3 }
				}
			};
			var _props = this.props,
			    detailData = _props.detailData,
			    visible = _props.visible;

			var journalMain = detailData.journalMain || {};
			var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
			var assignments = detailData.assignments || [];
			var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};
			var atts = detailData.atts == null ? [] : detailData.atts;
			var attachments = atts == null ? [] : atts.map(function (vitem, vindex) {
				return Object.assign({}, {
					uid: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					name: vitem.fileName,
					status: 'done',
					url: vitem.filePath,
					fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					fileName: vitem.fileName,
					filePath: vitem.filePath,
					id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
				});
			});
			var audio = detailData.audio == null ? [] : detailData.audio;
			var _state = this.state,
			    addAssignments = _state.addAssignments,
			    newAddignments = _state.newAddignments,
			    audioSrc = _state.audioSrc,
			    fileName = _state.fileName;
			var isEdit = this.store.isEdit;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = journalMain.userName == username;
			var dropDown = _react2.default.createElement(
				_antd.Dropdown,
				{
					overlay: _react2.default.createElement(
						_antd.Menu,
						null,
						audio.map(function (item, index) {
							return _react2.default.createElement(
								_antd.Menu.Item,
								{ key: index, onClick: _this2.clickChange, item: item },
								item.fileName
							);
						})
					) },
				_react2.default.createElement(
					'a',
					{ className: 'ant-dropdown-link',
						style: { position: "absolute", right: 0, top: 0 },
						onClick: function onClick(e) {
							return e.preventDefault();
						} },
					audio.length > 0 ? fileName || audio[0].fileName : null,
					_react2.default.createElement(_antd.Icon, { type: 'down' })
				)
			);

			var formTailLayout = {
				wrapperCol: { span: 22, offset: 2 }
			};

			return _react2.default.createElement(
				'div',
				{ className: 'w pr' },
				_react2.default.createElement(
					'div',
					{ style: {
							cursor: 'pointer',
							position: 'absolute',
							right: '0',
							top: '0',
							zIndex: '5'
						} },
					!isEdit && isShow ? _react2.default.createElement(
						_antd.Button,
						{ className: visible == true ? "hidden" : "", type: 'link', onClick: this.hanndleChangeEdit },
						'\u7F16\u8F91'
					) : null
				),
				!isEdit ? _react2.default.createElement(
					_antd.Form,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(
						_antd.Form.Item,
						{ colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'div',
							{ className: 'detail_form pr' },
							_react2.default.createElement(
								'p',
								{ className: 'form_title' },
								journalMain.title,
								_react2.default.createElement(
									'span',
									{ style: {
											display: 'inline-block',
											maxWidth: '500px',
											position: 'absolute',
											top: 0,
											paddingLeft: '10px'
										} },
									journalMain.tags == null ? null : journalMain.tags.map(function (item) {
										return _react2.default.createElement(
											_antd.Tag,
											{ color: 'gold', className: 'ml5' },
											item.name
										);
									})
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'form_name' },
								journalMain.userName,
								_react2.default.createElement(
									'span',
									{
										className: 'form_time' },
									(0, _utils.showText)((0, _moment2.default)(journalMain.createTime).format("YYYY-MM-DD HH:mm"), (0, _moment2.default)(journalMain.createTime).format("HH:mm"))
								),
								_react2.default.createElement(_CommentList2.default, {
									detailData: detailData,
									store: this.store,
									scrollToAnchor: this.props.scrollToAnchor
								})
							),
							audio.length > 0 && dropDown,
							_react2.default.createElement(
								'div',
								{ style: {
										position: 'absolute',
										right: 0,
										top: '30px'
									} },
								audioSrc ? _react2.default.createElement(_reactAudioPlayer2.default, {
									src: audioSrc || "",
									controls: true
								}) : null
							)
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u603B\u7ED3\u4E3B\u9898'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.title
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u603B\u7ED3\u65F6\u95F4'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							(0, _moment2.default)(sub.time).format("YYYY年MM月DD日")
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u603B\u7ED3\u5185\u5BB9'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.content } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E0B\u4E00\u6B65\u884C\u52A8'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ className: 'detail_form_bold' },
						assignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "assignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold mt15' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u9644\u4EF6'
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { paddingLeft: '14px' } },
						_react2.default.createElement(_MyUpload2.default, {
							disabled: true,
							fileList: attachments == null ? [] : attachments
						})
					),
					!this.props.hasJournal ? _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: newAddignments !== undefined && newAddignments.length == 0 ? "hidden" : "detail_form_bold" },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					) : _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					!this.props.hasJournal ? null : _react2.default.createElement(
						_antd.Row,
						{ className: 'mb10' },
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u4EFB\u52A1\u540D'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u8D1F\u8D23\u4EBA'
							)
						)
					),
					addAssignments !== undefined && addAssignments.map(function (vitem, vindex) {
						return _react2.default.createElement(
							_antd.Row,
							{ key: 'subname+' + vindex,
								style: { paddingTop: '10px', borderBottom: "1px dashed #E6E6E6" } },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: 'pr' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_antd.Input, { value: vitem.name == null ? "" : vitem.name,
										placeholder: '\u8BF7\u8F93\u5165',
										onChange: _this2.onChange.bind(_this2, vindex) }),
									_react2.default.createElement(
										_antd.Popconfirm,
										{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
												return _this2.remove(vindex);
											} },
										_react2.default.createElement(_antd.Button, {
											shape: 'circle',
											className: 'dynamic-delete-button',
											size: 'small',
											icon: 'minus',
											type: 'default' })
									)
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_PersonAddIcon2.default, {
										data: vitem.userInformations == null ? [] : vitem.userInformations,
										updatePerson: _this2.updatePerson.bind(_this2, vindex)
									})
								)
							)
						);
					}),
					!this.props.hasJournal ? null : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_antd.Form.Item,
							formItemLayoutLabel,
							_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
								style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
								type: 'plus-circle' })
						),
						_react2.default.createElement(
							_antd.Form.Item,
							_extends({}, formItemLayoutLabel, { className: addAssignments !== undefined && addAssignments.length == 0 ? "hidden" : "tr" }),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.handleSubmit, type: 'primary', shape: 'round' },
								'\u4FDD\u5B58'
							),
							_react2.default.createElement(
								_antd.Popconfirm,
								{ placement: 'top', title: '\u786E\u5B9A\u8981\u53D6\u6D88\u5417?', onConfirm: function onConfirm() {
										return _this2.handleCalc();
									} },
								_react2.default.createElement(
									_antd.Button,
									{ className: 'ml15', type: 'default', shape: 'round' },
									'\u53D6\u6D88'
								)
							)
						)
					)
				) : _react2.default.createElement(_EditeVisit2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: detailData,
					onCancle: this.handleCancle,
					pathname: this.props.pathname,
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					temType: 'summary'
				})
			);
		}
	}]);

	return DetailFormSummary;
}(_react2.default.Component)) || _class;

exports.default = DetailFormSummary;

/***/ }),

/***/ 1571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _jsBase = __webpack_require__(95);

var _uuid = __webpack_require__(79);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _reactAudioPlayer = __webpack_require__(703);

var _reactAudioPlayer2 = _interopRequireDefault(_reactAudioPlayer);

var _CommentList = __webpack_require__(1519);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _EditeVisit = __webpack_require__(1518);

var _EditeVisit2 = _interopRequireDefault(_EditeVisit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = _antd.Typography.Text;

var DetailFormVisit = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailFormVisit, _React$Component);

	function DetailFormVisit(props) {
		_classCallCheck(this, DetailFormVisit);

		var _this = _possibleConstructorReturn(this, (DetailFormVisit.__proto__ || Object.getPrototypeOf(DetailFormVisit)).call(this, props));

		_this.onAsync = function (type, id, index) {
			_this.props.onAsync(type, id, index);
		};

		_this.remove = function (index) {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			customList.splice(index, 1);
			_this.setState({
				addAssignments: Object.assign([], customList)
			});
		};

		_this.handleAdd = function () {
			var customList = JSON.parse(JSON.stringify(_this.state.addAssignments));
			if (customList.some(function (item) {
				return item.name == "" || item.name == null;
			})) {
				_antd.message.warn("任务名是必填项");
				return false;
			}
			if (customList.some(function (item) {
				return item.userInformations.length == 0;
			})) {
				_antd.message.warn("负责人是必填项");
				return false;
			}
			_this.setState({
				addAssignments: [].concat(_toConsumableArray(customList), [{
					"name": "",
					"userInformations": []
				}])
			});
		};

		_this.updateState = function (type, data) {
			_this.setState(_defineProperty({}, type, Object.assign([], data)));
		};

		_this.updatePerson = function (index, userIds) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].userInformations = Object.assign([], userIds);
			_this.setState({
				addAssignments: fields
			});
		};

		_this.onChange = function (index, e) {
			var fields = JSON.parse(JSON.stringify(_this.state.addAssignments));
			fields[index].name = e.target.value;
			_this.setState({
				addAssignments: fields
			});
		};

		_this.handleSubmit = function () {
			var addAssignments = _this.state.addAssignments;
			// 校验下一步

			if (!addAssignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (addAssignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (addAssignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			/*let {detailData} = this.props;
   let detail = JSON.parse(JSON.stringify(detailData));
   detail.addAssignments = addAssignments.filter((item)=>{
   	return !((item.name == "" || item.name == null)&&(item.userInformations.length == 0))
   });*/
			var detail = addAssignments.filter(function (item) {
				return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
			}).map(function (item) {
				return Object.assign(item, { type: 1 });
			});
			_this.props.handleAddNew(detail);
		};

		_this.handleCalc = function () {
			_this.setState({
				addAssignments: Object.assign([]),
				audioSrc: "",
				fileName: ""
			});
		};

		_this.clickChange = function (e) {
			var item = e.item.props.item;

			_this.setState({
				audioSrc: item.filePath,
				fileName: item.fileName
			});
		};

		_this.hanndleChangeEdit = function () {
			_this.store.changeCanEdit().then(function (res) {
				// 判断当前的权限, 是当前人员继续编辑，存在编辑时给出提示
				if (res) {
					var userId = res.userId,
					    userName = res.userName;

					var userid = localStorage.getItem("userid");
					if (userId == userid) {
						_this.setState({
							isEdit: !_this.state.isEdit
						}, function () {
							_this.store.isEdit = _this.state.isEdit;
						});
					} else {
						_antd.Modal.warning({
							title: userName + '正在编辑中'
						});
					}
				}
			});
		};

		_this.handleCancle = function () {
			_this.setState({
				isEdit: !_this.state.isEdit
			}, function () {
				_this.store.isEdit = _this.state.isEdit;
			});
		};

		_this.store = _this.props.store;
		_this.state = {
			addAssignments: [],
			newAddignments: [],
			audioSrc: "",
			fileName: "",
			isEdit: false // 默认详情态
		};
		return _this;
	}

	_createClass(DetailFormVisit, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.detailData) != JSON.stringify(this.props.detailData)) {
				this.setState({
					newAddignments: nextProps.detailData.addAssignments == null ? [] : nextProps.detailData.addAssignments,
					addAssignments: []
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onRef(this);
		}

		// 同步


		// 删除字段


		// 人员选择更新


		// 取消


		// 切换编辑


		// 取消

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

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
			var formItemLayoutWithOutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 0 }
				}
			};
			var formItemLayoutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 3 }
				}
			};
			var _props = this.props,
			    detailData = _props.detailData,
			    visible = _props.visible;

			var journalMain = detailData.journalMain || {};
			var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
			var assignments = detailData.assignments || [];
			var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};
			var atts = detailData.atts == null ? [] : detailData.atts;
			var attachments = atts == null ? [] : atts.map(function (vitem, vindex) {
				return Object.assign({}, {
					uid: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					name: vitem.fileName,
					status: 'done',
					url: vitem.filePath,
					fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
					fileName: vitem.fileName,
					filePath: vitem.filePath,
					id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
				});
			});
			var audio = detailData.audio == null ? [] : detailData.audio;
			var _state = this.state,
			    addAssignments = _state.addAssignments,
			    newAddignments = _state.newAddignments,
			    audioSrc = _state.audioSrc,
			    fileName = _state.fileName;
			var isEdit = this.store.isEdit;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = journalMain.userName == username;
			var dropDown = _react2.default.createElement(
				_antd.Dropdown,
				{
					overlay: _react2.default.createElement(
						_antd.Menu,
						null,
						audio.map(function (item, index) {
							return _react2.default.createElement(
								_antd.Menu.Item,
								{ key: index, onClick: _this2.clickChange, item: item },
								item.fileName
							);
						})
					) },
				_react2.default.createElement(
					'a',
					{ className: 'ant-dropdown-link',
						style: { position: "absolute", right: 0, top: 0 },
						onClick: function onClick(e) {
							return e.preventDefault();
						} },
					audio.length > 0 ? fileName || audio[0].fileName : null,
					_react2.default.createElement(_antd.Icon, { type: 'down' })
				)
			);
			var formTailLayout = {
				wrapperCol: { span: 22, offset: 2 }
			};

			return _react2.default.createElement(
				'div',
				{ className: 'w pr' },
				_react2.default.createElement(
					'div',
					{ style: {
							cursor: 'pointer',
							position: 'absolute',
							right: '0',
							top: '0',
							zIndex: '5'
						} },
					!isEdit && isShow ? _react2.default.createElement(
						_antd.Button,
						{ className: visible == true ? "hidden" : "", type: 'link', onClick: this.hanndleChangeEdit },
						'\u7F16\u8F91'
					) : null
				),
				!isEdit ? _react2.default.createElement(
					_antd.Form,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(
						_antd.Form.Item,
						{ colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'div',
							{ className: 'detail_form pr' },
							_react2.default.createElement(
								'p',
								{ className: 'form_title' },
								journalMain.title,
								_react2.default.createElement(
									'span',
									{ style: {
											display: 'inline-block',
											maxWidth: '500px',
											position: 'absolute',
											top: 0,
											paddingLeft: '10px'
										} },
									journalMain.tags == null ? null : journalMain.tags.map(function (item) {
										return _react2.default.createElement(
											_antd.Tag,
											{ color: 'gold', className: 'ml5' },
											item.name
										);
									})
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'form_name' },
								journalMain.userName,
								_react2.default.createElement(
									'span',
									{
										className: 'form_time' },
									(0, _utils.showText)((0, _moment2.default)(journalMain.createTime).format("YYYY-MM-DD HH:mm"), (0, _moment2.default)(journalMain.createTime).format("HH:mm"))
								),
								_react2.default.createElement(_CommentList2.default, {
									detailData: detailData,
									store: this.store,
									scrollToAnchor: this.props.scrollToAnchor
								})
							),
							audio.length > 0 && dropDown,
							_react2.default.createElement(
								'div',
								{ style: {
										position: 'absolute',
										right: 0,
										top: '30px'
									} },
								audioSrc ? _react2.default.createElement(_reactAudioPlayer2.default, {
									src: audioSrc || "",
									controls: true
								}) : null
							)
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u62DC\u8BBF\u65F6\u95F4'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							(0, _moment2.default)(sub.time).format("YYYY年MM月DD日")
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4EA4\u6D41\u65F6\u957F'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.hours,
							'\u5C0F\u65F6'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4F01\u4E1A\u540D\u79F0'
						),
						' ',
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.company
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u9879\u76EE\u540D\u79F0'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.project
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u9879\u76EE\u5730\u5740'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.address
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u6211\u65B9\u4EBA\u5458'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							sub.ourPeople
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u5BF9\u65B9\u4EBA\u5458'
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ className: 'mb5', style: { paddingLeft: '14px' } },
						_react2.default.createElement(
							'div',
							{ style: { width: '180px', fontWeight: '600' }, className: 'fl tc' },
							'\u5BA2\u6237\u59D3\u540D'
						),
						_react2.default.createElement(
							'div',
							{ style: { width: '180px', fontWeight: '600' }, className: 'fl tc' },
							'\u804C\u52A1'
						),
						_react2.default.createElement(
							'div',
							{ style: { width: '180px', fontWeight: '600' }, className: 'fl tc' },
							'\u8054\u7CFB\u65B9\u5F0F'
						)
					),
					sub.visitPeoples && sub.visitPeoples.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Row,
							{ key: index, style: { paddingLeft: '14px' } },
							_react2.default.createElement(
								'div',
								{ style: { width: '180px' }, className: 'fl tc' },
								item.name
							),
							_react2.default.createElement(
								'div',
								{ style: { width: '180px' }, className: 'fl tc' },
								item.position
							),
							_react2.default.createElement(
								'div',
								{ style: { width: '180px' }, className: 'fl tc' },
								item.phone
							)
						);
					}),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u62DC\u8BBF\u76EE\u7684'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.purpose } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u62DC\u8BBF\u6D41\u7A0B'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.process } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u62DC\u8BBF\u7EAA\u8981'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.content } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u73B0\u573A\u7167\u7247'
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { paddingLeft: '14px' } },
						_react2.default.createElement(_MyUpload2.default, {
							disabled: true,
							fileList: attachments == null ? [] : attachments
						})
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u5BF9\u5916\u627F\u8BFA'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.promise } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '', colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E0B\u4E00\u6B65\u884C\u52A8'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ className: 'detail_form_bold' },
						assignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "assignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					!this.props.hasJournal ? _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: newAddignments !== undefined && newAddignments.length == 0 ? "hidden" : "detail_form_bold mt15" },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					) : _react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false,
							className: 'detail_form_bold mt15' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u8FFD\u52A0\u4EFB\u52A1'
						),
						newAddignments !== undefined && newAddignments.map(function (item, index) {
							return _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'span',
									{
										className: 'form_nextname' },
									index + 1,
									' - ',
									item.name,
									' ',
									item.userInformations == null || item.userInformations.length == 0 ? null : " -- " + item.userInformations.map(function (vitem) {
										return vitem.userName;
									}).join('、'),
									item.isSync == 1 ? _react2.default.createElement(
										Text,
										{ type: 'warning', className: 'ml15' },
										'\u5DF2\u540C\u6B65'
									) : _react2.default.createElement(
										_antd.Button,
										{ className: !_this2.props.hasJournal || item.isSync == 1 ? "hidden" : "ml15",
											type: 'link',
											onClick: _this2.onAsync.bind(_this2, "addAssignments", item.id, index) },
										'\u540C\u6B65\u5230\u516C\u53F8\u4EFB\u52A1\u6E05\u5355'
									)
								)
							);
						})
					),
					!this.props.hasJournal ? null : _react2.default.createElement(
						_antd.Row,
						{ className: 'mb10' },
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u4EFB\u52A1\u540D'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'tc' },
							_react2.default.createElement(
								'div',
								null,
								'\u8D1F\u8D23\u4EBA'
							)
						)
					),
					addAssignments !== undefined && addAssignments.map(function (vitem, vindex) {
						return _react2.default.createElement(
							_antd.Row,
							{ key: 'subname+' + vindex,
								style: { paddingTop: '10px', borderBottom: "1px dashed #E6E6E6" } },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: 'pr' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_antd.Input, { value: vitem.name == null ? "" : vitem.name,
										placeholder: '\u8BF7\u8F93\u5165',
										onChange: _this2.onChange.bind(_this2, vindex) }),
									_react2.default.createElement(
										_antd.Popconfirm,
										{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
												return _this2.remove(vindex);
											} },
										_react2.default.createElement(_antd.Button, {
											shape: 'circle',
											className: 'dynamic-delete-button',
											size: 'small',
											icon: 'minus',
											type: 'default' })
									)
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: " ",
										colon: false,
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										}
									},
									_react2.default.createElement(_PersonAddIcon2.default, {
										data: vitem.userInformations == null ? [] : vitem.userInformations,
										updatePerson: _this2.updatePerson.bind(_this2, vindex)
									})
								)
							)
						);
					}),
					!this.props.hasJournal ? null : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_antd.Form.Item,
							formItemLayoutLabel,
							_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
								style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
								type: 'plus-circle' })
						),
						_react2.default.createElement(
							_antd.Form.Item,
							_extends({}, formItemLayoutLabel, { className: addAssignments !== undefined && addAssignments.length == 0 ? "hidden" : "tr" }),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.handleSubmit, type: 'primary', shape: 'round' },
								'\u4FDD\u5B58'
							),
							_react2.default.createElement(
								_antd.Popconfirm,
								{ placement: 'top', title: '\u786E\u5B9A\u8981\u53D6\u6D88\u5417?', onConfirm: function onConfirm() {
										return _this2.handleCalc();
									} },
								_react2.default.createElement(
									_antd.Button,
									{ className: 'ml15', type: 'default', shape: 'round' },
									'\u53D6\u6D88'
								)
							)
						)
					)
				) : _react2.default.createElement(_EditeVisit2.default, {
					onRef: this.onRef,
					store: this.store,
					detailData: detailData,
					onCancle: this.handleCancle,
					pathname: this.props.pathname,
					handleDraftRoute: this.props.handleDraftRoute,
					handleRoute: this.props.handleRoute,
					getTable: this.props.getTable,
					temType: 'visit'
				})
			);
		}
	}]);

	return DetailFormVisit;
}(_react2.default.Component)) || _class;

exports.default = DetailFormVisit;

/***/ }),

/***/ 1573:
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

//import EditableTagEmail from "@/components/digitalOrg/EditableTagEmail";

// import Audio from './Audio';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _braftEditor = __webpack_require__(339);

var _braftEditor2 = _interopRequireDefault(_braftEditor);

__webpack_require__(338);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _PersonAdd = __webpack_require__(94);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

var _EditableTagGroup = __webpack_require__(103);

var _EditableTagGroup2 = _interopRequireDefault(_EditableTagGroup);

var _utils = __webpack_require__(89);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _jsBase = __webpack_require__(95);

var _MyUploadNew = __webpack_require__(100);

var _MyUploadNew2 = _interopRequireDefault(_MyUploadNew);

var _uuid = __webpack_require__(79);

var _download = __webpack_require__(68);

var _AudioRecorder = __webpack_require__(725);

var _AudioRecorder2 = _interopRequireDefault(_AudioRecorder);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

var _braftUtils = __webpack_require__(82);

var _MyUploadOne = __webpack_require__(101);

var _MyUploadOne2 = _interopRequireDefault(_MyUploadOne);

var _EditableTagEmail = __webpack_require__(98);

var _EditableTagEmail2 = _interopRequireDefault(_EditableTagEmail);

var _ReactKindeditor = __webpack_require__(102);

var _ReactKindeditor2 = _interopRequireDefault(_ReactKindeditor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _antd.Input.TextArea;
var EditeMeeting = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(EditeMeeting, _React$Component);

	function EditeMeeting(props) {
		_classCallCheck(this, EditeMeeting);

		var _this2 = _possibleConstructorReturn(this, (EditeMeeting.__proto__ || Object.getPrototypeOf(EditeMeeting)).call(this, props));

		_this2.updateState = function (type, data) {
			_this2.setState(_defineProperty({}, type, Object.assign([], data)));
		};

		_this2.handleChange = function (type, e) {
			_this2.setState(_defineProperty({}, type, e.target.value));
		};

		_this2.handleNumChange = function (type, e) {
			_this2.setState(_defineProperty({}, type, e));
		};

		_this2.onDateChange = function (date, dateString) {
			_this2.setState({
				time: dateString
			});
		};

		_this2.handleBChange = function (type, editorState) {
			_this2.setState(_defineProperty({}, type, editorState));
		};

		_this2.remove = function (index) {
			var customList = JSON.parse(JSON.stringify(_this2.state.assignments));
			customList.splice(index, 1);
			_this2.setState({
				assignments: Object.assign([], customList)
			});
		};

		_this2.handleAdd = function () {
			var customList = JSON.parse(JSON.stringify(_this2.state.assignments));
			if (customList.some(function (item) {
				return item.name == "" || item.name == null;
			})) {
				_antd.message.warn("任务名是必填项");
				return false;
			}
			if (customList.some(function (item) {
				return item.userInformations.length == 0;
			})) {
				_antd.message.warn("负责人是必填项");
				return false;
			}
			_this2.setState({
				assignments: [].concat(_toConsumableArray(customList), [{
					"name": "",
					"userInformations": []
				}])
			});
		};

		_this2.updatePerson = function (index, userIds) {
			var fields = JSON.parse(JSON.stringify(_this2.state.assignments));
			fields[index].userInformations = Object.assign([], userIds);
			_this2.setState({
				assignments: fields
			});
		};

		_this2.onChange = function (index, e) {
			var fields = JSON.parse(JSON.stringify(_this2.state.assignments));
			fields[index].name = e.target.value;
			_this2.setState({
				assignments: fields
			});
		};

		_this2.handleAttment = function (type, params) {
			// 处理附件
			var arr = [];
			params.length && params.map(function (item) {
				arr.push({
					fileId: item.fileId,
					fileName: item.fileName,
					filePath: item.filePath,
					id: item.id,
					uid: item.uid,
					name: item.fileName,
					status: 'done',
					url: item.filePath
				});
			});
			_this2.setState(_defineProperty({}, type, Object.assign([], arr)));
		};

		_this2.saveAuto = function (type) {
			var _this2$state = _this2.state,
			    assignments = _this2$state.assignments,
			    tags = _this2$state.tags,
			    title = _this2$state.title,
			    time = _this2$state.time,
			    attachments = _this2$state.attachments,
			    people = _this2$state.people,
			    target = _this2$state.target,
			    content = _this2$state.content,
			    conclusion = _this2$state.conclusion,
			    place = _this2$state.place,
			    hours = _this2$state.hours,
			    audio = _this2$state.audio,
			    audioStatus = _this2$state.audioStatus;

			if (type == 1) {
				// 保存草稿
				// 附件上传中提示
				if (_this2.props.appStore.journal == true) {
					_antd.message.warn("请等待图片/附件上传完成");
					return false;
				}
				// 录音提示校验
				if (audioStatus == "recording") {
					_antd.message.warn("当前正在录音中，请先结束录音");
					return false;
				}
			}
			var temList = mobx.toJS(_this2.store.temList);
			var attcs = JSON.parse(JSON.stringify(attachments));

			var numTime = (0, _moment2.default)(time).valueOf(); // 时间搓
			var newTime = (0, _moment2.default)(numTime).format("YYYYMMDD");
			var journalSub = {
				title: title,
				time: numTime,
				people: people,
				place: place,
				hours: hours,
				target: target,
				content: content,
				conclusion: conclusion
			};

			// 保存参数
			var params = {
				id: _this2.store.draftId,
				journalMain: {
					id: "",
					title: newTime + "-会议纪要-" + title,
					userId: localStorage.getItem('userid'),
					userName: localStorage.getItem('username'),
					tags: tags.map(function (item) {
						return Object.assign({}, { id: "", name: item });
					}),
					type: temList.type
				},
				journalSub: _jsBase.Base64.encode(JSON.stringify(journalSub)),
				assignments: assignments.filter(function (item) {
					return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
				}),
				atts: attcs == null ? [] : attcs.map(function (item) {
					return Object.assign({
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						id: item.id
					});
				}),
				audio: audio
			};

			_this2.store.saveJournalByType({
				journal: params,
				saveType: type
			}).then(function (res) {
				if (res) {
					_this2.store.draftId = res.id;
				}
				if (res && type == 1) {
					_antd.message.success("草稿保存成功");
					// 清空数据
					_this2.reset();

					var pathname = _this2.props.pathname;

					if (pathname == "/digital/draft") {
						// 当前页是草稿
						_events2.default.emit("draft", "3");
					} else {
						// 草稿保存成功，跳转到草稿
						if (_this2.props.handleDraftRoute) {
							_this2.props.handleDraftRoute();
						}
					}
				}
			});
		};

		_this2.saveDraft = function () {
			_this2.saveAuto(1);
		};

		_this2.handleSubmit = function () {
			var _this2$state2 = _this2.state,
			    assignments = _this2$state2.assignments,
			    tags = _this2$state2.tags,
			    attachments = _this2$state2.attachments,
			    audio = _this2$state2.audio,
			    target = _this2$state2.target,
			    content = _this2$state2.content,
			    conclusion = _this2$state2.conclusion,
			    audioStatus = _this2$state2.audioStatus;
			// 附件上传中提示

			if (_this2.props.appStore.journal == true) {
				_antd.message.warn("请等待图片/附件上传完成");
				return false;
			}
			// 录音提示校验
			if (audioStatus == "recording") {
				_antd.message.warn("当前正在录音中，请先结束录音");
				return false;
			}

			// 录音正在上传
			if (_this2.props.appStore.journalAudio == true) {
				_antd.message.warn("录音正在上传中, 请等待上传完成");
				return false;
			}

			var temList = mobx.toJS(_this2.store.temList);
			var attcs = JSON.parse(JSON.stringify(attachments));

			// 校验标签
			if (Array.isArray(tags) && tags.length == 0) {
				_antd.message.warn("标签是必输项");
				return false;
			}

			// 校验会议目标、会议纪要、会议结论
			if (target == "") {
				_antd.message.warn("会议目标是必填项");
				return false;
			}
			if (content == "") {
				_antd.message.warn("会议纪要是必填项");
				return false;
			}
			if (conclusion == "") {
				_antd.message.warn("会议结论是必填项");
				return false;
			}

			// 校验下一步
			if (!assignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (assignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (assignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			var form = _this2.props.form;
			// 获取并检查表单数据

			form.validateFields(function (err, values) {
				if (err) return;
				if (!err) {
					var title = values.title,
					    time = values.time,
					    people = values.people,
					    place = values.place,
					    hours = values.hours;


					var numTime = (0, _moment2.default)(time).valueOf(); // 时间搓
					var newTime = (0, _moment2.default)(numTime).format("YYYYMMDD");
					var journalSub = {
						title: title,
						time: numTime,
						people: people,
						place: place,
						hours: hours,
						target: target,
						content: content,
						conclusion: conclusion
					};

					// 保存参数
					var params = {
						id: _this2.store.draftId,
						journalMain: {
							id: "",
							title: newTime + ('-' + temList.name + '-') + title,
							userId: localStorage.getItem('userid'),
							userName: localStorage.getItem('username'),
							tags: tags.map(function (item) {
								return Object.assign({}, { id: "", name: item });
							}),
							type: temList.type
						},
						journalSub: _jsBase.Base64.encode(JSON.stringify(journalSub)),
						assignments: assignments.filter(function (item) {
							return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
						}),
						atts: attcs == null ? [] : attcs.map(function (item) {
							return Object.assign({
								fileId: item.fileId,
								fileName: item.fileName,
								filePath: item.filePath,
								id: item.id
							});
						}),
						audio: audio
					};
					_this2.setState({ loading: true });
					_this2.store.saveJournalByType({
						journal: params,
						saveType: 2
					}).then(function (res) {
						if (res) {
							_antd.message.success("发布成功");
							_this2.setState({ loading: false });
							// 清空数据
							_this2.reset();

							var pathname = _this2.props.pathname;

							if (pathname == "/digital/draft") {
								// 当前页是草稿
								if (_this2.props.handleRoute) {
									_this2.props.handleRoute();
								}
							} else {
								// 详情页切换编辑
								if (_this2.props.getTable) {
									_this2.props.getTable();
								}
								if (_this2.props.onCancle) {
									_this2.props.onCancle();
								}
							}
						}
					});
				}
			});
		};

		_this2.onClose = function () {
			if (_this2.store.draftId != "" && _this2.store.draftId != null) {
				// 返回按钮
				_this2.store.cancelJournal().then(function (res) {
					if (res) {
						_antd.message.success("操作成功");
						_this2.props.form.resetFields();
						var detailData = JSON.parse(JSON.stringify(_this2.state.detailData));
						// 清楚录音状态
						//this.child.reset();
						_this2.init(detailData);
						// 详情页切换编辑
						if (_this2.props.onCancle) {
							_this2.props.onCancle();
						}
					}
				});
			}
		};

		_this2.reset = function () {
			_this2.props.form.resetFields();
			_this2.store.draftId = ""; // 草稿id
			_this2.setState({
				assignments: [],
				tags: [],
				title: "",
				time: (0, _moment2.default)().format("YYYY-MM-DD"),
				attachments: [],
				people: "",
				target: "",
				content: "",
				conclusion: "",
				place: "",
				hours: "",
				audio: [],
				emails: [], // 邮件
				userIds: [], // 用户
				isLoading: false,
				audioStatus: "",
				checks: [],
				ccEmails: [],
				ccUserIds: []
			});
		};

		_this2.getReportUrl = function (id) {
			var _this = _this2;
			_this2.setState({
				isLoading: true
			});

			var temList = mobx.toJS(_this2.store.temList);
			var _this2$state3 = _this2.state,
			    title = _this2$state3.title,
			    time = _this2$state3.time;

			var numTime = (0, _moment2.default)(time).valueOf(); // 时间搓
			var newTime = (0, _moment2.default)(numTime).format("YYYYMMDD");
			var pdfName = newTime + ('-' + temList.name + '-') + title;

			_this.timer22 = setInterval(function () {
				_this.store.getDownloadUrl(id).then(function (res) {
					var url = res.url;

					if (url !== null && url !== "") {
						_this2.setState({
							isLoading: false
						});
						(0, _download.downloadFile)(url, pdfName); // 直接下载pdf
						clearInterval(_this.timer22);
					} else {
						if (res.code == 2) {
							_this2.setState({
								isLoading: false
							});
							clearInterval(_this.timer22);
						}
					}
				});
			}, 3000);
		};

		_this2.creatWord = function (type) {
			var _this2$state4 = _this2.state,
			    assignments = _this2$state4.assignments,
			    tags = _this2$state4.tags,
			    attachments = _this2$state4.attachments,
			    audio = _this2$state4.audio;

			var temList = mobx.toJS(_this2.store.temList);
			var attcs = JSON.parse(JSON.stringify(attachments));

			// 校验标签
			if (Array.isArray(tags) && tags.length == 0) {
				_antd.message.warn("标签是必输项");
				return false;
			}

			// 校验下一步
			if (!assignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (assignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (assignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			var form = _this2.props.form;
			// 获取并检查表单数据

			form.validateFields(function (err, values) {
				if (err) return;
				if (!err) {
					var title = values.title,
					    time = values.time,
					    people = values.people,
					    target = values.target,
					    content = values.content,
					    conclusion = values.conclusion,
					    place = values.place,
					    hours = values.hours;

					var numTime = (0, _moment2.default)(time).valueOf(); // 时间搓
					var newTime = (0, _moment2.default)(numTime).format("YYYYMMDD");
					var journalSub = {
						title: title,
						time: numTime,
						people: people,
						place: place,
						hours: hours,
						target: target,
						content: content,
						conclusion: conclusion
					};

					// 保存参数
					var param = {
						id: _this2.store.draftId,
						journalMain: {
							id: "",
							title: newTime + ('-' + temList.name + '-') + title,
							userId: localStorage.getItem('userid'),
							userName: localStorage.getItem('username'),
							tags: tags.map(function (item) {
								return Object.assign({}, { id: "", name: item });
							}),
							type: temList.type
						},
						journalSub: _jsBase.Base64.encode(JSON.stringify(journalSub)),
						assignments: assignments.filter(function (item) {
							return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
						}),
						atts: attcs == null ? [] : attcs.map(function (item) {
							return Object.assign({
								fileId: item.fileId,
								fileName: item.fileName,
								filePath: item.filePath,
								id: item.id
							});
						}),
						audio: audio
					};

					if (type == 1) {
						_this2.store.wordDownload(param).then(function (res) {
							_this2.getReportUrl(res);
						});
					} else {
						_this2.store.pdfDownload(param).then(function (res) {
							_this2.getReportUrl(res);
						});
					}
				}
			});
		};

		_this2.sendReport = function () {
			var _this = _this2;
			var _this$state = _this.state,
			    emails = _this$state.emails,
			    userIds = _this$state.userIds,
			    audio = _this$state.audio,
			    checks = _this$state.checks,
			    ccEmails = _this$state.ccEmails,
			    ccUserIds = _this$state.ccUserIds;

			var isemailUserIds = userIds == null ? [] : userIds;
			var isemails = emails == null ? [] : emails;
			// 选择收件人
			if (isemailUserIds.length == 0 && isemails.length == 0) {
				_antd.message.warn("请先选择邮件收件人");
				return false;
			}

			var _this2$state5 = _this2.state,
			    assignments = _this2$state5.assignments,
			    tags = _this2$state5.tags,
			    attachments = _this2$state5.attachments;

			var temList = mobx.toJS(_this2.store.temList);
			var attcs = JSON.parse(JSON.stringify(attachments));

			// 校验标签
			if (Array.isArray(tags) && tags.length == 0) {
				_antd.message.warn("标签是必输项");
				return false;
			}

			// 校验下一步
			if (!assignments.some(function (item) {
				return (item.name == "" || item.name == null) && item.userInformations.length == 0;
			})) {
				if (assignments.some(function (item) {
					return item.name == "" || item.name == null;
				})) {
					_antd.message.warn("任务名是必填项");
					return false;
				}
				if (assignments.some(function (item) {
					return item.userInformations.length == 0;
				})) {
					_antd.message.warn("负责人是必填项");
					return false;
				}
			}

			var form = _this2.props.form;
			// 获取并检查表单数据

			form.validateFields(function (err, values) {
				if (err) return;
				if (!err) {
					var title = values.title,
					    time = values.time,
					    people = values.people,
					    place = values.place,
					    hours = values.hours;
					var _this2$state6 = _this2.state,
					    target = _this2$state6.target,
					    content = _this2$state6.content,
					    conclusion = _this2$state6.conclusion;

					var numTime = (0, _moment2.default)(time).valueOf(); // 时间搓
					var newTime = (0, _moment2.default)(numTime).format("YYYYMMDD");
					var journalSub = {
						title: title,
						time: numTime,
						people: people,
						place: place,
						hours: hours,
						target: target.toHTML(),
						content: content.toHTML(),
						conclusion: conclusion.toHTML()
					};

					// 保存参数
					var param = {
						id: _this2.store.draftId,
						journalMain: {
							id: "",
							title: newTime + ('-' + temList.name + '-') + title,
							userId: localStorage.getItem('userid'),
							userName: localStorage.getItem('username'),
							tags: tags.map(function (item) {
								return Object.assign({}, { id: "", name: item });
							}),
							type: temList.type
						},
						journalSub: _jsBase.Base64.encode(JSON.stringify(journalSub)),
						assignments: assignments.filter(function (item) {
							return !((item.name == "" || item.name == null) && item.userInformations.length == 0);
						}),
						atts: attcs == null ? [] : attcs.map(function (item) {
							return Object.assign({
								fileId: item.fileId,
								fileName: item.fileName,
								filePath: item.filePath,
								id: item.id
							});
						}),
						audio: audio
					};

					var params = {
						journal: param,
						emails: emails,
						userIds: userIds == null ? [] : userIds.map(function (item) {
							return item.userId;
						}),
						attType: checks.map(function (item) {
							return typeof item == "string" ? Number(item) : item;
						}),
						ccEmails: ccEmails,
						ccUserIds: ccUserIds == null ? [] : ccUserIds.map(function (item) {
							return item.userId;
						})
					};

					_this2.store.sendEmail(params).then(function (res) {
						if (res == true) {
							_antd.message.success("邮件发送成功");
						}
					});
				}
			});
		};

		_this2.init = function (detailData) {
			var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
			var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};

			var assignments = detailData.assignments == null ? [] : detailData.assignments;
			var journalMain = detailData.journalMain || {};
			var atts = detailData.atts == null ? [] : detailData.atts;
			var audio = detailData.audio == null ? [] : detailData.audio;

			_this2.setState({
				detailData: detailData,
				title: sub.title,
				time: sub.time == null || sub.time == 0 ? (0, _moment2.default)().format("YYYY-MM-DD") : (0, _moment2.default)(sub.time).format("YYYY-MM-DD"),
				people: sub.people,
				target: sub.target == null || sub.target == "" ? "" : sub.target,
				content: sub.content == null || sub.content == "" ? "" : sub.content,
				conclusion: sub.conclusion == null || sub.conclusion == "" ? "" : sub.conclusion,
				place: sub.place,
				hours: sub.hours,
				assignments: assignments,
				tags: journalMain.tags == null ? [] : journalMain.tags.map(function (item) {
					return item.name;
				}),
				attachments: atts == null ? [] : atts.map(function (vitem, vindex) {
					return Object.assign({}, {
						uid: vitem.id == null || vitem.id == "" ? "!" + (0, _uuid.v4)() : vitem.id,
						name: vitem.fileName,
						status: 'done',
						url: vitem.filePath,
						fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
						fileName: vitem.fileName,
						filePath: vitem.filePath,
						id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
					});
				}),
				emails: [], // 邮件
				userIds: [], // 用户
				audio: audio,
				audioStatus: "",
				checks: [],
				ccEmails: [],
				ccUserIds: []
			}, function () {
				// 表单
				_this2.props.form.setFieldsValue({
					target: sub.target == null || sub.target == "" ? "" : sub.target,
					content: sub.content == null || sub.content == "" ? "" : sub.content,
					conclusion: sub.conclusion == null || sub.conclusion == "" ? "" : sub.conclusion
				});
			});
		};

		_this2.updateAudioStaus = function (type, data) {
			_this2.setState(_defineProperty({}, type, data));
		};

		_this2.onRefAudio = function (ref) {
			_this2.audio = ref;
		};

		_this2.saveAttachment = function (type, params) {
			var arr = [];
			params.length && params.map(function (item) {
				arr.push({
					type: 'IMAGE',
					url: item.filePath
				});
			});
			var newArray = _braftUtils.ContentUtils.insertMedias(_this2.state[type], arr);
			_this2.setState(_defineProperty({}, type, newArray), function () {
				_this2.props.form.setFieldsValue(_defineProperty({}, type, newArray));
			});
		};

		_this2.onChangeAttc = function (checkedValues) {
			_this2.setState({
				checks: checkedValues
			});
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			assignments: [],
			tags: [],
			title: "",
			time: (0, _moment2.default)().format("YYYY-MM-DD"),
			attachments: [],
			people: "",
			target: "",
			content: "",
			conclusion: "",
			place: "",
			hours: "",
			isLoading: false,
			tip: "正在生成，请稍等...",
			loading: false,
			detailData: {},
			emails: [], // 邮件
			userIds: [], // 用户
			audio: [], // 录音
			audioStatus: "", // 录音状态
			checks: [],
			ccEmails: [],
			ccUserIds: []
		};
		return _this2;
	}

	_createClass(EditeMeeting, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			var detailData = nextProps.detailData;

			if (JSON.stringify(detailData) != JSON.stringify(this.props.detailData)) {

				var journalSub = _jsBase.Base64.decode(detailData.journalSub == undefined ? "" : detailData.journalSub) || {};
				var sub = typeof journalSub == "string" ? JSON.parse(journalSub) : {};

				var assignments = detailData.assignments == null ? [] : detailData.assignments;
				var journalMain = detailData.journalMain || {};
				var atts = detailData.atts == null ? [] : detailData.atts;
				var audio = detailData.audio == null ? [] : detailData.audio;

				this.setState({
					detailData: detailData,
					title: sub.title,
					time: sub.time == null || sub.time == 0 ? (0, _moment2.default)().format("YYYY-MM-DD") : (0, _moment2.default)(sub.time).format("YYYY-MM-DD"),
					people: sub.people,
					target: sub.target == null || sub.target == "" ? "" : sub.target,
					content: sub.content == null || sub.content == "" ? "" : sub.content,
					conclusion: sub.conclusion == null || sub.conclusion == "" ? "" : sub.conclusion,
					place: sub.place,
					hours: sub.hours,
					assignments: assignments,
					tags: journalMain.tags == null ? [] : journalMain.tags.map(function (item) {
						return item.name;
					}),
					attachments: atts == null ? [] : atts.map(function (vitem, vindex) {
						return Object.assign({}, {
							uid: vitem.id == null || vitem.id == "" ? "!" + (0, _uuid.v4)() : vitem.id,
							name: vitem.fileName,
							status: 'done',
							url: vitem.filePath,
							fileId: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id,
							fileName: vitem.fileName,
							filePath: vitem.filePath,
							id: vitem.id == null ? "!" + (0, _uuid.v4)() : vitem.id
						});
					}),
					emails: [], // 邮件
					userIds: [], // 用户
					audio: audio,
					checks: [],
					ccEmails: [],
					ccUserIds: []
				}, function () {
					// 表单
					_this3.props.form.setFieldsValue({
						target: sub.target == null || sub.target == "" ? "" : sub.target,
						content: sub.content == null || sub.content == "" ? "" : sub.content,
						conclusion: sub.conclusion == null || sub.conclusion == "" ? "" : sub.conclusion
					});
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;
			var _this$props = _this.props,
			    pathname = _this$props.pathname,
			    detailData = _this$props.detailData;
			// 初始化数据

			if (Object.keys(detailData).length > 0) {
				_this.init(detailData);
			}
			_this.props.onRef(this);
			if (pathname && pathname.includes("/digital/draft") && _this.store.draftId != "") {
				// 定时器
				_this.timer = setInterval(function () {
					// 心跳接口 30s跳动一个
					_this.saveAuto(0);
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

		// 删除字段


		// 人员选择更新


		// 附件


		// 自动保存


		// 手动保存草稿


		// 提交发布


		// 间隔3秒获取pdf地址


		// 生成word


		// 发送邮件

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    assignments = _state.assignments,
			    tags = _state.tags,
			    title = _state.title,
			    time = _state.time,
			    attachments = _state.attachments,
			    conclusion = _state.conclusion,
			    content = _state.content,
			    target = _state.target,
			    hours = _state.hours,
			    people = _state.people,
			    place = _state.place,
			    loading = _state.loading,
			    emails = _state.emails,
			    userIds = _state.userIds,
			    audio = _state.audio,
			    checks = _state.checks,
			    ccEmails = _state.ccEmails,
			    ccUserIds = _state.ccUserIds;
			var _store = this.store,
			    tagList = _store.tagList,
			    ossData = _store.ossData;

			var excludeControls = ['undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing', 'separator', 'text-color', 'underline', 'strike-through', 'bold', 'separator', 'remove-styles', 'separator', 'text-indent', 'text-align', 'separator', 'hr', 'separator', 'clear'];
			var disabledDate = function disabledDate(current) {
				return current > (0, _moment2.default)();
			};
			var getFieldDecorator = this.props.form.getFieldDecorator;

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
			var formItemLayoutWithOutLabel = {
				wrapperCol: {
					xs: { span: 24, offset: 0 },
					sm: { span: 20, offset: 3 }
				}
			};
			var detailData = this.props.detailData;

			var journalMain = detailData.journalMain || {};
			var imageControls = ['align-left', // 设置图片居左
			'align-center', // 设置图片居中
			'align-right', // 设置图片居右
			'size', 'remove'];
			var options = [{ label: 'Word文档作为附件', value: '0' }, { label: 'PDF文档作为附件', value: '1' }];
			return _react2.default.createElement(
				_antd.Form,
				formItemLayout,
				_react2.default.createElement(
					_antd.Form.Item,
					{ wrapperCol: {
							xs: { span: 24 },
							sm: { span: 24 }
						},
						colon: false,
						className: 'detail_form_bold' },
					_react2.default.createElement(
						'div',
						{ className: 'detail_form pr' },
						_react2.default.createElement(
							'p',
							{ className: 'form_title' },
							title == "" || title == null || time == "" || time == null ? null : (0, _moment2.default)(time).format("YYYYMMDD") + "-会议纪要-" + title
						),
						_react2.default.createElement(
							'p',
							{ className: 'form_name' },
							journalMain.userName,
							_react2.default.createElement(
								'span',
								{
									className: 'form_time' },
								(0, _utils.showText)((0, _moment2.default)(journalMain.createTime).format("YYYY-MM-DD HH:mm"), (0, _moment2.default)(journalMain.createTime).format("HH:mm"))
							)
						),
						_react2.default.createElement(_AudioRecorder2.default, {
							style: {
								position: 'absolute',
								top: 0,
								right: 0,
								width: '300px',
								height: '300px',
								zIndex: 3,
								textAlign: 'right'
							},
							ossData: mobx.toJS(ossData),
							audio: audio,
							updateState: this.updateState,
							updateAudioStaus: this.updateAudioStaus,
							onRef: this.onRefAudio,
							appendAliyundata: this.props.appendAliyundata,
							reSetAliyundata: this.props.reSetAliyundata
						})
					)
				),
				_react2.default.createElement(
					_antd.Form.Item,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(_EditableTagGroup2.default, {
						tagList: mobx.toJS(tagList),
						tags: tags,
						updateState: this.updateState
					})
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u4F1A\u8BAE\u4E3B\u9898', className: 'edit_form_bold' },
					getFieldDecorator('title', {
						initialValue: title || '',
						rules: [{
							required: true,
							message: '该项是必填'
						}]
					})(_react2.default.createElement(_antd.Input, {
						maxLength: 15,
						placeholder: '\u8BF7\u8F93\u5165\uFF08\u4E0D\u8D85\u8FC715\u5B57\uFF09',
						onChange: this.handleChange.bind(this, 'title') }))
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u4F1A\u8BAE\u65E5\u671F', className: 'edit_form_bold' },
					getFieldDecorator('time', {
						initialValue: (0, _moment2.default)(time) || '',
						rules: [{
							required: true,
							message: '该项是必填'
						}]
					})(_react2.default.createElement(_antd.DatePicker, {
						disabledDate: disabledDate,
						format: 'YYYY-MM-DD',
						onChange: this.onDateChange }))
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u4F1A\u8BAE\u65F6\u957F', className: 'edit_form_bold' },
					getFieldDecorator('hours', {
						initialValue: hours || '',
						rules: [{
							required: true,
							message: '该项是必填'
						}]
					})(_react2.default.createElement(_antd.InputNumber, {
						onChange: this.handleNumChange.bind(this, 'hours'),
						placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57',
						style: { width: '177px' } })),
					_react2.default.createElement(
						'span',
						{ className: 'ml5' },
						'\u5C0F\u65F6'
					)
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u4F1A\u8BAE\u5730\u70B9', className: 'edit_form_bold' },
					getFieldDecorator('place', {
						initialValue: place || '',
						rules: [{
							required: true,
							message: '该项是必填'
						}]
					})(_react2.default.createElement(TextArea, { onChange: this.handleChange.bind(this, 'place'), autoSize: { minRows: 1 },
						placeholder: '\u8BF7\u8F93\u5165' }))
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u53C2\u4F1A\u4EBA\u5458', className: 'edit_form_bold' },
					getFieldDecorator('people', {
						initialValue: people || '',
						rules: [{
							required: true,
							message: '该项是必填'
						}]
					})(_react2.default.createElement(TextArea, { onChange: this.handleChange.bind(this, 'people'), autoSize: { minRows: 1 },
						placeholder: '\u8BF7\u8F93\u5165' }))
				),
				_react2.default.createElement(_antd.Form.Item, { label: _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							'span',
							{ style: {
									fontWeight: "700",
									marginRight: "4px",
									color: "#f5222d",
									fontSize: "14px",
									fontFamily: "SimSun, sans-serif"
								} },
							'*'
						),
						'\u4F1A\u8BAE\u76EE\u6807'
					), colon: false, className: 'edit_form_bold', style: { marginBottom: '3px' } }),
				_react2.default.createElement(_ReactKindeditor2.default, {
					value: target,
					onChange: this.handleBChange.bind(this, 'target'),
					id: 'target'
				}),
				_react2.default.createElement(_antd.Form.Item, { label: _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							'span',
							{ style: {
									fontWeight: "700",
									marginRight: "4px",
									color: "#f5222d",
									fontSize: "14px",
									fontFamily: "SimSun, sans-serif"
								} },
							'*'
						),
						'\u4F1A\u8BAE\u7EAA\u8981'
					), colon: false, className: 'edit_form_bold', style: { marginBottom: '3px' } }),
				_react2.default.createElement(_ReactKindeditor2.default, {
					value: content,
					onChange: this.handleBChange.bind(this, 'content'),
					id: 'content'
				}),
				_react2.default.createElement(_antd.Form.Item, { label: _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							'span',
							{ style: {
									fontWeight: "700",
									marginRight: "4px",
									color: "#f5222d",
									fontSize: "14px",
									fontFamily: "SimSun, sans-serif"
								} },
							'*'
						),
						'\u4F1A\u8BAE\u7ED3\u8BBA'
					), colon: false, className: 'edit_form_bold', style: { marginBottom: '3px' } }),
				_react2.default.createElement(_ReactKindeditor2.default, {
					value: conclusion,
					onChange: this.handleBChange.bind(this, 'conclusion'),
					id: 'conclusion'
				}),
				_react2.default.createElement(_antd.Form.Item, { label: '\u4E0B\u4E00\u6B65\u884C\u52A8', colon: false, className: 'edit_form_bold' }),
				_react2.default.createElement(
					_antd.Row,
					{ className: 'mb10' },
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, className: 'tc' },
						_react2.default.createElement(
							'div',
							null,
							'\u4EFB\u52A1\u540D'
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, className: 'tc' },
						_react2.default.createElement(
							'div',
							null,
							'\u8D1F\u8D23\u4EBA'
						)
					)
				),
				assignments !== undefined && assignments.map(function (vitem, vindex) {
					return _react2.default.createElement(
						_antd.Row,
						{ key: 'subname+' + vindex,
							style: { paddingTop: '10px', borderBottom: "1px dashed #E6E6E6" } },
						_react2.default.createElement(
							_antd.Col,
							{ span: 12, className: 'pr' },
							_react2.default.createElement(
								_antd.Form.Item,
								{
									label: " ",
									colon: false,
									labelCol: {
										xs: { span: 24 },
										sm: { span: 6 }
									},
									wrapperCol: {
										xs: { span: 24 },
										sm: { span: 16 }
									}
								},
								_react2.default.createElement(_antd.Input, { value: vitem.name == null ? "" : vitem.name,
									placeholder: '\u8BF7\u8F93\u5165',
									onChange: _this4.onChange.bind(_this4, vindex) }),
								_react2.default.createElement(
									_antd.Popconfirm,
									{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
											return _this4.remove(vindex);
										} },
									_react2.default.createElement(_antd.Button, {
										shape: 'circle',
										className: 'dynamic-delete-button',
										size: 'small',
										icon: 'minus',
										type: 'default' })
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Form.Item,
								{
									label: " ",
									colon: false,
									labelCol: {
										xs: { span: 24 },
										sm: { span: 6 }
									},
									wrapperCol: {
										xs: { span: 24 },
										sm: { span: 16 }
									}
								},
								_react2.default.createElement(_PersonAddIcon2.default, {
									data: vitem.userInformations == null ? [] : vitem.userInformations,
									updatePerson: _this4.updatePerson.bind(_this4, vindex)
								})
							)
						)
					);
				}),
				_react2.default.createElement(
					_antd.Form.Item,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
						style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
						type: 'plus-circle' })
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u9644\u4EF6', className: 'edit_form_bold' },
					_react2.default.createElement(_MyUploadNew2.default, {
						saveAttachment: this.handleAttment.bind(this, 'attachments'),
						disabled: false,
						multiple: true,
						listType: 'picture-card',
						ossData: mobx.toJS(ossData),
						fileList: attachments == null ? [] : attachments,
						journalType: 'journal'
					})
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u5185\u5BB9\u751F\u6210', className: 'edit_form_bold' },
					_react2.default.createElement(
						_antd.Spin,
						{ tip: this.state.tip, spinning: this.state.isLoading, delay: 100 },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'link', onClick: this.creatWord.bind(this, "1") },
							'\u70B9\u51FB\u751F\u6210\u5E76\u5B58\u50A8\u4E3AWord\u6587\u6863'
						),
						_react2.default.createElement(
							_antd.Button,
							{ className: 'ml20', type: 'link', onClick: this.creatWord.bind(this, "2") },
							'\u70B9\u51FB\u751F\u6210\u5E76\u5B58\u50A8\u4E3APDF\u6587\u6863'
						)
					)
				),
				_react2.default.createElement(
					_antd.Form.Item,
					{ label: '\u5185\u5BB9\u53D1\u9001', className: 'edit_form_bold clearfix' },
					_react2.default.createElement(
						_antd.Button,
						{
							style: { position: 'relative', top: '4px' },
							className: 'fl', type: 'link', onClick: this.sendReport },
						'\u70B9\u51FB\u53D1\u9001\u90AE\u4EF6'
					),
					_react2.default.createElement(
						'div',
						{ className: 'fl', style: { width: '275px' } },
						_react2.default.createElement(_antd.Checkbox.Group, {
							className: 'attc_checks',
							value: checks,
							options: options,
							onChange: this.onChangeAttc
						})
					)
				),
				_react2.default.createElement(
					_antd.Form.Item,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(
						'div',
						{ className: 'fl mr25 ml15' },
						_react2.default.createElement(
							'span',
							null,
							'\u6536\u4EF6\u4EBA\uFF1A'
						),
						_react2.default.createElement(_EditableTagEmail2.default, {
							title: '\u6DFB\u52A0\u6536\u4EF6\u4EBA\u5730\u5740',
							data: emails,
							updateState: this.updateState.bind(this, 'emails')
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'fl', style: { minWidth: '80px' } },
						_react2.default.createElement(_PersonAdd2.default, {
							data: userIds,
							updatePerson: this.updateState.bind(this, 'userIds'),
							disabled: false,
							title: '\u6DFB\u52A0\u6536\u4EF6\u4EBA'
						})
					)
				),
				_react2.default.createElement(
					_antd.Form.Item,
					formItemLayoutWithOutLabel,
					_react2.default.createElement(
						'div',
						{ className: 'fl mr25 ml15' },
						_react2.default.createElement(
							'span',
							null,
							'\u6284\u9001\u4EBA\uFF1A'
						),
						_react2.default.createElement(_EditableTagEmail2.default, {
							title: '\u6DFB\u52A0\u6284\u9001\u4EBA\u5730\u5740',
							data: ccEmails,
							updateState: this.updateState.bind(this, 'ccEmails')
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'fl', style: { minWidth: '80px' } },
						_react2.default.createElement(_PersonAdd2.default, {
							data: ccUserIds,
							updatePerson: this.updateState.bind(this, 'ccUserIds'),
							disabled: false,
							title: '\u6DFB\u52A0\u6284\u9001\u4EBA'
						})
					)
				),
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
					_react2.default.createElement(
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
								return _this4.onClose();
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

	return EditeMeeting;
}(_react2.default.Component)) || _class) || _class);


var editForm = _antd.Form.create({})(EditeMeeting);
exports.default = editForm;

/***/ }),

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 共享编辑
                  * dangw@glodon.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _reactCustomScrollbars = __webpack_require__(336);

var _lodash = __webpack_require__(231);

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#F08080', '#EEE685', '#9400D3', '#D1EEEE', '#90EE90']; // 十个颜色

var PersonEdit = (_dec = (0, _mobxReact.inject)('UserStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(PersonEdit, _React$Component);

	function PersonEdit(props) {
		_classCallCheck(this, PersonEdit);

		var _this = _possibleConstructorReturn(this, (PersonEdit.__proto__ || Object.getPrototypeOf(PersonEdit)).call(this, props));

		_this.init = function () {
			var defaultDatas = JSON.parse(JSON.stringify(_this.state.defaultData));
			//  将已选定的用户做标记
			var arr = defaultDatas.map(function (item) {
				var obj = {};
				if ([].concat(_toConsumableArray(_this.state.oldSelect)).some(function (v) {
					return v === item.id;
				})) {
					obj = Object.assign(item, { selected: true });
				} else {
					obj = Object.assign(item, { selected: false });
				}
				return obj;
			});
			_this.setState({
				data: Object.assign([], arr)
			});
		};

		_this.handleOk = function () {
			var dataArray = JSON.parse(JSON.stringify(_this.state.data));
			var users = dataArray.filter(function (res) {
				return res.selected == true;
			}).map(function (item, index) {
				return item.id;
			});

			// 保存
			_this.store.saveSharedEditing(users).then(function (res) {
				if (res) {
					_antd.message.success("保存成功");
					_this.handleCancel();
				}
			});
		};

		_this.handleCancel = function () {
			_this.setState({
				visible: false,
				text: "",
				data: Object.assign([], _this.state.defaultData),
				oldSelect: _this.props.data
			});
			_this.props.onClose();
		};

		_this.handClick = function (param) {
			var dataArray = JSON.parse(JSON.stringify(_this.state.data));
			var dindex = dataArray.findIndex(function (item) {
				return item.id == param.id;
			});
			dataArray.splice(dindex, 1, Object.assign(param, { selected: true }));
			_this.setState({
				data: Object.assign([], dataArray)
			});
		};

		_this.handClickDel = function (param) {
			var dataArray = JSON.parse(JSON.stringify(_this.state.data));
			var dindex = dataArray.findIndex(function (item) {
				return item.id == param.id;
			});
			dataArray.splice(dindex, 1, Object.assign(param, { selected: false }));
			_this.setState({
				data: Object.assign([], dataArray)
			});
		};

		_this.onChange = function (e) {
			_this.setState({
				text: _.trim(e.target.value)
			});
			_this.handleClickDebounce();
		};

		_this.store = _this.props.store;
		_this.state = {
			text: '',
			visible: false,
			oldSelect: _this.props.data, // 已选择的人员,
			defaultData: [], // 默认数据
			data: [], // 已选择标记的数据
			filterData: [] // 筛选数据
		};
		_this.getData = _this.getData.bind(_this);
		_this.handleClickDebounce = _.debounce(_this.getData, 500, { 'maxWait': 1000 });
		return _this;
	}

	_createClass(PersonEdit, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {
			var _this2 = this;

			this.setState({
				oldSelect: nextProps.data
			}, function () {
				_this2.init();
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			var params = "";
			// 未选的全部用户
			this.props.UserStore.getRole(params).then(function (res) {
				_this3.setState({
					defaultData: res.body.map(function (item) {
						return Object.assign(item, { selected: false });
					})
				}, function () {
					_this3.init();
				});
			});
		}

		// 初始化

	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.handleClickDebounce.cancel();
		}

		// 提交


		// 取消


		// 点击列表选中


		// 点击列表删除


		// 模糊搜索

	}, {
		key: 'getData',
		value: function getData() {
			var _state = this.state,
			    text = _state.text,
			    data = _state.data;

			var dataArray = JSON.parse(JSON.stringify(data));
			var filterData = dataArray.filter(function (item) {
				return item.realname.indexOf(text) > -1 || item.phone.indexOf(text) > -1;
			});
			this.setState({
				filterData: filterData
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state2 = this.state,
			    data = _state2.data,
			    oldSelect = _state2.oldSelect,
			    filterData = _state2.filterData,
			    text = _state2.text,
			    defaultData = _state2.defaultData;
			var _props = this.props,
			    disabled = _props.disabled,
			    title = _props.title,
			    visible = _props.visible;

			var isFilter = text == "" || text == null;
			var activeData = isFilter ? data : filterData; // 当前数据
			return _react2.default.createElement(
				_antd.Modal,
				{
					zIndex: '1099',
					maskClosable: false,
					closable: false,
					okText: '提交',
					title: title || "添加负责人",
					visible: visible,
					onOk: this.handleOk,
					onCancel: this.handleCancel
				},
				_react2.default.createElement(
					_antd.Row,
					{ type: 'flex', justify: 'space-between', className: '' },
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, className: 'pr20' },
						_react2.default.createElement(_antd.Input, {
							value: text,
							placeholder: '\u8F93\u5165\u59D3\u540D/\u624B\u673A\u53F7',
							suffix: _react2.default.createElement(_antd.Icon, { type: 'search' }),
							onChange: this.onChange
						}),
						_react2.default.createElement(
							_reactCustomScrollbars.Scrollbars,
							{
								autoHide: true,
								autoHideTimeout: 1000,
								autoHideDuration: 200,
								autoHeight: true,
								autoHeightMin: 0,
								autoHeightMax: 350,
								thumbMinSize: 30,
								universal: true
							},
							_react2.default.createElement(
								'ul',
								{ className: 'userlist_ul' },
								activeData.length > 0 && activeData.map(function (item, index) {
									return _react2.default.createElement(
										'li',
										{
											key: index,
											className: 'pr',
											onClick: _this4.handClick.bind(_this4, item) },
										_react2.default.createElement(
											'div',
											{ className: 'ul_name' },
											item.realname
										),
										_react2.default.createElement(
											'div',
											{ className: 'ul_station' },
											item.station
										),
										_react2.default.createElement(
											'div',
											{ className: 'ul_email' },
											item.email
										),
										_react2.default.createElement(_antd.Icon, {
											style: {
												position: 'absolute',
												top: '10px',
												right: '15px',
												fontSize: '16px',
												color: 'rgba(75,164,190,1)'
											},
											className: item.selected ? "active" : "hidden", type: 'check' })
									);
								})
							)
						),
						activeData.length == 0 ? _react2.default.createElement(_antd.Empty, {
							image: 'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original',
							imageStyle: {
								height: 60,
								marginTop: "30px"
							},
							description: "暂无匹配"
						}) : null
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, className: 'tl', style: {
								minHeight: '350px',
								borderLeft: '1px solid #e6e6e6'
							} },
						_react2.default.createElement(
							'p',
							{ className: 'pl20' },
							'\u5DF2\u9009\u6210\u5458(',
							data && data.filter(function (res) {
								return res.selected == true;
							}).length,
							')'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'userlist_ul_del' },
							data.filter(function (res) {
								return res.selected == true;
							}).length > 0 && data.filter(function (res) {
								return res.selected == true;
							}).map(function (item, index) {
								return _react2.default.createElement(
									'li',
									{
										key: index,
										className: 'pr',
										onClick: _this4.handClickDel.bind(_this4, item) },
									_react2.default.createElement(
										_antd.Avatar,
										{
											style: {
												display: 'inlineBlock',
												backgroundColor: colorList[index % 10],
												verticalAlign: 'middle'
											}, size: 'small' },
										item.realname.slice(0, 1)
									),
									' ',
									_react2.default.createElement(
										'span',
										{ className: 'ul_name' },
										item.realname
									),
									_react2.default.createElement(_antd.Icon, {
										style: {
											position: 'absolute',
											top: '13px',
											right: '15px',
											fontSize: '16px',
											color: 'rgba(184,80,74,1)',
											cursor: 'pointer'
										},
										className: 'userlist_ul_icon',
										type: 'close' })
								);
							})
						)
					)
				)
			);
		}
	}]);

	return PersonEdit;
}(_react2.default.Component)) || _class) || _class);
exports.default = PersonEdit;

/***/ })

});
//# sourceMappingURL=11-afa7d4b4bae6ff2924e9.1629092961041.js.map