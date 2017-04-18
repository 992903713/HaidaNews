var baseRequestAdress = 'http://www.catas.cn';
var jsonRequestAdress = baseRequestAdress + '/appList/getNextPage';
var modelNameAdress = baseRequestAdress + '/newdefault/getClassName';


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
	//匹配图片
	var imgReg = /<img.*?(?:>|\/>)/gi;
	//匹配src属性 
	var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
	var arr = this.News_Content.match(imgReg);
	if(arr !== null)
	{
		for (var i = 0; i < arr.length ; i++) {
  			var src = arr[i].match(srcReg);
		}
	}
	//此处留下一个bug，一篇文章可能有多张图片
	this.News_picture = (src == undefined)? null:src[1];
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
