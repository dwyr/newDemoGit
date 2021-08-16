webpackJsonp([28],{

/***/ 1511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _class3;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _PersonAdd = __webpack_require__(94);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

var _XmglStore = __webpack_require__(1800);

var _XmglStore2 = _interopRequireDefault(_XmglStore);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactZmage = __webpack_require__(1522);

var _reactZmage2 = _interopRequireDefault(_reactZmage);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _echarts = __webpack_require__(345);

var _echarts2 = _interopRequireDefault(_echarts);

var _aliOss = __webpack_require__(232);

var _aliOss2 = _interopRequireDefault(_aliOss);

var _uuid = __webpack_require__(79);

var _download = __webpack_require__(68);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * 施工周报
                                                                                                                                                                                                                             * dangw@bocspce.com
                                                                                                                                                                                                                             * */


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
var client = function client(self) {
	var token = self.state.token;
	// ali-oss v6.x版本的写法

	return new _aliOss2.default({
		accessKeyId: token.access_key_id,
		accessKeySecret: token.access_key_secret,
		stsToken: token.stsToken,
		region: token.region,
		bucket: token.bucket,
		endpoint: token.OSS_ENDPOINT
	});
};

var uploadPath = function uploadPath(path, file) {
	// 上传文件的路径，使用日期命名文件目录
	return (0, _moment2.default)().format('YYYYMMDDHHmmss') + '/' + file.name;
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
var openNotificationWithIcon = function openNotificationWithIcon(type, mess) {
	_antd.notification[type]({
		message: mess,
		description: ''
	});
};
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
var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea;
var RangePicker = _antd.DatePicker.RangePicker;

var EditableCell = function (_React$Component) {
	_inherits(EditableCell, _React$Component);

	function EditableCell() {
		var _ref2;

		var _temp, _this2, _ret;

		_classCallCheck(this, EditableCell);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref2 = EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
			editing: true
		}, _this2.toggleEdit = function () {
			var editing = !_this2.state.editing;
			_this2.setState({ editing: editing }, function () {
				if (editing) {
					_this2.input.focus();
				}
			});
		}, _this2.save = function (e) {
			var _this2$props = _this2.props,
			    record = _this2$props.record,
			    handleSave = _this2$props.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (error && error[e.currentTarget.id]) {
					return;
				}
				delete values["createTime"];
				delete values["planSolveTime"];
				delete values["solveTime"];
				//this.toggleEdit();
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate = function (date, dateString) {
			var _this2$props2 = _this2.props,
			    record = _this2$props2.record,
			    handleSave = _this2$props2.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('createTime')) {
					values["createTime"] = dateString;
				}
				delete values["planSolveTime"];
				delete values["solveTime"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate2 = function (date, dateString) {
			var _this2$props3 = _this2.props,
			    record = _this2$props3.record,
			    handleSave = _this2$props3.handleSave;

			_this2.form.validateFields(function (error, values) {
				var keyIndex = record['state'] == 1 ? "planSolveTime" : "solveTime";
				if (values.hasOwnProperty(keyIndex)) {
					values[keyIndex] = dateString;
				}
				var keyIndex2 = keyIndex == "planSolveTime" ? "solveTime" : "planSolveTime";
				delete values["createTime"];
				delete values[keyIndex2];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveState = function (e) {
			var _this2$props4 = _this2.props,
			    record = _this2$props4.record,
			    handleSave = _this2$props4.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (error && error[e.currentTarget.id]) {
					return;
				}
				if (values.hasOwnProperty('state')) {
					values["state"] = Number(e);
				}
				delete values["createTime"];
				delete values["planSolveTime"];
				delete values["solveTime"];
				//this.toggleEdit();
				handleSave(_extends({}, record, values));
			});
		}, _this2.disabledStartDate = function (startValue) {
			var record = _this2.props.record;

			var keyIndex = record['state'] == 1 ? "planSolveTime" : "solveTime";
			if (!startValue || !record[keyIndex]) {
				return false;
			}
			return startValue.valueOf() > record[keyIndex].valueOf();
		}, _this2.disabledEndDate = function (endValue) {
			var record = _this2.props.record;

			if (!endValue || !record.createTime) {
				return false;
			}
			return endValue.valueOf() <= record.createTime.valueOf();
		}, _this2.renderCell = function (form) {
			_this2.form = form;
			var _this2$props5 = _this2.props,
			    children = _this2$props5.children,
			    dataIndex = _this2$props5.dataIndex,
			    record = _this2$props5.record,
			    title = _this2$props5.title,
			    handleDelete = _this2$props5.handleDelete;
			var editing = _this2.state.editing;

			if (dataIndex == 'dataIndex') {
				// 序号
				return true ? _react2.default.createElement(
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
						{ className: 'pr', style: {
								width: '95px',
								margin: '0 auto'
							} },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
									return handleDelete(record.id);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									width: '35px',
									color: '#F17E7E',
									fontSize: '18px',
									position: 'absolute',
									left: '-8px',
									top: '8px'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(
							'div',
							{
								className: 'editable-cell-value-wrap',
								style: {
									minHeight: '31px'
								}
							},
							record[dataIndex]
						)
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
								fontSize: '18px',
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
			} else if (dataIndex == 'createTime') {
				// 发现时间
				// 日期时间戳转换字符串
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex], "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						style: { width: '120px' },
						format: 'YYYY-MM-DD',
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.saveDate
						//设置开始日期
						//disabledDate={this.disabledStartDate}
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
						//onClick={this.toggleEdit}
					},
					children
				);
			} else if (dataIndex == 'state') {
				//  问题状态
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex].toString()
					})(_react2.default.createElement(
						_antd.Select,
						{
							ref: function ref(node) {
								return _this2.input = node;
							},
							onChange: _this2.saveState },
						_react2.default.createElement(
							Option,
							{ value: '1' },
							'\u53D1\u73B0\u95EE\u9898'
						),
						_react2.default.createElement(
							Option,
							{ value: '2' },
							'\u6574\u6539\u5B8C\u6210'
						)
					))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
						//onClick={this.toggleEdit}
					},
					children
				);
			} else if (dataIndex == 'planSolveTime') {
				//  解决时间
				var keyIndex = record['state'] == 1 ? "planSolveTime" : "solveTime";
				// 问题状态联动
				var numberTostring = record[keyIndex] == null ? "" : record[keyIndex];
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(keyIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[keyIndex] == null ? "" : (0, _moment2.default)(numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						style: { width: '120px' },
						format: 'YYYY-MM-DD',
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.saveDate2
						//设置结束不能选择的时间
						//disabledDate={this.disabledEndDate}
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
						//onClick={this.toggleEdit}
					},
					children
				);
			} else if (dataIndex == 'reviewer') {
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
							return _this2.input = node;
						},
						onChange: _this2.save,
						onBlur: _this2.save
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
						//onClick={this.toggleEdit}
					},
					children
				);
			} else {
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(TextArea, { rows: 2,
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.save,
						onBlur: _this2.save
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
						//onClick={this.toggleEdit}
					},
					children
				);
			}
		}, _temp), _possibleConstructorReturn(_this2, _ret);
	}

	// //日期格式保存

	// 状态

	//设置开始日期不能选择的时间

	//设置结束不能选择的时间


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

var EditableTagGroup = function (_React$Component2) {
	_inherits(EditableTagGroup, _React$Component2);

	function EditableTagGroup(props) {
		_classCallCheck(this, EditableTagGroup);

		var _this3 = _possibleConstructorReturn(this, (EditableTagGroup.__proto__ || Object.getPrototypeOf(EditableTagGroup)).call(this, props));

		_this3.handleClose = function (removedTag) {
			var tags = _this3.state.tags.filter(function (tag) {
				return tag !== removedTag;
			});
			_this3.setState({ tags: tags });
		};

		_this3.showInput = function () {
			_this3.setState({ inputVisible: true }, function () {
				return _this3.input.focus();
			});
		};

		_this3.handleInputChange = function (e) {
			_this3.setState({ inputValue: e.target.value });
		};

		_this3.handleInputConfirm = function () {
			var inputValue = _this3.state.inputValue;

			if (inputValue !== "" && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(inputValue)) {
				_antd.message.warn("请输入正确的邮箱格式");
				return false;
			}
			var tags = _this3.state.tags;

			if (inputValue && tags.indexOf(inputValue) === -1) {
				tags = [].concat(_toConsumableArray(tags), [inputValue]);
			}
			_this3.setState({
				tags: tags,
				inputVisible: false,
				inputValue: ''
			}, function () {
				_this3.props.updateState(tags);
			});
		};

		_this3.saveInputRef = function (input) {
			return _this3.input = input;
		};

		_this3.state = {
			tags: [],
			inputVisible: false,
			inputValue: ''
		};
		return _this3;
	}

	_createClass(EditableTagGroup, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				tags: nextProps.data
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    tags = _state.tags,
			    inputVisible = _state.inputVisible,
			    inputValue = _state.inputValue;


			return _react2.default.createElement(
				'div',
				null,
				tags.map(function (tag, index) {
					var isLongTag = tag.length > 20;
					var tagElem = _react2.default.createElement(
						_antd.Tag,
						{ key: tag, closable: index !== 0, onClose: function onClose() {
								return _this4.handleClose(tag);
							} },
						isLongTag ? tag.slice(0, 20) + '...' : tag
					);
					return isLongTag ? _react2.default.createElement(
						_antd.Tooltip,
						{ title: tag, key: tag },
						tagElem
					) : tagElem;
				}),
				inputVisible && _react2.default.createElement(_antd.Input, {
					ref: this.saveInputRef,
					type: 'email',
					size: 'small',
					style: { width: 200 },
					value: inputValue,
					onChange: this.handleInputChange,
					onBlur: this.handleInputConfirm,
					onPressEnter: this.handleInputConfirm
				}),
				!inputVisible && _react2.default.createElement(
					_antd.Tag,
					{ onClick: this.showInput, style: { background: '#fff', borderStyle: 'dashed' } },
					_react2.default.createElement(_antd.Icon, { type: 'plus' }),
					' \u6DFB\u52A0\u6536\u4EF6\u4EBA\u5730\u5740'
				)
			);
		}
	}]);

	return EditableTagGroup;
}(_react2.default.Component);

var Demo = (0, _mobxReact.observer)(_class3 = function (_React$Component3) {
	_inherits(Demo, _React$Component3);

	function Demo(props) {
		_classCallCheck(this, Demo);

		var _this5 = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

		_this5.uploadImg = function () {
			var _this = _this5;
			var newReport = JSON.parse(JSON.stringify(_this.store.newReport));
			var personDates = newReport.personDates;

			var isPerson = personDates == null ? [] : personDates;
			if (isPerson.length == 0) {
				var _newReport = JSON.parse(JSON.stringify(_this.store.newReport));
				var emailUserIds = _newReport.emailUserIds;

				var params = {
					report: Object.assign(_newReport, {
						emailUserIds: emailUserIds == null ? [] : emailUserIds.map(function (item) {
							return item.userId;
						}),
						qualities: _newReport.qualities == null ? [] : _newReport.qualities.map(function (item) {
							delete item.dataIndex;
							return item;
						}),
						attachments: _newReport.attachments == null ? [] : _newReport.attachments.map(function (item) {
							return Object.assign({
								fileId: item.fileId,
								fileName: item.fileName,
								filePath: item.filePath
							});
						}),
						nextAttachments: _newReport.nextAttachments == null ? [] : _newReport.nextAttachments.map(function (item) {
							return Object.assign({
								fileId: item.fileId,
								fileName: item.fileName,
								filePath: item.filePath
							});
						})
					}),
					imgUrl: ""
				};
				_this.store.downloadReport(params).then(function (res) {
					var id = res.id;

					_this5.getReportUrl(id);
				});
			} else {
				var echarts_instance = _this.echarts_react.getEchartsInstance();
				var base64 = echarts_instance.getDataURL();

				//将base64转换为文件对象
				var dataURLtoFile = function dataURLtoFile(dataurl, filename) {
					var arr = dataurl.split(',');
					var mime = arr[0].match(/:(.*?);/)[1];
					var bstr = atob(arr[1]);
					var n = bstr.length;
					var u8arr = new Uint8Array(n);
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n);
					}
					//转换成file对象
					return new File([u8arr], filename, { type: mime });
					//转换成成blob对象
					// return new Blob([u8arr],{type:mime});
				};

				var myfile2 = dataURLtoFile(base64, '施工周报.png');
				var formData2 = new FormData();
				formData2.append('newFile', myfile2);
				var reader2 = new FileReader();
				reader2.readAsDataURL(myfile2);
				reader2.onloadend = function () {
					// 使用ossupload覆盖默认的上传方法
					UploadToOss(_this, '上传路径oss配置信息', myfile2).then(function (data) {
						var host = _this.state.host;

						_this.setState({
							imgUrl: host + data.name
						}, function () {
							var newReport = JSON.parse(JSON.stringify(_this.store.newReport));
							var emailUserIds = newReport.emailUserIds;

							var params = {
								report: Object.assign(newReport, {
									emailUserIds: emailUserIds == null ? [] : emailUserIds.map(function (item) {
										return item.userId;
									}),
									qualities: newReport.qualities == null ? [] : newReport.qualities.map(function (item) {
										delete item.dataIndex;
										return item;
									}),
									attachments: newReport.attachments == null ? [] : newReport.attachments.map(function (item) {
										return Object.assign({
											fileId: item.fileId,
											fileName: item.fileName,
											filePath: item.filePath
										});
									}),
									nextAttachments: newReport.nextAttachments == null ? [] : newReport.nextAttachments.map(function (item) {
										return Object.assign({
											fileId: item.fileId,
											fileName: item.fileName,
											filePath: item.filePath
										});
									})
								}),
								imgUrl: _this.state.imgUrl
							};
							_this.store.downloadReport(params).then(function (res) {
								var id = res.id;

								_this5.getReportUrl(id);
							});
						});
					});
				};
			}
		};

		_this5.getReportUrl = function (id) {
			var _this = _this5;
			var params = {
				id: id
			};
			_this5.setState({
				isLoading: true
			});
			var newReport = JSON.parse(JSON.stringify(_this.store.newReport));
			var projectName = newReport.projectName,
			    beginTime = newReport.beginTime,
			    endTime = newReport.endTime;

			var pdfName = projectName + (0, _moment2.default)(beginTime).format("YYYY-MM-DD") + "到" + (0, _moment2.default)(endTime).format("YYYY-MM-DD") + "施工情况汇报";

			_this.timer = setInterval(function () {
				_this.store.getReportUrl(params).then(function (res) {
					var url = res.url;

					if (url !== null && url !== "") {
						_this5.setState({
							isLoading: false
						});
						(0, _download.downloadFile)(url, pdfName); // 直接下载pdf
						clearInterval(_this.timer);
					}
				});
			}, 3000);
		};

		_this5.download = function () {
			var _this = _this5;
			html2canvas(document.body, {
				useCORS: true,
				allowTaint: true,
				scale: 2 // 提升画面质量，但是会增加文件大小
			}).then(function (canvas) {
				var contentWidth = canvas.width;
				var contentHeight = canvas.height;
				//一页pdf显示html页面生成的canvas高度;
				var pageHeight = contentWidth / 592.28 * 841.89;
				//未生成pdf的html页面高度
				var leftHeight = contentHeight;
				//页面偏移
				var position = 0;
				//a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
				var imgWidth = 595.28;
				var imgHeight = 592.28 / contentWidth * contentHeight;
				var pageData = canvas.toDataURL('image/jpeg', 1.0);
				var pdf = new jsPDF('', 'pt', 'a4');
				//有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
				//当内容未超过pdf一页显示的范围，无需分页
				if (leftHeight < pageHeight) {
					pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
				} else {
					while (leftHeight > 0) {
						pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
						leftHeight -= pageHeight;
						position -= 841.89;
						//避免添加空白页
						if (leftHeight > 0) {
							pdf.addPage();
						}
					}
				}
				pdf.save('施工周报.pdf');

				//需求一：将生成好的pdf上传至阿里云oss
				//将base64转换为文件对象
				var dataURLtoFile = function dataURLtoFile(dataurl, filename) {
					var arr = dataurl.split(',');
					var mime = arr[0].match(/:(.*?);/)[1];
					var bstr = atob(arr[1]);
					var n = bstr.length;
					var u8arr = new Uint8Array(n);
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n);
					}
					//转换成file对象
					return new File([u8arr], filename, { type: mime });
					//转换成成blob对象
					// return new Blob([u8arr],{type:mime});
				};
				// 将pdf输入为base格式的字符串
				var buffer = pdf.output("datauristring");
				// 将base64格式的字符串转换为file文件
				var myfile = dataURLtoFile(buffer, '施工周报.pdf');
				var formData = new FormData();
				formData.append('newFile', myfile);
				// 生成成功后直传oss
				var reader = new FileReader();
				reader.readAsDataURL(myfile);
				reader.onloadend = function () {
					// 使用ossupload覆盖默认的上传方法
					UploadToOss(_this, '上传路径oss配置信息', myfile).then(function (data) {
						var host = _this.state.host;

						_this.setState({
							pdfUrl: host + data.name
						});
					});
				};

				//需求二：将截图上传至阿里云oss
				var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url 　
				// 生成成功后直传oss
				var myfile2 = dataURLtoFile(imgUri, '施工周报.png');
				var formData2 = new FormData();
				formData2.append('newFile', myfile2);
				var reader2 = new FileReader();
				reader2.readAsDataURL(myfile2);
				reader2.onloadend = function () {
					// 使用ossupload覆盖默认的上传方法
					UploadToOss(_this, '上传路径oss配置信息', myfile2).then(function (data) {
						var host = _this.state.host;

						_this.setState({
							imgUrl: host + data.name
						});
					});
				};
			});
		};

		_this5.handleAttment = function (type, params) {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
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
			_this5.store.newReport = Object.assign(newReport, _defineProperty({}, type, Object.assign([], arr)));
		};

		_this5.handAsync = function (type) {
			_this5.setState(_defineProperty({}, type + 'loading', true), function () {
				_this5.store.getNewReport().then(function (res) {
					if (res) {
						var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
						_this5.store.newReport = Object.assign(newReport, _defineProperty({}, type, res[type]));
					}
					_this5.setState(_defineProperty({}, type + 'loading', false));
				});
			});
		};

		_this5.handleAdd = function () {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			var qualities = newReport.qualities;

			var primaryData = {
				"id": "",
				"question": "",
				"createTime": null,
				"state": 1,
				"solveTime": null,
				"handler": "",
				"reviewer": "",
				"remark": "",
				"updateTime": null,
				"planSolveTime": null
			};
			var newData = Object.assign(primaryData, { dataIndex: qualities.length + 1, id: (0, _uuid.v4)() });
			_this5.store.newReport = Object.assign(newReport, {
				qualities: [].concat(_toConsumableArray(qualities), [newData])
			});
		};

		_this5.handleDelete = function (id) {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			var qualities = newReport.qualities;

			var newQualities = qualities.filter(function (item) {
				return item.id !== id;
			});
			_this5.store.newReport = Object.assign(newReport, {
				qualities: newQualities.map(function (vitem, vindex) {
					return Object.assign(vitem, { dataIndex: vindex + 1 });
				})
			});
		};

		_this5.updateState = function (type, data) {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			_this5.store.newReport = Object.assign(newReport, _defineProperty({}, type, Object.assign([], data)));
		};

		_this5.onChangeDate = function (type, dates, dateStrings) {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			if (type == "range") {
				_this5.store.newReport = Object.assign(newReport, {
					"beginTime": (0, _moment2.default)(dateStrings[0]).valueOf(),
					"endTime": (0, _moment2.default)(dateStrings[1]).valueOf()
				});
				_this5.store.getNewReport().then(function (res) {
					if (res) {
						_this5.store.newReport = Object.assign({}, {
							"projectId": res.projectId,
							"projectName": res.projectName,
							"beginTime": res.beginTime,
							"endTime": res.endTime,
							"nextBeginTime": res.nextBeginTime,
							"nextEndTime": res.nextEndTime,
							"keyIssues": res.keyIssues == null ? "" : res.keyIssues,
							"personDates": res.personDates == null ? [] : res.personDates,
							"materialApproach": res.materialApproach == null ? "" : res.materialApproach,
							"materials": res.materials == null ? [] : res.materials,
							"attachments": res.attachments == null ? [] : res.attachments,
							"nextAttachments": res.nextAttachments == null ? [] : res.nextAttachments,
							"zplanTasks": res.zplanTasks == null ? [] : res.zplanTasks,
							"nextZplanTasks": res.nextZplanTasks == null ? [] : res.nextZplanTasks,
							"qualities": res.qualities == null ? [] : res.qualities.map(function (item, index) {
								return Object.assign(item, { dataIndex: index + 1 });
							}),
							"positions": res.positions == null ? [] : res.positions,
							"emails": res.emails == null ? [] : res.emails,
							"emailUserIds": res.emailUserIds == null ? [] : res.emailUserIds
						});
					}
				});
			} else if (type == "nextpicker") {
				_this5.store.newReport = Object.assign(newReport, {
					"nextBeginTime": (0, _moment2.default)(dateStrings[0]).valueOf(),
					"nextEndTime": (0, _moment2.default)(dateStrings[1]).valueOf()
				});
				_this5.store.getNewReport().then(function (res) {
					if (res) {
						var _newReport2 = JSON.parse(JSON.stringify(_this5.store.newReport));
						_this5.store.newReport = Object.assign(_newReport2, {
							nextZplanTasks: res["nextZplanTasks"]
						});
					}
				});
			}
		};

		_this5.onChange = function (type, e) {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			_this5.store.newReport = Object.assign(newReport, _defineProperty({}, type, e.target.value));
		};

		_this5.handleBzSave = function (row) {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			var zplanTasks = newReport.zplanTasks;
			var index = zplanTasks.findIndex(function (item) {
				return row.id === item.id;
			});
			var item = zplanTasks[index];
			zplanTasks.splice(index, 1, _extends({}, item, {
				"remark": row.remark
			}));
			_this5.store.newReport = Object.assign(newReport, _defineProperty({}, 'zplanTasks', zplanTasks));
		};

		_this5.handleSave = function (row) {
			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			var zplanTasks = newReport.qualities;
			var index = zplanTasks.findIndex(function (item) {
				return row.dataIndex === item.dataIndex;
			});
			var item = zplanTasks[index];
			zplanTasks.splice(index, 1, _extends({}, item, row));
			_this5.store.newReport = Object.assign(newReport, {
				"qualities": zplanTasks
			});
		};

		_this5.sendReport = function () {
			var _this = _this5;
			var imgUrl = _this5.state.imgUrl;

			var newReport = JSON.parse(JSON.stringify(_this5.store.newReport));
			var emails = newReport.emails,
			    emailUserIds = newReport.emailUserIds,
			    personDates = newReport.personDates;

			var isemailUserIds = emailUserIds == null ? [] : emailUserIds;
			var isemails = emails == null ? [] : emails;
			// 选择收件人
			if (isemailUserIds.length == 0 && isemails.length == 0) {
				openNotificationWithIcon('warn', "请先选择邮件收件人");
				return false;
			}
			var isPerson = personDates == null ? [] : personDates;
			if (isPerson.length == 0) {
				var params = {
					report: Object.assign(newReport, {
						emailUserIds: emailUserIds == null ? [] : emailUserIds.map(function (item) {
							return item.userId;
						}),
						qualities: newReport.qualities == null ? [] : newReport.qualities.map(function (item) {
							delete item.dataIndex;
							return item;
						}),
						attachments: newReport.attachments == null ? [] : newReport.attachments.map(function (item) {
							return Object.assign({
								fileId: item.fileId,
								fileName: item.fileName,
								filePath: item.filePath
							});
						}),
						nextAttachments: newReport.nextAttachments == null ? [] : newReport.nextAttachments.map(function (item) {
							return Object.assign({
								fileId: item.fileId,
								fileName: item.fileName,
								filePath: item.filePath
							});
						})
					}),
					imgUrl: imgUrl
				};
				_this5.store.sendReportEmail(params).then(function (res) {
					if (res == true) {
						_antd.message.success("邮件发送成功");
					}
				});
			} else {
				if (_this5.state.imgUrl == "") {
					// 未保存pdf
					var echarts_instance = _this.echarts_react.getEchartsInstance();
					var base64 = echarts_instance.getDataURL();

					//将base64转换为文件对象
					var dataURLtoFile = function dataURLtoFile(dataurl, filename) {
						var arr = dataurl.split(',');
						var mime = arr[0].match(/:(.*?);/)[1];
						var bstr = atob(arr[1]);
						var n = bstr.length;
						var u8arr = new Uint8Array(n);
						while (n--) {
							u8arr[n] = bstr.charCodeAt(n);
						}
						//转换成file对象
						return new File([u8arr], filename, { type: mime });
						//转换成成blob对象
						// return new Blob([u8arr],{type:mime});
					};

					var myfile2 = dataURLtoFile(base64, '施工周报.png');
					var formData2 = new FormData();
					formData2.append('newFile', myfile2);
					var reader2 = new FileReader();
					reader2.readAsDataURL(myfile2);
					reader2.onloadend = function () {
						// 使用ossupload覆盖默认的上传方法
						UploadToOss(_this, '上传路径oss配置信息', myfile2).then(function (data) {
							var host = _this.state.host;

							_this.setState({
								imgUrl: host + data.name
							}, function () {
								var newReport = JSON.parse(JSON.stringify(_this.store.newReport));
								var emailUserIds = newReport.emailUserIds;

								var params = {
									report: Object.assign(newReport, {
										emailUserIds: emailUserIds == null ? [] : emailUserIds.map(function (item) {
											return item.userId;
										}),
										qualities: newReport.qualities == null ? [] : newReport.qualities.map(function (item) {
											delete item.dataIndex;
											return item;
										}),
										attachments: newReport.attachments == null ? [] : newReport.attachments.map(function (item) {
											return Object.assign({
												fileId: item.fileId,
												fileName: item.fileName,
												filePath: item.filePath
											});
										}),
										nextAttachments: newReport.nextAttachments == null ? [] : newReport.nextAttachments.map(function (item) {
											return Object.assign({
												fileId: item.fileId,
												fileName: item.fileName,
												filePath: item.filePath
											});
										})
									}),
									imgUrl: _this.state.imgUrl
								};
								_this.store.sendReportEmail(params).then(function (res) {
									if (res == true) {
										_antd.message.success("邮件发送成功");
									}
								});
							});
						});
					};
				} else {
					//已生成pdf
					var _params = {
						report: Object.assign(newReport, {
							emailUserIds: emailUserIds == null ? [] : emailUserIds.map(function (item) {
								return item.userId;
							}),
							qualities: newReport.qualities == null ? [] : newReport.qualities.map(function (item) {
								delete item.dataIndex;
								return item;
							}),
							attachments: newReport.attachments == null ? [] : newReport.attachments.map(function (item) {
								return Object.assign({
									fileId: item.fileId,
									fileName: item.fileName,
									filePath: item.filePath
								});
							}),
							nextAttachments: newReport.nextAttachments == null ? [] : newReport.nextAttachments.map(function (item) {
								return Object.assign({
									fileId: item.fileId,
									fileName: item.fileName,
									filePath: item.filePath
								});
							})
						}),
						imgUrl: imgUrl
					};
					_this5.store.sendReportEmail(_params).then(function (res) {
						if (res == true) {
							_antd.message.success("邮件发送成功");
						}
					});
				}
			}
		};

		_this5.store = new _XmglStore2.default();
		_this5.state = {
			person: [], // 人员
			token: {
				access_key_id: '', // oss的key_id
				access_key_secret: '', // oss的secret
				stsToken: '',
				region: 'oss-cn-beijing', // oss的region
				bucket: 'xinlj', // oss的bucket
				OSS_ENDPOINT: 'oss-cn-beijing.aliyuncs.com' // 自己oss服务器的配置信息
			},
			host: 'https://xinlj.oss-cn-beijing.aliyuncs.com/', // 阿里云host
			pdfUrl: '', // 生成pdf地址
			imgUrl: '', // 生成截图地址
			zplanTasksloading: false,
			nextZplanTasksloading: false,
			tip: '正在生成请稍等',
			isLoading: false
		};
		_this5.setTextInputRef = function (element) {
			_this5.textInput = element;
		};
		return _this5;
	}

	_createClass(Demo, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this6 = this;

			var search = this.props.location.search;
			var projectId = _url2.default.parse(search, true).query.projectId;
			var parojectName = _url2.default.parse(search, true).query.name;
			if (projectId !== undefined) {
				var newReport = JSON.parse(JSON.stringify(this.store.newReport));
				this.store.newReport = Object.assign(newReport, {
					"projectId": projectId,
					"projectName": parojectName
				});
				localStorage.setItem("projectId", projectId);
				localStorage.setItem("projectName", parojectName);
			} else {
				var _newReport3 = JSON.parse(JSON.stringify(this.store.newReport));
				this.store.newReport = Object.assign(_newReport3, {
					"projectId": localStorage.getItem("projectId"),
					"projectName": localStorage.getItem("projectName")
				});
				this.props.form.setFieldsValue({
					"projectName": localStorage.getItem("projectName")
				});
			}
			this.store.getRole().then(function (res) {
				_this6.setState({
					person: res.body
				});
			});
			// 获取大文件上传sts
			this.store.getSts().then(function (res) {
				var str = typeof res == "string" ? JSON.parse(res) : res;
				if (str) {
					var token = JSON.parse(JSON.stringify(_this6.state.token));
					_this6.setState({
						token: Object.assign(token, {
							access_key_id: str.accessKeyId, // oss的key_id
							access_key_secret: str.accessKeySecret, // oss的secret
							stsToken: str.securityToken
						})
					});
				}
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.timer);
		}

		// 上传图片


		// 间隔3秒获取pdf地址


		// 该函数暂不使用


		// 斑马


		// 一键同步


		// 增加一行


		// 删除一行


		// 斑马表格


		// 质量安全表格


		// 发送邮件

	}, {
		key: 'render',
		value: function render() {
			var _this7 = this;

			var pathname = this.props.match.path;
			var ossData = this.store.ossData;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: { span: 4 },
				wrapperCol: { span: 18 }
			};
			var rangeConfig = {
				rules: [{ type: 'array', required: false, message: 'Please select time!' }]
			};
			var materColumns = [{
				title: '进场日期',
				dataIndex: 'deliveryTime',
				key: 'deliveryTime',
				align: 'center'
			}, {
				title: '材料名称',
				dataIndex: 'name',
				key: 'name',
				align: 'center'
			}, {
				title: '数量',
				dataIndex: 'totalNum',
				key: 'totalNum',
				align: 'center'
			}, {
				title: '单位',
				dataIndex: 'units',
				key: 'units',
				align: 'center'
			}];
			var columns = [{
				title: '开始时间',
				dataIndex: 'beginTime',
				key: 'beginTime',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						(0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '截止时间',
				dataIndex: 'endTime',
				key: 'endTime',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						(0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '任务名称',
				dataIndex: 'name',
				key: 'name',
				align: 'center'
			}, {
				title: '阶段完成率',
				dataIndex: 'rate',
				key: 'rate',
				align: 'center'
			}, {
				title: '备注',
				dataIndex: 'remark',
				key: 'remark',
				align: 'center',
				editable: true
			}];
			var nextColumns = [{
				title: '开始时间',
				dataIndex: 'beginTime',
				key: 'beginTime',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						(0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '截止时间',
				dataIndex: 'endTime',
				key: 'endTime',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						(0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '任务名称',
				dataIndex: 'name',
				key: 'name',
				align: 'center'
			}];
			var massColumns = [{
				title: '序号',
				dataIndex: 'dataIndex',
				key: 'dataIndex',
				align: 'center',
				editable: true,
				width: '95px'
			}, {
				title: '发现时间',
				dataIndex: 'createTime',
				key: 'createTime',
				align: 'center',
				width: '120px',
				editable: true,
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						(0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '问题描述',
				dataIndex: 'question',
				key: 'question',
				align: 'center',
				width: '15%',
				editable: true
			}, {
				title: '处理方案',
				dataIndex: 'remark',
				key: 'remark',
				align: 'center',
				width: '15%',
				editable: true
			}, {
				title: '问题状态',
				dataIndex: 'state',
				key: 'state',
				align: 'center',
				width: '15%',
				editable: true,
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						record.state == "1" ? "发现问题" : "整改完成"
					);
				}
			}, {
				title: '计划/实际解决时间',
				dataIndex: 'planSolveTime',
				key: 'planSolveTime',
				align: 'center',
				width: '120px',
				editable: true,
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						record.state == "1" ? (0, _moment2.default)(record.planSolveTime).format("YYYY-MM-DD") : (0, _moment2.default)(record.solveTime).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '验收人',
				dataIndex: 'reviewer',
				key: 'reviewer',
				align: 'center',
				width: '15%',
				editable: true
			}];
			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var colu = columns.map(function (col) {
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
							handleSave: _this7.handleBzSave
						};
					}
				});
			});

			var massColu = massColumns.map(function (col) {
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
							handleSave: _this7.handleSave,
							handleDelete: _this7.handleDelete
						};
					}
				});
			});
			var newReport = this.store.newReport;

			var fields = mobx.toJS(newReport);
			var option = {
				title: {},
				tooltip: {},
				backgroundColor: '#FFF',
				xAxis: {
					type: 'category',
					axisTick: {
						alignWithLabel: true
					},
					data: fields.personDates.map(function (item) {
						return (0, _moment2.default)(item.date).format("YYYYMMDD");
					})
				},
				yAxis: {
					axisTick: { //y轴刻度线
						show: false
					},
					axisLine: { //y轴
						show: false
					}
				},
				series: [{
					name: '人员情况',
					type: 'line',
					// 显示数值
					itemStyle: {
						normal: {
							label: {
								show: true,
								textStyle: {
									fontSize: 22
								}
							}
						}
					},
					data: fields.personDates.map(function (item) {
						return item.count;
					}),
					sampling: 'average',
					showAllSymbol: true,
					areaStyle: {
						normal: {
							//颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
							color: new _echarts2.default.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgb(255,153,106, 0.89)'
							}, {
								offset: .34,
								color: 'rgb(255,153,106, 0.45)'
							}, {
								offset: 1,
								color: 'rgb(255,153,106, 0.00)'
							}])
						}
					} //区域颜色渐变
				}]
			};
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
							{ href: '#/bpm/construction' },
							'\u65BD\u5DE5\u8FC7\u7A0B'
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							'\u5468\u62A5'
						)
					)
				),
				_react2.default.createElement(
					_antd.Form,
					_extends({ className: 'mt10', id: 'demo' }, formItemLayout, { onSubmit: this.handleSubmit, style: { padding: '15px 15px 50px' } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u9879\u76EE\u540D\u79F0', ref: this.setTextInputRef, className: 'personchart' },
						getFieldDecorator('projectName', {
							initialValue: fields.projectName
						})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', onChange: this.onChange.bind(this, 'projectName'),
							className: 'mb10' }))
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u9009\u62E9\u65E5\u671F' },
						getFieldDecorator('range-picker', rangeConfig)(_react2.default.createElement(
							'div',
							{ className: 'mb10' },
							_react2.default.createElement(RangePicker, { onChange: this.onChangeDate.bind(this, 'range') })
						))
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u91CD\u70B9\u4E8B\u9879' },
						getFieldDecorator('keyIssues', {
							initialValue: fields.keyIssues == null ? "" : fields.keyIssues
						})(_react2.default.createElement(TextArea, {
							className: 'mb10',
							placeholder: '\u8BF7\u8F93\u5165',
							onChange: this.onChange.bind(this, 'keyIssues'),
							autoSize: { minRows: 2, maxRows: 6 }
						}))
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u4EBA\u5458\u8FDB\u573A' },
						fields.personDates.length > 0 ? _react2.default.createElement(_echartsForReact2.default, {
							ref: function ref(e) {
								_this7.echarts_react = e;
							},
							notMerge: true,
							lazyUpdate: true,
							option: option }) : null
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u6750\u6599\u8FDB\u573A' },
						getFieldDecorator('materialApproach', {
							initialValue: fields.materialApproach == null ? "" : fields.materialApproach,
							rules: [{ required: false, message: '请输入材料进场' }]
						})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u63CF\u8FF0\u6750\u6599\u5DF2\u5230\u573A\u60C5\u51B5\u548C\u5269\u4F59\u6750\u6599\u5230\u573A\u8BA1\u5212',
							onChange: this.onChange.bind(this, 'materialApproach'), className: 'mb10' }))
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ wrapperCol: { span: 18, offset: 4 } },
						_react2.default.createElement(
							_antd.ConfigProvider,
							{ renderEmpty: customizeRenderEmpty },
							_react2.default.createElement(_antd.Table, { pagination: false,
								columns: materColumns,
								size: "middle",
								dataSource: fields.materials })
						)
					),
					_react2.default.createElement(_antd.Form.Item, { label: '\u672C\u9636\u6BB5\u8BA1\u5212\u53CA\u5B8C\u6210\u60C5\u51B5', colon: false, className: 'nowStage' }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u6591\u9A6C\u8FDB\u5EA6\u56FE', colon: false },
						getFieldDecorator('attachments', {})(_react2.default.createElement(_MyUpload2.default, {
							length: 1,
							saveAttachment: this.handleAttment.bind(this, 'attachments'),
							disabled: false,
							multiple: true,
							listType: 'picture-card',
							ossData: mobx.toJS(ossData),
							fileList: fields.attachments == null ? [] : fields.attachments
						}))
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u4EFB\u52A1\u5B8C\u6210\u60C5\u51B5', colon: false },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'link', onClick: this.handAsync.bind(this, 'zplanTasks') },
							'\u4E00\u952E\u540C\u6B65'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ wrapperCol: { span: 18, offset: 4 } },
						_react2.default.createElement(
							_antd.ConfigProvider,
							{ renderEmpty: customizeRenderEmpty },
							_react2.default.createElement(_antd.Table, {
								components: components,
								rowClassName: function rowClassName() {
									return 'editable-row';
								},
								className: 'mt10',
								pagination: false,
								columns: colu,
								size: "middle",
								loading: this.state.zplanTasksloading,
								dataSource: fields.zplanTasks
							})
						)
					),
					_react2.default.createElement(_antd.Form.Item, { label: '\u4E0B\u9636\u6BB5\u8BA1\u5212', colon: false, className: 'nextStage' }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u9009\u62E9\u65E5\u671F' },
						getFieldDecorator('nextpicker', rangeConfig)(_react2.default.createElement(
							'div',
							{ className: 'mb10' },
							_react2.default.createElement(RangePicker, { onChange: this.onChangeDate.bind(this, 'nextpicker') })
						))
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u6591\u9A6C\u8FDB\u5EA6\u56FE', colon: false },
						_react2.default.createElement(_MyUpload2.default, {
							length: 1,
							saveAttachment: this.handleAttment.bind(this, 'nextAttachments'),
							disabled: false,
							multiple: true,
							listType: 'picture-card',
							ossData: mobx.toJS(ossData),
							fileList: fields.nextAttachments == null ? [] : fields.nextAttachments
						})
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '\u4EFB\u52A1\u8BA1\u5212\u60C5\u51B5', colon: false },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'link', onClick: this.handAsync.bind(this, 'nextZplanTasks') },
							'\u4E00\u952E\u540C\u6B65'
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ wrapperCol: { span: 10, offset: 4 } },
						_react2.default.createElement(
							_antd.ConfigProvider,
							{ renderEmpty: customizeRenderEmpty },
							_react2.default.createElement(_antd.Table, { className: 'mt10',
								pagination: false,
								columns: nextColumns,
								size: "middle",
								loading: this.state.nextZplanTasksloading,
								dataSource: fields.nextZplanTasks })
						)
					),
					_react2.default.createElement(_antd.Form.Item, { label: '\u8D28\u91CF\u5B89\u5168\u95EE\u9898\u53CA\u5904\u7406\u65B9\u6848', colon: false, className: 'nextStage' }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ wrapperCol: { span: 18, offset: 4 } },
						_react2.default.createElement(
							_antd.ConfigProvider,
							{ renderEmpty: customizeRenderEmpty },
							_react2.default.createElement(_antd.Table, {
								components: components,
								rowClassName: function rowClassName() {
									return 'editable-row';
								},
								className: 'mt10',
								pagination: false,
								columns: massColu,
								dataSource: fields.qualities,
								size: "middle"
							})
						),
						_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
							style: { cursor: 'pointer', margin: '10px 0', color: '#4BA4BE', fontSize: '22px' },
							type: 'plus-circle' })
					),
					_react2.default.createElement(_antd.Form.Item, { label: '\u5B9A\u70B9\u7167\u7247', colon: false, className: 'nextStage' }),
					fields.positions.map(function (item, index) {
						return _react2.default.createElement(
							'div',
							{ key: index },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u4F4D\u7F6E\u70B9\u540D\u79F0', colon: false },
								_react2.default.createElement(_antd.Input, { value: item.name, style: { width: '250px' }, disabled: true })
							),
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u4F4D\u7F6E\u70B9\u7167\u7247', colon: false },
								_react2.default.createElement(
									'div',
									null,
									item.attachments.length > 0 ? item.attachments.map(function (v, vindex) {
										return _react2.default.createElement(
											'span',
											{ className: 'fl mr10',
												key: 'attc' + vindex,
												style: { display: 'inlineBlock', textAlign: 'center' } },
											_react2.default.createElement(
												'p',
												null,
												v.dateTime == 0 || v.dateTime == null ? "" : (0, _moment2.default)(v.dateTime).format("YYYY-MM-DD")
											),
											_react2.default.createElement(_reactZmage2.default, {
												style: {
													width: '180px',
													height: '180px'
												},
												src: v.filePath
											})
										);
									}) : null
								)
							)
						);
					}),
					_react2.default.createElement(_antd.Form.Item, { label: '\u6C47\u62A5\u5185\u5BB9\u751F\u6210\u5F62\u5F0F', colon: false, className: 'nextStage' }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ wrapperCol: { span: 18, offset: 4 } },
						_react2.default.createElement(
							_antd.Spin,
							{ tip: this.state.tip, spinning: this.state.isLoading, delay: 100 },
							_react2.default.createElement(
								_antd.Button,
								{ type: 'link', onClick: this.uploadImg },
								'\u70B9\u51FB\u751F\u6210\u5E76\u5B58\u50A8\u4E3APDF\u6587\u6863'
							)
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ wrapperCol: { span: 18, offset: 4 } },
						_react2.default.createElement(
							_antd.Button,
							{ className: 'fl', type: 'link', onClick: this.sendReport },
							'\u70B9\u51FB\u53D1\u9001\u90AE\u4EF6'
						),
						_react2.default.createElement(
							'div',
							{ className: 'fl ml30 mr25' },
							_react2.default.createElement(EditableTagGroup, {
								data: fields.emails,
								updateState: this.updateState.bind(this, 'emails')
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'fl' },
							_react2.default.createElement(_PersonAdd2.default, {
								data: fields.emailUserIds,
								person: this.state.person,
								updatePerson: this.updateState.bind(this, 'emailUserIds')
							})
						)
					)
				)
			);
		}
	}]);

	return Demo;
}(_react2.default.Component)) || _class3;

var Index = _antd.Form.create({})(Demo);
exports.default = Index;

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

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
    module.exports = __webpack_require__(1530);
} else {
    module.exports = require('./zmage.development.js');
}

/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e){t.exports=__webpack_require__(0)},function(t,e){t.exports=__webpack_require__(20)},function(t,e,n){var o=n(14);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),s=null,l=0,u=[],f=n(13);function p(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(g(o.parts[a],e))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(g(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:c}}}}function m(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function b(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(t.insertAt.before,n);n.insertBefore(e,r)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function d(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return h(e,t.attrs),b(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=s||(s=d(e)),o=v.bind(null,n,a,!1),r=v.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),b(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,e),r=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){y(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return p(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(c=i[a.id]).refs--,o.push(c)}t&&p(m(t,e),e);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var w,_=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function v(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=_(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){var o=n(16);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=__webpack_require__(80)},function(t,e){t.exports=__webpack_require__(29)},function(t,e){t.exports=__webpack_require__(1527)},function(t,e,n){var o=n(15);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(17);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,".wrapperLayer__3hggD {\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n",""]),e.locals={wrapperLayer:"wrapperLayer__3hggD"}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,"/* 与 anim.js 同步 */\n.baseButton__1l-8C {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.baseButton__1l-8C > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0.6rem;\n  right: 0.6rem;\n  opacity: 0;\n  display: flex;\n  z-index: 1000;\n  border-radius: 5rem;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  transition: opacity 350ms, -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms;\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms, -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL.show__3wuNU {\n  opacity: 0.8;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.controls__3sQmL .pinButton__3L7CE {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0.4em 0;\n  width: 2rem;\n  height: 2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .pinButton__3L7CE > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL .pinButton__3L7CE:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.controls__3sQmL .pinButton__3L7CE:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.controls__3sQmL .pinButton__3L7CE:first-of-type {\n  margin-left: 0.4rem;\n}\n.controls__3sQmL .pinButton__3L7CE:last-of-type {\n  margin-right: 0.4rem;\n}\n.controls__3sQmL .rotate__3dU4j {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0.4em 0;\n  width: 2rem;\n  height: 2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .rotate__3dU4j > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL .rotate__3dU4j:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.controls__3sQmL .rotate__3dU4j:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.controls__3sQmL .rotate__3dU4j:first-of-type {\n  margin-left: 0.4rem;\n}\n.controls__3sQmL .rotate__3dU4j:last-of-type {\n  margin-right: 0.4rem;\n}\n.controls__3sQmL .rotate__3dU4j svg {\n  width: 1.75rem;\n  transition: -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .rotateLeft__jf-FB {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0.4em 0;\n  width: 2rem;\n  height: 2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .rotateLeft__jf-FB > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL .rotateLeft__jf-FB:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.controls__3sQmL .rotateLeft__jf-FB:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.controls__3sQmL .rotateLeft__jf-FB:first-of-type {\n  margin-left: 0.4rem;\n}\n.controls__3sQmL .rotateLeft__jf-FB:last-of-type {\n  margin-right: 0.4rem;\n}\n.controls__3sQmL .rotateLeft__jf-FB svg {\n  width: 1.75rem;\n  transition: -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .rotateLeft__jf-FB:hover svg {\n  -webkit-transform: rotate(-30deg);\n          transform: rotate(-30deg);\n}\n.controls__3sQmL .rotateRight__2DM1Q {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0.4em 0;\n  width: 2rem;\n  height: 2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .rotateRight__2DM1Q > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL .rotateRight__2DM1Q:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.controls__3sQmL .rotateRight__2DM1Q:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.controls__3sQmL .rotateRight__2DM1Q:first-of-type {\n  margin-left: 0.4rem;\n}\n.controls__3sQmL .rotateRight__2DM1Q:last-of-type {\n  margin-right: 0.4rem;\n}\n.controls__3sQmL .rotateRight__2DM1Q svg {\n  width: 1.75rem;\n  transition: -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .rotateRight__2DM1Q:hover svg {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n}\n.controls__3sQmL .download__JLwN1 {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0.4em 0;\n  width: 2rem;\n  height: 2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .download__JLwN1 > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL .download__JLwN1:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.controls__3sQmL .download__JLwN1:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.controls__3sQmL .download__JLwN1:first-of-type {\n  margin-left: 0.4rem;\n}\n.controls__3sQmL .download__JLwN1:last-of-type {\n  margin-right: 0.4rem;\n}\n.controls__3sQmL .download__JLwN1 svg {\n  margin-top: -0.06rem;\n  width: 1.75rem;\n}\n.controls__3sQmL .zoom__HH1gO {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0.4em 0;\n  width: 2rem;\n  height: 2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .zoom__HH1gO > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL .zoom__HH1gO:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.controls__3sQmL .zoom__HH1gO:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.controls__3sQmL .zoom__HH1gO:first-of-type {\n  margin-left: 0.4rem;\n}\n.controls__3sQmL .zoom__HH1gO:last-of-type {\n  margin-right: 0.4rem;\n}\n.controls__3sQmL .close__1Yy0b {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0.4em 0;\n  width: 2rem;\n  height: 2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.controls__3sQmL .close__1Yy0b > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.controls__3sQmL .close__1Yy0b:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.controls__3sQmL .close__1Yy0b:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n.controls__3sQmL .close__1Yy0b:first-of-type {\n  margin-left: 0.4rem;\n}\n.controls__3sQmL .close__1Yy0b:last-of-type {\n  margin-right: 0.4rem;\n}\n.sideButton__3kbDa {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  padding: 0.4rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.sideButton__3kbDa > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.sideButton__3kbDa:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: translateX(0) translateY(-50%) !important;\n          transform: translateX(0) translateY(-50%) !important;\n}\n.sideButton__3kbDa:active {\n  opacity: 1 !important;\n}\n.sideButton__3kbDa.show__3wuNU {\n  opacity: 0.8;\n}\n.flipLeft__2HlVL {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  padding: 0.4rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  left: 0;\n  padding-left: 0.6rem;\n  border-radius: 0 0.5em 0.5em 0;\n  -webkit-transform: translateX(-100%) translateY(-50%);\n          transform: translateX(-100%) translateY(-50%);\n}\n.flipLeft__2HlVL > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.flipLeft__2HlVL:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: translateX(0) translateY(-50%) !important;\n          transform: translateX(0) translateY(-50%) !important;\n}\n.flipLeft__2HlVL:active {\n  opacity: 1 !important;\n}\n.flipLeft__2HlVL.show__3wuNU {\n  opacity: 0.8;\n}\n.flipLeft__2HlVL:active {\n  -webkit-transform: translate(-0.2em) translateY(-50%) !important;\n          transform: translate(-0.2em) translateY(-50%) !important;\n}\n.flipLeft__2HlVL.show__3wuNU {\n  opacity: 0.8;\n  -webkit-transform: translate(-0.2em) translateY(-50%);\n          transform: translate(-0.2em) translateY(-50%);\n}\n.flipRight__3GreD {\n  z-index: 1000;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  padding: 0.4rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 175ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 175ms cubic-bezier(0.6, 0, 0.1, 1);\n  right: 0;\n  padding-right: 0.6rem;\n  border-radius: 0.5rem 0 0 0.5rem;\n  -webkit-transform: translateX(100%) translateY(-50%);\n          transform: translateX(100%) translateY(-50%);\n}\n.flipRight__3GreD > svg {\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n.flipRight__3GreD:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: translateX(0) translateY(-50%) !important;\n          transform: translateX(0) translateY(-50%) !important;\n}\n.flipRight__3GreD:active {\n  opacity: 1 !important;\n}\n.flipRight__3GreD.show__3wuNU {\n  opacity: 0.8;\n}\n.flipRight__3GreD:active {\n  -webkit-transform: translate(0.2em) translateY(-50%) !important;\n          transform: translate(0.2em) translateY(-50%) !important;\n}\n.flipRight__3GreD.show__3wuNU {\n  opacity: 0.8;\n  -webkit-transform: translate(0.2em) translateY(-50%);\n          transform: translate(0.2em) translateY(-50%);\n}\n.pages__3_44_ {\n  box-sizing: border-box;\n  display: flex;\n  position: absolute;\n  left: 50%;\n  bottom: 0.6rem;\n  z-index: 110;\n  opacity: 0;\n  border-radius: 2rem;\n  -webkit-transform: translate(-50%, 100px);\n          transform: translate(-50%, 100px);\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.pages__3_44_.show__3wuNU {\n  opacity: 0.8;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n.pages__3_44_ .dot__gnENp {\n  cursor: pointer;\n  margin: 0.45rem 0.25rem;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 1.2rem;\n  background: black;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.pages__3_44_ .dot__gnENp:first-of-type {\n  margin-left: 0.6rem;\n}\n.pages__3_44_ .dot__gnENp:last-of-type {\n  margin-right: 0.6rem;\n}\n.pages__3_44_ .blackDot__1Nm3_ {\n  cursor: pointer;\n  margin: 0.45rem 0.25rem;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 1.2rem;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  cursor: initial;\n  width: 1rem;\n  background: black;\n}\n.pages__3_44_ .blackDot__1Nm3_:first-of-type {\n  margin-left: 0.6rem;\n}\n.pages__3_44_ .blackDot__1Nm3_:last-of-type {\n  margin-right: 0.6rem;\n}\n.pages__3_44_ .whiteDot__3MHk8 {\n  cursor: pointer;\n  margin: 0.45rem 0.25rem;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 1.2rem;\n  background: black;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), width 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  background: #999;\n}\n.pages__3_44_ .whiteDot__3MHk8:first-of-type {\n  margin-left: 0.6rem;\n}\n.pages__3_44_ .whiteDot__3MHk8:last-of-type {\n  margin-right: 0.6rem;\n}\n.pages__3_44_ .whiteDot__3MHk8:hover {\n  opacity: 0.8 !important;\n  -webkit-transform: scale(1.1) !important;\n          transform: scale(1.1) !important;\n}\n.pages__3_44_ .whiteDot__3MHk8:active {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n",""]),e.locals={baseButton:"baseButton__1l-8C",controls:"controls__3sQmL",show:"show__3wuNU",pinButton:"pinButton__3L7CE",rotate:"rotate__3dU4j",rotateLeft:"rotateLeft__jf-FB",rotateRight:"rotateRight__2DM1Q",download:"download__JLwN1",zoom:"zoom__HH1gO",close:"close__1Yy0b",sideButton:"sideButton__3kbDa",flipLeft:"flipLeft__2HlVL",flipRight:"flipRight__3GreD",pages:"pages__3_44_",dot:"dot__gnENp",blackDot:"blackDot__1Nm3_",whiteDot:"whiteDot__3MHk8"}},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,"/* 与 anim.js 同步 */\n.imageLayer__33OvN {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-clip-path 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), clip-path 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), opacity 350ms cubic-bezier(0.6, 0, 0.1, 1), clip-path 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-clip-path 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  will-change: transform, top, opacity, clip-path;\n}\n.imageLayer__33OvN.zooming__8A3Sl {\n  transition-timing-function: cubic-bezier(0, 0.1, 0.1, 1);\n  -ms-transition-duration: 0ms;\n}\n.imageLayer__33OvN.invalidate__GRvMe {\n  opacity: 0 !important;\n  pointer-events: none;\n}\n",""]),e.locals={imageLayer:"imageLayer__33OvN",zooming:"zooming__8A3Sl",invalidate:"invalidate__GRvMe"}},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,"/* 与 anim.js 同步 */\n.loadingContainer__nzXM4 {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  opacity: 0;\n  transition: opacity cubic-bezier(0.6, 0, 0.1, 1) 175ms;\n}\n.loadingContainer__nzXM4.show__1BtTD {\n  opacity: 1;\n}\n.loadingContainer__nzXM4 .reload__2nJBf {\n  border: 2px solid;\n  border-radius: 5px;\n  font-size: 1rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  outline: none;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.loadingContainer__nzXM4 .reload__2nJBf:hover {\n  opacity: 0.8;\n}\n.loadingContainer__nzXM4 .reload__2nJBf:hover svg {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n}\n.loadingContainer__nzXM4 .reload__2nJBf:active {\n  opacity: 1;\n}\n.loadingContainer__nzXM4 .reload__2nJBf svg {\n  display: block;\n  transition: -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n  transition: transform 350ms cubic-bezier(0.6, 0, 0.1, 1), -webkit-transform 350ms cubic-bezier(0.6, 0, 0.1, 1);\n}\n.loadingContainer__nzXM4 .loading__2iAZJ {\n  width: 24px;\n  height: 24px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: spin__1tumn 1s linear infinite;\n          animation: spin__1tumn 1s linear infinite;\n}\n@-webkit-keyframes fadeIn__1iF9b {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn__1iF9b {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeOut__11bTR {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut__11bTR {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes spin__1tumn {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@keyframes spin__1tumn {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n",""]),e.locals={loadingContainer:"loadingContainer__nzXM4",show:"show__1BtTD",reload:"reload__2nJBf",loading:"loading__2iAZJ",spin:"spin__1tumn",fadeIn:"fadeIn__1iF9b",fadeOut:"fadeOut__11bTR"}},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,"/* 与 anim.js 同步 */\n.backgroundLayer__3kiCJ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: zoom-out;\n  background-color: #ffffff;\n  transition: opacity 0.2s;\n  will-change: opacity;\n  -webkit-tap-highlight-color: transparent;\n}\n",""]),e.locals={backgroundLayer:"backgroundLayer__3kiCJ"}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(6),a=n.n(i),c=n(10),s=n.n(c),l=n(1),u=n.n(l),f=function(t){if(window){if(!window.hasOwnProperty("__ZMAGE_INITIALIZED___")){var e=(n=navigator.userAgent||navigator.vendor||window.opera,/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4)));window.__ZMAGE_INITIALIZED___=!0,window.__ZMAGE_ENV_IS_DESKTOP___=!e,window.__ZMAGE_ENV_IS_MOBILE___=e}return window[t]}var n},p={get isDesktop(){return f("__ZMAGE_ENV_IS_DESKTOP___")||!0},get isMobile(){return f("__ZMAGE_ENV_IS_MOBILE___")||!1}};function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){b(t,e,n[e])})}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={src:u.a.oneOfType([u.a.string,u.a.func]),alt:u.a.string,txt:u.a.string,set:u.a.oneOfType([u.a.arrayOf(u.a.shape({src:u.a.string,alt:u.a.string,text:u.a.string})),u.a.shape({src:u.a.string,alt:u.a.string,text:u.a.string})]),defaultPage:u.a.number,preset:u.a.oneOf(["auto","desktop","mobile"]),controller:u.a.oneOfType([u.a.bool,u.a.shape({pagination:u.a.bool,rotate:u.a.bool,zoom:u.a.bool,close:u.a.bool,flip:u.a.bool})]),hotKey:u.a.oneOfType([u.a.bool,u.a.shape({close:u.a.bool,zoom:u.a.bool,flip:u.a.bool})]),animate:u.a.shape({browsing:u.a.bool,flip:u.a.oneOf(["fade","crossFade","swipe","zoom"])}),backdrop:u.a.string,zIndex:u.a.number,radius:u.a.number,edge:u.a.number,loop:u.a.bool,onBrowsing:u.a.func,onZooming:u.a.func,onSwitching:u.a.func,onRotating:u.a.func,browsing:u.a.bool},d={desktop:{controller:{pagination:!0,rotate:!0,zoom:!0,download:!1,close:!0,flip:!0},hotKey:{close:!0,zoom:!0,flip:!0},animate:{browsing:!0,flip:"fade"}},mobile:{controller:{pagination:!0,rotate:!1,zoom:!1,download:!1,close:!0,flip:!1},hotKey:{close:!1,zoom:!1,flip:!1},animate:{browsing:!0,flip:"fade"}}},h={src:"",alt:"",txt:"",set:[],defaultPage:0,preset:"auto",controller:{},hotKey:{},animate:{},backdrop:"#FFFFFF",zIndex:1e3,radius:0,edge:0,loop:!0,onBrowsing:function(){},onZooming:function(){},onSwitching:function(){},onRotating:function(){}},g="__ZMAGE_DEF_PROP__",w=function(t){if(window){if(window.hasOwnProperty(g)||(window[g]={}),!window[g].hasOwnProperty(t))switch(t){case"desktop":window[g][t]=m({},h,d.desktop);break;case"mobile":window[g][t]=m({},h,d.mobile);break;case"auto":window[g][t]=m({},h,p.isDesktop&&d.desktop,p.isMobile&&d.mobile);break;default:window[g][t]=m({},h,d.desktop)}return window[g][t]}return{}};function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=O(this,z(e).call(this,t))).target=t.target||document.body,n.container=document.createElement("figure"),n.container.id=t.id,n.container.className=t.className,n.container.style.zIndex=t.zIndex,n.target.appendChild(n.container),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"componentWillUnmount",value:function(){this.target.removeChild(this.container)}},{key:"render",value:function(){var t=this.props.children;return a.a.createPortal(t,this.container)}}])&&v(n.prototype,o),i&&v(n,i),e}();S.defaultProps={zIndex:h.zIndex},S.propTypes={id:u.a.string,className:u.a.string,zIndex:y.zIndex};var j=n(2),x=n.n(j);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var I=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),L(this,C(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"}))}}])&&P(n.prototype,o),i&&P(n,i),e}();function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function B(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,N(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"}))}}])&&M(n.prototype,o),i&&M(n,i),e}();function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),U(this,F(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}))}}])&&H(n.prototype,o),i&&H(n,i),e}();function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function X(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function G(t,e){return!e||"object"!==V(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var W=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),G(this,J(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1zm-6-.33l1.88-1.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-3.59 3.59c-.39.39-1.02.39-1.41 0L7.7 12.2c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L11 12.67V4c0-.55.45-1 1-1s1 .45 1 1v8.67z"}))}}])&&X(n.prototype,o),i&&X(n,i),e}();function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function $(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function tt(t,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function et(t){return(et=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function nt(t,e){return(nt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ot=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),tt(this,et(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&nt(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/1999/xlink",width:"24",height:"24",viewBox:"0 0 200 200",preserveAspectRatio:"xMinYMin meet"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"spinner-1552570621916",x1:"0%",y1:"0%",x2:"65%",y2:"0%"},r.a.createElement("stop",{offset:"0%",className:"Spinner-blue-3_W"}),r.a.createElement("stop",{offset:"100%",stopOpacity:"0"}))),r.a.createElement("circle",{cx:"100",cy:"100",r:"90",fill:"transparent",stroke:"url(#spinner-1552570621916)",strokeWidth:"20"}))}}])&&$(n.prototype,o),i&&$(n,i),e}();function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function at(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ct(t){return(ct=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function st(t,e){return(st=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var lt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),at(this,ct(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&st(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V4c-4.42 0-8 3.58-8 8 0 1.04.2 2.04.57 2.95.27.67 1.13.85 1.64.34.27-.27.38-.68.23-1.04C6.15 13.56 6 12.79 6 12c0-3.31 2.69-6 6-6zm5.79 2.71c-.27.27-.38.69-.23 1.04.28.7.44 1.46.44 2.25 0 3.31-2.69 6-6 6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35V20c4.42 0 8-3.58 8-8 0-1.04-.2-2.04-.57-2.95-.27-.67-1.13-.85-1.64-.34z"}))}}])&&it(n.prototype,o),i&&it(n,i),e}();function ut(t){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function pt(t,e){return!e||"object"!==ut(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function mt(t){return(mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function bt(t,e){return(bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var yt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),pt(this,mt(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bt(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M6.56 7.98C6.1 7.52 5.31 7.6 5 8.17c-.28.51-.5 1.03-.67 1.58-.19.63.31 1.25.96 1.25h.01c.43 0 .82-.28.94-.7.12-.4.28-.79.48-1.17.22-.37.15-.84-.16-1.15zM5.31 13h-.02c-.65 0-1.15.62-.96 1.25.16.54.38 1.07.66 1.58.31.57 1.11.66 1.57.2.3-.31.38-.77.17-1.15-.2-.37-.36-.76-.48-1.16-.12-.44-.51-.72-.94-.72zm2.85 6.02c.51.28 1.04.5 1.59.66.62.18 1.24-.32 1.24-.96v-.03c0-.43-.28-.82-.7-.94-.4-.12-.78-.28-1.15-.48-.38-.21-.86-.14-1.16.17l-.03.03c-.45.45-.36 1.24.21 1.55zM13 4.07v-.66c0-.89-1.08-1.34-1.71-.71L9.17 4.83c-.4.4-.4 1.04 0 1.43l2.13 2.08c.63.62 1.7.17 1.7-.72V6.09c2.84.48 5 2.94 5 5.91 0 2.73-1.82 5.02-4.32 5.75-.41.12-.68.51-.68.94v.02c0 .65.61 1.14 1.23.96C17.57 18.71 20 15.64 20 12c0-4.08-3.05-7.44-7-7.93z"}))}}])&&ft(n.prototype,o),i&&ft(n,i),e}();function dt(t){return(dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ht(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function gt(t,e){return!e||"object"!==dt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function wt(t){return(wt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _t(t,e){return(_t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var vt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),gt(this,wt(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_t(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M14.83 4.83L12.7 2.7c-.62-.62-1.7-.18-1.7.71v.66C7.06 4.56 4 7.92 4 12c0 3.64 2.43 6.71 5.77 7.68.62.18 1.23-.32 1.23-.96v-.03c0-.43-.27-.82-.68-.94C7.82 17.03 6 14.73 6 12c0-2.97 2.16-5.43 5-5.91v1.53c0 .89 1.07 1.33 1.7.71l2.13-2.08c.4-.38.4-1.02 0-1.42zm4.84 4.93c-.16-.55-.38-1.08-.66-1.59-.31-.57-1.1-.66-1.56-.2l-.01.01c-.31.31-.38.78-.17 1.16.2.37.36.76.48 1.16.12.42.51.7.94.7h.02c.65 0 1.15-.62.96-1.24zM13 18.68v.02c0 .65.62 1.14 1.24.96.55-.16 1.08-.38 1.59-.66.57-.31.66-1.1.2-1.56l-.02-.02c-.31-.31-.78-.38-1.16-.17-.37.21-.76.37-1.16.49-.41.12-.69.51-.69.94zm4.44-2.65c.46.46 1.25.37 1.56-.2.28-.51.5-1.04.67-1.59.18-.62-.31-1.24-.96-1.24h-.02c-.44 0-.82.28-.94.7-.12.4-.28.79-.48 1.17-.21.38-.13.86.17 1.16z"}))}}])&&ht(n.prototype,o),i&&ht(n,i),e}();function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function zt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function kt(t,e){return!e||"object"!==Ot(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function St(t){return(St=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function jt(t,e){return(jt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var xt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),kt(this,St(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jt(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"}))}}])&&zt(n.prototype,o),i&&zt(n,i),e}(),Et=Object(o.createContext)(),Pt=n(8),Lt=n.n(Pt);function Ct(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){It(t,e,n[e])})}return t}function It(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Tt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e+2*n,r=t+2*n>Bt()?Bt()/(t+2*n):1,i=o>Dt()?Dt()/(e+2*n):1;return Math.min(r,i)+.002},Mt=function(){return document.body.scrollWidth},Bt=function(){return document.documentElement.clientWidth},Nt=function(){return window.innerHeight},Dt=function(){return document.documentElement.clientHeight},Qt={html:{},body:{}},At=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"show";return e?"".concat(t," ").concat(n):t},Ht=function(t,e){var n;return n=setInterval(function(){t&&!t.complete||(clearInterval(n),e&&e())},500)},Ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(e).reduce(function(t,n){return e[n]?t.concat("".concat(n,"=").concat(e[n])):t},[]).join("&");return n?"".concat(t).concat(t.includes("?")?"&":"?").concat(n):t},Ft=Lt()(function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ref,n=void 0===e?100:e;return t?t.includes("%")?n*Number(t.substring(0,t.length-1))/100:Number(t.substring(0,t.length-2)):t}),Zt=Lt()(function(t){var e=["Webkit","Moz","Ms","O"];return Object.keys(t).reduce(function(n,o){var r=e.reduce(function(e,n){return Rt({},e,It({},"".concat(n).concat((r=o).charAt(0).toUpperCase()+r.slice(1)),t[o]));var r},{});return Rt({},n,r)},t)}),Yt=function(t){return(0^t)===t},Vt=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{loop:!0};return 0===e?0:0===n?t:t<0||t>e-1?void console.warn("Current index overflow !"):o.loop?Math.abs(e+n+t)%e:t+n<0||t+n>e-1?void 0:t+n},Xt=Lt()(function(t){return[].concat(Ct(Ct(Array(t).keys()).map(function(t){return-t-1}).reverse()),Ct(Array(t+1).keys()))});function Gt(t){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Jt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Kt(t){return(Kt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Wt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function qt(t,e){return(qt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var $t=function(t){function e(){var t,n,o,r,i,a,c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return o=this,r=(t=Kt(e)).call.apply(t,[this].concat(l)),n=!r||"object"!==Gt(r)&&"function"!=typeof r?Wt(o):r,i=Wt(n),c=function(t){var e=n.props,o=e.show,r=e.zoom;return At(t,!r&&o,x.a.show)},(a="withShow")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qt(t,e)}(e,r.a.PureComponent),n=e,(i=[{key:"render",value:function(){var t=this,e=this.context,n=e.set,i=(e.preset,e.presetIsMobile),a=(e.presetIsDesktop,e.controller),c=e.backdrop,s=e.loop,l=e.zoom,u=e.page,f=e.outBrowsing,p=e.toPage,m=e.toPrevPage,b=e.toNextPage,y=e.toggleZoom,d=e.toggleRotate;return r.a.createElement(o.Fragment,null,r.a.createElement("div",{id:"zmageControl",className:this.withShow(x.a.controls),style:{backgroundColor:c}},a.rotate&&r.a.createElement("div",{id:"zmageControlRotateLeft",className:this.withShow(x.a.rotateLeft),onClick:d("left")},r.a.createElement(yt,null)),a.rotate&&r.a.createElement("div",{id:"zmageControlRotateRight",className:this.withShow(x.a.rotateRight),onClick:d("right")},r.a.createElement(vt,null)),a.download&&r.a.createElement("div",{id:"zmageControlDownload",className:this.withShow(x.a.download),onClick:function(){return e=t.context.set[t.context.page].src,(o=document.createElement("a")).href=e,o.download=n||e.split("/")[e.split("/").length-1],document.body.appendChild(o),o.click(),void document.body.removeChild(o);var e,n,o}},r.a.createElement(W,null)),a.zoom&&r.a.createElement("div",{id:"zmageControlZoom",className:this.withShow(x.a.zoom),onClick:i?function(){return window.open(n[u].src)}:y},r.a.createElement(xt,null)),a.close&&r.a.createElement("div",{id:"zmageControlClose",className:this.withShow(x.a.close),onClick:l?y:f},r.a.createElement(Y,null))),Array.isArray(n)&&n.length>1&&a.flip&&r.a.createElement(o.Fragment,null,(s||0!==u)&&r.a.createElement("div",{id:"zmageControlFlipLeft",className:this.withShow(x.a.flipLeft),style:{backgroundColor:c},onClick:m},r.a.createElement(I,null)),(s||u!==n.length-1)&&r.a.createElement("div",{id:"zmageControlFlipRight",className:this.withShow(x.a.flipRight),style:{backgroundColor:c},onClick:b},r.a.createElement(Q,null))),Array.isArray(n)&&n.length>1&&a.pagination&&r.a.createElement("div",{id:"zmageControlPagination",className:this.withShow(x.a.pages),style:{backgroundColor:c}},n.map(function(t,e){return e===u?r.a.createElement("span",{key:e,id:"zmageControlPaginationActive",className:x.a.blackDot}):r.a.createElement("span",{key:e,className:x.a.whiteDot,onClick:function(){return p(e)}})})))}}])&&Jt(n.prototype,i),a&&Jt(n,a),e}();$t.contextType=Et;var te=n(7),ee=n.n(te),ne=n(9),oe=n.n(ne),re=n(5),ie=n.n(re);function ae(t){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ce(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function se(t,e){return!e||"object"!==ae(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function le(t){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ue(t,e){return(ue=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var fe=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),se(this,le(e).apply(this,arguments))}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ue(t,e)}(e,r.a.PureComponent),n=e,(i=[{key:"render",value:function(){var t,e,n,i=this.props,a=i.show,c=i.load,s=i.invalidate,l=i.onReload,u=i.backdrop,f=ee()(ie.a.loadingContainer,(t={},e=ie.a.show,n=a,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t));return r.a.createElement(o.Fragment,null,(c||s)&&r.a.createElement("div",{id:"zmageLoading",className:f},c&&r.a.createElement("div",{className:ie.a.loading},r.a.createElement(ot,null)),s&&r.a.createElement("button",{className:ie.a.reload,onClick:l,style:{background:u}},r.a.createElement(lt,null))))}}])&&ce(n.prototype,i),a&&ce(n,a),e}();fe.contextType=Et;var pe=function(t,e,n){var o=t.show,r=e.zoom;return o?r?ye(t,e,n):be(t,e,n):me(t,e)},me=function(t,e){var n=e.coverRef,o=e.rotate,r=e.pageIsCover;if(n.current){var i=n.current.naturalWidth,a=n.current.getBoundingClientRect(),c=a.top,s=a.left,l=a.width,u=a.height,f=window.getComputedStyle(n.current),p=f.opacity,m=f.borderRadius;return r?{_type:"cover",x:-Mt()/2+s+l/2,y:-Nt()/2+c+u/2,opacity:Number(p)||1,scale:i?l/i:1,rotate:o-o%360,radius:Ft(m,{ref:l})}:{_type:"cover",x:0,y:-Nt(),opacity:0,scale:i?l/i:1,rotate:o-o%360,radius:Ft(m,{ref:l})}}return{_type:"cover",x:0,y:0,opacity:0,scale:0,rotate:0,radius:0}},be=function(t,e,n){var o=e.radius,r=e.edge,i=e.rotate,a=n.current,c=a.naturalWidth,s=a.naturalHeight;return{_type:"browsing",x:0,y:0,opacity:1,scale:Tt(c,s,r),rotate:i,radius:o}},ye=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.clientX,i=void 0===r?Mt()/2:r,a=o.clientY,c=void 0===a?Nt()/2:a,s=e.radius,l=e.edge,u=e.rotate,f=n.current,p=f.naturalWidth,m=f.naturalHeight,b=l||50,y=Mt(),d=Nt();return{_type:"zooming",x:p>y?(p-y)/2+b-(p-y+2*b)*(i/y):0,y:m>d?(m-d)/2+b-(m-d+2*b)*(c/d):0,opacity:1,scale:1,rotate:u,radius:s}};function de(t){return(de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function he(){return(he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function ge(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){ze(t,e,n[e])})}return t}function we(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _e(t){return(_e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ve(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Oe(t,e){return(Oe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ze(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ke=function(t){function e(t,n){var o,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,a=_e(e).call(this,t),o=!a||"object"!==de(a)&&"function"!=typeof a?ve(i):a,ze(ve(o),"updateZoomEventListenerWithState",function(){var t=o.context,e=t.show,n=t.zoom;e&&n&&!o.listeningMouseMove?(window.addEventListener("mousemove",o.handleMouseMove),o.listeningMouseMove=!0):(window.removeEventListener("mousemove",o.handleMouseMove),o.listeningMouseMove=!1)}),ze(ve(o),"updateCurrentImageStyle",function(){var t=pe(o.props,o.context,o.imageRef);o.setStyle(t)}),ze(ve(o),"handleResize",function(){o.updateCurrentImageStyle()}),ze(ve(o),"handleScroll",function(){if(o.imageRef.current){var t=o.context.show;o.imageRef.current.style.top="calc(50% + ".concat(t?0:o.initialPageOffset-window.pageYOffset,"px)")}}),ze(ve(o),"handleClick",function(){var t=o.context,e=t.zoom,n=t.toggleZoom;e&&n()}),ze(ve(o),"handleMouseMove",function(t){var e=ye(o.props,o.context,o.imageRef,t);o.setStyle(e)}),ze(ve(o),"handleImageLoadStart",function(){o.setState({isFetching:!0,invalidate:!1},o.handleDetectImageLoadComplete)}),ze(ve(o),"handleDetectImageLoadComplete",function(){clearInterval(o.imageLoadingTimer),o.imageLoadingTimer=Ht(o.imageRef.current,o.handleImageLoadEnd)}),ze(ve(o),"handleImageLoadEnd",function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).invalidate;clearInterval(o.imageLoadingTimer),o.setState({isFetching:!1,invalidate:void 0===t?o.state.invalidate:t})}),ze(ve(o),"handleImageLoad",function(){o.updateCurrentImageStyle()}),ze(ve(o),"handleImageError",function(){o.handleImageLoadEnd({invalidate:!0})}),ze(ve(o),"handleImageAbort",function(){o.handleImageLoadEnd({invalidate:!0})}),ze(ve(o),"handleImageReload",function(){var t=o.context.page;o.handleSetTimestamp(t)}),ze(ve(o),"handleSetTimestamp",function(t){var e=o.context.set,n=o.state.timestamp;o.setState({timestamp:ge({},n,ze({},e[t].src,(new Date).getTime()))})}),ze(ve(o),"handleGetTimestamp",function(t){var e=o.context.set;return o.state.timestamp[e[t].src]}),ze(ve(o),"setStyle",function(t){o.setState({currentStyle:t})}),ze(ve(o),"getStyle",function(t){var e,n,r,i,a=o.context,c=a.animate,s=a.set,l=a.zoom,u=a.page,f=o.state,p=f.invalidate,m=f.currentStyle,b=0,y=0,d="fade"===c.flip,h="crossFade"===c.flip;h&&(b=30),"swipe"===c.flip&&(b=Mt()*t);var g="zoom"===c.flip;g&&(y=.08);var w=Math.abs(t);return w>0?(e="translate3d(-50%, -50%, 0) translate3d(".concat(m.x+b,"px, ").concat(m.y,"px, 0px) scale3d(").concat(m.scale+y,", ").concat(m.scale+y,", 1) rotate3d(0, 0, 1, 0deg)"),n=10*w,r=d||h||g?0:1,i="none"):(e="translate3d(-50%, -50%, 0) translate3d(".concat(m.x,"px, ").concat(m.y,"px, 0px) scale3d(").concat(m.scale,", ").concat(m.scale,", 1) rotate3d(0, 0, 1, ").concat(m.rotate,"deg)"),r=m.opacity,n=10),ge({},Zt({transform:e}),{cursor:l?"zoom-out":"initial",zIndex:n,opacity:p?0:r,pointerEvents:i},s[u].style)}),ze(ve(o),"buildImageSeries",function(t){return Xt(t).map(function(t){return o.buildImage(t)})}),ze(ve(o),"buildImage",function(t){var e=o.context,n=e.loop,i=e.set,a=e.show,c=e.zoom,s=e.page,l=e.pageWithStep,u=o.state.invalidate,f=Math.abs(t)>0,p=l+t,m=Vt(s,i.length,t,{loop:n});if(Yt(m)){var b,y=o.getStyle(t),d=ee()(oe.a.imageLayer,i[m].className,(ze(b={},oe.a.zooming,c),ze(b,oe.a.invalidate,u),b)),h={key:"".concat(p,"-").concat(i[m].src),style:y,className:d,src:Ut(i[m].src,{t:o.handleGetTimestamp(s)}),alt:i[m].alt},g={id:"zmageImage",ref:o.imageRef,onLoad:o.handleImageLoad,onError:o.handleImageError,onAbort:o.handleImageAbort,onClick:o.handleClick};return f?a&&i.length>1&&!c&&r.a.createElement("img",h):r.a.createElement("img",he({},h,g))}}),o.imageRef=r.a.createRef(),o.initialPageOffset=window.pageYOffset,o.listeningMouseMove=!1,o.imageLoadingTimer=null,o.state={isFetching:!0,invalidate:!1,currentStyle:me(t,n),timestamp:{}},o}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Oe(t,e)}(e,r.a.PureComponent),n=e,(i=[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)}},{key:"componentDidUpdate",value:function(t){var e=t.show,n=t.zoom,o=t.rotate,r=t.page,i=this.props,a=i.show,c=i.zoom,s=i.rotate,l=i.page,u=this.props.presetIsMobile;e===a&&n===c&&o===s||(e?(this.updateCurrentImageStyle(),u&&(document.documentElement.style.overflow=Qt.html.overflow,document.body.style.overflow=Qt.body.overflow,document.body.style.position=Qt.body.position)):(this.updateCurrentImageStyle(),this.handleDetectImageLoadComplete(),u&&(Qt.html.overflow=document.documentElement.style.overflow,Qt.body.overflow=document.body.style.overflow,Qt.body.position=document.body.style.position,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.position="relative")),this.updateZoomEventListenerWithState()),r!==l&&this.handleImageLoadStart()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove),clearInterval(this.imageLoadingTimer)}},{key:"render",value:function(){var t=this.context,e=(t.set,t.show),n=(t.zoom,t.page,t.pageIsCover),i=(t.pageWithStep,this.state),a=i.isFetching,c=i.invalidate;return r.a.createElement(o.Fragment,null,r.a.createElement(fe,{show:e&&(!n||c),load:a,invalidate:c,onReload:this.handleImageReload}),this.buildImageSeries(2))}}])&&we(n.prototype,i),a&&we(n,a),e}();ke.contextType=Et;var Se=n(11),je=n.n(Se);function xe(t){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ee(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Pe(t,e){return!e||"object"!==xe(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Le(t){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Ce(t,e){return(Ce=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Re=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Pe(this,Le(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ce(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props,e=t.show,n=t.zoom,o=this.context,i=o.backdrop,a=o.outBrowsing,c=o.toggleZoom;return r.a.createElement("div",{id:"zmageBackground",className:je.a.backgroundLayer,onClick:n?c:a,style:{opacity:e?1:0,background:i||"",transitionDelay:e?".3s":"0s"}})}}])&&Ee(n.prototype,o),i&&Ee(n,i),e}();Re.contextType=Et;var Ie=350,Te=function(t,e,n){return 0===n||t&&t.current&&t.current.getAttribute("src")===e[n].src},Me=function(t,e,n){var o=function(t,e){return Yt(t)&&t<e.length-1?t:e.length-1}(e,n);return{page:o,pageIsCover:Te(t,n,o)}},Be=function(t){t.current&&t&&t.current&&(t.current.style.visibility="visible")},Ne=function(t){t.current&&t&&t.current&&(t.current.style.visibility="hidden")};function De(t){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Qe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Ze(t,e,n[e])})}return t}function Ae(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function He(t){return(He=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Ue(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Fe(t,e){return(Fe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ze(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ye=function(t){function e(t){var n,o,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=He(e).call(this,t),n=!r||"object"!==De(r)&&"function"!=typeof r?Ue(o):r,Ze(Ue(n),"init",function(){var t=n.props,e=t.isBrowsingControlled,o=t.coverRef,r=t.set,i=t.onBrowsing,a=n.state,c=a.show,s=a.page,l=a.pageIsCover;c||(window.addEventListener("keydown",n.handleKeyDown),window.addEventListener("scroll",n.handleScroll),window.requestAnimationFrame(function(){n.setState({show:!0,zoom:!1,rotate:0},function(){l&&Ne(o,r,s),!e&&"function"==typeof i&&i(!0)})}))}),Ze(Ue(n),"unInit",function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).force,e=n.props,o=e.isBrowsingControlled,r=e.coverRef,i=e.set,a=e.onBrowsing,c=n.state,s=c.show,l=c.page,u=c.pageIsCover;(s||t)&&(window.removeEventListener("keydown",n.handleKeyDown),window.removeEventListener("scroll",n.handleScroll),!u&&Be(r,i,l),n.setState({show:!1,zoom:!1,rotate:0},function(){return setTimeout(function(){n.setState({mount:!1},function(){u&&Be(r,i,l),!o&&"function"==typeof a&&a(!1)})},Ie)}))}),Ze(Ue(n),"handleKeyDown",function(t){console.log("handleKeyDown");var e=n.props,o=e.preset,r=e.set,i=e.hotKey,a=e.loop,c=e.outBrowsing,s=n.state,l=s.zoom,u=s.page,f=Qe({},w(o).hotKey,i);switch(t.keyCode){case 27:t.preventDefault(),f.close&&(l?n.handleToggleZoom():c());break;case 32:t.preventDefault(),f.zoom&&n.handleToggleZoom();break;case 37:t.preventDefault(),(a||0!==u)&&!l&&f.flip&&n.handleToPrevPage();break;case 39:t.preventDefault(),(a||u!==r.length-1)&&!l&&f.flip&&n.handleToNextPage();break;default:return}}),Ze(Ue(n),"handleScroll",function(){n.state.show&&n.props.outBrowsing()}),Ze(Ue(n),"handleToPage",function(t){var e=n.props,o=e.coverRef,r=e.set,i=e.onSwitching;n.setState({page:t,pageIsCover:Te(o,r,t)},function(){"function"==typeof i&&i(n.state.page)})}),Ze(Ue(n),"handleSwitchPages",function(t){var e=n.props,o=e.coverRef,r=e.onSwitching,i=e.loop;return function(){var e=n.props.set,a=n.state,c=a.page,s=a.pageWithStep,l=Vt(c,e.length,t,{loop:i});n.setState({page:l,pageIsCover:Te(o,e,l),pageWithStep:s+t,zoom:!1,rotate:0},function(){"function"==typeof r&&r(l)})}}),Ze(Ue(n),"handleToPrevPage",n.handleSwitchPages(-1)),Ze(Ue(n),"handleToNextPage",n.handleSwitchPages(1)),Ze(Ue(n),"handleToggleZoom",function(){var t=n.props.onZooming;n.setState({zoom:!n.state.zoom},function(){"function"==typeof t&&t(n.state.zoom)})}),Ze(Ue(n),"handleToggleRotate",function(t){var e=n.props.onRotating;switch(t){case"left":return function(){return n.setState({rotate:n.state.rotate-90},function(){"function"==typeof e&&e(n.state.rotate)})};case"right":return function(){return n.setState({rotate:n.state.rotate+90},function(){"function"==typeof e&&e(n.state.rotate)})};default:return function(){return n.setState({rotate:0},function(){"function"==typeof e&&e(0)})}}});var i=Me(t.coverRef,t.defaultPage,t.set),a=i.page,c=i.pageIsCover;return n.state={mount:!1,show:!1,zoom:!1,rotate:0,page:a,pageIsCover:c,pageWithStep:a},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Fe(t,e)}(e,r.a.PureComponent),n=e,i=[{key:"getDerivedStateFromProps",value:function(t,e){return t.browsing?Qe({mount:!0},e.show?{}:Me(t.coverRef,t.defaultPage,t.set)):null}}],(o=[{key:"componentDidMount",value:function(){this.props.browsing&&this.init()}},{key:"componentDidUpdate",value:function(t){t.browsing!==this.props.browsing&&(this.props.browsing?this.init():this.unInit())}},{key:"componentWillUnmount",value:function(){this.unInit({force:!0})}},{key:"render",value:function(){var t=this.props,e=t.coverRef,n=t.outBrowsing,o=t.set,i=t.preset,a=t.controller,c=t.hotKey,l=t.animate,u=t.zIndex,f=t.backdrop,p=t.radius,m=t.edge,b=t.loop,y=this.state,d=y.mount,h=y.show,g=y.zoom,_=y.rotate,v=y.page,O=y.pageIsCover,z=y.pageWithStep,k=w(i),j={show:h,zoom:g,rotate:_,page:v,pageIsCover:O,pageWithStep:z},x=Qe({coverRef:e,outBrowsing:n,set:o,preset:i,presetIsMobile:"mobile"===i,presetIsDesktop:"desktop"===i,controller:Qe({},k.controller,a),hotKey:Qe({},k.hotKey,c),animate:Qe({},k.animate,l),backdrop:f,radius:p,edge:m,loop:b},j,{toPage:this.handleToPage,toPrevPage:this.handleToPrevPage,toNextPage:this.handleToNextPage,toggleZoom:this.handleToggleZoom,toggleRotate:this.handleToggleRotate});return r.a.createElement(Et.Provider,{value:x},d&&r.a.createElement(S,{id:"zmage",zIndex:u,className:s.a.wrapperLayer},r.a.createElement(Re,j),r.a.createElement($t,j),r.a.createElement(ke,j)))}}])&&Ae(n.prototype,o),i&&Ae(n,i),e}();Ye.contextType=Et,Ye.defaultProps={isBrowsingControlled:!1,browsing:!1,coverRef:r.a.createRef(),outBrowsing:function(){},defaultPage:0,set:[]};var Ve=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.set,n=t.src,o=t.alt,r=t.txt;return Array.isArray(e)&&e.length>0?e:[{src:n,alt:o,txt:r}]};function Xe(){return(Xe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function Ge(t){return(Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Je(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Ke(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function We(t){return(We=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function qe(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $e(t,e){return($e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var tn={REF:r.a.createRef(),CONTAINER:null,PORTAL:null},en=function(t){function e(t){var n,o,r,i,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=We(e).call(this,t),n=!r||"object"!==Ge(r)&&"function"!=typeof r?qe(o):r,i=qe(n),c=function(){var t=n.props.destroyer;n.setState({browsing:!1}),setTimeout(t,Ie)},(a="outBrowsing")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n.state={browsing:!0},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$e(t,e)}(e,r.a.PureComponent),n=e,(o=[{key:"render",value:function(){var t=this.props,e=(t.className,t.style,t.onClick,t.src),n=t.alt,o=t.txt,i=t.set,a=t.defaultPage,c=t.preset,s=t.controller,l=t.hotKey,u=t.animate,f=t.zIndex,p=t.backdrop,m=t.radius,b=t.edge,y=t.loop,d=t.onBrowsing,h=t.onZooming,g=t.onSwitching,w=t.onRotating,_=(t.browsing,Je(t,["className","style","onClick","src","alt","txt","set","defaultPage","preset","controller","hotKey","animate","zIndex","backdrop","radius","edge","loop","onBrowsing","onZooming","onSwitching","onRotating","browsing"]),this.state.browsing);return r.a.createElement(Ye,{browsing:_,outBrowsing:this.outBrowsing,defaultPage:a,set:Ve({set:i,src:e,alt:n,txt:o}),preset:c,controller:s,hotKey:l,animate:u,zIndex:f,backdrop:p,radius:m,edge:b,loop:y,onBrowsing:d,onZooming:h,onSwitching:g,onRotating:w})}}])&&Ke(n.prototype,o),i&&Ke(n,i),e}();en.propTypes=y,en.defaultProps=h;var nn=function(t){return tn.PORTAL=document.createElement("div"),tn.PORTAL.id="zmagePortal",tn.CONTAINER=document.body,tn.CONTAINER.appendChild(tn.PORTAL),a.a.render(r.a.createElement(en,Xe({ref:tn.REF,destroyer:function(){return tn.CONTAINER.removeChild(tn.PORTAL)}},t)),tn.PORTAL),tn.REF.current.outBrowsing};function on(t){return(on="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rn(){return(rn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function an(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){pn(t,e,n[e])})}return t}function cn(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function sn(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function ln(t){return(ln=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function un(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fn(t,e){return(fn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function pn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var mn=function(t){function e(t){var n,o,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,i=ln(e).call(this,t),n=!i||"object"!==on(i)&&"function"!=typeof i?un(o):i,pn(un(n),"inBrowsing",function(){n.isBrowsingControlled?n.props.onBrowsing(!0):n.setState({browsing:!0})}),pn(un(n),"outBrowsing",function(){n.isBrowsingControlled?n.props.onBrowsing(!1):n.setState({browsing:!1})}),n.coverRef=r.a.createRef(),n.isBrowsingControlled=n.props.hasOwnProperty("browsing"),n.state={browsing:!1},n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&fn(t,e)}(e,r.a.PureComponent),n=e,(i=[{key:"render",value:function(){var t=this,e=this.props,n=e.className,i=e.style,a=e.onClick,c=e.src,s=e.alt,l=e.txt,u=e.set,f=e.defaultPage,p=e.preset,m=e.controller,b=e.hotKey,y=e.animate,d=e.zIndex,h=e.backdrop,g=e.radius,w=e.edge,_=e.loop,v=e.onBrowsing,O=e.onZooming,z=e.onSwitching,k=e.onRotating,S=e.browsing,j=cn(e,["className","style","onClick","src","alt","txt","set","defaultPage","preset","controller","hotKey","animate","zIndex","backdrop","radius","edge","loop","onBrowsing","onZooming","onSwitching","onRotating","browsing"]),x=this.state.browsing;return r.a.createElement(o.Fragment,null,r.a.createElement("img",rn({ref:this.coverRef,className:n,style:an({cursor:"zoom-in"},i),src:c,alt:s,title:s,onClick:function(e){t.inBrowsing(),"function"==typeof a&&a(e)}},j)),r.a.createElement(Ye,{isBrowsingControlled:this.isBrowsingControlled,browsing:this.isBrowsingControlled?S:x,coverRef:this.coverRef,outBrowsing:this.outBrowsing,defaultPage:f,set:Ve({set:u,src:c,alt:s,txt:l}),preset:p,controller:m,hotKey:b,animate:y,zIndex:d,backdrop:h,radius:g,edge:w,loop:_,onBrowsing:v,onZooming:O,onSwitching:z,onRotating:k}))}}])&&sn(n.prototype,i),a&&sn(n,a),e}();mn.browsing=nn,mn.propTypes=y,mn.defaultProps=h,n.d(e,"default",function(){return mn})}]);

/***/ }),

/***/ 1800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * xmgl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * qiufh@glodon.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */

var _mobx = __webpack_require__(12);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _xmgl = __webpack_require__(340);

var _xmgl2 = _interopRequireDefault(_xmgl);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _construction = __webpack_require__(719);

var _construction2 = _interopRequireDefault(_construction);

var _authorization = __webpack_require__(97);

var _authorization2 = _interopRequireDefault(_authorization);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

//import { timingSafeEqual } from 'crypto';

var XmglStore = (_class = function () {
	function XmglStore() {
		_classCallCheck(this, XmglStore);

		_initDefineProp(this, 'loading', _descriptor, this);

		_initDefineProp(this, 'hasMore', _descriptor2, this);

		_initDefineProp(this, 'projectId', _descriptor3, this);

		_initDefineProp(this, 'personTableData', _descriptor4, this);

		_initDefineProp(this, 'personTotalCount', _descriptor5, this);

		_initDefineProp(this, 'personPageIndex', _descriptor6, this);

		_initDefineProp(this, 'personPageSize', _descriptor7, this);

		_initDefineProp(this, 'personVisible', _descriptor8, this);

		_initDefineProp(this, 'personEdit', _descriptor9, this);

		_initDefineProp(this, 'personType', _descriptor10, this);

		_initDefineProp(this, 'personTypeData', _descriptor11, this);

		_initDefineProp(this, 'personFields', _descriptor12, this);

		_initDefineProp(this, 'expectId', _descriptor13, this);

		_initDefineProp(this, 'qualityTableData', _descriptor14, this);

		_initDefineProp(this, 'qualityTotalCount', _descriptor15, this);

		_initDefineProp(this, 'qualityPageIndex', _descriptor16, this);

		_initDefineProp(this, 'qualityPageSize', _descriptor17, this);

		_initDefineProp(this, 'qualityVisible', _descriptor18, this);

		_initDefineProp(this, 'qualityEdit', _descriptor19, this);

		_initDefineProp(this, 'qualityType', _descriptor20, this);

		_initDefineProp(this, 'qualityFields', _descriptor21, this);

		_initDefineProp(this, 'parojectName', _descriptor22, this);

		_initDefineProp(this, 'notifyfield', _descriptor23, this);

		_initDefineProp(this, 'dailyRecord', _descriptor24, this);

		_initDefineProp(this, 'dailyTableData', _descriptor25, this);

		_initDefineProp(this, 'dailyTotalCount', _descriptor26, this);

		_initDefineProp(this, 'dailyPageIndex', _descriptor27, this);

		_initDefineProp(this, 'dailyPageSize', _descriptor28, this);

		_initDefineProp(this, 'machineTableData', _descriptor29, this);

		_initDefineProp(this, 'machineTotalCount', _descriptor30, this);

		_initDefineProp(this, 'machinePageIndex', _descriptor31, this);

		_initDefineProp(this, 'machinePageSize', _descriptor32, this);

		_initDefineProp(this, 'machineFields', _descriptor33, this);

		_initDefineProp(this, 'planTableData', _descriptor34, this);

		_initDefineProp(this, 'planTotalCount', _descriptor35, this);

		_initDefineProp(this, 'planPageIndex', _descriptor36, this);

		_initDefineProp(this, 'planPageSize', _descriptor37, this);

		_initDefineProp(this, 'planFields', _descriptor38, this);

		_initDefineProp(this, 'environmentTableData', _descriptor39, this);

		_initDefineProp(this, 'environmentTotalCount', _descriptor40, this);

		_initDefineProp(this, 'environmentPageIndex', _descriptor41, this);

		_initDefineProp(this, 'environmentPageSize', _descriptor42, this);

		_initDefineProp(this, 'environmentFields', _descriptor43, this);

		_initDefineProp(this, 'projectPeopleInfoList', _descriptor44, this);

		_initDefineProp(this, 'projectStateList', _descriptor45, this);

		_initDefineProp(this, 'qualityStateList', _descriptor46, this);

		_initDefineProp(this, 'safeStateList', _descriptor47, this);

		_initDefineProp(this, 'qualityOverallEvaluation', _descriptor48, this);

		_initDefineProp(this, 'safeOverallEvaluation', _descriptor49, this);

		_initDefineProp(this, 'projectStateDetails', _descriptor50, this);

		_initDefineProp(this, 'qualityBlue', _descriptor51, this);

		_initDefineProp(this, 'qualityYellow', _descriptor52, this);

		_initDefineProp(this, 'qualityOrange', _descriptor53, this);

		_initDefineProp(this, 'qualityRed', _descriptor54, this);

		_initDefineProp(this, 'qualityTotalSum', _descriptor55, this);

		_initDefineProp(this, 'safetyBlue', _descriptor56, this);

		_initDefineProp(this, 'safetyYellow', _descriptor57, this);

		_initDefineProp(this, 'safetyOrange', _descriptor58, this);

		_initDefineProp(this, 'safetyRed', _descriptor59, this);

		_initDefineProp(this, 'safetyTotalSum', _descriptor60, this);

		_initDefineProp(this, 'epidemicTableData', _descriptor61, this);

		_initDefineProp(this, 'epidemicTotalCount', _descriptor62, this);

		_initDefineProp(this, 'epidemicPageIndex', _descriptor63, this);

		_initDefineProp(this, 'epidemicPageSize', _descriptor64, this);

		_initDefineProp(this, 'epidemicFields', _descriptor65, this);

		_initDefineProp(this, 'positions', _descriptor66, this);

		_initDefineProp(this, 'ossData', _descriptor67, this);

		_initDefineProp(this, 'newReport', _descriptor68, this);
	} //新增人员
	// 编辑人员
	//进场人员类型 默认值null查询所有数据
	//汇总所有工种类型
	//新增人员
	// 编辑人员
	//安全类型 默认值null查询所有数据


	_createClass(XmglStore, [{
		key: 'savePerson',


		//保存进场人员
		value: function savePerson() {
			return (0, _api.requestPost)('savePerson', _config2.default.xmgl.savePerson, _xmgl2.default.xmgl.savePerson, {
				p: Object.assign({}, this.personFields, {
					projectId: this.projectId
				})
			});
		}

		//保存质量信息

	}, {
		key: 'saveQuality',
		value: function saveQuality() {
			return (0, _api.requestPost)('saveQuality', _config2.default.xmgl.saveQuality, _xmgl2.default.xmgl.saveQuality, {
				q: Object.assign({}, {
					id: this.qualityFields.id,
					question: this.qualityFields.question,
					type: this.qualityType,
					emergency: this.qualityType == 1 ? this.convertEmergencyQuality2Int(this.qualityFields.emergencyQuality) : this.convertEmergencySafe2Int(this.qualityFields.emergencySafe),
					createTime: this.qualityFields.createTime,
					state: this.convertState2Int(this.qualityFields.state),
					solveTime: this.qualityFields.solveTime,
					handler: this.qualityFields.handler,
					reviewer: this.qualityFields.reviewer,
					remark: this.qualityFields.remark,
					projectId: this.projectId,
					updateTime: this.qualityFields.updateTime,
					planSolveTime: this.qualityFields.planSolveTime
				})
			});
		}

		// 删除质量、安全

	}, {
		key: 'delQuality',
		value: function delQuality(param) {
			return (0, _api.requestPost)('delQuality', _config2.default.xmgl.delQuality, _xmgl2.default.xmgl.delQuality, {
				qualityId: param
			});
		}
	}, {
		key: 'convertType2Int',
		value: function convertType2Int(type) {
			if (type === "质量") return 1;
			if (type === "安全") return 2;
		}
	}, {
		key: 'convertType2String',
		value: function convertType2String(type) {
			if (type === 1) return "质量";
			if (type === 2) return "安全";
		}
	}, {
		key: 'convertEmergencyQuality2Int',
		value: function convertEmergencyQuality2Int(type) {
			if (type === "质量通病") return 1;
			if (type === "质量问题") return 2;
			if (type === "一般质量问题") return 3;
			if (type === "较大质量问题") return 4;
			if (type === "重大质量问题") return 5;
		}
	}, {
		key: 'convertEmergencyQuality2String',
		value: function convertEmergencyQuality2String(type) {
			if (type === 1) return "质量通病";
			if (type === 2) return "质量问题";
			if (type === 3) return "一般质量问题";
			if (type === 4) return "较大质量问题";
			if (type === 5) return "重大质量问题";
		}
	}, {
		key: 'convertEmergencySafe2Int',
		value: function convertEmergencySafe2Int(type) {
			if (type === "安全隐患") return 1;
			if (type === "一般安全事故") return 2;
			if (type === "较大安全事故") return 3;
		}
	}, {
		key: 'convertEmergencySafe2String',
		value: function convertEmergencySafe2String(type) {
			if (type === 1) return "安全隐患";
			if (type === 2) return "一般安全事故";
			if (type === 3) return "较大安全事故";
		}
	}, {
		key: 'convertState2Int',
		value: function convertState2Int(type) {
			if (type === "发现问题") return 1;
			if (type === "开始整改") return 2;
			if (type === "整改完成") return 3;
			if (type === "验收完成") return 4;
			if (type === "问题复现") return 5;
		}
	}, {
		key: 'convertState2String',
		value: function convertState2String(type) {
			if (type === 1) return "发现问题";
			if (type === 2) return "开始整改";
			if (type === 3) return "整改完成";
			if (type === 4) return "验收完成";
			if (type === 5) return "问题复现";
		}

		// 进场人员查询

	}, {
		key: 'getAllPersonByProjectIdAndType',
		value: function getAllPersonByProjectIdAndType() {
			var _this = this;

			return (0, _api.requestPost)('getAllPersonByProjectIdAndType', _config2.default.xmgl.getAllPersonByProjectIdAndType, _xmgl2.default.xmgl.getAllPersonByProjectIdAndType, {
				projectId: this.projectId,
				type: this.personType,
				pageIndex: this.personPageIndex,
				pageSize: this.personPageSize
			}).then(function (res) {
				_this.personPageIndex = res.pageIndex;
				_this.personPageSize = res.pageSize;
				_this.personTotalCount = res.totalCount;
				_this.personTableData = Object.assign([], res.body.map(function (item, index) {
					Object.assign(item, { key: index + 1 });
					if (index == 0) {
						return Object.assign(item, { selested: true });
					} else {
						return Object.assign(item, { selested: false });
					}
				}));
				return res;
			});
		}

		// 进场人员工种查询

	}, {
		key: 'getPersonType',
		value: function getPersonType() {
			var _this2 = this;

			return (0, _api.requestPost)('getAllPersonByProjectIdAndType', _config2.default.xmgl.getAllPersonByProjectIdAndType, _xmgl2.default.xmgl.getAllPersonByProjectIdAndType, {
				projectId: this.projectId,
				type: this.personType,
				pageIndex: 0,
				pageSize: 100
			}).then(function (res) {
				var tempTypeData = [];
				res.body.map(function (item, index) {
					tempTypeData.push(item.type);
				});
				var filterData = [].concat(_toConsumableArray(new Set(tempTypeData)));
				filterData = filterData.filter(function (item) {
					return item !== "";
				});
				_this2.personTypeData = Object.assign([], filterData.map(function (item) {
					return { "text": item, "value": item };
				}));
			});
		}

		// 质量数据查询

	}, {
		key: 'getAllQualityByProjectIdAndType',
		value: function getAllQualityByProjectIdAndType() {
			var _this3 = this;

			return (0, _api.requestPost)('getAllQualityByProjectIdAndType', _config2.default.xmgl.getAllQualityByProjectIdAndType, _xmgl2.default.xmgl.getAllQualityByProjectIdAndType, {
				projectId: this.projectId,
				type: this.qualityType,
				pageIndex: this.qualityPageIndex,
				pageSize: this.qualityPageSize
			}).then(function (res) {
				// let tempTypeData = [];
				_this3.qualityPageIndex = res.pageIndex;
				_this3.qualityPageSize = res.pageSize;
				_this3.qualityTotalCount = res.totalCount;
				_this3.qualityTableData = Object.assign([], res.body.map(function (item, index) {
					// tempTypeData.push(item.type);
					Object.assign(item, {
						type: _this3.convertType2String(item.type),
						emergency: item.type == 1 ? _this3.convertEmergencyQuality2String(item.emergency) : _this3.convertEmergencySafe2String(item.emergency),
						state: _this3.convertState2String(item.state),
						key: index + 1
					});
					if (index == 0) {
						return Object.assign(item, { selested: true });
					} else {
						return Object.assign(item, { selested: false });
					}
				}));

				// let filterData = [...new Set(tempTypeData)];
				// filterData = filterData.filter(item => {
				//   return item!==""
				// });
				// this.personTypeData = Object.assign([],filterData.map(item => {
				//   return {"text":item,"value":item}
				// }));

				return res;
			});
		} // 项目名称
		//项目设置字段

	}, {
		key: 'saveWorkContent',
		// 施工日志字段
		/*// 添加施工日志
  @action addDailyRecord () {
    return requestPost('addDailyRecord', Config.xmgl.addDailyRecord, Schemas.xmgl.addDailyRecord, {
  	projectId: this.projectId,
    }).then((res)=>{
  	this.dailyRecord = Object.assign({}, res);
  	return res;
    })
  }*/

		// 保存施工日志
		value: function saveWorkContent() {
			return (0, _api.requestPost)('saveWorkContent', _config2.default.xmgl.saveWorkContent, _xmgl2.default.xmgl.saveWorkContent, {
				workContent: this.dailyRecord
			});
		}

		// 删除施工日志

	}, {
		key: 'delDailyRecord',
		value: function delDailyRecord(param) {
			return (0, _api.requestPost)('delWorkContent', _config2.default.xmgl.delWorkContent, _xmgl2.default.xmgl.delWorkContent, {
				workContentId: param
			});
		}
	}, {
		key: 'getWorkContentList',


		// 查询施工日志
		value: function getWorkContentList() {
			var _this4 = this;

			return (0, _api.requestPost)('getWorkContentList', _config2.default.xmgl.getWorkContentList, _xmgl2.default.xmgl.getWorkContentList, {
				projectId: this.projectId,
				text: "",
				pageIndex: this.dailyPageIndex,
				pageSize: this.dailyPageSize
			}).then(function (res) {
				_this4.dailyPageIndex = res.pageIndex;
				_this4.dailyPageSize = res.pageSize;
				_this4.dailyTotalCount = res.totalCount;
				_this4.dailyTableData = Object.assign([], res.body.length ? res.body.map(function (item, index) {
					return Object.assign(item, { key: index + 1 });
				}) : []);
				return res;
			});
		}

		// 获取推送设置

	}, {
		key: 'getNotifyProject',
		value: function getNotifyProject() {
			var _this5 = this;

			return (0, _api.requestPost)('getNotifyProject', _config2.default.construction.getNotifyProject, _construction2.default.construction.getNotifyProject, {
				projectId: this.projectId
			}).then(function (res) {
				_this5.notifyfield = Object.assign({}, res.notifys == null ? _extends({}, res, {
					wecat: false,
					email: false
				}) : _extends({}, res, { wecat: JSON.parse(res.notifys[0]).wecat, email: JSON.parse(res.notifys[1]).email }));
				return res;
			});
		}

		// 保存推送设置

	}, {
		key: 'saveNotifyProject',
		value: function saveNotifyProject(params) {
			return (0, _api.requestPost)('saveNotifyProject', _config2.default.construction.saveNotifyProject, _construction2.default.construction.saveNotifyProject, {
				simpleProject: params
			});
		}
	}, {
		key: 'getAllMachineByProjectIdAndType',
		// 机械字段

		// 获取进场机械设备
		value: function getAllMachineByProjectIdAndType() {
			var _this6 = this;

			return (0, _api.requestPost)('getAllMachineByProjectIdAndType', _config2.default.xmgl.getAllMachineByProjectIdAndType, _xmgl2.default.xmgl.getAllMachineByProjectIdAndType, {
				projectId: this.projectId,
				type: "",
				pageIndex: this.machinePageIndex,
				pageSize: this.machinePageSize
			}).then(function (res) {
				_this6.machinePageIndex = res.pageIndex;
				_this6.machinePageSize = res.pageSize;
				_this6.machineTotalCount = res.totalCount;
				_this6.machineTableData = Object.assign([], res.body.length ? res.body.map(function (item, index) {
					return Object.assign(item, { key: index + 1 });
				}) : []);
				return res;
			});
		}

		// 保存机械

	}, {
		key: 'saveMachine',
		value: function saveMachine() {
			return (0, _api.requestPost)('saveMachine', _config2.default.xmgl.saveMachine, _xmgl2.default.xmgl.saveMachine, {
				machine: this.machineFields
			});
		}

		// 删除人员

	}, {
		key: 'delPerson',
		value: function delPerson(param) {
			return (0, _api.requestPost)('delPerson', _config2.default.xmgl.delPerson, _xmgl2.default.xmgl.delPerson, {
				personId: param
			});
		}

		// 删除设备

	}, {
		key: 'delMachine',
		value: function delMachine(param) {
			return (0, _api.requestPost)('delMachine', _config2.default.xmgl.delMachine, _xmgl2.default.xmgl.delMachine, {
				machineId: param
			});
		}

		// 进度

	}, {
		key: 'getPlanList',
		// 进度字段

		// 获取进度列表
		value: function getPlanList() {
			var _this7 = this;

			return (0, _api.requestPost)('getPlanList', _config2.default.xmgl.getPlanList, _xmgl2.default.xmgl.getPlanList, {
				projectId: this.projectId,
				text: '',
				pageIndex: this.planPageIndex,
				pageSize: this.planPageSize
			}).then(function (res) {
				_this7.planPageIndex = res.pageIndex;
				_this7.planPageSize = res.pageSize;
				_this7.planTotalCount = res.totalCount;
				_this7.planTableData = Object.assign([], res.body.length ? res.body.map(function (item, index) {
					return Object.assign(item, { key: index + 1 });
				}) : []);
				return res;
			});
		}

		// 保存进度

	}, {
		key: 'savePlan',
		value: function savePlan(param) {
			return (0, _api.requestPost)('savePlan', _config2.default.xmgl.savePlan, _xmgl2.default.xmgl.savePlan, {
				plan: param
			});
		}

		// 删除进度

	}, {
		key: 'delPlan',
		value: function delPlan(param) {
			return (0, _api.requestPost)('delPlan', _config2.default.xmgl.delPlan, _xmgl2.default.xmgl.delPlan, {
				planId: param
			});
		}

		// 获取今日计划

	}, {
		key: 'getTodayGoals',
		value: function getTodayGoals(param) {
			return (0, _api.requestPost)('getTodayGoals', _config2.default.xmgl.getTodayGoals, _xmgl2.default.xmgl.getTodayGoals, {
				projectId: this.projectId,
				date: param
			});
		}

		// 环境

	}, {
		key: 'getEnvironmentList',
		// 环境字段

		// 获取环境列表
		value: function getEnvironmentList() {
			var _this8 = this;

			return (0, _api.requestPost)('getEnvironmentList', _config2.default.xmgl.getEnvironmentList, _xmgl2.default.xmgl.getEnvironmentList, {
				projectId: this.projectId,
				text: '',
				pageIndex: this.environmentPageIndex,
				pageSize: this.environmentPageSize
			}).then(function (res) {
				_this8.environmentPageIndex = res.pageIndex;
				_this8.environmentPageSize = res.pageSize;
				_this8.environmentTotalCount = res.totalCount;
				_this8.environmentTableData = Object.assign([], res.body.length ? res.body.map(function (item, index) {
					return Object.assign(item, { key: index + 1 });
				}) : []);
				return res;
			});
		}

		// 保存环境

	}, {
		key: 'saveEnvironment',
		value: function saveEnvironment() {
			return (0, _api.requestPost)('saveEnvironment', _config2.default.xmgl.saveEnvironment, _xmgl2.default.xmgl.saveEnvironment, {
				environment: this.environmentFields
			});
		}

		// 删除环境

	}, {
		key: 'delEnvironment',
		value: function delEnvironment(param) {
			return (0, _api.requestPost)('delEnvironment', _config2.default.xmgl.delEnvironment, _xmgl2.default.xmgl.delEnvironment, {
				environmentId: param
			});
		}

		// 根据日期查询天气数据

	}, {
		key: 'getWeatherByDate',
		value: function getWeatherByDate() {
			var _this9 = this;

			return (0, _api.requestPost)('getWeatherByDate', _config2.default.xmgl.getWeatherByDate, _xmgl2.default.xmgl.getWeatherByDate, {
				projectId: this.projectId,
				reportTime: this.environmentFields["date"]
			}).then(function (res) {
				var weatherData = "天气：" + res.liveWeatherName + ", 温度范围：(" + res.minTemp + "--" + res.maxTemp + ")(℃), " + "风力：" + res.windPowerDesc + "级, " + "风向：" + res.windDirectionDesc;
				_this9.environmentFields = Object.assign(_this9.environmentFields, { "text": weatherData });
			});
		}

		// 发送通知

	}, {
		key: 'sendNotifys',
		value: function sendNotifys(param) {
			return (0, _api.requestPost)('sendNotifys', _config2.default.xmgl.sendNotifys, _xmgl2.default.xmgl.sendNotifys, {
				workContentId: param
			});
		} // 获取项目人员情况分页
		// 项目进度状态列表 state=0 全部，1在建2完工
		// 质量状态列表 state0全部，1在建2完工
		// 安全状态列表 0全部，1在建2完工
		//整体质量评估
		//整体质量评估
		// 项目进度详情

		//blue
		//yellow
		//orange
		//red

		//blue
		//yellow
		//orange
		//red

	}, {
		key: 'getProjectPeopleInfoList',


		// 查询项目人员情况
		value: function getProjectPeopleInfoList(params) {
			return (0, _api.requestPost)('getProjectPeopleInfoList', _config2.default.xmgl.getProjectPeopleInfoList, _xmgl2.default.xmgl.getProjectPeopleInfoList, params);
		}

		// 查询项目进度情况列表

	}, {
		key: 'getProjectStateList',
		value: function getProjectStateList(params) {
			return (0, _api.requestPost)('getProjectStateList', _config2.default.xmgl.getProjectStateList, _xmgl2.default.xmgl.getProjectStateList, params);
		}

		// 查询质量情况列表

	}, {
		key: 'getQualityStateList',
		value: function getQualityStateList(params) {
			return (0, _api.requestPost)('getQualityStateList', _config2.default.xmgl.getQualityStateList, _xmgl2.default.xmgl.getQualityStateList, params);
		}

		// 查询安全情况列表

	}, {
		key: 'getSafeStateList',
		value: function getSafeStateList(params) {
			return (0, _api.requestPost)('getSafeStateList', _config2.default.xmgl.getSafeStateList, _xmgl2.default.xmgl.getSafeStateList, params);
		}

		// 查询项目进度详情

	}, {
		key: 'getProjectListByStateAndType',
		value: function getProjectListByStateAndType(params) {
			return (0, _api.requestPost)('getProjectListByStateAndType', _config2.default.construction.getProjectListByStateAndType, _construction2.default.construction.getProjectListByStateAndType, params);
		}

		// 没有解决的1 质量 2 安全问题列表

	}, {
		key: 'getQualityNoSolveByType',
		value: function getQualityNoSolveByType(params) {
			return (0, _api.requestPost)('getQualityNoSolveByType', _config2.default.xmgl.getQualityNoSolveByType, _xmgl2.default.xmgl.getQualityNoSolveByType, params);
		}

		// 疫情防控

	}, {
		key: 'getEpidemicList',
		// 进度字段

		// 获取疫情防控列表
		value: function getEpidemicList() {
			var _this10 = this;

			return (0, _api.requestPost)('getEpidemicList', _config2.default.xmgl.getEpidemicList, _xmgl2.default.xmgl.getEpidemicList, {
				projectId: this.projectId,
				text: '',
				pageIndex: this.epidemicPageIndex,
				pageSize: this.epidemicPageSize
			}).then(function (res) {
				_this10.epidemicPageIndex = res.pageIndex;
				_this10.epidemicPageSize = res.pageSize;
				_this10.epidemicTotalCount = res.totalCount;
				_this10.epidemicTableData = Object.assign([], res.body.length ? res.body.map(function (item, index) {
					return Object.assign(item, { key: index + 1 });
				}) : []);
				return res;
			});
		}

		// 保存疫情防控

	}, {
		key: 'saveEpidemic',
		value: function saveEpidemic(param) {
			return (0, _api.requestPost)('saveEpidemic', _config2.default.xmgl.saveEpidemic, _xmgl2.default.xmgl.saveEpidemic, {
				e: param
			});
		}

		// 删除疫情防控

	}, {
		key: 'delEpidemic',
		value: function delEpidemic(param) {
			return (0, _api.requestPost)('delEpidemic', _config2.default.xmgl.delEpidemic, _xmgl2.default.xmgl.delEpidemic, {
				id: param
			});
		}

		// 获取疫情防控

	}, {
		key: 'getEpidemicByDate',
		value: function getEpidemicByDate(param) {
			return (0, _api.requestPost)('getEpidemicByDate', _config2.default.xmgl.getEpidemicByDate, _xmgl2.default.xmgl.getEpidemicByDate, param);
		}
	}, {
		key: 'getPositionList',


		// 按照日期获取定点照片
		value: function getPositionList(param) {
			return (0, _api.requestPost)('getPositionList', _config2.default.xmgl.getPositionList, _xmgl2.default.xmgl.getPositionList, param);
		}
	}, {
		key: 'getSts',
		// 阿里云上传参数

		// 获取大文件上传sts
		value: function getSts() {
			var _this11 = this;

			return (0, _api.requestPost)('getSts', _config2.default.bpm.getSts, _bpm2.default.bpm.getSts, {}).then(function (res) {
				var str = typeof res == "string" ? JSON.parse(res) : res;
				if (str) {
					_this11.ossData = Object.assign({}, str);
				}
				return res;
			});
		}

		// 人员

	}, {
		key: 'getRole',
		value: function getRole() {
			return (0, _api.requestPost)('getUserInfoListByCodeOrText', _config2.default.authorization.getUserInfoListByCodeOrText, _authorization2.default.authorization.getUserInfoListByCodeOrText, {
				appId: "bocspace",
				code: "bocspace.group",
				text: "",
				pageIndex: 1, // 暂时处理
				pageSize: 200 // 暂时这样处理
			});
		}
	}, {
		key: 'getNewReport',


		// 根据查询时间获取新汇报内容
		value: function getNewReport() {
			return (0, _api.requestPost)('getNewReport', _config2.default.xmgl.getNewReport, _xmgl2.default.xmgl.getNewReport, {
				projectId: this.newReport.projectId,
				beginTime: this.newReport.beginTime,
				endTime: this.newReport.endTime,
				nextBeginTime: this.newReport.nextBeginTime,
				nextEndTime: this.newReport.nextEndTime
			});
		}

		// 发送邮件

	}, {
		key: 'sendReport',
		value: function sendReport(param) {
			return (0, _api.requestPost)('sendReport', _config2.default.xmgl.sendReport, _xmgl2.default.xmgl.sendReport, param);
		}

		// 发送邮件

	}, {
		key: 'sendReportEmail',
		value: function sendReportEmail(param) {
			return (0, _api.requestPost)('sendReportEmail', _config2.default.xmgl.sendReportEmail, _xmgl2.default.xmgl.sendReportEmail, param);
		}

		// 下载pdf

	}, {
		key: 'downloadReport',
		value: function downloadReport(param) {
			return (0, _api.requestPost)('downloadReport', _config2.default.xmgl.downloadReport, _xmgl2.default.xmgl.downloadReport, param);
		}

		// 下载pdf

	}, {
		key: 'getReportUrl',
		value: function getReportUrl(param) {
			return (0, _api.requestPost)('getReportUrl', _config2.default.xmgl.getReportUrl, _xmgl2.default.xmgl.getReportUrl, param);
		}

		// getDayTaskByDate

	}, {
		key: 'getDayTaskByDate',
		value: function getDayTaskByDate(param) {
			return (0, _api.requestPost)('getDayTaskByDate', _config2.default.xmgl.getDayTaskByDate, _xmgl2.default.xmgl.getDayTaskByDate, param);
		}
	}]);

	return XmglStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'loading', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'hasMore', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return true;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'projectId', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'personTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'personTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'personPageIndex', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 1;
	}
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'personPageSize', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 10;
	}
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'personVisible', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'personEdit', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'personType', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'personTypeData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'personFields', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"id": null,
			"projectId": "1",
			"date": null,
			"count": 0,
			"type": "普工",
			"averageHours": 8,
			// "remark": "",
			"dateEnd": null,
			"time": (0, _moment2.default)().format("YYYY-MM-DD"),
			"startTime": "08:00:00",
			"endTime": "18:00:00",
			"taskId": '',
			"expectResourceId": "",
			"resourceType": "人",
			"dayTaskName": ""
		};
	}
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'expectId', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'qualityTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'qualityTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'qualityPageIndex', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 1;
	}
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'qualityPageSize', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 10;
	}
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'qualityVisible', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'qualityEdit', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'qualityType', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'qualityFields', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"id": null,
			"question": "",
			"type": 1, //类型：1质量 2安全 存储到后台时是存储的类型对应数字
			"emergencyQuality": "质量通病", //质量问题紧急程度：state1:质量通病|state2:质量问题|state3:一般质量问题|state4:较大质量问题|state5:重大质量问题
			"emergencySafe": "安全隐患", //安全问题紧急程度：state1:安全隐患|state2:一般安全事故|state3:较大安全事故
			"createTime": null,
			"state": "发现问题", //问题状态：1发现问题2开始整改3整改完成4验收完成5问题复现 存储到后台时是存储的类型对应数字
			"solveTime": null,
			// "handler": "",
			"reviewer": "",
			"remark": "",
			planSolveTime: null
		};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'savePerson', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'savePerson'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveQuality', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveQuality'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delQuality', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delQuality'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getAllPersonByProjectIdAndType', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllPersonByProjectIdAndType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getPersonType', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPersonType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getAllQualityByProjectIdAndType', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllQualityByProjectIdAndType'), _class.prototype), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'parojectName', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'notifyfield', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			beginTime: null,
			endTime: null,
			floorage: "",
			notifys: [{ wecat: false }, { email: false }],
			wecat: false,
			email: false,
			userIds: [],
			projectId: ""
		};
	}
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'dailyRecord', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"id": "",
			"projectId": "",
			"date": null,
			"environment": null,
			"workdetails": [{
				"id": "",
				"workContentId": "",
				"name": "",
				"date": "08:00:00",
				"dateEnd": "18:00:00",
				"peopleCount": 1,
				"prepare": "",
				"constHour": "8",
				"method": ""
			}]
		};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'saveWorkContent', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveWorkContent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delDailyRecord', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delDailyRecord'), _class.prototype), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'dailyTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'dailyTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'dailyPageIndex', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 1;
	}
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'dailyPageSize', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 10;
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getWorkContentList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getWorkContentList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getNotifyProject', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getNotifyProject'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveNotifyProject', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveNotifyProject'), _class.prototype), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, 'machineTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, 'machineTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, 'machinePageIndex', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 1;
	}
}), _descriptor32 = _applyDecoratedDescriptor(_class.prototype, 'machinePageSize', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 10;
	}
}), _descriptor33 = _applyDecoratedDescriptor(_class.prototype, 'machineFields', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"id": "", "name": "", "projectId": "", "date": null, "dateEnd": null, "count": 0,
			"time": (0, _moment2.default)().format("YYYY-MM-DD"),
			"startTime": "08:00:00",
			"endTime": "18:00:00",
			"units": "", "type": "", "averageHours": null, "remark": "",
			"taskId": '',
			"expectResourceId": "",
			"resourceType": "机",
			"dayTaskName": ""
		};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getAllMachineByProjectIdAndType', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllMachineByProjectIdAndType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveMachine', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveMachine'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delPerson', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delPerson'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delMachine', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delMachine'), _class.prototype), _descriptor34 = _applyDecoratedDescriptor(_class.prototype, 'planTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor35 = _applyDecoratedDescriptor(_class.prototype, 'planTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor36 = _applyDecoratedDescriptor(_class.prototype, 'planPageIndex', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 1;
	}
}), _descriptor37 = _applyDecoratedDescriptor(_class.prototype, 'planPageSize', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 10;
	}
}), _descriptor38 = _applyDecoratedDescriptor(_class.prototype, 'planFields', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"projectId": "",
			"id": null,
			"date": (0, _moment2.default)().format("YYYY-MM-DD"),
			"attachments": [],
			"goals": [],
			"goalsTomorrow": [{
				"id": "",
				"projectId": '',
				"text": "",
				"rate": 100,
				"date": null,
				"ztaskId": ""
			}],
			"text": "",
			"positions": [],
			"dayTasks": []
		};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getPlanList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPlanList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'savePlan', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'savePlan'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delPlan', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delPlan'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getTodayGoals', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getTodayGoals'), _class.prototype), _descriptor39 = _applyDecoratedDescriptor(_class.prototype, 'environmentTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor40 = _applyDecoratedDescriptor(_class.prototype, 'environmentTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor41 = _applyDecoratedDescriptor(_class.prototype, 'environmentPageIndex', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 1;
	}
}), _descriptor42 = _applyDecoratedDescriptor(_class.prototype, 'environmentPageSize', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 10;
	}
}), _descriptor43 = _applyDecoratedDescriptor(_class.prototype, 'environmentFields', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"id": null,
			"projectId": "",
			"date": null,
			"text": ""
			// "remark":""
		};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getEnvironmentList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getEnvironmentList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveEnvironment', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveEnvironment'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delEnvironment', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delEnvironment'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getWeatherByDate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getWeatherByDate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sendNotifys', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'sendNotifys'), _class.prototype), _descriptor44 = _applyDecoratedDescriptor(_class.prototype, 'projectPeopleInfoList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor45 = _applyDecoratedDescriptor(_class.prototype, 'projectStateList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor46 = _applyDecoratedDescriptor(_class.prototype, 'qualityStateList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor47 = _applyDecoratedDescriptor(_class.prototype, 'safeStateList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor48 = _applyDecoratedDescriptor(_class.prototype, 'qualityOverallEvaluation', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor49 = _applyDecoratedDescriptor(_class.prototype, 'safeOverallEvaluation', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor50 = _applyDecoratedDescriptor(_class.prototype, 'projectStateDetails', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor51 = _applyDecoratedDescriptor(_class.prototype, 'qualityBlue', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor52 = _applyDecoratedDescriptor(_class.prototype, 'qualityYellow', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor53 = _applyDecoratedDescriptor(_class.prototype, 'qualityOrange', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor54 = _applyDecoratedDescriptor(_class.prototype, 'qualityRed', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor55 = _applyDecoratedDescriptor(_class.prototype, 'qualityTotalSum', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor56 = _applyDecoratedDescriptor(_class.prototype, 'safetyBlue', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor57 = _applyDecoratedDescriptor(_class.prototype, 'safetyYellow', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor58 = _applyDecoratedDescriptor(_class.prototype, 'safetyOrange', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor59 = _applyDecoratedDescriptor(_class.prototype, 'safetyRed', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor60 = _applyDecoratedDescriptor(_class.prototype, 'safetyTotalSum', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProjectPeopleInfoList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProjectPeopleInfoList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getProjectStateList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProjectStateList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getQualityStateList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getQualityStateList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getSafeStateList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getSafeStateList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getProjectListByStateAndType', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProjectListByStateAndType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getQualityNoSolveByType', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getQualityNoSolveByType'), _class.prototype), _descriptor61 = _applyDecoratedDescriptor(_class.prototype, 'epidemicTableData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor62 = _applyDecoratedDescriptor(_class.prototype, 'epidemicTotalCount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor63 = _applyDecoratedDescriptor(_class.prototype, 'epidemicPageIndex', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 1;
	}
}), _descriptor64 = _applyDecoratedDescriptor(_class.prototype, 'epidemicPageSize', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 10;
	}
}), _descriptor65 = _applyDecoratedDescriptor(_class.prototype, 'epidemicFields', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"projectId": "",
			"id": null,
			"date": (0, _moment2.default)().format("YYYY-MM-DD"),
			"normalTemperature": "true",
			"protect": "true",
			"disinfection": "true",
			"normalTemperatureText": "",
			"protectText": "",
			"disinfectionText": "",
			"attachments": []
		};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getEpidemicList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getEpidemicList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveEpidemic', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveEpidemic'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delEpidemic', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delEpidemic'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getEpidemicByDate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getEpidemicByDate'), _class.prototype), _descriptor66 = _applyDecoratedDescriptor(_class.prototype, 'positions', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getPositionList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPositionList'), _class.prototype), _descriptor67 = _applyDecoratedDescriptor(_class.prototype, 'ossData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"securityToken": "",
			"accessKeyId": "",
			"accessKeySecret": "",
			"expiration": null
		};
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getSts', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getSts'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getRole', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getRole'), _class.prototype), _descriptor68 = _applyDecoratedDescriptor(_class.prototype, 'newReport', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { // 周报内容
			"projectId": "",
			"projectName": "",
			"beginTime": 0,
			"endTime": 0,
			"nextBeginTime": 0,
			"nextEndTime": 0,
			"keyIssues": "",
			"personDates": [],
			"materialApproach": "",
			"materials": [],
			"attachments": [],
			"nextAttachments": [],
			"zplanTasks": [],
			"nextZplanTasks": [],
			"qualities": [],
			"positions": [],
			"emails": [],
			"emailUserIds": [] };
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getNewReport', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getNewReport'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sendReport', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'sendReport'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sendReportEmail', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'sendReportEmail'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'downloadReport', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'downloadReport'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getReportUrl', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getReportUrl'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDayTaskByDate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDayTaskByDate'), _class.prototype)), _class);
exports.default = XmglStore;

/***/ })

});
//# sourceMappingURL=28-afa7d4b4bae6ff2924e9.1629092961041.js.map