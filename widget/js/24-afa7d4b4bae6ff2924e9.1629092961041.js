webpackJsonp([24],{

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 我的日程
            * dangwei@bacspace.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _lodash = __webpack_require__(231);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactCustomScrollbars = __webpack_require__(336);

var _antd = __webpack_require__(17);

var _ProjectCalendar = __webpack_require__(1953);

var _ProjectCalendar2 = _interopRequireDefault(_ProjectCalendar);

var _DingtalkTree = __webpack_require__(1780);

var _DingtalkTree2 = _interopRequireDefault(_DingtalkTree);

var _DingtalkRight = __webpack_require__(1949);

var _DingtalkRight2 = _interopRequireDefault(_DingtalkRight);

var _HeaderSearch = __webpack_require__(1779);

var _HeaderSearch2 = _interopRequireDefault(_HeaderSearch);

var _BpmStore = __webpack_require__(1577);

var _BpmStore2 = _interopRequireDefault(_BpmStore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
			'\u6682\u65E0\u6570\u636E'
		)
	);
};
var chinese = { 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六", 0: "日" };

var MyCalendar = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(MyCalendar, _React$Component);

	function MyCalendar(props) {
		_classCallCheck(this, MyCalendar);

		var _this = _possibleConstructorReturn(this, (MyCalendar.__proto__ || Object.getPrototypeOf(MyCalendar)).call(this, props));

		_this.onChange = function (type, e) {
			var _this$setState;

			var _e$target = e.target,
			    val = _e$target.val,
			    checked = _e$target.checked;

			var projectChecked = JSON.parse(JSON.stringify(_this.state[type + 'Checked']));
			if (checked) {
				// 选中
				projectChecked.push(val.id);
			} else {
				var index = projectChecked.findIndex(function (item) {
					return item == val.id;
				});
				projectChecked.splice(index, 1);
			}
			_this.setState((_this$setState = {}, _defineProperty(_this$setState, type + 'Checked', projectChecked), _defineProperty(_this$setState, type + 'Indeterminate', !!projectChecked.length && projectChecked.length < mobx.toJS(_this.store[type + "List"]).length), _defineProperty(_this$setState, type + 'CheckAll', projectChecked.length === mobx.toJS(_this.store[type + "List"]).length), _this$setState), function () {
				// 联动项目
				if (type == "project") {
					_this.store.getProjectStagesByIds(projectChecked);
				}
				// 联动人员
				if (type == "person") {
					if (projectChecked.length > 0) {
						_this.showDrawer();
						_this.store.getPersonMonthTaskState(projectChecked[0]);
					} else {
						_this.onClose();
					}
				}
			});
		};

		_this.onCheckAllChange = function (type, e) {
			var _this$setState2;

			_this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, type + 'Indeterminate', false), _defineProperty(_this$setState2, type + 'CheckAll', e.target.checked), _defineProperty(_this$setState2, type + 'Checked', e.target.checked ? mobx.toJS(_this.store[type + "List"]).map(function (item) {
				return item.id;
			}) : []), _this$setState2), function () {
				// 联动项目
				if (type == "project") {
					_this.store.getProjectStagesByIds(_this.state[type + "Checked"]);
				}
				// 联动人员
				if (type == "person") {
					if (e.target.checked) {
						_this.store.getPersonMonthTaskState(_this.state[type + "Checked"][0]);
						_this.showDrawer();
					} else {
						_this.onClose();
					}
				}
			});
		};

		_this.showDrawer = function () {
			_this.setState({
				visible: true
			});
		};

		_this.onClose = function () {
			_this.setState({
				visible: false
			});
		};

		_this.onSearch = function (type, value) {
			_this.setState(_defineProperty({}, type + 'Value', _lodash2.default.trim(value)), function () {
				var dataArray = JSON.parse(JSON.stringify(mobx.toJS(_this.store[type + 'List'])));
				var filterData = dataArray.filter(function (item) {
					return (item[type == "project" ? "name" : "realname"] == null ? "" : item[type == "project" ? "name" : "realname"]).indexOf(_this.state[type + 'Value']) > -1;
				});
				_this.setState(_defineProperty({}, type + 'FilterData', filterData));
			});
		};

		_this.getCurrentBell = function (endTime, now) {
			var currentBell = null;
			var bell_yellow = { fontSize: "14px", color: "#e7b550", marginRight: "10px" };
			var bell_red = { fontSize: "14px", color: "#c4382c", marginRight: "10px" };
			var bell_blue = { fontSize: "14px", color: "#4da9de", marginRight: "10px" };
			var days = (0, _moment2.default)(now).diff((0, _moment2.default)(endTime), 'days');
			if (days > 3) {
				currentBell = bell_red;
			} else if (days >= 2 && days <= 3) {
				currentBell = bell_yellow;
			} else {
				currentBell = bell_blue;
			}
			return currentBell;
		};

		_this.callback = function (key) {
			_this.setState({
				tabKey: key
			});
			var personList = _this.store.personList;
			var personChecked = _this.state.personChecked;

			var personSelect = mobx.toJS(personList).filter(function (item) {
				// 人员选中
				return personChecked.includes(item.id);
			});
			var obj = personSelect[key];
			_this.store.getPersonMonthTaskState(obj.id);
		};

		_this.checkDate = function (date) {
			var current = date + 1;
			_this.setState({
				currentDay: current
			});
		};

		_this.handleChange = function (date, dateString) {
			var year = (0, _moment2.default)(date).year();
			var month = (0, _moment2.default)(date).month() + 1;
			_this.setState({
				date: date,
				days: utils.fanDayByYearMonth(year, month), //当前月的天数
				currentDay: (0, _moment2.default)(date).date() //当天日期
			}, function () {
				_this.store.yearMonth = (0, _moment2.default)(date).format("YYYYMM");
				var _this$state = _this.state,
				    projectChecked = _this$state.projectChecked,
				    personChecked = _this$state.personChecked;
				// 联动项目

				if (projectChecked.length > 0) {
					_this.store.getProjectStagesByIds(projectChecked);
				}
				// 联动人员
				if (personChecked.length > 0) {
					_this.callback("0");
				}
			});
		};

		_this.callback2 = function (key) {
			_this.setState({
				tabKey2: key
			});
		};

		_this.onRef = function (ref) {
			_this.child = ref;
		};

		_this.handleSearch = function (value) {
			_this.child.onChange(value);
		};

		_this.handPersonChange = function (value) {
			_this.setState({
				personChecked: value
			}, function () {
				if (value.length > 0) {
					_this.showDrawer();
					var personList = _this.store.personList;

					var personSelect = mobx.toJS(personList).filter(function (item) {
						// 人员选中
						return value.includes(item.id);
					});
					_this.store.getPersonMonthTaskState(personSelect[0].id);
				} else {
					_this.onClose();
				}
			});
		};

		_this.store = new _BpmStore2.default();
		_this.state = {
			projectIndeterminate: false, // 项目全选
			projectCheckAll: false, // 项目全选
			projectChecked: [], // 项目选中
			personIndeterminate: false, // 人员全选
			personCheckAll: false, // 人员全选
			personChecked: [], // 人员选中
			projectValue: '', //  // 项目筛选
			projectFilterData: [],
			personValue: '', // 人员筛选
			personFilterData: [],
			visible: false,
			days: 0, // 当前月的天数
			currentDay: (0, _moment2.default)().date(), // 当天日期
			date: (0, _moment2.default)(), // 当前的时间年月日
			tabKey: "0",
			tabKey2: "uuu" // 内容切换
		};
		return _this;
	}

	_createClass(MyCalendar, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.store.getUserInfoListByRoleCode();
			this.store.getCalendarProjectList();

			// 初始化数据  date、days、currentDay
			var date = (0, _moment2.default)();
			var year = (0, _moment2.default)(date).year();
			var month = (0, _moment2.default)(date).month() + 1;
			this.setState({
				date: date,
				days: utils.fanDayByYearMonth(year, month), //当前月的天数
				currentDay: (0, _moment2.default)(date).date() //当天日期
			});
			this.store.yearMonth = (0, _moment2.default)(date).format("YYYYMM");
		}

		// 切换tab


		// 切换日期


		// 选择时间


		// tab切换


		// 人员模糊搜索

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _store = this.store,
			    yearMonth = _store.yearMonth,
			    projectStages = _store.projectStages,
			    projectList = _store.projectList,
			    personList = _store.personList,
			    personMonthTask = _store.personMonthTask;
			var _state = this.state,
			    tabKey2 = _state.tabKey2,
			    tabKey = _state.tabKey,
			    date = _state.date,
			    currentDay = _state.currentDay,
			    days = _state.days,
			    projectCheckAll = _state.projectCheckAll,
			    projectIndeterminate = _state.projectIndeterminate,
			    projectChecked = _state.projectChecked,
			    personChecked = _state.personChecked,
			    projectValue = _state.projectValue,
			    projectFilterData = _state.projectFilterData;


			var isFilter = projectValue == "" || projectValue == null;
			var activeData = isFilter ? mobx.toJS(projectList) : projectFilterData; // 当前数据
			var personSelect = mobx.toJS(personList).filter(function (item) {
				// 人员选中
				return personChecked.includes(item.id);
			});
			var columns = [{
				title: '序号',
				dataIndex: 'dataIndex',
				align: 'center',
				key: 'dataIndex'
			}, {
				title: '项目',
				dataIndex: 'projectName',
				align: 'center',
				key: 'projectName'
			}, {
				title: '任务',
				dataIndex: 'name',
				align: 'center',
				key: 'name'
			}, {
				title: '进度',
				dataIndex: 'rate',
				align: 'center',
				key: 'rate',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						{ style: _this2.getCurrentBell(record.endTime, record.now) },
						text,
						'%'
					);
				}
			}];
			var dataSource = mobx.toJS(personMonthTask).filter(function (mitem) {
				var day = currentDay <= 9 ? '0' + currentDay : currentDay;
				return yearMonth + day >= (0, _moment2.default)(mitem.beginTime).format("YYYYMMDD") && yearMonth + day <= (0, _moment2.default)(mitem.endTime).format("YYYYMMDD");
			}).map(function (item, index) {
				return Object.assign(item, { dataIndex: index + 1 });
			});
			return _react2.default.createElement(
				'div',
				{ className: 'w pr' },
				_react2.default.createElement(
					'div',
					{ className: 'con_bottom' },
					_react2.default.createElement(
						_antd.Breadcrumb,
						{ separator: '>', style: { margin: '0' } },
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							{ href: "#/bpm/progresslist" },
							'\u9879\u76EE\u770B\u677F'
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							tabKey2 == 'uuu' ? "资源统计" : "日程排期"
						)
					)
				),
				_react2.default.createElement(
					_antd.Tabs,
					{ className: "item_tabs", activeKey: tabKey2, onChange: this.callback2 },
					_react2.default.createElement(
						TabPane,
						{ tab: '\u8D44\u6E90\u7EDF\u8BA1', key: 'uuu' },
						_react2.default.createElement(
							_antd.Row,
							{ style: {
									borderTop: '1px solid #EBEBEB',
									paddingTop: '10px'
								} },
							_react2.default.createElement(
								_antd.Col,
								{ span: '6' },
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
											showLine: false
										})
									)
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: '18',
									style: { borderLeft: '1px solid #EBEBEB', minHeight: '350px', paddingLeft: '15px' } },
								_react2.default.createElement(_DingtalkRight2.default, {
									store: this.store
								})
							)
						)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u65E5\u7A0B\u6392\u671F', key: 'yyy' },
						_react2.default.createElement(
							'div',
							{ className: 'w clearfix', style: {
									borderTop: '1px solid #EBEBEB',
									paddingTop: '10px'
								} },
							_react2.default.createElement(
								'div',
								{ className: 'fl', style: { width: '250px', display: 'block' } },
								_react2.default.createElement(
									'div',
									{
										style: {
											height: 'calc(50vh - 140px)',
											padding: '0 15px'
										} },
									_react2.default.createElement(
										_antd.Checkbox,
										{
											indeterminate: projectIndeterminate,
											onChange: this.onCheckAllChange.bind(this, 'project'),
											checked: projectCheckAll,
											className: ''
										},
										'\u9879\u76EE\u5217\u8868'
									),
									_react2.default.createElement(_HeaderSearch2.default, {
										className: 'action search calendar_search',
										placeholder: "",
										defaultValue: '',
										dataSource: [],
										onSearch: function onSearch(value) {
											_this2.onSearch('project', value);
										},
										onPressEnter: function onPressEnter(value) {}
									}),
									_react2.default.createElement(
										'div',
										{ style: {
												height: 'calc(50vh - 180px)',
												borderTop: '1px dashed #EBEBEB',
												borderBottom: '1px dashed #EBEBEB'
											} },
										_react2.default.createElement(
											_reactCustomScrollbars.Scrollbars,
											{
												autoHide: true,
												autoHideTimeout: 1000,
												autoHideDuration: 200,
												autoHeight: true,
												autoHeightMin: 0,
												autoHeightMax: 'calc(50vh - 180px)',
												thumbMinSize: 30,
												universal: true },
											activeData.map(function (item, index) {
												return _react2.default.createElement(
													_antd.Checkbox,
													{ key: 'calendar' + index,
														val: item,
														checked: projectChecked.includes(item.id),
														value: item.name,
														className: 'mycalendar_check',
														onChange: _this2.onChange.bind(_this2, 'project') },
													_react2.default.createElement(
														'span',
														{ className: 'mycalendar_span', title: item.name },
														item.name
													)
												);
											})
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ style: {
											height: 'calc(50vh - 140px)',
											padding: '0 15px'
										} },
									_react2.default.createElement(
										'span',
										{ style: { marginRight: '8px' } },
										'\u4EBA\u5458\u5217\u8868'
									),
									_react2.default.createElement(_HeaderSearch2.default, {
										className: 'action search calendar_search',
										placeholder: "",
										defaultValue: '',
										dataSource: [],
										onSearch: function onSearch(value) {
											_this2.handleSearch(value);
										},
										onPressEnter: function onPressEnter(value) {}
									}),
									_react2.default.createElement(
										'div',
										{ style: {
												height: 'calc(50vh - 155px)',
												borderTop: '1px dashed #EBEBEB',
												borderBottom: '1px dashed #EBEBEB'
											} },
										_react2.default.createElement(
											_reactCustomScrollbars.Scrollbars,
											{
												autoHide: true,
												autoHideTimeout: 1000,
												autoHideDuration: 200,
												autoHeight: true,
												autoHeightMin: 0,
												autoHeightMax: 'calc(50vh - 155px)',
												thumbMinSize: 30,
												universal: true },
											_react2.default.createElement(_DingtalkTree2.default, {
												userSearch: false,
												onRef: this.onRef,
												store: this.store,
												showLine: false,
												handPersonChange: this.handPersonChange
											})
										)
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'fl',
									style: {
										display: 'block',
										borderLeft: '1px solid #EBEBEB',
										minHeight: '150px',
										padding: '15px 15px 15px 30px',
										width: 'calc(100% - 250px)',
										overflow: 'auto'
									} },
								_react2.default.createElement(
									'div',
									{
										style: {
											position: 'relative',
											top: '-15px'
										},
										className: 'tc' },
									_react2.default.createElement(
										'span',
										{
											style: {
												fontWeight: 'bold',
												fontSize: '16px',
												color: '#333'
											} },
										(0, _moment2.default)(date).format('YYYY年MM月DD日'),
										' ',
										"星期" + chinese[(0, _moment2.default)(date).day()],
										' '
									),
									_react2.default.createElement(
										'span',
										{ className: 'pr', style: { top: '7px' } },
										_react2.default.createElement(_antd.DatePicker, {
											className: 'calendar_DatePicker',
											style: {
												position: 'relative',
												top: '3px',
												width: '50px',
												height: '10px'
											},
											onChange: this.handleChange }),
										_react2.default.createElement(_antd.Icon, {
											style: {
												cursor: 'pointer',
												position: 'absolute',
												left: '1px',
												top: '-8px',
												width: '60px',
												height: '60px',
												fontSize: '24px',
												backgroundColor: '#FFF'
											},
											type: 'calendar' })
									)
								),
								_react2.default.createElement(_ProjectCalendar2.default, {
									days: days,
									currentDay: currentDay,
									projectStages: mobx.toJS(projectStages),
									yearMonth: yearMonth
								})
							)
						),
						_react2.default.createElement(
							'div',
							{
								className: !this.state.visible ? "hidden" : "active_drawer",
								style: {
									zIndex: '998',
									height: "100vh",
									width: '30%',
									overflow: 'hidden',
									position: 'fixed',
									top: '0',
									right: '0',
									border: '1px solid #ebedf0',
									borderRadius: 0,
									background: '#fafafa'
								}
							},
							_react2.default.createElement(
								_antd.Drawer,
								{
									placement: 'right',
									closable: false,
									onClose: this.onClose,
									visible: this.state.visible,
									width: "100%",
									getContainer: false,
									style: { position: 'absolute' },
									bodyStyle: {
										padding: '0 0 0 20px'
									}
								},
								_react2.default.createElement(
									_antd.Tabs,
									{
										activeKey: tabKey,
										onTabClick: this.callback,
										tabPosition: 'top',
										style: { marginLeft: '10px', marginRight: '20px', minHeight: "300px", height: "auto" } },
									personSelect.map(function (item, index) {
										return _react2.default.createElement(
											TabPane,
											{ tab: '' + item.realname, key: index, val: item },
											_react2.default.createElement(
												_antd.ConfigProvider,
												{ renderEmpty: customizeRenderEmpty },
												_react2.default.createElement(_antd.Table, { columns: columns,
													pagination: false,
													size: 'middle',
													bordered: false,
													dataSource: dataSource
												})
											)
										);
									})
								),
								_react2.default.createElement(
									'ul',
									{ style: { position: 'absolute', top: '50px', left: '10px' } },
									[].concat(_toConsumableArray(Array(days).keys())).map(function (i) {
										return _react2.default.createElement(
											'li',
											{ key: i,
												className: currentDay == i + 1 ? "pointer personMonthTask_li_active" : "pointer personMonthTask_li",
												onClick: _this2.checkDate.bind(_this2, i) },
											i + 1
										);
									})
								),
								_react2.default.createElement(_antd.Icon, {
									onClick: this.onClose,
									title: "收起",
									className: 'pointer',
									style: { position: 'absolute', bottom: '10px', left: '30px' },
									type: 'double-right' })
							)
						),
						personSelect.length > 0 && !this.state.visible ? _react2.default.createElement(
							_antd.Affix,
							{ offsetBottom: '20px', style: { position: 'fixed', right: '25px', bottom: '10px' } },
							_react2.default.createElement(_antd.Icon, {
								onClick: this.showDrawer,
								title: "展开",
								className: 'pointer',
								type: 'double-left' })
						) : null
					)
				)
			);
		}
	}]);

	return MyCalendar;
}(_react2.default.Component)) || _class;

exports.default = MyCalendar;

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

/***/ 1779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _antd = __webpack_require__(17);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(29);

var _classnames2 = _interopRequireDefault(_classnames);

var _debounce = __webpack_require__(709);

var _debounce2 = _interopRequireDefault(_debounce);

__webpack_require__(1804);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSearch = (_temp = _class = function (_Component) {
  _inherits(HeaderSearch, _Component);

  _createClass(HeaderSearch, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      if ('open' in props) {
        return {
          searchMode: props.open
        };
      }

      return null;
    }
  }]);

  function HeaderSearch(props) {
    _classCallCheck(this, HeaderSearch);

    var _this = _possibleConstructorReturn(this, (HeaderSearch.__proto__ || Object.getPrototypeOf(HeaderSearch)).call(this, props));

    _this.inputRef = null;

    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.debouncePressEnter();
      }
    };

    _this.onChange = function (value) {
      if (typeof value === 'string') {
        var _this$props = _this.props,
            onSearch = _this$props.onSearch,
            onChange = _this$props.onChange;

        _this.setState({
          value: value
        });

        if (onSearch) {
          onSearch(value);
        }

        if (onChange) {
          onChange(value);
        }
      }
    };

    _this.enterSearchMode = function () {
      var onVisibleChange = _this.props.onVisibleChange;

      onVisibleChange(true);
      _this.setState({
        searchMode: true
      }, function () {
        var searchMode = _this.state.searchMode;


        if (searchMode && _this.inputRef) {
          _this.inputRef.focus();
        }
      });
    };

    _this.leaveSearchMode = function () {
      _this.setState({
        searchMode: false
      });
    };

    _this.debouncePressEnter = function () {
      var onPressEnter = _this.props.onPressEnter;
      var value = _this.state.value;

      onPressEnter(value || '');
    };

    _this.state = {
      searchMode: props.defaultOpen,
      value: props.defaultValue
    };
    _this.debouncePressEnter = (0, _debounce2.default)(_this.debouncePressEnter, 500, {
      leading: true,
      trailing: false
    });
    return _this;
  }

  _createClass(HeaderSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          open = _props.open,
          restProps = _objectWithoutProperties(_props, ['className', 'defaultValue', 'placeholder', 'open']);

      var _state = this.state,
          searchMode = _state.searchMode,
          value = _state.value;

      delete restProps.defaultOpen; // for rc-select not affected

      var inputClass = (0, _classnames2.default)('headerSearch input', _defineProperty({}, 'headerSearch input2', searchMode));
      return _react2.default.createElement(
        'span',
        {
          className: (0, _classnames2.default)(className, 'headerSearch'),
          onClick: this.enterSearchMode,
          onTransitionEnd: function onTransitionEnd(_ref) {
            var propertyName = _ref.propertyName;

            if (propertyName === 'width' && !searchMode) {
              var onVisibleChange = _this2.props.onVisibleChange;

              onVisibleChange(searchMode);
            }
          }
        },
        _react2.default.createElement(_antd.Icon, { type: 'search', key: 'Icon' }),
        _react2.default.createElement(
          _antd.AutoComplete,
          _extends({
            key: 'AutoComplete'
          }, restProps, {
            className: inputClass,
            value: value,
            onChange: this.onChange
          }),
          _react2.default.createElement(_antd.Input, {
            ref: function ref(node) {
              _this2.inputRef = node;
            },
            defaultValue: defaultValue,
            'aria-label': placeholder,
            placeholder: placeholder,
            onKeyDown: this.onKeyDown,
            onBlur: this.leaveSearchMode
          })
        )
      );
    }
  }]);

  return HeaderSearch;
}(_react.Component), _class.defaultProps = {
  defaultActiveFirstOption: false,
  onPressEnter: function onPressEnter() {},
  onSearch: function onSearch() {},
  onChange: function onChange() {},
  className: '',
  placeholder: '',
  dataSource: [],
  defaultOpen: false,
  onVisibleChange: function onVisibleChange() {}
}, _temp);
exports.default = HeaderSearch;

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

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, ".headerSearch .anticon-search {\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n.headerSearch .input {\r\n  width: 0;\r\n  background: transparent;\r\n  border-radius: 0;\r\n  transition: width 0.3s, margin-left 0.3s;\r\n}\r\n.headerSearch .input .ant-select-selection {\r\n  background: transparent;\r\n}\r\n.headerSearch .input input {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  border: 0;\r\n  box-shadow: none !important;\r\n}\r\n.headerSearch .input,\r\n.headerSearch .input:hover,\r\n.headerSearch .input:focus {\r\n  border-bottom: 1px solid #d9d9d9;\r\n}\r\n.headerSearch .input.show {\r\n  width: 210px;\r\n  margin-left: 8px;\r\n}\r\n.headerSearch .input2 {\r\n  width: 210px;\r\n  margin-left: 8px;\r\n  background: transparent;\r\n  border-radius: 0;\r\n  transition: width 0.3s, margin-left 0.3s;\r\n}\r\n.headerSearch .input2 .ant-select-selection {\r\n  background: transparent;\r\n}\r\n.headerSearch .input2 input {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  border: 0;\r\n  box-shadow: none !important;\r\n}\r\n.headerSearch .input2,\r\n.headerSearch .input2:hover,\r\n.headerSearch .input2:focus {\r\n  border-bottom: 1px solid #d9d9d9;\r\n}", ""]);

// exports


/***/ }),

/***/ 1804:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1803);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*钉钉右侧表格
            * dangw@bocspace.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePicker = _antd.DatePicker.RangePicker;

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

var DingtalkRight = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DingtalkRight, _React$Component);

	function DingtalkRight(props) {
		_classCallCheck(this, DingtalkRight);

		var _this = _possibleConstructorReturn(this, (DingtalkRight.__proto__ || Object.getPrototypeOf(DingtalkRight)).call(this, props));

		_this.onChangeTimeRange = function (dates, dateStrings) {
			_this.setState({
				value: ""
			}, function () {
				var personParams = JSON.parse(JSON.stringify(_this.store.personParams));
				_this.store.personParams = Object.assign(personParams, {
					"beginTime": (0, _moment2.default)(dateStrings[0]).valueOf(),
					"endTime": (0, _moment2.default)(dateStrings[1]).valueOf()
				});
				_this.store.getPersonScheduleResources();
			});
		};

		_this.onChange = function (e) {
			_this.setState({
				value: e.target.value
			}, function () {
				var personParams = JSON.parse(JSON.stringify(_this.store.personParams));
				_this.store.personParams = Object.assign(personParams, {
					"beginTime": (0, _moment2.default)().startOf(e.target.value).valueOf(),
					"endTime": (0, _moment2.default)().endOf(e.target.value).valueOf()
				});
				_this.store.getPersonScheduleResources();
			});
		};

		_this.store = _this.props.store;
		_this.state = {
			value: "day" // 默认
		};
		return _this;
	}

	_createClass(DingtalkRight, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var personParams = JSON.parse(JSON.stringify(this.store.personParams));
			this.store.personParams = Object.assign(personParams, {
				beginTime: (0, _moment2.default)().startOf('day').valueOf(),
				endTime: (0, _moment2.default)().endOf("day").valueOf()
			});
			this.store.getPersonScheduleResources();
		}

		// 查询日程

	}, {
		key: 'render',
		value: function render() {
			var _React$createElement;

			var columns = [{
				title: '人员',
				dataIndex: 'name',
				key: 'name',
				align: 'center',
				width: '14%',
				className: 'vt'
			}, {
				title: '有效工时',
				dataIndex: 'effectiveHours',
				key: 'effectiveHours',
				align: 'center',
				width: '14%',
				className: 'vt'
			}, {
				title: '已排工时',
				dataIndex: 'arrangeHours',
				key: 'arrangeHours',
				align: 'center',
				width: '14%',
				className: 'vt'
			}, {
				title: '平均剩余（h）',
				dataIndex: 'surplusHours',
				key: 'surplusHours',
				align: 'center',
				width: '14%',
				className: 'vt'
			}, {
				title: '最多空闲（h）',
				dataIndex: 'availableHours',
				key: 'availableHours',
				width: '14%',
				align: 'center',
				className: 'vt'
			}, {
				title: '已用工时',
				align: 'center',
				children: [{
					title: '有效投入',
					dataIndex: 'effectiveTime',
					key: 'effectiveTime',
					align: 'center'
				}, {
					title: '沉默投入',
					dataIndex: 'silenceTime',
					key: 'silenceTime',
					align: 'center'
				}]
			}];
			var value = this.state.value;
			var _store = this.store,
			    personParams = _store.personParams,
			    personResources = _store.personResources;
			var beginTime = personParams.beginTime,
			    endTime = personParams.endTime;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_antd.Affix,
					{ offsetTop: 60 },
					_react2.default.createElement(
						'div',
						{ style: {
								width: '100%',
								height: 'auto',
								backgroundColor: '#FFF',
								paddingBottom: '15px'
							} },
						_react2.default.createElement(
							_antd.Radio.Group,
							{ onChange: this.onChange, value: value, buttonStyle: 'solid' },
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: 'day' },
								'\u4ECA\u65E5'
							),
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: 'week' },
								'\u672C\u5468'
							),
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: 'month' },
								'\u672C\u6708'
							),
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: 'year' },
								'\u5168\u5E74'
							)
						),
						_react2.default.createElement(RangePicker, {
							className: 'ml30',
							style: { width: '250px' },
							allowClear: false,
							value: [(0, _moment2.default)(beginTime), (0, _moment2.default)(endTime)],
							onChange: this.onChangeTimeRange
						})
					),
					_react2.default.createElement(_antd.Table, { columns: columns,
						dataSource: [],
						size: "small",
						pagination: false,
						className: 'ci_table2 ci_table5 ci_table6',
						bordered: true })
				),
				_react2.default.createElement(
					_antd.ConfigProvider,
					{ renderEmpty: customizeRenderEmpty },
					_react2.default.createElement(_antd.Table, (_React$createElement = {
						className: 'mt15',
						columns: columns,
						dataSource: mobx.toJS(personResources),
						bordered: true,
						size: "small",
						showHeader: false,
						pagination: false
					}, _defineProperty(_React$createElement, 'className', 'ci_table2 ci_table5'), _defineProperty(_React$createElement, 'rowClassName', function rowClassName(record, index) {
						var className = index % 2 ? 'deep_gray' : 'shallow_gray';
						return className;
					}), _React$createElement))
				)
			);
		}
	}]);

	return DingtalkRight;
}(_react2.default.Component)) || _class;

exports.default = DingtalkRight;

/***/ }),

/***/ 1953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _antd = __webpack_require__(17);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 项目日历组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


// 延迟颜色
var colors = { 0: '#EEF7FF', 1: '#4da9de', 2: '#e7b550', 3: '#c4382c' };

var ProjectCalendar = function (_React$Component) {
	_inherits(ProjectCalendar, _React$Component);

	function ProjectCalendar(props) {
		_classCallCheck(this, ProjectCalendar);

		var _this = _possibleConstructorReturn(this, (ProjectCalendar.__proto__ || Object.getPrototypeOf(ProjectCalendar)).call(this, props));

		_this.drawGrid = function (CANVAS_WIDTH, CANVAS_HEIGHT, GRID_WIDTH, GRID_HEIGHT) {
			var rows = parseInt(CANVAS_WIDTH / GRID_WIDTH);
			//var cols=parseInt(CANVAS_HEIGHT/GRID_HEIGHT);
			var cols = parseInt(_this.state.days);
			for (var i = 0; i < rows; ++i) {
				for (var j = 0; j < cols; ++j) {
					_this.drawRect(i, j, GRID_WIDTH, GRID_HEIGHT);
				}
			}
		};

		_this.drawRect = function (i, j, GRID_WIDTH, GRID_HEIGHT) {
			var drawing = document.getElementById("drawing");
			if (!drawing.getContext) return false;
			var context = drawing.getContext("2d");
			context.lineWidth = 0.4;
			context.strokeStyle = "lightgrey";
			context.strokeRect(i * 76, j * 44, GRID_WIDTH, GRID_HEIGHT);
		};

		_this.onMouseOver = function (key) {
			console.log(key, '移入');
			//let ele = document.querySelector("."+key);
			var ele = document.getElementById(key);
			ele.style.display = "block";
		};

		_this.onMouseOut = function (key) {
			console.log(key, '移出');
			// let ele = document.querySelector("."+key);
			var ele = document.getElementById(key);
			ele.style.display = "none";
		};

		_this.onMouseMove = function (key, offsetTop, eve) {
			console.log(key, eve, '移动');
			//let ele = document.querySelector("."+key);
			var ele = document.getElementById(key);
			var e = eve || window.event;
			ele.style.left = e.offsetX + 5 + "px";
			ele.style.top = e.offsetY + 5 + offsetTop + "px"; // 因为p的定位相对于大框，offset的坐标相对于事件源，不够，需要加上事件源相对于大框的left和top；+5是为了让p和h错开，这样p就不会一直闪烁了。
		};

		_this.state = {
			days: 1,
			currentDay: 2,
			CANVAS_WIDTH: 15 * 76,
			CANVAS_HEIGHT: 32 * 44
		};
		return _this;
	}

	_createClass(ProjectCalendar, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this2 = this;

			var projectStages = nextProps.projectStages;

			var width;
			if (projectStages.length >= 15) {
				width = projectStages.length * 76;
			} else {
				width = 15 * 76;
			}
			var GRID_WIDTH = 76;
			var GRID_HEIGHT = 44;
			var current = Number(nextProps.days) + 1;
			var currentDay = Number(nextProps.currentDay) + 1;
			this.setState({
				CANVAS_WIDTH: width,
				CANVAS_HEIGHT: current * 44,
				days: current,
				currentDay: currentDay
			}, function () {
				var _state = _this2.state,
				    CANVAS_WIDTH = _state.CANVAS_WIDTH,
				    CANVAS_HEIGHT = _state.CANVAS_HEIGHT;

				_this2.drawGrid(CANVAS_WIDTH, CANVAS_HEIGHT, GRID_WIDTH, GRID_HEIGHT);
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			var projectStages = this.props.projectStages;

			var width;
			if (projectStages.length >= 15) {
				width = projectStages.length * 76;
			} else {
				width = 15 * 76;
			}
			var GRID_WIDTH = 76;
			var GRID_HEIGHT = 44;
			var current = Number(this.props.days) + 1;
			var currentDay = Number(this.props.currentDay) + 1;
			this.setState({
				CANVAS_WIDTH: width,
				CANVAS_HEIGHT: current * 44,
				days: current,
				currentDay: currentDay
			}, function () {
				var _state2 = _this3.state,
				    CANVAS_WIDTH = _state2.CANVAS_WIDTH,
				    CANVAS_HEIGHT = _state2.CANVAS_HEIGHT;

				_this3.drawGrid(CANVAS_WIDTH, CANVAS_HEIGHT, GRID_WIDTH, GRID_HEIGHT);
			});
		}

		//绘制网格


		//绘制矩形


		// 鼠标移入


		// 鼠标移出


		// 鼠标移动

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state3 = this.state,
			    CANVAS_WIDTH = _state3.CANVAS_WIDTH,
			    CANVAS_HEIGHT = _state3.CANVAS_HEIGHT,
			    days = _state3.days,
			    currentDay = _state3.currentDay;
			var _props = this.props,
			    projectStages = _props.projectStages,
			    yearMonth = _props.yearMonth;

			var current = (0, _moment2.default)().format("YYYYMM");
			var date = (0, _moment2.default)().date(); //343
			return _react2.default.createElement(
				'div',
				{ className: 'pr', style: { width: CANVAS_WIDTH, height: 'calc(100vh - 340px)', paddingLeft: '25px' } },
				_react2.default.createElement(
					'ul',
					{ className: 'projectCalendar_row' },
					projectStages && projectStages.map(function (item, index) {
						return _react2.default.createElement(
							'li',
							{ key: 'row' + index, title: item.name },
							item.name
						);
					})
				),
				_react2.default.createElement(
					'ul',
					{ className: 'projectCalendar_col' },
					[].concat(_toConsumableArray(Array(days - 1).keys())).map(function (i) {
						return _react2.default.createElement(
							'li',
							{ key: 'col' + i,
								style: { color: yearMonth == current && date == i + 1 ? "#FB602D" : "#333" }
							},
							i + 1
						);
					})
				),
				_react2.default.createElement('div', {
					style: {
						width: CANVAS_WIDTH,
						height: '2px',
						backgroundColor: '#FB602D',
						position: 'absolute',
						left: '25px',
						top: (date + 1) * 44 + "px"
					},
					className: yearMonth == current ? "projectCalendar_baseline" : "hidden" }),
				_react2.default.createElement('canvas', { id: 'drawing', style: { overflowX: 'auto' }, width: CANVAS_WIDTH, height: CANVAS_HEIGHT }),
				_react2.default.createElement(
					'div',
					{ style: {
							width: CANVAS_WIDTH,
							height: CANVAS_HEIGHT,
							position: 'absolute', top: '0', left: '0'
						} },
					projectStages && projectStages.map(function (item, index) {
						return item.children && item.children.map(function (mitem, mindex) {
							// 计算高度 判断跨月处理
							var month = Number(yearMonth); // 记录日历切换的月份
							var beginMonth = mitem.beginTime == 0 ? month : (0, _moment2.default)(mitem.beginTime).format("YYYYMM"); // 记录开始时间的年月
							var endMonth = mitem.endTime == 0 ? month : (0, _moment2.default)(mitem.endTime).format("YYYYMM"); // 记录开始时间的月份
							var end = endMonth > month ? (0, _moment2.default)(yearMonth + (_this4.state.days - 1)) : mitem.endTime; // 结束日期大于当前的年月
							var begin = beginMonth < month ? (0, _moment2.default)(yearMonth + '01') : mitem.beginTime; // 开始日期小于当前的年月
							var days = mitem.beginTime == 0 ? 1 : (0, _moment2.default)(end).diff((0, _moment2.default)(begin), 'days');
							// 计算开始时间的天数
							var startDay = mitem.beginTime == 0 ? (0, _moment2.default)(mitem.endTime).date() - 1 : beginMonth < month ? 1 : (0, _moment2.default)(mitem.beginTime).date();
							return _react2.default.createElement(
								_antd.Popover,
								{ content: _react2.default.createElement(
										'div',
										{
											style: {
												width: '200px',
												background: '#FFF',
												margin: 0,
												textAlign: 'left',
												color: '#333',
												padding: '0px 5px',
												zIndex: '9999'
											},
											id: mitem.id },
										_react2.default.createElement(
											'p',
											null,
											'\u5F53\u524D\u9636\u6BB5\uFF1A',
											mitem.stageName
										),
										_react2.default.createElement(
											'p',
											null,
											'\u5F00\u59CB\u65F6\u95F4\uFF1A',
											(0, _moment2.default)(mitem.beginTime).format("YYYY-MM-DD")
										),
										_react2.default.createElement(
											'p',
											null,
											'\u7ED3\u675F\u65F6\u95F4\uFF1A',
											(0, _moment2.default)(mitem.endTime).format("YYYY-MM-DD")
										),
										mitem.rate == null || mitem.rate == 0 ? null : _react2.default.createElement(
											'p',
											null,
											'\u5F53\u524D\u8FDB\u5EA6:',
											mitem.rate,
											'%'
										)
									) },
								_react2.default.createElement(
									'div',
									{
										key: mitem.id,
										className: 'project_div'
										// onMouseOver={()=>this.onMouseOver(mitem.id)}
										// onMouseMove={()=>{this.onMouseMove(mitem.id, (startDay-1)*44, event)}}
										// onMouseOut={()=>this.onMouseOut(mitem.id)}
										, style: {
											position: 'absolute',
											top: (startDay + 1) * 44 + 'px', // 距离x轴   index 开始时间合计
											left: index * 76 + 25 + 'px', // 距离y轴   index 开始时间合计
											width: '76px',
											height: 44 * days + 'px', // 时间差值
											zIndex: 8 + mindex + 1 // 覆盖层级问题
										} },
									_react2.default.createElement(
										'div',
										{
											className: 'ellsis',
											style: {
												position: 'absolute',
												top: 0,
												left: 0,
												right: 0,
												width: '100%',
												zIndex: '999'
											} },
										mitem.stageName
									),
									_react2.default.createElement('div', {
										style: {
											position: 'absolute',
											top: 0,
											left: 0,
											right: 0,
											zIndex: '888',
											backgroundColor: colors[mitem.taskState],
											height: mitem.rate + "%"
										},
										className: 'project_progress' }),
									_react2.default.createElement(
										'div',
										{
											style: {
												width: '200px',
												background: '#FFF',
												margin: 0,
												display: 'none',
												position: 'absolute',
												left: 0,
												top: 0,
												textAlign: 'left',
												color: '#333',
												padding: '3px 15px',
												zIndex: '9999'
											},
											id: mitem.id },
										_react2.default.createElement(
											'p',
											null,
											'\u5F53\u524D\u9636\u6BB5\uFF1A',
											mitem.stageName
										),
										_react2.default.createElement(
											'p',
											null,
											'\u5F00\u59CB\u65F6\u95F4\uFF1A',
											(0, _moment2.default)(mitem.beginTime).format("YYYY-MM-DD")
										),
										_react2.default.createElement(
											'p',
											null,
											'\u7ED3\u675F\u65F6\u95F4\uFF1A',
											(0, _moment2.default)(mitem.endTime).format("YYYY-MM-DD")
										),
										mitem.rate == null || mitem.rate == 0 ? null : _react2.default.createElement(
											'p',
											null,
											'\u5F53\u524D\u8FDB\u5EA6:',
											mitem.rate,
											'%'
										)
									)
								)
							);
						});
					})
				)
			);
		}
	}]);

	return ProjectCalendar;
}(_react2.default.Component);

exports.default = ProjectCalendar;

/***/ })

});
//# sourceMappingURL=24-afa7d4b4bae6ff2924e9.1629092961041.js.map