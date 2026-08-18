@echo off
chcp 65001 >nul
title 侯康峰 · 个人档案库（本地服务）
cd /d %~dp0
echo.
echo  正在启动 侯康峰·个人档案库 本地服务...
echo  浏览器将自动打开 http://127.0.0.1:8765
echo  关闭本窗口即停止服务。按 Ctrl+C 也可退出。
echo.
node server.js
pause
