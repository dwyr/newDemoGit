webpackJsonp([56],{

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  *交付管理 -- 模板
                  *qiufh@bocspace.cn
                  */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _download = __webpack_require__(68);

var _utils = __webpack_require__(89);

var _DeliveryStore = __webpack_require__(718);

var _DeliveryStore2 = _interopRequireDefault(_DeliveryStore);

var _api = __webpack_require__(30);

var _journal = __webpack_require__(93);

var _journal2 = _interopRequireDefault(_journal);

var _reactRouterDom = __webpack_require__(32);

var _antd = __webpack_require__(17);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _antd.Input.Search;
var Meta = _antd.Card.Meta;
var Template = (_dec = (0, _mobxReact.inject)('DeliveryStore'), _dec(_class = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Template, _React$Component);

	function Template(props) {
		var _this2 = this;

		_classCallCheck(this, Template);

		var _this = _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).call(this, props));

		_this.onSearch = function (value) {
			console.log('value=====>', value);
			if (value === '') {
				_this.store.tdParmas.pageIndex = 1;
			}
			_this.store.getTempleteDocPageList(value);
		};

		_this.loadPageInfo = function () {
			_this.store.getTempleteDocPageList('');
		};

		_this.searchAndMgr = _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(Search, {
				placeholder: '\u641C\u7D22',
				onSearch: function onSearch(value) {
					_this.onSearch(value);
				},
				style: { width: 252 }
			}),
			_react2.default.createElement(
				'div',
				{ className: 'ml15 dib' },
				_react2.default.createElement(_antd.Icon, { type: 'setting' }),
				_react2.default.createElement(
					'span',
					{ className: 'ml5' },
					'\u7BA1\u7406\u9879\u76EE'
				)
			)
		);

		_this.transFaker = function (file) {
			var src = void 0;
			if (/\.(doc|docx)$/.test(file)) {
				src = './images/u1475.png';
			} else if (/\.(xls|xlsx)$/.test(file)) {
				src = './images/u1473.png';
			} else if (/\.(pdf)$/.test(file)) {
				src = './images/share_pdf.png';
			} else if (/\.(zip|rar)$/.test(file)) {
				src = './images/share_zip.png';
			} else if (/\.(ppt|pptx)$/.test(file)) {
				src = './images/u1474.png';
			} else if (/\.(mp4|rmvb|avi|ts)$/.test(file)) {
				src = './images/share_vodie.png';
			} else if (/\.(exe)$/.test(file)) {
				src = './images/exe_default.jpg';
			} else if (/\.(bmp|jpg|png|gif|jpeg|webp)$/.test(file)) {
				src = './images/share_png.png';
			} else {
				src = './images/defaultFileIcon.jpg';
			}
			return src;
		};

		_this.downloadUrl = function (item, e) {
			var fileUrl = item.fileUrl,
			    name = item.name;

			var isImage = /\.(doc|docx)$/.test(name) || /\.(xls|xlsx)$/.test(name) || /\.(pdf)$/.test(name) || /\.(zip|rar)$/.test(name) || /\.(ppt|pptx)$/.test(name);
			if (isImage) {
				(0, _download.downloadFile)(fileUrl, name); // 直接下载pdf
			} else {
				_this.downloadImage(fileUrl, name);
			}
			e.stopPropagation();
		};

		_this.handlePageonChange = function (pageNumber) {
			_this.store.tdParmas = Object.assign(mobx.toJS(_this.store.tdParmas), {
				pageIndex: pageNumber
			});

			_this.store.getTempleteDocPageList(_this.store.tdParmas.text);
		};

		_this.getDocumentUrl = function (url) {
			return (0, _api.requestPost)('getDocumentUrl', _config2.default.journal.getDocumentUrl, _journal2.default.journal.getDocumentUrl, { url: url });
		};

		_this.showModal = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this.getDocumentUrl(decodeURIComponent(item.fileUrl)).then(function (res) {
									_this.setState({
										modalVisible: true,
										modalTitle: item.name,
										fileUrl: res,
										currentItem: item
									});
								});

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

		_this.handleOk = function (e) {
			console.log(e);
			_this.setState({
				modalVisible: false
			});
		};

		_this.handleCancel = function (e) {
			console.log(e);
			_this.setState({
				modalVisible: false,
				fileUrl: ''
			});
		};

		_this.store = _this.props.DeliveryStore;
		_this.state = {
			modalVisible: false,
			modalTitle: '',
			previewVisible: false,
			previewImage: '',
			name: "",
			filePath: "",
			fileUrl: ""
		};
		return _this;
	}

	_createClass(Template, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var search = this.props.location.search;
			var key = _url2.default.parse(search, true).query.key;
			this.loadPageInfo();
		}

		// 手动下载

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _store = this.store,
			    templateDocList = _store.templateDocList,
			    templateTotalCount = _store.templateTotalCount,
			    tdParmas = _store.tdParmas;
			var _state = this.state,
			    modalTitle = _state.modalTitle,
			    currentItem = _state.currentItem;

			var modalHeader = _react2.default.createElement(
				_antd.Row,
				null,
				_react2.default.createElement(
					_antd.Col,
					{ span: 12, className: 'leftLabelHeader' },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'span',
							null,
							modalTitle
						)
					)
				),
				_react2.default.createElement(
					_antd.Col,
					{ span: 12, className: 'rightLabelHeader' },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							_antd.Button,
							{ type: 'default', icon: 'download', onClick: function onClick(e) {
									_this3.downloadUrl(currentItem, e);
								} },
							'\u4E0B\u8F7D'
						)
					)
				)
			);

			return _react2.default.createElement(
				'div',
				{ className: 'w80 h', style: { paddingBottom: "30px", margin: "0 auto" } },
				_react2.default.createElement(
					'div',
					{ className: 'template_search' },
					_react2.default.createElement(Search, {
						placeholder: '\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\u6A21\u677F',
						onSearch: function onSearch(value) {
							_this3.onSearch(value);
						},
						style: { width: 600 }
						// prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
					})
				),
				_react2.default.createElement(_antd.List, {
					grid: {
						gutter: 16,
						xs: 4,
						sm: 4,
						md: 4,
						lg: 4,
						xl: 4,
						xxl: 4
					},
					style: { marginTop: '40px' },
					dataSource: templateDocList,
					renderItem: function renderItem(item) {
						return _react2.default.createElement(
							_antd.List.Item,
							null,
							_react2.default.createElement(_antd.Card, {
								onClick: function onClick() {
									_this3.showModal(item);
								},
								className: 'template_card',
								hoverable: true,
								bodyStyle: { padding: 0 },
								style: {
									//width: 300,
									paddingLeft: 12,
									paddingRight: 12,
									paddingTop: 12,
									margin: '0 auto'
								},
								cover: _react2.default.createElement('img', { alt: item.name, src: item.defaultImageUrl,
									style: {
										maxWidth: '100%',
										minHeight: '150px',
										maxHeight: '150px'
									} }),
								actions: [_react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
										'div',
										{ style: { textAlign: 'left', paddingLeft: '5px', fontSize: '14px', color: '#555555' } },
										_react2.default.createElement(
											'span',
											null,
											item.name
										),
										_react2.default.createElement(
											'span',
											{ className: 'download', style: { float: 'right', paddingRight: '5px' }, onClick: function onClick(e) {
													_this3.downloadUrl(item, e);
												} },
											'\u4E0B\u8F7D'
										)
									),
									_react2.default.createElement(
										'div',
										{ style: { textAlign: 'left', paddingLeft: '5px', marginTop: '10px', fontSize: '12px' } },
										_react2.default.createElement(
											'span',
											null,
											'\u5927\u5C0F\uFF1A',
											(0, _utils.converSize)(item.fileSize)
										),
										_react2.default.createElement(
											'span',
											{ style: { marginLeft: '3%' } },
											'\u4E0A\u4F20\u65F6\u95F4\uFF1A',
											(0, _moment2.default)(item.createTime).format('YYYY-MM-DD')
										)
									)
								)]
							})
						);
					}
				}),
				_react2.default.createElement(
					'div',
					{ className: 'template_pagination' },
					_react2.default.createElement(_antd.Pagination, { pageSize: tdParmas.pageSize, onChange: this.handlePageonChange, current: tdParmas.pageIndex, defaultCurrent: tdParmas.pageIndex, total: templateTotalCount })
				),
				_react2.default.createElement(
					_antd.Modal,
					{
						title: modalHeader,
						visible: this.state.modalVisible,
						onOk: this.handleOk,
						onCancel: this.handleCancel,
						footer: null,
						style: { top: 20, height: 'calc(100vh - 50px)', minWidth: '1000px' },
						bodyStyle: { padding: 0 },
						width: 'calc(100% - 50px)'
					},
					_react2.default.createElement(
						'div',
						{ style: { height: 'calc(100vh - 100px)' } },
						_react2.default.createElement('iframe', {
							src: this.state.fileUrl,
							width: '100%', height: '100%', frameBorder: '1', style: { minHeight: '450px' } })
					)
				)
			);
		}
	}]);

	return Template;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = Template;

/***/ })

});
//# sourceMappingURL=56-afa7d4b4bae6ff2924e9.1629092961041.js.map