/* 设置后台项目名称 */
const BASE_URL = '/download';
export default {

    /** Session操作 */
    "login": BASE_URL + '/SessionController/login',
    "adminLogin": BASE_URL + '/SessionController/admin/login',
    /* 登出 */
    "loginOut": BASE_URL + '/SessionController/loginOut',
    /* 获取用户的id */
    "getUserId": BASE_URL + '/SessionController/getUserId',
    /* 获取用户的Name */
    "getUserName": BASE_URL + '/SessionController/getUserName',


    /*后台的URL*/
    /** 资源管理 */

    "addResourceFile": BASE_URL + '/ResourceController/addFile',
    "existResourceFileByName": BASE_URL + '/ResourceController/existFileByName',
    "deleteResourceFileByName": BASE_URL + '/ResourceController/deleteFileByName',
    "getResourceFiles": BASE_URL + '/ResourceController/getFiles',
    "getResourceFileDetails": BASE_URL + '/ResourceController/getFileDetails',
    "getResourceFileDetailByFileName": BASE_URL + '/ResourceController/getFileDetailByFileName',
    "downloadByResourceFileName": BASE_URL + '/ResourceController/downloadByFileName',
    "preByResourceFileName": BASE_URL + '/ResourceController/preByFileName',


    /* Project */
    /* 根据主键更新Project */
    "updateProjectByPrimaryKey": BASE_URL + '/ProjectController/updateByPrimaryKey',
    /* 单条插入Project */
    "insertProject": BASE_URL + '/ProjectController/insert',
    /* 根据主键删除Project */
    "deleteProjectByPrimaryKey": BASE_URL + '/ProjectController/deleteByPrimaryKey',
    /* 分页查询Project */
    "queryBasePageHelperProject": BASE_URL + '/ProjectController/queryBasePageHelper',
    /* 根据主键查询Project */
    "queryProjectByPrimaryKey": BASE_URL + '/ProjectController/queryByPrimaryKey',
    /* 多条件查询Project */
    "queryBaseProject": BASE_URL + '/ProjectController/queryBase',
    /* 批量插入Project */
    "insertsProject": BASE_URL + '/ProjectController/inserts',
    /* 多条件更新Project */
    "updateBaseProject": BASE_URL + '/ProjectController/updateBase',


    /* 执行shell命令 */
    "runDockerShell": BASE_URL + '/DockerShellController/runDockerShell',
    "getDataFromContainer": BASE_URL + '/DockerShellController/getDataFromContainer',
    "getOuterPortainerUrl": BASE_URL + '/DockerShellController/getOuterPortainerUrl',
    "getInnerPortainerUrl": BASE_URL + '/DockerShellController/getInnerPortainerUrl',

    /*构建docker镜像*/
    "buildToDocker": BASE_URL + '/ASPToDockerController/buildToDocker'


}
