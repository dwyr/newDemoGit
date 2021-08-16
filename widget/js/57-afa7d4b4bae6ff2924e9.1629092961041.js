webpackJsonp([57],{

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * 经营看板首页大屏
                  * dangw@glogon.cpm
                  * */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(17);

var _echartsForReact = __webpack_require__(234);

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

var _mobx = __webpack_require__(12);

var mobx = _interopRequireWildcard(_mobx);

var _moment = __webpack_require__(35);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(32);

var _mobxReact = __webpack_require__(22);

var _screenfull = __webpack_require__(753);

var _screenfull2 = _interopRequireDefault(_screenfull);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BigScreen = (_dec = (0, _mobxReact.inject)('kanbanStore'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(BigScreen, _React$Component);

	function BigScreen(props) {
		_classCallCheck(this, BigScreen);

		var _this2 = _possibleConstructorReturn(this, (BigScreen.__proto__ || Object.getPrototypeOf(BigScreen)).call(this, props));

		_this2.screenfullToggle = function () {
			if (_screenfull2.default.enabled) {
				_screenfull2.default.toggle();
			}
		};

		_this2.queryCharts = function (classifyId, type) {
			var param = {
				classifyId: classifyId,
				type: 0
			};
			_this2.props.kanbanStore.getPermissionByClassifyId(param).then(function (res) {
				_this2.setState(_defineProperty({}, type, res));
			});
		};

		_this2.onChartClick = function (type, e) {
			var _this = _this2;
			var name = e.name;

			var data = {
				'1月': '01',
				'2月': '02',
				'3月': '03',
				'4月': '04',
				'5月': '05',
				'6月': '06',
				'7月': '07',
				'8月': '08',
				'9月': '09',
				'10月': '10',
				'11月': '11',
				'12月': '12'
			};
			if (type == '1') {
				// 统一处理日期
				var month = name && name.slice(-2);
				// 合同
				_this.props.history.push('/kanban/htqk?type=home&key=1&id=12&month=' + month);
			} else if (type == '2') {
				var _month = data[name];
				// 商机
				_this.props.history.push('/kanban/sjqk?type=home&key=1&id=21&month=' + _month);
			} else if (type == '3') {
				var _month2 = data[name];
				// 营业收入
				_this.props.history.push('/kanban/yysr?type=home&key=1&id=14&month=' + _month2);
			} else if (type == '4') {
				var _month3 = data[name];
				// 项目情况
				_this.props.history.push('/kanban/xmqk?type=home&key=1&id=31&month=' + _month3);
			} else if (type == '5') {
				var _month4 = data[name];
				// 人员
				_this.props.history.push('/kanban/ryqk?type=home&key=1&id=41&month=' + _month4);
			} else if (type == '6') {
				var seriesName = e.seriesName;

				var _month5 = data[name];
				var _this2$state = _this2.state,
				    rlState = _this2$state.rlState,
				    jcState = _this2$state.jcState,
				    zxState = _this2$state.zxState;

				if (seriesName == "人力成本") {
					if (rlState) {
						_this.props.history.push('/kanban/rlcb?type=home&key=1&id=13&month=' + _month5);
					} else {
						return false;
					}
				} else if (seriesName == "专项费用") {
					if (zxState) {
						_this.props.history.push('/kanban/zxfy?type=home&key=1&id=15&month=' + _month5);
					} else {
						return false;
					}
				} else if (seriesName == "基础费用") {
					if (jcState) {
						_this.props.history.push('/kanban/jcfy?type=home&key=1&id=16&month=' + _month5);
					} else {
						return false;
					}
				}
			}
		};

		_this2.handleCheck = function () {
			//this.screenfullToggle();
			var url = window.location.origin + window.location.pathname + "/#/bigScreenTwo";
			var win = window.open(url, '_blank');
			win.focus();

			/*this.setState({
   	visible: true
   })*/
		};

		_this2.handleCancel = function () {
			_this2.setState({
				visible: false
			});
		};

		_this2.state = {
			max: '', // 商机
			dataShadow: [],
			htMax: '', // 合同
			htDataShadow: [],
			srMax: '', // 营业收入
			srDataShadow: [],
			xmMax: '', // 项目情况
			xmDataShadow: [],
			ryMax: '', // 人员情况
			ryDataShadow: [],
			fyMax: '', // 月度费用
			fyDataShadow: [],
			visible: false,
			htState: false, //合同权限
			sjState: false, //商机权限
			srState: false, //营业收入权限
			xmState: false, //项目情况权限
			rfState: false, //人员权限
			rlState: false, //人力成本权限
			jcState: false, //基础费用权限
			zxState: false //专项费用权限
		};
		return _this2;
	}

	_createClass(BigScreen, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextContext) {

			/*if (nextProps.yysrChartData) {  //营业收入
   	// 处理数据
   	let array = [];
   	mobx.toJS(nextProps.yysrChartData).series && mobx.toJS(nextProps.yysrChartData).series.map((item, index) => {
   		array = array.concat(item.value)
   	})
   	let newArray = Array.from(new Set(array));
   	this.setState({
   			srMax: Math.max(...newArray),
   		},
   		() => {
   				var yMax = this.state.srMax;
   			var dataShadow = [];
   			var len = mobx.toJS(nextProps.yysrChartData).category && mobx.toJS(nextProps.yysrChartData).category.length;
   				for (var i = 0; i < len; i++) {
   				dataShadow.push(yMax);
   			}
   			this.setState({
   				srDataShadow: dataShadow
   			})
   		});
   }
   	if (nextProps.ydsjChartData) {  // 商机
   	// 处理数据
   	let array = [];
   	mobx.toJS(nextProps.ydsjChartData).series && mobx.toJS(nextProps.ydsjChartData).series.map((item, index) => {
   		array = array.concat(item.value)
   	})
   	let newArray = Array.from(new Set(array));
   	this.setState({
   			max: Math.max(...newArray),
   		},
   		() => {
   				var yMax = this.state.max;
   			var dataShadow = [];
   			var len = mobx.toJS(nextProps.ydsjChartData).category && mobx.toJS(nextProps.ydsjChartData).category.length;
   				for (var i = 0; i < len; i++) {
   				dataShadow.push(yMax);
   			}
   			this.setState({
   				dataShadow
   			})
   		});
   }
   	if (nextProps.ydxmChartData) {  // 项目情况
   	// 处理数据
   	let array = [];
   	mobx.toJS(nextProps.ydxmChartData).series && mobx.toJS(nextProps.ydxmChartData).series.map((item, index) => {
   		array = array.concat(item.value)
   	})
   	let newArray = Array.from(new Set(array));
   	this.setState({
   			xmMax: Math.max(...newArray),
   		},
   		() => {
   				var yMax = this.state.xmMax;
   			var dataShadow = [];
   			var len = mobx.toJS(nextProps.ydxmChartData).category && mobx.toJS(nextProps.ydxmChartData).category.length;
   				for (var i = 0; i < len; i++) {
   				dataShadow.push(yMax);
   			}
   			this.setState({
   				xmDataShadow: dataShadow
   			})
   		});
   }
   	if (nextProps.ydryChartData) {  // 人员情况
   	// 处理数据
   	let array = [];
   	mobx.toJS(nextProps.ydryChartData).series && mobx.toJS(nextProps.ydryChartData).series.map((item, index) => {
   		array = array.concat(item.value)
   	})
   	let newArray = Array.from(new Set(array));
   	this.setState({
   			ryMax: Math.max(...newArray)
   		},
   		() => {
   				var yMax = this.state.ryMax;
   			var dataShadow = [];
   			var len = mobx.toJS(nextProps.ydryChartData).category && mobx.toJS(nextProps.ydryChartData).category.length;
   				for (var i = 0; i < len; i++) {
   				dataShadow.push(yMax);
   			}
   			this.setState({
   				ryDataShadow: dataShadow
   			})
   		});
   }
   	if (nextProps.ydfyChartData) {  // 月度费用
   	// 处理数据
   	let array = [];
   	mobx.toJS(nextProps.ydfyChartData).series && mobx.toJS(nextProps.ydfyChartData).series.map((item, index) => {
   		array = array.concat(item.value)
   	})
   	let newArray = Array.from(new Set(array));
   	this.setState({
   			fyMax: Math.max(...newArray)
   		},
   		() => {
   				var yMax = this.state.fyMax;
   			var dataShadow = [];
   			var len = mobx.toJS(nextProps.ydfyChartData).category && mobx.toJS(nextProps.ydfyChartData).category.length;
   				for (var i = 0; i < len; i++) {
   				dataShadow.push(yMax);
   			}
   			this.setState({
   				fyDataShadow: dataShadow
   			})
   		});
   }*/

		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// 查询是否有权限
			this.queryCharts("12", "htState");
			this.queryCharts("21", "sjState");
			this.queryCharts("14", "srState");
			this.queryCharts("31", "xmState");
			this.queryCharts("41", "rfState");
			this.queryCharts("13", "rlState");
			this.queryCharts("16", "jcState");
			this.queryCharts("15", "zxState");
		}

		// 查询权限


		// 全屏切换


		// 退出全屏

	}, {
		key: 'render',
		value: function render() {
			var htMax = this.state.htMax;

			var option1 = {
				color: ['#3398DB', 'rgb(255, 184, 0)'],
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					top: '25px',
					left: '10px',
					right: '10px',
					bottom: '0',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(this.props.monthChartData).category && mobx.toJS(this.props.monthChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					//设置坐标轴字体颜色和宽度
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					min: 0,
					max: htMax,
					position: 'left',
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					//网格样式
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(this.props.monthChartData).series && mobx.toJS(this.props.monthChartData).series.filter(function (res) {
					return res.name !== "当期目标";
				}).map(function (item) {
					if (item.name == "实际完成") {
						return {
							name: item.name,
							type: 'bar',
							data: item.value,
							barMinHeight: 3, // 显示默认高 3
							barWidth: '40%',
							itemStyle: {
								emphasis: {
									barBorderRadius: 3
								},
								normal: {
									barBorderRadius: 3
								}
							}
						};
					}
					if (item.name == "比率") {
						return {
							name: item.name,
							type: 'line',
							data: item.value,
							yAxisIndex: 1
						};
					}
				})
			};
			var option2 = {
				color: ['#3398DB'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '25px',
					left: '10px',
					right: '10px',
					bottom: '15px',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(this.props.yysrChartData).category && mobx.toJS(this.props.yysrChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					//设置坐标轴字体颜色和宽度
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					//网格样式
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(this.props.yysrChartData).series && mobx.toJS(this.props.yysrChartData).series.map(function (item) {
					return {
						name: item.name,
						type: 'bar',
						data: item.value,
						barMinHeight: 3, // 显示默认高 3
						barWidth: 10,
						itemStyle: {
							emphasis: {
								barBorderRadius: 3
							},
							normal: {
								barBorderRadius: 3
							}
						}
					};
				})

			};
			var option3 = {
				color: ['#44A0FF', '#A3D4FF', '#F7B964'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '25px',
					left: '10px',
					right: '10px',
					bottom: '35px',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(this.props.ydfyChartData).series && mobx.toJS(this.props.ydfyChartData).series.map(function (item) {
						return item.name;
					}),
					y: 'bottom',
					textStyle: {
						color: "#fff"
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(this.props.ydfyChartData).category && mobx.toJS(this.props.ydfyChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					//设置坐标轴字体颜色和宽度
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					//网格样式
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(this.props.ydfyChartData).series && mobx.toJS(this.props.ydfyChartData).series.map(function (item) {
					return {
						name: item.name,
						type: 'bar',
						data: item.value,
						barMinHeight: 3, // 显示默认高 3
						barWidth: 6,
						itemStyle: {
							emphasis: {
								barBorderRadius: 3
							},
							normal: {
								barBorderRadius: 3
							}
						},
						markLine: item.name == "人力成本" ? {
							itemStyle: {
								normal: {
									lineStyle: {
										type: 'dashed'
									}
								}
							},
							data: [[{ type: 'min' }, { type: 'max' }]]
						} : null
					};
				})
			};
			var option4 = {
				color: ['#44A0FF', '#A3D4FF', '#F7B964'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '25px',
					left: '10px',
					right: '10px',
					bottom: '0',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(this.props.ydsjChartData).category && mobx.toJS(this.props.ydsjChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					//设置坐标轴字体颜色和宽度
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					//网格样式
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(this.props.ydsjChartData).series && mobx.toJS(this.props.ydsjChartData).series.map(function (item) {
					return {
						name: item.name,
						type: 'bar',
						data: item.value,
						barMinHeight: 3, // 显示默认高 3
						barWidth: 10,
						itemStyle: {
							emphasis: {
								barBorderRadius: 3
							},
							normal: {
								barBorderRadius: 3
							}
						}
					};
				})
			};
			var option5 = {
				color: ['#44A0FF', '#A3D4FF', '#F7B964'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '25px',
					left: '10px',
					right: '10px',
					bottom: '35px',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(this.props.ydxmChartData).series && mobx.toJS(this.props.ydxmChartData).series.map(function (item) {
						return item.name;
					}),
					y: 'bottom',
					textStyle: {
						color: "#fff"
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(this.props.ydxmChartData).category && mobx.toJS(this.props.ydxmChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					//设置坐标轴字体颜色和宽度
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					//网格样式
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(this.props.ydxmChartData).series && mobx.toJS(this.props.ydxmChartData).series.map(function (item) {
					return {
						name: item.name,
						data: item.value,
						stack: "区域",
						barMinHeight: 3, // 显示默认高 3
						type: 'bar',
						barWidth: '45%',
						itemStyle: {
							emphasis: {
								barBorderRadius: 1.5
							},
							normal: {
								barBorderRadius: 1.5
							}
						}
					};
				})
			};
			var option6 = {
				color: ['#44A0FF', '#A3D4FF', '#F7B964'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					top: '25px',
					left: '10px',
					right: '10px',
					bottom: '35px',
					containLabel: true
				},
				legend: {
					data: mobx.toJS(this.props.ydryChartData).series && mobx.toJS(this.props.ydryChartData).series.map(function (item) {
						return item.name;
					}),
					y: 'bottom',
					textStyle: {
						color: "#fff"
					}
				},
				xAxis: [{
					type: 'category',
					data: mobx.toJS(this.props.ydryChartData).category && mobx.toJS(this.props.ydryChartData).category,
					axisTick: {
						alignWithLabel: true
					},
					//设置坐标轴字体颜色和宽度
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				}],
				yAxis: [{
					type: 'value',
					scale: true,
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						}
					},
					axisTick: {
						show: false
					},
					//网格样式
					splitLine: {
						show: true,
						lineStyle: {
							color: ['#46596B'],
							width: 1,
							type: 'solid'
						}
					}
				}],
				series: mobx.toJS(this.props.ydryChartData).series && mobx.toJS(this.props.ydryChartData).series.map(function (item) {
					return {
						name: item.name,
						data: item.value,
						stack: "区域",
						type: 'bar',
						barWidth: '45%',
						barMinHeight: 3, // 显示默认高 3
						itemStyle: {
							emphasis: {
								barBorderRadius: 1.5
							},
							normal: {
								barBorderRadius: 1.5
							}
						}
					};
				})

			};

			var _state = this.state,
			    htState = _state.htState,
			    sjState = _state.sjState,
			    srState = _state.srState,
			    xmState = _state.xmState,
			    rfState = _state.rfState,
			    rlState = _state.rlState,
			    jcState = _state.jcState,
			    zxState = _state.zxState;


			return _react2.default.createElement(
				'div',
				{ className: 'bigScreen' },
				_react2.default.createElement(_antd.Icon, {
					title: "全屏显示",
					type: 'fullscreen',
					onClick: this.handleCheck,
					className: this.state.visible ? "hidden" : "bigScreen_icon"
				}),
				_react2.default.createElement(
					_antd.Row,
					{ gutter: 24, style: { padding: '10px 10px 50px' } },
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							_antd.Card,
							{ className: 'bigScreen_card1', bordered: false },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20 color_fff' },
								'\u8D22\u52A1\u60C5\u51B5\u603B\u89C8\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
							),
							_react2.default.createElement(
								'table',
								{ className: 'gridtable' },
								_react2.default.createElement(
									'tbody',
									null,
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u8425\u4E1A\u6536\u5165'
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u8425\u4E1A\u6210\u672C'
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u6BDB\u5229'
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u8D39\u7528'
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u51C0\u5229\u6DA6'
										)
									),
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].yysr
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].yycb
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].ml
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].fy
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.data1).length > 0 && mobx.toJS(this.props.data1)[0].jlr
										)
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Card,
							{ className: 'mt10 bigScreen_card3', bordered: false },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20 color_fff' },
								'\u6708\u5EA6\u8425\u4E1A\u6536\u5165\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
							),
							_react2.default.createElement(_echartsForReact2.default, { option: option2,
								onEvents: srState ? {
									'click': this.onChartClick.bind(this, '3')
								} : null,
								notMerge: true,
								lazyUpdate: true,
								style: { height: '190px' } })
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							_antd.Card,
							{ className: 'bigScreen_card2', bordered: false },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20 color_fff' },
								'\u6708\u5EA6\u5408\u540C\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
							),
							_react2.default.createElement(
								'table',
								{ className: 'gridtable' },
								_react2.default.createElement(
									'tbody',
									null,
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'td',
											{ rowSpan: 2, style: { verticalAlign: 'middle' }, className: 'fwb' },
											'\u5408\u540C\u60C5\u51B5'
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u5E74\u5EA6\u76EE\u6807'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.monthData).length > 0 && mobx.toJS(this.props.monthData)[0].totalYearTarget
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u5B9E\u9645\u7D2F\u8BA1'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.monthData).length > 0 && mobx.toJS(this.props.monthData)[0].totalYearActual
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u5B8C\u6210\u7387'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.monthData).length > 0 && mobx.toJS(this.props.monthData)[0].totalCurrentTarget
										)
									),
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u672C\u671F\u76EE\u6807'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.monthData).length > 0 && mobx.toJS(this.props.monthData)[0].yearRate
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u672C\u671F\u5B9E\u9645'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.monthData).length > 0 && mobx.toJS(this.props.monthData)[0].currentRate
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u5B8C\u6210\u7387'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.monthData).length > 0 && mobx.toJS(this.props.monthData)[0].totalCurrentActual
										)
									)
								)
							),
							_react2.default.createElement(_echartsForReact2.default, { option: option1,
								onEvents: htState ? {
									'click': this.onChartClick.bind(this, '1')
								} : null,
								notMerge: true,
								lazyUpdate: true,
								style: { height: '260px' } })
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, className: 'mt10 mb10' },
						_react2.default.createElement(
							_antd.Card,
							{ className: 'bigScreen_card2', bordered: false },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20 color_fff' },
								'\u6708\u5EA6\u8D39\u7528\u6784\u6210\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4E07\u5143\uFF09'
							),
							_react2.default.createElement(_echartsForReact2.default, { option: option3,
								onEvents: {
									'click': this.onChartClick.bind(this, '6')
								},
								notMerge: true,
								lazyUpdate: true,
								style: { height: '330px' } })
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, className: 'mt10 mb10' },
						_react2.default.createElement(
							_antd.Card,
							{ className: 'bigScreen_card2', bordered: false },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20 color_fff' },
								'\u6708\u5EA6\u5546\u673A\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u5BB6\uFF09'
							),
							_react2.default.createElement(_echartsForReact2.default, { option: option4,
								onEvents: sjState ? {
									'click': this.onChartClick.bind(this, '2')
								} : null,
								notMerge: true,
								lazyUpdate: true,
								style: { height: '330px' } })
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							_antd.Card,
							{ className: 'bigScreen_card2', bordered: false },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20 color_fff' },
								'\u6708\u5EA6\u9879\u76EE\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u5BB6\uFF09'
							),
							_react2.default.createElement(
								'table',
								{ className: 'gridtable' },
								_react2.default.createElement(
									'tbody',
									null,
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'td',
											{ rowSpan: 2, style: { verticalAlign: 'middle' }, className: 'fwb' },
											'\u9879\u76EE\u60C5\u51B5'
										),
										_react2.default.createElement(
											'td',
											{ colSpan: 6 },
											(0, _moment2.default)().year(),
											'\u5E74'
										)
									),
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u7D2F\u8BA1\u9879\u76EE\u603B\u6570'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.ydxmData).length > 0 && mobx.toJS(this.props.ydxmData)[0].total
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u5DF2\u4EA4\u4ED8\u9879\u76EE\u6570'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.ydxmData).length > 0 && mobx.toJS(this.props.ydxmData)[0].finish
										),
										_react2.default.createElement(
											'td',
											{ className: 'fwb' },
											'\u5F85\u4EA4\u4ED8\u9879\u76EE\u6570'
										),
										_react2.default.createElement(
											'td',
											null,
											mobx.toJS(this.props.ydxmData).length > 0 && mobx.toJS(this.props.ydxmData)[0].wait
										)
									)
								)
							),
							_react2.default.createElement(_echartsForReact2.default, { option: option5,
								onEvents: xmState ? {
									'click': this.onChartClick.bind(this, '4')
								} : null,
								notMerge: true,
								lazyUpdate: true,
								style: { height: '260px' } })
						)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 12 },
						_react2.default.createElement(
							_antd.Card,
							{ className: 'bigScreen_card2', bordered: false },
							_react2.default.createElement(
								'h3',
								{ className: 'kanban_title mb20 color_fff' },
								'\u6708\u5EA6\u4EBA\u5458\u60C5\u51B5\uFF08\u5355\u4F4D\uFF1A\u4EBA\uFF09'
							),
							_react2.default.createElement(_echartsForReact2.default, { option: option6,
								onEvents: rfState ? {
									'click': this.onChartClick.bind(this, '5')
								} : null,
								notMerge: true,
								lazyUpdate: true,
								style: { height: '330px' } })
						)
					)
				)
			);
		}
	}]);

	return BigScreen;
}(_react2.default.Component)) || _class) || _class);
exports.default = (0, _reactRouterDom.withRouter)(BigScreen);

/***/ })

});
//# sourceMappingURL=57-afa7d4b4bae6ff2924e9.1629092961041.js.map