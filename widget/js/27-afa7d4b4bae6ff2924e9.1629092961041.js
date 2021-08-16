webpackJsonp([27],{

/***/ 1483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 资源共享
            * dangwei@bocspace.com
            * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _mobxReact = __webpack_require__(22);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _ShareStore = __webpack_require__(2107);

var _ShareStore2 = _interopRequireDefault(_ShareStore);

var _MyUploadThree = __webpack_require__(1976);

var _MyUploadThree2 = _interopRequireDefault(_MyUploadThree);

var _utils = __webpack_require__(89);

var _download = __webpack_require__(68);

var _reactCustomScrollbars = __webpack_require__(336);

var _reactInfiniteScroller = __webpack_require__(1529);

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _lodash = __webpack_require__(231);

var _lodash2 = _interopRequireDefault(_lodash);

var _PreviewModal = __webpack_require__(1978);

var _PreviewModal2 = _interopRequireDefault(_PreviewModal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _antd.Input.Search;

/*
* 根据文件名的尾缀 返回文件类型
* @param {any} fileName 文件名
* dzl
* 2020年5月9日
*/

function getFileType(fileName) {
	// 后缀获取
	var suffix = "";
	// 获取类型结果
	var result = "";
	try {
		var flieArr = fileName.split(".");
		suffix = flieArr[flieArr.length - 1];
	} catch (err) {
		suffix = "";
	}
	// fileName无后缀返回 false
	if (!suffix) {
		return false;
	}
	suffix = suffix.toLocaleLowerCase();
	// 图片格式
	var imglist = ["png", "jpg", "jpeg", "bmp", "gif"];
	// 进行图片匹配
	result = imglist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "image";
	}
	// 匹配txt
	var txtlist = ["txt"];
	result = txtlist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "txt";
	}
	// 匹配 excel
	var excelist = ["xls", "xlsx"];
	result = excelist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "excel";
	}
	// 匹配 word
	var wordlist = ["doc", "docx"];
	result = wordlist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "word";
	}
	// 匹配 pdf
	var pdflist = ["pdf"];
	result = pdflist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "pdf";
	}
	// 匹配 ppt
	var pptlist = ["ppt", "pptx"];
	result = pptlist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "ppt";
	}
	// 匹配 视频
	var videolist = ["mp4", "m2v", "mkv", "rmvb", "wmv", "avi", "flv", "mov", "m4v"];
	result = videolist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "video";
	}
	// 匹配 音频
	var radiolist = ["mp3", "wav", "wmv"];
	result = radiolist.find(function (item) {
		return item === suffix;
	});
	if (result) {
		return "radio";
	}
	// 其他 文件类型
	return "other";
}

var SharedResource = (0, _mobxReact.observer)(_class = function (_Component) {
	_inherits(SharedResource, _Component);

	function SharedResource(props) {
		_classCallCheck(this, SharedResource);

		var _this = _possibleConstructorReturn(this, (SharedResource.__proto__ || Object.getPrototypeOf(SharedResource)).call(this, props));

		_this.info = function () {
			_antd.Modal.info({
				title: '文件正在下载中，请耐心等待',
				onOk: function onOk() {}
			});
		};

		_this.init = function () {
			_this.store.getDocumentTypeList().then(function (res) {
				if (res && Array.isArray(res) && res.length > 0) {
					_this.setState({
						documentTypeList: res,
						activeType: res[0].id
					}, function () {
						_this.store.pageIndex = 1;
						_this.store.getDocumentListByTypeId(_this.state.activeType);
					});
				} else {
					_this.setState({
						documentTypeList: [],
						activeType: ""
					});
					_this.store.tableData = Object.assign([]);
					_this.store.totalCount = 0;
				}
			});
		};

		_this.checkType = function (item) {
			_this.setState({
				activeType: item.id
			}, function () {
				_this.store.pageIndex = 1;
				_this.store.getDocumentListByTypeId(_this.state.activeType);
			});
		};

		_this.delete = function (item) {
			_this.store.delDocument(item.id).then(function (res) {
				if (res) {
					_antd.message.success("删除成功");

					if (_this.store.pageIndex == 1) {
						_this.store.pageIndex = 1;
						_this.store.getDocumentListByTypeId(_this.state.activeType);
					} else {
						// 前端本地删除
						var dataArray = JSON.parse(JSON.stringify(_this.store.tableData));
						var index = dataArray.findIndex(function (mitem) {
							return mitem.id == item.id;
						});
						dataArray.splice(index, 1);
						_this.store.tableData = Object.assign([], dataArray);
					}
				}
			});
		};

		_this.saveAttachment = function (params) {
			// 处理附件
			var arr = [];
			params.length && params.map(function (item) {
				arr.push({
					typeId: _this.state.activeType,
					fileName: item.fileName,
					filePath: item.filePath,
					fileSize: item.fileSize
				});
			});
			_this.store.addDocuments(arr).then(function (res) {
				if (res) {
					_this.store.pageIndex = 1;
					_this.store.getDocumentListByTypeId(_this.state.activeType);
				}
			});
		};

		_this.changeDocument = function (record, params) {
			// 处理附件
			var arr = [];
			params.length && params.map(function (item) {
				arr.push({
					id: record.id,
					typeId: _this.state.activeType,
					fileName: item.fileName,
					filePath: item.filePath,
					fileSize: item.fileSize
				});
			});
			_this.store.changeDocument(arr[0]).then(function (res) {
				if (res) {
					_antd.message.success("更新成功");
					_this.store.pageIndex = 1;
					_this.store.getDocumentListByTypeId(_this.state.activeType);
				}
			});
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

		_this.downloadUrl = function (item) {
			var filePath = item.filePath,
			    fileName = item.fileName;
			//获取最后一个.的位置

			var index = filePath.lastIndexOf(".");
			//获取后缀
			var ext = filePath.substr(index + 1);
			if (_this.isAssetTypeAnImage(ext)) {
				//判断是否是图片
				_this.downloadImage(filePath, fileName);
			} else {
				var isImage = /\.(pdf)$/.test(fileName) || /\.(mp4|rmvb|avi|ts)$/.test(fileName);
				if (isImage) {
					// 文件大小超过5M，给出提示，手动关闭
					var size = item.fileSize;
					if (size >= 5242880) {
						_this.info();
					}
					(0, _download.downloadFile)(filePath, fileName); // 直接下载pdf
				} else {
					//console.log(getFileType(fileName), 'mp4')
					(0, _download.downloadFile)(filePath, fileName);
				}
			}
		};

		_this.handleInfiniteOnLoad = function () {
			var dataArray = mobx.toJS(_this.store.tableData);
			if (_this.store.totalCount === dataArray.length) {
				return;
			}
			_this.store.loading = true;
			_this.store.pageIndex = _this.store.pageIndex + 1;

			_this.store.getDocumentListByTypeId2(_this.state.activeType).then(function (res) {
				dataArray = dataArray.concat(res.body);
				_this.store.tableData = Object.assign([], dataArray);
				_this.store.loading = false;
			});
		};

		_this.trans = function (file) {
			var src = void 0;
			if (/\.(doc|docx)$/.test(file.fileName)) {
				src = './images/share_word.png';
			} else if (/\.(xls|xlsx)$/.test(file.fileName)) {
				src = './images/share_excel.png';
			} else if (/\.(pdf)$/.test(file.fileName)) {
				src = './images/share_pdf.png';
			} else if (/\.(zip|rar)$/.test(file.fileName)) {
				src = './images/share_zip.png';
			} else if (/\.(ppt|pptx)$/.test(file.fileName)) {
				src = './images/share_ppt.png';
			} else if (/\.(mp4|rmvb|avi|ts)$/.test(file.fileName)) {
				src = './images/share_vodie.png';
			} else if (/\.(exe)$/.test(file.fileName)) {
				src = './images/exe_default.jpg';
			} else if (/\.(bmp|jpg|png|gif|jpeg|webp)$/.test(file.fileName)) {
				src = './images/share_png.png';
			} else {
				src = './images/share_other.png';
			}
			return src;
		};

		_this.onSearch = function (value) {
			_this.store.text = _lodash2.default.trim(value);
			_this.init();
		};

		_this.onChange = function (e) {
			var value = e.target.value;

			if (_lodash2.default.trim(value) == "") {
				_this.store.text = _lodash2.default.trim(value);
				_this.init();
			}
		};

		_this.getXzUrl = function () {
			_this.store.getXzUrl().then(function (res) {
				var data = JSON.parse(res);
				var code = data.code,
				    url = data.url;

				if (code == 0) {
					window.open(url, "_blank");
				} else {
					var url2 = "https://xz.glodon.com/document/9073d9818580457e9f19792f5972d6d3/9073d9818580457e9f19792f5972d6d3";
					window.open(url2, "_blank");
				}
			});
		};

		_this.onPreview = function (item) {
			_this.child.handlePreview(item);
		};

		_this.onRef = function (ref) {
			_this.child = ref;
		};

		_this.isPreview = function (file) {
			var name = file.fileName || "";
			// 正则匹配
			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(txt)$/.test(name) || /\.(ppt|pptx)$/.test(name) || /\.(png|jpg|jpeg|bmp|gif)$/.test(name) || /\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/.test(name);
			return isImage;
		};

		_this.store = new _ShareStore2.default();
		_this.state = {
			documentTypeList: [],
			activeType: 1,
			visible: false
		};
		return _this;
	}

	_createClass(SharedResource, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.store.text = "";
			this.init();
			this.store.getUserPermissionByAppCode();
		}

		// 删除


		// 更新


		// 直接下载

	}, {
		key: 'isAssetTypeAnImage',
		value: function isAssetTypeAnImage(ext) {
			return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
		}

		// 手动下载


		// 获取下一页信息


		// 搜索


		// 预览

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    documentTypeList = _state.documentTypeList,
			    activeType = _state.activeType;
			var _store = this.store,
			    tableData = _store.tableData,
			    hasJournal = _store.hasJournal,
			    totalCount = _store.totalCount;


			return _react2.default.createElement(
				_antd.Row,
				{ className: 'w clearfix pr' },
				_react2.default.createElement(
					'div',
					{ className: 'fl', style: { padding: '6px 16px 0 0', width: '260px', minHeight: '350px' } },
					_react2.default.createElement(Search, {
						placeholder: '\u8F93\u5165\u8D44\u6E90\u540D\u79F0\u8FDB\u884C\u641C\u7D22',
						onSearch: this.onSearch,
						onChange: this.onChange,
						style: { width: 252 }
					}),
					documentTypeList.length > 0 ? _react2.default.createElement(
						'ul',
						{ className: 'share_resource' },
						documentTypeList.map(function (item, index) {
							return _react2.default.createElement(
								'li',
								{ key: item.id, onClick: _this2.checkType.bind(_this2, item) },
								_react2.default.createElement('img', { src: './images/file_name.png', alt: '', width: '30', height: '25' }),
								_react2.default.createElement(
									'span',
									{ className: activeType == item.id ? "active" : "" },
									item.name
								)
							);
						}),
						_react2.default.createElement(
							'li',
							{ onClick: this.getXzUrl },
							_react2.default.createElement('img', { style: { margin: '0 8px 0 6px' }, src: './images/share_more.png', alt: '', width: '15', height: '15' }),
							_react2.default.createElement(
								'a',
								{ href: 'javascript:;',
									style: { fontSize: '14px' } },
								'\u66F4\u591A'
							)
						)
					) : _react2.default.createElement(_antd.Empty, {
						image: './images/not_found.png',
						imageStyle: {
							marginTop: 60
						} })
				),
				_react2.default.createElement(
					'div',
					{ className: 'fl', style: {
							width: 'calc(100% - 260px)',
							borderLeft: '1px solid #EBEBEB',
							minHeight: '350px',
							paddingLeft: '15px',
							height: "calc(100vh - 200px)"
						} },
					_react2.default.createElement(
						'table',
						{ className: 'w share_resource_table', style: { borderBottom: '1px solid #e6e6e6' } },
						_react2.default.createElement(
							'thead',
							{ className: 'w' },
							_react2.default.createElement(
								'tr',
								{ className: 'w' },
								_react2.default.createElement(
									'th',
									{ className: 'tl', style: { width: 'calc(100% - 540px)', paddingLeft: '40px' } },
									'\u6587\u4EF6\u540D\u79F0'
								),
								_react2.default.createElement(
									'th',
									{ className: 'w100 tc' },
									'\u5927\u5C0F'
								),
								_react2.default.createElement(
									'th',
									{ className: 'w100 tc' },
									'\u4E0A\u4F20\u4EBA'
								),
								_react2.default.createElement(
									'th',
									{ className: 'w170 tc' },
									'\u4E0A\u4F20\u65F6\u95F4'
								),
								_react2.default.createElement(
									'th',
									{ className: 'w170 tc' },
									'\u64CD\u4F5C'
								)
							)
						)
					),
					_react2.default.createElement(
						_reactCustomScrollbars.Scrollbars,
						{
							style: {
								height: "calc(100% - 47px)"
							},
							autoHide: true },
						mobx.toJS(this.store.tableData).length > 0 ? _react2.default.createElement(
							_reactInfiniteScroller2.default,
							{
								initialLoad: false,
								pageStart: 0,
								loadMore: this.handleInfiniteOnLoad.bind(this),
								hasMore: !this.store.loading && this.store.hasMore,
								useWindow: false
							},
							_react2.default.createElement(
								'table',
								{ className: 'w share_resource_table' },
								_react2.default.createElement(
									'tbody',
									{ className: 'w' },
									mobx.toJS(tableData).length > 0 && mobx.toJS(tableData).map(function (item, index) {
										var fileName = item.fileName;

										var isImage = /\.(doc|docx)$/.test(fileName) || /\.(xls|xlsx)$/.test(fileName) || /\.(zip|rar)$/.test(fileName) || /\.(ppt|pptx)$/.test(fileName);

										return _react2.default.createElement(
											'tr',
											{ key: 'tab' + index, className: 'w' },
											_react2.default.createElement(
												'td',
												{ className: 'tl pr', style: { width: 'calc(100% - 540px)' } },
												_react2.default.createElement(
													'div',
													{ className: 'filename' },
													_react2.default.createElement('img', { style: { verticalAlign: 'middle', marginRight: '8px' }, width: '32', height: '32 ', src: _this2.trans(item), alt: '' }),
													_react2.default.createElement(
														'span',
														{ className: 'filename ellsis', title: item.fileName },
														item.fileName
													)
												)
											),
											_react2.default.createElement(
												'td',
												{ className: 'w100 tc' },
												(0, _utils.converSize)(item.fileSize)
											),
											_react2.default.createElement(
												'td',
												{ className: 'w100 tc' },
												'\u7BA1\u7406\u5458'
											),
											_react2.default.createElement(
												'td',
												{ className: 'w170 tc' },
												(0, _moment2.default)(item.createTime).format('YYYY-MM-DD HH:mm:ss')
											),
											_react2.default.createElement(
												'td',
												{ className: 'w170 tc' },
												hasJournal ? _react2.default.createElement(
													'span',
													null,
													_this2.isPreview(item) ? _react2.default.createElement(
														'span',
														{ style: { color: "#1890ff", cursor: "pointer", fontSize: '14px' }, onClick: _this2.onPreview.bind(_this2, item) },
														'\u9884\u89C8 ',
														_react2.default.createElement(_antd.Divider, { type: 'vertical' })
													) : null,
													isImage ? _react2.default.createElement(
														'a',
														{ href: item.filePath, style: { fontSize: '14px' } },
														'\u4E0B\u8F7D'
													) : _react2.default.createElement(
														'span',
														{ style: { color: "#40a9ff", cursor: "pointer", fontSize: '14px' }, onClick: _this2.downloadUrl.bind(_this2, item) },
														'\u4E0B\u8F7D'
													),
													_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
													_react2.default.createElement(
														_antd.Popconfirm,
														{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
																return _this2.delete(item);
															} },
														_react2.default.createElement(
															'a',
															{ style: { fontSize: '14px' }, href: 'javascript:;' },
															'\u5220\u9664'
														)
													),
													_react2.default.createElement(_antd.Divider, { type: 'vertical' }),
													_react2.default.createElement(_MyUploadThree2.default, {
														multiple: false,
														saveAttachment: _this2.changeDocument.bind(_this2, item)
													})
												) : _react2.default.createElement(
													'span',
													null,
													_this2.isPreview(item) ? _react2.default.createElement(
														'span',
														{ style: { color: "#1890ff", cursor: "pointer", fontSize: '14px' }, onClick: _this2.onPreview.bind(_this2, item) },
														'\u9884\u89C8 ',
														_react2.default.createElement(_antd.Divider, { type: 'vertical' })
													) : null,
													isImage ? _react2.default.createElement(
														'a',
														{ href: item.filePath, style: { fontSize: '14px' } },
														'\u4E0B\u8F7D'
													) : _react2.default.createElement(
														'span',
														{ style: { color: "#1890ff", cursor: "pointer", fontSize: '14px' }, onClick: _this2.downloadUrl.bind(_this2, item) },
														'\u4E0B\u8F7D'
													)
												)
											)
										);
									})
								)
							)
						) : _react2.default.createElement(_antd.Empty, {
							image: './images/not_found.png',
							imageStyle: {
								marginTop: 60
							} })
					),
					hasJournal ? _react2.default.createElement(
						_antd.Row,
						{ className: 'pr', style: { marginTop: "5px" } },
						_react2.default.createElement(
							_antd.Col,
							{ span: 24, className: 'tfc' },
							_react2.default.createElement(
								'div',
								{ style: {
										position: 'absolute',
										top: '0px',
										left: '5px',
										fontSize: '12px',
										color: 'rgb(153, 153, 153)'
									} },
								'\u5171 ' + totalCount + ' \u6761 '
							),
							_react2.default.createElement(_MyUploadThree2.default, {
								multiple: true,
								saveAttachment: this.saveAttachment
							})
						)
					) : null
				),
				_react2.default.createElement(_PreviewModal2.default, {
					onRef: this.onRef
				})
			);
		}
	}]);

	return SharedResource;
}(_react.Component)) || _class;

exports.default = SharedResource;

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

/***/ 1976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 大文件上传组件 多个
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _aliOss = __webpack_require__(232);

var _aliOss2 = _interopRequireDefault(_aliOss);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _mobxReact = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	return 'document/' + (0, _moment2.default)().format('YYYYMMDD') + '/' + file.uid + '/' + file.name;
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

var MyUploadThree = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(MyUploadThree, _React$Component);

	function MyUploadThree(props) {
		_classCallCheck(this, MyUploadThree);

		var _this = _possibleConstructorReturn(this, (MyUploadThree.__proto__ || Object.getPrototypeOf(MyUploadThree)).call(this, props));

		_this.changeSrc = function (res, file) {
			var host = _this.state.host;

			var url = host + uploadPath('path', file);
			var obj = Object.assign({}, {
				uid: file.uid,
				name: file.name,
				status: "done",
				url: url,
				fileId: null,
				fileName: file.name,
				filePath: url,
				fileSize: file.size,
				id: ""
			});
			var newFileList = [obj];
			// 处理附件
			var array = JSON.parse(JSON.stringify(newFileList));
			console.log(file, array, '文件');
			_this.props.saveAttachment(array);
		};

		_this.beforeUpload = function (file) {
			var isLt2M = file.size / 1024 / 1024 < 2000;
			if (!isLt2M) {
				_antd.message.error('Image must smaller than 2MB!');
			}
			_this.setState({
				loading: true
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
						});
						_this.changeSrc(res, file);
					}
				});
			};
			return false; // 不调用默认的上传方法
		};

		_this.store = _this.props.appStore;
		_this.state = {
			fileList: [],
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

	_createClass(MyUploadThree, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// 阿里云上传参数
			(0, _api.requestPost)('getSts', _config2.default.bpm.getSts, _bpm2.default.bpm.getSts, {}).then(function (res) {
				var str = typeof res == "string" ? JSON.parse(res) : res;
				if (str) {
					var token = JSON.parse(JSON.stringify(_this2.state.token));
					_this2.setState({
						token: Object.assign(token, {
							access_key_id: str.accessKeyId,
							access_key_secret: str.accessKeySecret,
							stsToken: str.securityToken
						})
					});
				}
			});
		}

		// 更新url

	}, {
		key: 'render',
		value: function render() {
			var multiple = this.props.multiple;

			var props = {
				multiple: true,
				name: 'file',
				beforeUpload: this.beforeUpload,
				showUploadList: false
			};
			return _react2.default.createElement(
				_antd.Upload,
				props,
				_react2.default.createElement(
					_antd.Spin,
					{ delay: '100', tip: '\u4E0A\u4F20\u4E2D...', spinning: this.state.loading },
					multiple ? _react2.default.createElement(
						_antd.Button,
						{ type: 'primary', size: 'small' },
						_react2.default.createElement(_antd.Icon, { type: 'upload' }),
						' ',
						_react2.default.createElement(
							'span',
							{ style: { fontSize: '12px' } },
							'\u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6'
						)
					) : _react2.default.createElement(
						'a',
						{ style: { fontSize: '14px' }, href: 'javascript:;' },
						'\u66F4\u65B0'
					)
				)
			);
		}
	}]);

	return MyUploadThree;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyUploadThree;

/***/ }),

/***/ 1978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 预览组件
            * dangwei
            * */

//import {downloadFile, download} from "@/utils/download";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _reactViewer = __webpack_require__(337);

var _reactViewer2 = _interopRequireDefault(_reactViewer);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _journal = __webpack_require__(93);

var _journal2 = _interopRequireDefault(_journal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreviewModal = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(PreviewModal, _React$Component);

	function PreviewModal(props) {
		var _this2 = this;

		_classCallCheck(this, PreviewModal);

		var _this = _possibleConstructorReturn(this, (PreviewModal.__proto__ || Object.getPrototypeOf(PreviewModal)).call(this, props));

		_this.getDocumentUrl = function (url) {
			return (0, _api.requestPost)('getDocumentUrl', _config2.default.journal.getDocumentUrl, _journal2.default.journal.getDocumentUrl, { url: url });
		};

		_this.handlePreview = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
				var isAssetTypeAnImage, getExt, imageArray;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (/\.(doc|docx)$/.test(file.fileName) || /\.(xls|xlsx)$/.test(file.fileName) || /\.(pdf)$/.test(file.fileName) || /\.(ppt|pptx)$/.test(file.fileName)) {
									// 文档
									_this.getDocumentUrl(file.filePath).then(function (res) {
										_this.setState({
											previewImage: res,
											previewVisible: true,
											name: file.fileName
										});
									});
								} else if (/\.(txt)$/.test(file.fileName)) {
									// txt文本
									_this.setState({
										previewImage: file.filePath,
										previewVisible: true,
										name: file.fileName
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
										imageArray = void 0;

										imageArray = [{
											src: file.filePath,
											alt: file.fileName,
											downloadUrl: file.filePath
										}];
										_this.setState({
											visible: true,
											imageArray: Object.assign([], imageArray)
										});
									} else {
										// 视频
										_this.setState({
											previewImage: file.filePath,
											previewVisible: true,
											name: file.fileName
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
			var _this$setState;

			return _this.setState((_this$setState = {}, _defineProperty(_this$setState, type, false), _defineProperty(_this$setState, 'previewImage', ""), _defineProperty(_this$setState, 'name', ""), _this$setState));
		};

		_this.state = {
			previewVisible: false,
			previewImage: '',
			name: "",
			visible: false,
			imageArray: [] // 图片预览
		};
		return _this;
	}

	_createClass(PreviewModal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onRef(this);
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    name = _state.name,
			    previewImage = _state.previewImage,
			    previewVisible = _state.previewVisible,
			    imageArray = _state.imageArray,
			    visible = _state.visible;

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(txt)$/.test(name) || /\.(ppt|pptx)$/.test(name);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_antd.Modal,
					{
						title: _react2.default.createElement(
							'div',
							null,
							name
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
						frameBorder: '1' }) : _react2.default.createElement(
						'video',
						{ src: previewImage, controls: 'controls', width: "100%", height: "100%" },
						'\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002'
					)
				),
				_react2.default.createElement(_reactViewer2.default, {
					visible: visible,
					onClose: this.handleCancel.bind(this, 'visible'),
					images: imageArray,
					activeIndex: 0
				})
			);
		}
	}]);

	return PreviewModal;
}(_react2.default.Component)) || _class;

exports.default = PreviewModal;

/***/ }),

/***/ 2107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8; /*
                                                                                                                                          * 资源共享 store
                                                                                                                                          */


var _mobx = __webpack_require__(12);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _journal = __webpack_require__(93);

var _journal2 = _interopRequireDefault(_journal);

var _login = __webpack_require__(154);

var _login2 = _interopRequireDefault(_login);

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

var ShareStore = (_class = function () {
  function ShareStore() {
    _classCallCheck(this, ShareStore);

    _initDefineProp(this, 'text', _descriptor, this);

    _initDefineProp(this, 'pageIndex', _descriptor2, this);

    _initDefineProp(this, 'pageSize', _descriptor3, this);

    _initDefineProp(this, 'tableData', _descriptor4, this);

    _initDefineProp(this, 'totalCount', _descriptor5, this);

    _initDefineProp(this, 'loading', _descriptor6, this);

    _initDefineProp(this, 'hasMore', _descriptor7, this);

    _initDefineProp(this, 'hasJournal', _descriptor8, this);
  }

  _createClass(ShareStore, [{
    key: 'getDocumentTypeList',


    // 文档类型列表
    value: function getDocumentTypeList() {
      return (0, _api.requestPost)('getDocumentTypeList', _config2.default.journal.getDocumentTypeList, _journal2.default.journal.getDocumentTypeList, {
        text: this.text
      });
    }

    // 根据typeId 过滤文档列表

  }, {
    key: 'getDocumentListByTypeId',
    value: function getDocumentListByTypeId(param) {
      var _this = this;

      return (0, _api.requestPost)('getDocumentListByTypeId', _config2.default.journal.getDocumentListByTypeId, _journal2.default.journal.getDocumentListByTypeId, {
        text: this.text,
        typeId: param,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(function (res) {
        _this.tableData = Object.assign([], res.body);
        _this.totalCount = res.totalCount;
        return res;
      });
    }
  }, {
    key: 'getDocumentListByTypeId2',
    value: function getDocumentListByTypeId2(param) {
      return (0, _api.requestPost)('getDocumentListByTypeId', _config2.default.journal.getDocumentListByTypeId, _journal2.default.journal.getDocumentListByTypeId, {
        text: this.text,
        typeId: param,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      });
    }

    // 添加多个文件

  }, {
    key: 'addDocuments',
    value: function addDocuments(param) {
      return (0, _api.requestPost)('addDocuments', _config2.default.journal.addDocuments, _journal2.default.journal.addDocuments, {
        ds: param
      });
    }

    // 删除

  }, {
    key: 'delDocument',
    value: function delDocument(param) {
      return (0, _api.requestPost)('delDocument', _config2.default.journal.delDocument, _journal2.default.journal.delDocument, {
        id: param
      });
    }

    //  修改单个文档

  }, {
    key: 'changeDocument',
    value: function changeDocument(param) {
      return (0, _api.requestPost)('changeDocument', _config2.default.journal.changeDocument, _journal2.default.journal.changeDocument, {
        d: param
      });
    }
  }, {
    key: 'getUserPermissionByAppCode',
    // 权限

    // 获取操作权限
    value: function getUserPermissionByAppCode() {
      var _this2 = this;

      return (0, _api.requestPost)('getUserPermissionByAppCode', _config2.default.authorization.getPermission, _login2.default.login.getUserPermissionByAppCode, { "appCode": "bocspace" }).then(function (res) {
        // 数字组织权限
        if (res.some(function (item) {
          return item.code.includes("bocspace.document");
        })) {
          _this2.hasJournal = true;
        } else {
          _this2.hasJournal = false;
        }
      });
    }

    //getXzUrl

  }, {
    key: 'getXzUrl',
    value: function getXzUrl() {
      return (0, _api.requestPost)('getXzUrl', _config2.default.journal.getXzUrl, _journal2.default.journal.getXzUrl, {
        key: ""
      });
    }
  }]);

  return ShareStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'text', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pageIndex', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 50;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'tableData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'totalCount', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'loading', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'hasMore', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'getDocumentTypeList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDocumentTypeList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDocumentListByTypeId', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDocumentListByTypeId'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDocumentListByTypeId2', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDocumentListByTypeId2'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addDocuments', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addDocuments'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'delDocument', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'delDocument'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeDocument', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'changeDocument'), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'hasJournal', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'getUserPermissionByAppCode', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserPermissionByAppCode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getXzUrl', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getXzUrl'), _class.prototype)), _class);
exports.default = ShareStore;

/***/ })

});
//# sourceMappingURL=27-afa7d4b4bae6ff2924e9.1629092961041.js.map