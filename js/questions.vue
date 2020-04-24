<template>
    <div class="container">
            <div class="row mb-5">
                <div class="col-md-8">
                    <div v-if="!inProcess" class="my-quiz-wrap-settings">
                        <div class="row mt-5 mb-4">
                            <div class="col-md-2 mb-4">
                                <h6>Limba/Язык</h6>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="lg1" v-model="lg" value="ro">
                                    <label class="form-check-label" for="lg1">
                                        Română
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio"  id="lg2" v-model="lg" value="ru">
                                    <label class="form-check-label" for="lg2">
                                        Русский
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-5 mb-4">
                                <h6>Категория</h6>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="category" id="category1" value="AB">
                                    <label class="form-check-label" for="category1">
                                       Категории A, B (20 вопросов)
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="category" id="category2" value="CDE">
                                    <label class="form-check-label" for="category2">
                                        Категории С, D, E (26 вопросов)
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-5 mb-4">
                                <h6>Номер Билета</h6>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="cardType" id="cardType1" value="randomCard">
                                    <label class="form-check-label" for="cardType1">
                                        Случайный номер билета
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="cardType" id="cardType2" value="specificCard">
                                    <label class="form-check-label" for="cardType2">
                                        Определённый:
                                    </label>
                                    <select :disabled="cardType !== 'specificCard'">
                                        <option v-for="n in 35" :value="n">{{n}}</option>
                                    </select>
                                </div>
                                <div class="form-check disabled">
                                    <input class="form-check-input" type="radio" v-model="cardType" id="cardType3" value="randomQuestions">
                                    <label class="form-check-label" for="cardType3">
                                        Набор (билет с произвольными вопросами)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-md-8">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"v-model="useMistakeChecker" id="useMistakeChecker">
                                    <label class="form-check-label" for="useMistakeChecker">
                                        Выдавать все вопросы выбраного билета/набора независимо от правельности ответов.
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="useCountDownTimer" id="useCountDownTimer">
                                    <label class="form-check-label" for="useCountDownTimer">
                                        Обратный отсчет времени
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <button type="button" class="btn btn-success btn-lg btn-block" @click="initGo">Поехали!</button>
                            </div>
                        </div>
                    </div>
                    <div v-if="inProcess" class="my-quiz-wrap" v-bind:class="{myBlur: !inProcess}">
                        <!--Timmer-->
                        <div v-if="useCountDownTimer" class="text-right">
                            <span>{{timeLeft}}</span>
                        </div>
                        <!--Timmer-->

                        <!--Title-->
                        <div class="text-center">
                            <h3>Title Task 1</h3>
                        </div>
                        <!--Title-->

                        <!--Items-->
                        <div class="text-center">
                            <ul class="list-inline">
                                <li v-for="item in 20" class="list-inline-item">
                                    <button @click="setCurrQue(item)" type="button" class="btn btn-light btn-circle mt-2">{{item}}</button>
                                </li>
                            </ul>
                        </div>
                        <!--Items-->

                        <!--Image-->
                        <div class="text-center">
                            <img src="https://vcode.md/wp-content/themes/vcode/quiz/images/0105.jpg" class="img-fluid" alt="Responsive image">
                        </div>
                        <!--Image-->

                        <!--Question-->
                        <div class="text-center mt-5 mb-5">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius deleniti molestias possimus eos expedita eveniet earum aperiam, totam eum explicabo. Doloremque aliquam error ratione iusto, veniam laudantium perspiciatis numquam.</h6>
                        </div>
                        <!--Question-->

                        <!--Answers-->
                        <div class="text-justify">
                            <ul class="list-unstyled">
                                <li v-for="item in 3" class="pb-3">
                                    <button @click="answer()" type="button" class="btn btn-outline-primary bt-md btn-block">Primary</button>
                                </li>
                            </ul>
                        </div>
                        <!--Answers-->
                    </div>
                </div>
                <div class="col-md-4">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVCODEDS%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=985241954961860" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        </div>
</template>


<script>
    var intervalTimer;

    export default {
            name: 'questions',
            data: function() {
                return { 
                    message: 'Hello World!',
                    lg: window.location.pathname.split('/')[1],
                    category: 'AB',
                    cardType: 'randomCard',
                    useMistakeChecker: true,
                    useCountDownTimer: true,
                    inProcess: false,
                    timeLeft: '00:00',
                    time: 1800,
                }
            },
            created: function() {

            },
            mounted: function(){
                // this.setTime(this.time);
                // use proxy to solve cors
                // https://cors-anywhere.herokuapp.com/https://node.vcode.md/apiQuiz/
                this.$http.get('https://cors-anywhere.herokuapp.com/https://node.vcode.md/apiQuiz/')
                    .then((result) => {
                        console.log(result)
                    })
            },
            methods: {
                setTime(seconds) {
                    clearInterval(intervalTimer);
                    this.timer(seconds);
                },
                timer(seconds) {
                    const now = Date.now();
                    const end = now + seconds * 1000;
                    this.displayTimeLeft(seconds);

                    this.displayEndTime(end);
                    this.countdown(end);
                },
                countdown(end) {
                    intervalTimer = setInterval(() => {
                        const secondsLeft = Math.round((end - Date.now()) / 1000);

                        if(secondsLeft === 0) {
                            this.endTime = 0;
                        }

                        if(secondsLeft < 0) {
                            clearInterval(intervalTimer);
                            return;
                        }
                        this.displayTimeLeft(secondsLeft)
                    }, 1000);
                },
                displayTimeLeft(secondsLeft) {
                    const minutes = Math.floor((secondsLeft % 3600) / 60);
                    const seconds = secondsLeft % 60;

                    this.timeLeft = `${zeroPadded(minutes)}:${zeroPadded(seconds)}`;
                },
                displayEndTime(timestamp) {
                    const end = new Date(timestamp);
                    const hour = end.getHours();
                    const minutes = end.getMinutes();
                },


                setCurrQue: function(id) {
                    alert(id);
                },
                answer: function() {
                    console.log('true');
                },
                startQuiz: function() {

                },
                stopQuiz: function() {

                },
                initGo: function () {
                    this.inProcess = !this.inProcess

                    if(this.useCountDownTimer){
                        this.setTime(this.time);
                    }
                }
            }
    }

    function zeroPadded(num) {
        // 4 --> 04
        return num < 10 ? `0${num}` : num;
    }

    function hourConvert(hour) {
        // 15 --> 3
        return (hour % 12) || 12;
    }
    
</script>

<style>
    .btn-circle.btn-xl {
        width: 70px;
        height: 70px;
        padding: 10px 16px;
        border-radius: 35px;
        font-size: 24px;
        line-height: 1.33;
    }

    .btn-circle {
        width: 30px;
        height: 30px;
        padding: 6px 0px;
        border-radius: 15px;
        text-align: center;
        font-size: 12px;
        line-height: 1.42857;
    }

    .myBlur {
        -webkit-filter: blur(9px);
        -moz-filter: blur(9px);
        -o-filter: blur(9px);
        -ms-filter: blur(9px);
        filter: blur(9px);
        pointer-events: none;
    }
</style>