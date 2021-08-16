webpackJsonp([17],{

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class; /*
                         * 项目管理 新建项目
                         * dangw@glodon.com
                         * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _WortileCommon = __webpack_require__(2093);

var _WortileCommon2 = _interopRequireDefault(_WortileCommon);

var _ProjectDesign = __webpack_require__(2091);

var _ProjectDesign2 = _interopRequireDefault(_ProjectDesign);

var _ProgressList = __webpack_require__(1576);

var _ProgressList2 = _interopRequireDefault(_ProgressList);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _ItemInfoNew = __webpack_require__(1620);

var _ItemInfoNew2 = _interopRequireDefault(_ItemInfoNew);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkAdd = (_dec = _antd.Form.create(), _dec2 = (0, _mobxReact.inject)('WorktileStore'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(WorkAdd, _React$Component);

	function WorkAdd(props) {
		_classCallCheck(this, WorkAdd);

		var _this = _possibleConstructorReturn(this, (WorkAdd.__proto__ || Object.getPrototypeOf(WorkAdd)).call(this, props));

		_this.init = function () {
			_this.store.projectId = "";
			_this.store.projectName = "";
			_this.store.currentStageId = "";
			_this.store.itemObj = { // 项目信息
				"id": "",
				"pid": "",
				"projectId": "",
				"treeType": "stage",
				"masters": null,
				"children": [{
					"id": "",
					"pid": "",
					"projectId": "",
					"code": "",
					"name": "",
					"masters": [],
					"customer": "",
					"productType": [],
					"address": "",
					"description": "",
					"milepost": "",
					"builtArea": "",
					"totalCost": "",
					"builtType": "",
					"beginTime": null,
					"endTime": null,
					"constructionUnit": "",
					"constructionQualification": "",
					"partyaUnit": "",
					"unitQualification": "",
					"declarationAwards": "",
					"awardGrade": "",
					"buySoftware": "",
					"usageSituation": "",
					"background": "",
					"temporaryDecision": "",
					"temporaryManagerDesire": "",
					"temporaryRequirement": "",
					"temporaryBudgetStandard": "",
					"temporaryTotalAcceptability": "",
					"temporaryTotalRange": "",
					"temporaryBudget": "",
					"temporaryPriceDesire": "",
					"temporaryEstimatePrice": "",
					"temporaryManagersNumber": "",
					"temporaryWorkersNumber": "",
					"temporaryBeginTime": null,
					"temporaryEndTime": null,
					"temporaryBudgetEvaluation": "",
					"treeType": "projectinfo"
				}, {
					"id": "",
					"pid": "",
					"projectId": "",
					"treeType": "attc",
					"masters": null,
					"children": [],
					"name": null
				}],
				"stageName": "项目信息"
			};
		};

		_this.saveProject = function (params) {
			_this.store.saveProject(params).then(function (res) {
				if (res.id !== null) {
					// 查询树
					_antd.message.success("保存成功");
					_this.child.onChangeVis();
					_this.child.callback("1");
					_this.store.projectId = res.id;
					_this.store.projectName = res.name;
					// 保存成功，获取树数据
					_this.store.getTree(res.id).then(function (mes) {
						_this.store.treeData = Object.assign({}, mes); // 前端维护的树
						// 项目信息 数据
						_this.store.itemObj = Object.assign({}, mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName == "项目信息";
						})[0]);
						// 方案设计 数据
						var proDesign = Object.assign({}, mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName == "方案设计";
						})[0]);
						//（招投标、合同签订、实施过程、交付验收、发票验收）数据
						_this.store.commonData = Object.assign([], mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName !== "项目信息" && item.stageName !== "方案设计";
						}));
						// 维护状态公共组件
						var commonData = JSON.parse(JSON.stringify(_this.store.commonData));
						var obj = {};
						commonData.map(function (v) {
							obj[v.id] = true;
						});
						_this.store.comStates = Object.assign({}, obj);
						// 更新步骤
						_this.store.getStageTree();
						// 方案设计statgeId
						_this.store.proDesign = proDesign;
						_this.store.oldStageId = proDesign.id;
						_this.store.currentStageId = proDesign.id;
						// 方案设计stage列表
						_this.store.getStageList();
					});
				} else {
					_antd.message.error("保存失败");
				}
			});
		};

		_this.updateTree = function () {
			var projectId = _this.store.projectId;
			_this.store.getTree(projectId).then(function (mes) {
				// 项目信息 数据
				_this.store.itemObj = Object.assign({}, mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName == "项目信息";
				})[0]);
				// 方案设计 数据
				var proDesign = Object.assign({}, mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName == "方案设计";
				})[0]);
				//（招投标、合同签订、实施过程、交付验收、发票验收）数据
				var commonData = Object.assign([], mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName !== "项目信息" && item.stageName !== "方案设计";
				}));
				_this.store.commonData = commonData;
				_this.store.proDesign = proDesign;
			});
		};

		_this.saveNodes = function (params) {
			_this.store.saveNodes(params).then(function (res) {
				if (res) {
					_antd.message.success("保存成功");
					// 更新tree
					var treeData = JSON.parse(JSON.stringify(_this.store.treeData));
					_this.store.treeData = utils.updateTreeData(treeData, "update", res);
					// 更新步骤
					_this.store.getStageTree();
					_this.store.getMyTaskCount();
				} else {
					_antd.message.error("保存失败");
				}
			});
		};

		_this.saveStage = function (params) {
			if (params && params.projectId != null) _this.store.projectId = params['projectId'];
			_this.store.saveStage(params).then(function (res) {
				if (res) {
					_antd.message.success("保存阶段成功");
					_this.updateStateItem("design", { isEdit: true });
					// 更新步骤
					_this.store.getStageTree();
				} else {
					_antd.message.error("保存阶段失败");
				}
			});
		};

		_this.updateState = function (params) {
			_this.store.proDesign.masters = Object.assign([], params);
		};

		_this.scrollToAnchor = function (anchorName) {
			if (anchorName) {
				var anchorElement = document.querySelector("#" + anchorName);
				if (anchorElement) {
					anchorElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
				}
			}
		};

		_this.updateStateItem = function (type, data) {
			_this.setState(_defineProperty({}, type, Object.assign({}, data)));
		};

		_this.saveAttachment = function (params) {
			_this.store.saveAttachments(params).then(function (res) {
				if (res) {
					_antd.message.success("附件保存成功");
					// 更新tree
					var treeData = JSON.parse(JSON.stringify(_this.store.treeData));
					_this.store.treeData = utils.updateTreeData(treeData, "updateChildren", res);
					// 更新步骤
					_this.store.getStageTree();
				} else {
					_antd.message.error("附件保存失败");
				}
			});
		};

		_this.delNode = function (param) {
			_this.store.delNode(param).then(function (res) {
				if (res) {
					_antd.message.success("附件删除成功");
				} else {
					_antd.message.error("附件删除失败");
				}
			});
		};

		_this.onRef = function (ref) {
			_this.child = ref;
		};

		_this.updateCount = function (type, count) {
			_this.setState(_defineProperty({}, type, count));
		};

		_this.store = _this.props.WorktileStore;
		_this.state = {
			item: { // 项目信息
				isEdit: false
			},
			design: { // 方案设计
				isEdit: false
			},
			count: 1
		};
		mobx.autorun(function () {
			_this.store.commonData = _this.store.getcommonData;
			_this.store.proDesign = _this.store.getproDesign;
		});
		return _this;
	}

	_createClass(WorkAdd, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.init();
			// 初始化获取步骤进度信息
			this.store.getStageTree();
			// 获取人员
			//this.store.getUserInfoListByRoleCode();
			// 获取大文件上传sts
			this.store.getSts();
			//更新我的任务数
			this.store.getMyTaskCount();
		}

		// 初始化


		// 保存项目信息


		// updateTree


		// 保存节点


		// 保存阶段


		// 锚点定位


		// 更新


		// 保存附件


		// 删除附件


		// 更新子组件状态

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _store = this.store,
			    ossData = _store.ossData,
			    comStates = _store.comStates,
			    listData = _store.listData,
			    itemObj = _store.itemObj,
			    proDesign = _store.proDesign,
			    commonData = _store.commonData,
			    projectId = _store.projectId,
			    projectName = _store.projectName;
			var count = this.state.count;

			var isShow = projectId == null || projectId == "" ? true : false;
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
							{ href: "#/bpm/progresslist" },
							'\u9879\u76EE\u770B\u677F'
						),
						_react2.default.createElement(
							_antd.Breadcrumb.Item,
							null,
							projectName || "新增项目"
						)
					)
				),
				_react2.default.createElement(_ProgressList2.default, {
					listData: mobx.toJS(listData),
					store: this.store,
					scrollToAnchor: this.scrollToAnchor,
					updateTree: this.updateTree,
					isShow: isShow
				}),
				_react2.default.createElement(_ItemInfoNew2.default, {
					itemObj: mobx.toJS(itemObj),
					saveProject: this.saveProject,
					projectId: projectId,
					projectType: 1,
					onRef: this.onRef,
					state: this.store.state,
					saveAttachment: this.saveAttachment,
					delNode: this.delNode,
					ossData: mobx.toJS(ossData),
					hidden: true,
					count: count,
					updateCount: this.updateCount
				}),
				_react2.default.createElement(_ProjectDesign2.default, _extends({
					proDesign: mobx.toJS(proDesign),
					saveNodes: this.saveNodes,
					saveStage: this.saveStage,
					updateState: this.updateState,
					store: this.store,
					updateStateItem: this.updateStateItem,
					saveAttachment: this.saveAttachment,
					delNode: this.delNode,
					oss: mobx.toJS(ossData)
				}, this.state.design)),
				mobx.toJS(commonData).length > 0 && mobx.toJS(commonData).map(function (item, index) {
					return _react2.default.createElement(_WortileCommon2.default, {
						key: 'card_' + index,
						id: item.id,
						rowIndex: "items" + (index + 2),
						store: _this2.store,
						treeData: item,
						saveNodes: _this2.saveNodes,
						saveAttachment: _this2.saveAttachment,
						delNode: _this2.delNode,
						oss: mobx.toJS(ossData),
						disabled: mobx.toJS(comStates)[item.id] || true
					});
				})
			);
		}
	}]);

	return WorkAdd;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = WorkAdd;

/***/ }),

/***/ 1520:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 附件组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */


function getBase64(img, callback) {
	var reader = new FileReader();
	reader.addEventListener('load', function () {
		return callback(reader.result);
	});
	reader.readAsDataURL(img);
}

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

var MyUpload = function (_React$Component) {
	_inherits(MyUpload, _React$Component);

	function MyUpload(props) {
		_classCallCheck(this, MyUpload);

		var _this = _possibleConstructorReturn(this, (MyUpload.__proto__ || Object.getPrototypeOf(MyUpload)).call(this, props));

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
				var array = JSON.parse(JSON.stringify([].concat(_toConsumableArray(oldFileList), _toConsumableArray(newFileList))));
				var arr = [];
				array.length && array.map(function (item, index) {
					arr.push({
						fileId: item.fileId,
						fileName: item.fileName,
						filePath: item.filePath,
						pid: _this.props.pid,
						projectId: _this.props.projectId,
						id: item.id
					});
				});
				_this.props.saveAttachment(arr);
			} else if (status === "removed") {
				// 删除
				var id = info.file.id;
				if (id !== "" || id !== null) {
					// 删除已有的
					_this.props.delNode(id);
				}
			}
			_this.setState({
				fileList: [].concat(_toConsumableArray(oldFileList), _toConsumableArray(newFileList))
			});
		};

		_this.beforeUpload = function (file) {
			var isJPG = file.type === 'image/jpeg';
			if (false) {
				_antd.message.error('You can only upload JPG file!');
			}
			var isLt2M = file.size / 1024 / 1024 < 2000;
			if (!isLt2M) {
				_antd.message.error('Image must smaller than 2MB!');
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = function () {
				// 使用ossupload覆盖默认的上传方法
				UploadToOss(_this, '上传路径oss配置信息', file).then(function (data) {
					return data;
				});
			};
			return false; // 不调用默认的上传方法
		};

		_this.state = {
			fileList: _this.props.fileList,
			loading: false,
			token: {
				access_key_id: '', //'STS.NUKFXpmcLY7gZeyDE7jMW6M5v', // oss的key_id
				access_key_secret: '', //'5S1Ky3Beef6ZtXxTRPBMPvqV9ouTWkvMTmGhffJqeLK8', // oss的secret
				stsToken: '', //'CAISgwN1q6Ft5B2yfSjIr5b+DeLEgLxt7vWMWEPIoEViZsJ72YielDz2IH1IfXdtBuAasvU3lGtZ6/8dlol1QJhdclfYdo176NFd/AKjYozO/cWx7K0Zjpa+X2OUDkZuMwFigKOrIunGc9KBNnpq/00amMlSHFfPdlihNoLzkPwDR98LXw6+QCNbDdNNXGVLo9MbMn2jBJTVNQXx0EbdCEd0ty12i2509cbaxdaHuD7fl0HCw/UJvOaBJYO/PeBmO41jdsqxwO1uf7Dd7TZU7BFGlsJxl7cWwSrbmdufDlJNgXCBKPGG3dBzCwV7a6MmYYImysLxjvploOfeup3qwhJWR4FvXj/YWZqrzbmEepqgPc1rcq3gaTafkIKfN5/xsWFfaHkAZgRRYIhjeD0iGR0qTjOdaI3foQCWPVn6FPTUifFvgcMkkG+Fp4TaewK9JJyCyjsdN5MGaEclCgUbx2SJcNVdLlAVLQ44V+rJHN0jN0ED8Pzy0grJTWh70mpHAjgJzUQydssagAGXmVE/ez8kLqCrzcFDMBg0c51Wv7sCHrBF1JJ1jhjZ39U8mUKpdznlIoOk5Jxav599Kdj4ZsNH8D4nshRzAZiZ1Qi5a+PsMWpet0mOIu/fntu5xezXssVECv68Pg8tos5Rf/Tcs1L8axm0WIxk2PFOtH59IPj8RhevwczGTOmCaQ\u003d\u003d',
				region: 'oss-cn-beijing', // oss的region
				bucket: 'xinlj', // oss的bucket
				OSS_ENDPOINT: 'oss-cn-beijing.aliyuncs.com' // 自己oss服务器的配置信息
			},
			host: 'https://xinlj.oss-cn-beijing.aliyuncs.com/' // 阿里云host
		};
		return _this;
	}

	_createClass(MyUpload, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (JSON.stringify(nextProps.fileList) != JSON.stringify(this.props.fileList)) {
				this.setState({
					fileList: nextProps.fileList
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
						access_key_id: this.props.ossData.accessKeyId, // oss的key_id
						access_key_secret: this.props.ossData.accessKeySecret, // oss的secret
						stsToken: this.props.ossData.securityToken
					})
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var fileList = this.state.fileList;

			var props = {
				name: 'file',
				multiple: this.props.multiple == undefined ? true : this.props.multiple,
				onChange: this.handleChange,
				beforeUpload: this.beforeUpload,
				listType: 'text',
				className: 'upload-list-inline',
				disabled: this.props.disabled
			};
			return _react2.default.createElement(
				_antd.Upload,
				_extends({}, props, { fileList: fileList }),
				fileList.length >= 1 && this.props.multiple == false ? null : _react2.default.createElement(_antd.Icon, { style: { fontSize: '25px', color: '#53B3E5' }, type: 'cloud-upload' })
			);
		}
	}]);

	return MyUpload;
}(_react2.default.Component);

exports.default = MyUpload;

/***/ }),

/***/ 1526:
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

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _uuid = __webpack_require__(79);

var _PersonAdd = __webpack_require__(94);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             * 任务拆分组件
                                                                                                                                                                                                                             * dangw@glodon.com
                                                                                                                                                                                                                             * */


var EditableContext = _react2.default.createContext();
var EditableRow = function EditableRow(_ref) {
	var form = _ref.form,
	    index = _ref.index,
	    props = _objectWithoutProperties(_ref, ["form", "index"]);

	return _react2.default.createElement(
		EditableContext.Provider,
		{ value: form },
		_react2.default.createElement("tr", props)
	);
};
var EditableFormRow = _antd.Form.create()(EditableRow);
var openNotificationWithIcon = function openNotificationWithIcon(type) {
	_antd.notification[type]({
		message: '已用工时不能大于预估工时',
		description: '若大于，请先调整预估工时',
		placement: 'bottomRight'
	});
};

// 可编辑表格

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
				delete values["beginTime"];
				delete values["endTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveTime = function (e) {
			var _this2$props2 = _this2.props,
			    record = _this2$props2.record,
			    handleSave = _this2$props2.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (error && error[e.currentTarget.id]) {
					return;
				}
				if (e !== null && e !== "") {
					if (Number(e) > Number(values.totalHours)) {
						openNotificationWithIcon('warning');
						return false;
					}
				}
				delete values["beginTime"];
				delete values["endTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate = function (date, dateString) {
			var _this2$props3 = _this2.props,
			    record = _this2$props3.record,
			    handleSave = _this2$props3.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('beginTime')) {
					values["beginTime"] = (0, _moment2.default)(dateString, 'YYYY-MM-DD').valueOf();
				}
				delete values["endTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate2 = function (date, dateString) {
			var _this2$props4 = _this2.props,
			    record = _this2$props4.record,
			    handleSave = _this2$props4.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('endTime')) {
					values["endTime"] = (0, _moment2.default)(dateString, 'YYYY-MM-DD').valueOf();
				}
				delete values["beginTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.onBlur = function () {
			//this.toggleEdit();
		}, _this2.handleSelChange = function (val, e) {
			var _this2$props5 = _this2.props,
			    record = _this2$props5.record,
			    handleSave = _this2$props5.handleSave;

			var data = {};
			var userIds = void 0;
			if (e.length) {
				userIds = e.map(function (item) {
					return { userId: item.props.value, userName: item.props.children };
				});
			} else {
				userIds = [];
			}
			data["masters"] = userIds;
			handleSave(_extends({}, record, data));
		}, _this2.updatePerson = function (users) {
			var _this2$props6 = _this2.props,
			    record = _this2$props6.record,
			    handleSave = _this2$props6.handleSave;

			var data = {};
			var userIds = void 0;
			if (users.length) {
				userIds = users;
			} else {
				userIds = [];
			}
			data["masters"] = userIds;
			handleSave(_extends({}, record, data));
		}, _this2.disabledStartDate = function (startValue) {
			var record = _this2.props.record;

			if (!startValue || !record.endTime) {
				return false;
			}
			return startValue.valueOf() > record.endTime.valueOf();
		}, _this2.disabledEndDate = function (endValue) {
			var record = _this2.props.record;

			if (!endValue || !record.beginTime) {
				return false;
			}
			return endValue.valueOf() <= record.beginTime.valueOf();
		}, _this2.renderCell = function (form) {
			_this2.form = form;
			var _this2$props7 = _this2.props,
			    children = _this2$props7.children,
			    dataIndex = _this2$props7.dataIndex,
			    record = _this2$props7.record,
			    title = _this2$props7.title,
			    personData = _this2$props7.personData,
			    handleDelete = _this2$props7.handleDelete;
			var editing = _this2.state.editing;

			if (dataIndex == 'masters') {
				// 负责人
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + "\u662F\u5FC5\u8F93"
						}],
						initialValue: record[dataIndex] == null || record[dataIndex].length == 0 ? [] : record[dataIndex].length > 0 && record[dataIndex].map(function (item) {
							return item.userId;
						})
					})(_react2.default.createElement(
						"div",
						{ className: "w" },
						_react2.default.createElement(_PersonAdd2.default, {
							data: record[dataIndex] == null || record[dataIndex].length == 0 ? [] : record[dataIndex].length > 0 && record[dataIndex],
							updatePerson: _this2.updatePerson,
							disabled: !editing
						})
					))
				) : _react2.default.createElement(
					"div",
					{
						className: "editable-cell-value-wrap",
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			} else if (dataIndex == 'name') {
				//子任务
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + "\u662F\u5FC5\u8F93"
						}],
						initialValue: record[dataIndex]
					})(_react2.default.createElement(_antd.Input, {
						defaultValue: record[dataIndex],
						className: "w",
						ref: function ref(node) {
							return _this2.input = node;
						},
						onPressEnter: _this2.save,
						onBlur: _this2.save
					}))
				) : _react2.default.createElement(
					"div",
					{
						className: "editable-cell-value-wrap",
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			} else if (dataIndex == 'alreadyHours') {
				// 已用工时
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + "\u662F\u5FC5\u8F93"
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber, {
						ref: function ref(node) {
							return _this2.input = node;
						}
						//onPressEnter={this.save}
						, onChange: _this2.saveTime,
						onBlur: _this2.saveTime
					}))
				) : _react2.default.createElement(
					"div",
					{
						className: "editable-cell-value-wrap",
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children,
					"\u5C0F\u65F6"
				);
			} else if (dataIndex == 'beginTime') {
				// 开始日期
				// 日期时间戳转换字符串
				var numberTostring = record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex]).format('YYYY-MM-DD');
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + "\u662F\u5FC5\u8F93"
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(
						"div",
						{ className: "w clearfix", style: { minWidth: '155px' } },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: "\u786E\u5B9A\u8981\u5220\u9664\u5417?", onConfirm: function onConfirm() {
									return handleDelete(record);
								} },
							_react2.default.createElement(_antd.Icon, {
								style: {
									width: '35px',
									color: '#F17E7E',
									fontSize: '22px',
									float: 'left'
								},
								type: "minus-circle" })
						),
						_react2.default.createElement(_antd.DatePicker, {
							defaultValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(numberTostring, "YYYY-MM-DD"),
							style: {
								width: 'calc(100% - 35px)',
								float: 'right',
								minWidth: '120px'
							},
							format: "YYYY-MM-DD",
							ref: function ref(node) {
								return _this2.input = node;
							},
							onChange: _this2.saveDate
							//设置开始日期
							, disabledDate: _this2.disabledStartDate
						})
					))
				) : _react2.default.createElement(
					"div",
					{ className: "w clearfix" },
					_react2.default.createElement(
						_antd.Popconfirm,
						{ title: "\u786E\u5B9A\u8981\u5220\u9664\u5417?", onConfirm: function onConfirm() {
								return handleDelete(record);
							} },
						_react2.default.createElement(_antd.Icon, {
							style: {
								width: '35px',
								color: '#F17E7E',
								fontSize: '25px',
								float: 'left'
							},
							type: "minus-circle" })
					),
					_react2.default.createElement(
						"div",
						{
							className: "editable-cell-value-wrap",
							style: {
								width: 'calc(100% - 35px)',
								float: 'right',
								minHeight: '31px'
							},
							onClick: _this2.toggleEdit
						},
						children
					)
				);
			} else if (dataIndex == 'endTime') {
				// 截止日期
				// 日期时间戳转换字符串
				var _numberTostring = record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex]).format('YYYY-MM-DD');
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + "\u662F\u5FC5\u8F93"
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(_numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						style: { minWidth: '120px' },
						defaultValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(_numberTostring, "YYYY-MM-DD"),
						format: "YYYY-MM-DD",
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.saveDate2
						//设置结束不能选择的时间
						, disabledDate: _this2.disabledEndDate
					}))
				) : _react2.default.createElement(
					"div",
					{
						className: "editable-cell-value-wrap",
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			} else if (dataIndex == 'totalHours') {
				// 总工时
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + "\u662F\u5FC5\u8F93"
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber, {
						ref: function ref(node) {
							return _this2.input = node;
						},
						onPressEnter: _this2.save,
						onBlur: _this2.save
					}))
				) : _react2.default.createElement(
					"div",
					{
						className: "editable-cell-value-wrap",
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children,
					"\u5C0F\u65F6"
				);
			} else {
				// 备注
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + "\u662F\u5FC5\u8F93"
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(_antd.Input, {
						ref: function ref(node) {
							return _this2.input = node;
						},
						onPressEnter: _this2.save,
						onBlur: _this2.save,
						placeholder: "\u8BF7\u8F93\u5165"
					}))
				) : _react2.default.createElement(
					"div",
					{
						className: "editable-cell-value-wrap",
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			}
		}, _temp), _possibleConstructorReturn(_this2, _ret);
	}
	// 已用工时

	//日期格式保存

	//

	//设置开始日期不能选择的时间


	//设置结束不能选择的时间


	_createClass(EditableCell, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    editable = _props.editable,
			    dataIndex = _props.dataIndex,
			    title = _props.title,
			    record = _props.record,
			    index = _props.index,
			    handleSave = _props.handleSave,
			    children = _props.children,
			    personData = _props.personData,
			    restProps = _objectWithoutProperties(_props, ["editable", "dataIndex", "title", "record", "index", "handleSave", "children", "personData"]);

			return _react2.default.createElement(
				"td",
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
* 拆分子任务
* */


var TaskSplite = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
	_inherits(TaskSplite, _React$Component2);

	function TaskSplite(props) {
		_classCallCheck(this, TaskSplite);

		var _this3 = _possibleConstructorReturn(this, (TaskSplite.__proto__ || Object.getPrototypeOf(TaskSplite)).call(this, props));

		_this3.clearState = function () {
			_this3.setState({
				dataSource: []
			});
		};

		_this3.handleDelete = function (record) {
			var id = record.id,
			    key = record.key;

			if (id !== "" && id !== null && !id.startsWith("!")) {
				// 删除原来已有的
				_this3.store.delNode(id).then(function (res) {
					if (res) {
						_antd.message.success("删除成功");
						// 更新树
						_this3.props.updateTree();
						var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
						_this3.setState({
							dataSource: dataSource.filter(function (item) {
								return item.key !== key;
							})
						}, function () {
							_this3.props.handleSaveSubTask(_this3.state.dataSource);
							// 更新tree
							var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
							_this3.store.treeData = utils.updateTreeData(treeData, "del", record);
						});
					} else {
						_antd.message.error("删除失败");
					}
				});
			} else {
				// 删除新增的
				var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
				_this3.setState({
					dataSource: dataSource.filter(function (item) {
						return item.key !== key;
					})
				}, function () {
					_this3.props.handleSaveSubTask(_this3.state.dataSource);
					// 更新tree
					var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
					_this3.store.treeData = utils.updateTreeData(treeData, "del", record);
				});
			}
		};

		_this3.handleAdd = function () {
			var _this3$state = _this3.state,
			    count = _this3$state.count,
			    dataSource = _this3$state.dataSource;
			var addRecord = _this3.props.addRecord;

			var newData = Object.assign(addRecord, { "key": count, id: "!" + (0, _uuid.v4)() });
			_this3.setState({
				dataSource: [].concat(_toConsumableArray(dataSource), [newData]),
				count: count + 1
			}, function () {
				_this3.props.handleSaveSubTask(_this3.state.dataSource);
				// 更新tree
				var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
				_this3.store.treeData = utils.updateTreeData(treeData, "add", newData);
				// console.log(this.state.dataSource, count, '新增')
			});
		};

		_this3.handleSave = function (row) {
			// 已用工时不能大于总工时
			if (Number(row.alreadyHours) > Number(row.totalHours)) {
				//openNotificationWithIcon('warning');
				return false;
			}
			var newData = [].concat(_toConsumableArray(_this3.state.dataSource));
			var index = newData.findIndex(function (item) {
				return row.key === item.key;
			});
			var item = newData[index];
			newData.splice(index, 1, _extends({}, item, row));
			_this3.setState({ dataSource: newData }, function () {
				_this3.props.handleSaveSubTask(_this3.state.dataSource);
				var newRow = JSON.parse(JSON.stringify(_extends({}, row)));
				// 更新tree
				var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
				_this3.store.treeData = utils.updateTreeData(treeData, "update", newRow);
			});
		};

		_this3.collapseOnClick = function () {
			var _this = _this3;
			_this.props.collapseOnChange();
		};

		_this3.store = _this3.props.store;
		_this3.state = {
			dataSource: [], // 子任务的数据源
			count: 0
		};
		return _this3;
	}

	_createClass(TaskSplite, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps, nextContext) {
			var _this4 = this;

			/*
   * subtask 子任务 nextProps.dataSource
   * */
			if (JSON.stringify(nextProps.dataSource) != JSON.stringify(this.props.dataSource)) {
				this.setState({
					dataSource: nextProps.dataSource == null || nextProps.dataSource.length == 0 ? [] : nextProps.dataSource.map(function (item, index) {
						return Object.assign(item, { "key": index });
					}),
					count: nextProps.dataSource === null || nextProps.dataSource.length == 0 ? 0 : nextProps.dataSource.length
				}, function () {
					nextProps.handleSaveSubTask(_this4.state.dataSource);
				});
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this5 = this;

			this.setState({
				dataSource: this.props.dataSource == null || this.props.dataSource.length == 0 ? [] : this.props.dataSource.map(function (item, index) {
					return Object.assign(item, { "key": index });
				}),
				count: this.props.dataSource === null || this.props.dataSource.length == 0 ? 0 : this.props.dataSource.length
			}, function () {
				_this5.props.handleSaveSubTask(_this5.state.dataSource);
			});
			this.props.onTaskRef(this);
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate(prevProps, prevState) {}

		// 删除

	}, {
		key: "render",
		value: function render() {
			var _this6 = this;

			var dataSource = this.state.dataSource;
			var disabled = this.props.disabled;

			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var columnEle = [{
				title: '开始日期',
				dataIndex: 'beginTime',
				width: '14%',
				editable: !disabled,
				align: "center",
				render: function render(text) {
					return text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				}
			}, {
				title: '截止日期',
				dataIndex: 'endTime',
				width: '14%',
				editable: !disabled,
				align: "center",
				render: function render(text) {
					return text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD");
				}
			}, {
				title: '任务名称',
				dataIndex: 'name',
				width: '14%',
				align: 'center',
				editable: !disabled,
				render: function render(text) {
					return _react2.default.createElement(
						"span",
						null,
						text
					);
				}
			}, {
				title: '负责人',
				dataIndex: 'masters',
				width: '14%',
				editable: !disabled,
				align: 'center',
				render: function render(text) {
					return text == null ? "" : text.map(function (item) {
						return item.userName;
					}).join("、");
				}
			}, {
				title: '预估工时',
				dataIndex: 'totalHours',
				width: '14%',
				editable: !disabled,
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						"span",
						null,
						text,
						"\u5C0F\u65F6"
					);
				}
			}, {
				title: '已用工时',
				dataIndex: 'alreadyHours',
				width: '14%',
				editable: !disabled,
				align: 'center',
				render: function render(text, record) {
					return _react2.default.createElement(
						"span",
						{ id: record.id },
						text,
						"\u5C0F\u65F6"
					);
				}
			}, {
				title: '备注',
				dataIndex: 'remark',
				width: '14%',
				editable: !disabled,
				align: 'center',
				render: function render(text) {
					return _react2.default.createElement(
						"span",
						null,
						text
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
							personData: mobx.toJS(_this6.store.personData),
							handleSave: _this6.handleSave,
							handleDelete: _this6.handleDelete
						};
					}
				});
			});
			return _react2.default.createElement(
				_antd.Card,
				{ bordered: true, style: { width: '100%' } },
				_react2.default.createElement(_antd.Table, {
					components: components,
					rowClassName: function rowClassName() {
						return 'editable-row';
					},
					className: "bpm_table",
					bordered: false,
					dataSource: dataSource,
					columns: columns,
					pagination: false,
					size: "middle",
					rowKey: function rowKey(row) {
						return row.id;
					}
				}),
				_react2.default.createElement(_antd.Icon, { className: disabled ? "hidden" : "", onClick: this.handleAdd,
					style: { margin: '16px 0', color: '#4BA4BE', fontSize: '22px' }, type: "plus-circle" }),
				_react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 24, style: { textAlign: 'right', marginTop: '10px' } },
						_react2.default.createElement(_antd.Icon, { onClick: this.collapseOnClick,
							title: "\u6536\u8D77",
							type: "double-right",
							className: "pointer",
							style: { color: '#808080' },
							rotate: -90 })
					)
				)
			);
		}
	}]);

	return TaskSplite;
}(_react2.default.Component)) || _class2;

exports.default = TaskSplite;

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

/***/ 1538:
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

var _TaskSplite = __webpack_require__(1526);

var _TaskSplite2 = _interopRequireDefault(_TaskSplite);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _uuid = __webpack_require__(79);

var _PersonAdd = __webpack_require__(94);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

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


var runonlyonce = false;
var Option = _antd.Select.Option;

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
				//this.toggleEdit();
				delete values["beginTime"];
				delete values["endTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate = function (date, dateString) {
			var _this2$props2 = _this2.props,
			    record = _this2$props2.record,
			    handleSave = _this2$props2.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('beginTime')) {
					values["beginTime"] = (0, _moment2.default)(dateString, 'YYYY-MM-DD').valueOf();
				}
				delete values["endTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate2 = function (date, dateString) {
			var _this2$props3 = _this2.props,
			    record = _this2$props3.record,
			    handleSave = _this2$props3.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('endTime')) {
					values["endTime"] = (0, _moment2.default)(dateString, 'YYYY-MM-DD').valueOf();
				}
				delete values["beginTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.handleSelChange = function (val, e) {
			var _this2$props4 = _this2.props,
			    record = _this2$props4.record,
			    handleSave = _this2$props4.handleSave;

			var data = {};
			var userIds = void 0;
			if (e.length) {
				userIds = e.map(function (item) {
					return { userId: item.props.value, userName: item.props.children };
				});
			} else {
				userIds = [];
			}
			data["masters"] = userIds;
			handleSave(_extends({}, record, data));
		}, _this2.updatePerson = function (users) {
			var _this2$props5 = _this2.props,
			    record = _this2$props5.record,
			    handleSave = _this2$props5.handleSave;

			var data = {};
			var userIds = void 0;
			if (users.length) {
				userIds = users;
			} else {
				userIds = [];
			}
			data["masters"] = userIds;
			handleSave(_extends({}, record, data));
		}, _this2.onBlur = function () {}
		//this.toggleEdit();

		//设置开始日期不能选择的时间
		, _this2.disabledStartDate = function (startValue) {
			var record = _this2.props.record;

			if (!startValue || !record.endTime) {
				return false;
			}
			return startValue.valueOf() > record.endTime.valueOf();
		}, _this2.disabledEndDate = function (endValue) {
			var record = _this2.props.record;

			if (!endValue || !record.beginTime) {
				return false;
			}
			return endValue.valueOf() <= record.beginTime.valueOf();
		}, _this2.renderCell = function (form) {
			_this2.form = form;
			var _this2$props6 = _this2.props,
			    children = _this2$props6.children,
			    dataIndex = _this2$props6.dataIndex,
			    record = _this2$props6.record,
			    title = _this2$props6.title,
			    personData = _this2$props6.personData,
			    handleDelete = _this2$props6.handleDelete;
			var editing = _this2.state.editing;

			if (dataIndex == 'name') {
				// 任务
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: true,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex]
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
									width: '35px',
									color: '#F17E7E',
									fontSize: '20px',
									float: 'left'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(_antd.Input, {
							style: {
								float: 'right',
								width: 'calc(100% - 35px)'
							},
							defaultValue: record[dataIndex],
							ref: function ref(node) {
								return _this2.input = node;
							}
							//onChange={this.save}
							, onPressEnter: _this2.save,
							onBlur: _this2.save
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
			} else if (dataIndex == 'masters') {
				// 负责人
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'w' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex].length == 0 ? [] : record[dataIndex].length > 0 && record[dataIndex].map(function (item) {
							return item.userId;
						})
					})(_react2.default.createElement(
						'div',
						{ className: 'w', ref: function ref(node) {
								return _this2.input = node;
							} },
						_react2.default.createElement(_PersonAdd2.default, {
							data: record[dataIndex] == null || record[dataIndex].length == 0 ? [] : record[dataIndex].length > 0 && record[dataIndex],
							updatePerson: _this2.updatePerson,
							disabled: !editing
						})
					))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit },
					children
				);
			} else if (dataIndex == 'beginTime') {
				// 开始日期
				// 日期时间戳转换字符串
				var numberTostring = record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex]).format('YYYY-MM-DD');
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						format: 'YYYY-MM-DD',
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.saveDate
						//设置开始日期
						, disabledDate: _this2.disabledStartDate
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			} else if (dataIndex == 'endTime') {
				// 截止日期
				// 日期时间戳转换字符串
				var _numberTostring = record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex]).format('YYYY-MM-DD');
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(_numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						format: 'YYYY-MM-DD',
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.saveDate2
						//设置结束不能选择的时间
						, disabledDate: _this2.disabledEndDate
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			} else if (dataIndex == 'remark') {
				// 备注
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
						onPressEnter: _this2.save,
						onBlur: _this2.save,
						placeholder: '\u8BF7\u8F93\u5165'
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
			} else {
				// 完成比例
				var subNumber = record.children == null || record.children.length == 0 ? 0 : record.children.length;
				var isEdit = subNumber > 0 ? true : false;
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber, {
						disabled: isEdit,
						min: 0,
						max: 100,
						ref: function ref(node) {
							return _this2.input = node;
						},
						onPressEnter: _this2.save,
						onBlur: _this2.save
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
	//日期格式保存


	//

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
			    personData = _props.personData,
			    restProps = _objectWithoutProperties(_props, ['editable', 'dataIndex', 'title', 'record', 'index', 'handleSave', 'children', 'personData']);

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

		_this3.getKeyByShowRow = function (key, id, isEdit) {
			// 填报2  查看1
			if (isEdit == 2) {
				_this3.saveExpandedRows(key);
			} else {
				_this3.handleView(key);
			}
			_this3.scrollToAnchor(id);
		};

		_this3.scrollToAnchor = function (anchorName) {
			if (anchorName) {
				try {
					var anchorElement = document.getElementById(anchorName);
					if (anchorElement) {
						anchorElement.scrollIntoView({ block: 'center' });
					}
				} catch (err) {
					console.log("scrollToAnchorERR=>" + err);
				}
			}
		};

		_this3.handleDelete = function (record) {
			var id = record.id,
			    key = record.key;

			if (id !== "" && id !== null && !id.startsWith("!")) {
				// 删除原来已有的
				_this3.store.delNode(id).then(function (res) {
					if (res) {
						_antd.message.success("删除成功");
						var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
						_this3.setState({
							dataSource: dataSource.filter(function (item) {
								return item.key !== key;
							})
						}, function () {
							_this3.props.saveData(_this3.state.dataSource);
							// 更新tree
							var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
							_this3.store.treeData = utils.updateTreeData(treeData, "del", record);
						});
						// 更新步骤
						_this3.store.getStageTree();
						//更新我的任务数
						_this3.store.getMyTaskCount();
					} else {
						_antd.message.error("删除失败");
					}
				});
			} else {
				// 删除新增的
				var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
				_this3.setState({
					dataSource: dataSource.filter(function (item) {
						return item.key !== key;
					})
				}, function () {
					_this3.props.saveData(_this3.state.dataSource, key);
					// 更新tree
					var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
					_this3.store.treeData = utils.updateTreeData(treeData, "del", record);
				});
			}
		};

		_this3.handleAdd = function () {
			var _this3$state = _this3.state,
			    dataSource = _this3$state.dataSource,
			    primaryData = _this3$state.primaryData,
			    count = _this3$state.count;

			var newData = Object.assign(primaryData, { key: count, id: "!" + (0, _uuid.v4)() });
			_this3.setState({
				dataSource: [].concat(_toConsumableArray(dataSource), [newData]),
				count: count + 1
			}, function () {
				_this3.props.saveData(_this3.state.dataSource);
				// 更新tree
				var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
				_this3.store.treeData = utils.updateTreeData(treeData, "add", newData);
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
				var newRow = JSON.parse(JSON.stringify(_extends({}, row)));
				// 更新tree
				var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
				_this3.store.treeData = utils.updateTreeData(treeData, "update", newRow);
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

		_this3.handleApart = function (record) {
			// if (key==null||key=="") {
			//    message.warn("请先保存主任务，主任务保存后才能拆解子任务");
			//    return false;
			// }
			// 记录当前主任务没有改动的数据
			_this3.setState({
				activeObj: Object.assign({}, record),
				activeSub: Object.assign([], record.children == null ? [] : record.children),
				subTaskDis: false // 可编辑
			}, function () {
				_this3.saveExpandedRows(record.id);
			});
		};

		_this3.saveSubTaskRecord = function (id) {
			// 如果子任务为空，保存是调用新街口
			var length = _this3.state.subtasks.length;
			if (length == 0) {
				_this3.store.delNodeByPid({ pid: id }).then(function (res) {
					if (res) {
						// 更新树
						_this3.props.updateTree();
						// 更新步骤
						_this3.store.getStageTree();
						//更新我的任务数
						_this3.store.getMyTaskCount();
						_antd.message.success("保存成功");
						_this3.saveExpandedRows(id);
					} else {
						_antd.message.error("保存失败");
					}
				});
			} else {
				// 子任务名称和负责人必填
				var subtasks = JSON.parse(JSON.stringify(_this3.state.subtasks));
				var isSub = subtasks.filter(function (item) {
					return item.name == "" || item.masters == null || item.masters.length == 0;
				});
				if (isSub.length > 0) {
					// true
					_antd.message.warn("请您填写任务名称和负责人");
					return false;
				}
				var isLarge = subtasks.filter(function (item) {
					return Number(item.alreadyHours) > Number(item.totalHours);
				});
				if (isLarge.length > 0) {
					// true
					_antd.message.warn("已用工时不能大于预估工时");
					return false;
				}

				// 判断是新增的主任务进行拆解的
				if (id.startsWith("!")) {
					_this3.saveExpandedRows(id);
				} else {
					// 原有
					_this3.store.saveSubTasks(_this3.state.subtasks).then(function (res) {
						if (res && res.length > 0) {
							_antd.message.success("保存成功");
							_this3.subtask.clearState();
							// 更新tree
							var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
							_this3.store.treeData = utils.updateTreeData(treeData, "updateChildren", res);
							// 更新步骤
							_this3.store.getStageTree();
							_this3.saveExpandedRows(id);
						} else {
							_antd.message.error("保存失败");
						}
					});
				}
			}
		};

		_this3.handleSaveSubTask = function (subtasks) {
			var newSubTasks = [];
			subtasks.forEach(function (item) {
				var key = item.key,
				    children = item.children,
				    obj = _objectWithoutProperties(item, ['key', 'children']);

				newSubTasks.push(obj);
			});
			_this3.setState({ subtasks: newSubTasks });
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

		_this3.onPackup = function (record) {
			var _this = _this3;
			var defaultSource = _this.state.activeSub.map(function (item) {
				return {
					"name": item.name,
					"masters": item.masters,
					"totalHours": item.totalHours,
					"alreadyHours": item.alreadyHours
				};
			}); // 拆解前默认数据
			var rearSource = _this.state.subtasks.map(function (item) {
				return {
					"name": item.name,
					"masters": item.masters,
					"totalHours": item.totalHours,
					"alreadyHours": item.alreadyHours
				};
			}); // 拆解后内容变动数据
			// 当前拆解数据内容变化，给提示是否保存
			if (JSON.stringify(defaultSource) == JSON.stringify(rearSource)) {
				// 内容没有变动，直接取消
				_this.onCalac(record.id);
			} else {
				_antd.Modal.confirm({
					title: '是否对所更改内容保存',
					okText: '保存',
					cancelText: '不保存',
					onOk: function onOk() {
						_this.saveSubTaskRecord(record.id);
					},
					onCancel: function onCancel() {
						_this.onCalac(record.id);
					}
				});
			}
		};

		_this3.onTaskRef = function (ref) {
			_this3.subtask = ref;
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
				"pid": "",
				"projectId": "",
				"treeType": "task",
				"masters": [],
				"children": null,
				"name": "",
				"rate": 0,
				"nodeCount": null,
				"beginTime": null,
				"endTime": null,
				"orders": 0,
				"remark": ""
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
						"pid": nextProps.pid,
						"projectId": nextProps.projectId,
						"treeType": "task",
						"masters": [],
						"children": null,
						"name": "",
						"rate": 0,
						"nodeCount": null,
						"beginTime": null,
						"endTime": null,
						"orders": 0,
						"remark": ""
					}) // 新增任务数据
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this4 = this;

			this.setState({
				dataSource: this.props.dataSource == null || this.props.dataSource.length == 0 ? [] : this.props.dataSource.map(function (item, index) {
					return Object.assign(item, { "key": index });
				}),
				count: this.props.dataSource === null || this.props.dataSource.length == 0 ? 0 : this.props.dataSource.length,
				primaryData: Object.assign({}, {
					"id": "",
					"pid": this.props.pid,
					"projectId": this.props.projectId,
					"treeType": "task",
					"masters": [],
					"children": null,
					"name": "",
					"rate": 0,
					"nodeCount": null,
					"beginTime": null,
					"endTime": null,
					"orders": 0,
					"remark": ""
				}), // 新增任务数据
				expandedKeys: [], // 折叠
				keys: [], // 折叠
				subtasks: []
			});
			/*if(true){ // 暂时控制不住多次事件监听
   	runonlyonce = true;
   	console.log('计')
   		}*/
			this.eventE1 = _events2.default.addListener('handletaskid', function (obj) {
				_this4.getKeyByShowRow(obj.pid, obj.pid, obj.isEdit);
			});
		}
	}, {
		key: 'componentWillUnMount',
		value: function componentWillUnMount() {
			_events2.default.removeListener(this.eventE1);
		}

		// 锚点定位


		// 删除


		// 新增


		// 保存


		// 折叠效果


		// 查看


		// 拆解


		// 保存子任务


		// 更新子任务数据


		// 取消保存


		// 折叠收起


		// 点击

	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _state = this.state,
			    dataSource = _state.dataSource,
			    expandedKeys = _state.expandedKeys,
			    subTaskDis = _state.subTaskDis;
			var disabled = this.props.disabled;

			var isChaijie = expandedKeys.length > 0;
			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var columnEle = [{
				title: '任务',
				dataIndex: 'name',
				width: '14%',
				align: "center",
				editable: !disabled && !isChaijie,
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							// id={`/?projectid=${record.projectId}&id=${record.id}`}
							id: '' + record.id,
							onClick: _this5.onRow.bind(_this5, record),
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							className: 'pr' },
						_react2.default.createElement(_antd.Icon, { className: record.delayType !== 0 && disabled ? "" : "hidden",
							style: {
								fontSize: '18px',
								position: 'absolute',
								left: '5px',
								color: 'red',
								top: '50%',
								transform: 'translateY(-50%)'
							}, type: 'exclamation-circle' }),
						text
					);
				}
			}, {
				title: '负责人',
				dataIndex: 'masters',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record) },
						text == null ? "" : text.map(function (item) {
							return item.userName;
						}).join("、")
					);
				}
			}, {
				title: '开始日期',
				dataIndex: 'beginTime',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record) },
						text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '截止日期',
				dataIndex: 'endTime',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record) },
						text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '完成比例',
				dataIndex: 'rate',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record)
							//id={record.id}
						},
						text,
						'%'
					);
				}
			}, {
				title: '备注',
				dataIndex: 'remark',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					var content = _react2.default.createElement(
						'div',
						null,
						text == null || text == "" ? null : _react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'span',
								{ style: { fontWeight: '700', color: '#333' } },
								'\u6574\u4F53:'
							),
							' ',
							text
						),
						record.children == null || record.children == [] ? null : record.children.filter(function (item) {
							return item.treeType === 'subtask';
						}).map(function (item, index) {
							return _react2.default.createElement(
								'p',
								{ className: item.remark == null || item.remark == "" ? "hidden" : "",
									key: 'task_' + index },
								_react2.default.createElement(
									'span',
									{
										style: { fontWeight: '700', color: '#333' } },
									'\u5907\u6CE8',
									index + 1,
									':'
								),
								' ',
								item.remark
							);
						})
					);
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record)
							//id={record.id}
						},
						_react2.default.createElement(
							_antd.Popover,
							{ content: content, trigger: 'hover' },
							_react2.default.createElement(
								'div',
								{
									style: { maxWidth: '180px' },
									className: 'ellsis' },
								text == null || text == "" ? null : _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(
										'span',
										{ style: { fontWeight: '700', color: '#333' } },
										'\u6574\u4F53:'
									),
									' ',
									text
								),
								record.children == null || record.children == [] ? null : record.children.filter(function (item) {
									return item.treeType === 'subtask';
								}).map(function (item, index) {
									return _react2.default.createElement(
										'span',
										{ key: 'task_' + index,
											className: item.remark == null || item.remark == "" ? "hidden" : "" },
										_react2.default.createElement(
											'span',
											{ style: { paddingLeft: '5px', fontWeight: '700', color: '#333' } },
											'\u5907\u6CE8',
											index + 1,
											':'
										),
										' ',
										item.remark
									);
								})
							)
						)
					);
				}
			}, {
				title: '排期',
				dataIndex: 'operation',
				align: "center",
				render: function render(text, record) {
					var actionName = '拆解';
					if (expandedKeys.filter(function (item) {
						return item == record.id;
					}).length > 0 && !subTaskDis) {
						return _react2.default.createElement(
							'span',
							null,
							_react2.default.createElement(
								'a',
								{ onClick: _this5.onCalac.bind(_this5, record.id) },
								'\u53D6\u6D88'
							),
							_react2.default.createElement(
								'a',
								{ className: 'ml15', onClick: _this5.saveSubTaskRecord.bind(_this5, record.id) },
								'\u4FDD\u5B58'
							)
						);
					} else {
						// 子任务数
						var subTasks = record.children == null ? [] : record.children.filter(function (item) {
							return item.treeType === 'subtask';
						});
						var subNumber = subTasks == null || subTasks.length == 0 ? 0 : subTasks.length;
						if (disabled) {
							// 详情态
							if (subNumber == 0) {
								// 子任务数等于0
								return _react2.default.createElement(
									'a',
									{ onClick: _this5.handleApart.bind(_this5, record) },
									'\u62C6\u89E3'
								);
								//return <span>{subNumber}</span>
							} else {
								// 子任务数大于0
								return _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(
										'a',
										{ title: '\u67E5\u770B', onClick: _this5.handleView.bind(_this5, record.id) },
										subNumber
									),
									_react2.default.createElement(_antd.Icon, { onClick: _this5.handleApart.bind(_this5, record), className: 'pointer',
										style: { marginLeft: "10px" }, title: '\u7F16\u8F91', type: 'edit' })
								);
							}
						} else {
							// 编辑态
							return _react2.default.createElement(
								'a',
								{ onClick: _this5.handleApart.bind(_this5, record) },
								subNumber == 0 ? actionName : subNumber
							);
						}
					}
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
							personData: mobx.toJS(_this5.store.personData),
							handleSave: _this5.handleSave,
							handleDelete: _this5.handleDelete
						};
					}
				});
			});
			var expandedRowRender = function expandedRowRender(record) {
				// 新增子任务
				var addRecord = {
					id: "",
					pid: record.id || "",
					projectId: record.projectId || "",
					treeType: "subtask",
					masters: record.masters == null ? [] : record.masters,
					alreadyHours: 0,
					totalHours: 0,
					rate: 0,
					name: "",
					remark: "",
					beginTime: null,
					endTime: null
				};
				return _react2.default.createElement(_TaskSplite2.default, {
					store: _this5.store,
					record: record,
					addRecord: addRecord,
					personData: mobx.toJS(_this5.store.personData),
					dataSource: record.children == null ? [] : record.children.filter(function (item) {
						return item.treeType === 'subtask';
					}),
					collapseOnChange: function collapseOnChange() {
						return isChaijie && !disabled ? _this5.onPackup(record) : _this5.saveExpandedRows(record.id);
					},
					handleSaveSubTask: _this5.handleSaveSubTask,
					disabled: subTaskDis
					//id={record.id}
					, onTaskRef: _this5.onTaskRef
				});
			};
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
					expandedRowRender: expandedRowRender,
					rowKey: function rowKey(row) {
						return row.id;
					}
				}),
				disabled ? null : _react2.default.createElement(_antd.Icon, { onClick: this.handleAdd, style: { margin: '16px 0', color: '#4BA4BE', fontSize: '22px' },
					type: 'plus-circle' })
			);
		}
	}]);

	return EditableTable;
}(_react2.default.Component)) || _class2;

exports.default = EditableTable;

/***/ }),

/***/ 1543:
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

var _TaskSplite = __webpack_require__(1526);

var _TaskSplite2 = _interopRequireDefault(_TaskSplite);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _uuid = __webpack_require__(79);

var _PersonAdd = __webpack_require__(94);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

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


var runonlyonce = false;
var Option = _antd.Select.Option;

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
				//this.toggleEdit();
				delete values["beginTime"];
				delete values["endTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate = function (date, dateString) {
			var _this2$props2 = _this2.props,
			    record = _this2$props2.record,
			    handleSave = _this2$props2.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('beginTime')) {
					values["beginTime"] = (0, _moment2.default)(dateString, 'YYYY-MM-DD').valueOf();
				}
				delete values["endTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.saveDate2 = function (date, dateString) {
			var _this2$props3 = _this2.props,
			    record = _this2$props3.record,
			    handleSave = _this2$props3.handleSave;

			_this2.form.validateFields(function (error, values) {
				if (values.hasOwnProperty('endTime')) {
					values["endTime"] = (0, _moment2.default)(dateString, 'YYYY-MM-DD').valueOf();
				}
				delete values["beginTime"];
				delete values["masters"];
				handleSave(_extends({}, record, values));
			});
		}, _this2.handleSelChange = function (val, e) {
			var _this2$props4 = _this2.props,
			    record = _this2$props4.record,
			    handleSave = _this2$props4.handleSave;

			var data = {};
			var userIds = void 0;
			if (e.length) {
				userIds = e.map(function (item) {
					return { userId: item.props.value, userName: item.props.children };
				});
			} else {
				userIds = [];
			}
			data["masters"] = userIds;
			handleSave(_extends({}, record, data));
		}, _this2.updatePerson = function (users) {
			var _this2$props5 = _this2.props,
			    record = _this2$props5.record,
			    handleSave = _this2$props5.handleSave;

			var data = {};
			var userIds = void 0;
			if (users.length) {
				userIds = users;
			} else {
				userIds = [];
			}
			data["masters"] = userIds;
			handleSave(_extends({}, record, data));
		}, _this2.onBlur = function () {}
		//this.toggleEdit();

		//设置开始日期不能选择的时间
		, _this2.disabledStartDate = function (startValue) {
			var record = _this2.props.record;

			if (!startValue || !record.endTime) {
				return false;
			}
			return startValue.valueOf() > record.endTime.valueOf();
		}, _this2.disabledEndDate = function (endValue) {
			var record = _this2.props.record;

			if (!endValue || !record.beginTime) {
				return false;
			}
			return endValue.valueOf() <= record.beginTime.valueOf();
		}, _this2.renderCell = function (form) {
			_this2.form = form;
			var _this2$props6 = _this2.props,
			    children = _this2$props6.children,
			    dataIndex = _this2$props6.dataIndex,
			    record = _this2$props6.record,
			    title = _this2$props6.title,
			    personData = _this2$props6.personData,
			    handleDelete = _this2$props6.handleDelete;
			var editing = _this2.state.editing;

			if (dataIndex == 'name') {
				// 任务
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: true,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex]
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
									width: '35px',
									color: '#F17E7E',
									fontSize: '25px',
									float: 'left'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(_antd.Input, {
							style: {
								float: 'right',
								width: 'calc(100% - 35px)'
							},
							defaultValue: record[dataIndex],
							ref: function ref(node) {
								return _this2.input = node;
							}
							//onChange={this.save}
							, onPressEnter: _this2.save,
							onBlur: _this2.save
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
								minHeight: '31px' },
							onClick: _this2.toggleEdit
						},
						children
					)
				);
			} else if (dataIndex == 'masters') {
				// 负责人
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 }, className: 'w' },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex].length == 0 ? [] : record[dataIndex].length > 0 && record[dataIndex].map(function (item) {
							return item.userId;
						})
					})(_react2.default.createElement(
						'div',
						{ className: 'w', ref: function ref(node) {
								return _this2.input = node;
							} },
						_react2.default.createElement(_PersonAdd2.default, {
							data: record[dataIndex] == null || record[dataIndex].length == 0 ? [] : record[dataIndex].length > 0 && record[dataIndex],
							updatePerson: _this2.updatePerson,
							disabled: !editing
						})
					))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit },
					children
				);
			} else if (dataIndex == 'beginTime') {
				// 开始日期
				// 日期时间戳转换字符串
				var numberTostring = record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex]).format('YYYY-MM-DD');
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						format: 'YYYY-MM-DD',
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.saveDate
						//设置开始日期
						, disabledDate: _this2.disabledStartDate
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			} else if (dataIndex == 'endTime') {
				// 截止日期
				// 日期时间戳转换字符串
				var _numberTostring = record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(record[dataIndex]).format('YYYY-MM-DD');
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : (0, _moment2.default)(_numberTostring, "YYYY-MM-DD")
					})(_react2.default.createElement(_antd.DatePicker, {
						format: 'YYYY-MM-DD',
						ref: function ref(node) {
							return _this2.input = node;
						},
						onChange: _this2.saveDate2
						//设置结束不能选择的时间
						, disabledDate: _this2.disabledEndDate
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			} else if (dataIndex == 'rate') {
				// 完成比例
				var subTasks = record.children != null && record.children.filter(function (item) {
					return item.treeType === 'subtask';
				});
				var subNumber = subTasks == null || subTasks.length == 0 ? 0 : subTasks.length;
				var isEdit = subNumber > 0 ? true : false;
				return editing ? _react2.default.createElement(
					_antd.Form.Item,
					{ style: { margin: 0 } },
					form.getFieldDecorator(dataIndex, {
						rules: [{
							required: false,
							message: title + '\u662F\u5FC5\u8F93'
						}],
						initialValue: record[dataIndex] == null || record[dataIndex] == 0 ? "" : record[dataIndex]
					})(_react2.default.createElement(_antd.InputNumber, {
						disabled: isEdit,
						min: 0,
						max: 100,
						ref: function ref(node) {
							return _this2.input = node;
						},
						onPressEnter: _this2.save,
						onBlur: _this2.save
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
			} else if (dataIndex == 'remark') {
				// 备注
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
						onPressEnter: _this2.save,
						onBlur: _this2.save,
						placeholder: '\u8BF7\u8F93\u5165'
					}))
				) : _react2.default.createElement(
					'div',
					{
						className: 'editable-cell-value-wrap',
						style: { minHeight: '31px' },
						onClick: _this2.toggleEdit
					},
					children
				);
			}
		}, _temp), _possibleConstructorReturn(_this2, _ret);
	}
	//日期格式保存


	//

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
			    personData = _props.personData,
			    restProps = _objectWithoutProperties(_props, ['editable', 'dataIndex', 'title', 'record', 'index', 'handleSave', 'children', 'personData']);

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


var EditableTable2 = (0, _mobxReact.observer)(_class2 = function (_React$Component2) {
	_inherits(EditableTable2, _React$Component2);

	function EditableTable2(props) {
		_classCallCheck(this, EditableTable2);

		var _this3 = _possibleConstructorReturn(this, (EditableTable2.__proto__ || Object.getPrototypeOf(EditableTable2)).call(this, props));

		_this3.getKeyByShowRow = function (key, id, isEdit) {
			// 填报2  查看1
			if (isEdit == 2) {
				_this3.saveExpandedRows(key);
			} else {
				_this3.handleView(key);
			}
			_this3.scrollToAnchor(id);
		};

		_this3.scrollToAnchor = function (anchorName) {
			if (anchorName) {
				try {
					var anchorElement = document.getElementById(anchorName);
					if (anchorElement) {
						anchorElement.scrollIntoView({ block: 'center' });
					}
				} catch (err) {
					console.log("scrollToAnchorERR=>" + err);
				}
			}
		};

		_this3.handleDelete = function (record) {
			var id = record.id,
			    key = record.key;

			if (id !== "" && id !== null && !id.startsWith("!")) {
				// 删除原来已有的
				_this3.store.delNode(id).then(function (res) {
					if (res) {
						_antd.message.success("删除成功");
						var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
						_this3.setState({
							dataSource: dataSource.filter(function (item) {
								return item.key !== key;
							})
						}, function () {
							_this3.props.saveData(_this3.state.dataSource);
							// 更新tree
							var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
							_this3.store.treeData = utils.updateTreeData(treeData, "del", record);
						});
						// 更新步骤
						_this3.store.getStageTree();
						//更新我的任务数
						_this3.store.getMyTaskCount();
					} else {
						_antd.message.error("删除失败");
					}
				});
			} else {
				// 删除新增的
				var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));
				_this3.setState({
					dataSource: dataSource.filter(function (item) {
						return item.key !== key;
					})
				}, function () {
					_this3.props.saveData(_this3.state.dataSource, key);
					// 更新tree
					var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
					_this3.store.treeData = utils.updateTreeData(treeData, "del", record);
				});
			}
		};

		_this3.handleAdd = function () {
			var _this3$state = _this3.state,
			    dataSource = _this3$state.dataSource,
			    primaryData = _this3$state.primaryData,
			    count = _this3$state.count;

			var newData = Object.assign(primaryData, { key: count, id: "!" + (0, _uuid.v4)() });
			//console.log(newData, '新增')
			_this3.setState({
				dataSource: [].concat(_toConsumableArray(dataSource), [newData]),
				count: count + 1
			}, function () {
				_this3.props.saveData(_this3.state.dataSource);
				// 更新tree
				var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
				_this3.store.treeData = utils.updateTreeData(treeData, "add", newData);
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
				var newRow = JSON.parse(JSON.stringify(_extends({}, row)));
				// 更新tree
				var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
				_this3.store.treeData = utils.updateTreeData(treeData, "update", newRow);
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
			_this.setState({ expandedKeys: keys }, function () {
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

		_this3.handleApart = function (record) {
			// if (key==null||key=="") {
			//    message.warn("请先保存主任务，主任务保存后才能拆解子任务");
			//    return false;
			// }
			// 记录当前主任务没有改动的数据
			_this3.setState({
				activeObj: Object.assign({}, record),
				activeSub: Object.assign([], record.children == null ? [] : record.children),
				subTaskDis: false // 可编辑
			}, function () {
				_this3.saveExpandedRows(record.id);
			});
		};

		_this3.saveSubTaskRecord = function (id) {
			// 如果子任务为空，保存是调用新街口
			var length = _this3.state.subtasks.length;
			if (length == 0) {
				_this3.store.delNodeByPid({ pid: id }).then(function (res) {
					if (res) {
						// 更新树
						_this3.props.updateTree();
						// 更新步骤
						_this3.store.getStageTree();
						//更新我的任务数
						_this3.store.getMyTaskCount();
						_antd.message.success("保存成功");
						_this3.saveExpandedRows(id);
					} else {
						_antd.message.error("保存失败");
					}
				});
			} else {
				// 子任务名称和负责人必填
				var subtasks = JSON.parse(JSON.stringify(_this3.state.subtasks));
				var isSub = subtasks.filter(function (item) {
					return item.name == "" || item.masters == null || item.masters.length == 0;
				});
				if (isSub.length > 0) {
					// true
					_antd.message.warn("请您填写任务名称和负责人");
					return false;
				}
				var isLarge = subtasks.filter(function (item) {
					return Number(item.alreadyHours) > Number(item.totalHours);
				});
				if (isLarge.length > 0) {
					// true
					_antd.message.warn("已用工时不能大于预估工时");
					return false;
				}
				// 判断是新增的主任务进行拆解的
				if (id.startsWith("!")) {
					_this3.saveExpandedRows(id);
				} else {
					// 原有
					_this3.store.saveSubTasks(_this3.state.subtasks).then(function (res) {
						if (res && res.length > 0) {
							_antd.message.success("保存成功");
							_this3.subtask.clearState();
							// 更新tree
							var treeData = JSON.parse(JSON.stringify(_this3.store.treeData));
							var record = utils.getRecord(treeData, id);
							// 如果存在 attachments 更新的时候要添加附件集
							var attachments = record && record.children != null && record.children.filter(function (item) {
								return item.treeType === 'attc';
							})[0];
							if (attachments) {
								res.push(attachments);
							}
							_this3.store.treeData = utils.updateTreeData(treeData, "updateChildren", res);
							// 更新步骤
							_this3.store.getStageTree();
							_this3.saveExpandedRows(id);
						} else {
							_antd.message.error("保存失败");
						}
					});
				}
			}
		};

		_this3.handleSaveSubTask = function (subtasks) {
			var newSubTasks = [];
			subtasks.forEach(function (item) {
				var key = item.key,
				    children = item.children,
				    obj = _objectWithoutProperties(item, ['key', 'children']);

				newSubTasks.push(obj);
			});
			_this3.setState({ subtasks: newSubTasks });
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

		_this3.onPackup = function (record) {
			var _this = _this3;
			var defaultSource = _this.state.activeSub.map(function (item) {
				return {
					"name": item.name,
					"masters": item.masters,
					"totalHours": item.totalHours,
					"alreadyHours": item.alreadyHours
				};
			}); // 拆解前默认数据
			var rearSource = _this.state.subtasks.map(function (item) {
				return {
					"name": item.name,
					"masters": item.masters,
					"totalHours": item.totalHours,
					"alreadyHours": item.alreadyHours
				};
			}); // 拆解后内容变动数据
			// console.log(JSON.stringify(defaultSource), JSON.stringify(rearSource), '===比较', JSON.stringify(defaultSource)==JSON.stringify(rearSource))
			// 当前拆解数据内容变化，给提示是否保存
			if (JSON.stringify(defaultSource) == JSON.stringify(rearSource)) {
				// 内容没有变动，直接取消
				_this.onCalac(record.id);
			} else {
				_antd.Modal.confirm({
					title: '是否对所更改内容保存',
					okText: '保存',
					cancelText: '不保存',
					onOk: function onOk() {
						_this.saveSubTaskRecord(record.id);
					},
					onCancel: function onCancel() {
						_this.onCalac(record.id);
					}
				});
			}
		};

		_this3.onTaskRef = function (ref) {
			_this3.subtask = ref;
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
				"pid": "",
				"projectId": "",
				"treeType": "task",
				"masters": [],
				"children": null,
				"name": "",
				"rate": 0,
				"nodeCount": null,
				"beginTime": null,
				"endTime": null,
				"orders": 0,
				"remark": ""
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

	_createClass(EditableTable2, [{
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
						"pid": nextProps.pid,
						"projectId": nextProps.projectId,
						"treeType": "task",
						"masters": [],
						"children": null,
						"name": "",
						"rate": 0,
						"nodeCount": null,
						"beginTime": null,
						"endTime": null,
						"orders": 0,
						"remark": ""
					}) // 新增任务数据
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this4 = this;

			this.setState({
				dataSource: this.props.dataSource == null || this.props.dataSource.length == 0 ? [] : this.props.dataSource.map(function (item, index) {
					return Object.assign(item, { "key": index });
				}),
				count: this.props.dataSource === null || this.props.dataSource.length == 0 ? 0 : this.props.dataSource.length,
				primaryData: Object.assign({}, {
					"id": "",
					"pid": this.props.pid,
					"projectId": this.props.projectId,
					"treeType": "task",
					"masters": [],
					"children": null,
					"name": "",
					"rate": 0,
					"nodeCount": null,
					"beginTime": null,
					"endTime": null,
					"orders": 0,
					"remark": ""
				}), // 新增任务数据
				expandedKeys: [], // 折叠
				keys: [], // 折叠
				subtasks: []
			});
			/*if(true){ // 暂时控制不住多次事件监听
   	runonlyonce = true;
   	this.emitterEvent = emitter.addListener('handletaskid', (obj)=>{
   		console.log('触发监听')
   		this.getKeyByShowRow(obj.pid, obj.id);
      })
   }*/
			this.eventE2 = _events2.default.addListener('handletaskid', function (obj) {
				_this4.getKeyByShowRow(obj.pid, obj.pid, obj.isEdit);
			});
		}
	}, {
		key: 'componentWillUnMount',
		value: function componentWillUnMount() {
			_events2.default.removeListener(this.eventE2);
		}

		// 锚点定位


		// 删除


		// 新增


		// 保存


		// 折叠效果


		// 查看


		// 拆解


		// 保存子任务


		// 更新子任务数据


		// 取消保存


		// 折叠收起


		// 点击

	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _state = this.state,
			    subTaskDis = _state.subTaskDis,
			    dataSource = _state.dataSource,
			    expandedKeys = _state.expandedKeys;
			var disabled = this.props.disabled;
			var taskhaveattt = this.props.taskhaveattt;

			var isChaijie = expandedKeys.length > 0;
			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var columnEle = taskhaveattt ? [{
				title: '任务',
				dataIndex: 'name',
				width: '12%',
				align: "center",
				editable: !disabled && !isChaijie,
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							//  id={`/workdetail?projectid=${record.projectId}&id=${record.id}`}
							id: record.id,
							onClick: _this5.onRow.bind(_this5, record),
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							className: 'pr' },
						_react2.default.createElement(_antd.Icon, { className: record.delayType !== 0 && disabled ? "" : "hidden", style: { fontSize: '18px', position: 'absolute', left: '5px', color: 'red', top: '50%', transform: 'translateY(-50%)' }, type: 'exclamation-circle' }),
						text
					);
				}
			}, {
				title: '负责人',
				dataIndex: 'masters',
				width: '12%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record) },
						text == null ? "" : text.map(function (item) {
							return item.userName;
						}).join("、")
					);
				}
			}, {
				title: '开始日期',
				dataIndex: 'beginTime',
				width: '12%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record) },
						text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '截止日期',
				dataIndex: 'endTime',
				width: '12%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record) },
						text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '完成比例',
				dataIndex: 'rate',
				width: '12%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: { width: '100%', height: '46px', lineHeight: '46px' }, onClick: _this5.onRow.bind(_this5, record) },
						text,
						'%'
					);
				}
			}, {
				title: '对应产出',
				dataIndex: 'attc',
				width: '12%',
				align: "center",
				render: function render(text, record) {
					var attcObj = record.children != null && record.children.filter(function (item) {
						return item.treeType === 'attc';
					})[0]; //附件对象
					var attachments = attcObj && attcObj.children && attcObj.children != null ? attcObj.children.map(function (vitem) {
						return Object.assign({}, {
							uid: vitem.id,
							name: vitem.fileName,
							status: 'done',
							url: vitem.filePath,
							fileId: vitem.fileId,
							fileName: vitem.fileName,
							filePath: vitem.filePath,
							id: vitem.id
						});
					}) : [];
					return _react2.default.createElement(
						'div',
						{ className: 'table_upload' },
						attcObj == false ? "- -" : _react2.default.createElement(_MyUpload2.default, {
							saveAttachment: _this5.props.saveAttachment,
							delNode: _this5.props.delNode,
							fileList: attachments,
							pid: attcObj ? attcObj.id : "",
							projectId: attcObj ? attcObj.projectId : "",
							disabled: disabled || isChaijie,
							ossData: _this5.props.oss,
							multiple: false
						})
					);
				}
			}, {
				title: '备注',
				dataIndex: 'remark',
				width: '12%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					var content = _react2.default.createElement(
						'div',
						null,
						text == null || text == "" ? null : _react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'span',
								{ style: { fontWeight: '700', color: '#333' } },
								'\u6574\u4F53:'
							),
							' ',
							text
						),
						record.children == null || record.children == [] ? null : record.children.filter(function (item) {
							return item.treeType === 'subtask';
						}).map(function (item, index) {
							return _react2.default.createElement(
								'p',
								{ className: item.remark == null || item.remark == "" ? "hidden" : "", key: 'task_' + index },
								_react2.default.createElement(
									'span',
									{ style: { fontWeight: '700', color: '#333' } },
									'\u5907\u6CE8',
									index + 1,
									':'
								),
								' ',
								item.remark
							);
						})
					);
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record)
						},
						_react2.default.createElement(
							_antd.Popover,
							{ content: content, trigger: 'hover' },
							_react2.default.createElement(
								'div',
								{
									style: { maxWidth: '180px' },
									className: 'ellsis' },
								text == null || text == "" ? null : _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(
										'span',
										{ style: { fontWeight: '700', color: '#333' } },
										'\u6574\u4F53:'
									),
									' ',
									text
								),
								record.children == null || record.children == [] ? null : record.children.filter(function (item) {
									return item.treeType === 'subtask';
								}).map(function (item, index) {
									return _react2.default.createElement(
										'span',
										{ key: 'task_' + index, className: item.remark == null || item.remark == "" ? "hidden" : "" },
										_react2.default.createElement(
											'span',
											{ style: { paddingLeft: '5px', fontWeight: '700', color: '#333' } },
											'\u5907\u6CE8',
											index + 1,
											':'
										),
										' ',
										item.remark
									);
								})
							)
						)
					);
				}
			}, {
				title: '排期',
				dataIndex: 'operation',
				align: "center",
				render: function render(text, record) {
					var actionName = '拆解';
					if (expandedKeys.filter(function (item) {
						return item == record.id;
					}).length > 0 && !subTaskDis) {
						return _react2.default.createElement(
							'span',
							null,
							_react2.default.createElement(
								'a',
								{ onClick: _this5.onCalac.bind(_this5, record.id) },
								'\u53D6\u6D88'
							),
							_react2.default.createElement(
								'a',
								{ className: 'ml15', onClick: _this5.saveSubTaskRecord.bind(_this5, record.id) },
								'\u4FDD\u5B58'
							)
						);
					} else {
						// 子任务数
						var subTasks = record.children == null ? [] : record.children.filter(function (item) {
							return item.treeType === 'subtask';
						});
						var subNumber = subTasks == null || subTasks.length == 0 ? 0 : subTasks.length;
						if (disabled) {
							// 详情态
							if (subNumber == 0) {
								// 子任务数等于0
								return _react2.default.createElement(
									'a',
									{ onClick: _this5.handleApart.bind(_this5, record) },
									'\u62C6\u89E3'
								);
								//return <span>{subNumber}</span>
							} else {
								// 子任务数大于0
								return _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(
										'a',
										{ title: '\u67E5\u770B', onClick: _this5.handleView.bind(_this5, record.id) },
										subNumber
									),
									_react2.default.createElement(_antd.Icon, { onClick: _this5.handleApart.bind(_this5, record), className: 'pointer', style: { marginLeft: "10px" }, title: '\u7F16\u8F91', type: 'edit' })
								);
							}
						} else {
							// 编辑态
							return _react2.default.createElement(
								'a',
								{ onClick: _this5.handleApart.bind(_this5, record) },
								subNumber == 0 ? actionName : subNumber
							);
						}
					}
				}
			}] : [{
				title: '任务',
				dataIndex: 'name',
				width: '14%',
				align: "center",
				editable: !disabled && !isChaijie,
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							id: record.id
							//id={`/workdetail?projectid=${record.projectId}&id=${record.id}`}
							, onClick: _this5.onRow.bind(_this5, record),
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							className: 'pr' },
						_react2.default.createElement(_antd.Icon, { className: record.delayType !== 0 && disabled ? "" : "hidden", style: { fontSize: '18px', position: 'absolute', left: '5px', color: 'red', top: '50%', transform: 'translateY(-50%)' }, type: 'exclamation-circle' }),
						text
					);
				}
			}, {
				title: '负责人',
				dataIndex: 'masters',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: { width: '100%', height: '46px', lineHeight: '46px' }, onClick: _this5.onRow.bind(_this5, record) },
						text == null ? "" : text.map(function (item) {
							return item.userName;
						}).join("、")
					);
				}
			}, {
				title: '开始日期',
				dataIndex: 'beginTime',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: { width: '100%', height: '46px', lineHeight: '46px' }, onClick: _this5.onRow.bind(_this5, record) },
						text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '截止日期',
				dataIndex: 'endTime',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: { width: '100%', height: '46px', lineHeight: '46px' }, onClick: _this5.onRow.bind(_this5, record) },
						text == null || text == 0 ? "" : (0, _moment2.default)(text).format("YYYY-MM-DD")
					);
				}
			}, {
				title: '完成比例',
				dataIndex: 'rate',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: { width: '100%', height: '46px', lineHeight: '46px' }, onClick: _this5.onRow.bind(_this5, record) },
						text,
						'%'
					);
				}
			}, {
				title: '备注',
				dataIndex: 'remark',
				width: '14%',
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					var content = _react2.default.createElement(
						'div',
						null,
						text == null || text == "" ? null : _react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'span',
								{ style: { fontWeight: '700', color: '#333' } },
								'\u6574\u4F53:'
							),
							' ',
							text
						),
						record.children == null || record.children == [] ? null : record.children.filter(function (item) {
							return item.treeType === 'subtask';
						}).map(function (item, index) {
							return _react2.default.createElement(
								'p',
								{ className: item.remark == null || item.remark == "" ? "hidden" : "", key: 'task_' + index },
								_react2.default.createElement(
									'span',
									{ style: { fontWeight: '700', color: '#333' } },
									'\u5907\u6CE8',
									index + 1,
									':'
								),
								' ',
								item.remark
							);
						})
					);
					return _react2.default.createElement(
						'div',
						{
							style: { width: '100%', height: '46px', lineHeight: '46px' },
							onClick: _this5.onRow.bind(_this5, record) },
						_react2.default.createElement(
							_antd.Popover,
							{ content: content, trigger: 'hover' },
							_react2.default.createElement(
								'div',
								{
									style: { maxWidth: '180px' },
									className: 'ellsis' },
								text == null || text == "" ? null : _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(
										'span',
										{ style: { fontWeight: '700', color: '#333' } },
										'\u6574\u4F53:'
									),
									' ',
									text
								),
								record.children == null || record.children == [] ? null : record.children.filter(function (item) {
									return item.treeType === 'subtask';
								}).map(function (item, index) {
									return _react2.default.createElement(
										'span',
										{ key: 'task_' + index, className: item.remark == null || item.remark == "" ? "hidden" : "" },
										_react2.default.createElement(
											'span',
											{ style: { paddingLeft: '5px', fontWeight: '700', color: '#333' } },
											'\u5907\u6CE8',
											index + 1,
											':'
										),
										' ',
										item.remark
									);
								})
							)
						)
					);
				}
			}, {
				title: '排期',
				dataIndex: 'operation',
				align: "center",
				render: function render(text, record) {
					var actionName = '拆解';
					if (expandedKeys.filter(function (item) {
						return item == record.id;
					}).length > 0 && !subTaskDis) {
						return _react2.default.createElement(
							'span',
							null,
							_react2.default.createElement(
								'a',
								{ onClick: _this5.onCalac.bind(_this5, record.id) },
								'\u53D6\u6D88'
							),
							_react2.default.createElement(
								'a',
								{ className: 'ml15', onClick: _this5.saveSubTaskRecord.bind(_this5, record.id) },
								'\u4FDD\u5B58'
							)
						);
					} else {
						// 子任务数
						var subTasks = record.children == null ? [] : record.children.filter(function (item) {
							return item.treeType === 'subtask';
						});
						var subNumber = subTasks == null || subTasks.length == 0 ? 0 : subTasks.length;
						if (disabled) {
							// 详情态
							if (subNumber == 0) {
								// 子任务数等于0
								return _react2.default.createElement(
									'a',
									{ onClick: _this5.handleApart.bind(_this5, record) },
									'\u62C6\u89E3'
								);
								//return <span>{subNumber}</span>
							} else {
								// 子任务数大于0
								return _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(
										'a',
										{ title: '\u67E5\u770B', onClick: _this5.handleView.bind(_this5, record.id) },
										subNumber
									),
									_react2.default.createElement(_antd.Icon, { onClick: _this5.handleApart.bind(_this5, record), className: 'pointer', style: { marginLeft: "10px" }, title: '\u7F16\u8F91', type: 'edit' })
								);
							}
						} else {
							// 编辑态
							return _react2.default.createElement(
								'a',
								{ onClick: _this5.handleApart.bind(_this5, record) },
								subNumber == 0 ? actionName : subNumber
							);
						}
					}
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
							personData: mobx.toJS(_this5.store.personData),
							handleSave: _this5.handleSave,
							handleDelete: _this5.handleDelete
						};
					}
				});
			});
			var expandedRowRender = function expandedRowRender(record) {
				// 新增子任务
				var addRecord = {
					id: "",
					pid: record.id || "",
					projectId: record.projectId || "",
					treeType: "subtask",
					masters: record.masters == null ? [] : record.masters,
					alreadyHours: 0,
					totalHours: 0,
					rate: 0,
					name: "",
					remark: "",
					beginTime: null,
					endTime: null
				};
				return _react2.default.createElement(_TaskSplite2.default, {
					store: _this5.store,
					record: record,
					addRecord: addRecord,
					personData: mobx.toJS(_this5.store.personData),
					dataSource: record.children == null ? [] : record.children.filter(function (item) {
						return item.treeType === 'subtask';
					}),
					collapseOnChange: function collapseOnChange() {
						return isChaijie && !disabled ? _this5.onPackup(record) : _this5.saveExpandedRows(record.id);
					},
					handleSaveSubTask: _this5.handleSaveSubTask,
					disabled: subTaskDis,
					id: record.id,
					onTaskRef: _this5.onTaskRef
				});
			};
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
					expandedRowRender: expandedRowRender,
					rowKey: function rowKey(row) {
						return row.id;
					}
				}),
				disabled ? null : _react2.default.createElement(_antd.Icon, { onClick: this.handleAdd, style: { margin: '16px 0', color: '#4BA4BE', fontSize: '22px' }, type: 'plus-circle' })
			);
		}
	}]);

	return EditableTable2;
}(_react2.default.Component)) || _class2;

exports.default = EditableTable2;

/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            * 进度步骤条
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _antd.Input.TextArea;

var ProgressList = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(ProgressList, _React$Component);

    function ProgressList(props) {
        _classCallCheck(this, ProgressList);

        var _this = _possibleConstructorReturn(this, (ProgressList.__proto__ || Object.getPrototypeOf(ProgressList)).call(this, props));

        _this.showModal = function () {
            _this.setState({
                visible: true
            });
        };

        _this.countDown = function () {
            var secondsToGo = 3;
            var modal = _antd.Modal.success({
                title: '感谢所有人对此项目所付出的努力',
                content: '\u5E78\u82E6\u4E86\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01\uFF01'
            });
            var timer = setInterval(function () {
                secondsToGo -= 1;
                modal.update({
                    content: '\u5E78\u82E6\u4E86\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01\uFF01'
                });
            }, 1000);
            setTimeout(function () {
                clearInterval(timer);
                modal.destroy();
            }, secondsToGo * 1000);
        };

        _this.handleOk = function (e) {
            if (_this.state.value == "" || _this.state.value == null) {
                _antd.message.warn("请填写关闭原因");
                return false;
            }
            var params = {
                projectId: _this.store.projectId,
                text: _this.state.value
            };
            _this.store.closeProject(params).then(function (res) {
                if (res) {
                    _this.setState({
                        visible: false,
                        value: ""
                    }, function () {
                        _this.countDown();
                        _this.props.updateTree();
                        _this.store.getStageTree();
                    });
                } else {
                    _antd.message.error("关闭失败");
                }
            });
        };

        _this.onCancel = function () {
            _this.setState({
                visible: false,
                value: ""
            });
        };

        _this.onChange = function (_ref) {
            var value = _ref.target.value;

            _this.setState({ value: value });
        };

        _this.store = _this.props.store;
        _this.state = {
            visible: false,
            value: ""
        };
        return _this;
    }

    _createClass(ProgressList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}

        // 定位

    }, {
        key: 'scrollToAnchor',
        value: function scrollToAnchor(key) {
            var scrollToAnchor = this.props.scrollToAnchor;

            scrollToAnchor(key);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                listData = _props.listData,
                isShow = _props.isShow;
            var _store = this.store,
                state = _store.state,
                closeReason = _store.closeReason;

            var content = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    state == 1 ? "圆满结束，感谢大家的所有付出！" : closeReason
                )
            );
            var isAll = mobx.toJS(listData).every(function (computer) {
                // false 全部完成
                return computer.rate >= 100;
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Affix,
                    { offsetTop: 1 },
                    _react2.default.createElement(
                        'div',
                        { className: 'w clearfix pr',
                            style: { backgroundColor: '#FFF',
                                boxShadow: "0 1px 1px rgba(24,144,255, 0.15), 0 2px 6px 0 rgba(24,144,255, 0.45)",
                                minHeight: '30px',
                                padding: '10px 30px 7px 30px' } },
                        mobx.toJS(listData).length > 0 ? mobx.toJS(listData).map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    onClick: _this2.scrollToAnchor.bind(_this2, item.key),
                                    key: index,
                                    style: {
                                        width: '14%',
                                        float: 'left',
                                        display: 'inlineBlock',
                                        position: 'relative'
                                    } },
                                item.rate > 0 ? _react2.default.createElement(_antd.Badge, { className: 'worktile_progress_span_active', status: 'processing' }) : _react2.default.createElement('span', { className: state == 2 ? "worktile_progress_span worktile_progress_span_close" : "worktile_progress_span" }),
                                _react2.default.createElement(_antd.Progress, {
                                    className: state == 2 ? "worktile_progress_close worktile_progress" : "worktile_progress",
                                    style: {
                                        display: 'inlineBlock',
                                        paddingLeft: '9px'
                                    },
                                    size: 'small',
                                    strokeLinecap: 'square',
                                    percent: item.rate == null ? 0 : item.rate }),
                                _react2.default.createElement(
                                    'div',
                                    { style: { textAlign: 'left', position: 'relative', left: '-20px' } },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { cursor: "pointer" }, className: item.rate > 0 ? "worktile_progress_item_active" : "worktile_progress_item" },
                                        item.stageName,
                                        item.stageName == "方案设计" && item.indexs >= 2 ? _react2.default.createElement(_antd.Badge, {
                                            count: item.indexs,
                                            className: 'ml5',
                                            style: { cursor: 'default', backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }
                                        }) : null
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'worktile_progress_name', style: { cursor: "pointer" } },
                                        item.masters == null ? "" : item.masters.length > 0 && item.masters.map(function (item) {
                                            return item.userName;
                                        }).join("、"),
                                        item.rate == 100 ? _react2.default.createElement(_antd.Icon, { type: 'check-circle', style: { paddingLeft: '5px', fontSize: '16px', color: "#108DE9", cursor: "pointer" } }) : null
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'worktile_progress_name' },
                                        item.finishTime == 0 || item.finishTime == null ? item.rate > 0 ? _react2.default.createElement(
                                            'a',
                                            { style: { cursor: "pointer" } },
                                            '\u8FDB\u884C\u4E2D'
                                        ) : null : item.rate == 100 ? (0, _moment2.default)(item.finishTime).format("YYYY-MM-DD HH:mm") : _react2.default.createElement(
                                            'a',
                                            { style: { cursor: "pointer" } },
                                            '\u8FDB\u884C\u4E2D'
                                        )
                                    )
                                )
                            );
                        }) : _react2.default.createElement(_antd.Empty, { description: false }),
                        _react2.default.createElement(
                            'div',
                            { className: mobx.toJS(listData).length > 0 ? "" : "hidden",
                                style: {
                                    width: '2%',
                                    float: 'left',
                                    display: 'inlineBlock',
                                    position: 'relative'
                                } },
                            isAll ? _react2.default.createElement(_antd.Badge, { className: 'worktile_progress_span_active', status: 'processing' }) : _react2.default.createElement('span', { className: state == 2 ? "worktile_progress_span worktile_progress_span_close" : "worktile_progress_span" }),
                            _react2.default.createElement(
                                'div',
                                { style: { textAlign: 'left', position: 'relative', left: '-22px', top: '22px' } },
                                _react2.default.createElement(
                                    'p',
                                    { className: isAll ? "worktile_progress_item_active" : "worktile_progress_item", style: { width: '80px', cursor: "pointer" } },
                                    '\u5168\u90E8\u5B8C\u6210'
                                )
                            )
                        ),
                        isShow ? null : _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                _antd.Button,
                                {
                                    onClick: this.showModal,
                                    className: state == 0 ? "fr btn_yellow mt5" : "hidden",
                                    style: { position: "absolute", right: "40px", bottom: "10px" },
                                    type: 'primary',
                                    shape: 'round',
                                    size: "small",
                                    ghost: true },
                                '\u5173\u95ED\u9879\u76EE'
                            ),
                            _react2.default.createElement(
                                _antd.Popover,
                                { content: content },
                                _react2.default.createElement(
                                    _antd.Button,
                                    { className: state == 1 ? "fr mt5" : "hidden",
                                        style: { position: "absolute", right: "40px", bottom: "10px" },
                                        type: 'primary',
                                        size: "small",
                                        shape: 'round' },
                                    '\u6B63\u5E38\u7ED3\u675F'
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Popover,
                                { content: content },
                                _react2.default.createElement(
                                    _antd.Button,
                                    { className: state == 2 ? "fr btn_yellow_active mt5" : "hidden",
                                        style: { position: "absolute", right: "40px", bottom: "10px" },
                                        type: 'primary',
                                        size: "small",
                                        shape: 'round' },
                                    '\u4E2D\u9014\u5173\u95ED'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        title: '\u8BF7\u586B\u5199\u9879\u76EE\u4E2D\u9014\u5173\u95ED\u7684\u539F\u56E0',
                        visible: this.state.visible,
                        onOk: this.handleOk,
                        onCancel: this.onCancel
                    },
                    _react2.default.createElement(TextArea, {
                        value: this.state.value,
                        onChange: this.onChange,
                        placeholder: '\u8BF7\u586B\u5199\u539F\u56E0',
                        autoSize: { minRows: 3, maxRows: 5 }
                    })
                )
            );
        }
    }]);

    return ProgressList;
}(_react2.default.Component)) || _class;

exports.default = ProgressList;

/***/ }),

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 项目信息 新的模板
                  * dangw@glodon.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _AsyncSelectMuti = __webpack_require__(1536);

var _AsyncSelectMuti2 = _interopRequireDefault(_AsyncSelectMuti);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _antd.Input.TextArea;
var TabPane = _antd.Tabs.TabPane;
var Option = _antd.Select.Option;

var obj = { 2: ["5"], 4: ["4"], 5: ["6"] }; // 处理产品类型

var Index = (_dec = _antd.Form.create(), _dec(_class = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this2 = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this2.callback = function (key) {
			_this2.setState({
				key: key
			});
		};

		_this2.updatePerson = function (userIds) {
			var fields = JSON.parse(JSON.stringify(_this2.state.fields));
			_this2.setState({
				fields: Object.assign(fields, {
					"masters": userIds
				})
			});
		};

		_this2.onChangeVis = function () {
			_this2.setState({
				hidden: !_this2.state.hidden,
				count: Number(_this2.state.count) + 1
			});
			_this2.props.updateCount('count', Number(_this2.props.count) + 1);
		};

		_this2.onCanlc = function () {
			_this2.props.form.resetFields();
			_this2.setState({
				hidden: !_this2.state.hidden,
				key: "1"
			});
		};

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			var _this = _this2;
			var fields = _this.state.fields;

			_this.props.form.validateFields(function (err, values) {
				if (!err) {
					delete values.masters;
					var params = Object.assign(fields, values, {
						"projectType": _this2.props.projectType,
						"productType": values.productType.map(function (item) {
							return item.toString();
						}),
						"beginTime": values['beginTime'] == null || values['beginTime'] == "" ? 0 : (0, _moment2.default)(values['beginTime'].format('YYYY-MM-DD'), 'YYYY-MM-DD').valueOf(),
						"endTime": values['endTime'] == null || values['endTime'] == "" ? 0 : (0, _moment2.default)(values['endTime'].format('YYYY-MM-DD'), 'YYYY-MM-DD').valueOf(),
						"temporaryBeginTime": values['temporaryBeginTime'] == null || values['temporaryBeginTime'] == "" ? 0 : (0, _moment2.default)(values['temporaryBeginTime'].format('YYYY-MM-DD'), 'YYYY-MM-DD').valueOf(),
						"temporaryEndTime": values['temporaryEndTime'] == null || values['temporaryEndTime'] == "" ? 0 : (0, _moment2.default)(values['temporaryEndTime'].format('YYYY-MM-DD'), 'YYYY-MM-DD').valueOf()
					});
					if (params.children == null) {
						delete params.children;
					}
					_this.props.saveProject(params);
				}
			});
		};

		_this2.state = {
			fields: {
				"id": "",
				"pid": "",
				"projectId": "",
				"code": "",
				"name": "",
				"masters": [],
				"customer": "",
				"productType": [],
				"address": "",
				"description": "",
				"milepost": "",
				"builtArea": "",
				"totalCost": "",
				"builtType": "",
				"beginTime": null,
				"endTime": null,
				"constructionUnit": "",
				"constructionQualification": "",
				"partyaUnit": "",
				"unitQualification": "",
				"declarationAwards": "",
				"awardGrade": "",
				"buySoftware": "",
				"usageSituation": "",
				"background": "",
				"temporaryDecision": "",
				"temporaryManagerDesire": "",
				"temporaryRequirement": "",
				"temporaryBudgetStandard": "",
				"temporaryTotalAcceptability": "",
				"temporaryTotalRange": "",
				"temporaryBudget": "",
				"temporaryPriceDesire": "",
				"temporaryEstimatePrice": "",
				"temporaryManagersNumber": "",
				"temporaryWorkersNumber": "",
				"temporaryBeginTime": null,
				"temporaryEndTime": null,
				"temporaryBudgetEvaluation": ""
			}, // 存储当前组件的数据
			hidden: true, // 面板是否折叠展开
			count: 1, // 记录创建还是编辑
			key: "1" // 当前key
		};
		return _this2;
	}

	_createClass(Index, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {
			var itemObj = nextProps.itemObj;

			if (itemObj) {
				if (JSON.stringify(itemObj) !== JSON.stringify(this.props.itemObj)) {
					this.setState({
						fields: Object.assign({}, itemObj.children.filter(function (item) {
							return item.treeType == "projectinfo";
						})[0])
					});
				}
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    itemObj = _props.itemObj,
			    count = _props.count,
			    hidden = _props.hidden;

			this.setState({
				fields: Object.assign({}, itemObj.children.filter(function (item) {
					return item.treeType == "projectinfo";
				})[0]),
				count: count,
				hidden: hidden
			});
			this.props.onRef(this);
		}

		// 人员选择更新


		// 编辑、创建


		// 取消


		// 保存

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    fields = _state.fields,
			    hidden = _state.hidden,
			    key = _state.key;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					md: { span: 8 },
					sm: { span: 10 }
				},
				wrapperCol: {
					xs: { span: 24 },
					md: { span: 16 },
					sm: { span: 14 }
				}
			};
			var formItemLayout2 = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 12 },
					md: { span: 10 },
					lg: { span: 10 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 12 },
					md: { span: 14 },
					lg: { span: 14 }
				}
			};
			var _props2 = this.props,
			    itemObj = _props2.itemObj,
			    state = _props2.state,
			    ossData = _props2.ossData,
			    saveAttachment = _props2.saveAttachment,
			    delNode = _props2.delNode,
			    count = _props2.count,
			    projectType = _props2.projectType;

			var attcObj = itemObj.children != null && itemObj.children.filter(function (item) {
				return item.treeType === 'attc';
			})[0]; //附件对象
			var attachments = attcObj.children != null ? attcObj.children.map(function (vitem) {
				return Object.assign({}, {
					uid: vitem.id,
					name: vitem.fileName,
					status: 'done',
					url: vitem.filePath,
					fileId: vitem.fileId,
					fileName: vitem.fileName,
					filePath: vitem.filePath,
					id: vitem.id
				});
			}) : [];
			var temID = {};
			return _react2.default.createElement(
				_antd.Card,
				{ bordered: true, className: 'pr', style: { width: '100%' } },
				_react2.default.createElement(
					'h3',
					{ id: itemObj.id || "items0", className: 'kanban_title mb20' },
					'\u9879\u76EE\u4FE1\u606F'
				),
				_react2.default.createElement(
					'span',
					{ className: 'worktile_progress_add' },
					hidden ? _react2.default.createElement(
						_antd.Button,
						{ className: state == 2 ? "hidden" : "", type: 'link', onClick: this.onChangeVis },
						count == 1 ? "创建" : "编辑"
					) : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'span',
							{ onClick: this.onCanlc, className: 'mr10' },
							'\u53D6\u6D88'
						),
						_react2.default.createElement(
							'span',
							{ onClick: this.handleSubmit },
							'\u4FDD\u5B58'
						)
					)
				),
				_react2.default.createElement(
					_antd.Tabs,
					{ className: count == 1 ? "hidden" : "item_tabs", activeKey: key, onChange: this.callback },
					_react2.default.createElement(
						TabPane,
						{ tab: '\u4E3B\u4F53\u9879\u76EE\u4FE1\u606F', key: '1' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9879\u76EE\u540D\u79F0', className: 'w' },
										getFieldDecorator('name', {
											initialValue: fields.name || "",
											rules: [{ required: true, message: '请输入项目名称' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u4E3B\u8D1F\u8D23\u4EBA', className: 'w' },
										getFieldDecorator('masters', {
											initialValue: fields.masters == null ? [] : fields.masters,
											rules: [{ required: false, message: '请输入主负责人' }]
										})(_react2.default.createElement(_PersonAddIcon2.default, {
											data: fields.masters == null ? [] : fields.masters,
											updatePerson: this.updatePerson,
											disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5BA2\u6237\u540D\u79F0', className: 'w' },
										getFieldDecorator('customer', {
											initialValue: fields.customer || "",
											rules: [{ required: false, message: '请输入客户名称' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								)
							),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xl: 16 },
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u4EA7\u54C1\u7C7B\u578B', className: 'w' },
											getFieldDecorator('productType', {
												initialValue: projectType == 4 || projectType == 5 ? obj[projectType] : fields.productType == null ? [] : fields.productType,
												rules: [{ required: false, message: '请选择产品类型' }]
											})(_react2.default.createElement(_AsyncSelectMuti2.default, {
												className: 'w',
												type: 'getProductTypeList',
												variables: {},
												query: _bpm2.default.bpm.getProductTypeList,
												url: _config2.default.bpm.getProductTypeList,
												value: projectType == 4 || projectType == 5 ? obj[projectType] : fields.productType == null ? [] : fields.productType,
												itemKey: 'id',
												itemValue: 'typeName',
												disabled: hidden || projectType == 4 || projectType == 5
											}))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u9879\u76EE\u5730\u70B9', className: 'w' },
											getFieldDecorator('address', {
												initialValue: fields.address || "",
												rules: [{ required: false, message: '请输入项目地点' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: _react2.default.createElement(
													'span',
													null,
													'\u5EFA\u7B51\u9762\u79EF(\u33A1)'
												), className: 'w' },
											getFieldDecorator('builtArea', {
												initialValue: fields.builtArea || "",
												rules: [{ required: false, message: '请输入建筑面积' }]
											})(_react2.default.createElement(_antd.InputNumber, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden, className: 'w' }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u603B\u9020\u4EF7(\u4E07\u5143)', className: 'w' },
											getFieldDecorator('totalCost', {
												initialValue: fields.totalCost || "",
												rules: [{ required: false, message: '请输入总造价' }]
											})(_react2.default.createElement(_antd.InputNumber, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden, className: 'w' }))
										)
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xl: 8 },
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 24 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u9879\u76EE\u6982\u51B5', className: 'w' },
											getFieldDecorator('description', {
												initialValue: fields.description || "",
												rules: [{ required: false, message: '请输入项目概况' }]
											})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
										)
									)
								)
							),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5EFA\u7B51\u7C7B\u578B', className: 'w' },
										getFieldDecorator('builtType', {
											initialValue: fields.builtType || "",
											rules: [{ required: false, message: '请输入建筑类型' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5F00\u5DE5\u65E5\u671F', className: 'w' },
										getFieldDecorator('beginTime', {
											initialValue: fields.beginTime == null || fields.beginTime == 0 ? "" : (0, _moment2.default)((0, _moment2.default)(fields.beginTime).format('YYYY-MM-DD'), "YYYY-MM-DD"),
											rules: [{ required: false, message: '请选择开工日期' }]
										})(_react2.default.createElement(_antd.DatePicker, {
											className: 'w',
											placeholder: '\u8BF7\u9009\u62E9',
											format: 'YYYY-MM-DD',
											disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u7AE3\u5DE5\u65E5\u671F', className: 'w' },
										getFieldDecorator('endTime', {
											initialValue: fields.endTime == null || fields.endTime == 0 ? "" : (0, _moment2.default)((0, _moment2.default)(fields.endTime).format('YYYY-MM-DD'), "YYYY-MM-DD"),
											rules: [{ required: false, message: '请选择竣工日期' }]
										})(_react2.default.createElement(_antd.DatePicker, {
											format: 'YYYY-MM-DD',
											className: 'w',
											placeholder: '\u8BF7\u9009\u62E9',
											disabled: hidden }))
									)
								)
							),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xl: 16 },
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u65BD\u5DE5\u5355\u4F4D', className: 'w' },
											getFieldDecorator('constructionUnit', {
												initialValue: fields.constructionUnit || "",
												rules: [{ required: false, message: '请输入施工单位' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u65BD\u5DE5\u8D44\u8D28', className: 'w' },
											getFieldDecorator('constructionQualification', {
												initialValue: fields.constructionQualification || "",
												rules: [{ required: false, message: '请输入施工资质' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u7532\u65B9\u5355\u4F4D', className: 'w' },
											getFieldDecorator('partyaUnit', {
												initialValue: fields.partyaUnit || "",
												rules: [{ required: false, message: '请输入甲方单位' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u7532\u65B9\u8D44\u8D28', className: 'w' },
											getFieldDecorator('unitQualification', {
												initialValue: fields.unitQualification || "",
												rules: [{ required: false, message: '请输入甲方资质' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xl: 8 },
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 24 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u5173\u952E\u91CC\u7A0B\u7891', className: 'w' },
											getFieldDecorator('milepost', {
												initialValue: fields.milepost || "",
												rules: [{ required: false, message: '请输入关键里程碑' }]
											})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
										)
									)
								)
							),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xl: 16 },
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u7533\u62A5\u5956\u9879', className: 'w' },
											getFieldDecorator('declarationAwards', {
												initialValue: fields.declarationAwards || "",
												rules: [{ required: false, message: '请输入申报奖项' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u5956\u9879\u7B49\u7EA7', className: 'w' },
											getFieldDecorator('awardGrade', {
												initialValue: fields.awardGrade || "",
												rules: [{ required: false, message: '请输入奖项等级' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u5DF2\u91C7\u8D2D\u8F6F\u4EF6', className: 'w' },
											getFieldDecorator('buySoftware', {
												initialValue: fields.buySoftware || "",
												rules: [{ required: false, message: '请输入已采购软件' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									),
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 12 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u4F7F\u7528\u60C5\u51B5', className: 'w' },
											getFieldDecorator('usageSituation', {
												initialValue: fields.usageSituation || "",
												rules: [{ required: false, message: '请输入使用情况' }]
											})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
										)
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xl: 8 },
									_react2.default.createElement(
										_antd.Col,
										{ xs: 24, sm: 24, md: 18, lg: 12, xl: 24 },
										_react2.default.createElement(
											_antd.Form.Item,
											{ label: '\u9879\u76EE\u80CC\u666F\u53CA\u610F\u4E49', className: 'w' },
											getFieldDecorator('background', {
												initialValue: fields.background || "",
												rules: [{ required: false, message: '请输入项目背景及意义' }]
											})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
										)
									)
								)
							)
						)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u4E34\u5EFA\u9879\u76EE\u4FE1\u606F', key: '2' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout2),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u51B3\u7B56\u65B9\u5F0F', className: 'w' },
										getFieldDecorator('temporaryDecision', {
											initialValue: fields.temporaryDecision || "",
											rules: [{ required: false, message: '请输入决策方式' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9879\u76EE\u7ECF\u7406\u610F\u613F', className: 'w' },
										getFieldDecorator('temporaryManagerDesire', {
											initialValue: fields.temporaryManagerDesire || "",
											rules: [{ required: false, message: '请输入项目经理意愿' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u7279\u6B8A\u8981\u6C42', className: 'w' },
										getFieldDecorator('temporaryRequirement', {
											initialValue: fields.temporaryRequirement || "",
											rules: [{ required: false, message: '请输入特殊要求' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9884\u7B97\u6807\u51C6', className: 'w' },
										getFieldDecorator('temporaryBudgetStandard', {
											initialValue: fields.temporaryBudgetStandard || "",
											rules: [{ required: false, message: '请输入预算标准' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u603B\u627F\u5305\u5F62\u5F0F\u63A5\u53D7\u5EA6', className: 'w' },
										getFieldDecorator('temporaryTotalAcceptability', {
											initialValue: fields.temporaryTotalAcceptability || "",
											rules: [{ required: false, message: '请输入总承包形式接受度' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u603B\u627F\u5305\u8303\u56F4', className: 'w' },
										getFieldDecorator('temporaryTotalRange', {
											initialValue: fields.temporaryTotalRange || "",
											rules: [{ required: false, message: '请输入总承包范围' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5BA2\u6237\u9700\u6C42\u9884\u7B97\u4EF7(\u4E07\u5143)', className: 'w' },
										getFieldDecorator('temporaryBudget', {
											initialValue: fields.temporaryBudget || "",
											rules: [{ required: false, message: '请输入客户需求预算价' }]
										})(_react2.default.createElement(_antd.InputNumber, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden, className: 'w' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5BA2\u6237\u5BF9\u6B64\u4EF7\u683C\u610F\u613F\u5EA6', className: 'w' },
										getFieldDecorator('temporaryPriceDesire', {
											initialValue: fields.temporaryPriceDesire || "",
											rules: [{ required: false, message: '请输入客户对此价格意愿度' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9884\u4F30\u5BA2\u6237\u53EF\u63A5\u53D7\u4EF7\u683C', className: 'w' },
										getFieldDecorator('temporaryEstimatePrice', {
											initialValue: fields.temporaryEstimatePrice || "",
											rules: [{ required: false, message: '请输入预估客户可接受价格' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u7BA1\u7406\u4EBA\u5458\u6570\u91CF(\u4EBA)', className: 'w' },
										getFieldDecorator('temporaryManagersNumber', {
											initialValue: fields.temporaryManagersNumber || "",
											rules: [{ required: false, message: '请输入管理人员数量' }]
										})(_react2.default.createElement(_antd.InputNumber, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden, className: 'w' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u52B3\u52A1\u4EBA\u5458\u6570\u91CF(\u4EBA)', className: 'w' },
										getFieldDecorator('temporaryWorkersNumber', {
											initialValue: fields.temporaryWorkersNumber || "",
											rules: [{ required: false, message: '请输入劳务人员数量' }]
										})(_react2.default.createElement(_antd.InputNumber, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden, className: 'w' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9884\u7B97\u7EFC\u5408\u5224\u65AD', className: 'w' },
										getFieldDecorator('temporaryBudgetEvaluation', {
											initialValue: fields.temporaryBudgetEvaluation || "",
											rules: [{ required: false, message: '请选择预算综合判断' }]
										})(_react2.default.createElement(
											_antd.Select,
											{
												placeholder: '\u8BF7\u9009\u62E9',
												disabled: hidden,
												className: 'w' },
											_react2.default.createElement(
												Option,
												{ title: '\u6709\u4ED8\u8D39\u80FD\u529B\uFF0C\u9AD8\u5EA6\u91CD\u89C6\uFF0C\u5F3A\u8C03\u5DEE\u5F02\u5316\u4F53\u73B0', value: '\u6709\u4ED8\u8D39\u80FD\u529B\uFF0C\u9AD8\u5EA6\u91CD\u89C6\uFF0C\u5F3A\u8C03\u5DEE\u5F02\u5316\u4F53\u73B0' },
												'\u6709\u4ED8\u8D39\u80FD\u529B\uFF0C\u9AD8\u5EA6\u91CD\u89C6\uFF0C\u5F3A\u8C03\u5DEE\u5F02\u5316\u4F53\u73B0'
											),
											_react2.default.createElement(
												Option,
												{ title: '\u8FFD\u6C42\u666E\u901A\u6807\u51C6\uFF0C\u5408\u9002\u5C31\u597D', value: '\u8FFD\u6C42\u666E\u901A\u6807\u51C6\uFF0C\u5408\u9002\u5C31\u597D' },
												'\u8FFD\u6C42\u666E\u901A\u6807\u51C6\uFF0C\u5408\u9002\u5C31\u597D'
											),
											_react2.default.createElement(
												Option,
												{ title: '\u9884\u7B97\u6709\u9650\uFF0C\u4E34\u5EFA\u529F\u80FD\u521A\u9700\uFF0C\u5176\u4F59\u5C1A\u53EF\u5C31\u597D', value: '\u9884\u7B97\u6709\u9650\uFF0C\u4E34\u5EFA\u529F\u80FD\u521A\u9700\uFF0C\u5176\u4F59\u5C1A\u53EF\u5C31\u597D' },
												'\u9884\u7B97\u6709\u9650\uFF0C\u4E34\u5EFA\u529F\u80FD\u521A\u9700\uFF0C\u5176\u4F59\u5C1A\u53EF\u5C31\u597D'
											)
										))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5F00\u5DE5\u65E5\u671F', className: 'w' },
										getFieldDecorator('temporaryBeginTime', {
											initialValue: fields.temporaryBeginTime == null || fields.temporaryBeginTime == 0 ? "" : (0, _moment2.default)((0, _moment2.default)(fields.temporaryBeginTime).format('YYYY-MM-DD'), "YYYY-MM-DD"),
											rules: [{ required: false, message: '请选择开工日期' }]
										})(_react2.default.createElement(_antd.DatePicker, {
											className: 'w',
											format: 'YYYY-MM-DD',
											placeholder: '\u8BF7\u9009\u62E9',
											disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u7AE3\u5DE5\u65E5\u671F', className: 'w' },
										getFieldDecorator('temporaryEndTime', {
											initialValue: fields.temporaryEndTime == null || fields.temporaryEndTime == 0 ? "" : (0, _moment2.default)((0, _moment2.default)(fields.temporaryEndTime).format('YYYY-MM-DD'), "YYYY-MM-DD"),
											rules: [{ required: false, message: '请选择竣工日期' }]
										})(_react2.default.createElement(_antd.DatePicker, {
											className: 'w',
											format: 'YYYY-MM-DD',
											placeholder: '\u8BF7\u9009\u62E9',
											disabled: hidden }))
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: count == 1 || itemObj.id == null || itemObj.id == "" ? "hidden" : "pr" },
					_react2.default.createElement(_MyUpload2.default, {
						saveAttachment: saveAttachment,
						delNode: delNode,
						fileList: attachments,
						disabled: hidden,
						pid: attcObj.id,
						projectId: attcObj.projectId,
						ossData: ossData
					}),
					_react2.default.createElement(
						'span',
						{ style: {
								position: 'absolute',
								left: '35px',
								top: '4px',
								fontSize: '12px',
								color: '#999'
							} },
						'\u8BF7\u4E0A\u4F20\u73B0\u573A\u5E73\u9762\u5E03\u7F6E\u56FE\uFF08\u542B\u4E34\u5EFA\u533A\u57DF\u8303\u56F4\uFF09\u548C\u62DF\u5EFA\u5EFA\u7B51\u6548\u679C\u56FE\uFF08\u8BBE\u8BA1\u7406\u5FF5\uFF09'
					)
				)
			);
		}
	}]);

	return Index;
}(_react2.default.Component)) || _class);
exports.default = Index;

/***/ }),

/***/ 1796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//import moment from 'moment';
//import MyUpload from "@/components/worktile/MyUpload";


// import AsyncSelectMuti from "@/components/common/AsyncSelectMuti";
// import authSchemas from "@/utils/Schemas/authorization";
// import Config from "@/config";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _PersonAdd = __webpack_require__(94);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formItemLayout = {
	labelCol: { span: 11 },
	wrapperCol: { span: 13 }
};
var CustomizedForm = _antd.Form.create({
	name: 'proposalattc',
	onFieldsChange: function onFieldsChange(props, changedFields) {
		props.onChange(changedFields);
	},
	mapPropsToFields: function mapPropsToFields(props) {
		return {
			supplierPrice: _antd.Form.createFormField(_extends({}, props.supplierPrice, {
				value: props.supplierPrice.value
			})),
			customerPrice: _antd.Form.createFormField(_extends({}, props.customerPrice, {
				value: props.customerPrice.value
			})),
			upload: _antd.Form.createFormField(_extends({}, props.upload, {
				value: props.upload.value
			})),
			masters: _antd.Form.createFormField(_extends({}, props.masters, {
				value: props.masters.value
			}))
		};
	},
	onValuesChange: function onValuesChange(_, values) {
		// console.log(values);
	}
})(function (props) {
	var getFieldDecorator = props.form.getFieldDecorator;
	var onSave = props.onSave,
	    onBlur = props.onBlur,
	    attcObj = props.attcObj,
	    saveAttachment = props.saveAttachment,
	    delNode = props.delNode,
	    oss = props.oss;
	// const attachments = attcObj.children!=null?attcObj.children.map((vitem, index) => {
	//     return Object.assign({}, {
	//         uid: vitem.id,
	//         name: vitem.fileName,
	//         status: 'done',
	//         url: vitem.filePath,
	//         fileId: vitem.fileId,
	//         fileName:vitem.fileName,
	//         filePath: vitem.filePath,
	//         id: vitem.id
	//     })
	// }) : [];

	return _react2.default.createElement(
		_antd.Form,
		_extends({}, formItemLayout, { layout: 'horizontal' }),
		_react2.default.createElement(
			_antd.Form.Item,
			{ label: props.proposalLabel,
				labelCol: {
					xs: { span: 24 },
					sm: { span: 2 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 22 }
				}
			},
			_react2.default.createElement(
				_antd.Form.Item,
				{
					style: { width: '250px' },
					className: 'prop_attr',
					label: props.supplierLabel },
				getFieldDecorator('supplierPrice', {
					initialValue: props.supplierPrice.value == null || props.supplierPrice.value == 0 ? "" : props.supplierPrice.value,
					rules: [{ required: false, message: '字段不能为空' }]
				})(_react2.default.createElement(
					'span',
					{ className: 'w' },
					_react2.default.createElement(
						_antd.Tooltip,
						{
							placement: 'topLeft',
							trigger: ['focus'],
							title: props.supplierPrice.value > 1000 ? "金额单位是万元" : null },
						_react2.default.createElement(_antd.Input, { style: { width: '60px', marginRight: '5px' },
							disabled: props.isEdit,
							value: props.supplierPrice.value == null || props.supplierPrice.value == 0 ? "" : props.supplierPrice.value }),
						_react2.default.createElement(
							'span',
							null,
							'\u4E07\u5143'
						)
					)
				))
			),
			_react2.default.createElement(
				_antd.Form.Item,
				{
					style: { width: '250px' },
					className: 'prop_attr',
					label: props.customerLabel },
				getFieldDecorator('customerPrice', {
					initialValue: props.customerPrice.value == null || props.customerPrice.value == 0 ? "" : props.customerPrice.value,
					rules: [{ required: false, message: '字段不能为空' }]
				})(_react2.default.createElement(
					'span',
					{ className: 'w' },
					_react2.default.createElement(
						_antd.Tooltip,
						{
							placement: 'topLeft',
							trigger: ['focus'],
							title: props.customerPrice.value > 1000 ? "金额单位是万元" : null },
						_react2.default.createElement(_antd.Input, { style: { width: '60px', marginRight: '5px' },
							disabled: props.isEdit,
							value: props.customerPrice.value == null || props.customerPrice.value == 0 ? "" : props.customerPrice.value }),
						_react2.default.createElement(
							'span',
							null,
							'\u4E07\u5143'
						)
					)
				))
			)
		),
		_react2.default.createElement(
			_antd.Form.Item,
			{ label: '\u62A5\u4EF7\u540C\u6B65',
				labelCol: {
					xs: { span: 24 },
					sm: { span: 2 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 6 }
				},
				className: 'w' },
			getFieldDecorator('master999', {
				initialValue: props.masters.value.length > 0 ? props.masters.value.length > 0 && props.masters.value.map(function (item) {
					return item.userId;
				}) : [],
				rules: [{ required: false, message: '请选择同步人' }]
			})(_react2.default.createElement(
				'div',
				{ className: 'w' },
				_react2.default.createElement(_PersonAdd2.default, {
					data: props.masters.value.length > 0 ? props.masters.value.length > 0 && props.masters.value : [],
					updatePerson: onSave,
					disabled: props.isEdit
				})
			))
		)
	);
});

var ProposalAttc = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(ProposalAttc, _React$Component);

	function ProposalAttc(props) {
		_classCallCheck(this, ProposalAttc);

		var _this = _possibleConstructorReturn(this, (ProposalAttc.__proto__ || Object.getPrototypeOf(ProposalAttc)).call(this, props));

		_this.onChangeVis = function () {
			_this.setState({
				isEdit: !_this.state.isEdit
			});
		};

		_this.handleFormChange = function (changedFields) {
			_this.setState(function (_ref) {
				var fields = _ref.fields;
				return {
					fields: _extends({}, fields, changedFields)
				};
			}, function () {
				var proposalObj = _this.state.data.filter(function (item) {
					return item.treeType === 'proposal';
				})[0];
				var params = Object.assign({}, proposalObj, { "supplierPrice": _this.state.fields.supplierPrice.value }, { "customerPrice": _this.state.fields.customerPrice.value });
				_this.saveData(params);
				// 更新tree
				var treeData = JSON.parse(JSON.stringify(_this.store.treeData));
				_this.store.treeData = utils.updateTreeData(treeData, "update", params);
			});
		};

		_this.saveData = function (params) {
			_this.props.saveProposal(params);
		};

		_this.save2 = function (val, e) {
			var userIds = void 0;
			if (e.length) {
				userIds = e.map(function (item) {
					return { userId: item.props.value, userName: item.props.children };
				});
			} else {
				userIds = [];
			}
			var data = _this.state.data;

			var proposalObj = data.filter(function (item) {
				return item.treeType === 'proposal';
			})[0];
			var params = Object.assign({}, proposalObj, { "masters": userIds });
			_this.props.saveNodes(params);
			// this.saveData(params)
		};

		_this.save = function (users) {
			var data = _this.state.data;

			var proposalObj = data.filter(function (item) {
				return item.treeType === 'proposal';
			})[0];
			var params = Object.assign({}, proposalObj, { "masters": users });
			_this.props.saveNodes(params);
		};

		_this.store = _this.props.store;
		_this.state = {
			isEdit: false,
			data: _this.props.data,
			fields: {
				supplierPrice: {
					value: _this.props.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['supplierPrice'] || 0
				},
				customerPrice: {
					value: _this.props.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['customerPrice'] || 0
				},
				upload: {
					value: ""
				},
				masters: {
					value: _this.props.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['masters'] == null ? [] : _this.props.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['masters']
				}
			}
		};
		return _this;
	}

	_createClass(ProposalAttc, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.data != this.props.data) {
				this.setState({
					data: nextProps.data
				});
				var obj = {};
				obj.supplierPrice = {
					"value": nextProps.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['supplierPrice']
				};
				obj.customerPrice = {
					"value": nextProps.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['customerPrice']
				};
				obj.masters = {
					"value": nextProps.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['masters'] == null ? [] : nextProps.data.filter(function (item) {
						return item.treeType === 'proposal';
					})[0]['masters']
				};
				this.setState(function (_ref2) {
					var fields = _ref2.fields;
					return {
						fields: _extends({}, fields, obj)
					};
				});
			}
		}

		// 报价同步


		//

	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    stepName = _props.stepName,
			    disabled = _props.disabled,
			    oss = _props.oss;
			var _state = this.state,
			    data = _state.data,
			    isEdit = _state.isEdit,
			    fields = _state.fields;


			var proposalLabel = "";
			var supplierLabel = "";
			var customerLabel = "";
			var formtype = "";
			if (stepName === "2. 汇报确定") {
				proposalLabel = "初步报价";
				supplierLabel = "供应商预估";
				customerLabel = "客户预估";
				formtype = "estimate";
			}
			if (stepName === "4. 图纸确认") {
				proposalLabel = "精确报价";
				supplierLabel = "供应商报价";
				customerLabel = "客户报价";
				formtype = "precise";
			}

			var labelObj = {
				"proposalLabel": proposalLabel,
				"supplierLabel": supplierLabel,
				"customerLabel": customerLabel
			};

			var editStatus = {
				"isEdit": disabled

				// const attcObj = data.filter((item)=>{return item.treeType==='attc'})[0]; // 附件数据

			};return _react2.default.createElement(
				'div',
				{ className: 'mt15' },
				_react2.default.createElement(CustomizedForm
				//oss={oss}
				//attcObj={attcObj}
				, _extends({}, fields, labelObj, editStatus, {
					onChange: this.handleFormChange,
					onSave: this.save
					//delNode={this.props.delNode}
					//saveAttachment={this.props.saveAttachment}
				}))
			);
		}
	}]);

	return ProposalAttc;
}(_react2.default.Component)) || _class;

exports.default = ProposalAttc;

/***/ }),

/***/ 1797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _EditableTable = __webpack_require__(1538);

var _EditableTable2 = _interopRequireDefault(_EditableTable);

var _EditableTable3 = __webpack_require__(1543);

var _EditableTable4 = _interopRequireDefault(_EditableTable3);

var _ProposalAttc = __webpack_require__(1796);

var _ProposalAttc2 = _interopRequireDefault(_ProposalAttc);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepInfo = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(StepInfo, _React$Component);

    function StepInfo(props) {
        _classCallCheck(this, StepInfo);

        var _this2 = _possibleConstructorReturn(this, (StepInfo.__proto__ || Object.getPrototypeOf(StepInfo)).call(this, props));

        _this2.saveStep = function () {
            //这里调用saveNodes
            var saveNodes = _this2.props.saveNodes;
            var data = _this2.state.data;
            // 校验1：任务名称必输

            var currentDataSource = data.children != null && data.children[0].children != null ? data.children[0].children : [];
            var isSub = currentDataSource.filter(function (item) {
                return item.name == "" || item.name == null;
            });
            if (isSub.length > 0) {
                // true
                _antd.message.warn("任务名称是必填项");
                return false;
            }
            saveNodes(data);
            _this2.onChangeVis();
        };

        _this2.saveData = function (taskdata, key) {
            var data = _this2.state.data;

            var newData = [];
            taskdata.forEach(function (item) {
                var key = item.key,
                    children = item.children,
                    obj = _objectWithoutProperties(item, ['key', 'children']);

                newData.push(obj);
            });

            var currentTaskC = data.children.filter(function (item) {
                return item.treeType === 'taskc';
            })[0];
            currentTaskC = Object.assign(currentTaskC, { "children": taskdata });

            var stepChildren = data.children;
            var taskcIndex = stepChildren.findIndex(function (item) {
                return item.treeType === 'taskc';
            });
            stepChildren[taskcIndex] = currentTaskC;
            // console.log(Object.assign(data, {"children":stepChildren}))
            _this2.setState({ data: Object.assign(data, { "children": stepChildren }) });

            // saveTasks(newData);
        };

        _this2.saveProposal = function (proposalData) {
            var data = _this2.state.data;

            var currentProposal = data.children.filter(function (item) {
                return item.treeType === 'proposal';
            })[0];
            currentProposal = Object.assign(currentProposal, proposalData);

            var stepChildren = data.children;
            var proposalIndex = stepChildren.findIndex(function (item) {
                return item.treeType === 'proposal';
            });
            stepChildren[proposalIndex] = currentProposal;

            _this2.setState({ data: Object.assign(data, { "children": stepChildren }) });
        };

        _this2.onChangeVis = function () {
            _this2.setState({
                isEdit: !_this2.state.isEdit
            }, function () {
                // 点击编辑，记录当前树
                if (_this2.state.isEdit == true) {
                    _this2.setState({
                        defaultTree: Object.assign({}, _this2.state.data)
                    }, function () {
                        // 同步大阶段的保存状态
                        _this2.props.updatedeCount(true);
                    });
                } else {
                    // 取消
                    // 更新tree
                    var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
                    _this2.store.treeData = utils.updateTreeData(treeData, "update", _this2.state.defaultTree);
                    // 同步大阶段的保存状态
                    _this2.props.updatedeCount(false);
                }
            });
        };

        _this2.store = _this2.props.store;
        _this2.state = {
            option: null,
            current: 0,
            isEdit: false,
            data: _this2.props.data,
            defaultTree: {} // 记录默认数据
        };
        return _this2;
    }

    _createClass(StepInfo, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            if (nextProps.data != this.props.data) {
                this.setState({ data: nextProps.data }, function () {
                    var stepChildren = nextProps.data.children != null || typeof nextProps.data.children !== "undefined" ? nextProps.data.children : null;
                    // 更新记录当前树的附件数据
                    var attc = stepChildren.filter(function (item) {
                        return item.treeType === 'attc';
                    })[0];
                    if (Object.keys(_this3.state.defaultTree).length > 0 && attc !== undefined) {
                        // 更新tree
                        var defaultTree = JSON.parse(JSON.stringify(_this3.state.defaultTree));
                        _this3.setState({
                            defaultTree: utils.updateTreeData(defaultTree, "update", attc)
                        });
                    }
                });
            }
        }

        // 保存步骤


        // 更新该节点树 数据

    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            var _this$state = _this.state,
                data = _this$state.data,
                isEdit = _this$state.isEdit,
                current = _this$state.current;
            var _this$props = _this.props,
                stepName = _this$props.stepName,
                updateTree = _this$props.updateTree,
                disabled = _this$props.disabled,
                oss = _this$props.oss;

            var currentDataSource = data.children != null && data.children[0].children != null ? data.children[0].children : [];
            var stepChildren = data.children != null || typeof data.children !== "undefined" ? data.children : null;
            var proposalIndex = -1;
            var attcIndex = -1;
            if (stepChildren != null) {
                proposalIndex = stepChildren.findIndex(function (item) {
                    return item.treeType === 'proposal';
                }); //是否有报价
                attcIndex = stepChildren.findIndex(function (item) {
                    return item.treeType === 'attc';
                }); //是否有内容留存
            }
            var attcObj = void 0;
            var attachments = void 0;
            if (stepName == "关联任务" && attcIndex != -1) {
                // 是否有关联任务
                attcObj = stepChildren.filter(function (item) {
                    return item.treeType === 'attc';
                })[0]; //附件对象
                attachments = attcObj && attcObj.children && attcObj.children != null ? attcObj.children.map(function (vitem) {
                    return Object.assign({}, {
                        uid: vitem.id,
                        name: vitem.fileName,
                        status: 'done',
                        url: vitem.filePath,
                        fileId: vitem.fileId,
                        fileName: vitem.fileName,
                        filePath: vitem.filePath,
                        id: vitem.id
                    });
                }) : [];
            }
            var expandedKeys = mobx.toJS(_this.store.expandedKeys)[data.id] !== undefined ? mobx.toJS(_this.store.expandedKeys)[data.id] : [];
            var isExp = expandedKeys.length > 0 ? true : false;
            return _react2.default.createElement(
                'div',
                { className: "mb15" },
                _react2.default.createElement(
                    'div',
                    { className: "mb15" },
                    _react2.default.createElement(
                        'span',
                        { className: 'mr20' },
                        stepName == "关联任务" ? _react2.default.createElement(_antd.Icon, { type: 'link', className: 'mr10' }) : null,
                        stepName
                    ),
                    !isEdit ? _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            _antd.Tooltip,
                            { placement: 'bottom', title: "编辑" },
                            _react2.default.createElement(_antd.Icon, {
                                onClick: _this.onChangeVis,
                                style: { fontSize: '20px', marginRight: '10px' },
                                type: 'form' })
                        )
                    ) : _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            _antd.Tooltip,
                            { placement: 'bottom', title: "取消" },
                            _react2.default.createElement(_antd.Icon, {
                                onClick: this.onChangeVis,
                                style: { fontSize: '20px', marginRight: '10px' },
                                type: 'close-circle' })
                        ),
                        _react2.default.createElement(
                            _antd.Tooltip,
                            { placement: 'bottom', title: "保存" },
                            isExp ? _react2.default.createElement(_antd.Icon, {
                                style: { fontSize: '20px', color: "#e6e6e6" },
                                type: 'check-circle' }) : _react2.default.createElement(_antd.Icon, {
                                onClick: _this.saveStep,
                                style: { fontSize: '20px' },
                                type: 'check-circle' })
                        )
                    )
                ),
                stepName == "关联任务" ? _react2.default.createElement(_EditableTable2.default, {
                    id: data.id,
                    store: _this.store,
                    masters: data.masters == null ? [] : data.masters,
                    dataSource: currentDataSource,
                    saveData: _this.saveData,
                    disabled: !isEdit,
                    projectId: data.projectId,
                    pid: data.children != null ? data.children[0]['id'] : ''
                }) : _react2.default.createElement(_EditableTable4.default, {
                    id: data.id,
                    store: _this.store,
                    masters: data.masters == null ? [] : data.masters,
                    dataSource: currentDataSource,
                    oss: oss,
                    taskhaveattt: true,
                    saveData: _this.saveData,
                    disabled: !isEdit,
                    delNode: this.props.delNode,
                    saveAttachment: this.props.saveAttachment,
                    projectId: data.projectId,
                    pid: data.children != null ? data.children[0]['id'] : ''
                }),
                proposalIndex != -1 ? _react2.default.createElement(_ProposalAttc2.default, {
                    store: _this.store,
                    stepName: stepName,
                    disabled: !isEdit,
                    saveProposal: this.saveProposal,
                    saveNodes: this.props.saveNodes,
                    saveAttachment: this.props.saveAttachment,
                    delNode: this.props.delNode,
                    oss: oss,
                    data: stepChildren.filter(function (item) {
                        return item.treeType === 'proposal';
                    })
                }) : null,
                stepName == "关联任务" && attcIndex != -1 ? _react2.default.createElement(
                    'div',
                    { className: !isEdit ? "mt15" : "myupload_pos" },
                    _react2.default.createElement(_MyUpload2.default, {
                        saveAttachment: this.props.saveAttachment,
                        delNode: this.props.delNode,
                        fileList: attachments,
                        pid: attcObj ? attcObj.id : "",
                        projectId: attcObj ? attcObj.projectId : "",
                        disabled: !isEdit,
                        ossData: oss
                    })
                ) : null
            );
        }
    }]);

    return StepInfo;
}(_react2.default.Component)) || _class;

exports.default = StepInfo;

/***/ }),

/***/ 2091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 方案设计组件
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _mobxReact = __webpack_require__(22);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _StepInfo = __webpack_require__(1797);

var _StepInfo2 = _interopRequireDefault(_StepInfo);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var openNotificationWithIcon = function openNotificationWithIcon(type) {
  _antd.notification[type]({
    message: '当前已是该阶段，请选择其他的阶段',
    description: '',
    placement: 'topLeft'
  });
};
var ProjectDesign = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(ProjectDesign, _React$Component);

  function ProjectDesign(props) {
    _classCallCheck(this, ProjectDesign);

    var _this2 = _possibleConstructorReturn(this, (ProjectDesign.__proto__ || Object.getPrototypeOf(ProjectDesign)).call(this, props));

    _this2.handleSelChange = function (val, e) {
      var userIds = void 0;
      if (e.length) {
        userIds = e.map(function (item) {
          return { userId: item.props.value, userName: item.props.children };
        });
      } else {
        userIds = [];
      }
      _this2.setState({
        userIds: userIds
      });
      _this2.props.updateState(userIds);
    };

    _this2.updatePerson = function (userIds) {
      var proDesignData = _this2.state.proDesignData;
      // 更新当前树

      var currentData = Object.assign({}, proDesignData, { masters: userIds });
      // 更新tree
      var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));

      _this2.store.treeData = utils.updateTreeData(treeData, "update", currentData);
      _this2.props.updateState(userIds);
    };

    _this2.onChange = function (current) {
      _this2.setState({ current: current });
    };

    _this2.onSave = function () {
      var _this2$props = _this2.props,
          proDesign = _this2$props.proDesign,
          saveNodes = _this2$props.saveNodes;

      var params = proDesign;
      // console.log(JSON.stringify(params));
      // saveNodes(params);
    };

    _this2.handleSubmit = function (e) {
      e.preventDefault();
      var proDesign = _this2.props.proDesign;

      var masters = proDesign.masters == null ? [] : proDesign.masters;
      if (masters.length == 0) {
        _antd.message.warn("主负责人是必填项");
        return false;
      }
      _this2.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var saveStage = _this2.props.saveStage;
          // console.log(JSON.stringify(this.state.proDesignData))

          var _this2$state$proDesig = _this2.state.proDesignData,
              children = _this2$state$proDesig.children,
              proDesignStageData = _objectWithoutProperties(_this2$state$proDesig, ['children']);

          saveStage(proDesignStageData);
        }
      });
    };

    _this2.onChangeVis = function () {
      _this2.setState({
        hidden: !_this2.state.hidden,
        defaultTree: Object.assign({}, _this2.state.proDesignData)
      });
    };

    _this2.onChangeEdit = function () {
      _this2.props.updateStateItem("design", { isEdit: false });
      _this2.setState({
        defaultTree: Object.assign({}, _this2.state.proDesignData)
      });
    };

    _this2.onCanlc = function () {
      _this2.props.form.resetFields();
      _this2.props.updateStateItem("design", { isEdit: true });
      // 更新tree
      var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
      _this2.store.treeData = utils.updateTreeData(treeData, "update", _this2.state.defaultTree);
    };

    _this2.updatedeCount = function (type) {
      if (type == true) {
        _this2.setState({
          deCount: _this2.state.deCount + 1
        });
      } else {
        _this2.setState({
          deCount: _this2.state.deCount - 1
        });
      }
    };

    _this2.onVisibleChange = function (visible) {
      _this2.setState({
        visible: !_this2.state.visible
      });
    };

    _this2.addStage = function () {
      _this2.store.addStage().then(function (res) {
        if (res) {
          var oldStageId = JSON.parse(JSON.stringify(_this2.store.currentStageId)); // old
          _this2.store.oldStageId = oldStageId;
          _this2.store.currentStageId = res.id; // new
          _this2.store.getStageList();
          // 更新tree
          var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
          _this2.store.treeData = utils.updateTreeData(treeData, "changeStage", res);
          // 初始化获取步骤进度信息
          _this2.store.getStageTree();
        }
      });
    };

    _this2.delStage = function (param) {
      var _this = _this2;
      _this.store.delStage(param).then(function (res) {
        if (res) {
          _antd.message.success("删除成功");
          // 删除成功，currentStage为最新的stageId,最新的数据
          //let stageList = JSON.parse(JSON.stringify(_this.store.stageList))
          // const index = stageList.findIndex(item=>item.id==param);
          // stageList.splice(index, 1);
          // const len = stageList.length-1;
          var oldStageId = JSON.parse(JSON.stringify(_this.store.currentStageId)); // old
          _this.store.oldStageId = oldStageId;
          //_this.store.currentStageId = stageList[len].id; // new
          _this.store.currentStageId = res.id; // new
          // 更新方案设计数据
          //this.store.proDesign = Object.assign({}, res);
          // 更新tree
          var treeData = JSON.parse(JSON.stringify(_this.store.treeData));
          _this.store.treeData = utils.updateTreeData(treeData, "changeStage", res);
          // 初始化获取步骤进度信息
          _this.store.getStageTree();
          _this.store.getStageList();
          // _this.store.changeStage(stageList[len].id).then((res)=>{
          // 	if(res) {
          // 		// 更新方案设计数据
          // 		_this.store.proDesign = Object.assign({}, res);
          // 		// 初始化获取步骤进度信息
          // 		_this.store.getStageTree();
          // 	}  else {
          // 		message.error("后端数据错误");
          // 	}
          // });
        }
      });
    };

    _this2.changeStage = function (param) {
      var _this = _this2;
      var oldStageId = JSON.parse(JSON.stringify(_this.store.currentStageId)); // old
      if (oldStageId == param) {
        openNotificationWithIcon('warning');
        return false;
      }
      if (_this.store.isDesignEdit == false) {
        // 编辑中状态，增加提示信息，清空数据
        _antd.Modal.confirm({
          title: '您确定要切换方案设计吗?',
          content: '未保存的数据,将会被清空',
          okText: "确定",
          cancelText: "取消",
          onOk: function onOk() {
            _this.store.oldStageId = oldStageId;
            _this.store.changeStage(param).then(function (res) {
              if (res) {
                _this.store.currentStageId = res.id; // new
                _this.props.updateStateItem("design", { isEdit: true });
                // 更新tree
                var treeData = JSON.parse(JSON.stringify(_this.store.treeData));
                _this.store.treeData = utils.updateTreeData(treeData, "changeStage", res);
                // 初始化获取步骤进度信息
                _this.store.getStageTree();
              }
            });
          },
          onCancel: function onCancel() {}
        });
      } else {
        _this.store.oldStageId = oldStageId;
        _this.store.changeStage(param).then(function (res) {
          if (res) {
            _this.store.currentStageId = res.id; // new
            // 更新tree
            var treeData = JSON.parse(JSON.stringify(_this.store.treeData));
            _this.store.treeData = utils.updateTreeData(treeData, "changeStage", res);
            // 初始化获取步骤进度信息
            _this.store.getStageTree();
          }
        });
      }
    };

    _this2.store = _this2.props.store;
    _this2.state = {
      userIds: [],
      current: 0,
      stepObj1: {}, //初步设计
      stepObj2: {}, //汇报确定
      stepObj3: {}, //关联任务
      stepObj4: {}, //深化设计
      stepObj5: {}, //图纸确认
      proDesignData: _this2.props.proDesign,
      hidden: true,
      defaultTree: {},
      deCount: 0, // 记录保存状态
      visible: false // 菜单状态
    };
    return _this2;
  }

  _createClass(ProjectDesign, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      /*
      * 处理更新树节点   taskc 任务：nextProps.data["children"][0]["children"]
      * */
      if (nextProps.proDesign !== this.props.proDesign) {
        /*根据该节点树型数控制改树结构*/
        this.setState({ proDesignData: nextProps.proDesign });
        if (Object.keys(nextProps.proDesign).length !== 0 && nextProps.proDesign.children !== null) {
          this.setState({
            stepObj1: Object.assign({}, nextProps.proDesign.children.filter(function (item) {
              return item.stepName == "初步设计";
            })[0]),
            stepObj2: Object.assign({}, nextProps.proDesign.children.filter(function (item) {
              return item.stepName == "汇报确定";
            })[0]),
            stepObj3: Object.assign({}, nextProps.proDesign.children.filter(function (item) {
              return item.stepName == "关联任务";
            })[0]),
            stepObj4: Object.assign({}, nextProps.proDesign.children.filter(function (item) {
              return item.stepName == "深化设计";
            })[0]),
            stepObj5: Object.assign({}, nextProps.proDesign.children.filter(function (item) {
              return item.stepName == "图纸确认";
            })[0])
          });
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      /*
      * 处理更新树节点   taskc 任务：nextProps.data["children"][0]["children"]
      * */
      if (this.props.proDesign) {
        /*根据该节点树型数控制改树结构*/
        this.setState({ proDesignData: this.props.proDesign });
        if (Object.keys(this.props.proDesign).length !== 0 && this.props.proDesign.children !== null) {
          this.setState({
            stepObj1: Object.assign({}, this.props.proDesign.children.filter(function (item) {
              return item.stepName == "初步设计";
            })[0]),
            stepObj2: Object.assign({}, this.props.proDesign.children.filter(function (item) {
              return item.stepName == "汇报确定";
            })[0]),
            stepObj3: Object.assign({}, this.props.proDesign.children.filter(function (item) {
              return item.stepName == "关联任务";
            })[0]),
            stepObj4: Object.assign({}, this.props.proDesign.children.filter(function (item) {
              return item.stepName == "深化设计";
            })[0]),
            stepObj5: Object.assign({}, this.props.proDesign.children.filter(function (item) {
              return item.stepName == "图纸确认";
            })[0])
          });
        }
      }
    }

    // 人员选择更新


    // 方案设计保存


    // 保存


    // 取消


    // 新增


    // 删除


    // 编辑

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _this = this;
      var _this$state = _this.state,
          visible = _this$state.visible,
          deCount = _this$state.deCount,
          hidden = _this$state.hidden,
          stepObj1 = _this$state.stepObj1,
          stepObj2 = _this$state.stepObj2,
          stepObj3 = _this$state.stepObj3,
          stepObj4 = _this$state.stepObj4,
          stepObj5 = _this$state.stepObj5;
      var _props = this.props,
          proDesign = _props.proDesign,
          form = _props.form,
          isEdit = _props.isEdit;

      var _props2 = this.props,
          store = _props2.store,
          withoutStoreProps = _objectWithoutProperties(_props2, ['store']);

      var getFieldDecorator = form.getFieldDecorator;

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

      var _this$store = _this.store,
          projectId = _this$store.projectId,
          stageList = _this$store.stageList,
          currentStageId = _this$store.currentStageId;

      var isEdit2 = projectId == null || projectId == ""; // 项目id为空时，不可编辑
      var menu = _react2.default.createElement(
        _antd.Menu,
        { className: hidden ? "hidden" : "tc work_menu", style: { width: '150px' } },
        mobx.toJS(stageList).map(function (item, index) {
          return _react2.default.createElement(
            _antd.Menu.Item,
            { key: index, className: item.id == currentStageId ? "work_menu_item work_menu_item_active" : "work_menu_item" },
            _react2.default.createElement(
              'span',
              { onClick: _this3.changeStage.bind(_this3, item.id) },
              item.stageName,
              item.indexs >= 2 ? item.indexs : null
            ),
            isEdit ? null : _react2.default.createElement(
              _antd.Popconfirm,
              { title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
                  return _this3.delStage(item.id);
                } },
              _react2.default.createElement(_antd.Icon, { type: 'close', className: item.indexs >= 2 ? "work_menu_close" : "hidden" })
            )
          );
        }),
        isEdit ? null : _react2.default.createElement(_antd.Menu.Divider, null),
        _react2.default.createElement(
          _antd.Menu.Item,
          { className: isEdit ? "hidden" : "" },
          _react2.default.createElement(_antd.Icon, { onClick: this.addStage, style: { fontSize: '20px' }, type: 'plus-circle', title: '\u65B0\u589E\u65B9\u6848\u8BBE\u8BA1' })
        )
      );
      return _react2.default.createElement(
        _antd.Card,
        { bordered: true, className: 'mt20', style: { width: '100%' } },
        _react2.default.createElement(
          'h3',
          { id: 'items1', className: 'kanban_title mb20' },
          _react2.default.createElement(
            _antd.Dropdown,
            { overlay: menu
              //visible={visible}
              //onVisibleChange={this.onVisibleChange}
              //trigger={['click']}
            },
            _react2.default.createElement(
              'span',
              null,
              '\u65B9\u6848\u8BBE\u8BA1',
              proDesign.indexs >= 2 ? proDesign.indexs : null,
              _react2.default.createElement(_antd.Icon, { className: hidden ? "hidden" : "ml5 pointer", type: 'caret-down' })
            )
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'worktile_progress_add' },
          hidden ? _react2.default.createElement(
            _antd.Button,
            { type: 'link', disabled: isEdit2 ? true : false, onClick: this.onChangeVis },
            '\u521B\u5EFA'
          ) : isEdit ? _react2.default.createElement(
            _antd.Button,
            { type: 'link', onClick: this.onChangeEdit },
            '\u7F16\u8F91'
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { onClick: this.onCanlc, className: 'mr10' },
              '\u53D6\u6D88'
            ),
            _react2.default.createElement(
              _antd.Button,
              {
                disabled: deCount > 0 ? true : false,
                type: 'link', onClick: this.handleSubmit },
              '\u4FDD\u5B58'
            )
          )
        ),
        _react2.default.createElement(
          _antd.Form,
          _extends({ className: hidden ? "hidden" : "clearfix", layout: 'inline' }, formItemLayout),
          _react2.default.createElement(
            _antd.Row,
            { gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15] },
            _react2.default.createElement(
              _antd.Col,
              { xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
              _react2.default.createElement(
                _antd.Form.Item,
                { label: '\u4E3B\u8D1F\u8D23\u4EBA', className: 'w' },
                getFieldDecorator('masters', {
                  initialValue: proDesign.masters == null ? [] : proDesign.masters.map(function (item) {
                    return item.userId;
                  }),
                  rules: [{ required: false, message: '请选择主负责人' }]
                })(_react2.default.createElement(_PersonAddIcon2.default, {
                  data: proDesign.masters == null ? [] : proDesign.masters,
                  updatePerson: this.updatePerson,
                  disabled: isEdit
                }))
              )
            )
          )
        ),
        _react2.default.createElement(
          _antd.Row,
          { className: hidden ? "hidden" : "mt30 mb30" },
          _react2.default.createElement(
            _antd.Col,
            { span: 24 },
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step1',
              store: this.store,
              data: stepObj1,
              stepName: '1. 初步设计'
            }, withoutStoreProps, {
              disabled: isEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.oss,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step2',
              store: this.store,
              data: stepObj2,
              stepName: '2. 汇报确定'
            }, withoutStoreProps, {
              disabled: isEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.oss,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step3',
              store: this.store,
              data: stepObj3,
              stepName: '关联任务'
            }, withoutStoreProps, {
              disabled: isEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.oss,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step4',
              store: this.store,
              data: stepObj4,
              stepName: '3. 深化设计'
            }, withoutStoreProps, {
              disabled: isEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.oss,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step5',
              store: this.store,
              data: stepObj5,
              stepName: '4. 图纸确认'
            }, withoutStoreProps, {
              disabled: isEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.oss,
              updatedeCount: this.updatedeCount
            }))
          )
        )
      );
    }
  }]);

  return ProjectDesign;
}(_react2.default.Component)) || _class) || _class);
exports.default = ProjectDesign;

/***/ }),

/***/ 2093:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 通用树型结构渲染
                  * dangw@glodon.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _EditableTable = __webpack_require__(1538);

var _EditableTable2 = _interopRequireDefault(_EditableTable);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _mobx = __webpack_require__(2191);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var flatData = []; // 用于存储递归结果（扁平数据）

var WortileCommon = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(WortileCommon, _React$Component);

  function WortileCommon(props) {
    _classCallCheck(this, WortileCommon);

    var _this2 = _possibleConstructorReturn(this, (WortileCommon.__proto__ || Object.getPrototypeOf(WortileCommon)).call(this, props));

    _this2.handleSelChange = function (val, e) {
      var userIds = void 0;
      if (e.length) {
        userIds = e.map(function (item) {
          return { userId: item.props.value, userName: item.props.children };
        });
      } else {
        userIds = [];
      }
      _this2.setState({
        userIds: userIds
      });
      var currentTree = _this2.state.currentTree;
      // 更新当前树

      var currentData = Object.assign({}, currentTree, { masters: userIds });
      _this2.setState({
        currentTree: Object.assign({}, currentTree, currentData)
      });
    };

    _this2.handleSubmit = function (e) {
      e.preventDefault();
      var _this = _this2;
      var _this$state = _this.state,
          currentTree = _this$state.currentTree,
          defaultTree = _this$state.defaultTree;
      // 校验1：任务名称必输

      var currentDataSource = currentTree.children != null && currentTree.children[0].children != null ? currentTree.children[0].children : [];
      var isSub = currentDataSource.filter(function (item) {
        return item.name == "" || item.name == null;
      });
      if (isSub.length > 0) {
        // true
        _antd.message.warn("任务名称是必填项");
        return false;
      }
      // 校验2：主任务内容有没有变动，有则主负责人必输
      // 记录之前的主任务数据
      var defaultSource = defaultTree.children != null && defaultTree.children[0].children != null ? defaultTree.children[0].children.map(function (item) {
        return {
          "name": item.name,
          "masters": item.masters,
          "beginTime": item.beginTime,
          "endTime": item.endTime,
          "rate": item.rate
        };
      }) : [];
      var currentSource = currentTree.children != null && currentTree.children[0].children != null ? currentTree.children[0].children.map(function (item) {
        return {
          "name": item.name,
          "masters": item.masters,
          "beginTime": item.beginTime,
          "endTime": item.endTime,
          "rate": item.rate
        };
      }) : [];
      var isChange = JSON.stringify(defaultSource) == JSON.stringify(currentSource); // 主任务是否变动
      var isMasters = currentTree && currentTree.masters == null ? [] : currentTree.masters; //是否有主负责人
      if (isMasters.length == 0 && isChange == false) {
        _antd.message.warn("主负责人是必填项");
        return false;
      }
      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this.props.saveNodes(currentTree);
          _this2.setState({
            isEdit: true
          });
        }
      });
    };

    _this2.convert2treeData = function (source, id, parentId, children) {
      var cloneData = JSON.parse(JSON.stringify(source));
      return cloneData.filter(function (father) {
        var branchArr = cloneData.filter(function (child) {
          return father[id] == child[parentId];
        });
        branchArr.length > 0 ? father[children] = branchArr : '';
        return father[parentId] == _this2.props.treeData.pid; // rootid
      });
    };

    _this2.convert2flatData = function (source) {
      source.forEach(function (el) {
        var children = el.children,
            item = _objectWithoutProperties(el, ['children']);

        flatData.push(item);
        el.children && el.children.length > 0 ? _this2.convert2flatData(el.children) : ""; // 子级递归
      });
    };

    _this2.treeData2FlatData = function (source) {
      var children = source.children,
          item = _objectWithoutProperties(source, ['children']);

      flatData.push(item);
      _this2.convert2flatData(children);
    };

    _this2.unique = function (data) {
      var result = {};
      var finalResult = [];
      for (var i = 0; i < data.length; i++) {
        result[data[i].id] = data[i];
      }
      for (var item in result) {
        finalResult.push(result[item]);
      }
      return finalResult;
    };

    _this2.saveData2 = function (taskdata, key) {
      var currentTree = _this2.state.currentTree;


      var newData = [];
      taskdata.forEach(function (item) {
        var key = item.key,
            children = item.children,
            obj = _objectWithoutProperties(item, ['key', 'children']);

        newData.push(obj);
      });

      var currentTaskC = currentTree.children.filter(function (item) {
        return item.treeType === 'taskc';
      })[0];
      currentTaskC = Object.assign(currentTaskC, { "children": taskdata });

      var stepChildren = currentTree.children;
      var taskcIndex = stepChildren.findIndex(function (item) {
        return item.treeType === 'taskc';
      });
      stepChildren[taskcIndex] = currentTaskC;
      _this2.setState({ currentTree: Object.assign(currentTree, { "children": stepChildren }) });
    };

    _this2.onChangeVis = function () {
      _this2.setState({
        hidden: !_this2.state.hidden
      });
      // 点击编辑时记录当前树的默认数据
      _this2.setState({
        defaultTree: Object.assign({}, _this2.state.currentTree)
      });
    };

    _this2.onCanlc = function () {
      _this2.props.form.resetFields();
      // 更新tree
      var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
      _this2.store.treeData = utils.updateTreeData(treeData, "update", _this2.state.defaultTree);
      _this2.setState({
        isEdit: true
      });
    };

    _this2.onChangeEdit = function () {
      // 点击编辑时记录当前树的默认数据
      _this2.setState({
        isEdit: false,
        defaultTree: Object.assign({}, _this2.state.currentTree)
      });
    };

    _this2.updatePerson = function (userIds) {
      var currentTree = _this2.state.currentTree;
      // 更新当前树

      var currentData = Object.assign({}, currentTree, { masters: userIds });
      // 更新tree
      var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
      _this2.store.treeData = utils.updateTreeData(treeData, "update", currentData);
    };

    _this2.store = _this2.props.store;
    _this2.state = {
      dataSource: [], // 任务的数据源
      userIds: [], // 存储主负责任人数据
      hidden: true, // 面板折叠展开
      currentTree: {}, // 存储当前组件树对象
      pid: '', // 父节点id
      projectId: "", // 项目id
      isEdit: false,
      defaultTree: {} // 记录当前树的默认数据
    };
    return _this2;
  }

  _createClass(WortileCommon, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var _this3 = this;

      /*
      * 处理更新树节点   taskc 任务：nextProps.data["children"][0]["children"]
      * */
      if (nextProps.treeData !== this.props.treeData) {
        /*根据该节点树型数控制改树结构*/
        if (nextProps.treeData.children === null) {
          // 没有任务集合
          this.setState({
            dataSource: []
          });
        } else {
          // 包含任务集合
          var dataSource = nextProps.treeData.children.filter(function (item) {
            return item.treeType == "taskc";
          })[0].children;
          this.setState({
            dataSource: dataSource,
            currentTree: Object.assign({}, nextProps.treeData), // 更新同步
            pid: nextProps.treeData.children.filter(function (item) {
              return item.treeType == "taskc";
            })[0].id,
            projectId: nextProps.treeData.children.filter(function (item) {
              return item.treeType == "taskc";
            })[0].projectId
          }, function () {
            // 更新记录当前树的附件数据
            var attc = nextProps.treeData.children.filter(function (item) {
              return item.treeType == "attc";
            })[0];
            if (Object.keys(_this3.state.defaultTree).length > 0) {
              // 更新tree
              var defaultTree = JSON.parse(JSON.stringify(_this3.state.defaultTree));
              _this3.setState({
                defaultTree: utils.updateTreeData(defaultTree, "update", attc)
              });
            }
          });
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      /*
      * 处理树节点   taskc 任务：nextProps.data["children"][0]["children"]
      * */
      if (this.props.treeData) {
        /*根据该节点树型数控制改树结构*/
        if (this.props.treeData.children === null) {
          // 没有任务集合
          this.setState({
            dataSource: []
          });
        } else {
          // 包含子任务集合
          var dataSource = this.props.treeData.children.filter(function (item) {
            return item.treeType == "taskc";
          })[0].children;
          this.setState({
            dataSource: dataSource,
            currentTree: Object.assign({}, this.props.treeData),
            pid: this.props.treeData.children.filter(function (item) {
              return item.treeType == "taskc";
            })[0].id,
            projectId: this.props.treeData.children.filter(function (item) {
              return item.treeType == "taskc";
            })[0].projectId
          });
        }
      }
    }

    // 保存


    // 递归函数


    // 树型数据转扁平数组


    // 去重


    // 更新该节点树 数据


    // 取消


    // 人员选择更新

  }, {
    key: 'render',
    value: function render() {
      var _this = this;
      var getFieldDecorator = _this.props.form.getFieldDecorator;

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
      var _this$state2 = _this.state,
          dataSource = _this$state2.dataSource,
          hidden = _this$state2.hidden,
          isEdit = _this$state2.isEdit,
          currentTree = _this$state2.currentTree;
      var projectId = _this.store.projectId;

      var isEdit2 = projectId == null || projectId == ""; // 项目id为空时，不可编辑
      var attcObj = currentTree.children != null && currentTree.children.filter(function (item) {
        return item.treeType === 'attc';
      })[0]; //附件对象
      var attachments = attcObj.children != null ? attcObj.children.map(function (vitem) {
        return Object.assign({}, {
          uid: vitem.id,
          name: vitem.fileName,
          status: 'done',
          url: vitem.filePath,
          fileId: vitem.fileId,
          fileName: vitem.fileName,
          filePath: vitem.filePath,
          id: vitem.id
        });
      }) : [];
      var expandedKeys = mobx.toJS(_this.store.expandedKeys)[this.props.id] !== undefined ? mobx.toJS(_this.store.expandedKeys)[this.props.id] : [];
      var isExp = expandedKeys.length > 0 ? true : false;
      return _react2.default.createElement(
        _antd.Card,
        { bordered: true, style: { width: '100%' }, className: 'mt20' },
        _react2.default.createElement(
          'h3',
          { id: this.props.rowIndex, className: 'kanban_title mb20' },
          _this.props.treeData.stageName
        ),
        _react2.default.createElement(
          'span',
          { className: 'worktile_progress_add' },
          hidden ? _react2.default.createElement(
            _antd.Button,
            { type: 'link', disabled: isEdit2 ? true : false, onClick: this.onChangeVis },
            '\u521B\u5EFA'
          ) : isEdit ? _react2.default.createElement(
            _antd.Button,
            { type: 'link', onClick: this.onChangeEdit },
            '\u7F16\u8F91'
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { onClick: this.onCanlc, className: 'mr10' },
              '\u53D6\u6D88'
            ),
            _react2.default.createElement(
              _antd.Button,
              { disabled: isExp, type: 'link', onClick: this.handleSubmit },
              '\u4FDD\u5B58'
            )
          )
        ),
        _react2.default.createElement(
          _antd.Form,
          _extends({ className: hidden ? "hidden" : "clearfix", layout: 'inline' }, formItemLayout),
          _react2.default.createElement(
            _antd.Row,
            { gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15] },
            _react2.default.createElement(
              _antd.Col,
              { xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
              _react2.default.createElement(
                _antd.Form.Item,
                { label: '\u4E3B\u8D1F\u8D23\u4EBA', className: 'w' },
                getFieldDecorator('masters', {
                  initialValue: currentTree.masters == null ? [] : currentTree.masters.map(function (item) {
                    return item.userId;
                  }),
                  rules: [{ required: false, message: '请选择主负责人' }]
                })(_react2.default.createElement(_PersonAddIcon2.default, {
                  data: currentTree && currentTree.masters == null ? [] : currentTree.masters,
                  updatePerson: this.updatePerson,
                  disabled: isEdit
                }))
              )
            )
          )
        ),
        hidden ? null : _react2.default.createElement(_EditableTable2.default, {
          id: this.props.id,
          dataSource: dataSource,
          saveData: this.saveData2,
          disabled: isEdit,
          projectId: this.state.projectId,
          pid: this.state.pid,
          store: this.store
        }),
        hidden ? null : _react2.default.createElement(
          'div',
          { className: isEdit ? "" : "myupload_pos" },
          _react2.default.createElement(_MyUpload2.default, {
            saveAttachment: this.props.saveAttachment,
            delNode: this.props.delNode,
            fileList: attachments,
            pid: attcObj.id,
            projectId: attcObj.projectId,
            disabled: isEdit,
            ossData: this.props.oss
          })
        )
      );
    }
  }]);

  return WortileCommon;
}(_react2.default.Component)) || _class) || _class);
exports.default = WortileCommon;

/***/ }),

/***/ 2191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */


Object.defineProperty(exports, '__esModule', { value: true });

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
        return dataStructure;
    }
    else if (Array.isArray(dataStructure)) {
        return new Map(dataStructure);
    }
    else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for (var key in dataStructure) {
            map.set(key, dataStructure[key]);
        }
        return map;
    }
    else {
        return fail("Cannot convert to map from '" + dataStructure + "'");
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Object.getOwnPropertySymbols
        ? function (obj) { return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)); }
        : /* istanbul ignore next */ Object.getOwnPropertyNames;

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    var e_1, _a;
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        // Build property key array from both strings and symbols
        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var d = decorators[key];
                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) &&
        (typeof args[1] === "string" || typeof args[1] === "symbol")) ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail(
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && __webpack_require__.i({"NODE_ENV":"production","SERVER":"http://xlj-server/metadata_webapp2"}) && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail(
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // "development" !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    {
        invariant(descriptor && descriptor.get, "Trying to declare a computed value for unspecified getter '" + stringifyKey(propertyName) + "'");
    }
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(exports.IDerivationState || (exports.IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case exports.IDerivationState.UP_TO_DATE:
            return false;
        case exports.IDerivationState.NOT_TRACKING:
        case exports.IDerivationState.STALE:
            return true;
        case exports.IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === exports.IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         "development" === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail(
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail(
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if (
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = exports.IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== exports.IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = exports.IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === exports.IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = exports.IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn, ref) {
    {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    {
        if (isFunctionNameConfigurable) {
            Object.defineProperty(res, "name", { value: actionName });
        }
    }
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "development" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, 
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "development" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === exports.IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observable of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === exports.IDerivationState.STALE)
        return;
    observable.lowestObserverState = exports.IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = exports.IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === exports.IDerivationState.STALE)
        return;
    observable.lowestObserverState = exports.IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === exports.IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = exports.IDerivationState.STALE;
        else if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== exports.IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
            d.dependenciesState = exports.IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return  !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail( "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
    
        invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
        
            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = ownKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (true) {
                    if (!isPlainObject(properties))
                        fail("'extendObservable' only accepts plain objects as second argument");
                    if (isComputed(descriptor.value))
                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if ("development" !== "production" && typeof decorator !== "function")
                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( "Flow expects 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail(
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail(
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail(
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail(
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail(
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail(
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail(
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail(
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail(
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail(
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail(
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail(
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail(
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread((interceptable.interceptors || []));
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                break;
        }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "flat",
    "includes",
    "indexOf",
    "join",
    "lastIndexOf",
    "slice",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    // Feature detection (eg flat may not be available)
    if (typeof Array.prototype[funcName] !== "function") {
        return;
    }
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
});
["every", "filter", "find", "findIndex", "flatMap", "forEach", "map", "some"].forEach(function (funcName) {
    // Feature detection (eg flatMap may not be available)
    if (typeof Array.prototype[funcName] !== "function") {
        return;
    }
    arrayExtensions[funcName] = function (callback, thisArg) {
        var _this = this;
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName](function (element, index) {
            return callback.call(thisArg, element, index, _this);
        }, thisArg);
    };
});
["reduce", "reduceRight"].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var _this = this;
        var adm = this[$mobx];
        adm.atom.reportObserved();
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function (accumulator, currentValue, index) {
            currentValue = adm.dehanceValue(currentValue);
            return callback(accumulator, currentValue, index, _this);
        };
        return adm.values[funcName].apply(adm.values, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _b = keys.next(), done = _b.done, value = _b.value;
                return {
                    done: done,
                    value: done ? undefined : self.get(value)
                };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _b = keys.next(), done = _b.done, value = _b.value;
                return {
                    done: done,
                    value: done ? undefined : [value, self.get(value)]
                };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (isPlainObject(other))
                    getPlainObjectKeys(other).forEach(function (key) {
                        return _this.set(key, other[key]);
                    });
                else if (Array.isArray(other))
                    other.forEach(function (_b) {
                        var _c = __read(_b, 2), key = _c[0], value = _c[1];
                        return _this.set(key, value);
                    });
                else if (isES6Map(other)) {
                    if (other.constructor !== Map)
                        fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                    other.forEach(function (value, key) { return _this.set(key, value); });
                }
                else if (other !== null && other !== undefined)
                    fail("Cannot initialize map from " + other);
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _b;
                try {
                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function () {
            var e_3, _b, e_4, _c;
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            try {
                // Delete keys that don't exist in replacement map
                // if the key deletion is prevented by interceptor
                // add entry at the beginning of the result map
                for (var _d = __values(_this._data.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    // Concurrently iterating/deleting keys
                    // iterator should handle this correctly
                    if (!replacementMap.has(key)) {
                        var deleted = _this.delete(key);
                        // Was the key removed?
                        if (deleted) {
                            // _keysAtom.reportChanged() was already called
                            keysReportChangedCalled = true;
                        }
                        else {
                            // Delete prevented by interceptor
                            var value = _this._data.get(key);
                            orderedData.set(key, value);
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                // Merge entries
                for (var _f = __values(replacementMap.entries()), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                    // We will want to know whether a new key is added
                    var keyExisted = _this._data.has(key);
                    // Add or update value
                    _this.set(key, value);
                    // The addition could have been prevent by interceptor
                    if (_this._data.has(key)) {
                        // The update could have been prevented by interceptor
                        // and also we want to preserve existing values
                        // so use value from _data map (instead of replacement map)
                        var value_1 = _this._data.get(key);
                        orderedData.set(key, value_1);
                        // Was a new key added?
                        if (!keyExisted) {
                            // _keysAtom.reportChanged() was already called
                            keysReportChangedCalled = true;
                        }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
            }
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this._data.size !== orderedData.size) {
                    // If size differs, keys are definitely modified
                    _this._keysAtom.reportChanged();
                }
                else {
                    var iter1 = _this._data.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while (!next1.done) {
                        if (next1.value !== next2.value) {
                            _this._keysAtom.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this._data = orderedData;
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_5, _b;
        var res = {};
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _b;
                try {
                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var value = _d.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (Array.isArray(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (isES6Set(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (other !== null && other !== undefined) {
                    fail("Cannot initialize set from " + other);
                }
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
        
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
    
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail(
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail(
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail(
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail( "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
                depth++;
            }
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        typeof process !== 'undefined' && __webpack_require__.i({"NODE_ENV":"production","SERVER":"http://xlj-server/metadata_webapp2"}).IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}

exports.$mobx = $mobx;
exports.FlowCancellationError = FlowCancellationError;
exports.ObservableMap = ObservableMap;
exports.ObservableSet = ObservableSet;
exports.Reaction = Reaction;
exports._allowStateChanges = allowStateChanges;
exports._allowStateChangesInsideComputed = allowStateChangesInsideComputed;
exports._allowStateReadsEnd = allowStateReadsEnd;
exports._allowStateReadsStart = allowStateReadsStart;
exports._endAction = _endAction;
exports._getAdministration = getAdministration;
exports._getGlobalState = getGlobalState;
exports._interceptReads = interceptReads;
exports._isComputingDerivation = isComputingDerivation;
exports._resetGlobalState = resetGlobalState;
exports._startAction = _startAction;
exports.action = action;
exports.autorun = autorun;
exports.comparer = comparer;
exports.computed = computed;
exports.configure = configure;
exports.createAtom = createAtom;
exports.decorate = decorate;
exports.entries = entries;
exports.extendObservable = extendObservable;
exports.flow = flow;
exports.get = get;
exports.getAtom = getAtom;
exports.getDebugName = getDebugName;
exports.getDependencyTree = getDependencyTree;
exports.getObserverTree = getObserverTree;
exports.has = has;
exports.intercept = intercept;
exports.isAction = isAction;
exports.isArrayLike = isArrayLike;
exports.isBoxedObservable = isObservableValue;
exports.isComputed = isComputed;
exports.isComputedProp = isComputedProp;
exports.isFlowCancellationError = isFlowCancellationError;
exports.isObservable = isObservable;
exports.isObservableArray = isObservableArray;
exports.isObservableMap = isObservableMap;
exports.isObservableObject = isObservableObject;
exports.isObservableProp = isObservableProp;
exports.isObservableSet = isObservableSet;
exports.keys = keys;
exports.observable = observable;
exports.observe = observe;
exports.onBecomeObserved = onBecomeObserved;
exports.onBecomeUnobserved = onBecomeUnobserved;
exports.onReactionError = onReactionError;
exports.reaction = reaction;
exports.remove = remove;
exports.runInAction = runInAction;
exports.set = set;
exports.spy = spy;
exports.toJS = toJS;
exports.trace = trace;
exports.transaction = transaction;
exports.untracked = untracked;
exports.values = values;
exports.when = when;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239), __webpack_require__(81)))

/***/ })

});
//# sourceMappingURL=17-afa7d4b4bae6ff2924e9.1629092961041.js.map