// (function (doc, win) {
//     var docEl = doc.documentElement,

//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

//         recalc = function () {

//             var clientWidth = docEl.clientWidth;

//             if (!clientWidth) return;

//             docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';

//         };



//     // Abort if browser does not support addEventListener

//     if (!doc.addEventListener) return;

//     win.addEventListener(resizeEvt, recalc, false);

//     doc.addEventListener('DOMContentLoaded', recalc, false);

// })(document, window);

$(function () {
    var loader = new PxLoader()
    var bg = loader.addImage('./img/bg.jpg');
    var bg_first = loader.addImage('./img/0/bg-first.jpg');
    var up = loader.addImage('./img/0/up.png');

    //选项选中后的圆圈
    var checkedImg = loader.addImage('./img/checkedImg.png');

    //第一题
    var questionNumOne = loader.addImage('./img/01/01@2x.png');
    var leftOne = loader.addImage('./img/01/01-A.png');
    var leftTwo = loader.addImage('./img/01/01-C.png');
    var leftThree = loader.addImage('./img/01/01-E.png');
    var leftFour = loader.addImage('./img/01/01-B.png');
    var leftFive = loader.addImage('./img/01/01-D.png');

    //第二题
    var lightThree = loader.addImage('./img/02/laightThree.png');
    var questionNumTwo = loader.addImage('./img/02/02@2x.png');
    var face = loader.addImage('./img/02/face.gif');
    var secondAnswerOne = loader.addImage('./img/02/answer-1.png');
    var secondAnswerTwo = loader.addImage('./img/02/answer-2.png');
    var secondAnswerThree = loader.addImage('./img/02/answer-3.png');
    var secondAnswerFour = loader.addImage('./img/02/answer-4.png');
    var secondAnswerFive = loader.addImage('./img/02/answer-5.png');

    //第三题
    var nightLight = loader.addImage('./img/03/nightLight.png');
    var questionNumThree = loader.addImage('./img/03/03@2x.png');
    var mobile = loader.addImage('./img/03/mobile.png');
    var begin = loader.addImage('./img/03/begin.png');
    var hand = loader.addImage('./img/03/hand.png');
    var begining = loader.addImage('./img/03/begining.png');
    var thirdBorderOne = loader.addImage('./img/03/border-1.png');
    var thirdBorderTwo = loader.addImage('./img/03/border-2.png');
    var thirdBorderThree = loader.addImage('./img/03/border-3.png');
    var thirdBorderFour = loader.addImage('./img/03/border-4.png');
    var thirdBorderFive = loader.addImage('./img/03/border-5.png');
    var thirdEmjoyOne = loader.addImage('./img/03/emjoy-1.png');
    var thirdEmjoyTwo = loader.addImage('./img/03/emjoy-2.png');
    var thirdEmjoyThree = loader.addImage('./img/03/emjoy-3.png');
    var thirdEmjoyFour = loader.addImage('./img/03/emjoy-4.png');
    var thirdEmjoyFive = loader.addImage('./img/03/emjoy-5.png');

    //第四题
    var giveMeFive = loader.addImage('./img/04/giveMeFive.gif');
    var colouredRibbon = loader.addImage('./img/04/colouredRibbon.png');
    var cup = loader.addImage('./img/04/cup.png');
    var questionNumFour = loader.addImage('./img/04/4@2x.png');
    var fourthAnswerOne = loader.addImage('./img/04/fourthAnswerOne.png');
    var fourthAnswerTwo = loader.addImage('./img/04/fourthAnswerTwo.png');
    var fourthAnswerThree = loader.addImage('./img/04/fourthAnswerThree.png');
    var fourthAnswerTFour = loader.addImage('./img/04/fourthAnswerFour.png');

    //第五题
    var questionNumFive = loader.addImage('./img/05/05@2x.png');
    var rotateBg = loader.addImage('./img/05/rotate.png')
    var fifthAnswerOne = loader.addImage('./img/05/01.png');
    var fifthAnswerTwo = loader.addImage('./img/05/02.png');
    var fifthAnswerThree = loader.addImage('./img/05/03.png');
    var fifthAnswerFour = loader.addImage('./img/05/04.png');
    var fifthAnswerFive = loader.addImage('./img/05/05.png');

    //时间轴页
    var line = loader.addImage('./img/06/line.png');

    //结果分享页
    var borderTop = loader.addImage('./img/07/border-top.png');
    var borderBottom = loader.addImage('./img/07/border-bottom.png');
    var shareBtn = loader.addImage('./img/07/share-btn.png');
    var titleBg = loader.addImage('./img/07/title-bg.png');
    var signTop = loader.addImage('./img/07/sign-01.png');
    var signBottom = loader.addImage('./img/07/sign-02.png');


    loader.addCompletionListener(function () {
        up.className = "up";
        $(".index-bottom").append(up);
        $(".checked-img").attr("src", checkedImg.src);
        $("#eventsSwiper").css("background-image", "url(" + bg.src + ")");
        //第一题
        $("#slide_1").css("background-image", "url(" + bg_first.src + ")");
        $("#slide_2 .question-num-one").css("background-image", "url(" + questionNumOne.src + ")");
        $("#slide_2 .left-answer .answer-one").css("background-image", "url(" + leftOne.src + ")");
        $("#slide_2 .left-answer .answer-two").css("background-image", "url(" + leftTwo.src + ")");
        $("#slide_2 .left-answer .answer-three").css("background-image", "url(" + leftThree.src + ")");
        $("#slide_2 .right-answer .answer-four").css("background-image", "url(" + leftFour.src + ")");
        $("#slide_2 .right-answer .answer-five").css("background-image", "url(" + leftFive.src + ")");
        //第二题
        $("#slide_3 .light-three").css("background-image", "url(" + lightThree.src + ")");
        $("#slide_3 .question-num-two").css("background-image", "url(" + questionNumTwo.src + ")");
        $("#slide_3 .face").css("background-image", "url(" + face.src + ")");
        $("#slide_3 .second-answer-one").css("background-image", "url(" + secondAnswerOne.src + ")");
        $("#slide_3 .second-answer-two").css("background-image", "url(" + secondAnswerTwo.src + ")");
        $("#slide_3 .second-answer-three").css("background-image", "url(" + secondAnswerThree.src + ")");
        $("#slide_3 .second-answer-four").css("background-image", "url(" + secondAnswerFour.src + ")");
        $("#slide_3 .second-answer-five").css("background-image", "url(" + secondAnswerFive.src + ")");
        //第三题
        $("#slide_4 .question-num-three").css("background-image", "url(" + questionNumThree.src + ")");
        $("#slide_4 .night-light").css("background-image", "url(" + nightLight.src + ")");
        $("#slide_4 .mobile").css("background-image", "url(" + mobile.src + ")");
        $("#slide_4 .begin").css("background-image", "url(" + begin.src + ")");
        $("#slide_4 .hand").css("background-image", "url(" + hand.src + ")");
        $("#slide_4 .begining").css("background-image", "url(" + begining.src + ")");
        //第三题的选项背景框
        $("#slide_4 .third-border-one").css("background-image", "url(" + thirdBorderOne.src + ")");
        $("#slide_4 .third-border-two").css("background-image", "url(" + thirdBorderTwo.src + ")");
        $("#slide_4 .third-border-three").css("background-image", "url(" + thirdBorderThree.src + ")");
        $("#slide_4 .third-border-four").css("background-image", "url(" + thirdBorderFour.src + ")");
        $("#slide_4 .third-border-five").css("background-image", "url(" + thirdBorderFive.src + ")");
        //第三题的选项表情
        $("#slide_4 .third-emjoy-one").attr("src", thirdEmjoyOne.src);
        $("#slide_4 .third-emjoy-two").attr("src", thirdEmjoyTwo.src);
        $("#slide_4 .third-emjoy-three").attr("src", thirdEmjoyThree.src);
        $("#slide_4 .third-emjoy-four").attr("src", thirdEmjoyFour.src);
        $("#slide_4 .third-emjoy-five").attr("src", thirdEmjoyFive.src);
        //第四题
        $("#slide_5 .question-num-four").css("background-image", "url(" + questionNumFour.src + ")");
        $("#slide_5 .give-me-five").css("background-image", "url(" + giveMeFive.src + ")");
        $("#slide_5 .coloured-ribbon").css("background-image", "url(" + colouredRibbon.src + ")");
        $("#slide_5 .cup").css("background-image", "url(" + cup.src + ")");
        //第四题答案
        $("#slide_5 .fourth-question-answer .fourth-answer-one").css("background-image", "url(" + fourthAnswerOne.src + ")");
        $("#slide_5 .fourth-question-answer .fourth-answer-two").css("background-image", "url(" + fourthAnswerTwo.src + ")");
        $("#slide_5 .fourth-question-answer .fourth-answer-three").css("background-image", "url(" + fourthAnswerThree.src + ")");
        $("#slide_5 .fourth-question-answer .fourth-answer-four").css("background-image", "url(" + fourthAnswerTFour.src + ")");
        //第五题
        $("#slide_6 .question-num-five").css("background-image", "url(" + questionNumFive.src + ")");
        $("#slide_6 .rotate-square").css("background-image", "url(" + rotateBg.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-one").css("background-image", "url(" + fifthAnswerOne.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-two").css("background-image", "url(" + fifthAnswerTwo.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-three").css("background-image", "url(" + fifthAnswerThree.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-four").css("background-image", "url(" + fifthAnswerFour.src + ")");
        $("#slide_6 .fifth-question-answer .fifth-answer-five").css("background-image", "url(" + fifthAnswerFive.src + ")");
        //时间轴页
        $("#slide_7 .speck .line").css("background-image", "url(" + line.src + ")");
        //结果分享页
        $("#slide_8 .border-top").css("background-image", "url(" + borderTop.src + ")");
        $("#slide_8 .border-bottom").css("background-image", "url(" + borderBottom.src + ")");
        $("#slide_8 .share-btn").css("background-image", "url(" + shareBtn.src + ")");
        $("#slide_8 .title-bg").css("background-image", "url(" + titleBg.src + ")");
        $("#slide_8 .sign-top").css("background-image", "url(" + signTop.src + ")");
        $("#slide_8 .sign-bottom").css("background-image", "url(" + signBottom.src + ")");

    });
    loader.start();
})
var qNum = 7,
    answerArr = new Array(),
    flagArr = new Array(),
    musicArr = ['./audio/01.ogg', './audio/02大火.ogg', './audio/03倒带.ogg', './audio/04打字+消息声_缩混.ogg', './audio/05欢呼.ogg', './audio/06拍照.ogg', './audio/01.ogg', './audio/01.ogg', ],
    histroyBgImg = ['../img/06/guoji.png', '../img/06/hulianwang.png', '../img/06/qiyecaijing.png', '../img/06/shehui.png', '../img/06/weifafanzui.png', '../img/06/wentiyule.png', '../img/06/zainan.png', '../img/06/zhengwu.png'],
    ClickFlag = false,
    modifier = 2; //每天的px

$(document).ready(function () {
    //隐藏弹出框
    $(".hide-share-bg").hide()
    $(".share-content").hide()
    //一进页面就加载第一条音频
    $("audio").attr("src", musicArr[0])
    if ($(".music").hasClass("play")) {
        $(".music").addClass("play");
        $("audio").attr("src", musicArr[0])[0].play(); /*播放*/
    } else {
        // var player = ;
        $(".music").removeClass("play");
        $("audio").attr("src", musicArr[0])[0].pause(); /*暂停*/
    }

    var mySwiper = new Swiper('#eventsSwiper', {
        direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        // allowSlideNext:false,  //禁止向右向下滑动

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () { //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                this.slides.eq(this.realIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
                // if ($(".swiper-slide-active").find(".question-answer")) { //判断当前页下有没有question-answer-》判断是不是选择题
                //     $(".swiper-slide-active").find(".question-answer").parents(".swiper-slide-active").addClass("swiper-no-swiping");
                // }
                // if ($(".swiper-slide-active").find("#swiper-history")) { //如果是时间轴页面，禁止回退到选择题部分
                //     mySwiper.allowSlidePrev = false
                // }
                // if($(".swiper-slide-active").find("#slide_8")){ //如果是结果页面，可以向上回退到时间轴页面
                //     mySwiper.allowSlidePrev = true
                // }
            },
            touchEnd: function (event) { //数触摸释放时执行
                if (mySwiper.isEnd || mySwiper.realIndex == 6) {
                    AnswerInit();
                }
                $.setTimeoutFun()
            },
        }
    })

    // 时间轴页面滑动
    var historySwiper = new Swiper('#eventsSwiper #swiper-history .swiper-container', {
        loop: false,
        on: {
            init: function () {
                mySlides = '';
                for (var i = 0; i < historyList.length; i++) {
                    this.appendSlide('<div class="swiper-slide slide' + i + '"><div class="event-msg"><a target="_blank" href="' + historyList[i]['hrefEv'] + '"><img class="srcImg" src="' + historyList[i]['srcImg'] + '"/><p>' + historyList[i]['title'] + '</p></div></a></div>');
                    if (historyList[i]['danmuContent']) {
                        $("#slide_7 .screen .s_show").append("<div class='magictime twisterInUp'><img src='" + historyList[i]['hraderImg'] + "'/><span>" + historyList[i]['danmuContent'] + "</span></div>")
                    }

                }
            },
            touchEnd: function () {
                if (historySwiper.activeIndex == 29) {
                    historySwiper.allowSlideNext = false
                } else {
                    historySwiper.allowSlideNext = true
                }

            }
        },

    })

    // <img src=" + up + " alt=\"\" style=\"width: 10vw;height: 10vw\">

    $(".music-switch").click(function () { //音乐的播放和暂停
        if ($(".music").hasClass("play")) {
            $(".music").removeClass("play");
            $("audio")[0].pause(); /*暂停*/
        } else {
            // var player = ;
            $(".music").addClass("play");
            $("audio")[0].play(); /*播放*/
        }
    })

    // 每一个label点击后，获取该选项对应的结果内容
    $("label").on("click", function () {
        let acIndex = mySwiper.realIndex + 1;
        anwser = "";
        $(this).find("input[type='radio']").attr("checked", "checked");
        if (IsAnwsered(acIndex - 1)) {
            // $(this).find(".checked-img").css("display", "none");
            $(".checked-img").css("display", "none");
            $(this).parent().find(".checked-img").toggle();
            // $(this).find(".checked-img").css("display", "block");
            ClickFlag = true;
            anwser = $(this).find("input[type='radio']:checked").val();
            ArrayInsert(acIndex - 1, anwser);
            PaginationChange(acIndex);
            $.setTimeoutFun();
        }
    })

    //切换页面之后做判断
    $.extend({
        'setTimeoutFun': function () {
            setTimeout(function () {
                //等待500ms，确保label绑定的事件执行

                if ($(".music").hasClass("play")) {
                    $(".music").addClass("play");
                    $("audio").attr("src", musicArr[mySwiper.realIndex])[0].play(); /*播放*/
                } else {
                    // var player = ;
                    $(".music").removeClass("play");
                    $("audio").attr("src", musicArr[mySwiper.realIndex])[0].pause(); /*暂停*/
                }

                var realIndex = mySwiper.realIndex + 1;
                if (ClickFlag) {
                    ClickFlag = false;
                    //本题已答

                    if (realIndex === 3) {
                        $("#slide_4 .mobile-hand .begin").show()
                        setInterval(function () {
                            $("#slide_4 .hand").slideToggle(1500);
                            $("#slide_4 .mobile-hand .begining").fadeToggle(1500);
                            $("#slide_4 .mobile-hand .begin").fadeToggle(1500);
                        }, 1300)
                    }

                    if (IsAnwsered(realIndex + 1) || realIndex === 6) {
                        // 下题已答就找出未答的最小题号
                        var questions = [];
                        for (var i = 0; i <= 6; i++) {
                            if (!IsAnwsered(i) && i != 0 && i != 6 && i != 7) {
                                questions.push(i);
                            }
                        }
                        if (questions.length) {
                            mySwiper.slideTo(questions[0] - 1, 1000, false);
                        } else {
                            //全部答完
                            // // console.log("全部答完");
                            // $(".swiper-slide-active").find(".question-answer").parents(".swiper-slide-active").removeClass("swiper-no-swiping");
                            // mySwiper.slideNext();
                        }
                    } else {
                        // $(".swiper-slide-active").find(".question-answer").parents(".swiper-slide-active").removeClass("swiper-no-swiping");
                        // mySwiper.slideNext();
                    }
                }
            }, 500);
        },
    })

    //分享按钮点击后的分享到朋友圈和微信好友
    $(".share-btn").on("click", function () {
        $(".hide-share-bg").show();
        $(".share-content").show();
    });
    //点击取消关闭分享弹出框
    $(".cancel").on("click", function () {
        $(".hide-share-bg").hide();
        $(".share-content").hide();
    })
    //点击黑色的背景关闭分享弹出框
    $(".hide-share-bg").on("click", function () {
        $(".hide-share-bg").hide();
        $(".share-content").hide();
    })
    //点击分享到朋友圈
    $(".to-friend-group").on("click", function () {
        wx.ready(function () { //需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
                title: '百大事件', // 分享标题
                link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '', // 分享图标
                success: function () {
                    // 设置成功
                }
            })
        });
    })
    //点击分享给微信好友
    $(".to-friend-group").on("click", function () {
        wx.ready(function () { //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({
                title: '百大事件', // 分享标题
                desc: '', // 分享描述
                link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '', // 分享图标
                success: function () {
                    // 设置成功
                }
            })
        });
    })

})

//判断索引题目是否已答
function IsAnwsered(index) {
    var qname = "q" + (index);
    anwser = $("input[name=" + qname + "]:checked").val();
    if (anwser != undefined) {
        return true;
    } else {
        return false;
    }
}

// 在label每点击一次，当前页数+1，并传给swiper-pagination-bullet
function PaginationChange(index) {
    $(".swiper-pagination-bullet").each(function () {
        if ($(this).html() == index) {
            $(this).addClass("pagination-checkyet");
        }
    });
}

//添加答案-》到answerArr[i]
function ArrayInsert(index, item) {
    var str = index + "-";
    var result = false;
    if (answerArr.length == 0) {
        answerArr.splice(index - 1, 0, str + item);
    } else {
        for (var i = 0; i < answerArr.length; i++) {
            if (isContains(answerArr[i], str)) {
                answerArr[i] = str + item;
                result = true;
                break;
            }
        }
        if (!result) {
            answerArr.splice(index - 1, 0, str + item);
        }
    }
}

//判断是不是同一道题的答案
function isContains(str, substr) {
    return new RegExp(substr).test(str);
}

//获取选项对应的答案
function AnswerInit() {
    $("input[type='radio']").attr("disabled", "disabled");
    if (answerArr.length > 0) {
        ShowAnwser(answerArr)
    } else {
        $("#slide_8").html('<div style="color:#fff">只有选择了才有结果呀~</div>')
    }
}

//结果分享页-》选项答案和标签
function ShowAnwser(data) {
    // console.log(data)
    let answerMonthSort = new Array();
    let answerDaySort = new Array();
    if (data) {
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            let flag = $("#eventsSwiper").find(".question-" + (i + 1)).find(".answer-" + data[i]).find("ul li");
            if (flag.length > 1) {
                for (let i = 0; i < flag.length; i++) {
                    flagArr.push(flag[i].innerText)
                }
            } else {
                flagArr.push(flag.text())
            }
            $("#slide_8").find(".answer-last-" + (i + 1)).html($("#eventsSwiper").find(".question-" + (i + 1)).find(".answer-" + data[i]).find("span").text())
        }
        maxstringload(flagArr)
        flagDescribe(maxstringload(flagArr))
        $("#slide_8").find(".title-bg").html(flagDescribe(maxstringload(flagArr)))
    }
}

//判断出现最多次数的字符
function maxstringload(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i]; //key中存储的是每一个字符串
        if (obj[key]) { //判断这个键值对中有没有这个键
            obj[key]++;
        } else {
            obj[key] = 1; //obj[w]=1
        }
    }
    var maxCount = 0; //假设是出现次数最多的次数
    var maxString = ""; //假设这个字符串是次数出现最多的字符串
    for (var key in obj) {
        if (maxCount < obj[key]) {
            maxCount = obj[key]; //保存最大的次数
            maxString = key;
        }
    }
    return maxString;
}

//不同的标签对应不同的描述
function flagDescribe(item) {
    let describe = "2019年，"
    switch (item) {
        case "国际":
            describe += "你纵观时事，国内外动态尽收眼底";
            break;
        case "人文科技":
            describe += "你与有荣焉，见证着科技飞速发展";
            break;
        case "社会":
            describe += "你或悲或喜，看尽这世间人情冷暖";
            break;
        case "互联网":
            describe += "你畅游网络，掌握着一手热点资讯";
            break;
        case "企业":
            describe += "你享受人生，关心与生活相关的事";
            break;
        case "娱乐":
            describe += "你热爱八卦，总是奋斗在一线吃瓜";
            break;
        default:
            describe += "你慷慨激昂，为祖国点滴进步喝彩";
    }
    return describe;
}