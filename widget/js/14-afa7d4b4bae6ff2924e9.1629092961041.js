webpackJsonp([14],{

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 项目管理
            * qiufh@glodon.com
            * */

//import DailyDiary from '@/components/xmgl/DailyDiary';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _Person = __webpack_require__(2099);

var _Person2 = _interopRequireDefault(_Person);

var _Quality = __webpack_require__(2102);

var _Quality2 = _interopRequireDefault(_Quality);

var _ItemSetting = __webpack_require__(2097);

var _ItemSetting2 = _interopRequireDefault(_ItemSetting);

var _Mechanical = __webpack_require__(2098);

var _Mechanical2 = _interopRequireDefault(_Mechanical);

var _Progress = __webpack_require__(2101);

var _Progress2 = _interopRequireDefault(_Progress);

var _Epidemic = __webpack_require__(2096);

var _Epidemic2 = _interopRequireDefault(_Epidemic);

var _Environment = __webpack_require__(2095);

var _Environment2 = _interopRequireDefault(_Environment);

var _MateriaModal = __webpack_require__(1996);

var _MateriaModal2 = _interopRequireDefault(_MateriaModal);

var _XmglStore = __webpack_require__(1800);

var _XmglStore2 = _interopRequireDefault(_XmglStore);

var _ConstructionStore = __webpack_require__(1798);

var _ConstructionStore2 = _interopRequireDefault(_ConstructionStore);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var Xmgl = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Xmgl, _React$Component);

	function Xmgl(props) {
		_classCallCheck(this, Xmgl);

		var _this = _possibleConstructorReturn(this, (Xmgl.__proto__ || Object.getPrototypeOf(Xmgl)).call(this, props));

		_this.callback = function (key) {
			_this.setState({
				key: key
			}, function () {
				if (key !== "8") {
					_this["child" + key].getTabeData();
				}
			});
		};

		_this.store = new _XmglStore2.default();
		_this.conStore = new _ConstructionStore2.default();
		_this.state = {
			key: "1" // tabs
		};
		return _this;
	}

	_createClass(Xmgl, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var search = this.props.location.search;
			var projectId = _url2.default.parse(search, true).query.projectId;
			var parojectName = _url2.default.parse(search, true).query.name;
			if (projectId !== undefined) {
				this.store.projectId = projectId;
				this.store.parojectName = parojectName;
				this.conStore.projectId = projectId;
				localStorage.setItem("projectId", projectId);
				localStorage.setItem("projectName", parojectName);
			} else {
				this.store.projectId = localStorage.getItem("projectId");
				this.store.parojectName = localStorage.getItem("projectName");
				this.conStore.projectId = localStorage.getItem("projectId");
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// 获取大文件上传sts
			this.store.getSts();
			this.child1.getTabeData();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'getPar',
		value: function getPar(par) {
			//获取当前URL
			var local_url = document.location.href;
			//获取要取得的get参数位置
			var get = local_url.indexOf(par + "=");
			if (get == -1) {
				return false;
			}
			//截取字符串
			var get_par = local_url.slice(par.length + get + 1);
			//判断截取后的字符串是否还有其他get参数
			var nextPar = get_par.indexOf("&");
			if (nextPar != -1) {
				get_par = get_par.slice(0, nextPar);
			}
			return get_par;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var ossData = this.store.ossData;
			var key = this.state.key;


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
							'\u65E5\u5FD7'
						)
					)
				),
				_react2.default.createElement(
					_antd.Tabs,
					{
						className: 'mt10',
						tabPosition: 'left',
						activeKey: key,
						onChange: this.callback
					},
					_react2.default.createElement(
						TabPane,
						{ tab: '\u75AB\u60C5\u9632\u63A7', key: '1' },
						_react2.default.createElement(_Epidemic2.default, {
							onRef: function onRef(ref) {
								_this2.child1 = ref;
							},
							ossData: mobx.toJS(ossData),
							store: this.store })
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u8FDB\u5EA6\u63A7\u5236', key: '2' },
						_react2.default.createElement(_Progress2.default, {
							onRef: function onRef(ref) {
								_this2.child2 = ref;
							},
							ossData: mobx.toJS(ossData),
							store: this.store })
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u8D28\u91CF\u5B89\u5168', key: '3' },
						_react2.default.createElement(_Quality2.default, {
							onRef: function onRef(ref) {
								_this2.child3 = ref;
							},
							store: this.store
						})
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u4EBA\u5458\u7BA1\u7406', key: '4' },
						_react2.default.createElement(_Person2.default, {
							onRef: function onRef(ref) {
								_this2.child4 = ref;
							},
							store: this.store
						})
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u673A\u68B0\u8BBE\u5907', key: '5' },
						_react2.default.createElement(_Mechanical2.default, {
							onRef: function onRef(ref) {
								_this2.child5 = ref;
							},
							store: this.store })
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u6750\u6599\u7BA1\u7406', key: '6' },
						_react2.default.createElement(_MateriaModal2.default, {
							onRef: function onRef(ref) {
								_this2.child6 = ref;
							},
							ossData: mobx.toJS(ossData),
							store: this.conStore
						})
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u65BD\u5DE5\u73AF\u5883', key: '7' },
						_react2.default.createElement(_Environment2.default, {
							onRef: function onRef(ref) {
								_this2.child7 = ref;
							},
							store: this.store
						})
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u9879\u76EE\u8BBE\u7F6E', key: '8' },
						_react2.default.createElement(_ItemSetting2.default, {
							store: this.store
						})
					)
				)
			);
		}
	}]);

	return Xmgl;
}(_react2.default.Component)) || _class;

exports.default = Xmgl;

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

/***/ 1613:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 基于antd 自动选择组件封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * dangw@glodon.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


var Option = _antd.AutoComplete.Option;

var AutoSelect = function (_React$Component) {
	_inherits(AutoSelect, _React$Component);

	function AutoSelect(props) {
		_classCallCheck(this, AutoSelect);

		var _this = _possibleConstructorReturn(this, (AutoSelect.__proto__ || Object.getPrototypeOf(AutoSelect)).call(this, props));

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
					variables: _this.props.variables
				})
			}).then(function (response) {
				return response.json();
			}).then(function (json) {
				var data = json.data[_this.props.type];
				if (_this.props.type == "getExpectList") {
					_this.setState({
						result: data.map(function (item) {
							return Object.assign({}, {
								expectId: item.id,
								name: item.name,
								completeToday: item.completeToday == undefined || item.completeToday == null ? "" : item.completeToday,
								remark: item.remark,
								completeTotal: item.completeTotal == undefined || item.completeTotal == null ? "" : item.completeTotal,
								units: item.units,
								quantities: item.quantities
							});
						})
					});
				} else if (_this.props.type == "getDayTaskByDate") {
					_this.setState({
						result: data.filter(function (item) {
							return !item.id.includes("!");
						})
					});
				} else {
					_this.setState({
						result: data
					});
				}
			});
		};

		_this.state = {
			result: [],
			value: props.value || ''
		};
		return _this;
	}

	_createClass(AutoSelect, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ('value' in nextProps && this.props.value !== nextProps.value) {
				this.setState({
					value: nextProps.value
				});
			}
		}
	}, {
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
			var _state = this.state,
			    result = _state.result,
			    value = _state.value;
			var keyId = this.props.keyId;

			var type = keyId !== undefined ? keyId : "name";
			var children = result.map(function (item) {
				return _react2.default.createElement(
					Option,
					{ key: item.id == null ? "" : item.id, value: item[type] == null ? "" : item[type], val: item, title: item.name },
					item.name
				);
			});
			return _react2.default.createElement(
				_antd.AutoComplete,
				{ style: { width: '100%' },
					onSelect: this.handleChange,
					onChange: this.handleChange
					/* filterOption={(inputValue, option) =>
       option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }*/
					, value: value,
					onFocus: this.handleFocus
				},
				children
			);
		}
	}]);

	return AutoSelect;
}(_react2.default.Component);

exports.default = AutoSelect;

/***/ }),

/***/ 1798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23; /*
                                                                                                                                                                                                                                                                                                                                                                          * 施工过程 store
                                                                                                                                                                                                                                                                                                                                                                          */


var _mobx = __webpack_require__(12);

var _api = __webpack_require__(30);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _construction = __webpack_require__(719);

var _construction2 = _interopRequireDefault(_construction);

var _xmgl = __webpack_require__(340);

var _xmgl2 = _interopRequireDefault(_xmgl);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

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

var ConstructionStore = (_class = function () {
  function ConstructionStore() {
    _classCallCheck(this, ConstructionStore);

    _initDefineProp(this, "pageIndex", _descriptor, this);

    _initDefineProp(this, "pageSize", _descriptor2, this);

    _initDefineProp(this, "totalCount", _descriptor3, this);

    _initDefineProp(this, "tableData", _descriptor4, this);

    _initDefineProp(this, "orgUser", _descriptor5, this);

    _initDefineProp(this, "projectField", _descriptor6, this);

    _initDefineProp(this, "projectId", _descriptor7, this);

    _initDefineProp(this, "buildUnits", _descriptor8, this);

    _initDefineProp(this, "supervisionUnits", _descriptor9, this);

    _initDefineProp(this, "constructionUnits", _descriptor10, this);

    _initDefineProp(this, "cardpageIndex", _descriptor11, this);

    _initDefineProp(this, "cardpageSize", _descriptor12, this);

    _initDefineProp(this, "cardtotalCount", _descriptor13, this);

    _initDefineProp(this, "cardtableData", _descriptor14, this);

    _initDefineProp(this, "material", _descriptor15, this);

    _initDefineProp(this, "expectId", _descriptor16, this);

    _initDefineProp(this, "technology", _descriptor17, this);

    _initDefineProp(this, "technologypageIndex", _descriptor18, this);

    _initDefineProp(this, "technologypageSize", _descriptor19, this);

    _initDefineProp(this, "technologytotalCount", _descriptor20, this);

    _initDefineProp(this, "technologytableData", _descriptor21, this);

    _initDefineProp(this, "name", _descriptor22, this);

    _initDefineProp(this, "ZPlanList", _descriptor23, this);
  } // 组织ids
  // 项目字段
  // 项目id
  // 建设单位
  // 施工单位
  // 监理单位
  // 物料字段


  _createClass(ConstructionStore, [{
    key: "getMaterialList",


    // 获取项目物料列表
    value: function getMaterialList() {
      var _this = this;

      return (0, _api.requestPost)('getMaterialList', _config2.default.construction.getMaterialList, _construction2.default.construction.getMaterialList, {
        projectId: this.projectId,
        text: '',
        pageIndex: this.cardpageIndex,
        pageSize: this.cardpageSize
      }).then(function (res) {
        if (res) {
          _this.cardpageIndex = res.pageIndex;
          _this.cardpageSize = res.pageSize;
          _this.cardtotalCount = res.totalCount;
          _this.cardtableData = Object.assign([], res.body.length ? res.body.map(function (item, index) {
            return Object.assign(item, { key: index + 1 });
          }) : []);
        }
      });
    }

    // 获取物料

  }, {
    key: "getMaterial",
    value: function getMaterial(param) {
      return (0, _api.requestPost)('getMaterial', _config2.default.construction.getMaterial, _construction2.default.construction.getMaterial, {
        id: param
      });
    }

    // 保存修改物料

  }, {
    key: "saveMaterial",
    value: function saveMaterial(param) {
      return (0, _api.requestPost)('saveMaterial', _config2.default.construction.saveMaterial, _construction2.default.construction.saveMaterial, {
        material: param
      });
    }

    // 删除物料

  }, {
    key: "delMaterial",
    value: function delMaterial(param) {
      return (0, _api.requestPost)('delMaterial', _config2.default.construction.delMaterial, _construction2.default.construction.delMaterial, {
        id: param
      });
    }

    // 保存

  }, {
    key: "saveProject",
    value: function saveProject() {
      return (0, _api.requestPost)('saveProject', _config2.default.construction.saveProject, _construction2.default.construction.saveProject, {
        project: this.projectField
      });
    }

    // 工艺工法字段

  }, {
    key: "getTechnologyList",


    // 获取工艺工法库列表
    value: function getTechnologyList() {
      var _this2 = this;

      return (0, _api.requestPost)('getTechnologyList', _config2.default.xmgl.getTechnologyList, _xmgl2.default.xmgl.getTechnologyList, {
        name: this.name,
        pageIndex: this.technologypageIndex,
        pageSize: this.technologypageSize
      }).then(function (res) {
        if (res) {
          _this2.technologypageIndex = res.pageIndex;
          _this2.technologypageSize = res.pageSize;
          _this2.technologytotalCount = res.totalCount;
          _this2.technologytableData = Object.assign([], res.body);
        }
      });
    }

    // 保存

  }, {
    key: "addTechnology",
    value: function addTechnology() {
      return (0, _api.requestPost)('saveTechnology', _config2.default.xmgl.saveTechnology, _xmgl2.default.xmgl.saveTechnology, {
        technology: this.technology
      });
    }

    // 删除工艺工法

  }, {
    key: "delTechnology",
    value: function delTechnology(param) {
      return (0, _api.requestPost)('delTechnology', _config2.default.xmgl.delTechnology, _xmgl2.default.xmgl.delTechnology, {
        id: param
      });
    }
  }, {
    key: "getProjectZPlanList",

    // 获取斑马进度计划列表
    value: function getProjectZPlanList() {
      var _this3 = this;

      return (0, _api.requestPost)('getProjectZPlanList', _config2.default.construction.getProjectZPlanList, _construction2.default.construction.getProjectZPlanList, {
        text: ""
      }).then(function (res) {
        if (Array.isArray(res)) {
          _this3.ZPlanList = Object.assign([], res);
        }
      });
    }
    // @observable wisdomseeProject = [];
    // 全部项目明细列表查询

  }, {
    key: "getAllProjectList",
    value: function getAllProjectList(params) {
      return (0, _api.requestPost)('getAllProjectList', _config2.default.bpm.getAllProjectList, _bpm2.default.bpm.getAllProjectList, {
        beginTime: (0, _moment2.default)().startOf('year').valueOf(),
        endTime: (0, _moment2.default)().endOf('year').valueOf(),
        text: params.text,
        products: [],
        state: [],
        masterIds: [],
        pageIndex: params.pageIndex,
        pageSize: 10
      });
    }
  }, {
    key: "getProjectInfoById",
    value: function getProjectInfoById(param) {
      return (0, _api.requestPost)('getProjectInfoById', _config2.default.bpm.getProjectInfoById, _bpm2.default.bpm.getProjectInfoById, {
        projectId: param
      });
    }
  }]);

  return ConstructionStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "pageIndex", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "pageSize", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "totalCount", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "tableData", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "orgUser", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "projectField", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      id: null,
      name: '',
      code: '',
      region: '',
      address: '',
      buildUnits: { "id": "",
        "name": "",
        "type": 1,
        "orgUser": [] },
      supervisionUnits: { "id": "",
        "name": "",
        "type": 2,
        "orgUser": [] },
      constructionUnits: { "id": "",
        "name": "",
        "type": 3,
        "orgUser": [] },
      subcontractors: [],
      foreman: '',
      isSave: 1,
      createTime: null,
      isDeleted: 1,
      longitude: null,
      latitude: null,
      state: "在建", // 项目状态1在建2完工3停工
      requiredTime: null,
      peopleCount: null, //使用人员总数
      positions: [], // 位置信息
      zplan: null, // 关联斑马
      wisdomseeProjectId: '' //关联项目看板
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "projectId", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "buildUnits", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "supervisionUnits", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "constructionUnits", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "cardpageIndex", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "cardpageSize", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "cardtotalCount", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "cardtableData", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "material", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      id: null,
      projectId: "",
      name: "",
      spec: "",
      manufacturer: null,
      certificateNumber: null,
      num: null,
      item: null,
      result: null,
      remark: null,
      reportId: null,
      totalNum: null,
      deliveryTime: null,
      units: null,
      attachments: [],
      "taskId": '',
      "expectResourceId": "",
      "resourceType": "料",
      "dayTaskName": ""
    };
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "expectId", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _applyDecoratedDescriptor(_class.prototype, "getMaterialList", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getMaterialList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getMaterial", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getMaterial"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveMaterial", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveMaterial"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delMaterial", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "delMaterial"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveProject", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveProject"), _class.prototype), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "technology", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      "id": null,
      "name": "",
      "ready": "",
      "content": "",
      "workingHours": 1
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "technologypageIndex", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "technologypageSize", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "technologytotalCount", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "technologytableData", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "name", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _applyDecoratedDescriptor(_class.prototype, "getTechnologyList", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getTechnologyList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addTechnology", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "addTechnology"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delTechnology", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "delTechnology"), _class.prototype), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "ZPlanList", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "getProjectZPlanList", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getProjectZPlanList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getAllProjectList", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getAllProjectList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getProjectInfoById", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "getProjectInfoById"), _class.prototype)), _class);
exports.default = ConstructionStore;

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

/***/ }),

/***/ 1975:
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 基于antd select组件封装 多选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * dangw@glodon.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


var Option = _antd.Select.Option;

var AsyncSelectMuti = function (_React$Component) {
  _inherits(AsyncSelectMuti, _React$Component);

  function AsyncSelectMuti(props) {
    _classCallCheck(this, AsyncSelectMuti);

    var _this = _possibleConstructorReturn(this, (AsyncSelectMuti.__proto__ || Object.getPrototypeOf(AsyncSelectMuti)).call(this, props));

    _this.handleChange = function (value) {
      if (value === undefined) return false;
      _this.setState({ value: value === undefined ? "" : value });
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
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
        var data = json.data.getUserInfoListByRoleCode.body;
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
      this.handleFocus();
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.state.data.map(function (d, i) {
        return _react2.default.createElement(
          Option,
          { value: d.id, key: i },
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
          disabled: this.props.disabled,
          mode: 'multiple'
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
  value: _propTypes2.default.string, // 默认值
  url: _propTypes2.default.string,
  dataMapFunc: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};

/***/ }),

/***/ 1996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 物料组件
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

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _AutoSelect = __webpack_require__(1613);

var _AutoSelect2 = _interopRequireDefault(_AutoSelect);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _xmgl = __webpack_require__(340);

var _xmgl2 = _interopRequireDefault(_xmgl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _antd.Modal.confirm;

var MateriaModal = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(MateriaModal, _React$Component);

	function MateriaModal(props) {
		var _this3 = this;

		_classCallCheck(this, MateriaModal);

		var _this2 = _possibleConstructorReturn(this, (MateriaModal.__proto__ || Object.getPrototypeOf(MateriaModal)).call(this, props));

		_this2.getTabeData = function () {
			_this2.store.getMaterialList();
		};

		_this2.showSizeChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this2.store.cardpageIndex = 1;
								_this2.store.cardpageSize = pageSize;
								_this2.store.getMaterialList();

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
								_this2.store.cardpageIndex = pageNumber;
								_this2.store.getMaterialList();

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

		_this2.handAdd = function () {
			_this2.setState({
				visible: true,
				title: '新增材料'
			}, function () {
				_this2.store.material = Object.assign(mobx.toJS(_this2.store.material), { deliveryTime: (0, _moment2.default)().format("YYYY-MM-DD"), projectId: _this2.store.projectId });
			});
		};

		_this2.handEdit = function (param) {
			_this2.setState({
				visible: true,
				title: '编辑材料'
			}, function () {
				_this2.store.getMaterial(param).then(function (res) {
					if (res) {

						_this2.store.material = Object.assign({}, res, {
							attachments: res.attachments !== null ? res.attachments.map(function (vitem, index) {
								return Object.assign({}, {
									uid: vitem.fileId,
									name: vitem.fileName,
									status: 'done',
									url: vitem.filePath,
									fileId: vitem.fileId,
									fileName: vitem.fileName,
									filePath: vitem.filePath,
									id: vitem.fileId
								});
							}) : []
						});

						_this2.store.material.projectId = _this2.store.projectId;
					}
				});
			});
		};

		_this2.handDelete = function (param) {
			var _this = _this2;
			confirm({
				title: '您确定删除吗?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: function onOk() {
					_this.store.delMaterial(param).then(function (res) {
						if (res.code == 1) {
							_antd.message.success("删除成功");
							_this.cardpageIndex = 1;
							_this.cardpageSize = 10;
							_this.store.getMaterialList();
						} else {
							_antd.message.success(res.message || "删除失败");
						}
					});
				},
				onCancel: function onCancel() {
					console.log('Cancel');
				}
			});
		};

		_this2.handleSubmit = function (e) {
			var _this = _this2;
			e.preventDefault();
			_this2.props.form.validateFields(function (err, fieldsValue) {
				//console.log( fieldsValue);

				if (err) {
					return false;
				}
				var values = _extends({}, fieldsValue, {
					'deliveryTime': fieldsValue['deliveryTime'].format('YYYY-MM-DD')
				});

				// 处理附件
				var array = JSON.parse(JSON.stringify(_this2.store.material.attachments));
				var arr = [];
				array.length && array.map(function (item, index) {
					arr.push({
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath
						//id: item.id
					});
				});

				var material = JSON.parse(JSON.stringify(_this2.store.material));
				_this2.store.material = Object.assign(material, values);

				_this.store.saveMaterial(Object.assign(mobx.toJS(_this2.store.material), {
					attachments: arr
				})).then(function (res) {
					if (res.code == 1) {
						_antd.message.success("保存成功");
						_this.handleCancel();
						_this.cardpageIndex = 1;
						_this.cardpageSize = 10;
						_this.store.getMaterialList();
					} else {
						_antd.message.success(res.message || "保存失败");
					}
				});
			});
		};

		_this2.handleCancel = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.store.material = Object.assign({}, {
					id: null,
					projectId: _this2.store.projectId,
					name: "",
					spec: "",
					manufacturer: "",
					certificateNumber: "",
					num: null,
					item: null,
					result: null,
					remark: "",
					reportId: "",
					totalNum: "",
					deliveryTime: (0, _moment2.default)().format("YYYY-MM-DD"),
					units: "",
					attachments: [],
					"taskId": '',
					"expectResourceId": "",
					"resourceType": "料",
					"dayTaskName": ""
				});
				_this2.props.form.resetFields();
			});
		};

		_this2.limitDecimals = function (value) {
			var reg = /^(\-)*(\d+)\.(\d\d).*$/;
			console.log(value);
			if (typeof value === 'string') {
				return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
			} else if (typeof value === 'number') {
				return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
			} else {
				return '';
			}
		};

		_this2.handleChange = function (info) {
			//console.log(info, '0')
			var status = info.file.status;
			if (status === 'done') {
				// 上传成功
				//message.success(`${info.file.name}上传成功！`);
			} else if (status === 'error') {
				_antd.message.error(info.file.name + '\u4E0A\u4F20\u5931\u8D25\uFF01');
			} else if (status === 'removed') {
				//console.log('delete')
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
					file.fileId = file.response.body[0].fileId;
					file.id = file.response.body[0].fileId;
					file.fileName = file.response.body[0].fileName;
					file.filePath = file.response.body[0].fileURL;
				}
				return file;
			});
			fileList = fileList.filter(function (file) {
				if (file.response) {
					return file.response.status === 'ok';
				}
				return true;
			});

			_this2.setState({
				fileList: Object.assign([], [].concat(_toConsumableArray(fileList)))
			}, function () {
				// 更新附件数据
				var data = _this2.state.fileList.map(function (item, index) {
					return {
						uid: item.uid,
						name: item.fileName,
						status: 'done',
						url: item.fileURL,
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						id: item.fileId
					};
				});

				_this2.store.material.attachments = Object.assign([], data);
			});
		};

		_this2.handleAttment = function (params) {
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
			_this2.store.material.attachments = Object.assign([], arr);
		};

		_this2.doChange = function (value, e) {
			var val = e.props.val;

			if (val == undefined) {
				// 手输入
				_this2.store.material.taskId = "";
				_this2.store.material.dayTaskName = "";
				_this2.store.expectId = "";
			} else {
				// 选择
				_this2.store.material.taskId = val.id;
				_this2.store.material.dayTaskName = val.name;
				_this2.store.expectId = val.expectId;
			}
		};

		_this2.doChange2 = function (value, e) {
			var val = e.props.val;

			if (val == undefined) {
				// 手输入
				_this2.store.material.resourceType = "料";
				_this2.store.material.expectResourceId = "";
			} else {
				// 选择
				_this2.store.material.resourceType = val.type;
				_this2.store.material.expectResourceId = val.id;
			}
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			visible: false,
			title: '',
			fileList: []
		};
		return _this2;
	}

	_createClass(MateriaModal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			//this.getTabeData();
			this.props.onRef(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}

		// 新增


		// 编辑


		// 删除


		// 提交


		// 取消


		// 限制数字


		// 形象进度上传

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var columns = [{
				title: '序号',
				dataIndex: 'key',
				key: 'key',
				align: 'center'
			}, {
				title: '材料名称',
				dataIndex: 'name',
				key: 'name',
				align: 'center'
			}, {
				title: '规格型号',
				dataIndex: 'spec',
				key: 'spec',
				align: 'center'
			}, {
				title: '单位',
				dataIndex: 'units',
				key: 'units',
				align: 'center'
			}, {
				title: '数量',
				dataIndex: 'totalNum',
				key: 'totalNum',
				align: 'center'
			}, {
				title: '进场日期',
				dataIndex: 'deliveryTime',
				key: 'deliveryTime',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						text == null ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '供应商',
				dataIndex: 'manufacturer',
				key: 'manufacturer',
				align: 'center'
			},
			/*{
   	title: '合格证号',
   	dataIndex: 'certificateNumber',
   	key: 'certificateNumber',
   	className: 'tc'
   },*/
			{
				title: '操作',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'green', className: 'pointer', onClick: _this4.handEdit.bind(_this4, record.id) },
							'\u7F16\u8F91'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'red', className: 'pointer', onClick: _this4.handDelete.bind(_this4, record.id) },
							'\u5220\u9664'
						)
					);
				}
			}];
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 9 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 15 }
				}
			};
			var _state = this.state,
			    visible = _state.visible,
			    title = _state.title;

			var fields = mobx.toJS(this.store.material);
			var dateFormat = "YYYY-MM-DD";
			var props = {
				data: {
					type: 1, // 物料
					sourceId: this.store.material.id // 物料的id
				},
				name: 'file',
				multiple: true,
				action: _config2.default.management.multiUpload,
				onChange: this.handleChange,
				fileList: mobx.toJS(this.store.material.attachments)
			};

			return _react2.default.createElement(
				'div',
				{ style: { padding: '0 15px 15px 0' } },
				_react2.default.createElement(
					_antd.Button,
					{ type: 'primary', className: 'mb10', onClick: this.handAdd },
					'\u65B0\u589E\u6750\u6599'
				),
				_react2.default.createElement(_antd.Table, { columns: columns,
					size: 'middle',
					className: 'xlj-table',
					dataSource: mobx.toJS(this.store.cardtableData),
					pagination: false
					//loading={loading}
				}),
				_react2.default.createElement(_antd.Pagination, {
					style: { margin: '20px', textAlign: 'right' },
					current: this.store.cardpageIndex,
					pageSize: this.store.cardpageSize,
					total: this.store.cardtotalCount,
					showSizeChanger: true,
					onShowSizeChange: this.showSizeChange,
					onChange: this.onChange,
					showLessItems: true,
					showQuickJumper: true }),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: title,
						visible: visible,
						width: '50%',
						onCancel: this.handleCancel,
						onOk: this.handleSubmit.bind(this),
						maskClosable: false
					},
					_react2.default.createElement(
						_antd.Form,
						formItemLayout,
						_react2.default.createElement(
							_antd.Row,
							{ className: 'clearfix' },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6240\u5C5E\u4EFB\u52A1' },
									getFieldDecorator('dayTaskName', {
										initialValue: fields.dayTaskName,
										rules: [{ required: true, message: '请选择' }]
									})(_react2.default.createElement(_AutoSelect2.default, {
										url: _config2.default.xmgl.getDayTaskByDate,
										query: _xmgl2.default.xmgl.getDayTaskByDate,
										variables: {
											projectId: this.store.projectId,
											data: fields.time == null ? "" : fields.time
										},
										onChange: this.doChange,
										value: fields.dayTaskName == null || fields.dayTaskName == "" ? "" : fields.dayTaskName,
										type: 'getDayTaskByDate'
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6750\u6599\u7C7B\u578B' },
									getFieldDecorator('expectResourceId', {
										initialValue: fields.expectResourceId == null || fields.expectResourceId == "" ? "" : fields.expectResourceId,
										rules: [{ required: true, message: '请选择' }]
									})(_react2.default.createElement(_AutoSelect2.default, {
										url: _config2.default.xmgl.getExpectResourceList,
										query: _xmgl2.default.xmgl.getExpectResourceList,
										variables: {
											expectId: this.store.expectId,
											type: "料"
										},
										onChange: this.doChange2,
										value: fields.expectResourceId == null || fields.expectResourceId == "" ? "" : fields.expectResourceId,
										type: 'getExpectResourceList',
										keyId: "id"
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6750\u6599\u540D\u79F0' },
									getFieldDecorator('name', {
										initialValue: fields.name,
										rules: [{ required: true, message: '请输入材料名称' }]
									})(_react2.default.createElement(_antd.Input, null))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u89C4\u683C\u578B\u53F7' },
									getFieldDecorator('spec', {
										initialValue: fields.spec,
										rules: [{ required: false, message: '请输入规格型号' }]
									})(_react2.default.createElement(_antd.Input, null))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u5355\u4F4D' },
									getFieldDecorator('units', {
										initialValue: fields.units,
										rules: [{ required: true, message: '请输入单位' }]
									})(_react2.default.createElement(_antd.Input, null))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6570\u91CF' },
									getFieldDecorator('totalNum', {
										initialValue: fields.totalNum,
										rules: [{ required: true, message: '请输入数量' }]
									})(_react2.default.createElement(_antd.InputNumber, {
										style: { width: '100%' },
										formatter: this.limitDecimals,
										parser: this.limitDecimals }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8FDB\u573A\u65E5\u671F\t' },
									getFieldDecorator('deliveryTime', {
										initialValue: fields.deliveryTime == null ? "" : (0, _moment2.default)(fields.deliveryTime, 'YYYY-MM-DD'),
										rules: [{ required: true, message: '请输入进场日期' }]
									})(_react2.default.createElement(_antd.DatePicker, {
										dateFormat: dateFormat,
										style: { width: '100%' } }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u4F9B\u5E94\u5546' },
									getFieldDecorator('manufacturer', {
										initialValue: fields.manufacturer,
										rules: [{ required: false, message: '请输入供应商' }]
									})(_react2.default.createElement(_antd.Input, null))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										label: '\u9644\u4EF6' },
									_react2.default.createElement(_MyUpload2.default, {
										length: 9,
										saveAttachment: this.handleAttment.bind(this),
										disabled: false,
										multiple: true,
										listType: 'text',
										ossData: this.props.ossData,
										fileList: mobx.toJS(this.store.material.attachments)
									})
								)
							)
						)
					)
				)
			);
		}
	}]);

	return MateriaModal;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(MateriaModal);
exports.default = form;

/***/ }),

/***/ 2095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 施工环境
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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePicker = _antd.DatePicker.RangePicker;
var Option = _antd.Select.Option;

var confirm = _antd.Modal.confirm;
var TextArea = _antd.Input.TextArea;

var Environment = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Environment, _React$Component);

	function Environment(props) {
		var _this3 = this;

		_classCallCheck(this, Environment);

		var _this2 = _possibleConstructorReturn(this, (Environment.__proto__ || Object.getPrototypeOf(Environment)).call(this, props));

		_this2.getTabeData = function () {
			_this2.store.getEnvironmentList();
		};

		_this2.handleAdd = function () {
			_this2.setState({ visible: true, title: 'add' }, function () {
				_this2.store.environmentFields = Object.assign(mobx.toJS(_this2.store.environmentFields), {
					date: (0, _moment2.default)().format("YYYY-MM-DD")
				});
				_this2.store.getWeatherByDate();
			});
		};

		_this2.handEdit = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this2.setState({
									visible: true,
									title: 'edit'
								}, function () {
									delete param.key;
									_this2.store.environmentFields = Object.assign(mobx.toJS(_this2.store.environmentFields), param);
								});

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

		_this2.handleDel = function (param) {
			var _this = _this2;
			confirm({
				title: '您确定删除吗?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: function onOk() {
					_this.store.delEnvironment(param.id).then(function (res) {
						if (res == true) {
							_antd.message.success("删除成功!");
							_this.store.environmentPageIndex = 1;
							_this.store.environmentPageSize = 10;
							_this.store.getEnvironmentList();
						} else {
							_antd.message.error('删除失败!');
						}
					});
				},
				onCancel: function onCancel() {
					console.log('Cancel');
				}
			});
		};

		_this2.handleCancle = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.store.environmentFields = {
					"id": null,
					"projectId": "",
					"date": null,
					"text": ""
					// "remark":""
				};
			});
			_this2.props.form.resetFields();
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			var _this = _this2;
			_this2.props.form.validateFields(function (err, fieldsValue) {
				if (err) {
					return false;
				}
				_this2.store.environmentFields.projectId = _this2.store.projectId;
				_this2.store.saveEnvironment().then(function (res) {
					if (res) {
						_antd.message.success("保存成功");
						_this2.handleCancle();
						_this.store.environmentPageIndex = 1;
						_this.store.environmentPageSize = 10;
						_this.store.getEnvironmentList();
					} else {
						_antd.message.success(res && res.message || "保存失败");
					}
				});
			});
		};

		_this2.onDateChange = function (type, value, dateString) {
			_this2.store.environmentFields[type] = dateString;
			if (type === "date") _this2.store.getWeatherByDate();
		};

		_this2.handleChange = function (type, e) {
			_this2.store.environmentFields[type] = e.target.value;
		};

		_this2.showSizeChange = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this2.store.environmentPageIndex = 1;
								_this2.store.environmentPageSize = pageSize;
								_this2.store.getEnvironmentList();

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this3);
			}));

			return function (_x2, _x3) {
				return _ref2.apply(this, arguments);
			};
		}();

		_this2.onPageChange = function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(pageNumber) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_this2.store.environmentPageIndex = pageNumber;
								_this2.store.getEnvironmentList();

							case 2:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x4) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this2.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			visible: false

		};
		return _this2;
	}

	_createClass(Environment, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//this.getTabeData();
			this.props.onRef(this);
		}

		// 新增


		// 编辑


		// 删除


		// 取消


		// 保存

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var getFieldDecorator = this.props.form.getFieldDecorator;

			var styles = {
				pagination: {
					textAlign: 'end',
					marginTop: '20px'
				}
			};
			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 5 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 18 }
				}
			};
			var columns = [{
				title: '序号',
				dataIndex: 'key',
				key: 'key',
				align: 'center'
			}, {
				title: '日期',
				dataIndex: 'date',
				key: 'date',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				}
			}, {
				title: '内容',
				dataIndex: 'text',
				key: 'text',
				align: 'left'
			},
			// {
			// 	title: '备注',
			// 	dataIndex: 'remark',
			// 	key: 'remark',
			// },
			{
				title: '操作',
				key: 'action',
				fixed: 'right',
				align: 'left',
				width: 150,
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'green', className: 'pointer', onClick: _this4.handEdit.bind(_this4, record) },
							'\u7F16\u8F91'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'red', className: 'pointer', onClick: _this4.handleDel.bind(_this4, record) },
							'\u5220\u9664'
						)
					);
				}
			}];
			var fields = mobx.toJS(this.store.environmentFields);
			var dateFormat = "YYYY-MM-DD";

			return _react2.default.createElement(
				'div',
				{ style: { padding: '0 15px 15px 0' } },
				_react2.default.createElement(
					_antd.Button,
					{ type: 'primary', onClick: this.handleAdd },
					'\u65B0\u589E\u73AF\u5883'
				),
				_react2.default.createElement(_antd.Table, { columns: columns,
					pagination: false,
					size: 'middle',
					className: 'xlj-table mt25',
					dataSource: mobx.toJS(this.store.environmentTableData)
				}),
				_react2.default.createElement(
					'div',
					{ style: styles.pagination },
					_react2.default.createElement(_antd.Pagination, {
						current: this.store.environmentPageIndex,
						pageSize: this.store.environmentPageSize
						//pageSizeOptions={["20", "50", "100", "500"]}
						, total: this.store.environmentTotalCount,
						onShowSizeChange: this.showSizeChange,
						onChange: this.onPageChange,
						showSizeChanger: true,
						showTotal: this.showTotal,
						showQuickJumper: true })
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: this.state.title == "add" ? "新增环境" : "编辑环境",
						visible: this.state.visible,
						onOk: this.handleSubmit,
						onCancel: this.handleCancle,
						maskClosable: false
					},
					_react2.default.createElement(
						_antd.Form,
						formItemLayout,
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u65BD\u5DE5\u65E5\u671F' },
							getFieldDecorator('date', {
								initialValue: fields.date == null ? "" : (0, _moment2.default)(fields.date, 'YYYY-MM-DD'),
								rules: [{ required: true, message: '请输入施工日期' }]
							})(_react2.default.createElement(_antd.DatePicker, {
								dateFormat: dateFormat,
								onChange: this.onDateChange.bind(this, 'date'),
								style: { width: '100%' } }))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{
								label: '\u5185\u5BB9' },
							getFieldDecorator('text', {
								initialValue: fields.text,
								rules: [{ required: true, message: '请输入内容' }]
							})(_react2.default.createElement(TextArea, { autosize: { minRows: 4 },
								placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
								onChange: this.handleChange.bind(this, 'text'),
								value: fields.text
							}))
						)
					)
				)
			);
		}
	}]);

	return Environment;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(Environment);
exports.default = form;

/***/ }),

/***/ 2096:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 疫情防御
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

var _immutable = __webpack_require__(184);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _antd.Input.TextArea;

var confirm = _antd.Modal.confirm;

function getBase64(file) {
	return new Promise(function (resolve, reject) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			return resolve(reader.result);
		};
		reader.onerror = function (error) {
			return reject(error);
		};
	});
}

var Epidemic = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Epidemic, _React$Component);

	function Epidemic(props) {
		var _this3 = this;

		_classCallCheck(this, Epidemic);

		var _this2 = _possibleConstructorReturn(this, (Epidemic.__proto__ || Object.getPrototypeOf(Epidemic)).call(this, props));

		_this2.getTabeData = function () {
			_this2.store.getEpidemicList();
		};

		_this2.handleAdd = function () {
			_this2.setState({ visible: true,
				title: 'add' }, function () {});
		};

		_this2.onDateChange = function (type, value, dateString) {
			_this2.store.epidemicFields[type] = dateString;
		};

		_this2.handleChage = function (type, e) {
			if (type == "normalTemperature") {
				if (e.target.value == "true") {
					_this2.store.epidemicFields["normalTemperatureText"] = "";
					_this2.props.form.setFieldsValue({
						normalTemperatureText: ""
					});
				}
				_this2.store.epidemicFields[type] = e.target.value;
			} else if (type == "protect") {
				if (e.target.value == "true") {
					_this2.store.epidemicFields["protectText"] = "";
					_this2.props.form.setFieldsValue({
						protectText: ""
					});
				}
				_this2.store.epidemicFields[type] = e.target.value;
			} else if (type == "disinfection") {
				if (e.target.value == "true") {
					_this2.store.epidemicFields["disinfectionText"] = "";
					_this2.props.form.setFieldsValue({
						disinfectionText: ""
					});
				}
				_this2.store.epidemicFields[type] = e.target.value;
			} else {
				_this2.store.epidemicFields[type] = e.target.value;
			}
		};

		_this2.handleCancle = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.store.epidemicFields = Object.assign({}, {
					"id": null,
					"date": (0, _moment2.default)().format("YYYY-MM-DD"),
					"normalTemperature": "true",
					"protect": "true",
					"disinfection": "true",
					"normalTemperatureText": "",
					"protectText": "",
					"disinfectionText": "",
					"attachments": []
				});
			});
			_this2.props.form.resetFields();
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			_this2.props.form.validateFields(function (err, fieldsValue) {
				//console.log(fieldsValue, mobx.toJS(this.store.planFields), '8');
				if (err) {
					return false;
				}

				// 处理附件
				var array = JSON.parse(JSON.stringify(_this2.store.epidemicFields.attachments));
				var arr = [];
				array.length && array.map(function (item, index) {
					arr.push({
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath
					});
				});

				var _mobx$toJS = mobx.toJS(_this2.store.epidemicFields),
				    normalTemperature = _mobx$toJS.normalTemperature,
				    protect = _mobx$toJS.protect,
				    disinfection = _mobx$toJS.disinfection;

				_this2.store.saveEpidemic(Object.assign(mobx.toJS(_this2.store.epidemicFields), {
					attachments: arr,
					projectId: _this2.store.projectId,
					normalTemperature: normalTemperature == "true" ? true : false,
					protect: protect == "true" ? true : false,
					disinfection: disinfection == "true" ? true : false
				})).then(function (res) {
					if (res) {
						_antd.message.success("保存成功");
						_this2.getTabeData();
						_this2.handleCancle();
					} else {
						_antd.message.success(res.message || "保存失败");
					}
				});
			});
		};

		_this2.showSizeChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this2.store.epidemicPageIndex = 1;
								_this2.store.epidemicPageSize = pageSize;
								_this2.store.getEpidemicList();

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

		_this2.onPageChange = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this2.store.epidemicPageIndex = pageNumber;
								_this2.store.getEpidemicList();

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

		_this2.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this2.handEdit = function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_this2.setState({
									visible: true,
									title: 'edit'
								}, function () {
									delete param.key;

									// 获取
									var params = {
										projectId: param.projectId,
										date: param.date
									};
									_this2.store.getEpidemicByDate(params).then(function (res) {
										_this2.store.epidemicFields = Object.assign({}, res, {
											"projectId": res.projectId,
											"id": res.id,
											"date": res.date,
											"normalTemperatureText": res.normalTemperatureText,
											"protectText": res.protectText,
											"disinfectionText": res.disinfectionText,
											"normalTemperature": res.normalTemperature.toString(),
											"protect": res.protect.toString(),
											"disinfection": res.disinfection.toString(),
											"attachments": res.attachments !== null ? res.attachments.map(function (vitem, index) {
												return Object.assign({}, {
													uid: vitem.fileId,
													name: vitem.fileName,
													status: 'done',
													url: vitem.filePath,
													fileId: vitem.fileId,
													fileName: vitem.fileName,
													filePath: vitem.filePath,
													id: vitem.fileId
												});
											}) : []
										});
									});
								});

							case 1:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x4) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this2.handleDel = function (param) {
			var _this = _this2;
			confirm({
				title: '您确定删除吗?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: function onOk() {
					_this.store.delEpidemic(param.id).then(function (res) {
						if (res == true) {
							_antd.message.success("删除成功");
							_this.store.epidemicPageIndex = 1;
							_this.store.epidemicPageSize = 10;
							_this.store.getEpidemicList();
						} else {
							_antd.message.error('删除失败');
						}
					});
				},
				onCancel: function onCancel() {
					//console.log('Cancel');
				}
			});
		};

		_this2.hanChange = function (info) {
			//console.log(info, '0')
			var status = info.file.status;
			if (status === 'done') {
				// 上传成功
				//message.success(`${info.file.name}上传成功！`);
			} else if (status === 'error') {
				_antd.message.error(info.file.name + '\u4E0A\u4F20\u5931\u8D25\uFF01');
			} else if (status === 'removed') {
				//console.log('delete')
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
					file.fileId = file.response.body[0].fileId;
					file.id = file.response.body[0].id;
					file.fileName = file.response.body[0].fileName;
					file.filePath = file.response.body[0].fileURL;
				}
				return file;
			});
			fileList = fileList.filter(function (file) {
				if (file.response) {
					return file.response.status === 'ok';
				}
				return true;
			});

			_this2.setState({
				fileList: Object.assign([], [].concat(_toConsumableArray(fileList)))
			}, function () {
				// 更新附件数据
				var data = _this2.state.fileList.map(function (item, index) {
					return {
						uid: item.uid,
						name: item.fileName,
						status: 'done',
						url: item.filePath,
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						id: item.id
					};
				});

				_this2.store.epidemicFields.attachments = Object.assign([], data);
			});
		};

		_this2.handleCancel = function () {
			return _this2.setState({ previewVisible: false });
		};

		_this2.handlePreview = function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(file) {
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								if (!(!file.url && !file.preview)) {
									_context4.next = 4;
									break;
								}

								_context4.next = 3;
								return getBase64(file.originFileObj);

							case 3:
								file.preview = _context4.sent;

							case 4:
								_this2.setState({
									previewImage: file.url || file.preview,
									previewVisible: true
								});

							case 5:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, _this3);
			}));

			return function (_x5) {
				return _ref4.apply(this, arguments);
			};
		}();

		_this2.handleAttment = function (params) {
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
			_this2.store.epidemicFields.attachments = Object.assign([], arr);
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			visible: false,
			fileList: [],
			previewVisible: false,
			previewImage: ''
		};
		return _this2;
	}

	_createClass(Epidemic, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//this.getTabeData();
			this.props.onRef(this);
		}

		// 新增


		// 日期


		// 文本改变


		// 取消


		// 保存


		// 编辑


		// 删除


		// 形象进度上传

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var getFieldDecorator = this.props.form.getFieldDecorator;

			var styles = {
				pagination: {
					textAlign: 'end',
					marginTop: '20px'
				}
			};
			var columns = [{
				title: '序号',
				dataIndex: 'key',
				key: 'key',
				align: 'center'
			}, {
				title: '工作人员体温是否正常',
				dataIndex: 'normalTemperature',
				key: 'normalTemperature',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						text == true ? "是" : "否"
					);
				}
			}, {
				title: '防护用品是否使用到位',
				dataIndex: 'protect',
				key: 'protect',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						text == true ? "是" : "否"
					);
				}
			}, {
				title: '施工场所及生活区域是否消毒',
				dataIndex: 'disinfection',
				key: 'disinfection',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'span',
						null,
						text == true ? "是" : "否"
					);
				}
			}, {
				title: '日期',
				dataIndex: 'date',
				key: 'date',
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				}
			}, {
				title: '操作',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'green', className: 'pointer', onClick: _this4.handEdit.bind(_this4, record) },
							'\u7F16\u8F91'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'red', className: 'pointer', onClick: _this4.handleDel.bind(_this4, record) },
							'\u5220\u9664'
						)
					);
				}
			}];
			var fileds = mobx.toJS(this.store.epidemicFields);
			var props = {
				data: {
					type: 1,
					sourceId: this.store.epidemicFields.id // 物料的id
				},
				name: 'file',
				multiple: true,
				action: _config2.default.management.multiUpload,
				onChange: this.hanChange,
				fileList: mobx.toJS(this.store.epidemicFields.attachments),
				onPreview: this.handlePreview,
				listType: "picture-card"
			};

			var _state = this.state,
			    previewVisible = _state.previewVisible,
			    previewImage = _state.previewImage,
			    fileList = _state.fileList;

			var uploadButton = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_antd.Icon, { type: 'plus' }),
				_react2.default.createElement(
					'div',
					{ className: 'ant-upload-text' },
					'\u4E0A\u4F20'
				)
			);

			return _react2.default.createElement(
				'div',
				{ style: { padding: '0 15px 15px 0' } },
				_react2.default.createElement(
					_antd.Button,
					{ type: 'primary', onClick: this.handleAdd },
					'\u65B0\u589E\u75AB\u60C5\u9632\u63A7'
				),
				_react2.default.createElement(_antd.Table, { columns: columns,
					pagination: false,
					size: 'middle',
					className: 'xlj-table mt25',
					dataSource: mobx.toJS(this.store.epidemicTableData)
				}),
				_react2.default.createElement(
					'div',
					{ style: styles.pagination },
					_react2.default.createElement(_antd.Pagination, {
						current: this.store.epidemicPageIndex,
						pageSize: this.store.epidemicPageSize,
						total: this.store.epidemicTotalCount,
						onShowSizeChange: this.showSizeChange,
						onChange: this.onPageChange,
						showSizeChanger: true,
						showTotal: this.showTotal,
						showQuickJumper: true })
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: this.state.title == "add" ? "新增疫情防控" : "编辑疫情防控",
						visible: this.state.visible,
						width: '50%',
						style: { minWidth: '500px' },
						onOk: this.handleSubmit,
						onCancel: this.handleCancle,
						maskClosable: false
					},
					_react2.default.createElement(
						_antd.Form,
						null,
						_react2.default.createElement(
							_antd.Row,
							{ className: 'clearfix' },
							_react2.default.createElement(
								_antd.Col,
								{ span: 24 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 8 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										},
										label: '\u65E5\u671F' },
									getFieldDecorator('date', {
										initialValue: fileds.date == null ? "" : (0, _moment2.default)(fileds.date, 'YYYY-MM-DD'),
										rules: [{
											required: true,
											message: '请输入日期'
										}]
									})(_react2.default.createElement(_antd.DatePicker, {
										format: 'YYYY-MM-DD',
										value: fileds.date == null ? "" : (0, _moment2.default)(fileds.date, 'YYYY-MM-DD'),
										onChange: this.onDateChange.bind(this, 'date')
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' } },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 8 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										},
										label: '\u5DE5\u4F5C\u4EBA\u5458\u4F53\u6E29\u662F\u5426\u6B63\u5E38'
									},
									getFieldDecorator('normalTemperature', {
										initialValue: fileds.normalTemperature == null ? "false" : fileds.normalTemperature,
										rules: [{
											required: true,
											message: '请选择'
										}]
									})(_react2.default.createElement(
										_antd.Radio.Group,
										{ onChange: this.handleChage.bind(this, 'normalTemperature') },
										_react2.default.createElement(
											_antd.Radio,
											{ value: 'true' },
											'\u662F'
										),
										_react2.default.createElement(
											_antd.Radio,
											{ value: 'false' },
											'\u5426'
										)
									))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' }, className: fileds.normalTemperature == "true" ? "hidden" : "" },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										wrapperCol: { span: 12, offset: 8 }
									},
									getFieldDecorator('normalTemperatureText', {
										initialValue: fileds.normalTemperatureText,
										rules: [{
											required: fileds.normalTemperature == "true" ? false : true,
											message: '请输入原因'
										}]
									})(_react2.default.createElement(TextArea, { autosize: { minRows: 2 },
										placeholder: '\u8BF7\u8F93\u5165\u539F\u56E0',
										onChange: this.handleChage.bind(this, "normalTemperatureText"),
										value: fileds.normalTemperatureText
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' } },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 8 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										},
										label: '\u9632\u62A4\u7528\u54C1\u662F\u5426\u4F7F\u7528\u5230\u4F4D'
									},
									getFieldDecorator('protect', {
										initialValue: fileds.protect == null ? "false" : fileds.protect,
										rules: [{
											required: true,
											message: '请选择'
										}]
									})(_react2.default.createElement(
										_antd.Radio.Group,
										{ onChange: this.handleChage.bind(this, 'protect') },
										_react2.default.createElement(
											_antd.Radio,
											{ value: 'true' },
											'\u662F'
										),
										_react2.default.createElement(
											_antd.Radio,
											{ value: 'false' },
											'\u5426'
										)
									))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' }, className: fileds.protect == "true" ? "hidden" : "" },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										wrapperCol: { span: 12, offset: 8 }
									},
									getFieldDecorator('protectText', {
										initialValue: fileds.protectText,
										rules: [{
											required: fileds.protect == "true" ? false : true,
											message: '请输入原因'
										}]
									})(_react2.default.createElement(TextArea, { autosize: { minRows: 2 },
										placeholder: '\u8BF7\u8F93\u5165\u539F\u56E0',
										onChange: this.handleChage.bind(this, "protectText"),
										value: fileds.protectText
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' } },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 8 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										},
										label: '\u65BD\u5DE5\u573A\u6240\u53CA\u751F\u6D3B\u533A\u57DF\u662F\u5426\u6D88\u6BD2'
									},
									getFieldDecorator('disinfection', {
										initialValue: fileds.disinfection == null ? "false" : fileds.disinfection,
										rules: [{
											required: true,
											message: '请选择'
										}]
									})(_react2.default.createElement(
										_antd.Radio.Group,
										{ onChange: this.handleChage.bind(this, 'disinfection') },
										_react2.default.createElement(
											_antd.Radio,
											{ value: 'true' },
											'\u662F'
										),
										_react2.default.createElement(
											_antd.Radio,
											{ value: 'false' },
											'\u5426'
										)
									))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' }, className: fileds.disinfection == "true" ? "hidden" : "" },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										wrapperCol: { span: 12, offset: 8 }
									},
									getFieldDecorator('disinfectionText', {
										initialValue: fileds.disinfectionText,
										rules: [{
											required: fileds.disinfection == "true" ? false : true,
											message: '请输入原因'
										}]
									})(_react2.default.createElement(TextArea, { autosize: { minRows: 2 },
										placeholder: '\u8BF7\u8F93\u5165\u539F\u56E0',
										onChange: this.handleChage.bind(this, "disinfectionText"),
										value: fileds.disinfectionText
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' } },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 8 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 16 }
										},
										label: '\u9644\u4EF6' },
									_react2.default.createElement(_MyUpload2.default, {
										length: 9,
										saveAttachment: this.handleAttment.bind(this),
										disabled: false,
										multiple: true,
										listType: 'picture-card',
										ossData: this.props.ossData,
										fileList: mobx.toJS(this.store.epidemicFields.attachments)
									})
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Modal,
					{ visible: previewVisible, footer: null, onCancel: this.handleCancel },
					_react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
				)
			);
		}
	}]);

	return Epidemic;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(Epidemic);
exports.default = form;

/***/ }),

/***/ 2097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 项目设置
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

var _AsyncSelectMutiold = __webpack_require__(1975);

var _AsyncSelectMutiold2 = _interopRequireDefault(_AsyncSelectMutiold);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _authorization = __webpack_require__(97);

var _authorization2 = _interopRequireDefault(_authorization);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = _antd.Typography.Title;

var ItemSetting = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(ItemSetting, _React$Component);

	function ItemSetting(props) {
		_classCallCheck(this, ItemSetting);

		var _this = _possibleConstructorReturn(this, (ItemSetting.__proto__ || Object.getPrototypeOf(ItemSetting)).call(this, props));

		_this.onSelChange = function (type, value) {
			//console.log(type, value, '123')
			_this.store.notifyfield[type] = Object.assign([], value);
			_this.props.form.setFieldsValue({
				userIds: value
			});
		};

		_this.handleChage = function (type, e) {
			_this.store.notifyfield[type] = e.target.value;
		};

		_this.handleSubmit = function (e) {
			e.preventDefault();
			_this.props.form.validateFields(function (err, fieldsValue) {
				//console.log(fieldsValue, '11')
				if (err) {
					return;
				}
				_this.store.notifyfield = Object.assign(mobx.toJS(_this.store.notifyfield), {
					beginTime: fieldsValue["beginTime"].format('YYYY-MM-DD'),
					endTime: fieldsValue["endTime"].format('YYYY-MM-DD'),
					planBeginTime: fieldsValue["planBeginTime"].format('YYYY-MM-DD'),
					planEndTime: fieldsValue["planEndTime"].format('YYYY-MM-DD'),
					notifys: [{ wecat: fieldsValue["wecat"] }, { email: fieldsValue["email"] }],
					userIds: fieldsValue["userIds"],
					projectId: _this.store.projectId
				});
				var params = JSON.parse(JSON.stringify(_this.store.notifyfield));
				delete params.wecat;
				delete params.email;
				_this.store.saveNotifyProject(params).then(function (res) {
					if (res == true) {
						_antd.message.success("保存成功");
					} else {
						_antd.message.success("保存失败");
					}
				});
			});
		};

		_this.store = _this.props.store;
		_this.state = {};
		return _this;
	}

	_createClass(ItemSetting, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.store.getNotifyProject();
		}

		// 多选


		// 保存

	}, {
		key: 'render',
		value: function render() {
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 4 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 18 }
				}
			};
			var dateFormat = "YYYY-MM-DD";
			var fields = mobx.toJS(this.store.notifyfield);

			return _react2.default.createElement(
				'div',
				{ className: 'w90' },
				_react2.default.createElement(
					Title,
					{ className: 'tfc', style: { fontWeight: '500' }, level: 4 },
					this.store.parojectName,
					'\u9879\u76EE'
				),
				_react2.default.createElement(
					_antd.Form,
					_extends({}, formItemLayout, { onSubmit: this.handleSubmit }),
					_react2.default.createElement(
						_antd.Card,
						{ title: '\u9879\u76EE\u4FE1\u606F', bordered: false, style: { width: '100%', marginTop: '0px' } },
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u5F00\u59CB\u65E5\u671F' },
							getFieldDecorator('beginTime', {
								initialValue: fields.beginTime == null ? "" : (0, _moment2.default)(fields.beginTime, 'YYYY-MM-DD'),
								rules: [{ required: true, message: '请输入开始日期' }]
							})(_react2.default.createElement(_antd.DatePicker, {
								dateFormat: dateFormat,
								style: { width: '300px' } }))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ className: 'mt15', label: '\u7ED3\u675F\u65E5\u671F' },
							getFieldDecorator('endTime', {
								initialValue: fields.endTime == null ? "" : (0, _moment2.default)(fields.endTime, 'YYYY-MM-DD'),
								rules: [{ required: true, message: '请输入结束日期' }]
							})(_react2.default.createElement(_antd.DatePicker, {
								dateFormat: dateFormat,
								style: { width: '300px' } }))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ className: 'mt15', label: '\u8BA1\u5212\u5F00\u59CB\u65E5\u671F' },
							getFieldDecorator('planBeginTime', {
								initialValue: fields.planBeginTime == null ? "" : (0, _moment2.default)(fields.planBeginTime, 'YYYY-MM-DD'),
								rules: [{ required: true, message: '请输入计划开始日期' }]
							})(_react2.default.createElement(_antd.DatePicker, {
								dateFormat: dateFormat,
								style: { width: '300px' } }))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ className: 'mt15', label: '\u8BA1\u5212\u7ED3\u675F\u65E5\u671F' },
							getFieldDecorator('planEndTime', {
								initialValue: fields.planEndTime == null ? "" : (0, _moment2.default)(fields.planEndTime, 'YYYY-MM-DD'),
								rules: [{ required: true, message: '请输入计划结束日期' }]
							})(_react2.default.createElement(_antd.DatePicker, {
								dateFormat: dateFormat,
								style: { width: '300px' } }))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ className: 'mt15', label: '\u8D1F\u8D23\u4EBA' },
							getFieldDecorator('manager', {
								initialValue: fields.manager,
								rules: [{ required: true, message: '请输入负责人' }]
							})(_react2.default.createElement(_antd.Input, { style: { width: '300px' },
								onChange: this.handleChage.bind(this, "manager")
							}))
						)
					),
					_react2.default.createElement(
						_antd.Card,
						{ title: '\u901A\u77E5\u8BBE\u7F6E', bordered: false, style: { width: '100%' }, className: 'mt15' },
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u90AE\u4EF6' },
							getFieldDecorator('email', { valuePropName: 'checked', initialValue: fields.email })(_react2.default.createElement(_antd.Switch, null))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u5FAE\u4FE1\u516C\u5171\u53F7' },
							getFieldDecorator('wecat', { valuePropName: 'checked', initialValue: fields.wecat })(_react2.default.createElement(_antd.Switch, null))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u901A\u77E5\u4EBA\u5458' },
							getFieldDecorator('userIds', {
								initialValue: mobx.toJS(fields.userIds),
								rules: [{ required: true, message: '请选择通知人员' }]
							})(_react2.default.createElement(
								'div',
								{ className: 'w' },
								_react2.default.createElement(_AsyncSelectMutiold2.default, {
									url: _config2.default.authorization.getUserInfoListByRoleCode,
									style: { width: '100%' },
									onChange: this.onSelChange.bind(this, 'userIds'),
									value: mobx.toJS(fields.userIds),
									query: _authorization2.default.authorization.getUserInfoListByRoleCode
								})
							))
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{
							wrapperCol: {
								xs: { span: 24, offset: 0 },
								sm: { span: 24, offset: 0 }
							}
						},
						_react2.default.createElement(
							'div',
							{ className: 'tfc mt25' },
							_react2.default.createElement(
								_antd.Button,
								{ type: 'primary', htmlType: 'submit' },
								'\u786E\u5B9A'
							)
						)
					)
				)
			);
		}
	}]);

	return ItemSetting;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(ItemSetting);
exports.default = form;

/***/ }),

/***/ 2098:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 机械设备
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

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _xmgl = __webpack_require__(340);

var _xmgl2 = _interopRequireDefault(_xmgl);

var _AutoSelect = __webpack_require__(1613);

var _AutoSelect2 = _interopRequireDefault(_AutoSelect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var confirm = _antd.Modal.confirm;

var Mechanical = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Mechanical, _React$Component);

	function Mechanical(props) {
		var _this3 = this;

		_classCallCheck(this, Mechanical);

		var _this2 = _possibleConstructorReturn(this, (Mechanical.__proto__ || Object.getPrototypeOf(Mechanical)).call(this, props));

		_this2.getTabeData = function () {
			_this2.store.getAllMachineByProjectIdAndType();
		};

		_this2.onOk = function (value) {};

		_this2.handleInputNumberChage = function (type, number) {
			_this2.store.machineFields[type] = number;
		};

		_this2.handleAdd = function () {
			_this2.setState({ visible: true, title: 'add' }, function () {
				_this2.store.machineFields = Object.assign(mobx.toJS(_this2.store.machineFields), {
					time: (0, _moment2.default)().format("YYYY-MM-DD"),
					startTime: "08:00:00",
					endTime: "18:00:00"
				});
			});
		};

		_this2.handleCancle = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.store.machineFields = Object.assign({}, {
					"id": "", "projectId": "", "date": null, "dateEnd": null, "count": 0, "units": "", "type": "",
					"averageHours": null, "remark": "",
					"time": (0, _moment2.default)().format("YYYY-MM-DD"),
					"startTime": "08:00:00",
					"endTime": "18:00:00",
					"taskId": '',
					"expectResourceId": "其他",
					"resourceType": "机",
					"dayTaskName": ""
				});
			});
			_this2.props.form.resetFields();
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			_this2.props.form.validateFields(function (err, fieldsValue) {
				if (err) {
					return false;
				}
				_this2.store.machineFields.projectId = _this2.store.projectId;
				var personFields = mobx.toJS(_this2.store.machineFields);
				var date = personFields.time + " " + personFields.startTime + ":00";
				var dateEnd = personFields.time + " " + personFields.endTime + ":00";

				delete personFields.time;
				delete personFields.startTime;
				delete personFields.endTime;

				_this2.store.machineFields = Object.assign(personFields, {
					date: date,
					dateEnd: dateEnd
				});

				_this2.store.saveMachine().then(function (res) {
					if (res) {
						_antd.message.success("保存成功");
						_this2.handleCancle();
						_this2.getTabeData();
					} else {
						_antd.message.success(res && res.message || "保存失败");
					}
				});
			});
		};

		_this2.onSelChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type, value, e) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								//console.log(value, 'test', e.props.val)
								_this2.store.machineFields["name"] = value;
								_this2.store.machineFields["units"] = e.props.val.value;
								_this2.props.form.setFieldsValue({
									name: value
								});

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this3);
			}));

			return function (_x, _x2, _x3) {
				return _ref.apply(this, arguments);
			};
		}();

		_this2.onSelChangeType = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type, value, e) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								//console.log(value, this.store.machineFields["type"], e.props.val)
								// 改变分类时判断是否要清空名称
								if (value !== _this2.store.machineFields["type"]) {
									//清空name
									_this2.store.machineFields["name"] = "";
									_this2.props.form.setFieldsValue({
										name: ""
									});
								}
								_this2.store.machineFields["type"] = value;
								_this2.props.form.setFieldsValue({
									type: value
								});

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this3);
			}));

			return function (_x4, _x5, _x6) {
				return _ref2.apply(this, arguments);
			};
		}();

		_this2.limitDecimals = function (value) {
			var reg = /^(\-)*(\d+)\.(\d\d).*$/;
			//console.log(value);
			if (typeof value === 'string') {
				return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
			} else if (typeof value === 'number') {
				return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
			} else {
				return '';
			}
		};

		_this2.showSizeChange = function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_this2.store.machinePageIndex = 1;
								_this2.store.machinePageSize = pageSize;
								_this2.store.getAllMachineByProjectIdAndType();

							case 3:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x7, _x8) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this2.onPageChange = function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(pageNumber) {
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_this2.store.machinePageIndex = pageNumber;
								_this2.store.getAllMachineByProjectIdAndType();

							case 2:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, _this3);
			}));

			return function (_x9) {
				return _ref4.apply(this, arguments);
			};
		}();

		_this2.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this2.handEdit = function () {
			var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(param) {
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_this2.setState({
									visible: true,
									title: 'edit'
								}, function () {
									delete param.key;

									// 处理日期和时间
									var date = param.date;
									var dateEnd = param.dateEnd;
									var time = param.date == null ? (0, _moment2.default)().format("YYYY-MM-DD") : date.split(" ").length && date.split(" ")[0];
									var startTime = param.date == null ? null : date.split(" ").length && date.split(" ")[1];
									var endTime = param.dateEnd == null ? null : dateEnd.split(" ").length && dateEnd.split(" ")[1];

									_this2.store.machineFields = Object.assign(mobx.toJS(_this2.store.machineFields), param, { time: time, startTime: startTime, endTime: endTime });
								});

							case 1:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, _this3);
			}));

			return function (_x10) {
				return _ref5.apply(this, arguments);
			};
		}();

		_this2.handleDel = function (param) {
			var _this = _this2;
			confirm({
				title: '您确定删除吗?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: function onOk() {
					_this.store.delMachine(param.id).then(function (res) {
						if (res == true) {
							_antd.message.success("删除成功");
							_this.store.machinePageIndex = 1;
							_this.store.machinePageSize = 10;
							_this.store.getAllMachineByProjectIdAndType();
						} else {
							_antd.message.error('删除失败');
						}
					});
				},
				onCancel: function onCancel() {
					console.log('Cancel');
				}
			});
		};

		_this2.onDateChange = function (type, value, dateString) {
			//console.log(type, value, dateString, '日期')
			_this2.store.machineFields[type] = dateString;
		};

		_this2.handDate = function (type, time, timeString) {
			//console.log(type, time, timeString, '时间段')
			_this2.store.machineFields[type] = timeString;
		};

		_this2.onChangeSelect = function (value) {
			_this2.props.form.setFieldsValue({
				name: value
			});
			_this2.store.machineFields["name"] = value;
		};

		_this2.onSearch = function (val) {
			console.log('search:', val);
		};

		_this2.onSelect = function (val) {
			console.log('select:', val);
		};

		_this2.doChange = function (value, e) {
			var val = e.props.val;

			if (val == undefined) {
				// 手输入
				_this2.store.machineFields.taskId = "";
				_this2.store.machineFields.dayTaskName = "";
				_this2.store.expectId = "";
			} else {
				// 选择
				_this2.store.machineFields.taskId = val.id;
				_this2.store.machineFields.dayTaskName = val.name;
				_this2.store.expectId = val.expectId;
			}
		};

		_this2.doChange2 = function (value, e) {
			var val = e.props.val;

			if (val == undefined) {
				// 手输入
				_this2.store.machineFields.resourceType = "机";
				_this2.store.machineFields.expectResourceId = "";
			} else {
				// 选择
				_this2.store.machineFields.resourceType = val.type;
				_this2.store.machineFields.expectResourceId = val.id;
			}
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			visible: false,
			workerType: [{ text: '铲车', value: '台' }, { text: '吊钩', value: '件' }, { text: '三级箱', value: '台' }, { text: '螺栓枪', value: '把' }, { text: '电钻', value: '个' }, { text: '角磨机', value: '个' }, { text: '铆钉枪', value: '把' }, { text: '吸盘', value: '件' }],
			classification: [{ text: '大型机械' }, { text: '小型设备' }], // 分类
			machinesNameoptions: [// 大型机械
			{ text: '汽车吊', value: '台' }, { text: '运输车', value: '台' }, { text: '叉车', value: '台' }],
			machinesNameSmallOptions: [// 小型设备
			{ text: '配电箱', value: '个' }, { text: '测平仪', value: '个' }, { text: '切割机', value: '个' }, { text: '角磨机', value: '个' }, { text: '电焊机', value: '个' }, { text: '电锯', value: '个' }, { text: '胶枪', value: '个' }, { text: '铆钉枪', value: '个' }, { text: '螺栓枪', value: '个' }, { text: '电钻', value: '个' }, { text: '电动螺丝刀', value: '个' }, { text: '气钉枪', value: '个' }, { text: '气泵', value: '个' }, { text: '修边机', value: '个' }]
		};
		return _this2;
	}

	_createClass(Mechanical, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//this.getTabeData();
			this.props.onRef(this);
		}

		// 取消


		// 保存


		// 限制数字


		// 编辑


		// 删除


		// 日期


		// 时间

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    workerType = _state.workerType,
			    classification = _state.classification,
			    machinesNameoptions = _state.machinesNameoptions,
			    machinesNameSmallOptions = _state.machinesNameSmallOptions;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var styles = {
				pagination: {
					textAlign: 'end',
					marginTop: '20px'
				}
			};
			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 5 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 18 }
				}
			};
			var columns = [{
				title: '序号',
				dataIndex: 'key',
				key: 'key',
				align: 'center'
			}, {
				title: '名称',
				dataIndex: 'name',
				key: 'name',
				align: 'center'
			}, {
				title: '分类',
				dataIndex: 'type',
				key: 'type',
				align: 'center'
			}, {
				title: '数量',
				dataIndex: 'count',
				key: 'count',
				align: 'center'
			},
			/*{
   	title: '单位',
   	dataIndex: 'units',
   	key: 'units',
   },*/
			{
				title: '开始时间',
				dataIndex: 'date',
				key: 'date',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				}
			}, {
				title: '结束时间',
				dataIndex: 'dateEnd',
				key: 'dateEnd',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				}
			}, {
				title: '操作',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'green', className: 'pointer', onClick: _this4.handEdit.bind(_this4, record) },
							'\u7F16\u8F91'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'red', className: 'pointer', onClick: _this4.handleDel.bind(_this4, record) },
							'\u5220\u9664'
						)
					);
				}
			}];
			var fields = mobx.toJS(this.store.machineFields);
			var machOptions = fields.type !== "" && fields.type == "大型机械" ? machinesNameoptions : machinesNameSmallOptions;
			var options = machOptions.map(function (group, index) {
				return _react2.default.createElement(
					Option,
					{ key: index, value: group.text },
					group.text
				);
			});

			return _react2.default.createElement(
				'div',
				{ style: { padding: '0 15px 15px 0' } },
				_react2.default.createElement(
					_antd.Button,
					{ type: 'primary', onClick: this.handleAdd },
					'\u65B0\u589E\u8BBE\u5907'
				),
				_react2.default.createElement(_antd.Table, { columns: columns,
					pagination: false,
					size: 'middle',
					className: 'xlj-table mt25',
					dataSource: mobx.toJS(this.store.machineTableData)
				}),
				_react2.default.createElement(
					'div',
					{ style: styles.pagination },
					_react2.default.createElement(_antd.Pagination, {
						current: this.store.machinePageIndex,
						pageSize: this.store.machinePageSize
						//pageSizeOptions={["20", "50", "100", "500"]}
						, total: this.store.machineTotalCount,
						onShowSizeChange: this.showSizeChange,
						onChange: this.onPageChange,
						showSizeChanger: true,
						showTotal: this.showTotal,
						showQuickJumper: true })
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: this.state.title == "add" ? "新增设备" : "编辑设备",
						visible: this.state.visible,
						onOk: this.handleSubmit,
						onCancel: this.handleCancle,
						maskClosable: false
					},
					_react2.default.createElement(
						_antd.Form,
						formItemLayout,
						_react2.default.createElement(
							_antd.Form.Item,
							{
								wrapperCol: {
									xs: { span: 24 },
									sm: { span: 24 }
								},
								style: { marginBottom: 0 } },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 10 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 14 }
										},
										style: { display: 'inline-block', width: '50%' },
										label: '\u6240\u5C5E\u4EFB\u52A1' },
									getFieldDecorator('dayTaskName', {
										initialValue: fields.dayTaskName,
										rules: [{
											required: true,
											message: '请输入名称'
										}]
									})(_react2.default.createElement(_AutoSelect2.default, {
										url: _config2.default.xmgl.getDayTaskByDate,
										query: _xmgl2.default.xmgl.getDayTaskByDate,
										variables: {
											projectId: this.store.projectId,
											data: fields.time == null ? "" : fields.time
										},
										onChange: this.doChange,
										value: fields.dayTaskName == null || fields.dayTaskName == "" ? "" : fields.dayTaskName,
										type: 'getDayTaskByDate'
									}))
								),
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 10 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 12 }
										},
										style: { display: 'inline-block', width: '50%' },
										label: '\u8BBE\u5907\u7C7B\u578B' },
									getFieldDecorator('expectResourceId', {
										initialValue: fields.expectResourceId == null || fields.expectResourceId == "" ? "" : fields.expectResourceId,
										rules: [{
											required: true,
											message: '请输入名称'
										}]
									})(_react2.default.createElement(_AutoSelect2.default, {
										url: _config2.default.xmgl.getExpectResourceList,
										query: _xmgl2.default.xmgl.getExpectResourceList,
										variables: {
											expectId: this.store.expectId,
											type: "机"
										},
										onChange: this.doChange2,
										value: fields.expectResourceId == null || fields.expectResourceId == "" ? "" : fields.expectResourceId,
										type: 'getExpectResourceList',
										keyId: "id"
									}))
								)
							)
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u5206\u7C7B' },
							getFieldDecorator('type', {
								initialValue: fields.type,
								rules: [{
									required: true,
									message: '请选择分类'
								}]
							})(_react2.default.createElement(
								'div',
								{ className: 'w' },
								_react2.default.createElement(
									_antd.Select,
									{
										value: fields.type,
										onChange: this.onSelChangeType.bind(this, 'type'),
										placeholder: '\u8BF7\u9009\u62E9...' },
									classification.map(function (item, index) {
										return _react2.default.createElement(
											Option,
											{ key: 'classification' + index, value: item.text, val: item },
											item.text
										);
									})
								)
							))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u540D\u79F0' },
							getFieldDecorator('name', {
								initialValue: fields.name,
								rules: [{
									required: true,
									message: '请输入名称'
								}]
							})(_react2.default.createElement(_antd.AutoComplete, {
								disabled: fields.type == "" || fields.type == null ? true : false,
								dataSource: options,
								style: { width: "100%" },
								onSelect: this.onSelect,
								onSearch: this.onSearch,
								onChange: this.onChangeSelect,
								filterOption: function filterOption(input, option) {
									return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
								},
								placeholder: '\u8BF7\u8F93\u5165'
							}))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u6570\u91CF' },
							getFieldDecorator('count', {
								initialValue: fields.count,
								rules: [{ required: true, message: '请输入数量' }]
							})(_react2.default.createElement(_antd.InputNumber, {
								style: { width: '100%' },
								min: 0,
								onChange: this.handleInputNumberChage.bind(this, "count"),
								formatter: this.limitDecimals,
								parser: this.limitDecimals }))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u65E5\u671F' },
							getFieldDecorator('time', {
								initialValue: fields.time == null ? "" : (0, _moment2.default)(fields.time, 'YYYY-MM-DD'),
								rules: [{ required: true, message: '请输入日期' }]
							})(_react2.default.createElement(_antd.DatePicker, {
								dateFormat: 'YYYY-MM-DD',
								onChange: this.onDateChange.bind(this, 'time'),
								style: { width: '100%' } }))
						),
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u65F6\u95F4',
								labelCol: {
									xs: { span: 24 },
									sm: { span: 5 }
								},
								wrapperCol: {
									xs: { span: 24 },
									sm: { span: 18 }
								},
								style: { marginBottom: 0 } },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									_antd.Form.Item,
									{
										style: { display: 'inline-block', width: 'calc(50% - 12px)' }
									},
									getFieldDecorator('startTime', {
										initialValue: fields.startTime == null ? "" : (0, _moment2.default)(fields.startTime, 'HH:mm'),
										rules: [{ required: true, message: '请输入开始时间' }]
									})(_react2.default.createElement(_antd.TimePicker, {
										style: { width: '100%' },
										format: 'HH:mm',
										value: fields.startTime == null ? "" : (0, _moment2.default)(fields.startTime, 'HH:mm'),
										onChange: this.handDate.bind(this, 'startTime'),
										placeholder: '\u5F00\u59CB\u65F6\u95F4'
									}))
								),
								_react2.default.createElement(
									'span',
									{ style: { display: 'inline-block', width: '24px', textAlign: 'center' } },
									'-'
								),
								_react2.default.createElement(
									_antd.Form.Item,
									{
										style: { display: 'inline-block', width: 'calc(50% - 12px)' }
									},
									getFieldDecorator('endTime', {
										initialValue: fields.endTime == null ? "" : (0, _moment2.default)(fields.endTime, 'HH:mm'),
										rules: [{ required: true, message: '请输入结束时间' }]
									})(_react2.default.createElement(_antd.TimePicker, {
										style: { width: '100%' },
										format: 'HH:mm',
										value: fields.endTime == null ? "" : (0, _moment2.default)(fields.endTime, 'HH:mm'),
										onChange: this.handDate.bind(this, 'endTime'),
										placeholder: '\u7ED3\u675F\u65F6\u95F4'
									}))
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Mechanical;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(Mechanical);
exports.default = form;

/***/ }),

/***/ 2099:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 人员管理
            * qiufh@glodon.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _xmgl = __webpack_require__(340);

var _xmgl2 = _interopRequireDefault(_xmgl);

var _AutoSelect = __webpack_require__(1613);

var _AutoSelect2 = _interopRequireDefault(_AutoSelect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var confirm = _antd.Modal.confirm;

var Person = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Person, _React$Component);

	function Person(props) {
		var _this3 = this;

		_classCallCheck(this, Person);

		var _this2 = _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this, props));

		_this2.getTabeData = function () {
			_this2.store.getAllPersonByProjectIdAndType();
		};

		_this2.handleAdd = function () {
			_this2.setState({ visible: true, title: 'add' }, function () {
				_this2.store.personFields = Object.assign(mobx.toJS(_this2.store.personFields), {
					averageHours: 8,
					time: (0, _moment2.default)().format("YYYY-MM-DD"),
					startTime: "08:00:00",
					endTime: "18:00:00"
				});
			});
		};

		_this2.handleChage = function (type, e) {
			_this2.store.personFields[type] = e.target.value;
		};

		_this2.handleChangeTable = function (pagination, filters, sorter) {
			//console.log('Various parameters', pagination, filters, sorter);
			_this2.setState({
				filteredInfo: filters,
				sortedInfo: sorter
			});
		};

		_this2.clearFilters = function () {
			_this2.setState({ filteredInfo: null });
		};

		_this2.handleInputNumberChage = function (type, number) {
			_this2.store.personFields[type] = number;
		};

		_this2.handleCancle = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.store.personFields = Object.assign({}, {
					id: null,
					projectId: '1',
					date: null,
					dateEnd: null,
					count: 0,
					type: "普工",
					averageHours: 8,
					// remark: '',
					time: (0, _moment2.default)().format("YYYY-MM-DD"),
					startTime: "08:00:00",
					endTime: "18:00:00",
					"taskId": '',
					"expectResourceId": "",
					"resourceType": "",
					"dayTaskName": ""
				});
			});
			_this2.props.form.resetFields();
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			_this2.props.form.validateFields(function (err, fieldsValue) {
				//console.log(fieldsValue);
				if (err) {
					return false;
				}

				var personFields = mobx.toJS(_this2.store.personFields);
				var date = personFields.time + " " + personFields.startTime + ":00";
				var dateEnd = personFields.time + " " + personFields.endTime + ":00";

				delete personFields.time;
				delete personFields.startTime;
				delete personFields.endTime;

				_this2.store.personFields = Object.assign(personFields, {
					date: date,
					dateEnd: dateEnd
				});
				_this2.store.savePerson().then(function (res) {
					if (res) {
						_antd.message.success("保存成功");
						_this2.handleCancle();
						_this2.getTabeData();
					} else {
						_antd.message.success(res.message || "保存失败");
					}
				});
			});
		};

		_this2.limitDecimals = function (value) {
			var reg = /^(\-)*(\d+)\.(\d\d).*$/;
			if (typeof value === 'string') {
				return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
			} else if (typeof value === 'number') {
				return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
			} else {
				return '';
			}
		};

		_this2.showSizeChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this2.store.personPageIndex = 1;
								_this2.store.personPageSize = pageSize;
								_this2.store.getAllPersonByProjectIdAndType();

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

		_this2.onPageChange = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this2.store.personPageIndex = pageNumber;
								_this2.store.getAllPersonByProjectIdAndType();

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

		_this2.onChangeSelect = function (value) {
			//console.log(value, 'change事件')
			_this2.store.personFields['type'] = value;
		};

		_this2.onBlur = function (val) {
			console.log('blur:', val);
		};

		_this2.onFocus = function () {
			console.log('focus');
		};

		_this2.onSearch = function (val) {
			console.log('search:', val);
		};

		_this2.onSelect = function (val) {
			console.log('select:', val);
		};

		_this2.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this2.handEdit = function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_this2.setState({
									visible: true,
									title: 'edit'
								}, function () {

									delete param.key;
									delete param.selested;

									// 处理日期和时间
									var date = param.date;
									var dateEnd = param.dateEnd;
									var time = param.date == null ? (0, _moment2.default)().format("YYYY-MM-DD") : date.split(" ").length && date.split(" ")[0];
									var startTime = param.date == null ? null : date.split(" ").length && date.split(" ")[1];
									var endTime = param.dateEnd == null ? null : dateEnd.split(" ").length && dateEnd.split(" ")[1];

									_this2.store.personFields = Object.assign(mobx.toJS(_this2.store.personFields), param, {
										time: time,
										startTime: startTime,
										endTime: endTime
									});
								});

							case 1:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x4) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this2.handleDel = function (param) {
			var _this = _this2;
			confirm({
				title: '您确定删除吗?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: function onOk() {
					_this.store.delPerson(param.id).then(function (res) {
						if (res == true) {
							_antd.message.success("删除成功");
							_this.store.personPageIndex = 1;
							_this.store.personPageSize = 10;
							_this.store.getAllPersonByProjectIdAndType();
						} else {
							_antd.message.error('删除失败');
						}
					});
				},
				onCancel: function onCancel() {
					//console.log('Cancel');
				}
			});
		};

		_this2.onDateChange = function (type, value, dateString) {
			//console.log(type, value, dateString, '日期')
			_this2.store.personFields[type] = dateString;
		};

		_this2.handDate = function (type, time, timeString) {
			//console.log(type, time, timeString, '时间段')
			_this2.store.personFields[type] = timeString;
		};

		_this2.handleSelChange = function () {};

		_this2.doChange = function (value, e) {
			var val = e.props.val;

			if (val == undefined) {
				// 手输入
				_this2.store.personFields.taskId = "";
				_this2.store.personFields.dayTaskName = "";
				_this2.store.expectId = "";
			} else {
				// 选择
				_this2.store.personFields.taskId = val.id;
				_this2.store.personFields.dayTaskName = val.name;
				_this2.store.expectId = val.expectId;
			}
		};

		_this2.doChange2 = function (value, e) {
			var val = e.props.val;

			if (val == undefined) {
				// 手输入
				_this2.store.personFields.resourceType = "人";
				_this2.store.personFields.expectResourceId = "";
			} else {
				// 选择
				_this2.store.personFields.resourceType = val.type;
				_this2.store.personFields.expectResourceId = val.id;
			}
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			visible: false,
			filteredInfo: null,
			sortedInfo: null,
			workerType: [{ text: '安装工', value: '安装工' }, { text: '吊装工', value: '吊装工' }, { text: '信号工', value: '信号工' }, { text: '装修工', value: '装修工' }, { text: '电工', value: '电工' }, { text: '电焊工', value: '电焊工' }, { text: '木工', value: '木工' }, { text: '普工', value: '普工' }]
		};
		return _this2;
	}

	_createClass(Person, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//this.getTabeData();
			this.props.onRef(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			//clearTimeout(myClear)
		}

		// 新增


		// 取消


		// 保存


		// 限制数字


		// 编辑


		// 删除


		// 日期


		// 时间

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    sortedInfo = _state.sortedInfo,
			    filteredInfo = _state.filteredInfo,
			    workerType = _state.workerType;

			sortedInfo = sortedInfo || {};
			filteredInfo = filteredInfo || {};

			var getFieldDecorator = this.props.form.getFieldDecorator;

			var styles = {
				pagination: {
					textAlign: 'end',
					marginTop: '20px'
				}
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

			var columns = [{
				title: '序号',
				dataIndex: 'key',
				key: 'key',
				align: 'center'
			}, {
				title: '进场时间',
				dataIndex: 'date',
				key: 'date',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				}
			}, {
				title: '离场时间',
				dataIndex: 'dateEnd',
				key: 'dateEnd',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				}
			}, {
				title: '进场数量',
				dataIndex: 'count',
				key: 'count',
				align: 'center'
			}, {
				title: '工种',
				dataIndex: 'type',
				key: 'type',
				align: 'center',
				filters: workerType,
				filteredValue: filteredInfo.type || null,
				onFilter: function onFilter(value, record) {
					return record.type.includes(value);
				}
			}, {
				title: '实际工时',
				dataIndex: 'averageHours',
				key: 'averageHours',
				align: 'center'
			},
			// {
			// 	title: '备注',
			// 	dataIndex: 'remark',
			// 	key: 'remark',
			// },
			{
				title: '操作',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'green', className: 'pointer', onClick: _this4.handEdit.bind(_this4, record) },
							'\u7F16\u8F91'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'red', className: 'pointer', onClick: _this4.handleDel.bind(_this4, record) },
							'\u5220\u9664'
						)
					);
				}
			}];
			var fileds = mobx.toJS(this.store.personFields);
			var options = workerType.map(function (group, index) {
				return _react2.default.createElement(
					Option,
					{ key: index, value: group.text },
					group.value
				);
			});

			return _react2.default.createElement(
				'div',
				{ style: { padding: '0 15px 15px 0' } },
				_react2.default.createElement(
					_antd.Button,
					{ type: 'primary', onClick: this.handleAdd },
					'\u65B0\u589E\u4EBA\u5458'
				),
				_react2.default.createElement(_antd.Table, { columns: columns,
					pagination: false,
					size: 'middle',
					className: 'xlj-table mt25',
					dataSource: mobx.toJS(this.store.personTableData),
					onChange: this.handleChangeTable
				}),
				_react2.default.createElement(
					'div',
					{ style: styles.pagination },
					_react2.default.createElement(_antd.Pagination, {
						current: this.store.personPageIndex,
						pageSize: this.store.personPageSize
						//pageSizeOptions={["20", "50", "100", "500"]}
						, total: this.store.personTotalCount,
						onShowSizeChange: this.showSizeChange,
						onChange: this.onPageChange,
						showSizeChanger: true,
						showTotal: this.showTotal,
						showQuickJumper: true })
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: this.state.title == "add" ? "新增人员" : "编辑人员",
						visible: this.state.visible,
						width: '50%',
						onOk: this.handleSubmit,
						onCancel: this.handleCancle,
						maskClosable: false
					},
					_react2.default.createElement(
						_antd.Form,
						formItemLayout,
						_react2.default.createElement(
							_antd.Row,
							{ className: 'clearfix' },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u6240\u5C5E\u4EFB\u52A1' },
									getFieldDecorator('dayTaskName', {
										initialValue: fileds.dayTaskName,
										rules: [{ required: true, message: '请选择' }]
									})(_react2.default.createElement(_AutoSelect2.default, {
										url: _config2.default.xmgl.getDayTaskByDate,
										query: _xmgl2.default.xmgl.getDayTaskByDate,
										variables: {
											projectId: this.store.projectId,
											data: fileds.time == null ? "" : fileds.time
										},
										onChange: this.doChange,
										value: fileds.dayTaskName == null || fileds.dayTaskName == "" ? "" : fileds.dayTaskName,
										type: 'getDayTaskByDate'
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u4EBA\u5458\u7C7B\u578B' },
									getFieldDecorator('expectResourceId', {
										initialValue: fileds.expectResourceId,
										rules: [{ required: true, message: '请选择' }]
									})(_react2.default.createElement(_AutoSelect2.default, {
										url: _config2.default.xmgl.getExpectResourceList,
										query: _xmgl2.default.xmgl.getExpectResourceList,
										variables: {
											expectId: this.store.expectId,
											type: "人"
										},
										onChange: this.doChange2,
										value: fileds.expectResourceId == null || fileds.expectResourceId == "" ? "" : fileds.expectResourceId,
										type: 'getExpectResourceList',
										keyId: "id"
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u65E5\u671F' },
									getFieldDecorator('time', {
										initialValue: fileds.time == null ? "" : (0, _moment2.default)(fileds.time, 'YYYY-MM-DD'),
										rules: [{ required: true, message: '请输入日期' }]
									})(_react2.default.createElement(_antd.DatePicker, {
										dateFormat: 'YYYY-MM-DD',
										onChange: this.onDateChange.bind(this, 'time'),
										style: { width: '100%' } }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u8FDB\u573A\u6570\u91CF' },
									getFieldDecorator('count', {
										initialValue: fileds.count,
										rules: [{ required: true, message: '请输入进场数量' }]
									})(_react2.default.createElement(_antd.InputNumber, {
										style: { width: '100%' },
										min: 0,
										onChange: this.handleInputNumberChage.bind(this, "count"),
										formatter: this.limitDecimals,
										parser: this.limitDecimals }))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u5DE5\u79CD' },
									getFieldDecorator('type', {
										initialValue: fileds.type,
										rules: [{ required: true, message: '请选择工种' }]
									})(_react2.default.createElement(_antd.AutoComplete, {
										dataSource: options,
										style: { width: "100%" },
										onSelect: this.onSelect,
										onSearch: this.onSearch,
										onChange: this.onChangeSelect,
										filterOption: function filterOption(input, option) {
											return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
										},
										placeholder: '\u8BF7\u8F93\u5165'
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u5B9E\u9645\u5DE5\u65F6' },
									getFieldDecorator('averageHours', {
										initialValue: fileds.averageHours,
										rules: [{ required: true, message: '请输入实际工时' }]
									})(_react2.default.createElement(_antd.InputNumber, {
										style: { width: '100%' },
										min: 0,
										onChange: this.handleInputNumberChage.bind(this, "averageHours"),
										formatter: this.limitDecimals,
										parser: this.limitDecimals }))
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Person;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(Person);
exports.default = form;

/***/ }),

/***/ 2100:
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

var _uuid = __webpack_require__(79);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _xmgl = __webpack_require__(340);

var _xmgl2 = _interopRequireDefault(_xmgl);

var _AutoSelect = __webpack_require__(1613);

var _AutoSelect2 = _interopRequireDefault(_AutoSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * 可编辑表格
                                                                                                                                                                                                                             * */


var TextArea = _antd.Input.TextArea;

var customizeRenderEmpty = function customizeRenderEmpty() {
	return _react2.default.createElement(
		'div',
		{ style: { textAlign: 'center', padding: '0' } },
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

var EditableCell = function (_React$Component) {
	_inherits(EditableCell, _React$Component);

	function EditableCell() {
		var _ref2;

		var _temp, _this, _ret;

		_classCallCheck(this, EditableCell);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
			editing: true
		}, _this.save = function (e) {
			var _this$props = _this.props,
			    record = _this$props.record,
			    handleSave = _this$props.handleSave;

			_this.form.validateFields(function (error, values) {
				if (error && error[e.currentTarget.id]) {
					return;
				}
				delete values.name;
				handleSave(_extends({}, record, values));
			});
		}, _this.doChange = function (value, e) {
			var val = e.props.val;
			var _this$props2 = _this.props,
			    record = _this$props2.record,
			    handleSave = _this$props2.handleSave;

			if (val == undefined) {
				// 手输入
				var obj = { name: value, expectId: "" };
				handleSave(_extends({}, record, obj));
			} else {
				// 选择
				var _obj = {
					expectId: val.expectId,
					name: val.name,
					completeToday: val.completeToday,
					remark: val.remark,
					completeTotal: val.completeTotal,
					units: val.units,
					quantities: val.quantities
				};
				handleSave(_extends({}, record, _obj));
			}
		}, _this.renderCell = function (form) {
			_this.form = form;
			var _this$props3 = _this.props,
			    children = _this$props3.children,
			    dataIndex = _this$props3.dataIndex,
			    record = _this$props3.record,
			    title = _this$props3.title,
			    handleDelete = _this$props3.handleDelete,
			    date = _this$props3.date,
			    projectId = _this$props3.projectId;
			var editing = _this.state.editing;

			if (dataIndex == 'completeToday' || dataIndex == 'completeTotal' || dataIndex == 'quantities' || dataIndex == "completeTodayTag") {
				// 数字
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber
					//style={{width: '60px'}}
					, { ref: function ref(node) {
							return _this.input = node;
						},
						onChange: _this.save,
						onBlur: _this.save
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
					},
					children
				);
			} else if (dataIndex == 'remark') {
				// 文本
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
							return _this.input = node;
						},
						onChange: _this.save,
						onBlur: _this.save
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
					},
					children
				);
			} else if (dataIndex == 'name') {
				// 文本
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(
						'div',
						{ className: 'pr' },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
									return handleDelete(record);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									position: 'absolute',
									left: '-30px',
									margin: '16px 0',
									color: '#4BA4BE',
									cursor: 'pointer',
									fontSize: '18px'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(_AutoSelect2.default, {
							url: _config2.default.xmgl.getExpectList,
							query: _xmgl2.default.xmgl.getExpectList,
							variables: {
								projectId: projectId,
								data: date
							},
							onChange: _this.doChange,
							value: record[dataIndex] == null || record[dataIndex] == "" ? "" : record[dataIndex],
							type: 'getExpectList'
						})
					))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
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
					})(_react2.default.createElement(_antd.Input, {
						style: { width: '60px' },
						ref: function ref(node) {
							return _this.input = node;
						},
						onChange: _this.save,
						onBlur: _this.save
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
					},
					children
				);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

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

var ProEditTable = function (_React$Component2) {
	_inherits(ProEditTable, _React$Component2);

	function ProEditTable(props) {
		_classCallCheck(this, ProEditTable);

		var _this2 = _possibleConstructorReturn(this, (ProEditTable.__proto__ || Object.getPrototypeOf(ProEditTable)).call(this, props));

		_this2.handleAdd = function () {
			var _this2$state = _this2.state,
			    dataSource = _this2$state.dataSource,
			    addData = _this2$state.addData;

			var source = JSON.parse(JSON.stringify(dataSource));
			var planId = _this2.props.planId;

			var newData = Object.assign(addData, { id: "!" + (0, _uuid.v4)(), planId: planId });
			_this2.setState({
				dataSource: [].concat(_toConsumableArray(source), [newData])
			}, function () {
				_this2.props.updateData("dayTasks", _this2.state.dataSource);
			});
		};

		_this2.handleDelete = function (record) {
			var id = record.id;
			var dataSource = _this2.state.dataSource;

			var source = JSON.parse(JSON.stringify(dataSource));
			_this2.setState({
				dataSource: source.filter(function (item) {
					return item.id !== id;
				})
			}, function () {
				_this2.props.updateData("dayTasks", _this2.state.dataSource);
			});
		};

		_this2.handleSave = function (row) {
			var dataSource = _this2.state.dataSource;

			var source = JSON.parse(JSON.stringify(dataSource));
			var index = source.findIndex(function (item) {
				return row.id === item.id;
			});
			var item = source[index];
			source.splice(index, 1, _extends({}, item, row));
			_this2.setState({ dataSource: source }, function () {
				_this2.props.updateData("dayTasks", _this2.state.dataSource);
			});
		};

		_this2.state = {
			dataSource: [],
			addData: {
				id: "",
				planId: "",
				expectId: "",
				name: "",
				completeToday: 0,
				remark: "",
				completeTotal: 0,
				units: "",
				quantities: 0,
				completeTodayTag: 0
			}
		};
		return _this2;
	}

	_createClass(ProEditTable, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {
			if (JSON.stringify(nextProps.dataSource) != JSON.stringify(this.props.dataSource)) {
				this.setState({
					dataSource: nextProps.dataSource
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				dataSource: this.props.dataSource
			});
		}

		// 新增


		// 删除


		// 保存

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var dataSource = this.state.dataSource;
			var _props2 = this.props,
			    projectId = _props2.projectId,
			    date = _props2.date;

			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var columns = [{
				title: '任务名称',
				dataIndex: 'name',
				key: 'name',
				align: 'center',
				editable: true
			}, {
				title: '任务类型',
				dataIndex: 'expectId',
				key: 'expectId',
				align: 'center',
				width: '60px',
				render: function render(text) {
					return _react2.default.createElement(
						'div',
						null,
						text == null || text == "" ? "新增" : "计划"
					);
				}
			}, {
				title: '总量',
				dataIndex: 'quantities',
				key: 'quantities',
				align: 'center',
				editable: false
				//width: '60px',
			}, {
				title: '当天目标',
				dataIndex: 'completeTodayTag',
				key: 'completeTodayTag',
				align: 'center',
				editable: true
				//width: '60px',
			}, {
				title: '单位',
				dataIndex: 'units',
				key: 'units',
				align: 'center',
				editable: true
				//width: '50px',
			}, {
				title: '今日完成',
				dataIndex: 'completeToday',
				key: 'completeToday',
				align: 'center',
				editable: true
				//width: '60px',
			}, {
				title: '累计进度',
				dataIndex: 'completeTotal',
				key: 'completeTotal',
				align: 'center',
				width: '60px'
			}, {
				title: '备注',
				dataIndex: 'remark',
				key: 'remark',
				align: 'center',
				editable: true
				//width: '80px',
			}];
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
							handleSave: _this3.handleSave,
							handleDelete: _this3.handleDelete,
							projectId: projectId,
							date: date
						};
					}
				});
			});

			return _react2.default.createElement(
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
					bordered: true,
					dataSource: dataSource,
					rowKey: function rowKey(record) {
						return record.id;
					}
				}),
				_react2.default.createElement(_antd.Icon, { onClick: this.handleAdd,
					style: { margin: '16px 0', color: '#4BA4BE', fontSize: '18px' },
					type: 'plus-circle' })
			);
		}
	}]);

	return ProEditTable;
}(_react2.default.Component);

exports.default = ProEditTable;

/***/ }),

/***/ 2101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 进度控制
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

var _immutable = __webpack_require__(184);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _AutoSelect = __webpack_require__(1613);

var _AutoSelect2 = _interopRequireDefault(_AutoSelect);

var _ProEditTable = __webpack_require__(2100);

var _ProEditTable2 = _interopRequireDefault(_ProEditTable);

var _xmgl = __webpack_require__(340);

var _xmgl2 = _interopRequireDefault(_xmgl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _antd.Modal.confirm;

function getBase64(file) {
	return new Promise(function (resolve, reject) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			return resolve(reader.result);
		};
		reader.onerror = function (error) {
			return reject(error);
		};
	});
}

var Progress = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Progress, _React$Component);

	function Progress(props) {
		var _this3 = this;

		_classCallCheck(this, Progress);

		var _this2 = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

		_this2.getTabeData = function () {
			_this2.store.getPlanList();
		};

		_this2.handleAdd = function () {
			_this2.setState({
				visible: true,
				title: 'add'
			}, function () {
				// 获取今日计划
				var param = (0, _moment2.default)().format("YYYY-MM-DD");
				_this2.store.getTodayGoals(param).then(function (res) {
					_this2.store.planFields = Object.assign(mobx.toJS(_this2.store.planFields), {
						date: (0, _moment2.default)().format("YYYY-MM-DD"),
						"goalsTomorrow": [{
							"id": "",
							"projectId": _this2.store.projectId,
							"text": "",
							"rate": 100,
							"date": null
						}],
						goals: Object.assign([], res == null ? [] : res),
						"dayTasks": []
					});
				});

				// 根据日期获取定点位置
				_this2.getPosList();
				// 获取任务
				_this2.getDayTaskByDate(param);
			});
		};

		_this2.getPosList = function () {
			var date = _this2.store.planFields.date;

			var params = {
				projectId: _this2.store.projectId,
				beginTime: (0, _moment2.default)(date).valueOf(),
				endTime: (0, _moment2.default)(date).valueOf()
			};
			_this2.store.getPositionList(params).then(function (res) {
				if (res) {
					_this2.store.planFields.positions = Object.assign([], res == null ? [] : res);
				}
			});
		};

		_this2.onDateChange = function (type, value, dateString) {
			var _this = _this2;
			//切换日期，更新定点位置信息
			var fileds = JSON.parse(JSON.stringify(_this2.store.planFields));
			if (dateString !== fileds.date) {
				_this.store.planFields[type] = dateString;
				// 根据日期获取定点位置
				_this.getPosList();
				// 获取任务
				_this.getDayTaskByDate(dateString);
				/*confirm({
    	title: '日期切换时任务数据会清空，您确定要切换吗?',
    	okText: '确定',
    	okType: 'danger',
    	cancelText: '取消',
    	onOk() {
    			},
    	onCancel() {
    		//console.log('Cancel');
    	},
    });*/
			} else {
				_this.store.planFields[type] = fileds.date;
			}
		};

		_this2.getDayTaskByDate = function (date) {
			_this2.store.getDayTaskByDate({
				"projectId": _this2.store.projectId,
				"date": date
			}).then(function (res) {
				_this2.store.planFields = Object.assign(mobx.toJS(_this2.store.planFields), {
					dayTasks: Object.assign([], res == null ? [] : res)
				});
			});
		};

		_this2.handleChage = function (type, e) {
			_this2.store.planFields[type] = e.target.value;
		};

		_this2.handleCancle = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.store.planFields = Object.assign({}, {
					"id": null,
					"date": null,
					"attachments": [],
					"goals": [],
					"goalsTomorrow": [{
						"id": "",
						"projectId": "",
						"text": "",
						"rate": 100,
						"date": null,
						"ztaskId": ""
					}],
					"text": "",
					"positions": [],
					"dayTasks": []
				});
			});
			_this2.props.form.resetFields();
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			_this2.props.form.validateFields(function (err, fieldsValue) {
				if (err) {
					return false;
				}

				// 处理附件
				var array = JSON.parse(JSON.stringify(_this2.store.planFields.attachments));
				var arr = [];
				array.length && array.map(function (item, index) {
					arr.push({
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath
						//id: item.id
					});
				});

				_this2.store.savePlan(Object.assign(mobx.toJS(_this2.store.planFields), {
					attachments: arr,
					projectId: _this2.store.projectId
				})).then(function (res) {
					if (res) {
						_antd.message.success("保存成功");
						_this2.getTabeData();
						_this2.handleCancle();
					} else {
						_antd.message.success(res.message || "保存失败");
					}
				});
			});
		};

		_this2.showSizeChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this2.store.planPageIndex = 1;
								_this2.store.planPageSize = pageSize;
								_this2.store.getPlanList();

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

		_this2.onPageChange = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this2.store.planPageIndex = pageNumber;
								_this2.store.getPlanList();

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

		_this2.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this2.handEdit = function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_this2.setState({
									visible: true,
									title: 'edit'
								}, function () {
									delete param.key;
									_this2.store.planFields = Object.assign({}, param, {
										attachments: param.attachments !== null ? param.attachments.map(function (vitem, index) {
											return Object.assign({}, {
												uid: vitem.fileId,
												name: vitem.fileName,
												status: 'done',
												url: vitem.filePath,
												fileId: vitem.fileId,
												fileName: vitem.fileName,
												filePath: vitem.filePath,
												id: vitem.fileId
											});
										}) : [],
										positions: param.positions == null ? [] : param.positions
									});
									// 根据日期获取定点位置
									_this2.getPosList();
								});

							case 1:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x4) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this2.handleDel = function (param) {
			var _this = _this2;
			confirm({
				title: '您确定删除吗?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: function onOk() {
					_this.store.delPlan(param.id).then(function (res) {
						if (res == true) {
							_antd.message.success("删除成功");
							_this.store.planPageIndex = 1;
							_this.store.planPageSize = 10;
							_this.store.getPlanList();
						} else {
							_antd.message.error('删除失败');
						}
					});
				},
				onCancel: function onCancel() {
					//console.log('Cancel');
				}
			});
		};

		_this2.limitDecimals = function (value) {
			var reg = /^(\-)*(\d+)\.(\d\d).*$/;
			//console.log(value);
			if (typeof value === 'string') {
				return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
			} else if (typeof value === 'number') {
				return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
			} else {
				return '';
			}
		};

		_this2.remove = function (index) {
			var customList = JSON.parse(JSON.stringify(_this2.store.planFields.goalsTomorrow));
			var list = (0, _immutable.List)(customList);
			_this2.store.planFields.goalsTomorrow = Object.assign([], list.delete(index).toJS());
			_this2.props.form.resetFields();
		};

		_this2.add = function () {
			var customList = JSON.parse(JSON.stringify(_this2.store.planFields.goalsTomorrow));
			_this2.store.planFields.goalsTomorrow = [].concat(_toConsumableArray(customList), [{
				"id": "",
				"projectId": _this2.store.projectId,
				"text": "",
				"rate": 100,
				"date": null,
				"ztaskId": ""
			}]);
			_this2.props.form.resetFields();
		};

		_this2.doChange = function (type, index, value, e) {
			_this2.props.form.resetFields();
			var val = e.props.val;

			var customList = JSON.parse(JSON.stringify(_this2.store.planFields.goalsTomorrow));
			var list = (0, _immutable.List)(customList);
			if (val == undefined) {
				// 手输入
				list.update(index, function (val) {
					val.text = value;
					val.ztaskId = "";
					return val;
				});
			} else {
				// 选择
				list.update(index, function (val) {
					val.text = value;
					val.ztaskId = val.id;
					return val;
				});
			}
			_this2.store.planFields.goalsTomorrow = Object.assign([], list.toJS());
		};

		_this2.hanleNumber = function (type, index, value) {
			var customList = JSON.parse(JSON.stringify(_this2.store.planFields.goals));
			var list = (0, _immutable.List)(customList);
			list.update(index, function (val) {
				val.rate = value;
				return val;
			});
			//console.log(list.toJS(), customList, '9',value)
			_this2.store.planFields.goals = Object.assign([], list.toJS());
		};

		_this2.handleChange = function (info) {
			//console.log(info, '0')
			var status = info.file.status;
			if (status === 'done') {
				// 上传成功
				//message.success(`${info.file.name}上传成功！`);
			} else if (status === 'error') {
				_antd.message.error(info.file.name + '\u4E0A\u4F20\u5931\u8D25\uFF01');
			} else if (status === 'removed') {
				//console.log('delete')
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
					file.fileId = file.response.body[0].fileId;
					file.id = file.response.body[0].fileId;
					file.fileName = file.response.body[0].fileName;
					file.filePath = file.response.body[0].fileURL;
				}
				return file;
			});
			fileList = fileList.filter(function (file) {
				if (file.response) {
					return file.response.status === 'ok';
				}
				return true;
			});

			_this2.setState({
				fileList: Object.assign([], [].concat(_toConsumableArray(fileList)))
			}, function () {
				// 更新附件数据
				var data = _this2.state.fileList.map(function (item, index) {
					return {
						uid: item.uid,
						name: item.fileName,
						status: 'done',
						url: item.filePath,
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						id: item.fileId
					};
				});

				_this2.store.planFields.attachments = Object.assign([], data);
			});
		};

		_this2.handleCancel = function () {
			return _this2.setState({ previewVisible: false });
		};

		_this2.handlePreview = function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(file) {
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								if (!(!file.url && !file.preview)) {
									_context4.next = 4;
									break;
								}

								_context4.next = 3;
								return getBase64(file.originFileObj);

							case 3:
								file.preview = _context4.sent;

							case 4:
								_this2.setState({
									previewImage: file.url || file.preview,
									previewVisible: true
								});

							case 5:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, _this3);
			}));

			return function (_x5) {
				return _ref4.apply(this, arguments);
			};
		}();

		_this2.saveAttachment = function (pitem, index, params) {
			// 处理附件
			var arr = [];
			params.length && params.map(function (item) {
				arr.push({
					fileId: item.fileId,
					fileName: item.fileName,
					filePath: item.filePath,
					positionId: pitem.id,
					createTime: pitem.createTime,
					dateTime: (0, _moment2.default)(_this2.store.planFields.date).valueOf(),
					id: item.id
				});
			});
			var positions = JSON.parse(JSON.stringify(_this2.store.planFields.positions));
			positions[index].attachments = Object.assign([], arr);
			_this2.store.planFields['positions'] = Object.assign([], positions);
		};

		_this2.handleAttment = function (params) {
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
			_this2.store.planFields.attachments = Object.assign([], arr);
		};

		_this2.updateData = function (type, dataSource) {
			_this2.store.planFields[type] = Object.assign([], dataSource);
		};

		_this2.handleSend = function (param) {
			var _this = _this2;
			if (param.notifyStatus == "1") {
				confirm({
					title: '邮件已发送，您确定要再次发送吗?',
					okText: '确定',
					okType: 'danger',
					cancelText: '取消',
					onOk: function onOk() {
						_this.store.sendNotifys(param.id).then(function (res) {
							if (res == true) {
								_antd.message.success("发送成功");
							} else {
								_antd.message.error("发送失败");
							}
						});
					},
					onCancel: function onCancel() {}
				});
			} else {
				confirm({
					title: '您确定要发送吗?',
					okText: '确定',
					okType: 'danger',
					cancelText: '取消',
					onOk: function onOk() {
						_this.store.sendNotifys(param.id).then(function (res) {
							if (res == true) {
								_antd.message.success("发送成功");
							} else {
								_antd.message.error("发送失败");
							}
						});
					},
					onCancel: function onCancel() {}
				});
			}
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			visible: false,
			fileList: [],
			previewVisible: false,
			previewImage: ''
		};
		return _this2;
	}

	_createClass(Progress, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//this.getTabeData();
			this.props.onRef(this);
		}

		// 新增


		// 日期


		// 根据日期获取定点位置


		// 文本改变


		// 取消


		// 保存


		// 编辑


		// 删除


		// 限制数字


		// 删除字段


		// 增加字段


		// input


		// 数字


		// 处理定点位置附件


		// 形象进度上传


		// 发送

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var getFieldDecorator = this.props.form.getFieldDecorator;

			var styles = {
				pagination: {
					textAlign: 'end',
					marginTop: '20px'
				}
			};
			var columns = [{
				title: '序号',
				dataIndex: 'key',
				key: 'key',
				align: 'center',
				width: '50px'
			}, {
				title: '进度名称',
				dataIndex: 'date',
				key: 'date',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						text + "进度报告"
					);
				},
				width: '250px'
			}, {
				title: '时间',
				dataIndex: 'date',
				key: 'date',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				},
				width: '150px'
			}, /* {
      title: '今日综述',
      dataIndex: 'text',
      key: 'text',
      align: 'left',
      },*/
			{
				title: '操作',
				key: 'action',
				fixed: 'right',
				align: 'left',
				width: 200,
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'green', className: 'pointer', onClick: _this4.handEdit.bind(_this4, record) },
							'\u7F16\u8F91'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'red', className: 'pointer', onClick: _this4.handleDel.bind(_this4, record) },
							'\u5220\u9664'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ className: 'pointer', color: 'blue', onClick: _this4.handleSend.bind(_this4, record) },
							'\u53D1\u9001'
						)
					);
				}
			}];
			var fileds = mobx.toJS(this.store.planFields);
			var formItems = mobx.toJS(this.store.planFields.goalsTomorrow).length && mobx.toJS(this.store.planFields.goalsTomorrow).map(function (item, index) {
				return _react2.default.createElement(
					'div',
					{ className: 'pr', style: { width: '80%' },
						key: 'goals_tomorrow' + index },
					_react2.default.createElement(_AutoSelect2.default, {
						url: _config2.default.xmgl.getZplanTaskList,
						query: _xmgl2.default.xmgl.getZplanTaskList,
						variables: {
							projectId: _this4.store.projectId,
							beginTime: (0, _moment2.default)(_this4.store.planFields.date).subtract(1, "years").valueOf(), //当前时间的前3个月时间,
							endTime: (0, _moment2.default)(_this4.store.planFields.date).add(1, "years").valueOf() //当前时间的前3个月时间,
						},
						onChange: _this4.doChange.bind(_this4, "text", index),
						value: item.text,
						type: 'getZplanTaskList'
					}),
					index >= 1 ? _react2.default.createElement(_antd.Button, {
						shape: 'circle',
						className: 'dynamic-delete-button',
						onClick: _this4.remove.bind(_this4, index),
						size: 'small',
						icon: 'minus',
						style: { top: '6px' },
						type: 'default' }) : null
				);
			});
			var props = {
				data: {
					type: 1,
					sourceId: this.store.planFields.id // 物料的id
				},
				name: 'file',
				multiple: true,
				action: _config2.default.management.multiUpload,
				onChange: this.handleChange,
				fileList: mobx.toJS(this.store.planFields.attachments),
				onPreview: this.handlePreview,
				listType: "picture-card"
			};

			var _state = this.state,
			    previewVisible = _state.previewVisible,
			    previewImage = _state.previewImage,
			    fileList = _state.fileList;

			var uploadButton = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_antd.Icon, { type: 'plus' }),
				_react2.default.createElement(
					'div',
					{ className: 'ant-upload-text' },
					'\u4E0A\u4F20'
				)
			);

			return _react2.default.createElement(
				'div',
				{ className: 'w', style: { padding: '0 15px 15px 0' } },
				_react2.default.createElement(
					_antd.Button,
					{ type: 'primary', onClick: this.handleAdd },
					'\u65B0\u589E\u8FDB\u5EA6'
				),
				_react2.default.createElement(_antd.Table, { columns: columns,
					pagination: false,
					size: 'middle',
					className: 'xlj-table mt25',
					dataSource: mobx.toJS(this.store.planTableData)
				}),
				_react2.default.createElement(
					'div',
					{ style: styles.pagination },
					_react2.default.createElement(_antd.Pagination, {
						current: this.store.planPageIndex,
						pageSize: this.store.planPageSize,
						total: this.store.planTotalCount,
						onShowSizeChange: this.showSizeChange,
						onChange: this.onPageChange,
						showSizeChanger: true,
						showTotal: this.showTotal,
						showQuickJumper: true })
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: this.state.title == "add" ? "新增进度" : "编辑进度",
						visible: this.state.visible,
						width: '80%',
						style: { minWidth: '880px' },
						onOk: this.handleSubmit,
						onCancel: this.handleCancle,
						maskClosable: false
					},
					_react2.default.createElement(
						_antd.Form,
						null,
						_react2.default.createElement(
							_antd.Row,
							{ className: 'clearfix' },
							_react2.default.createElement(
								_antd.Col,
								{ span: 24 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 18 }
										},
										label: '\u8FDB\u5EA6\u540D\u79F0' },
									_react2.default.createElement(
										'div',
										{ style: { fontWeight: 400 } },
										(0, _moment2.default)(fileds.date).format("YYYY年MM月DD日"),
										'\u8FDB\u5EA6\u62A5\u544A'
									)
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 18 }
										},
										label: '\u65F6\u95F4' },
									getFieldDecorator('date', {
										initialValue: fileds.date == null ? "" : (0, _moment2.default)(fileds.date, 'YYYY-MM-DD'),
										rules: [{
											required: true,
											message: '请输入时间'
										}]
									})(_react2.default.createElement(_antd.DatePicker, {
										format: 'YYYY-MM-DD',
										value: fileds.date == null ? "" : (0, _moment2.default)(fileds.date, 'YYYY-MM-DD'),
										onChange: this.onDateChange.bind(this, 'date')
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, style: { marginTop: '8px' } },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 18 }
										},
										label: '\u73B0\u573A\u7167\u7247' },
									_react2.default.createElement(_MyUpload2.default, {
										length: 1,
										saveAttachment: this.handleAttment.bind(this),
										disabled: false,
										multiple: false,
										listType: 'picture-card',
										ossData: this.props.ossData,
										fileList: mobx.toJS(this.store.planFields.attachments)
									})
								)
							),
							fileds.positions.map(function (item, index) {
								return _react2.default.createElement(
									_antd.Col,
									{ key: 'pos' + index, span: 24, style: { marginTop: '8px' } },
									_react2.default.createElement(
										_antd.Form.Item,
										{
											labelCol: {
												xs: { span: 24 },
												sm: { span: 6 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 18 }
											},
											label: '' + item.name },
										_react2.default.createElement(_MyUpload2.default, {
											key: index,
											length: 1,
											saveAttachment: _this4.saveAttachment.bind(_this4, item, index),
											disabled: false,
											multiple: false,
											listType: 'picture-card',
											ossData: _this4.props.ossData,
											fileList: item.attachments == null ? [] : item.attachments.map(function (vitem) {
												return Object.assign({}, {
													uid: vitem.fileId,
													name: vitem.fileName,
													status: 'done',
													url: vitem.filePath,
													fileId: vitem.fileId,
													fileName: vitem.fileName,
													filePath: vitem.filePath,
													id: vitem.id,
													positionId: vitem.positionId,
													createTime: vitem.createTime,
													dateTime: vitem.dateTime
												});
											})
										})
									)
								);
							})
						)
					),
					_react2.default.createElement(_ProEditTable2.default, {
						planId: this.store.planFields.id,
						dataSource: fileds.dayTasks,
						updateData: this.updateData,
						projectId: this.store.projectId,
						date: fileds.date == null ? "" : fileds.date
					})
				),
				_react2.default.createElement(
					_antd.Modal,
					{ visible: previewVisible, footer: null, onCancel: this.handleCancel },
					_react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
				)
			);
		}
	}]);

	return Progress;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(Progress);
exports.default = form;

/***/ }),

/***/ 2102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 质量与安全管理
            * qiufh@glodon.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _antd.Radio.Group;
var TextArea = _antd.Input.TextArea;
var TabPane = _antd.Tabs.TabPane;

var confirm = _antd.Modal.confirm;

var Quality = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Quality, _React$Component);

	function Quality(props) {
		var _this3 = this;

		_classCallCheck(this, Quality);

		var _this2 = _possibleConstructorReturn(this, (Quality.__proto__ || Object.getPrototypeOf(Quality)).call(this, props));

		_this2.getTabeData = function () {
			_this2.store.getAllQualityByProjectIdAndType();
		};

		_this2.handleAdd = function () {
			var title = _this2.store.qualityType == '1' ? "新增质量问题" : "新增安全问题";
			_this2.setState({ visible: true, title: title }, function () {
				_this2.store.qualityFields = Object.assign(mobx.toJS(_this2.store.qualityFields), { createTime: (0, _moment2.default)().format("YYYY-MM-DD"), type: _this2.store.qualityType });
			});
		};

		_this2.onDateChange = function (type, value, dateString) {
			_this2.store.qualityFields[type] = dateString;
		};

		_this2.handleChage = function (type, e) {
			_this2.store.qualityFields[type] = e.target.value;
		};

		_this2.handleChangeTable = function (pagination, filters, sorter) {
			_this2.setState({
				filteredInfo: filters,
				sortedInfo: sorter
			});
		};

		_this2.clearFilters = function () {
			_this2.setState({ filteredInfo: null });
		};

		_this2.handleCancle = function () {
			_this2.setState({
				visible: false
			}, function () {
				_this2.store.qualityFields = Object.assign({}, {
					"id": null,
					"question": "",
					"type": 1, //类型：1质量 2安全
					"emergencyQuality": "质量通病", //紧急程度：1一般2严重3紧急
					"createTime": (0, _moment2.default)().format("YYYY-MM-DD"),
					"state": "发现问题",
					"solveTime": null,
					"handler": "",
					"reviewer": "",
					"remark": "",
					planSolveTime: null
				});
			});
			_this2.props.form.resetFields();
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			_this2.props.form.validateFields(function (err, fieldsValue) {
				console.log(fieldsValue);
				if (err) {
					return false;
				}
				_this2.store.saveQuality().then(function (res) {
					if (res) {
						_antd.message.success("保存成功");
						_this2.getTabeData();
						_this2.handleCancle();
					} else {
						_antd.message.success(res.message || "保存失败");
					}
				});
			});
		};

		_this2.limitDecimals = function (value) {
			var reg = /^(\-)*(\d+)\.(\d\d).*$/;
			//console.log(value);
			if (typeof value === 'string') {
				return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
			} else if (typeof value === 'number') {
				return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
			} else {
				return '';
			}
		};

		_this2.showSizeChange = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(current, pageSize) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this2.store.qualityPageIndex = 1;
								_this2.store.qualityPageSize = pageSize;
								_this2.store.getAllQualityByProjectIdAndType();

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

		_this2.onPageChange = function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this2.store.qualityPageIndex = pageNumber;
								_this2.store.getAllQualityByProjectIdAndType();

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

		_this2.showTotal = function (total) {
			return '\u5171 ' + total + ' \u6761';
		};

		_this2.callback = function (key) {
			_this2.store.qualityType = Number(key);
			_this2.getTabeData();
		};

		_this2.handEdit = function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
				var title;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								title = _this2.store.qualityType == '1' ? "编辑质量问题" : "编辑安全问题";

								_this2.setState({
									visible: true,
									title: title
								}, function () {
									delete param.key;
									delete param.selested;
									if (_this2.store.qualityType == '1') {
										// 质量问题
										_this2.store.qualityFields = Object.assign(mobx.toJS(_this2.store.qualityFields), param, {
											"emergencyQuality": param.emergency
										});
									} else {
										_this2.store.qualityFields = Object.assign(mobx.toJS(_this2.store.qualityFields), param, {
											"emergencySafe": param.emergency
										});
									}
								});

							case 2:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x4) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this2.handleDel = function (param) {
			var _this = _this2;
			confirm({
				title: '您确定删除吗?',
				okText: '确定',
				okType: 'danger',
				cancelText: '取消',
				onOk: function onOk() {
					_this.store.delQuality(param.id).then(function (res) {
						if (res == true) {
							_antd.message.success("删除成功");
							_this.store.qualityPageIndex = 1;
							_this.store.qualityPageSize = 10;
							_this.store.getAllQualityByProjectIdAndType();
						} else {
							_antd.message.error('删除失败');
						}
					});
				},
				onCancel: function onCancel() {
					//console.log('Cancel');
				}
			});
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			visible: false,
			type: ['质量', '安全'], //类型名称
			emergencyQuality: ['质量通病', '质量问题', '一般质量问题', '较大质量问题', '重大质量问题'], //质量问题紧急程度
			emergencySafe: ['安全隐患', '一般安全事故', '较大安全事故'], //紧急问题程度
			state: ['发现问题', '整改完成'], //问题状态
			filteredInfo: null,
			sortedInfo: null,
			title: '' // 标题
		};
		return _this2;
	}

	_createClass(Quality, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.store.qualityType = 1;
			//this.getTabeData();
			this.props.onRef(this);
		}

		// 取消


		// 保存


		// 限制数字


		// 编辑


		// 删除

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var getFieldDecorator = this.props.form.getFieldDecorator;
			var _state = this.state,
			    type = _state.type,
			    emergencyQuality = _state.emergencyQuality,
			    emergencySafe = _state.emergencySafe,
			    state = _state.state,
			    sortedInfo = _state.sortedInfo,
			    filteredInfo = _state.filteredInfo;


			sortedInfo = sortedInfo || {};
			filteredInfo = filteredInfo || {};

			var styles = {
				pagination: {
					textAlign: 'end',
					marginTop: '20px'
				}
			};
			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 10 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 12 }
				}
			};

			var columns = [{
				title: '序号',
				dataIndex: 'key',
				key: 'key',
				align: 'center'
			}, {
				title: '问题描述',
				dataIndex: 'question',
				key: 'question'
			}, {
				title: '问题状态',
				dataIndex: 'state',
				key: 'state',
				align: 'center'
			}, {
				title: '重要程度',
				dataIndex: 'emergency',
				key: 'emergency',
				align: 'center'
			},
			/*{
   	title: '类型',
   	dataIndex: 'type',
   	key: 'type',
   	filters: [{text: '质量', value: '质量'}, {text: '安全', value: '安全'}],
   	filteredValue: filteredInfo.type || null,
   	onFilter: (value, record) => record.type.includes(value),
   },*/
			{
				title: '发现时间',
				dataIndex: 'createTime',
				key: 'createTime',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						text == null ? "" : text
					);
				}
			}, {
				title: '解决时间',
				dataIndex: 'solveTime',
				key: 'solveTime',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						null,
						record.state === "发现问题" ? record.planSolveTime : record.solveTime
					);
				}
			},
			// {
			// 	title: '处理人',
			// 	dataIndex: 'handler',
			// 	key: 'handler',
			// },
			{
				title: '验收人',
				dataIndex: 'reviewer',
				key: 'reviewer',
				align: 'center'
			}, {
				title: '操作',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'green', className: 'pointer', onClick: _this4.handEdit.bind(_this4, record) },
							'\u7F16\u8F91'
						),
						_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
						_react2.default.createElement(
							_antd.Tag,
							{ color: 'red', className: 'pointer', onClick: _this4.handleDel.bind(_this4, record) },
							'\u5220\u9664'
						)
					);
				}
				/*{
    	title: '处理方案',
    	dataIndex: 'remark',
    	key: 'remark',
    }*/
			}];

			var fileds = mobx.toJS(this.store.qualityFields);

			return _react2.default.createElement(
				'div',
				{ style: { padding: '0 15px 15px 0' } },
				_react2.default.createElement(
					_antd.Tabs,
					{ defaultActiveKey: '1',
						className: 'quality-tabs',
						onChange: this.callback },
					_react2.default.createElement(
						TabPane,
						{ tab: '\u8D28\u91CF\u95EE\u9898', key: '1' },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'primary', onClick: this.handleAdd },
							'\u65B0\u589E\u8D28\u91CF\u95EE\u9898'
						),
						_react2.default.createElement(_antd.Table, { columns: columns,
							pagination: false,
							size: 'middle',
							className: 'xlj-table mt25',
							dataSource: mobx.toJS(this.store.qualityTableData),
							onChange: this.handleChangeTable
						}),
						_react2.default.createElement(
							'div',
							{ style: styles.pagination },
							_react2.default.createElement(_antd.Pagination, {
								current: this.store.qualityPageIndex,
								pageSize: this.store.qualityPageSize,
								total: this.store.qualityTotalCount,
								onShowSizeChange: this.showSizeChange,
								onChange: this.onPageChange,
								showSizeChanger: true,
								showTotal: this.showTotal,
								showQuickJumper: true })
						)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u5B89\u5168\u95EE\u9898', key: '2' },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'primary', onClick: this.handleAdd },
							'\u65B0\u589E\u5B89\u5168\u95EE\u9898'
						),
						_react2.default.createElement(_antd.Table, { columns: columns,
							pagination: false,
							size: 'middle',
							className: 'xlj-table mt25',
							dataSource: mobx.toJS(this.store.qualityTableData),
							onChange: this.handleChangeTable
						}),
						_react2.default.createElement(
							'div',
							{ style: styles.pagination },
							_react2.default.createElement(_antd.Pagination, {
								current: this.store.qualityPageIndex,
								pageSize: this.store.qualityPageSize,
								total: this.store.qualityTotalCount,
								onShowSizeChange: this.showSizeChange,
								onChange: this.onPageChange,
								showSizeChanger: true,
								showTotal: this.showTotal,
								showQuickJumper: true })
						)
					)
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: this.state.title,
						visible: this.state.visible,
						width: '50%',
						onOk: this.handleSubmit,
						onCancel: this.handleCancle,
						maskClosable: false
					},
					_react2.default.createElement(
						_antd.Form,
						formItemLayout,
						_react2.default.createElement(
							_antd.Row,
							{ className: 'clearfix' },
							_react2.default.createElement(
								_antd.Col,
								{ span: 24 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 5 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 19 }
										},
										label: '\u95EE\u9898\u63CF\u8FF0' },
									getFieldDecorator('question', {
										initialValue: fileds.question,
										rules: [{
											required: true,
											message: '请输入问题描述'
										}]
									})(_react2.default.createElement(TextArea, { autosize: { minRows: 2 },
										disabled: this.props.title == "edit",
										onChange: this.handleChage.bind(this, "question"),
										value: fileds.question
									}))
								)
							)
						),
						_react2.default.createElement(
							_antd.Row,
							null,
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, className: 'mb5' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 5 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 19 }
										},
										label: '\u91CD\u8981\u7A0B\u5EA6' },
									this.store.qualityType == 1 ? getFieldDecorator('emergency', {
										initialValue: fileds.emergencyQuality,
										rules: [{
											required: true,
											message: '请选择重要程度'
										}]
									})(_react2.default.createElement(
										'div',
										{ className: 'w' },
										_react2.default.createElement(
											RadioGroup,
											{ onChange: this.handleChage.bind(this, "emergencyQuality"),
												disabled: this.props.title == "edit",
												value: fileds.emergencyQuality },
											emergencyQuality.map(function (item, index) {
												return _react2.default.createElement(
													_antd.Radio,
													{ key: 'emergencyQuality' + index, value: item },
													item
												);
											})
										)
									)) : getFieldDecorator('emergency', {
										initialValue: fileds.emergencySafe,
										rules: [{
											required: true,
											message: '请选择重要程度'
										}]
									})(_react2.default.createElement(
										'div',
										{ className: 'w' },
										_react2.default.createElement(
											RadioGroup,
											{ onChange: this.handleChage.bind(this, "emergencySafe"),
												disabled: this.props.title == "edit",
												value: fileds.emergencySafe },
											emergencySafe.map(function (item, index) {
												return _react2.default.createElement(
													_antd.Radio,
													{ key: 'emergencySafe' + index, value: item },
													item
												);
											})
										)
									))
								)
							)
						),
						_react2.default.createElement(
							_antd.Row,
							null,
							_react2.default.createElement(
								_antd.Col,
								{ span: 24, className: 'mb5' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 5 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 19 }
										},
										label: '\u95EE\u9898\u72B6\u6001' },
									getFieldDecorator('state', {
										initialValue: fileds.state,
										rules: [{
											required: true,
											message: '请选择问题状态'
										}]
									})(_react2.default.createElement(
										'div',
										{ className: 'w' },
										_react2.default.createElement(
											RadioGroup,
											{ onChange: this.handleChage.bind(this, "state"),
												disabled: this.props.title == "edit",
												value: fileds.state },
											state.map(function (item, index) {
												return _react2.default.createElement(
													_antd.Radio,
													{ key: 'state' + index, value: item },
													item
												);
											})
										)
									))
								)
							)
						),
						_react2.default.createElement(
							_antd.Row,
							null,
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: 'mb5' },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u53D1\u73B0\u65F6\u95F4' },
									getFieldDecorator('createTime', {
										initialValue: fileds.createTime == null ? "" : (0, _moment2.default)(fileds.createTime, 'YYYY-MM-DD'),
										rules: [{
											required: true,
											message: '请输入发现时间'
										}]
									})(_react2.default.createElement(_antd.DatePicker, {
										format: 'YYYY-MM-DD',
										style: { width: '100%' },
										value: fileds.createTime == null ? "" : (0, _moment2.default)(fileds.createTime, 'YYYY-MM-DD'),
										onChange: this.onDateChange.bind(this, 'createTime')
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: 'mb5' },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 12 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 12 }
										},
										label: '\u8BA1\u5212\u89E3\u51B3\u65F6\u95F4' },
									getFieldDecorator('planSolveTime', {
										initialValue: fileds.planSolveTime == null ? "" : (0, _moment2.default)(fileds.planSolveTime, 'YYYY-MM-DD'),
										rules: [{
											required: true,
											message: '请输入计划解决时间'
										}]
									})(_react2.default.createElement(_antd.DatePicker, {
										format: 'YYYY-MM-DD',
										style: { width: '100%' },
										value: fileds.planSolveTime == null ? "" : (0, _moment2.default)(fileds.planSolveTime, 'YYYY-MM-DD'),
										onChange: this.onDateChange.bind(this, 'planSolveTime')
									}))
								)
							)
						),
						_react2.default.createElement(
							_antd.Row,
							{ style: { marginTop: '10px' } },
							_react2.default.createElement(
								_antd.Col,
								{ span: 12 },
								_react2.default.createElement(
									_antd.Form.Item,
									{ label: '\u9A8C\u6536\u4EBA' },
									getFieldDecorator('reviewer', {
										initialValue: fileds.reviewer,
										rules: [{ required: true, message: '请输入验收人' }]
									})(_react2.default.createElement(_antd.Input, {
										onChange: this.handleChage.bind(this, "reviewer")
									}))
								)
							),
							_react2.default.createElement(
								_antd.Col,
								{ span: 12, className: fileds.state == "发现问题" ? "hidden" : "mb5" },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 12 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 12 }
										},
										label: '\u5B9E\u9645\u89E3\u51B3\u65F6\u95F4' },
									getFieldDecorator('solveTime', {
										initialValue: fileds.solveTime == null ? "" : (0, _moment2.default)(fileds.solveTime, 'YYYY-MM-DD'),
										rules: [{
											required: fileds.state == "发现问题" ? false : true,
											message: '请输入实际解决时间'
										}]
									})(_react2.default.createElement(_antd.DatePicker, {
										format: 'YYYY-MM-DD',
										style: { width: '100%' },
										value: fileds.solveTime == null ? "" : (0, _moment2.default)(fileds.solveTime, 'YYYY-MM-DD'),
										onChange: this.onDateChange.bind(this, 'solveTime')
									}))
								)
							)
						),
						_react2.default.createElement(
							_antd.Row,
							{ style: { marginTop: '10px' } },
							_react2.default.createElement(
								_antd.Col,
								{ span: 24 },
								_react2.default.createElement(
									_antd.Form.Item,
									{
										labelCol: {
											xs: { span: 24 },
											sm: { span: 5 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 19 }
										},
										label: '\u5904\u7406\u65B9\u6848' },
									_react2.default.createElement(TextArea, { autosize: { minRows: 2 },
										onChange: this.handleChage.bind(this, "remark"),
										value: fileds.remark
									})
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Quality;
}(_react2.default.Component)) || _class;

var form = _antd.Form.create({})(Quality);
exports.default = form;

/***/ })

});
//# sourceMappingURL=14-afa7d4b4bae6ff2924e9.1629092961041.js.map