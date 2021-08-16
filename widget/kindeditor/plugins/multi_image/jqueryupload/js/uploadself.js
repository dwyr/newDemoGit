(function($) {
	$.fn.filesUpload = function(opts) {
		var defaults = {
			url: '',
			multiple: true,
			accept: '',
			fileTypes: '',
			buttonText: '选择文件',
			irmeprocess: '<ul class="fileBoxUl"><li id="${fileID}file">' +
				'<div class="progress"><div class="progressbar"></div></div>' +
				'<span class="filename">${fileName}</span><span class="progressnum">0/${fileSize}</span>' +
				'<a class="uploadbtn">上传</a><a class="delfilebtn">删除</a></li></ul>',
			filehtml: '<span class="selfbutton"><span class="selftext"></span><input type="file" id="FileUploadSelf" class="selfinput" /></span>',
			onUploadStart: function() {

			},
			onUploadSuccess: function() {},
			onUploadComplete: function() {},
			onUploadError: function() {},
			onInit: function() {},
		}
		var option = $.extend(defaults, opts);
		var _self = this
		var obj = {
			init: function() {
				_self.append(option.filehtml)
				_self.find(".selftext").text(option.buttonText)
				this.fileInput = _self.find(".selfinput")[0]
				if(option.accept && option.accept != '') {
					_self.find(".selfinput").attr("accept", option.accept)
				}
				if(option.multiple) {
					_self.find(".selfinput").attr("multiple", "multiple")
				}
				this.onChange()
			},
			onChange: function() {
				var that = this
				this.fileInput.addEventListener("change", function(e) {
					var files = e.target.files || e.dataTransfer.files;
					var filterfile = that.filter(files)
					that.upload(filterfile)
				}, false);
			},
			upload: function(files) {
				var html = '',
					that = this,
					timing=new Date().getTime()

				for(var i = 0; i < files.length; i++) {
					//console.log(files[i].size, this.getSize(files[i].size), "测试")
					// 拼接url
					const newkey = 'ZJMZ_OpenPlatform/' + getDate() + "/" + files[i].lastModified+"/"+files[i].name;
					var url = "https://xinlj.oss-cn-beijing.aliyuncs.com/" + newkey
					html += '<div class="fileprocessbox" name="'+timing+i+'">' +
						    '<img width="80" height="80" ' +
						     'src="https://xinlj.oss-cn-beijing.aliyuncs.com/zhijian/static/upload_default.jpg" />'+
						    '<div class="sizetext"><span>' + files[i].name + '\&nbsp;&nbsp;</span><span class="currentsize">0</span>/<span class="size">'
						      + this.getSize(files[i].size) + '</span>' +
						'</div>'
					html += '<div class="fileprocess"><div></div></div>'
					html += '</div>'
				}
				_self.append(html)

				function getDate() {
					 var date = new Date();
					 var year = date.getFullYear();
					 var month = date.getMonth() + 1;
					 var day = date.getDate();
					 if (month < 10) {
						 month = "0" + month;
					 }
					 if (day < 10) {
						 day = "0" + day;
					 }
					 var nowDate = year + "-" + month + "-" + day;
					 return nowDate;
				 }

				for(var j = 0; j < files.length; j++) {
					var formData = new FormData();
					const newkey = 'ZJMZ_OpenPlatform/' + getDate() + "/" + files[j].lastModified+"/"+files[j].name;

					formData.append("key", newkey)
					formData.append("policy", option.formData.policy)
					formData.append("OSSAccessKeyId", option.formData.OSSAccessKeyId)
					formData.append("success_action_status", option.formData.success_action_status)
					formData.append("signature", option.formData.signature)
					formData.append("file", files[j]); //加入文件对象
					var url2 = "https://xinlj.oss-cn-beijing.aliyuncs.com/" + newkey

					that.send(timing, j, formData, url2)

				}

			},
			send:function(timing,index,file, url2){
				var xhr = new XMLHttpRequest();
				if(xhr.upload) {
					xhr.upload.addEventListener("progress", function(e) {
						var percent = (e.loaded / e.total*100).toFixed(2);
						$('.fileprocessbox[name='+(timing+''+index)+']').find(".fileprocess div").width(percent+"%")
						var size=(parseFloat($('.fileprocessbox[name='+(timing+''+index)+']').find(".size").text())*percent/100).toFixed(2)
						var texts=$('.fileprocessbox[name='+(timing+''+index)+']').find(".size").text()
						var unit=texts.replace(/\d+(\.\d+)/g,'')
						$('.fileprocessbox[name='+(timing+''+index)+']').find(".currentsize").text(size+unit)
						if (parseInt(percent)==100) {  // 上传完成时
							$('.fileprocessbox[name='+(timing+''+index)+']').find("img").attr("downUrl", url2)
						}
					}, false);
					xhr.onreadystatechange = function(e) {
						if(xhr.readyState == 4) {
							if(xhr.status == 200) {

								option.onUploadSuccess(xhr, xhr.responseText, file);
								option.onUploadComplete(xhr, xhr.responseText, file);
							} else {
								option.onUploadError(xhr);
							}
							var FileUploadSelf = document.getElementById('FileUploadSelf');
							FileUploadSelf.value = ''
						}
					};
					option.onUploadStart();
					xhr.open("POST", option.url, true);
					xhr.send(file);
				}
			},
			getSize: function(size) {
				var s
				if(size < 1024) {
					s = size + "B"
				} else {
					s = size / 1024 >= 1024 ? (size / 1048576).toFixed(2) + 'M' : (size / 1024).toFixed(2) + "KB"
				}
				return s
			},
			filter: function(files) {
				var fileType = option.fileTypes ? option.fileTypes.split(",") : '',
					result = []
				if(fileType) {
					for(var i = 0; i < files.length; i++) {
						if(fileType.indexOf(files[i].type.split("/")[1]) > -1) {
							// 处理图片大小 size
							if (files[i].size<20971520) { // 大于等于20M
								result.push(files[i])
							} else {
								alert(files[i].name+" 超过20M，请在附件上传! ");
							}
						} else {
							result = []
							alert("上传类型不对！")
							break;
							return false;
						}
					}
				} else {
					result = files
				}
				return result
			}
		}
		obj.init()
	}
})(jQuery)
