<?php
// Best-effort session cleanup when a browser page is closed or refreshed.
ini_set('session.use_strict_mode','1');
ini_set('session.cookie_httponly','1');
ini_set('session.cookie_samesite','Strict');
if(!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS']!=='off')ini_set('session.cookie_secure','1');
session_start();$_SESSION=[];session_destroy();http_response_code(204);
