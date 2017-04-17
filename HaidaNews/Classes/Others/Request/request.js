var baseRequestAdress = 'http://www.catas.cn';
var jsonRequestAdress = baseRequestAdress + '/appList/getNextPage';
var modelNameAdress = baseRequestAdress + '/newdefault/getClassName';

function jsonNewsRequest(url,params)
{
	
	var classid = params.classid;
	var passage_number = params.passage_number;
	console.log(passage_number);
	//向服务器发送请求
	console.log(url);
	url = url + '?' + 'classid='+classid + '&' +'p='+ passage_number;
	console.log(url);
	mui.ajax(url,{
//		data:{
//			classid:'34',
//			p:'2'
//		},
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{'Content-Type':'application/json'},	              
		success:function(data){
		//服务器返回响应，根据响应结果，分析是否登录成功；
			return analyzeJsonData(data);
		},
		error:function(xhr,type,errorThrown){
			//异常处理；
			console.log(type);
		}
	});
}
function modelNameNewsRequest(url,params)
{
	
}

/*
 * 解析json
 */
function analyzeJsonData(data)
{
	var passages = [];
	for (var passageIndex = 0; passageIndex < data.length; ++ passageIndex) {
		var passage = data[passageIndex];
		var model = new passageModel(passage);
		passages.push(model);
	}
	return passages;
}
function passageModel(passage)
{
	this.NewsID = passage.NewsID;
	this.News_Class = passage.News_Class;
	this.News_Banner = passage.News_Banner;
	this.News_Title = passage.News_Title;
	this.News_Author = passage.News_Author;
	this.News_Content = passage.News_Content;
	this.News_picture = this.News_Content.match(/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/);//新闻图片
	console.log(this.News_picture);
	this.News_Freind = passage.News_Freind;//这里json拼写错误
	this.News_Link = passage.News_Link;
	this.News_Click = passage.News_Click;
	this.News_Image = passage.News_Image;
	this.News_Post_IP = passage.News_Post_IP;
	this.News_Time = passage.News_Time;
	this.News_Post_Time = passage.News_Post_Time;
	this.Tag = passage.Tag;
	this.User_Name = passage.User_Name;
	this.Advise = passage.Advise;
	this.SetTop = passage.SetTop;
	this.UserID = passage.UserID;
	this.News_AdminID = passage.News_AdminID;
	this.Title_Color = passage.Title_Color;
	this.news_first_pic = passage.news_first_pic;
	this.Class_Name = passage.Class_Name;
	this.sub_class_name = passage.sub_class_name;
	this.news_second_class = passage.news_second_class;
	this.bz1 = passage.bz1;
	this.bz2 = passage.bz2;
	this.bz3 = passage.bz3;
	this.bz4 = passage.bz4;
}
