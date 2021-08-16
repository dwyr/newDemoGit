webpackJsonp([48],{

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /**
                   * 日志导出
                   * dangw@bocspace.cn
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _AsyncSelect = __webpack_require__(1563);

var _AsyncSelect2 = _interopRequireDefault(_AsyncSelect);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _journal = __webpack_require__(93);

var _journal2 = _interopRequireDefault(_journal);

var _ByEmailStore = __webpack_require__(749);

var _ByEmailStore2 = _interopRequireDefault(_ByEmailStore);

var _reactCustomScrollbars = __webpack_require__(336);

var _download = __webpack_require__(68);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePicker = _antd.DatePicker.RangePicker;
var Option = _antd.Select.Option;
var ByEmail = (_dec = (0, _mobxReact.inject)('ByEmailStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
	_inherits(ByEmail, _Component);

	function ByEmail(props) {
		_classCallCheck(this, ByEmail);

		var _this2 = _possibleConstructorReturn(this, (ByEmail.__proto__ || Object.getPrototypeOf(ByEmail)).call(this, props));

		_this2.getReportUrl = function (id) {
			var _this = _this2;
			_this2.setState({
				isLoading: true
			});
			_this.timer22 = setInterval(function () {
				_this.store.getDownloadUrl(id).then(function (res) {
					var url = res.url,
					    name = res.name;

					if (url !== null && url !== "") {
						_this2.setState({
							isLoading: false
						});
						(0, _download.downloadFile)(url, name); // 直接下载pdf
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

		_this2.handleSearch = function (e) {
			e.preventDefault();
			var checkAllNew = _this2.state.checkAllNew;

			_this2.props.form.validateFields(function (err, values) {
				if (err) {
					return false;
				} else {
					var beginTime = (0, _moment2.default)(values["time"][0].format('YYYY-MM-DD')).valueOf();
					var endTime = (0, _moment2.default)(values["time"][1].format('YYYY-MM-DD')).valueOf();
					var params = {
						journalType: values["journalType"],
						userIds: checkAllNew == "all" ? [] : values["userIds"].map(function (item) {
							return item.id;
						}),
						type: values["type"],
						beginTime: beginTime,
						endTime: endTime
					};
					_this2.store.exportJournalDownload(params).then(function (res) {
						_this2.getReportUrl(res);
					});
				}
			});
		};

		_this2.handleReset = function () {
			_this2.props.form.resetFields();
			_this2.setState({
				userIds: [],
				checkAll: "",
				userIdsNew: [], //展示使用
				checkAllNew: "", //展示使用
				tip: "正在生成，请稍等...",
				isLoading: false
			});
		};

		_this2.onChangeState = function (type, item, e) {
			var newData = JSON.parse(JSON.stringify(_this2.state[type]));
			var index = newData.findIndex(function (vitem) {
				return vitem.id == item.id;
			});
			var checked = e.target.checked;

			if (index == -1) {
				var _this2$setState;

				// 新增
				_this2.setState((_this2$setState = {}, _defineProperty(_this2$setState, type, [].concat(_toConsumableArray(newData), [item])), _defineProperty(_this2$setState, 'checkAll', ""), _this2$setState));
			} else {
				if (checked == false) {
					var _this2$setState2;

					// 取消选中
					newData.splice(index, 1);
					_this2.setState((_this2$setState2 = {}, _defineProperty(_this2$setState2, type, Object.assign([], newData)), _defineProperty(_this2$setState2, 'checkAll', ""), _this2$setState2));
				}
			}
		};

		_this2.handleAdd = function () {
			_this2.setState({
				visible: !_this2.state.visible
			}, function () {
				if (_this2.state.visible == false) {
					// 重置
					_this2.handleCancle();
				}
			});
		};

		_this2.checkAll = function () {
			if (_this2.state.checkAll == "all") {
				// 清空
				_this2.setState({
					userIds: [],
					checkAll: ""
				});
			} else {
				// 全选
				var tableData = _this2.store.tableData;

				var data = JSON.parse(JSON.stringify(tableData));
				_this2.setState({
					userIds: data,
					checkAll: "all"
				});
			}
		};

		_this2.handleSubmit = function () {
			_this2.setState({
				visible: false,
				checkAllNew: _this2.state.checkAll,
				userIdsNew: _this2.state.userIds
			});
			var form = _this2.props.form;

			form.setFieldsValue({ userIds: _this2.state.userIds });
		};

		_this2.handleCancle = function () {
			_this2.setState({
				checkAll: "", //this.state.checkAllNew,
				userIds: [] //this.state.userIdsNew
			});
		};

		_this2.onVisibleChange = function () {
			_this2.setState({
				visible: false,
				checkAll: _this2.state.checkAllNew,
				userIds: _this2.state.userIdsNew
			});
		};

		_this2.handleSelChange = function () {};

		_this2.store = _this2.props.ByEmailStore;
		_this2.state = {
			types: [{ id: 1, name: "日志记录" }, { id: 2, name: "日志内容" }], // 导出类别
			userIds: [],
			checkAll: "",
			userIdsNew: [], //展示使用
			checkAllNew: "", //展示使用
			tip: "正在生成，请稍等...",
			isLoading: false
		};
		return _this2;
	}

	_createClass(ByEmail, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.store.getUserInfoListByCodeOrText();
		}

		// 间隔3秒获取pdf地址


		// 选中全员

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    types = _state.types,
			    visible = _state.visible,
			    userIdsNew = _state.userIdsNew,
			    checkAllNew = _state.checkAllNew;
			var tableData = this.store.tableData;
			var getFieldDecorator = this.props.form.getFieldDecorator;

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
			var tailFormItemLayout = {
				wrapperCol: {
					xs: {
						span: 24,
						offset: 8
					},
					sm: {
						span: 16,
						offset: 8
					}
				}
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_antd.Form,
					_extends({ className: 'ant-advanced-search-form', layout: "inline" }, formItemLayout),
					_react2.default.createElement(
						_antd.Row,
						{ gutter: 24 },
						_react2.default.createElement(
							_antd.Col,
							{ span: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: "日志类型", className: 'w' },
								getFieldDecorator("journalType", {
									rules: [{
										required: true,
										message: '请选择'
									}]
								})(_react2.default.createElement(_AsyncSelect2.default, {
									className: 'w',
									type: 'getJournalTypeList',
									url: _config2.default.journal.getJournalTypeList,
									onChange: this.handleSelChange.bind(this, 'type'),
									variables: { "category": 1 },
									query: _journal2.default.journal.getJournalTypeList,
									keyName: "type"
									//keyType={"type"}
								}))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: "创建时间", className: 'w' },
								getFieldDecorator("time", {
									rules: [{
										required: true,
										message: '请选择'
									}]
								})(_react2.default.createElement(RangePicker, null))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: "创建人员", className: 'w', style: { marginBottom: "25px" } },
								getFieldDecorator("userIds", {
									initialValue: userIdsNew,
									rules: [{
										required: true,
										message: '请选择'
									}]
								})(_react2.default.createElement(
									_antd.Dropdown,
									{
										visible: visible,
										overlay: _react2.default.createElement(
											'div',
											{ style: {
													background: "#F7F7F7" } },
											_react2.default.createElement(
												_reactCustomScrollbars.Scrollbars,
												{
													autoHide: true,
													autoHideTimeout: 1000,
													autoHideDuration: 200,
													autoHeight: true,
													autoHeightMin: '88px',
													autoHeightMax: '300px',
													thumbMinSize: 30,
													universal: true },
												_react2.default.createElement(
													'div',
													{ className: 'pl10' },
													_react2.default.createElement(
														_antd.Checkbox,
														{
															className: 'db',
															checked: this.state["checkAll"].includes("all"),
															key: "all",
															onChange: this.checkAll },
														'\u5168\u5458'
													)
												),
												mobx.toJS(tableData).map(function (item, index) {
													return _react2.default.createElement(
														'div',
														{ className: 'pl10' },
														_react2.default.createElement(
															_antd.Checkbox,
															{
																className: 'db',
																checked: _this3.state["userIds"].map(function (item) {
																	return item.id;
																}).includes(item.id),
																key: index,
																onChange: _this3.onChangeState.bind(_this3, "userIds", item) },
															item.realname
														)
													);
												})
											),
											_react2.default.createElement(
												'div',
												{ style: {
														width: '100%',
														display: 'flex',
														justifyContent: 'space-around',
														paddingBottom: "3px"
													} },
												_react2.default.createElement(
													_antd.Button,
													{
														type: 'primary',
														onClick: function onClick() {
															return _this3.handleSubmit();
														},
														size: 'small',
														style: { width: 60, marginRight: 8, marginTop: 8 }
													},
													'\u786E\u5B9A'
												),
												_react2.default.createElement(
													_antd.Button,
													{ onClick: function onClick() {
															return _this3.handleCancle();
														}, size: 'small',
														style: { width: 60, marginTop: 8 } },
													'\u91CD\u7F6E'
												)
											)
										),
										trigger: ['click'] },
									_react2.default.createElement(
										'div',
										{ style: { position: 'relative',
												top: "1px",
												height: '32px',
												lineHeight: '32px',
												borderRadius: '4px',
												width: '100%',
												border: '1px solid #d9d9d9',
												padding: '0px 3px' } },
										checkAllNew == "all" ? "全员" : _react2.default.createElement(
											_antd.Tooltip,
											{ title: userIdsNew.map(function (item) {
													return item.realname;
												}).join("、") },
											_react2.default.createElement(
												'div',
												{ className: 'ellsis' },
												userIdsNew.map(function (item) {
													return item.realname;
												}).join("、")
											)
										),
										checkAllNew == "" && userIdsNew.length == 0 ? _react2.default.createElement(
											'span',
											{ style: { color: '#bfbfbf', position: 'absolute', top: '0px', left: '10px' } },
											'\u8BF7\u9009\u62E9'
										) : null,
										_react2.default.createElement(_antd.Button, {
											shape: 'circle',
											style: {
												width: '28px',
												minWidth: '28px',
												height: '28px',
												position: 'absolute', top: '2px', right: '2px',
												fontSize: '18px' },
											onClick: this.handleAdd,
											icon: 'usergroup-add' })
									)
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: "导出类别", className: 'w' },
								getFieldDecorator("type", {
									rules: [{
										required: true,
										message: '请选择'
									}]
								})(_react2.default.createElement(
									_antd.Select,
									{
										placeholder: '\u8BF7\u9009\u62E9',
										className: 'w'
									},
									types.map(function (item, index) {
										return _react2.default.createElement(
											Option,
											{ key: index, value: item.id },
											item.name
										);
									})
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 8 },
							_react2.default.createElement(
								_antd.Form.Item,
								_extends({}, tailFormItemLayout, { className: 'w' }),
								_react2.default.createElement(
									_antd.Button,
									{ type: 'primary', shape: 'round', onClick: this.handleReset },
									'\u91CD\u7F6E'
								)
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ gutter: 24 },
						_react2.default.createElement(
							_antd.Col,
							{ span: 24, className: 'tc mt100' },
							_react2.default.createElement(
								_antd.Spin,
								{ tip: this.state.tip, spinning: this.state.isLoading, delay: 100 },
								_react2.default.createElement(
									_antd.Button,
									{ type: 'primary', size: 'large', onClick: this.handleSearch },
									'\u5BFC\u51FA\u5E76\u5B58\u50A8\u4E3AExcel'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return ByEmail;
}(_react.Component)) || _class) || _class);


var WrappedExcelImport = _antd.Form.create({})(ByEmail);
exports.default = WrappedExcelImport;

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

/***/ })

});
//# sourceMappingURL=48-afa7d4b4bae6ff2924e9.1629092961041.js.map