import {resolve} from "path";
import {Router} from "express";
import {urlencoded} from "body-parser";
import multer from "multer";
import {SERVER_CONFIG} from "./config";
import {readFileAsync} from "./utils";
const {
	host,
	port
} = SERVER_CONFIG;
const router = Router();
const upload = multer({
	dest: resolve(process.cwd(), "./upload/")
});
const User = {};
router
	.route("/api/get_banner/:type")
	.get(({params, query}, res) => {
		let data = [];
		switch(params.type){
			case "home":
				data = [
					{
						id: "1",
						url: "/images/banner/banner1.png"
					},
					{
						id: "2",
						url: "/images/banner/banner2.png"
					},
					{
						id: "4",
						url: "/images/banner/banner4.png"
					},
					{
						id: "3",
						url: "/images/banner/banner3.png"
					}
				];
				break;
			case "me":
				data = [
					{
						id: "2",
						url: "/images/banner/banner2.png"
					},
					{
						id: "1",
						url: "/images/banner/banner1.png"
					}
				];
		}
		if(query.type === "jsonp"){
			return res.end(`jsonpCallback_${query.id}(${JSON.stringify(data)})`);
		}
		res.set({
			"Access-control-allow-origin": "*"
		}).json({
			code: 0,
			data,
			message: "ok"
		});
	});
router
	.route("/api/house/get")
	.get((req, res) => {
		res.json({
			code: 0,
			data: [
				{
					id: "1234124",
					href: "#",
					title: "东方金融中心1",
					url: "/images/house/1.png",
					price: "9",
					commission: "1",
					type : "众创空间",
					district : "新华",
					distr : "卢浮帝景"
				},
				{
					id: "1234128",
					href: "#",
					title: "诚盈中心",
					url: "/images/house/2.png",
					price: "6",
					commission: "5",
					type : "商务中心",
					district : "穰城",
					distr : "西溪湿地"
				},
				{
					id: "1234129",
					href: "#",
					title: "浦项中心",
					url: "/images/house/3.png",
					price: "3",
					commission: "2",
					type : "创意产业园",
					district : "文化",
					distr : "翡翠城"
				},
				{
					id: "1234124",
					href: "#",
					title: "望京SOHO",
					url: "/images/house/4.png",
					price: "1",
					commission: "1",
					type : "写字楼",
					district : "团结",
					distr : "闲林山水"
				},
				{
					id: "1234128",
					href: "#",
					title: "36氪空间",
					url: "/images/house/5.png",
					price: "2",
					commission: "5",
					type : "工位",
					district : "中华",
					distr : "山水人家"
				},
				{
					id: "1234129",
					href: "#",
					title: "FUNWORK",
					url: "/images/house/6.png",
					price: "7",
					commission: "2",
					type : "整栋",
					district : "古城",
					distr : "古韵于柳"
				}
			],
			message: "ok"
		});
	});
router
	.route("/api/favorite/add")
	.get(({query}, res) => {
		res.json({
			code: [0, 1][+!query.id],
			message: "ok"
		});
	});
router
	.route("/api/favorite/remove")
	.get(({query}, res) => {
		res.json({
			code: [0, 1][+!query.id],
			message: "ok"
		});
	});
router
	.route("/api/requirement/:type")
	.get((req, res) => {
		let data = [
			{
				id: "12342307501",
				title: "一个新的租房需求5",
				type: "1",
				description: "外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼",
				time: Date.now()
			},
			{
				id: "12392307501",
				title: "一个新的租房需求4",
				type: "3",
				description: "内滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼",
				time: Date.now()
			},
			{
				id: "92342307501",
				title: "两个新的租房需求",
				type: "0",
				description: "外滩SOHO，2平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼",
				time: Date.now()
			},
			{
				id: "12395507501",
				title: "一个新的租房需求4",
				type: "3",
				description: "内滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼",
				time: Date.now()
			},
			{
				id: "92348807501",
				title: "三个新的租房需求",
				type: "2",
				description: "外滩SOHO，20平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼，外滩SOHO，200平米写字楼",
				time: Date.now()
			}
		];
		res.json({
			code: 0,
			data,
			message: "ok"
		});
	});
router
	.route("/api/sign_up")
	.post(urlencoded({
		extended: 1
	}), ({body}, res) => {
		User[body.user] = body.password;
		res.json({
			code: 0,
			message: "ok"
		});
	});
router
	.route("/api/sign_in")
	.post(urlencoded({
		extended: 1
	}), ({body, session}, res) => {
		const {
			user,
			password
		} = body;
		if(User[user] === password){
			Object.assign(session, body);
			res.json({
				code: 0,
				data: {
					id: parseInt(Math.random() * 100000),
					name: user,
					url: "/images/house/1.png"
				},
				message: "ok"
			});
		}else{
			res.json({
				code: 1,
				message: "ok"
			});
		}
	});
router
	.route("/api/upload")
	.post(upload.single("test"), ({file}, res) => {
		res.json({
			code: 0,
			file,
			message: "ok"
		});
	});
router
	.route("*")
	.get(async (req, res) => {
		res.end(await readFileAsync("./pages/index.html"));
	});
export default router;