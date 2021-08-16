webpackJsonp([13],{

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class; /*
                         *销售订单
                         *dangw@bocspace.cn
                         */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

var _antd = __webpack_require__(17);

var _OrderSuccess = __webpack_require__(2048);

var _OrderSuccess2 = _interopRequireDefault(_OrderSuccess);

var _immutable = __webpack_require__(184);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _uuid = __webpack_require__(79);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _reactZmage = __webpack_require__(1522);

var _reactZmage2 = _interopRequireDefault(_reactZmage);

var _reactUnityWebgl = __webpack_require__(2237);

var _reactUnityWebgl2 = _interopRequireDefault(_reactUnityWebgl);

var _styles = __webpack_require__(2177);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _antd.Input.TextArea;

var obj = { add: "新增", edit: "编辑", view: "查看" };

window.unityCommand = null;
window.unityContent = null;

var unityContent = new _reactUnityWebgl.UnityContent('./unitywebgl/UnityBuild/ncop.json', './unitywebgl/UnityBuild/UnityLoader.js');

unityContent.on('CallFuncJS', function (paraName) {
	console.log('CallFuncJS===========>', paraName);
	// eval(paraName);
});

var unityCommand = new Map();

var SalesDetal = (_dec = (0, _mobxReact.inject)('OrderStore'), _dec2 = _antd.Form.create(), _dec(_class = (0, _reactRouterDom.withRouter)(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(SalesDetal, _React$Component);

	function SalesDetal(props) {
		_classCallCheck(this, SalesDetal);

		var _this2 = _possibleConstructorReturn(this, (SalesDetal.__proto__ || Object.getPrototypeOf(SalesDetal)).call(this, props));

		_this2.init = function (status, id) {
			if (status == "view" || status == "edit") {
				// 查看
				_this2.store.getSalesOrderById({ id: id }).then(function (res) {
					if (res != null) {
						_this2.store.salesObj = Object.assign({}, res);
						_this2.setState({
							logoUrls: res.logoUrl == null || res.logoUrl == "" ? [] : [{
								uid: "!" + (0, _uuid.v4)(),
								name: _this2.transTxt(res),
								status: 'done',
								url: res.logoUrl,
								fileId: "!" + (0, _uuid.v4)(),
								fileName: _this2.transTxt(res),
								filePath: res.logoUrl,
								id: "!" + (0, _uuid.v4)()
							}]
						});
					}
				});
			} else if (status == "add") {
				// 新增
				_this2.store.newSalesOrder().then(function (res) {
					if (res != null) {
						_this2.store.salesObj = Object.assign(res, {
							"orderLabor": res.orderLabor == null ? [{
								"id": "",
								"mainId": "",
								"size": "6055*2990*3000mm",
								"naked": "是",
								"channelType": "翼闸",
								"lineEmbedded": "是",
								"safetyDoor": "是",
								"channelEmbedded": "是",
								"roomPlace": "靠左",
								"haveFurniture": "是",
								"counts": 1,
								"otherAsk": "",
								"rendering": "",
								"ncopModelId": "",
								"atts": [],
								"number": ""
							}] : res.orderLabor,
							"constructionConditions": res.constructionConditions == null ? {
								"id": "",
								"mainId": "",
								"isokBasis": "",
								"isokRoad": "",
								"isokLifting": "",
								"isokElectricity": "",
								"atts": []
							} : Object.assign(res.constructionConditions, {
								"atts": res.constructionConditions.atts == null ? [] : res.constructionConditions.atts
							})
						});
						_this2.setState({
							logoUrls: res.logoUrl == null || res.logoUrl == "" ? [] : [{
								uid: "!" + (0, _uuid.v4)(),
								name: _this2.transTxt(res),
								status: 'done',
								url: res.logoUrl,
								fileId: "!" + (0, _uuid.v4)(),
								fileName: _this2.transTxt(res),
								filePath: res.logoUrl,
								id: "!" + (0, _uuid.v4)()
							}]
						});
					}
				});
			}
		};

		_this2.handleAdd = function (type) {
			var customList = JSON.parse(JSON.stringify(_this2.store.salesObj[type]));
			var len = customList.length;
			var current = customList[len - 1];
			_this2.handleJust(current, function () {
				if (current.rendering == null || current.rendering == "") {
					_antd.message.warn("效果图是必填项");
					return false;
				}
				// 复制数组的最后一个
				_this2.store.salesObj[type] = [].concat(_toConsumableArray(customList), [current]);
			});
		};

		_this2.handleDelete = function (type, index) {
			var customList = JSON.parse(JSON.stringify(_this2.store.salesObj[type]));
			var list = (0, _immutable.List)(customList);
			_this2.store.salesObj[type] = Object.assign([], list.delete(index).toJS());
		};

		_this2.handleChange = function (type, field, index, e) {
			var value = typeof e.target.type == "text" ? e.target.value : e.target.value;
			var customList = JSON.parse(JSON.stringify(_this2.store.salesObj[type]));
			var list = (0, _immutable.List)(customList);
			// 全高闸特殊控制 联动
			if (field == "channelType" && value == "全高闸") {
				list.update(index, function (val) {
					val["safetyDoor"] = "是";
					val[field] = value;
					return val;
				});
				_this2.props.form.setFieldsValue(_defineProperty({}, "safetyDoor" + index, "是"));
			} else {
				list.update(index, function (val) {
					val[field] = value;
					return val;
				});
			}
			_this2.store.salesObj[type] = Object.assign([], list.toJS());
		};

		_this2.handleNumChange = function (type, field, index, e) {
			var value = e;
			var customList = JSON.parse(JSON.stringify(_this2.store.salesObj[type]));
			var list = (0, _immutable.List)(customList);
			list.update(index, function (val) {
				val[field] = value;
				return val;
			});
			_this2.store.salesObj[type] = Object.assign([], list.toJS());
		};

		_this2.handleChange2 = function (type, field, e) {
			var obj = JSON.parse(JSON.stringify(_this2.store.salesObj[type]));
			obj[field] = e.target.value;
			_this2.store.salesObj[type] = Object.assign({}, obj);
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();

			var salesObj = JSON.parse(JSON.stringify(_this2.store.salesObj));
			// 照片校验
			if (salesObj.constructionConditions.atts == null || salesObj.constructionConditions.atts.length == 0) {
				_antd.message.warn("照片是必填项");
				return false;
			}

			_this2.props.form.validateFields(function (err, values) {
				console.log(err, values, '保存');
				if (!err) {
					var projectName = values.projectName,
					    customerCompany = values.customerCompany,
					    deliveryAddress = values.deliveryAddress,
					    channel = values.channel,
					    customerPeople = values.customerPeople,
					    channelPeople = values.channelPeople,
					    customerPhone = values.customerPhone,
					    channelPhone = values.channelPhone,
					    agreedTime = values.agreedTime;

					var params = Object.assign(salesObj, {
						projectName: projectName,
						customerCompany: customerCompany,
						deliveryAddress: deliveryAddress,
						channel: channel,
						customerPeople: customerPeople,
						channelPeople: channelPeople,
						customerPhone: customerPhone,
						channelPhone: channelPhone,
						agreedTime: (0, _moment2.default)(agreedTime).valueOf(),
						constructionConditions: Object.assign(mobx.toJS(salesObj.constructionConditions), {
							atts: mobx.toJS(salesObj.constructionConditions).atts == null ? [] : mobx.toJS(salesObj.constructionConditions).atts.map(function (item) {
								return Object.assign({
									fileId: item.fileId,
									fileName: item.fileName,
									filePath: item.filePath,
									id: item.id
								});
							})
						})
					});
					_this2.store.saveSalesOrder({
						order: params,
						saveType: 1
					}).then(function (res) {
						if (res) {
							_antd.message.success('保存成功');
							// 更新数据
							_this2.store.salesObj = Object.assign({}, res);
						}
					});
				}
			});
		};

		_this2.handleOrder = function (e) {
			e.preventDefault();
			var salesObj = JSON.parse(JSON.stringify(_this2.store.salesObj));
			// 照片校验
			if (salesObj.constructionConditions.atts == null || salesObj.constructionConditions.atts.length == 0) {
				_antd.message.warn("照片是必填项");
				return false;
			}
			_this2.props.form.validateFields(function (err, values) {
				if (!err) {
					var projectName = values.projectName,
					    customerCompany = values.customerCompany,
					    deliveryAddress = values.deliveryAddress,
					    channel = values.channel,
					    customerPeople = values.customerPeople,
					    channelPeople = values.channelPeople,
					    customerPhone = values.customerPhone,
					    channelPhone = values.channelPhone,
					    agreedTime = values.agreedTime;

					var params = Object.assign(salesObj, {
						projectName: projectName,
						customerCompany: customerCompany,
						deliveryAddress: deliveryAddress,
						channel: channel,
						customerPeople: customerPeople,
						channelPeople: channelPeople,
						customerPhone: customerPhone,
						channelPhone: channelPhone,
						agreedTime: (0, _moment2.default)(agreedTime).valueOf(),
						placeOrderTime: mobx.toJS(salesObj).placeOrderTime == 0 ? null : mobx.toJS(salesObj).placeOrderTime,
						constructionConditions: Object.assign(mobx.toJS(salesObj.constructionConditions), {
							atts: mobx.toJS(salesObj.constructionConditions).atts == null ? [] : mobx.toJS(salesObj.constructionConditions).atts.map(function (item) {
								return Object.assign({
									fileId: item.fileId,
									fileName: item.fileName,
									filePath: item.filePath,
									id: item.id
								});
							})
						})
					});
					_this2.store.saveSalesOrder({
						order: params,
						saveType: 1
					}).then(function (res) {
						if (res) {
							// 下单接口
							_this2.store.buildPurchasingOrder({ salesOrderId: res.id }).then(function (res) {
								if (res) {
									_this2.setState({
										visible: true
									});
									// 更新销售订单数据
									_this2.store.salesObj = Object.assign({}, res);
								} else {
									_antd.message.error("下单失败");
								}
							});
						}
					});
				}
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

			var obj = JSON.parse(JSON.stringify(_this2.store.salesObj["constructionConditions"]));
			obj["atts"] = Object.assign([], arr);
			_this2.store.salesObj["constructionConditions"] = Object.assign({}, obj);
		};

		_this2.handleLogo = function (type, params) {
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

			var obj = JSON.parse(JSON.stringify(_this2.store.salesObj));
			obj.logoUrl = arr.length == 0 ? "" : arr[0].filePath;
			_this2.store.salesObj = Object.assign({}, obj);
			_this2.setState({
				logoUrls: arr
			});
		};

		_this2.handleBack = function () {
			_this2.props.history.push("/order?key=1");
		};

		_this2.transTxt = function (fields) {
			var logoName = void 0;
			if (fields.logoUrl != null && fields.logoUrl != "") {
				//获取最后一个.的位置
				var index = fields.logoUrl.lastIndexOf(".");
				//获取后缀
				var ext = fields.logoUrl.substr(index + 1);
				logoName = "企业logo." + ext;
			}
			return logoName;
		};

		_this2.handleEdit = function () {
			var _this2$store = _this2.store,
			    isSales = _this2$store.isSales,
			    salesObj = _this2$store.salesObj;

			var obj = JSON.parse(JSON.stringify(salesObj));
			var createUserId = obj.createUserId;

			var userid = localStorage.getItem('userid');
			if (userid != createUserId && isSales) {
				_antd.message.warn("您没有编辑权限！");
				return false;
			}
			_this2.props.history.push("/order/sales?status=edit");
		};

		_this2.onClose = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.handleBack();
			});
		};

		_this2.handleView = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.props.history.push("/order/sales?status=view");
			});
		};

		_this2.buildDesignSketch = function (index) {
			var customList = JSON.parse(JSON.stringify(_this2.store.salesObj["orderLabor"]));
			var current = customList[index];
			var elementId = 'PSE8C0EHISSEMDSA';
			_this2.handleJust(current, function () {
				unityContent.on('GetUrlParamFun', function (paraName) {
					return elementId;
				});
				unityContent.on('progress', function (progression) {
					if (progression === 1) {
						_this2.snapshotCommand({ 'current': ['尺寸', current.size, '闸机种类', current.channelType, '是否配安全门', current.safetyDoor, '保安室位置', current.roomPlace, '是否裸仓', current.naked, '穿线管预埋', current.lineEmbedded, '闸机固定预埋', current.channelEmbedded, '家具配备', current.haveFurniture], 'familyId': elementId });
					}
				});

				_this2.store.buildDesignSketch({ labor: current }).then(function (res) {
					if (res) {
						_this2.getReportUrl(res, index);
					}
				});
			});
		};

		_this2.updateDesignSketch = function (index) {
			var customList = JSON.parse(JSON.stringify(_this2.store.salesObj["orderLabor"]));
			var current = customList[index];
			var elementId = 'PSE8C0EHISSEMDSA';
			_this2.handleJust(current, function () {
				_this2.snapshotCommand({ 'current': ['尺寸', current.size, '闸机种类', current.channelType, '是否配安全门', current.safetyDoor + '', '保安室位置', current.roomPlace, '是否裸仓', current.naked, '穿线管预埋', current.lineEmbedded, '闸机固定预埋', current.channelEmbedded, '家具配备', current.haveFurniture], 'familyId': elementId });
				_this2.store.buildDesignSketch({ labor: current }).then(function (res) {
					if (res) {
						_this2.getReportUrl(res, index);
					}
				});
			});
		};

		_this2.getReportUrl = function (id, index) {
			var _this = _this2;
			var formData = JSON.parse(JSON.stringify(_this.store.salesObj));
			var orderLabor = formData.orderLabor;
			var params = {
				id: id
			};
			_this2.setState({
				isLoading: true
			});
			_this.timer = setInterval(function () {
				_this.store.getDownlaodUrl(params).then(function (res) {
					var url = res;
					if (url !== null) {
						_this2.setState({
							isLoading: false
						});
						// 保存效果图
						orderLabor[index].rendering = url || "http://crawl.ws.126.net/c97cc8142a1331b24bc156eeaf111fee.jpg";
						_this.store.salesObj = Object.assign(formData, {
							orderLabor: orderLabor
						});

						clearInterval(_this.timer);
					}
				});
			}, 3000);
		};

		_this2.handleJust = function (record, callback) {
			var size = record.size,
			    channelType = record.channelType,
			    safetyDoor = record.safetyDoor,
			    roomPlace = record.roomPlace,
			    naked = record.naked,
			    lineEmbedded = record.lineEmbedded,
			    channelEmbedded = record.channelEmbedded,
			    haveFurniture = record.haveFurniture,
			    counts = record.counts;

			if (size == null || size == "") {
				_antd.message.warn("尺寸是必填项");
				return false;
			}
			if (naked == null || naked == "") {
				_antd.message.warn("是否裸仓是必填项");
				return false;
			}
			if (channelType == null || channelType == "") {
				_antd.message.warn("闸机种类是必填项");
				return false;
			}
			if (safetyDoor == null || safetyDoor == "") {
				_antd.message.warn("安全门是必填项");
				return false;
			}
			if (roomPlace == null || roomPlace == "") {
				_antd.message.warn("保安室位置是必填项");
				return false;
			}
			if (lineEmbedded == null || lineEmbedded == "") {
				_antd.message.warn("穿线管预埋是必填项");
				return false;
			}
			if (channelEmbedded == null || channelEmbedded == "") {
				_antd.message.warn("闸机固定预埋是必填项");
				return false;
			}
			if (counts == null || counts == "") {
				_antd.message.warn("数量是必填项");
				return false;
			}
			if (haveFurniture == null || haveFurniture == "") {
				_antd.message.warn("家具配备是必填项");
				return false;
			}
			if (typeof callback == "function") {
				callback();
			}
		};

		_this2.fullscreen = function () {
			unityContent.setFullscreen(true);
		};

		_this2.snapshotCommand = function (params) {
			var command = {
				"func": "ExecuteCommand",
				"param": {
					"id": "1",
					"command": "ElementTool.SnapshotCommand",
					"parameters": [{ "name": "snapshot", "type": "string", "value": "false" }, {
						"name": "familyId",
						"type": "string",
						"value": params.familyId
					}, {
						"name": "cartesian",
						"type": "string",
						"value": JSON.stringify(params.current)
					}]
				}
			};
			_this2.unityQuery(command);
		};

		_this2.unityQuery = function (command) {
			console.log('command=====================>', JSON.stringify(command));

			unityContent.send('UIHandler', 'JSQuery', JSON.stringify(command));
		};

		_this2.store = _this2.props.OrderStore;
		_this2.state = {
			visible: false, // 下单成功
			status: "add",
			logoUrls: [], // 企业logo
			tip: '正在生成请稍等...',
			isLoading: false
		};
		return _this2;
	}

	_createClass(SalesDetal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {
			if (nextProps.location.search !== this.props.location.search) {
				var search = nextProps.location.search;
				var status = _url2.default.parse(search, true).query.status;
				this.setState({
					status: status
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			// 获取大文件上传sts
			this.store.getSts();
			var search = this.props.location.search;
			var status = _url2.default.parse(search, true).query.status;
			var id = _url2.default.parse(search, true).query.id;
			this.setState({
				status: status,
				logoUrls: [], // 企业logo
				visible: false, // 下单成功
				isLoading: false
			}, function () {
				_this3.init(status, id);
			});
		}

		// 详情复制


		// 删除复制


		// 文本


		// number


		// 立即下单


		// 修改


		// 生成效果图


		// 生成效果图


		// 间隔3秒获取pdf地址


		// 校验

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    visible = _state.visible,
			    status = _state.status,
			    logoUrls = _state.logoUrls;
			var _store = this.store,
			    salesObj = _store.salesObj,
			    ossData = _store.ossData,
			    purchaseObj = _store.purchaseObj;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					md: { span: 8 },
					sm: { span: 8 }
				},
				wrapperCol: {
					xs: { span: 24 },
					md: { span: 16 },
					sm: { span: 16 }
				}
			};
			var fields = mobx.toJS(salesObj); // 基本信息
			var orderLabor = fields.orderLabor || []; // 订单详情字段
			var constructionConditions = fields.constructionConditions || {}; // 现场施工条件字段
			var hidden = status == "view" ? true : false;
			var attachments = constructionConditions.atts == null ? [] : constructionConditions.atts.map(function (vitem, vindex) {
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
			});
			return _react2.default.createElement(
				'div',
				{ className: 'pb50' },
				_react2.default.createElement(
					_antd.Affix,
					{ offsetTop: 10 },
					_react2.default.createElement('div', { className: _styles2.default.webglContent })
				),
				_react2.default.createElement(
					_antd.Breadcrumb,
					{ separator: '>' },
					_react2.default.createElement(
						_antd.Breadcrumb.Item,
						null,
						_react2.default.createElement(
							'a',
							{ href: '#/order' },
							'订单管理'
						)
					),
					_react2.default.createElement(
						_antd.Breadcrumb.Item,
						null,
						_react2.default.createElement(
							'a',
							{ href: '#/order?key=1' },
							'销售订单'
						)
					),
					_react2.default.createElement(
						_antd.Breadcrumb.Item,
						null,
						obj[status],
						'\u8BA2\u5355'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mt30' },
					_react2.default.createElement(
						'h3',
						{ className: 'kanban_title mb20' },
						'\u57FA\u672C\u4FE1\u606F'
					),
					_react2.default.createElement(
						_antd.Form,
						_extends({}, formItemLayout, { className: 'ant-advanced-search-form' }),
						_react2.default.createElement(
							_antd.Row,
							{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 }, 15], style: { padding: 0, margin: "0" } },
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u5DE5\u7A0B\u540D\u79F0', className: 'w' },
									getFieldDecorator('projectName', {
										initialValue: fields.projectName || "",
										rules: [{ required: false, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u5BA2\u6237\u5355\u4F4D', className: 'w' },
									getFieldDecorator('customerCompany', {
										initialValue: fields.customerCompany || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8981\u8D27\u5730\u5740', className: 'w' },
									getFieldDecorator('deliveryAddress', {
										initialValue: fields.deliveryAddress || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6E20\u9053', className: 'w' },
									getFieldDecorator('channel', {
										initialValue: fields.channel || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u5BA2\u6237\u5BF9\u63A5\u4EBA', className: 'w' },
									getFieldDecorator('customerPeople', {
										initialValue: fields.customerPeople || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6E20\u9053\u5BF9\u63A5\u4EBA', className: 'w' },
									getFieldDecorator('channelPeople', {
										initialValue: fields.channelPeople || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u5BA2\u6237\u7535\u8BDD', className: 'w' },
									getFieldDecorator('customerPhone', {
										initialValue: fields.customerPhone || "",
										rules: [{ required: true, message: '此项是必填' }, { pattern: /^1[3|4|5|6|7|8|9][0-9]{9}$/, message: '请输入正确的手机号' }]
									})(_react2.default.createElement(_antd.InputNumber, { className: 'w', placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6E20\u9053\u7535\u8BDD', className: 'w' },
									getFieldDecorator('channelPhone', {
										initialValue: fields.channelPhone || "",
										rules: [{ required: true, message: '此项是必填' }, { pattern: /^1[3|4|5|6|7|8|9][0-9]{9}$/, message: '请输入正确的手机号' }]
									})(_react2.default.createElement(_antd.InputNumber, { className: 'w', placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8981\u8D27\u65F6\u95F4', className: 'w' },
									getFieldDecorator('agreedTime', {
										initialValue: fields.agreedTime == null || fields.agreedTime == 0 ? "" : (0, _moment2.default)((0, _moment2.default)(fields.agreedTime).format('YYYY-MM-DD'), "YYYY-MM-DD"),
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.DatePicker, {
										className: 'w',
										placeholder: '\u8BF7\u9009\u62E9',
										format: 'YYYY-MM-DD',
										disabled: hidden }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u4F01\u4E1Alogo', className: 'w' },
									getFieldDecorator('logoUrl', {
										initialValue: fields.logoUrl || "",
										rules: [{ required: false, message: '请输入' }]
									})(hidden ? fields.logoUrl == null || fields.logoUrl == "" ? _react2.default.createElement(
										'span',
										null,
										'\u65E0'
									) : _react2.default.createElement(_reactZmage2.default, { width: '64', height: '64', src: fields.logoUrl, alt: '' }) : _react2.default.createElement(_MyUpload2.default, {
										saveAttachment: this.handleLogo.bind(this, 'logoUrl'),
										disabled: hidden,
										multiple: true,
										accept: ".jpg,.jpeg,.gif,.png,.bmp",
										listType: 'picture-card',
										ossData: mobx.toJS(ossData),
										fileList: logoUrls,
										length: 1
									}))
								)
							),
							fields.id != null && fields.id != "" ? _react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, className: fields.id != null && fields.id != "" ? "" : "hidden", style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8BA2\u5355\u7F16\u53F7', className: 'w' },
									getFieldDecorator('serial', {
										initialValue: fields.serial || "",
										rules: [{ required: fields.id == null || fields.id == "" ? false : true, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { className: 'w', placeholder: '\u8BF7\u8F93\u5165', disabled: true }))
								)
							) : null,
							fields.id != null && fields.id != "" ? _react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, className: fields.id != null && fields.id != "" ? "" : "hidden", style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8BA2\u5355\u65F6\u95F4', className: 'w' },
									getFieldDecorator('placeOrderTime', {
										initialValue: fields.placeOrderTime || "",
										rules: [{ required: false, message: '此项是必填' }]
									})(_react2.default.createElement(_antd.Input, { className: 'w', placeholder: '\u8BF7\u8F93\u5165', disabled: true }))
								)
							) : null
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mt30' },
					_react2.default.createElement(
						'h3',
						{ className: 'kanban_title mb20' },
						'\u8BA2\u5355\u8BE6\u60C5'
					),
					orderLabor.map(function (item, index) {
						var _React$createElement2;

						return _react2.default.createElement(
							_antd.Form,
							_extends({
								wrappedComponentRef: function wrappedComponentRef(form) {
									return _this4["form" + (index + 1)] = form;
								},
								className: 'orderLabor_form ant-advanced-search-form'
							}, formItemLayout, {
								style: { borderBottom: "1px dashed #e6e6e6" } }),
							hidden ? null : _react2.default.createElement(
								_antd.Popconfirm,
								{
									title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?',
									onConfirm: _this4.handleDelete.bind(_this4, "orderLabor", index),
									onCancel: function onCancel() {},
									okText: '\u662F',
									cancelText: '\u5426',
									placement: 'topLeft'
								},
								_react2.default.createElement(_antd.Icon, { type: 'close',
									className: index == 0 ? "hidden" : "orderLabor_form_delete" })
							),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5C3A\u5BF8', className: 'w' },
										getFieldDecorator('size' + index, {
											initialValue: item.size || "6055*2990*3000mm",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(
											_antd.Radio.Group,
											{ disabled: hidden,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'size', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: "6055*2990*3000mm" },
												'6055*2990*3000mm'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: "7500*2990*3000mm" },
												'7500*2990*3000mm'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u662F\u5426\u88F8\u4ED3', className: 'w' },
										getFieldDecorator('naked' + index, {
											initialValue: item.naked || "是",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(
											_antd.Radio.Group,
											{ disabled: hidden,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'naked', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: '\u662F' },
												'\u662F'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: "否" },
												'\u5426'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u95F8\u673A\u79CD\u7C7B', className: 'w' },
										getFieldDecorator('channelType' + index, {
											initialValue: item.channelType || "翼闸",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(
											_antd.Radio.Group,
											{ disabled: hidden,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'channelType', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: "翼闸" },
												'\u7FFC\u95F8'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: "全高闸" },
												'\u5168\u9AD8\u95F8'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u7A7F\u7EBF\u7BA1\u9884\u57CB', className: 'w' },
										getFieldDecorator('lineEmbedded' + index, {
											initialValue: item.lineEmbedded || "是",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(
											_antd.Radio.Group,
											{
												disabled: hidden,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'lineEmbedded', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: "是" },
												'\u662F'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: '\u5426' },
												'\u5426'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u662F\u5426\u914D\u5B89\u5168\u95E8', className: 'w' },
										getFieldDecorator('safetyDoor' + index, {
											initialValue: item.safetyDoor || "是",
											rules: [{ required: true, message: '此项是必填' }]
										})(hidden ? _react2.default.createElement(
											_antd.Radio.Group,
											{ disabled: true,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'safetyDoor', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: '\u662F' },
												'\u662F\uFF08\u5168\u9AD8\u95F8\u5FC5\u987B\u914D\u5907\u5B89\u5168\u95E8\uFF09'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: '\u5426' },
												'\u5426'
											)
										) : _react2.default.createElement(
											_antd.Radio.Group,
											{
												disabled: item.channelType == "全高闸",
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'safetyDoor', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: '\u662F' },
												'\u662F\uFF08\u5168\u9AD8\u95F8\u5FC5\u987B\u914D\u5907\u5B89\u5168\u95E8\uFF09'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: '\u5426' },
												'\u5426'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u95F8\u673A\u56FA\u5B9A\u9884\u57CB', className: 'w' },
										getFieldDecorator('channelEmbedded' + index, {
											initialValue: item.channelEmbedded || "是",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(
											_antd.Radio.Group,
											{ disabled: hidden,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'channelEmbedded', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: "是" },
												'\u662F'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: "否" },
												'\u5426'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u4FDD\u5B89\u5BA4\u4F4D\u7F6E', className: 'w' },
										getFieldDecorator('roomPlace' + index, {
											initialValue: item.roomPlace || "靠左",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(
											_antd.Radio.Group,
											{
												disabled: hidden,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'roomPlace', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: "靠左" },
												'\u9760\u5DE6'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: "靠右" },
												'\u9760\u53F3'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5BB6\u5177\u914D\u5907', className: 'w' },
										getFieldDecorator('haveFurniture' + index, {
											initialValue: item.haveFurniture || "是",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(
											_antd.Radio.Group,
											{
												disabled: hidden,
												onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'haveFurniture', index) },
											_react2.default.createElement(
												_antd.Radio,
												{ value: "是" },
												'\u662F'
											),
											_react2.default.createElement(
												_antd.Radio,
												{ value: "否" },
												'\u5426'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u6570\u91CF', className: 'w' },
										getFieldDecorator('counts' + index, {
											initialValue: item.counts || "1",
											rules: [{ required: true, message: '此项是必填' }]
										})(_react2.default.createElement(_antd.InputNumber, _defineProperty({
											disabled: hidden,
											onChange: _this4.handleNumChange.bind(_this4, 'orderLabor', 'counts', index),
											className: 'w', placeholder: '\u8BF7\u8F93\u5165' }, 'disabled', hidden)))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Spin,
										{ tip: _this4.state.tip, spinning: _this4.state.isLoading, delay: 100 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: _react2.default.createElement(
													'span',
													null,
													_react2.default.createElement(
														'span',
														{ style: {
																fontWeight: "400",
																marginRight: "4px",
																color: "#f5222d",
																fontSize: "14px",
																fontFamily: "SimSun, sans-serif"
															} },
														'*'
													),
													'\u6548\u679C\u56FE'
												), className: 'w' },
											getFieldDecorator('rendering', {
												initialValue: item.rendering || "",
												rules: [{ required: false, message: '此项是必填' }]
											})(item.rendering == null || item.rendering == "" ? _react2.default.createElement(
												_antd.Button,
												{ type: 'primary', icon: 'cloud-upload', onClick: _this4.buildDesignSketch.bind(_this4, index) },
												'\u751F\u6210\u6548\u679C\u56FE'
											) : _react2.default.createElement(
												'div',
												{ className: 'webglContent' },
												_react2.default.createElement(_reactUnityWebgl2.default, { className: 'unityZone', unityContent: unityContent }),
												_react2.default.createElement(
													'div',
													{ className: 'footer' },
													_react2.default.createElement(
														_antd.Button,
														{ style: { backgroundColor: '#1eaed3' }, type: 'primary', icon: 'cloud-sync', onClick: _this4.updateDesignSketch.bind(_this4, index) },
														'\u66F4\u65B0\u914D\u7F6E'
													),
													_react2.default.createElement(_antd.Button, { style: { backgroundColor: '#1eaed3', float: 'right', marginTop: '4px' }, type: 'primary', icon: 'fullscreen', title: '\u5168\u5C4F', onClick: _this4.fullscreen })
												)
											))
										)
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5176\u4ED6\u8981\u6C42', className: 'w' },
										getFieldDecorator('otherAsk' + index, {
											initialValue: item.otherAsk || "",
											rules: [{ required: false, message: '此项是必填' }]
										})(_react2.default.createElement(TextArea, (_React$createElement2 = {
											disabled: hidden,
											onChange: _this4.handleChange.bind(_this4, 'orderLabor', 'otherAsk', index),
											rows: 4 }, _defineProperty(_React$createElement2, 'disabled', hidden), _defineProperty(_React$createElement2, 'placeholder', '\u8BF7\u8F93\u5165'), _React$createElement2)))
									)
								)
							)
						);
					}),
					_react2.default.createElement(
						_antd.Form,
						_extends({}, formItemLayout, { className: hidden ? "hidden" : "ant-advanced-search-form" }),
						_react2.default.createElement(
							_antd.Row,
							{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 }, 15], style: { margin: "0" } },
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u590D\u5236\u6DFB\u52A0', className: 'w' },
									_react2.default.createElement(_antd.Icon, {
										onClick: this.handleAdd.bind(this, "orderLabor"),
										style: {
											fontSize: "26px",
											color: "#1890ff",
											cursor: "pointer",
											position: "relative",
											top: "5px"
										},
										type: 'plus-circle' })
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mt30' },
					_react2.default.createElement(
						'h3',
						{ className: 'kanban_title mb20' },
						'\u73B0\u573A\u65BD\u5DE5\u6761\u4EF6'
					),
					_react2.default.createElement(
						_antd.Form,
						_extends({ className: 'ant-advanced-search-form' }, formItemLayout),
						_react2.default.createElement(
							_antd.Row,
							{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 }, 15], style: { margin: "0" } },
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u57FA\u7840', className: 'w' },
									_react2.default.createElement(
										'span',
										{ className: 'mr15' },
										'\u57FA\u7840\u786C\u5316\u4E14\u5F3A\u5EA6\u8FBE\u6807'
									),
									getFieldDecorator('isokBasis', {
										initialValue: constructionConditions.isokBasis || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(
										_antd.Radio.Group,
										{ disabled: hidden,
											onChange: this.handleChange2.bind(this, 'constructionConditions', 'isokBasis') },
										_react2.default.createElement(
											_antd.Radio,
											{ value: "是" },
											'\u662F'
										),
										_react2.default.createElement(
											_antd.Radio,
											{ value: "否" },
											'\u5426'
										)
									))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u4E34\u7535', className: 'w' },
									_react2.default.createElement(
										'span',
										{ className: 'mr15' },
										'\u5177\u5907\u901A\u7535\u6761\u4EF6'
									),
									getFieldDecorator('isokElectricity', {
										initialValue: constructionConditions.isokElectricity || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(
										_antd.Radio.Group,
										{ disabled: hidden,
											onChange: this.handleChange2.bind(this, 'constructionConditions', 'isokElectricity') },
										_react2.default.createElement(
											_antd.Radio,
											{ value: "是" },
											'\u662F'
										),
										_react2.default.createElement(
											_antd.Radio,
											{ value: "否" },
											'\u5426'
										)
									))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u9053\u8DEF', className: 'w' },
									_react2.default.createElement(
										'span',
										{ className: 'mr15' },
										'\u5468\u8FB9\u9053\u8DEF\u6EE1\u8DB317.5\u7C73\u677F\u8F66\u901A\u884C'
									),
									getFieldDecorator('isokRoad', {
										initialValue: constructionConditions.isokRoad || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(
										_antd.Radio.Group,
										{ disabled: hidden,
											onChange: this.handleChange2.bind(this, 'constructionConditions', 'isokRoad') },
										_react2.default.createElement(
											_antd.Radio,
											{ value: "是" },
											'\u662F'
										),
										_react2.default.createElement(
											_antd.Radio,
											{ value: "否" },
											'\u5426'
										)
									))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u540A\u88C5', className: 'w' },
									_react2.default.createElement(
										'span',
										{ className: 'mr15' },
										'\u6EE1\u8DB325t\u540A\u8F66\u7AD9\u4F4D'
									),
									getFieldDecorator('isokLifting', {
										initialValue: constructionConditions.isokLifting || "",
										rules: [{ required: true, message: '此项是必填' }]
									})(_react2.default.createElement(
										_antd.Radio.Group,
										{ disabled: hidden,
											onChange: this.handleChange2.bind(this, 'constructionConditions', 'isokLifting') },
										_react2.default.createElement(
											_antd.Radio,
											{ value: "是" },
											'\u662F'
										),
										_react2.default.createElement(
											_antd.Radio,
											{ value: "否" },
											'\u5426'
										)
									))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12, style: { padding: 0 } },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: _react2.default.createElement(
											'span',
											null,
											_react2.default.createElement(
												'span',
												{ style: {
														fontWeight: "400",
														marginRight: "4px",
														color: "#f5222d",
														fontSize: "14px",
														fontFamily: "SimSun, sans-serif"
													} },
												'*'
											),
											'\u7167\u7247'
										),
										className: 'w' },
									getFieldDecorator('atts', {
										//initialValue: attachments||[],
										rules: [{
											required: false,
											message: '此项是必填' }]
									})(_react2.default.createElement(_MyUpload2.default, {
										key: 'atts',
										saveAttachment: this.handleAttment.bind(this, 'atts'),
										disabled: hidden,
										multiple: true,
										accept: ".jpg,.jpeg,.gif,.png,.bmp",
										listType: 'picture-card',
										ossData: mobx.toJS(ossData),
										fileList: attachments
									}))
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Row,
					{ className: 'mt20' },
					_react2.default.createElement(
						_antd.Col,
						{ span: 24, className: 'tc' },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'default', onClick: this.handleBack },
							'\u8FD4\u56DE'
						),
						_react2.default.createElement(
							_antd.Button,
							{ className: hidden ? "" : "hidden", type: 'primary', style: { margin: "0 20px" }, onClick: this.handleEdit },
							'\u4FEE\u6539\u8BA2\u5355'
						),
						_react2.default.createElement(
							_antd.Button,
							{ className: hidden ? "hidden" : "", type: 'primary', style: { margin: "0 20px" }, onClick: this.handleSubmit },
							'\u4FDD\u5B58'
						),
						_react2.default.createElement(
							_antd.Button,
							{ className: hidden ? "hidden" : "", type: 'primary', onClick: this.handleOrder },
							'\u7ACB\u5373\u4E0B\u5355'
						)
					)
				),
				_react2.default.createElement(_OrderSuccess2.default, {
					visible: visible,
					salesObj: salesObj,
					onClose: this.onClose,
					handleView: this.handleView
				})
			);
		}
	}]);

	return SalesDetal;
}(_react2.default.Component)) || _class) || _class) || _class) || _class);
exports.default = SalesDetal;

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

/***/ 1918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=ReactUnityWebgl.js.map

/***/ }),

/***/ 1919:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=UnityInstance.js.map

/***/ }),

/***/ 1920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=UnityLoader.js.map

/***/ }),

/***/ 1921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    LoggingService.prototype.warnUnityContentRemoveNotAvailable = function (additionalDetials) {
        this.warn("Your version of Unity does not support unloading the WebGL Player.", "This preverts ReactUnityWebGL from unmounting this component properly.", "Please consider updating to Unity 2019.1 or newer, or reload the page", "to free the WebGL Player from the memory. See the follow link for more details:", "https://github.com/elraccoone/react-unity-webgl/issues/22", additionalDetials);
    };
    LoggingService.prototype.errorUnityLoaderNotFound = function (additionalDetials) {
        this.error("Unable to use the Unity Loader, please make sure you've imported", "the Unity Loader the correct way. You might have entered an incorrect", "path to the UnityLoader.js. The path is not relative to your bundle,", "but to your index html file. See the follow link for more details: ", "https://github.com/elraccoone/react-unity-webgl/issues/31", additionalDetials);
    };
    LoggingService.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        console.warn(messages.filter(function (_) { return typeof _ !== "undefined"; }).join(" "));
    };
    LoggingService.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        console.error(messages.filter(function (_) { return typeof _ !== "undefined"; }).join(" "));
    };
    return LoggingService;
}());
exports.loggingService = new LoggingService();
//# sourceMappingURL=LoggingService.js.map

/***/ }),

/***/ 2048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            *下单成功
            *dangw@bocspace.cn
            */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

var _antd = __webpack_require__(17);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderSuccess = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(OrderSuccess, _React$Component);

	function OrderSuccess(props) {
		_classCallCheck(this, OrderSuccess);

		var _this = _possibleConstructorReturn(this, (OrderSuccess.__proto__ || Object.getPrototypeOf(OrderSuccess)).call(this, props));

		_this.state = {
			visible: false
		};
		return _this;
	}

	_createClass(OrderSuccess, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    visible = _props.visible,
			    salesObj = _props.salesObj,
			    handleView = _props.handleView,
			    onClose = _props.onClose;

			var fields = JSON.parse(JSON.stringify(salesObj));
			var customerCompany = fields.customerCompany,
			    deliveryAddress = fields.deliveryAddress,
			    customerPeople = fields.customerPeople,
			    customerPhone = fields.customerPhone,
			    agreedTime = fields.agreedTime,
			    serial = fields.serial,
			    placeOrderTime = fields.placeOrderTime;


			return _react2.default.createElement(
				_antd.Modal,
				{
					closable: false,
					footer: null,
					title: null,
					visible: visible,
					width: '686px'
				},
				_react2.default.createElement(
					'div',
					{ className: 'pr',
						style: {
							paddingLeft: "89px"
						} },
					_react2.default.createElement('img', {
						style: {
							position: "absolute",
							top: "18px",
							left: "18px"
						},
						src: './images/order_success.png', alt: '', width: '49', height: '49' }),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'p',
							{ style: {
									fontFamily: 'PingFangSC-Regular',
									fontWeight: 400,
									fontStyle: "normal",
									fontSize: "22px",
									color: " #5BBE99",
									height: "51px",
									lineHeight: "51px"
								} },
							'\u4E0B\u5355\u6210\u529F'
						),
						_react2.default.createElement(
							'p',
							{ className: 'order_success_p' },
							'\u6211\u4EEC\u5C06\u8054\u7CFB\u5382\u5BB6\u5C3D\u5FEB\u6392\u4EA7\uFF0C'
						),
						_react2.default.createElement(
							'p',
							{ className: 'order_success_p' },
							'\u60A8\u53EF\u5173\u6CE8\u5C0F\u7A0B\u5E8F\uFF0C\u968F\u65F6\u67E5\u770B\u8BA2\u5355\u72B6\u6001'
						)
					),
					_react2.default.createElement('img', {
						style: {
							position: "absolute",
							top: "0",
							right: "40px"
						},
						src: './images/order_wechat.png', alt: '', width: '111', height: '111' })
				),
				_react2.default.createElement(_antd.Divider, {
					style: {
						margin: "55px 0 20px"
					},
					dashed: true }),
				_react2.default.createElement(
					_antd.Row,
					{ className: 'order_success_title' },
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							'span',
							{ className: 'color_7f' },
							'\u5BA2\u6237\u5355\u4F4D\uFF1A'
						),
						' ',
						_react2.default.createElement(
							'span',
							null,
							customerCompany
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							'span',
							{ className: 'color_7f' },
							'\u8981\u8D27\u5730\u5740\uFF1A'
						),
						' ',
						_react2.default.createElement(
							'span',
							null,
							deliveryAddress
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							'span',
							{ className: 'color_7f' },
							'\u5BA2\u6237\u5BF9\u63A5\u4EBA\uFF1A'
						),
						' ',
						_react2.default.createElement(
							'span',
							null,
							customerPeople,
							'  ',
							customerPhone
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							'span',
							{ className: 'color_7f' },
							'\u8981\u8D27\u65F6\u95F4\uFF1A'
						),
						' ',
						_react2.default.createElement(
							'span',
							null,
							(0, _moment2.default)(agreedTime).format('YYYY-MM-DD')
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							'span',
							{ className: 'color_7f' },
							'\u8BA2\u5355\u53F7\uFF1A'
						),
						' ',
						_react2.default.createElement(
							'span',
							null,
							serial
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							'span',
							{ className: 'color_7f' },
							'\u4E0B\u5355\u65F6\u95F4\uFF1A'
						),
						' ',
						_react2.default.createElement(
							'span',
							null,
							(0, _moment2.default)(placeOrderTime).format('YYYY-MM-DD HH:mm')
						)
					)
				),
				_react2.default.createElement(
					_antd.Row,
					{ className: 'mt50 mb30' },
					_react2.default.createElement(
						_antd.Col,
						{ span: 24, className: 'tc' },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'default', onClick: onClose },
							'\u8FD4\u56DE'
						),
						_react2.default.createElement(
							_antd.Button,
							{ type: 'primary', style: { margin: "0 20px" }, onClick: handleView },
							'\u67E5\u770B\u8BA2\u5355'
						)
					)
				)
			);
		}
	}]);

	return OrderSuccess;
}(_react2.default.Component)) || _class) || _class;

exports.default = OrderSuccess;

/***/ }),

/***/ 2177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, ".webglContent .logo,\n.webglContent .progress {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.webglContent .logo {\n  background: url('/assets/progressLogo.Light.png') no-repeat center / contain;\n  width: 154px;\n  height: 130px;\n}\n.webglContent .progress {\n  height: 18px;\n  width: 141px;\n  margin-top: 90px;\n}\n.webglContent .progress .empty {\n  background: url('/assets/progressEmpty.Light.png') no-repeat right / cover;\n  float: right;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n}\n.webglContent .progress .empty {\n  background: url('/assets/progressEmpty.Light.png') no-repeat right / cover;\n  float: right;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n}\n.webglContent .progress .full {\n  background: url('/assets/progressFull.Light.png') no-repeat left / cover;\n  float: left;\n  width: 0%;\n  height: 100%;\n  display: inline-block;\n}\n.webglContent .logo.Dark {\n  background-image: url('/assets/progressLogo.Dark.png');\n}\n.webglContent .progress.Dark .empty {\n  background-image: url('/assets/progressEmpty.Dark.png');\n}\n.webglContent .footer {\n  margin-top: 5px;\n  height: 38px;\n  line-height: 38px;\n  font-family: Helvetica, Verdana, Arial, sans-serif;\n  font-size: 18px;\n}\n.webglContent .footer .webgl-logo,\n.title,\n.fullscreen {\n  height: 100%;\n  display: inline-block;\n  background: transparent center no-repeat;\n}\n.webglContent .footer .webgl-logo {\n  background-image: url('/assets/webgl-logo.png');\n  width: 204px;\n  float: left;\n}\n.webglContent .footer .title {\n  margin-right: 10px;\n  float: right;\n}\n.webglContent {\n  min-width: 500px;\n}\n.webglContent .footer .fullscreen {\n  background-image: url('/assets/fullscreen.png');\n  width: 38px;\n  float: right;\n  border: 1px solid #d9d9d9;\n}\n", ""]);

// exports


/***/ }),

/***/ 2237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Unity_1 = __importDefault(__webpack_require__(2239));
var UnityContent_1 = __importDefault(__webpack_require__(2238));
exports.UnityContent = UnityContent_1.default;
exports.default = Unity_1.default;
//# sourceMappingURL=Exports.js.map

/***/ }),

/***/ 2238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1920);
__webpack_require__(1919);
__webpack_require__(1918);
var LoggingService_1 = __webpack_require__(1921);
var UnityContent = /** @class */ (function () {
    /**
     * Creates a new Unity content object. This object can be used
     * @param {string} buildJsonPath the relative path to the build json file generated by Unity.
     * @param {string} unityLoaderJsPath the relative path to the unity loader javascript file.
     * @param {IUnityConfig} unityConfig the Unity configuration that will be used to start the player.
     */
    function UnityContent(buildJsonPath, unityLoaderJsPath, unityConfig) {
        var _unityConfig = unityConfig || {};
        this.buildJsonPath = buildJsonPath;
        this.unityLoaderJsPath = unityLoaderJsPath;
        this.uniqueID = ++UnityContent.uniqueID;
        this.unityEvents = [];
        this.unityConfig = {
            modules: _unityConfig.modules || {},
            unityVersion: _unityConfig.unityVersion || "undefined",
            adjustOnWindowResize: _unityConfig.adjustOnWindowResize,
            id: _unityConfig.id || "nill"
        };
        if (typeof window.ReactUnityWebGL === "undefined")
            window.ReactUnityWebGL = {};
    }
    /**
     * Binds a unity component to this content.
     * @param unityComponentInstance the unity component that will be binded to this content.
     * @public
     */
    UnityContent.prototype.setComponentInstance = function (unityComponentInstance) {
        this.unityComponent = unityComponentInstance;
    };
    /**
     * Binds a unity player to this content.
     * @param unityPlayerInstance the unity component that will be binded to this content.
     * @public
     */
    UnityContent.prototype.setUnityInstance = function (unityInstance) {
        this.unityInstance = unityInstance;
    };
    /**
     * Sets the unity players fullscreen mode.
     * @param {boolean} fullscreen
     * @public
     */
    UnityContent.prototype.setFullscreen = function (fullscreen) {
        if (this.unityInstance != null) {
            this.unityInstance.SetFullscreen(fullscreen === true ? 1 : 0);
        }
    };
    /**
     * Quits the Unity Instance and removes it from memory.
     */
    UnityContent.prototype.remove = function () {
        var _this = this;
        if (typeof this.unityInstance !== "undefined" &&
            typeof this.unityInstance.Quit === "function")
            return this.unityInstance.Quit(function () {
                _this.triggerUnityEvent("quitted");
                _this.unityInstance = undefined;
            });
        return LoggingService_1.loggingService.warnUnityContentRemoveNotAvailable();
    };
    /**
     * Sends an event to the Unity player that will trigger a function.
     * @param {string} gameObjectName the name of the game object in your Unity scene.
     * @param {string} methodName the name of the public method on the game object.
     * @param {any} parameter an optional parameter to pass along to the method.
     * @public
     */
    UnityContent.prototype.send = function (gameObjectName, methodName, parameter) {
        if (this.unityInstance != null) {
            if (typeof parameter === "undefined") {
                this.unityInstance.SendMessage(gameObjectName, methodName);
            }
            else {
                this.unityInstance.SendMessage(gameObjectName, methodName, parameter);
            }
        }
    };
    /**
     * Registers an event listener for the Unity player. These can be
     * system events like when the player is initialized or loader and
     * your custom events from Unity.
     * @param {string} eventName the event name
     * @param {Function} eventCallback the event function
     * @returns {any} The Function
     * @public
     */
    UnityContent.prototype.on = function (eventName, eventCallback) {
        this.unityEvents.push({
            eventName: eventName,
            eventCallback: eventCallback
        });
        window.ReactUnityWebGL[eventName] = function (parameter) {
            return eventCallback(parameter);
        };
    };
    /**
     * Triggers an event that has been registered by the on
     * function.
     * @param {string} eventName the event name
     * @param {Function} eventValue the event value
     * @public
     */
    UnityContent.prototype.triggerUnityEvent = function (eventName, eventValue) {
        for (var _i = 0; _i < this.unityEvents.length; _i++)
            if (this.unityEvents[_i].eventName === eventName)
                this.unityEvents[_i].eventCallback(eventValue);
    };
    /**
     * the statis unique ID keeps track of the
     * unique ID's made by other instances.
     * @type {number}
     * @static
     * @public
     */
    UnityContent.uniqueID = 0;
    return UnityContent;
}());
exports.default = UnityContent;
//# sourceMappingURL=UnityContent.js.map

/***/ }),

/***/ 2239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(0));
var UnityLoaderService_1 = __importDefault(__webpack_require__(2240));
__webpack_require__(1920);
__webpack_require__(1919);
__webpack_require__(1918);
var Unity = /** @class */ (function (_super) {
    __extends(Unity, _super);
    /**
     * Initialized the component.
     * @param {IUnityProps} props
     */
    function Unity(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The component state.
         * @type {IUnityState}
         * @public
         */
        _this.state = {};
        _this.unityLoaderService = new UnityLoaderService_1.default();
        _this.onWindowResizeBinding = _this.onWindowResize.bind(_this);
        _this.unityContent = _this.props.unityContent;
        _this.unityContent.setComponentInstance(_this);
        return _this;
    }
    /**
     * An event that is triggered by the Unity player. This tracks
     * the loading progression of the player. It will send '1' when
     * the loading is completed.
     * @param {UnityInstance} unityInstance
     * @param {number} progression
     * @private
     */
    Unity.prototype.onProgress = function (unityInstance, progression) {
        this.unityContent.triggerUnityEvent("progress", progression);
        if (progression === 1)
            this.unityContent.triggerUnityEvent("loaded");
    };
    /**
     * When the window is resized.
     */
    Unity.prototype.onWindowResize = function () {
        if (this.unityContent.unityConfig.adjustOnWindowResize === true) {
            this.unityContent.triggerUnityEvent("resized");
            this.adjustCanvasToContainer();
        }
    };
    /**
     * Since the Unity canvas itself does not respond to the resizing
     * of it's container we have to manually do this. A width and height
     * of 100% does not seem to work, so we have to fetch it's parent's
     * size to adject the canvas.
     * @private
     */
    Unity.prototype.adjustCanvasToContainer = function () {
        if (typeof this.htmlElement !== "undefined") {
            var _width = this.htmlElement.offsetWidth;
            var _height = this.htmlElement.offsetHeight;
            var _canvas = this.htmlElement.getElementsByTagName("canvas")[0];
            if (typeof _canvas !== "undefined" && _canvas.height !== _height)
                _canvas.height = _height;
            if (typeof _canvas !== "undefined" && _canvas.width !== _width)
                _canvas.width = _width;
        }
    };
    /**
     * Initialzied the Unity player when the component is mounted.
     * @public
     */
    Unity.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener("resize", this.onWindowResizeBinding);
        // prettier-ignore
        this.unityLoaderService.append(this.props.unityContent.unityLoaderJsPath, function () {
            UnityLoader.Error.handler = function (_message) {
                _this.unityContent.triggerUnityEvent("error", _message);
                console.error("React Unity WebGL", _message);
            };
            _this.unityContent.setUnityInstance(UnityLoader.instantiate("__ReactUnityWebGL_" + _this.props.unityContent.uniqueID + "__", _this.props.unityContent.buildJsonPath, {
                onProgress: _this.onProgress.bind(_this),
                Module: _this.props.unityContent.unityConfig.modules,
                width: "100%",
                height: "100%"
            }));
        });
    };
    /**
     * Will remove event listeners and clean up systems when the
     * component is about to unmount.
     * @public
     */
    Unity.prototype.componentWillUnmount = function () {
        this.unityContent.remove();
        window.removeEventListener("resize", this.onWindowResizeBinding);
    };
    /**
     * Renders the unity wrapper and player.
     * @returns {React.ReactNode} element
     * @public
     */
    Unity.prototype.render = function () {
        var _this = this;
        return React.createElement("div", {
            className: this.props.className || "",
            ref: function (ref) { return (_this.htmlElement = ref); },
            id: "__ReactUnityWebGL_" + this.props.unityContent.uniqueID + "__",
            style: {
                width: this.props.width || "800px",
                height: this.props.height || "600px"
            }
        });
    };
    return Unity;
}(React.Component));
exports.default = Unity;
//# sourceMappingURL=Unity.js.map

/***/ }),

/***/ 2240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoggingService_1 = __webpack_require__(1921);
var UnityLoaderService = /** @class */ (function () {
    function UnityLoaderService() {
        /**
         * Reference to the document head.
         * @type {HTMLHeadElement}
         * @private
         */
        this.documentHead = document.getElementsByTagName("head")[0];
    }
    /**
     * Appends the Unity loader script to the window. When it's loaded a callback will
     * be triggered. NOTE: This can't be a promisse due to JavaScript compatibilty.
     * @param {string} source the path to the Unity loader file
     * @param {Function} onLoad when the script is loaded
     * @public
     */
    UnityLoaderService.prototype.append = function (source, onLoad) {
        var _this = this;
        if (typeof this.unityLoaderScript !== "undefined")
            if (source === this.unityLoaderScript.src) {
                return onLoad();
            }
            else {
                this.unityLoaderScript.remove();
            }
        window
            .fetch(source)
            .then(function (_response) {
            if (_response.status >= 400)
                return LoggingService_1.loggingService.errorUnityLoaderNotFound(_response.status);
            _response
                .text()
                .then(function (_text) {
                if (_text.trim().charAt(0) === "<")
                    return LoggingService_1.loggingService.errorUnityLoaderNotFound("error doc");
                _this.unityLoaderScript = document.createElement("script");
                _this.unityLoaderScript.type = "text/javascript";
                _this.unityLoaderScript.async = true;
                _this.unityLoaderScript.src = source;
                _this.unityLoaderScript.onload = function () {
                    if (typeof window.UnityLoader === "undefined")
                        return LoggingService_1.loggingService.errorUnityLoaderNotFound();
                    onLoad();
                };
                _this.documentHead.appendChild(_this.unityLoaderScript);
            })
                .catch(function (_reason) { return LoggingService_1.loggingService.errorUnityLoaderNotFound(_reason); });
        })
            .catch(function (_reason) { return LoggingService_1.loggingService.errorUnityLoaderNotFound(_reason); });
    };
    return UnityLoaderService;
}());
exports.default = UnityLoaderService;
//# sourceMappingURL=UnityLoaderService.js.map

/***/ })

});
//# sourceMappingURL=13-afa7d4b4bae6ff2924e9.1629092961041.js.map