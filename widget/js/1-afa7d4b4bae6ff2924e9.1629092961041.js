webpackJsonp([1],{

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

/***/ 1572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单 智建美住周报
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

var DetailFormWeekReport = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailFormWeekReport, _React$Component);

	function DetailFormWeekReport(props) {
		_classCallCheck(this, DetailFormWeekReport);

		var _this = _possibleConstructorReturn(this, (DetailFormWeekReport.__proto__ || Object.getPrototypeOf(DetailFormWeekReport)).call(this, props));

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

	_createClass(DetailFormWeekReport, [{
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
			var canEdit = detailData.canEdit == 1 ? true : false;
			var _state = this.state,
			    addAssignments = _state.addAssignments,
			    newAddignments = _state.newAddignments,
			    audioSrc = _state.audioSrc,
			    fileName = _state.fileName;
			var isEdit = this.store.isEdit;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = canEdit;
			var isJeks = journalMain.userName == username;
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
			var oldTime = (0, _moment2.default)("2021-01-24").valueOf(); //要求是 2021年1月24日以前，老数据不变
			var isOld = sub.beginTime != undefined && sub.beginTime > oldTime;

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
									store: this.store,
									scrollToAnchor: this.props.scrollToAnchor,
									pathname: this.props.pathname,
									detailData: detailData,
									isWeekShow: isJeks,
									userId: journalMain.userId,
									temType: 'weekreport'
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
							'\u5468\u62A5\u6807\u9898'
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
							'\u65F6\u95F4\u8303\u56F4'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							(0, _moment2.default)(sub.beginTime).format("YYYY年MM月DD日"),
							' \u81F3 ',
							(0, _moment2.default)(sub.endTime).format("YYYY年MM月DD日")
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u672C\u5468\u8981\u95FB'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.weekContent } }),
					_react2.default.createElement(
						'div',
						{ className: 'edit_form_bold_week' },
						'\u8BE6\u7EC6\u5185\u5BB9'
					),
					_react2.default.createElement(
						'div',
						{ className: 'edit_form_bold_week' },
						'\u4E00\u3001\u5E74\u5EA6\u91CD\u70B9\u5DE5\u4F5C\u68C0\u89C6'
					),
					_react2.default.createElement(
						'div',
						{ className: 'edit_form_bold_week' },
						'1\u3001\u4F01\u4E1A\u7ECF\u8425\u548C\u73B0\u91D1\u6D41\u8FBE\u6807'
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.detailBusiness } }),
					_react2.default.createElement(
						'div',
						{ className: 'edit_form_bold_week' },
						'2\u3001\u5EFA\u7ACB\u4EE5\u6C5F\u9634\u5DE5\u5382\u4E3A\u4E2D\u5FC3\u7684\u751F\u4EA7\u8FD0\u8425\u4F53\u7CFB'
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.detailFactory } }),
					_react2.default.createElement(
						'div',
						{ className: 'edit_form_bold_week' },
						'3\u3001\u521D\u6B65\u5EFA\u6210\u6570\u5B57\u5316\u5E73\u53F0'
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.detailDigital } }),
					_react2.default.createElement(
						'div',
						{ className: 'edit_form_bold_week' },
						'4\u3001\u5EFA\u7B51\u4EA7\u54C1\u548C\u6280\u672F\u7814\u53D1'
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.detailProducts } }),
					isOld ? _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'5\u3001\u516C\u53F8\u6CBB\u7406'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.corporateGovernance } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'\u4E8C\u3001\u6708\u5EA6\u91CD\u70B9\u5DE5\u4F5C\u770B\u677F'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.monthlyWorkBoard } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'\u4E09\u3001\u5404\u90E8\u95E8\u5DE5\u4F5C\u6267\u884C\u60C5\u51B5\u770B\u677F'
						),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'1\u3001\u7EFC\u5408\u7BA1\u7406\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentZhglzx2021 } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'2\u3001\u56FD\u5185\u8425\u9500\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentGnyxzx2021 } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'3\u3001\u521B\u65B0\u8425\u9500\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentCxyxzx2021 } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'4\u3001\u9879\u76EE\u7BA1\u7406\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentXmglzx2021 } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'5\u3001\u4EA7\u54C1\u7814\u53D1\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentCpyfzx2021 } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'6\u3001\u751F\u4EA7\u5236\u9020\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentSczzzx2021 } })
					) : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'\u4E8C\u3001\u9879\u76EE\u6E05\u5355\u770B\u677F'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.projectBoard } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'\u4E09\u3001\u6708\u5EA6\u91CD\u70B9\u5DE5\u4F5C\u770B\u677F'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.monthlyWorkBoard } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'\u56DB\u3001\u5404\u90E8\u95E8\u5DE5\u4F5C\u6267\u884C\u60C5\u51B5\u770B\u677F'
						),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'1\u3001\u4EA7\u54C1\u7814\u53D1\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentProduct } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'2\u3001\u89E3\u51B3\u65B9\u6848\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentSolution } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'3\u3001\u5E02\u573A\u8425\u9500\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentMarket } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'4\u3001\u6218\u7565\u53D1\u5C55\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentStrategic } }),
						_react2.default.createElement(
							'div',
							{ className: 'edit_form_bold_week' },
							'5\u3001\u8FD0\u4F5C\u652F\u6301\u4E2D\u5FC3'
						),
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.departmentSupport } })
					),
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
					temType: 'weekreport',
					isWeekShow: isJeks
				})
			);
		}
	}]);

	return DetailFormWeekReport;
}(_react2.default.Component)) || _class;

exports.default = DetailFormWeekReport;

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

/***/ }),

/***/ 1617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情表单 工厂周报
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

var DetailFormFactoryreport = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailFormFactoryreport, _React$Component);

	function DetailFormFactoryreport(props) {
		_classCallCheck(this, DetailFormFactoryreport);

		var _this = _possibleConstructorReturn(this, (DetailFormFactoryreport.__proto__ || Object.getPrototypeOf(DetailFormFactoryreport)).call(this, props));

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

	_createClass(DetailFormFactoryreport, [{
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
			var canEdit = detailData.canEdit == 1 ? true : false;
			var _state = this.state,
			    addAssignments = _state.addAssignments,
			    newAddignments = _state.newAddignments,
			    audioSrc = _state.audioSrc,
			    fileName = _state.fileName;
			var isEdit = this.store.isEdit;

			var username = localStorage.getItem("username");
			// 当前行是否有修改权限
			var isShow = canEdit;
			var isJeks = journalMain.userName == username;
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
			var oldTime = (0, _moment2.default)("2021-01-24").valueOf(); //要求是 2021年1月24日以前，老数据不变
			var isOld = sub.beginTime != undefined && sub.beginTime > oldTime;

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
									store: this.store,
									scrollToAnchor: this.props.scrollToAnchor,
									pathname: this.props.pathname,
									detailData: detailData,
									isWeekShow: isJeks,
									userId: journalMain.userId,
									temType: 'weekreport'
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
							'\u5468\u62A5\u6807\u9898'
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
							'\u65F6\u95F4\u8303\u56F4'
						),
						_react2.default.createElement(
							'span',
							{ className: 'form_nextname' },
							(0, _moment2.default)(sub.beginTime).format("YYYY年MM月DD日"),
							' \u81F3 ',
							(0, _moment2.default)(sub.endTime).format("YYYY年MM月DD日")
						)
					),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E00\u3001\u672C\u5468\u91CD\u70B9\u5DE5\u4F5C'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.weekContent } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E8C\u3001\u5DE5\u5382\u5EFA\u8BBE'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.factoryBuild } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E09\u3001 \u4EA7\u7EBF\u5EFA\u8BBE'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.productionLine } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u56DB\u3001\u4EA7\u54C1\u53CA\u6280\u672F'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.productsTechnologies } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u4E94\u3001\u8FD0\u8425\u652F\u6301'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.operationalSupport } }),
					_react2.default.createElement(
						_antd.Form.Item,
						{ label: '',
							colon: false, className: 'detail_form_bold' },
						_react2.default.createElement(
							'span',
							{ className: 'detail_form_bold_title' },
							'\u516D\u3001\u5404\u7248\u5757\u5DE5\u4F5C\u770B\u677F'
						)
					),
					_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: sub.board } }),
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
					temType: 'factoryreport',
					isWeekShow: isJeks
				})
			);
		}
	}]);

	return DetailFormFactoryreport;
}(_react2.default.Component)) || _class;

exports.default = DetailFormFactoryreport;

/***/ }),

/***/ 1787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情弹框
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

var _DetailForm = __webpack_require__(1566);

var _DetailForm2 = _interopRequireDefault(_DetailForm);

var _DetailFormMonthlySharing = __webpack_require__(1567);

var _DetailFormMonthlySharing2 = _interopRequireDefault(_DetailFormMonthlySharing);

var _DetailFormVisit = __webpack_require__(1571);

var _DetailFormVisit2 = _interopRequireDefault(_DetailFormVisit);

var _DetailFormSummary = __webpack_require__(1570);

var _DetailFormSummary2 = _interopRequireDefault(_DetailFormSummary);

var _DetailFormReplay = __webpack_require__(1569);

var _DetailFormReplay2 = _interopRequireDefault(_DetailFormReplay);

var _DetailFormNews = __webpack_require__(1568);

var _DetailFormNews2 = _interopRequireDefault(_DetailFormNews);

var _DetailFormWeekReport = __webpack_require__(1572);

var _DetailFormWeekReport2 = _interopRequireDefault(_DetailFormWeekReport);

var _DigitalComment = __webpack_require__(1542);

var _DigitalComment2 = _interopRequireDefault(_DigitalComment);

__webpack_require__(338);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailModal = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailModal, _React$Component);

	function DetailModal(props) {
		_classCallCheck(this, DetailModal);

		var _this = _possibleConstructorReturn(this, (DetailModal.__proto__ || Object.getPrototypeOf(DetailModal)).call(this, props));

		_this.onAsync = function (type, id, index) {
			_this.store.syncAssignment(id).then(function (res) {
				if (res) {
					_antd.message.success("同步成功");
					// 前端同步数据
					var detailData = JSON.parse(JSON.stringify(_this.store.detailData));
					var assignments = detailData[type];
					assignments[index].isSync = 1; // 同步成功
					_this.store.detailData = Object.assign(detailData, _defineProperty({}, type, assignments));
				}
			});
		};

		_this.handleAddNew = function (detail) {
			_this.store.saveAssignments(detail).then(function (res) {
				if (res) {
					_antd.message.success("保存成功");
					// 重查
					_this.store.getJournalById(_this.store.selestedId).then(function (res) {
						_this.store.detailData = Object.assign({}, res);
						_this.child.handleCalc();
					});
				}
			});
		};

		_this.onRef = function (ref) {
			_this.child = ref;
		};

		_this.reset = function () {
			var onClose = _this.props.onClose;

			onClose();
		};

		_this.store = _this.props.store;
		_this.state = {};
		return _this;
	}

	_createClass(DetailModal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 保存追加任务

	}, {
		key: 'render',
		value: function render() {
			var visible = this.props.visible;
			var _store = this.store,
			    detailData = _store.detailData,
			    hasJournal = _store.hasJournal,
			    temList = _store.temList;

			var temType = mobx.toJS(temList).type;
			return _react2.default.createElement(
				_antd.Drawer,
				{
					width: "70%",
					title: '\u8BE6\u60C5',
					placement: 'right',
					closable: true,
					onClose: this.reset,
					visible: visible
				},
				temType === "meeting" ? _react2.default.createElement(_DetailForm2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "monthlySharing" ? _react2.default.createElement(_DetailFormMonthlySharing2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "visit" ? _react2.default.createElement(_DetailFormVisit2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "summary" ? _react2.default.createElement(_DetailFormSummary2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "replay" ? _react2.default.createElement(_DetailFormReplay2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "news" ? _react2.default.createElement(_DetailFormNews2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "weekreport" ? _react2.default.createElement(_DetailFormWeekReport2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				_react2.default.createElement(_DigitalComment2.default, {
					store: this.store
				})
			);
		}
	}]);

	return DetailModal;
}(_react2.default.Component)) || _class) || _class;

exports.default = DetailModal;

/***/ }),

/***/ 1788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 详情弹框
            * dangw
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

var _DetailForm = __webpack_require__(1566);

var _DetailForm2 = _interopRequireDefault(_DetailForm);

var _DetailFormMonthlySharing = __webpack_require__(1567);

var _DetailFormMonthlySharing2 = _interopRequireDefault(_DetailFormMonthlySharing);

var _DetailFormVisit = __webpack_require__(1571);

var _DetailFormVisit2 = _interopRequireDefault(_DetailFormVisit);

var _DetailFormSummary = __webpack_require__(1570);

var _DetailFormSummary2 = _interopRequireDefault(_DetailFormSummary);

var _DetailFormReplay = __webpack_require__(1569);

var _DetailFormReplay2 = _interopRequireDefault(_DetailFormReplay);

var _DetailFormNews = __webpack_require__(1568);

var _DetailFormNews2 = _interopRequireDefault(_DetailFormNews);

var _DetailFormWeekReport = __webpack_require__(1572);

var _DetailFormWeekReport2 = _interopRequireDefault(_DetailFormWeekReport);

var _DetailFormFactoryreport = __webpack_require__(1617);

var _DetailFormFactoryreport2 = _interopRequireDefault(_DetailFormFactoryreport);

var _DigitalComment = __webpack_require__(1542);

var _DigitalComment2 = _interopRequireDefault(_DigitalComment);

__webpack_require__(338);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailOfficeModal = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DetailOfficeModal, _React$Component);

	function DetailOfficeModal(props) {
		_classCallCheck(this, DetailOfficeModal);

		var _this = _possibleConstructorReturn(this, (DetailOfficeModal.__proto__ || Object.getPrototypeOf(DetailOfficeModal)).call(this, props));

		_this.onAsync = function (type, id, index) {
			_this.store.syncAssignment(id).then(function (res) {
				if (res) {
					_antd.message.success("同步成功");
					// 前端同步数据
					var detailData = JSON.parse(JSON.stringify(_this.store.detailData));
					var assignments = detailData[type];
					assignments[index].isSync = 1; // 同步成功
					_this.store.detailData = Object.assign(detailData, _defineProperty({}, type, assignments));
				}
			});
		};

		_this.handleAddNew = function (detail) {
			_this.store.saveAssignments(detail).then(function (res) {
				if (res) {
					_antd.message.success("保存成功");
					// 重查
					_this.store.getJournalById(_this.store.selestedId).then(function (res) {
						_this.store.detailData = Object.assign({}, res);
						_this.child.handleCalc();
					});
				}
			});
		};

		_this.onRef = function (ref) {
			_this.child = ref;
		};

		_this.reset = function () {
			var onClose = _this.props.onClose;

			onClose();
		};

		_this.store = _this.props.store;
		_this.state = {};
		return _this;
	}

	_createClass(DetailOfficeModal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}

		// 保存追加任务

	}, {
		key: 'render',
		value: function render() {
			var visible = this.props.visible;
			var _store = this.store,
			    detailData = _store.detailData,
			    hasJournal = _store.hasJournal,
			    temList = _store.temList;

			var temType = mobx.toJS(temList).type;
			return _react2.default.createElement(
				_antd.Drawer,
				{
					width: "70%",
					title: '\u8BE6\u60C5',
					placement: 'right',
					closable: true,
					onClose: this.reset,
					visible: visible
				},
				temType === "meeting" ? _react2.default.createElement(_DetailForm2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "monthlySharing" ? _react2.default.createElement(_DetailFormMonthlySharing2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "visit" ? _react2.default.createElement(_DetailFormVisit2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "summary" ? _react2.default.createElement(_DetailFormSummary2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "replay" ? _react2.default.createElement(_DetailFormReplay2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "news" ? _react2.default.createElement(_DetailFormNews2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "weekreport" ? _react2.default.createElement(_DetailFormWeekReport2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				temType === "factoryreport" ? _react2.default.createElement(_DetailFormFactoryreport2.default, {
					store: this.store,
					detailData: mobx.toJS(detailData),
					hasJournal: hasJournal,
					onAsync: this.onAsync,
					handleAddNew: this.handleAddNew,
					onRef: this.onRef,
					visible: visible
				}) : null,
				_react2.default.createElement(_DigitalComment2.default, {
					store: this.store
				})
			);
		}
	}]);

	return DetailOfficeModal;
}(_react2.default.Component)) || _class) || _class;

exports.default = DetailOfficeModal;

/***/ }),

/***/ 2014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _dec, _class2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

var _reactCustomScrollbars = __webpack_require__(336);

var _DetailModal = __webpack_require__(1787);

var _DetailModal2 = _interopRequireDefault(_DetailModal);

var _DetailOfficeModal = __webpack_require__(1788);

var _DetailOfficeModal2 = _interopRequireDefault(_DetailOfficeModal);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * 列表
                                                                                                                                                                                                                             * */


var officeArray = ["智建美住周报"]; //  公文

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
			editing: false
		}, _this.toggleEdit = function () {
			var editing = !_this.state.editing;
			_this.setState({ editing: editing }, function () {
				if (editing) {
					_this.input.focus();
				}
			});
		}, _this.save = function (e) {
			var _this$props = _this.props,
			    record = _this$props.record,
			    handleSave = _this$props.handleSave;

			_this.form.validateFields(function (error, values) {
				if (error && error[e.currentTarget.id]) {
					return;
				}
				delete values["completeTime"];
				_this.toggleEdit();
				handleSave(_extends({}, record, values));
			});
		}, _this.saveDate = function (date, dateString) {
			var _this$props2 = _this.props,
			    record = _this$props2.record,
			    handleSave = _this$props2.handleSave;

			_this.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('completeTime')) {
					values["completeTime"] = (0, _moment2.default)(dateString, 'YYYY-MM-DD').valueOf();
				}
				_this.toggleEdit();
				handleSave(_extends({}, record, values));
			});
		}, _this.showStatus = function (value) {
			if (value == 3) {
				return "#F5222D";
			} else if (value == 1) {
				return "#1890FF";
			} else if (value == 2) {
				return "#52C41A";
			} else {
				return "#333";
			}
		}, _this.onBlur = function () {
			_this.toggleEdit();
		}, _this.disabledEndDate = function (endValue) {
			var record = _this.props.record;

			if (!endValue || !record.beginTime) {
				return false;
			}
			return endValue.valueOf() < (0, _moment2.default)((0, _moment2.default)(record.beginTime).format('YYYY-MM-DD')).valueOf();
		}, _this.numberChange = function (value) {
			if (value == null) return false;
			if (value >= 100) {
				_antd.message.warn("超过100, 任务会完成!");
				return false;
			}
		}, _this.renderCell = function (form) {
			_this.form = form;
			var _this$props3 = _this.props,
			    children = _this$props3.children,
			    dataIndex = _this$props3.dataIndex,
			    record = _this$props3.record,
			    title = _this$props3.title;
			var editing = _this.state.editing;

			var username = localStorage.getItem("username");

			// 当前行是否有修改权限
			var isEdit = record.userInformations.filter(function (item) {
				return item.userName == username;
			}).length > 0;

			if (dataIndex == "remark") {
				// 备注
				return editing && isEdit ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + ' is required.'
						}],
						initialValue: record[dataIndex]
					})(_react2.default.createElement(TextArea, {
						autoFocus: true,
						ref: function ref(node) {
							return _this.input = node;
						},
						onPressEnter: _this.save,
						onBlur: _this.save,
						autoSize: { minRows: 1, maxRows: 3 }
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: isEdit ? "editable-cell-value-wrap" : "",
						style: {
							paddingRight: 24,
							minHeight: '34px' },
						onClick: isEdit ? _this.toggleEdit : null
					},
					children
				);
			} else if (dataIndex == "completeTime") {
				// 完成时间
				// 日期时间戳转换字符串
				var numberTostring = record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex]).format('YYYY-MM-DD');
				return editing && isEdit ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						autoFocus: true,
						format: 'YYYY-MM-DD',
						ref: function ref(node) {
							return _this.input = node;
						},
						mode: 'date'
						//设置结束不能选择的时间
						, disabledDate: _this.disabledEndDate,
						style: { width: '118px' },
						onOpenChange: function onOpenChange(status) {
							if (status) {
								_this.setState({ editing: true });
							} else {
								_this.setState({ editing: false });
							}
						},
						onChange: _this.saveDate,
						open: editing
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: isEdit ? "editable-cell-value-wrap" : "",
						style: { minHeight: '31px' },
						onClick: isEdit ? _this.toggleEdit : null
					},
					children
				);
			} else {
				// 进展
				return editing && isEdit ? _react2.default.createElement(
					_antd.Tooltip,
					{
						trigger: ['focus'],
						title: "请输入0-100之间的数字",
						placement: 'top',
						overlayClassName: 'numeric-input'
					},
					_react2.default.createElement(
						_antd.Form.Item,
						{ style: { margin: 0 } },
						form.getFieldDecorator(dataIndex, {
							rules: [{
								required: false,
								message: title + ' is required.'
							}],
							initialValue: record[dataIndex]
						})(_react2.default.createElement(_antd.InputNumber, {
							autoFocus: true,
							defaultValue: record.progress == "0" ? 0 : Number(record.progress),
							min: 0,
							max: 100,
							precision: 0,
							ref: function ref(node) {
								return _this.input = node;
							},
							onChange: _this.numberChange,
							onBlur: _this.save
						}))
					)
				) : _react2.default.createElement(
					'div',
					null,
					Number(record.progress) >= 100 ? _react2.default.createElement(
						'span',
						{ style: {
								color: _this.showStatus(record.state)
							} },
						'\u5B8C\u6210'
					) : _react2.default.createElement(
						'span',
						{
							className: isEdit ? "editable-cell-value-wrap" : "",
							style: {
								width: "80px",
								minHeight: '34px',
								color: _this.showStatus(record.state)
							},
							onClick: isEdit ? _this.toggleEdit : null
						},
						Number(record.progress) + "%"
					)
				);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	//日期格式保存


	//设置结束不能选择的时间


	// 数字提示


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

var DigtalList = (_dec = (0, _mobxReact.inject)('OfficeManageStore'), (0, _reactRouterDom.withRouter)(_class2 = _dec(_class2 = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
	_inherits(DigtalList, _React$Component2);

	function DigtalList(props) {
		_classCallCheck(this, DigtalList);

		var _this2 = _possibleConstructorReturn(this, (DigtalList.__proto__ || Object.getPrototypeOf(DigtalList)).call(this, props));

		_this2.changeHeight = function () {
			var tabpaneDivClientHeight = document.getElementById('digital_card').clientHeight;
			_this2.setState({ tableHeight: tabpaneDivClientHeight - 100 });
		};

		_this2.onShowSizeChange = function (current, pageSize) {
			_this2.store.queryParms = Object.assign(mobx.toJS(_this2.store.queryParms), {
				pageIndex: current,
				pageSize: pageSize
			});
			_this2.store.getAssignmentPageList();
		};

		_this2.onChange = function (pageNumber) {
			_this2.store.queryParms = Object.assign(mobx.toJS(_this2.store.queryParms), {
				pageIndex: pageNumber
			});
			_this2.store.getAssignmentPageList();
		};

		_this2.handleDelete = function (id) {
			_this2.store.delAssignment(id).then(function (res) {
				if (res) {
					_antd.message.success("删除成功");
					_this2.store.getAssignmentPageList();
					// 更新个人信息
					_this2.store.getMyInfo();
				}
			});
		};

		_this2.showDrawer = function (record) {
			if (officeArray.includes(record.relationType)) {
				//公文管理
				_this2.officeStore.getJournalTypeList().then(function (res) {
					_this2.officeStore.temList = Object.assign({}, mobx.toJS(_this2.officeStore.digtalTemData).filter(function (item) {
						return item.name == record.relationType;
					})[0]);
				});
				_this2.officeStore.selestedId = record.relationId;
				_this2.officeStore.getJournalById(record.relationId).then(function (res) {
					if (res) {
						_this2.setState({
							visibleOffic: true
						}, function () {
							_this2.officeStore.detailData = Object.assign({}, res);
						});
					}
				});
				// 点赞
				_this2.officeStore.getLikeUsersByJournalId();
				// 评论
				_this2.officeStore.getCommentsByJournalId();
				_this2.officeStore.getJournalIndicators();
				_this2.officeStore.isEdit = false;
			} else {
				_this2.store.getJournalTypeList().then(function (res) {
					_this2.store.temList = Object.assign({}, mobx.toJS(_this2.store.digtalTemData).filter(function (item) {
						return item.name == record.relationType;
					})[0]);
				});
				_this2.store.selestedId = record.relationId;
				_this2.store.getJournalById(record.relationId).then(function (res) {
					if (res) {
						_this2.setState({
							visible: true
						}, function () {
							_this2.store.detailData = Object.assign({}, res);
						});
					}
				});
				// 点赞
				_this2.store.getLikeUsersByJournalId();
				// 评论
				_this2.store.getCommentsByJournalId();
				_this2.store.getJournalIndicators();
				_this2.store.isEdit = false;
			}
		};

		_this2.onClose = function (type) {
			_this2.setState(_defineProperty({}, type, false));
		};

		_this2.onChangeState = function (type, item, e) {
			var newData = JSON.parse(JSON.stringify(_this2.state[type]));
			var index = newData.findIndex(function (vitem) {
				return vitem == item.id;
			});
			var checked = e.target.checked;

			if (index == -1) {
				// 新增
				_this2.setState(_defineProperty({}, type, [].concat(_toConsumableArray(newData), [item.id])));
			} else {
				if (checked == false) {
					// 取消选中
					newData.splice(index, 1);
					_this2.setState(_defineProperty({}, type, Object.assign([], newData)));
				}
			}
		};

		_this2.handleSearch = function (confirm, dataIndex) {
			confirm();
			_this2.store.queryParms[dataIndex] = Object.assign([], _this2.state[dataIndex]);
			_this2.store.queryParms.pageIndex = 1;
			_this2.store.queryParms.pageSize = 10;
			_this2.store.getAssignmentPageList();
		};

		_this2.handleReset = function (clearFilters, dataIndex) {
			clearFilters();
			_this2.store.queryParms[dataIndex] = Object.assign([]);
			_this2.store.queryParms.pageIndex = 1;
			_this2.store.queryParms.pageSize = 10;
			_this2.store.getAssignmentPageList();
			_this2.setState(_defineProperty({}, dataIndex, Object.assign([])));
		};

		_this2.getColumnSearchProps = function (dataIndex) {
			return {
				filterDropdown: function filterDropdown(_ref3) {
					var confirm = _ref3.confirm,
					    clearFilters = _ref3.clearFilters;
					return _react2.default.createElement(
						'div',
						{ style: { padding: 8 } },
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
							mobx.toJS(_this2.store[dataIndex]).map(function (item, index) {
								return _react2.default.createElement(
									'div',
									{ className: 'pl10' },
									_react2.default.createElement(
										_antd.Checkbox,
										{
											className: 'db',
											checked: _this2.state[dataIndex].includes(item.id),
											key: dataIndex + "-" + index,
											onChange: _this2.onChangeState.bind(_this2, dataIndex, item) },
										item.typeName
									)
								);
							})
						),
						_react2.default.createElement(
							_antd.Button,
							{
								type: 'primary',
								onClick: function onClick() {
									return _this2.handleSearch(confirm, dataIndex);
								},
								size: 'small',
								style: { width: 60, marginRight: 8, marginTop: 8 }
							},
							'\u786E\u5B9A'
						),
						_react2.default.createElement(
							_antd.Button,
							{ onClick: function onClick() {
									return _this2.handleReset(clearFilters, dataIndex);
								}, size: 'small',
								style: { width: 60, marginTop: 8 } },
							'\u91CD\u7F6E'
						)
					);
				},
				filterIcon: function filterIcon(filtered) {
					return _react2.default.createElement(_antd.Icon, { className: 'bocfiterIcon', type: 'filter', style: { color: filtered ? '#1890ff' : undefined } });
				},
				onFilter: function onFilter(value, record) {},
				onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
					if (visible) {}
				},
				render: function render(record, text) {
					if (dataIndex == "userName") {
						return text["userName"];
					} else if (dataIndex == "relationType") {
						return _react2.default.createElement(
							'a',
							{
								style: {
									cursor: 'pointer'
								},
								onClick: function onClick(e) {
									_this2.showDrawer(text);
								} },
							text["relationType"]
						);
					} else if (dataIndex == "userId") {
						var val = mobx.toJS(text)["userInformations"];
						var title = typeof val !== 'undefined' ? val.map(function (item) {
							return item.userName;
						}).join('、') : '';
						return typeof val !== 'undefined' ? _react2.default.createElement(
							_antd.Tooltip,
							{ placement: 'topLeft', title: title },
							_react2.default.createElement(
								'span',
								null,
								title
							)
						) : '';
					}
				}
			};
		};

		_this2.handleChangeOrder = function (pagination, filters, sorter) {
			var sortVlaue = sorter.field;
			_this2.setState({
				sortedInfo: sorter
			});
			if (sorter.order == "ascend") {
				_this2.store.queryParms = Object.assign(mobx.toJS(_this2.store.queryParms), {
					ordervalue: sortVlaue == "beginTime" ? 1 : 2,
					orderType: 1
				});
				_this2.store.getAssignmentPageList();
			} else if (sorter.order == "descend") {
				_this2.store.queryParms = Object.assign(mobx.toJS(_this2.store.queryParms), {
					ordervalue: sortVlaue == "beginTime" ? 1 : 2,
					orderType: 0
				});
				_this2.store.getAssignmentPageList();
			}
		};

		_this2.handleSave = function (row) {
			_this2.store.saveAssignment(row).then(function (res) {
				if (res) {
					_antd.message.success("操作成功");
					_this2.store.getAssignmentPageList();
					if (res.state == 2) {
						// 任务完成
						// 更新个人信息
						_this2.store.getMyInfo();
					}
				}
			});
		};

		_this2.showTextStatus = function (value) {
			if (value == 3) {
				return "#F5222D";
			} else if (value == 1) {
				return "#1890FF";
			} else if (value == 2) {
				return "#52C41A";
			} else {
				return "#333";
			}
		};

		_this2.store = _this2.props.store;
		_this2.officeStore = _this2.props.OfficeManageStore;
		_this2.state = {
			tableHeight: 250,
			visible: false,
			visibleOffic: false,
			relationType: [],
			userId: [],
			sortedInfo: null,
			state: []
		};
		return _this2;
	}

	_createClass(DigtalList, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('resize', this.changeHeight);
			this.changeHeight();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.changeHeight);
		}

		// 删除


		// 设置状态


		// 确定


		// 重置


		// 排序开始

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    tableHeight = _state.tableHeight,
			    visible = _state.visible,
			    sortedInfo = _state.sortedInfo,
			    visibleOffic = _state.visibleOffic;
			var _store = this.store,
			    tableData = _store.tableData,
			    totalCount = _store.totalCount,
			    listLoading = _store.listLoading,
			    queryParms = _store.queryParms,
			    hasJournal = _store.hasJournal;

			var current = mobx.toJS(queryParms).pageIndex;
			sortedInfo = sortedInfo || {};

			var columns = !hasJournal ? [{
				title: '任务ID',
				dataIndex: 'serial',
				align: 'left',
				width: '150px',
				ellipsis: true,
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						{ title: text },
						text
					);
				}
			}, {
				title: '任务名称',
				dataIndex: 'name',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: {
								wordWrap: 'break-word',
								whiteSpace: 'pre-wrap',
								fontWeight: 600,
								color: _this3.showTextStatus(record.state) } },
						text
					);
				}
			}, _extends({
				title: '负责人',
				dataIndex: 'userInformations',
				align: 'center',
				ellipsis: true
			}, this.getColumnSearchProps('userId')), _extends({
				title: '事项来源',
				dataIndex: 'relationType',
				align: 'center'
			}, this.getColumnSearchProps('relationType')), _extends({
				title: '进展', dataIndex: 'progress', align: 'center', editable: true
			}, this.getColumnSearchProps('state')), {
				title: '提出时间',
				dataIndex: 'beginTime',
				align: 'center',
				ellipsis: true,
				render: function render(text, record) {
					return text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				},
				sorter: function sorter(a, b) {
					return a.beginTime - b.beginTime;
				},
				sortOrder: sortedInfo.columnKey === 'beginTime' && sortedInfo.order
			}, {
				title: '完成时间',
				dataIndex: 'completeTime',
				align: 'center',
				ellipsis: true,
				editable: true,
				render: function render(text, record) {
					return text == null || text == 0 ? "未填写" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				},
				sorter: function sorter(a, b) {
					return a.completeTime - b.completeTime;
				},
				sortOrder: sortedInfo.columnKey === 'completeTime' && sortedInfo.order
			}, { title: '备注说明', dataIndex: 'remark', align: 'center', ellipsis: true, editable: true,
				render: function render(text, record) {
					return _react2.default.createElement(
						_antd.Tooltip,
						{ placement: 'topLeft', title: text },
						_react2.default.createElement(
							'div',
							{ className: 'ellsis' },
							text
						)
					);
				}
			}] : [{
				title: '任务ID',
				dataIndex: 'serial',
				align: 'left',
				width: '150px',
				ellipsis: true,
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						{ title: text },
						text
					);
				}
			}, {
				title: '任务名称',
				dataIndex: 'name',
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: {
								wordWrap: 'break-word',
								whiteSpace: 'pre-wrap',
								fontWeight: 600,
								color: _this3.showTextStatus(record.state) } },
						text
					);
				}
			}, _extends({
				title: '负责人',
				dataIndex: 'userInformations',
				align: 'center',
				ellipsis: true }, this.getColumnSearchProps('userId')), _extends({
				title: '事项来源',
				dataIndex: 'relationType',
				align: 'center'
			}, this.getColumnSearchProps('relationType')), _extends({
				title: '进展',
				dataIndex: 'progress',
				align: 'center',
				editable: true
			}, this.getColumnSearchProps('state')), {
				title: '提出时间', dataIndex: 'beginTime', align: 'center', ellipsis: true, render: function render(text, record) {
					return text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				},
				sorter: function sorter(a, b) {
					return a.beginTime - b.beginTime;
				},
				sortOrder: sortedInfo.columnKey === 'beginTime' && sortedInfo.order
			}, {
				title: '完成时间',
				dataIndex: 'completeTime',
				align: 'center',
				ellipsis: true,
				render: function render(text, record) {
					return text == null || text == 0 ? "未填写" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				},
				sorter: function sorter(a, b) {
					return a.completeTime - b.completeTime;
				},
				sortOrder: sortedInfo.columnKey === 'completeTime' && sortedInfo.order,
				editable: true
			}, { title: '备注说明', dataIndex: 'remark', align: 'center', ellipsis: true, editable: true,
				render: function render(text, record) {
					return _react2.default.createElement(
						_antd.Tooltip,
						{ placement: 'topLeft', title: text },
						_react2.default.createElement(
							'div',
							{ className: 'ellsis' },
							text
						)
					);
				}
			}, {
				title: '操作',
				key: 'action',
				align: 'center',
				width: '80px',
				render: function render(text, record) {
					return _react2.default.createElement(
						_antd.Popconfirm,
						{
							placement: 'leftTop',
							title: '\u786E\u5B9A\u8981\u5220\u9664?', onConfirm: function onConfirm() {
								return _this3.handleDelete(record.id);
							} },
						_react2.default.createElement(
							'a',
							{ style: { fontSize: '12px' } },
							'\u5220\u9664'
						)
					);
				}
			}];

			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var cols = columns.map(function (col) {
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
							handleSave: _this3.handleSave
						};
					}
				});
			});

			return _react2.default.createElement(
				_antd.ConfigProvider,
				{ renderEmpty: customizeRenderEmpty },
				_react2.default.createElement(_antd.Table, {
					rowKey: function rowKey(record) {
						return record.id;
					},
					className: 'digital_table',
					columns: cols,
					dataSource: mobx.toJS(tableData),
					pagination: false,
					loading: listLoading,
					onChange: this.handleChangeOrder,
					components: components,
					rowClassName: function rowClassName() {
						return 'editable-row';
					}
				}),
				_react2.default.createElement(_antd.Pagination, {
					className: 'mt20 tc',
					onShowSizeChange: this.onShowSizeChange,
					onChange: this.onChange,
					total: totalCount,
					showQuickJumper: true,
					showTotal: function showTotal(total) {
						return '\u5171 ' + total + ' \u6761';
					},
					current: current
				}),
				_react2.default.createElement(_DetailModal2.default, {
					visible: visible,
					onClose: this.onClose.bind(this, "visible"),
					store: this.store
				}),
				_react2.default.createElement(_DetailOfficeModal2.default, {
					visible: visibleOffic,
					onClose: this.onClose.bind(this, "visibleOffic"),
					store: this.officeStore
				})
			);
		}
	}]);

	return DigtalList;
}(_react2.default.Component)) || _class2) || _class2) || _class2);
exports.default = DigtalList;

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 数字组织 首页
                  * dangw@glodon.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _DigtalList = __webpack_require__(2014);

var _DigtalList2 = _interopRequireDefault(_DigtalList);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _antd.Input.Search;

var chinese = { 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六", 0: "日" };

function transHours(hour, name) {
	if (hour >= 0 && hour < 12) {
		return _react2.default.createElement(
			'span',
			null,
			'\u65E9\u4E0A\u597D\uFF0C',
			name,
			'\uFF0C\u65B0\u7684\u4E00\u5929\uFF0C\u5143\u6C14\u6EE1\u6EE1\uFF01'
		);
	} else if (hour >= 12 && hour < 18) {
		return _react2.default.createElement(
			'span',
			null,
			'\u4E0B\u5348\u597D\uFF0C',
			name,
			'\uFF0C\u52B3\u9038\u7ED3\u5408\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01'
		);
	} else {
		return _react2.default.createElement(
			'span',
			null,
			'\u665A\u4E0A\u597D\uFF0C',
			name,
			'\uFF0C\u5DE5\u4F5C\u4E00\u5929\u8F9B\u82E6\u4E86\uFF01'
		);
	}
}

var Index = (_dec = (0, _mobxReact.inject)('DigtalOrgStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.onSearch = function (value) {
			_this.store.queryParms = Object.assign(mobx.toJS(_this.store.queryParms), {
				text: value
			});
			_this.store.getAssignmentPageList();
		};

		_this.handleRoute = function () {
			var _window$location = window.location,
			    protocol = _window$location.protocol,
			    host = _window$location.host;

			var origin = protocol + "//" + host + "/" + "ci" + "/#" + "/honour";
			window.open(origin, "_blank");
			//this.props.history.push("/honour")
		};

		_this.store = _this.props.DigtalOrgStore;
		_this.state = {};
		return _this;
	}

	_createClass(Index, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.store.getMyInfo();
			// 初始化查询
			this.store.queryParms = Object.assign(mobx.toJS(this.store.queryParms), {
				text: "",
				userId: [],
				relationType: [],
				state: [],
				ordervalue: 0,
				orderType: 0,
				pageIndex: 1,
				pageSize: 10
			});
			this.store.getAssignmentPageList();
			this.store.getUserPermissionByAppCode();
			this.store.getAssignmentUser();
			this.store.getJournalTypeList();
			this.store.getJournalTagList();
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {}

		// 搜索

	}, {
		key: 'render',
		value: function render() {
			var date = (0, _moment2.default)();
			var hour = (0, _moment2.default)().hours();
			var myInfo = this.store.myInfo;

			var myINFO = mobx.toJS(myInfo);
			var pageHeaderContent = _react2.default.createElement(
				'div',
				{ className: "pageHeaderContent" },
				_react2.default.createElement(
					'div',
					{ className: "avatar" },
					_react2.default.createElement(_antd.Avatar, {
						size: 'large',
						src: './images/logo_new.png'
					})
				),
				_react2.default.createElement(
					'div',
					{ className: "content" },
					_react2.default.createElement(
						'div',
						{ className: "contentTitle" },
						transHours(hour, myINFO.name)
					),
					_react2.default.createElement(
						'div',
						{ className: "contentTitle_next" },
						myINFO.station,
						' | ',
						myINFO.department
					)
				)
			);
			var extraContent = _react2.default.createElement(
				'div',
				{ className: 'extraContent' },
				_react2.default.createElement(
					'div',
					{ className: 'statItem' },
					_react2.default.createElement(
						'p',
						null,
						'\u6211\u7684\u5F85\u529E'
					),
					_react2.default.createElement(
						'p',
						null,
						myINFO.todoCount
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'statItem' },
					_react2.default.createElement(
						'p',
						null,
						'\u6211\u7684\u5B8C\u6210'
					),
					_react2.default.createElement(
						'p',
						null,
						myINFO.overCount
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'statItem' },
					_react2.default.createElement(
						'p',
						null,
						'\u5DF2\u53D1\u65E5\u5FD7'
					),
					_react2.default.createElement(
						'p',
						null,
						myINFO.journalCount
					)
				)
			);

			return _react2.default.createElement(
				'div',
				{ className: 'w' },
				_react2.default.createElement(
					_antd.Card,
					{ className: 'digital-card', style: { width: '100%' } },
					_react2.default.createElement(
						'h1',
						{ className: 'digital-title' },
						(0, _moment2.default)(date).format('YYYY年MM月DD日'),
						' ',
						"星期" + chinese[(0, _moment2.default)(date).day()],
						' ',
						(0, _moment2.default)(date).format('HH:mm')
					),
					_react2.default.createElement(
						_antd.Row,
						null,
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							pageHeaderContent
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							extraContent
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'digital-banner mt10 pr' },
					_react2.default.createElement('img', {
						onClick: this.handleRoute,
						style: { cursor: "pointer", width: "100%", height: "108px" },
						src: 'https://bocspace.oss-cn-beijing.aliyuncs.com/ci/digital_banner.gif', alt: '' })
				),
				_react2.default.createElement(
					'div',
					{ id: 'digital_card',
						style: { width: '100%' } },
					_react2.default.createElement(
						_antd.Card,
						{ className: 'digital-card mt10',
							title: '\u667A\u5EFA\u7F8E\u4F4F\u4EFB\u52A1\u6E05\u5355',
							extra: _react2.default.createElement(Search, {
								placeholder: '\u8F93\u5165\u4EFB\u52A1\u540D\u6216\u8D1F\u8D23\u4EBA\u8FDB\u884C\u641C\u7D22',
								onSearch: this.onSearch,
								style: { width: 252 }
							}),
							style: { width: '100%' } },
						_react2.default.createElement(_DigtalList2.default, {
							store: this.store
						})
					)
				)
			);
		}
	}]);

	return Index;
}(_react2.default.Component)) || _class) || _class);
exports.default = Index;

/***/ })

});
//# sourceMappingURL=1-afa7d4b4bae6ff2924e9.1629092961041.js.map