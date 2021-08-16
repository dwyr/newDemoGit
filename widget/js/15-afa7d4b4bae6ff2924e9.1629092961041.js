webpackJsonp([15],{

/***/ 1501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  *运维管理--详情
                  *qiufh@bocspace.cn
                  */

//import AsyncSelect from '@/components/common/AsyncSelect';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _reactScrollableAnchor = __webpack_require__(1916);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _ProjectStore = __webpack_require__(1660);

var _ProjectStore2 = _interopRequireDefault(_ProjectStore);

var _RepairDetails = __webpack_require__(2053);

var _RepairDetails2 = _interopRequireDefault(_RepairDetails);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _AsyncSelectMuti = __webpack_require__(1536);

var _AsyncSelectMuti2 = _interopRequireDefault(_AsyncSelectMuti);

var _cityData = __webpack_require__(1537);

var _cityData2 = _interopRequireDefault(_cityData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = _antd.Anchor.Link;
/*const customizeRenderEmpty = () => (
	<div style={{ textAlign: 'center',padding: '50px 0'}}>
		<img
			width='150px'
			height="100px"
			src='./images/not_found.png' />
		<p style={{
			fontSize:'14px',
			fontFamily:'PingFangSC-Regular,PingFang S',
			fontWeight: '400',
			color: 'rgba(75,80,81,1)'
		}}>暂无数据</p>
	</div>
);*/

var keys = [];

var ProjectDetails = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(ProjectDetails, _React$Component);

	function ProjectDetails(props) {
		var _this2 = this;

		_classCallCheck(this, ProjectDetails);

		var _this = _possibleConstructorReturn(this, (ProjectDetails.__proto__ || Object.getPrototypeOf(ProjectDetails)).call(this, props));

		_this.state = {
			editable: false,
			actionName: '展开',
			expandedKeys: [],
			basicInfoEditable: false,
			projectInfoEditable: false,
			basicInfoEditLable: '编辑',
			projectInfoEditLable: '编辑',
			code: '',
			allprostate: "",
			statuslistid: ""
		};

		_this.loadPageInfo = function (code) {
			if (typeof code !== "undefined") {
				_this.store.getProductMaintenanceInfo(code).then(function (res) {
					var product = res.product,
					    project = res.project,
					    repairData = res.repairData;

					_this.store.projectName = project.name;
					_this.store.repairData = Object.assign([], repairData.map(function (item, key) {
						return Object.assign(item, { "key": key + 1 });
					}));
					_this.store.product = Object.assign(_this.store.product, product);

					_this.store.project = Object.assign(_this.store.project, project);

					_this.showExpandRepairData();
					_this.store.getSupplierListByprojectId(project.id);
				});
			}
		};

		_this.showExpandRepairData = function () {
			var _this$state = _this.state,
			    allprostate = _this$state.allprostate,
			    statuslistid = _this$state.statuslistid;

			if (allprostate != "") _this.getRepairDataByAllProState(allprostate);
			if (statuslistid != "") _this.getRepairDataByStatuslistId(statuslistid);
		};

		_this.getRepairDataByAllProState = function (state) {
			var _this$state2 = _this.state,
			    code = _this$state2.code,
			    allprostate = _this$state2.allprostate;
			var repairData = _this.store.repairData;

			var repairDataObj = mobx.toJS(repairData);
			(0, _reactScrollableAnchor.goToAnchor)("/project/details/maintenanceinfo?code=" + code + "&allprostate=" + allprostate);
			if (repairDataObj.length == 0) return;
			return;
			// let showRows = [];
			// if(state>0 && state<=3) {
			// 	showRows = repairDataObj.filter(item=>{
			// 		return item.state==state
			// 	})
			// }else{
			// 	showRows = repairDataObj.filter(item=>{
			// 		return item.state==4 || item.state==5 || item.state==0
			// 	})
			// }
			// this.getKeyByShowRow(showRows);
		};

		_this.getRepairDataByStatuslistId = function (id) {
			var repairData = _this.store.repairData;

			var repairDataObj = mobx.toJS(repairData);
			if (repairDataObj.length == 0) return;
			var showRows = repairDataObj.filter(function (item) {
				return item.id == id;
			});
			_this.getKeyByShowRow(showRows);
		};

		_this.getKeyByShowRow = function (showRows) {
			var _this$state3 = _this.state,
			    expandedKeys = _this$state3.expandedKeys,
			    statuslistid = _this$state3.statuslistid,
			    code = _this$state3.code;

			if (showRows.length == 0) return;
			expandedKeys.push(showRows[0]['key']);
			_this.setState(expandedKeys, function () {
				(0, _reactScrollableAnchor.goToAnchor)("/project/details?code=" + code + "&statuslistid=" + statuslistid);
			});
		};

		_this.saveExpandedRows = function (key) {
			if (keys.indexOf(key) >= 0) {
				keys.splice(keys.indexOf(key), 1);
			} else {
				keys.push(key);
			}
			_this.setState({ expandedKeys: keys });
		};

		_this.basicInfoEdit = function (name) {
			if (name == "编辑") {

				_this.setState({ basicInfoEditable: true, basicInfoEditLable: '保存' });
			}
			if (name == "保存") {
				_this.saveProduct();
				_this.setState({ basicInfoEditable: false, basicInfoEditLable: '编辑' });
			}
		};

		_this.projectInfoEdit = function (name) {
			if (name == "编辑") {

				_this.setState({ projectInfoEditable: true, projectInfoEditLable: '保存' });
			}
			if (name == "保存") {
				_this.saveProduct();
				_this.saveProject();
			}
		};

		_this.productOnChange = function (type, value) {
			_this.store.product[type] = value;
		};

		_this.saveProduct = function () {
			var product = _this.store.product;

			_this.store.updateProduct(product);
		};

		_this.projectOnChange = function (type, value) {
			_this.store.project[type] = value;
		};

		_this.onDateChange = function (type, value, dateString) {
			var val = value == null || value == "" ? 0 : (0, _moment2.default)(value, 'YYYY-MM-DD').valueOf();
			_this.store.project[type] = val;
		};

		_this.saveProject = function () {
			var project = _this.store.project;

			if (project.name == null || project.name == "") {
				_antd.message.warn("项目名称是必填项");
				return false;
			}
			_this.store.updateProject(project).then(function (response) {
				if (response == true) {
					_antd.message.success('保存成功');
					_this.setState({ projectInfoEditable: false, projectInfoEditLable: '编辑' });
				} else {
					_antd.message.error('保存失败');
				}
			});
		};

		_this.handleDetailsSave = function (record) {
			var repairData = _this.store.repairData;

			_this.store.repairData = Object.assign([], mobx.toJS(repairData).map(function (item, key) {
				if (item.key == record.key) {
					return record;
				} else {
					return item;
				}
			}));
		};

		_this.filter = function (inputValue, path) {
			return path.some(function (option) {
				return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
			});
		};

		_this.cityChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type, value) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this.store.project[type] = Object.assign([], value);
								//console.log(value, value.join(""), '地区')
								//if (value && value.length) {
								//const param = value.join("");
								// 获取经纬度
								//this.onSearchAddress(param);
								//}

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}();

		_this.store = new _ProjectStore2.default();
		return _this;
	}

	_createClass(ProjectDetails, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var search = this.props.location.search;
			var code = _url2.default.parse(search, true).query.code;
			this.setState({ code: code });

			if (_url2.default.parse(search, true).query.allprostate != null) {
				var allprostate = _url2.default.parse(search, true).query.allprostate;
				this.setState({ allprostate: allprostate });
			}
			if (_url2.default.parse(search, true).query.statuslistid != null) {
				var statuslistid = _url2.default.parse(search, true).query.statuslistid;
				this.setState({ statuslistid: statuslistid });
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var code = this.state.code;

			this.loadPageInfo(code);
		}

		// 地区筛选


		// 地区选择

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this,
			    _React$createElement;

			var _state = this.state,
			    editable = _state.editable,
			    actionName = _state.actionName,
			    expandedKeys = _state.expandedKeys,
			    basicInfoEditLable = _state.basicInfoEditLable,
			    projectInfoEditLable = _state.projectInfoEditLable,
			    basicInfoEditable = _state.basicInfoEditable,
			    projectInfoEditable = _state.projectInfoEditable,
			    code = _state.code,
			    statuslistid = _state.statuslistid,
			    allprostate = _state.allprostate;
			var _store = this.store,
			    projectName = _store.projectName,
			    repairData = _store.repairData,
			    product = _store.product,
			    project = _store.project;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 6 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 16 }
				}
			};

			var formItemLayout2 = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 12 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 12 }
				}
			};

			var formItemLayout3 = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 8 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 12 }
				}
			};

			var expandedRowRender = function expandedRowRender(record) {
				var _state2 = _this3.state,
				    code = _state2.code,
				    statuslistid = _state2.statuslistid,
				    allprostate = _state2.allprostate;

				return _react2.default.createElement(_RepairDetails2.default, {
					code: code,
					store: _this3.store,
					statuslistid: statuslistid,
					allprostate: allprostate,
					record: record,
					collapseOnChange: function collapseOnChange(key) {
						return _this3.saveExpandedRows(key);
					},
					handleDetailsSave: function handleDetailsSave(record) {
						_this3.handleDetailsSave(record);
					} });
			};

			var getCurrentAnchor = function getCurrentAnchor() {
				var _state3 = _this3.state,
				    code = _state3.code,
				    statuslistid = _state3.statuslistid,
				    allprostate = _state3.allprostate;

				var url = "#/project/details/projectinfo?code=" + code;
				if (allprostate != "" || statuslistid != "") url = "#/project/details/maintenanceinfo?code=" + code + "&allprostate=" + allprostate;
				return url;
			};

			var columns = [{ title: '序号', dataIndex: 'key', align: 'left', width: '5%' }, { title: '报修时间', dataIndex: 'createTime', align: 'center', width: '9%', render: function render(text, record) {
					return text === 0 || text === null || text === undefined ? "" : (0, _moment2.default)(text).format("YYYY.MM.DD.HH:mm");
				} }, { title: '报修项目', dataIndex: 'itemName', align: 'center', width: '9%' }, { title: '报修人', dataIndex: 'applicantUser', align: 'center', width: '9%' }, { title: '受理人', dataIndex: 'accept.acceptUserName', align: 'center', width: '9%' }, { title: '受理时间', dataIndex: 'acceptTime', align: 'center', width: '9%', render: function render(text, record) {
					return text === 0 || text === null || text === undefined ? "" : (0, _moment2.default)(text).format("YYYY.MM.DD.HH:mm");
				} }, { title: '维修单位', dataIndex: 'accept.unit', align: 'center', width: '9%' }, { title: '维修结果', dataIndex: 'maintenanceRecord.result', align: 'center', width: '9%', render: function render(text, record) {
					return text == null ? " " : text === true ? "已解决" : "未解决";
				} }, { title: '客户确认', dataIndex: 'maintenanceRecord.confirmation', align: 'center', width: '9%', render: function render(text, record) {
					return text == null ? " " : text === true ? "已验收" : "未验收";
				} }, { title: '确认人', dataIndex: 'maintenanceRecord.confirmationName', align: 'center', width: '9%' }, { title: '确认时间', dataIndex: 'maintenanceRecord.confirmationTime', align: 'center', width: '9%', render: function render(text, record) {
					return text === 0 || text === null || text === undefined ? "" : (0, _moment2.default)(text).format("YYYY.MM.DD.HH:mm");
				} }, { title: '操作', dataIndex: 'state', align: 'center', render: function render(text, record) {
					var actionName = '展开';
					if (text == 1) actionName = '确认';
					if (expandedKeys.filter(function (item) {
						return item == record.key;
					}).length > 0) actionName = _react2.default.createElement(_antd.Icon, { style: { color: '#808080' }, rotate: 90, type: 'double-right' });
					return _react2.default.createElement(
						'a',
						{ id: '/project/details?code=' + code + '&statuslistid=' + statuslistid },
						actionName
					);
				} }];

			return _react2.default.createElement(
				'div',
				{ style: { width: '100%', padding: '10px 15px' } },
				_react2.default.createElement(
					'div',
					{ className: 'con_bottom' },
					_react2.default.createElement(
						_antd.Breadcrumb,
						{ separator: '>' },
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							_react2.default.createElement(
								'a',
								{ href: '#/project' },
								'运维管理'
							)
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0)' },
								projectName
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 22 },
						_react2.default.createElement(
							_antd.Card,
							{ bordered: true, className: 'mt20', style: { width: '100%' } },
							_react2.default.createElement(
								'div',
								{ style: { display: "flex", justifyContent: "space-between" } },
								_react2.default.createElement(
									'a',
									{ href: "#/project/details/projectinfo?code=" + code, className: 'anchor' },
									_react2.default.createElement(
										'h3',
										{ id: "/project/details/projectinfo?code=" + code, className: 'kanban_title mb20' },
										'\u9879\u76EE\u5B9E\u65BD\u4FE1\u606F'
									)
								),
								' ',
								_react2.default.createElement(
									'a',
									{ href: 'javascript:void(0)', onClick: function onClick() {
											_this3.projectInfoEdit(projectInfoEditLable);
										} },
									projectInfoEditLable
								)
							),
							_react2.default.createElement(
								_antd.Form,
								_extends({ layout: 'inline' }, formItemLayout),
								_react2.default.createElement(
									_antd.Row,
									{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15] },
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u9879\u76EE\u540D\u79F0', className: 'w' },
											getFieldDecorator('name', {
												initialValue: project.name || "",
												rules: [{ required: true, message: '请输入项目名称' }]
											})(_react2.default.createElement(_antd.Input, { key: 'name', onChange: function onChange(e) {
													_this3.projectOnChange('name', e.target.value);
												}, disabled: !projectInfoEditable, className: !projectInfoEditable ? "noEditLabel" : "" }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: 'ID\u7F16\u7801', className: 'w' },
											getFieldDecorator('code', {
												initialValue: product.code || "",
												rules: [{ required: false, message: '请输入ID编码' }]
											})(_react2.default.createElement(_antd.Input, { key: 'code', onChange: function onChange(e) {
													_this3.productOnChange('code', e.target.value);
												}, disabled: !basicInfoEditable, className: !basicInfoEditable ? "noEditLabel" : "" }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u4EA7\u54C1\u7C7B\u578B', className: 'w' },
											getFieldDecorator('productType', {
												initialValue: product.productType == null ? [] : product.productType,
												rules: [{ required: false, message: '请选择产品类型' }]
											})(_react2.default.createElement(_AsyncSelectMuti2.default, {
												className: 'w',
												type: 'getProductTypeList',
												variables: {},
												query: _bpm2.default.bpm.getProductTypeList,
												url: _config2.default.bpm.getProductTypeList,
												value: product.productType == null ? [] : product.productType,
												itemKey: 'id',
												itemValue: 'typeName',
												disabled: !projectInfoEditable,
												onChange: function onChange(e) {
													_this3.productOnChange('productType', e);
												}
											}))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u9879\u76EE\u7ECF\u7406', className: 'w' },
											getFieldDecorator('managers', {
												initialValue: project.managers || "",
												rules: [{ required: false, message: '请输入项目经理' }]
											})(_react2.default.createElement(_antd.Input, { key: 'managers', onChange: function onChange(e) {
													_this3.projectOnChange('managers', e.target.value);
												}, disabled: !projectInfoEditable, className: !projectInfoEditable ? "noEditLabel" : "" }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u542F\u7528\u65F6\u95F4', className: 'w' },
											getFieldDecorator('usingTime', {
												initialValue: project.usingTime == null || project.usingTime == 0 ? "" : (0, _moment2.default)((0, _moment2.default)(project.usingTime).format('YYYY-MM-DD'), "YYYY-MM-DD"),
												rules: [{ required: false, message: '请输入启用时间' }]
											})(_react2.default.createElement(_antd.DatePicker, {
												format: 'YYYY-MM-DD',
												style: { width: '100%' },
												onChange: function onChange(e) {
													_this3.onDateChange('usingTime', e);
												},
												disabled: !projectInfoEditable,
												className: !projectInfoEditable ? "noEditLabel" : ""
											}))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u4E3B\u751F\u4EA7\u5546', className: 'w' },
											getFieldDecorator('producer', {
												initialValue: product.producer || "",
												rules: [{ required: false, message: '请输入主生产商' }]
											})(_react2.default.createElement(_antd.Input, { key: 'producer', onChange: function onChange(e) {
													_this3.productOnChange('producer', e.target.value);
												}, disabled: !projectInfoEditable, className: !projectInfoEditable ? "noEditLabel" : "" }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u9879\u76EE\u5730\u5740', className: 'w' },
											getFieldDecorator('region', {
												initialValue: project.region == null ? [] : mobx.toJS(project.region),
												rules: [{
													required: false,
													message: '请输入项目地址'
												}]
											})(_react2.default.createElement(
												'div',
												{ className: 'w' },
												_react2.default.createElement(_antd.Cascader, {
													placeholder: '\u7701/\u5E02/\u533A(\u53BF)',
													showSearch: this.filter,
													options: _cityData2.default,
													value: project.region == null ? [] : mobx.toJS(project.region),
													onChange: this.cityChange.bind(this, 'region'),
													expandTrigger: 'hover',
													key: 'region',
													disabled: !projectInfoEditable
												})
											))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '',
												labelCol: {
													xs: { span: 0 },
													sm: { span: 0, offset: 0 }
												},
												wrapperCol: {
													xs: { span: 24 },
													sm: { span: 22, offset: 0 }
												},
												className: 'w'
											},
											_react2.default.createElement(_antd.Input, {
												placeholder: '\u8BE6\u7EC6\u5730\u5740',
												value: project.address,
												onChange: function onChange(e) {
													_this3.projectOnChange('address', e.target.value);
												},
												disabled: !projectInfoEditable,
												className: !projectInfoEditable ? "noEditLabel" : ""
											})
										)
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Card,
							{ id: "/project/details/maintenanceinfo?code=" + code + "&allprostate=" + allprostate, bordered: true, className: 'mt20', style: { width: '100%' } },
							_react2.default.createElement(
								'a',
								{ href: "#/project/details/maintenanceinfo?code=" + code + "&allprostate=" + allprostate, className: 'anchor' },
								_react2.default.createElement(
									'h3',
									{ className: 'kanban_title mb20' },
									'\u4EA7\u54C1\u8FD0\u7EF4\u4FE1\u606F'
								)
							),
							_react2.default.createElement(_antd.Table, (_React$createElement = {
								columns: columns,
								showHeader: true,
								pagination: false,
								dataSource: mobx.toJS(this.store.repairData),
								expandedRowRender: expandedRowRender,
								expandRowByClick: true,
								size: 'middle',
								rowKey: function rowKey(row) {
									return row.key;
								}
							}, _defineProperty(_React$createElement, 'pagination', false), _defineProperty(_React$createElement, 'expandIconAsCell', false), _defineProperty(_React$createElement, 'expandIconColumnIndex', -1), _defineProperty(_React$createElement, 'expandedRowKeys', expandedKeys), _defineProperty(_React$createElement, 'onRow', function onRow(record) {
								return {
									onClick: function onClick(event) {
										_this3.saveExpandedRows(record.key);
									}
								};
							}), _React$createElement))
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 2 },
						_react2.default.createElement(
							_antd.Anchor,
							{ offsetTop: 70, getCurrentAnchor: getCurrentAnchor, className: 'anchorInfo' },
							_react2.default.createElement(Link, { href: "#/project/details/projectinfo?code=" + code, title: '\u9879\u76EE\u5B9E\u65BD\u4FE1\u606F' }),
							_react2.default.createElement(Link, { href: "#/project/details/maintenanceinfo?code=" + code + "&allprostate=" + allprostate, title: '\u4EA7\u54C1\u8FD0\u7EF4\u4FE1\u606F' })
						)
					)
				)
			);
		}
	}]);

	return ProjectDetails;
}(_react2.default.Component)) || _class) || _class);
exports.default = ProjectDetails;

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

/***/ 1536:
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*
* 用途：多选组件参数说明
* 作者：dangw@glodon.com
*
  placeholder: 占位符
  type：Grapbql返回的数据type
  variables：Grapbqls请求的参数变量
  query：Grapbqls请求的参数变量
  url：Grapbqls请求的参数变量
  onChange：组件接受函数
  value：组件接受值
  itemKey: Select组件Option的参数key
  itemValue: Select组件Option的参数value
  body: Grapbqls返回值取值是否是含body
*
* */


var Option = _antd.Select.Option;

var AsyncSelectMuti = function (_React$Component) {
  _inherits(AsyncSelectMuti, _React$Component);

  function AsyncSelectMuti(props) {
    _classCallCheck(this, AsyncSelectMuti);

    var _this = _possibleConstructorReturn(this, (AsyncSelectMuti.__proto__ || Object.getPrototypeOf(AsyncSelectMuti)).call(this, props));

    _this.handleChange = function (val, e) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(val, e);
      }
    };

    _this.handleFocus = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          variables = _this$props.variables,
          query = _this$props.query,
          url = _this$props.url,
          body = _this$props.body;

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.data !== null && json.data[type] !== null) {
          // 容错
          var data = void 0;
          if (body !== undefined) {
            data = json.data[type]["body"];
          } else {
            data = json.data[type];
          }
          if (_this.props.dataMapFunc) {
            data = data.map(function (item) {
              return _this.props.dataMapFunc(item);
            });
          }
          _this.setState({
            data: data
          });
        } else {
          _this.setState({
            data: []
          });
        }
      });
    };

    _this.state = {
      data: [],
      value: props.value || []
    };
    return _this;
  }

  _createClass(AsyncSelectMuti, [{
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
      //组件初始化
      this.handleFocus();
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.data;
      var _props = this.props,
          value = _props.value,
          itemKey = _props.itemKey,
          itemValue = _props.itemValue,
          placeholder = _props.placeholder,
          style = _props.style,
          disabled = _props.disabled,
          ref = _props.ref,
          onBlur = _props.onBlur;

      var options = data.length && data.map(function (item, index) {
        return _react2.default.createElement(
          Option,
          { key: index, value: item[itemKey], val: item },
          item[itemValue]
        );
      });

      return _react2.default.createElement(
        _antd.Select,
        {
          mode: 'multiple',
          placeholder: placeholder || "请选择",
          style: style,
          value: value,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: onBlur,
          disabled: disabled,
          ref: ref
        },
        options
      );
    }
  }]);

  return AsyncSelectMuti;
}(_react2.default.Component);

exports.default = AsyncSelectMuti;


AsyncSelectMuti.propTypes = {
  style: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string,
  url: _propTypes2.default.string,
  dataMapFunc: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};

/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* 省市区数据
* dangw@glodon.com
* */
var cityData = [{
  "label": "北京市",
  "value": "北京市",
  "children": [{
    "label": "北京市",
    "value": "北京市",
    "children": [{
      "label": "东城区",
      "value": "东城区"
    }, {
      "label": "西城区",
      "value": "西城区"
    }, {
      "label": "朝阳区",
      "value": "朝阳区"
    }, {
      "label": "丰台区",
      "value": "丰台区"
    }, {
      "label": "石景山区",
      "value": "石景山区"
    }, {
      "label": "海淀区",
      "value": "海淀区"
    }, {
      "label": "门头沟区",
      "value": "门头沟区"
    }, {
      "label": "房山区",
      "value": "房山区"
    }, {
      "label": "通州区",
      "value": "通州区"
    }, {
      "label": "顺义区",
      "value": "顺义区"
    }, {
      "label": "昌平区",
      "value": "昌平区"
    }, {
      "label": "大兴区",
      "value": "大兴区"
    }, {
      "label": "怀柔区",
      "value": "怀柔区"
    }, {
      "label": "平谷区",
      "value": "平谷区"
    }, {
      "label": "密云县",
      "value": "密云县"
    }, {
      "label": "延庆县",
      "value": "延庆县"
    }]
  }]
}, {
  "label": "天津市",
  "value": "天津市",
  "children": [{
    "label": "天津市",
    "value": "天津市",
    "children": [{
      "label": "和平区",
      "value": "和平区"
    }, {
      "label": "河东区",
      "value": "河东区"
    }, {
      "label": "河西区",
      "value": "河西区"
    }, {
      "label": "南开区",
      "value": "南开区"
    }, {
      "label": "河北区",
      "value": "河北区"
    }, {
      "label": "红桥区",
      "value": "红桥区"
    }, {
      "label": "东丽区",
      "value": "东丽区"
    }, {
      "label": "西青区",
      "value": "西青区"
    }, {
      "label": "津南区",
      "value": "津南区"
    }, {
      "label": "北辰区",
      "value": "北辰区"
    }, {
      "label": "武清区",
      "value": "武清区"
    }, {
      "label": "宝坻区",
      "value": "宝坻区"
    }, {
      "label": "滨海新区",
      "value": "滨海新区"
    }, {
      "label": "宁河县",
      "value": "宁河县"
    }, {
      "label": "静海县",
      "value": "静海县"
    }, {
      "label": "蓟县",
      "value": "蓟县"
    }]
  }]
}, {
  "label": "河北省",
  "value": "河北省",
  "children": [{
    "label": "石家庄市",
    "value": "石家庄市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "长安区",
      "value": "长安区"
    }, {
      "label": "桥西区",
      "value": "桥西区"
    }, {
      "label": "新华区",
      "value": "新华区"
    }, {
      "label": "井陉矿区",
      "value": "井陉矿区"
    }, {
      "label": "裕华区",
      "value": "裕华区"
    }, {
      "label": "藁城区",
      "value": "藁城区"
    }, {
      "label": "鹿泉区",
      "value": "鹿泉区"
    }, {
      "label": "栾城区",
      "value": "栾城区"
    }, {
      "label": "井陉县",
      "value": "井陉县"
    }, {
      "label": "正定县",
      "value": "正定县"
    }, {
      "label": "行唐县",
      "value": "行唐县"
    }, {
      "label": "灵寿县",
      "value": "灵寿县"
    }, {
      "label": "高邑县",
      "value": "高邑县"
    }, {
      "label": "深泽县",
      "value": "深泽县"
    }, {
      "label": "赞皇县",
      "value": "赞皇县"
    }, {
      "label": "无极县",
      "value": "无极县"
    }, {
      "label": "平山县",
      "value": "平山县"
    }, {
      "label": "元氏县",
      "value": "元氏县"
    }, {
      "label": "赵县",
      "value": "赵县"
    }, {
      "label": "辛集市",
      "value": "辛集市"
    }, {
      "label": "晋州市",
      "value": "晋州市"
    }, {
      "label": "新乐市",
      "value": "新乐市"
    }]
  }, {
    "label": "唐山市",
    "value": "唐山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "路南区",
      "value": "路南区"
    }, {
      "label": "路北区",
      "value": "路北区"
    }, {
      "label": "古冶区",
      "value": "古冶区"
    }, {
      "label": "开平区",
      "value": "开平区"
    }, {
      "label": "丰南区",
      "value": "丰南区"
    }, {
      "label": "丰润区",
      "value": "丰润区"
    }, {
      "label": "曹妃甸区",
      "value": "曹妃甸区"
    }, {
      "label": "滦县",
      "value": "滦县"
    }, {
      "label": "滦南县",
      "value": "滦南县"
    }, {
      "label": "乐亭县",
      "value": "乐亭县"
    }, {
      "label": "迁西县",
      "value": "迁西县"
    }, {
      "label": "玉田县",
      "value": "玉田县"
    }, {
      "label": "遵化市",
      "value": "遵化市"
    }, {
      "label": "迁安市",
      "value": "迁安市"
    }]
  }, {
    "label": "秦皇岛市",
    "value": "秦皇岛市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海港区",
      "value": "海港区"
    }, {
      "label": "山海关区",
      "value": "山海关区"
    }, {
      "label": "北戴河区",
      "value": "北戴河区"
    }, {
      "label": "青龙满族自治县",
      "value": "青龙满族自治县"
    }, {
      "label": "昌黎县",
      "value": "昌黎县"
    }, {
      "label": "抚宁县",
      "value": "抚宁县"
    }, {
      "label": "卢龙县",
      "value": "卢龙县"
    }]
  }, {
    "label": "邯郸市",
    "value": "邯郸市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "邯山区",
      "value": "邯山区"
    }, {
      "label": "丛台区",
      "value": "丛台区"
    }, {
      "label": "复兴区",
      "value": "复兴区"
    }, {
      "label": "峰峰矿区",
      "value": "峰峰矿区"
    }, {
      "label": "邯郸县",
      "value": "邯郸县"
    }, {
      "label": "临漳县",
      "value": "临漳县"
    }, {
      "label": "成安县",
      "value": "成安县"
    }, {
      "label": "大名县",
      "value": "大名县"
    }, {
      "label": "涉县",
      "value": "涉县"
    }, {
      "label": "磁县",
      "value": "磁县"
    }, {
      "label": "肥乡县",
      "value": "肥乡县"
    }, {
      "label": "永年县",
      "value": "永年县"
    }, {
      "label": "邱县",
      "value": "邱县"
    }, {
      "label": "鸡泽县",
      "value": "鸡泽县"
    }, {
      "label": "广平县",
      "value": "广平县"
    }, {
      "label": "馆陶县",
      "value": "馆陶县"
    }, {
      "label": "魏县",
      "value": "魏县"
    }, {
      "label": "曲周县",
      "value": "曲周县"
    }, {
      "label": "武安市",
      "value": "武安市"
    }]
  }, {
    "label": "邢台市",
    "value": "邢台市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "桥东区",
      "value": "桥东区"
    }, {
      "label": "桥西区",
      "value": "桥西区"
    }, {
      "label": "邢台县",
      "value": "邢台县"
    }, {
      "label": "临城县",
      "value": "临城县"
    }, {
      "label": "内丘县",
      "value": "内丘县"
    }, {
      "label": "柏乡县",
      "value": "柏乡县"
    }, {
      "label": "隆尧县",
      "value": "隆尧县"
    }, {
      "label": "任县",
      "value": "任县"
    }, {
      "label": "南和县",
      "value": "南和县"
    }, {
      "label": "宁晋县",
      "value": "宁晋县"
    }, {
      "label": "巨鹿县",
      "value": "巨鹿县"
    }, {
      "label": "新河县",
      "value": "新河县"
    }, {
      "label": "广宗县",
      "value": "广宗县"
    }, {
      "label": "平乡县",
      "value": "平乡县"
    }, {
      "label": "威县",
      "value": "威县"
    }, {
      "label": "清河县",
      "value": "清河县"
    }, {
      "label": "临西县",
      "value": "临西县"
    }, {
      "label": "南宫市",
      "value": "南宫市"
    }, {
      "label": "沙河市",
      "value": "沙河市"
    }]
  }, {
    "label": "保定市",
    "value": "保定市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新市区",
      "value": "新市区"
    }, {
      "label": "北市区",
      "value": "北市区"
    }, {
      "label": "南市区",
      "value": "南市区"
    }, {
      "label": "满城县",
      "value": "满城县"
    }, {
      "label": "清苑县",
      "value": "清苑县"
    }, {
      "label": "涞水县",
      "value": "涞水县"
    }, {
      "label": "阜平县",
      "value": "阜平县"
    }, {
      "label": "徐水县",
      "value": "徐水县"
    }, {
      "label": "定兴县",
      "value": "定兴县"
    }, {
      "label": "唐县",
      "value": "唐县"
    }, {
      "label": "高阳县",
      "value": "高阳县"
    }, {
      "label": "容城县",
      "value": "容城县"
    }, {
      "label": "涞源县",
      "value": "涞源县"
    }, {
      "label": "望都县",
      "value": "望都县"
    }, {
      "label": "安新县",
      "value": "安新县"
    }, {
      "label": "易县",
      "value": "易县"
    }, {
      "label": "曲阳县",
      "value": "曲阳县"
    }, {
      "label": "蠡县",
      "value": "蠡县"
    }, {
      "label": "顺平县",
      "value": "顺平县"
    }, {
      "label": "博野县",
      "value": "博野县"
    }, {
      "label": "雄县",
      "value": "雄县"
    }, {
      "label": "涿州市",
      "value": "涿州市"
    }, {
      "label": "定州市",
      "value": "定州市"
    }, {
      "label": "安国市",
      "value": "安国市"
    }, {
      "label": "高碑店市",
      "value": "高碑店市"
    }]
  }, {
    "label": "张家口市",
    "value": "张家口市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "桥东区",
      "value": "桥东区"
    }, {
      "label": "桥西区",
      "value": "桥西区"
    }, {
      "label": "宣化区",
      "value": "宣化区"
    }, {
      "label": "下花园区",
      "value": "下花园区"
    }, {
      "label": "宣化县",
      "value": "宣化县"
    }, {
      "label": "张北县",
      "value": "张北县"
    }, {
      "label": "康保县",
      "value": "康保县"
    }, {
      "label": "沽源县",
      "value": "沽源县"
    }, {
      "label": "尚义县",
      "value": "尚义县"
    }, {
      "label": "蔚县",
      "value": "蔚县"
    }, {
      "label": "阳原县",
      "value": "阳原县"
    }, {
      "label": "怀安县",
      "value": "怀安县"
    }, {
      "label": "万全县",
      "value": "万全县"
    }, {
      "label": "怀来县",
      "value": "怀来县"
    }, {
      "label": "涿鹿县",
      "value": "涿鹿县"
    }, {
      "label": "赤城县",
      "value": "赤城县"
    }, {
      "label": "崇礼县",
      "value": "崇礼县"
    }]
  }, {
    "label": "承德市",
    "value": "承德市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "双桥区",
      "value": "双桥区"
    }, {
      "label": "双滦区",
      "value": "双滦区"
    }, {
      "label": "鹰手营子矿区",
      "value": "鹰手营子矿区"
    }, {
      "label": "承德县",
      "value": "承德县"
    }, {
      "label": "兴隆县",
      "value": "兴隆县"
    }, {
      "label": "平泉县",
      "value": "平泉县"
    }, {
      "label": "滦平县",
      "value": "滦平县"
    }, {
      "label": "隆化县",
      "value": "隆化县"
    }, {
      "label": "丰宁满族自治县",
      "value": "丰宁满族自治县"
    }, {
      "label": "宽城满族自治县",
      "value": "宽城满族自治县"
    }, {
      "label": "围场满族蒙古族自治县",
      "value": "围场满族蒙古族自治县"
    }]
  }, {
    "label": "沧州市",
    "value": "沧州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新华区",
      "value": "新华区"
    }, {
      "label": "运河区",
      "value": "运河区"
    }, {
      "label": "沧县",
      "value": "沧县"
    }, {
      "label": "青县",
      "value": "青县"
    }, {
      "label": "东光县",
      "value": "东光县"
    }, {
      "label": "海兴县",
      "value": "海兴县"
    }, {
      "label": "盐山县",
      "value": "盐山县"
    }, {
      "label": "肃宁县",
      "value": "肃宁县"
    }, {
      "label": "南皮县",
      "value": "南皮县"
    }, {
      "label": "吴桥县",
      "value": "吴桥县"
    }, {
      "label": "献县",
      "value": "献县"
    }, {
      "label": "孟村回族自治县",
      "value": "孟村回族自治县"
    }, {
      "label": "泊头市",
      "value": "泊头市"
    }, {
      "label": "任丘市",
      "value": "任丘市"
    }, {
      "label": "黄骅市",
      "value": "黄骅市"
    }, {
      "label": "河间市",
      "value": "河间市"
    }]
  }, {
    "label": "廊坊市",
    "value": "廊坊市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "安次区",
      "value": "安次区"
    }, {
      "label": "广阳区",
      "value": "广阳区"
    }, {
      "label": "固安县",
      "value": "固安县"
    }, {
      "label": "永清县",
      "value": "永清县"
    }, {
      "label": "香河县",
      "value": "香河县"
    }, {
      "label": "大城县",
      "value": "大城县"
    }, {
      "label": "文安县",
      "value": "文安县"
    }, {
      "label": "大厂回族自治县",
      "value": "大厂回族自治县"
    }, {
      "label": "霸州市",
      "value": "霸州市"
    }, {
      "label": "三河市",
      "value": "三河市"
    }]
  }, {
    "label": "衡水市",
    "value": "衡水市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "桃城区",
      "value": "桃城区"
    }, {
      "label": "枣强县",
      "value": "枣强县"
    }, {
      "label": "武邑县",
      "value": "武邑县"
    }, {
      "label": "武强县",
      "value": "武强县"
    }, {
      "label": "饶阳县",
      "value": "饶阳县"
    }, {
      "label": "安平县",
      "value": "安平县"
    }, {
      "label": "故城县",
      "value": "故城县"
    }, {
      "label": "景县",
      "value": "景县"
    }, {
      "label": "阜城县",
      "value": "阜城县"
    }, {
      "label": "冀州市",
      "value": "冀州市"
    }, {
      "label": "深州市",
      "value": "深州市"
    }]
  }]
}, {
  "label": "山西省",
  "value": "山西省",
  "children": [{
    "label": "太原市",
    "value": "太原市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "小店区",
      "value": "小店区"
    }, {
      "label": "迎泽区",
      "value": "迎泽区"
    }, {
      "label": "杏花岭区",
      "value": "杏花岭区"
    }, {
      "label": "尖草坪区",
      "value": "尖草坪区"
    }, {
      "label": "万柏林区",
      "value": "万柏林区"
    }, {
      "label": "晋源区",
      "value": "晋源区"
    }, {
      "label": "清徐县",
      "value": "清徐县"
    }, {
      "label": "阳曲县",
      "value": "阳曲县"
    }, {
      "label": "娄烦县",
      "value": "娄烦县"
    }, {
      "label": "古交市",
      "value": "古交市"
    }]
  }, {
    "label": "大同市",
    "value": "大同市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城区",
      "value": "城区"
    }, {
      "label": "矿区",
      "value": "矿区"
    }, {
      "label": "南郊区",
      "value": "南郊区"
    }, {
      "label": "新荣区",
      "value": "新荣区"
    }, {
      "label": "阳高县",
      "value": "阳高县"
    }, {
      "label": "天镇县",
      "value": "天镇县"
    }, {
      "label": "广灵县",
      "value": "广灵县"
    }, {
      "label": "灵丘县",
      "value": "灵丘县"
    }, {
      "label": "浑源县",
      "value": "浑源县"
    }, {
      "label": "左云县",
      "value": "左云县"
    }, {
      "label": "大同县",
      "value": "大同县"
    }]
  }, {
    "label": "阳泉市",
    "value": "阳泉市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城区",
      "value": "城区"
    }, {
      "label": "矿区",
      "value": "矿区"
    }, {
      "label": "郊区",
      "value": "郊区"
    }, {
      "label": "平定县",
      "value": "平定县"
    }, {
      "label": "盂县",
      "value": "盂县"
    }]
  }, {
    "label": "长治市",
    "value": "长治市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城区",
      "value": "城区"
    }, {
      "label": "郊区",
      "value": "郊区"
    }, {
      "label": "长治县",
      "value": "长治县"
    }, {
      "label": "襄垣县",
      "value": "襄垣县"
    }, {
      "label": "屯留县",
      "value": "屯留县"
    }, {
      "label": "平顺县",
      "value": "平顺县"
    }, {
      "label": "黎城县",
      "value": "黎城县"
    }, {
      "label": "壶关县",
      "value": "壶关县"
    }, {
      "label": "长子县",
      "value": "长子县"
    }, {
      "label": "武乡县",
      "value": "武乡县"
    }, {
      "label": "沁县",
      "value": "沁县"
    }, {
      "label": "沁源县",
      "value": "沁源县"
    }, {
      "label": "潞城市",
      "value": "潞城市"
    }]
  }, {
    "label": "晋城市",
    "value": "晋城市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城区",
      "value": "城区"
    }, {
      "label": "沁水县",
      "value": "沁水县"
    }, {
      "label": "阳城县",
      "value": "阳城县"
    }, {
      "label": "陵川县",
      "value": "陵川县"
    }, {
      "label": "泽州县",
      "value": "泽州县"
    }, {
      "label": "高平市",
      "value": "高平市"
    }]
  }, {
    "label": "朔州市",
    "value": "朔州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "朔城区",
      "value": "朔城区"
    }, {
      "label": "平鲁区",
      "value": "平鲁区"
    }, {
      "label": "山阴县",
      "value": "山阴县"
    }, {
      "label": "应县",
      "value": "应县"
    }, {
      "label": "右玉县",
      "value": "右玉县"
    }, {
      "label": "怀仁县",
      "value": "怀仁县"
    }]
  }, {
    "label": "晋中市",
    "value": "晋中市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "榆次区",
      "value": "榆次区"
    }, {
      "label": "榆社县",
      "value": "榆社县"
    }, {
      "label": "左权县",
      "value": "左权县"
    }, {
      "label": "和顺县",
      "value": "和顺县"
    }, {
      "label": "昔阳县",
      "value": "昔阳县"
    }, {
      "label": "寿阳县",
      "value": "寿阳县"
    }, {
      "label": "太谷县",
      "value": "太谷县"
    }, {
      "label": "祁县",
      "value": "祁县"
    }, {
      "label": "平遥县",
      "value": "平遥县"
    }, {
      "label": "灵石县",
      "value": "灵石县"
    }, {
      "label": "介休市",
      "value": "介休市"
    }]
  }, {
    "label": "运城市",
    "value": "运城市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "盐湖区",
      "value": "盐湖区"
    }, {
      "label": "临猗县",
      "value": "临猗县"
    }, {
      "label": "万荣县",
      "value": "万荣县"
    }, {
      "label": "闻喜县",
      "value": "闻喜县"
    }, {
      "label": "稷山县",
      "value": "稷山县"
    }, {
      "label": "新绛县",
      "value": "新绛县"
    }, {
      "label": "绛县",
      "value": "绛县"
    }, {
      "label": "垣曲县",
      "value": "垣曲县"
    }, {
      "label": "夏县",
      "value": "夏县"
    }, {
      "label": "平陆县",
      "value": "平陆县"
    }, {
      "label": "芮城县",
      "value": "芮城县"
    }, {
      "label": "永济市",
      "value": "永济市"
    }, {
      "label": "河津市",
      "value": "河津市"
    }]
  }, {
    "label": "忻州市",
    "value": "忻州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "忻府区",
      "value": "忻府区"
    }, {
      "label": "定襄县",
      "value": "定襄县"
    }, {
      "label": "五台县",
      "value": "五台县"
    }, {
      "label": "代县",
      "value": "代县"
    }, {
      "label": "繁峙县",
      "value": "繁峙县"
    }, {
      "label": "宁武县",
      "value": "宁武县"
    }, {
      "label": "静乐县",
      "value": "静乐县"
    }, {
      "label": "神池县",
      "value": "神池县"
    }, {
      "label": "五寨县",
      "value": "五寨县"
    }, {
      "label": "岢岚县",
      "value": "岢岚县"
    }, {
      "label": "河曲县",
      "value": "河曲县"
    }, {
      "label": "保德县",
      "value": "保德县"
    }, {
      "label": "偏关县",
      "value": "偏关县"
    }, {
      "label": "原平市",
      "value": "原平市"
    }]
  }, {
    "label": "临汾市",
    "value": "临汾市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "尧都区",
      "value": "尧都区"
    }, {
      "label": "曲沃县",
      "value": "曲沃县"
    }, {
      "label": "翼城县",
      "value": "翼城县"
    }, {
      "label": "襄汾县",
      "value": "襄汾县"
    }, {
      "label": "洪洞县",
      "value": "洪洞县"
    }, {
      "label": "古县",
      "value": "古县"
    }, {
      "label": "安泽县",
      "value": "安泽县"
    }, {
      "label": "浮山县",
      "value": "浮山县"
    }, {
      "label": "吉县",
      "value": "吉县"
    }, {
      "label": "乡宁县",
      "value": "乡宁县"
    }, {
      "label": "大宁县",
      "value": "大宁县"
    }, {
      "label": "隰县",
      "value": "隰县"
    }, {
      "label": "永和县",
      "value": "永和县"
    }, {
      "label": "蒲县",
      "value": "蒲县"
    }, {
      "label": "汾西县",
      "value": "汾西县"
    }, {
      "label": "侯马市",
      "value": "侯马市"
    }, {
      "label": "霍州市",
      "value": "霍州市"
    }]
  }, {
    "label": "吕梁市",
    "value": "吕梁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "离石区",
      "value": "离石区"
    }, {
      "label": "文水县",
      "value": "文水县"
    }, {
      "label": "交城县",
      "value": "交城县"
    }, {
      "label": "兴县",
      "value": "兴县"
    }, {
      "label": "临县",
      "value": "临县"
    }, {
      "label": "柳林县",
      "value": "柳林县"
    }, {
      "label": "石楼县",
      "value": "石楼县"
    }, {
      "label": "岚县",
      "value": "岚县"
    }, {
      "label": "方山县",
      "value": "方山县"
    }, {
      "label": "中阳县",
      "value": "中阳县"
    }, {
      "label": "交口县",
      "value": "交口县"
    }, {
      "label": "孝义市",
      "value": "孝义市"
    }, {
      "label": "汾阳市",
      "value": "汾阳市"
    }]
  }]
}, {
  "label": "内蒙古自治区",
  "value": "内蒙古自治区",
  "children": [{
    "label": "呼和浩特市",
    "value": "呼和浩特市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新城区",
      "value": "新城区"
    }, {
      "label": "回民区",
      "value": "回民区"
    }, {
      "label": "玉泉区",
      "value": "玉泉区"
    }, {
      "label": "赛罕区",
      "value": "赛罕区"
    }, {
      "label": "土默特左旗",
      "value": "土默特左旗"
    }, {
      "label": "托克托县",
      "value": "托克托县"
    }, {
      "label": "和林格尔县",
      "value": "和林格尔县"
    }, {
      "label": "清水河县",
      "value": "清水河县"
    }, {
      "label": "武川县",
      "value": "武川县"
    }]
  }, {
    "label": "包头市",
    "value": "包头市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东河区",
      "value": "东河区"
    }, {
      "label": "昆都仑区",
      "value": "昆都仑区"
    }, {
      "label": "青山区",
      "value": "青山区"
    }, {
      "label": "石拐区",
      "value": "石拐区"
    }, {
      "label": "白云鄂博矿区",
      "value": "白云鄂博矿区"
    }, {
      "label": "九原区",
      "value": "九原区"
    }, {
      "label": "土默特右旗",
      "value": "土默特右旗"
    }, {
      "label": "固阳县",
      "value": "固阳县"
    }, {
      "label": "达尔罕茂明安联合旗",
      "value": "达尔罕茂明安联合旗"
    }]
  }, {
    "label": "乌海市",
    "value": "乌海市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海勃湾区",
      "value": "海勃湾区"
    }, {
      "label": "海南区",
      "value": "海南区"
    }, {
      "label": "乌达区",
      "value": "乌达区"
    }]
  }, {
    "label": "赤峰市",
    "value": "赤峰市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "红山区",
      "value": "红山区"
    }, {
      "label": "元宝山区",
      "value": "元宝山区"
    }, {
      "label": "松山区",
      "value": "松山区"
    }, {
      "label": "阿鲁科尔沁旗",
      "value": "阿鲁科尔沁旗"
    }, {
      "label": "巴林左旗",
      "value": "巴林左旗"
    }, {
      "label": "巴林右旗",
      "value": "巴林右旗"
    }, {
      "label": "林西县",
      "value": "林西县"
    }, {
      "label": "克什克腾旗",
      "value": "克什克腾旗"
    }, {
      "label": "翁牛特旗",
      "value": "翁牛特旗"
    }, {
      "label": "喀喇沁旗",
      "value": "喀喇沁旗"
    }, {
      "label": "宁城县",
      "value": "宁城县"
    }, {
      "label": "敖汉旗",
      "value": "敖汉旗"
    }]
  }, {
    "label": "通辽市",
    "value": "通辽市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "科尔沁区",
      "value": "科尔沁区"
    }, {
      "label": "科尔沁左翼中旗",
      "value": "科尔沁左翼中旗"
    }, {
      "label": "科尔沁左翼后旗",
      "value": "科尔沁左翼后旗"
    }, {
      "label": "开鲁县",
      "value": "开鲁县"
    }, {
      "label": "库伦旗",
      "value": "库伦旗"
    }, {
      "label": "奈曼旗",
      "value": "奈曼旗"
    }, {
      "label": "扎鲁特旗",
      "value": "扎鲁特旗"
    }, {
      "label": "霍林郭勒市",
      "value": "霍林郭勒市"
    }]
  }, {
    "label": "鄂尔多斯市",
    "value": "鄂尔多斯市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东胜区",
      "value": "东胜区"
    }, {
      "label": "达拉特旗",
      "value": "达拉特旗"
    }, {
      "label": "准格尔旗",
      "value": "准格尔旗"
    }, {
      "label": "鄂托克前旗",
      "value": "鄂托克前旗"
    }, {
      "label": "鄂托克旗",
      "value": "鄂托克旗"
    }, {
      "label": "杭锦旗",
      "value": "杭锦旗"
    }, {
      "label": "乌审旗",
      "value": "乌审旗"
    }, {
      "label": "伊金霍洛旗",
      "value": "伊金霍洛旗"
    }]
  }, {
    "label": "呼伦贝尔市",
    "value": "呼伦贝尔市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海拉尔区",
      "value": "海拉尔区"
    }, {
      "label": "扎赉诺尔区",
      "value": "扎赉诺尔区"
    }, {
      "label": "阿荣旗",
      "value": "阿荣旗"
    }, {
      "label": "莫力达瓦达斡尔族自治旗",
      "value": "莫力达瓦达斡尔族自治旗"
    }, {
      "label": "鄂伦春自治旗",
      "value": "鄂伦春自治旗"
    }, {
      "label": "鄂温克族自治旗",
      "value": "鄂温克族自治旗"
    }, {
      "label": "陈巴尔虎旗",
      "value": "陈巴尔虎旗"
    }, {
      "label": "新巴尔虎左旗",
      "value": "新巴尔虎左旗"
    }, {
      "label": "新巴尔虎右旗",
      "value": "新巴尔虎右旗"
    }, {
      "label": "满洲里市",
      "value": "满洲里市"
    }, {
      "label": "牙克石市",
      "value": "牙克石市"
    }, {
      "label": "扎兰屯市",
      "value": "扎兰屯市"
    }, {
      "label": "额尔古纳市",
      "value": "额尔古纳市"
    }, {
      "label": "根河市",
      "value": "根河市"
    }]
  }, {
    "label": "巴彦淖尔市",
    "value": "巴彦淖尔市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "临河区",
      "value": "临河区"
    }, {
      "label": "五原县",
      "value": "五原县"
    }, {
      "label": "磴口县",
      "value": "磴口县"
    }, {
      "label": "乌拉特前旗",
      "value": "乌拉特前旗"
    }, {
      "label": "乌拉特中旗",
      "value": "乌拉特中旗"
    }, {
      "label": "乌拉特后旗",
      "value": "乌拉特后旗"
    }, {
      "label": "杭锦后旗",
      "value": "杭锦后旗"
    }]
  }, {
    "label": "乌兰察布市",
    "value": "乌兰察布市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "集宁区",
      "value": "集宁区"
    }, {
      "label": "卓资县",
      "value": "卓资县"
    }, {
      "label": "化德县",
      "value": "化德县"
    }, {
      "label": "商都县",
      "value": "商都县"
    }, {
      "label": "兴和县",
      "value": "兴和县"
    }, {
      "label": "凉城县",
      "value": "凉城县"
    }, {
      "label": "察哈尔右翼前旗",
      "value": "察哈尔右翼前旗"
    }, {
      "label": "察哈尔右翼中旗",
      "value": "察哈尔右翼中旗"
    }, {
      "label": "察哈尔右翼后旗",
      "value": "察哈尔右翼后旗"
    }, {
      "label": "四子王旗",
      "value": "四子王旗"
    }, {
      "label": "丰镇市",
      "value": "丰镇市"
    }]
  }, {
    "label": "兴安盟",
    "value": "兴安盟",
    "children": [{
      "label": "乌兰浩特市",
      "value": "乌兰浩特市"
    }, {
      "label": "阿尔山市",
      "value": "阿尔山市"
    }, {
      "label": "科尔沁右翼前旗",
      "value": "科尔沁右翼前旗"
    }, {
      "label": "科尔沁右翼中旗",
      "value": "科尔沁右翼中旗"
    }, {
      "label": "扎赉特旗",
      "value": "扎赉特旗"
    }, {
      "label": "突泉县",
      "value": "突泉县"
    }]
  }, {
    "label": "锡林郭勒盟",
    "value": "锡林郭勒盟",
    "children": [{
      "label": "二连浩特市",
      "value": "二连浩特市"
    }, {
      "label": "锡林浩特市",
      "value": "锡林浩特市"
    }, {
      "label": "阿巴嘎旗",
      "value": "阿巴嘎旗"
    }, {
      "label": "苏尼特左旗",
      "value": "苏尼特左旗"
    }, {
      "label": "苏尼特右旗",
      "value": "苏尼特右旗"
    }, {
      "label": "东乌珠穆沁旗",
      "value": "东乌珠穆沁旗"
    }, {
      "label": "西乌珠穆沁旗",
      "value": "西乌珠穆沁旗"
    }, {
      "label": "太仆寺旗",
      "value": "太仆寺旗"
    }, {
      "label": "镶黄旗",
      "value": "镶黄旗"
    }, {
      "label": "正镶白旗",
      "value": "正镶白旗"
    }, {
      "label": "正蓝旗",
      "value": "正蓝旗"
    }, {
      "label": "多伦县",
      "value": "多伦县"
    }]
  }, {
    "label": "阿拉善盟",
    "value": "阿拉善盟",
    "children": [{
      "label": "阿拉善左旗",
      "value": "阿拉善左旗"
    }, {
      "label": "阿拉善右旗",
      "value": "阿拉善右旗"
    }, {
      "label": "额济纳旗",
      "value": "额济纳旗"
    }]
  }]
}, {
  "label": "辽宁省",
  "value": "辽宁省",
  "children": [{
    "label": "沈阳市",
    "value": "沈阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "和平区",
      "value": "和平区"
    }, {
      "label": "沈河区",
      "value": "沈河区"
    }, {
      "label": "大东区",
      "value": "大东区"
    }, {
      "label": "皇姑区",
      "value": "皇姑区"
    }, {
      "label": "铁西区",
      "value": "铁西区"
    }, {
      "label": "苏家屯区",
      "value": "苏家屯区"
    }, {
      "label": "浑南区",
      "value": "浑南区"
    }, {
      "label": "沈北新区",
      "value": "沈北新区"
    }, {
      "label": "于洪区",
      "value": "于洪区"
    }, {
      "label": "辽中县",
      "value": "辽中县"
    }, {
      "label": "康平县",
      "value": "康平县"
    }, {
      "label": "法库县",
      "value": "法库县"
    }, {
      "label": "新民市",
      "value": "新民市"
    }]
  }, {
    "label": "大连市",
    "value": "大连市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "中山区",
      "value": "中山区"
    }, {
      "label": "西岗区",
      "value": "西岗区"
    }, {
      "label": "沙河口区",
      "value": "沙河口区"
    }, {
      "label": "甘井子区",
      "value": "甘井子区"
    }, {
      "label": "旅顺口区",
      "value": "旅顺口区"
    }, {
      "label": "金州区",
      "value": "金州区"
    }, {
      "label": "长海县",
      "value": "长海县"
    }, {
      "label": "瓦房店市",
      "value": "瓦房店市"
    }, {
      "label": "普兰店市",
      "value": "普兰店市"
    }, {
      "label": "庄河市",
      "value": "庄河市"
    }]
  }, {
    "label": "鞍山市",
    "value": "鞍山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "铁东区",
      "value": "铁东区"
    }, {
      "label": "铁西区",
      "value": "铁西区"
    }, {
      "label": "立山区",
      "value": "立山区"
    }, {
      "label": "千山区",
      "value": "千山区"
    }, {
      "label": "台安县",
      "value": "台安县"
    }, {
      "label": "岫岩满族自治县",
      "value": "岫岩满族自治县"
    }, {
      "label": "海城市",
      "value": "海城市"
    }]
  }, {
    "label": "抚顺市",
    "value": "抚顺市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新抚区",
      "value": "新抚区"
    }, {
      "label": "东洲区",
      "value": "东洲区"
    }, {
      "label": "望花区",
      "value": "望花区"
    }, {
      "label": "顺城区",
      "value": "顺城区"
    }, {
      "label": "抚顺县",
      "value": "抚顺县"
    }, {
      "label": "新宾满族自治县",
      "value": "新宾满族自治县"
    }, {
      "label": "清原满族自治县",
      "value": "清原满族自治县"
    }]
  }, {
    "label": "本溪市",
    "value": "本溪市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "平山区",
      "value": "平山区"
    }, {
      "label": "溪湖区",
      "value": "溪湖区"
    }, {
      "label": "明山区",
      "value": "明山区"
    }, {
      "label": "南芬区",
      "value": "南芬区"
    }, {
      "label": "本溪满族自治县",
      "value": "本溪满族自治县"
    }, {
      "label": "桓仁满族自治县",
      "value": "桓仁满族自治县"
    }]
  }, {
    "label": "丹东市",
    "value": "丹东市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "元宝区",
      "value": "元宝区"
    }, {
      "label": "振兴区",
      "value": "振兴区"
    }, {
      "label": "振安区",
      "value": "振安区"
    }, {
      "label": "宽甸满族自治县",
      "value": "宽甸满族自治县"
    }, {
      "label": "东港市",
      "value": "东港市"
    }, {
      "label": "凤城市",
      "value": "凤城市"
    }]
  }, {
    "label": "锦州市",
    "value": "锦州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "古塔区",
      "value": "古塔区"
    }, {
      "label": "凌河区",
      "value": "凌河区"
    }, {
      "label": "太和区",
      "value": "太和区"
    }, {
      "label": "黑山县",
      "value": "黑山县"
    }, {
      "label": "义县",
      "value": "义县"
    }, {
      "label": "凌海市",
      "value": "凌海市"
    }, {
      "label": "北镇市",
      "value": "北镇市"
    }]
  }, {
    "label": "营口市",
    "value": "营口市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "站前区",
      "value": "站前区"
    }, {
      "label": "西市区",
      "value": "西市区"
    }, {
      "label": "鲅鱼圈区",
      "value": "鲅鱼圈区"
    }, {
      "label": "老边区",
      "value": "老边区"
    }, {
      "label": "盖州市",
      "value": "盖州市"
    }, {
      "label": "大石桥市",
      "value": "大石桥市"
    }]
  }, {
    "label": "阜新市",
    "value": "阜新市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海州区",
      "value": "海州区"
    }, {
      "label": "新邱区",
      "value": "新邱区"
    }, {
      "label": "太平区",
      "value": "太平区"
    }, {
      "label": "清河门区",
      "value": "清河门区"
    }, {
      "label": "细河区",
      "value": "细河区"
    }, {
      "label": "阜新蒙古族自治县",
      "value": "阜新蒙古族自治县"
    }, {
      "label": "彰武县",
      "value": "彰武县"
    }]
  }, {
    "label": "辽阳市",
    "value": "辽阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "白塔区",
      "value": "白塔区"
    }, {
      "label": "文圣区",
      "value": "文圣区"
    }, {
      "label": "宏伟区",
      "value": "宏伟区"
    }, {
      "label": "弓长岭区",
      "value": "弓长岭区"
    }, {
      "label": "太子河区",
      "value": "太子河区"
    }, {
      "label": "辽阳县",
      "value": "辽阳县"
    }, {
      "label": "灯塔市",
      "value": "灯塔市"
    }]
  }, {
    "label": "盘锦市",
    "value": "盘锦市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "双台子区",
      "value": "双台子区"
    }, {
      "label": "兴隆台区",
      "value": "兴隆台区"
    }, {
      "label": "大洼县",
      "value": "大洼县"
    }, {
      "label": "盘山县",
      "value": "盘山县"
    }]
  }, {
    "label": "铁岭市",
    "value": "铁岭市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "银州区",
      "value": "银州区"
    }, {
      "label": "清河区",
      "value": "清河区"
    }, {
      "label": "铁岭县",
      "value": "铁岭县"
    }, {
      "label": "西丰县",
      "value": "西丰县"
    }, {
      "label": "昌图县",
      "value": "昌图县"
    }, {
      "label": "调兵山市",
      "value": "调兵山市"
    }, {
      "label": "开原市",
      "value": "开原市"
    }]
  }, {
    "label": "朝阳市",
    "value": "朝阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "双塔区",
      "value": "双塔区"
    }, {
      "label": "龙城区",
      "value": "龙城区"
    }, {
      "label": "朝阳县",
      "value": "朝阳县"
    }, {
      "label": "建平县",
      "value": "建平县"
    }, {
      "label": "喀喇沁左翼蒙古族自治县",
      "value": "喀喇沁左翼蒙古族自治县"
    }, {
      "label": "北票市",
      "value": "北票市"
    }, {
      "label": "凌源市",
      "value": "凌源市"
    }]
  }, {
    "label": "葫芦岛市",
    "value": "葫芦岛市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "连山区",
      "value": "连山区"
    }, {
      "label": "龙港区",
      "value": "龙港区"
    }, {
      "label": "南票区",
      "value": "南票区"
    }, {
      "label": "绥中县",
      "value": "绥中县"
    }, {
      "label": "建昌县",
      "value": "建昌县"
    }, {
      "label": "兴城市",
      "value": "兴城市"
    }]
  }]
}, {
  "label": "吉林省",
  "value": "吉林省",
  "children": [{
    "label": "长春市",
    "value": "长春市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "南关区",
      "value": "南关区"
    }, {
      "label": "宽城区",
      "value": "宽城区"
    }, {
      "label": "朝阳区",
      "value": "朝阳区"
    }, {
      "label": "二道区",
      "value": "二道区"
    }, {
      "label": "绿园区",
      "value": "绿园区"
    }, {
      "label": "双阳区",
      "value": "双阳区"
    }, {
      "label": "九台区",
      "value": "九台区"
    }, {
      "label": "农安县",
      "value": "农安县"
    }, {
      "label": "榆树市",
      "value": "榆树市"
    }, {
      "label": "德惠市",
      "value": "德惠市"
    }]
  }, {
    "label": "吉林市",
    "value": "吉林市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "昌邑区",
      "value": "昌邑区"
    }, {
      "label": "龙潭区",
      "value": "龙潭区"
    }, {
      "label": "船营区",
      "value": "船营区"
    }, {
      "label": "丰满区",
      "value": "丰满区"
    }, {
      "label": "永吉县",
      "value": "永吉县"
    }, {
      "label": "蛟河市",
      "value": "蛟河市"
    }, {
      "label": "桦甸市",
      "value": "桦甸市"
    }, {
      "label": "舒兰市",
      "value": "舒兰市"
    }, {
      "label": "磐石市",
      "value": "磐石市"
    }]
  }, {
    "label": "四平市",
    "value": "四平市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "铁西区",
      "value": "铁西区"
    }, {
      "label": "铁东区",
      "value": "铁东区"
    }, {
      "label": "梨树县",
      "value": "梨树县"
    }, {
      "label": "伊通满族自治县",
      "value": "伊通满族自治县"
    }, {
      "label": "公主岭市",
      "value": "公主岭市"
    }, {
      "label": "双辽市",
      "value": "双辽市"
    }]
  }, {
    "label": "辽源市",
    "value": "辽源市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "龙山区",
      "value": "龙山区"
    }, {
      "label": "西安区",
      "value": "西安区"
    }, {
      "label": "东丰县",
      "value": "东丰县"
    }, {
      "label": "东辽县",
      "value": "东辽县"
    }]
  }, {
    "label": "通化市",
    "value": "通化市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东昌区",
      "value": "东昌区"
    }, {
      "label": "二道江区",
      "value": "二道江区"
    }, {
      "label": "通化县",
      "value": "通化县"
    }, {
      "label": "辉南县",
      "value": "辉南县"
    }, {
      "label": "柳河县",
      "value": "柳河县"
    }, {
      "label": "梅河口市",
      "value": "梅河口市"
    }, {
      "label": "集安市",
      "value": "集安市"
    }]
  }, {
    "label": "白山市",
    "value": "白山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "浑江区",
      "value": "浑江区"
    }, {
      "label": "江源区",
      "value": "江源区"
    }, {
      "label": "抚松县",
      "value": "抚松县"
    }, {
      "label": "靖宇县",
      "value": "靖宇县"
    }, {
      "label": "长白朝鲜族自治县",
      "value": "长白朝鲜族自治县"
    }, {
      "label": "临江市",
      "value": "临江市"
    }]
  }, {
    "label": "松原市",
    "value": "松原市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "宁江区",
      "value": "宁江区"
    }, {
      "label": "前郭尔罗斯蒙古族自治县",
      "value": "前郭尔罗斯蒙古族自治县"
    }, {
      "label": "长岭县",
      "value": "长岭县"
    }, {
      "label": "乾安县",
      "value": "乾安县"
    }, {
      "label": "扶余市",
      "value": "扶余市"
    }]
  }, {
    "label": "白城市",
    "value": "白城市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "洮北区",
      "value": "洮北区"
    }, {
      "label": "镇赉县",
      "value": "镇赉县"
    }, {
      "label": "通榆县",
      "value": "通榆县"
    }, {
      "label": "洮南市",
      "value": "洮南市"
    }, {
      "label": "大安市",
      "value": "大安市"
    }]
  }, {
    "label": "延边朝鲜族自治州",
    "value": "延边朝鲜族自治州",
    "children": [{
      "label": "延吉市",
      "value": "延吉市"
    }, {
      "label": "图们市",
      "value": "图们市"
    }, {
      "label": "敦化市",
      "value": "敦化市"
    }, {
      "label": "珲春市",
      "value": "珲春市"
    }, {
      "label": "龙井市",
      "value": "龙井市"
    }, {
      "label": "和龙市",
      "value": "和龙市"
    }, {
      "label": "汪清县",
      "value": "汪清县"
    }, {
      "label": "安图县",
      "value": "安图县"
    }]
  }]
}, {
  "label": "黑龙江省",
  "value": "黑龙江省",
  "children": [{
    "label": "哈尔滨市",
    "value": "哈尔滨市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "道里区",
      "value": "道里区"
    }, {
      "label": "南岗区",
      "value": "南岗区"
    }, {
      "label": "道外区",
      "value": "道外区"
    }, {
      "label": "平房区",
      "value": "平房区"
    }, {
      "label": "松北区",
      "value": "松北区"
    }, {
      "label": "香坊区",
      "value": "香坊区"
    }, {
      "label": "呼兰区",
      "value": "呼兰区"
    }, {
      "label": "阿城区",
      "value": "阿城区"
    }, {
      "label": "双城区",
      "value": "双城区"
    }, {
      "label": "依兰县",
      "value": "依兰县"
    }, {
      "label": "方正县",
      "value": "方正县"
    }, {
      "label": "宾县",
      "value": "宾县"
    }, {
      "label": "巴彦县",
      "value": "巴彦县"
    }, {
      "label": "木兰县",
      "value": "木兰县"
    }, {
      "label": "通河县",
      "value": "通河县"
    }, {
      "label": "延寿县",
      "value": "延寿县"
    }, {
      "label": "尚志市",
      "value": "尚志市"
    }, {
      "label": "五常市",
      "value": "五常市"
    }]
  }, {
    "label": "齐齐哈尔市",
    "value": "齐齐哈尔市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "龙沙区",
      "value": "龙沙区"
    }, {
      "label": "建华区",
      "value": "建华区"
    }, {
      "label": "铁锋区",
      "value": "铁锋区"
    }, {
      "label": "昂昂溪区",
      "value": "昂昂溪区"
    }, {
      "label": "富拉尔基区",
      "value": "富拉尔基区"
    }, {
      "label": "碾子山区",
      "value": "碾子山区"
    }, {
      "label": "梅里斯达斡尔族区",
      "value": "梅里斯达斡尔族区"
    }, {
      "label": "龙江县",
      "value": "龙江县"
    }, {
      "label": "依安县",
      "value": "依安县"
    }, {
      "label": "泰来县",
      "value": "泰来县"
    }, {
      "label": "甘南县",
      "value": "甘南县"
    }, {
      "label": "富裕县",
      "value": "富裕县"
    }, {
      "label": "克山县",
      "value": "克山县"
    }, {
      "label": "克东县",
      "value": "克东县"
    }, {
      "label": "拜泉县",
      "value": "拜泉县"
    }, {
      "label": "讷河市",
      "value": "讷河市"
    }]
  }, {
    "label": "鸡西市",
    "value": "鸡西市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "鸡冠区",
      "value": "鸡冠区"
    }, {
      "label": "恒山区",
      "value": "恒山区"
    }, {
      "label": "滴道区",
      "value": "滴道区"
    }, {
      "label": "梨树区",
      "value": "梨树区"
    }, {
      "label": "城子河区",
      "value": "城子河区"
    }, {
      "label": "麻山区",
      "value": "麻山区"
    }, {
      "label": "鸡东县",
      "value": "鸡东县"
    }, {
      "label": "虎林市",
      "value": "虎林市"
    }, {
      "label": "密山市",
      "value": "密山市"
    }]
  }, {
    "label": "鹤岗市",
    "value": "鹤岗市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "向阳区",
      "value": "向阳区"
    }, {
      "label": "工农区",
      "value": "工农区"
    }, {
      "label": "南山区",
      "value": "南山区"
    }, {
      "label": "兴安区",
      "value": "兴安区"
    }, {
      "label": "东山区",
      "value": "东山区"
    }, {
      "label": "兴山区",
      "value": "兴山区"
    }, {
      "label": "萝北县",
      "value": "萝北县"
    }, {
      "label": "绥滨县",
      "value": "绥滨县"
    }]
  }, {
    "label": "双鸭山市",
    "value": "双鸭山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "尖山区",
      "value": "尖山区"
    }, {
      "label": "岭东区",
      "value": "岭东区"
    }, {
      "label": "四方台区",
      "value": "四方台区"
    }, {
      "label": "宝山区",
      "value": "宝山区"
    }, {
      "label": "集贤县",
      "value": "集贤县"
    }, {
      "label": "友谊县",
      "value": "友谊县"
    }, {
      "label": "宝清县",
      "value": "宝清县"
    }, {
      "label": "饶河县",
      "value": "饶河县"
    }]
  }, {
    "label": "大庆市",
    "value": "大庆市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "萨尔图区",
      "value": "萨尔图区"
    }, {
      "label": "龙凤区",
      "value": "龙凤区"
    }, {
      "label": "让胡路区",
      "value": "让胡路区"
    }, {
      "label": "红岗区",
      "value": "红岗区"
    }, {
      "label": "大同区",
      "value": "大同区"
    }, {
      "label": "肇州县",
      "value": "肇州县"
    }, {
      "label": "肇源县",
      "value": "肇源县"
    }, {
      "label": "林甸县",
      "value": "林甸县"
    }, {
      "label": "杜尔伯特蒙古族自治县",
      "value": "杜尔伯特蒙古族自治县"
    }]
  }, {
    "label": "伊春市",
    "value": "伊春市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "伊春区",
      "value": "伊春区"
    }, {
      "label": "南岔区",
      "value": "南岔区"
    }, {
      "label": "友好区",
      "value": "友好区"
    }, {
      "label": "西林区",
      "value": "西林区"
    }, {
      "label": "翠峦区",
      "value": "翠峦区"
    }, {
      "label": "新青区",
      "value": "新青区"
    }, {
      "label": "美溪区",
      "value": "美溪区"
    }, {
      "label": "金山屯区",
      "value": "金山屯区"
    }, {
      "label": "五营区",
      "value": "五营区"
    }, {
      "label": "乌马河区",
      "value": "乌马河区"
    }, {
      "label": "汤旺河区",
      "value": "汤旺河区"
    }, {
      "label": "带岭区",
      "value": "带岭区"
    }, {
      "label": "乌伊岭区",
      "value": "乌伊岭区"
    }, {
      "label": "红星区",
      "value": "红星区"
    }, {
      "label": "上甘岭区",
      "value": "上甘岭区"
    }, {
      "label": "嘉荫县",
      "value": "嘉荫县"
    }, {
      "label": "铁力市",
      "value": "铁力市"
    }]
  }, {
    "label": "佳木斯市",
    "value": "佳木斯市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "向阳区",
      "value": "向阳区"
    }, {
      "label": "前进区",
      "value": "前进区"
    }, {
      "label": "东风区",
      "value": "东风区"
    }, {
      "label": "郊区",
      "value": "郊区"
    }, {
      "label": "桦南县",
      "value": "桦南县"
    }, {
      "label": "桦川县",
      "value": "桦川县"
    }, {
      "label": "汤原县",
      "value": "汤原县"
    }, {
      "label": "抚远县",
      "value": "抚远县"
    }, {
      "label": "同江市",
      "value": "同江市"
    }, {
      "label": "富锦市",
      "value": "富锦市"
    }]
  }, {
    "label": "七台河市",
    "value": "七台河市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新兴区",
      "value": "新兴区"
    }, {
      "label": "桃山区",
      "value": "桃山区"
    }, {
      "label": "茄子河区",
      "value": "茄子河区"
    }, {
      "label": "勃利县",
      "value": "勃利县"
    }]
  }, {
    "label": "牡丹江市",
    "value": "牡丹江市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东安区",
      "value": "东安区"
    }, {
      "label": "阳明区",
      "value": "阳明区"
    }, {
      "label": "爱民区",
      "value": "爱民区"
    }, {
      "label": "西安区",
      "value": "西安区"
    }, {
      "label": "东宁县",
      "value": "东宁县"
    }, {
      "label": "林口县",
      "value": "林口县"
    }, {
      "label": "绥芬河市",
      "value": "绥芬河市"
    }, {
      "label": "海林市",
      "value": "海林市"
    }, {
      "label": "宁安市",
      "value": "宁安市"
    }, {
      "label": "穆棱市",
      "value": "穆棱市"
    }]
  }, {
    "label": "黑河市",
    "value": "黑河市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "爱辉区",
      "value": "爱辉区"
    }, {
      "label": "嫩江县",
      "value": "嫩江县"
    }, {
      "label": "逊克县",
      "value": "逊克县"
    }, {
      "label": "孙吴县",
      "value": "孙吴县"
    }, {
      "label": "北安市",
      "value": "北安市"
    }, {
      "label": "五大连池市",
      "value": "五大连池市"
    }]
  }, {
    "label": "绥化市",
    "value": "绥化市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "北林区",
      "value": "北林区"
    }, {
      "label": "望奎县",
      "value": "望奎县"
    }, {
      "label": "兰西县",
      "value": "兰西县"
    }, {
      "label": "青冈县",
      "value": "青冈县"
    }, {
      "label": "庆安县",
      "value": "庆安县"
    }, {
      "label": "明水县",
      "value": "明水县"
    }, {
      "label": "绥棱县",
      "value": "绥棱县"
    }, {
      "label": "安达市",
      "value": "安达市"
    }, {
      "label": "肇东市",
      "value": "肇东市"
    }, {
      "label": "海伦市",
      "value": "海伦市"
    }]
  }, {
    "label": "大兴安岭地区",
    "value": "大兴安岭地区",
    "children": [{
      "label": "呼玛县",
      "value": "呼玛县"
    }, {
      "label": "塔河县",
      "value": "塔河县"
    }, {
      "label": "漠河县",
      "value": "漠河县"
    }]
  }]
}, {
  "label": "上海市",
  "value": "上海市",
  "children": [{
    "label": "上海市",
    "value": "上海市",
    "children": [{
      "label": "黄浦区",
      "value": "黄浦区"
    }, {
      "label": "徐汇区",
      "value": "徐汇区"
    }, {
      "label": "长宁区",
      "value": "长宁区"
    }, {
      "label": "静安区",
      "value": "静安区"
    }, {
      "label": "普陀区",
      "value": "普陀区"
    }, {
      "label": "闸北区",
      "value": "闸北区"
    }, {
      "label": "虹口区",
      "value": "虹口区"
    }, {
      "label": "杨浦区",
      "value": "杨浦区"
    }, {
      "label": "闵行区",
      "value": "闵行区"
    }, {
      "label": "宝山区",
      "value": "宝山区"
    }, {
      "label": "嘉定区",
      "value": "嘉定区"
    }, {
      "label": "浦东新区",
      "value": "浦东新区"
    }, {
      "label": "金山区",
      "value": "金山区"
    }, {
      "label": "松江区",
      "value": "松江区"
    }, {
      "label": "青浦区",
      "value": "青浦区"
    }, {
      "label": "奉贤区",
      "value": "奉贤区"
    }, {
      "label": "崇明县",
      "value": "崇明县"
    }]
  }]
}, {
  "label": "江苏省",
  "value": "江苏省",
  "children": [{
    "label": "南京市",
    "value": "南京市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "玄武区",
      "value": "玄武区"
    }, {
      "label": "秦淮区",
      "value": "秦淮区"
    }, {
      "label": "建邺区",
      "value": "建邺区"
    }, {
      "label": "鼓楼区",
      "value": "鼓楼区"
    }, {
      "label": "浦口区",
      "value": "浦口区"
    }, {
      "label": "栖霞区",
      "value": "栖霞区"
    }, {
      "label": "雨花台区",
      "value": "雨花台区"
    }, {
      "label": "江宁区",
      "value": "江宁区"
    }, {
      "label": "六合区",
      "value": "六合区"
    }, {
      "label": "溧水区",
      "value": "溧水区"
    }, {
      "label": "高淳区",
      "value": "高淳区"
    }]
  }, {
    "label": "无锡市",
    "value": "无锡市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "崇安区",
      "value": "崇安区"
    }, {
      "label": "南长区",
      "value": "南长区"
    }, {
      "label": "北塘区",
      "value": "北塘区"
    }, {
      "label": "锡山区",
      "value": "锡山区"
    }, {
      "label": "惠山区",
      "value": "惠山区"
    }, {
      "label": "滨湖区",
      "value": "滨湖区"
    }, {
      "label": "江阴市",
      "value": "江阴市"
    }, {
      "label": "宜兴市",
      "value": "宜兴市"
    }]
  }, {
    "label": "徐州市",
    "value": "徐州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "鼓楼区",
      "value": "鼓楼区"
    }, {
      "label": "云龙区",
      "value": "云龙区"
    }, {
      "label": "贾汪区",
      "value": "贾汪区"
    }, {
      "label": "泉山区",
      "value": "泉山区"
    }, {
      "label": "铜山区",
      "value": "铜山区"
    }, {
      "label": "丰县",
      "value": "丰县"
    }, {
      "label": "沛县",
      "value": "沛县"
    }, {
      "label": "睢宁县",
      "value": "睢宁县"
    }, {
      "label": "新沂市",
      "value": "新沂市"
    }, {
      "label": "邳州市",
      "value": "邳州市"
    }]
  }, {
    "label": "常州市",
    "value": "常州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "天宁区",
      "value": "天宁区"
    }, {
      "label": "钟楼区",
      "value": "钟楼区"
    }, {
      "label": "戚墅堰区",
      "value": "戚墅堰区"
    }, {
      "label": "新北区",
      "value": "新北区"
    }, {
      "label": "武进区",
      "value": "武进区"
    }, {
      "label": "溧阳市",
      "value": "溧阳市"
    }, {
      "label": "金坛市",
      "value": "金坛市"
    }]
  }, {
    "label": "苏州市",
    "value": "苏州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "虎丘区",
      "value": "虎丘区"
    }, {
      "label": "吴中区",
      "value": "吴中区"
    }, {
      "label": "相城区",
      "value": "相城区"
    }, {
      "label": "姑苏区",
      "value": "姑苏区"
    }, {
      "label": "吴江区",
      "value": "吴江区"
    }, {
      "label": "常熟市",
      "value": "常熟市"
    }, {
      "label": "张家港市",
      "value": "张家港市"
    }, {
      "label": "昆山市",
      "value": "昆山市"
    }, {
      "label": "太仓市",
      "value": "太仓市"
    }]
  }, {
    "label": "南通市",
    "value": "南通市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "崇川区",
      "value": "崇川区"
    }, {
      "label": "港闸区",
      "value": "港闸区"
    }, {
      "label": "通州区",
      "value": "通州区"
    }, {
      "label": "海安县",
      "value": "海安县"
    }, {
      "label": "如东县",
      "value": "如东县"
    }, {
      "label": "启东市",
      "value": "启东市"
    }, {
      "label": "如皋市",
      "value": "如皋市"
    }, {
      "label": "海门市",
      "value": "海门市"
    }]
  }, {
    "label": "连云港市",
    "value": "连云港市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "连云区",
      "value": "连云区"
    }, {
      "label": "海州区",
      "value": "海州区"
    }, {
      "label": "赣榆区",
      "value": "赣榆区"
    }, {
      "label": "东海县",
      "value": "东海县"
    }, {
      "label": "灌云县",
      "value": "灌云县"
    }, {
      "label": "灌南县",
      "value": "灌南县"
    }]
  }, {
    "label": "淮安市",
    "value": "淮安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "清河区",
      "value": "清河区"
    }, {
      "label": "淮安区",
      "value": "淮安区"
    }, {
      "label": "淮阴区",
      "value": "淮阴区"
    }, {
      "label": "清浦区",
      "value": "清浦区"
    }, {
      "label": "涟水县",
      "value": "涟水县"
    }, {
      "label": "洪泽县",
      "value": "洪泽县"
    }, {
      "label": "盱眙县",
      "value": "盱眙县"
    }, {
      "label": "金湖县",
      "value": "金湖县"
    }]
  }, {
    "label": "盐城市",
    "value": "盐城市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "亭湖区",
      "value": "亭湖区"
    }, {
      "label": "盐都区",
      "value": "盐都区"
    }, {
      "label": "响水县",
      "value": "响水县"
    }, {
      "label": "滨海县",
      "value": "滨海县"
    }, {
      "label": "阜宁县",
      "value": "阜宁县"
    }, {
      "label": "射阳县",
      "value": "射阳县"
    }, {
      "label": "建湖县",
      "value": "建湖县"
    }, {
      "label": "东台市",
      "value": "东台市"
    }, {
      "label": "大丰市",
      "value": "大丰市"
    }]
  }, {
    "label": "扬州市",
    "value": "扬州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "广陵区",
      "value": "广陵区"
    }, {
      "label": "邗江区",
      "value": "邗江区"
    }, {
      "label": "江都区",
      "value": "江都区"
    }, {
      "label": "宝应县",
      "value": "宝应县"
    }, {
      "label": "仪征市",
      "value": "仪征市"
    }, {
      "label": "高邮市",
      "value": "高邮市"
    }]
  }, {
    "label": "镇江市",
    "value": "镇江市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "京口区",
      "value": "京口区"
    }, {
      "label": "润州区",
      "value": "润州区"
    }, {
      "label": "丹徒区",
      "value": "丹徒区"
    }, {
      "label": "丹阳市",
      "value": "丹阳市"
    }, {
      "label": "扬中市",
      "value": "扬中市"
    }, {
      "label": "句容市",
      "value": "句容市"
    }]
  }, {
    "label": "泰州市",
    "value": "泰州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海陵区",
      "value": "海陵区"
    }, {
      "label": "高港区",
      "value": "高港区"
    }, {
      "label": "姜堰区",
      "value": "姜堰区"
    }, {
      "label": "兴化市",
      "value": "兴化市"
    }, {
      "label": "靖江市",
      "value": "靖江市"
    }, {
      "label": "泰兴市",
      "value": "泰兴市"
    }]
  }, {
    "label": "宿迁市",
    "value": "宿迁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "宿城区",
      "value": "宿城区"
    }, {
      "label": "宿豫区",
      "value": "宿豫区"
    }, {
      "label": "沭阳县",
      "value": "沭阳县"
    }, {
      "label": "泗阳县",
      "value": "泗阳县"
    }, {
      "label": "泗洪县",
      "value": "泗洪县"
    }]
  }]
}, {
  "label": "浙江省",
  "value": "浙江省",
  "children": [{
    "label": "杭州市",
    "value": "杭州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "上城区",
      "value": "上城区"
    }, {
      "label": "下城区",
      "value": "下城区"
    }, {
      "label": "江干区",
      "value": "江干区"
    }, {
      "label": "拱墅区",
      "value": "拱墅区"
    }, {
      "label": "西湖区",
      "value": "西湖区"
    }, {
      "label": "滨江区",
      "value": "滨江区"
    }, {
      "label": "萧山区",
      "value": "萧山区"
    }, {
      "label": "余杭区",
      "value": "余杭区"
    }, {
      "label": "富阳区",
      "value": "富阳区"
    }, {
      "label": "桐庐县",
      "value": "桐庐县"
    }, {
      "label": "淳安县",
      "value": "淳安县"
    }, {
      "label": "建德市",
      "value": "建德市"
    }, {
      "label": "临安市",
      "value": "临安市"
    }]
  }, {
    "label": "宁波市",
    "value": "宁波市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海曙区",
      "value": "海曙区"
    }, {
      "label": "江东区",
      "value": "江东区"
    }, {
      "label": "江北区",
      "value": "江北区"
    }, {
      "label": "北仑区",
      "value": "北仑区"
    }, {
      "label": "镇海区",
      "value": "镇海区"
    }, {
      "label": "鄞州区",
      "value": "鄞州区"
    }, {
      "label": "象山县",
      "value": "象山县"
    }, {
      "label": "宁海县",
      "value": "宁海县"
    }, {
      "label": "余姚市",
      "value": "余姚市"
    }, {
      "label": "慈溪市",
      "value": "慈溪市"
    }, {
      "label": "奉化市",
      "value": "奉化市"
    }]
  }, {
    "label": "温州市",
    "value": "温州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "鹿城区",
      "value": "鹿城区"
    }, {
      "label": "龙湾区",
      "value": "龙湾区"
    }, {
      "label": "瓯海区",
      "value": "瓯海区"
    }, {
      "label": "洞头县",
      "value": "洞头县"
    }, {
      "label": "永嘉县",
      "value": "永嘉县"
    }, {
      "label": "平阳县",
      "value": "平阳县"
    }, {
      "label": "苍南县",
      "value": "苍南县"
    }, {
      "label": "文成县",
      "value": "文成县"
    }, {
      "label": "泰顺县",
      "value": "泰顺县"
    }, {
      "label": "瑞安市",
      "value": "瑞安市"
    }, {
      "label": "乐清市",
      "value": "乐清市"
    }]
  }, {
    "label": "嘉兴市",
    "value": "嘉兴市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "南湖区",
      "value": "南湖区"
    }, {
      "label": "秀洲区",
      "value": "秀洲区"
    }, {
      "label": "嘉善县",
      "value": "嘉善县"
    }, {
      "label": "海盐县",
      "value": "海盐县"
    }, {
      "label": "海宁市",
      "value": "海宁市"
    }, {
      "label": "平湖市",
      "value": "平湖市"
    }, {
      "label": "桐乡市",
      "value": "桐乡市"
    }]
  }, {
    "label": "湖州市",
    "value": "湖州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "吴兴区",
      "value": "吴兴区"
    }, {
      "label": "南浔区",
      "value": "南浔区"
    }, {
      "label": "德清县",
      "value": "德清县"
    }, {
      "label": "长兴县",
      "value": "长兴县"
    }, {
      "label": "安吉县",
      "value": "安吉县"
    }]
  }, {
    "label": "绍兴市",
    "value": "绍兴市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "越城区",
      "value": "越城区"
    }, {
      "label": "柯桥区",
      "value": "柯桥区"
    }, {
      "label": "上虞区",
      "value": "上虞区"
    }, {
      "label": "新昌县",
      "value": "新昌县"
    }, {
      "label": "诸暨市",
      "value": "诸暨市"
    }, {
      "label": "嵊州市",
      "value": "嵊州市"
    }]
  }, {
    "label": "金华市",
    "value": "金华市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "婺城区",
      "value": "婺城区"
    }, {
      "label": "金东区",
      "value": "金东区"
    }, {
      "label": "武义县",
      "value": "武义县"
    }, {
      "label": "浦江县",
      "value": "浦江县"
    }, {
      "label": "磐安县",
      "value": "磐安县"
    }, {
      "label": "兰溪市",
      "value": "兰溪市"
    }, {
      "label": "义乌市",
      "value": "义乌市"
    }, {
      "label": "东阳市",
      "value": "东阳市"
    }, {
      "label": "永康市",
      "value": "永康市"
    }]
  }, {
    "label": "衢州市",
    "value": "衢州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "柯城区",
      "value": "柯城区"
    }, {
      "label": "衢江区",
      "value": "衢江区"
    }, {
      "label": "常山县",
      "value": "常山县"
    }, {
      "label": "开化县",
      "value": "开化县"
    }, {
      "label": "龙游县",
      "value": "龙游县"
    }, {
      "label": "江山市",
      "value": "江山市"
    }]
  }, {
    "label": "舟山市",
    "value": "舟山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "定海区",
      "value": "定海区"
    }, {
      "label": "普陀区",
      "value": "普陀区"
    }, {
      "label": "岱山县",
      "value": "岱山县"
    }, {
      "label": "嵊泗县",
      "value": "嵊泗县"
    }]
  }, {
    "label": "台州市",
    "value": "台州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "椒江区",
      "value": "椒江区"
    }, {
      "label": "黄岩区",
      "value": "黄岩区"
    }, {
      "label": "路桥区",
      "value": "路桥区"
    }, {
      "label": "玉环县",
      "value": "玉环县"
    }, {
      "label": "三门县",
      "value": "三门县"
    }, {
      "label": "天台县",
      "value": "天台县"
    }, {
      "label": "仙居县",
      "value": "仙居县"
    }, {
      "label": "温岭市",
      "value": "温岭市"
    }, {
      "label": "临海市",
      "value": "临海市"
    }]
  }, {
    "label": "丽水市",
    "value": "丽水市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "莲都区",
      "value": "莲都区"
    }, {
      "label": "青田县",
      "value": "青田县"
    }, {
      "label": "缙云县",
      "value": "缙云县"
    }, {
      "label": "遂昌县",
      "value": "遂昌县"
    }, {
      "label": "松阳县",
      "value": "松阳县"
    }, {
      "label": "云和县",
      "value": "云和县"
    }, {
      "label": "庆元县",
      "value": "庆元县"
    }, {
      "label": "景宁畲族自治县",
      "value": "景宁畲族自治县"
    }, {
      "label": "龙泉市",
      "value": "龙泉市"
    }]
  }]
}, {
  "label": "安徽省",
  "value": "安徽省",
  "children": [{
    "label": "合肥市",
    "value": "合肥市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "瑶海区",
      "value": "瑶海区"
    }, {
      "label": "庐阳区",
      "value": "庐阳区"
    }, {
      "label": "蜀山区",
      "value": "蜀山区"
    }, {
      "label": "包河区",
      "value": "包河区"
    }, {
      "label": "长丰县",
      "value": "长丰县"
    }, {
      "label": "肥东县",
      "value": "肥东县"
    }, {
      "label": "肥西县",
      "value": "肥西县"
    }, {
      "label": "庐江县",
      "value": "庐江县"
    }, {
      "label": "巢湖市",
      "value": "巢湖市"
    }]
  }, {
    "label": "芜湖市",
    "value": "芜湖市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "镜湖区",
      "value": "镜湖区"
    }, {
      "label": "弋江区",
      "value": "弋江区"
    }, {
      "label": "鸠江区",
      "value": "鸠江区"
    }, {
      "label": "三山区",
      "value": "三山区"
    }, {
      "label": "芜湖县",
      "value": "芜湖县"
    }, {
      "label": "繁昌县",
      "value": "繁昌县"
    }, {
      "label": "南陵县",
      "value": "南陵县"
    }, {
      "label": "无为县",
      "value": "无为县"
    }]
  }, {
    "label": "蚌埠市",
    "value": "蚌埠市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "龙子湖区",
      "value": "龙子湖区"
    }, {
      "label": "蚌山区",
      "value": "蚌山区"
    }, {
      "label": "禹会区",
      "value": "禹会区"
    }, {
      "label": "淮上区",
      "value": "淮上区"
    }, {
      "label": "怀远县",
      "value": "怀远县"
    }, {
      "label": "五河县",
      "value": "五河县"
    }, {
      "label": "固镇县",
      "value": "固镇县"
    }]
  }, {
    "label": "淮南市",
    "value": "淮南市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "大通区",
      "value": "大通区"
    }, {
      "label": "田家庵区",
      "value": "田家庵区"
    }, {
      "label": "谢家集区",
      "value": "谢家集区"
    }, {
      "label": "八公山区",
      "value": "八公山区"
    }, {
      "label": "潘集区",
      "value": "潘集区"
    }, {
      "label": "凤台县",
      "value": "凤台县"
    }]
  }, {
    "label": "马鞍山市",
    "value": "马鞍山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "花山区",
      "value": "花山区"
    }, {
      "label": "雨山区",
      "value": "雨山区"
    }, {
      "label": "博望区",
      "value": "博望区"
    }, {
      "label": "当涂县",
      "value": "当涂县"
    }, {
      "label": "含山县",
      "value": "含山县"
    }, {
      "label": "和县",
      "value": "和县"
    }]
  }, {
    "label": "淮北市",
    "value": "淮北市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "杜集区",
      "value": "杜集区"
    }, {
      "label": "相山区",
      "value": "相山区"
    }, {
      "label": "烈山区",
      "value": "烈山区"
    }, {
      "label": "濉溪县",
      "value": "濉溪县"
    }]
  }, {
    "label": "铜陵市",
    "value": "铜陵市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "铜官山区",
      "value": "铜官山区"
    }, {
      "label": "狮子山区",
      "value": "狮子山区"
    }, {
      "label": "郊区",
      "value": "郊区"
    }, {
      "label": "铜陵县",
      "value": "铜陵县"
    }]
  }, {
    "label": "安庆市",
    "value": "安庆市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "迎江区",
      "value": "迎江区"
    }, {
      "label": "大观区",
      "value": "大观区"
    }, {
      "label": "宜秀区",
      "value": "宜秀区"
    }, {
      "label": "怀宁县",
      "value": "怀宁县"
    }, {
      "label": "枞阳县",
      "value": "枞阳县"
    }, {
      "label": "潜山县",
      "value": "潜山县"
    }, {
      "label": "太湖县",
      "value": "太湖县"
    }, {
      "label": "宿松县",
      "value": "宿松县"
    }, {
      "label": "望江县",
      "value": "望江县"
    }, {
      "label": "岳西县",
      "value": "岳西县"
    }, {
      "label": "桐城市",
      "value": "桐城市"
    }]
  }, {
    "label": "黄山市",
    "value": "黄山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "屯溪区",
      "value": "屯溪区"
    }, {
      "label": "黄山区",
      "value": "黄山区"
    }, {
      "label": "徽州区",
      "value": "徽州区"
    }, {
      "label": "歙县",
      "value": "歙县"
    }, {
      "label": "休宁县",
      "value": "休宁县"
    }, {
      "label": "黟县",
      "value": "黟县"
    }, {
      "label": "祁门县",
      "value": "祁门县"
    }]
  }, {
    "label": "滁州市",
    "value": "滁州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "琅琊区",
      "value": "琅琊区"
    }, {
      "label": "南谯区",
      "value": "南谯区"
    }, {
      "label": "来安县",
      "value": "来安县"
    }, {
      "label": "全椒县",
      "value": "全椒县"
    }, {
      "label": "定远县",
      "value": "定远县"
    }, {
      "label": "凤阳县",
      "value": "凤阳县"
    }, {
      "label": "天长市",
      "value": "天长市"
    }, {
      "label": "明光市",
      "value": "明光市"
    }]
  }, {
    "label": "阜阳市",
    "value": "阜阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "颍州区",
      "value": "颍州区"
    }, {
      "label": "颍东区",
      "value": "颍东区"
    }, {
      "label": "颍泉区",
      "value": "颍泉区"
    }, {
      "label": "临泉县",
      "value": "临泉县"
    }, {
      "label": "太和县",
      "value": "太和县"
    }, {
      "label": "阜南县",
      "value": "阜南县"
    }, {
      "label": "颍上县",
      "value": "颍上县"
    }, {
      "label": "界首市",
      "value": "界首市"
    }]
  }, {
    "label": "宿州市",
    "value": "宿州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "埇桥区",
      "value": "埇桥区"
    }, {
      "label": "砀山县",
      "value": "砀山县"
    }, {
      "label": "萧县",
      "value": "萧县"
    }, {
      "label": "灵璧县",
      "value": "灵璧县"
    }, {
      "label": "泗县",
      "value": "泗县"
    }]
  }, {
    "label": "六安市",
    "value": "六安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "金安区",
      "value": "金安区"
    }, {
      "label": "裕安区",
      "value": "裕安区"
    }, {
      "label": "寿县",
      "value": "寿县"
    }, {
      "label": "霍邱县",
      "value": "霍邱县"
    }, {
      "label": "舒城县",
      "value": "舒城县"
    }, {
      "label": "金寨县",
      "value": "金寨县"
    }, {
      "label": "霍山县",
      "value": "霍山县"
    }]
  }, {
    "label": "亳州市",
    "value": "亳州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "谯城区",
      "value": "谯城区"
    }, {
      "label": "涡阳县",
      "value": "涡阳县"
    }, {
      "label": "蒙城县",
      "value": "蒙城县"
    }, {
      "label": "利辛县",
      "value": "利辛县"
    }]
  }, {
    "label": "池州市",
    "value": "池州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "贵池区",
      "value": "贵池区"
    }, {
      "label": "东至县",
      "value": "东至县"
    }, {
      "label": "石台县",
      "value": "石台县"
    }, {
      "label": "青阳县",
      "value": "青阳县"
    }]
  }, {
    "label": "宣城市",
    "value": "宣城市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "宣州区",
      "value": "宣州区"
    }, {
      "label": "郎溪县",
      "value": "郎溪县"
    }, {
      "label": "广德县",
      "value": "广德县"
    }, {
      "label": "泾县",
      "value": "泾县"
    }, {
      "label": "绩溪县",
      "value": "绩溪县"
    }, {
      "label": "旌德县",
      "value": "旌德县"
    }, {
      "label": "宁国市",
      "value": "宁国市"
    }]
  }]
}, {
  "label": "福建省",
  "value": "福建省",
  "children": [{
    "label": "福州市",
    "value": "福州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "鼓楼区",
      "value": "鼓楼区"
    }, {
      "label": "台江区",
      "value": "台江区"
    }, {
      "label": "仓山区",
      "value": "仓山区"
    }, {
      "label": "马尾区",
      "value": "马尾区"
    }, {
      "label": "晋安区",
      "value": "晋安区"
    }, {
      "label": "闽侯县",
      "value": "闽侯县"
    }, {
      "label": "连江县",
      "value": "连江县"
    }, {
      "label": "罗源县",
      "value": "罗源县"
    }, {
      "label": "闽清县",
      "value": "闽清县"
    }, {
      "label": "永泰县",
      "value": "永泰县"
    }, {
      "label": "平潭县",
      "value": "平潭县"
    }, {
      "label": "福清市",
      "value": "福清市"
    }, {
      "label": "长乐市",
      "value": "长乐市"
    }]
  }, {
    "label": "厦门市",
    "value": "厦门市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "思明区",
      "value": "思明区"
    }, {
      "label": "海沧区",
      "value": "海沧区"
    }, {
      "label": "湖里区",
      "value": "湖里区"
    }, {
      "label": "集美区",
      "value": "集美区"
    }, {
      "label": "同安区",
      "value": "同安区"
    }, {
      "label": "翔安区",
      "value": "翔安区"
    }]
  }, {
    "label": "莆田市",
    "value": "莆田市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城厢区",
      "value": "城厢区"
    }, {
      "label": "涵江区",
      "value": "涵江区"
    }, {
      "label": "荔城区",
      "value": "荔城区"
    }, {
      "label": "秀屿区",
      "value": "秀屿区"
    }, {
      "label": "仙游县",
      "value": "仙游县"
    }]
  }, {
    "label": "三明市",
    "value": "三明市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "梅列区",
      "value": "梅列区"
    }, {
      "label": "三元区",
      "value": "三元区"
    }, {
      "label": "明溪县",
      "value": "明溪县"
    }, {
      "label": "清流县",
      "value": "清流县"
    }, {
      "label": "宁化县",
      "value": "宁化县"
    }, {
      "label": "大田县",
      "value": "大田县"
    }, {
      "label": "尤溪县",
      "value": "尤溪县"
    }, {
      "label": "沙县",
      "value": "沙县"
    }, {
      "label": "将乐县",
      "value": "将乐县"
    }, {
      "label": "泰宁县",
      "value": "泰宁县"
    }, {
      "label": "建宁县",
      "value": "建宁县"
    }, {
      "label": "永安市",
      "value": "永安市"
    }]
  }, {
    "label": "泉州市",
    "value": "泉州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "鲤城区",
      "value": "鲤城区"
    }, {
      "label": "丰泽区",
      "value": "丰泽区"
    }, {
      "label": "洛江区",
      "value": "洛江区"
    }, {
      "label": "泉港区",
      "value": "泉港区"
    }, {
      "label": "惠安县",
      "value": "惠安县"
    }, {
      "label": "安溪县",
      "value": "安溪县"
    }, {
      "label": "永春县",
      "value": "永春县"
    }, {
      "label": "德化县",
      "value": "德化县"
    }, {
      "label": "金门县",
      "value": "金门县"
    }, {
      "label": "石狮市",
      "value": "石狮市"
    }, {
      "label": "晋江市",
      "value": "晋江市"
    }, {
      "label": "南安市",
      "value": "南安市"
    }]
  }, {
    "label": "漳州市",
    "value": "漳州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "芗城区",
      "value": "芗城区"
    }, {
      "label": "龙文区",
      "value": "龙文区"
    }, {
      "label": "云霄县",
      "value": "云霄县"
    }, {
      "label": "漳浦县",
      "value": "漳浦县"
    }, {
      "label": "诏安县",
      "value": "诏安县"
    }, {
      "label": "长泰县",
      "value": "长泰县"
    }, {
      "label": "东山县",
      "value": "东山县"
    }, {
      "label": "南靖县",
      "value": "南靖县"
    }, {
      "label": "平和县",
      "value": "平和县"
    }, {
      "label": "华安县",
      "value": "华安县"
    }, {
      "label": "龙海市",
      "value": "龙海市"
    }]
  }, {
    "label": "南平市",
    "value": "南平市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "延平区",
      "value": "延平区"
    }, {
      "label": "建阳区",
      "value": "建阳区"
    }, {
      "label": "顺昌县",
      "value": "顺昌县"
    }, {
      "label": "浦城县",
      "value": "浦城县"
    }, {
      "label": "光泽县",
      "value": "光泽县"
    }, {
      "label": "松溪县",
      "value": "松溪县"
    }, {
      "label": "政和县",
      "value": "政和县"
    }, {
      "label": "邵武市",
      "value": "邵武市"
    }, {
      "label": "武夷山市",
      "value": "武夷山市"
    }, {
      "label": "建瓯市",
      "value": "建瓯市"
    }]
  }, {
    "label": "龙岩市",
    "value": "龙岩市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新罗区",
      "value": "新罗区"
    }, {
      "label": "永定区",
      "value": "永定区"
    }, {
      "label": "长汀县",
      "value": "长汀县"
    }, {
      "label": "上杭县",
      "value": "上杭县"
    }, {
      "label": "武平县",
      "value": "武平县"
    }, {
      "label": "连城县",
      "value": "连城县"
    }, {
      "label": "漳平市",
      "value": "漳平市"
    }]
  }, {
    "label": "宁德市",
    "value": "宁德市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "蕉城区",
      "value": "蕉城区"
    }, {
      "label": "霞浦县",
      "value": "霞浦县"
    }, {
      "label": "古田县",
      "value": "古田县"
    }, {
      "label": "屏南县",
      "value": "屏南县"
    }, {
      "label": "寿宁县",
      "value": "寿宁县"
    }, {
      "label": "周宁县",
      "value": "周宁县"
    }, {
      "label": "柘荣县",
      "value": "柘荣县"
    }, {
      "label": "福安市",
      "value": "福安市"
    }, {
      "label": "福鼎市",
      "value": "福鼎市"
    }]
  }]
}, {
  "label": "江西省",
  "value": "江西省",
  "children": [{
    "label": "南昌市",
    "value": "南昌市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东湖区",
      "value": "东湖区"
    }, {
      "label": "西湖区",
      "value": "西湖区"
    }, {
      "label": "青云谱区",
      "value": "青云谱区"
    }, {
      "label": "湾里区",
      "value": "湾里区"
    }, {
      "label": "青山湖区",
      "value": "青山湖区"
    }, {
      "label": "南昌县",
      "value": "南昌县"
    }, {
      "label": "新建县",
      "value": "新建县"
    }, {
      "label": "安义县",
      "value": "安义县"
    }, {
      "label": "进贤县",
      "value": "进贤县"
    }]
  }, {
    "label": "景德镇市",
    "value": "景德镇市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "昌江区",
      "value": "昌江区"
    }, {
      "label": "珠山区",
      "value": "珠山区"
    }, {
      "label": "浮梁县",
      "value": "浮梁县"
    }, {
      "label": "乐平市",
      "value": "乐平市"
    }]
  }, {
    "label": "萍乡市",
    "value": "萍乡市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "安源区",
      "value": "安源区"
    }, {
      "label": "湘东区",
      "value": "湘东区"
    }, {
      "label": "莲花县",
      "value": "莲花县"
    }, {
      "label": "上栗县",
      "value": "上栗县"
    }, {
      "label": "芦溪县",
      "value": "芦溪县"
    }]
  }, {
    "label": "九江市",
    "value": "九江市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "庐山区",
      "value": "庐山区"
    }, {
      "label": "浔阳区",
      "value": "浔阳区"
    }, {
      "label": "九江县",
      "value": "九江县"
    }, {
      "label": "武宁县",
      "value": "武宁县"
    }, {
      "label": "修水县",
      "value": "修水县"
    }, {
      "label": "永修县",
      "value": "永修县"
    }, {
      "label": "德安县",
      "value": "德安县"
    }, {
      "label": "星子县",
      "value": "星子县"
    }, {
      "label": "都昌县",
      "value": "都昌县"
    }, {
      "label": "湖口县",
      "value": "湖口县"
    }, {
      "label": "彭泽县",
      "value": "彭泽县"
    }, {
      "label": "瑞昌市",
      "value": "瑞昌市"
    }, {
      "label": "共青城市",
      "value": "共青城市"
    }]
  }, {
    "label": "新余市",
    "value": "新余市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "渝水区",
      "value": "渝水区"
    }, {
      "label": "分宜县",
      "value": "分宜县"
    }]
  }, {
    "label": "鹰潭市",
    "value": "鹰潭市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "月湖区",
      "value": "月湖区"
    }, {
      "label": "余江县",
      "value": "余江县"
    }, {
      "label": "贵溪市",
      "value": "贵溪市"
    }]
  }, {
    "label": "赣州市",
    "value": "赣州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "章贡区",
      "value": "章贡区"
    }, {
      "label": "南康区",
      "value": "南康区"
    }, {
      "label": "赣县",
      "value": "赣县"
    }, {
      "label": "信丰县",
      "value": "信丰县"
    }, {
      "label": "大余县",
      "value": "大余县"
    }, {
      "label": "上犹县",
      "value": "上犹县"
    }, {
      "label": "崇义县",
      "value": "崇义县"
    }, {
      "label": "安远县",
      "value": "安远县"
    }, {
      "label": "龙南县",
      "value": "龙南县"
    }, {
      "label": "定南县",
      "value": "定南县"
    }, {
      "label": "全南县",
      "value": "全南县"
    }, {
      "label": "宁都县",
      "value": "宁都县"
    }, {
      "label": "于都县",
      "value": "于都县"
    }, {
      "label": "兴国县",
      "value": "兴国县"
    }, {
      "label": "会昌县",
      "value": "会昌县"
    }, {
      "label": "寻乌县",
      "value": "寻乌县"
    }, {
      "label": "石城县",
      "value": "石城县"
    }, {
      "label": "瑞金市",
      "value": "瑞金市"
    }]
  }, {
    "label": "吉安市",
    "value": "吉安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "吉州区",
      "value": "吉州区"
    }, {
      "label": "青原区",
      "value": "青原区"
    }, {
      "label": "吉安县",
      "value": "吉安县"
    }, {
      "label": "吉水县",
      "value": "吉水县"
    }, {
      "label": "峡江县",
      "value": "峡江县"
    }, {
      "label": "新干县",
      "value": "新干县"
    }, {
      "label": "永丰县",
      "value": "永丰县"
    }, {
      "label": "泰和县",
      "value": "泰和县"
    }, {
      "label": "遂川县",
      "value": "遂川县"
    }, {
      "label": "万安县",
      "value": "万安县"
    }, {
      "label": "安福县",
      "value": "安福县"
    }, {
      "label": "永新县",
      "value": "永新县"
    }, {
      "label": "井冈山市",
      "value": "井冈山市"
    }]
  }, {
    "label": "宜春市",
    "value": "宜春市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "袁州区",
      "value": "袁州区"
    }, {
      "label": "奉新县",
      "value": "奉新县"
    }, {
      "label": "万载县",
      "value": "万载县"
    }, {
      "label": "上高县",
      "value": "上高县"
    }, {
      "label": "宜丰县",
      "value": "宜丰县"
    }, {
      "label": "靖安县",
      "value": "靖安县"
    }, {
      "label": "铜鼓县",
      "value": "铜鼓县"
    }, {
      "label": "丰城市",
      "value": "丰城市"
    }, {
      "label": "樟树市",
      "value": "樟树市"
    }, {
      "label": "高安市",
      "value": "高安市"
    }]
  }, {
    "label": "抚州市",
    "value": "抚州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "临川区",
      "value": "临川区"
    }, {
      "label": "南城县",
      "value": "南城县"
    }, {
      "label": "黎川县",
      "value": "黎川县"
    }, {
      "label": "南丰县",
      "value": "南丰县"
    }, {
      "label": "崇仁县",
      "value": "崇仁县"
    }, {
      "label": "乐安县",
      "value": "乐安县"
    }, {
      "label": "宜黄县",
      "value": "宜黄县"
    }, {
      "label": "金溪县",
      "value": "金溪县"
    }, {
      "label": "资溪县",
      "value": "资溪县"
    }, {
      "label": "东乡县",
      "value": "东乡县"
    }, {
      "label": "广昌县",
      "value": "广昌县"
    }]
  }, {
    "label": "上饶市",
    "value": "上饶市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "信州区",
      "value": "信州区"
    }, {
      "label": "上饶县",
      "value": "上饶县"
    }, {
      "label": "广丰县",
      "value": "广丰县"
    }, {
      "label": "玉山县",
      "value": "玉山县"
    }, {
      "label": "铅山县",
      "value": "铅山县"
    }, {
      "label": "横峰县",
      "value": "横峰县"
    }, {
      "label": "弋阳县",
      "value": "弋阳县"
    }, {
      "label": "余干县",
      "value": "余干县"
    }, {
      "label": "鄱阳县",
      "value": "鄱阳县"
    }, {
      "label": "万年县",
      "value": "万年县"
    }, {
      "label": "婺源县",
      "value": "婺源县"
    }, {
      "label": "德兴市",
      "value": "德兴市"
    }]
  }]
}, {
  "label": "山东省",
  "value": "山东省",
  "children": [{
    "label": "济南市",
    "value": "济南市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "历下区",
      "value": "历下区"
    }, {
      "label": "市中区",
      "value": "市中区"
    }, {
      "label": "槐荫区",
      "value": "槐荫区"
    }, {
      "label": "天桥区",
      "value": "天桥区"
    }, {
      "label": "历城区",
      "value": "历城区"
    }, {
      "label": "长清区",
      "value": "长清区"
    }, {
      "label": "平阴县",
      "value": "平阴县"
    }, {
      "label": "济阳县",
      "value": "济阳县"
    }, {
      "label": "商河县",
      "value": "商河县"
    }, {
      "label": "章丘市",
      "value": "章丘市"
    }]
  }, {
    "label": "青岛市",
    "value": "青岛市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "市南区",
      "value": "市南区"
    }, {
      "label": "市北区",
      "value": "市北区"
    }, {
      "label": "黄岛区",
      "value": "黄岛区"
    }, {
      "label": "崂山区",
      "value": "崂山区"
    }, {
      "label": "李沧区",
      "value": "李沧区"
    }, {
      "label": "城阳区",
      "value": "城阳区"
    }, {
      "label": "胶州市",
      "value": "胶州市"
    }, {
      "label": "即墨市",
      "value": "即墨市"
    }, {
      "label": "平度市",
      "value": "平度市"
    }, {
      "label": "莱西市",
      "value": "莱西市"
    }]
  }, {
    "label": "淄博市",
    "value": "淄博市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "淄川区",
      "value": "淄川区"
    }, {
      "label": "张店区",
      "value": "张店区"
    }, {
      "label": "博山区",
      "value": "博山区"
    }, {
      "label": "临淄区",
      "value": "临淄区"
    }, {
      "label": "周村区",
      "value": "周村区"
    }, {
      "label": "桓台县",
      "value": "桓台县"
    }, {
      "label": "高青县",
      "value": "高青县"
    }, {
      "label": "沂源县",
      "value": "沂源县"
    }]
  }, {
    "label": "枣庄市",
    "value": "枣庄市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "市中区",
      "value": "市中区"
    }, {
      "label": "薛城区",
      "value": "薛城区"
    }, {
      "label": "峄城区",
      "value": "峄城区"
    }, {
      "label": "台儿庄区",
      "value": "台儿庄区"
    }, {
      "label": "山亭区",
      "value": "山亭区"
    }, {
      "label": "滕州市",
      "value": "滕州市"
    }]
  }, {
    "label": "东营市",
    "value": "东营市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东营区",
      "value": "东营区"
    }, {
      "label": "河口区",
      "value": "河口区"
    }, {
      "label": "垦利县",
      "value": "垦利县"
    }, {
      "label": "利津县",
      "value": "利津县"
    }, {
      "label": "广饶县",
      "value": "广饶县"
    }]
  }, {
    "label": "烟台市",
    "value": "烟台市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "芝罘区",
      "value": "芝罘区"
    }, {
      "label": "福山区",
      "value": "福山区"
    }, {
      "label": "牟平区",
      "value": "牟平区"
    }, {
      "label": "莱山区",
      "value": "莱山区"
    }, {
      "label": "长岛县",
      "value": "长岛县"
    }, {
      "label": "龙口市",
      "value": "龙口市"
    }, {
      "label": "莱阳市",
      "value": "莱阳市"
    }, {
      "label": "莱州市",
      "value": "莱州市"
    }, {
      "label": "蓬莱市",
      "value": "蓬莱市"
    }, {
      "label": "招远市",
      "value": "招远市"
    }, {
      "label": "栖霞市",
      "value": "栖霞市"
    }, {
      "label": "海阳市",
      "value": "海阳市"
    }]
  }, {
    "label": "潍坊市",
    "value": "潍坊市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "潍城区",
      "value": "潍城区"
    }, {
      "label": "寒亭区",
      "value": "寒亭区"
    }, {
      "label": "坊子区",
      "value": "坊子区"
    }, {
      "label": "奎文区",
      "value": "奎文区"
    }, {
      "label": "临朐县",
      "value": "临朐县"
    }, {
      "label": "昌乐县",
      "value": "昌乐县"
    }, {
      "label": "青州市",
      "value": "青州市"
    }, {
      "label": "诸城市",
      "value": "诸城市"
    }, {
      "label": "寿光市",
      "value": "寿光市"
    }, {
      "label": "安丘市",
      "value": "安丘市"
    }, {
      "label": "高密市",
      "value": "高密市"
    }, {
      "label": "昌邑市",
      "value": "昌邑市"
    }]
  }, {
    "label": "济宁市",
    "value": "济宁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "任城区",
      "value": "任城区"
    }, {
      "label": "兖州区",
      "value": "兖州区"
    }, {
      "label": "微山县",
      "value": "微山县"
    }, {
      "label": "鱼台县",
      "value": "鱼台县"
    }, {
      "label": "金乡县",
      "value": "金乡县"
    }, {
      "label": "嘉祥县",
      "value": "嘉祥县"
    }, {
      "label": "汶上县",
      "value": "汶上县"
    }, {
      "label": "泗水县",
      "value": "泗水县"
    }, {
      "label": "梁山县",
      "value": "梁山县"
    }, {
      "label": "曲阜市",
      "value": "曲阜市"
    }, {
      "label": "邹城市",
      "value": "邹城市"
    }]
  }, {
    "label": "泰安市",
    "value": "泰安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "泰山区",
      "value": "泰山区"
    }, {
      "label": "岱岳区",
      "value": "岱岳区"
    }, {
      "label": "宁阳县",
      "value": "宁阳县"
    }, {
      "label": "东平县",
      "value": "东平县"
    }, {
      "label": "新泰市",
      "value": "新泰市"
    }, {
      "label": "肥城市",
      "value": "肥城市"
    }]
  }, {
    "label": "威海市",
    "value": "威海市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "环翠区",
      "value": "环翠区"
    }, {
      "label": "文登市",
      "value": "文登市"
    }, {
      "label": "荣成市",
      "value": "荣成市"
    }, {
      "label": "乳山市",
      "value": "乳山市"
    }]
  }, {
    "label": "日照市",
    "value": "日照市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东港区",
      "value": "东港区"
    }, {
      "label": "岚山区",
      "value": "岚山区"
    }, {
      "label": "五莲县",
      "value": "五莲县"
    }, {
      "label": "莒县",
      "value": "莒县"
    }]
  }, {
    "label": "莱芜市",
    "value": "莱芜市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "莱城区",
      "value": "莱城区"
    }, {
      "label": "钢城区",
      "value": "钢城区"
    }]
  }, {
    "label": "临沂市",
    "value": "临沂市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "兰山区",
      "value": "兰山区"
    }, {
      "label": "罗庄区",
      "value": "罗庄区"
    }, {
      "label": "河东区",
      "value": "河东区"
    }, {
      "label": "沂南县",
      "value": "沂南县"
    }, {
      "label": "郯城县",
      "value": "郯城县"
    }, {
      "label": "沂水县",
      "value": "沂水县"
    }, {
      "label": "兰陵县",
      "value": "兰陵县"
    }, {
      "label": "费县",
      "value": "费县"
    }, {
      "label": "平邑县",
      "value": "平邑县"
    }, {
      "label": "莒南县",
      "value": "莒南县"
    }, {
      "label": "蒙阴县",
      "value": "蒙阴县"
    }, {
      "label": "临沭县",
      "value": "临沭县"
    }]
  }, {
    "label": "德州市",
    "value": "德州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "德城区",
      "value": "德城区"
    }, {
      "label": "陵城区",
      "value": "陵城区"
    }, {
      "label": "宁津县",
      "value": "宁津县"
    }, {
      "label": "庆云县",
      "value": "庆云县"
    }, {
      "label": "临邑县",
      "value": "临邑县"
    }, {
      "label": "齐河县",
      "value": "齐河县"
    }, {
      "label": "平原县",
      "value": "平原县"
    }, {
      "label": "夏津县",
      "value": "夏津县"
    }, {
      "label": "武城县",
      "value": "武城县"
    }, {
      "label": "乐陵市",
      "value": "乐陵市"
    }, {
      "label": "禹城市",
      "value": "禹城市"
    }]
  }, {
    "label": "聊城市",
    "value": "聊城市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东昌府区",
      "value": "东昌府区"
    }, {
      "label": "阳谷县",
      "value": "阳谷县"
    }, {
      "label": "莘县",
      "value": "莘县"
    }, {
      "label": "茌平县",
      "value": "茌平县"
    }, {
      "label": "东阿县",
      "value": "东阿县"
    }, {
      "label": "冠县",
      "value": "冠县"
    }, {
      "label": "高唐县",
      "value": "高唐县"
    }, {
      "label": "临清市",
      "value": "临清市"
    }]
  }, {
    "label": "滨州市",
    "value": "滨州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "滨城区",
      "value": "滨城区"
    }, {
      "label": "沾化区",
      "value": "沾化区"
    }, {
      "label": "惠民县",
      "value": "惠民县"
    }, {
      "label": "阳信县",
      "value": "阳信县"
    }, {
      "label": "无棣县",
      "value": "无棣县"
    }, {
      "label": "博兴县",
      "value": "博兴县"
    }, {
      "label": "邹平县",
      "value": "邹平县"
    }]
  }, {
    "label": "菏泽市",
    "value": "菏泽市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "牡丹区",
      "value": "牡丹区"
    }, {
      "label": "曹县",
      "value": "曹县"
    }, {
      "label": "单县",
      "value": "单县"
    }, {
      "label": "成武县",
      "value": "成武县"
    }, {
      "label": "巨野县",
      "value": "巨野县"
    }, {
      "label": "郓城县",
      "value": "郓城县"
    }, {
      "label": "鄄城县",
      "value": "鄄城县"
    }, {
      "label": "定陶县",
      "value": "定陶县"
    }, {
      "label": "东明县",
      "value": "东明县"
    }]
  }]
}, {
  "label": "河南省",
  "value": "河南省",
  "children": [{
    "label": "郑州市",
    "value": "郑州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "中原区",
      "value": "中原区"
    }, {
      "label": "二七区",
      "value": "二七区"
    }, {
      "label": "管城回族区",
      "value": "管城回族区"
    }, {
      "label": "金水区",
      "value": "金水区"
    }, {
      "label": "上街区",
      "value": "上街区"
    }, {
      "label": "惠济区",
      "value": "惠济区"
    }, {
      "label": "中牟县",
      "value": "中牟县"
    }, {
      "label": "巩义市",
      "value": "巩义市"
    }, {
      "label": "荥阳市",
      "value": "荥阳市"
    }, {
      "label": "新密市",
      "value": "新密市"
    }, {
      "label": "新郑市",
      "value": "新郑市"
    }, {
      "label": "登封市",
      "value": "登封市"
    }]
  }, {
    "label": "开封市",
    "value": "开封市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "龙亭区",
      "value": "龙亭区"
    }, {
      "label": "顺河回族区",
      "value": "顺河回族区"
    }, {
      "label": "鼓楼区",
      "value": "鼓楼区"
    }, {
      "label": "禹王台区",
      "value": "禹王台区"
    }, {
      "label": "祥符区",
      "value": "祥符区"
    }, {
      "label": "杞县",
      "value": "杞县"
    }, {
      "label": "通许县",
      "value": "通许县"
    }, {
      "label": "尉氏县",
      "value": "尉氏县"
    }, {
      "label": "兰考县",
      "value": "兰考县"
    }]
  }, {
    "label": "洛阳市",
    "value": "洛阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "老城区",
      "value": "老城区"
    }, {
      "label": "西工区",
      "value": "西工区"
    }, {
      "label": "瀍河回族区",
      "value": "瀍河回族区"
    }, {
      "label": "涧西区",
      "value": "涧西区"
    }, {
      "label": "吉利区",
      "value": "吉利区"
    }, {
      "label": "洛龙区",
      "value": "洛龙区"
    }, {
      "label": "孟津县",
      "value": "孟津县"
    }, {
      "label": "新安县",
      "value": "新安县"
    }, {
      "label": "栾川县",
      "value": "栾川县"
    }, {
      "label": "嵩县",
      "value": "嵩县"
    }, {
      "label": "汝阳县",
      "value": "汝阳县"
    }, {
      "label": "宜阳县",
      "value": "宜阳县"
    }, {
      "label": "洛宁县",
      "value": "洛宁县"
    }, {
      "label": "伊川县",
      "value": "伊川县"
    }, {
      "label": "偃师市",
      "value": "偃师市"
    }]
  }, {
    "label": "平顶山市",
    "value": "平顶山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新华区",
      "value": "新华区"
    }, {
      "label": "卫东区",
      "value": "卫东区"
    }, {
      "label": "石龙区",
      "value": "石龙区"
    }, {
      "label": "湛河区",
      "value": "湛河区"
    }, {
      "label": "宝丰县",
      "value": "宝丰县"
    }, {
      "label": "叶县",
      "value": "叶县"
    }, {
      "label": "鲁山县",
      "value": "鲁山县"
    }, {
      "label": "郏县",
      "value": "郏县"
    }, {
      "label": "舞钢市",
      "value": "舞钢市"
    }, {
      "label": "汝州市",
      "value": "汝州市"
    }]
  }, {
    "label": "安阳市",
    "value": "安阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "文峰区",
      "value": "文峰区"
    }, {
      "label": "北关区",
      "value": "北关区"
    }, {
      "label": "殷都区",
      "value": "殷都区"
    }, {
      "label": "龙安区",
      "value": "龙安区"
    }, {
      "label": "安阳县",
      "value": "安阳县"
    }, {
      "label": "汤阴县",
      "value": "汤阴县"
    }, {
      "label": "滑县",
      "value": "滑县"
    }, {
      "label": "内黄县",
      "value": "内黄县"
    }, {
      "label": "林州市",
      "value": "林州市"
    }]
  }, {
    "label": "鹤壁市",
    "value": "鹤壁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "鹤山区",
      "value": "鹤山区"
    }, {
      "label": "山城区",
      "value": "山城区"
    }, {
      "label": "淇滨区",
      "value": "淇滨区"
    }, {
      "label": "浚县",
      "value": "浚县"
    }, {
      "label": "淇县",
      "value": "淇县"
    }]
  }, {
    "label": "新乡市",
    "value": "新乡市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "红旗区",
      "value": "红旗区"
    }, {
      "label": "卫滨区",
      "value": "卫滨区"
    }, {
      "label": "凤泉区",
      "value": "凤泉区"
    }, {
      "label": "牧野区",
      "value": "牧野区"
    }, {
      "label": "新乡县",
      "value": "新乡县"
    }, {
      "label": "获嘉县",
      "value": "获嘉县"
    }, {
      "label": "原阳县",
      "value": "原阳县"
    }, {
      "label": "延津县",
      "value": "延津县"
    }, {
      "label": "封丘县",
      "value": "封丘县"
    }, {
      "label": "长垣县",
      "value": "长垣县"
    }, {
      "label": "卫辉市",
      "value": "卫辉市"
    }, {
      "label": "辉县市",
      "value": "辉县市"
    }]
  }, {
    "label": "焦作市",
    "value": "焦作市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "解放区",
      "value": "解放区"
    }, {
      "label": "中站区",
      "value": "中站区"
    }, {
      "label": "马村区",
      "value": "马村区"
    }, {
      "label": "山阳区",
      "value": "山阳区"
    }, {
      "label": "修武县",
      "value": "修武县"
    }, {
      "label": "博爱县",
      "value": "博爱县"
    }, {
      "label": "武陟县",
      "value": "武陟县"
    }, {
      "label": "温县",
      "value": "温县"
    }, {
      "label": "沁阳市",
      "value": "沁阳市"
    }, {
      "label": "孟州市",
      "value": "孟州市"
    }]
  }, {
    "label": "濮阳市",
    "value": "濮阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "华龙区",
      "value": "华龙区"
    }, {
      "label": "清丰县",
      "value": "清丰县"
    }, {
      "label": "南乐县",
      "value": "南乐县"
    }, {
      "label": "范县",
      "value": "范县"
    }, {
      "label": "台前县",
      "value": "台前县"
    }, {
      "label": "濮阳县",
      "value": "濮阳县"
    }]
  }, {
    "label": "许昌市",
    "value": "许昌市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "魏都区",
      "value": "魏都区"
    }, {
      "label": "许昌县",
      "value": "许昌县"
    }, {
      "label": "鄢陵县",
      "value": "鄢陵县"
    }, {
      "label": "襄城县",
      "value": "襄城县"
    }, {
      "label": "禹州市",
      "value": "禹州市"
    }, {
      "label": "长葛市",
      "value": "长葛市"
    }]
  }, {
    "label": "漯河市",
    "value": "漯河市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "源汇区",
      "value": "源汇区"
    }, {
      "label": "郾城区",
      "value": "郾城区"
    }, {
      "label": "召陵区",
      "value": "召陵区"
    }, {
      "label": "舞阳县",
      "value": "舞阳县"
    }, {
      "label": "临颍县",
      "value": "临颍县"
    }]
  }, {
    "label": "三门峡市",
    "value": "三门峡市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "湖滨区",
      "value": "湖滨区"
    }, {
      "label": "渑池县",
      "value": "渑池县"
    }, {
      "label": "陕县",
      "value": "陕县"
    }, {
      "label": "卢氏县",
      "value": "卢氏县"
    }, {
      "label": "义马市",
      "value": "义马市"
    }, {
      "label": "灵宝市",
      "value": "灵宝市"
    }]
  }, {
    "label": "南阳市",
    "value": "南阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "宛城区",
      "value": "宛城区"
    }, {
      "label": "卧龙区",
      "value": "卧龙区"
    }, {
      "label": "南召县",
      "value": "南召县"
    }, {
      "label": "方城县",
      "value": "方城县"
    }, {
      "label": "西峡县",
      "value": "西峡县"
    }, {
      "label": "镇平县",
      "value": "镇平县"
    }, {
      "label": "内乡县",
      "value": "内乡县"
    }, {
      "label": "淅川县",
      "value": "淅川县"
    }, {
      "label": "社旗县",
      "value": "社旗县"
    }, {
      "label": "唐河县",
      "value": "唐河县"
    }, {
      "label": "新野县",
      "value": "新野县"
    }, {
      "label": "桐柏县",
      "value": "桐柏县"
    }, {
      "label": "邓州市",
      "value": "邓州市"
    }]
  }, {
    "label": "商丘市",
    "value": "商丘市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "梁园区",
      "value": "梁园区"
    }, {
      "label": "睢阳区",
      "value": "睢阳区"
    }, {
      "label": "民权县",
      "value": "民权县"
    }, {
      "label": "睢县",
      "value": "睢县"
    }, {
      "label": "宁陵县",
      "value": "宁陵县"
    }, {
      "label": "柘城县",
      "value": "柘城县"
    }, {
      "label": "虞城县",
      "value": "虞城县"
    }, {
      "label": "夏邑县",
      "value": "夏邑县"
    }, {
      "label": "永城市",
      "value": "永城市"
    }]
  }, {
    "label": "信阳市",
    "value": "信阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "浉河区",
      "value": "浉河区"
    }, {
      "label": "平桥区",
      "value": "平桥区"
    }, {
      "label": "罗山县",
      "value": "罗山县"
    }, {
      "label": "光山县",
      "value": "光山县"
    }, {
      "label": "新县",
      "value": "新县"
    }, {
      "label": "商城县",
      "value": "商城县"
    }, {
      "label": "固始县",
      "value": "固始县"
    }, {
      "label": "潢川县",
      "value": "潢川县"
    }, {
      "label": "淮滨县",
      "value": "淮滨县"
    }, {
      "label": "息县",
      "value": "息县"
    }]
  }, {
    "label": "周口市",
    "value": "周口市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "川汇区",
      "value": "川汇区"
    }, {
      "label": "扶沟县",
      "value": "扶沟县"
    }, {
      "label": "西华县",
      "value": "西华县"
    }, {
      "label": "商水县",
      "value": "商水县"
    }, {
      "label": "沈丘县",
      "value": "沈丘县"
    }, {
      "label": "郸城县",
      "value": "郸城县"
    }, {
      "label": "淮阳县",
      "value": "淮阳县"
    }, {
      "label": "太康县",
      "value": "太康县"
    }, {
      "label": "鹿邑县",
      "value": "鹿邑县"
    }, {
      "label": "项城市",
      "value": "项城市"
    }]
  }, {
    "label": "驻马店市",
    "value": "驻马店市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "驿城区",
      "value": "驿城区"
    }, {
      "label": "西平县",
      "value": "西平县"
    }, {
      "label": "上蔡县",
      "value": "上蔡县"
    }, {
      "label": "平舆县",
      "value": "平舆县"
    }, {
      "label": "正阳县",
      "value": "正阳县"
    }, {
      "label": "确山县",
      "value": "确山县"
    }, {
      "label": "泌阳县",
      "value": "泌阳县"
    }, {
      "label": "汝南县",
      "value": "汝南县"
    }, {
      "label": "遂平县",
      "value": "遂平县"
    }, {
      "label": "新蔡县",
      "value": "新蔡县"
    }]
  }, {
    "label": "济源市",
    "value": "济源市"
  }]
}, {
  "label": "湖北省",
  "value": "湖北省",
  "children": [{
    "label": "武汉市",
    "value": "武汉市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "江岸区",
      "value": "江岸区"
    }, {
      "label": "江汉区",
      "value": "江汉区"
    }, {
      "label": "硚口区",
      "value": "硚口区"
    }, {
      "label": "汉阳区",
      "value": "汉阳区"
    }, {
      "label": "武昌区",
      "value": "武昌区"
    }, {
      "label": "青山区",
      "value": "青山区"
    }, {
      "label": "洪山区",
      "value": "洪山区"
    }, {
      "label": "东西湖区",
      "value": "东西湖区"
    }, {
      "label": "汉南区",
      "value": "汉南区"
    }, {
      "label": "蔡甸区",
      "value": "蔡甸区"
    }, {
      "label": "江夏区",
      "value": "江夏区"
    }, {
      "label": "黄陂区",
      "value": "黄陂区"
    }, {
      "label": "新洲区",
      "value": "新洲区"
    }]
  }, {
    "label": "黄石市",
    "value": "黄石市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "黄石港区",
      "value": "黄石港区"
    }, {
      "label": "西塞山区",
      "value": "西塞山区"
    }, {
      "label": "下陆区",
      "value": "下陆区"
    }, {
      "label": "铁山区",
      "value": "铁山区"
    }, {
      "label": "阳新县",
      "value": "阳新县"
    }, {
      "label": "大冶市",
      "value": "大冶市"
    }]
  }, {
    "label": "十堰市",
    "value": "十堰市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "茅箭区",
      "value": "茅箭区"
    }, {
      "label": "张湾区",
      "value": "张湾区"
    }, {
      "label": "郧阳区",
      "value": "郧阳区"
    }, {
      "label": "郧西县",
      "value": "郧西县"
    }, {
      "label": "竹山县",
      "value": "竹山县"
    }, {
      "label": "竹溪县",
      "value": "竹溪县"
    }, {
      "label": "房县",
      "value": "房县"
    }, {
      "label": "丹江口市",
      "value": "丹江口市"
    }]
  }, {
    "label": "宜昌市",
    "value": "宜昌市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "西陵区",
      "value": "西陵区"
    }, {
      "label": "伍家岗区",
      "value": "伍家岗区"
    }, {
      "label": "点军区",
      "value": "点军区"
    }, {
      "label": "猇亭区",
      "value": "猇亭区"
    }, {
      "label": "夷陵区",
      "value": "夷陵区"
    }, {
      "label": "远安县",
      "value": "远安县"
    }, {
      "label": "兴山县",
      "value": "兴山县"
    }, {
      "label": "秭归县",
      "value": "秭归县"
    }, {
      "label": "长阳土家族自治县",
      "value": "长阳土家族自治县"
    }, {
      "label": "五峰土家族自治县",
      "value": "五峰土家族自治县"
    }, {
      "label": "宜都市",
      "value": "宜都市"
    }, {
      "label": "当阳市",
      "value": "当阳市"
    }, {
      "label": "枝江市",
      "value": "枝江市"
    }]
  }, {
    "label": "襄阳市",
    "value": "襄阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "襄城区",
      "value": "襄城区"
    }, {
      "label": "樊城区",
      "value": "樊城区"
    }, {
      "label": "襄州区",
      "value": "襄州区"
    }, {
      "label": "南漳县",
      "value": "南漳县"
    }, {
      "label": "谷城县",
      "value": "谷城县"
    }, {
      "label": "保康县",
      "value": "保康县"
    }, {
      "label": "老河口市",
      "value": "老河口市"
    }, {
      "label": "枣阳市",
      "value": "枣阳市"
    }, {
      "label": "宜城市",
      "value": "宜城市"
    }]
  }, {
    "label": "鄂州市",
    "value": "鄂州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "梁子湖区",
      "value": "梁子湖区"
    }, {
      "label": "华容区",
      "value": "华容区"
    }, {
      "label": "鄂城区",
      "value": "鄂城区"
    }]
  }, {
    "label": "荆门市",
    "value": "荆门市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东宝区",
      "value": "东宝区"
    }, {
      "label": "掇刀区",
      "value": "掇刀区"
    }, {
      "label": "京山县",
      "value": "京山县"
    }, {
      "label": "沙洋县",
      "value": "沙洋县"
    }, {
      "label": "钟祥市",
      "value": "钟祥市"
    }]
  }, {
    "label": "孝感市",
    "value": "孝感市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "孝南区",
      "value": "孝南区"
    }, {
      "label": "孝昌县",
      "value": "孝昌县"
    }, {
      "label": "大悟县",
      "value": "大悟县"
    }, {
      "label": "云梦县",
      "value": "云梦县"
    }, {
      "label": "应城市",
      "value": "应城市"
    }, {
      "label": "安陆市",
      "value": "安陆市"
    }, {
      "label": "汉川市",
      "value": "汉川市"
    }]
  }, {
    "label": "荆州市",
    "value": "荆州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "沙市区",
      "value": "沙市区"
    }, {
      "label": "荆州区",
      "value": "荆州区"
    }, {
      "label": "公安县",
      "value": "公安县"
    }, {
      "label": "监利县",
      "value": "监利县"
    }, {
      "label": "江陵县",
      "value": "江陵县"
    }, {
      "label": "石首市",
      "value": "石首市"
    }, {
      "label": "洪湖市",
      "value": "洪湖市"
    }, {
      "label": "松滋市",
      "value": "松滋市"
    }]
  }, {
    "label": "黄冈市",
    "value": "黄冈市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "黄州区",
      "value": "黄州区"
    }, {
      "label": "团风县",
      "value": "团风县"
    }, {
      "label": "红安县",
      "value": "红安县"
    }, {
      "label": "罗田县",
      "value": "罗田县"
    }, {
      "label": "英山县",
      "value": "英山县"
    }, {
      "label": "浠水县",
      "value": "浠水县"
    }, {
      "label": "蕲春县",
      "value": "蕲春县"
    }, {
      "label": "黄梅县",
      "value": "黄梅县"
    }, {
      "label": "麻城市",
      "value": "麻城市"
    }, {
      "label": "武穴市",
      "value": "武穴市"
    }]
  }, {
    "label": "咸宁市",
    "value": "咸宁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "咸安区",
      "value": "咸安区"
    }, {
      "label": "嘉鱼县",
      "value": "嘉鱼县"
    }, {
      "label": "通城县",
      "value": "通城县"
    }, {
      "label": "崇阳县",
      "value": "崇阳县"
    }, {
      "label": "通山县",
      "value": "通山县"
    }, {
      "label": "赤壁市",
      "value": "赤壁市"
    }]
  }, {
    "label": "随州市",
    "value": "随州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "曾都区",
      "value": "曾都区"
    }, {
      "label": "随县",
      "value": "随县"
    }, {
      "label": "广水市",
      "value": "广水市"
    }]
  }, {
    "label": "恩施土家族苗族自治州",
    "value": "恩施土家族苗族自治州",
    "children": [{
      "label": "恩施市",
      "value": "恩施市"
    }, {
      "label": "利川市",
      "value": "利川市"
    }, {
      "label": "建始县",
      "value": "建始县"
    }, {
      "label": "巴东县",
      "value": "巴东县"
    }, {
      "label": "宣恩县",
      "value": "宣恩县"
    }, {
      "label": "咸丰县",
      "value": "咸丰县"
    }, {
      "label": "来凤县",
      "value": "来凤县"
    }, {
      "label": "鹤峰县",
      "value": "鹤峰县"
    }]
  }, {
    "label": "仙桃市",
    "value": "仙桃市"
  }, {
    "label": "潜江市",
    "value": "潜江市"
  }, {
    "label": "天门市",
    "value": "天门市"
  }, {
    "label": "神农架林区",
    "value": "神农架林区"
  }]
}, {
  "label": "湖南省",
  "value": "湖南省",
  "children": [{
    "label": "长沙市",
    "value": "长沙市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "芙蓉区",
      "value": "芙蓉区"
    }, {
      "label": "天心区",
      "value": "天心区"
    }, {
      "label": "岳麓区",
      "value": "岳麓区"
    }, {
      "label": "开福区",
      "value": "开福区"
    }, {
      "label": "雨花区",
      "value": "雨花区"
    }, {
      "label": "望城区",
      "value": "望城区"
    }, {
      "label": "长沙县",
      "value": "长沙县"
    }, {
      "label": "宁乡县",
      "value": "宁乡县"
    }, {
      "label": "浏阳市",
      "value": "浏阳市"
    }]
  }, {
    "label": "株洲市",
    "value": "株洲市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "荷塘区",
      "value": "荷塘区"
    }, {
      "label": "芦淞区",
      "value": "芦淞区"
    }, {
      "label": "石峰区",
      "value": "石峰区"
    }, {
      "label": "天元区",
      "value": "天元区"
    }, {
      "label": "株洲县",
      "value": "株洲县"
    }, {
      "label": "攸县",
      "value": "攸县"
    }, {
      "label": "茶陵县",
      "value": "茶陵县"
    }, {
      "label": "炎陵县",
      "value": "炎陵县"
    }, {
      "label": "醴陵市",
      "value": "醴陵市"
    }]
  }, {
    "label": "湘潭市",
    "value": "湘潭市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "雨湖区",
      "value": "雨湖区"
    }, {
      "label": "岳塘区",
      "value": "岳塘区"
    }, {
      "label": "湘潭县",
      "value": "湘潭县"
    }, {
      "label": "湘乡市",
      "value": "湘乡市"
    }, {
      "label": "韶山市",
      "value": "韶山市"
    }]
  }, {
    "label": "衡阳市",
    "value": "衡阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "珠晖区",
      "value": "珠晖区"
    }, {
      "label": "雁峰区",
      "value": "雁峰区"
    }, {
      "label": "石鼓区",
      "value": "石鼓区"
    }, {
      "label": "蒸湘区",
      "value": "蒸湘区"
    }, {
      "label": "南岳区",
      "value": "南岳区"
    }, {
      "label": "衡阳县",
      "value": "衡阳县"
    }, {
      "label": "衡南县",
      "value": "衡南县"
    }, {
      "label": "衡山县",
      "value": "衡山县"
    }, {
      "label": "衡东县",
      "value": "衡东县"
    }, {
      "label": "祁东县",
      "value": "祁东县"
    }, {
      "label": "耒阳市",
      "value": "耒阳市"
    }, {
      "label": "常宁市",
      "value": "常宁市"
    }]
  }, {
    "label": "邵阳市",
    "value": "邵阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "双清区",
      "value": "双清区"
    }, {
      "label": "大祥区",
      "value": "大祥区"
    }, {
      "label": "北塔区",
      "value": "北塔区"
    }, {
      "label": "邵东县",
      "value": "邵东县"
    }, {
      "label": "新邵县",
      "value": "新邵县"
    }, {
      "label": "邵阳县",
      "value": "邵阳县"
    }, {
      "label": "隆回县",
      "value": "隆回县"
    }, {
      "label": "洞口县",
      "value": "洞口县"
    }, {
      "label": "绥宁县",
      "value": "绥宁县"
    }, {
      "label": "新宁县",
      "value": "新宁县"
    }, {
      "label": "城步苗族自治县",
      "value": "城步苗族自治县"
    }, {
      "label": "武冈市",
      "value": "武冈市"
    }]
  }, {
    "label": "岳阳市",
    "value": "岳阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "岳阳楼区",
      "value": "岳阳楼区"
    }, {
      "label": "云溪区",
      "value": "云溪区"
    }, {
      "label": "君山区",
      "value": "君山区"
    }, {
      "label": "岳阳县",
      "value": "岳阳县"
    }, {
      "label": "华容县",
      "value": "华容县"
    }, {
      "label": "湘阴县",
      "value": "湘阴县"
    }, {
      "label": "平江县",
      "value": "平江县"
    }, {
      "label": "汨罗市",
      "value": "汨罗市"
    }, {
      "label": "临湘市",
      "value": "临湘市"
    }]
  }, {
    "label": "常德市",
    "value": "常德市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "武陵区",
      "value": "武陵区"
    }, {
      "label": "鼎城区",
      "value": "鼎城区"
    }, {
      "label": "安乡县",
      "value": "安乡县"
    }, {
      "label": "汉寿县",
      "value": "汉寿县"
    }, {
      "label": "澧县",
      "value": "澧县"
    }, {
      "label": "临澧县",
      "value": "临澧县"
    }, {
      "label": "桃源县",
      "value": "桃源县"
    }, {
      "label": "石门县",
      "value": "石门县"
    }, {
      "label": "津市市",
      "value": "津市市"
    }]
  }, {
    "label": "张家界市",
    "value": "张家界市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "永定区",
      "value": "永定区"
    }, {
      "label": "武陵源区",
      "value": "武陵源区"
    }, {
      "label": "慈利县",
      "value": "慈利县"
    }, {
      "label": "桑植县",
      "value": "桑植县"
    }]
  }, {
    "label": "益阳市",
    "value": "益阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "资阳区",
      "value": "资阳区"
    }, {
      "label": "赫山区",
      "value": "赫山区"
    }, {
      "label": "南县",
      "value": "南县"
    }, {
      "label": "桃江县",
      "value": "桃江县"
    }, {
      "label": "安化县",
      "value": "安化县"
    }, {
      "label": "沅江市",
      "value": "沅江市"
    }]
  }, {
    "label": "郴州市",
    "value": "郴州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "北湖区",
      "value": "北湖区"
    }, {
      "label": "苏仙区",
      "value": "苏仙区"
    }, {
      "label": "桂阳县",
      "value": "桂阳县"
    }, {
      "label": "宜章县",
      "value": "宜章县"
    }, {
      "label": "永兴县",
      "value": "永兴县"
    }, {
      "label": "嘉禾县",
      "value": "嘉禾县"
    }, {
      "label": "临武县",
      "value": "临武县"
    }, {
      "label": "汝城县",
      "value": "汝城县"
    }, {
      "label": "桂东县",
      "value": "桂东县"
    }, {
      "label": "安仁县",
      "value": "安仁县"
    }, {
      "label": "资兴市",
      "value": "资兴市"
    }]
  }, {
    "label": "永州市",
    "value": "永州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "零陵区",
      "value": "零陵区"
    }, {
      "label": "冷水滩区",
      "value": "冷水滩区"
    }, {
      "label": "祁阳县",
      "value": "祁阳县"
    }, {
      "label": "东安县",
      "value": "东安县"
    }, {
      "label": "双牌县",
      "value": "双牌县"
    }, {
      "label": "道县",
      "value": "道县"
    }, {
      "label": "江永县",
      "value": "江永县"
    }, {
      "label": "宁远县",
      "value": "宁远县"
    }, {
      "label": "蓝山县",
      "value": "蓝山县"
    }, {
      "label": "新田县",
      "value": "新田县"
    }, {
      "label": "江华瑶族自治县",
      "value": "江华瑶族自治县"
    }]
  }, {
    "label": "怀化市",
    "value": "怀化市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "鹤城区",
      "value": "鹤城区"
    }, {
      "label": "中方县",
      "value": "中方县"
    }, {
      "label": "沅陵县",
      "value": "沅陵县"
    }, {
      "label": "辰溪县",
      "value": "辰溪县"
    }, {
      "label": "溆浦县",
      "value": "溆浦县"
    }, {
      "label": "会同县",
      "value": "会同县"
    }, {
      "label": "麻阳苗族自治县",
      "value": "麻阳苗族自治县"
    }, {
      "label": "新晃侗族自治县",
      "value": "新晃侗族自治县"
    }, {
      "label": "芷江侗族自治县",
      "value": "芷江侗族自治县"
    }, {
      "label": "靖州苗族侗族自治县",
      "value": "靖州苗族侗族自治县"
    }, {
      "label": "通道侗族自治县",
      "value": "通道侗族自治县"
    }, {
      "label": "洪江市",
      "value": "洪江市"
    }]
  }, {
    "label": "娄底市",
    "value": "娄底市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "娄星区",
      "value": "娄星区"
    }, {
      "label": "双峰县",
      "value": "双峰县"
    }, {
      "label": "新化县",
      "value": "新化县"
    }, {
      "label": "冷水江市",
      "value": "冷水江市"
    }, {
      "label": "涟源市",
      "value": "涟源市"
    }]
  }, {
    "label": "湘西土家族苗族自治州",
    "value": "湘西土家族苗族自治州",
    "children": [{
      "label": "吉首市",
      "value": "吉首市"
    }, {
      "label": "泸溪县",
      "value": "泸溪县"
    }, {
      "label": "凤凰县",
      "value": "凤凰县"
    }, {
      "label": "花垣县",
      "value": "花垣县"
    }, {
      "label": "保靖县",
      "value": "保靖县"
    }, {
      "label": "古丈县",
      "value": "古丈县"
    }, {
      "label": "永顺县",
      "value": "永顺县"
    }, {
      "label": "龙山县",
      "value": "龙山县"
    }]
  }]
}, {
  "label": "广东省",
  "value": "广东省",
  "children": [{
    "label": "广州市",
    "value": "广州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "荔湾区",
      "value": "荔湾区"
    }, {
      "label": "越秀区",
      "value": "越秀区"
    }, {
      "label": "海珠区",
      "value": "海珠区"
    }, {
      "label": "天河区",
      "value": "天河区"
    }, {
      "label": "白云区",
      "value": "白云区"
    }, {
      "label": "黄埔区",
      "value": "黄埔区"
    }, {
      "label": "番禺区",
      "value": "番禺区"
    }, {
      "label": "花都区",
      "value": "花都区"
    }, {
      "label": "南沙区",
      "value": "南沙区"
    }, {
      "label": "从化区",
      "value": "从化区"
    }, {
      "label": "增城区",
      "value": "增城区"
    }]
  }, {
    "label": "韶关市",
    "value": "韶关市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "武江区",
      "value": "武江区"
    }, {
      "label": "浈江区",
      "value": "浈江区"
    }, {
      "label": "曲江区",
      "value": "曲江区"
    }, {
      "label": "始兴县",
      "value": "始兴县"
    }, {
      "label": "仁化县",
      "value": "仁化县"
    }, {
      "label": "翁源县",
      "value": "翁源县"
    }, {
      "label": "乳源瑶族自治县",
      "value": "乳源瑶族自治县"
    }, {
      "label": "新丰县",
      "value": "新丰县"
    }, {
      "label": "乐昌市",
      "value": "乐昌市"
    }, {
      "label": "南雄市",
      "value": "南雄市"
    }]
  }, {
    "label": "深圳市",
    "value": "深圳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "罗湖区",
      "value": "罗湖区"
    }, {
      "label": "福田区",
      "value": "福田区"
    }, {
      "label": "南山区",
      "value": "南山区"
    }, {
      "label": "宝安区",
      "value": "宝安区"
    }, {
      "label": "龙岗区",
      "value": "龙岗区"
    }, {
      "label": "盐田区",
      "value": "盐田区"
    }]
  }, {
    "label": "珠海市",
    "value": "珠海市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "香洲区",
      "value": "香洲区"
    }, {
      "label": "斗门区",
      "value": "斗门区"
    }, {
      "label": "金湾区",
      "value": "金湾区"
    }]
  }, {
    "label": "汕头市",
    "value": "汕头市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "龙湖区",
      "value": "龙湖区"
    }, {
      "label": "金平区",
      "value": "金平区"
    }, {
      "label": "濠江区",
      "value": "濠江区"
    }, {
      "label": "潮阳区",
      "value": "潮阳区"
    }, {
      "label": "潮南区",
      "value": "潮南区"
    }, {
      "label": "澄海区",
      "value": "澄海区"
    }, {
      "label": "南澳县",
      "value": "南澳县"
    }]
  }, {
    "label": "佛山市",
    "value": "佛山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "禅城区",
      "value": "禅城区"
    }, {
      "label": "南海区",
      "value": "南海区"
    }, {
      "label": "顺德区",
      "value": "顺德区"
    }, {
      "label": "三水区",
      "value": "三水区"
    }, {
      "label": "高明区",
      "value": "高明区"
    }]
  }, {
    "label": "江门市",
    "value": "江门市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "蓬江区",
      "value": "蓬江区"
    }, {
      "label": "江海区",
      "value": "江海区"
    }, {
      "label": "新会区",
      "value": "新会区"
    }, {
      "label": "台山市",
      "value": "台山市"
    }, {
      "label": "开平市",
      "value": "开平市"
    }, {
      "label": "鹤山市",
      "value": "鹤山市"
    }, {
      "label": "恩平市",
      "value": "恩平市"
    }]
  }, {
    "label": "湛江市",
    "value": "湛江市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "赤坎区",
      "value": "赤坎区"
    }, {
      "label": "霞山区",
      "value": "霞山区"
    }, {
      "label": "坡头区",
      "value": "坡头区"
    }, {
      "label": "麻章区",
      "value": "麻章区"
    }, {
      "label": "遂溪县",
      "value": "遂溪县"
    }, {
      "label": "徐闻县",
      "value": "徐闻县"
    }, {
      "label": "廉江市",
      "value": "廉江市"
    }, {
      "label": "雷州市",
      "value": "雷州市"
    }, {
      "label": "吴川市",
      "value": "吴川市"
    }]
  }, {
    "label": "茂名市",
    "value": "茂名市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "茂南区",
      "value": "茂南区"
    }, {
      "label": "电白区",
      "value": "电白区"
    }, {
      "label": "高州市",
      "value": "高州市"
    }, {
      "label": "化州市",
      "value": "化州市"
    }, {
      "label": "信宜市",
      "value": "信宜市"
    }]
  }, {
    "label": "肇庆市",
    "value": "肇庆市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "端州区",
      "value": "端州区"
    }, {
      "label": "鼎湖区",
      "value": "鼎湖区"
    }, {
      "label": "广宁县",
      "value": "广宁县"
    }, {
      "label": "怀集县",
      "value": "怀集县"
    }, {
      "label": "封开县",
      "value": "封开县"
    }, {
      "label": "德庆县",
      "value": "德庆县"
    }, {
      "label": "高要市",
      "value": "高要市"
    }, {
      "label": "四会市",
      "value": "四会市"
    }]
  }, {
    "label": "惠州市",
    "value": "惠州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "惠城区",
      "value": "惠城区"
    }, {
      "label": "惠阳区",
      "value": "惠阳区"
    }, {
      "label": "博罗县",
      "value": "博罗县"
    }, {
      "label": "惠东县",
      "value": "惠东县"
    }, {
      "label": "龙门县",
      "value": "龙门县"
    }]
  }, {
    "label": "梅州市",
    "value": "梅州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "梅江区",
      "value": "梅江区"
    }, {
      "label": "梅县区",
      "value": "梅县区"
    }, {
      "label": "大埔县",
      "value": "大埔县"
    }, {
      "label": "丰顺县",
      "value": "丰顺县"
    }, {
      "label": "五华县",
      "value": "五华县"
    }, {
      "label": "平远县",
      "value": "平远县"
    }, {
      "label": "蕉岭县",
      "value": "蕉岭县"
    }, {
      "label": "兴宁市",
      "value": "兴宁市"
    }]
  }, {
    "label": "汕尾市",
    "value": "汕尾市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城区",
      "value": "城区"
    }, {
      "label": "海丰县",
      "value": "海丰县"
    }, {
      "label": "陆河县",
      "value": "陆河县"
    }, {
      "label": "陆丰市",
      "value": "陆丰市"
    }]
  }, {
    "label": "河源市",
    "value": "河源市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "源城区",
      "value": "源城区"
    }, {
      "label": "紫金县",
      "value": "紫金县"
    }, {
      "label": "龙川县",
      "value": "龙川县"
    }, {
      "label": "连平县",
      "value": "连平县"
    }, {
      "label": "和平县",
      "value": "和平县"
    }, {
      "label": "东源县",
      "value": "东源县"
    }]
  }, {
    "label": "阳江市",
    "value": "阳江市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "江城区",
      "value": "江城区"
    }, {
      "label": "阳东区",
      "value": "阳东区"
    }, {
      "label": "阳西县",
      "value": "阳西县"
    }, {
      "label": "阳春市",
      "value": "阳春市"
    }]
  }, {
    "label": "清远市",
    "value": "清远市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "清城区",
      "value": "清城区"
    }, {
      "label": "清新区",
      "value": "清新区"
    }, {
      "label": "佛冈县",
      "value": "佛冈县"
    }, {
      "label": "阳山县",
      "value": "阳山县"
    }, {
      "label": "连山壮族瑶族自治县",
      "value": "连山壮族瑶族自治县"
    }, {
      "label": "连南瑶族自治县",
      "value": "连南瑶族自治县"
    }, {
      "label": "英德市",
      "value": "英德市"
    }, {
      "label": "连州市",
      "value": "连州市"
    }]
  }, {
    "label": "东莞市",
    "value": "东莞市",
    "children": []
  }, {
    "label": "中山市",
    "value": "中山市",
    "children": []
  }, {
    "label": "潮州市",
    "value": "潮州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "湘桥区",
      "value": "湘桥区"
    }, {
      "label": "潮安区",
      "value": "潮安区"
    }, {
      "label": "饶平县",
      "value": "饶平县"
    }]
  }, {
    "label": "揭阳市",
    "value": "揭阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "榕城区",
      "value": "榕城区"
    }, {
      "label": "揭东区",
      "value": "揭东区"
    }, {
      "label": "揭西县",
      "value": "揭西县"
    }, {
      "label": "惠来县",
      "value": "惠来县"
    }, {
      "label": "普宁市",
      "value": "普宁市"
    }]
  }, {
    "label": "云浮市",
    "value": "云浮市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "云城区",
      "value": "云城区"
    }, {
      "label": "云安区",
      "value": "云安区"
    }, {
      "label": "新兴县",
      "value": "新兴县"
    }, {
      "label": "郁南县",
      "value": "郁南县"
    }, {
      "label": "罗定市",
      "value": "罗定市"
    }]
  }]
}, {
  "label": "广西壮族自治区",
  "value": "广西壮族自治区",
  "children": [{
    "label": "南宁市",
    "value": "南宁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "兴宁区",
      "value": "兴宁区"
    }, {
      "label": "青秀区",
      "value": "青秀区"
    }, {
      "label": "江南区",
      "value": "江南区"
    }, {
      "label": "西乡塘区",
      "value": "西乡塘区"
    }, {
      "label": "良庆区",
      "value": "良庆区"
    }, {
      "label": "邕宁区",
      "value": "邕宁区"
    }, {
      "label": "武鸣县",
      "value": "武鸣县"
    }, {
      "label": "隆安县",
      "value": "隆安县"
    }, {
      "label": "马山县",
      "value": "马山县"
    }, {
      "label": "上林县",
      "value": "上林县"
    }, {
      "label": "宾阳县",
      "value": "宾阳县"
    }, {
      "label": "横县",
      "value": "横县"
    }]
  }, {
    "label": "柳州市",
    "value": "柳州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城中区",
      "value": "城中区"
    }, {
      "label": "鱼峰区",
      "value": "鱼峰区"
    }, {
      "label": "柳南区",
      "value": "柳南区"
    }, {
      "label": "柳北区",
      "value": "柳北区"
    }, {
      "label": "柳江县",
      "value": "柳江县"
    }, {
      "label": "柳城县",
      "value": "柳城县"
    }, {
      "label": "鹿寨县",
      "value": "鹿寨县"
    }, {
      "label": "融安县",
      "value": "融安县"
    }, {
      "label": "融水苗族自治县",
      "value": "融水苗族自治县"
    }, {
      "label": "三江侗族自治县",
      "value": "三江侗族自治县"
    }]
  }, {
    "label": "桂林市",
    "value": "桂林市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "秀峰区",
      "value": "秀峰区"
    }, {
      "label": "叠彩区",
      "value": "叠彩区"
    }, {
      "label": "象山区",
      "value": "象山区"
    }, {
      "label": "七星区",
      "value": "七星区"
    }, {
      "label": "雁山区",
      "value": "雁山区"
    }, {
      "label": "临桂区",
      "value": "临桂区"
    }, {
      "label": "阳朔县",
      "value": "阳朔县"
    }, {
      "label": "灵川县",
      "value": "灵川县"
    }, {
      "label": "全州县",
      "value": "全州县"
    }, {
      "label": "兴安县",
      "value": "兴安县"
    }, {
      "label": "永福县",
      "value": "永福县"
    }, {
      "label": "灌阳县",
      "value": "灌阳县"
    }, {
      "label": "龙胜各族自治县",
      "value": "龙胜各族自治县"
    }, {
      "label": "资源县",
      "value": "资源县"
    }, {
      "label": "平乐县",
      "value": "平乐县"
    }, {
      "label": "荔浦县",
      "value": "荔浦县"
    }, {
      "label": "恭城瑶族自治县",
      "value": "恭城瑶族自治县"
    }]
  }, {
    "label": "梧州市",
    "value": "梧州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "万秀区",
      "value": "万秀区"
    }, {
      "label": "长洲区",
      "value": "长洲区"
    }, {
      "label": "龙圩区",
      "value": "龙圩区"
    }, {
      "label": "苍梧县",
      "value": "苍梧县"
    }, {
      "label": "藤县",
      "value": "藤县"
    }, {
      "label": "蒙山县",
      "value": "蒙山县"
    }, {
      "label": "岑溪市",
      "value": "岑溪市"
    }]
  }, {
    "label": "北海市",
    "value": "北海市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海城区",
      "value": "海城区"
    }, {
      "label": "银海区",
      "value": "银海区"
    }, {
      "label": "铁山港区",
      "value": "铁山港区"
    }, {
      "label": "合浦县",
      "value": "合浦县"
    }]
  }, {
    "label": "防城港市",
    "value": "防城港市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "港口区",
      "value": "港口区"
    }, {
      "label": "防城区",
      "value": "防城区"
    }, {
      "label": "上思县",
      "value": "上思县"
    }, {
      "label": "东兴市",
      "value": "东兴市"
    }]
  }, {
    "label": "钦州市",
    "value": "钦州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "钦南区",
      "value": "钦南区"
    }, {
      "label": "钦北区",
      "value": "钦北区"
    }, {
      "label": "灵山县",
      "value": "灵山县"
    }, {
      "label": "浦北县",
      "value": "浦北县"
    }]
  }, {
    "label": "贵港市",
    "value": "贵港市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "港北区",
      "value": "港北区"
    }, {
      "label": "港南区",
      "value": "港南区"
    }, {
      "label": "覃塘区",
      "value": "覃塘区"
    }, {
      "label": "平南县",
      "value": "平南县"
    }, {
      "label": "桂平市",
      "value": "桂平市"
    }]
  }, {
    "label": "玉林市",
    "value": "玉林市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "玉州区",
      "value": "玉州区"
    }, {
      "label": "福绵区",
      "value": "福绵区"
    }, {
      "label": "容县",
      "value": "容县"
    }, {
      "label": "陆川县",
      "value": "陆川县"
    }, {
      "label": "博白县",
      "value": "博白县"
    }, {
      "label": "兴业县",
      "value": "兴业县"
    }, {
      "label": "北流市",
      "value": "北流市"
    }]
  }, {
    "label": "百色市",
    "value": "百色市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "右江区",
      "value": "右江区"
    }, {
      "label": "田阳县",
      "value": "田阳县"
    }, {
      "label": "田东县",
      "value": "田东县"
    }, {
      "label": "平果县",
      "value": "平果县"
    }, {
      "label": "德保县",
      "value": "德保县"
    }, {
      "label": "靖西县",
      "value": "靖西县"
    }, {
      "label": "那坡县",
      "value": "那坡县"
    }, {
      "label": "凌云县",
      "value": "凌云县"
    }, {
      "label": "乐业县",
      "value": "乐业县"
    }, {
      "label": "田林县",
      "value": "田林县"
    }, {
      "label": "西林县",
      "value": "西林县"
    }, {
      "label": "隆林各族自治县",
      "value": "隆林各族自治县"
    }]
  }, {
    "label": "贺州市",
    "value": "贺州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "八步区",
      "value": "八步区"
    }, {
      "label": "平桂管理区",
      "value": "平桂管理区"
    }, {
      "label": "昭平县",
      "value": "昭平县"
    }, {
      "label": "钟山县",
      "value": "钟山县"
    }, {
      "label": "富川瑶族自治县",
      "value": "富川瑶族自治县"
    }]
  }, {
    "label": "河池市",
    "value": "河池市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "金城江区",
      "value": "金城江区"
    }, {
      "label": "南丹县",
      "value": "南丹县"
    }, {
      "label": "天峨县",
      "value": "天峨县"
    }, {
      "label": "凤山县",
      "value": "凤山县"
    }, {
      "label": "东兰县",
      "value": "东兰县"
    }, {
      "label": "罗城仫佬族自治县",
      "value": "罗城仫佬族自治县"
    }, {
      "label": "环江毛南族自治县",
      "value": "环江毛南族自治县"
    }, {
      "label": "巴马瑶族自治县",
      "value": "巴马瑶族自治县"
    }, {
      "label": "都安瑶族自治县",
      "value": "都安瑶族自治县"
    }, {
      "label": "大化瑶族自治县",
      "value": "大化瑶族自治县"
    }, {
      "label": "宜州市",
      "value": "宜州市"
    }]
  }, {
    "label": "来宾市",
    "value": "来宾市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "兴宾区",
      "value": "兴宾区"
    }, {
      "label": "忻城县",
      "value": "忻城县"
    }, {
      "label": "象州县",
      "value": "象州县"
    }, {
      "label": "武宣县",
      "value": "武宣县"
    }, {
      "label": "金秀瑶族自治县",
      "value": "金秀瑶族自治县"
    }, {
      "label": "合山市",
      "value": "合山市"
    }]
  }, {
    "label": "崇左市",
    "value": "崇左市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "江州区",
      "value": "江州区"
    }, {
      "label": "扶绥县",
      "value": "扶绥县"
    }, {
      "label": "宁明县",
      "value": "宁明县"
    }, {
      "label": "龙州县",
      "value": "龙州县"
    }, {
      "label": "大新县",
      "value": "大新县"
    }, {
      "label": "天等县",
      "value": "天等县"
    }, {
      "label": "凭祥市",
      "value": "凭祥市"
    }]
  }]
}, {
  "label": "海南省",
  "value": "海南省",
  "children": [{
    "label": "海口市",
    "value": "海口市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "秀英区",
      "value": "秀英区"
    }, {
      "label": "龙华区",
      "value": "龙华区"
    }, {
      "label": "琼山区",
      "value": "琼山区"
    }, {
      "label": "美兰区",
      "value": "美兰区"
    }]
  }, {
    "label": "三亚市",
    "value": "三亚市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "海棠区",
      "value": "海棠区"
    }, {
      "label": "吉阳区",
      "value": "吉阳区"
    }, {
      "label": "天涯区",
      "value": "天涯区"
    }, {
      "label": "崖州区",
      "value": "崖州区"
    }]
  }, {
    "label": "三沙市",
    "value": "三沙市",
    "children": [{
      "label": "西沙群岛",
      "value": "西沙群岛"
    }, {
      "label": "南沙群岛",
      "value": "南沙群岛"
    }, {
      "label": "中沙群岛的岛礁及其海域",
      "value": "中沙群岛的岛礁及其海域"
    }]
  }, {
    "label": "五指山市",
    "value": "五指山市"
  }, {
    "label": "琼海市",
    "value": "琼海市"
  }, {
    "label": "儋州市",
    "value": "儋州市"
  }, {
    "label": "文昌市",
    "value": "文昌市"
  }, {
    "label": "万宁市",
    "value": "万宁市"
  }, {
    "label": "东方市",
    "value": "东方市"
  }, {
    "label": "定安县",
    "value": "定安县"
  }, {
    "label": "屯昌县",
    "value": "屯昌县"
  }, {
    "label": "澄迈县",
    "value": "澄迈县"
  }, {
    "label": "临高县",
    "value": "临高县"
  }, {
    "label": "白沙黎族自治县",
    "value": "白沙黎族自治县"
  }, {
    "label": "昌江黎族自治县",
    "value": "昌江黎族自治县"
  }, {
    "label": "乐东黎族自治县",
    "value": "乐东黎族自治县"
  }, {
    "label": "陵水黎族自治县",
    "value": "陵水黎族自治县"
  }, {
    "label": "保亭黎族苗族自治县",
    "value": "保亭黎族苗族自治县"
  }, {
    "label": "琼中黎族苗族自治县",
    "value": "琼中黎族苗族自治县"
  }]
}, {
  "label": "重庆市",
  "value": "重庆市",
  "children": [{
    "label": "重庆市",
    "value": "重庆市",
    "children": [{
      "label": "万州区",
      "value": "万州区"
    }, {
      "label": "涪陵区",
      "value": "涪陵区"
    }, {
      "label": "渝中区",
      "value": "渝中区"
    }, {
      "label": "大渡口区",
      "value": "大渡口区"
    }, {
      "label": "江北区",
      "value": "江北区"
    }, {
      "label": "沙坪坝区",
      "value": "沙坪坝区"
    }, {
      "label": "九龙坡区",
      "value": "九龙坡区"
    }, {
      "label": "南岸区",
      "value": "南岸区"
    }, {
      "label": "北碚区",
      "value": "北碚区"
    }, {
      "label": "綦江区",
      "value": "綦江区"
    }, {
      "label": "大足区",
      "value": "大足区"
    }, {
      "label": "渝北区",
      "value": "渝北区"
    }, {
      "label": "巴南区",
      "value": "巴南区"
    }, {
      "label": "黔江区",
      "value": "黔江区"
    }, {
      "label": "长寿区",
      "value": "长寿区"
    }, {
      "label": "江津区",
      "value": "江津区"
    }, {
      "label": "合川区",
      "value": "合川区"
    }, {
      "label": "永川区",
      "value": "永川区"
    }, {
      "label": "南川区",
      "value": "南川区"
    }, {
      "label": "璧山区",
      "value": "璧山区"
    }, {
      "label": "铜梁区",
      "value": "铜梁区"
    }, {
      "label": "潼南县",
      "value": "潼南县"
    }, {
      "label": "荣昌县",
      "value": "荣昌县"
    }, {
      "label": "梁平县",
      "value": "梁平县"
    }, {
      "label": "城口县",
      "value": "城口县"
    }, {
      "label": "丰都县",
      "value": "丰都县"
    }, {
      "label": "垫江县",
      "value": "垫江县"
    }, {
      "label": "武隆县",
      "value": "武隆县"
    }, {
      "label": "忠县",
      "value": "忠县"
    }, {
      "label": "开县",
      "value": "开县"
    }, {
      "label": "云阳县",
      "value": "云阳县"
    }, {
      "label": "奉节县",
      "value": "奉节县"
    }, {
      "label": "巫山县",
      "value": "巫山县"
    }, {
      "label": "巫溪县",
      "value": "巫溪县"
    }, {
      "label": "石柱土家族自治县",
      "value": "石柱土家族自治县"
    }, {
      "label": "秀山土家族苗族自治县",
      "value": "秀山土家族苗族自治县"
    }, {
      "label": "酉阳土家族苗族自治县",
      "value": "酉阳土家族苗族自治县"
    }, {
      "label": "彭水苗族土家族自治县",
      "value": "彭水苗族土家族自治县"
    }]
  }]
}, {
  "label": "四川省",
  "value": "四川省",
  "children": [{
    "label": "成都市",
    "value": "成都市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "锦江区",
      "value": "锦江区"
    }, {
      "label": "青羊区",
      "value": "青羊区"
    }, {
      "label": "金牛区",
      "value": "金牛区"
    }, {
      "label": "武侯区",
      "value": "武侯区"
    }, {
      "label": "成华区",
      "value": "成华区"
    }, {
      "label": "龙泉驿区",
      "value": "龙泉驿区"
    }, {
      "label": "青白江区",
      "value": "青白江区"
    }, {
      "label": "新都区",
      "value": "新都区"
    }, {
      "label": "温江区",
      "value": "温江区"
    }, {
      "label": "金堂县",
      "value": "金堂县"
    }, {
      "label": "双流县",
      "value": "双流县"
    }, {
      "label": "郫县",
      "value": "郫县"
    }, {
      "label": "大邑县",
      "value": "大邑县"
    }, {
      "label": "蒲江县",
      "value": "蒲江县"
    }, {
      "label": "新津县",
      "value": "新津县"
    }, {
      "label": "都江堰市",
      "value": "都江堰市"
    }, {
      "label": "彭州市",
      "value": "彭州市"
    }, {
      "label": "邛崃市",
      "value": "邛崃市"
    }, {
      "label": "崇州市",
      "value": "崇州市"
    }]
  }, {
    "label": "自贡市",
    "value": "自贡市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "自流井区",
      "value": "自流井区"
    }, {
      "label": "贡井区",
      "value": "贡井区"
    }, {
      "label": "大安区",
      "value": "大安区"
    }, {
      "label": "沿滩区",
      "value": "沿滩区"
    }, {
      "label": "荣县",
      "value": "荣县"
    }, {
      "label": "富顺县",
      "value": "富顺县"
    }]
  }, {
    "label": "攀枝花市",
    "value": "攀枝花市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东区",
      "value": "东区"
    }, {
      "label": "西区",
      "value": "西区"
    }, {
      "label": "仁和区",
      "value": "仁和区"
    }, {
      "label": "米易县",
      "value": "米易县"
    }, {
      "label": "盐边县",
      "value": "盐边县"
    }]
  }, {
    "label": "泸州市",
    "value": "泸州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "江阳区",
      "value": "江阳区"
    }, {
      "label": "纳溪区",
      "value": "纳溪区"
    }, {
      "label": "龙马潭区",
      "value": "龙马潭区"
    }, {
      "label": "泸县",
      "value": "泸县"
    }, {
      "label": "合江县",
      "value": "合江县"
    }, {
      "label": "叙永县",
      "value": "叙永县"
    }, {
      "label": "古蔺县",
      "value": "古蔺县"
    }]
  }, {
    "label": "德阳市",
    "value": "德阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "旌阳区",
      "value": "旌阳区"
    }, {
      "label": "中江县",
      "value": "中江县"
    }, {
      "label": "罗江县",
      "value": "罗江县"
    }, {
      "label": "广汉市",
      "value": "广汉市"
    }, {
      "label": "什邡市",
      "value": "什邡市"
    }, {
      "label": "绵竹市",
      "value": "绵竹市"
    }]
  }, {
    "label": "绵阳市",
    "value": "绵阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "涪城区",
      "value": "涪城区"
    }, {
      "label": "游仙区",
      "value": "游仙区"
    }, {
      "label": "三台县",
      "value": "三台县"
    }, {
      "label": "盐亭县",
      "value": "盐亭县"
    }, {
      "label": "安县",
      "value": "安县"
    }, {
      "label": "梓潼县",
      "value": "梓潼县"
    }, {
      "label": "北川羌族自治县",
      "value": "北川羌族自治县"
    }, {
      "label": "平武县",
      "value": "平武县"
    }, {
      "label": "江油市",
      "value": "江油市"
    }]
  }, {
    "label": "广元市",
    "value": "广元市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "利州区",
      "value": "利州区"
    }, {
      "label": "昭化区",
      "value": "昭化区"
    }, {
      "label": "朝天区",
      "value": "朝天区"
    }, {
      "label": "旺苍县",
      "value": "旺苍县"
    }, {
      "label": "青川县",
      "value": "青川县"
    }, {
      "label": "剑阁县",
      "value": "剑阁县"
    }, {
      "label": "苍溪县",
      "value": "苍溪县"
    }]
  }, {
    "label": "遂宁市",
    "value": "遂宁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "船山区",
      "value": "船山区"
    }, {
      "label": "安居区",
      "value": "安居区"
    }, {
      "label": "蓬溪县",
      "value": "蓬溪县"
    }, {
      "label": "射洪县",
      "value": "射洪县"
    }, {
      "label": "大英县",
      "value": "大英县"
    }]
  }, {
    "label": "内江市",
    "value": "内江市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "市中区",
      "value": "市中区"
    }, {
      "label": "东兴区",
      "value": "东兴区"
    }, {
      "label": "威远县",
      "value": "威远县"
    }, {
      "label": "资中县",
      "value": "资中县"
    }, {
      "label": "隆昌县",
      "value": "隆昌县"
    }]
  }, {
    "label": "乐山市",
    "value": "乐山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "市中区",
      "value": "市中区"
    }, {
      "label": "沙湾区",
      "value": "沙湾区"
    }, {
      "label": "五通桥区",
      "value": "五通桥区"
    }, {
      "label": "金口河区",
      "value": "金口河区"
    }, {
      "label": "犍为县",
      "value": "犍为县"
    }, {
      "label": "井研县",
      "value": "井研县"
    }, {
      "label": "夹江县",
      "value": "夹江县"
    }, {
      "label": "沐川县",
      "value": "沐川县"
    }, {
      "label": "峨边彝族自治县",
      "value": "峨边彝族自治县"
    }, {
      "label": "马边彝族自治县",
      "value": "马边彝族自治县"
    }, {
      "label": "峨眉山市",
      "value": "峨眉山市"
    }]
  }, {
    "label": "南充市",
    "value": "南充市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "顺庆区",
      "value": "顺庆区"
    }, {
      "label": "高坪区",
      "value": "高坪区"
    }, {
      "label": "嘉陵区",
      "value": "嘉陵区"
    }, {
      "label": "南部县",
      "value": "南部县"
    }, {
      "label": "营山县",
      "value": "营山县"
    }, {
      "label": "蓬安县",
      "value": "蓬安县"
    }, {
      "label": "仪陇县",
      "value": "仪陇县"
    }, {
      "label": "西充县",
      "value": "西充县"
    }, {
      "label": "阆中市",
      "value": "阆中市"
    }]
  }, {
    "label": "眉山市",
    "value": "眉山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "东坡区",
      "value": "东坡区"
    }, {
      "label": "彭山区",
      "value": "彭山区"
    }, {
      "label": "仁寿县",
      "value": "仁寿县"
    }, {
      "label": "洪雅县",
      "value": "洪雅县"
    }, {
      "label": "丹棱县",
      "value": "丹棱县"
    }, {
      "label": "青神县",
      "value": "青神县"
    }]
  }, {
    "label": "宜宾市",
    "value": "宜宾市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "翠屏区",
      "value": "翠屏区"
    }, {
      "label": "南溪区",
      "value": "南溪区"
    }, {
      "label": "宜宾县",
      "value": "宜宾县"
    }, {
      "label": "江安县",
      "value": "江安县"
    }, {
      "label": "长宁县",
      "value": "长宁县"
    }, {
      "label": "高县",
      "value": "高县"
    }, {
      "label": "珙县",
      "value": "珙县"
    }, {
      "label": "筠连县",
      "value": "筠连县"
    }, {
      "label": "兴文县",
      "value": "兴文县"
    }, {
      "label": "屏山县",
      "value": "屏山县"
    }]
  }, {
    "label": "广安市",
    "value": "广安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "广安区",
      "value": "广安区"
    }, {
      "label": "前锋区",
      "value": "前锋区"
    }, {
      "label": "岳池县",
      "value": "岳池县"
    }, {
      "label": "武胜县",
      "value": "武胜县"
    }, {
      "label": "邻水县",
      "value": "邻水县"
    }, {
      "label": "华蓥市",
      "value": "华蓥市"
    }]
  }, {
    "label": "达州市",
    "value": "达州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "通川区",
      "value": "通川区"
    }, {
      "label": "达川区",
      "value": "达川区"
    }, {
      "label": "宣汉县",
      "value": "宣汉县"
    }, {
      "label": "开江县",
      "value": "开江县"
    }, {
      "label": "大竹县",
      "value": "大竹县"
    }, {
      "label": "渠县",
      "value": "渠县"
    }, {
      "label": "万源市",
      "value": "万源市"
    }]
  }, {
    "label": "雅安市",
    "value": "雅安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "雨城区",
      "value": "雨城区"
    }, {
      "label": "名山区",
      "value": "名山区"
    }, {
      "label": "荥经县",
      "value": "荥经县"
    }, {
      "label": "汉源县",
      "value": "汉源县"
    }, {
      "label": "石棉县",
      "value": "石棉县"
    }, {
      "label": "天全县",
      "value": "天全县"
    }, {
      "label": "芦山县",
      "value": "芦山县"
    }, {
      "label": "宝兴县",
      "value": "宝兴县"
    }]
  }, {
    "label": "巴中市",
    "value": "巴中市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "巴州区",
      "value": "巴州区"
    }, {
      "label": "恩阳区",
      "value": "恩阳区"
    }, {
      "label": "通江县",
      "value": "通江县"
    }, {
      "label": "南江县",
      "value": "南江县"
    }, {
      "label": "平昌县",
      "value": "平昌县"
    }]
  }, {
    "label": "资阳市",
    "value": "资阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "雁江区",
      "value": "雁江区"
    }, {
      "label": "安岳县",
      "value": "安岳县"
    }, {
      "label": "乐至县",
      "value": "乐至县"
    }, {
      "label": "简阳市",
      "value": "简阳市"
    }]
  }, {
    "label": "阿坝藏族羌族自治州",
    "value": "阿坝藏族羌族自治州",
    "children": [{
      "label": "汶川县",
      "value": "汶川县"
    }, {
      "label": "理县",
      "value": "理县"
    }, {
      "label": "茂县",
      "value": "茂县"
    }, {
      "label": "松潘县",
      "value": "松潘县"
    }, {
      "label": "九寨沟县",
      "value": "九寨沟县"
    }, {
      "label": "金川县",
      "value": "金川县"
    }, {
      "label": "小金县",
      "value": "小金县"
    }, {
      "label": "黑水县",
      "value": "黑水县"
    }, {
      "label": "马尔康县",
      "value": "马尔康县"
    }, {
      "label": "壤塘县",
      "value": "壤塘县"
    }, {
      "label": "阿坝县",
      "value": "阿坝县"
    }, {
      "label": "若尔盖县",
      "value": "若尔盖县"
    }, {
      "label": "红原县",
      "value": "红原县"
    }]
  }, {
    "label": "甘孜藏族自治州",
    "value": "甘孜藏族自治州",
    "children": [{
      "label": "康定县",
      "value": "康定县"
    }, {
      "label": "泸定县",
      "value": "泸定县"
    }, {
      "label": "丹巴县",
      "value": "丹巴县"
    }, {
      "label": "九龙县",
      "value": "九龙县"
    }, {
      "label": "雅江县",
      "value": "雅江县"
    }, {
      "label": "道孚县",
      "value": "道孚县"
    }, {
      "label": "炉霍县",
      "value": "炉霍县"
    }, {
      "label": "甘孜县",
      "value": "甘孜县"
    }, {
      "label": "新龙县",
      "value": "新龙县"
    }, {
      "label": "德格县",
      "value": "德格县"
    }, {
      "label": "白玉县",
      "value": "白玉县"
    }, {
      "label": "石渠县",
      "value": "石渠县"
    }, {
      "label": "色达县",
      "value": "色达县"
    }, {
      "label": "理塘县",
      "value": "理塘县"
    }, {
      "label": "巴塘县",
      "value": "巴塘县"
    }, {
      "label": "乡城县",
      "value": "乡城县"
    }, {
      "label": "稻城县",
      "value": "稻城县"
    }, {
      "label": "得荣县",
      "value": "得荣县"
    }]
  }, {
    "label": "凉山彝族自治州",
    "value": "凉山彝族自治州",
    "children": [{
      "label": "西昌市",
      "value": "西昌市"
    }, {
      "label": "木里藏族自治县",
      "value": "木里藏族自治县"
    }, {
      "label": "盐源县",
      "value": "盐源县"
    }, {
      "label": "德昌县",
      "value": "德昌县"
    }, {
      "label": "会理县",
      "value": "会理县"
    }, {
      "label": "会东县",
      "value": "会东县"
    }, {
      "label": "宁南县",
      "value": "宁南县"
    }, {
      "label": "普格县",
      "value": "普格县"
    }, {
      "label": "布拖县",
      "value": "布拖县"
    }, {
      "label": "金阳县",
      "value": "金阳县"
    }, {
      "label": "昭觉县",
      "value": "昭觉县"
    }, {
      "label": "喜德县",
      "value": "喜德县"
    }, {
      "label": "冕宁县",
      "value": "冕宁县"
    }, {
      "label": "越西县",
      "value": "越西县"
    }, {
      "label": "甘洛县",
      "value": "甘洛县"
    }, {
      "label": "美姑县",
      "value": "美姑县"
    }, {
      "label": "雷波县",
      "value": "雷波县"
    }]
  }]
}, {
  "label": "贵州省",
  "value": "贵州省",
  "children": [{
    "label": "贵阳市",
    "value": "贵阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "南明区",
      "value": "南明区"
    }, {
      "label": "云岩区",
      "value": "云岩区"
    }, {
      "label": "花溪区",
      "value": "花溪区"
    }, {
      "label": "乌当区",
      "value": "乌当区"
    }, {
      "label": "白云区",
      "value": "白云区"
    }, {
      "label": "观山湖区",
      "value": "观山湖区"
    }, {
      "label": "开阳县",
      "value": "开阳县"
    }, {
      "label": "息烽县",
      "value": "息烽县"
    }, {
      "label": "修文县",
      "value": "修文县"
    }, {
      "label": "清镇市",
      "value": "清镇市"
    }]
  }, {
    "label": "六盘水市",
    "value": "六盘水市",
    "children": [{
      "label": "钟山区",
      "value": "钟山区"
    }, {
      "label": "六枝特区",
      "value": "六枝特区"
    }, {
      "label": "水城县",
      "value": "水城县"
    }, {
      "label": "盘县",
      "value": "盘县"
    }]
  }, {
    "label": "遵义市",
    "value": "遵义市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "红花岗区",
      "value": "红花岗区"
    }, {
      "label": "汇川区",
      "value": "汇川区"
    }, {
      "label": "遵义县",
      "value": "遵义县"
    }, {
      "label": "桐梓县",
      "value": "桐梓县"
    }, {
      "label": "绥阳县",
      "value": "绥阳县"
    }, {
      "label": "正安县",
      "value": "正安县"
    }, {
      "label": "道真仡佬族苗族自治县",
      "value": "道真仡佬族苗族自治县"
    }, {
      "label": "务川仡佬族苗族自治县",
      "value": "务川仡佬族苗族自治县"
    }, {
      "label": "凤冈县",
      "value": "凤冈县"
    }, {
      "label": "湄潭县",
      "value": "湄潭县"
    }, {
      "label": "余庆县",
      "value": "余庆县"
    }, {
      "label": "习水县",
      "value": "习水县"
    }, {
      "label": "赤水市",
      "value": "赤水市"
    }, {
      "label": "仁怀市",
      "value": "仁怀市"
    }]
  }, {
    "label": "安顺市",
    "value": "安顺市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "西秀区",
      "value": "西秀区"
    }, {
      "label": "平坝区",
      "value": "平坝区"
    }, {
      "label": "普定县",
      "value": "普定县"
    }, {
      "label": "镇宁布依族苗族自治县",
      "value": "镇宁布依族苗族自治县"
    }, {
      "label": "关岭布依族苗族自治县",
      "value": "关岭布依族苗族自治县"
    }, {
      "label": "紫云苗族布依族自治县",
      "value": "紫云苗族布依族自治县"
    }]
  }, {
    "label": "毕节市",
    "value": "毕节市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "七星关区",
      "value": "七星关区"
    }, {
      "label": "大方县",
      "value": "大方县"
    }, {
      "label": "黔西县",
      "value": "黔西县"
    }, {
      "label": "金沙县",
      "value": "金沙县"
    }, {
      "label": "织金县",
      "value": "织金县"
    }, {
      "label": "纳雍县",
      "value": "纳雍县"
    }, {
      "label": "威宁彝族回族苗族自治县",
      "value": "威宁彝族回族苗族自治县"
    }, {
      "label": "赫章县",
      "value": "赫章县"
    }]
  }, {
    "label": "铜仁市",
    "value": "铜仁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "碧江区",
      "value": "碧江区"
    }, {
      "label": "万山区",
      "value": "万山区"
    }, {
      "label": "江口县",
      "value": "江口县"
    }, {
      "label": "玉屏侗族自治县",
      "value": "玉屏侗族自治县"
    }, {
      "label": "石阡县",
      "value": "石阡县"
    }, {
      "label": "思南县",
      "value": "思南县"
    }, {
      "label": "印江土家族苗族自治县",
      "value": "印江土家族苗族自治县"
    }, {
      "label": "德江县",
      "value": "德江县"
    }, {
      "label": "沿河土家族自治县",
      "value": "沿河土家族自治县"
    }, {
      "label": "松桃苗族自治县",
      "value": "松桃苗族自治县"
    }]
  }, {
    "label": "黔西南布依族苗族自治州",
    "value": "黔西南布依族苗族自治州",
    "children": [{
      "label": "兴义市",
      "value": "兴义市"
    }, {
      "label": "兴仁县",
      "value": "兴仁县"
    }, {
      "label": "普安县",
      "value": "普安县"
    }, {
      "label": "晴隆县",
      "value": "晴隆县"
    }, {
      "label": "贞丰县",
      "value": "贞丰县"
    }, {
      "label": "望谟县",
      "value": "望谟县"
    }, {
      "label": "册亨县",
      "value": "册亨县"
    }, {
      "label": "安龙县",
      "value": "安龙县"
    }]
  }, {
    "label": "黔东南苗族侗族自治州",
    "value": "黔东南苗族侗族自治州",
    "children": [{
      "label": "凯里市",
      "value": "凯里市"
    }, {
      "label": "黄平县",
      "value": "黄平县"
    }, {
      "label": "施秉县",
      "value": "施秉县"
    }, {
      "label": "三穗县",
      "value": "三穗县"
    }, {
      "label": "镇远县",
      "value": "镇远县"
    }, {
      "label": "岑巩县",
      "value": "岑巩县"
    }, {
      "label": "天柱县",
      "value": "天柱县"
    }, {
      "label": "锦屏县",
      "value": "锦屏县"
    }, {
      "label": "剑河县",
      "value": "剑河县"
    }, {
      "label": "台江县",
      "value": "台江县"
    }, {
      "label": "黎平县",
      "value": "黎平县"
    }, {
      "label": "榕江县",
      "value": "榕江县"
    }, {
      "label": "从江县",
      "value": "从江县"
    }, {
      "label": "雷山县",
      "value": "雷山县"
    }, {
      "label": "麻江县",
      "value": "麻江县"
    }, {
      "label": "丹寨县",
      "value": "丹寨县"
    }]
  }, {
    "label": "黔南布依族苗族自治州",
    "value": "黔南布依族苗族自治州",
    "children": [{
      "label": "都匀市",
      "value": "都匀市"
    }, {
      "label": "福泉市",
      "value": "福泉市"
    }, {
      "label": "荔波县",
      "value": "荔波县"
    }, {
      "label": "贵定县",
      "value": "贵定县"
    }, {
      "label": "瓮安县",
      "value": "瓮安县"
    }, {
      "label": "独山县",
      "value": "独山县"
    }, {
      "label": "平塘县",
      "value": "平塘县"
    }, {
      "label": "罗甸县",
      "value": "罗甸县"
    }, {
      "label": "长顺县",
      "value": "长顺县"
    }, {
      "label": "龙里县",
      "value": "龙里县"
    }, {
      "label": "惠水县",
      "value": "惠水县"
    }, {
      "label": "三都水族自治县",
      "value": "三都水族自治县"
    }]
  }]
}, {
  "label": "云南省",
  "value": "云南省",
  "children": [{
    "label": "昆明市",
    "value": "昆明市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "五华区",
      "value": "五华区"
    }, {
      "label": "盘龙区",
      "value": "盘龙区"
    }, {
      "label": "官渡区",
      "value": "官渡区"
    }, {
      "label": "西山区",
      "value": "西山区"
    }, {
      "label": "东川区",
      "value": "东川区"
    }, {
      "label": "呈贡区",
      "value": "呈贡区"
    }, {
      "label": "晋宁县",
      "value": "晋宁县"
    }, {
      "label": "富民县",
      "value": "富民县"
    }, {
      "label": "宜良县",
      "value": "宜良县"
    }, {
      "label": "石林彝族自治县",
      "value": "石林彝族自治县"
    }, {
      "label": "嵩明县",
      "value": "嵩明县"
    }, {
      "label": "禄劝彝族苗族自治县",
      "value": "禄劝彝族苗族自治县"
    }, {
      "label": "寻甸回族彝族自治县",
      "value": "寻甸回族彝族自治县"
    }, {
      "label": "安宁市",
      "value": "安宁市"
    }]
  }, {
    "label": "曲靖市",
    "value": "曲靖市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "麒麟区",
      "value": "麒麟区"
    }, {
      "label": "马龙县",
      "value": "马龙县"
    }, {
      "label": "陆良县",
      "value": "陆良县"
    }, {
      "label": "师宗县",
      "value": "师宗县"
    }, {
      "label": "罗平县",
      "value": "罗平县"
    }, {
      "label": "富源县",
      "value": "富源县"
    }, {
      "label": "会泽县",
      "value": "会泽县"
    }, {
      "label": "沾益县",
      "value": "沾益县"
    }, {
      "label": "宣威市",
      "value": "宣威市"
    }]
  }, {
    "label": "玉溪市",
    "value": "玉溪市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "红塔区",
      "value": "红塔区"
    }, {
      "label": "江川县",
      "value": "江川县"
    }, {
      "label": "澄江县",
      "value": "澄江县"
    }, {
      "label": "通海县",
      "value": "通海县"
    }, {
      "label": "华宁县",
      "value": "华宁县"
    }, {
      "label": "易门县",
      "value": "易门县"
    }, {
      "label": "峨山彝族自治县",
      "value": "峨山彝族自治县"
    }, {
      "label": "新平彝族傣族自治县",
      "value": "新平彝族傣族自治县"
    }, {
      "label": "元江哈尼族彝族傣族自治县",
      "value": "元江哈尼族彝族傣族自治县"
    }]
  }, {
    "label": "保山市",
    "value": "保山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "隆阳区",
      "value": "隆阳区"
    }, {
      "label": "施甸县",
      "value": "施甸县"
    }, {
      "label": "腾冲县",
      "value": "腾冲县"
    }, {
      "label": "龙陵县",
      "value": "龙陵县"
    }, {
      "label": "昌宁县",
      "value": "昌宁县"
    }]
  }, {
    "label": "昭通市",
    "value": "昭通市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "昭阳区",
      "value": "昭阳区"
    }, {
      "label": "鲁甸县",
      "value": "鲁甸县"
    }, {
      "label": "巧家县",
      "value": "巧家县"
    }, {
      "label": "盐津县",
      "value": "盐津县"
    }, {
      "label": "大关县",
      "value": "大关县"
    }, {
      "label": "永善县",
      "value": "永善县"
    }, {
      "label": "绥江县",
      "value": "绥江县"
    }, {
      "label": "镇雄县",
      "value": "镇雄县"
    }, {
      "label": "彝良县",
      "value": "彝良县"
    }, {
      "label": "威信县",
      "value": "威信县"
    }, {
      "label": "水富县",
      "value": "水富县"
    }]
  }, {
    "label": "丽江市",
    "value": "丽江市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "古城区",
      "value": "古城区"
    }, {
      "label": "玉龙纳西族自治县",
      "value": "玉龙纳西族自治县"
    }, {
      "label": "永胜县",
      "value": "永胜县"
    }, {
      "label": "华坪县",
      "value": "华坪县"
    }, {
      "label": "宁蒗彝族自治县",
      "value": "宁蒗彝族自治县"
    }]
  }, {
    "label": "普洱市",
    "value": "普洱市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "思茅区",
      "value": "思茅区"
    }, {
      "label": "宁洱哈尼族彝族自治县",
      "value": "宁洱哈尼族彝族自治县"
    }, {
      "label": "墨江哈尼族自治县",
      "value": "墨江哈尼族自治县"
    }, {
      "label": "景东彝族自治县",
      "value": "景东彝族自治县"
    }, {
      "label": "景谷傣族彝族自治县",
      "value": "景谷傣族彝族自治县"
    }, {
      "label": "镇沅彝族哈尼族拉祜族自治县",
      "value": "镇沅彝族哈尼族拉祜族自治县"
    }, {
      "label": "江城哈尼族彝族自治县",
      "value": "江城哈尼族彝族自治县"
    }, {
      "label": "孟连傣族拉祜族佤族自治县",
      "value": "孟连傣族拉祜族佤族自治县"
    }, {
      "label": "澜沧拉祜族自治县",
      "value": "澜沧拉祜族自治县"
    }, {
      "label": "西盟佤族自治县",
      "value": "西盟佤族自治县"
    }]
  }, {
    "label": "临沧市",
    "value": "临沧市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "临翔区",
      "value": "临翔区"
    }, {
      "label": "凤庆县",
      "value": "凤庆县"
    }, {
      "label": "云县",
      "value": "云县"
    }, {
      "label": "永德县",
      "value": "永德县"
    }, {
      "label": "镇康县",
      "value": "镇康县"
    }, {
      "label": "双江拉祜族佤族布朗族傣族自治县",
      "value": "双江拉祜族佤族布朗族傣族自治县"
    }, {
      "label": "耿马傣族佤族自治县",
      "value": "耿马傣族佤族自治县"
    }, {
      "label": "沧源佤族自治县",
      "value": "沧源佤族自治县"
    }]
  }, {
    "label": "楚雄彝族自治州",
    "value": "楚雄彝族自治州",
    "children": [{
      "label": "楚雄市",
      "value": "楚雄市"
    }, {
      "label": "双柏县",
      "value": "双柏县"
    }, {
      "label": "牟定县",
      "value": "牟定县"
    }, {
      "label": "南华县",
      "value": "南华县"
    }, {
      "label": "姚安县",
      "value": "姚安县"
    }, {
      "label": "大姚县",
      "value": "大姚县"
    }, {
      "label": "永仁县",
      "value": "永仁县"
    }, {
      "label": "元谋县",
      "value": "元谋县"
    }, {
      "label": "武定县",
      "value": "武定县"
    }, {
      "label": "禄丰县",
      "value": "禄丰县"
    }]
  }, {
    "label": "红河哈尼族彝族自治州",
    "value": "红河哈尼族彝族自治州",
    "children": [{
      "label": "个旧市",
      "value": "个旧市"
    }, {
      "label": "开远市",
      "value": "开远市"
    }, {
      "label": "蒙自市",
      "value": "蒙自市"
    }, {
      "label": "弥勒市",
      "value": "弥勒市"
    }, {
      "label": "屏边苗族自治县",
      "value": "屏边苗族自治县"
    }, {
      "label": "建水县",
      "value": "建水县"
    }, {
      "label": "石屏县",
      "value": "石屏县"
    }, {
      "label": "泸西县",
      "value": "泸西县"
    }, {
      "label": "元阳县",
      "value": "元阳县"
    }, {
      "label": "红河县",
      "value": "红河县"
    }, {
      "label": "金平苗族瑶族傣族自治县",
      "value": "金平苗族瑶族傣族自治县"
    }, {
      "label": "绿春县",
      "value": "绿春县"
    }, {
      "label": "河口瑶族自治县",
      "value": "河口瑶族自治县"
    }]
  }, {
    "label": "文山壮族苗族自治州",
    "value": "文山壮族苗族自治州",
    "children": [{
      "label": "文山市",
      "value": "文山市"
    }, {
      "label": "砚山县",
      "value": "砚山县"
    }, {
      "label": "西畴县",
      "value": "西畴县"
    }, {
      "label": "麻栗坡县",
      "value": "麻栗坡县"
    }, {
      "label": "马关县",
      "value": "马关县"
    }, {
      "label": "丘北县",
      "value": "丘北县"
    }, {
      "label": "广南县",
      "value": "广南县"
    }, {
      "label": "富宁县",
      "value": "富宁县"
    }]
  }, {
    "label": "西双版纳傣族自治州",
    "value": "西双版纳傣族自治州",
    "children": [{
      "label": "景洪市",
      "value": "景洪市"
    }, {
      "label": "勐海县",
      "value": "勐海县"
    }, {
      "label": "勐腊县",
      "value": "勐腊县"
    }]
  }, {
    "label": "大理白族自治州",
    "value": "大理白族自治州",
    "children": [{
      "label": "大理市",
      "value": "大理市"
    }, {
      "label": "漾濞彝族自治县",
      "value": "漾濞彝族自治县"
    }, {
      "label": "祥云县",
      "value": "祥云县"
    }, {
      "label": "宾川县",
      "value": "宾川县"
    }, {
      "label": "弥渡县",
      "value": "弥渡县"
    }, {
      "label": "南涧彝族自治县",
      "value": "南涧彝族自治县"
    }, {
      "label": "巍山彝族回族自治县",
      "value": "巍山彝族回族自治县"
    }, {
      "label": "永平县",
      "value": "永平县"
    }, {
      "label": "云龙县",
      "value": "云龙县"
    }, {
      "label": "洱源县",
      "value": "洱源县"
    }, {
      "label": "剑川县",
      "value": "剑川县"
    }, {
      "label": "鹤庆县",
      "value": "鹤庆县"
    }]
  }, {
    "label": "德宏傣族景颇族自治州",
    "value": "德宏傣族景颇族自治州",
    "children": [{
      "label": "瑞丽市",
      "value": "瑞丽市"
    }, {
      "label": "芒市",
      "value": "芒市"
    }, {
      "label": "梁河县",
      "value": "梁河县"
    }, {
      "label": "盈江县",
      "value": "盈江县"
    }, {
      "label": "陇川县",
      "value": "陇川县"
    }]
  }, {
    "label": "怒江傈僳族自治州",
    "value": "怒江傈僳族自治州",
    "children": [{
      "label": "泸水县",
      "value": "泸水县"
    }, {
      "label": "福贡县",
      "value": "福贡县"
    }, {
      "label": "贡山独龙族怒族自治县",
      "value": "贡山独龙族怒族自治县"
    }, {
      "label": "兰坪白族普米族自治县",
      "value": "兰坪白族普米族自治县"
    }]
  }, {
    "label": "迪庆藏族自治州",
    "value": "迪庆藏族自治州",
    "children": [{
      "label": "香格里拉市",
      "value": "香格里拉市"
    }, {
      "label": "德钦县",
      "value": "德钦县"
    }, {
      "label": "维西傈僳族自治县",
      "value": "维西傈僳族自治县"
    }]
  }]
}, {
  "label": "西藏自治区",
  "value": "西藏自治区",
  "children": [{
    "label": "拉萨市",
    "value": "拉萨市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城关区",
      "value": "城关区"
    }, {
      "label": "林周县",
      "value": "林周县"
    }, {
      "label": "当雄县",
      "value": "当雄县"
    }, {
      "label": "尼木县",
      "value": "尼木县"
    }, {
      "label": "曲水县",
      "value": "曲水县"
    }, {
      "label": "堆龙德庆县",
      "value": "堆龙德庆县"
    }, {
      "label": "达孜县",
      "value": "达孜县"
    }, {
      "label": "墨竹工卡县",
      "value": "墨竹工卡县"
    }]
  }, {
    "label": "日喀则市",
    "value": "日喀则市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "桑珠孜区",
      "value": "桑珠孜区"
    }, {
      "label": "南木林县",
      "value": "南木林县"
    }, {
      "label": "江孜县",
      "value": "江孜县"
    }, {
      "label": "定日县",
      "value": "定日县"
    }, {
      "label": "萨迦县",
      "value": "萨迦县"
    }, {
      "label": "拉孜县",
      "value": "拉孜县"
    }, {
      "label": "昂仁县",
      "value": "昂仁县"
    }, {
      "label": "谢通门县",
      "value": "谢通门县"
    }, {
      "label": "白朗县",
      "value": "白朗县"
    }, {
      "label": "仁布县",
      "value": "仁布县"
    }, {
      "label": "康马县",
      "value": "康马县"
    }, {
      "label": "定结县",
      "value": "定结县"
    }, {
      "label": "仲巴县",
      "value": "仲巴县"
    }, {
      "label": "亚东县",
      "value": "亚东县"
    }, {
      "label": "吉隆县",
      "value": "吉隆县"
    }, {
      "label": "聂拉木县",
      "value": "聂拉木县"
    }, {
      "label": "萨嘎县",
      "value": "萨嘎县"
    }, {
      "label": "岗巴县",
      "value": "岗巴县"
    }]
  }, {
    "label": "昌都市",
    "value": "昌都市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "卡若区",
      "value": "卡若区"
    }, {
      "label": "江达县",
      "value": "江达县"
    }, {
      "label": "贡觉县",
      "value": "贡觉县"
    }, {
      "label": "类乌齐县",
      "value": "类乌齐县"
    }, {
      "label": "丁青县",
      "value": "丁青县"
    }, {
      "label": "察雅县",
      "value": "察雅县"
    }, {
      "label": "八宿县",
      "value": "八宿县"
    }, {
      "label": "左贡县",
      "value": "左贡县"
    }, {
      "label": "芒康县",
      "value": "芒康县"
    }, {
      "label": "洛隆县",
      "value": "洛隆县"
    }, {
      "label": "边坝县",
      "value": "边坝县"
    }]
  }, {
    "label": "山南地区",
    "value": "山南地区",
    "children": [{
      "label": "乃东县",
      "value": "乃东县"
    }, {
      "label": "扎囊县",
      "value": "扎囊县"
    }, {
      "label": "贡嘎县",
      "value": "贡嘎县"
    }, {
      "label": "桑日县",
      "value": "桑日县"
    }, {
      "label": "琼结县",
      "value": "琼结县"
    }, {
      "label": "曲松县",
      "value": "曲松县"
    }, {
      "label": "措美县",
      "value": "措美县"
    }, {
      "label": "洛扎县",
      "value": "洛扎县"
    }, {
      "label": "加查县",
      "value": "加查县"
    }, {
      "label": "隆子县",
      "value": "隆子县"
    }, {
      "label": "错那县",
      "value": "错那县"
    }, {
      "label": "浪卡子县",
      "value": "浪卡子县"
    }]
  }, {
    "label": "那曲地区",
    "value": "那曲地区",
    "children": [{
      "label": "那曲县",
      "value": "那曲县"
    }, {
      "label": "嘉黎县",
      "value": "嘉黎县"
    }, {
      "label": "比如县",
      "value": "比如县"
    }, {
      "label": "聂荣县",
      "value": "聂荣县"
    }, {
      "label": "安多县",
      "value": "安多县"
    }, {
      "label": "申扎县",
      "value": "申扎县"
    }, {
      "label": "索县",
      "value": "索县"
    }, {
      "label": "班戈县",
      "value": "班戈县"
    }, {
      "label": "巴青县",
      "value": "巴青县"
    }, {
      "label": "尼玛县",
      "value": "尼玛县"
    }, {
      "label": "双湖县",
      "value": "双湖县"
    }]
  }, {
    "label": "阿里地区",
    "value": "阿里地区",
    "children": [{
      "label": "普兰县",
      "value": "普兰县"
    }, {
      "label": "札达县",
      "value": "札达县"
    }, {
      "label": "噶尔县",
      "value": "噶尔县"
    }, {
      "label": "日土县",
      "value": "日土县"
    }, {
      "label": "革吉县",
      "value": "革吉县"
    }, {
      "label": "改则县",
      "value": "改则县"
    }, {
      "label": "措勤县",
      "value": "措勤县"
    }]
  }, {
    "label": "林芝地区",
    "value": "林芝地区",
    "children": [{
      "label": "林芝县",
      "value": "林芝县"
    }, {
      "label": "工布江达县",
      "value": "工布江达县"
    }, {
      "label": "米林县",
      "value": "米林县"
    }, {
      "label": "墨脱县",
      "value": "墨脱县"
    }, {
      "label": "波密县",
      "value": "波密县"
    }, {
      "label": "察隅县",
      "value": "察隅县"
    }, {
      "label": "朗县",
      "value": "朗县"
    }]
  }]
}, {
  "label": "陕西省",
  "value": "陕西省",
  "children": [{
    "label": "西安市",
    "value": "西安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "新城区",
      "value": "新城区"
    }, {
      "label": "碑林区",
      "value": "碑林区"
    }, {
      "label": "莲湖区",
      "value": "莲湖区"
    }, {
      "label": "灞桥区",
      "value": "灞桥区"
    }, {
      "label": "未央区",
      "value": "未央区"
    }, {
      "label": "雁塔区",
      "value": "雁塔区"
    }, {
      "label": "阎良区",
      "value": "阎良区"
    }, {
      "label": "临潼区",
      "value": "临潼区"
    }, {
      "label": "长安区",
      "value": "长安区"
    }, {
      "label": "高陵区",
      "value": "高陵区"
    }, {
      "label": "蓝田县",
      "value": "蓝田县"
    }, {
      "label": "周至县",
      "value": "周至县"
    }, {
      "label": "户县",
      "value": "户县"
    }]
  }, {
    "label": "铜川市",
    "value": "铜川市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "王益区",
      "value": "王益区"
    }, {
      "label": "印台区",
      "value": "印台区"
    }, {
      "label": "耀州区",
      "value": "耀州区"
    }, {
      "label": "宜君县",
      "value": "宜君县"
    }]
  }, {
    "label": "宝鸡市",
    "value": "宝鸡市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "渭滨区",
      "value": "渭滨区"
    }, {
      "label": "金台区",
      "value": "金台区"
    }, {
      "label": "陈仓区",
      "value": "陈仓区"
    }, {
      "label": "凤翔县",
      "value": "凤翔县"
    }, {
      "label": "岐山县",
      "value": "岐山县"
    }, {
      "label": "扶风县",
      "value": "扶风县"
    }, {
      "label": "眉县",
      "value": "眉县"
    }, {
      "label": "陇县",
      "value": "陇县"
    }, {
      "label": "千阳县",
      "value": "千阳县"
    }, {
      "label": "麟游县",
      "value": "麟游县"
    }, {
      "label": "凤县",
      "value": "凤县"
    }, {
      "label": "太白县",
      "value": "太白县"
    }]
  }, {
    "label": "咸阳市",
    "value": "咸阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "秦都区",
      "value": "秦都区"
    }, {
      "label": "杨陵区",
      "value": "杨陵区"
    }, {
      "label": "渭城区",
      "value": "渭城区"
    }, {
      "label": "三原县",
      "value": "三原县"
    }, {
      "label": "泾阳县",
      "value": "泾阳县"
    }, {
      "label": "乾县",
      "value": "乾县"
    }, {
      "label": "礼泉县",
      "value": "礼泉县"
    }, {
      "label": "永寿县",
      "value": "永寿县"
    }, {
      "label": "彬县",
      "value": "彬县"
    }, {
      "label": "长武县",
      "value": "长武县"
    }, {
      "label": "旬邑县",
      "value": "旬邑县"
    }, {
      "label": "淳化县",
      "value": "淳化县"
    }, {
      "label": "武功县",
      "value": "武功县"
    }, {
      "label": "兴平市",
      "value": "兴平市"
    }]
  }, {
    "label": "渭南市",
    "value": "渭南市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "临渭区",
      "value": "临渭区"
    }, {
      "label": "华县",
      "value": "华县"
    }, {
      "label": "潼关县",
      "value": "潼关县"
    }, {
      "label": "大荔县",
      "value": "大荔县"
    }, {
      "label": "合阳县",
      "value": "合阳县"
    }, {
      "label": "澄城县",
      "value": "澄城县"
    }, {
      "label": "蒲城县",
      "value": "蒲城县"
    }, {
      "label": "白水县",
      "value": "白水县"
    }, {
      "label": "富平县",
      "value": "富平县"
    }, {
      "label": "韩城市",
      "value": "韩城市"
    }, {
      "label": "华阴市",
      "value": "华阴市"
    }]
  }, {
    "label": "延安市",
    "value": "延安市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "宝塔区",
      "value": "宝塔区"
    }, {
      "label": "延长县",
      "value": "延长县"
    }, {
      "label": "延川县",
      "value": "延川县"
    }, {
      "label": "子长县",
      "value": "子长县"
    }, {
      "label": "安塞县",
      "value": "安塞县"
    }, {
      "label": "志丹县",
      "value": "志丹县"
    }, {
      "label": "吴起县",
      "value": "吴起县"
    }, {
      "label": "甘泉县",
      "value": "甘泉县"
    }, {
      "label": "富县",
      "value": "富县"
    }, {
      "label": "洛川县",
      "value": "洛川县"
    }, {
      "label": "宜川县",
      "value": "宜川县"
    }, {
      "label": "黄龙县",
      "value": "黄龙县"
    }, {
      "label": "黄陵县",
      "value": "黄陵县"
    }]
  }, {
    "label": "汉中市",
    "value": "汉中市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "汉台区",
      "value": "汉台区"
    }, {
      "label": "南郑县",
      "value": "南郑县"
    }, {
      "label": "城固县",
      "value": "城固县"
    }, {
      "label": "洋县",
      "value": "洋县"
    }, {
      "label": "西乡县",
      "value": "西乡县"
    }, {
      "label": "勉县",
      "value": "勉县"
    }, {
      "label": "宁强县",
      "value": "宁强县"
    }, {
      "label": "略阳县",
      "value": "略阳县"
    }, {
      "label": "镇巴县",
      "value": "镇巴县"
    }, {
      "label": "留坝县",
      "value": "留坝县"
    }, {
      "label": "佛坪县",
      "value": "佛坪县"
    }]
  }, {
    "label": "榆林市",
    "value": "榆林市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "榆阳区",
      "value": "榆阳区"
    }, {
      "label": "神木县",
      "value": "神木县"
    }, {
      "label": "府谷县",
      "value": "府谷县"
    }, {
      "label": "横山县",
      "value": "横山县"
    }, {
      "label": "靖边县",
      "value": "靖边县"
    }, {
      "label": "定边县",
      "value": "定边县"
    }, {
      "label": "绥德县",
      "value": "绥德县"
    }, {
      "label": "米脂县",
      "value": "米脂县"
    }, {
      "label": "佳县",
      "value": "佳县"
    }, {
      "label": "吴堡县",
      "value": "吴堡县"
    }, {
      "label": "清涧县",
      "value": "清涧县"
    }, {
      "label": "子洲县",
      "value": "子洲县"
    }]
  }, {
    "label": "安康市",
    "value": "安康市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "汉阴县",
      "value": "汉阴县"
    }, {
      "label": "石泉县",
      "value": "石泉县"
    }, {
      "label": "宁陕县",
      "value": "宁陕县"
    }, {
      "label": "紫阳县",
      "value": "紫阳县"
    }, {
      "label": "岚皋县",
      "value": "岚皋县"
    }, {
      "label": "平利县",
      "value": "平利县"
    }, {
      "label": "镇坪县",
      "value": "镇坪县"
    }, {
      "label": "旬阳县",
      "value": "旬阳县"
    }, {
      "label": "白河县",
      "value": "白河县"
    }]
  }, {
    "label": "商洛市",
    "value": "商洛市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "商州区",
      "value": "商州区"
    }, {
      "label": "洛南县",
      "value": "洛南县"
    }, {
      "label": "丹凤县",
      "value": "丹凤县"
    }, {
      "label": "商南县",
      "value": "商南县"
    }, {
      "label": "山阳县",
      "value": "山阳县"
    }, {
      "label": "镇安县",
      "value": "镇安县"
    }, {
      "label": "柞水县",
      "value": "柞水县"
    }]
  }]
}, {
  "label": "甘肃省",
  "value": "甘肃省",
  "children": [{
    "label": "兰州市",
    "value": "兰州市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城关区",
      "value": "城关区"
    }, {
      "label": "七里河区",
      "value": "七里河区"
    }, {
      "label": "西固区",
      "value": "西固区"
    }, {
      "label": "安宁区",
      "value": "安宁区"
    }, {
      "label": "红古区",
      "value": "红古区"
    }, {
      "label": "永登县",
      "value": "永登县"
    }, {
      "label": "皋兰县",
      "value": "皋兰县"
    }, {
      "label": "榆中县",
      "value": "榆中县"
    }]
  }, {
    "label": "嘉峪关市",
    "value": "嘉峪关市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }]
  }, {
    "label": "金昌市",
    "value": "金昌市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "金川区",
      "value": "金川区"
    }, {
      "label": "永昌县",
      "value": "永昌县"
    }]
  }, {
    "label": "白银市",
    "value": "白银市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "白银区",
      "value": "白银区"
    }, {
      "label": "平川区",
      "value": "平川区"
    }, {
      "label": "靖远县",
      "value": "靖远县"
    }, {
      "label": "会宁县",
      "value": "会宁县"
    }, {
      "label": "景泰县",
      "value": "景泰县"
    }]
  }, {
    "label": "天水市",
    "value": "天水市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "秦州区",
      "value": "秦州区"
    }, {
      "label": "麦积区",
      "value": "麦积区"
    }, {
      "label": "清水县",
      "value": "清水县"
    }, {
      "label": "秦安县",
      "value": "秦安县"
    }, {
      "label": "甘谷县",
      "value": "甘谷县"
    }, {
      "label": "武山县",
      "value": "武山县"
    }, {
      "label": "张家川回族自治县",
      "value": "张家川回族自治县"
    }]
  }, {
    "label": "武威市",
    "value": "武威市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "凉州区",
      "value": "凉州区"
    }, {
      "label": "民勤县",
      "value": "民勤县"
    }, {
      "label": "古浪县",
      "value": "古浪县"
    }, {
      "label": "天祝藏族自治县",
      "value": "天祝藏族自治县"
    }]
  }, {
    "label": "张掖市",
    "value": "张掖市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "甘州区",
      "value": "甘州区"
    }, {
      "label": "肃南裕固族自治县",
      "value": "肃南裕固族自治县"
    }, {
      "label": "民乐县",
      "value": "民乐县"
    }, {
      "label": "临泽县",
      "value": "临泽县"
    }, {
      "label": "高台县",
      "value": "高台县"
    }, {
      "label": "山丹县",
      "value": "山丹县"
    }]
  }, {
    "label": "平凉市",
    "value": "平凉市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "崆峒区",
      "value": "崆峒区"
    }, {
      "label": "泾川县",
      "value": "泾川县"
    }, {
      "label": "灵台县",
      "value": "灵台县"
    }, {
      "label": "崇信县",
      "value": "崇信县"
    }, {
      "label": "华亭县",
      "value": "华亭县"
    }, {
      "label": "庄浪县",
      "value": "庄浪县"
    }, {
      "label": "静宁县",
      "value": "静宁县"
    }]
  }, {
    "label": "酒泉市",
    "value": "酒泉市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "肃州区",
      "value": "肃州区"
    }, {
      "label": "金塔县",
      "value": "金塔县"
    }, {
      "label": "瓜州县",
      "value": "瓜州县"
    }, {
      "label": "肃北蒙古族自治县",
      "value": "肃北蒙古族自治县"
    }, {
      "label": "阿克塞哈萨克族自治县",
      "value": "阿克塞哈萨克族自治县"
    }, {
      "label": "玉门市",
      "value": "玉门市"
    }, {
      "label": "敦煌市",
      "value": "敦煌市"
    }]
  }, {
    "label": "庆阳市",
    "value": "庆阳市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "西峰区",
      "value": "西峰区"
    }, {
      "label": "庆城县",
      "value": "庆城县"
    }, {
      "label": "环县",
      "value": "环县"
    }, {
      "label": "华池县",
      "value": "华池县"
    }, {
      "label": "合水县",
      "value": "合水县"
    }, {
      "label": "正宁县",
      "value": "正宁县"
    }, {
      "label": "宁县",
      "value": "宁县"
    }, {
      "label": "镇原县",
      "value": "镇原县"
    }]
  }, {
    "label": "定西市",
    "value": "定西市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "安定区",
      "value": "安定区"
    }, {
      "label": "通渭县",
      "value": "通渭县"
    }, {
      "label": "陇西县",
      "value": "陇西县"
    }, {
      "label": "渭源县",
      "value": "渭源县"
    }, {
      "label": "临洮县",
      "value": "临洮县"
    }, {
      "label": "漳县",
      "value": "漳县"
    }, {
      "label": "岷县",
      "value": "岷县"
    }]
  }, {
    "label": "陇南市",
    "value": "陇南市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "武都区",
      "value": "武都区"
    }, {
      "label": "成县",
      "value": "成县"
    }, {
      "label": "文县",
      "value": "文县"
    }, {
      "label": "宕昌县",
      "value": "宕昌县"
    }, {
      "label": "康县",
      "value": "康县"
    }, {
      "label": "西和县",
      "value": "西和县"
    }, {
      "label": "礼县",
      "value": "礼县"
    }, {
      "label": "徽县",
      "value": "徽县"
    }, {
      "label": "两当县",
      "value": "两当县"
    }]
  }, {
    "label": "临夏回族自治州",
    "value": "临夏回族自治州",
    "children": [{
      "label": "临夏市",
      "value": "临夏市"
    }, {
      "label": "临夏县",
      "value": "临夏县"
    }, {
      "label": "康乐县",
      "value": "康乐县"
    }, {
      "label": "永靖县",
      "value": "永靖县"
    }, {
      "label": "广河县",
      "value": "广河县"
    }, {
      "label": "和政县",
      "value": "和政县"
    }, {
      "label": "东乡族自治县",
      "value": "东乡族自治县"
    }, {
      "label": "积石山保安族东乡族撒拉族自治县",
      "value": "积石山保安族东乡族撒拉族自治县"
    }]
  }, {
    "label": "甘南藏族自治州",
    "value": "甘南藏族自治州",
    "children": [{
      "label": "合作市",
      "value": "合作市"
    }, {
      "label": "临潭县",
      "value": "临潭县"
    }, {
      "label": "卓尼县",
      "value": "卓尼县"
    }, {
      "label": "舟曲县",
      "value": "舟曲县"
    }, {
      "label": "迭部县",
      "value": "迭部县"
    }, {
      "label": "玛曲县",
      "value": "玛曲县"
    }, {
      "label": "碌曲县",
      "value": "碌曲县"
    }, {
      "label": "夏河县",
      "value": "夏河县"
    }]
  }]
}, {
  "label": "青海省",
  "value": "青海省",
  "children": [{
    "label": "西宁市",
    "value": "西宁市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "城东区",
      "value": "城东区"
    }, {
      "label": "城中区",
      "value": "城中区"
    }, {
      "label": "城西区",
      "value": "城西区"
    }, {
      "label": "城北区",
      "value": "城北区"
    }, {
      "label": "大通回族土族自治县",
      "value": "大通回族土族自治县"
    }, {
      "label": "湟中县",
      "value": "湟中县"
    }, {
      "label": "湟源县",
      "value": "湟源县"
    }]
  }, {
    "label": "海东市",
    "value": "海东市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "乐都区",
      "value": "乐都区"
    }, {
      "label": "平安县",
      "value": "平安县"
    }, {
      "label": "民和回族土族自治县",
      "value": "民和回族土族自治县"
    }, {
      "label": "互助土族自治县",
      "value": "互助土族自治县"
    }, {
      "label": "化隆回族自治县",
      "value": "化隆回族自治县"
    }, {
      "label": "循化撒拉族自治县",
      "value": "循化撒拉族自治县"
    }]
  }, {
    "label": "海北藏族自治州",
    "value": "海北藏族自治州",
    "children": [{
      "label": "门源回族自治县",
      "value": "门源回族自治县"
    }, {
      "label": "祁连县",
      "value": "祁连县"
    }, {
      "label": "海晏县",
      "value": "海晏县"
    }, {
      "label": "刚察县",
      "value": "刚察县"
    }]
  }, {
    "label": "黄南藏族自治州",
    "value": "黄南藏族自治州",
    "children": [{
      "label": "同仁县",
      "value": "同仁县"
    }, {
      "label": "尖扎县",
      "value": "尖扎县"
    }, {
      "label": "泽库县",
      "value": "泽库县"
    }, {
      "label": "河南蒙古族自治县",
      "value": "河南蒙古族自治县"
    }]
  }, {
    "label": "海南藏族自治州",
    "value": "海南藏族自治州",
    "children": [{
      "label": "共和县",
      "value": "共和县"
    }, {
      "label": "同德县",
      "value": "同德县"
    }, {
      "label": "贵德县",
      "value": "贵德县"
    }, {
      "label": "兴海县",
      "value": "兴海县"
    }, {
      "label": "贵南县",
      "value": "贵南县"
    }]
  }, {
    "label": "果洛藏族自治州",
    "value": "果洛藏族自治州",
    "children": [{
      "label": "玛沁县",
      "value": "玛沁县"
    }, {
      "label": "班玛县",
      "value": "班玛县"
    }, {
      "label": "甘德县",
      "value": "甘德县"
    }, {
      "label": "达日县",
      "value": "达日县"
    }, {
      "label": "久治县",
      "value": "久治县"
    }, {
      "label": "玛多县",
      "value": "玛多县"
    }]
  }, {
    "label": "玉树藏族自治州",
    "value": "玉树藏族自治州",
    "children": [{
      "label": "玉树市",
      "value": "玉树市"
    }, {
      "label": "杂多县",
      "value": "杂多县"
    }, {
      "label": "称多县",
      "value": "称多县"
    }, {
      "label": "治多县",
      "value": "治多县"
    }, {
      "label": "囊谦县",
      "value": "囊谦县"
    }, {
      "label": "曲麻莱县",
      "value": "曲麻莱县"
    }]
  }, {
    "label": "海西蒙古族藏族自治州",
    "value": "海西蒙古族藏族自治州",
    "children": [{
      "label": "格尔木市",
      "value": "格尔木市"
    }, {
      "label": "德令哈市",
      "value": "德令哈市"
    }, {
      "label": "乌兰县",
      "value": "乌兰县"
    }, {
      "label": "都兰县",
      "value": "都兰县"
    }, {
      "label": "天峻县",
      "value": "天峻县"
    }]
  }]
}, {
  "label": "宁夏回族自治区",
  "value": "宁夏回族自治区",
  "children": [{
    "label": "银川市",
    "value": "银川市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "兴庆区",
      "value": "兴庆区"
    }, {
      "label": "西夏区",
      "value": "西夏区"
    }, {
      "label": "金凤区",
      "value": "金凤区"
    }, {
      "label": "永宁县",
      "value": "永宁县"
    }, {
      "label": "贺兰县",
      "value": "贺兰县"
    }, {
      "label": "灵武市",
      "value": "灵武市"
    }]
  }, {
    "label": "石嘴山市",
    "value": "石嘴山市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "大武口区",
      "value": "大武口区"
    }, {
      "label": "惠农区",
      "value": "惠农区"
    }, {
      "label": "平罗县",
      "value": "平罗县"
    }]
  }, {
    "label": "吴忠市",
    "value": "吴忠市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "利通区",
      "value": "利通区"
    }, {
      "label": "红寺堡区",
      "value": "红寺堡区"
    }, {
      "label": "盐池县",
      "value": "盐池县"
    }, {
      "label": "同心县",
      "value": "同心县"
    }, {
      "label": "青铜峡市",
      "value": "青铜峡市"
    }]
  }, {
    "label": "固原市",
    "value": "固原市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "原州区",
      "value": "原州区"
    }, {
      "label": "西吉县",
      "value": "西吉县"
    }, {
      "label": "隆德县",
      "value": "隆德县"
    }, {
      "label": "泾源县",
      "value": "泾源县"
    }, {
      "label": "彭阳县",
      "value": "彭阳县"
    }]
  }, {
    "label": "中卫市",
    "value": "中卫市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "沙坡头区",
      "value": "沙坡头区"
    }, {
      "label": "中宁县",
      "value": "中宁县"
    }, {
      "label": "海原县",
      "value": "海原县"
    }]
  }]
}, {
  "label": "新疆维吾尔自治区",
  "value": "新疆维吾尔自治区",
  "children": [{
    "label": "乌鲁木齐市",
    "value": "乌鲁木齐市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "天山区",
      "value": "天山区"
    }, {
      "label": "沙依巴克区",
      "value": "沙依巴克区"
    }, {
      "label": "新市区",
      "value": "新市区"
    }, {
      "label": "水磨沟区",
      "value": "水磨沟区"
    }, {
      "label": "头屯河区",
      "value": "头屯河区"
    }, {
      "label": "达坂城区",
      "value": "达坂城区"
    }, {
      "label": "米东区",
      "value": "米东区"
    }, {
      "label": "乌鲁木齐县",
      "value": "乌鲁木齐县"
    }]
  }, {
    "label": "克拉玛依市",
    "value": "克拉玛依市",
    "children": [{
      "label": "市辖区",
      "value": "市辖区"
    }, {
      "label": "独山子区",
      "value": "独山子区"
    }, {
      "label": "克拉玛依区",
      "value": "克拉玛依区"
    }, {
      "label": "白碱滩区",
      "value": "白碱滩区"
    }, {
      "label": "乌尔禾区",
      "value": "乌尔禾区"
    }]
  }, {
    "label": "吐鲁番地区",
    "value": "吐鲁番地区",
    "children": [{
      "label": "吐鲁番市",
      "value": "吐鲁番市"
    }, {
      "label": "鄯善县",
      "value": "鄯善县"
    }, {
      "label": "托克逊县",
      "value": "托克逊县"
    }]
  }, {
    "label": "哈密地区",
    "value": "哈密地区",
    "children": [{
      "label": "哈密市",
      "value": "哈密市"
    }, {
      "label": "巴里坤哈萨克自治县",
      "value": "巴里坤哈萨克自治县"
    }, {
      "label": "伊吾县",
      "value": "伊吾县"
    }]
  }, {
    "label": "昌吉回族自治州",
    "value": "昌吉回族自治州",
    "children": [{
      "label": "昌吉市",
      "value": "昌吉市"
    }, {
      "label": "阜康市",
      "value": "阜康市"
    }, {
      "label": "呼图壁县",
      "value": "呼图壁县"
    }, {
      "label": "玛纳斯县",
      "value": "玛纳斯县"
    }, {
      "label": "奇台县",
      "value": "奇台县"
    }, {
      "label": "吉木萨尔县",
      "value": "吉木萨尔县"
    }, {
      "label": "木垒哈萨克自治县",
      "value": "木垒哈萨克自治县"
    }]
  }, {
    "label": "博尔塔拉蒙古自治州",
    "value": "博尔塔拉蒙古自治州",
    "children": [{
      "label": "博乐市",
      "value": "博乐市"
    }, {
      "label": "阿拉山口市",
      "value": "阿拉山口市"
    }, {
      "label": "精河县",
      "value": "精河县"
    }, {
      "label": "温泉县",
      "value": "温泉县"
    }]
  }, {
    "label": "巴音郭楞蒙古自治州",
    "value": "巴音郭楞蒙古自治州",
    "children": [{
      "label": "库尔勒市",
      "value": "库尔勒市"
    }, {
      "label": "轮台县",
      "value": "轮台县"
    }, {
      "label": "尉犁县",
      "value": "尉犁县"
    }, {
      "label": "若羌县",
      "value": "若羌县"
    }, {
      "label": "且末县",
      "value": "且末县"
    }, {
      "label": "焉耆回族自治县",
      "value": "焉耆回族自治县"
    }, {
      "label": "和静县",
      "value": "和静县"
    }, {
      "label": "和硕县",
      "value": "和硕县"
    }, {
      "label": "博湖县",
      "value": "博湖县"
    }]
  }, {
    "label": "阿克苏地区",
    "value": "阿克苏地区",
    "children": [{
      "label": "阿克苏市",
      "value": "阿克苏市"
    }, {
      "label": "温宿县",
      "value": "温宿县"
    }, {
      "label": "库车县",
      "value": "库车县"
    }, {
      "label": "沙雅县",
      "value": "沙雅县"
    }, {
      "label": "新和县",
      "value": "新和县"
    }, {
      "label": "拜城县",
      "value": "拜城县"
    }, {
      "label": "乌什县",
      "value": "乌什县"
    }, {
      "label": "阿瓦提县",
      "value": "阿瓦提县"
    }, {
      "label": "柯坪县",
      "value": "柯坪县"
    }]
  }, {
    "label": "克孜勒苏柯尔克孜自治州",
    "value": "克孜勒苏柯尔克孜自治州",
    "children": [{
      "label": "阿图什市",
      "value": "阿图什市"
    }, {
      "label": "阿克陶县",
      "value": "阿克陶县"
    }, {
      "label": "阿合奇县",
      "value": "阿合奇县"
    }, {
      "label": "乌恰县",
      "value": "乌恰县"
    }]
  }, {
    "label": "喀什地区",
    "value": "喀什地区",
    "children": [{
      "label": "喀什市",
      "value": "喀什市"
    }, {
      "label": "疏附县",
      "value": "疏附县"
    }, {
      "label": "疏勒县",
      "value": "疏勒县"
    }, {
      "label": "英吉沙县",
      "value": "英吉沙县"
    }, {
      "label": "泽普县",
      "value": "泽普县"
    }, {
      "label": "莎车县",
      "value": "莎车县"
    }, {
      "label": "叶城县",
      "value": "叶城县"
    }, {
      "label": "麦盖提县",
      "value": "麦盖提县"
    }, {
      "label": "岳普湖县",
      "value": "岳普湖县"
    }, {
      "label": "伽师县",
      "value": "伽师县"
    }, {
      "label": "巴楚县",
      "value": "巴楚县"
    }, {
      "label": "塔什库尔干塔吉克自治县",
      "value": "塔什库尔干塔吉克自治县"
    }]
  }, {
    "label": "和田地区",
    "value": "和田地区",
    "children": [{
      "label": "和田市",
      "value": "和田市"
    }, {
      "label": "和田县",
      "value": "和田县"
    }, {
      "label": "墨玉县",
      "value": "墨玉县"
    }, {
      "label": "皮山县",
      "value": "皮山县"
    }, {
      "label": "洛浦县",
      "value": "洛浦县"
    }, {
      "label": "策勒县",
      "value": "策勒县"
    }, {
      "label": "于田县",
      "value": "于田县"
    }, {
      "label": "民丰县",
      "value": "民丰县"
    }]
  }, {
    "label": "伊犁哈萨克自治州",
    "value": "伊犁哈萨克自治州",
    "children": [{
      "label": "伊宁市",
      "value": "伊宁市"
    }, {
      "label": "奎屯市",
      "value": "奎屯市"
    }, {
      "label": "霍尔果斯市",
      "value": "霍尔果斯市"
    }, {
      "label": "伊宁县",
      "value": "伊宁县"
    }, {
      "label": "察布查尔锡伯自治县",
      "value": "察布查尔锡伯自治县"
    }, {
      "label": "霍城县",
      "value": "霍城县"
    }, {
      "label": "巩留县",
      "value": "巩留县"
    }, {
      "label": "新源县",
      "value": "新源县"
    }, {
      "label": "昭苏县",
      "value": "昭苏县"
    }, {
      "label": "特克斯县",
      "value": "特克斯县"
    }, {
      "label": "尼勒克县",
      "value": "尼勒克县"
    }, {
      "label": "塔城地区",
      "value": "塔城地区"
    }, {
      "label": "塔城市",
      "value": "塔城市"
    }, {
      "label": "乌苏市",
      "value": "乌苏市"
    }, {
      "label": "额敏县",
      "value": "额敏县"
    }, {
      "label": "沙湾县",
      "value": "沙湾县"
    }, {
      "label": "托里县",
      "value": "托里县"
    }, {
      "label": "裕民县",
      "value": "裕民县"
    }, {
      "label": "和布克赛尔蒙古自治县",
      "value": "和布克赛尔蒙古自治县"
    }, {
      "label": "阿勒泰地区",
      "value": "阿勒泰地区"
    }, {
      "label": "阿勒泰市",
      "value": "阿勒泰市"
    }, {
      "label": "布尔津县",
      "value": "布尔津县"
    }, {
      "label": "富蕴县",
      "value": "富蕴县"
    }, {
      "label": "福海县",
      "value": "福海县"
    }, {
      "label": "哈巴河县",
      "value": "哈巴河县"
    }, {
      "label": "青河县",
      "value": "青河县"
    }, {
      "label": "吉木乃县",
      "value": "吉木乃县"
    }]
  }, {
    "label": "自治区直辖县级行政区划",
    "value": "自治区直辖县级行政区划",
    "children": [{
      "label": "石河子市",
      "value": "石河子市"
    }, {
      "label": "阿拉尔市",
      "value": "阿拉尔市"
    }, {
      "label": "图木舒克市",
      "value": "图木舒克市"
    }, {
      "label": "五家渠市",
      "value": "五家渠市"
    }, {
      "label": "北屯市",
      "value": "北屯市"
    }, {
      "label": "铁门关市",
      "value": "铁门关市"
    }, {
      "label": "双河市",
      "value": "双河市"
    }]
  }]
}, {
  "label": "台湾省",
  "value": "台湾省",
  "children": [{
    "label": "台北市",
    "value": "台北市",
    "children": [{
      "label": "松山区",
      "value": "松山区"
    }, {
      "label": "信义区",
      "value": "信义区"
    }, {
      "label": "大安区",
      "value": "大安区"
    }, {
      "label": "中山区",
      "value": "中山区"
    }, {
      "label": "中正区",
      "value": "中正区"
    }, {
      "label": "大同区",
      "value": "大同区"
    }, {
      "label": "万华区",
      "value": "万华区"
    }, {
      "label": "文山区",
      "value": "文山区"
    }, {
      "label": "南港区",
      "value": "南港区"
    }, {
      "label": "内湖区",
      "value": "内湖区"
    }, {
      "label": "士林区",
      "value": "士林区"
    }, {
      "label": "北投区",
      "value": "北投区"
    }]
  }, {
    "label": "高雄市",
    "value": "高雄市",
    "children": [{
      "label": "盐埕区",
      "value": "盐埕区"
    }, {
      "label": "鼓山区",
      "value": "鼓山区"
    }, {
      "label": "左营区",
      "value": "左营区"
    }, {
      "label": "楠梓区",
      "value": "楠梓区"
    }, {
      "label": "三民区",
      "value": "三民区"
    }, {
      "label": "新兴区",
      "value": "新兴区"
    }, {
      "label": "前金区",
      "value": "前金区"
    }, {
      "label": "苓雅区",
      "value": "苓雅区"
    }, {
      "label": "前镇区",
      "value": "前镇区"
    }, {
      "label": "旗津区",
      "value": "旗津区"
    }, {
      "label": "小港区",
      "value": "小港区"
    }, {
      "label": "凤山区",
      "value": "凤山区"
    }, {
      "label": "林园区",
      "value": "林园区"
    }, {
      "label": "大寮区",
      "value": "大寮区"
    }, {
      "label": "大树区",
      "value": "大树区"
    }, {
      "label": "大社区",
      "value": "大社区"
    }, {
      "label": "仁武区",
      "value": "仁武区"
    }, {
      "label": "鸟松区",
      "value": "鸟松区"
    }, {
      "label": "冈山区",
      "value": "冈山区"
    }, {
      "label": "桥头区",
      "value": "桥头区"
    }, {
      "label": "燕巢区",
      "value": "燕巢区"
    }, {
      "label": "田寮区",
      "value": "田寮区"
    }, {
      "label": "阿莲区",
      "value": "阿莲区"
    }, {
      "label": "路竹区",
      "value": "路竹区"
    }, {
      "label": "湖内区",
      "value": "湖内区"
    }, {
      "label": "茄萣区",
      "value": "茄萣区"
    }, {
      "label": "永安区",
      "value": "永安区"
    }, {
      "label": "弥陀区",
      "value": "弥陀区"
    }, {
      "label": "梓官区",
      "value": "梓官区"
    }, {
      "label": "旗山区",
      "value": "旗山区"
    }, {
      "label": "美浓区",
      "value": "美浓区"
    }, {
      "label": "六龟区",
      "value": "六龟区"
    }, {
      "label": "甲仙区",
      "value": "甲仙区"
    }, {
      "label": "杉林区",
      "value": "杉林区"
    }, {
      "label": "内门区",
      "value": "内门区"
    }, {
      "label": "茂林区",
      "value": "茂林区"
    }, {
      "label": "桃源区",
      "value": "桃源区"
    }, {
      "label": "那玛夏区",
      "value": "那玛夏区"
    }]
  }, {
    "label": "基隆市",
    "value": "基隆市",
    "children": [{
      "label": "中正区",
      "value": "中正区"
    }, {
      "label": "七堵区",
      "value": "七堵区"
    }, {
      "label": "暖暖区",
      "value": "暖暖区"
    }, {
      "label": "仁爱区",
      "value": "仁爱区"
    }, {
      "label": "中山区",
      "value": "中山区"
    }, {
      "label": "安乐区",
      "value": "安乐区"
    }, {
      "label": "信义区",
      "value": "信义区"
    }]
  }, {
    "label": "台中市",
    "value": "台中市",
    "children": [{
      "label": "中区",
      "value": "中区"
    }, {
      "label": "东区",
      "value": "东区"
    }, {
      "label": "南区",
      "value": "南区"
    }, {
      "label": "西区",
      "value": "西区"
    }, {
      "label": "北区",
      "value": "北区"
    }, {
      "label": "西屯区",
      "value": "西屯区"
    }, {
      "label": "南屯区",
      "value": "南屯区"
    }, {
      "label": "北屯区",
      "value": "北屯区"
    }, {
      "label": "丰原区",
      "value": "丰原区"
    }, {
      "label": "东势区",
      "value": "东势区"
    }, {
      "label": "大甲区",
      "value": "大甲区"
    }, {
      "label": "清水区",
      "value": "清水区"
    }, {
      "label": "沙鹿区",
      "value": "沙鹿区"
    }, {
      "label": "梧栖区",
      "value": "梧栖区"
    }, {
      "label": "后里区",
      "value": "后里区"
    }, {
      "label": "神冈区",
      "value": "神冈区"
    }, {
      "label": "潭子区",
      "value": "潭子区"
    }, {
      "label": "大雅区",
      "value": "大雅区"
    }, {
      "label": "新社区",
      "value": "新社区"
    }, {
      "label": "石冈区",
      "value": "石冈区"
    }, {
      "label": "外埔区",
      "value": "外埔区"
    }, {
      "label": "大安区",
      "value": "大安区"
    }, {
      "label": "乌日区",
      "value": "乌日区"
    }, {
      "label": "大肚区",
      "value": "大肚区"
    }, {
      "label": "龙井区",
      "value": "龙井区"
    }, {
      "label": "雾峰区",
      "value": "雾峰区"
    }, {
      "label": "太平区",
      "value": "太平区"
    }, {
      "label": "大里区",
      "value": "大里区"
    }, {
      "label": "和平区",
      "value": "和平区"
    }]
  }, {
    "label": "台南市",
    "value": "台南市",
    "children": [{
      "label": "东区",
      "value": "东区"
    }, {
      "label": "南区",
      "value": "南区"
    }, {
      "label": "北区",
      "value": "北区"
    }, {
      "label": "安南区",
      "value": "安南区"
    }, {
      "label": "安平区",
      "value": "安平区"
    }, {
      "label": "中西区",
      "value": "中西区"
    }, {
      "label": "新营区",
      "value": "新营区"
    }, {
      "label": "盐水区",
      "value": "盐水区"
    }, {
      "label": "白河区",
      "value": "白河区"
    }, {
      "label": "柳营区",
      "value": "柳营区"
    }, {
      "label": "后壁区",
      "value": "后壁区"
    }, {
      "label": "东山区",
      "value": "东山区"
    }, {
      "label": "麻豆区",
      "value": "麻豆区"
    }, {
      "label": "下营区",
      "value": "下营区"
    }, {
      "label": "六甲区",
      "value": "六甲区"
    }, {
      "label": "官田区",
      "value": "官田区"
    }, {
      "label": "大内区",
      "value": "大内区"
    }, {
      "label": "佳里区",
      "value": "佳里区"
    }, {
      "label": "学甲区",
      "value": "学甲区"
    }, {
      "label": "西港区",
      "value": "西港区"
    }, {
      "label": "七股区",
      "value": "七股区"
    }, {
      "label": "将军区",
      "value": "将军区"
    }, {
      "label": "北门区",
      "value": "北门区"
    }, {
      "label": "新化区",
      "value": "新化区"
    }, {
      "label": "善化区",
      "value": "善化区"
    }, {
      "label": "新市区",
      "value": "新市区"
    }, {
      "label": "安定区",
      "value": "安定区"
    }, {
      "label": "山上区",
      "value": "山上区"
    }, {
      "label": "玉井区",
      "value": "玉井区"
    }, {
      "label": "楠西区",
      "value": "楠西区"
    }, {
      "label": "南化区",
      "value": "南化区"
    }, {
      "label": "左镇区",
      "value": "左镇区"
    }, {
      "label": "仁德区",
      "value": "仁德区"
    }, {
      "label": "归仁区",
      "value": "归仁区"
    }, {
      "label": "关庙区",
      "value": "关庙区"
    }, {
      "label": "龙崎区",
      "value": "龙崎区"
    }, {
      "label": "永康区",
      "value": "永康区"
    }]
  }, {
    "label": "新竹市",
    "value": "新竹市",
    "children": [{
      "label": "东区",
      "value": "东区"
    }, {
      "label": "北区",
      "value": "北区"
    }, {
      "label": "香山区",
      "value": "香山区"
    }]
  }, {
    "label": "嘉义市",
    "value": "嘉义市",
    "children": [{
      "label": "东区",
      "value": "东区"
    }, {
      "label": "西区",
      "value": "西区"
    }]
  }, {
    "label": "新北市",
    "value": "新北市",
    "children": [{
      "label": "板桥区",
      "value": "板桥区"
    }, {
      "label": "三重区",
      "value": "三重区"
    }, {
      "label": "中和区",
      "value": "中和区"
    }, {
      "label": "永和区",
      "value": "永和区"
    }, {
      "label": "新庄区",
      "value": "新庄区"
    }, {
      "label": "新店区",
      "value": "新店区"
    }, {
      "label": "树林区",
      "value": "树林区"
    }, {
      "label": "莺歌区",
      "value": "莺歌区"
    }, {
      "label": "三峡区",
      "value": "三峡区"
    }, {
      "label": "淡水区",
      "value": "淡水区"
    }, {
      "label": "汐止区",
      "value": "汐止区"
    }, {
      "label": "瑞芳区",
      "value": "瑞芳区"
    }, {
      "label": "土城区",
      "value": "土城区"
    }, {
      "label": "芦洲区",
      "value": "芦洲区"
    }, {
      "label": "五股区",
      "value": "五股区"
    }, {
      "label": "泰山区",
      "value": "泰山区"
    }, {
      "label": "林口区",
      "value": "林口区"
    }, {
      "label": "深坑区",
      "value": "深坑区"
    }, {
      "label": "石碇区",
      "value": "石碇区"
    }, {
      "label": "坪林区",
      "value": "坪林区"
    }, {
      "label": "三芝区",
      "value": "三芝区"
    }, {
      "label": "石门区",
      "value": "石门区"
    }, {
      "label": "八里区",
      "value": "八里区"
    }, {
      "label": "平溪区",
      "value": "平溪区"
    }, {
      "label": "双溪区",
      "value": "双溪区"
    }, {
      "label": "贡寮区",
      "value": "贡寮区"
    }, {
      "label": "金山区",
      "value": "金山区"
    }, {
      "label": "万里区",
      "value": "万里区"
    }, {
      "label": "乌来区",
      "value": "乌来区"
    }]
  }, {
    "label": "宜兰县",
    "value": "宜兰县",
    "children": [{
      "label": "宜兰市",
      "value": "宜兰市"
    }, {
      "label": "罗东镇",
      "value": "罗东镇"
    }, {
      "label": "苏澳镇",
      "value": "苏澳镇"
    }, {
      "label": "头城镇",
      "value": "头城镇"
    }, {
      "label": "礁溪乡",
      "value": "礁溪乡"
    }, {
      "label": "壮围乡",
      "value": "壮围乡"
    }, {
      "label": "员山乡",
      "value": "员山乡"
    }, {
      "label": "冬山乡",
      "value": "冬山乡"
    }, {
      "label": "五结乡",
      "value": "五结乡"
    }, {
      "label": "三星乡",
      "value": "三星乡"
    }, {
      "label": "大同乡",
      "value": "大同乡"
    }, {
      "label": "南澳乡",
      "value": "南澳乡"
    }]
  }, {
    "label": "桃园县",
    "value": "桃园县",
    "children": [{
      "label": "桃园市",
      "value": "桃园市"
    }, {
      "label": "中坜市",
      "value": "中坜市"
    }, {
      "label": "平镇市",
      "value": "平镇市"
    }, {
      "label": "八德市",
      "value": "八德市"
    }, {
      "label": "杨梅市",
      "value": "杨梅市"
    }, {
      "label": "大溪镇",
      "value": "大溪镇"
    }, {
      "label": "芦竹乡",
      "value": "芦竹乡"
    }, {
      "label": "大园乡",
      "value": "大园乡"
    }, {
      "label": "龟山乡",
      "value": "龟山乡"
    }, {
      "label": "龙潭乡",
      "value": "龙潭乡"
    }, {
      "label": "新屋乡",
      "value": "新屋乡"
    }, {
      "label": "观音乡",
      "value": "观音乡"
    }, {
      "label": "复兴乡",
      "value": "复兴乡"
    }]
  }, {
    "label": "新竹县",
    "value": "新竹县",
    "children": [{
      "label": "竹北市",
      "value": "竹北市"
    }, {
      "label": "竹东镇",
      "value": "竹东镇"
    }, {
      "label": "新埔镇",
      "value": "新埔镇"
    }, {
      "label": "关西镇",
      "value": "关西镇"
    }, {
      "label": "湖口乡",
      "value": "湖口乡"
    }, {
      "label": "新丰乡",
      "value": "新丰乡"
    }, {
      "label": "芎林乡",
      "value": "芎林乡"
    }, {
      "label": "橫山乡",
      "value": "橫山乡"
    }, {
      "label": "北埔乡",
      "value": "北埔乡"
    }, {
      "label": "宝山乡",
      "value": "宝山乡"
    }, {
      "label": "峨眉乡",
      "value": "峨眉乡"
    }, {
      "label": "尖石乡",
      "value": "尖石乡"
    }, {
      "label": "五峰乡",
      "value": "五峰乡"
    }]
  }, {
    "label": "苗栗县",
    "value": "苗栗县",
    "children": [{
      "label": "苗栗市",
      "value": "苗栗市"
    }, {
      "label": "苑里镇",
      "value": "苑里镇"
    }, {
      "label": "通霄镇",
      "value": "通霄镇"
    }, {
      "label": "竹南镇",
      "value": "竹南镇"
    }, {
      "label": "头份镇",
      "value": "头份镇"
    }, {
      "label": "后龙镇",
      "value": "后龙镇"
    }, {
      "label": "卓兰镇",
      "value": "卓兰镇"
    }, {
      "label": "大湖乡",
      "value": "大湖乡"
    }, {
      "label": "公馆乡",
      "value": "公馆乡"
    }, {
      "label": "铜锣乡",
      "value": "铜锣乡"
    }, {
      "label": "南庄乡",
      "value": "南庄乡"
    }, {
      "label": "头屋乡",
      "value": "头屋乡"
    }, {
      "label": "三义乡",
      "value": "三义乡"
    }, {
      "label": "西湖乡",
      "value": "西湖乡"
    }, {
      "label": "造桥乡",
      "value": "造桥乡"
    }, {
      "label": "三湾乡",
      "value": "三湾乡"
    }, {
      "label": "狮潭乡",
      "value": "狮潭乡"
    }, {
      "label": "泰安乡",
      "value": "泰安乡"
    }]
  }, {
    "label": "彰化县",
    "value": "彰化县",
    "children": [{
      "label": "彰化市",
      "value": "彰化市"
    }, {
      "label": "鹿港镇",
      "value": "鹿港镇"
    }, {
      "label": "和美镇",
      "value": "和美镇"
    }, {
      "label": "线西乡",
      "value": "线西乡"
    }, {
      "label": "伸港乡",
      "value": "伸港乡"
    }, {
      "label": "福兴乡",
      "value": "福兴乡"
    }, {
      "label": "秀水乡",
      "value": "秀水乡"
    }, {
      "label": "花坛乡",
      "value": "花坛乡"
    }, {
      "label": "芬园乡",
      "value": "芬园乡"
    }, {
      "label": "员林镇",
      "value": "员林镇"
    }, {
      "label": "溪湖镇",
      "value": "溪湖镇"
    }, {
      "label": "田中镇",
      "value": "田中镇"
    }, {
      "label": "大村乡",
      "value": "大村乡"
    }, {
      "label": "埔盐乡",
      "value": "埔盐乡"
    }, {
      "label": "埔心乡",
      "value": "埔心乡"
    }, {
      "label": "永靖乡",
      "value": "永靖乡"
    }, {
      "label": "社头乡",
      "value": "社头乡"
    }, {
      "label": "二水乡",
      "value": "二水乡"
    }, {
      "label": "北斗镇",
      "value": "北斗镇"
    }, {
      "label": "二林镇",
      "value": "二林镇"
    }, {
      "label": "田尾乡",
      "value": "田尾乡"
    }, {
      "label": "埤头乡",
      "value": "埤头乡"
    }, {
      "label": "芳苑乡",
      "value": "芳苑乡"
    }, {
      "label": "大城乡",
      "value": "大城乡"
    }, {
      "label": "竹塘乡",
      "value": "竹塘乡"
    }, {
      "label": "溪州乡",
      "value": "溪州乡"
    }]
  }, {
    "label": "南投县",
    "value": "南投县",
    "children": [{
      "label": "南投市",
      "value": "南投市"
    }, {
      "label": "埔里镇",
      "value": "埔里镇"
    }, {
      "label": "草屯镇",
      "value": "草屯镇"
    }, {
      "label": "竹山镇",
      "value": "竹山镇"
    }, {
      "label": "集集镇",
      "value": "集集镇"
    }, {
      "label": "名间乡",
      "value": "名间乡"
    }, {
      "label": "鹿谷乡",
      "value": "鹿谷乡"
    }, {
      "label": "中寮乡",
      "value": "中寮乡"
    }, {
      "label": "鱼池乡",
      "value": "鱼池乡"
    }, {
      "label": "国姓乡",
      "value": "国姓乡"
    }, {
      "label": "水里乡",
      "value": "水里乡"
    }, {
      "label": "信义乡",
      "value": "信义乡"
    }, {
      "label": "仁爱乡",
      "value": "仁爱乡"
    }]
  }, {
    "label": "云林县",
    "value": "云林县",
    "children": [{
      "label": "斗六市",
      "value": "斗六市"
    }, {
      "label": "斗南镇",
      "value": "斗南镇"
    }, {
      "label": "虎尾镇",
      "value": "虎尾镇"
    }, {
      "label": "西螺镇",
      "value": "西螺镇"
    }, {
      "label": "土库镇",
      "value": "土库镇"
    }, {
      "label": "北港镇",
      "value": "北港镇"
    }, {
      "label": "古坑乡",
      "value": "古坑乡"
    }, {
      "label": "大埤乡",
      "value": "大埤乡"
    }, {
      "label": "莿桐乡",
      "value": "莿桐乡"
    }, {
      "label": "林内乡",
      "value": "林内乡"
    }, {
      "label": "二仑乡",
      "value": "二仑乡"
    }, {
      "label": "仑背乡",
      "value": "仑背乡"
    }, {
      "label": "麦寮乡",
      "value": "麦寮乡"
    }, {
      "label": "东势乡",
      "value": "东势乡"
    }, {
      "label": "褒忠乡",
      "value": "褒忠乡"
    }, {
      "label": "台西乡",
      "value": "台西乡"
    }, {
      "label": "元长乡",
      "value": "元长乡"
    }, {
      "label": "四湖乡",
      "value": "四湖乡"
    }, {
      "label": "口湖乡",
      "value": "口湖乡"
    }, {
      "label": "水林乡",
      "value": "水林乡"
    }]
  }, {
    "label": "嘉义县",
    "value": "嘉义县",
    "children": [{
      "label": "太保市",
      "value": "太保市"
    }, {
      "label": "朴子市",
      "value": "朴子市"
    }, {
      "label": "布袋镇",
      "value": "布袋镇"
    }, {
      "label": "大林镇",
      "value": "大林镇"
    }, {
      "label": "民雄乡",
      "value": "民雄乡"
    }, {
      "label": "溪口乡",
      "value": "溪口乡"
    }, {
      "label": "新港乡",
      "value": "新港乡"
    }, {
      "label": "六脚乡",
      "value": "六脚乡"
    }, {
      "label": "东石乡",
      "value": "东石乡"
    }, {
      "label": "义竹乡",
      "value": "义竹乡"
    }, {
      "label": "鹿草乡",
      "value": "鹿草乡"
    }, {
      "label": "水上乡",
      "value": "水上乡"
    }, {
      "label": "中埔乡",
      "value": "中埔乡"
    }, {
      "label": "竹崎乡",
      "value": "竹崎乡"
    }, {
      "label": "梅山乡",
      "value": "梅山乡"
    }, {
      "label": "番路乡",
      "value": "番路乡"
    }, {
      "label": "大埔乡",
      "value": "大埔乡"
    }, {
      "label": "阿里山乡",
      "value": "阿里山乡"
    }]
  }, {
    "label": "屏东县",
    "value": "屏东县",
    "children": [{
      "label": "屏东市",
      "value": "屏东市"
    }, {
      "label": "潮州镇",
      "value": "潮州镇"
    }, {
      "label": "东港镇",
      "value": "东港镇"
    }, {
      "label": "恒春镇",
      "value": "恒春镇"
    }, {
      "label": "万丹乡",
      "value": "万丹乡"
    }, {
      "label": "长治乡",
      "value": "长治乡"
    }, {
      "label": "麟洛乡",
      "value": "麟洛乡"
    }, {
      "label": "九如乡",
      "value": "九如乡"
    }, {
      "label": "里港乡",
      "value": "里港乡"
    }, {
      "label": "盐埔乡",
      "value": "盐埔乡"
    }, {
      "label": "高树乡",
      "value": "高树乡"
    }, {
      "label": "万峦乡",
      "value": "万峦乡"
    }, {
      "label": "内埔乡",
      "value": "内埔乡"
    }, {
      "label": "竹田乡",
      "value": "竹田乡"
    }, {
      "label": "新埤乡",
      "value": "新埤乡"
    }, {
      "label": "枋寮乡",
      "value": "枋寮乡"
    }, {
      "label": "新园乡",
      "value": "新园乡"
    }, {
      "label": "崁顶乡",
      "value": "崁顶乡"
    }, {
      "label": "林边乡",
      "value": "林边乡"
    }, {
      "label": "南州乡",
      "value": "南州乡"
    }, {
      "label": "佳冬乡",
      "value": "佳冬乡"
    }, {
      "label": "琉球乡",
      "value": "琉球乡"
    }, {
      "label": "车城乡",
      "value": "车城乡"
    }, {
      "label": "满州乡",
      "value": "满州乡"
    }, {
      "label": "枋山乡",
      "value": "枋山乡"
    }, {
      "label": "三地门乡",
      "value": "三地门乡"
    }, {
      "label": "雾台乡",
      "value": "雾台乡"
    }, {
      "label": "玛家乡",
      "value": "玛家乡"
    }, {
      "label": "泰武乡",
      "value": "泰武乡"
    }, {
      "label": "来义乡",
      "value": "来义乡"
    }, {
      "label": "春日乡",
      "value": "春日乡"
    }, {
      "label": "狮子乡",
      "value": "狮子乡"
    }, {
      "label": "牡丹乡",
      "value": "牡丹乡"
    }]
  }, {
    "label": "台东县",
    "value": "台东县",
    "children": [{
      "label": "台东市",
      "value": "台东市"
    }, {
      "label": "成功镇",
      "value": "成功镇"
    }, {
      "label": "关山镇",
      "value": "关山镇"
    }, {
      "label": "卑南乡",
      "value": "卑南乡"
    }, {
      "label": "鹿野乡",
      "value": "鹿野乡"
    }, {
      "label": "池上乡",
      "value": "池上乡"
    }, {
      "label": "东河乡",
      "value": "东河乡"
    }, {
      "label": "长滨乡",
      "value": "长滨乡"
    }, {
      "label": "太麻里乡",
      "value": "太麻里乡"
    }, {
      "label": "大武乡",
      "value": "大武乡"
    }, {
      "label": "绿岛乡",
      "value": "绿岛乡"
    }, {
      "label": "海端乡",
      "value": "海端乡"
    }, {
      "label": "延平乡",
      "value": "延平乡"
    }, {
      "label": "金峰乡",
      "value": "金峰乡"
    }, {
      "label": "达仁乡",
      "value": "达仁乡"
    }, {
      "label": "兰屿乡",
      "value": "兰屿乡"
    }]
  }, {
    "label": "花莲县",
    "value": "花莲县",
    "children": [{
      "label": "花莲市",
      "value": "花莲市"
    }, {
      "label": "凤林镇",
      "value": "凤林镇"
    }, {
      "label": "玉里镇",
      "value": "玉里镇"
    }, {
      "label": "新城乡",
      "value": "新城乡"
    }, {
      "label": "吉安乡",
      "value": "吉安乡"
    }, {
      "label": "寿丰乡",
      "value": "寿丰乡"
    }, {
      "label": "光复乡",
      "value": "光复乡"
    }, {
      "label": "丰滨乡",
      "value": "丰滨乡"
    }, {
      "label": "瑞穗乡",
      "value": "瑞穗乡"
    }, {
      "label": "富里乡",
      "value": "富里乡"
    }, {
      "label": "秀林乡",
      "value": "秀林乡"
    }, {
      "label": "万荣乡",
      "value": "万荣乡"
    }, {
      "label": "卓溪乡",
      "value": "卓溪乡"
    }]
  }, {
    "label": "澎湖县",
    "value": "澎湖县",
    "children": [{
      "label": "马公市",
      "value": "马公市"
    }, {
      "label": "湖西乡",
      "value": "湖西乡"
    }, {
      "label": "白沙乡",
      "value": "白沙乡"
    }, {
      "label": "西屿乡",
      "value": "西屿乡"
    }, {
      "label": "望安乡",
      "value": "望安乡"
    }, {
      "label": "七美乡",
      "value": "七美乡"
    }]
  }]
}, {
  "label": "香港特别行政区",
  "value": "香港特别行政区",
  "children": [{
    "label": "香港岛",
    "value": "香港岛",
    "children": [{
      "label": "中西区",
      "value": "中西区"
    }, {
      "label": "湾仔区",
      "value": "湾仔区"
    }, {
      "label": "东区",
      "value": "东区"
    }, {
      "label": "南区",
      "value": "南区"
    }]
  }, {
    "label": "九龙",
    "value": "九龙",
    "children": [{
      "label": "油尖旺区",
      "value": "油尖旺区"
    }, {
      "label": "深水埗区",
      "value": "深水埗区"
    }, {
      "label": "九龙城区",
      "value": "九龙城区"
    }, {
      "label": "黄大仙区",
      "value": "黄大仙区"
    }, {
      "label": "观塘区",
      "value": "观塘区"
    }]
  }, {
    "label": "新界",
    "value": "新界",
    "children": [{
      "label": "荃湾区",
      "value": "荃湾区"
    }, {
      "label": "屯门区",
      "value": "屯门区"
    }, {
      "label": "元朗区",
      "value": "元朗区"
    }, {
      "label": "北区",
      "value": "北区"
    }, {
      "label": "大埔区",
      "value": "大埔区"
    }, {
      "label": "西贡区",
      "value": "西贡区"
    }, {
      "label": "沙田区",
      "value": "沙田区"
    }, {
      "label": "葵青区",
      "value": "葵青区"
    }, {
      "label": "离岛区",
      "value": "离岛区"
    }]
  }]
}, {
  "label": "澳门特别行政区",
  "value": "澳门特别行政区",
  "children": [{
    "label": "澳门半岛",
    "value": "澳门半岛",
    "children": [{
      "label": "花地玛堂区",
      "value": "花地玛堂区"
    }, {
      "label": "圣安多尼堂区",
      "value": "圣安多尼堂区"
    }, {
      "label": "大堂区",
      "value": "大堂区"
    }, {
      "label": "望德堂区",
      "value": "望德堂区"
    }, {
      "label": "风顺堂区",
      "value": "风顺堂区"
    }]
  }, {
    "label": "氹仔岛",
    "value": "氹仔岛",
    "children": [{
      "label": "嘉模堂区",
      "value": "嘉模堂区"
    }]
  }, {
    "label": "路环岛",
    "value": "路环岛",
    "children": [{
      "label": "圣方济各堂区",
      "value": "圣方济各堂区"
    }]
  }]
}];

exports.default = cityData;

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

/***/ }),

/***/ 1915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jump = __webpack_require__(2189);

var _jump2 = _interopRequireDefault(_jump);

var _func = __webpack_require__(2233);

var _scroll = __webpack_require__(2234);

var _hash = __webpack_require__(1917);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  offset: 0,
  scrollDuration: 400,
  keepLastAnchorHash: false
};

var Manager = function Manager() {
  var _this = this;

  _classCallCheck(this, Manager);

  this.addListeners = function () {
    window.addEventListener('scroll', _this.scrollHandler, false);
    window.addEventListener('hashchange', _this.handleHashChange);
  };

  this.removeListeners = function () {
    window.removeEventListener('scroll', _this.scrollHandler, false);
    window.removeEventListener('hashchange', _this.handleHashChange);
  };

  this.configure = function (config) {
    _this.config = _extends({}, defaultConfig, config);
  };

  this.goToTop = function () {
    if ((0, _scroll.getScrollTop)() === 0) return;
    _this.forcedHash = true;
    window.scroll(0, 0);
  };

  this.addAnchor = function (id, component) {
    // if this is the first anchor, set up listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.addListeners();
    }
    _this.forceHashUpdate();
    _this.anchors[id] = component;
  };

  this.removeAnchor = function (id) {
    delete _this.anchors[id];
    // if this is the last anchor, remove listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.removeListeners();
    }
  };

  this.handleScroll = function () {
    var _config = _this.config,
        offset = _config.offset,
        keepLastAnchorHash = _config.keepLastAnchorHash;

    var bestAnchorId = (0, _scroll.getBestAnchorGivenScrollLocation)(_this.anchors, offset);

    if (bestAnchorId && (0, _hash.getHash)() !== bestAnchorId) {
      _this.forcedHash = true;
      (0, _hash.updateHash)(bestAnchorId, false);
    } else if (!bestAnchorId && !keepLastAnchorHash) {
      (0, _hash.removeHash)();
    }
  };

  this.handleHashChange = function (e) {
    if (_this.forcedHash) {
      _this.forcedHash = false;
    } else {
      _this.goToSection((0, _hash.getHash)());
    }
  };

  this.goToSection = function (id) {
    var element = _this.anchors[id];
    if (element) {
      (0, _jump2.default)(element, {
        duration: _this.config.scrollDuration,
        offset: _this.config.offset
      });
    } else {
      // make sure that standard hash anchors don't break.
      // simply jump to them.
      element = document.getElementById(id);
      if (element) {
        (0, _jump2.default)(element, {
          duration: 0,
          offset: _this.config.offset
        });
      }
    }
  };

  this.anchors = {};
  this.forcedHash = false;
  this.config = defaultConfig;

  this.scrollHandler = (0, _func.debounce)(this.handleScroll, 100);
  this.forceHashUpdate = (0, _func.debounce)(this.handleHashChange, 1);
};

exports.default = new Manager();

/***/ }),

/***/ 1916:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.removeHash = exports.goToAnchor = exports.configureAnchors = exports.goToTop = undefined;

var _hash = __webpack_require__(1917);

Object.defineProperty(exports, 'goToAnchor', {
  enumerable: true,
  get: function get() {
    return _hash.updateHash;
  }
});
Object.defineProperty(exports, 'removeHash', {
  enumerable: true,
  get: function get() {
    return _hash.removeHash;
  }
});

var _ScrollableAnchor = __webpack_require__(2232);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollableAnchor).default;
  }
});

var _Manager = __webpack_require__(1915);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goToTop = exports.goToTop = _Manager2.default.goToTop;
var configureAnchors = exports.configureAnchors = _Manager2.default.configure;

/***/ }),

/***/ 1917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHash = exports.getHash = function getHash() {
  return decodeURI(window.location.hash.slice(1));
};

var updateHash = exports.updateHash = function updateHash(hash, affectHistory) {
  if (affectHistory) {
    window.location.hash = hash;
  } else {
    window.location.replace("#" + hash);
  }
};

// remove hash in url without affecting history or forcing reload
var removeHash = exports.removeHash = function removeHash() {
  history.replaceState("", document.title, window.location.pathname + window.location.search);
};

/***/ }),

/***/ 2053:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  *运维管理--运维信息的详情
                  *qiufh@bocspace.cn
                  */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _reactCustomScrollbars = __webpack_require__(336);

var _reactScrollableAnchor = __webpack_require__(1916);

var _reactScrollableAnchor2 = _interopRequireDefault(_reactScrollableAnchor);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactZmage = __webpack_require__(1522);

var _reactZmage2 = _interopRequireDefault(_reactZmage);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _ProjectStore = __webpack_require__(1660);

var _ProjectStore2 = _interopRequireDefault(_ProjectStore);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = _antd.Anchor.Link;
var TextArea = _antd.Input.TextArea;

var CheckboxGroup = _antd.Checkbox.Group;
var Option = _antd.Select.Option;


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

var costItemFlag = false;

var RepairDetails = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(RepairDetails, _React$Component);

	function RepairDetails(props) {
		_classCallCheck(this, RepairDetails);

		var _this = _possibleConstructorReturn(this, (RepairDetails.__proto__ || Object.getPrototypeOf(RepairDetails)).call(this, props));

		_this.state = {
			editable: false,
			confirmButtonShow: false,
			maintenanceType: [{ "name": "有偿维修", "value": 1 }, { "name": "免费保修", "value": 2 }],
			maintenanceValue: "有偿维修",
			maintenanceResultList: [{ "name": "未解决", "value": false }, { "name": "已解决", "value": true }],
			maintenanceResult: "已解决",
			maintenanceConfirmList: [{ "name": "未验收", "value": false }, { "name": "已验收", "value": true }],
			maintenanceConfirm: "已验收",
			acceptResultList: [{ "name": "同意维修", "value": 1, "checked": false }, { "name": "不同意维修", "value": 2, "checked": false }], //确认结果
			acceptContactList: [{ "name": "已联系", "value": 1, "checked": false }, { "name": "未联系", "value": 2, "checked": false }], // 联系维修
			costItem: [{ 'costName': '', 'cost': 0, 'acceptId': '' }], //费用明细
			totalCostItem: 0,
			record: {},
			recordbak: {},
			photoList: [],
			tableRowOpen: false,
			repairInfoEditable: false,
			confirmInfoEditable: false,
			repairRecordEditable: false,
			testr: ""
		};

		_this.handleChangeSelectTags = function (value) {
			var record = _this.state.record;

			var tempObj = { "tags": value.join(',') };
			var obj = Object.assign({}, record, tempObj);
			_this.setState({
				record: Object.assign(record, obj)
			});
		};

		_this.onChangeFormConfirmInput = function (type, e) {
			var record = _this.state.record;

			var typeArr = type.split('.');
			var key = '';
			if (typeArr[0] === 'accept') {
				key = typeArr[1];
				var tempObj = {};
				if (e._isAMomentObject != null && e._isAMomentObject == true) {
					tempObj[key] = e._i;
				} else {
					tempObj[key] = e.target.value;
				}

				var acceptObj = Object.assign({}, record['accept'], tempObj);
				_this.setState({
					record: Object.assign(record, { 'accept': acceptObj })
				});
			}
			if (typeArr[0] === 'record') {
				key = typeArr[1];
				var _tempObj = {};
				_tempObj[key] = e.target.value;
				var obj = Object.assign({}, record, _tempObj);
				_this.setState({
					record: Object.assign(record, obj)
				});
			}
			if (typeArr[0] === 'maintenanceRecord') {
				key = typeArr[1];
				var _tempObj2 = {};
				_tempObj2[key] = e.target.value;
				var maintenanceRecordObj = Object.assign({}, record['maintenanceRecord'], _tempObj2);
				_this.setState({
					record: Object.assign(record, { 'maintenanceRecord': maintenanceRecordObj })
				});
			}
		};

		_this.onChangeCheck = function (item, e) {
			var _this$state = _this.state,
			    acceptResultList = _this$state.acceptResultList,
			    acceptContactList = _this$state.acceptContactList,
			    record = _this$state.record;
			var accept = record.accept;


			if (item.name === "同意维修") {
				acceptResultList[0]['checked'] = e.target.checked;
				acceptResultList[1]['checked'] = !e.target.checked;
			}
			if (item.name === "不同意维修") {
				acceptResultList[0]['checked'] = !e.target.checked;
				acceptResultList[1]['checked'] = e.target.checked;

				acceptContactList[0]['checked'] = !e.target.checked;
				acceptContactList[1]['checked'] = e.target.checked;

				_this.props.form.setFieldsValue({
					contact: true
				});
			}
			if (item.name === "已联系") {
				acceptContactList[0]['checked'] = e.target.checked;
				acceptContactList[1]['checked'] = !e.target.checked;
			}
			if (item.name === "未联系") {
				acceptContactList[0]['checked'] = !e.target.checked;
				acceptContactList[1]['checked'] = e.target.checked;
				_this.props.form.setFieldsValue({
					"accept.unit": ""
				});
				_this.props.form.setFieldsValue({
					"accept.unitTelephone": ""
				});

				var acceptObj = Object.assign({}, record['accept'], { "unit": "", "unitTelephone": "" });
				_this.setState({
					record: Object.assign(record, { 'accept': acceptObj })
				});
			}
			_this.setState({ acceptResultList: acceptResultList, acceptContactList: acceptContactList });
		};

		_this.getCostItems = function () {
			var getFieldDecorator = _this.props.form.getFieldDecorator;
			var costItem = _this.state.costItem;

			return costItem.map(function (item, i) {
				return _react2.default.createElement(
					_antd.Form.Item,
					{ className: 'w' },
					_react2.default.createElement(
						_antd.Row,
						{ key: i },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
							getFieldDecorator('costName' + i, {
								initialValue: item.costName || "",
								rules: [{ required: true, message: '请输入费用名细' }]
							})(_react2.default.createElement(_antd.Input, { className: 'w', onChange: function onChange(e) {
									return _this.onChangeCostName('costName', i, e);
								} }))
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 11, lg: 11, xl: 11 },
							_react2.default.createElement(_antd.InputNumber, {
								defaultValue: 0,
								value: item.cost,
								min: 0,
								precision: 2,
								formatter: function formatter(value) {
									return (value + '\u5143').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
								},
								parser: function parser(value) {
									return value.replace(/\元\s?|(,*)/g, '');
								},
								onChange: function onChange(e) {
									return _this.onChangeCost('cost', i, e);
								},
								className: 'w'
							})
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 1, lg: 1, xl: 1 },
							_react2.default.createElement(_antd.Icon, { onClick: function onClick() {
									_this.removeCostItem(i);
								}, type: 'close-circle', style: { fontSize: "16px", fontWeight: "bold", color: "#00DDDD" } })
						)
					)
				);
			});
		};

		_this.getCostInfo = function (costItem) {
			return _react2.default.createElement(
				'ul',
				null,
				costItem.map(function (item, index) {
					return _react2.default.createElement(
						'li',
						null,
						item.costName,
						' : ',
						item.cost,
						'\u5143'
					);
				})
			);
		};

		_this.addCostItem = function () {
			var costItem = _this.state.costItem;

			var newItem = { 'costName': '', 'cost': 0, 'acceptId': '' };
			costItem.push(newItem);
			_this.setState({ costItem: costItem });
		};

		_this.removeCostItem = function (i) {
			var costItem = _this.state.costItem;

			costItem.splice(i, 1);
			_this.getTotalCost();
			_this.setState({ costItem: costItem }, function () {
				if (costItem.length === 0) {
					var newItem = { 'costName': '', 'cost': 0, 'acceptId': '' };
					costItem.push(newItem);
					setTimeout(function () {
						_this.setState({ costItem: costItem });
					}, 500);
				}
			});
		};

		_this.onChangeCost = function (key, i, value) {
			var costItem = _this.state.costItem;

			var currentItem = costItem[i];
			currentItem[key] = value;
			_this.setState({ costItem: costItem }, function () {
				_this.getTotalCost();
			});
		};

		_this.onChangeCostName = function (key, i, e) {
			var costItem = _this.state.costItem;

			var currentItem = costItem[i];
			currentItem[key] = e.target.value;
		};

		_this.getTotalCost = function () {
			var costItem = _this.state.costItem;

			var total = 0;
			costItem.map(function (item) {
				total += item.cost;
			});
			_this.setState({ totalCostItem: total });
		};

		_this.setTotalCostFree = function () {
			_this.setState({ totalCostItem: 0 });
		};

		_this.confirmInfoSubmit = function (e) {
			e.preventDefault();
			var setFieldsValue = _this.props.form.setFieldsValue;
			var _this$state2 = _this.state,
			    record = _this$state2.record,
			    acceptResultList = _this$state2.acceptResultList,
			    acceptContactList = _this$state2.acceptContactList,
			    costItem = _this$state2.costItem,
			    maintenanceType = _this$state2.maintenanceType,
			    maintenanceValue = _this$state2.maintenanceValue,
			    totalCostItem = _this$state2.totalCostItem;

			_this.props.form.validateFields(function (err, fieldsValue) {
				var result = acceptResultList.filter(function (item) {
					return item.checked;
				});
				if (result.length == 0) return;
				var contact = acceptContactList.filter(function (item) {
					return item.checked;
				});
				if (contact.length == 0) return;
				setFieldsValue({ result: result[0]['checked'] });
				setFieldsValue({ contact: contact[0]['checked'] });
				var mType = maintenanceType.filter(function (item) {
					return item.name === maintenanceValue;
				});

				if (contact[0]['name'] == "已联系") {
					//已联系时校验以下两值
					if (fieldsValue.accept.unit == "") return;
					if (fieldsValue.accept.unitTelephone == "") return;
				}

				costItem.forEach(function (item) {
					if (item.costName == "") costItemFlag = true;
				});

				if (costItemFlag) {
					// 如果费用明细中的名称为空的话阻止往下执行
					costItemFlag = false;
					return;
				}

				var resultObj = { "result": result[0]['value'] };
				var contactObj = { "contact": contact[0]['value'] };
				var maintenanceTypeObj = { "maintenanceType": mType[0]['value'] };
				var costItemObj = { "costItem": costItem };
				var costObj = { "cost": totalCostItem };
				var acceptUserNameObj = {};
				var acceptUserPhone = {};
				if (record.accept == null || record.accept.acceptUserName == null || record.accept.telephone == null) {
					acceptUserNameObj.acceptUserName = localStorage.getItem('username');
					acceptUserPhone.telephone = localStorage.getItem('userphone');
				}
				var acceptObj = Object.assign({}, record['accept'], resultObj, contactObj, costItemObj, costObj, maintenanceTypeObj, acceptUserNameObj, acceptUserPhone);

				var _Object$assign = Object.assign(record, { 'accept': acceptObj }),
				    key = _Object$assign.key,
				    params = _objectWithoutProperties(_Object$assign, ['key']);
				//console.log(params)


				_this.store.addOrUpdateRepairAcceptRecord(params).then(function (response) {
					if (response == true) {
						_antd.message.success('保存成功!');
						_this.setState({
							record: Object.assign(record, params), testr: resultObj.result == 1 ? "同意维修" : "不同意维修"
						}, function () {
							_this.props.handleDetailsSave(Object.assign(record, params));
							_this.props.form.setFieldsValue({ "accept.result": resultObj.result == 1 ? "同意维修" : "不同意维修" });
							_this.hideEditRepair();
						});
					} else {
						_antd.message.error('保存失败!');
					}
				});
			});
		};

		_this.handleMenuClick = function (e) {
			var costItem = _this.state.costItem;

			var value = e.item.props.children;
			_this.setState({
				maintenanceValue: value
			}, function () {
				if (value == "免费保修") {
					costItem = [];
					_this.setState({ costItem: costItem }, function () {
						_this.setTotalCostFree();
					});
				} else {
					_this.setState({ costItem: [{ 'costName': '', 'cost': 0, 'acceptId': '' }] });
				}
			});
		};

		_this.handleDropDownClick = function (type, e) {
			var record = _this.state.record;
			var maintenanceRecord = record.maintenanceRecord;

			var tempObj = {};
			tempObj[type] = e.key == 0 ? false : true;
			var maintenanceRecordObj = Object.assign({}, record['maintenanceRecord'], tempObj);
			_this.setState({
				record: Object.assign(record, { 'maintenanceRecord': maintenanceRecordObj })
			});
		};

		_this.collapseOnClick = function (key) {
			_this.props.collapseOnChange(key);
		};

		_this.editRepairData = function () {
			var record = _this.state.record;

			_this.setState({
				editable: true,
				confirmButtonShow: true,
				recordbak: Object.assign({}, record)
			});
		};

		_this.cancelEditRepairData = function () {
			var _this$props = _this.props,
			    code = _this$props.code,
			    statuslistid = _this$props.statuslistid,
			    allprostate = _this$props.allprostate,
			    record = _this$props.record;

			if (statuslistid != "") {
				window.location.href = '#/project/details?code=' + code + '&statuslistid=' + record.id;
				//window.location.reload();
			}
			if (allprostate != "") {
				window.location.href = '#/project/details/maintenanceinfo?code=' + code + '&allprostate=' + record.id;
				//window.location.reload();
			}
			if (code != "" && statuslistid == "" && allprostate == "") {
				window.location.href = '#/project/details?code=' + code + '&recordkey=' + record.key;
				//window.location.reload();
			}

			// const { recordbak } = this.state;
			// this.setState({record:recordbak},()=>{
			// 	this.props.form.setFieldsValue({
			// 		"record.itemName":recordbak.itemName,
			// 		"record.tags":recordbak.tags,
			// 		"record.description":recordbak.description,
			// 		"record.address":recordbak.address,
			// 		"record.telephone":recordbak.telephone,
			// 		"record.applicantUser":recordbak.applicantUser,
			// 		// "record.createTime":recordbak.createTime, //目前不可修改

			// 		"acceptUserName": recordbak.accept==null || recordbak.accept.acceptUserName==null? localStorage.getItem('username'): recordbak.accept.acceptUserName,
			// 		"accept.telephone":recordbak.accept==null || recordbak.accept.telephone==null? "": recordbak.accept.telephone,
			// 		"accept.shelfLife":recordbak.accept==null || recordbak.accept.shelfLife==null? "": recordbak.accept.shelfLife,
			// 		"accept.description":recordbak.accept==null || recordbak.accept.description==null? "": recordbak.accept.description,
			// 		"accept.maintenanceType":recordbak.accept==null || recordbak.accept.maintenanceType==null? "": recordbak.accept.maintenanceType,//nook
			// 		"accept.result":recordbak.accept==null || recordbak.accept.result==null? "": recordbak.accept.result,
			// 		"accept.contact":recordbak.accept==null || recordbak.accept.contact==null? "": recordbak.accept.contact,
			// 		"accept.unit":recordbak.accept==null || recordbak.accept.unit==null? "": recordbak.accept.unit,
			// 		"accept.unitTelephone":recordbak.accept==null || recordbak.accept.unitTelephone==null? "": recordbak.accept.unitTelephone,

			// 		"maintenanceRecord.result": recordbak.maintenanceRecord==null || recordbak.maintenanceRecord.result==null ? "" : recordbak.maintenanceRecord.result,
			// 		"maintenanceRecord.description":recordbak.maintenanceRecord==null || recordbak.maintenanceRecord.description==null ? "" : recordbak.maintenanceRecord.description,
			// 		"maintenanceRecord.confirmation":recordbak.maintenanceRecord==null || recordbak.maintenanceRecord.confirmation==null ? "" : recordbak.maintenanceRecord.confirmation,
			// 		"maintenanceRecord.confirmationName":recordbak.maintenanceRecord==null || recordbak.maintenanceRecord.confirmationName==null ? "" :  recordbak.maintenanceRecord.confirmationName,

			// 	});
			// })
		};

		_this.hideEditRepair = function () {
			_this.setState({
				editable: false,
				confirmButtonShow: false
			});
		};

		_this.autochange = function (e) {
			var record = _this.state.record;

			var acceptObj = Object.assign({}, record['accept'], { 'unit': e });
			_this.setState({
				record: Object.assign(record, { 'accept': acceptObj })
			});
		};

		_this.autoselect = function (value) {
			var record = _this.state.record;

			var acceptObj = Object.assign({}, record['accept'], { 'unit': value });
			_this.setState({
				record: Object.assign(record, { 'accept': acceptObj })
			});
		};

		_this.store = _this.props.store;
		return _this;
	}

	_createClass(RepairDetails, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			this.setState({
				record: this.props.record
			}, function () {
				var _state = _this2.state,
				    acceptResultList = _state.acceptResultList,
				    acceptContactList = _state.acceptContactList;
				var _props$record = _this2.props.record,
				    accept = _props$record.accept,
				    state = _props$record.state;

				if (accept != null) {
					var maintenanceType = accept.maintenanceType,
					    costItem = accept.costItem,
					    result = accept.result,
					    contact = accept.contact;

					if (maintenanceType == 2) {
						_this2.setState({ maintenanceValue: '免费保修', costItem: [] });
					}

					if (costItem.length > 0) {
						_this2.setState({ costItem: costItem }, function () {
							_this2.getTotalCost();
						});
					}

					if (result != null) {
						if (result == 1) {
							acceptResultList[0]['checked'] = true;
						}
						if (result == 2) {
							acceptResultList[1]['checked'] = true;
						}

						_this2.setState({ acceptResultList: acceptResultList });
					}

					if (contact != null) {
						if (contact == 1) {
							acceptContactList[0]['checked'] = true;
						}
						if (contact == 2) {
							acceptContactList[1]['checked'] = true;
						}

						_this2.setState({ acceptContactList: acceptContactList });
					}
				}

				if (accept != null && accept.result != null) {
					//专门处理确认结果
					_this2.setState({ testr: accept.result == 1 ? "同意维修" : "不同意维修" });
				}

				if (state != null) {
					_this2.setState({ editable: state != 1 ? false : true });
				}
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var project = mobx.toJS(this.store.project);
			if (project && project.id) {
				this.store.getSupplierListByprojectId(project.id);
			}
		}
	}, {
		key: 'initInfo',
		value: function initInfo() {
			var record = this.state.record;
			var accept = record.accept;
			var costItem = accept.costItem;

			if (costItem.length > 0) {
				this.setState({ costItem: costItem });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state2 = this.state,
			    editable = _state2.editable,
			    confirmButtonShow = _state2.confirmButtonShow,
			    acceptResultList = _state2.acceptResultList,
			    acceptContactList = _state2.acceptContactList,
			    totalCostItem = _state2.totalCostItem,
			    record = _state2.record,
			    maintenanceType = _state2.maintenanceType,
			    maintenanceValue = _state2.maintenanceValue,
			    repairInfoEditable = _state2.repairInfoEditable,
			    maintenanceResultList = _state2.maintenanceResultList,
			    maintenanceConfirmList = _state2.maintenanceConfirmList,
			    testr = _state2.testr;
			var accept = record.accept,
			    product = record.product,
			    project = record.project,
			    maintenanceRecord = record.maintenanceRecord,
			    acceptTime = record.acceptTime;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 12 }
				},
				wrapperCol: {
					xs: { span: 12 },
					sm: { span: 12 }
				}
			};
			console.log(mobx.toJS(this.store.supplierList), 'ooo');
			var formItemLayout2 = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 6 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 16 }
				}
			};

			var getMaintanceType = _react2.default.createElement(
				_reactCustomScrollbars.Scrollbars,
				_defineProperty({ style: { width: '100%' } }, 'style', { height: 200 }),
				_react2.default.createElement(
					_antd.Menu,
					{ style: { width: '100%' }, className: 'con_menu', onClick: this.handleMenuClick },
					maintenanceType.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Menu.Item,
							{ key: item.value },
							item.name
						);
					})
				)
			);

			var getMaintanceResult = _react2.default.createElement(
				_reactCustomScrollbars.Scrollbars,
				_defineProperty({ style: { width: '100%' } }, 'style', { height: 200 }),
				_react2.default.createElement(
					_antd.Menu,
					{ style: { width: '100%' }, className: 'con_menu', onClick: function onClick(e) {
							return _this3.handleDropDownClick('result', e);
						} },
					maintenanceResultList.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Menu.Item,
							{ key: item.value ? "1" : "0" },
							item.name
						);
					})
				)
			);

			var getMaintanceConfirm = _react2.default.createElement(
				_reactCustomScrollbars.Scrollbars,
				_defineProperty({ style: { width: '100%' } }, 'style', { height: 200 }),
				_react2.default.createElement(
					_antd.Menu,
					{ style: { width: '100%' }, className: 'con_menu', onClick: function onClick(e) {
							return _this3.handleDropDownClick('confirmation', e);
						} },
					maintenanceConfirmList.map(function (item, index) {
						return _react2.default.createElement(
							_antd.Menu.Item,
							{ key: item.value ? "1" : "0" },
							item.name
						);
					})
				)
			);

			var repairInfo = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ style: { display: "flex", justifyContent: "space-between" } },
					_react2.default.createElement(
						'h3',
						{ className: 'kanban_title mb20' },
						'\u62A5\u4FEE\u4FE1\u606F'
					),
					' ',
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0)', onClick: function onClick() {
								_this3.editRepairData();
							} },
						"编辑"
					)
				),
				_react2.default.createElement(
					_antd.Form,
					formItemLayout,
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 0] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u62A5\u4FEE\u9879\u76EE', className: 'w' },
								getFieldDecorator('record.itemName', {
									initialValue: record.itemName || "",
									rules: [{ required: false, message: '请输入报修项目' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("record.itemName", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u6545\u969C\u6807\u7B7E', className: 'w' },
								getFieldDecorator('record.tags', {
									initialValue: record == null || record.tags == null ? [] : record.tags == "" ? [] : record.tags.split(','),
									rules: [{ required: false, message: '请输入故障标签' }]
								})(_react2.default.createElement(
									_antd.Select,
									{ disabled: !editable, className: !editable ? "noSelectEditLabel" : "", mode: 'tags', placeholder: '', onChange: this.handleChangeSelectTags },
									[].map(function (item, index) {
										return _react2.default.createElement(
											Option,
											{ key: index.toString(36) + index },
											item
										);
									})
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u6545\u969C\u63CF\u8FF0', className: 'w' },
								getFieldDecorator('record.description', {
									initialValue: record.description || "",
									rules: [{ required: false, message: '请输入故障描述' }]
								})(_react2.default.createElement(TextArea, { rows: 1, disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("record.description", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u62A5\u4FEE\u65F6\u95F4', className: 'w' },
								getFieldDecorator('record.createTime', {
									initialValue: (0, _moment2.default)(record.createTime).format("YYYY.MM.DD.HH:mm") || "",
									rules: [{ required: false, message: '请输入报修时间' }]
								})(_react2.default.createElement(_antd.Input, { disabled: true, className: "noEditLabel" })
								// <DatePicker onChange={(e)=>{this.onChangeFormConfirmInput("record.createTime", e)}}  disabled={!editable} className={ !editable ? "noDateEditLabel":"" } showTime format="YYYY.MM.DD.HH:mm" />,
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u670D\u52A1\u5730\u5740', className: 'w' },
								getFieldDecorator('record.address', {
									initialValue: record.address || "",
									rules: [{ required: false, message: '请输入服务地址' }]
								})(_react2.default.createElement(TextArea, { rows: 1, disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("record.address", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u62A5\u4FEE\u4EBA', className: 'w' },
								getFieldDecorator('record.applicantUser', {
									initialValue: record.applicantUser || "",
									rules: [{ required: false, message: '请输入报修人' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("record.applicantUser", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u8054\u7CFB\u7535\u8BDD', className: 'w' },
								getFieldDecorator('record.telephone', {
									initialValue: record.telephone || "",
									rules: [{ required: false, message: '请输入联系电话' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("record.telephone", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ style: { height: '94px' }, xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u6545\u969C\u7167\u7247', className: 'w' },
								getFieldDecorator('record.attachment', {
									rules: [{ required: false, message: '请选择' }]
								})(_react2.default.createElement(
									'div',
									{ className: 'repairPic' },
									record.attachment != null ? record.attachment.filter(function (item, index) {
										return index < 3;
									}).map(function (item, index) {
										return _react2.default.createElement(_reactZmage2.default, {
											set: record.attachment.map(function (item, index) {
												return Object.assign({}, { 'src': item.filePath });
											}),
											defaultPage: index,
											key: index + "phtoto",
											alt: "共" + record.attachment.length + '张照片',
											style: { cursor: "pointer", width: "33%", height: "60px" },
											src: item.filePath
										});
									}) : _react2.default.createElement(
										'div',
										{ style: { width: "100%", height: "60px", textAlign: "center" } },
										'\u6682\u65E0\u6545\u969C\u7167\u7247'
									)
								))
							)
						)
					)
				)
			);

			var confirmInfoView = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					{ className: 'kanban_title mb20' },
					'\u786E\u8BA4\u4FE1\u606F'
				),
				_react2.default.createElement(
					_antd.Form,
					formItemLayout,
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u53D7\u7406\u4EBA', className: 'w' },
								getFieldDecorator('accept.acceptUserName', {
									initialValue: accept == null || accept.acceptUserName == null ? localStorage.getItem('username') : accept.acceptUserName,
									rules: [{ required: false, message: '请输入受理人' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.acceptUserName", e);
									}, key: '01' }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u8054\u7CFB\u7535\u8BDD', className: 'w' },
								getFieldDecorator('accept.telephone', {
									initialValue: accept == null || accept.telephone == null ? localStorage.getItem('userphone') : accept.telephone,
									rules: [{ required: false, message: '请输入联系电话' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.telephone", e);
									}, key: '02' }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u8D28\u4FDD\u8303\u56F4', className: 'w' },
								getFieldDecorator('accept.shelfLife', {
									initialValue: accept == null || accept.shelfLife == null ? "" : accept.shelfLife,
									rules: [{ required: false, message: '请输入质保范围' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", key: '03', onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.shelfLife", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u95EE\u9898\u539F\u56E0', className: 'w' },
								getFieldDecorator('accept.description', {
									initialValue: accept == null || accept.description == null ? "" : accept.description,
									rules: [{ required: false, message: '请输入问题原因' }]
								})(_react2.default.createElement(TextArea, { rows: 3, disabled: !editable, className: !editable ? "noEditLabel" : "", key: '04', onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.description", e);
									} }))
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 0] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u7EF4\u4FEE\u8D39\u7528', className: 'w' },
								getFieldDecorator('accept.maintenanceType', {
									rules: [{ required: false, message: '请输入维修费用' }]
								})(_react2.default.createElement(
									_antd.Dropdown,
									{ disabled: !editable, className: !editable ? "noEditLabel" : "", overlay: getMaintanceType },
									_react2.default.createElement(
										_antd.Button,
										{ style: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center" } },
										maintenanceValue,
										' ',
										_react2.default.createElement(_antd.Icon, { type: 'down' })
									)
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u6240\u5C5E\u697C\u5B87', className: 'w' },
								getFieldDecorator('accept.buildingNumber', {
									initialValue: accept == null || accept.buildingNumber == null ? "" : accept.buildingNumber,
									rules: [{ required: false, message: '请输入质保范围' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "" }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u6240\u5C5E\u623F\u95F4', className: 'w' },
								getFieldDecorator('accept.roomNumber', {
									initialValue: accept == null || accept.roomNumber == null ? "" : accept.roomNumber,
									rules: [{ required: false, message: '请输入质保范围' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "" }))
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 0] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u8D39\u7528\u5408\u8BA1', className: 'w' },
								getFieldDecorator('accept.cost', {
									rules: [{ required: false, message: '请输入费用合计' }]
								})(_react2.default.createElement(
									_antd.Tooltip,
									{ placement: 'right', title: this.getCostInfo(accept == null || accept.costItem == null ? [] : accept.costItem) },
									_react2.default.createElement(
										'span',
										null,
										accept == null || accept.cost == null ? 0 : accept.cost,
										'\u5143'
									)
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u786E\u8BA4\u7ED3\u679C', className: 'w' },
								getFieldDecorator('accept.result', {
									initialValue: testr, //通过状态控制
									rules: [{ required: false, message: '请输入确认结果' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", key: '07' }))
							)
						),
						accept == null || accept.contact == null || accept.contact == 2 ? _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8054\u7CFB\u7EF4\u4FEE', className: 'w' },
									getFieldDecorator('accept.contact', {
										initialValue: "未联系",
										rules: [{ required: false, message: '请输入维修单位' }]
									})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", key: '08' }))
								)
							)
						) : _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u7EF4\u4FEE\u5355\u4F4D', className: 'w' },
									getFieldDecorator('accept.unit', {
										initialValue: accept == null || accept.unit == null ? "" : accept.unit,
										rules: [{ required: false, message: '请输入维修单位' }]
									})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", key: '08' }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8054\u7CFB\u7535\u8BDD', className: 'w' },
									getFieldDecorator('accept.unitTelephone', {
										initialValue: accept == null || accept.unitTelephone == null ? "" : accept.unitTelephone,
										rules: [{ required: false, message: '请输入联系电话' }]
									})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", key: '09' }))
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u53D7\u7406\u65F6\u95F4', className: 'w' },
								getFieldDecorator('acceptTime', {})(_react2.default.createElement(
									'span',
									null,
									acceptTime == null || acceptTime == 0 ? "" : (0, _moment2.default)(acceptTime).format("YYYY.MM.DD.HH:mm")
								))
							)
						)
					)
				)
			);

			var confirmInfoEdit = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_antd.Form,
					formItemLayout,
					_react2.default.createElement(
						'h3',
						{ className: 'kanban_title mb20' },
						'\u786E\u8BA4\u4FE1\u606F'
					),
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u53D7\u7406\u4EBA', className: 'w' },
								getFieldDecorator('acceptUserName', {
									initialValue: accept == null || accept.acceptUserName == null ? localStorage.getItem('username') : accept.acceptUserName,
									rules: [{ required: false, message: '请输入受理人' }]
								})(_react2.default.createElement(_antd.Input, { onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.acceptUserName", e);
									}, key: '01' }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u8054\u7CFB\u7535\u8BDD', className: 'w' },
								getFieldDecorator('accept.telephone', {
									initialValue: accept == null || accept.telephone == null ? localStorage.getItem('userphone') : accept.telephone,
									rules: [{ required: false, message: '请输入联系电话' }]
								})(_react2.default.createElement(_antd.Input, { onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.telephone", e);
									}, key: '02' }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u8D28\u4FDD\u8303\u56F4', className: 'w' },
								getFieldDecorator('shelfLife', {
									initialValue: accept == null || accept.shelfLife == null ? "" : accept.shelfLife,
									rules: [{ required: false, message: '请输入质保范围' }]
								})(_react2.default.createElement(_antd.Input, { key: '03', onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.shelfLife", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u95EE\u9898\u539F\u56E0', className: 'w' },
								getFieldDecorator('accept.description', {
									initialValue: accept == null || accept.description == null ? "" : accept.description,
									rules: [{ required: false, message: '请输入问题原因' }]
								})(_react2.default.createElement(TextArea, { rows: 3, key: '04', onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.description", e);
									} }))
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u7EF4\u4FEE\u8D39\u7528', className: 'w' },
								getFieldDecorator('mainproducer', {
									rules: [{ required: false, message: '请输入维修费用' }]
								})(_react2.default.createElement(
									_antd.Dropdown,
									{ overlay: getMaintanceType },
									_react2.default.createElement(
										_antd.Button,
										{ style: { width: '100%', display: 'flex', justifyContent: 'space-between' } },
										maintenanceValue,
										' ',
										_react2.default.createElement(_antd.Icon, { type: 'down' })
									)
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u6240\u5C5E\u697C\u5B87', className: 'w' },
								getFieldDecorator('buildingNumber', {
									initialValue: accept == null || accept.buildingNumber == null ? "" : accept.buildingNumber,
									rules: [{ required: false, message: '请输入质保范围' }]
								})(_react2.default.createElement(_antd.Input, { onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.buildingNumber", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u6240\u5C5E\u623F\u95F4', className: 'w' },
								getFieldDecorator('roomNumber', {
									initialValue: accept == null || accept.roomNumber == null ? "" : accept.roomNumber,
									rules: [{ required: false, message: '请输入质保范围' }]
								})(_react2.default.createElement(_antd.Input, { onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("accept.roomNumber", e);
									} }))
							)
						)
					),
					maintenanceValue == '有偿维修' ? _react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 0] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 18, xl: 18 },
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [2, 2] },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 },
									_react2.default.createElement(
										'span',
										{ style: { fontSize: "14px" } },
										'\u8D39\u7528\u660E\u7EC6\uFF1A'
									),
									_react2.default.createElement(_antd.Icon, { onClick: this.addCostItem, type: 'plus-circle', style: { fontSize: "16px", fontWeight: "bold", color: "#00DDDD" } })
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 18, sm: 18, md: 18, lg: 18, xl: 18 },
									this.getCostItems(),
									_react2.default.createElement(
										_antd.Row,
										{ gutter: [2, 2] },
										_react2.default.createElement(
											_antd.Col,
											{ style: { textAlign: 'right', paddingRight: '8px' }, span: 15 },
											_react2.default.createElement(
												'span',
												{ className: 'fwb' },
												'\u5408\u8BA1\uFF1A',
												(totalCostItem + '\u5143').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
											)
										)
									)
								)
							)
						)
					) : '',
					_react2.default.createElement(
						_antd.Row,
						{ type: 'flex', justify: 'end', style: { margin: "0" } },
						_react2.default.createElement(
							_antd.Col,
							{ style: { textAlign: 'right' }, span: '22' },
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [0, 0] },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u786E\u8BA4\u7ED3\u679C', className: 'w' },
										getFieldDecorator('result', {
											rules: [{ required: true, message: '请确认是否同意维修' }]
										})(_react2.default.createElement(
											'div',
											{ style: { textAlign: 'left', marginLeft: '8px !important' } },
											acceptResultList.map(function (item, index) {
												return _react2.default.createElement(
													_antd.Checkbox,
													{ key: index + "result", checked: item.checked, onChange: function onChange(e) {
															_this3.onChangeCheck(item, e);
														}, value: item.value },
													item.name
												);
											})
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u8054\u7CFB\u7EF4\u4FEE', className: 'w' },
										getFieldDecorator('contact', {

											rules: [{ required: true, message: '请确认是否联系' }]
										})(_react2.default.createElement(
											'div',
											{ style: { textAlign: 'left', marginLeft: '8px !important' } },
											acceptContactList.map(function (item, index) {
												return _react2.default.createElement(
													_antd.Checkbox,
													{ key: index + "result", checked: item.checked, onChange: function onChange(e) {
															_this3.onChangeCheck(item, e);
														}, value: item.value },
													item.name
												);
											})
										))
									)
								),
								acceptContactList[0]['checked'] ? _react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 24, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u7EF4\u4FEE\u5355\u4F4D', className: 'w' },
											getFieldDecorator('accept.unit', {
												initialValue: accept == null || accept.unit == null ? "" : accept.unit,
												rules: [{ required: true, message: '请输入维修单位' }]
											})(_react2.default.createElement(
												_antd.AutoComplete,
												{ style: { width: '100%' },
													onChange: this.autochange,
													onSelect: this.autoselect,
													onFocus: this.autoFocus
												},
												mobx.toJS(this.store.supplierList).map(function (item) {
													return _react2.default.createElement(
														_antd.AutoComplete.Option,
														{ key: item.id, value: item.name },
														item.name
													);
												})
											))
										),
										console.log(mobx.toJS(this.store.supplierList), '999')
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 24, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u8054\u7CFB\u7535\u8BDD', className: 'w' },
											getFieldDecorator('accept.unitTelephone', {
												initialValue: accept == null || accept.unitTelephone == null ? "" : accept.unitTelephone,
												rules: [{ required: true, message: '请输入联系电话' }]
											})(_react2.default.createElement(_antd.Input, { onChange: function onChange(e) {
													_this3.onChangeFormConfirmInput("accept.unitTelephone", e);
												}, key: '09' }))
										)
									)
								) : ""
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ style: confirmButtonShow && maintenanceRecord != null ? { display: "none" } : { display: "" } },
						_react2.default.createElement(
							_antd.Col,
							{ span: 18, style: { textAlign: 'right', paddingRight: '20%', marginTop: '30px' } },
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.cancelEditRepairData },
								'\u53D6\u6D88'
							),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.confirmInfoSubmit, style: { marginLeft: 8 }, type: 'primary', htmlType: 'submit' },
								'\u4FDD\u5B58'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 6, style: { textAlign: 'right', marginTop: '30px' } },
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0)', onClick: function onClick() {
										_this3.collapseOnClick(record.key);
									} },
								'\u6536\u8D77'
							)
						)
					)
				)
			);

			var maintenanceInfo = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					{ className: 'kanban_title mb20' },
					'\u7EF4\u4FEE\u4FE1\u606F'
				),
				_react2.default.createElement(
					_antd.Form,
					formItemLayout,
					_react2.default.createElement(
						_antd.Row,
						{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15] },
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u7EF4\u4FEE\u7ED3\u679C', className: 'w' },
								getFieldDecorator('maintenanceRecord.result', {
									initialValue: maintenanceRecord == null || maintenanceRecord.result == null ? "" : maintenanceRecord.result ? "已解决" : "未解决",
									rules: [{ required: false, message: '请输入维修结果' }]
								})(_react2.default.createElement(
									_antd.Dropdown,
									{ disabled: !editable, className: !editable ? "noEditLabel" : "", overlay: getMaintanceResult },
									_react2.default.createElement(
										_antd.Button,
										{ style: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center" } },
										maintenanceRecord == null || maintenanceRecord.result == null ? "" : maintenanceRecord.result ? "已解决" : "未解决",
										' ',
										_react2.default.createElement(_antd.Icon, { type: 'down' })
									)
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u7EF4\u4FEE\u63CF\u8FF0', className: 'w' },
								getFieldDecorator('maintenanceRecord.description', {
									initialValue: maintenanceRecord == null || maintenanceRecord.description == null ? "" : maintenanceRecord.description,
									rules: [{ required: false, message: '请输入维修描述' }]
								})(_react2.default.createElement(TextArea, { rows: 3, disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("maintenanceRecord.description", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u5BA2\u6237\u786E\u8BA4', className: 'w' },
								getFieldDecorator('maintenanceRecord.confirmation', {
									initialValue: maintenanceRecord == null || maintenanceRecord.confirmation == null ? "" : maintenanceRecord.confirmation ? "已验收" : "未验收",
									rules: [{ required: false, message: '请输入客户确认' }]
								})(_react2.default.createElement(
									_antd.Dropdown,
									{ disabled: !editable, className: !editable ? "noEditLabel" : "", overlay: getMaintanceConfirm },
									_react2.default.createElement(
										_antd.Button,
										{ style: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center" } },
										maintenanceRecord == null || maintenanceRecord.confirmation == null ? "" : maintenanceRecord.confirmation ? "已验收" : "未验收",
										' ',
										_react2.default.createElement(_antd.Icon, { type: 'down' })
									)
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ style: { height: '108px' }, xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u7EF4\u4FEE\u7167\u7247', className: 'w' },
								getFieldDecorator('maintenanceRecord.attachment', {
									rules: [{ required: false, message: '请输入维修照片' }]
								})(_react2.default.createElement(
									'div',
									{ className: 'repairPic' },
									maintenanceRecord == null || maintenanceRecord.attachment == null ? _react2.default.createElement(
										'div',
										{ style: { width: "100%", height: "60px", textAlign: "center" } },
										'\u6682\u65E0\u6545\u969C\u7167\u7247'
									) : maintenanceRecord.attachment.filter(function (item, index) {
										return index < 3;
									}).map(function (item, index) {
										return _react2.default.createElement(_reactZmage2.default, {
											set: maintenanceRecord.attachment.map(function (item, index) {
												return Object.assign({}, { 'src': item.filePath });
											}),
											defaultPage: index,
											key: index + "phtoto",
											style: { cursor: "pointer" },
											alt: "共" + maintenanceRecord.attachment.length + '张照片',
											src: item.filePath
										});
									})
								))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u786E\u8BA4\u4EBA\u59D3\u540D', className: 'w' },
								getFieldDecorator('maintenanceRecord.confirmationName', {
									initialValue: maintenanceRecord == null || maintenanceRecord.confirmationName == null ? "" : maintenanceRecord.confirmationName,
									rules: [{ required: false, message: '请输入确认人姓名' }]
								})(_react2.default.createElement(_antd.Input, { disabled: !editable, className: !editable ? "noEditLabel" : "", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("maintenanceRecord.confirmationName", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u786E\u8BA4\u65F6\u95F4', className: 'w' },
								getFieldDecorator('maintenanceRecord.confirmationTime', {
									initialValue: maintenanceRecord == null || maintenanceRecord.confirmationTime == null ? "" : (0, _moment2.default)(maintenanceRecord.confirmationTime).format("YYYY.MM.DD.HH:mm"),
									rules: [{ required: false, message: '请输入确认时间' }]
								})(_react2.default.createElement(_antd.Input, { disabled: true, className: "noEditLabel", onChange: function onChange(e) {
										_this3.onChangeFormConfirmInput("maintenanceRecord.confirmationTime", e);
									} }))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 6 },
							_react2.default.createElement(
								_antd.Form.Item,
								{ label: '\u786E\u8BA4\u4EBA\u7B7E\u540D', className: 'w' },
								getFieldDecorator('maintenanceRecord.signature', {
									rules: [{ required: false, message: '' }]
								})(_react2.default.createElement(
									'div',
									{ className: 'repairPic' },
									maintenanceRecord == null || maintenanceRecord.signature == null || maintenanceRecord.signature.filePath == null ? _react2.default.createElement(
										'div',
										{ style: { width: "100%", height: "60px", textAlign: "center" } },
										'\u6682\u65E0\u7B7E\u540D'
									) : _react2.default.createElement(_reactZmage2.default, { key: "sigphtoto", alt: '', src: maintenanceRecord.signature.filePath })
								))
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ style: confirmButtonShow ? { display: "none" } : { display: "" } },
						_react2.default.createElement(
							_antd.Col,
							{ span: 24, style: { textAlign: 'right', marginTop: '30px' } },
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0)', onClick: function onClick() {
										_this3.collapseOnClick(record.key);
									} },
								'\u6536\u8D77'
							)
						)
					),
					_react2.default.createElement(
						_antd.Row,
						{ style: !confirmButtonShow ? { display: "none" } : { display: "" } },
						_react2.default.createElement(
							_antd.Col,
							{ span: 18, style: { textAlign: 'right', paddingRight: '20%', marginTop: '30px' } },
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.cancelEditRepairData },
								'\u53D6\u6D88'
							),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: this.confirmInfoSubmit, style: { marginLeft: 8 }, type: 'primary', htmlType: 'submit' },
								'\u4FDD\u5B58'
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 6, style: { textAlign: 'right', marginTop: '30px' } },
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0)', onClick: function onClick() {
										_this3.collapseOnClick(record.key);
									} },
								'\u6536\u8D77'
							)
						)
					)
				)
			);

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 24 },
						_react2.default.createElement(
							_antd.Card,
							{ bordered: true, style: { width: '100%' } },
							repairInfo,
							_react2.default.createElement('div', { className: 'cb' }),
							editable ? "" : confirmInfoView,
							editable ? confirmInfoEdit : "",
							maintenanceRecord != null ? "" : _react2.default.createElement('div', { className: 'cb' }),
							maintenanceRecord != null ? maintenanceInfo : ""
						)
					)
				)
			);
		}
	}]);

	return RepairDetails;
}(_react2.default.Component)) || _class) || _class);
exports.default = RepairDetails;

/***/ }),

/***/ 2189:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Jump.js 1.0.1 - A small, modern, dependency-free smooth scrolling library.
 * Copyright (c) 2016 Michael Cavalea - https://github.com/callmecavs/jump.js
 * License: MIT
 */

!function(o,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):o.Jump=n()}(this,function(){"use strict";var o=function(o,n,e,t){return o/=t/2,o<1?e/2*o*o+n:(o--,-e/2*(o*(o-2)-1)+n)},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o},e=function(){function e(){return window.scrollY||window.pageYOffset}function t(o){return o.getBoundingClientRect().top+d}function i(o){v||(v=o),b=o-v,p=s(b,d,y,m),window.scrollTo(0,p),b<m?requestAnimationFrame(i):r()}function r(){window.scrollTo(0,d+y),c&&l&&(c.setAttribute("tabindex","-1"),c.focus()),"function"==typeof w&&w(),v=!1}function u(r){var u=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(m=u.duration||1e3,a=u.offset||0,w=u.callback,s=u.easing||o,l=u.a11y||!1,d=e(),"undefined"==typeof r?"undefined":n(r)){case"number":c=void 0,l=!1,f=d+r;break;case"object":c=r,f=t(c);break;case"string":c=document.querySelector(r),f=t(c)}switch(y=f-d+a,n(u.duration)){case"number":m=u.duration;break;case"function":m=u.duration(y)}requestAnimationFrame(i)}var c=void 0,d=void 0,f=void 0,a=void 0,s=void 0,l=void 0,y=void 0,m=void 0,v=void 0,b=void 0,p=void 0,w=void 0;return u},t=e();return t});

/***/ }),

/***/ 2232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(80);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Manager = __webpack_require__(1915);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollableAnchor = function (_Component) {
  _inherits(ScrollableAnchor, _Component);

  function ScrollableAnchor(props) {
    _classCallCheck(this, ScrollableAnchor);

    var _this = _possibleConstructorReturn(this, (ScrollableAnchor.__proto__ || Object.getPrototypeOf(ScrollableAnchor)).call(this, props));

    _this.id = props.id || props.children.ref;
    return _this;
  }

  _createClass(ScrollableAnchor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var element = _reactDom2.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);
      _Manager2.default.addAnchor(this.id, element);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _Manager2.default.removeAnchor(this.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          id = _props.id;


      return _react2.default.cloneElement(children, {
        ref: children.ref || id
      });
    }
  }]);

  return ScrollableAnchor;
}(_react.Component);

ScrollableAnchor.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string
};
exports.default = ScrollableAnchor;

/***/ }),

/***/ 2233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
var debounce = exports.debounce = function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = undefined;
    var args = _arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ 2234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollTop = exports.getScrollTop = function getScrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop;
};

// get vertical offsets of element, taking scrollTop into consideration
var getElementOffset = exports.getElementOffset = function getElementOffset(element) {
  var scrollTop = getScrollTop();

  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      bottom = _element$getBoundingC.bottom;

  return {
    top: Math.floor(top + scrollTop),
    bottom: Math.floor(bottom + scrollTop)
  };
};

// does scrollTop live within element bounds?
var doesElementContainScrollTop = exports.doesElementContainScrollTop = function doesElementContainScrollTop(element) {
  var extraOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var scrollTop = getScrollTop();
  var offsetTop = getElementOffset(element).top + extraOffset;
  return scrollTop >= offsetTop && scrollTop < offsetTop + element.offsetHeight;
};

// is el2's location more relevant than el2,
// parent-child relationship aside?
var checkLocationRelevance = exports.checkLocationRelevance = function checkLocationRelevance(el1, el2) {
  var _getElementOffset = getElementOffset(el1),
      top1 = _getElementOffset.top,
      bottom1 = _getElementOffset.bottom;

  var _getElementOffset2 = getElementOffset(el2),
      top2 = _getElementOffset2.top,
      bottom2 = _getElementOffset2.bottom;

  if (top1 === top2) {
    if (bottom1 === bottom2) {
      // top and bottom of compared elements are the same,
      // so return one randomly in a deterministic way
      return el1 < el2;
    }
    // top of compared elements is the same, so return whichever
    // element has its bottom higher on the page
    return bottom2 < bottom1;
  }
  // top of compared elements differ, so return true
  // if tested element has its top lower on the page
  return top2 > top1;
};

// check if el2 is more relevant than el1, considering child-parent
// relationships as well as node location.
var checkElementRelevance = exports.checkElementRelevance = function checkElementRelevance(el1, el2) {
  if (el1.contains(el2)) {
    // el2 is child, so it gains relevance priority
    return true;
  } else if (!el2.contains(el1) && checkLocationRelevance(el1, el2)) {
    // el1 and el2 are unrelated, but el2 has a better location,
    // so it gains relevance priority
    return true;
  }
  return false;
};

// given a set of anchors, find which one is, given the following logic:
// 1. children nodes are more relevant than parent nodes
// 2. if neither node contains the other, and their top locations differ,
//    the node with the top lower on the page is more relevant
// 3. if neither node contains the other, and their top locations are the same,
//    the node with the bottom higher on the page is more relevant
// 4. if neither node contains the other, and their top and bottom locations
//    are the same, a node is chosen at random, in a deterministic way,
//    to be more relevant.
var getBestAnchorGivenScrollLocation = exports.getBestAnchorGivenScrollLocation = function getBestAnchorGivenScrollLocation(anchors, offset) {
  var bestId = void 0,
      bestElement = void 0;

  Object.keys(anchors).forEach(function (id) {
    var element = anchors[id];
    if (doesElementContainScrollTop(element, offset)) {
      if (!bestElement || checkElementRelevance(bestElement, element)) {
        bestElement = element;
        bestId = id;
      }
    }
  });
  return bestId;
};

/***/ })

});
//# sourceMappingURL=15-afa7d4b4bae6ff2924e9.1629092961041.js.map