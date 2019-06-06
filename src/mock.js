import Mock from "mockjs";
Mock.mock("mock/indexList", {
  "list|5": [
    //随机返回5项
    {
      pic: "@dataImage('132x101', '@cname')",
      title:"@csentence(11, 15)",
      disc:"@csentence"
    }
  ]
});
//新闻三个接口
Mock.mock("mock/newsList", {
  "list|3": [
    //随机返回3项
    {
      pic: "@dataImage('132x100', '@cname')",
      title:"@csentence(5, 10)",
      disp:"@csentence(20, 25)",
      time:"@date",
      content:"@cparagraph(10, 30)"
    }
  ]
});
Mock.mock("mock/mList", {
  "list|3": [
    //随机返回3项
    {
      pic: "@dataImage('132x100', '@cname')",
      title:"@csentence(5, 10)",
      disp:"@csentence(20, 25)",
      time:"@date",
      content:"@cparagraph(10, 30)"
    }
  ]
});
Mock.mock("mock/sList", {
  "list|3": [
    //随机返回3项
    {
      pic: "@dataImage('132x100', '@cname')",
      title:"@csentence(5, 10)",
      disp:"@csentence(20, 25)",
      time:"@date",
      content:"@cparagraph(10, 30)"
    }
  ]
});
//成长接口
Mock.mock("mock/growList", {
  "list|20": [
    //随机返回20项
    {
    	userpic: "@dataImage('40x40', '@cname')",
      pic: "@dataImage('355x236', '@ctitle')",
      name:"@cname",
      disp:"@csentence(20, 25)",
      time:'@time("A H:m")',
      week:'@cword("一二三四五六日",1,1)',
      prise:'@integer(1, 30)',
      diss:'@integer(20, 50)',
      share:'@integer(60, 100)'
    }
  ]
});
//全球购接口
Mock.mock("mock/earthbuyList", {
  "list|20": [
    //随机返回20项
    {
    	proimg: "@dataImage('150x150', '@cname')",
      protitle:"@ctitle(15, 18)",
      proprice:'@float(60, 100, 0, 1)',
      buyednum:'@integer(1, 1000)',
      id:'@integer(1, 100)'
    }
  ]
});
//产品详情接口
Mock.mock("mock/proDetail", {
  "list|1": [
    //随机返回1项
    {
    	"proimg|3":[{img:"@dataImage('375x255', '@province')"}],
    	"userimg|4":[{img:"@dataImage('120x90', '@province')"}],
    	"procolors|4":[{img:"@dataImage('375x255', '@province')"}],
    	header:"@dataImage('30x30', '@cword')",
      protitle:"@ctitle(25, 28)",
      user:"@cname(2, 6)",
      province:"@province",
      city:"@city",
      discuss:"@ctitle(45, 58)",
      prised:'@integer(1, 1000)',
      proprice:'@float(60, 1000, 0, 1)',
      salednum:'@integer(1, 10000)',
      id:'',
      collect:0
    }
  ]
});



