<script setup>
</script>

<template>
  <div class="dashboard-container">
    <!-- 顶部欢迎区 -->
    <div class="dashboard-header">
      <div class="user-info">
        <img class="avatar" src="https://img1.baidu.com/it/u=123456789,123456789&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200" alt="avatar" />
        <div>
          <div class="greeting">早安，XXX，祝你开心每一天！</div>
          <div class="desc">技术经理 | AI大交互体验组-通用能力小组</div>
        </div>
      </div>
      <div class="header-stats">
        <div class="stat-item"><div class="stat-num">2</div><div class="stat-label">进行中</div></div>
        <div class="stat-item"><div class="stat-num">5</div><div class="stat-label">逾期任务</div></div>
        <div class="stat-item"><div class="stat-num">10</div><div class="stat-label">未修复安全漏洞</div></div>
        <div class="stat-item"><div class="stat-num">10</div><div class="stat-label">未关闭缺陷</div></div>
      </div>
    </div>

    <!-- 主体内容区 -->
    <div class="dashboard-main">
      <!-- 左侧：项目进度、雷达图 -->
      <div class="main-left">
        <div class="card project-list">
          <div class="card-title">研发中的项目</div>
          <div class="project-items">
            <div class="project-item">项目1</div>
            <div class="project-item">项目2</div>
            <div class="project-item">项目3</div>
            <div class="project-item">项目4</div>
          </div>
        </div>
        <div class="card radar-chart">
          <div class="card-title">研发人员项目熟练度</div>
          <div class="radar-placeholder">[雷达图]</div>
        </div>
      </div>
     
      <!-- 右侧：导航、缺陷、全流程云覆盖 -->
      <div class="main-right">
        <div class="card quick-nav">
          <div class="card-title">便捷导航</div>
          <div class="nav-placeholder">[导航按钮]</div>
        </div>
        <div class="card defect-list">
          <div class="card-title">项目预警列表</div>
          <div class="defect-placeholder">[缺陷列表]</div>
        </div>
        <div class="card cloud-coverage">
          <div class="card-title">项目全流程云覆盖</div>
          <div class="cloud-placeholder">[云覆盖表格]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  padding: 24px;
  background: #f5f7fa;
  min-height: 100vh;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
}
.user-info {
  display: flex;
  align-items: center;
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 16px;
}
.greeting {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
}
.desc {
  color: #888;
  font-size: 14px;
}
.header-stats {
  display: flex;
  gap: 32px;
}
.stat-item {
  text-align: center;
}
.stat-num {
  font-size: 24px;
  font-weight: bold;
  color: #1677ff;
}
.stat-label {
  font-size: 14px;
  color: #888;
}
.dashboard-main {
  display: flex;
  gap: 24px;
  min-height: 600px;
  align-items: stretch;
}
.main-left, .main-center, .main-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
}
.main-right {
  flex: 0 0 517px;
}
/* 让最后一个卡片吸底并撑满剩余空间 */
.main-left > .card:last-child,
.main-center > .card:last-child,
.main-right > .card:last-child {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card {
  background: #fff;
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px 0 #f0f1f2;
  display: flex;
  flex-direction: column;
}
.card-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}
.project-items {
  display: flex;
  gap: 16px;
}
.project-item {
  background: #f5f7fa;
  border-radius: 6px;
  padding: 12px 20px;
  min-width: 120px;
  text-align: center;
  font-size: 14px;
}
.radar-placeholder,
.trend-placeholder,
.ai-pie-placeholder,
.defect-placeholder,
.cloud-placeholder,
.nav-placeholder {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  background: #fafbfc;
  border-radius: 6px;
  font-size: 16px;
  flex: 1;
}
</style>
