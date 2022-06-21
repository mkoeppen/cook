<?php

foreach(getenv() AS $k => $v) {
    if($v == 'false') {
        $v = false;
    } elseif($v == 'true') {
        $v = true;
    }

    define($k, $v);
}

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', MYSQL_DATABASE);

/** MySQL database username */
define('DB_USER', MYSQL_USER);

/** MySQL database password */
define('DB_PASSWORD', MYSQL_PASSWORD);

$table_prefix  = DB_PREFIX;

// If we're behind a proxy server and using HTTPS, we need to alert Wordpress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false)) {
    $_SERVER['HTTPS'] = 'on';
}

// Cloudfront forwarded protocoll headers
if (isset($_SERVER['CloudFront-Forwarded-Proto']) && (strpos($_SERVER['CloudFront-Forwarded-Proto'], 'https') !== false)) {
    $_SERVER['HTTPS'] = 'on';
}

if (defined('IS_SSL') && (IS_SSL===true))
    $_SERVER['HTTPS'] = 'on';

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';


/* That's all, stop editing! Happy blogging. */