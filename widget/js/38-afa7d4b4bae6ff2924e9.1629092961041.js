webpackJsonp([38],{

/***/ 1498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  *订单管理 -- 列表
                  *dangw@bocspace.cn
                  */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(32);

var _antd = __webpack_require__(17);

var _SalesOrder = __webpack_require__(2050);

var _SalesOrder2 = _interopRequireDefault(_SalesOrder);

var _PurchaseOrder = __webpack_require__(2049);

var _PurchaseOrder2 = _interopRequireDefault(_PurchaseOrder);

var _OrderStore = __webpack_require__(748);

var _OrderStore2 = _interopRequireDefault(_OrderStore);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;
var OrderList = (_dec = (0, _mobxReact.inject)('OrderStore'), _dec(_class = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(OrderList, _React$Component);

	function OrderList(props) {
		_classCallCheck(this, OrderList);

		var _this = _possibleConstructorReturn(this, (OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call(this, props));

		_this.callback = function (key) {
			_this.props.history.push("/order?key=" + key);
			_this.setState({
				activeKey: key
			}, function () {
				if (key == 1) {
					// 销售
					_this.store.getSalesOrderPageList();
				} else {
					// 采购
					_this.store.getPurchasingOrderPageList();
				}
			});
		};

		_this.store = _this.props.OrderStore;
		_this.state = {
			activeKey: "1" // 当前活动key
		};
		return _this;
	}

	_createClass(OrderList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var search = this.props.location.search;
			var key = _url2.default.parse(search, true).query.key;
			if (key == undefined || key == 1) {
				this.setState({
					activeKey: "1"
				}, function () {
					_this2.store.salesParams = Object.assign({}, {
						serial: "",
						company: "",
						number: "",
						state: 10,
						beginTime: 0,
						endTime: 0,
						pageIndex: 1,
						pageSize: 10
					});
					_this2.store.getSalesOrderPageList();
				});
			} else {
				this.setState({
					activeKey: "2"
				}, function () {
					_this2.store.purchaseParams = Object.assign({}, {
						serial: "",
						company: "",
						address: "",
						beginTime: 0,
						endTime: 0,
						orderer: "",
						pageIndex: 1,
						pageSize: 10
					});
					_this2.store.getPurchasingOrderPageList();
				});
			}
			// 获取大文件上传sts
			this.store.getSts();
			// 已有权限
			this.store.getUserPermissionByAppCode();
		}
	}, {
		key: 'render',
		value: function render() {
			var activeKey = this.state.activeKey;

			return _react2.default.createElement(
				_antd.Tabs,
				{ activeKey: activeKey, onChange: this.callback },
				_react2.default.createElement(
					TabPane,
					{ tab: '\u9500\u552E\u8BA2\u5355', key: '1', style: { height: 'auto' } },
					_react2.default.createElement(_SalesOrder2.default, {
						store: this.store
					})
				),
				_react2.default.createElement(
					TabPane,
					{ tab: '\u91C7\u8D2D\u8BA2\u5355', key: '2', style: { height: 'auto' } },
					_react2.default.createElement(_PurchaseOrder2.default, {
						store: this.store
					})
				)
			);
		}
	}]);

	return OrderList;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = OrderList;

/***/ }),

/***/ 1782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 大文件上传组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


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
	return 'ZJMZ_OpenPlatform/' + (0, _moment2.default)().format('YYYYMMDD') + '/' + file.uid + '/' + file.name;
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

var MyUpload = function (_React$Component) {
	_inherits(MyUpload, _React$Component);

	function MyUpload(props) {
		var _this3 = this;

		_classCallCheck(this, MyUpload);

		var _this2 = _possibleConstructorReturn(this, (MyUpload.__proto__ || Object.getPrototypeOf(MyUpload)).call(this, props));

		_this2.getDocumentUrl = function (url) {
			return (0, _api.requestPost)('getDocumentUrl', _config2.default.journal.getDocumentUrl, _journal2.default.journal.getDocumentUrl, { url: url });
		};

		_this2.handleChange = function (info) {
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
					var url = _this2.state.host + uploadPath('path', file);
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
				var array = JSON.parse(JSON.stringify([].concat(_toConsumableArray(oldFileList), _toConsumableArray(newFileList))));
				var _this = _this2;
				_this.setState({
					loading: true
				});
				setTimeout(function () {
					_this.props.saveAttachment(array);
					_this.setState({
						loading: false
					});
				}, 1000);
			} else if (status === "removed") {
				// 删除
				var id = info.file.id;
				if (id !== "" || id !== null) {// 删除已有的
					// this.props.delNode(id);
				}
				var _array = JSON.parse(JSON.stringify([].concat(_toConsumableArray(oldFileList), _toConsumableArray(newFileList))));
				_this2.props.saveAttachment(_array);
			}
		};

		_this2.beforeUpload = function (file) {
			var accept = _this2.props.accept;

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
			var reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onloadend = function () {
				// 使用ossupload覆盖默认的上传方法
				UploadToOss(_this2, '上传路径oss配置信息', file).then(function (data) {
					return data;
				});
			};
			return false; // 不调用默认的上传方法
		};

		_this2.handlePreview = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
				var isAssetTypeAnImage, getExt, fileList, imageArray;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// 文档
								if (/\.(doc|docx)$/.test(file.name) || /\.(xls|xlsx)$/.test(file.name) || /\.(pdf)$/.test(file.name) || /\.(zip|rar)$/.test(file.name) || /\.(ppt|pptx)$/.test(file.name)) {
									_this2.getDocumentUrl(file.filePath).then(function (res) {
										_this2.setState({
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
										//获取最后一个.的位置
										var index = filePath.lastIndexOf(".");
										//获取后缀
										var ext = filePath.substr(index + 1);
										return ext;
									};

									if (isAssetTypeAnImage(getExt(file.filePath))) {
										// 判断是图片
										fileList = JSON.parse(JSON.stringify(_this2.state.fileList));
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
										_this2.setState({
											visible: true,
											imageArray: Object.assign([], imageArray),
											activeIndex: imageArray.findIndex(function (item) {
												return item.src == file.filePath;
											})
										});
									} else {
										// 音频
										_this2.setState({
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
				}, _callee, _this3);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();

		_this2.handleCancel = function (type) {
			return _this2.setState(_defineProperty({}, type, false));
		};

		_this2.downloadUrl = function () {
			var _this2$state = _this2.state,
			    filePath = _this2$state.filePath,
			    name = _this2$state.name;

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(zip|rar)$/.test(name) || /\.(ppt|pptx)$/.test(name);
			if (isImage) {
				(0, _download.downloadFile)(filePath, name); // 直接下载pdf
			} else {
				_this2.downloadImage(filePath, name);
			}
		};

		_this2.onDownload = function (file) {
			var filePath = file.filePath,
			    name = file.name;

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(zip|rar)$/.test(name) || /\.(ppt|pptx)$/.test(name);
			if (isImage) {
				(0, _download.downloadFile)(filePath, name); // 直接下载pdf
			} else {
				_this2.downloadImage(filePath, name);
			}
		};

		_this2.downloadImage = function (filePath, name) {
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

		_this2.state = {
			fileList: _this2.props.fileList,
			loading: false,
			token: {
				access_key_id: '', //'STS.NUKFXpmcLY7gZeyDE7jMW6M5v', // oss的key_id
				access_key_secret: '', //'5S1Ky3Beef6ZtXxTRPBMPvqV9ouTWkvMTmGhffJqeLK8', // oss的secret
				stsToken: '', //'CAISgwN1q6Ft5B2yfSjIr5b+DeLEgLxt7vWMWEPIoEViZsJ72YielDz2IH1IfXdtBuAasvU3lGtZ6/8dlol1QJhdclfYdo176NFd/AKjYozO/cWx7K0Zjpa+X2OUDkZuMwFigKOrIunGc9KBNnpq/00amMlSHFfPdlihNoLzkPwDR98LXw6+QCNbDdNNXGVLo9MbMn2jBJTVNQXx0EbdCEd0ty12i2509cbaxdaHuD7fl0HCw/UJvOaBJYO/PeBmO41jdsqxwO1uf7Dd7TZU7BFGlsJxl7cWwSrbmdufDlJNgXCBKPGG3dBzCwV7a6MmYYImysLxjvploOfeup3qwhJWR4FvXj/YWZqrzbmEepqgPc1rcq3gaTafkIKfN5/xsWFfaHkAZgRRYIhjeD0iGR0qTjOdaI3foQCWPVn6FPTUifFvgcMkkG+Fp4TaewK9JJyCyjsdN5MGaEclCgUbx2SJcNVdLlAVLQ44V+rJHN0jN0ED8Pzy0grJTWh70mpHAjgJzUQydssagAGXmVE/ez8kLqCrzcFDMBg0c51Wv7sCHrBF1JJ1jhjZ39U8mUKpdznlIoOk5Jxav599Kdj4ZsNH8D4nshRzAZiZ1Qi5a+PsMWpet0mOIu/fntu5xezXssVECv68Pg8tos5Rf/Tcs1L8axm0WIxk2PFOtH59IPj8RhevwczGTOmCaQ\u003d\u003d',
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
		return _this2;
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
			if (this.props.fileList) {
				this.setState({
					fileList: this.props.fileList
				});
			}
			if (this.props.ossData) {
				var token = JSON.parse(JSON.stringify(this.state.token));
				this.setState({
					token: Object.assign(token, {
						access_key_id: this.props.ossData.accessKeyId,
						access_key_secret: this.props.ossData.accessKeySecret,
						stsToken: this.props.ossData.securityToken
					})
				});
			}
		}

		// 手动下载


		// 预览下载


		// 直接下载

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
			    accept = _props.accept;

			var acceptDefault = ".jpg,.jpeg,.gif,.png,.bmp,.doc,.docx,.xlsx,.xls,.pdf,.ppt,.pptx"; // 默认值限制格式
			var props = {
				accept: accept == undefined ? acceptDefault : accept,
				name: 'file',
				multiple: multiple,
				onChange: this.handleChange,
				beforeUpload: this.beforeUpload,
				disabled: disabled,
				listType: "text",
				onPreview: this.handlePreview,
				onDownload: this.onDownload,
				showUploadList: {
					showDownloadIcon: true
				}
			};
			var uploadButton = _react2.default.createElement(_antd.Icon, { style: { fontSize: "16px", color: "#1890ff" },
				className: 'pointer',
				type: 'cloud-upload',
				title: '\u4E0A\u4F20\u9644\u4EF6'
			});

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(zip|rar)$/.test(name) || /\.(ppt|pptx)$/.test(name);
			return _react2.default.createElement(
				'span',
				{ style: {
						display: "inline-block"
					} },
				_react2.default.createElement(
					_antd.Upload,
					_extends({}, props, { fileList: fileList }),
					disabled ? null : uploadButton
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
}(_react2.default.Component);

exports.default = MyUpload;

/***/ }),

/***/ 2049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            *采购订单
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

var _download = __webpack_require__(68);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = _antd.Input.Group;
var RangePicker = _antd.DatePicker.RangePicker;

var customizeRenderEmpty = function customizeRenderEmpty() {
	return _react2.default.createElement(
		'div',
		{ style: { textAlign: 'center', padding: '20px 0' } },
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

var SalesOrder = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(SalesOrder, _React$Component);

	function SalesOrder(props) {
		var _this2 = this;

		_classCallCheck(this, SalesOrder);

		var _this = _possibleConstructorReturn(this, (SalesOrder.__proto__ || Object.getPrototypeOf(SalesOrder)).call(this, props));

		_this.onChange = function (type, e) {
			_this.store.purchaseParams[type] = e.target.value;
		};

		_this.onDateChange = function (dates, dateStrings) {
			if (dates.length == 0) {
				// 清空
				_this.store.purchaseParams = Object.assign(mobx.toJS(_this.store.purchaseParams), {
					beginTime: 0,
					endTime: 0
				});
			} else {
				// 赋值
				_this.store.purchaseParams = Object.assign(mobx.toJS(_this.store.purchaseParams), {
					beginTime: (0, _moment2.default)(dateStrings[0]).valueOf(),
					endTime: (0, _moment2.default)(dateStrings[1]).valueOf()
				});
			}
		};

		_this.handleSearch = function () {
			_this.store.getPurchasingOrderPageList();
		};

		_this.showSizeChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this.store.purchaseParams.pageIndex = 1;
								_this.store.purchaseParams.pageSize = pageSize;
								_this.store.getPurchasingOrderPageList();

							case 3:
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

		_this.onPageChange = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this.store.purchaseParams.pageIndex = pageNumber;
								_this.store.getPurchasingOrderPageList();

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x3) {
				return _ref2.apply(this, arguments);
			};
		}();

		_this.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this.downloadUrl = function (record) {
			var filePath = record.filePath,
			    fileName = record.fileName;

			var isImage = /\.(doc|docx)$/.test(fileName) || /\.(xls|xlsx)$/.test(fileName) || /\.(pdf)$/.test(fileName) || /\.(zip|rar)$/.test(fileName) || /\.(ppt|pptx)$/.test(fileName);
			if (isImage) {
				(0, _download.downloadFile)(filePath, fileName); // 直接下载pdf
			} else {
				_this.downloadImage(filePath, fileName);
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

		_this.store = _this.props.store;
		_this.state = {};
		return _this;
	}

	_createClass(SalesOrder, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 手动下载


		// 直接下载

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _store = this.store,
			    purchaseTable = _store.purchaseTable,
			    purchaseTotalCount = _store.purchaseTotalCount,
			    purchaseParams = _store.purchaseParams,
			    purchaseloading = _store.purchaseloading;

			var _mobx$toJS = mobx.toJS(purchaseParams),
			    pageIndex = _mobx$toJS.pageIndex,
			    pageSize = _mobx$toJS.pageSize;

			var columns = [{ title: '序号', dataIndex: 'keyIndex', align: 'center', width: '50px' }, {
				title: '采购订单编号', dataIndex: 'serial', align: 'center', width: '9%', render: function render(text, record) {
					return _react2.default.createElement(
						_reactRouterDom.Link,
						{ to: "/order/purchase?id=" + record.id },
						text
					);
				}
			}, { title: '供货单位', dataIndex: 'supplyCompany', align: 'left', width: '11%', render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: {
								wordWrap: 'break-word',
								whiteSpace: 'pre-wrap' } },
						text
					);
				} }, { title: '要货地址', dataIndex: 'address', align: 'center', width: '10%', render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: {
								wordWrap: 'break-word',
								whiteSpace: 'pre-wrap' } },
						text
					);
				} }, {
				title: '要货时间', dataIndex: 'orderTime', align: 'center', width: '100px', render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				}
			}, { title: '要货人', dataIndex: 'orderer', align: 'center', width: '100px' }, {
				title: '订单时间', dataIndex: 'orderTime', align: 'center', width: '100px', render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				}
			}, { title: '附件', dataIndex: 'atts', align: 'center', width: '11%', render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						record.atts == null || record.atts == [] ? "" : record.atts.map(function (item) {
							return item.fileName;
						}),
						record.atts == null || record.atts == [] || record.atts.length == 0 ? null : _react2.default.createElement(
							_antd.Popover,
							{ content: _react2.default.createElement(
									'div',
									null,
									record.atts.map(function (item) {
										return _react2.default.createElement(
											'p',
											null,
											item.fileName,
											' ',
											_react2.default.createElement(
												'a',
												{ href: 'javascript:void(0);', onClick: _this3.downloadUrl.bind(_this3, item) },
												'\u4E0B\u8F7D'
											)
										);
									})
								), title: '\u9644\u4EF6', trigger: 'click' },
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0);' },
								'\u4E0B\u8F7D'
							)
						)
					);
				}
			}, { title: '销售订单编号', dataIndex: 'salesSerial', align: 'center', render: function render(text, record) {
					return _react2.default.createElement(
						_reactRouterDom.Link,
						{ to: "/order/sales?status=view&id=" + record.salesId },
						text
					);
				}
			}];

			return _react2.default.createElement(
				'div',
				{ style: { height: 'auto' } },
				_react2.default.createElement(
					'div',
					{ className: 'clearfix' },
					_react2.default.createElement(
						InputGroup,
						{ className: 'fl', style: { width: 'auto' } },
						_react2.default.createElement(_antd.Input, { onChange: this.onChange.bind(this, 'serial'), style: { width: 139, marginLeft: 5 },
							placeholder: '\u91C7\u8D2D\u8BA2\u5355\u7F16\u53F7' }),
						_react2.default.createElement(_antd.Input, { onChange: this.onChange.bind(this, 'company'), style: { width: 139, marginLeft: 5 },
							placeholder: '\u4F9B\u8D27\u5355\u4F4D' }),
						_react2.default.createElement(_antd.Input, { onChange: this.onChange.bind(this, 'address'), style: { width: 139, marginLeft: 5 },
							placeholder: '\u8981\u8D27\u5730\u5740' }),
						_react2.default.createElement(RangePicker, {
							onChange: this.onDateChange,
							style: { width: 220, marginLeft: 5 },
							placeholder: ['要货时间', '要货时间']
						})
					),
					_react2.default.createElement(_antd.Input, { onChange: this.onChange.bind(this, 'orderer'), className: 'fl',
						style: { width: 139, marginLeft: 5 }, placeholder: '\u8981\u8D27\u4EBA' }),
					_react2.default.createElement(
						_antd.Button,
						{
							style: { marginLeft: 5 },
							className: 'fl',
							type: 'primary',
							onClick: this.handleSearch
						},
						'\u641C\u7D22'
					)
				),
				_react2.default.createElement(
					_antd.ConfigProvider,
					{ renderEmpty: customizeRenderEmpty },
					_react2.default.createElement(_antd.Table, {
						className: 'm_table mt20',
						columns: columns,
						dataSource: mobx.toJS(purchaseTable),
						size: 'middle',
						rowKey: function rowKey(record) {
							return record.id;
						},
						pagination: false,
						loading: purchaseloading
					}),
					_react2.default.createElement(_antd.Pagination, {
						className: 'mt20 tr',
						current: pageIndex,
						pageSize: pageSize,
						total: purchaseTotalCount,
						onShowSizeChange: this.showSizeChange,
						onChange: this.onPageChange,
						showSizeChanger: true,
						showQuickJumper: true,
						showTotal: this.showTotal
					})
				)
			);
		}
	}]);

	return SalesOrder;
}(_react2.default.Component)) || _class) || _class;

exports.default = SalesOrder;

/***/ }),

/***/ 2050:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
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

var _MyUpload = __webpack_require__(1782);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _download = __webpack_require__(68);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = _antd.Input.Group;
var Option = _antd.Select.Option;
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

var SalesOrder = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(SalesOrder, _React$Component);

	function SalesOrder(props) {
		var _this2 = this;

		_classCallCheck(this, SalesOrder);

		var _this = _possibleConstructorReturn(this, (SalesOrder.__proto__ || Object.getPrototypeOf(SalesOrder)).call(this, props));

		_this.handleAdd = function () {
			_this.props.history.push("/order/sales?status=add");
		};

		_this.onChange = function (type, e) {
			_this.store.salesParams[type] = e.target.value;
		};

		_this.onDateChange = function (dates, dateStrings) {
			if (dates.length == 0) {
				// 清空
				_this.store.salesParams = Object.assign(mobx.toJS(_this.store.salesParams), {
					beginTime: 0,
					endTime: 0
				});
			} else {
				// 赋值
				_this.store.salesParams = Object.assign(mobx.toJS(_this.store.salesParams), {
					beginTime: (0, _moment2.default)(dateStrings[0]).valueOf(),
					endTime: (0, _moment2.default)(dateStrings[1]).valueOf()
				});
			}
		};

		_this.handleChange = function (type, value) {
			if (value == undefined) {
				// 清空
				_this.store.salesParams[type] = 10;
			} else {
				_this.store.salesParams[type] = value;
			}
		};

		_this.handleSearch = function () {
			_this.store.getSalesOrderPageList();
		};

		_this.showSizeChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this.store.salesParams.pageIndex = 1;
								_this.store.salesParams.pageSize = pageSize;
								_this.store.getSalesOrderPageList();

							case 3:
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

		_this.onPageChange = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this.store.salesParams.pageIndex = pageNumber;
								_this.store.getSalesOrderPageList();

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x3) {
				return _ref2.apply(this, arguments);
			};
		}();

		_this.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this.showModal = function (record) {
			_this.setState({
				visible: true,
				stateValue: record.state,
				id: record.id
			});
		};

		_this.handleOk = function () {
			var _this$state = _this.state,
			    id = _this$state.id,
			    stateValue = _this$state.stateValue;

			var params = {
				id: id,
				state: typeof stateValue == "string" ? Number(stateValue) : stateValue
			};
			_this.store.changeSalesOrderState(params).then(function (res) {
				if (res) {
					_antd.message.success("操作成功");
					_this.setState({
						visible: false
					});
					_this.handleSearch();
				}
			});
		};

		_this.handleCancel = function (e) {
			_this.setState({
				visible: false
			});
		};

		_this.radioChange = function (e) {
			_this.setState({
				stateValue: e.target.value
			});
		};

		_this.confirm = function (id) {
			var params = {
				id: id
			};
			_this.store.delSalesOrderState(params).then(function (res) {
				if (res) {
					_antd.message.success("删除成功");
					_this.store.getSalesOrderPageList();
				}
			});
		};

		_this.cancel = function (e) {
			console.log(e);
		};

		_this.saveAttsToSalesOrder = function (type, params) {
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
			var param = {
				atts: arr == null ? [] : arr.map(function (item) {
					return Object.assign({
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						id: item.id
					});
				}),
				salesOrderId: type
			};
			_this.store.saveAttsToSalesOrder(param).then(function (res) {
				if (res) {
					_antd.message.success("附件上传成功");
					// 更新
					_this.store.getSalesOrderPageList();
				}
			});
		};

		_this.downloadUrl = function (record) {
			var filePath = record.filePath,
			    fileName = record.fileName;

			var isImage = /\.(doc|docx)$/.test(fileName) || /\.(xls|xlsx)$/.test(fileName) || /\.(pdf)$/.test(fileName) || /\.(zip|rar)$/.test(fileName) || /\.(ppt|pptx)$/.test(fileName);
			if (isImage) {
				(0, _download.downloadFile)(filePath, fileName); // 直接下载pdf
			} else {
				_this.downloadImage(filePath, fileName);
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

		_this.confirmOrder = function (id) {
			var params = {
				salesOrderId: id
			};
			_this.store.buildPurchasingOrder(params).then(function (res) {
				if (res) {
					_antd.message.success("采购订单生成成功！");
				}
			});
		};

		_this.delUrl = function (item) {
			var id = item.id;

			_this.store.delAttById({ id: id }).then(function (res) {
				if (res) {
					_antd.message.success("附件删除成功");
					// 更新
					_this.store.getSalesOrderPageList();
				}
			});
		};

		_this.store = _this.props.store;
		_this.state = {
			stateData: [{
				id: "0",
				name: "编辑中"
			}, {
				id: "1",
				name: "已下单"
			}, {
				id: "2",
				name: "生产中"
			}, {
				id: "3",
				name: "运输中"
			}, {
				id: "4",
				name: "已验收"
			}],
			visible: false,
			stateValue: 0,
			id: ""
		};
		return _this;
	}

	_createClass(SalesOrder, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 新增


		// 附件


		// 手动下载


		// 直接下载


		// 生成订单


		// 删除附件

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _store = this.store,
			    salesTable = _store.salesTable,
			    salesTotalCount = _store.salesTotalCount,
			    salesParams = _store.salesParams,
			    salesloading = _store.salesloading,
			    ossData = _store.ossData;

			var columns = [{ title: '序号', dataIndex: 'keyIndex', align: 'center', width: '50px' }, { title: '订单编号', dataIndex: 'serial', align: 'center', width: '9%', render: function render(text, record) {
					return _react2.default.createElement(
						_reactRouterDom.Link,
						{ to: "/order/sales?status=" + (record.state == 0 ? "edit" : "view") + "&id=" + record.id },
						text
					);
				}
			}, {
				title: '状态', dataIndex: 'state', align: 'left', width: '80px', render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_this3.state.stateData.filter(function (item) {
							return item.id == text;
						})[0].name || "",
						_react2.default.createElement(_antd.Icon, { onClick: _this3.showModal.bind(_this3, record), type: 'form',
							style: { cursor: "pointer", marginLeft: "3px", color: "#1890ff" } })
					);
				}
			}, { title: '客户单位', dataIndex: 'customerCompany', align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: {
								wordWrap: 'break-word',
								whiteSpace: 'pre-wrap' } },
						text
					);
				}
			}, { title: '劳务仓编号', dataIndex: 'number', align: 'center', width: '10%', render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						record.laborInfos == null ? "" : record.laborInfos.map(function (item, index) {
							return _react2.default.createElement(
								'p',
								{ key: index },
								item.number
							);
						})
					);
				}
			}, { title: '数量', dataIndex: 'unit', align: 'center', width: '80px', render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						record.laborInfos == null ? "" : record.laborInfos.map(function (item, index) {
							return _react2.default.createElement(
								'p',
								{ key: index },
								item.count
							);
						})
					);
				}
			}, {
				title: '要货时间', dataIndex: 'agreedTime', align: 'center', width: '100px', render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				}
			}, { title: '制单人', dataIndex: 'createUserName', align: 'center', width: '100px' }, {
				title: '下单时间', dataIndex: 'placeOrderTime', align: 'center', width: '100px',
				render: function render(text, record) {
					return text === 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				}
			}, { title: '附件', dataIndex: 'atts', align: 'center', width: '9%', render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						record.atts == null || record.atts == [] ? "" : record.atts.map(function (item) {
							return item.fileName;
						})[0],
						record.atts == null || record.atts == [] || record.atts.length == 0 ? null : _react2.default.createElement(
							_antd.Popover,
							{ content: _react2.default.createElement(
									'div',
									null,
									record.atts.map(function (item) {
										return _react2.default.createElement(
											'p',
											null,
											item.fileName,
											_react2.default.createElement(
												'a',
												{ href: 'javascript:void(0);', onClick: _this3.downloadUrl.bind(_this3, item) },
												'\u4E0B\u8F7D'
											),
											'\xA0\xA0',
											_react2.default.createElement(
												'a',
												{ href: 'javascript:void(0);', onClick: _this3.delUrl.bind(_this3, item) },
												'\u5220\u9664'
											)
										);
									})
								), title: '\u9644\u4EF6', trigger: 'click' },
							_react2.default.createElement(
								'span',
								{ style: { color: "#1890ff", cursor: "pointer" } },
								'\u4E0B\u8F7D'
							)
						)
					);
				}
			}, {
				title: '操作', dataIndex: 'caozuo', align: 'left', render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(_MyUpload2.default, {
							saveAttachment: _this3.saveAttsToSalesOrder.bind(_this3, record.id),
							disabled: false,
							multiple: false
							//accept={".jpg,.jpeg,.gif,.png,.bmp"}
							, ossData: mobx.toJS(ossData),
							fileList: []
						}),
						_react2.default.createElement(
							_antd.Popconfirm,
							{
								title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?',
								onConfirm: _this3.confirm.bind(_this3, record.id),
								onCancel: _this3.cancel,
								okText: '\u662F',
								cancelText: '\u5426'
							},
							_react2.default.createElement(_antd.Icon, { style: { margin: '0 10px', fontSize: "16px", color: "#1890ff" }, className: 'pointer',
								type: 'delete', title: '\u5220\u9664' })
						),
						_react2.default.createElement(_antd.Icon, { style: { fontSize: "16px", color: "#1890ff" },
							onClick: _this3.confirmOrder.bind(_this3, record.id),
							className: 'pointer',
							type: 'check-circle',
							title: '\u751F\u6210\u91C7\u8D2D\u8BA2\u5355' })
					);
				}
			}];
			var _state = this.state,
			    stateData = _state.stateData,
			    visible = _state.visible,
			    stateValue = _state.stateValue;

			var _mobx$toJS = mobx.toJS(salesParams),
			    pageIndex = _mobx$toJS.pageIndex,
			    pageSize = _mobx$toJS.pageSize;

			var options = stateData.map(function (item) {
				return Object.assign({}, { label: item.name, value: item.id });
			});
			return _react2.default.createElement(
				'div',
				{ style: { height: 'auto' } },
				_react2.default.createElement(
					'div',
					{ className: 'clearfix' },
					_react2.default.createElement(
						_antd.Button,
						{
							className: 'fl',
							type: 'primary',
							icon: 'plus',
							onClick: this.handleAdd
						},
						'\u65B0\u589E\u8BA2\u5355'
					),
					_react2.default.createElement(
						InputGroup,
						{ className: 'fl', style: { width: 'auto' } },
						_react2.default.createElement(_antd.Input, { onChange: this.onChange.bind(this, 'serial'), style: { width: 139, marginLeft: 5 },
							placeholder: '\u8BA2\u5355\u7F16\u53F7' }),
						_react2.default.createElement(_antd.Input, { onChange: this.onChange.bind(this, 'company'), style: { width: 139, marginLeft: 5 },
							placeholder: '\u5BA2\u6237\u5355\u4F4D' }),
						_react2.default.createElement(_antd.Input, { onChange: this.onChange.bind(this, 'number'), style: { width: 139, marginLeft: 5 },
							placeholder: '\u52B3\u52A1\u4ED3\u7F16\u53F7' }),
						_react2.default.createElement(RangePicker, {
							onChange: this.onDateChange,
							style: { width: 220, marginLeft: 5 },
							placeholder: ['要货时间', '要货时间']
						})
					),
					_react2.default.createElement(
						_antd.Select,
						{ allowClear: true, className: 'fl', style: { width: 139, marginLeft: 5 },
							onChange: this.handleChange.bind(this, 'state'),
							placeholder: '\u72B6\u6001' },
						stateData.map(function (item) {
							return _react2.default.createElement(
								Option,
								{ key: item.id, value: item.id },
								item.name
							);
						})
					),
					_react2.default.createElement(
						_antd.Button,
						{
							style: { marginLeft: 5 },
							className: 'fl',
							type: 'primary',
							onClick: this.handleSearch
						},
						'\u641C\u7D22'
					)
				),
				_react2.default.createElement(
					_antd.ConfigProvider,
					{ renderEmpty: customizeRenderEmpty },
					_react2.default.createElement(_antd.Table, {
						className: 'm_table mt20',
						columns: columns,
						dataSource: mobx.toJS(salesTable),
						size: 'middle',
						rowKey: function rowKey(record) {
							return record.id;
						},
						pagination: false,
						loading: salesloading
					}),
					_react2.default.createElement(_antd.Pagination, {
						className: 'mt20 tr',
						current: pageIndex,
						pageSize: pageSize,
						total: salesTotalCount,
						onShowSizeChange: this.showSizeChange,
						onChange: this.onPageChange,
						showSizeChanger: true,
						showQuickJumper: true,
						showTotal: this.showTotal
					})
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: '\u4FEE\u6539\u8BA2\u5355\u72B6\u6001',
						okText: "提交",
						visible: visible,
						onOk: this.handleOk,
						onCancel: this.handleCancel
					},
					_react2.default.createElement(_antd.Radio.Group, {
						options: options,
						onChange: this.radioChange,
						value: typeof stateValue == "string" ? stateValue : stateValue.toString()
					})
				)
			);
		}
	}]);

	return SalesOrder;
}(_react2.default.Component)) || _class) || _class;

exports.default = SalesOrder;

/***/ })

});
//# sourceMappingURL=38-afa7d4b4bae6ff2924e9.1629092961041.js.map