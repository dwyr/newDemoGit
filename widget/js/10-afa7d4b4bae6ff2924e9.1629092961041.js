webpackJsonp([10],{

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 项目看板 新建劳务仓流程、展厅、综合办公
                  * dangw@glodon.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _url = __webpack_require__(230);

var _url2 = _interopRequireDefault(_url);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _ProgressList = __webpack_require__(1792);

var _ProgressList2 = _interopRequireDefault(_ProgressList);

var _Appraisal = __webpack_require__(2033);

var _Appraisal2 = _interopRequireDefault(_Appraisal);

var _Office = __webpack_require__(2034);

var _Office2 = _interopRequireDefault(_Office);

var _Delivery = __webpack_require__(1789);

var _Delivery2 = _interopRequireDefault(_Delivery);

var _WortileCommon = __webpack_require__(1793);

var _WortileCommon2 = _interopRequireDefault(_WortileCommon);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _ItemInfoNew = __webpack_require__(1620);

var _ItemInfoNew2 = _interopRequireDefault(_ItemInfoNew);

var _ProjectDesign = __webpack_require__(2036);

var _ProjectDesign2 = _interopRequireDefault(_ProjectDesign);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pgState = { 4: 'pgObj', 5: 'zhObj' }; // 4 展厅 5 综合办公

var Index = (_dec = (0, _mobxReact.inject)('ExhibitionStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.getTree = function (param) {
			var temId = _this.store.temId;

			_this.store.getTree(param).then(function (mes) {
				_this.store.treeData = Object.assign({}, mes); // 前端维护的树
				// 项目信息
				var itemObj = Object.assign({}, mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName == "项目信息";
				})[0]);
				var type = pgState[temId];
				// 项目评估
				var pgData = Object.assign({}, mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName == "项目评估";
				})[0]);
				// 实施交付
				_this.store.payObj = Object.assign({}, mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName == "实施交付";
				})[0]);
				// 方案设计
				var proDesign = Object.assign({}, mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName == "方案设计";
				})[0]);
				// 过滤项目信息数据
				_this.store.commonData = Object.assign([], mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName !== "项目信息" && item.stageName !== "实施交付" && item.stageName !== "方案设计" && item.stageName !== "项目评估";
				}));
				_this.store.itemObj = Object.assign({}, itemObj);
				_this.store.projectName = itemObj.children.filter(function (item) {
					return item.treeType == "projectinfo";
				})[0].name;
				// 初始化获取步骤进度信息
				_this.store.getStageTree();
				// 方案设计statgeId
				_this.store.proDesign = proDesign;
				_this.store.oldStageId = proDesign.id;
				_this.store.currentStageId = proDesign.id;
				// 方案设计stage列表
				_this.store.getStageList();
				_this.store.getReportDaysList();
				// 维护状态公共组件
				var commonData = JSON.parse(JSON.stringify(_this.store.commonData));
				var obj = {};
				var countObj = {};
				commonData.map(function (v) {
					obj[v.id] = true;
					countObj[v.id] = 2;
				});
				_this.store.comStates = Object.assign({}, obj);
				_this.store.comCount = Object.assign({}, countObj);
				_this.store[type] = Object.assign({}, pgData);

				//跳转定位
				var search = _this.props.location.search;

				var _url$parse$query = _url2.default.parse(search, true).query,
				    id = _url$parse$query.id,
				    pid = _url$parse$query.pid,
				    stageid = _url$parse$query.stageid,
				    isEdit = _url$parse$query.isEdit;

				if (pid != undefined && id != undefined && pid != null) {
					_events2.default.emit("handletaskid", { "pid": pid, "id": id, "isEdit": isEdit });
				} else if (id !== undefined) {
					// 我的任务跳转定位
					_this.scrollToAnchor(id);
				} else if (stageid !== undefined) {
					//this.scrollToAnchor(`items${parseInt(stageid)-1}`);
				}
			});
		};

		_this.onRef = function (ref) {
			_this.child = ref;
		};

		_this.onAppRef = function (ref) {
			_this.appRef = ref;
		};

		_this.onOfficeRef = function (ref) {
			_this.officeRef = ref;
		};

		_this.scrollToAnchor = function (anchorName) {
			if (anchorName) {
				try {
					var anchorElement = document.getElementById(anchorName);
					if (anchorElement) {
						anchorElement.scrollIntoView({ block: 'center' });
					}
				} catch (err) {}
			}
		};

		_this.saveProject = function (params) {
			_this.store.saveProject(params).then(function (res) {
				if (res.id !== null) {
					_antd.message.success("保存成功");
					_this.child.onChangeVis();
					_this.store.projectId = res.id;
					_this.store.closeReason = res.closeReason;
					_this.store.projectName = res.name;
					_this.store.state = res.state;
					var temId = _this.store.temId;

					_this.store.getTree(res.id).then(function (mes) {
						_this.store.treeData = Object.assign({}, mes); // 前端维护的树
						// 项目信息
						var itemObj = Object.assign({}, mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName == "项目信息";
						})[0]);
						// 项目评估
						_this.store[pgState[temId]] = Object.assign({}, mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName == "项目评估";
						})[0]);
						// 实施交付
						_this.store.payObj = Object.assign({}, mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName == "实施交付";
						})[0]);
						// 方案设计
						var proDesign = Object.assign({}, mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName == "方案设计";
						})[0]);
						// 过滤项目信息数据
						_this.store.commonData = Object.assign([], mes && mes.children.filter(function (item) {
							return item.treeType == "stage" && item.stageName !== "项目信息" && item.stageName !== "实施交付" && item.stageName !== "方案设计" && item.stageName !== "项目评估";
						}));
						_this.store.itemObj = Object.assign({}, itemObj);
						_this.store.projectName = itemObj.children.filter(function (item) {
							return item.treeType == "projectinfo";
						})[0].name;
						// 初始化获取步骤进度信息
						_this.store.getStageTree();
						// 方案设计statgeId
						_this.store.proDesign = proDesign;
						_this.store.oldStageId = proDesign.id;
						_this.store.currentStageId = proDesign.id;
						// 方案设计stage列表
						_this.store.getStageList();
						_this.store.getReportDaysList();
						// 维护状态公共组件
						var commonData = JSON.parse(JSON.stringify(_this.store.commonData));
						var obj = {};
						var countObj = {};
						commonData.map(function (v) {
							obj[v.id] = true;
							countObj[v.id] = 1;
						});
						_this.store.comStates = Object.assign({}, obj);
						_this.store.comCount = Object.assign({}, countObj);
					});
				} else {
					_antd.message.error("保存失败");
				}
			});
		};

		_this.saveAttachment = function (params) {
			_this.store.saveAttachments(params).then(function (res) {
				if (res) {
					_antd.message.success("附件保存成功");
					// 更新tree
					var treeData = JSON.parse(JSON.stringify(_this.store.treeData));
					_this.store.treeData = utils.updateTreeData(treeData, "updateChildren", res);
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

		_this.updateCount = function (type, count) {
			_this.setState(_defineProperty({}, type, count));
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
					//更新我的任务数
					//this.store.getMyTaskCount();
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
					// 更新步骤
					_this.store.getStageTree();
				} else {
					_antd.message.error("保存阶段失败");
				}
			});
		};

		_this.updateTree = function () {
			var projectId = _this.store.projectId;
			_this.store.getTree(projectId).then(function (mes) {
				_this.store.treeData = Object.assign({}, mes); // 前端维护的树
				// 项目信息 数据
				var itemObj = Object.assign({}, mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName == "订单信息";
				})[0]);
				//（招投标、合同签订、实施过程、交付验收、发票验收）数据
				_this.store.commonData = Object.assign([], mes && mes.children.filter(function (item) {
					return item.treeType == "stage" && item.stageName !== "订单信息" && item.stageName !== "实施交付";
				}));
				// 维护状态公共组件
				var commonData = JSON.parse(JSON.stringify(_this.store.commonData));
				var obj = {};
				var countObj = {};
				commonData.map(function (v) {
					obj[v.id] = true;
					countObj[v.id] = 2;
				});
				_this.store.itemObj = Object.assign({}, itemObj);
				_this.store.comStates = Object.assign({}, obj);
				_this.store.comCount = Object.assign({}, countObj);
				var projectinfo = itemObj.children.filter(function (item) {
					return item.treeType == "projectinfo";
				})[0];
				_this.store.projectName = projectinfo["name"];
				_this.store.state = projectinfo["state"];
				_this.store.closeReason = projectinfo["closeReason"];
				// 更新步骤
				_this.store.getStageTree();
			});
		};

		_this.store = _this.props.ExhibitionStore;
		_this.state = {
			count: 1, // 项目信息  1 创建、2 编辑初始化状态
			payCount: 1, // 实施交付
			pgCount: 1, // 项目评估
			psCount: 1 // 方案设计
		};
		mobx.autorun(function () {
			var type = pgState[_this.store.temId];
			console.log(type, 'auto');
			_this.store.commonData = _this.store.getcommonData;
			_this.store.payObj = _this.store.getproDesign;
			_this.store.proDesign = _this.store.getFnDesign;
			_this.store[type] = _this.store.getPgDesign;
		});
		return _this;
	}

	_createClass(Index, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var search = this.props.location.search;

			var _url$parse$query2 = _url2.default.parse(search, true).query,
			    projectid = _url$parse$query2.projectid,
			    temId = _url$parse$query2.temId,
			    temName = _url$parse$query2.temName,
			    id = _url$parse$query2.id,
			    pid = _url$parse$query2.pid,
			    stageid = _url$parse$query2.stageid;

			this.store.temId = temId;
			this.store.temName = temName;
			// 获取大文件上传sts
			this.store.getSts();
			if (projectid != null && projectid != undefined) {
				// 详情、编辑态
				this.store.projectId = projectid;
				this.store.pgObj = Object.assign({}, { // 展厅项目评估
					"id": "",
					"pid": "",
					"projectId": "",
					"treeType": "stage",
					"masters": null,
					"children": [{
						"id": "",
						"pid": "",
						"projectId": "",
						"treeType": "normal",
						"masters": null,
						"children": [{
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "场地CAD图纸",
							"type": 0
						}, {
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "公司心仪案例/案例参考",
							"type": 0
						}],
						"jbzl": {
							"xmgs": null,
							"xmys": null,
							"xmbj": null,
							"cgrq": null,
							"ztmd": null,
							"jszq": null
						},
						"srzl": {
							"sjzd": null,
							"scyq": null,
							"zxyq": null,
							"dgyq": null,
							"sgclyq": null,
							"jbtsdln": null,
							"zhhsddyy": null
						},
						"fzzl": {
							"gsxyalalck": null,
							"bcsm": null
						}
					}],
					"stageName": "项目评估"
				});
				this.store.zhObj = Object.assign({}, { //综合办公项目评估
					"id": "",
					"pid": "",
					"projectId": "",
					"treeType": "stage",
					"masters": null,
					"children": [{
						"id": "",
						"pid": "",
						"projectId": "",
						"treeType": "normal",
						"masters": null,
						"children": [{
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "现场施工规划图",
							"type": 0
						}, {
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "房屋布置图纸",
							"type": 0
						}, {
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "公司心仪案例/案例参考",
							"type": 0
						}],
						"jbzl": {
							"glry": [{
								"name": "办公用房",
								"values": null
							}, {
								"name": "宿舍用房",
								"values": null
							}, {
								"name": "宿舍用房(含UB)",
								"values": null
							}, {
								"name": "食堂",
								"values": null
							}, {
								"name": "会议室",
								"values": null
							}, {
								"name": "智慧展厅",
								"values": null
							}, {
								"name": "试验室",
								"values": null
							}, {
								"name": "辅助用房",
								"values": null
							}],
							"lwry": [{
								"name": "办公用房",
								"values": null
							}, {
								"name": "宿舍用房",
								"values": null
							}, {
								"name": "食堂",
								"values": null
							}, {
								"name": "会议室",
								"values": null
							}, {
								"name": "展厅",
								"values": null
							}, {
								"name": "淋浴间",
								"values": null
							}, {
								"name": "洗衣房",
								"values": null
							}, {
								"name": "辅助用房",
								"values": null
							}],
							"cqwd": []
						},
						"srzl": {
							"zhhsddyy": null,
							"bghjdssd": null,
							"jbtedln": null,
							"jzmgsxym": null,
							"jbdfts": null,
							"bimxxhsdyq": null,
							"gmxqdg": null
						},
						"fzzl": {
							"dlqk": null,
							"rksd": null,
							"zwhj": null,
							"ljjcsj": 0,
							"gsxyalalcg": null
						}
					}],
					"stageName": "项目评估"
				});
				this.getTree(projectid);
				this.setState({
					count: 2,
					payCount: 2,
					pgCount: 2, // 项目评估
					psCount: 2 // 方案设计
				});
			} else {
				// 新增态
				this.store.projectId = "";
				this.store.projectName = "";
				// 初始化获取步骤进度信息
				this.store.getStageTree();
				// 维护状态公共组件
				var commonData = JSON.parse(JSON.stringify(this.store.commonData));
				var obj = {};
				var countObj = {};
				commonData.map(function (v) {
					obj[v.id] = true;
					countObj[v.id] = 1;
				});
				this.store.comStates = Object.assign({}, obj);
				this.store.comCount = Object.assign({}, countObj);
				this.store.isDesignEdit = true;
				this.store.itemObj = Object.assign({}, {
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
						"children": null,
						"name": null
					}],
					"stageName": "项目信息"
				});
				this.store.pgObj = Object.assign({}, { // 展厅项目评估
					"id": "",
					"pid": "",
					"projectId": "",
					"treeType": "stage",
					"masters": null,
					"children": [{
						"id": "",
						"pid": "",
						"projectId": "",
						"treeType": "normal",
						"masters": null,
						"children": [{
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "场地CAD图纸",
							"type": 0
						}, {
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "公司心仪案例/案例参考",
							"type": 0
						}],
						"jbzl": {
							"xmgs": null,
							"xmys": null,
							"xmbj": null,
							"cgrq": null,
							"ztmd": null,
							"jszq": null
						},
						"srzl": {
							"sjzd": null,
							"scyq": null,
							"zxyq": null,
							"dgyq": null,
							"sgclyq": null,
							"jbtsdln": null,
							"zhhsddyy": null
						},
						"fzzl": {
							"gsxyalalck": null,
							"bcsm": null
						}
					}],
					"stageName": "项目评估"
				});
				this.store.zhObj = Object.assign({}, { //综合办公项目评估
					"id": "",
					"pid": "",
					"projectId": "",
					"treeType": "stage",
					"masters": null,
					"children": [{
						"id": "",
						"pid": "",
						"projectId": "",
						"treeType": "normal",
						"masters": null,
						"children": [{
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "现场施工规划图",
							"type": 0
						}, {
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "房屋布置图纸",
							"type": 0
						}, {
							"id": "",
							"pid": "",
							"projectId": "",
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "公司心仪案例/案例参考",
							"type": 0
						}],
						"jbzl": {
							"glry": [{
								"name": "办公用房",
								"values": null
							}, {
								"name": "宿舍用房",
								"values": null
							}, {
								"name": "宿舍用房(含UB)",
								"values": null
							}, {
								"name": "食堂",
								"values": null
							}, {
								"name": "会议室",
								"values": null
							}, {
								"name": "智慧展厅",
								"values": null
							}, {
								"name": "试验室",
								"values": null
							}, {
								"name": "辅助用房",
								"values": null
							}],
							"lwry": [{
								"name": "办公用房",
								"values": null
							}, {
								"name": "宿舍用房",
								"values": null
							}, {
								"name": "食堂",
								"values": null
							}, {
								"name": "会议室",
								"values": null
							}, {
								"name": "展厅",
								"values": null
							}, {
								"name": "淋浴间",
								"values": null
							}, {
								"name": "洗衣房",
								"values": null
							}, {
								"name": "辅助用房",
								"values": null
							}],
							"cqwd": []
						},
						"srzl": {
							"zhhsddyy": null,
							"bghjdssd": null,
							"jbtedln": null,
							"jzmgsxym": null,
							"jbdfts": null,
							"bimxxhsdyq": null,
							"gmxqdg": null
						},
						"fzzl": {
							"dlqk": null,
							"rksd": null,
							"zwhj": null,
							"ljjcsj": 0,
							"gsxyalalcg": null
						}
					}],
					"stageName": "项目评估"
				});
			}
		}

		// 锚点定位


		// 保存项目信息


		// 保存附件


		// 删除附件


		// 更新子组件状态


		// 保存节点


		// 保存阶段


		// 更新树

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _store = this.store,
			    projectId = _store.projectId,
			    projectName = _store.projectName,
			    listData = _store.listData,
			    itemObj = _store.itemObj,
			    ossData = _store.ossData,
			    payObj = _store.payObj,
			    pgObj = _store.pgObj,
			    zhObj = _store.zhObj,
			    commonData = _store.commonData,
			    comStates = _store.comStates,
			    comCount = _store.comCount,
			    proDesign = _store.proDesign,
			    temId = _store.temId,
			    temName = _store.temName;
			var _state = this.state,
			    count = _state.count,
			    payCount = _state.payCount,
			    pgCount = _state.pgCount,
			    psCount = _state.psCount;

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
							projectName || temName
						)
					)
				),
				_react2.default.createElement(_ProgressList2.default, {
					listData: mobx.toJS(listData),
					store: this.store,
					isShow: isShow,
					scrollToAnchor: this.scrollToAnchor,
					updateTree: this.updateTree
				}),
				_react2.default.createElement(_ItemInfoNew2.default, {
					itemObj: mobx.toJS(itemObj),
					saveProject: this.saveProject,
					projectId: projectId,
					projectType: temId,
					onRef: this.onRef,
					state: this.store.state,
					saveAttachment: this.saveAttachment,
					delNode: this.delNode,
					ossData: mobx.toJS(ossData),
					hidden: true,
					count: count,
					updateCount: this.updateCount
				}),
				temId == 4 ? _react2.default.createElement(_Appraisal2.default, {
					isShow: isShow,
					onAppRef: this.onAppRef,
					store: this.store,
					saveAttachment: this.saveAttachment,
					delNode: this.delNode,
					ossData: mobx.toJS(ossData),
					count: pgCount,
					updateCount: this.updateCount,
					itemObj: mobx.toJS(pgObj),
					saveNodes: this.saveNodes,
					disabled: true
				}) : null,
				temId == 5 ? _react2.default.createElement(_Office2.default, {
					isShow: isShow,
					onOfficeRef: this.onOfficeRef,
					store: this.store,
					saveAttachment: this.saveAttachment,
					delNode: this.delNode,
					ossData: mobx.toJS(ossData),
					count: pgCount,
					updateCount: this.updateCount,
					itemObj: mobx.toJS(zhObj),
					saveNodes: this.saveNodes,
					disabled: true
				}) : null,
				_react2.default.createElement(_ProjectDesign2.default, {
					isShow: isShow,
					proDesign: mobx.toJS(proDesign),
					saveNodes: this.saveNodes,
					saveStage: this.saveStage,
					store: this.store,
					saveAttachment: this.saveAttachment,
					delNode: this.delNode,
					ossData: mobx.toJS(ossData),
					count: psCount,
					updateCount: this.updateCount
				}),
				mobx.toJS(commonData).length > 0 && mobx.toJS(commonData).filter(function (item) {
					return item.treeType == "stage" && item.stageName !== "开票收款";
				}).map(function (item, index) {
					return _react2.default.createElement(_WortileCommon2.default, {
						id: item.id,
						rowIndex: "items" + (index + 2),
						store: _this2.store,
						treeData: item,
						saveNodes: _this2.saveNodes,
						saveAttachment: _this2.saveAttachment,
						delNode: _this2.delNode,
						disabled: mobx.toJS(comStates)[item.id],
						oss: mobx.toJS(ossData),
						isShow: isShow,
						count: mobx.toJS(comCount)[item.id]
					});
				}),
				_react2.default.createElement(_Delivery2.default, {
					store: this.store,
					treeData: mobx.toJS(payObj),
					count: payCount,
					updateCount: this.updateCount,
					saveAttachment: this.saveAttachment,
					delNode: this.delNode,
					ossData: mobx.toJS(ossData),
					disabled: true,
					isShow: isShow,
					saveNodes: this.saveNodes
				}),
				mobx.toJS(commonData).length > 0 && mobx.toJS(commonData).filter(function (item) {
					return item.treeType == "stage" && item.stageName == "开票收款";
				}).map(function (item, index) {
					return _react2.default.createElement(_WortileCommon2.default, {
						id: item.id,
						rowIndex: "items" + (index + 2),
						store: _this2.store,
						treeData: item,
						saveNodes: _this2.saveNodes,
						saveAttachment: _this2.saveAttachment,
						delNode: _this2.delNode,
						disabled: mobx.toJS(comStates)[item.id],
						oss: mobx.toJS(ossData),
						isShow: isShow,
						count: mobx.toJS(comCount)[item.id]
					});
				})
			);
		}
	}]);

	return Index;
}(_react2.default.Component)) || _class) || _class);
exports.default = Index;

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

/***/ 1789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 实施交付业务组件
                  * dangw@glodon.com
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _EditableTable = __webpack_require__(1790);

var _EditableTable2 = _interopRequireDefault(_EditableTable);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _antd.Modal.confirm;
var Delivery = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Delivery, _React$Component);

	function Delivery(props) {
		_classCallCheck(this, Delivery);

		var _this2 = _possibleConstructorReturn(this, (Delivery.__proto__ || Object.getPrototypeOf(Delivery)).call(this, props));

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			var _this = _this2;
			var currentTree = _this.state.currentTree;

			_this.props.form.validateFieldsAndScroll(function (err, values) {
				if (!err) {
					_this.props.saveNodes(currentTree);
					_this2.setState({
						hidden: !_this2.state.hidden
					});
				}
			});
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
			_this2.props.updateCount('payCount', Number(_this2.props.count) + 1);
		};

		_this2.onCanlc = function () {
			_this2.props.form.resetFields();
			_this2.setState({
				hidden: !_this2.state.hidden
			});
		};

		_this2.onPanelChange = function () {
			_this2.setState({
				isLoading: true
			}, function () {
				setTimeout(function () {
					_this2.setState({
						isLoading: false
					}, function () {
						// 跳转地址
						_this2.store.getProjectByWsProjectId().then(function (res) {
							var title = res.title,
							    projectId = res.projectId;

							if (projectId !== null && projectId !== "") {
								var url = 'https://www.bocspace.cn/eeop/#/xmgl?projectId=' + ('' + projectId) + '&name=' + ('' + title);
								window.open(url, '_bank');
							} else {
								_this2.showConfirm();
								return false;
							}
						});
					});
				}, 1000);
			});
		};

		_this2.onVisibleChange = function () {
			_this2.setState({
				calendarVis: !_this2.state.calendarVis
			});
		};

		_this2.disabledDate = function (current) {
			return current && current > (0, _moment2.default)().endOf('day'); //当天之前的不可选，包括当天
		};

		_this2.updatePerson = function (userIds) {
			var currentTree = _this2.state.currentTree;
			// 更新当前树

			var currentData = Object.assign({}, currentTree, { masters: userIds });
			// 更新tree
			var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
			_this2.store.treeData = utils.updateTreeData(treeData, "update", currentData);
		};

		_this2.dateCellRender = function (value) {
			var reportDays = _this2.store.reportDays;

			var val = (0, _moment2.default)(value).format("YYYY-MM-DD");
			var isShow = mobx.toJS(reportDays).includes(val);
			return _react2.default.createElement('img', {
				className: isShow ? "" : "hidden",
				style: { position: 'relative', 'top': '-5px' },
				'with': '16px',
				height: '16px',
				src: './images/zhmy_succes.png', alt: '' });
		};

		_this2.showConfirm = function () {
			confirm({
				className: "tc modal_tc",
				//iconType: 'exclamation-circle',
				icon: null,
				title: '请先在施工日志中关联项目',
				content: '',
				onOk: function onOk() {
					var url = 'https://www.bocspace.cn/eeop/#/construction';
					window.open(url, '_bank');
				},
				onCancel: function onCancel() {},

				okText: '前往关联',
				cancelText: '关闭'
			});
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			hidden: true, // 面板折叠展开
			dataSource: [], // 任务的数据源
			currentTree: {}, // 存储当前组件树对象
			pid: '', // 父节点id
			projectId: "", // 项目id
			defaultTree: {}, // 记录当前树的默认数据
			calendarVis: false,
			isLoading: false
		};
		return _this2;
	}

	_createClass(Delivery, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			var treeData = nextProps.treeData,
			    disabled = nextProps.disabled;

			if ((typeof treeData === 'undefined' ? 'undefined' : _typeof(treeData)) == 'object' && Object.keys(treeData).length !== 0 && treeData !== this.props.treeData) {
				if (treeData.children === null) {
					// 没有任务集合
					this.setState({
						dataSource: []
					});
				} else {
					// 包含任务集合
					var dataSource = treeData.children.filter(function (item) {
						return item.treeType == "taskc";
					})[0].children;
					this.setState({
						dataSource: dataSource,
						currentTree: Object.assign({}, treeData), // 更新同步
						pid: treeData.children.filter(function (item) {
							return item.treeType == "taskc";
						})[0].id,
						projectId: treeData.children.filter(function (item) {
							return item.treeType == "taskc";
						})[0].projectId
						//hidden: disabled,
					}, function () {
						// 更新记录当前树的附件数据
						var attc = treeData.children.filter(function (item) {
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
			var _props = this.props,
			    treeData = _props.treeData,
			    disabled = _props.disabled;

			if ((typeof treeData === 'undefined' ? 'undefined' : _typeof(treeData)) == 'object' && Object.keys(treeData).length !== 0) {
				if (treeData.children === null) {
					// 没有任务集合
					this.setState({
						dataSource: []
					});
				} else {
					// 包含子任务集合
					var dataSource = treeData.children.filter(function (item) {
						return item.treeType == "taskc";
					})[0].children;
					this.setState({
						dataSource: dataSource,
						currentTree: Object.assign({}, treeData),
						pid: treeData.children.filter(function (item) {
							return item.treeType == "taskc";
						})[0].id,
						projectId: treeData.children.filter(function (item) {
							return item.treeType == "taskc";
						})[0].projectId
						//hidden: disabled
					});
				}
			}
		}

		// 保存


		// 更新该节点树 数据


		// 编辑、创建


		// 取消


		// 日历切换


		// 人员选择更新

	}, {
		key: 'render',
		value: function render() {
			var _this = this;
			var getFieldDecorator = _this.props.form.getFieldDecorator;
			var _props2 = this.props,
			    count = _props2.count,
			    isShow = _props2.isShow;

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
			var _store = this.store,
			    state = _store.state,
			    projectId = _store.projectId;
			var _this$state = _this.state,
			    isLoading = _this$state.isLoading,
			    calendarVis = _this$state.calendarVis,
			    hidden = _this$state.hidden,
			    currentTree = _this$state.currentTree,
			    pid = _this$state.pid;

			var currentDataSource = currentTree.children != null && currentTree.children[0].children != null ? currentTree.children[0].children : [];

			return _react2.default.createElement(
				_antd.Card,
				{ bordered: true, style: { width: '100%' }, className: 'mt20' },
				_react2.default.createElement(
					_antd.Spin,
					{ tip: "正在跳转，请稍等...", spinning: isLoading, delay: 1000 },
					_react2.default.createElement(
						'h3',
						{ id: currentTree.id, className: 'kanban_title mb20' },
						'\u5B9E\u65BD\u4EA4\u4ED8'
					)
				),
				_react2.default.createElement(
					'span',
					{ className: 'worktile_progress_add' },
					hidden ? _react2.default.createElement(
						_antd.Button,
						{ disabled: isShow, className: state == 2 ? "hidden" : "", type: 'link',
							onClick: this.onChangeVis },
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
					_antd.Form,
					_extends({ className: count == 1 ? "hidden" : "clearfix", layout: 'inline' }, formItemLayout),
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
									initialValue: currentTree && currentTree.masters == null ? [] : currentTree.masters.map(function (item) {
										return item.userId;
									}),
									rules: [{ required: false, message: '请选择主负责人' }]
								})(_react2.default.createElement(_PersonAddIcon2.default, {
									data: currentTree && currentTree.masters == null ? [] : currentTree.masters,
									updatePerson: this.updatePerson,
									disabled: hidden
								}))
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 },
							_react2.default.createElement('img', {
								width: '32px',
								height: '32px',
								style: { verticalAlign: 'middle' },
								src: './images/delivery.png' }),
							_react2.default.createElement('span', null),
							_react2.default.createElement(
								_antd.Dropdown,
								{
									visible: calendarVis,
									onVisibleChange: this.onVisibleChange,
									overlay: _react2.default.createElement(
										'div',
										{ style: {
												width: 300,
												background: '#FFF',
												border: '1px solid #d9d9d9',
												borderRadius: 4
											} },
										_react2.default.createElement(_antd.Calendar, {
											disabledDate: this.disabledDate,
											dateCellRender: this.dateCellRender,
											fullscreen: false,
											onSelect: this.onPanelChange })
									) },
								_react2.default.createElement(
									'a',
									{ className: 'ant-dropdown-link', onClick: function onClick(e) {
											return e.preventDefault();
										} },
									'\u65BD\u5DE5\u65E5\u5FD7'
								)
							)
						)
					)
				),
				count == 1 ? null : _react2.default.createElement(_EditableTable2.default, {
					dataSource: currentDataSource,
					saveData: this.saveData2,
					projectId: projectId,
					pid: pid,
					disabled: hidden,
					store: this.store,
					saveAttachment: this.props.saveAttachment,
					delNode: this.props.delNode,
					ossData: this.props.ossData
				})
			);
		}
	}]);

	return Delivery;
}(_react2.default.Component)) || _class) || _class);
exports.default = Delivery;

/***/ }),

/***/ 1790:
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

var _PayUpload = __webpack_require__(1791);

var _PayUpload2 = _interopRequireDefault(_PayUpload);

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
var widthDESIGN = { 2: '13%', 4: '10%' }; // 自定义表格宽度


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
						{ className: 'w' },
						_react2.default.createElement(_antd.Input, {
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
						style: { minWidth: '120px' },
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
						style: { minWidth: '120px' },
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
			} else {
				// 完成比例
				var _subNumber = record.children == null || record.children.length == 0 ? 0 : record.children.length;
				var _isEdit = _subNumber > 0 ? true : false;
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
						disabled: _isEdit,
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
			var _this3$props = _this3.props,
			    pid = _this3$props.pid,
			    projectId = _this3$props.projectId;
			//const newData = Object.assign(primaryData, {key: count, id: "!" + uuidv4()});

			var uuid = "!" + (0, _uuid.v4)();
			var newData = Object.assign({}, {
				"id": uuid,
				"pid": pid,
				"projectId": projectId,
				"treeType": "task",
				"masters": [],
				"children": [{
					"id": "!" + (0, _uuid.v4)(),
					"pid": uuid,
					"projectId": projectId,
					"treeType": "attc",
					"masters": null,
					"children": null,
					"name": "附件",
					"type": 0
				}],
				"name": "",
				"rate": 0,
				"nodeCount": null,
				"beginTime": null,
				"endTime": null,
				"orders": 0,
				"remark": ""
			});
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

		_this3.handleChangeMenu = function (type, item, rowId) {
			var id = item.id,
			    fileType = item.fileType,
			    filePath = item.filePath;
			// 本地存储

			var payOutput = JSON.parse(JSON.stringify(_this3.store[type]));
			_this3.store[type] = Object.assign(payOutput, _defineProperty({}, rowId, JSON.stringify({
				fileName: item.fileName,
				filePath: filePath,
				id: id,
				fileType: fileType
			})));
		};

		_this3.handleLinkTo = function (rowUrl, obj, rowId) {
			var id = obj.id,
			    fileType = obj.fileType,
			    filePath = obj.filePath,
			    fileName = obj.fileName;

			var linkUrl;
			if (rowUrl != undefined && rowUrl != null) {
				var link = JSON.parse(rowUrl).filePath;
				var linkId = JSON.parse(rowUrl).id;
				var linkType = JSON.parse(rowUrl).fileType;
				var linkName = JSON.parse(rowUrl).fileName;
				if (link == "" || link == null) {
					var params = {
						id: linkId,
						type: linkType
					};
					_this3.store.getTaskattEditUrl(params).then(function (res) {
						if (res) {
							linkUrl = res;
							window.open(linkUrl, '_blank');
						}
					});
				} else {
					linkUrl = link;
					window.open(linkUrl, '_blank');
				}
				// 维护本地数据
				var payOutput = JSON.parse(JSON.stringify(_this3.store.payOutput));
				_this3.store.payOutput = Object.assign(payOutput, _defineProperty({}, rowId, JSON.stringify({
					fileName: linkName,
					filePath: linkUrl,
					id: linkId,
					fileType: linkType
				})));
			} else {
				// rowUr为空
				if (filePath == "" || filePath == null) {
					var _params = {
						id: id,
						type: fileType
					};
					_this3.store.getTaskattEditUrl(_params).then(function (res) {
						if (res) {
							linkUrl = res;
							window.open(linkUrl, '_blank');
						}
					});
				} else {
					linkUrl = filePath;
					window.open(linkUrl, '_blank');
				}
				// 维护本地数据
				var _payOutput = JSON.parse(JSON.stringify(_this3.store.payOutput));
				_this3.store.payOutput = Object.assign(_payOutput, _defineProperty({}, rowId, JSON.stringify({
					fileName: fileName,
					filePath: linkUrl,
					id: id,
					fileType: fileType
				})));
			}
		};

		_this3.handleLinkDown = function (rowUrl, obj, rowId) {
			var filePath = obj.filePath;

			if (rowUrl != undefined && rowUrl != null) {
				var link = JSON.parse(rowUrl).filePath;
				var linkArray = link.split(";");
				linkArray.forEach(function (item) {
					window.open(item, '_blank');
				});
			} else {
				// rowUr为空
				var _linkArray = filePath.split(";");
				_linkArray.forEach(function (item) {
					window.open(item, '_blank');
				});
			}
		};

		_this3.download = function (attc) {
			if (attc.length > 0) {
				var url = attc[0].filePath;
				window.open(url, '_blank');
			} else {
				return false;
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
				"children": [{
					"id": "",
					"pid": "",
					"projectId": "",
					"treeType": "attc",
					"masters": null,
					"children": null,
					"name": "",
					"type": 0
				}],
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
						return Object.assign(item, { key: index + 1 });
					}),
					count: nextProps.dataSource == null || nextProps.dataSource.length == 0 ? 0 : nextProps.dataSource.length,
					primaryData: Object.assign({}, {
						"id": "",
						"pid": nextProps.pid,
						"projectId": nextProps.projectId,
						"treeType": "task",
						"masters": [],
						"children": [{
							"id": "",
							"pid": "",
							"projectId": this.props.projectId,
							"treeType": "attc",
							"masters": null,
							"children": null,
							"name": "",
							"type": 0
						}],
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
					return Object.assign(item, { "key": index + 1 });
				}),
				count: this.props.dataSource === null || this.props.dataSource.length == 0 ? 0 : this.props.dataSource.length,
				primaryData: Object.assign({}, {
					"id": "",
					"pid": this.props.pid,
					"projectId": this.props.projectId,
					"treeType": "task",
					"masters": [],
					"children": [{
						"id": "",
						"pid": "",
						"projectId": this.props.projectId,
						"treeType": "attc",
						"masters": null,
						"children": null,
						"name": "",
						"type": 0
					}],
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

			this.eventE3 = _events2.default.addListener('handletaskid', function (obj) {
				_this4.getKeyByShowRow(obj.pid, obj.pid, obj.isEdit);
			});
		}
	}, {
		key: 'componentWillUnMount',
		value: function componentWillUnMount() {
			_events2.default.removeListener(this.eventE3);
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


		// 在线编辑跳转


		//模板下载


		// 预览

	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _state = this.state,
			    subTaskDis = _state.subTaskDis,
			    dataSource = _state.dataSource,
			    expandedKeys = _state.expandedKeys;
			var temId = this.store.temId;

			var payOutput = mobx.toJS(this.store.payOutput);
			var temOutput = mobx.toJS(this.store.temOutput);
			var disabled = this.props.disabled;
			var taskhaveattt = this.props.taskhaveattt;

			var isChaijie = expandedKeys.length > 0;
			var components = {
				body: {
					row: EditableFormRow,
					cell: EditableCell
				}
			};
			var columnEle = [{
				title: '序号',
				dataIndex: 'key',
				align: "center",
				width: '70px',
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{
							style: { width: '70px' },
							id: '/workdetail?projectid=' + record.projectId + '&id=' + record.id,
							onClick: _this5.onRow.bind(_this5, record),
							className: 'w pr' },
						_react2.default.createElement(
							_antd.Popconfirm,
							{ title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?' },
							_react2.default.createElement(_antd.Icon, {
								className: !disabled && !isChaijie ? "" : "hidden",
								style: {
									position: 'absolute',
									left: '0',
									color: '#F17E7E',
									fontSize: '18px',
									paddingRight: '5px'
								},
								type: 'minus-circle' })
						),
						_react2.default.createElement(
							'span',
							null,
							text
						)
					);
				}
			}, {
				title: '任务',
				dataIndex: 'name',
				width: widthDESIGN[temId],
				align: "left",
				editable: !disabled && !isChaijie
			}, {
				title: '负责人',
				dataIndex: 'masters',
				width: widthDESIGN[temId],
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
				//width: widthDESIGN[temId],
				width: 150,
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
				//width: widthDESIGN[temId],
				width: 150,
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
				width: widthDESIGN[temId],
				editable: !disabled && !isChaijie,
				align: "center",
				render: function render(text, record) {
					return _react2.default.createElement(
						'div',
						{ style: { width: '100%', height: '46px', lineHeight: '46px' }, onClick: _this5.onRow.bind(_this5, record),
							id: record.id },
						text,
						'%'
					);
				}
			}, {
				title: '对应产出',
				dataIndex: 'rate',
				//width: widthDESIGN[temId],
				width: 150,
				align: "left",
				render: function render(text, record) {
					var children = record.children;

					var attcArray = children != null && Array.isArray(children) && children.filter(function (item) {
						return item.type == 0;
					}); // 正常附件
					var onlineArray = children != null && Array.isArray(children) && children.filter(function (item) {
						return item.type == 1;
					}); // 在线编辑
					if (attcArray.length > 0) {
						var attcObj = attcArray[0]; //正常
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
						var isNew = attcObj.id.includes("!");
						return _react2.default.createElement(
							'div',
							{ className: 'table_upload pay_upload', style: { width: '100%', height: '46px', lineHeight: '46px' } },
							_react2.default.createElement(
								'span',
								{
									className: 'ellsis',
									title: attcObj.name,
									onClick: _this5.download.bind(_this5, attachments),
									style: {
										color: attachments.length > 0 ? '#1890ff' : '#333',
										cursor: attachments.length > 0 ? 'pointer' : 'default',
										padding: '0 5px',
										maxWidth: '80px',
										display: 'inline-block',
										verticalAlign: 'middle'
									} },
								attcObj.name
							),
							disabled || isChaijie || isNew ? null : _react2.default.createElement(_PayUpload2.default, {
								saveAttachment: _this5.props.saveAttachment,
								delNode: _this5.props.delNode,
								fileList: attachments,
								pid: attcObj ? attcObj.id : "",
								projectId: attcObj ? attcObj.projectId : "",
								disabled: disabled || isChaijie,
								ossData: _this5.props.ossData,
								multiple: false
							})
						);
					} else if (onlineArray.length > 0) {
						var onlineObj = onlineArray[0]; //在线
						var _children = onlineObj.children;

						var rowUrl = payOutput[record.id];
						var fileUrl = rowUrl !== undefined && rowUrl !== null ? JSON.parse(rowUrl).filePath : _children[0].filePath;
						return _react2.default.createElement(
							'div',
							{ style: { width: '100%', height: '46px', lineHeight: '46px' } },
							_react2.default.createElement(
								_antd.Dropdown,
								{ overlay: _react2.default.createElement(
										_antd.Menu,
										null,
										_children.length > 0 && _children.map(function (item, index) {
											return _react2.default.createElement(
												_antd.Menu.Item,
												{
													onClick: _this5.handleChangeMenu.bind(_this5, 'payOutput', item, record.id),
													key: "menu_" + index },
												item.fileName == null ? "--" : item.fileName
											);
										})
									) },
								_react2.default.createElement(
									'span',
									{ className: _children.length == 1 ? "hidden" : "ant-dropdown-link",
										onClick: function onClick(e) {
											return e.preventDefault();
										} },
									_react2.default.createElement(_antd.Icon, { type: 'caret-down' })
								)
							),
							_react2.default.createElement(
								'span',
								{
									className: 'ellsis',
									onClick: disabled || isChaijie ? _this5.handleLinkTo.bind(_this5, rowUrl, _children[0], record.id) : null,
									title: _children.length > 0 ? rowUrl !== undefined && rowUrl !== null ? JSON.parse(rowUrl).fileName : _children[0].fileName : null,
									style: {
										color: fileUrl == null || fileUrl == "" ? '#333' : '#1890ff',
										padding: '0 5px',
										maxWidth: '80px',
										display: 'inline-block',
										verticalAlign: 'middle',
										cursor: 'pointer'
									} },
								_children.length > 0 ? rowUrl !== undefined && rowUrl !== null ? JSON.parse(rowUrl).fileName : _children[0].fileName : null
							),
							disabled || isChaijie ? null : _react2.default.createElement(_antd.Icon, { type: 'edit', style: { color: "#1890ff" },
								onClick: _this5.handleLinkTo.bind(_this5, rowUrl, _children[0], record.id) })
						);
					} else {
						return null;
					}
				}
			}, {
				title: '模板下载',
				dataIndex: 'template',
				className: temId == 2 ? "hidden" : "",
				//width: widthDESIGN[temId],
				width: 150,
				align: "left",
				render: function render(text, record) {
					if (temId == 2) {
						// 前端处理 - 劳务仓流程不渲染组件
						return null;
					} else {
						var children = record.children,
						    treeType = record.treeType;

						if (treeType == "task") {
							var temArray = children != null && children != undefined && Array.isArray(children) && children.filter(function (item) {
								return item.type == 2;
							}); // 模板
							if (temArray.length == 0) {
								return _react2.default.createElement(
									'div',
									{ className: 'tc', style: { width: '70px' } },
									' - - '
								);
							} else {
								var temObj = temArray[0]; // 模板
								var temChildren = temObj.children == null ? [] : temObj.children;
								//var fileUrl;
								var rowUrl;
								if (temOutput !== undefined) {
									rowUrl = temOutput[record.id];
									//fileUrl = rowUrl !== undefined && rowUrl !== null ? JSON.parse(rowUrl).filePath : children[0].filePath;
								}
								return _react2.default.createElement(
									'div',
									{ style: { width: '100%', height: '46px', lineHeight: '46px' } },
									_react2.default.createElement(
										_antd.Dropdown,
										{ overlay: _react2.default.createElement(
												_antd.Menu,
												null,
												temChildren.length > 0 && temChildren.map(function (item, index) {
													return _react2.default.createElement(
														_antd.Menu.Item,
														{
															onClick: _this5.handleChangeMenu.bind(_this5, 'temOutput', item, record.id),
															key: "menu_" + index },
														item.fileName == null ? "--" : item.fileName
													);
												})
											) },
										_react2.default.createElement(
											'span',
											{ className: temChildren.length == 1 ? "hidden" : "ant-dropdown-link",
												onClick: function onClick(e) {
													return e.preventDefault();
												} },
											_react2.default.createElement(_antd.Icon, { type: 'caret-down' })
										)
									),
									_react2.default.createElement(
										'span',
										{
											className: 'ellsis',
											title: children.length > 0 ? rowUrl !== undefined && rowUrl !== null ? JSON.parse(rowUrl).fileName : temChildren[0].fileName : null,
											style: {
												//color: fileUrl == undefined || fileUrl == null || fileUrl == "" ? '#333' : '#1890ff',
												padding: '0 5px',
												maxWidth: '80px',
												display: 'inline-block',
												verticalAlign: 'middle'
											} },
										children.length > 0 ? rowUrl !== undefined && rowUrl !== null ? JSON.parse(rowUrl).fileName : temChildren[0].fileName : null
									),
									_react2.default.createElement(_antd.Icon, { type: 'vertical-align-bottom', style: { color: "#1890ff", fontSize: '20px' },
										onClick: _this5.handleLinkDown.bind(_this5, rowUrl, temChildren[0], record.id) })
								);
							}
						}
					}
				}
			}, {
				title: '备注',
				dataIndex: 'remark',
				width: widthDESIGN[temId],
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
							onClick: _this5.onRow.bind(_this5, record), id: record.id },
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
					},
					scroll: { x: (columns.length - 2) * 140 + 140 }
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

/***/ 1791:
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

var PayUpload = function (_React$Component) {
    _inherits(PayUpload, _React$Component);

    function PayUpload(props) {
        _classCallCheck(this, PayUpload);

        var _this = _possibleConstructorReturn(this, (PayUpload.__proto__ || Object.getPrototypeOf(PayUpload)).call(this, props));

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
                //let array = JSON.parse(JSON.stringify([...oldFileList, ...newFileList]))
                var array = JSON.parse(JSON.stringify([].concat(_toConsumableArray(newFileList))));
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

    _createClass(PayUpload, [{
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
                multiple: this.props.multiple,
                onChange: this.handleChange,
                beforeUpload: this.beforeUpload,
                listType: 'text',
                className: 'upload-list-inline',
                disabled: this.props.disabled
            };
            return _react2.default.createElement(
                _antd.Upload,
                _extends({}, props, { fileList: fileList }),
                _react2.default.createElement(_antd.Icon, { style: { fontSize: '25px', color: '#53B3E5' }, type: 'cloud-upload' })
            );
        }
    }]);

    return PayUpload;
}(_react2.default.Component);

exports.default = PayUpload;

/***/ }),

/***/ 1792:
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


var openNotificationWithIcon = function openNotificationWithIcon(type) {
    _antd.notification[type]({
        message: '感谢所有人对此项目所付出的努力',
        description: '幸苦了，继续加油！'
    });
};

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
                    openNotificationWithIcon("success");
                    _this.onCancel();
                    // this.updateTree();
                    _this.store.getStageTree();
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
        value: function scrollToAnchor(params) {
            var id = params.id,
                key = params.key;
            var scrollToAnchor = this.props.scrollToAnchor;
            var temId = this.store.temId;

            if (temId == undefined) {
                // 特殊处理项目、产品设计
                scrollToAnchor(key);
            } else {
                scrollToAnchor(id);
            }
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

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Affix,
                    { offsetTop: 64 },
                    _react2.default.createElement(
                        'div',
                        { className: 'w clearfix',
                            style: { backgroundColor: '#FFF',
                                minHeight: '30px',
                                padding: '40px 30px' } },
                        listData.length > 0 ? listData.map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    onClick: _this2.scrollToAnchor.bind(_this2, item),
                                    key: index,
                                    style: {
                                        width: '14%',
                                        float: 'left',
                                        display: 'inlineBlock',
                                        position: 'relative'
                                    } },
                                item.rate >= 100 ? _react2.default.createElement(_antd.Badge, { className: 'worktile_progress_span_active', status: 'processing' }) : _react2.default.createElement('span', { className: 'worktile_progress_span' }),
                                _react2.default.createElement(_antd.Progress, {
                                    className: 'worktile_progress',
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
                                        { className: item.rate > 0 ? "worktile_progress_item_active" : "worktile_progress_item" },
                                        item.stageName
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'worktile_progress_name' },
                                        item.masters == null ? " " : item.masters.map(function (item) {
                                            return item.userName;
                                        }).join("、"),
                                        item.rate == 100 ? _react2.default.createElement(_antd.Icon, { type: 'check-circle', style: { paddingLeft: '5px', fontSize: '16px', color: "#108DE9" } }) : null
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'worktile_progress_name' },
                                        item.finishTime == 0 ? item.rate > 0 ? _react2.default.createElement(
                                            'a',
                                            { style: { cursor: "default" } },
                                            '\u8FDB\u884C\u4E2D'
                                        ) : null : item.rate == 100 ? (0, _moment2.default)(item.finishTime).format("YYYY-MM-DD HH:mm") : _react2.default.createElement(
                                            'a',
                                            { style: { cursor: "default" } },
                                            '\u8FDB\u884C\u4E2D'
                                        )
                                    )
                                )
                            );
                        }) : _react2.default.createElement(_antd.Empty, { description: false }),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    width: '2%',
                                    float: 'left',
                                    display: 'inlineBlock',
                                    position: 'relative'
                                } },
                            _react2.default.createElement('span', { className: 'worktile_progress_span' }),
                            _react2.default.createElement(
                                'div',
                                { style: { textAlign: 'left', position: 'relative', left: '-22px', top: '22px' } },
                                _react2.default.createElement(
                                    'p',
                                    { className: "worktile_progress_item", style: { width: '80px' } },
                                    '\u5168\u90E8\u5B8C\u6210'
                                )
                            )
                        ),
                        !isShow ? _react2.default.createElement(
                            _antd.Button,
                            {
                                onClick: this.showModal,
                                className: state == 0 ? "fr btn_yellow" : "hidden",
                                type: 'primary',
                                shape: 'round',
                                ghost: true },
                            '\u5173\u95ED\u9879\u76EE'
                        ) : null,
                        _react2.default.createElement(
                            _antd.Popover,
                            { content: content },
                            _react2.default.createElement(
                                _antd.Button,
                                { className: state == 1 ? "fr" : "hidden",
                                    type: 'primary',
                                    shape: 'round' },
                                '\u6B63\u5E38\u7ED3\u675F'
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Popover,
                            { content: content },
                            _react2.default.createElement(
                                _antd.Button,
                                { className: state == 2 ? "fr btn_yellow_active" : "hidden",
                                    type: 'primary',
                                    shape: 'round' },
                                '\u4E2D\u9014\u5173\u95ED'
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

/***/ 1793:
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

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _EditableTable = __webpack_require__(1538);

var _EditableTable2 = _interopRequireDefault(_EditableTable);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            // 校验1：任务名称必输 截至日期必输

            var currentDataSource = currentTree.children != null && currentTree.children[0].children != null ? currentTree.children[0].children : [];
            var isSub = currentDataSource.filter(function (item) {
                return item.name == "" || item.name == null;
            });
            if (isSub.length > 0) {
                // true
                _antd.message.warn("任务名称是必填项");
                return false;
            }
            var isEndime = currentDataSource.filter(function (item) {
                return item.beginTime != "" && item.beginTime != null && (item.endTime == "" || item.endTime == null);
            });
            if (isEndime.length > 0) {
                // true
                _antd.message.warn("截至日期是必填项");
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
                    var comStates = JSON.parse(JSON.stringify(_this.store.comStates));
                    _this.store.comStates = Object.assign(comStates, _defineProperty({}, _this.props.id, true));
                }
            });
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
            var comStates = JSON.parse(JSON.stringify(_this2.store.comStates));
            _this2.store.comStates = Object.assign(comStates, _defineProperty({}, _this2.props.id, false));
            var comCount = JSON.parse(JSON.stringify(_this2.store.comCount));
            _this2.store.comCount = Object.assign(comCount, _defineProperty({}, _this2.props.id, Number(_this2.props.count) + 1));
            // 点击编辑时记录当前树的默认数据
            _this2.setState({
                defaultTree: Object.assign({}, _this2.state.currentTree)
            });
        };

        _this2.onCanlc = function () {
            _this2.props.form.resetFields();
            _this2.onChangeVis();
            var comStates = JSON.parse(JSON.stringify(_this2.store.comStates));
            _this2.store.comStates = Object.assign(comStates, _defineProperty({}, _this2.props.id, true));
            // 更新tree
            var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
            _this2.store.treeData = utils.updateTreeData(treeData, "update", _this2.state.defaultTree);
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
            userIds: [],
            hidden: true, // 面板折叠展开
            currentTree: {}, // 存储当前组件树对象
            pid: '',
            projectId: "",
            defaultTree: {} // 记录当前树的默认数据
        };
        return _this2;
    }

    _createClass(WortileCommon, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
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
                        })[0].projectId,
                        hidden: nextProps.disabled
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
                        })[0].projectId,
                        hidden: this.props.disabled
                    });
                }
            }
        }

        // 保存


        // 更新该节点树 数据


        // 编辑


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
                hidden = _this$state2.hidden,
                currentTree = _this$state2.currentTree;
            var state = _this.store.state;
            var _props = this.props,
                isShow = _props.isShow,
                count = _props.count;

            var currentDataSource = currentTree.children != null && currentTree.children[0].children != null ? currentTree.children[0].children : [];
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
                    { id: this.props.id, className: 'kanban_title mb20' },
                    _this.props.treeData.stageName
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'worktile_progress_add' },
                    hidden ? _react2.default.createElement(
                        _antd.Button,
                        { className: state == 2 ? "hidden" : "",
                            disabled: isShow,
                            type: 'link',
                            onClick: this.onChangeVis },
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
                            _antd.Button,
                            { disabled: isExp, type: 'link', onClick: this.handleSubmit },
                            '\u4FDD\u5B58'
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Form,
                    _extends({ className: count == 1 ? "hidden" : "clearfix", layout: 'inline' }, formItemLayout),
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
                                    initialValue: currentTree && currentTree.masters == null ? [] : currentTree.masters.map(function (item) {
                                        return item.userId;
                                    }),
                                    rules: [{ required: false, message: '请选择主负责人' }]
                                })(_react2.default.createElement(_PersonAddIcon2.default, {
                                    data: currentTree && currentTree.masters == null ? [] : currentTree.masters,
                                    updatePerson: this.updatePerson,
                                    disabled: hidden
                                }))
                            )
                        )
                    )
                ),
                count == 1 ? null : _react2.default.createElement(_EditableTable2.default, {
                    id: this.props.id,
                    dataSource: currentDataSource,
                    saveData: this.saveData2,
                    projectId: this.state.projectId,
                    pid: this.state.pid,
                    disabled: hidden,
                    store: this.store
                }),
                count == 1 ? null : _react2.default.createElement(
                    'div',
                    { className: hidden ? "mt15" : "myupload_pos" },
                    _react2.default.createElement(_MyUpload2.default, {
                        saveAttachment: this.props.saveAttachment,
                        delNode: this.props.delNode,
                        fileList: attachments,
                        pid: attcObj.id,
                        projectId: attcObj.projectId,
                        disabled: hidden,
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

/***/ 2033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 展厅流程项目评估组件
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;
var TextArea = _antd.Input.TextArea;
var Appraisal = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Appraisal, _React$Component);

	function Appraisal(props) {
		_classCallCheck(this, Appraisal);

		var _this2 = _possibleConstructorReturn(this, (Appraisal.__proto__ || Object.getPrototypeOf(Appraisal)).call(this, props));

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			var _this = _this2;
			var projectId = _this.store.projectId;

			_this.props.form.validateFields(function (err, values) {
				//console.log(values, err, '参数')
				if (!err) {
					var currentTree = JSON.parse(JSON.stringify(_this.state.currentTree));
					var fields = _this.state.fields;

					var params = Object.assign(currentTree, {
						"projectId": projectId,
						"jbzl": {
							"xmgs": values["xmgs"],
							"xmys": values["xmys"],
							"xmbj": values["xmbj"],
							"cgrq": values["cgrq"],
							"ztmd": values["ztmd"],
							"jszq": values["jszq"]
						},
						"srzl": {
							"sjzd": values["sjzd"],
							"scyq": values["scyq"],
							"zxyq": values["zxyq"],
							"dgyq": values["dgyq"],
							"sgclyq": values["sgclyq"],
							"jbtsdln": values["jbtsdln"],
							"zhhsddyy": fields["zhhsddyy"]
						},
						"fzzl": {
							"gsxyalalck": values["gsxyalalck"],
							"bcsm": values["bcsm"]
						}
					});
					_this.props.saveNodes(params);
					_this.setState({
						hidden: !_this.state.hidden,
						key: '1'
					});
				} else {
					_antd.message.warn("请填写基本资料中的必填项");
					return false;
				}
			});
		};

		_this2.updatePerson = function (type, userIds) {
			var fields = JSON.parse(JSON.stringify(_this2.state.fields));
			_this2.setState({
				fields: Object.assign(fields, _defineProperty({}, type, userIds))
			});
		};

		_this2.onChangeVis = function () {
			_this2.setState({
				hidden: !_this2.state.hidden
			});
			_this2.props.updateCount('pgCount', Number(_this2.props.count) + 1);
		};

		_this2.onCanlc = function () {
			_this2.props.form.resetFields();
			_this2.setState({
				hidden: !_this2.state.hidden
			});
		};

		_this2.callback = function (key) {
			_this2.setState({
				key: key
			});
		};

		_this2.onChange = function (type, checkedValues) {
			var fields = JSON.parse(JSON.stringify(_this2.state.fields));
			_this2.setState({
				fields: Object.assign(fields, _defineProperty({}, type, checkedValues))
			});
		};

		_this2.updateMaster = function (userIds) {
			var currentTree = _this2.state.currentTree;
			// 更新当前树

			var currentData = Object.assign({}, currentTree, { masters: userIds });
			// 更新tree
			var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
			_this2.store.treeData = utils.updateTreeData(treeData, "update", currentData);
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			fields: {
				"id": '',
				"pid": '',
				"xmgs": null,
				"xmys": null,
				"xmbj": null,
				"cgrq": null,
				"ztmd": null,
				"jszq": null,
				"sjzd": null,
				"scyq": null,
				"zxyq": null,
				"dgyq": null,
				"sgclyq": null,
				"jbtsdln": null,
				"zhhsddyy": null,
				"gsxyalalck": null,
				"bcsm": null
			},
			hidden: true, // 面板折叠展开
			key: "1",
			currentTree: {}
		};
		return _this2;
	}

	_createClass(Appraisal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var itemObj = nextProps.itemObj;

			if (Object.keys(itemObj).length > 0) {
				var projectinfo = itemObj.children.filter(function (item) {
					return item.treeType == "normal";
				})[0]; // 字段
				this.setState({
					currentTree: Object.assign({}, projectinfo),
					fields: {
						"id": projectinfo.id,
						"pid": projectinfo.pid,
						"xmgs": projectinfo.jbzl["xmgs"],
						"xmys": projectinfo.jbzl["xmys"],
						"xmbj": projectinfo.jbzl["xmbj"],
						"cgrq": projectinfo.jbzl["cgrq"],
						"ztmd": projectinfo.jbzl["ztmd"],
						"jszq": projectinfo.jbzl["jszq"],
						"sjzd": projectinfo.srzl["sjzd"],
						"scyq": projectinfo.srzl["scyq"],
						"zxyq": projectinfo.srzl["zxyq"],
						"dgyq": projectinfo.srzl["dgyq"],
						"sgclyq": projectinfo.srzl["sgclyq"],
						"jbtsdln": projectinfo.srzl["jbtsdln"],
						"zhhsddyy": projectinfo.srzl["zhhsddyy"],
						"gsxyalalck": projectinfo.fzzl["gsxyalalck"],
						"bcsm": projectinfo.fzzl["bcsm"]
					}
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    itemObj = _props.itemObj,
			    disabled = _props.disabled;

			if (Object.keys(itemObj).length > 0) {
				var projectinfo = itemObj.children.filter(function (item) {
					return item.treeType == "normal";
				})[0]; // 字段
				this.setState({
					currentTree: Object.assign({}, projectinfo),
					fields: {
						"id": projectinfo.id,
						"pid": projectinfo.pid,
						"xmgs": projectinfo.jbzl["xmgs"],
						"xmys": projectinfo.jbzl["xmys"],
						"xmbj": projectinfo.jbzl["xmbj"],
						"cgrq": projectinfo.jbzl["cgrq"],
						"ztmd": projectinfo.jbzl["ztmd"],
						"jszq": projectinfo.jbzl["jszq"],
						"sjzd": projectinfo.srzl["sjzd"],
						"scyq": projectinfo.srzl["scyq"],
						"zxyq": projectinfo.srzl["zxyq"],
						"dgyq": projectinfo.srzl["dgyq"],
						"sgclyq": projectinfo.srzl["sgclyq"],
						"jbtsdln": projectinfo.srzl["jbtsdln"],
						"zhhsddyy": projectinfo.srzl["zhhsddyy"],
						"gsxyalalck": projectinfo.fzzl["gsxyalalck"],
						"bcsm": projectinfo.fzzl["bcsm"]
					},
					hidden: disabled
				});
			}
			this.props.onAppRef(this);
		}

		// 保存


		// 人员选择更新


		// 编辑、创建


		// 取消


		// 人员选择更新

	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    fields = _state.fields,
			    hidden = _state.hidden,
			    key = _state.key,
			    currentTree = _state.currentTree;
			var state = this.store.state;
			var _props2 = this.props,
			    count = _props2.count,
			    isShow = _props2.isShow,
			    ossData = _props2.ossData,
			    saveAttachment = _props2.saveAttachment,
			    delNode = _props2.delNode,
			    itemObj = _props2.itemObj;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 6 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 18 }
				}
			};
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
			var attcObj = currentTree.children != null && currentTree.children.filter(function (item) {
				return item.treeType === 'attc' && item.name == "场地CAD图纸";
			})[0]; // 场地CAD附件对象
			var attcObj2 = currentTree.children != null && currentTree.children.filter(function (item) {
				return item.treeType === 'attc' && item.name == "公司心仪案例/案例参考";
			})[0]; // 案例附件对象
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
			var attachments2 = attcObj2.children != null ? attcObj2.children.map(function (vitem) {
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
			var plainOptions = ['智慧工地', 'BIM展示', '智慧劳务', '智慧物料', 'VR体验', '互动多媒体'];
			return _react2.default.createElement(
				_antd.Card,
				{ bordered: true, className: 'pr mt20', style: { width: '100%' } },
				_react2.default.createElement(
					'h3',
					{ id: itemObj.id, className: 'kanban_title mb20' },
					'\u9879\u76EE\u8BC4\u4F30'
				),
				_react2.default.createElement(
					'span',
					{ className: 'worktile_progress_add' },
					hidden ? _react2.default.createElement(
						_antd.Button,
						{ className: state == 2 ? "hidden" : "", type: 'link',
							disabled: isShow,
							onClick: this.onChangeVis },
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
					_antd.Form,
					_extends({ className: count == 1 ? "hidden" : "clearfix", layout: 'inline' }, formItemLayout2),
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
									initialValue: currentTree && currentTree.masters == null ? [] : currentTree.masters.map(function (item) {
										return item.userId;
									}),
									rules: [{ required: false, message: '请选择主负责人' }]
								})(_react2.default.createElement(_PersonAddIcon2.default, {
									data: currentTree && currentTree.masters == null ? [] : currentTree.masters,
									updatePerson: this.updateMaster,
									disabled: hidden
								}))
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Tabs,
					{ className: count == 1 ? "hidden" : "item_tabs", activeKey: key, onChange: this.callback },
					_react2.default.createElement(
						TabPane,
						{ tab: '\u57FA\u672C\u8D44\u6599', key: '1' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9879\u76EE\u516C\u53F8', className: 'w' },
										getFieldDecorator('xmgs', {
											initialValue: fields.xmgs || "",
											rules: [{ required: true, message: '请输入项目公司' }]
										})(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9879\u76EE\u9884\u7B97(\u4E07\u5143)', className: 'w' },
										getFieldDecorator('xmys', {
											initialValue: fields.xmys || "",
											rules: [{ required: true, message: '请输入项目预算' }]
										})(_react2.default.createElement(_antd.InputNumber, { placeholder: '\u8BF7\u8F93\u5165', disabled: hidden, className: 'w' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9879\u76EE\u80CC\u666F', className: 'w' },
										getFieldDecorator('xmbj', {
											initialValue: fields.xmbj || "",
											rules: [{ required: true, message: '请输入项目背景' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u53C2\u89C2\u4EBA\u7FA4', className: 'w' },
										getFieldDecorator('cgrq', {
											initialValue: fields.cgrq || "",
											rules: [{ required: true, message: '请输入参观人群' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5C55\u5385\u76EE\u7684', className: 'w' },
										getFieldDecorator('ztmd', {
											initialValue: fields.ztmd || "",
											rules: [{ required: false, message: '请输入展厅目的' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5EFA\u8BBE\u5468\u671F', className: 'w' },
										getFieldDecorator('jszq', {
											initialValue: fields.jszq || "",
											rules: [{ required: false, message: '请输入建设周期' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								)
							)
						)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u6DF1\u5165\u8D44\u6599', key: '2' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u8BBE\u8BA1\u91CD\u70B9(\u4EAE\u70B9)', className: 'w' },
										getFieldDecorator('sjzd', {
											initialValue: fields.sjzd || "",
											rules: [{ required: false, message: '请输入设计重点' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u8272\u5F69\u8981\u6C42', className: 'w' },
										getFieldDecorator('scyq', {
											initialValue: fields.scyq || "",
											rules: [{ required: false, message: '请输入色彩要求' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9020\u578B\u8981\u6C42', className: 'w' },
										getFieldDecorator('zxyq', {
											initialValue: fields.zxyq || "",
											rules: [{ required: false, message: '请输入项目背景' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u706F\u5149\u8981\u6C42', className: 'w' },
										getFieldDecorator('dgyq', {
											initialValue: fields.dgyq || "",
											rules: [{ required: false, message: '请输入参观人群' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u65BD\u5DE5\u6750\u6599\u8981\u6C42', className: 'w' },
										getFieldDecorator('sgclyq', {
											initialValue: fields.sgclyq || "",
											rules: [{ required: false, message: '请输入施工材料要求' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5177\u5907\u7279\u8272\u7684\u7406\u5FF5', className: 'w' },
										getFieldDecorator('jbtsdln', {
											initialValue: fields.jbtsdln || "",
											rules: [{ required: false, message: '请输入建设周期' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u667A\u6167\u5316\u624B\u6BB5\u7684\u5E94\u7528',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 3 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										_react2.default.createElement(_antd.Checkbox.Group, {
											//disabled={hidden}
											className: hidden ? "checkbox_dis" : "",
											onChange: hidden ? null : this.onChange.bind(this, 'zhhsddyy'),
											value: fields.zhhsddyy == null ? [] : fields.zhhsddyy,
											options: plainOptions })
									)
								)
							)
						)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u8F85\u52A9\u8D44\u6599', key: '3' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u516C\u53F8\u5FC3\u4EEA\u6848\u4F8B/\u6848\u4F8B\u53C2\u8003',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										getFieldDecorator('gsxyalalck', {
											initialValue: fields.gsxyalalck || "",
											rules: [{ required: false, message: '请输入' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 },
												offset: 3
											},
											className: 'w' },
										_react2.default.createElement(
											'div',
											{ className: "pr" },
											_react2.default.createElement(_MyUpload2.default, {
												saveAttachment: saveAttachment,
												delNode: delNode,
												fileList: attachments2,
												disabled: hidden,
												pid: attcObj2.id,
												projectId: attcObj2.projectId,
												ossData: ossData
											}),
											_react2.default.createElement(
												'span',
												{ style: {
														position: 'absolute',
														left: '35px',
														top: '-5px',
														fontSize: '12px',
														color: '#999'
													} },
												'\u8BF7\u4E0A\u4F20\u53C2\u8003\u6848\u4F8B\u9644\u4EF6'
											)
										)
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u8865\u5145\u8BF4\u660E',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										getFieldDecorator('bcsm', {
											initialValue: fields.bcsm || "",
											rules: [{ required: false, message: '请输入' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Row,
					{ className: key == "3" || count == 1 ? "hidden" : "" },
					_react2.default.createElement(
						_antd.Col,
						{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
						_react2.default.createElement(
							_antd.Form.Item,
							{ label: '\u573A\u5730CAD\u56FE\u7EB8',
								labelCol: {
									xs: { span: 24 },
									sm: { span: 4 }
								},
								wrapperCol: {
									xs: { span: 24 },
									sm: { span: 20 }
								},
								className: 'w' },
							_react2.default.createElement(_MyUpload2.default, {
								saveAttachment: saveAttachment,
								delNode: delNode,
								fileList: attachments,
								disabled: hidden,
								pid: attcObj.id,
								projectId: attcObj.projectId,
								ossData: ossData
							})
						)
					)
				)
			);
		}
	}]);

	return Appraisal;
}(_react2.default.Component)) || _class) || _class);
exports.default = Appraisal;

/***/ }),

/***/ 2034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 综合办公流程项目评估组件
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _MyUpload = __webpack_require__(1520);

var _MyUpload2 = _interopRequireDefault(_MyUpload);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;
var TextArea = _antd.Input.TextArea;
var Office = (_dec = _antd.Form.create(), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(Office, _React$Component);

	function Office(props) {
		_classCallCheck(this, Office);

		var _this2 = _possibleConstructorReturn(this, (Office.__proto__ || Object.getPrototypeOf(Office)).call(this, props));

		_this2.handleSubmit = function (e) {
			e.preventDefault();
			var _this = _this2;
			var projectId = _this.store.projectId;

			_this.props.form.validateFields(function (err, values) {
				var fields = JSON.parse(JSON.stringify(_this.state.fields));
				var glry = JSON.parse(JSON.stringify(_this.state.glry));
				var lwry = JSON.parse(JSON.stringify(_this.state.lwry));
				if (!err) {
					var currentTree = JSON.parse(JSON.stringify(_this.state.currentTree));
					var glRY = glry.map(function (item) {
						return Object.assign({}, { name: item.name, values: item.values });
					});
					var lwRY = lwry.map(function (item) {
						return Object.assign({}, { name: item.name, values: item.values });
					});
					var params = Object.assign(currentTree, {
						"projectId": projectId,
						"jbzl": {
							"glry": Object.assign([], glRY),
							"lwry": Object.assign([], lwRY),
							"cqwd": fields.cqwd
						},
						"srzl": {
							"zhhsddyy": values.zhhsddyy,
							"bghjdssd": values.bghjdssd,
							"jbtedln": values.jbtedln,
							"jzmgsxym": values.jzmgsxym,
							"jbdfts": values.jbdfts,
							"bimxxhsdyq": values.bimxxhsdyq,
							"gmxqdg": values.gmxqdg
						},
						"fzzl": {
							"dlqk": values.dlqk,
							"rksd": values.rksd,
							"zwhj": values.zwhj,
							"ljjcsj": values['ljjcsj'] == null || values['ljjcsj'] == "" ? 0 : (0, _moment2.default)(values['ljjcsj'].format('YYYY-MM-DD'), 'YYYY-MM-DD').valueOf(),
							"gsxyalalcg": values.gsxyalalcg
						}
					});
					_this.props.saveNodes(params);
					_this.setState({
						hidden: !_this.state.hidden,
						key: '1'
					});
				}
			});
		};

		_this2.updatePerson = function (type, userIds) {
			var fields = JSON.parse(JSON.stringify(_this2.state.fields));
			_this2.setState({
				fields: Object.assign(fields, _defineProperty({}, type, userIds))
			});
		};

		_this2.onChangeVis = function () {
			_this2.setState({
				hidden: !_this2.state.hidden
			});
			_this2.props.updateCount('pgCount', Number(_this2.props.count) + 1);
		};

		_this2.onCanlc = function () {
			_this2.props.form.resetFields();
			_this2.setState({
				hidden: !_this2.state.hidden
			});
		};

		_this2.callback = function (key) {
			_this2.setState({
				key: key
			});
		};

		_this2.checkChange = function (type, name, e) {
			var glry = JSON.parse(JSON.stringify(_this2.state[type]));
			var index = glry.findIndex(function (item) {
				return item.name === name;
			});
			var checked = e.target.checked;

			glry[index].checked = checked;
			if (checked == false) {
				glry[index].values = Object.assign([]);
			}
			_this2.setState(_defineProperty({}, type, Object.assign([], glry)));
		};

		_this2.onNameChange = function (type, name, checkedValues) {
			var glry = JSON.parse(JSON.stringify(_this2.state[type]));
			var index = glry.findIndex(function (item) {
				return item.name === name;
			});
			glry[index].values = Object.assign([], checkedValues);
			_this2.setState(_defineProperty({}, type, Object.assign([], glry)), function () {});
		};

		_this2.onChange = function (type, checkedValues) {
			var fields = JSON.parse(JSON.stringify(_this2.state.fields));
			_this2.setState({
				fields: Object.assign(fields, _defineProperty({}, type, checkedValues))
			});
		};

		_this2.updateMaster = function (userIds) {
			var currentTree = _this2.state.currentTree;
			// 更新当前树

			var currentData = Object.assign({}, currentTree, { masters: userIds });
			// 更新tree
			var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
			_this2.store.treeData = utils.updateTreeData(treeData, "update", currentData);
		};

		_this2.store = _this2.props.store;
		_this2.state = {
			glry: [{ "name": "办公用房", "checked": false, "values": [] }, {
				"name": "宿舍用房",
				"checked": false,
				"values": []
			}, { "name": "宿舍用房(含UB)", "checked": false, "values": [] }, {
				"name": "食堂",
				"checked": false,
				"values": []
			}, { "name": "会议室", "checked": false, "values": [] }, {
				"name": "智慧展厅",
				"checked": false,
				"values": []
			}, { "name": "试验室", "checked": false, "values": [] }, { "name": "辅助用房", "checked": false, "values": [] }],
			lwry: [{ "name": "办公用房", "checked": false, "values": [] }, { "name": "宿舍用房", "checked": false, "values": [] }, {
				"name": "食堂", "checked": false,
				"values": []
			}, { "name": "会议室", "checked": false, "values": [] }, { "name": "展厅", "checked": false, "values": [] }, {
				"name": "淋浴间", "checked": false,
				"values": []
			}, { "name": "洗衣房", "checked": false, "values": [] }, { "name": "辅助用房", "checked": false, "values": [] }],
			fields: {
				"id": "",
				"pid": "",
				"cqwd": [],
				"zhhsddyy": null,
				"bghjdssd": null,
				"jbtedln": null,
				"jzmgsxym": null,
				"jbdfts": null,
				"bimxxhsdyq": null,
				"gmxqdg": null,
				"dlqk": null,
				"rksd": null,
				"zwhj": null,
				"ljjcsj": 0,
				"gsxyalalcg": null
			},
			hidden: true, // 面板折叠展开
			key: "1",
			currentTree: {}
		};
		return _this2;
	}

	_createClass(Office, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var itemObj = nextProps.itemObj;

			if (Object.keys(itemObj).length > 0) {
				var projectinfo = itemObj.children.filter(function (item) {
					return item.treeType == "normal";
				})[0]; // 字段
				this.setState({
					currentTree: Object.assign({}, projectinfo),
					fields: {
						"id": projectinfo.id,
						"pid": projectinfo.pid,
						"cqwd": projectinfo.jbzl["cqwd"],
						"zhhsddyy": projectinfo.srzl["zhhsddyy"],
						"bghjdssd": projectinfo.srzl["bghjdssd"],
						"jbtedln": projectinfo.srzl["jbtedln"],
						"jzmgsxym": projectinfo.srzl["jzmgsxym"],
						"jbdfts": projectinfo.srzl["jbdfts"],
						"bimxxhsdyq": projectinfo.srzl["bimxxhsdyq"],
						"gmxqdg": projectinfo.srzl["gmxqdg"],
						"dlqk": projectinfo.fzzl["dlqk"],
						"rksd": projectinfo.fzzl["rksd"],
						"zwhj": projectinfo.fzzl["zwhj"],
						"ljjcsj": projectinfo.fzzl["ljjcsj"],
						"gsxyalalcg": projectinfo.fzzl["gsxyalalcg"]
					},
					glry: projectinfo.jbzl["glry"].map(function (item) {
						return Object.assign({}, {
							"name": item.name,
							"values": item.values == null ? [] : item.values,
							"checked": item.values != null && Array.isArray(item.values) && item.values.length > 0 ? true : false
						});
					}),
					lwry: projectinfo.jbzl["lwry"].map(function (item) {
						return Object.assign({}, {
							"name": item.name,
							"values": item.values == null ? [] : item.values,
							"checked": item.values != null && Array.isArray(item.values) && item.values.length > 0 ? true : false
						});
					})
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    itemObj = _props.itemObj,
			    disabled = _props.disabled;

			if (Object.keys(itemObj).length > 0) {
				var projectinfo = itemObj.children.filter(function (item) {
					return item.treeType == "normal";
				})[0]; // 字段
				//console.log(projectinfo, 'projectinfo')
				this.setState({
					currentTree: Object.assign({}, projectinfo),
					fields: {
						"id": projectinfo.id,
						"pid": projectinfo.pid,
						"cqwd": projectinfo.jbzl["cqwd"],
						"zhhsddyy": projectinfo.srzl["zhhsddyy"],
						"bghjdssd": projectinfo.srzl["bghjdssd"],
						"jbtedln": projectinfo.srzl["jbtedln"],
						"jzmgsxym": projectinfo.srzl["jzmgsxym"],
						"jbdfts": projectinfo.srzl["jbdfts"],
						"bimxxhsdyq": projectinfo.srzl["bimxxhsdyq"],
						"gmxqdg": projectinfo.srzl["gmxqdg"],
						"dlqk": projectinfo.fzzl["dlqk"],
						"rksd": projectinfo.fzzl["rksd"],
						"zwhj": projectinfo.fzzl["zwhj"],
						"ljjcsj": projectinfo.fzzl["ljjcsj"],
						"gsxyalalcg": projectinfo.fzzl["gsxyalalcg"]
					},
					hidden: disabled,
					glry: projectinfo.jbzl["glry"].map(function (item) {
						return Object.assign({}, {
							"name": item.name,
							"values": item.values == null ? [] : item.values,
							"checked": false
						});
					}),
					lwry: projectinfo.jbzl["lwry"].map(function (item) {
						return Object.assign({}, {
							"name": item.name,
							"values": item.values == null ? [] : item.values,
							"checked": false
						});
					})
				});
			}
			this.props.onOfficeRef(this);
		}

		// 保存


		// 人员选择更新


		// 编辑、创建


		// 取消


		// 人员选择更新

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    fields = _state.fields,
			    hidden = _state.hidden,
			    key = _state.key,
			    glry = _state.glry,
			    lwry = _state.lwry,
			    currentTree = _state.currentTree;
			var state = this.store.state;
			var _props2 = this.props,
			    count = _props2.count,
			    isShow = _props2.isShow,
			    ossData = _props2.ossData,
			    saveAttachment = _props2.saveAttachment,
			    delNode = _props2.delNode,
			    itemObj = _props2.itemObj;
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 7 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 16 }
				}
			};
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
			var plainOptions = ['箱房', '板房', '型钢', '其他'];
			var Coptions = ['大门', '围墙', '其他'];
			var attcObj = currentTree.children != null && currentTree.children.filter(function (item) {
				return item.treeType === 'attc' && item.name == "现场施工规划图";
			})[0]; // 现场施工规划图
			var attcObj2 = currentTree.children != null && currentTree.children.filter(function (item) {
				return item.treeType === 'attc' && item.name == "房屋布置图纸";
			})[0]; // 房屋布置图纸
			var attcObj3 = currentTree.children != null && currentTree.children.filter(function (item) {
				return item.treeType === 'attc' && item.name == "公司心仪案例/案例参考";
			})[0]; // 案例附件对象
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
			var attachments2 = attcObj2.children != null ? attcObj2.children.map(function (vitem) {
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
			var attachments3 = attcObj3.children != null ? attcObj3.children.map(function (vitem) {
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
				_antd.Card,
				{ bordered: true, className: 'pr mt20', style: { width: '100%' } },
				_react2.default.createElement(
					'h3',
					{ id: itemObj.id, className: 'kanban_title mb20' },
					'\u9879\u76EE\u8BC4\u4F30'
				),
				_react2.default.createElement(
					'span',
					{ className: 'worktile_progress_add' },
					hidden ? _react2.default.createElement(
						_antd.Button,
						{ className: state == 2 ? "hidden" : "", type: 'link',
							disabled: isShow,
							onClick: this.onChangeVis },
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
					_antd.Form,
					_extends({ className: count == 1 ? "hidden" : "clearfix", layout: 'inline' }, formItemLayout2),
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
									initialValue: currentTree && currentTree.masters == null ? [] : currentTree.masters.map(function (item) {
										return item.userId;
									}),
									rules: [{ required: false, message: '请选择主负责人' }]
								})(_react2.default.createElement(_PersonAddIcon2.default, {
									data: currentTree && currentTree.masters == null ? [] : currentTree.masters,
									updatePerson: this.updateMaster,
									disabled: hidden
								}))
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Tabs,
					{ className: count == 1 ? "hidden" : "item_tabs", activeKey: key, onChange: this.callback },
					_react2.default.createElement(
						TabPane,
						{ tab: '\u57FA\u672C\u8D44\u6599', key: '1' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(_antd.Form.Item, {
										labelCol: {
											xs: { span: 24 },
											sm: { span: 6 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 12 }
										},
										labelAlign: "left",
										label: '\u8BBE\u8BA1\u8303\u56F4\u53CA\u7BB1\u5F0F\u623F\u4F7F\u7528\u8303\u56F4', className: 'w' })
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u7BA1\u7406\u4EBA\u5458',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										_react2.default.createElement(
											'div',
											null,
											glry.length > 0 && glry.map(function (item, index) {
												return _react2.default.createElement(
													'div',
													{ key: 'glry' + index, style: { paddingLeft: '10px' } },
													_react2.default.createElement(
														_antd.Checkbox,
														{
															className: hidden ? "checkbox_dis lwry_checkbox" : "lwry_checkbox",
															style: { width: '118px' },
															checked: item.checked
															//disabled={hidden}
															, onChange: hidden ? null : _this3.checkChange.bind(_this3, 'glry', item.name) },
														item.name
													),
													_react2.default.createElement(_antd.Checkbox.Group, {
														className: item.checked ? hidden ? "checkbox_dis" : "" : "hidden",
														value: item.values,
														onChange: hidden ? null : _this3.onNameChange.bind(_this3, 'glry', item.name)
														//disabled={hidden}
														, options: plainOptions })
												);
											})
										)
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u52B3\u52A1\u4EBA\u5458',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										lwry.length > 0 && lwry.map(function (item, index) {
											return _react2.default.createElement(
												'div',
												{ key: 'lwry' + index, style: { paddingLeft: '10px' } },
												_react2.default.createElement(
													_antd.Checkbox,
													{
														className: hidden ? "checkbox_dis lwry_checkbox" : "lwry_checkbox",
														style: { width: '95px' },
														checked: item.checked
														//disabled={hidden}
														, onChange: hidden ? null : _this3.checkChange.bind(_this3, 'lwry', item.name) },
													item.name
												),
												_react2.default.createElement(_antd.Checkbox.Group, {
													className: item.checked ? hidden ? "checkbox_dis" : "" : "hidden",
													value: item.values,
													onChange: hidden ? null : _this3.onNameChange.bind(_this3, 'lwry', item.name)
													//disabled={hidden}
													, options: plainOptions })
											);
										})
									)
								)
							),
							_react2.default.createElement(
								_antd.Row,
								null,
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5382\u533A\u56F4\u6321',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										_react2.default.createElement(_antd.Checkbox.Group, {
											className: hidden ? "checkbox_dis" : "",
											onChange: hidden ? null : this.onChange.bind(this, 'cqwd')
											//disabled={hidden}
											, value: fields.cqwd,
											options: Coptions })
									)
								)
							)
						)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u6DF1\u5165\u8D44\u6599', key: '2' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u667A\u6167\u5316\u624B\u6BB5\u7684\u5E94\u7528', className: 'w' },
										getFieldDecorator('zhhsddyy', {
											initialValue: fields.zhhsddyy || "",
											rules: [{ required: false, message: '请输入设计重点' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u529E\u516C\u73AF\u5883\u7684\u8212\u9002\u5EA6', className: 'w' },
										getFieldDecorator('bghjdssd', {
											initialValue: fields.bghjdssd || "",
											rules: [{ required: false, message: '请输入色彩要求' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5177\u5907\u7279\u8272\u7684\u7406\u5FF5', className: 'w' },
										getFieldDecorator('jbtedln', {
											initialValue: fields.jbtedln || "",
											rules: [{ required: false, message: '请输入项目背景' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5EFA\u7B51\u7F8E\u89C2\u8D4F\u5FC3\u60A6\u76EE', className: 'w' },
										getFieldDecorator('jzmgsxym', {
											initialValue: fields.jzmgsxym || "",
											rules: [{ required: false, message: '请输入参观人群' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5177\u5907\u5730\u65B9\u7279\u8272', className: 'w' },
										getFieldDecorator('jbdfts', {
											initialValue: fields.jbdfts || "",
											rules: [{ required: false, message: '请输入施工材料要求' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: 'BIM\u4FE1\u606F\u5316\u624B\u6BB5\u8981\u6C42', className: 'w' },
										getFieldDecorator('bimxxhsdyq', {
											initialValue: fields.bimxxhsdyq || "",
											rules: [{ required: false, message: '请输入建设周期' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u89C2\u6469\u9700\u6C42\u5EA6\u9AD8', className: 'w' },
										getFieldDecorator('gmxqdg', {
											initialValue: fields.gmxqdg || "",
											rules: [{ required: false, message: '请输入建设周期' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								)
							)
						)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: '\u8F85\u52A9\u8D44\u6599', key: '3' },
						_react2.default.createElement(
							_antd.Form,
							_extends({ layout: 'inline' }, formItemLayout),
							_react2.default.createElement(
								_antd.Row,
								{ gutter: [{ xs: 24, sm: 24, md: 18, lg: 12, xl: 8 }, 15], style: { margin: "0" } },
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(_antd.Form.Item, {
										labelCol: {
											xs: { span: 24 },
											sm: { span: 3 }
										},
										wrapperCol: {
											xs: { span: 24 },
											sm: { span: 20 }
										},
										label: '\u9879\u76EE\u5468\u8FB9\u60C5\u51B5\u8BF4\u660E', className: 'w' })
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u9053\u8DEF\u60C5\u51B5', className: 'w' },
										getFieldDecorator('dlqk', {
											initialValue: fields.dlqk || "",
											rules: [{ required: false, message: '请输入' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5165\u53E3\u8BBE\u5B9A', className: 'w' },
										getFieldDecorator('rksd', {
											initialValue: fields.rksd || "",
											rules: [{ required: false, message: '请输入' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u5468\u56F4\u73AF\u5883', className: 'w' },
										getFieldDecorator('zwhj', {
											initialValue: fields.zwhj || "",
											rules: [{ required: false, message: '请输入' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden, placeholder: '\u8BF7\u8F93\u5165' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u73B0\u573A\u65BD\u5DE5\u89C4\u5212\u56FE',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										_react2.default.createElement(_MyUpload2.default, {
											saveAttachment: saveAttachment,
											delNode: delNode,
											fileList: attachments,
											disabled: hidden,
											pid: attcObj.id,
											projectId: attcObj.projectId,
											ossData: ossData
										})
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u623F\u5C4B\u5E03\u7F6E\u56FE\u7EB8',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 }
											},
											className: 'w' },
										_react2.default.createElement(_MyUpload2.default, {
											saveAttachment: saveAttachment,
											delNode: delNode,
											fileList: attachments2,
											disabled: hidden,
											pid: attcObj2.id,
											projectId: attcObj2.projectId,
											ossData: ossData
										})
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u4E34\u5EFA\u8FDB\u573A\u65F6\u95F4',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 16 }
											},
											className: 'w' },
										getFieldDecorator('ljjcsj', {
											initialValue: fields.ljjcsj == null || fields.ljjcsj == 0 ? "" : (0, _moment2.default)((0, _moment2.default)(fields.ljjcsj).format('YYYY-MM-DD'), "YYYY-MM-DD"),
											rules: [{ required: false, message: '请上传场地CAD图纸' }]
										})(_react2.default.createElement(_antd.DatePicker, {
											placeholder: '\u8BF7\u9009\u62E9',
											format: 'YYYY-MM-DD',
											disabled: hidden
										}))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '\u516C\u53F8\u5FC3\u4EEA\u6848\u4F8B/\u6848\u4F8B\u53C2\u8003',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 4 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 16 }
											},
											className: 'w' },
										getFieldDecorator('gsxyalalcg', {
											initialValue: fields.gsxyalalcg || "",
											rules: [{ required: false, message: '请上传场地CAD图纸' }]
										})(_react2.default.createElement(TextArea, { rows: 4, disabled: hidden,
											placeholder: '\u8BF7\u8F93\u5165\u53C2\u8003\u70B9\uFF1A\u5982\u5EFA\u7B51\uFF08\u8BBE\u8BA1\u98CE\u683C\uFF09/\u8BBE\u8BA1\u7406\u5FF5/\u5E03\u5C40\u5F62\u5F0F/\u6700\u7EC8\u6210\u679C\xB7\xB7\xB7\xB7\xB7\xB7' }))
									)
								),
								_react2.default.createElement(
									_antd.Col,
									{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
									_react2.default.createElement(
										_antd.Form.Item,
										{ label: '',
											labelCol: {
												xs: { span: 24 },
												sm: { span: 3 }
											},
											wrapperCol: {
												xs: { span: 24 },
												sm: { span: 20 },
												offset: 2
											},
											className: 'w' },
										_react2.default.createElement(
											'div',
											{ className: "pr" },
											_react2.default.createElement(_MyUpload2.default, {
												saveAttachment: saveAttachment,
												delNode: delNode,
												fileList: attachments3,
												disabled: hidden,
												pid: attcObj3.id,
												projectId: attcObj3.projectId,
												ossData: ossData
											}),
											_react2.default.createElement(
												'span',
												{ style: {
														position: 'absolute',
														left: '35px',
														top: '-5px',
														fontSize: '12px',
														color: '#999'
													} },
												'\u8BF7\u4E0A\u4F20\u53C2\u8003\u6848\u4F8B\u9644\u4EF6'
											)
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Office;
}(_react2.default.Component)) || _class) || _class);
exports.default = Office;

/***/ }),

/***/ 2036:
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

var _mobxReact = __webpack_require__(22);

var _antd = __webpack_require__(17);

var _StepInfo = __webpack_require__(2038);

var _StepInfo2 = _interopRequireDefault(_StepInfo);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

var _PersonAddIcon = __webpack_require__(92);

var _PersonAddIcon2 = _interopRequireDefault(_PersonAddIcon);

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
      _this2.store.proDesign.masters = Object.assign([], userIds);
    };

    _this2.updatePerson = function (userIds) {
      var proDesignData = _this2.state.proDesignData;
      // 更新当前树

      var currentData = Object.assign({}, proDesignData, { masters: userIds });
      // 更新tree
      var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
      _this2.store.treeData = utils.updateTreeData(treeData, "update", currentData);
      _this2.store.proDesign.masters = Object.assign([], userIds);
    };

    _this2.onChange = function (current) {
      _this2.setState({ current: current });
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
          _this2.store.isDesignEdit = true;
        }
      });
    };

    _this2.onChangeVis = function () {
      _this2.store.isDesignEdit = false;
      _this2.setState({
        defaultTree: Object.assign({}, _this2.state.proDesignData)
      });
      _this2.props.updateCount('psCount', Number(_this2.props.count) + 1);
    };

    _this2.onCanlc = function () {
      _this2.props.form.resetFields();
      _this2.store.isDesignEdit = true;
      // 清空数据
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
          var oldStageId = JSON.parse(JSON.stringify(_this2.store.currentStageId));
          _this.store.oldStageId = oldStageId;
          _this.store.currentStageId = res.id; // new
          // 更新tree
          var treeData = JSON.parse(JSON.stringify(_this2.store.treeData));
          _this2.store.treeData = utils.updateTreeData(treeData, "changeStage", res);
          // 初始化获取步骤进度信息
          _this2.store.getStageTree();
          _this.store.getStageList();
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
                _this.store.isDesignEdit = true;
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
      defaultTree: {}, // 默认数据
      deCount: 0 // 记录保存状态
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
        if (Object.keys(nextProps.proDesign).length !== 0 && typeof nextProps.proDesign.children !== "undefined") {
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
        if (Object.keys(this.props.proDesign).length !== 0 && typeof this.props.proDesign.children !== "undefined") {
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


    // 保存


    // 编辑


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
          deCount = _this$state.deCount,
          stepObj1 = _this$state.stepObj1,
          stepObj2 = _this$state.stepObj2,
          stepObj3 = _this$state.stepObj3,
          stepObj4 = _this$state.stepObj4,
          stepObj5 = _this$state.stepObj5;

      var _props = this.props,
          proDesign = _props.proDesign,
          form = _props.form,
          store = _props.store,
          isShow = _props.isShow,
          count = _props.count,
          withoutStoreProps = _objectWithoutProperties(_props, ['proDesign', 'form', 'store', 'isShow', 'count']);

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
          isDesignEdit = _this$store.isDesignEdit,
          state = _this$store.state,
          stageList = _this$store.stageList,
          currentStageId = _this$store.currentStageId;

      var menu = _react2.default.createElement(
        _antd.Menu,
        { className: isDesignEdit ? "hidden" : "tc work_menu", style: { width: '150px' } },
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
            isDesignEdit ? null : _react2.default.createElement(
              _antd.Popconfirm,
              { title: '\u786E\u5B9A\u8981\u5220\u9664\u5417?', onConfirm: function onConfirm() {
                  return _this3.delStage(item.id);
                } },
              _react2.default.createElement(_antd.Icon, { type: 'close', className: item.indexs >= 2 ? "work_menu_close" : "hidden" })
            )
          );
        }),
        isDesignEdit ? null : _react2.default.createElement(_antd.Menu.Divider, null),
        _react2.default.createElement(
          _antd.Menu.Item,
          { className: isDesignEdit ? "hidden" : "" },
          _react2.default.createElement(_antd.Icon, { onClick: this.addStage, style: { fontSize: '20px' }, type: 'plus-circle', title: '\u65B0\u589E\u65B9\u6848\u8BBE\u8BA1' })
        )
      );
      return _react2.default.createElement(
        _antd.Card,
        { bordered: true, className: 'mt20', style: { width: '100%' } },
        _react2.default.createElement(
          'h3',
          { id: proDesign.id, className: 'kanban_title mb20' },
          _react2.default.createElement(
            _antd.Dropdown,
            { overlay: menu },
            _react2.default.createElement(
              'span',
              null,
              '\u65B9\u6848\u8BBE\u8BA1',
              proDesign.indexs >= 2 ? proDesign.indexs : null,
              _react2.default.createElement(_antd.Icon, { className: isDesignEdit ? "hidden" : "ml5 pointer", type: 'caret-down' })
            )
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'worktile_progress_add' },
          isDesignEdit ? _react2.default.createElement(
            _antd.Button,
            { type: 'link',
              className: state == 2 ? "hidden" : "",
              disabled: isShow,
              onClick: this.onChangeVis },
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
          _extends({ className: count == 1 ? "hidden" : "clearfix", layout: 'inline' }, formItemLayout),
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
                  disabled: isDesignEdit
                }))
              )
            )
          )
        ),
        _react2.default.createElement(
          _antd.Row,
          { className: count == 1 ? "hidden" : "mt30 mb30" },
          _react2.default.createElement(
            _antd.Col,
            { span: 24 },
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step1',
              store: this.store,
              data: stepObj1,
              stepName: '1. 初步设计'
            }, withoutStoreProps, {
              disabled: isDesignEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.ossData,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step2',
              store: this.store,
              data: stepObj2,
              stepName: '2. 汇报确定'
            }, withoutStoreProps, {
              disabled: isDesignEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.ossData,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step3',
              store: this.store,
              data: stepObj3,
              stepName: '关联任务'
            }, withoutStoreProps, {
              disabled: isDesignEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.ossData,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step4',
              store: this.store,
              data: stepObj4,
              stepName: '3. 深化设计'
            }, withoutStoreProps, {
              disabled: isDesignEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.ossData,
              updatedeCount: this.updatedeCount
            })),
            _react2.default.createElement(_StepInfo2.default, _extends({
              key: 'step5',
              store: this.store,
              data: stepObj5,
              stepName: '4. 图纸确认'
            }, withoutStoreProps, {
              disabled: isDesignEdit,
              saveNodes: this.props.saveNodes,
              saveAttachment: this.props.saveAttachment,
              delNode: this.props.delNode,
              oss: this.props.ossData,
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

/***/ 2037:
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

/***/ 2038:
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

var _ProposalAttc = __webpack_require__(2037);

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
            var isEndime = currentDataSource.filter(function (item) {
                return item.beginTime != "" && item.beginTime != null && (item.endTime == "" || item.endTime == null);
            });
            if (isEndime.length > 0) {
                // true
                _antd.message.warn("截至日期是必填项");
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
            _this2.setState({ data: Object.assign(data, { "children": stepChildren }) });
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
                isEdit = _this$state.isEdit;
            var _this$props = _this.props,
                stepName = _this$props.stepName,
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

/***/ })

});
//# sourceMappingURL=10-afa7d4b4bae6ff2924e9.1629092961041.js.map