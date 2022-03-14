// ==UserScript==
// @name         darkChocolate
// @namespace    https://github.com/potatosalad775
// @version      0.1
// @description  change Kakao Account login page into darker shade
// @author       potatosalad775
// @match        https://accounts.kakao.com/*
// @icon         https://accounts.kakao.com/favicon.ico
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, ' !important;');
    head.appendChild(style);
}

// kakao yellow - #fee500 / kakao orange - #e65f32

// body
// (color defines certain text's color)
addGlobalStyle('body { background: #333; color: #ccc}');

// text
// - Large Screen title
addGlobalStyle('.login_type3 .wrap_banner .tit_banner { color: #ccc; }');

// Login Box
// - border
addGlobalStyle('.login_type3 .wrap_form { border: 1px solid #ccc; }');
// - box content placeholder text
addGlobalStyle('.item_tf .lab_placeholder { color: #ccc; }');
// - box border / input text color / input cursor color
addGlobalStyle('.item_tf .tf_g { border-color: #fee500; color: #ccc; caret-color: #fee500; background-color: #333}');
// - box border on input
addGlobalStyle('.item_tf .tf_g:focus { border-color: #fee500; }');
// - @kakao.com text
addGlobalStyle('.login_kakaomail .email_done .info_mail { color: #ccc; }');
// - info tip text string below email box
addGlobalStyle('.info_tip { color: #ccc; }');
// - keep logged in text
addGlobalStyle('.lab_check .txt_check { color: #ccc; }');
// - message box background color
addGlobalStyle('.cont_login .box_desc { background-color: #555; }');
// - message box - account info incorrect text
addGlobalStyle('.cont_login .box_desc .desc_error { color: #ccc');
// - message box - national phone number info text
addGlobalStyle('.cont_login .box_desc .desc_info { color: #ccc}');
// - message box - find national phone number text
addGlobalStyle('.cont_login .box_desc .link_more { color: #ccc}');
// - sign up text
addGlobalStyle('.info_user .link_join { color: #ccc}');
// - account info / find password text
addGlobalStyle('.info_user .list_user .link_user { color: #ccc}');
// - sign up text
addGlobalStyle('.cont_login .box_desc .link_more { color: #ccc}');

// - footer info link text
addGlobalStyle('.footer_comm .link_info { color: #ccc}');
// - language drop down menu box
addGlobalStyle('.item_select .list_select { background-color: #222; border: 1px solid #555; }');
// - language drop down menu item text
addGlobalStyle('.item_select .link_select { color: #ccc}');
// - currently selected language drop down menu item text
addGlobalStyle('.footer_comm .item_select .link_selected { color: #ccc}');

// - copyright text
addGlobalStyle('.footer_comm .txt_copyright { color: #ccc}');

// Sign Up
// - title text
addGlobalStyle('.tit_g { color: #ccc}');
// - start with daum account text
addGlobalStyle('.link_g { color: #e65f32}');
// - agree all
addGlobalStyle('.cont_sign .check_all .lab_choice { color: #ccc}');
// - agree item
addGlobalStyle('.item_choice .lab_choice { color: #ccc}');

// Find Kakao Account
// - title text
addGlobalStyle('.tit_page { color: #ccc}');
// - desc text
addGlobalStyle('.desc_tip { color: #ccc}');

// Reset Password
// - kakao account text
addGlobalStyle('.tf_required { color: #ccc}');

// Select Ways to Find Kakao Acc
// - title text
addGlobalStyle('.tit_main { color: #ccc}');
// - desc text
addGlobalStyle('.box_find .link_prove .tit_prove { color: #ccc}');
// - looking for a business account? text
addGlobalStyle('.cont_find .desc_notice { color: #ccc}');
addGlobalStyle('.link_comm { color: #ccc}');

// Remove Images with White background
addGlobalStyle('#kakaoServiceLogo { display: none; }');