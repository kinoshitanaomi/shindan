const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function startPersonalityTest() {
    console.log("あなたにぴったりの観葉植物診断");

    rl.question("質問1: どこに置きたい？ (玄関/トイレ/寝室/リビング) ", (answer1) => {
        rl.question("質問2: 置く場所の方角は？ (北/東/西/南) ", (answer2) => {
            rl.question("質問3: あなたがもっとも求めるものは？ (お金/愛/健康/魔除け) ", (answer3) => {
                let personalityType = "";

                if (answer1 === "玄関" && answer2 === "北" && answer3 === "お金") {
                    personalityType = "パキラ";
                } else if (answer1 === "寝室" && answer2 === "南" && answer3 === "愛") {
                    personalityType = "モンステラ";
                } else if (answer1 === "トイレ" && answer2 === "東" && answer3 === "健康") {
                    personalityType = "テーブルヤシ";
                } else if (answer1 === "リビング" && answer2 === "西" && answer3 === "魔除け") {
                    personalityType = "ウンベラータ";
                } else if (answer1 === "玄関" && answer2 === "南" && answer3 === "お金") {
                    personalityType = "サンスベリア";
                } else if (answer1 === "トイレ" && answer2 === "西" && answer3 === "健康") {
                    personalityType = "テーブルヤシ";
                } else {
                    personalityType = "ポトス";
                }

                console.log(`診断結果: ${personalityType}`);
                rl.close();
            });
        });
    });
}

startPersonalityTest();
