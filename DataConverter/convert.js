const palName = require(`../GameData/Pals/DT_PalNameText.json`);
const palDesc = require(`../GameData/Pals/DT_PalLongDescriptionText.json`);
const palMosterData = require(`../GameData/Pals/DT_PalMonsterParameter.json`);
const fs = require('fs');



function createFinal() {
    const finalData = {};
    const pRows = palName[0]["Rows"];
    for(const pal in pRows) {
        const gameName = pal.replace('PAL_NAME_', '');
        const name = palName[0].Rows[pal].TextData.LocalizedString;
        const palData = palMosterData[0].Rows[gameName];

        const desc = palDesc[0]?.Rows["PAL_LONG_DESC_" + gameName]?.TextData?.LocalizedString;

        const rarity = palData?.Rarity || null;
        const elementMain = palData?.ElementType1 || null;
        const elementSub = palData?.ElementType2 || null;
        const genus = palData?.GenusCategory || null;
        const hp = palData?.HP || 0;
        const meleeAtk = palData?.MeleeAttack || 0;
        const shotAtk = palData?.ShotAttack || 0;
        const defense = palData?.Defense || 0;
        const support = palData?.Support || 0;
        const craftSpeed = palData?.CraftSpeed || 0;
        const price = palData?.Price || 0;
        const isBoss = palData?.IsBoss || false;
        const isTowerBoss = palData?.IsTowerBoss || false;
        const fullStomach = palData?.MaxFullStomach || 0;
        const stamina = palData?.Stamina || 0;
        const combiRank = palData?.CombiRank || 0;

        const isPal = palData?.IsPal || false;

        if(!isPal) continue;
        finalData[gameName] = {
            name,
            gameName,
            elementMain,
            elementSub,
            genus,
            desc,
            stats: {
                health: hp,
                meleeAtk,
                shotAtk,
                defense,
                support,
                craftSpeed,
                fullStomach,
                stamina,
                combiRank
            },
            price,
            isBoss,
            isTowerBoss,
            rarity,
        };
    }
    const json = JSON.stringify(finalData, null, 2);
    fs.writeFileSync('converted.json', json);
}

createFinal()