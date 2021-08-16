webpackJsonp([44],{

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  *运维管理--项目列表
                  *qiufh@bocspace.cn
                  */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

var _ProjectStore = __webpack_require__(1660);

var _ProjectStore2 = _interopRequireDefault(_ProjectStore);

var _AsyncSelect = __webpack_require__(1563);

var _AsyncSelect2 = _interopRequireDefault(_AsyncSelect);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _maintenance = __webpack_require__(727);

var _maintenance2 = _interopRequireDefault(_maintenance);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;
var Search = _antd.Input.Search;
var Option = _antd.Select.Option;
var MonthPicker = _antd.DatePicker.MonthPicker,
    RangePicker = _antd.DatePicker.RangePicker;
var Title = _antd.Typography.Title;


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

// 暂时前端控制6张表
var statusInfo = ['正常', '报修-待确认', '报修-待分配', '报修-待维修', '维修完成'];
// 暂时前端控制6张表
var statusInfo2 = ['正常', '待确认', '待分配', '待维修', '维修完成'];

var ProjectList = (_dec = _antd.Form.create(), _dec(_class = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(ProjectList, _React$Component);

	function ProjectList(props) {
		_classCallCheck(this, ProjectList);

		var _this2 = _possibleConstructorReturn(this, (ProjectList.__proto__ || Object.getPrototypeOf(ProjectList)).call(this, props));

		_this2.state = {
			visible: false,
			editable: false,
			showRunStatus: false,
			addType: 0,
			reportTypeList: [],
			reportNameList: [],
			userInfo: [],
			name: "", //名称
			type: "", //类型
			keyType: 'type', // 所属类别
			parendId: '',
			activeKey: '0', // 激活的key,
			sortedInfo: null,
			searchInputValue: ''
		};

		_this2.handleView = function (param) {
			_this2.props.history.push('/manual?title=view&classifyName=' + param.classifyName + '&theme=' + param.theme + '&month=' + param.month);
		};

		_this2.handleEdit = function (param) {
			_this2.props.history.push('/manual?title=edit&classifyName=' + param.classifyName + '&theme=' + param.theme + '&month=' + param.month);
		};

		_this2.onShowSizeChange = function (current, pageSize) {
			var _this2$state = _this2.state,
			    activeKey = _this2$state.activeKey,
			    searchInputValue = _this2$state.searchInputValue;

			if (activeKey !== "0") {
				_this2.store.params2 = Object.assign(mobx.toJS(_this2.store.params2), {
					pageIndex: current,
					pageSize: pageSize
				});
				_this2.store.getMaintenanceList(activeKey);
			} else {
				_this2.store.params = Object.assign(mobx.toJS(_this2.store.params), {
					pageIndex: current,
					pageSize: pageSize
				});
				_this2.store.getProductList(searchInputValue);
			}
		};

		_this2.onChange = function (pageNumber) {
			var _this2$state2 = _this2.state,
			    activeKey = _this2$state2.activeKey,
			    searchInputValue = _this2$state2.searchInputValue;


			if (activeKey !== "0") {
				_this2.store.params2 = Object.assign(mobx.toJS(_this2.store.params2), {
					pageIndex: pageNumber
				});
				_this2.store.getMaintenanceList(activeKey);
			} else {
				_this2.store.params = Object.assign(mobx.toJS(_this2.store.params), {
					pageIndex: pageNumber
				});
				_this2.store.getProductList(searchInputValue);
			}
		};

		_this2.loadPageInfo = function () {
			_this2.store.getManagers();
			_this2.store.getAllTotalCount();
			_this2.store.getProductList('');
		};

		_this2.clearPageStatus = function () {
			_this2.store.params = Object.assign(mobx.toJS(_this2.store.params), {
				text: '',
				managers: [],
				state: [],
				pageIndex: 1,
				pageSize: 10
			});
			_this2.store.params2 = Object.assign(mobx.toJS(_this2.store.params2), {
				text: '',
				managers: [],
				pageIndex: 1,
				pageSize: 10
			});
		};

		_this2.tabsOnchange = function (key) {
			_this2.setState({ activeKey: key, searchInputValue: '' });
			_this2.clearPageStatus();
			switch (key) {
				case '1':
					_this2.show4StatusList(key);
					break;
				case '2':
					_this2.show4StatusList(key);
					break;
				case '3':
					_this2.show4StatusList(key);
					break;
				case '4':
					_this2.show4StatusList(key);
					break;
				default:
					_this2.setState({ showRunStatus: false });
					_this2.loadPageInfo();
			}
		};

		_this2.show4StatusList = function (key) {
			_this2.setState({ showRunStatus: true });
			_this2.store.getMaintenanceList(key);
		};

		_this2.setRepairRecordSort = function () {
			_this2.setState({
				sortedInfo: {
					order: 'descend',
					columnKey: 'month'
				}
			});
		};

		_this2.showRunStatus = function (text, record) {
			var showRunStatus = _this2.state.showRunStatus;

			var color = { "color": "#ff8c00", "cursor": "pointer" };
			if (text === 0 || text === 4) color = { "color": "#00aa00", "cursor": "pointer" };
			if (showRunStatus) color = { "color": "#0991FF", "cursor": "pointer" };
			return _react2.default.createElement(
				'span',
				{ onClick: function onClick() {
						_this2.openDetailsByRepairState(text, record);
					}, style: color },
				showRunStatus ? statusInfo2[text] : statusInfo[text]
			);
		};

		_this2.filterRunStatus = function (value, record) {
			return value === statusInfo[record.state];
		};

		_this2.onSearch = function (value, event) {
			var activeKey = _this2.state.activeKey;

			if (activeKey != "0") {
				_this2.store.params2.text = value;
				_this2.store.getMaintenanceList(activeKey);
			} else {
				_this2.store.getProductList(value);
			}
		};

		_this2.handleGetSearchInputValue = function (event) {
			_this2.setState({
				searchInputValue: event.target.value
			});
		};

		_this2.openDetails = function (code) {
			var _this = _this2;
			_this.props.history.push('/project/details?code=' + code);
		};

		_this2.openDetailsByAllProjectRecord = function (text, record) {
			var _this = _this2;
			_this.props.history.push('/project/details/maintenanceinfo?code=' + record['product']['code'] + '&allprostate=' + record.state);
		};

		_this2.openDetailsByRepairStateRecord = function (text, record) {
			var _this = _this2;
			_this.props.history.push('/project/details?code=' + record['product']['code'] + '&statuslistid=' + record.id);
		};

		_this2.openDetailsByRepairState = function (text, record) {
			var activeKey = _this2.state.activeKey;

			if (activeKey !== "0") {
				_this2.openDetailsByRepairStateRecord(text, record);
			} else {
				_this2.openDetailsByAllProjectRecord(text, record);
			}
		};

		_this2.getDataByTableChange = function (order) {
			var _this2$state3 = _this2.state,
			    activeKey = _this2$state3.activeKey,
			    searchInputValue = _this2$state3.searchInputValue;
			var columnKey = order.columnKey;

			if (order.order == null) {
				_this2.store.params.orderType = 0;
				_this2.store.params2.orderType = 0;
				activeKey === '0' ? _this2.store.getProductList(searchInputValue) : _this2.store.getMaintenanceList(activeKey);
				return;
			}
			if (columnKey == "recordCount") {
				// 维修记录
				if (order.order == "descend") {
					_this2.store.params.orderType = 1;
					_this2.store.params2.orderType = 1;
				}
				if (order.order == "ascend") {
					_this2.store.params.orderType = 2;
					_this2.store.params2.orderType = 2;
				}
			} else if (columnKey == "createTime") {
				if (order.order == "descend") {
					_this2.store.params.orderType = 3;
					_this2.store.params2.orderType = 3;
				}
				if (order.order == "ascend") {
					_this2.store.params.orderType = 4;
					_this2.store.params2.orderType = 4;
				}
			} else if (columnKey == "repairTime") {
				if (order.order == "descend") {
					_this2.store.params.orderType = 5;
					_this2.store.params2.orderType = 5;
				}
				if (order.order == "ascend") {
					_this2.store.params.orderType = 6;
					_this2.store.params2.orderType = 6;
				}
			} else if (columnKey == "confirmationTime") {
				if (order.order == "descend") {
					_this2.store.params.orderType = 7;
					_this2.store.params2.orderType = 7;
				}
				if (order.order == "ascend") {
					_this2.store.params.orderType = 8;
					_this2.store.params2.orderType = 8;
				}
			}
			activeKey === '0' ? _this2.store.getProductList(searchInputValue) : _this2.store.getMaintenanceList(activeKey);
		};

		_this2.store = new _ProjectStore2.default();
		return _this2;
	}

	_createClass(ProjectList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			var search = this.props.location.search;
			var activeKey = _url2.default.parse(search, true).query.activeKey;
			if (activeKey != null && activeKey != undefined) {
				// 跳转申请报修
				this.setState({ activeKey: activeKey, searchInputValue: '' }, function () {
					_this3.store.getManagers();
					_this3.store.getAllTotalCount();
					_this3.show4StatusList(activeKey);
				});
			} else {
				this.loadPageInfo();
			}
		}

		// 查看


		// 编辑

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    editable = _state.editable,
			    activeKey = _state.activeKey,
			    showRunStatus = _state.showRunStatus,
			    searchInputValue = _state.searchInputValue;

			var listStyle = {
				display: editable ? 'none' : 'block'
			};

			var extraContent = _react2.default.createElement(Search, { className: 'extraContentSearch', placeholder: '\u8BF7\u8F93\u5165', onChange: this.handleGetSearchInputValue, value: searchInputValue, onSearch: this.onSearch });

			var columns = [{
				title: 'ID编码', dataIndex: 'product.code', align: 'left',
				render: function render(text, record) {
					return _react2.default.createElement(
						'a',
						{ onClick: function onClick(e) {
								_this4.openDetails(text);
							} },
						text
					);
				}
			}, { title: '项目名称', dataIndex: 'project.name', align: 'center' }, { title: '生产厂商', dataIndex: 'product.producer', align: 'center', className: activeKey == "4" ? "hidden" : "" }, { title: '维修单位', dataIndex: 'repairUnit', align: 'center', className: activeKey == "4" ? "" : "hidden" }, {
				title: '项目经理', dataIndex: 'project.managers', align: 'center',
				filters: mobx.toJS(this.store.managers),
				filterIcon: function filterIcon(filtered) {
					return _react2.default.createElement(_antd.Icon, { className: 'bocfiterIcon', type: 'caret-down', style: { color: filtered ? '#1890ff' : undefined } });
				},
				onFilter: function onFilter(value, record) {
					return record.project.managers === value;
				}
			}, {
				title: '启用时间', dataIndex: 'project.usingTime', align: 'center', className: activeKey == "4" ? "hidden" : "", render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY.MM.DD");
				}
			}, {
				title: '报修时间', dataIndex: 'createTime', align: 'center', className: activeKey != "0" ? "" : "hidden",
				sorter: true,
				render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY.MM.DD");
				}
			}, {
				title: '受理时间', dataIndex: 'repairTime', align: 'center', className: activeKey == "2" || activeKey == "3" || activeKey == "4" ? "" : "hidden",
				sorter: true,
				render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY.MM.DD");
				}
			}, {
				title: '维修完成时间', dataIndex: 'confirmationTime', align: 'center', className: activeKey == "4" ? "" : "hidden",
				sorter: true,
				render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY.MM.DD");
				}
			}, { title: '维修记录', dataIndex: 'recordCount', align: 'center', key: 'recordCount', className: activeKey != "0" ? "hidden" : "",
				sorter: true,
				render: function render(text, record) {
					if (activeKey != 0) {
						return _react2.default.createElement(
							'span',
							null,
							text + '次'
						);
					} else {
						return _react2.default.createElement(
							'a',
							{ onClick: function onClick(e) {
									_this4.openDetailsByRepairState(text, record);
								} },
							text + '次'
						);
					}
				}
			}, !showRunStatus ? {
				title: '运行状态', dataIndex: 'state', align: 'center', key: 'state',
				filters: [{
					text: '正常',
					value: '正常'
				}, {
					text: '报修-待确认',
					value: '报修-待确认'
				}, {
					text: '报修-待分配',
					value: '报修-待分配'
				}, {
					text: '报修-待维修',
					value: '报修-待维修'
				}],
				filterIcon: function filterIcon(filtered) {
					return _react2.default.createElement(_antd.Icon, { className: 'bocfiterIcon', type: 'caret-down', style: { color: filtered ? '#1890ff' : undefined } });
				},
				onFilter: function onFilter(value, record) {
					return _this4.filterRunStatus(value, record);
				},
				render: function render(text, record) {
					return _this4.showRunStatus(text, record);
				}
			} : { title: '状态',
				dataIndex: 'state',
				align: 'center',
				key: 'state',
				render: function render(text, record) {
					return _this4.showRunStatus(text, record);
				}
			}];

			return _react2.default.createElement(
				'div',
				{ style: { width: '100%', padding: '10px 15px' } },
				_react2.default.createElement(
					'div',
					{ style: listStyle },
					_react2.default.createElement(
						_antd.Tabs,
						{ tabBarExtraContent: extraContent, activeKey: activeKey, onChange: this.tabsOnchange },
						_react2.default.createElement(TabPane, {
							tab: _react2.default.createElement(
								'span',
								null,
								'\u5168\u90E8\u9879\u76EE (',
								this.store.allTotalCount,
								')'
							),
							key: '0' }),
						_react2.default.createElement(TabPane, {
							tab: _react2.default.createElement(
								'span',
								null,
								'\u7533\u8BF7\u62A5\u4FEE (',
								this.store.requestRepairTotalCount,
								')'
							),
							key: '1' }),
						_react2.default.createElement(TabPane, {
							tab: _react2.default.createElement(
								'span',
								null,
								'\u7B49\u5F85\u5206\u914D (',
								this.store.waitAssignCount,
								')'
							),
							key: '2' }),
						_react2.default.createElement(TabPane, {
							tab: _react2.default.createElement(
								'span',
								null,
								'\u6B63\u5728\u7EF4\u4FEE (',
								this.store.repairringTotalCount,
								')'
							),
							key: '3' }),
						_react2.default.createElement(TabPane, {
							tab: _react2.default.createElement(
								'span',
								null,
								'\u7EF4\u4FEE\u5B8C\u6210 (',
								this.store.repairedDoneTotalCount,
								')'
							),
							key: '4' })
					),
					_react2.default.createElement(
						_antd.Row,
						{ type: 'flex', justify: 'space-between', className: 'mt20' },
						_react2.default.createElement(
							_antd.Col,
							{ span: 24 },
							_react2.default.createElement(
								Title,
								{ className: 'dib f15',
									level: 4 },
								activeKey == 0 ? "项目列表" : activeKey == 1 || activeKey == 2 ? "报修列表" : "维修列表"
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ type: 'flex', justify: 'space-between', style: { "marginTop": "0px" } },
						_react2.default.createElement(
							_antd.Col,
							{ span: 24 },
							_react2.default.createElement(
								_antd.ConfigProvider,
								{ renderEmpty: customizeRenderEmpty },
								_react2.default.createElement(_antd.Table, {
									className: 'm_table',
									columns: columns,
									dataSource: mobx.toJS(this.store.tableData),
									size: 'middle',
									rowKey: 'id',
									pagination: false,
									onChange: function onChange(pagination, filters, sorter) {
										_this4.getDataByTableChange(sorter);
									}
								}),
								_react2.default.createElement(_antd.Pagination, {
									className: 'mt20 tr',
									showSizeChanger: true,
									onShowSizeChange: this.onShowSizeChange,
									onChange: this.onChange,
									total: this.store.totalCount,
									showQuickJumper: true,
									current: activeKey === "0" ? mobx.toJS(this.store.params.pageIndex) : mobx.toJS(this.store.params2.pageIndex),
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

	return ProjectList;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = ProjectList;

/***/ }),

/***/ 1563:
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 基于antd select组件封装 单选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * dangw@glodon.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


var Option = _antd.Select.Option;

var AsyncSelect = function (_React$Component) {
  _inherits(AsyncSelect, _React$Component);

  function AsyncSelect(props) {
    _classCallCheck(this, AsyncSelect);

    var _this = _possibleConstructorReturn(this, (AsyncSelect.__proto__ || Object.getPrototypeOf(AsyncSelect)).call(this, props));

    _this.handleChange = function (val, e) {
      //if (value === undefined) return false;
      var value = e.props.val;
      _this.setState({ value: value[_this.props.keyName] });
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(val, e);
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
          variables: _this.props.variables
        })
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.data !== null && json.data[_this.props.type] !== null) {
          var array = void 0;
          // 报表类别过滤数据
          if (_this.props.keyType == "type") {
            array = json.data[_this.props.type].filter(function (item) {
              return item.id !== "0";
            });
          } else {
            array = json.data[_this.props.type];
          }
          _this.setState({
            data: array
          });
        }
      });
    };

    _this.state = {
      data: [],
      value: '',
      keyName: ''
    };
    return _this;
  }

  _createClass(AsyncSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps && this.props.value !== nextProps.value) {
        this.setState({
          value: nextProps.value || "",
          keyName: nextProps.keyName
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

      var options = this.state.data.length && this.state.data.map(function (d, i) {
        return _react2.default.createElement(
          Option,
          { value: d[_this2.props.keyName], key: i, val: d },
          d.name
        );
      });

      return _react2.default.createElement(
        _antd.Select,
        {
          value: this.props.value,
          placeholder: this.props.placeholder || "请选择",
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

/***/ 1660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16; /*
                                                                                                                                                                                                                                                                 * 运维管理store
                                                                                                                                                                                                                                                                 */


var _mobx = __webpack_require__(12);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _maintenance = __webpack_require__(727);

var _maintenance2 = _interopRequireDefault(_maintenance);

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

var ProjectStore = (_class = function () {
	function ProjectStore() {
		_classCallCheck(this, ProjectStore);

		_initDefineProp(this, 'tableData', _descriptor, this);

		_initDefineProp(this, 'allTotalCount', _descriptor2, this);

		_initDefineProp(this, 'requestRepairTotalCount', _descriptor3, this);

		_initDefineProp(this, 'waitAssignCount', _descriptor4, this);

		_initDefineProp(this, 'repairringTotalCount', _descriptor5, this);

		_initDefineProp(this, 'repairedDoneTotalCount', _descriptor6, this);

		_initDefineProp(this, 'repairStatus', _descriptor7, this);

		_initDefineProp(this, 'managers', _descriptor8, this);

		_initDefineProp(this, 'totalCount', _descriptor9, this);

		_initDefineProp(this, 'params', _descriptor10, this);

		_initDefineProp(this, 'params2', _descriptor11, this);

		_initDefineProp(this, 'repairData', _descriptor12, this);

		_initDefineProp(this, 'projectName', _descriptor13, this);

		_initDefineProp(this, 'product', _descriptor14, this);

		_initDefineProp(this, 'project', _descriptor15, this);

		_initDefineProp(this, 'supplierList', _descriptor16, this);
	} // 列表数据
	//全部项目数
	//申请报修数
	//等待分配数
	//正在维修数
	//维修完成数
	//报修状态列表
	// 项目经理列表

	//详情页面store


	_createClass(ProjectStore, [{
		key: 'getProductList',


		// 项目列表查询
		value: function getProductList(text) {
			var _this = this;

			this.params.text = text;
			return (0, _api.requestPost)('getProductList', _config2.default.maintenance.getProductList, _maintenance2.default.maintenance.getProductList, this.params).then(function (res) {
				_this.tableData = Object.assign([], res.body);
				_this.params.pageIndex = res.pageIndex;
				_this.params.pageSize = res.pageSize;
				_this.totalCount = res.totalCount;
			});
		}

		// 查询项目不同状态分类统计数目

	}, {
		key: 'getAllTotalCount',
		value: function getAllTotalCount() {
			var _this2 = this;

			return (0, _api.requestPost)('getAllTotalCount', _config2.default.maintenance.getAllTotalCount, _maintenance2.default.maintenance.getAllTotalCount, { state: 0 }).then(function (res) {
				_this2.allTotalCount = res.productCount;
				_this2.requestRepairTotalCount = res.state1Count;
				_this2.waitAssignCount = res.state2Count;
				_this2.repairringTotalCount = res.state3Count;
				_this2.repairedDoneTotalCount = res.state4Count;
			});
		}

		// 查询报修状态列表

	}, {
		key: 'getMaintenanceList',
		value: function getMaintenanceList(state) {
			var _this3 = this;

			this.params2.state = [parseInt(state)];
			return (0, _api.requestPost)('getMaintenanceList', _config2.default.maintenance.getMaintenanceList, _maintenance2.default.maintenance.getMaintenanceList, this.params2).then(function (res) {
				_this3.tableData = Object.assign([], res.body);
				_this3.params2.pageIndex = res.pageIndex;
				_this3.params2.pageSize = res.pageSize;
				_this3.totalCount = res.totalCount;
			});
		}

		// 查询项目经理

	}, {
		key: 'getManagers',
		value: function getManagers() {
			var _this4 = this;

			return (0, _api.requestPost)('getManagers', _config2.default.maintenance.getManagers, _maintenance2.default.maintenance.getManagers).then(function (res) {
				_this4.managers = Object.assign([], res.map(function (item) {
					return { text: item.name, value: item.id };
				}));
			});
		}

		// 根据产品编码查询详细详情

	}, {
		key: 'getProductMaintenanceInfo',
		value: function getProductMaintenanceInfo(code) {
			// let  tmpData ={
			// 	"project": {"name": "tigertest"},
			// 	"proudct": {"name": "tigertest"},
			// 	"repairData":[{"applicantUser":"张三"},{"applicantUser":"李四"}]
			// };
			// this.projectName = tmpData.project.name;
			// this.repairData = tmpData.repairData;
			// return;
			var params = { "code": code };
			return (0, _api.requestPost)('getProductMaintenanceInfo', _config2.default.maintenance.getProductMaintenanceInfo, _maintenance2.default.maintenance.getProductMaintenanceInfo, params);
		}

		// 新增或更新报修和确认信息维修信息

	}, {
		key: 'addOrUpdateRepairAcceptRecord',
		value: function addOrUpdateRepairAcceptRecord(repairDataItem) {
			var params = { "repairData": repairDataItem };
			return (0, _api.requestPost)('addOrUpdateRepairAcceptRecord', _config2.default.maintenance.addOrUpdateRepairAcceptRecord, _maintenance2.default.maintenance.addOrUpdateRepairAcceptRecord, params);
		}

		// 更新产品（基础）信息

	}, {
		key: 'updateProduct',
		value: function updateProduct(product) {
			var params = { "product": product };
			return (0, _api.requestPost)('updateProduct', _config2.default.maintenance.updateProduct, _maintenance2.default.maintenance.updateProduct, params);
		}

		// 更新项目信息

	}, {
		key: 'updateProject',
		value: function updateProject(project) {
			var params = { "project": project };
			return (0, _api.requestPost)('updateProject', _config2.default.maintenance.updateProject, _maintenance2.default.maintenance.updateProject, params);
		}
	}, {
		key: 'getSupplierListByprojectId',


		//项目供应商
		value: function getSupplierListByprojectId(project) {
			var _this5 = this;

			var params = { "projectId": project };
			return (0, _api.requestPost)('getSupplierListByprojectId', _config2.default.maintenance.getSupplierListByprojectId, _maintenance2.default.maintenance.getSupplierListByprojectId, params).then(function (res) {
				_this5.supplierList = Object.assign([], res);
				return res;
			});
		}
	}]);

	return ProjectStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'tableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'allTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'requestRepairTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'waitAssignCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'repairringTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'repairedDoneTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'repairStatus', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'managers', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'totalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'params', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			text: '',
			managers: [],
			state: [],
			orderType: 0,
			pageIndex: 1,
			pageSize: 10
		};
	}
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'params2', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			text: '',
			managers: [],
			state: [],
			orderType: 0,
			pageIndex: 1,
			pageSize: 10 };
	}
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'repairData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'projectName', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return '';
	}
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'product', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {};
	}
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'project', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProductList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProductList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getAllTotalCount', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllTotalCount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMaintenanceList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getMaintenanceList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getManagers', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getManagers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getProductMaintenanceInfo', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProductMaintenanceInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addOrUpdateRepairAcceptRecord', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addOrUpdateRepairAcceptRecord'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateProduct', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'updateProduct'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateProject', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'updateProject'), _class.prototype), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'supplierList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getSupplierListByprojectId', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getSupplierListByprojectId'), _class.prototype)), _class);
exports.default = ProjectStore;

/***/ })

});
//# sourceMappingURL=44-afa7d4b4bae6ff2924e9.1629092961041.js.map