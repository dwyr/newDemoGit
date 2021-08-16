KindEditor.plugin('multi_image', function (K) {
  var self = this, name = 'multi_image';
  // 点击上传按钮


  self.clickToolbar(name, function () {

    var html = ['<div id="multi-image-box">',
        '<div id="multi-image-div" style="text-align: center;margin: 5px auto;">',
        '</div>',
        '</div>'].join(''),

      dialog = self.createDialog({
        name: name,
        width: 488,
        title: self.lang(name),
        body: html,
        yesBtn: {
          name: self.lang('yes'),
          click: function (e) {
            var img = '';
            var ok = true;
            $("#multi-image-div").find("img").each(function (index, item) {
              var url = $(item).attr("downUrl");
              if (url.indexOf("https") == -1) {
                alert("请等待图片上传完成！");
                ok = false;
                return false;
              } else {
                // 拼接img todo  "?x-oss-process=image/auto-orient,0"+
                img += '<img src="' + url + '"/>';
              }
            });
            if (ok) {
              self.insertHtml(img).hideDialog().focus();
            }
          }
        }
      });

      var getTokenUrl = self.ctx + self.uploadApi;
      $.ajax({
          url: getTokenUrl,
          contentType: "application/json",
          data: JSON.stringify({"query": `query {
			                getPermission
			               }`,
              "variables":{}}),
          type : "POST",
          async: true,
          processData: false,
          success : function (res) {
              var formdata = {}
              var resData = res.data["getPermission"]
              let token = typeof resData == "string" ? JSON.parse(resData) : resData;
              formdata.policy = token.policy;
              formdata.OSSAccessKeyId = token.accessid;
              formdata.success_action_status = '200';
              formdata.signature = token.signature;

              // 调用上传
              $('#multi-image-div').filesUpload({
                  formData: formdata,
                  url: "https://xinlj.oss-cn-beijing.aliyuncs.com",//上传地址
                  multiple: true,  //是否多文件上传
                  accept: 'image/jpg,image/jpeg,image/bmp,image/png', //input accept属性
                  fileTypes:'png,jpg,jpeg,bmp',//文件格式
                  buttonText: '上传图片',  //按钮文字
                  onUploadStart: function(res) { //请求开始

                  },
                  onUploadSuccess: function(res, status, file) { //请求成功

                  },
                  onUploadComplete: function(res, status, file) {//请求完成

                  },
                  onUploadError:function(res, xhr){//请求错误

                  }
              });

          }
      });





     /* $('#multi-image-div').diyUpload({
        url: "https://xinlj.oss-cn-beijing.aliyuncs.com",
        getTokenUrl: getTokenUrl
      });*/
  });
});
