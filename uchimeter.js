
//焼き　部位がプロパティとなる
const BuiYaki   = function(shio, tare, suyaki, miso) {
    this.shio   = shio;
    this.tare   = tare;
    this.suyaki = suyaki;
    this.miso   = miso;
    this.result = this.shio + this.tare + this.suyaki + this.miso;
    this.total  = function() { return this.result; };
    this.getAjiArray = function() {
        const ajiArray = [this.shio, this.tare, this.suyaki, this.miso, this.boil];
        return ajiArray;
    };
};

//ナマ　部位がプロパティとなる
const BuiNama = function(reba, shiro, gatsu, abura, nankotsu, hatsu, teppou, kobukuro, tan) {
    this.reba = reba;
    this.shiro = shiro;
    this.gatsu = gatsu;
    this.abura = abura;
    this.nankotsu = nankotsu;
    this.hatsu = hatsu;
    this.teppou = teppou;
    this.kobukuro = kobukuro;
    this.tan = tan;
    this.getNamaArray = function() {
        const namaArray = [this.reba, this.shiro, this.gatsu, this.abura, this.nankotsu, this.hatsu, this.teppou, this.kobukuro, this.tan];
        return namaArray;
    }
}

//煮込み
const Nikomi = function(nikomi, hone) {
    this.nikomi = nikomi;
    this.hone = hone;
    this.getNikomiArray = function() {
        const nikomiArray = [this.nikomi, this.hone];
        return nikomiArray;
    }
}

//お新香
const Oshinko = function(oshinko, daikon) {
    this.oshinko = oshinko;
    this.daikon = daikon;
    this.getOshinkoArray = function() {
        const oshinkoArray = [this.oshinko, this.daikon];
        return oshinkoArray;
    }
}

//飲みもの
const Drink = function(ume, budo, beer, kobin, oolong) {
    this.ume = ume;
    this.budo = budo;
    this.beer = beer;
    this.kobin = kobin;
    this.oolong = oolong;
    this.getDrinkArray = function() {
        const drinkArray = [this.ume, this.budo, this.beer, this.kobin, this.oolong];
        return drinkArray;
    }
}

window.onload = function() {

    //BuiYaki(塩, タレ, 素焼き, 味噌)
    //レバ
    const rebaObj = new BuiYaki(40, 52, 8, 19);
    const rebaArray = rebaObj.getAjiArray();
    //シロ
    const shiroObj = new BuiYaki(2, 32, 28, 10);
    const shiroArray = shiroObj.getAjiArray();
    //ガツ
    const gatsuObj = new BuiYaki(25, 4, 9, 0);
    const gatsuArray = gatsuObj.getAjiArray();
    //アブラ
    const aburaObj = new BuiYaki(9, 111, 4, 9);
    const aburaArray = aburaObj.getAjiArray();
    //ナンコツ
    const nankotsuObj = new BuiYaki(38, 10, 22, 0);
    const nankotsuArray = nankotsuObj.getAjiArray();
    //ハツ
    const hatsuObj = new BuiYaki(69, 2, 4, 0);
    const hatsuArray = hatsuObj.getAjiArray();
    //カシラ
    const kashiraObj = new BuiYaki(41, 26, 31, 0);
    const kashiraArray = kashiraObj.getAjiArray();
    //ツル
    const tsuruObj = new BuiYaki(9, 4, 0, 0);
    const tsuruArray = tsuruObj.getAjiArray();

    //BuiNama(レバ, シロ, ガツ, アブラ, ナンコツ, ハツ, テッポウ, コブクロ, タン)
    const namaObj = new BuiNama(49, 12, 40, 32, 11, 16, 18, 7, 63);
    const namaArray = namaObj.getNamaArray();
    
    //Nikomi(煮込み, ホネ)
    const nikomiObj = new Nikomi(50, 21);
    const nikomiArray = nikomiObj.getNikomiArray();

    //Oshinko(お新香, 大根)
    const oshinkoObj = new Oshinko(55, 86);
    const oshinkoArray = oshinkoObj.getOshinkoArray();

    //drinkObj(ウメ, ブドウ, ビール, 小瓶, ウーロン茶)
    const drinkObj = new Drink(395.5, 63, 1, 2, 2);
    const drinkArray = drinkObj.getDrinkArray();


    //レバ焼き
    const reba_tare_elem   = document.getElementById('reba_tare');
    const reba_shio_elem   = document.getElementById('reba_shio');
    const reba_suyaki_elem = document.getElementById('reba_suyaki');
    const reba_miso_elem   = document.getElementById('reba_miso');
    const reba_total_elem  = document.getElementById('reba_total');
    //シロ焼き
    const shiro_tare_elem   = document.getElementById('shiro_tare');
    const shiro_shio_elem   = document.getElementById('shiro_shio');
    const shiro_suyaki_elem = document.getElementById('shiro_suyaki');
    const shiro_miso_elem   = document.getElementById('shiro_miso');
    const shiro_total_elem  = document.getElementById('shiro_total');
    //ガツ焼き
    const gatsu_tare_elem   = document.getElementById('gatsu_tare');
    const gatsu_shio_elem   = document.getElementById('gatsu_shio');
    const gatsu_suyaki_elem = document.getElementById('gatsu_suyaki');
    const gatsu_miso_elem   = document.getElementById('gatsu_miso');
    const gatsu_total_elem  = document.getElementById('gatsu_total');
    //アブラ焼き
    const abura_tare_elem   = document.getElementById('abura_tare');
    const abura_shio_elem   = document.getElementById('abura_shio');
    const abura_suyaki_elem = document.getElementById('abura_suyaki');
    const abura_miso_elem   = document.getElementById('abura_miso');
    const abura_total_elem  = document.getElementById('abura_total');
    //ナンコツ焼き
    const nankotsu_tare_elem   = document.getElementById('nankotsu_tare');
    const nankotsu_shio_elem   = document.getElementById('nankotsu_shio');
    const nankotsu_suyaki_elem = document.getElementById('nankotsu_suyaki');
    const nankotsu_miso_elem   = document.getElementById('nankotsu_miso');
    const nankotsu_total_elem  = document.getElementById('nankotsu_total');
    //ハツ焼き
    const hatsu_tare_elem   = document.getElementById('hatsu_tare');
    const hatsu_shio_elem   = document.getElementById('hatsu_shio');
    const hatsu_suyaki_elem = document.getElementById('hatsu_suyaki');
    const hatsu_miso_elem   = document.getElementById('hatsu_miso');
    const hatsu_total_elem  = document.getElementById('hatsu_total');
    //カシラ焼き
    const kashira_tare_elem   = document.getElementById('kashira_tare');
    const kashira_shio_elem   = document.getElementById('kashira_shio');
    const kashira_suyaki_elem = document.getElementById('kashira_suyaki');
    const kashira_miso_elem   = document.getElementById('kashira_miso');
    const kashira_total_elem  = document.getElementById('kashira_total');
    //ツル焼き
    const tsuru_tare_elem   = document.getElementById('tsuru_tare');
    const tsuru_shio_elem   = document.getElementById('tsuru_shio');
    const tsuru_suyaki_elem = document.getElementById('tsuru_suyaki');
    const tsuru_miso_elem   = document.getElementById('tsuru_miso');
    const tsuru_total_elem  = document.getElementById('tsuru_total');

    //ナマ
    const reba_nama_elem     = document.getElementById('reba_nama');        //レバ
    const shiro_nama_elem    = document.getElementById('shiro_nama');       //シロ
    const gatsu_nama_elem    = document.getElementById('gatsu_nama');       //ガツ
    const abura_nama_elem    = document.getElementById('abura_nama');       //アブラ
    const nankotsu_nama_elem = document.getElementById('nankotsu_nama');    //ナンコツ
    const hatsu_nama_elem    = document.getElementById('hatsu_nama');       //ハツ
    const teppou_nama_elem   = document.getElementById('teppou_nama');      //テッポウ
    const kobukuro_nama_elem = document.getElementById('kobukuro_nama');    //コブクロ
    const tan_nama_elem      = document.getElementById('tan_nama');         //タン

    const nikomi_elem      = document.getElementById('nikomi');       //煮込み
    const hone_elem        = document.getElementById('hone');         //ホネ

    const oshinko_elem      = document.getElementById('oshinko');        //お新香
    const daikon_elem       = document.getElementById('daikon');         //大根

    const ume_elem          = document.getElementById('ume');         //ウメ
    const budo_elem         = document.getElementById('budo');         //ブドウ
    const beer_elem         = document.getElementById('beer');         //ビール
    const kobin_elem        = document.getElementById('kobin');         //小瓶
    const oolong_elem       = document.getElementById('oolong');         //ウーロン茶


    //レバ焼き
    reba_shio_elem.innerText   = rebaArray[0];
    reba_tare_elem.innerText   = rebaArray[1];
    reba_suyaki_elem.innerText = rebaArray[2];
    reba_miso_elem.innerText   = rebaArray[3];
    reba_total_elem.innerText  = rebaObj.result;

    //シロ焼き
    shiro_shio_elem.innerText   = shiroArray[0];
    shiro_tare_elem.innerText   = shiroArray[1];
    shiro_suyaki_elem.innerText = shiroArray[2];
    shiro_miso_elem.innerText   = shiroArray[3];
    shiro_total_elem.innerText  = shiroObj.result;
    //シロ焼き
    gatsu_shio_elem.innerText   = gatsuArray[0];
    gatsu_tare_elem.innerText   = gatsuArray[1];
    gatsu_suyaki_elem.innerText = gatsuArray[2];
    gatsu_miso_elem.innerText   = gatsuArray[3];
    gatsu_total_elem.innerText  = gatsuObj.result;
    //アブラ焼き
    abura_shio_elem.innerText   = aburaArray[0];
    abura_tare_elem.innerText   = aburaArray[1];
    abura_suyaki_elem.innerText = aburaArray[2];
    abura_miso_elem.innerText   = aburaArray[3];
    abura_total_elem.innerText  = aburaObj.result;
    //ナンコツ焼き
    nankotsu_shio_elem.innerText   = nankotsuArray[0];
    nankotsu_tare_elem.innerText   = nankotsuArray[1];
    nankotsu_suyaki_elem.innerText = nankotsuArray[2];
    nankotsu_miso_elem.innerText   = nankotsuArray[3];
    nankotsu_total_elem.innerText  = nankotsuObj.result;
    //ハツ焼き
    hatsu_shio_elem.innerText   = hatsuArray[0];
    hatsu_tare_elem.innerText   = hatsuArray[1];
    hatsu_suyaki_elem.innerText = hatsuArray[2];
    hatsu_miso_elem.innerText   = hatsuArray[3];
    hatsu_total_elem.innerText  = hatsuObj.result;
    //カシラ焼き
    kashira_shio_elem.innerText   = kashiraArray[0];
    kashira_tare_elem.innerText   = kashiraArray[1];
    kashira_suyaki_elem.innerText = kashiraArray[2];
    kashira_miso_elem.innerText   = kashiraArray[3];
    kashira_total_elem.innerText  = kashiraObj.result;
    //ツル焼き
    tsuru_shio_elem.innerText   = tsuruArray[0];
    tsuru_tare_elem.innerText   = tsuruArray[1];
    tsuru_suyaki_elem.innerText = tsuruArray[2];
    tsuru_miso_elem.innerText   = tsuruArray[3];
    tsuru_total_elem.innerText  = tsuruObj.result;
    //ナマ
    reba_nama_elem.innerText      = namaArray[0];
    shiro_nama_elem.innerText     = namaArray[1];
    gatsu_nama_elem.innerText     = namaArray[2];
    abura_nama_elem.innerText     = namaArray[3];
    nankotsu_nama_elem.innerText  = namaArray[4];
    hatsu_nama_elem.innerText     = namaArray[5];
    teppou_nama_elem.innerText    = namaArray[6];
    kobukuro_nama_elem.innerText  = namaArray[7];
    tan_nama_elem.innerText       = namaArray[8];
    //煮込み
    nikomi_elem.innerText       = nikomiArray[0];
    hone_elem.innerText         = nikomiArray[1];
    //お新香
    oshinko_elem.innerText      = oshinkoArray[0];
    daikon_elem.innerText       = oshinkoArray[1];
    //飲みもの
    ume_elem.innerText          = drinkArray[0];
    budo_elem.innerText         = drinkArray[1];
    beer_elem.innerText         = drinkArray[2];
    kobin_elem.innerText        = drinkArray[3];
    oolong_elem.innerText       = drinkArray[4];

}
