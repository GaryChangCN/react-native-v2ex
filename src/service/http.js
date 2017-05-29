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
	return await baseFetch("/api/topics/latest.json");
}