webpackJsonp([39],{

/***/ 1463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  *交付管理-日报查看
                  *qiufh@bocspace.cn
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

var _uuid = __webpack_require__(79);

var _EditableTable = __webpack_require__(1658);

var _EditableTable2 = _interopRequireDefault(_EditableTable);

var _EditableTableTomorrowMaterial = __webpack_require__(1784);

var _EditableTableTomorrowMaterial2 = _interopRequireDefault(_EditableTableTomorrowMaterial);

var _MyUpload = __webpack_require__(1517);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var DailyView = (_dec = (0, _mobxReact.inject)('DeliveryStore'), _dec(_class = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(DailyView, _React$Component);

	function DailyView(props) {
		_classCallCheck(this, DailyView);

		var _this = _possibleConstructorReturn(this, (DailyView.__proto__ || Object.getPrototypeOf(DailyView)).call(this, props));

		_this.getProjectDetail = function (id) {
			_this.store.getProjectDetail({ 'id': id }).then(function (res) {
				_this.store.projectDetail = res;
			});
		};

		_this.getDailyById = function (id) {
			_this.store.getDailyById({ "id": id }).then(function (res) {
				_this.store.dailyDetail = Object.assign({}, res);
			});
		};

		_this.getProgressStateInfo = function (state) {
			var info = "";
			if (state === 0) {
				info = "正常";
			}
			if (state === 1) {
				info = "提前";
			}
			if (state === 2) {
				info = "延迟";
			}
			return info;
		};

		_this.showDailyDocumnet = function () {
			var _this$store = _this.store,
			    projectDetail = _this$store.projectDetail,
			    dailyDetail = _this$store.dailyDetail;

			var dailyDocuments = [];
			if (mobx.toJS(dailyDetail).dailyDocuments !== null && mobx.toJS(dailyDetail).dailyDocuments.length > 0) {
				dailyDocuments = mobx.toJS(dailyDetail).dailyDocuments.map(function (item, index) {
					return Object.assign({}, {
						"fileId": null,
						"fileName": item.fileUrl,
						"filePath": item.fileUrl,
						"id": "",
						"name": item.name,
						"status": "done",
						"uid": (0, _uuid.v4)(),
						"url": item.fileUrl
					});
				});
			}
			return dailyDocuments;
		};

		_this.getWeatherIconUrl = function (weather) {
			var iconUrl = "./images/delivery/weather/clearday.png";
			if (weather === "晴") {
				iconUrl = "./images/delivery/weather/clearday.png";
			}
			if (weather === "多云") {
				iconUrl = "./images/delivery/weather/cloud.png";
			}
			if (weather === "阴") {
				iconUrl = "./images/delivery/weather/overcast.png";
			}
			if (weather === "雨") {
				iconUrl = "./images/delivery/weather/rain.png";
			}
			if (weather === "雪") {
				iconUrl = "./images/delivery/weather/snow.png";
			}
			if (weather === "大风") {
				iconUrl = "./images/delivery/weather/wind.png";
			}
			if (weather === "龙卷风") {
				iconUrl = "./images/delivery/weather/tornado.png";
			}
			if (weather === "雾霾") {
				iconUrl = "./images/delivery/weather/haze.png";
			}
			return iconUrl;
		};

		_this.handleSelectedDaily = function (item, index) {
			_this.setState({ currentItem: index });
			_this.store.getDailyById({ "id": item.id }).then(function (res) {
				_this.store.dailyDetail = Object.assign({}, res);
			});
		};

		_this.getDailyListPage = function () {
			var projectDetail = _this.store.projectDetail;

			_this.store.dailyParmas.projectId = mobx.toJS(projectDetail).id;
			_this.store.getDailyListPage().then(function (res) {
				_this.store.dailyList = Object.assign([], res.body);
				_this.store.dailyParmas.pageIndex = res.pageIndex;
				_this.store.dailyParmas.pageSize = res.pageSize;
				_this.store.dailyParmas.totalCount = res.totalCount;
				if (res.body.length > 0) {
					_this.handleSelectedDaily(res.body[0], 0);
				}
			});
		};

		_this.editDaily = function () {
			_this.store.dailyPageState = 2; //进入日报编辑状态
		};

		_this.delDaily = function () {
			var dailyDetail = _this.store.dailyDetail;

			_this.store.delDaily({ "id": dailyDetail.id }).then(function (res) {
				_this.getDailyListPage();
			});
		};

		_this.resolveNoArriveMaterials = function (dailyDetail) {
			var result = void 0;
			if (dailyDetail.noArriveMaterials === null) {
				result = "无";
			} else if (mobx.toJS(dailyDetail).noArriveMaterials.filter(function (item) {
				return item === null;
			}).length === mobx.toJS(dailyDetail).noArriveMaterials.length) {
				result = "无";
			} else {
				result = mobx.toJS(dailyDetail).noArriveMaterials.map(function (item) {
					return item.showName;
				}).join(", ");
			}
			return result;
		};

		_this.store = _this.props.DeliveryStore;
		_this.state = {};
		return _this;
	}

	_createClass(DailyView, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var search = this.props.location.search;
			var projectid = _url2.default.parse(search, true).query.projectid;
			var dailyid = _url2.default.parse(search, true).query.dailyid;
			if (projectid !== undefined && dailyid !== undefined) {
				this.getProjectDetail(projectid);
				this.getDailyById(dailyid);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			_objectDestructuringEmpty(this.state);

			var _store = this.store,
			    projectDetail = _store.projectDetail,
			    dailyDetail = _store.dailyDetail;


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_head' },
					_react2.default.createElement(
						'div',
						{ className: 'title_info' },
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_title' },
							projectDetail.name + '-' + dailyDetail.title
						),
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_progress' },
							'\u65BD\u5DE5\u8FDB\u5EA6 ',
							_react2.default.createElement(
								'span',
								{ className: 'color_status' },
								this.getProgressStateInfo(dailyDetail.progressState)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'buttons_zone' },
						_react2.default.createElement(
							_antd.Button,
							{ className: 'title', type: 'link', onClick: this.showModal },
							_react2.default.createElement('img', { src: './images/delivery/u389.png', style: { width: '20px', height: '20px' } }),
							'\u5206\u4EAB'
						),
						_react2.default.createElement(
							'span',
							{ className: 'gap' },
							' '
						),
						_react2.default.createElement(
							_antd.Button,
							{ className: 'title', type: 'link', onClick: this.editDaily },
							_react2.default.createElement('img', { src: './images/delivery/u1479.png', style: { width: '16px', height: '16px' } }),
							'\u7F16\u8F91'
						),
						_react2.default.createElement(
							'span',
							{ className: 'gap' },
							' '
						),
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u5220\u9664?', onConfirm: this.delDaily },
							_react2.default.createElement(
								_antd.Button,
								{ className: 'title', type: 'link' },
								_react2.default.createElement('img', { src: './images/delivery/u1480.png', style: { width: '16px', height: '16px' } }),
								'\u5220\u9664'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'weather_author' },
					_react2.default.createElement('img', { src: this.getWeatherIconUrl(dailyDetail.weather), style: { width: '27px', height: '27px' } }),
					_react2.default.createElement(
						'div',
						{ className: 'info' },
						_react2.default.createElement(
							'div',
							{ className: 'weather' },
							dailyDetail.weather + '\uFF0C' + dailyDetail.windPower
						),
						_react2.default.createElement(
							'div',
							{ className: 'author' },
							dailyDetail.createUserName === null ? '' : dailyDetail.createUserName,
							' ',
							dailyDetail.createTime !== 0 ? (0, _moment2.default)(dailyDetail.createTime).format(dateFormat) : ''
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'overall_desc' },
					_react2.default.createElement(
						'div',
						{ className: 'label_info' },
						'\u6574\u4F53\u63CF\u8FF0'
					),
					_react2.default.createElement(
						'div',
						{ className: 'desc_info' },
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: dailyDetail.overallDescription } })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u8FDB\u573A\u6750\u6599'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						dailyDetail.material
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u4ECA\u65E5\u65BD\u5DE5\u5185\u5BB9'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						_react2.default.createElement(_EditableTable2.default, {
							id: 'id',
							store: this.store,
							dataSource: dailyDetail.contents,
							disabled: true,
							tableType: 'today',
							pid: ''
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u660E\u65E5\u65BD\u5DE5\u8BA1\u5212'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						_react2.default.createElement(_EditableTable2.default, {
							id: 'id',
							store: this.store,
							dataSource: dailyDetail.tomorrowContents,
							disabled: true,
							tableType: 'tomorrow',
							pid: ''
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ style: { display: 'flex' } },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_item' },
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_label' },
							'\u4ECA\u65E5\u5DE5\u4EBA\u6570\u91CF'
						),
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_content' },
							dailyDetail.workersCount,
							'\u4EBA'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_item' },
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_label' },
							'\u672A\u6309\u8BA1\u5212\u8FDB\u573A\u6750\u6599'
						),
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_content' },
							this.resolveNoArriveMaterials(dailyDetail)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_item' },
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_label' },
							'\u662F\u5426\u5F71\u54CD\u65BD\u5DE5\u8FDB\u5EA6'
						),
						_react2.default.createElement(
							'div',
							{ className: 'daily_view_content' },
							dailyDetail.materialInfluence
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u73B0\u573A\u7167\u7247'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						_react2.default.createElement(_MyUpload2.default, {
							disabled: true,
							multiple: true,
							listType: 'picture-card',
							fileList: this.showDailyDocumnet(),
							journalType: 'journal'
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u660E\u65E5\u5929\u6C14'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						_react2.default.createElement(
							'div',
							{ className: 'weather_info' },
							_react2.default.createElement('img', { src: this.getWeatherIconUrl(dailyDetail.tomorrowWeather), style: { width: '27px', height: '27px' } }),
							_react2.default.createElement(
								'div',
								{ className: 'info' },
								_react2.default.createElement(
									'div',
									{ className: 'weather' },
									dailyDetail.tomorrowWeather + '\uFF0C' + dailyDetail.tomorrowWindPower
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u660E\u65E5\u8FDB\u573A\u6750\u6599'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						_react2.default.createElement(_EditableTableTomorrowMaterial2.default, {
							id: 'id',
							store: this.store,
							dataSource: dailyDetail.tomorrowPlanArriveMaterial,
							disabled: true,
							pid: ''
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u98CE\u9669\u4E0E\u534F\u52A9'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content', style: { paddingBottom: '40px' } },
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: dailyDetail.assistance } })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u65BD\u5DE5\u603B\u7ED3'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						_react2.default.createElement('div', { className: 'deaft_content_detail', style: { paddingLeft: '14px' }, dangerouslySetInnerHTML: { __html: dailyDetail.summary } })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'daily_view_item' },
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_label' },
						'\u5907\u6CE8'
					),
					_react2.default.createElement(
						'div',
						{ className: 'daily_view_content' },
						_react2.default.createElement(
							'p',
							null,
							dailyDetail.contentRemarks
						)
					)
				),
				_react2.default.createElement('div', { className: 'split-line' })
			);
		}
	}]);

	return DailyView;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = DailyView;

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

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _class2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _uuid = __webpack_require__(79);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _lodash = __webpack_require__(231);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * Table组件
                                                                                                                                                                                                                             * */


var Option = _antd.Select.Option;

var dateFormat = 'YYYY-MM-DD';

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

/*自定义编辑组件*/

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
			editing: true, //false,
			userIds: [],
			detailWorks: [] // 施工任务数据
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
				//this.toggleEdit();
				delete values["beginTime"];
				delete values["endTime"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.onBlur = function () {
			//this.toggleEdit();
		}, _this2.handlePositionChange = function (value) {
			var record = _this2.props.record;

			_this2.props.getProductCategoryList(record, value);
		}, _this2.handleProductCategoryChange = function (value) {
			var _this2$props2 = _this2.props,
			    record = _this2$props2.record,
			    handleSave = _this2$props2.handleSave;

			_this2.props.getProductDetailList(value, record);
		}, _this2.handleProductDetailChange = function (value) {
			var _this2$props3 = _this2.props,
			    record = _this2$props3.record,
			    handleSave = _this2$props3.handleSave;
			var detailWorks = _this2.state.detailWorks;

			var selectedDetailItem = Array.isArray(detailWorks) ? detailWorks.filter(function (item) {
				return item.productDetailId === value;
			}) : [];

			if (selectedDetailItem.length > 0) {
				handleSave(Object.assign(record, { "planBeginTime": selectedDetailItem[0].planBeginTime, "planEndTime": selectedDetailItem[0].planEndTime, "productDetail": selectedDetailItem[0].productDetail, "productDetailId": selectedDetailItem[0].productDetailId, "palnProgress": selectedDetailItem[0].palnProgress, "actualProgress": selectedDetailItem[0].actualProgress }));
			} else {
				handleSave(Object.assign(record, { "planBeginTime": 0, "planEndTime": 0, "productDetail": value, "productDetailId": "", "palnProgress": 0, "actualProgress": 0 }));
			}
		}, _this2.handleNumberActualProgressSave = function (e) {
			var _this2$props4 = _this2.props,
			    record = _this2$props4.record,
			    handleSave = _this2$props4.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (error) {
					return;
				}
				handleSave(Object.assign(record, { "actualProgress": values.actualProgress }));
			});
		}, _this2.handleNumberPalnProgressSave = function (e) {
			var _this2$props5 = _this2.props,
			    record = _this2$props5.record,
			    handleSave = _this2$props5.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (error) {
					return;
				}
				handleSave(Object.assign(record, { "palnProgress": values.palnProgress }));
			});
		}, _this2.handleDateTime = function (date) {
			var _this2$props6 = _this2.props,
			    record = _this2$props6.record,
			    handleSave = _this2$props6.handleSave;

			handleSave(Object.assign(record, { "actualBeginTime": date.valueOf() }));
		}, _this2.renderOption = function (item) {
			return _react2.default.createElement(
				Option,
				{ key: item.id, text: item.name },
				item.name
			);
		}, _this2.renderOption2 = function (item) {
			return _react2.default.createElement(
				Option,
				{ key: item.productDetailId, text: item.productDetailId },
				item.productDetail
			);
		}, _this2.onFocus = function () {
			var _this2$props7 = _this2.props,
			    record = _this2$props7.record,
			    getDetailWorkByPostionId = _this2$props7.getDetailWorkByPostionId;

			getDetailWorkByPostionId(record["positionId"]).then(function (res) {
				_this2.setState({
					detailWorks: Array.isArray(res) ? res : []
				});
			});
		}, _this2.renderCell = function (form) {
			_this2.form = form;
			var _this2$props8 = _this2.props,
			    children = _this2$props8.children,
			    dataIndex = _this2$props8.dataIndex,
			    record = _this2$props8.record,
			    title = _this2$props8.title,
			    handleDelete = _this2$props8.handleDelete,
			    positionList = _this2$props8.positionList,
			    dailyDate = _this2$props8.dailyDate,
			    tableType = _this2$props8.tableType;
			var _this2$state = _this2.state,
			    editing = _this2$state.editing,
			    detailWorks = _this2$state.detailWorks;

			if (dataIndex == 'position') {
				// 部位
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: tableType === "today" ? true : false,
							message: '\u697C\u680B\u662F\u5FC5\u8F93'
						}],
						initialValue: record['positionId'] == null ? undefined : record['positionId'] === '' ? record['position'] : record['positionId']
					})(_react2.default.createElement(
						'div',
						{ className: 'w clearfix' },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
									return handleDelete(record);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									width: '30px',
									color: '#F17E7E',
									fontSize: '15px'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(_antd.AutoComplete, {
							defaultValue: record[dataIndex],
							dataSource: positionList.map(_this2.renderOption),
							placeholder: '选择或输入',
							style: { width: "140px" },
							onChange: _this2.handlePositionChange
						})
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
								fontSize: '22px',
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
							},
							onClick: _this2.toggleEdit
						},
						children
					)
				);
			} else if (dataIndex == 'productCategory') {
				// 相同列
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: tableType === "today" ? true : false,
							message: '\u4EA7\u54C1\u7C7B\u522B\u662F\u5FC5\u8F93'
						}],
						initialValue: record['productCategoryId'] == null ? undefined : record['productCategoryId'] == "" ? record['productCategory'] : record['productCategoryId']
					})(_react2.default.createElement(_antd.AutoComplete, {
						defaultValue: record[dataIndex],
						dataSource: Array.isArray(record['productCategoryList']) ? record['productCategoryList'].map(_this2.renderOption) : [],
						placeholder: '选择或输入',
						style: { width: "140px" },
						onChange: _this2.handleProductCategoryChange
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					record[dataIndex] == "" || record[dataIndex] == null ? "--" : record[dataIndex]
				);
			} else if (dataIndex == 'productDetail') {
				// 施工任务
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: tableType === "today" ? true : false,
							message: '\u65BD\u5DE5\u4EFB\u52A1\u662F\u5FC5\u8F93'
						}],
						initialValue: record['productDetail']
						//initialValue: record['productDetailId'] == null ? undefined : record['productDetailId'] == ""?record['productDetail']:record['productDetailId'],
					})(_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_antd.AutoComplete, {
							value: record['productDetail'],
							disabled: record["position"] == "" || record["position"] == null ? true : false,
							onFocus: _this2.onFocus
							//dataSource={Array.isArray(record['productDetailList'])?record['productDetailList'].map(this.renderOption2):[]}
							, dataSource: Array.isArray(detailWorks) ? detailWorks.map(_this2.renderOption2) : [],
							placeholder: '选择或输入',
							style: { width: "140px" },
							onChange: _this2.handleProductDetailChange
						})
					))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					record[dataIndex] == "" || record[dataIndex] == null ? "--" : record[dataIndex]
				);
			} else if (dataIndex == 'planBeginTime' || dataIndex == 'planEndTime') {
				// 相同列
				return editing && false ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
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
						placeholder: '\u8BF7\u8F93\u5165'
					}))
				) : _react2.default.createElement(
					'div',
					{
						style: { minHeight: '31px' }
					},
					record[dataIndex] == "" || record[dataIndex] == null ? "--" : (0, _moment2.default)(record[dataIndex]).format(dateFormat)
				);
			} else if (dataIndex == 'actualBeginTime') {
				// 相同列
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: tableType === "today" ? true : false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? (0, _moment2.default)() : (0, _moment2.default)(record[dataIndex])
					})(_react2.default.createElement(_antd.DatePicker, {
						style: { width: '122px' },
						placeholder: '\u8BF7\u9009\u62E9',
						format: 'YYYY-MM-DD',
						onChange: _this2.handleDateTime
					}))
				) : _react2.default.createElement(
					'div',
					{
						style: { minHeight: '31px' }
					},
					record[dataIndex] == null || record[dataIndex] == 0 ? dailyDate : (0, _moment2.default)(record[dataIndex]).format(dateFormat)
				);
			} else if (dataIndex == 'actualProgress') {
				// 实际完成比例
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: tableType === "today" ? true : false,
							message: '\u5B9E\u9645\u5B8C\u6210\u8FDB\u5EA6\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
					})(_react2.default.createElement(
						'div',
						{ style: { display: "inline-block" } },
						_react2.default.createElement(_antd.InputNumber, {
							min: 0,
							max: 100,
							ref: function ref(node) {
								return _this2.input = node;
							},
							onPressEnter: _this2.handleNumberActualProgressSave,
							onBlur: _this2.handleNumberActualProgressSave,
							value: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
						})
					)),
					' %'
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children,
					'%'
				);
			} else if (dataIndex == 'palnProgress') {
				// 计划完成比例
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
					})(_react2.default.createElement(
						'div',
						{ style: { display: "inline-block" } },
						_react2.default.createElement(_antd.InputNumber, {
							min: 0,
							max: 100,
							ref: function ref(node) {
								return _this2.input = node;
							},
							onPressEnter: _this2.handleNumberPalnProgressSave,
							onBlur: _this2.handleNumberPalnProgressSave,
							value: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
						})
					)),
					' %'
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children,
					'%'
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
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber, {
						min: 0,
						max: 100
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children,
					'%'
				);
			}
		}, _temp), _possibleConstructorReturn(_this2, _ret);
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

/*
* 编辑table
* */


var EditableTable = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
	_inherits(EditableTable, _React$Component2);

	function EditableTable(props) {
		_classCallCheck(this, EditableTable);

		var _this3 = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

		_this3.getPositionList = function () {
			var hash = window.location.hash;
			var projectId = hash.split("projectId=")[1];
			if (projectId === undefined) {
				return;
			} else {
				_this3.store.getDailyObjList({
					"dailyId": projectId,
					"type": 0
				}).then(function (res) {
					_this3.store.positionList = res;
				});
			}
		};

		_this3.getProductCategoryList = function (record, value) {
			var positionList = _this3.store.positionList;

			var selectedItem = positionList.filter(function (item) {
				return item.id === value;
			});
			if (selectedItem.length > 0) {
				_this3.store.getDailyObjList({
					"dailyId": value,
					"type": 1
				}).then(function (res) {
					_this3.store.productCategoryList = res;
					if (record["positionId"] == selectedItem[0].id) {
						_this3.handleSave(Object.assign(record, { "position": selectedItem[0].name, "positionId": selectedItem[0].id, "productCategoryList": res }));
					} else {
						// 切换清空
						_this3.handleSave(Object.assign(record, { "position": selectedItem[0].name, "positionId": selectedItem[0].id, "productCategoryList": res,
							productDetail: "", planBeginTime: null, planEndTime: null, palnProgress: 0, actualProgress: 0
						}));
					}
				});
			} else {
				_this3.handleSave(Object.assign(record, { "position": value, "positionId": "", "productCategoryList": [] }));
			}
		};

		_this3.getProductDetailList = function (value, record) {
			var projectDetail = _this3.store.projectDetail;

			_this3.store.getDailyContentDetailList({
				"dailyId": value,
				"type": record['type'] === 1 ? 0 : 1 //record 中的type 1 表示今日，这的type0，表示今日，1是明日...
			}).then(function (res) {
				if (res.length > 0) {
					var selectedItem = record['productCategoryList'].filter(function (item) {
						return item.id === value;
					});
					_this3.handleSave(Object.assign(record, { "productCategory": selectedItem[0].name, "productCategoryId": selectedItem[0].id, "productDetailList": res }));
					if (record['type'] === 1) {
						_this3.store.getDailyMaterialList({ "dailyId": projectDetail.id, "dcs": res }).then(function (res) {
							_this3.store.dailyMaterialList = res;
						});
					}
				} else {
					_this3.handleSave(Object.assign(record, { "productCategory": value, "productCategoryId": "", "productDetailList": [] }));
				}
			});
		};

		_this3.handleDelete = function (record) {
			var id = record.id,
			    key = record.key;

			var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
			_this3.setState({
				dataSource: dataSource.filter(function (item) {
					return item.key !== key;
				})
			}, function () {
				_this3.props.saveData(_this3.state.dataSource, key);
			});
		};

		_this3.handleAdd = function () {
			var _this3$state = _this3.state,
			    dataSource = _this3$state.dataSource,
			    primaryData = _this3$state.primaryData,
			    count = _this3$state.count;
			// const newData = Object.assign(primaryData, {key: count, id:"!"+uuidv4()});

			var newData = Object.assign(primaryData, { key: count });
			_this3.setState({
				dataSource: [].concat(_toConsumableArray(dataSource), [newData]),
				count: count + 1
			}, function () {
				_this3.props.saveData(_this3.state.dataSource);
			});
		};

		_this3.handleSave = function (row) {
			var newData = [].concat(_toConsumableArray(_this3.state.dataSource));
			var index = newData.findIndex(function (item) {
				return row.key === item.key;
			});
			var item = newData[index];
			newData.splice(index, 1, _extends({}, item, row));
			_this3.setState({ dataSource: newData }, function () {
				// 更新保存数据
				_this3.props.saveData(_this3.state.dataSource);
			});
		};

		_this3.saveExpandedRows = function (key) {
			var _this = _this3;
			var keys = _this.state.keys;

			if (keys.indexOf(key) >= 0) {
				keys.splice(keys.indexOf(key), 1);
			} else {
				keys.push(key);
			}
			_this.setState({
				expandedKeys: keys
			}, function () {
				var obj = _defineProperty({}, _this.props.id, keys);
				var expandedKeys = JSON.parse(JSON.stringify(_this.store.expandedKeys));
				_this.store.expandedKeys = Object.assign(expandedKeys, obj);
			});
		};

		_this3.handleView = function (record) {
			_this3.setState({
				subTaskDis: true // 不可编辑
			}, function () {
				_this3.saveExpandedRows(record);
			});
		};

		_this3.onCalac = function (key) {
			_this3.saveExpandedRows(key);
			_this3.store.isEdit = false;
			// 更新tree
			var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
			_this3.store.treeData = utils.updateTreeData(treeData, "update", _this3.state.activeObj);
			_this3.subtask.clearState();
			_this3.setState({
				activeObj: Object.assign({})
			});
		};

		_this3.onRow = function (record) {
			var disabled = _this3.props.disabled;

			var subTasks = record.children == null ? [] : record.children.filter(function (item) {
				return item.treeType === 'subtask';
			});
			var subNumber = subTasks == null || subTasks.length == 0 ? 0 : subTasks.length;
			if (disabled && subNumber > 0) {
				// 详情态
				_this3.handleView(record.id);
			}
		};

		_this3.getDetailWorkByPostionId = function (param) {
			var dailyDate = _this3.props.dailyDate;

			var params = {
				positionId: param,
				dateTime: dailyDate == null || dailyDate == "" ? 0 : (0, _moment2.default)(dailyDate).valueOf()
			};
			return _this3.store.getDetailWorkByPostionId(params);
		};

		_this3.store = _this3.props.store;
		_this3.state = {
			dataSource: [], // 任务数据源
			count: 0, // table的key
			primaryData: {
				"id": "",
				"position": "",
				"positionId": "",
				"productCategory": "",
				"productDetail": "",
				"specifications": "",
				"unit": "",
				"palnProgress": 0,
				"actualProgress": 0,
				"type": _this3.props.tableType === 'today' ? 1 : 0
			}, // 新增任务数据
			expandedKeys: [], // 折叠
			keys: [], // 折叠
			subtasks: [],
			activeObj: {}, // 记录拆解前主任务数据
			activeSub: [], // 记录拆解前子任务数据
			subTaskDis: false // 控制子任务的编辑状态
		};
		return _this3;
	}

	_createClass(EditableTable, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {
			if (nextProps.dataSource != this.props.dataSource) {
				this.setState({
					dataSource: nextProps.dataSource == null || nextProps.dataSource.length == 0 ? [] : nextProps.dataSource.map(function (item, index) {
						return Object.assign(item, { key: index });
					}),
					count: nextProps.dataSource == null || nextProps.dataSource.length == 0 ? 0 : nextProps.dataSource.length,
					primaryData: Object.assign({}, {
						"id": "",
						"position": "",
						"positionId": "",
						"productCategory": "",
						"productDetail": "",
						"specifications": "",
						"unit": "",
						"palnProgress": 0,
						"actualProgress": 0,
						"type": this.props.tableType === 'today' ? 1 : 0
					}) // 新增任务数据
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				dataSource: this.props.dataSource === undefined || this.props.dataSource == null || this.props.dataSource.length == 0 ? [] : this.props.dataSource.map(function (item, index) {
					return Object.assign(item, { "key": index });
				}),
				count: this.props.dataSource === undefined || this.props.dataSource === null || this.props.dataSource.length == 0 ? 0 : this.props.dataSource.length,
				primaryData: Object.assign({}, {
					"id": "",
					"position": "",
					"positionId": "",
					"productCategory": "",
					"productDetail": "",
					"specifications": "",
					"unit": "",
					"palnProgress": 0,
					"actualProgress": 0,
					"type": this.props.tableType === 'today' ? 1 : 0
				}), // 新增任务数据
				expandedKeys: [], // 折叠
				keys: [], // 折叠
				subtasks: []
			});
			this.getPositionList();
		}
	}, {
		key: 'componentWillUnMount',
		value: function componentWillUnMount() {}

		// 删除


		// 新增


		// 保存


		// 折叠效果


		// 查看


		// 取消保存


		// 点击


		// 更新施工任务数据

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    dataSource = _state.dataSource,
			    expandedKeys = _state.expandedKeys;
			var _props2 = this.props,
			    disabled = _props2.disabled,
			    tableType = _props2.tableType,
			    dailyDate = _props2.dailyDate;
			var _store = this.store,
			    positionList = _store.positionList,
			    productCategoryList = _store.productCategoryList,
			    productDetailList = _store.productDetailList;

			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var columnEle = [{
				title: _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u697C\u680B'
					),
					_react2.default.createElement(
						'span',
						{ style: tableType === "today" ? { color: "red" } : { display: "none" } },
						'*'
					)
				),
				dataIndex: 'position',
				width: '14%',
				align: "left",
				editable: !disabled
				/*render: (text, record) => {
    	return (<div
    		id={`${record.id}`}
    		onClick={this.onRow.bind(this, record)}
    		style={{width: '100%', height: '46px', lineHeight: '46px'}}
    		className="pr">
    		{text}
    	</div>);
    }*/
			},
			/*{
   	title: (<span><span>产品类别</span><span style={tableType==="today"?{color:"red"}:{display:"none"}}>*</span></span>),
   	dataIndex: 'productCategory',
   	width: '14%',
   	align: "center",
   	editable: !disabled,
   },*/
			{
				title: _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u65BD\u5DE5\u4EFB\u52A1'
					),
					_react2.default.createElement(
						'span',
						{ style: tableType === "today" ? { color: "red" } : { display: "none" } },
						'*'
					)
				),
				dataIndex: 'productDetail',
				width: '14%',
				editable: !disabled,
				align: "center"
			}, {
				title: '计划开始时间',
				dataIndex: 'planBeginTime',
				width: '130px',
				editable: !disabled,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							id: '' + record.id,
							onClick: _this4.onRow.bind(_this4, record),
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							className: 'pr' },
						text === null || text === 0 || text === "0" ? "" : (0, _moment2.default)(text).format(dateFormat)
					);
				}
			}, {
				title: '计划完成时间',
				dataIndex: 'planEndTime',
				width: '130px',
				editable: !disabled,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this4.onRow.bind(_this4, record)
						},
						text === null || text === 0 || text === "0" ? "" : (0, _moment2.default)(text).format(dateFormat)
					);
				}
			}];
			if (tableType === 'today') {
				columnEle = columnEle.concat([
				/*  {
    title: '实际开始时间',
    dataIndex: 'actualBeginTime',
    width: '130px',
    editable: !disabled,
    align: "center",
    render: (text, record) => {
    	return (<div
    		id={`${record.id}`}
    		onClick={this.onRow.bind(this, record)}
    		style={{width: '100%', height: '46px', lineHeight: '46px'}}
    		className="pr">
    		{text===null || text===0|| text==="0"?"":moment(text).format(dateFormat)}
    	</div>);
    }
    },*/
				{
					title: '计划完成进度',
					dataIndex: 'palnProgress',
					width: '160px',
					editable: !disabled,
					align: "center",
					render: function render(text, record) {
						return _react2.default.createElement(
							'div',
							{
								id: '' + record.id,
								onClick: _this4.onRow.bind(_this4, record),
								style: { width: '100%', height: '46px', lineHeight: '46px' },
								className: 'pr' },
							text,
							'%'
						);
					}
				}, {
					title: _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							'span',
							null,
							'\u5B9E\u9645\u5B8C\u6210\u8FDB\u5EA6'
						),
						_react2.default.createElement(
							'span',
							{ style: tableType === "today" ? { color: "red" } : { display: "none" } },
							'*'
						)
					),
					dataIndex: 'actualProgress',
					width: '160px',
					editable: !disabled,
					align: "center",
					render: function render(text, record) {
						return _react2.default.createElement(
							'div',
							{
								id: '' + record.id,
								onClick: _this4.onRow.bind(_this4, record),
								style: { width: '100%', height: '46px', lineHeight: '46px' },
								className: 'pr' },
							text,
							'%'
						);
					}
				}]);
			}
			if (tableType === 'tomorrow') {

				columnEle = columnEle.concat([{
					title: '计划施工完成进度',
					dataIndex: 'palnProgress',
					width: '160px',
					editable: !disabled,
					align: "center",
					render: function render(text, record) {
						return _react2.default.createElement(
							'div',
							{
								id: '' + record.id,
								onClick: _this4.onRow.bind(_this4, record),
								style: { width: '100%', height: '46px', lineHeight: '46px' },
								className: 'pr' },
							text,
							'%'
						);
					}
				}]);
			}

			var columns = columnEle.map(function (col) {
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
							handleSave: _this4.handleSave,
							handleDelete: _this4.handleDelete,
							getProductCategoryList: _this4.getProductCategoryList,
							getProductDetailList: _this4.getProductDetailList,
							getDetailWorkByPostionId: _this4.getDetailWorkByPostionId,
							positionList: positionList,
							productCategoryList: productCategoryList,
							productDetailList: productDetailList,
							dailyDate: dailyDate,
							tableType: tableType
						};
					}
				});
			});
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_antd.Table, {
					components: components,
					rowClassName: function rowClassName() {
						return 'editable-row';
					},
					className: 'expand_table bpm_table',
					bordered: false,
					dataSource: dataSource,
					columns: columns,
					pagination: false,
					size: "middle",
					expandRowByClick: true,
					expandIconAsCell: false,
					expandIconColumnIndex: -1,
					expandedRowKeys: expandedKeys,
					rowKey: function rowKey(row) {
						return row.id;
					}
				}),
				disabled ? null : _react2.default.createElement(_antd.Icon, { onClick: this.handleAdd, style: { margin: '16px 0', color: '#4BA4BE', fontSize: '15px' },
					type: 'plus-circle' })
			);
		}
	}]);

	return EditableTable;
}(_react2.default.Component)) || _class2;

exports.default = EditableTable;

/***/ }),

/***/ 1784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _class2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _uuid = __webpack_require__(79);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * Table组件
                                                                                                                                                                                                                             * */


var Option = _antd.Select.Option;

var dateFormat = 'YYYY-MM-DD';

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

/*自定义编辑组件*/

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
			editing: true, //false,
			userIds: []
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
				handleSave(_extends({}, record, values));
			});
		}, _this2.onBlur = function () {
			//this.toggleEdit();
		}, _this2.handlePositionChange = function (value) {
			var _this2$props2 = _this2.props,
			    record = _this2$props2.record,
			    handleSave = _this2$props2.handleSave;

			_this2.props.getProductCategoryList(record, value);
		}, _this2.handleProductCategoryChange = function (value) {
			var _this2$props3 = _this2.props,
			    record = _this2$props3.record,
			    handleSave = _this2$props3.handleSave;

			_this2.props.getDailyTomorrowMaterial(value, record);
		}, _this2.handleProductDetailChange = function (value) {
			var _this2$props4 = _this2.props,
			    record = _this2$props4.record,
			    handleSave = _this2$props4.handleSave;

			var selectedDetailItem = record['productDetailList'].filter(function (item) {
				return item.productDetailId === value;
			});
			if (selectedDetailItem.length > 0) {
				handleSave(Object.assign(record, {
					"planBeginTime": selectedDetailItem[0].planBeginTime,
					"planEndTime": selectedDetailItem[0].planEndTime,
					"productDetail": selectedDetailItem[0].productDetail,
					"productDetailId": selectedDetailItem[0].productDetailId,
					"showName": selectedDetailItem[0].showName,
					"tomorrowProgress": selectedDetailItem[0].tomorrowProgress
				}));
			} else {
				handleSave(Object.assign(record, {
					"planBeginTime": 0,
					"planEndTime": 0,
					"productDetail": "",
					"productDetailId": "",
					"showName": value,
					"tomorrowProgress": 0
				}));
			}
		}, _this2.handleNumberTomorrowProgressSave = function (e) {
			var _this2$props5 = _this2.props,
			    record = _this2$props5.record,
			    handleSave = _this2$props5.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (error) {
					return;
				}
				handleSave(Object.assign(record, { "tomorrowProgress": values.tomorrowProgress }));
			});
		}, _this2.renderOption = function (item) {
			return _react2.default.createElement(
				Option,
				{ key: item.id, text: item.name },
				item.name
			);
		}, _this2.renderOption2 = function (item, index) {
			return _react2.default.createElement(
				Option,
				{ key: item.showName, text: item.showName },
				item.showName
			);
		}, _this2.renderCell = function (form) {
			_this2.form = form;
			var _this2$props6 = _this2.props,
			    children = _this2$props6.children,
			    dataIndex = _this2$props6.dataIndex,
			    record = _this2$props6.record,
			    title = _this2$props6.title,
			    handleDelete = _this2$props6.handleDelete,
			    positionList = _this2$props6.positionList;
			var editing = _this2.state.editing;

			if (dataIndex == 'position') {
				// 部位
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record['positionId'] == null ? undefined : record['positionId']
					})(_react2.default.createElement(
						'div',
						{ className: 'w clearfix' },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
									return handleDelete(record);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									width: '30px',
									color: '#f17e7e',
									fontSize: '15px'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(_antd.AutoComplete, {
							defaultValue: record[dataIndex],
							dataSource: positionList.map(_this2.renderOption),
							placeholder: '请选择',
							style: { width: "140px" },
							onChange: _this2.handlePositionChange
						})
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
								width: '30px',
								color: '#F17E7E',
								fontSize: '15px'
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
							},
							onClick: _this2.toggleEdit
						},
						children
					)
				);
			} else if (dataIndex == 'productCategory') {
				// 相同列
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record['productCategoryId'] == null ? undefined : record['productCategoryId'] == "" ? record['productCategory'] : record['productCategoryId']
					})(_react2.default.createElement(_antd.AutoComplete, {
						defaultValue: record[dataIndex],
						dataSource: Array.isArray(record['productCategoryList']) ? record['productCategoryList'].map(_this2.renderOption) : [],
						placeholder: '请选择',
						style: { width: "140px" },
						onChange: _this2.handleProductCategoryChange
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					record[dataIndex] == "" || record[dataIndex] == null ? "--" : record[dataIndex]
				);
			} else if (dataIndex == 'productDetail') {
				// 相同列
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record['productDetailId'] == null ? undefined : record['productDetailId'] == "" ? record['showName'] : record['productDetailId']
					})(_react2.default.createElement(_antd.AutoComplete, {
						defaultValue: record[dataIndex],
						dataSource: Array.isArray(record['productDetailList']) ? record['productDetailList'].map(_this2.renderOption2) : [],
						placeholder: '请选择',
						style: { width: "140px" },
						onChange: _this2.handleProductDetailChange
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' }
					},
					record[dataIndex] == "" || record[dataIndex] == null ? "--" : record[dataIndex]
				);
			} else if (dataIndex == 'planBeginTime' || dataIndex == 'planEndTime') {
				// 相同列
				return editing && false ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
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
						onPressEnter: _this2.save,
						onBlur: _this2.save,
						placeholder: '\u8BF7\u8F93\u5165'
					}))
				) : _react2.default.createElement(
					'div',
					{
						style: { minHeight: '31px' }
					},
					record[dataIndex] == "" || record[dataIndex] == null ? "--" : (0, _moment2.default)(record[dataIndex]).format(dateFormat)
				);
			} else if (dataIndex == 'tomorrowProgress') {
				// 计划完成比例
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber, {
						min: 0,
						max: 100,
						ref: function ref(node) {
							return _this2.input = node;
						},
						onPressEnter: _this2.handleNumberTomorrowProgressSave,
						onBlur: _this2.handleNumberTomorrowProgressSave
					})),
					'%'
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children,
					'%'
				);
			} else {
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ className: 'tfc' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? 0 : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber, {
						min: 0,
						max: 100
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children,
					'%'
				);
			}
		}, _temp), _possibleConstructorReturn(_this2, _ret);
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

/*
* 编辑table
* */


var EditableTableTomorrowMaterial = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
	_inherits(EditableTableTomorrowMaterial, _React$Component2);

	function EditableTableTomorrowMaterial(props) {
		_classCallCheck(this, EditableTableTomorrowMaterial);

		var _this3 = _possibleConstructorReturn(this, (EditableTableTomorrowMaterial.__proto__ || Object.getPrototypeOf(EditableTableTomorrowMaterial)).call(this, props));

		_this3.getPositionList = function () {
			var hash = window.location.hash;
			var projectId = hash.split("projectId=")[1];
			if (projectId === undefined) {
				return;
			} else {
				_this3.store.getDailyObjList({
					"dailyId": projectId,
					"type": 0
				}).then(function (res) {
					_this3.store.positionList = res;
				});
			}
		};

		_this3.getProductCategoryList = function (record, value) {
			var positionList = _this3.store.positionList;

			var selectedItem = positionList.filter(function (item) {
				return item.id === value;
			});
			if (selectedItem.length > 0) {
				_this3.store.getDailyObjList({
					"dailyId": value,
					"type": 1
				}).then(function (res) {
					_this3.store.productCategoryList = res;
					_this3.handleSave(Object.assign(record, { "position": selectedItem[0].name, "positionId": selectedItem[0].id, "productCategoryList": res }));
				});
			} else {
				_this3.handleSave(Object.assign(record, { "position": value, "positionId": "", "productCategoryList": [] }));
			}
		};

		_this3.getProductDetailList = function (productCategoryId, record) {
			_this3.store.getDailyContentDetailList({
				"dailyId": productCategoryId,
				"type": record['type'] === 1 ? 0 : 1 //record 中的type 1 表示今日，这的type0，表示今日，1是明日...
			}).then(function (res) {
				_this3.store.productDetailList = res;
			});
		};

		_this3.getDailyTomorrowMaterial = function (value, record) {
			_this3.store.getDailyTomorrowMaterial({
				"categoryId": value
			}).then(function (res) {
				if (res.length > 0) {
					var selectedItem = record['productCategoryList'].filter(function (item) {
						return item.id === value;
					});
					_this3.handleSave(Object.assign(record, { "productCategory": selectedItem[0].name, "productCategoryId": selectedItem[0].id, "productDetailList": res }));
				} else {
					_this3.handleSave(Object.assign(record, { "productCategory": value, "productCategoryId": "", "productDetailList": [] }));
				}
			});
		};

		_this3.handleDelete = function (record) {
			var id = record.id,
			    key = record.key;

			var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
			_this3.setState({
				dataSource: dataSource.filter(function (item) {
					return item.key !== key;
				})
			}, function () {
				_this3.props.saveData(_this3.state.dataSource, key);
			});
		};

		_this3.handleAdd = function () {
			var _this3$state = _this3.state,
			    dataSource = _this3$state.dataSource,
			    primaryData = _this3$state.primaryData,
			    count = _this3$state.count;
			// const newData = Object.assign(primaryData, {key: count, id:"!"+uuidv4()});

			var newData = Object.assign(primaryData, { key: count });
			_this3.setState({
				dataSource: [].concat(_toConsumableArray(dataSource), [newData]),
				count: count + 1
			}, function () {
				_this3.props.saveData(_this3.state.dataSource);
			});
		};

		_this3.handleSave = function (row) {
			var newData = [].concat(_toConsumableArray(_this3.state.dataSource));
			var index = newData.findIndex(function (item) {
				return row.key === item.key;
			});
			var item = newData[index];
			newData.splice(index, 1, _extends({}, item, row));
			_this3.setState({ dataSource: newData }, function () {
				// 更新保存数据
				_this3.props.saveData(_this3.state.dataSource);
			});
		};

		_this3.saveExpandedRows = function (key) {
			var _this = _this3;
			var keys = _this.state.keys;

			if (keys.indexOf(key) >= 0) {
				keys.splice(keys.indexOf(key), 1);
			} else {
				keys.push(key);
			}
			_this.setState({
				expandedKeys: keys
			}, function () {
				var obj = _defineProperty({}, _this.props.id, keys);
				var expandedKeys = JSON.parse(JSON.stringify(_this.store.expandedKeys));
				_this.store.expandedKeys = Object.assign(expandedKeys, obj);
			});
		};

		_this3.handleView = function (record) {
			_this3.setState({
				subTaskDis: true // 不可编辑
			}, function () {
				_this3.saveExpandedRows(record);
			});
		};

		_this3.onRow = function (record) {
			var disabled = _this3.props.disabled;

			var subTasks = record.children == null ? [] : record.children.filter(function (item) {
				return item.treeType === 'subtask';
			});
			var subNumber = subTasks == null || subTasks.length == 0 ? 0 : subTasks.length;
			if (disabled && subNumber > 0) {
				// 详情态
				_this3.handleView(record.id);
			}
		};

		_this3.store = _this3.props.store;
		_this3.state = {
			dataSource: [], // 任务数据源
			count: 0, // table的key
			primaryData: {
				"id": "",
				"dailyId": "",
				"projectId": "",
				"materialId": "",
				"position": "",
				"productCategory": "",
				"productDetail": "",
				"planBeginTime": 0,
				"planEndTime": 0,
				"tomorrowProgress": 0,
				"name": "",
				"showName": ""
			}, // 新增任务数据
			expandedKeys: [], // 折叠
			keys: [], // 折叠
			subtasks: [],
			activeObj: {}, // 记录拆解前主任务数据
			activeSub: [], // 记录拆解前子任务数据
			subTaskDis: false // 控制子任务的编辑状态
		};
		return _this3;
	}

	_createClass(EditableTableTomorrowMaterial, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {
			if (nextProps.dataSource != this.props.dataSource) {
				this.setState({
					dataSource: nextProps.dataSource == null || nextProps.dataSource.length == 0 ? [] : nextProps.dataSource.map(function (item, index) {
						return Object.assign(item, { key: index });
					}),
					count: nextProps.dataSource == null || nextProps.dataSource.length == 0 ? 0 : nextProps.dataSource.length,
					primaryData: Object.assign({}, {
						"id": "",
						"dailyId": "",
						"projectId": "",
						"materialId": "",
						"position": "",
						"productCategory": "",
						"productDetail": "",
						"planBeginTime": 0,
						"planEndTime": 0,
						"tomorrowProgress": 0,
						"name": "",
						"showName": ""
					}) // 新增任务数据
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				dataSource: this.props.dataSource === undefined || this.props.dataSource == null || this.props.dataSource.length == 0 ? [] : this.props.dataSource.map(function (item, index) {
					return Object.assign(item, { "key": index });
				}),
				count: this.props.dataSource === undefined || this.props.dataSource === null || this.props.dataSource.length == 0 ? 0 : this.props.dataSource.length,
				primaryData: Object.assign({}, {
					"id": "",
					"dailyId": "",
					"projectId": "",
					"materialId": "",
					"position": "",
					"productCategory": "",
					"productDetail": "",
					"planBeginTime": 0,
					"planEndTime": 0,
					"tomorrowProgress": 0,
					"name": "",
					"showName": ""
				}), // 新增任务数据
				expandedKeys: [], // 折叠
				keys: [], // 折叠
				subtasks: []
			});
			this.getPositionList();
		}
	}, {
		key: 'componentWillUnMount',
		value: function componentWillUnMount() {}

		// 删除


		// 新增


		// 保存


		// 折叠效果


		// 查看


		// 点击

	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    dataSource = _state.dataSource,
			    expandedKeys = _state.expandedKeys;
			var disabled = this.props.disabled;
			var positionList = this.store.positionList;

			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var columnEle = [{
				title: '部位',
				dataIndex: 'position',
				width: '14%',
				align: "left",
				editable: !disabled
				/*render: (text, record) => {
    	return (<div
    		id={`${record.id}`}
    		onClick={this.onRow.bind(this, record)}
    		style={{width: '100%', height: '46px', lineHeight: '46px'}}
    		className="pr">
    		{text}
    	</div>);
    }*/
			}, {
				title: '产品类别',
				dataIndex: 'productCategory',
				width: '14%',
				align: "center",
				editable: !disabled
				/*render: (text, record) => {
    	return (<div
    		id={`${record.id}`}
    		onClick={this.onRow.bind(this, record)}
    		style={{width: '100%', height: '46px', lineHeight: '46px'}}
    		className="pr">
    		{text}
    	</div>);
    }*/
			}, {
				title: '产品明细',
				dataIndex: 'productDetail',
				width: '14%',
				editable: !disabled,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							id: '' + record.id,
							onClick: _this4.onRow.bind(_this4, record),
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							className: 'pr' },
						record['showName'] !== null ? record['showName'] : ''
					);
				}
			}, {
				title: '计划发车时间',
				dataIndex: 'planBeginTime',
				width: '130px',
				editable: !disabled,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							id: '' + record.id,
							onClick: _this4.onRow.bind(_this4, record),
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							className: 'pr' },
						text === null || text === 0 || text === "0" ? "" : (0, _moment2.default)(text).format(dateFormat)
					);
				}
			}, {
				title: '计划到货时间',
				dataIndex: 'planEndTime',
				width: '130px',
				editable: !disabled,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this4.onRow.bind(_this4, record)
						},
						text === null || text === 0 || text === "0" ? "" : (0, _moment2.default)(text).format(dateFormat)
					);
				}
			}, {
				title: '明日计划进展',
				dataIndex: 'tomorrowProgress',
				width: '14%',
				editable: !disabled,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							id: '' + record.id,
							onClick: _this4.onRow.bind(_this4, record),
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							className: 'pr' },
						text,
						'%'
					);
				}
			}];
			var columns = columnEle.map(function (col) {
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
							handleSave: _this4.handleSave,
							handleDelete: _this4.handleDelete,
							getProductCategoryList: _this4.getProductCategoryList,
							getProductDetailList: _this4.getProductDetailList,
							getDailyTomorrowMaterial: _this4.getDailyTomorrowMaterial,
							positionList: mobx.toJS(positionList)
						};
					}
				});
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_antd.Table, {
					components: components,
					rowClassName: function rowClassName() {
						return 'editable-row';
					},
					className: 'expand_table bpm_table',
					bordered: false,
					dataSource: dataSource,
					columns: columns,
					pagination: false,
					size: "middle",
					expandRowByClick: true,
					expandIconAsCell: false,
					expandIconColumnIndex: -1,
					expandedRowKeys: expandedKeys,
					rowKey: function rowKey(row) {
						return row.id;
					}
				}),
				disabled ? null : _react2.default.createElement(_antd.Icon, { onClick: this.handleAdd, style: { margin: '16px 0', color: '#4BA4BE', fontSize: '15px' },
					type: 'plus-circle' })
			);
		}
	}]);

	return EditableTableTomorrowMaterial;
}(_react2.default.Component)) || _class2;

exports.default = EditableTableTomorrowMaterial;

/***/ })

});
//# sourceMappingURL=39-afa7d4b4bae6ff2924e9.1629092961041.js.map