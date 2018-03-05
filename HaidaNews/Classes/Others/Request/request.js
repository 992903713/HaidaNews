//请求文件
var baseRequestAdress = 'http://www.catas.cn';
var jsonRequestAdress = baseRequestAdress + '/appList/getUpOrDownData';//获取新闻json
var modelNameAdress = baseRequestAdress + '/newdefault/getClassName';//获取模块名称
var passageDetailRequestAdress = baseRequestAdress + '/appDetail/IndexJson/';//获取新闻具体内容
var passageImageAdress = baseRequestAdress+'/uploadfiles/smallpic/';//获取新闻
var sliderPassageAdress = baseRequestAdress + '/appList/getScorllPic';//获取轮播图片，此处拼写错误
var searchPassageAdress = baseRequestAdress + '/appList/getSearch';
/*
 * 解析json
 */
function analyzePassageModelData(data)
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
	if(passage.bz4.length > 0)
	{
		this.News_picture = passageImageAdress + passage.bz4;
	}else{
		this.News_picture = null;
	}
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
	if(passage.news_first_pic.length > 0)
	{
		this.news_first_pic = passageImageAdress + passage.news_first_pic;
	}else{
		this.news_first_pic = null;
	}
	this.Class_Name = passage.Class_Name;
	this.sub_class_name = passage.sub_class_name;
	this.news_second_class = passage.news_second_class;
	this.bz1 = passage.bz1;
	this.bz2 = passage.bz2;
	this.bz3 = passage.bz3;
	this.bz4 = passage.bz4;
}

function menuListModel(menuList)
{
	this.linkId = menuList.linkId;
	this.orderId = menuList.orderId;
	this.linkName = menuList.linkName;
	this.linkUrl = menuList.linkUrl;
	this.linkTarget = menuList.linkTarget;
	this.linkPic = menuList.linkPic;
	this.linkClass = menuList.linkClass;
	this.linkSm = menuList.linkSm;
	this.linkBz1 = menuList.linkBz1;
	this.linkBz2 = menuList.linkBz2;
	this.linkBz3 = menuList.linkBz3;

}
function analyzeMenuListModelData(data)
{
	var menuLists = [];
	for (var menuListIndex = 0; menuListIndex < data.length; ++ menuListIndex) {
		var menuList = data[menuListIndex];
		var model = new menuListModel(menuList);
		console.log(model.linkUrl);
		menuLists.push(model); 
	}
	return menuLists;
}

function pictureGroupModel(pictureGroupModel)
{
	this.ID = pictureGroupModel.ID;
	this.BJR = pictureGroupModel.BJR;
	this.BJSJ = pictureGroupModel.BJSJ;
	this.MC = pictureGroupModel.MC;
	this.FLDM1 = pictureGroupModel.FLDM1;
	this.FLDM2 = pictureGroupModel.FLDM2;
	this.FLDM3 = pictureGroupModel.FLDM3;
	this.FJJS = pictureGroupModel.FJJS;
	this.FJ = 'http://www.catas.cn/tpk2016/uploadfiles//' + pictureGroupModel.FJ;
	this.FJ2 = pictureGroupModel.FJ2;
	this.FJ3 = pictureGroupModel.FJ3;
	this.FJ4 = pictureGroupModel.FJ4;
	this.BQ = pictureGroupModel.BQ;
	this.BZ1 = pictureGroupModel.BZ1;
	this.BZ2 = pictureGroupModel.BZ2;
	this.BZ3 = pictureGroupModel.BZ3;
	this.BZ4 = pictureGroupModel.BZ4;

}
function analyzePictureGroupModelData(data)
{
	var pictureGroups = [];
	for (var pictureGroupIndex = 0; pictureGroupIndex < data.length; ++ pictureGroupIndex) {
		var pictureGroup = data[pictureGroupIndex];
		var model = new pictureGroupModel(pictureGroup);
		pictureGroups.push(model); 
	}
	return pictureGroups;
}

