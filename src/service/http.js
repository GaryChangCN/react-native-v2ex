//这里是测试http请求
export const remote="https://www.v2ex.com";

async function baseFetch(path){
	let json=await fetch(remote+path).then((res)=>{
		return res.json();
	})
	return json;
}
//获取最热十条消息
export async function fetchHotList(){
	return await baseFetch("/api/topics/hot.json");
}

//获取最新消息
export async function fetchLastList(){
	// let res= await baseFetch("/api/topics/latest.json");
	// return res.map((item)=>{
	// 	let {id,title,url,content,replies,member}=item;
	// 	return{
	// 		id,title,url,content,replies,
	// 		member:{
	// 			id:member.id,
	// 			username:member.username,
	// 			"avatar_normal":member["avatar_normal"]
	// 		}
	// 	}
	// });
	return [{
		"id": 364703,
		"title": "Google play 可以访问",
		"url": "http://www.v2ex.com/t/364703",
		"content": "速度嗖嗖的，gmail 和搜索还是没用\r\nhttps://play.google.com",
		"replies": 13,
		"member": {
			"id": 68675,
			"username": "taodongxu",
			"avatar_normal": "//v2ex.assets.uxengine.net/gravatar/865d8a82119810180de4fcd69e7b7424?s=48&d=retro"
		}
	},{
		"id": 364703,
		"title": "Google play 可以访问",
		"url": "http://www.v2ex.com/t/364703",
		"content": "速度嗖嗖的，gmail 和搜索还是没用\r\nhttps://play.google.com",
		"replies": 13,
		"member": {
			"id": 68675,
			"username": "taodongxu",
			"avatar_normal": "//v2ex.assets.uxengine.net/gravatar/865d8a82119810180de4fcd69e7b7424?s=48&d=retro"
		}
	}];
}