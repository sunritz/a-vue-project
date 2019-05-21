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



