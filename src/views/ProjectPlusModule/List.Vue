<template>
    <div class="app-container">
        <div class="mt20">
            <el-form :inline="true" size="mini">
                <el-form-item label="id">
                    <el-input v-model="search.id" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="criteriaid">
                    <el-input v-model="search.criteriaid" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectName">
                    <el-input v-model="search.projectName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectUpdateTime">
                    <el-input v-model="search.projectUpdateTime" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectType">
                    <el-input v-model="search.projectType" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectPrice">
                    <el-input v-model="search.projectPrice" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectPackageType">
                    <el-input v-model="search.projectPackageType" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectPanAddress">
                    <el-input v-model="search.projectPanAddress" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectRealFileName">
                    <el-input v-model="search.projectRealFileName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectHtmlBody">
                    <el-input v-model="search.projectHtmlBody" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectSourceUrl">
                    <el-input v-model="search.projectSourceUrl" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectLanguage">
                    <el-input v-model="search.projectLanguage" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectSize2">
                    <el-input v-model="search.projectSize2" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectSizeNum">
                    <el-input v-model="search.projectSizeNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectSizeType">
                    <el-input v-model="search.projectSizeType" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectImgs">
                    <el-input v-model="search.projectImgs" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectImgsDefault">
                    <el-input v-model="search.projectImgsDefault" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectRuntime">
                    <el-input v-model="search.projectRuntime" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectOfficialWebsite">
                    <el-input v-model="search.projectOfficialWebsite" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectShowWebsite">
                    <el-input v-model="search.projectShowWebsite" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectDownloadUrls">
                    <el-input v-model="search.projectDownloadUrls" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectDownloadSum">
                    <el-input v-model="search.projectDownloadSum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectIntroduction">
                    <el-input v-model="search.projectIntroduction" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectStatus">
                    <el-input v-model="search.projectStatus" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectMark">
                    <el-input v-model="search.projectMark" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectCanRunning">
                    <el-input v-model="search.projectCanRunning" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerImageName">
                    <el-input v-model="search.dockerImageName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerImageShellRemove">
                    <el-input v-model="search.dockerImageShellRemove" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerStatus">
                    <el-input v-model="search.dockerStatus" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerId">
                    <el-input v-model="search.dockerContainerId" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerName">
                    <el-input v-model="search.dockerContainerName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerPort">
                    <el-input v-model="search.dockerContainerPort" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerShellCreate">
                    <el-input v-model="search.dockerContainerShellCreate" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerShellRun">
                    <el-input v-model="search.dockerContainerShellRun" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerShellStop">
                    <el-input v-model="search.dockerContainerShellStop" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerShellRemove">
                    <el-input v-model="search.dockerContainerShellRemove" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="addressContainerOuter">
                    <el-input v-model="search.addressContainerOuter" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="addressContainerInner">
                    <el-input v-model="search.addressContainerInner" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="addressProjectFront">
                    <el-input v-model="search.addressProjectFront" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="addressProjectBackground">
                    <el-input v-model="search.addressProjectBackground" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="addressProjectBackgroundAccountPasswd">
                    <el-input v-model="search.addressProjectBackgroundAccountPasswd" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="updateTime">
                    <el-input v-model="search.updateTime" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="el-button-search" @click="searchEvent()">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="el-button-search" @click="searchRest()">重置
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="el-button-search" @click="routerToAdd()">添加
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="app-list">
            <div class="app-tab">
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <!--显示的字段 - 英文-->
                        <th>projectName</th>
                        <th>操作</th>
                        <th>DEV镜像操作</th>
                        <th>DEV容器操作</th>
                        <th>DevToPro</th>
                        <th>PRO镜像操作</th>
                        <th>PRO容器操作</th>
                        <th>容器内网/外网</th>
                        <th>portainer内网</th>
                        <th>portainer外网</th>
                        <th>projectUpdateTime</th>
                        <th>projectType</th>
                        <th>projectPrice</th>
                        <th>projectPackageType</th>
                        <th>projectRealFileName</th>
                        <th>projectLanguage</th>
                        <th>projectSize2</th>
                        <th>projectSizeNum</th>
                        <th>projectSizeType</th>
                        <th>projectRuntime</th>
                        <th>projectDownloadSum</th>
                        <th>projectStatus</th>
                        <th>projectMark</th>
                        <th>projectCanRunning</th>
                        <th>dockerImageName</th>
                        <th>dockerStatus</th>
                        <th>dockerContainerName</th>
                        <th>dockerContainerPort</th>
                        <th>addressProjectBackgroundAccountPasswd</th>
                        <th>updateTime</th>
                    </tr>
                    </thead>
                    <tr>
                        <th>序号</th>
                        <!--显示的字段 - 中文-->
                        <th>项目-名称</th>
                        <th>操作</th>
                        <th>DEV镜像操作</th>
                        <th>DEV容器操作</th>
                        <th>DevToPro</th>
                        <th>PRO镜像操作</th>
                        <th>PRO容器操作</th>
                        <th>容器内网/外网</th>
                        <th>portainer内网</th>
                        <th>portainer外网</th>
                        <th>项目-更新时间</th>
                        <th>项目-类型(VIP/COMMON)</th>
                        <th>项目-价格</th>
                        <th>项目-下载包类型(流/text)</th>
                        <th>项目-真实文件名称</th>
                        <th>项目-开发语言</th>
                        <th>项目-大小</th>
                        <th>项目-大小数字</th>
                        <th>项目-大小type(k,M,G)</th>
                        <th>项目-运行环境</th>
                        <th>项目-下载次数</th>
                        <th>项目-状态,可用/废弃/暂定</th>
                        <th>项目-备注</th>
                        <th>项目-是否正常运行</th>
                        <th>docker-镜像-名称</th>
                        <th>docker-状态,创建.运行中,停止,容器移除,镜像移除</th>
                        <th>docker-容器-名称</th>
                        <th>docker-端口号</th>
                        <th>地址-项目后台-账号密码</th>
                        <th>更新时间</th>
                    </tr>

                    <tbody>
                    <tr v-for="(info,index) in dataList">
                        <td>{{index+1}}</td>
                        <!--显示的字段 - 具体数据-->
                        <td>{{info.projectName}}</td>
                        <td>
                            <span class="el-icon-view" @click="pen(info.criteriaid)">id
                            </span>
                            <span :class="info.projectPanAddress? 'default' : 'red' "
                                  @click="pen(info.projectPanAddress)">网盘
                            </span>
                            <span :class="info.projectIntroduction? 'default el-icon-s-comment' : 'red el-icon-s-comment' "
                                  @click="pen(info.projectIntroduction)">
                                <!--介绍-->
                            </span>
                            <span :class="info.projectImgs? 'default el-icon-picture' : 'red el-icon-picture' "
                                  @click="showImgs(info.projectImgs)">
                                <!--图片-->
                            </span>
                            <a :href="info.projectSourceUrl" target="_blank">
                                <span :class="info.projectSourceUrl? 'default el-icon-view' : 'red el-icon-view' ">源URL</span>
                            </a>


                            <a :href="info.addressProjectFront" target="_blank">
                                <span :class="info.addressProjectFront? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">Front</span>
                            </a>
                            <a :href="info.addressProjectBackground" target="_blank">
                                <span :class="info.addressProjectBackground? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">Bg</span>
                            </a>
                            <span class="el-icon-download"
                                  @click="downloadZip(info.criteriaid)">zip
                            </span>
                            <span class="el-icon-download"
                                  @click="downIntroduce(info.criteriaid)">介绍
                            </span>
                            <span :class="info.projectShowWebsite? 'default el-icon-download' : 'red el-icon-download' "
                                  @click="downIntroduce(info.criteriaid)">sql
                            </span>
                        </td>
                        <td style="text-align:center !important">
                            <span v-if="info.devDockerStatusImagesIsExist=='false'"
                                  class="el-icon-circle-plus-outline"
                                  @click="buildToDocker(info.criteriaid)">
                               <!--只要镜像不存在才能构建镜像构建-->
                            </span>
                            <span v-else class="el-icon-circle-close"
                                  @click="runDockerShell(info.devDockerImageShellRemove)">
                                <!--镜像移除-->
                            </span>
                        </td>
                        <td>
                            <span v-if="info.devDockerStatusContainerIsExist=='false'"
                                  class="el-icon-circle-plus-outline"
                                  @click="runDockerShell(info.devDockerContainerShellCreate)">
                            </span>
                            <span v-else
                                  class="el-icon-circle-close"
                                  @click="runDockerShell(info.devDockerContainerShellRemove)">
                                </span>
                            <template v-if="info.devDockerStatusContainerIsExist=='true'">
                            <span v-if="info.devDockerStatusContainerIsRunning=='false'"
                                  class="el-icon-video-play"
                                  @click="runDockerShell(info.devDockerContainerShellRun)">
                                </span>
                                <span v-else
                                      class="el-icon-video-pause"
                                      @click="runDockerShell(info.devDockerContainerShellStop)">
                                </span>
                            </template>
                        </td>
                        <td>
                               <span class="el-icon-circle-plus-outline"
                                     @click="generateImageProZip(info.criteriaid)">devToPro
                                   <!--devToPro-->
                            </span>
                        </td>
                        <td style="text-align:center !important">
                            <span v-if="info.proDockerStatusImagesIsExist=='false'"
                                  class="el-icon-circle-plus-outline"
                                  @click="buildToDockerPro(info.criteriaid)">
                               <!--只要镜像不存在才能构建镜像构建-->
                            </span>
                            <span v-else class="el-icon-circle-close"
                                  @click="runDockerShell(info.proDockerImageShellRemove)">
                                <!--镜像移除-->
                            </span>
                        </td>
                        <td>
                            <span v-if="info.proDockerStatusContainerIsExist=='false'"
                                  class="el-icon-circle-plus-outline"
                                  @click="runDockerShell(info.proDockerContainerShellCreate)">
                            </span>
                            <span v-else
                                  class="el-icon-circle-close"
                                  @click="runDockerShell(info.proDockerContainerShellRemove)">
                                </span>
                            <template v-if="info.proDockerStatusContainerIsExist=='true'">
                            <span v-if="info.proDockerStatusContainerIsRunning=='false'"
                                  class="el-icon-video-play"
                                  @click="runDockerShell(info.proDockerContainerShellRun)">
                                </span>
                                <span v-else
                                      class="el-icon-video-pause"
                                      @click="runDockerShell(info.proDockerContainerShellStop)">
                                </span>
                            </template>
                        </td>
                        <td>
                            <a :href="info.addressContainerInner" target="_blank">
                                <span :class="info.devDockerStatusContainerIsRunning=='true' || info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">容器内网</span>
                            </a>
                            <a :href="info.addressContainerOuter" target="_blank">
                                <span :class="info.devDockerStatusContainerIsRunning=='true' || info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">容器外网</span>
                            </a>
                        </td>
                        <td>
                            <template v-if="info.devDockerContainerId">
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'logs')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-document' : 'red el-icon-document' "></span>
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'inspect')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-info' : 'red el-icon-info' "></span>
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'stats')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-s-data' : 'red el-icon-s-data' "></span>
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'exec')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-arrow-right' : 'red el-icon-arrow-right' "></span>
                            </template>
                        </td>
                        <td>
                            <template v-if="info.devDockerContainerId">
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'logs')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-document' : 'red el-icon-document' "></span>
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'inspect')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-info' : 'red el-icon-info' "></span>
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'stats')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-s-data' : 'red el-icon-s-data' "></span>
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'exec')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-arrow-right' : 'red el-icon-arrow-right' "></span>
                            </template>
                        </td>
                        <td>{{info.projectUpdateTime}}</td>
                        <td>{{info.projectType}}</td>
                        <td>{{info.projectPrice}}</td>
                        <td>{{info.projectPackageType}}</td>
                        <td>{{info.projectRealFileName}}</td>
                        <td>{{info.projectLanguage}}</td>
                        <td>{{info.projectSize2}}</td>
                        <td>{{info.projectSizeNum}}</td>
                        <td>{{info.projectSizeType}}</td>
                        <td>{{info.projectRuntime}}</td>
                        <td>{{info.projectDownloadSum}}</td>
                        <td>{{info.projectStatus}}</td>
                        <td>{{info.projectMark}}</td>
                        <td>{{info.projectCanRunning}}</td>
                        <td>{{info.dockerImageName}}</td>
                        <td>{{info.dockerStatus}}</td>
                        <td>{{info.dockerContainerName}}</td>
                        <td>{{info.dockerContainerPort}}</td>
                        <td>{{info.addressProjectBackgroundAccountPasswd}}</td>
                        <td>{{info.updateTime}}</td>
                    </tr>
                    </tbody>
                </table>
                <p v-show="total == 0" class="no-data-tip">没有找到相关数据！</p>
                <div>
                    <pre>{{jsonData}}</pre>
                </div>
            </div>
            <div class="mt10">
                <!--/** */:page-size 数一页的数量！！！-->
                <el-pagination v-show="pageInfo.list.length > 0"
                               background
                               @current-change="handleCurrentChange"
                               :current-page.sync="pageInfo.pageNum"
                               :page-size="pageInfo.pageSize"
                               layout="total, prev, pager, next, jumper"
                               :total="pageInfo.total">
                </el-pagination>
            </div>
            <el-dialog
                    title="更新"
                    :visible.sync="dialog.dialogVisible"
                    width="40%">
                <el-input
                        type="textarea"
                        :rows="20"
                        placeholder="请输入json"
                        v-model="dialog.value">
                </el-input>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialog.dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleClose">确 定</el-button></span>
            </el-dialog>
            <!--下载地址-->
            <el-dialog
                    title=""
                    :visible.sync="imgs.dialog.dialogVisible"
                    fullscreen="true"
                    show-close="false"
                    style="text-align: center"
                    :before-close="handleClose">
                <template v-for="url in imgs.dialog.urls">
                    <img :src="imgs.api+'?fileName='+url" width="30%" style="float: left; margin: 5px"/>
                </template>
                <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="imgs.dialog.dialogVisible = false">确 定</el-button></span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {getPreDay} from '@/utils/index.js'

    export default {
        data() {
            return {
                policyIdList: [],
                policyId: '',
                statuses: [{value: 1, title: '生效'}, {value: 2, title: '失效'}, {value: null, title: '全部'}],
                status: '',
                dataList: [],
                total: -1,
                currentPage: 1,
                pageSize: 10,
                start: '',
                end: '',
                plateNo: '',
                exitStation: '',
                exitStationList: [],
                resultDetail: {},
                viewDialogVisible: false,
                startTime: '',
                endTime: '',
                timeRange: [],
                registId: '',
                jsonData: '',
                search: {
                    id: '',
                    criteriaid: '',
                    projectName: '',
                    projectUpdateTime: '',
                    projectType: '',
                    projectPrice: '',
                    projectPackageType: '',
                    projectPanAddress: '',
                    projectHtmlBody: '',
                    projectSourceUrl: '',
                    projectLanguage: '',
                    projectSize2: '',
                    projectSizeNum: '',
                    projectSizeType: '',
                    projectImgs: '',
                    projectImgsDefault: '',
                    projectRuntime: '',
                    projectOfficialWebsite: '',
                    projectShowWebsite: '',
                    projectDownloadUrls: '',
                    projectDownloadSum: '',
                    projectIntroduction: '',
                    projectStatus: '',
                    projectMark: '',
                    projectCanRunning: '',
                    projectSql: '',
                    projectPort: '',
                    addressContainerOuter: '',
                    addressContainerInner: '',
                    addressProjectFront: '',
                    addressProjectBackground: '',
                    addressProjectBackgroundAccountPasswd: '',
                    devProjectRealFileName: '',
                    devDockerImageName: '',
                    devDockerImageShellRemove: '',
                    devDockerContainerId: '',
                    devDockerContainerName: '',
                    devDockerContainerShellCreate: '',
                    devDockerContainerShellRun: '',
                    devDockerContainerShellStop: '',
                    devDockerContainerShellRemove: '',
                    devDockerStatusImagesIsExist: '',
                    devDockerStatusContainerIsExist: '',
                    devDockerStatusContainerIsRunning: '',
                    proProjectRealFileName: '',
                    proDockerImageName: '',
                    proDockerImageShellRemove: '',
                    proDockerContainerId: '',
                    proDockerContainerName: '',
                    proDockerContainerShellCreate: '',
                    proDockerContainerShellRun: '',
                    proDockerContainerShellStop: '',
                    proDockerContainerShellRemove: '',
                    proDockerStatusImagesIsExist: '',
                    proDockerStatusContainerIsExist: '',
                    proDockerStatusContainerIsRunning: '',
                    updateTime: '',
                    pageNum: 1,
                    pageSize: 10
                },
                pageInfo: {
                    "endRow": 10,
                    "firstPage": 1,
                    "hasNextPage": true,
                    "hasPreviousPage": false,
                    "isFirstPage": true,
                    "isLastPage": false,
                    "lastPage": 8,
                    "list": [],
                    "navigatePages": 8,
                    "navigatepageNums": [1, 2, 3, 4, 5, 6, 7, 8],
                    "nextPage": 2,
                    "orderBy": "",
                    "pageNum": 1,
                    "pageSize": 10,
                    "pages": 1810,
                    "prePage": 0,
                    "size": 10,
                    "startRow": 1,
                    "total": 0
                },
                dialog: {
                    dialogVisible: false,
                    value: ''
                },
                imgs: {
                    dialog: {
                        dialogVisible: false,
                        urls: []
                    },
                    api: ''
                },
                host: {
                    portainer: {
                        inner: "",
                        outer: ""
                    }
                }

            }

        },
        mounted() {
            let self = this;
        },
        created() {
            this.queryBase();
            this.getInnerPortainerUrl();
            this.getOuterPortainerUrl();
        },
        watch: {},
        methods: {//获取具体的配置
            queryBase() {
                let self = this;
                var params = new FormData();
                if (self.search.id != null && self.search.id != '') {
                    params.append("id", self.search.id);
                }
                if (self.search.criteriaid != null && self.search.criteriaid != '') {
                    params.append("criteriaid", self.search.criteriaid);
                }
                if (self.search.projectName != null && self.search.projectName != '') {
                    params.append("projectName", self.search.projectName);
                }
                if (self.search.projectUpdateTime != null && self.search.projectUpdateTime != '') {
                    params.append("projectUpdateTime", self.search.projectUpdateTime);
                }
                if (self.search.projectType != null && self.search.projectType != '') {
                    params.append("projectType", self.search.projectType);
                }
                if (self.search.projectPrice != null && self.search.projectPrice != '') {
                    params.append("projectPrice", self.search.projectPrice);
                }
                if (self.search.projectPackageType != null && self.search.projectPackageType != '') {
                    params.append("projectPackageType", self.search.projectPackageType);
                }
                if (self.search.projectPanAddress != null && self.search.projectPanAddress != '') {
                    params.append("projectPanAddress", self.search.projectPanAddress);
                }
                if (self.search.projectRealFileName != null && self.search.projectRealFileName != '') {
                    params.append("projectRealFileName", self.search.projectRealFileName);
                }
                if (self.search.projectHtmlBody != null && self.search.projectHtmlBody != '') {
                    params.append("projectHtmlBody", self.search.projectHtmlBody);
                }
                if (self.search.projectSourceUrl != null && self.search.projectSourceUrl != '') {
                    params.append("projectSourceUrl", self.search.projectSourceUrl);
                }
                if (self.search.projectLanguage != null && self.search.projectLanguage != '') {
                    params.append("projectLanguage", self.search.projectLanguage);
                }
                if (self.search.projectSize2 != null && self.search.projectSize2 != '') {
                    params.append("projectSize2", self.search.projectSize2);
                }
                if (self.search.projectSizeNum != null && self.search.projectSizeNum != '') {
                    params.append("projectSizeNum", self.search.projectSizeNum);
                }
                if (self.search.projectSizeType != null && self.search.projectSizeType != '') {
                    params.append("projectSizeType", self.search.projectSizeType);
                }
                if (self.search.projectImgs != null && self.search.projectImgs != '') {
                    params.append("projectImgs", self.search.projectImgs);
                }
                if (self.search.projectImgsDefault != null && self.search.projectImgsDefault != '') {
                    params.append("projectImgsDefault", self.search.projectImgsDefault);
                }
                if (self.search.projectRuntime != null && self.search.projectRuntime != '') {
                    params.append("projectRuntime", self.search.projectRuntime);
                }
                if (self.search.projectOfficialWebsite != null && self.search.projectOfficialWebsite != '') {
                    params.append("projectOfficialWebsite", self.search.projectOfficialWebsite);
                }
                if (self.search.projectShowWebsite != null && self.search.projectShowWebsite != '') {
                    params.append("projectShowWebsite", self.search.projectShowWebsite);
                }
                if (self.search.projectDownloadUrls != null && self.search.projectDownloadUrls != '') {
                    params.append("projectDownloadUrls", self.search.projectDownloadUrls);
                }
                if (self.search.projectDownloadSum != null && self.search.projectDownloadSum != '') {
                    params.append("projectDownloadSum", self.search.projectDownloadSum);
                }
                if (self.search.projectIntroduction != null && self.search.projectIntroduction != '') {
                    params.append("projectIntroduction", self.search.projectIntroduction);
                }
                if (self.search.projectStatus != null && self.search.projectStatus != '') {
                    params.append("projectStatus", self.search.projectStatus);
                }
                if (self.search.projectMark != null && self.search.projectMark != '') {
                    params.append("projectMark", self.search.projectMark);
                }
                if (self.search.projectCanRunning != null && self.search.projectCanRunning != '') {
                    params.append("projectCanRunning", self.search.projectCanRunning);
                }
                if (self.search.dockerImageName != null && self.search.dockerImageName != '') {
                    params.append("dockerImageName", self.search.dockerImageName);
                }
                if (self.search.dockerImageShellRemove != null && self.search.dockerImageShellRemove != '') {
                    params.append("dockerImageShellRemove", self.search.dockerImageShellRemove);
                }
                if (self.search.dockerStatus != null && self.search.dockerStatus != '') {
                    params.append("dockerStatus", self.search.dockerStatus);
                }
                if (self.search.dockerContainerId != null && self.search.dockerContainerId != '') {
                    params.append("dockerContainerId", self.search.dockerContainerId);
                }
                if (self.search.dockerContainerName != null && self.search.dockerContainerName != '') {
                    params.append("dockerContainerName", self.search.dockerContainerName);
                }
                if (self.search.dockerContainerPort != null && self.search.dockerContainerPort != '') {
                    params.append("dockerContainerPort", self.search.dockerContainerPort);
                }
                if (self.search.dockerContainerShellCreate != null && self.search.dockerContainerShellCreate != '') {
                    params.append("dockerContainerShellCreate", self.search.dockerContainerShellCreate);
                }
                if (self.search.dockerContainerShellRun != null && self.search.dockerContainerShellRun != '') {
                    params.append("dockerContainerShellRun", self.search.dockerContainerShellRun);
                }
                if (self.search.dockerContainerShellStop != null && self.search.dockerContainerShellStop != '') {
                    params.append("dockerContainerShellStop", self.search.dockerContainerShellStop);
                }
                if (self.search.dockerContainerShellRemove != null && self.search.dockerContainerShellRemove != '') {
                    params.append("dockerContainerShellRemove", self.search.dockerContainerShellRemove);
                }
                if (self.search.addressContainerOuter != null && self.search.addressContainerOuter != '') {
                    params.append("addressContainerOuter", self.search.addressContainerOuter);
                }
                if (self.search.addressContainerInner != null && self.search.addressContainerInner != '') {
                    params.append("addressContainerInner", self.search.addressContainerInner);
                }
                if (self.search.addressProjectFront != null && self.search.addressProjectFront != '') {
                    params.append("addressProjectFront", self.search.addressProjectFront);
                }
                if (self.search.addressProjectBackground != null && self.search.addressProjectBackground != '') {
                    params.append("addressProjectBackground", self.search.addressProjectBackground);
                }
                if (self.search.addressProjectBackgroundAccountPasswd != null && self.search.addressProjectBackgroundAccountPasswd != '') {
                    params.append("addressProjectBackgroundAccountPasswd", self.search.addressProjectBackgroundAccountPasswd);
                }
                if (self.search.updateTime != null && self.search.updateTime != '') {
                    params.append("updateTime", self.search.updateTime);
                }
                var paramsJson = {};
                params.forEach((value, key) => paramsJson[key] = value);
                self.$http.post(self.api.queryBasePageHelperProjectPlus + "?pageNum=" + self.search.pageNum + "&pageSize=" + self.search.pageSize,
                    paramsJson, {}, function (response) {
                        self.pageInfo = response.content;
                        self.dataList = response.content.list;
                    }, function (response) {
                        //失败回调
                        self.$message({
                            type: 'warning',
                            message: '请求异常',
                            duration: 1000
                        });
                    })

            },
            deleteByPrimaryKey(id) {
                let self = this;
                this.$confirm('是否删除该条数据？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.deleteProjectPlusByPrimaryKey
                        , {
                            params: {
                                id: id
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                if (response.content == true) {
                                    self.$message({
                                        type: 'success',
                                        message: '删除成功',
                                        duration: 2000
                                    });
                                    self.queryBase();
                                } else {
                                    self.$message({
                                        type: 'warning',
                                        message: '删除失败',
                                        duration: 2000
                                    });

                                }
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            },
            routerToView(id) {
                //跳转携带参数
                let queryStr = "";
                queryStr = queryStr + "id=" + id + "";
                window.open("#/ProjectPlusModuleView" + "?" + queryStr, '_self');
            },
            routerToEdit(id) {
                //跳转携带参数
                let queryStr = "";
                queryStr = queryStr + "id=" + id + "";
                //跳转携带参数
                window.open("#/ProjectPlusModuleEdit" + "?" + queryStr, '_self');
            },
            routerToAdd() {
                window.open("#/ProjectPlusModuleAdd", '_self');
            },
            searchEvent() {
                this.queryBase();
            },
            searchRest() {
                let self = this;
                self.search.id = '';
                self.search.criteriaid = '';
                self.search.projectName = '';
                self.search.projectUpdateTime = '';
                self.search.projectType = '';
                self.search.projectPrice = '';
                self.search.projectPackageType = '';
                self.search.projectPanAddress = '';
                self.search.projectRealFileName = '';
                self.search.projectHtmlBody = '';
                self.search.projectSourceUrl = '';
                self.search.projectLanguage = '';
                self.search.projectSize2 = '';
                self.search.projectSizeNum = '';
                self.search.projectSizeType = '';
                self.search.projectImgs = '';
                self.search.projectImgsDefault = '';
                self.search.projectRuntime = '';
                self.search.projectOfficialWebsite = '';
                self.search.projectShowWebsite = '';
                self.search.projectDownloadUrls = '';
                self.search.projectDownloadSum = '';
                self.search.projectIntroduction = '';
                self.search.projectStatus = '';
                self.search.projectMark = '';
                self.search.projectCanRunning = '';
                self.search.dockerImageName = '';
                self.search.dockerImageShellRemove = '';
                self.search.dockerStatus = '';
                self.search.dockerContainerId = '';
                self.search.dockerContainerName = '';
                self.search.dockerContainerPort = '';
                self.search.dockerContainerShellCreate = '';
                self.search.dockerContainerShellRun = '';
                self.search.dockerContainerShellStop = '';
                self.search.dockerContainerShellRemove = '';
                self.search.addressContainerOuter = '';
                self.search.addressContainerInner = '';
                self.search.addressProjectFront = '';
                self.search.addressProjectBackground = '';
                self.search.addressProjectBackgroundAccountPasswd = '';
                self.search.updateTime = '';
                this.queryBase();
            },
            handleCurrentChange(currentChange) {
                let self = this;
                self.search.pageNum = self.pageInfo.pageNum;
                self.search.pageSize = self.pageInfo.pageSize;
                self.searchEvent();
            },
            pen(value) {
                this.$alert('<pre>' + value + '</pre>', '预览', {
                    dangerouslyUseHTMLString: true
                });
            },
            // pen(value) {
            //     this.$alert(value, '预览', {
            //         dangerouslyUseHTMLString: true
            //     });
            // },
            show(value) {
                let self = this;
                //清空
                self.dialog.value = '';
                //注入内容
                self.dialog.dialogVisible = true;
                self.dialog.value = value;
            },
            showImgs(imgs) {
                let self = this;
                self.imgs.api = this.api.preByFileNameUrl;
                //清空
                self.imgs.dialog.urls = [];
                //注入内容
                self.imgs.dialog.dialogVisible = true;
                self.imgs.dialog.urls = imgs.split(",");
            },

            getInnerPortainerUrl() {
                let self = this;
                self.$http.get(self.api.getInnerPortainerUrl, {},
                    function (response) {
                        if (response.code == 0) {
                            self.host.portainer.inner = response.content;
                        } else {
                            self.$message({
                                type: 'error',
                                message: response.msg,
                                duration: 2000
                            });
                        }
                    },
                    function (response) {
                        console.log(response);
                        //失败回调
                        self.$message({
                            type: 'error',
                            message: "请求异常",
                            duration: 2000
                        });
                    }
                )
            },
            getOuterPortainerUrl() {
                let self = this;
                self.$http.get(self.api.getOuterPortainerUrl, {}, function (response) {
                        if (response.code == 0) {
                            self.host.portainer.outer = response.content;
                        } else {
                            self.$message({
                                type: 'error',
                                message: response.msg,
                                duration: 2000
                            });
                        }
                    },
                    function (response) {
                        console.log(response);
                        //失败回调
                        self.$message({
                            type: 'error',
                            message: "请求异常",
                            duration: 2000
                        });
                    }
                )
            },
            openInnerPortainerUrl(dockerContainerId, type) {
                let self = this;
                let url = self.host.portainer.inner + "/" + dockerContainerId + "/" + type;
                console.info("url:" + url);
                window.open(url, '_blank');
            },
            openOuterPortainerUrl(dockerContainerId, type) {
                let self = this;
                let url = self.host.portainer.outer + "/" + dockerContainerId + "/" + type;
                window.open(url, '_blank');
            },
            buildToDocker(criteriaid) {
                let self = this;
                this.$confirm('是否执行构建？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.buildToDocker
                        , {
                            params: {
                                criteriaid: criteriaid
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                self.$message({
                                    type: 'success',
                                    message: '执行成功:' + response.content,
                                    duration: 2000
                                });
                                self.queryBase();
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            },
            generateImageProZip(criteriaid) {
                let self = this;
                this.$confirm('是否执行构建？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.generateImageProZip
                        , {
                            params: {
                                criteriaid: criteriaid
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                self.$message({
                                    type: 'success',
                                    message: '执行成功:' + response.content,
                                    duration: 2000
                                });
                                self.queryBase();
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            },
            buildToDockerPro(criteriaid) {
                let self = this;
                this.$confirm('是否创建容器？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.buildToDockerPro
                        , {
                            params: {
                                criteriaid: criteriaid
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                self.$message({
                                    type: 'success',
                                    message: '执行成功:' + response.content,
                                    duration: 2000
                                });
                                self.queryBase();
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            }
            ,
            runDockerShell(cmd) {
                let self = this;
                this.$confirm('是否执行该条命令？', cmd, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.runDockerShell
                        , {
                            params: {
                                shell: cmd
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                self.$message({
                                    type: 'success',
                                    message: '执行成功:' + response.content,
                                    duration: 2000
                                });
                                self.queryBase();
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            }
            ,
            downloadZip(criteriaid) {
                this.$confirm('是否下载zip？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    let self = this;
                    let url = self.api.downloadZip + "?criteriaid=" + criteriaid;
                    window.open(url, '_blank');
                })
            }
            ,
            downIntroduce(criteriaid) {
                this.$confirm('是否下载introduce？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    let self = this;
                    let url = self.api.downIntroduce + "?criteriaid=" + criteriaid;
                    window.open(url, '_blank');
                })
            }
            ,

        }

    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .video-detail {

        p {
            display: inline-block;
            width: 40%;
            vertical-align: top;
        }

        label {
            width: 120px;
            display: inline-block;
        }

        span {
            color: #888;
        }

    }

    .red {
        color: red !important;
    }

    .default {

    }

    tr td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left !important;
        padding-left: 10px;
    }

    .fa-file-alt:before {
        content: "\F15C";
    }

    tr th {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left !important;
        padding-left: 10px;
    }

    .t_area {
        width: 300px;
        overflow-y: visible
    }

    .el-message-box {
        width: 600px;
    }
</style>
