const { getData, endpoints } = require = ('../appModules/api');
const staticFile = require("../appModules/http-utils/static-file");


async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.game);
    console.log(data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
