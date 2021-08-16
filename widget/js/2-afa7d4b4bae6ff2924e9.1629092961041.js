webpackJsonp([2],{

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

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44; /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 项目看板store
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _mobx = __webpack_require__(12);

var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _api = __webpack_require__(30);

var _bpm = __webpack_require__(41);

var _bpm2 = _interopRequireDefault(_bpm);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _events = __webpack_require__(33);

var _events2 = _interopRequireDefault(_events);

var _authorization = __webpack_require__(97);

var _authorization2 = _interopRequireDefault(_authorization);

var _okr = __webpack_require__(1578);

var _okr2 = _interopRequireDefault(_okr);

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

var BpmStore = (_class = function () {
	function BpmStore() {
		_classCallCheck(this, BpmStore);

		_initDefineProp(this, 'maxHeight', _descriptor, this);

		_initDefineProp(this, 'projectBoardList', _descriptor2, this);

		_initDefineProp(this, 'projectBoardParams', _descriptor3, this);

		_initDefineProp(this, 'allProjectList', _descriptor4, this);

		_initDefineProp(this, 'allProjectParams', _descriptor5, this);

		_initDefineProp(this, 'allProjectTotal', _descriptor6, this);

		_initDefineProp(this, 'myTaskRunningNum', _descriptor7, this);

		_initDefineProp(this, 'dealyWarnningList', _descriptor8, this);

		_initDefineProp(this, 'productProportion', _descriptor9, this);

		_initDefineProp(this, 'topContractAmount', _descriptor10, this);

		_initDefineProp(this, 'currentTaskList', _descriptor11, this);

		_initDefineProp(this, 'currentTaskParams', _descriptor12, this);

		_initDefineProp(this, 'dealyWarnningParams', _descriptor13, this);

		_initDefineProp(this, 'hasMore', _descriptor14, this);

		_initDefineProp(this, 'currentTaskTotal', _descriptor15, this);

		_initDefineProp(this, 'deliverRate', _descriptor16, this);

		_initDefineProp(this, 'moneyBackRate', _descriptor17, this);

		_initDefineProp(this, 'projectStage', _descriptor18, this);

		_initDefineProp(this, 'projectStatus', _descriptor19, this);

		_initDefineProp(this, 'productTyleList', _descriptor20, this);

		_initDefineProp(this, 'masterList', _descriptor21, this);

		_initDefineProp(this, 'masterIds', _descriptor22, this);

		_initDefineProp(this, 'projectBoardListDone', _descriptor23, this);

		_initDefineProp(this, 'products', _descriptor24, this);

		_initDefineProp(this, 'personList', _descriptor25, this);

		_initDefineProp(this, 'projectList', _descriptor26, this);

		_initDefineProp(this, 'yearMonth', _descriptor27, this);

		_initDefineProp(this, 'personMonthTask', _descriptor28, this);

		_initDefineProp(this, 'projectStages', _descriptor29, this);

		_initDefineProp(this, 'personParams', _descriptor30, this);

		_initDefineProp(this, 'personResources', _descriptor31, this);

		_initDefineProp(this, 'state', _descriptor32, this);

		_initDefineProp(this, 'ossData', _descriptor33, this);

		_initDefineProp(this, 'weeksData', _descriptor34, this);

		_initDefineProp(this, 'activeweeks', _descriptor35, this);

		_initDefineProp(this, 'userId', _descriptor36, this);

		_initDefineProp(this, 'userName', _descriptor37, this);

		_initDefineProp(this, 'weekData', _descriptor38, this);

		_initDefineProp(this, 'monthData', _descriptor39, this);

		_initDefineProp(this, 'seasonData', _descriptor40, this);

		_initDefineProp(this, 'yearData', _descriptor41, this);

		_initDefineProp(this, 'defaultWeeksData', _descriptor42, this);

		_initDefineProp(this, 'okrAtts', _descriptor43, this);

		_initDefineProp(this, 'okrComments', _descriptor44, this);
	} // 项目看板列表(未完成)
	// 全部项目明细列表 state 完成100，关闭200 阶段1-7
	//进度延迟预警列表

	//产品占比
	//项目订单排名
	//获取当前任务列表

	//@observable unTaskTotal = 0;  // 未完成

	//交付完成率
	//回款完成率

	_createClass(BpmStore, [{
		key: 'getProjectBoardList',


		// 项目看板列表(未完成)查询
		value: function getProjectBoardList() {
			var _this = this;

			return (0, _api.requestPost)('getProjectBoardList', _config2.default.bpm.getProjectBoardList, _bpm2.default.bpm.getProjectBoardList, this.projectBoardParams).then(function (res) {
				_this.projectBoardList = Object.assign([], res);
				_this.projectBoardListDone = true;
			});
		}

		// 全部项目明细列表查询

	}, {
		key: 'getAllProjectList',
		value: function getAllProjectList() {
			var _this2 = this;

			return (0, _api.requestPost)('getAllProjectList', _config2.default.bpm.getAllProjectList, _bpm2.default.bpm.getAllProjectList, this.allProjectParams).then(function (res) {
				_this2.allProjectList = Object.assign([], typeof res.body !== "undefined" ? res.body.map(function (item, index) {
					return item;
				}) : []);
				_this2.allProjectParams.pageIndex = res.pageIndex;
				_this2.allProjectParams.pageSize = res.pageSize;
				_this2.allProjectTotal = res.totalCount;
			});
		}

		// 获取产品占比

	}, {
		key: 'getProductProportion',
		value: function getProductProportion() {
			var _this3 = this;

			return (0, _api.requestPost)('getProductProportion', _config2.default.bpm.getProductProportion, _bpm2.default.bpm.getProductProportion).then(function (res) {
				_this3.productProportion = Object.assign([], res);
			});
		}

		// 获取项目订单排名

	}, {
		key: 'getTopContractAmountList',
		value: function getTopContractAmountList() {
			var _this4 = this;

			return (0, _api.requestPost)('getTopContractAmountList', _config2.default.bpm.getTopContractAmountList, _bpm2.default.bpm.getTopContractAmountList).then(function (res) {
				_this4.topContractAmount = Object.assign([], res);
			});
		}

		// 获取当前任务（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)

	}, {
		key: 'getCurrentTaskList',
		value: function getCurrentTaskList() {
			var _this5 = this;

			return (0, _api.requestPost)('getCurrentTaskList', _config2.default.bpm.getCurrentTaskList, _bpm2.default.bpm.getCurrentTaskList, this.currentTaskParams).then(function (res) {
				_this5.currentTaskList = Object.assign([], res.body);
				if (_this5.currentTaskParams.state == 1) {
					//进度延迟预警
					_this5.dealyWarnningList = Object.assign([], res.body);
				}

				// if(this.currentTaskParams.state==2) {
				// 	emitter.emit("getMytaskNum", res.totalCount);
				// }

				_this5.currentTaskParams.pageIndex = res.pageIndex;
				_this5.currentTaskParams.pageSize = res.pageSize;
				_this5.currentTaskTotal = res.totalCount;
			});
		}

		// 获取当前任务（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)

	}, {
		key: 'getWarnningList',
		value: function getWarnningList() {
			var _this6 = this;

			return (0, _api.requestPost)('getCurrentTaskList', _config2.default.bpm.getCurrentTaskList, _bpm2.default.bpm.getCurrentTaskList, this.dealyWarnningParams).then(function (res) {
				if (res && res['body'].length > 0) {
					var tempData = _this6.dealyWarnningList;
					_this6.dealyWarnningList = tempData.concat(res['body']);
					_this6.dealyWarnningParams.pageIndex = _this6.dealyWarnningParams.pageIndex + 1;
				} else {
					_this6.hasMore = false;
				}
			});
		}

		// 获取进行中/已完成总数

	}, {
		key: 'getListData',
		value: function getListData(param) {
			return (0, _api.requestPost)('getCurrentTaskList', _config2.default.bpm.getCurrentTaskList, _bpm2.default.bpm.getCurrentTaskList, param).then(function (res) {
				return res;
			});
		}

		// 获取交付完成率

	}, {
		key: 'getDeliverRate',
		value: function getDeliverRate() {
			var _this7 = this;

			return (0, _api.requestPost)('getDeliverRate', _config2.default.bpm.getDeliverRate, _bpm2.default.bpm.getDeliverRate).then(function (res) {
				_this7.deliverRate = res;
			});
		}

		// 获取回款完成率

	}, {
		key: 'getMoneyBackRate',
		value: function getMoneyBackRate() {
			var _this8 = this;

			return (0, _api.requestPost)('getMoneyBackRate', _config2.default.bpm.getMoneyBackRate, _bpm2.default.bpm.getMoneyBackRate).then(function (res) {
				_this8.moneyBackRate = res;
			});
		}

		// 获取我的任务数

	}, {
		key: 'getMyTaskCount',
		value: function getMyTaskCount() {
			return (0, _api.requestPost)('getMyTaskCount', _config2.default.bpm.getMyTaskCount, _bpm2.default.bpm.getMyTaskCount).then(function (res) {
				_events2.default.emit("getMytaskNum", res);
			});
		}
	}, {
		key: 'getProductTypeList',

		// 获取产品类型
		value: function getProductTypeList() {
			var _this9 = this;

			return (0, _api.requestPost)('getProductTypeList', _config2.default.bpm.getProductTypeList, _bpm2.default.bpm.getProductTypeList).then(function (res) {
				_this9.productTyleList = Object.assign([], res.map(function (item) {
					return { text: item.typeName, value: item.typeName };
				}));
				_this9.products = Object.assign([], res);
			});
		}

		// 获取负责人列表

	}, {
		key: 'getMasterList',
		value: function getMasterList() {
			var _this10 = this;

			return (0, _api.requestPost)('getMasterList', _config2.default.bpm.getMasterList, _bpm2.default.bpm.getMasterList).then(function (res) {
				_this10.masterList = Object.assign([], res.map(function (item) {
					return { text: item.userName, value: item.userName };
				}));
				_this10.masterIds = Object.assign([], res.map(function (item) {
					return Object.assign({}, { id: item.userId, typeName: item.userName });
				}));
			});
		}
	}, {
		key: 'getUserInfoListByRoleCode',
		// 人员
		// 获取人员数据
		value: function getUserInfoListByRoleCode() {
			var _this11 = this;

			return (0, _api.requestPost)('getUserInfoListByRoleCode', _config2.default.authorization.getUserInfoListByRoleCode, _authorization2.default.authorization.getUserInfoListByRoleCode, {
				appId: "bocspace",
				code: "bocspace.group",
				pageIndex: 1, // 暂时处理
				pageSize: 10000 // 暂时这样处理
			}).then(function (res) {
				_this11.personList = Object.assign([], res.body);
			});
		}
	}, {
		key: 'getCalendarProjectList',
		//日历项目
		// 日历项目列表
		value: function getCalendarProjectList() {
			var _this12 = this;

			return (0, _api.requestPost)('getCalendarProjectList', _config2.default.bpm.getCalendarProjectList, _bpm2.default.bpm.getCalendarProjectList, {}).then(function (res) {
				_this12.projectList = Object.assign([], res);
			});
		} // 当前月份

	}, {
		key: 'getPersonMonthTaskState',

		// 人员列表
		value: function getPersonMonthTaskState(param) {
			var _this13 = this;

			return (0, _api.requestPost)('getPersonMonthTaskState', _config2.default.bpm.getPersonMonthTaskState, _bpm2.default.bpm.getPersonMonthTaskState, {
				yearMonth: this.yearMonth,
				userId: param
			}).then(function (res) {
				_this13.personMonthTask = Object.assign([], res);
			});
		}
	}, {
		key: 'getProjectStagesByIds',
		// 项目信息
		// 获取项目全部状态信息通过ids
		value: function getProjectStagesByIds(param) {
			var _this14 = this;

			return (0, _api.requestPost)('getProjectStagesByIds', _config2.default.bpm.getProjectStagesByIds, _bpm2.default.bpm.getProjectStagesByIds, {
				yearMonth: this.yearMonth,
				projectIds: param
			}).then(function (res) {
				_this14.projectStages = Object.assign([], res.data == null ? [] : res.data);
			});
		}

		// 获取钉钉的部门

	}, {
		key: 'getDepartment',
		value: function getDepartment() {
			return (0, _api.requestPost)('getDepartment', _config2.default.authorization.getDepartment, _authorization2.default.authorization.getDepartment, {
				appid: 'bocspace',
				pid: '1'
			});
		}

		// 获取钉钉部门的用户列表

	}, {
		key: 'getUserInfoListByDingtalk',
		value: function getUserInfoListByDingtalk(param) {
			return (0, _api.requestPost)('getUserInfoListByDingtalk', _config2.default.authorization.getUserInfoListByDingtalk, _authorization2.default.authorization.getUserInfoListByDingtalk, {
				appid: 'bocspace',
				pageIndex: 1,
				pageSize: 100,
				depId: param
			});
		}
		// 获取全部部门与人员

	}, {
		key: 'getDepartmentAndUsers',
		value: function getDepartmentAndUsers(name) {
			return (0, _api.requestPost)('getDepartmentAndUsers', _config2.default.authorization.getDepartmentAndUsers, _authorization2.default.authorization.getDepartmentAndUsers, {
				appid: 'bocspace',
				name: name
			});
		}
	}, {
		key: 'getPersonScheduleResources',
		// 日程数据
		// 人员日程排期
		value: function getPersonScheduleResources() {
			var _this15 = this;

			return (0, _api.requestPost)('getPersonScheduleResources', _config2.default.bpm.getPersonScheduleResources, _bpm2.default.bpm.getPersonScheduleResources, Object.assign({}, this.personParams)).then(function (res) {
				_this15.personResources = Object.assign([], res.data == null ? [] : res.data);
			});
		}
	}, {
		key: 'getAllStages',

		// 获取产品类型
		value: function getAllStages() {
			var _this16 = this;

			return (0, _api.requestPost)('getAllStages', _config2.default.bpm.getAllStages, _bpm2.default.bpm.getAllStages).then(function (res) {
				if (res) {
					_this16.state = Object.assign([], res.map(function (item) {
						return Object.assign({}, {
							id: item.id,
							typeName: item.stageName
						});
					}));
				}
			});
		}
	}, {
		key: 'getSts',
		// 阿里云上传参数

		// 获取大文件上传sts
		value: function getSts() {
			var _this17 = this;

			return (0, _api.requestPost)('getSts', _config2.default.bpm.getSts, _bpm2.default.bpm.getSts, {}).then(function (res) {
				var str = typeof res == "string" ? JSON.parse(res) : res;
				if (str) {
					_this17.ossData = Object.assign({}, str);
				}
			});
		} // 当年所有的周数据
		// 当前周
		// 人员id
		// 人员name
		// 当前周数据
		// 当前月数据
		// 当前季数据
		// 当前年数据
		// 当前周数据默认
		// okr附件

	}, {
		key: 'getWeeks',
		// okr评论

		// 返回查询年的周数据
		value: function getWeeks(param) {
			return (0, _api.requestPost)('getWeeks', _config2.default.okr.getWeeks, _okr2.default.okr.getWeeks, {
				year: param
			});
		}

		// 获取周明细

	}, {
		key: 'getWeekDetails',
		value: function getWeekDetails(param) {
			var _this18 = this;

			return (0, _api.requestPost)('getWeekDetails', _config2.default.okr.getWeekDetails, _okr2.default.okr.getWeekDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this18.weekData = Object.assign([], res);
				_this18.defaultWeeksData = Object.assign([], res);;
			});
		}

		// 获取月明细

	}, {
		key: 'getMonthDetails',
		value: function getMonthDetails(param) {
			var _this19 = this;

			return (0, _api.requestPost)('getMonthDetails', _config2.default.okr.getMonthDetails, _okr2.default.okr.getMonthDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this19.monthData = Object.assign([], res);
			});
		}

		// 获取季明细

	}, {
		key: 'getSeasonDetails',
		value: function getSeasonDetails(param) {
			var _this20 = this;

			return (0, _api.requestPost)('getSeasonDetails', _config2.default.okr.getSeasonDetails, _okr2.default.okr.getSeasonDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this20.seasonData = Object.assign([], res);
			});
		}

		// 获取年明细

	}, {
		key: 'getYearDetails',
		value: function getYearDetails(param) {
			var _this21 = this;

			return (0, _api.requestPost)('getYearDetails', _config2.default.okr.getYearDetails, _okr2.default.okr.getYearDetails, {
				code: param,
				userId: this.userId
			}).then(function (res) {
				_this21.yearData = Object.assign([], res);
			});
		}

		// 保存周明细

	}, {
		key: 'saveWeekDetails',
		value: function saveWeekDetails() {
			return (0, _api.requestPost)('saveWeekDetails', _config2.default.okr.saveWeekDetails, _okr2.default.okr.saveWeekDetails, {
				list: this.weekData,
				code: this.activeweeks.id,
				userId: this.userId
			});
		}

		// 保存月明细

	}, {
		key: 'saveMonthDetails',
		value: function saveMonthDetails() {
			return (0, _api.requestPost)('saveMonthDetails', _config2.default.okr.saveMonthDetails, _okr2.default.okr.saveMonthDetails, {
				list: this.monthData,
				code: this.activeweeks.month,
				userId: this.userId
			});
		}

		// 保存季明细

	}, {
		key: 'saveSeasonDetails',
		value: function saveSeasonDetails(param) {
			return (0, _api.requestPost)('saveSeasonDetails', _config2.default.okr.saveSeasonDetails, _okr2.default.okr.saveSeasonDetails, {
				list: this.seasonData,
				code: param,
				userId: this.userId
			});
		}

		// 保存年明细

	}, {
		key: 'saveYearDetails',
		value: function saveYearDetails(param) {
			return (0, _api.requestPost)('saveYearDetails', _config2.default.okr.saveYearDetails, _okr2.default.okr.saveYearDetails, {
				list: this.yearData,
				code: param,
				userId: this.userId
			});
		}

		// 获取评论的附件列表

	}, {
		key: 'getAtts',
		value: function getAtts(params) {
			var _this22 = this;

			return (0, _api.requestPost)('getAtts', _config2.default.okr.getAtts, _okr2.default.okr.getAtts, {
				type: params.type,
				code: params.code,
				userId: this.userId
			}).then(function (res) {
				_this22.okrAtts = Object.assign([], res);
			});
		}

		// 获取评论内容

	}, {
		key: 'getComments',
		value: function getComments(params) {
			var _this23 = this;

			return (0, _api.requestPost)('getComments', _config2.default.okr.getComments, _okr2.default.okr.getComments, {
				type: params.type,
				code: params.code,
				userId: this.userId
			}).then(function (res) {
				_this23.okrComments = Object.assign([], res);
			});
		}

		// 保存附件

	}, {
		key: 'saveAtt',
		value: function saveAtt(params) {
			return (0, _api.requestPost)('saveAtts', _config2.default.okr.saveAtts, _okr2.default.okr.saveAtts, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				attachments: params.attachments
			});
		}

		// 保存评论

	}, {
		key: 'saveComment',
		value: function saveComment(params) {
			return (0, _api.requestPost)('saveComment', _config2.default.okr.saveComment, _okr2.default.okr.saveComment, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				comment: params.comment
			});
		}

		// 删除附件

	}, {
		key: 'delAtt',
		value: function delAtt(params) {
			return (0, _api.requestPost)('delAtt', _config2.default.okr.delAtt, _okr2.default.okr.delAtt, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				attachmentId: params.attachmentId
			});
		}

		// 删除评论

	}, {
		key: 'delComment',
		value: function delComment(params) {
			return (0, _api.requestPost)('delComment', _config2.default.okr.delComment, _okr2.default.okr.delComment, {
				type: params.type,
				code: params.code,
				userId: this.userId,
				commentId: params.commentId
			});
		}
	}]);

	return BpmStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'maxHeight', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'projectBoardList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'projectBoardParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			beginTime: (0, _moment2.default)().startOf('year').valueOf(),
			endTime: (0, _moment2.default)().endOf("year").valueOf(),
			text: ''
		};
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'allProjectList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'allProjectParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { //明细查询参数
			beginTime: (0, _moment2.default)().startOf('year').valueOf(),
			endTime: (0, _moment2.default)().endOf("year").valueOf(),
			text: '',
			products: [],
			state: [],
			masterIds: [],
			pageIndex: 1,
			pageSize: 10
		};
	}
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'allProjectTotal', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'myTaskRunningNum', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'dealyWarnningList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'productProportion', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'topContractAmount', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'currentTaskList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'currentTaskParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { //获取当前任务列表参数 当前（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)
			state: 1,
			pageIndex: 1,
			pageSize: 10
		};
	}
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'dealyWarnningParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { //获取当前任务列表参数 当前（state1延迟 2我的）任务列表(可以是主也可以是子任务 3 我的完成)
			state: 1,
			pageIndex: 1,
			pageSize: 10
		};
	}
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'hasMore', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return true;
	}
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'currentTaskTotal', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'deliverRate', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'moneyBackRate', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'projectStage', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [// 项目的不同阶段
		{ "stageId": "1", "name": "项目信息" }, { "stageId": "9", "name": "项目评估" }, { "stageId": "2", "name": "方案设计" }, { "stageId": "3", "name": "投标准备" }, { "stageId": "4", "name": "合同签订" }, { "stageId": "5", "name": "实施过程" }, { "stageId": "6", "name": "交付验收" }, { "stageId": "10", "name": "实施交付" }, { "stageId": "7", "name": "开票收款" }, { "stageId": "8", "name": "产品设计" }];
	}
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'projectStatus', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [// 项目状态
		{ "text": "项目信息", "value": "项目信息" }, { "text": "项目评估", "value": "项目评估" }, { "text": "方案设计", "value": "方案设计" }, { "text": "投标准备", "value": "投标准备" }, { "text": "合同签订", "value": "合同签订" }, { "text": "实施过程", "value": "实施过程" }, { "text": "交付验收", "value": "交付验收" }, { "text": "实施交付", "value": "实施交付" }, { "text": "开票收款", "value": "开票收款" }, { "text": "全部完成", "value": "全部完成" }, { "text": "产品设计", "value": "产品设计" }, { "text": "中途关闭", "value": "中途关闭" }];
	}
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'productTyleList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'masterList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'masterIds', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'projectBoardListDone', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return false;
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProjectBoardList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProjectBoardList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getAllProjectList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllProjectList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getProductProportion', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProductProportion'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getTopContractAmountList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getTopContractAmountList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getCurrentTaskList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getCurrentTaskList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getWarnningList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getWarnningList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getListData', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getListData'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDeliverRate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDeliverRate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMoneyBackRate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getMoneyBackRate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMyTaskCount', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getMyTaskCount'), _class.prototype), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'products', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProductTypeList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProductTypeList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMasterList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getMasterList'), _class.prototype), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'personList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getUserInfoListByRoleCode', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserInfoListByRoleCode'), _class.prototype), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'projectList', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getCalendarProjectList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getCalendarProjectList'), _class.prototype), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'yearMonth', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return '';
	}
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'personMonthTask', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getPersonMonthTaskState', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPersonMonthTaskState'), _class.prototype), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, 'projectStages', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getProjectStagesByIds', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getProjectStagesByIds'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDepartment', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDepartment'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getUserInfoListByDingtalk', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserInfoListByDingtalk'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getDepartmentAndUsers', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getDepartmentAndUsers'), _class.prototype), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, 'personParams', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return { // 参数
			ids: [],
			beginTime: (0, _moment2.default)().startOf('day').valueOf(),
			endTime: (0, _moment2.default)().endOf("day").valueOf()
		};
	}
}), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, 'personResources', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getPersonScheduleResources', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getPersonScheduleResources'), _class.prototype), _descriptor32 = _applyDecoratedDescriptor(_class.prototype, 'state', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'getAllStages', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getAllStages'), _class.prototype), _descriptor33 = _applyDecoratedDescriptor(_class.prototype, 'ossData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {
			"securityToken": "",
			"accessKeyId": "",
			"accessKeySecret": "",
			"expiration": null
		};
	}
}), _descriptor34 = _applyDecoratedDescriptor(_class.prototype, 'weeksData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor35 = _applyDecoratedDescriptor(_class.prototype, 'activeweeks', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {};
	}
}), _descriptor36 = _applyDecoratedDescriptor(_class.prototype, 'userId', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _descriptor37 = _applyDecoratedDescriptor(_class.prototype, 'userName', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _descriptor38 = _applyDecoratedDescriptor(_class.prototype, 'weekData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor39 = _applyDecoratedDescriptor(_class.prototype, 'monthData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor40 = _applyDecoratedDescriptor(_class.prototype, 'seasonData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor41 = _applyDecoratedDescriptor(_class.prototype, 'yearData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor42 = _applyDecoratedDescriptor(_class.prototype, 'defaultWeeksData', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor43 = _applyDecoratedDescriptor(_class.prototype, 'okrAtts', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor44 = _applyDecoratedDescriptor(_class.prototype, 'okrComments', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
})), _class);
exports.default = BpmStore;

/***/ }),

/***/ 1578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Config = {
	// OKR评定系统
	okr: {
		getWeeks: "query($year: Int) {\n\t\tgetWeeks(year: $year)\n\t\t\t{\n\t\t\tid\n\t\t\tname\n\t\t\tmonth\n\t\t\tmonthName\n\t\t\tisDefault\n\t\t\tweekMonthName\n\t\t}\n\t}", // 返回查询年的周数据

		getWeekDetails: "query($code: Int, $userId: String) {\n\t\tgetWeekDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tweekId\n\t\t\tuserId\n\t\t\torders\n\t\t\tkeyResult\n\t\t\tworkItems\n\t\t\tassociationDescription\n\t\t\tresults\n\t\t}\n\t}", // 获取周明细

		getMonthDetails: "query($code: Int, $userId: String) {\n\t\tgetMonthDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tmonthId\n\t\t\tuserId\n\t\t\torders\n\t\t\tkeyResult\n\t\t\tworkItems\n\t\t\tassociationDescription\n\t\t\tresults\n\t\t}\n\t}", // 获取月明细

		getSeasonDetails: "query($code: Int, $userId: String) {\n\t\tgetSeasonDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tseasonId\n\t\t\tuserId\n\t\t\torders\n\t\t\tobjective\n\t\t\tuniformity\n\t\t\tkeyResult\n\t\t\tdepend\n\t\t\tdependencyDescription\n\t\t\tconfidenceLevel\n\t\t\tcompletion\n\t\t\tscore\n\t\t}\n\t}", // 获取季明细

		getYearDetails: "query($code: Int, $userId: String) {\n\t\tgetYearDetails(code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\tyearId\n\t\t\tuserId\n\t\t\torders\n\t\t\tobjective\n\t\t\tuniformity\n\t\t\tkeyResult\n\t\t\tdepend\n\t\t\tdependencyDescription\n\t\t\tconfidenceLevel\n\t\t\tcompletion\n\t\t\tscore\n\t\t}\n\t}", // 获取年明细

		saveWeekDetails: "mutation($list: [InputWeekDetail], $code: Int, $userId: String) {\n\t\tsaveWeekDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存周明细

		saveMonthDetails: "mutation($list: [InputMonthDetail], $code: Int, $userId: String) {\n\t\tsaveMonthDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存月明细

		saveSeasonDetails: "mutation($list: [InputSeasonDetail], $code: Int, $userId: String) {\n\t\tsaveSeasonDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存季明细

		saveYearDetails: "mutation($list: [InputYearDetail], $code: Int, $userId: String) {\n\t\tsaveYearDetails(list: $list, code: $code, userId: $userId)\n\t}", // 保存年明细

		getAtts: "query($type: String, $code: Int, $userId: String) {\n\t\tgetAtts(type: $type, code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\ttype\n\t\t\ttypeId\n\t\t\ttypeUserId\n\t\t\tuserId\n\t\t\tfileId\n\t\t\tfileName\n\t\t\tfileType\n\t\t\tfilePath\n\t\t\tcreateTime\n\t\t}\n\t}", // 获取评论的附件列表

		getComments: "query($type: String, $code: Int, $userId: String) {\n\t\tgetComments(type: $type, code: $code, userId: $userId)\n\t\t\t{\n\t\t\tid\n\t\t\ttype\n\t\t\ttypeId\n\t\t\ttypeUserId\n\t\t\tuserId\n\t\t\ttext\n\t\t\tcreateTime\n\t\t\tuserName\n\t\t}\n\t}", // 获取评论内容

		saveAtts: "mutation($type: String, $code: Int, $userId: String, $attachments: [InputAttachment]) {\n\t\tsaveAtts(type: $type, code: $code, userId: $userId, attachments: $attachments)\n\t}", // 保存附件

		saveComment: "mutation($type: String, $code: Int, $userId: String, $comment: InputComment) {\n\t\tsaveComment(type: $type, code: $code, userId: $userId, comment: $comment)\n\t}", // 保存评论

		delAtt: "mutation($type: String, $code: Int, $userId: String, $attachmentId: String) {\n\t\tdelAtt(type: $type, code: $code, userId: $userId, attachmentId: $attachmentId)\n\t}", // 删除附件

		delComment: "mutation($type: String, $code: Int, $userId: String, $commentId: String) {\n\t\tdelComment(type: $type, code: $code, userId: $userId, commentId: $commentId)\n\t}", // 删除评论

		getWeekAndMonthDetails: "query($weekCode: Int, $userId: String) {\n\t\tgetWeekAndMonthDetails(weekCode: $weekCode, userId: $userId)\n\t\t{\n\t\t\tweekDetail\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tweekId\n\t\t\t\tuserId\n\t\t\t\torders\n\t\t\t\tkeyResult\n\t\t\t\tworkItems\n\t\t\t\tassociationDescription\n\t\t\t\tresults\n\t\t\t}\n\t\t\tmonthDetail\n\t\t\t{\n\t\t\t\tid\n\t\t\t\tmonthId\n\t\t\t\tuserId\n\t\t\t\torders\n\t\t\t\tkeyResult\n\t\t\t\tworkItems\n\t\t\t\tassociationDescription\n\t\t\t\tresults\n\t\t\t}\n\t\t}\n\t}", // 获取周和月明细

		saveWeekAndMonthDetails: "mutation($weeks: [InputWeekDetail], $months: [InputMonthDetail], $weekCode: Int, $userId: String) {\n\t\tsaveWeekAndMonthDetails(weeks: $weeks, months: $months, weekCode: $weekCode, userId: $userId)\n\t}" // 保存周月明细

	}
};
exports.default = Config;

/***/ }),

/***/ 1779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _antd = __webpack_require__(17);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(29);

var _classnames2 = _interopRequireDefault(_classnames);

var _debounce = __webpack_require__(709);

var _debounce2 = _interopRequireDefault(_debounce);

__webpack_require__(1804);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSearch = (_temp = _class = function (_Component) {
  _inherits(HeaderSearch, _Component);

  _createClass(HeaderSearch, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      if ('open' in props) {
        return {
          searchMode: props.open
        };
      }

      return null;
    }
  }]);

  function HeaderSearch(props) {
    _classCallCheck(this, HeaderSearch);

    var _this = _possibleConstructorReturn(this, (HeaderSearch.__proto__ || Object.getPrototypeOf(HeaderSearch)).call(this, props));

    _this.inputRef = null;

    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.debouncePressEnter();
      }
    };

    _this.onChange = function (value) {
      if (typeof value === 'string') {
        var _this$props = _this.props,
            onSearch = _this$props.onSearch,
            onChange = _this$props.onChange;

        _this.setState({
          value: value
        });

        if (onSearch) {
          onSearch(value);
        }

        if (onChange) {
          onChange(value);
        }
      }
    };

    _this.enterSearchMode = function () {
      var onVisibleChange = _this.props.onVisibleChange;

      onVisibleChange(true);
      _this.setState({
        searchMode: true
      }, function () {
        var searchMode = _this.state.searchMode;


        if (searchMode && _this.inputRef) {
          _this.inputRef.focus();
        }
      });
    };

    _this.leaveSearchMode = function () {
      _this.setState({
        searchMode: false
      });
    };

    _this.debouncePressEnter = function () {
      var onPressEnter = _this.props.onPressEnter;
      var value = _this.state.value;

      onPressEnter(value || '');
    };

    _this.state = {
      searchMode: props.defaultOpen,
      value: props.defaultValue
    };
    _this.debouncePressEnter = (0, _debounce2.default)(_this.debouncePressEnter, 500, {
      leading: true,
      trailing: false
    });
    return _this;
  }

  _createClass(HeaderSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          open = _props.open,
          restProps = _objectWithoutProperties(_props, ['className', 'defaultValue', 'placeholder', 'open']);

      var _state = this.state,
          searchMode = _state.searchMode,
          value = _state.value;

      delete restProps.defaultOpen; // for rc-select not affected

      var inputClass = (0, _classnames2.default)('headerSearch input', _defineProperty({}, 'headerSearch input2', searchMode));
      return _react2.default.createElement(
        'span',
        {
          className: (0, _classnames2.default)(className, 'headerSearch'),
          onClick: this.enterSearchMode,
          onTransitionEnd: function onTransitionEnd(_ref) {
            var propertyName = _ref.propertyName;

            if (propertyName === 'width' && !searchMode) {
              var onVisibleChange = _this2.props.onVisibleChange;

              onVisibleChange(searchMode);
            }
          }
        },
        _react2.default.createElement(_antd.Icon, { type: 'search', key: 'Icon' }),
        _react2.default.createElement(
          _antd.AutoComplete,
          _extends({
            key: 'AutoComplete'
          }, restProps, {
            className: inputClass,
            value: value,
            onChange: this.onChange
          }),
          _react2.default.createElement(_antd.Input, {
            ref: function ref(node) {
              _this2.inputRef = node;
            },
            defaultValue: defaultValue,
            'aria-label': placeholder,
            placeholder: placeholder,
            onKeyDown: this.onKeyDown,
            onBlur: this.leaveSearchMode
          })
        )
      );
    }
  }]);

  return HeaderSearch;
}(_react.Component), _class.defaultProps = {
  defaultActiveFirstOption: false,
  onPressEnter: function onPressEnter() {},
  onSearch: function onSearch() {},
  onChange: function onChange() {},
  className: '',
  placeholder: '',
  dataSource: [],
  defaultOpen: false,
  onVisibleChange: function onVisibleChange() {}
}, _temp);
exports.default = HeaderSearch;

/***/ }),

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, ".headerSearch .anticon-search {\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n.headerSearch .input {\r\n  width: 0;\r\n  background: transparent;\r\n  border-radius: 0;\r\n  transition: width 0.3s, margin-left 0.3s;\r\n}\r\n.headerSearch .input .ant-select-selection {\r\n  background: transparent;\r\n}\r\n.headerSearch .input input {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  border: 0;\r\n  box-shadow: none !important;\r\n}\r\n.headerSearch .input,\r\n.headerSearch .input:hover,\r\n.headerSearch .input:focus {\r\n  border-bottom: 1px solid #d9d9d9;\r\n}\r\n.headerSearch .input.show {\r\n  width: 210px;\r\n  margin-left: 8px;\r\n}\r\n.headerSearch .input2 {\r\n  width: 210px;\r\n  margin-left: 8px;\r\n  background: transparent;\r\n  border-radius: 0;\r\n  transition: width 0.3s, margin-left 0.3s;\r\n}\r\n.headerSearch .input2 .ant-select-selection {\r\n  background: transparent;\r\n}\r\n.headerSearch .input2 input {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  border: 0;\r\n  box-shadow: none !important;\r\n}\r\n.headerSearch .input2,\r\n.headerSearch .input2:hover,\r\n.headerSearch .input2:focus {\r\n  border-bottom: 1px solid #d9d9d9;\r\n}", ""]);

// exports


/***/ }),

/***/ 1804:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1803);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;
//import InfiniteScroll from 'react-infinite-scroller';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _reactRouterDom = __webpack_require__(32);

var _reactCustomScrollbars = __webpack_require__(336);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var DetailsList = (0, _reactRouterDom.withRouter)(_class = function (_React$Component) {
	_inherits(DetailsList, _React$Component);

	function DetailsList(props) {
		_classCallCheck(this, DetailsList);

		var _this = _possibleConstructorReturn(this, (DetailsList.__proto__ || Object.getPrototypeOf(DetailsList)).call(this, props));

		_this.changeHeight = function () {
			var tabpaneDivClientHeight = document.getElementById('tabpane').clientHeight;
			_this.setState({ tableHeight: tabpaneDivClientHeight - 100 });
		};

		_this.onShowSizeChange = function (current, pageSize) {
			_this.store.allProjectParams = Object.assign(mobx.toJS(_this.store.allProjectParams), {
				pageIndex: current,
				pageSize: pageSize
			});
			_this.store.getAllProjectList();
		};

		_this.onChange = function (pageNumber) {
			_this.store.allProjectParams = Object.assign(mobx.toJS(_this.store.allProjectParams), {
				pageIndex: pageNumber
			});
			_this.store.getAllProjectList();
		};

		_this.getProjectStage = function (text, record) {
			var label = "";
			var projectStage = _this.store.projectStage;

			var color = { "color": "#0991FF", "cursor": "pointer" };
			if (record.state == 0) {
				label = projectStage.find(function (obj) {
					return obj.stageId === record.stageId;
				}) ? projectStage.find(function (obj) {
					return obj.stageId === record.stageId;
				}).name : "";
			} else if (record.state == 1) {
				label = "全部完成";
				color = { "color": "#00aa00", "cursor": "pointer" };
			} else if (record.state == 2) {
				label = "中途关闭";
				color = { "color": "#ff8c00", "cursor": "pointer" };
			}
			return _react2.default.createElement(
				'span',
				{ onClick: function onClick(e) {
						_this.pustLink(record);
					}, style: color },
				label
			);
		};

		_this.pustLink = function (record) {
			// 根据projectType跳转
			var urlObj = { 1: 'workdetail', 2: 'labor', 3: 'productdetail', 4: 'exhibition', 5: 'exhibition' };
			var projectType = record.projectType,
			    id = record.id,
			    stageId = record.stageId;

			var address = urlObj[projectType];
			var linkTo = '/bpm/' + address + '?projectid=' + id + '&temId=' + projectType + '&stageid=' + stageId;
			_this.props.history.push(linkTo);
		};

		_this.getProjectStageLabel = function (record) {
			var label = "";
			var projectStage = _this.store.projectStage;

			var color = { "color": "#0991FF", "cursor": "pointer" };
			if (record.state == 0) {
				label = projectStage.find(function (obj) {
					return obj.stageId === record.stageId;
				}).name;
			} else if (record.state == 1) {
				label = "全部完成";
				color = { "color": "#00aa00", "cursor": "pointer" };
			} else if (record.state == 2) {
				label = "中途关闭";
				color = { "color": "#ff8c00", "cursor": "pointer" };
			}
			return label;
		};

		_this.showMilepostOrCloseReason = function (text, record) {
			var label = record.milepost;
			if (record.state == 2) {
				label = record.closeReason;
			}
			return label;
		};

		_this.onChangeState = function (type, item, e) {
			var newData = JSON.parse(JSON.stringify(_this.state[type]));
			var index = newData.findIndex(function (vitem) {
				return vitem == item.id;
			});
			var checked = e.target.checked;

			if (index == -1) {
				// 新增
				_this.setState(_defineProperty({}, type, [].concat(_toConsumableArray(newData), [item.id])));
			} else {
				if (checked == false) {
					// 取消选中
					newData.splice(index, 1);
					_this.setState(_defineProperty({}, type, Object.assign([], newData)));
				}
			}
		};

		_this.getColumnSearchProps = function (dataIndex) {
			return {
				filterDropdown: function filterDropdown(_ref) {
					var confirm = _ref.confirm,
					    clearFilters = _ref.clearFilters;
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
								autoHeightMin: 0,
								autoHeightMax: '310px',
								thumbMinSize: 30,
								universal: true },
							mobx.toJS(_this.store[dataIndex]).map(function (item, index) {
								return _react2.default.createElement(
									'div',
									{ className: 'pl10' },
									_react2.default.createElement(
										_antd.Checkbox,
										{
											className: 'db',
											checked: _this.state[dataIndex].includes(item.id),
											key: dataIndex + "-" + index,
											onChange: _this.onChangeState.bind(_this, dataIndex, item) },
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
									return _this.handleSearch(confirm, dataIndex);
								},
								size: 'small',
								style: { width: 60, marginRight: 8, marginTop: 8 }
							},
							'\u786E\u5B9A'
						),
						_react2.default.createElement(
							_antd.Button,
							{ onClick: function onClick() {
									return _this.handleReset(clearFilters, dataIndex);
								}, size: 'small', style: { width: 60, marginTop: 8 } },
							'\u91CD\u7F6E'
						)
					);
				},
				filterIcon: function filterIcon(filtered) {
					return _react2.default.createElement(_antd.Icon, { className: 'bocfiterIcon', type: 'caret-down', style: { color: filtered ? '#1890ff' : undefined } });
				},
				onFilter: function onFilter(value, record) {
					/*record[dataIndex]
     .toString()
     .toLowerCase()
     .includes(value.toLowerCase())*/
				},
				onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
					if (visible) {}
				},
				render: function render(record, text) {
					// console.log(mobx.toJS(text), mobx.toJS(record),  dataIndex, '---')
					if (dataIndex == "products") {
						var val = mobx.toJS(text)["productType"];
						return typeof val !== 'undefined' ? val.join('、') : '';
					} else if (dataIndex == "state") {
						//const val = mobx.toJS(text)["projectState"];
						return _this.getProjectStage("状态", mobx.toJS(text));
						//return typeof (val) !== 'undefined' ? val.join('、') : ''
					} else if (dataIndex == "masterIds") {
						var _val = mobx.toJS(text)["masters"];
						return typeof _val !== 'undefined' ? _val.map(function (item) {
							return item.userName;
						}).join('、') : '';
					}
				}
			};
		};

		_this.handleSearch = function (confirm, dataIndex) {
			confirm();
			_this.store.allProjectParams[dataIndex] = Object.assign([], _this.state[dataIndex]);
			_this.store.allProjectParams.pageIndex = 1;
			_this.store.allProjectParams.pageSize = 10;
			_this.store.getAllProjectList();
		};

		_this.handleReset = function (clearFilters, dataIndex) {
			clearFilters();
			_this.store.allProjectParams[dataIndex] = Object.assign([]);
			_this.store.allProjectParams.pageIndex = 1;
			_this.store.allProjectParams.pageSize = 10;
			_this.store.getAllProjectList();
			_this.setState(_defineProperty({}, dataIndex, Object.assign([])));
		};

		_this.store = _this.props.store;
		_this.state = {
			tableHeight: document.getElementById('tabpane').clientHeight - 100,
			products: [],
			state: [],
			masterIds: []
		};
		return _this;
	}

	_createClass(DetailsList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('resize', this.changeHeight);
			this.setState({
				products: [],
				state: [],
				masterIds: []
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.changeHeight);
		}

		/*showRunStatus = (text, record) => {
  	let color = {"color": "#0991FF", "cursor": "pointer"};
  	if (text === "中途关闭") color = {"color": "#ff8c00", "cursor": "pointer"};
  	if (text === "全部完成") color = {"color": "#00aa00", "cursor": "pointer"};
  	return (<span onClick={() => {
  	}} style={color}>{text}</span>)
  }*/

		// 设置状态


		// 确定


		// 重置

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    totalCount = _props.totalCount,
			    data = _props.data;
			/*const filterManagersMenu = (
   	<Menu onClick={this.handleMenuClick}>
   		<Menu.Item className="filter-menu-item " key="allmanagersmenu">
   			<Checkbox className="ant-dropdown-menu-item" key="allmanagerscheck">全选</Checkbox>
   		</Menu.Item>
   		<Menu.Divider/>
   	</Menu>
   )*/

			var columns = [{
				title: '项目编号', dataIndex: 'code', align: 'left'
			}, {
				title: '项目名称', dataIndex: 'name', align: 'center', ellipsis: true,
				render: function render(text, record) {
					return _react2.default.createElement(
						'a',
						{ onClick: function onClick(e) {
								_this2.pustLink(record);
							} },
						text
					);
				}
			}, _extends({
				title: '产品类型', dataIndex: 'productType', align: 'center'
			}, this.getColumnSearchProps('products')), _extends({
				title: '项目状态', dataIndex: 'projectState', align: 'center'
			}, this.getColumnSearchProps('state')), _extends({
				title: '当前主负责人', dataIndex: 'masters', align: 'center'
			}, this.getColumnSearchProps('masterIds')), {
				title: '关键里程碑', dataIndex: 'milepost', align: 'left', ellipsis: true,
				render: function render(text, record) {
					return _this2.showMilepostOrCloseReason(text, record);
				}
			}];

			return _react2.default.createElement(
				_antd.ConfigProvider,
				{ renderEmpty: customizeRenderEmpty },
				_react2.default.createElement(_antd.Table, {
					className: 'm_table',
					columns: columns,
					dataSource: data,
					size: 'small',
					scroll: { y: this.state.tableHeight - 70 + 'px' },
					pagination: false
				}),
				_react2.default.createElement(_antd.Pagination, {
					className: 'mt20 tc',
					style: {
						position: 'absolute',
						left: '50%',
						width: '100%',
						transform: 'translateX(-50%)',
						bottom: '10px'
					},
					onShowSizeChange: this.onShowSizeChange,
					onChange: this.onChange,
					total: totalCount,
					showQuickJumper: true
					// current={ activeKey==="0" ? mobx.toJS(this.store.params.pageIndex) : mobx.toJS(this.store.params2.pageIndex) }
					, showTotal: function showTotal(total) {
						return '\u5171 ' + total + ' \u6761\u8BB0\u5F55';
					}
				})
			);
		}
	}]);

	return DetailsList;
}(_react2.default.Component)) || _class;

exports.default = DetailsList;

/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _echarts = __webpack_require__(345);

var _echarts2 = _interopRequireDefault(_echarts);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductCycle = function (_React$Component) {
    _inherits(ProductCycle, _React$Component);

    function ProductCycle(props) {
        _classCallCheck(this, ProductCycle);

        var _this = _possibleConstructorReturn(this, (ProductCycle.__proto__ || Object.getPrototypeOf(ProductCycle)).call(this, props));

        _this.state = {
            option: null,
            data: _this.props.data
        };
        return _this;
    }

    _createClass(ProductCycle, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.data != this.props.data) {
                this.setState({ data: nextProps.data });
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "getRateByName",
        value: function getRateByName(name) {
            var result = "";
            var data = this.state.data;

            var dataList = data.filter(function (item) {
                if (item.name === name) {
                    return item;
                }
            });
            if (dataList.length > 0) {
                var tempData = (dataList[0]['rate'] * 100).toFixed(2);
                result = tempData + '%';
            }
            return result;
        }
    }, {
        key: "render",
        value: function render() {
            var labourRate = this.getRateByName('劳务仓');
            // const labourRate = "22.5%";
            var hallRate = this.getRateByName('展厅');
            var officeRate = this.getRateByName('综合办公');
            var scale = 1;
            var rich = {
                name: {
                    fontSize: 12 * scale,
                    padding: [-25, 5, 5, 5],
                    align: 'center',
                    fontFamily: '"Microsoft Yahei","微软雅黑"',
                    color: "rgba(102, 102, 102, 0.847058823529412)"
                },
                rate: {
                    color: "#000",
                    fontSize: 12 * scale,
                    align: 'center',
                    padding: [-50, 0, 0, 0]
                }
            };
            var option = {
                backgroundColor: '#fff',
                series: [{
                    name: '劳务仓',
                    type: 'pie',
                    radius: ['46%', '58%'],
                    center: ['15%', '50%'],
                    color: '#56a0f8',
                    selectedOffset: 5,
                    grid: {
                        left: '5px',
                        right: '5px',
                        containLabel: true
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 25,
                        name: '劳务仓',
                        tooltip: {
                            show: false
                        },
                        selected: true,
                        label: {
                            normal: {
                                formatter: function formatter(params, callback) {
                                    return '{name|' + '劳务仓' + '}\n\n{rate|' + labourRate + '}';
                                },
                                rich: rich,
                                textStyle: {
                                    fontSize: 12,
                                    color: '#000'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#56a0f8'
                            },
                            emphasis: {
                                color: '#56a0f8'
                            }
                        }
                    }, {
                        value: 75,
                        name: '',
                        label: {
                            show: false
                        },
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#f0f2f5'
                            },
                            emphasis: {
                                color: '#f0f2f5'
                            }
                        }
                    }]
                }, {
                    name: '展厅',
                    type: 'pie',
                    radius: ['46%', '58%'],
                    center: ['50%', '50%'],
                    color: '#84d090',
                    selectedOffset: 5,
                    grid: {
                        left: '5px',
                        right: '5px',
                        containLabel: true
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 25,
                        name: '展厅',
                        tooltip: {
                            show: false
                        },
                        selected: true,
                        label: {
                            normal: {
                                formatter: function formatter(params, callback) {
                                    return '{name|' + '展厅' + '}\n\n{rate|' + hallRate + '}';
                                },
                                rich: rich,
                                textStyle: {
                                    fontSize: 14,
                                    color: '#000'

                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#84d090'
                            },
                            emphasis: {
                                color: '#84d090'
                            }
                        }
                    }, {
                        value: 75,
                        name: '',
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#f0f2f5'
                            },
                            emphasis: {
                                color: '#f0f2f5'
                            }
                        }
                    }]
                }, {
                    name: '综合办公',
                    type: 'pie',
                    radius: ['46%', '58%'],
                    center: ['85%', '50%'],
                    color: '#f6da6d',
                    selectedOffset: 5,
                    grid: {
                        left: '5px',
                        right: '5px',
                        containLabel: true
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 25,
                        name: '综合办公',
                        tooltip: {
                            show: false
                        },
                        selected: true,
                        label: {
                            normal: {
                                formatter: function formatter(params, callback) {
                                    return '{name|' + '综合办公' + '}\n\n{rate|' + officeRate + '}';
                                },
                                rich: rich,
                                textStyle: {
                                    fontSize: 14,
                                    color: '#000'

                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f6da6d'
                            },
                            emphasis: {
                                color: '#f6da6d'
                            }
                        }

                    }, {
                        value: 75,
                        name: '',
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#f0f2f5'
                            },
                            emphasis: {
                                color: '#f0f2f5'
                            }
                        }
                    }]
                }]
            };
            return _react2.default.createElement(_echartsForReact2.default, {
                option: option,
                style: { width: '100%', height: '100%' },
                notMerge: true,
                lazyUpdate: true
            });
        }
    }]);

    return ProductCycle;
}(_react2.default.Component);

exports.default = ProductCycle;

/***/ }),

/***/ 1952:
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

var _antd = __webpack_require__(17);

var _utils = __webpack_require__(89);

var _reactRouterDom = __webpack_require__(32);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = _antd.Typography.Paragraph;

var Progress = (0, _reactRouterDom.withRouter)(_class = function (_React$Component) {
	_inherits(Progress, _React$Component);

	function Progress(props) {
		_classCallCheck(this, Progress);

		var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

		_this.makeHeightEqual = function (data) {
			if (!_this.store.projectBoardListDone) return;
			try {
				var progresscontentDivClientHeight = document.getElementById('progresscontent').clientHeight;
				var stagesList = data.map(function (item) {
					return { "stageId": item.stageId, "projectNum": item.projectList.length };
				});
				stagesList.shift();
				stagesList = stagesList.filter(function (item) {
					return item.stageId !== '8' && item.stageId !== '9';
				});

				var stageNames = stagesList.map(function (item) {
					return item.stageId;
				});
				var projectNums = stagesList.map(function (item) {
					return parseInt(item.projectNum);
				});
				var maxNum = Math.max.apply(Math, _toConsumableArray(projectNums));
				var maxStageName = stageNames[projectNums.findIndex(function (value) {
					return value == maxNum;
				})];
				var otherStageNames = stageNames.filter(function (stageName) {
					return maxStageName !== stageName;
				});
				// alert(otherStageNames.filter(stageName => document.getElementById(stageName)==null).length)
				var maxStageDivClientHeight = document.getElementById('stage' + maxStageName).clientHeight;

				var maxHeight = maxStageDivClientHeight < progresscontentDivClientHeight ? progresscontentDivClientHeight : maxStageDivClientHeight;

				otherStageNames.forEach(function (item) {
					document.getElementById('stage' + item).style.height = maxHeight + 'px';
				});
				document.getElementById('stage' + maxStageName).style.height = maxStageDivClientHeight < progresscontentDivClientHeight ? maxHeight + 'px' : maxHeight + 1 + 'px';
			} catch (error) {}
		};

		_this.store = _this.props.store;
		return _this;
	}

	_createClass(Progress, [{
		key: 'componentWillReciveProps',
		value: function componentWillReciveProps(nextProps) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'jumpProjectDetails',
		value: function jumpProjectDetails(project) {
			var urlObj = { 1: 'workdetail', 2: 'labor', 3: 'productdetail', 4: 'exhibition', 5: 'exhibition' };

			var _mobx$toJS = mobx.toJS(project),
			    projectType = _mobx$toJS.projectType,
			    id = _mobx$toJS.id;

			var address = urlObj[projectType];
			var linkTo = '/bpm/' + address + '?projectid=' + id + '&temId=' + projectType;
			this.props.history.push(linkTo);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var data = this.props.data;
			//console.log(mobx.toJS(data),'data')

			var sData = Object.assign([], mobx.toJS(this.store.projectStage));
			var ppData = null;

			ppData = sData.map(function (itemStage, indexStage) {
				var projectList = [];
				//console.log(itemStage.stageId);
				data.forEach(function (itemProject, indexProject) {
					if (itemStage.stageId === itemProject.stageId) {
						projectList.push(itemProject);
					}
					// 将stageId==10的数据合并到stageId==6中
					if (itemProject.stageId == 10) {
						var obj = Object.assign(itemProject, { stageId: '6' });
						projectList.push(obj);
					}
				});
				return Object.assign({}, itemStage, { "projectList": projectList });
			});
			this.makeHeightEqual(ppData);
			return _react2.default.createElement(
				'div',
				{ className: 'h' },
				_react2.default.createElement(
					'div',
					_defineProperty({ className: 'bpg_progress_header'
					}, 'className', (0, _utils.myBrowser)() !== 'Chrome' && (0, _utils.myBrowser)() != 'Safari' ? 'bpg_progress_header_mr17' : 'bpg_progress_header'),
					ppData.map(function (item, index) {
						if (item.name != "项目信息" && item.name != "产品设计" && item.name != "项目评估" && item.name != "实施交付") {
							return _react2.default.createElement(
								_antd.Col,
								{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4, key: 'list2' + index },
								_react2.default.createElement(
									_antd.Card,
									{ bordered: true, style: { maxWidth: '200px', backgroundColor: '#ccc' },
										className: 'mr20 kanban_cardtwo' },
									_react2.default.createElement(
										'h3',
										{ className: 'bpm_progress_title', title: item.name },
										item.name,
										' (',
										item.projectList.length,
										')'
									)
								)
							);
						}
					})
				),
				_react2.default.createElement(
					'div',
					{ id: 'progresscontent',
						className: (0, _utils.myBrowser)() !== 'Chrome' && (0, _utils.myBrowser)() != 'Safari' ? 'bpg_progress_body_ff' : 'bpg_progress_body' },
					ppData.map(function (item, index) {
						if (item.name != "项目信息" && item.name != "产品设计" && item.name != "项目评估" && item.name != "实施交付") {
							return _react2.default.createElement(
								_antd.Col,
								{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4, key: 'list' + index },
								_react2.default.createElement(
									_antd.Card,
									{ id: 'stage' + item.stageId, bordered: true,
										className: 'mr20  kanban_cardone',
										style: { maxWidth: '200px', paddingTop: '10px', backgroundColor: '#ccc' } },
									item.projectList.map(function (itemProject, indexProject) {
										return _react2.default.createElement(
											'div',
											{ title: itemProject.name,
												className: 'bpm_progress_item item_1', onClick: function onClick(e) {
													_this2.jumpProjectDetails(itemProject);
												} },
											_react2.default.createElement('span', {
												className: itemProject.currentTaskState == 0 ? 'trangle1' : itemProject.currentTaskState == 1 ? 'trangle4' : itemProject.currentTaskState == 2 ? 'trangle3' : itemProject.currentTaskState == 3 ? 'trangle2' : 'trangle4' }),
											_react2.default.createElement(
												'span',
												{
													className: itemProject.currentProgress < 10 ? 'trangle_label3' : itemProject.currentProgress == 100 ? "trangle_label" : "trangle_label2" },
												itemProject.currentProgress + '%'
											),
											_react2.default.createElement(
												'p',
												{ className: 'p1 mt20' },
												_react2.default.createElement(
													Paragraph,
													{ ellipsis: true },
													itemProject.name
												)
											),
											_react2.default.createElement(
												'p',
												{ className: 'p2' },
												_react2.default.createElement(
													Paragraph,
													{ ellipsis: true },
													'(' + itemProject.code + ')'
												)
											)
										);
									})
								)
							);
						}
					})
				)
			);
		}
	}]);

	return Progress;
}(_react2.default.Component)) || _class;

exports.default = Progress;

/***/ }),

/***/ 1954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _echarts = __webpack_require__(345);

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RateCharts = function (_React$Component) {
    _inherits(RateCharts, _React$Component);

    function RateCharts(props) {
        _classCallCheck(this, RateCharts);

        return _possibleConstructorReturn(this, (RateCharts.__proto__ || Object.getPrototypeOf(RateCharts)).call(this, props));
    }

    _createClass(RateCharts, [{
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                rateNum = _props.rateNum;

            var option = option = {
                series: [{
                    name: '2019-02-12 任务分析',
                    type: 'gauge',
                    radius: '80%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 15,
                            color: [[0, '#539df6'], [0.75, '#539df6'], [1, '#539df6']]
                        }
                    },
                    splitLine: {
                        show: false,
                        length: 15,
                        lineStyle: {
                            //color:'black'
                        }
                    },
                    "axisTick": {
                        show: false

                    },
                    axisLabel: {
                        formatter: function formatter(e) {
                            switch (e + "") {
                                case "0":
                                    return "";
                                case "10":
                                    return "";
                                case "20":
                                    return "差";
                                case "30":
                                    return "";

                                case "40":
                                    return "中";
                                case "50":
                                    return "";

                                case "60":
                                    return "良";
                                case "70":
                                    return "";
                                case "80":
                                    return "优";
                                case "90":
                                    return "";
                                case "100":
                                    return "";
                                default:
                                    return e;
                            }
                        },
                        textStyle: {
                            fontSize: 14,
                            fontWeight: "",
                            color: '#000'
                        }
                    },
                    detail: {
                        formatter: '{value}%',
                        "textStyle": {
                            "fontSize": 20,
                            fontWeight: '700',
                            "color": '#000'
                        }
                    },
                    title: {
                        "fontSize": "12px",
                        color: '#999',
                        offsetCenter: [0, '50%']
                    },
                    pointer: {
                        show: true,
                        length: '60%'
                    },
                    itemStyle: { // 指针
                        color: '#539df6'
                    },
                    data: [{
                        value: rateNum,
                        name: title
                    }]
                }, { //指针外环
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": ['6%', '8%'],
                    "z": 10,
                    "label": {
                        "normal": {
                            "show": false
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 80,
                        itemStyle: {
                            normal: {
                                color: "#539df6"
                            }
                        }
                    }]
                }, { //指针内环
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": ['0%', '6%'],
                    "z": 10,
                    "label": {
                        "normal": {
                            "show": false
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 80,
                        itemStyle: {
                            normal: {
                                color: "#ffffff"
                            }
                        }
                    }]
                }, {
                    name: '刻度尺', //刻度背景
                    type: 'gauge',
                    z: 2,
                    radius: '68%',
                    splitNumber: 4,
                    center: ["50%", "0%"], //整体的位置设置
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式

                            width: 20,
                            opacity: 0 //刻度背景宽度
                        }
                    },
                    data: [{
                        show: false,
                        value: '100'
                    }],
                    axisLabel: {
                        show: false
                    },
                    "axisTick": {
                        show: false

                    },
                    pointer: {
                        show: false
                    },
                    detail: {
                        show: 0
                    },
                    splitLine: {
                        length: 10, //刻度节点线长度
                        lineStyle: {
                            width: 3,
                            color: '#539df6' //刻度节点线
                        } }
                }]
            };
            var option2 = { // echarts
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                grid: {
                    left: '5px',
                    right: '5px',
                    containLabel: true
                },
                toolbox: {
                    show: false,
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [{
                    name: '',
                    type: 'gauge',
                    detail: { formatter: '{value}%', textStyle: { fontSize: 12 }
                    },
                    radius: '100%',
                    data: [{ value: rateNum, name: title }],
                    title: {
                        fontSize: "12px",
                        color: '#999',
                        offsetCenter: [0, '80%']
                    },
                    min: 0,
                    max: 100, //设置刻度盘内数值区间
                    splitNumber: 4, //设置间隔区域的显示数量
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 10,
                            color: [[rateNum / 100, "#5DD1FA"], // 走过渐变色
                            [1, "#539df6"]]
                        }
                    },
                    // 分割线
                    splitLine: {
                        show: true,
                        length: 15,
                        lineStyle: {
                            color: "auto"
                        }
                    },
                    // 刻度线
                    axisTick: {
                        show: true,
                        length: 13,
                        splitNumber: 10,
                        lineStyle: {
                            color: "auto"
                        }
                    },
                    axisLabel: {
                        formatter: function formatter(v) {
                            switch (v + '') {
                                case '0':
                                    return '';
                                case '100':
                                    return '';
                                default:
                                    return v;
                            }
                        }
                    },
                    pointer: {
                        width: 7, //指针的宽度
                        length: "50%", //指针长度，按照半圆半径的百分比
                        shadowColor: '#ccc', //默认透明
                        shadowBlur: 5
                    }
                }]
            };
            return _react2.default.createElement(_echartsForReact2.default, {
                style: { width: '100%', height: '100%', padding: '10px 10px' },
                option: option2,
                notMerge: true,
                lazyUpdate: true
            });
        }
    }]);

    return RateCharts;
}(_react2.default.Component);

exports.default = RateCharts;

/***/ }),

/***/ 1955:
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

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _HeaderSearch = __webpack_require__(1779);

var _HeaderSearch2 = _interopRequireDefault(_HeaderSearch);

__webpack_require__(2168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = _antd.Input.Search;
var MonthPicker = _antd.DatePicker.MonthPicker,
    RangePicker = _antd.DatePicker.RangePicker;

var dateFormat = 'YYYY-MM-DD';

var SearchGroup = function (_React$Component) {
    _inherits(SearchGroup, _React$Component);

    function SearchGroup(props) {
        _classCallCheck(this, SearchGroup);

        var _this = _possibleConstructorReturn(this, (SearchGroup.__proto__ || Object.getPrototypeOf(SearchGroup)).call(this, props));

        _this.toggleTimeBucket = function (type) {
            var _this$state = _this.state,
                buttonToday = _this$state.buttonToday,
                buttonWeek = _this$state.buttonWeek,
                buttonMonth = _this$state.buttonMonth,
                buttonYear = _this$state.buttonYear,
                text = _this$state.text,
                beginTime = _this$state.beginTime,
                endTime = _this$state.endTime;

            var obj = {};
            var otherObj = {};
            var timeObj = {};
            if (type === "today") {
                obj = { "buttonToday": !buttonToday };
                if (!buttonToday) {
                    otherObj = { "buttonWeek": false, "buttonMonth": false, "buttonYear": false };
                }
                timeObj = { "beginTime": (0, _moment2.default)().startOf('day').format(dateFormat), "endTime": (0, _moment2.default)().endOf('day').format(dateFormat) };
            } else if (type === "week") {
                obj = { "buttonWeek": !buttonWeek };
                if (!buttonWeek) {
                    otherObj = { "buttonToday": false, "buttonMonth": false, "buttonYear": false };
                }
                timeObj = { "beginTime": (0, _moment2.default)().startOf('week').format(dateFormat), "endTime": (0, _moment2.default)().endOf('week').format(dateFormat) };
            } else if (type === "month") {
                obj = { "buttonMonth": !buttonMonth };
                if (!buttonMonth) {
                    otherObj = { "buttonWeek": false, "buttonToday": false, "buttonYear": false };
                }
                timeObj = { "beginTime": (0, _moment2.default)().startOf('month').format(dateFormat), "endTime": (0, _moment2.default)().endOf('month').format(dateFormat) };
            } else if (type === "year") {
                obj = { "buttonYear": !buttonYear };
                if (!buttonYear) {
                    otherObj = { "buttonWeek": false, "buttonMonth": false, "buttonToday": false };
                }
                timeObj = { "beginTime": (0, _moment2.default)().startOf('year').format(dateFormat), "endTime": (0, _moment2.default)().endOf('year').format(dateFormat) };
            }
            _this.setState(Object.assign(obj, otherObj, timeObj), function () {
                var parmas = { "text": text, "beginTime": _this.state.beginTime, "endTime": _this.state.endTime
                    // console.log("serarchparams"+JSON.stringify(parmas,null,2))
                };_this.onSearch(parmas);
            });
        };

        _this.onChangeTimeRange = function (dates, dateStrings) {
            var obj = { "buttonWeek": false, "buttonMonth": false, "buttonToday": false, "buttonYear": false };
            // console.log('From: ', dates[0], ', to: ', dates[1]);
            //console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
            var timeObj = { "beginTime": dateStrings[0], "endTime": dateStrings[1] };
            _this.setState(Object.assign(obj, timeObj));
        };

        _this.onSearch = function (parmas) {
            _this.props.onSearch(parmas);
        };

        _this.state = {
            data: _this.props.data,
            buttonToday: false,
            buttonWeek: false,
            buttonMonth: false,
            buttonYear: false,
            text: "",
            beginTime: (0, _moment2.default)().startOf('year').format(dateFormat),
            endTime: (0, _moment2.default)().endOf("year").format(dateFormat)
        };

        return _this;
    }

    _createClass(SearchGroup, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.data != this.props.data) {
                this.setState({ data: nextProps.data });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                data = _state.data,
                buttonToday = _state.buttonToday,
                buttonWeek = _state.buttonWeek,
                buttonMonth = _state.buttonMonth,
                buttonYear = _state.buttonYear,
                beginTime = _state.beginTime,
                endTime = _state.endTime;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_HeaderSearch2.default, {
                    className: 'action search',
                    placeholder: "",
                    defaultValue: '',
                    dataSource: [],
                    onSearch: function onSearch(value) {
                        // console.log('input', value);
                        //  let parmas = {"text":value, "beginTime":beginTime, "endTime": endTime}
                        //  this.setState({"text":value});
                        //  this.onSearch(parmas)
                    },
                    onPressEnter: function onPressEnter(value) {
                        //  console.log('enter', value);
                        var parmas = { "text": value, "beginTime": beginTime, "endTime": endTime };
                        _this2.setState({ "text": value });
                        _this2.onSearch(parmas);
                    }
                }),
                _react2.default.createElement(
                    _antd.Button,
                    { style: { padding: '5px' }, className: buttonToday ? "" : "btn_default_color", onClick: function onClick(e) {
                            return _this2.toggleTimeBucket("today");
                        }, type: "link" },
                    '\u4ECA\u65E5'
                ),
                _react2.default.createElement(
                    _antd.Button,
                    { style: { padding: '5px' }, className: buttonWeek ? "" : "btn_default_color", onClick: function onClick(e) {
                            return _this2.toggleTimeBucket("week");
                        }, type: "link" },
                    '\u672C\u5468'
                ),
                _react2.default.createElement(
                    _antd.Button,
                    { style: { padding: '5px' }, className: buttonMonth ? "" : "btn_default_color", onClick: function onClick(e) {
                            return _this2.toggleTimeBucket("month");
                        }, type: "link" },
                    '\u672C\u6708'
                ),
                _react2.default.createElement(
                    _antd.Button,
                    { style: { padding: '5px 10px 5px 5px' }, className: buttonYear ? "" : "btn_default_color", onClick: function onClick(e) {
                            return _this2.toggleTimeBucket("year");
                        }, type: "link" },
                    '\u5168\u5E74'
                ),
                _react2.default.createElement(RangePicker, {
                    style: { width: '220px' },
                    className: 'w',
                    allowClear: false,
                    defaultValue: [(0, _moment2.default)(beginTime, dateFormat), (0, _moment2.default)(endTime, dateFormat)],
                    value: [(0, _moment2.default)(beginTime, dateFormat), (0, _moment2.default)(endTime, dateFormat)],
                    format: dateFormat,
                    onChange: this.onChangeTimeRange
                })
            );
        }
    }]);

    return SearchGroup;
}(_react2.default.Component);

exports.default = SearchGroup;

/***/ }),

/***/ 1956:
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = _antd.Typography.Paragraph;

var Top5List = function (_React$Component) {
	_inherits(Top5List, _React$Component);

	function Top5List(props) {
		_classCallCheck(this, Top5List);

		var _this = _possibleConstructorReturn(this, (Top5List.__proto__ || Object.getPrototypeOf(Top5List)).call(this, props));

		_this.state = {
			option: null,
			data: _this.props.data
		};

		return _this;
	}

	_createClass(Top5List, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.data != this.props.data) {
				this.setState({ data: nextProps.data });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var data = this.state.data;

			return _react2.default.createElement(
				'div',
				{ className: 'top_5', style: { height: '100%' } },
				_react2.default.createElement(
					'ul',
					{ className: 'clearfix w' },
					data.map(function (item, index) {
						var _React$createElement;

						return _react2.default.createElement(
							'li',
							{ key: index, className: 'w' },
							_react2.default.createElement(
								'a',
								(_React$createElement = { className: 'fr',
									title: item.amount + "万"
								}, _defineProperty(_React$createElement, 'className', 'fr'), _defineProperty(_React$createElement, 'style', {
									maxWidth: '100px',
									whiteSpace: 'nowrap',
									textOverflow: 'ellipsis',
									overflow: 'hidden'
								}), _React$createElement),
								item.amount,
								'\u4E07'
							),
							_react2.default.createElement(
								'a',
								{ title: item.name,
									className: 'fl',
									style: {
										width: 'calc(100% - 130px)',
										whiteSpace: 'nowrap',
										textOverflow: 'ellipsis',
										overflow: 'hidden'
									} },
								item.name
							)
						);
					})
				)
			);
		}
	}]);

	return Top5List;
}(_react2.default.Component);

exports.default = Top5List;

/***/ }),

/***/ 1957:
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

var _reactInfiniteScroller = __webpack_require__(1529);

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD';

var customizeRenderEmpty = function customizeRenderEmpty() {
	return _react2.default.createElement(
		'div',
		{ style: { textAlign: 'center', padding: '0' } },
		_react2.default.createElement('img', {
			width: '130px',
			height: '100px',
			src: './images/daiban_un.png' }),
		_react2.default.createElement(
			'p',
			{ style: {
					fontSize: '14px',
					fontFamily: 'PingFangSC-Regular,PingFang S',
					fontWeight: '400',
					color: 'rgba(75,80,81,1)',
					paddingTop: '15px'
				} },
			'\u4E00\u5207\u6B63\u5E38\uFF0C\u7ED9\u5927\u5BB6\u70B9\u8D5E\uFF01\uFF01\uFF01'
		)
	);
};

var renderCount = 0;

var WarningList = function (_React$Component) {
	_inherits(WarningList, _React$Component);

	function WarningList(props) {
		_classCallCheck(this, WarningList);

		var _this = _possibleConstructorReturn(this, (WarningList.__proto__ || Object.getPrototypeOf(WarningList)).call(this, props));

		_this.handleInfiniteOnLoad = function () {
			if (_this.store.hasMore) {
				_this.store.getWarnningList();
			}

			// this.store.getProjectPeopleInfoList(params).then((res) => {
			// 	if (res && res['body'].length > 0) {
			// 		let tempData = this.store.projectPeopleInfoList;
			// 		this.store.projectPeopleInfoList = tempData.concat(res['body'])
			// 		this.setState({
			// 			loading: false,
			// 			pageIndex: pageIndex + 1
			// 		});
			// 	} else {
			// 		this.setState({
			// 			hasMore: false
			// 		});
			// 	}

			// 	this.setState({
			// 		loading: false
			// 	});
			// });
		};

		_this.getCurrentBell = function (endTime, now) {
			var currentBell = null;
			// const bell_wartergreen = {fontSize:"18px", color:"#00AAAA", marginRight:"10px"};
			var bell_yellow = { fontSize: "18px", color: "#e7b550", marginRight: "10px" };
			var bell_red = { fontSize: "18px", color: "#c4382c", marginRight: "10px" };
			var bell_blue = { fontSize: "18px", color: "#4da9de", marginRight: "10px" };

			var days = (0, _moment2.default)(now).diff((0, _moment2.default)(endTime), 'days');
			if (days > 3) {
				currentBell = bell_red;
			} else if (days >= 2 && days <= 3) {
				currentBell = bell_yellow;
			} else {
				currentBell = bell_blue;
			}
			return currentBell;
		};

		_this.getDealyDays = function (endTime, now) {
			var days = (0, _moment2.default)(now).diff((0, _moment2.default)(endTime), 'days');
			return '延迟' + days + '天';
		};

		_this.display5Items = function () {
			renderCount = renderCount + 1;
			if (renderCount == 9) {
				renderCount = 0;
				try {
					var warnningcontentDivClientHeight = document.getElementById('warnningcontent').clientHeight - 20;
					var warnningItemNeedHeight = Math.round(warnningcontentDivClientHeight / 5);
					var warnningItems = document.getElementsByName('warnningitem');
					setTimeout(function () {
						warnningItems.forEach(function (item) {
							item.style.height = warnningItemNeedHeight + "px";
							item.style.width = "100%";
							item.style.display = "table";
							item.style.borderBottom = "1px dashed #e8e8e8";
							item.style.paddingTop = "5px";
							item.style.paddingBottom = "0";
						});
					}, 5);
				} catch (error) {
					console.log(error);
				}
			}
		};

		_this.store = _this.props.store;
		_this.state = {
			loading: false,
			hasMore: true,
			pageIndex: 1
		};
		return _this;
	}

	_createClass(WarningList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    totalCount = _props.totalCount,
			    data = _props.data;

			// this.display5Items();

			return _react2.default.createElement(
				'div',
				{ style: { width: '100%', height: '100%', overflowY: 'hidden' } },
				_react2.default.createElement(
					'div',
					{ className: 'warning-container-header h' },
					_react2.default.createElement(
						'div',
						{ className: 'bpm_gray_label', style: data.length == 0 ? { "display": "none" } : { "width": "100%", height: '20px', lineHeight: '20px', tableLayout: "fixed", "display": "table" } },
						_react2.default.createElement(
							'span',
							{ style: {
									"width": "40%", "display": "table-cell", "textAlign": "center"
								} },
							'\u4EFB\u52A1'
						),
						_react2.default.createElement(
							'span',
							{ style: {
									"width": "30%", "display": "table-cell", "textAlign": "center"
								} },
							'\u622A\u6B62\u65E5\u671F'
						),
						_react2.default.createElement(
							'span',
							{ style: {
									"width": "30%", "display": "table-cell", "textAlign": "center"
								} },
							'\u8D1F\u8D23\u4EBA'
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'warnningcontent', className: data.length == 0 ? "" : "warning-infinite-container", ref: function ref(node) {
								_this2.container = node;
							} },
						_react2.default.createElement(
							_reactInfiniteScroller2.default,
							{
								initialLoad: false,
								pageStart: 0,
								loadMore: this.handleInfiniteOnLoad,
								hasMore: !this.state.loading && this.state.hasMore,
								useWindow: false
							},
							_react2.default.createElement(
								_antd.ConfigProvider,
								{ renderEmpty: customizeRenderEmpty },
								_react2.default.createElement(
									_antd.List,
									{
										dataSource: data,
										renderItem: function renderItem(item, index) {
											return _react2.default.createElement(
												_antd.List.Item,
												{ key: index },
												_react2.default.createElement(
													'div',
													{ name: 'warnningitem', style: { "width": "100%", "display": "table", tableLayout: "fixed" } },
													_react2.default.createElement(
														'span',
														{
															className: 'ellsis',
															style: {
																width: "40%",
																textAlign: "left",
																display: "table-cell",
																fontSize: "12px"
															},
															title: item.name
														},
														_react2.default.createElement(
															_antd.Tooltip,
															{ placement: 'top', title: _this2.getDealyDays(item.endTime, item.now) },
															_react2.default.createElement(_antd.Icon, { style: _this2.getCurrentBell(item.endTime, item.now), theme: 'filled', type: 'bell' })
														),
														item.name
													),
													_react2.default.createElement(
														'span',
														{
															className: 'ellsis',
															style: {
																width: "30%",
																textAlign: "center",
																display: "table-cell",
																paddingLeft: "4px",
																fontSize: "12px"
															} },
														item.endTime == 0 ? "" : (0, _moment2.default)(item.endTime).format(dateFormat)
													),
													_react2.default.createElement(
														'span',
														{
															className: 'ellsis',
															style: {
																width: "30%",
																textAlign: "center",
																display: "table-cell",
																fontSize: "12px"
															} },
														typeof item.masters !== 'undefined' ? item.masters.map(function (obj) {
															return obj.userName;
														}).join('，') : ''
													)
												)
											);
										}
									},
									this.state.loading && this.state.hasMore && _react2.default.createElement(
										'div',
										{ className: 'warning-loading-container' },
										_react2.default.createElement(_antd.Spin, null)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return WarningList;
}(_react2.default.Component);

exports.default = WarningList;

/***/ }),

/***/ 2146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1459)(false);
// imports


// module
exports.push([module.i, ".menu .anticon {\r\n  margin-right: 8px;\r\n}\r\n.menu .ant-dropdown-menu-item {\r\n  min-width: 160px;\r\n}\r\n.action {\r\n  display: inline-block;\r\n  height: 100%;\r\n  padding: 0 12px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n.action > i {\r\n  color: rgba(0, 0, 0, 0.65);\r\n  vertical-align: middle;\r\n}\r\n.action:hover {\r\n  background: rgba(0, 0, 0, 0.025);\r\n}\r\n.action.opened {\r\n  background: rgba(0, 0, 0, 0.025);\r\n}\r\n.search {\r\n  padding: 0 12px;\r\n}\r\n.search:hover {\r\n  background: transparent;\r\n}\r\n.dark .action {\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n.dark .action > i {\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n.dark .action:hover,\r\n.dark .action.opened {\r\n  background: #1890ff;\r\n}\r\n.ant-pro-global-header .dark .action {\r\n  color: rgba(0, 0, 0, 0.65);\r\n}\r\n.ant-pro-global-header .dark .action > i {\r\n  color: rgba(0, 0, 0, 0.65);\r\n}\r\n.ant-pro-global-header .dark .action:hover {\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n.ant-pro-global-header .dark .action:hover > i {\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .ant-divider-vertical {\r\n    vertical-align: unset;\r\n  }\r\n  .name {\r\n    display: none;\r\n  }\r\n  .right {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 12px;\r\n  }\r\n  .right .account .avatar {\r\n    margin-right: 0;\r\n  }\r\n}", ""]);

// exports


/***/ }),

/***/ 2168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2146);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1460)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
            *进展列表
            *qiufh@bocspace.cn
            2020-01-09
            */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(32);

var _antd = __webpack_require__(17);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _BpmStore = __webpack_require__(1577);

var _BpmStore2 = _interopRequireDefault(_BpmStore);

var _SearchGroup = __webpack_require__(1955);

var _SearchGroup2 = _interopRequireDefault(_SearchGroup);

var _ProductCycle = __webpack_require__(1951);

var _ProductCycle2 = _interopRequireDefault(_ProductCycle);

var _RateCharts = __webpack_require__(1954);

var _RateCharts2 = _interopRequireDefault(_RateCharts);

var _Top5List = __webpack_require__(1956);

var _Top5List2 = _interopRequireDefault(_Top5List);

var _WarningList = __webpack_require__(1957);

var _WarningList2 = _interopRequireDefault(_WarningList);

var _Progress = __webpack_require__(1952);

var _Progress2 = _interopRequireDefault(_Progress);

var _DetailsList = __webpack_require__(1948);

var _DetailsList2 = _interopRequireDefault(_DetailsList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;
var Search = _antd.Input.Search;
var Paragraph = _antd.Typography.Paragraph;

var dateFormat = 'YYYY-MM-DD';

var ProgressList = (0, _reactRouterDom.withRouter)(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(ProgressList, _React$Component);

    function ProgressList(props) {
        _classCallCheck(this, ProgressList);

        var _this = _possibleConstructorReturn(this, (ProgressList.__proto__ || Object.getPrototypeOf(ProgressList)).call(this, props));

        _this.state = {
            activeKey: '0' // 激活的key,
        };

        _this.loadPageInfo = function () {
            _this.store.getProjectBoardList();
            _this.store.getAllProjectList();
            _this.store.getProductProportion();
            _this.store.getTopContractAmountList();
            _this.store.getDeliverRate(); //交付完成率
            _this.store.getMoneyBackRate(); //回款完成率
            _this.store.getMyTaskCount(); // 获取我的任务数
            // this.getMyRunningTaskNum();
            _this.getDelayWarnningList();
            _this.getProductTypeList();
            _this.getMasterList();
            _this.store.getAllStages();
        };

        _this.getSearchResult = function () {
            _this.store.getProjectBoardList();
            _this.store.getAllProjectList();
        };

        _this.getProductTypeList = function () {
            _this.store.getProductTypeList();
        };

        _this.getMasterList = function () {
            _this.store.getMasterList();
        };

        _this.getDelayWarnningList = function () {
            _this.store.getWarnningList();
        };

        _this.tabsOnchange = function (key) {
            _this.setState({ activeKey: key });
            // this.clearPageStatus();
        };

        _this.onSearch = function (parmas) {
            _this.store.projectBoardParams.beginTime = (0, _moment2.default)(parmas.beginTime, dateFormat).valueOf();
            _this.store.allProjectParams.beginTime = (0, _moment2.default)(parmas.beginTime, dateFormat).valueOf();

            _this.store.projectBoardParams.endTime = (0, _moment2.default)(parmas.endTime, dateFormat).valueOf() + 86399000; //时间差精确到当天的最后一秒
            _this.store.allProjectParams.endTime = (0, _moment2.default)(parmas.endTime, dateFormat).valueOf() + 86399000; //时间差精确到当天的最后一秒

            _this.store.projectBoardParams.text = parmas.text;
            _this.store.allProjectParams.text = parmas.text;
            _this.getSearchResult();
        };

        _this.store = new _BpmStore2.default();
        return _this;
    }

    _createClass(ProgressList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.loadPageInfo();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // 定时器
            this.timer = setInterval(function () {
                // 心跳接口 5分钟跳动一个
                _this2.loadPageInfo();
            }, 300000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }

        /* getMyRunningTaskNum =() => {
             this.store.currentTaskParams.state = 2;
             this.store.getCurrentTaskList();
         }*/

    }, {
        key: 'render',
        value: function render() {
            var activeKey = this.state.activeKey;

            var extraContent = _react2.default.createElement(_SearchGroup2.default, { onSearch: this.onSearch });

            return _react2.default.createElement(
                'div',
                { className: 'w h' },
                _react2.default.createElement(
                    _antd.Row,
                    { className: 'w', style: { height: '66.6%' } },
                    _react2.default.createElement(
                        _antd.Col,
                        { id: 'tabpane', style: { height: '100%' }, span: 18 },
                        _react2.default.createElement(
                            _antd.Tabs,
                            { style: { padding: '0 5px' }, className: 'h bg_fff progress_tabs', tabBarExtraContent: extraContent, activeKey: activeKey, onChange: this.tabsOnchange },
                            _react2.default.createElement(
                                TabPane,
                                {
                                    tab: _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u8FDB\u5C55'
                                    ),
                                    className: 'h',
                                    key: '0' },
                                _react2.default.createElement(_Progress2.default, { store: this.store, data: this.store.projectBoardList })
                            ),
                            _react2.default.createElement(
                                TabPane,
                                {
                                    tab: _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u660E\u7EC6'
                                    ),
                                    className: 'h',
                                    key: '1' },
                                _react2.default.createElement(_DetailsList2.default, { store: this.store, totalCount: this.store.allProjectTotal, data: this.store.allProjectList })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Col,
                        { style: { height: '100%', paddingLeft: '5px' }, span: 6 },
                        _react2.default.createElement(
                            _antd.Card,
                            { bordered: false, title: '\u8FDB\u5EA6\u5EF6\u8FDF\u9884\u8B66', className: 'bpm_card h', style: { height: '50%' } },
                            _react2.default.createElement(_WarningList2.default, { store: this.store, totalCount: this.store.currentTaskTotal, data: this.store.dealyWarnningList })
                        ),
                        _react2.default.createElement(
                            _antd.Card,
                            { bordered: false, title: '\u4EA4\u4ED8\u5B8C\u6210\u7387', className: 'bpm_card mt5', style: { height: "calc(50% - 5px)" } },
                            _react2.default.createElement(_RateCharts2.default, { title: '\u4EA4\u4ED8\u5B8C\u6210\u7387', rateNum: this.store.deliverRate || 0 })
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Row,
                    { className: 'w', style: { height: '33.3%', paddingTop: '5px' } },
                    _react2.default.createElement(
                        _antd.Col,
                        { style: { padding: '0', height: '100%' }, span: 18 },
                        _react2.default.createElement(
                            _antd.Col,
                            { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, style: { height: '100%' } },
                            _react2.default.createElement(
                                _antd.Card,
                                { bordered: false, title: '\u5404\u4EA7\u54C1\u5360\u6BD4', className: 'bpm_card h' },
                                _react2.default.createElement(_ProductCycle2.default, { data: this.store.productProportion })
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, style: { height: '100%', paddingLeft: '5px' } },
                            _react2.default.createElement(
                                _antd.Card,
                                { bordered: false, title: '\u9879\u76EE\u8BA2\u5355\u6392\u540D', className: 'bpm_card h' },
                                _react2.default.createElement(_Top5List2.default, { data: this.store.topContractAmount })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Col,
                        { style: { height: '100%', paddingLeft: '5px' }, span: 6 },
                        _react2.default.createElement(
                            _antd.Col,
                            { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, style: { height: '100%' } },
                            _react2.default.createElement(
                                _antd.Card,
                                { bordered: false, title: '\u56DE\u6B3E\u5B8C\u6210\u7387', className: 'bpm_card h' },
                                _react2.default.createElement(_RateCharts2.default, { title: '\u56DE\u6B3E\u5B8C\u6210\u7387', rateNum: this.store.moneyBackRate || 0 })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ProgressList;
}(_react2.default.Component)) || _class) || _class;

exports.default = ProgressList;

/***/ })

});
//# sourceMappingURL=2-afa7d4b4bae6ff2924e9.1629092961041.js.map