
window.onload = function() {

    //BuiYaki(塩, タレ, 素焼き, 味噌)
    //レバ
    const rebaObj = new BuiYaki(71, 113, 8, 25);
    const rebaArray = rebaObj.getAjiArray();
    //シロ
    const shiroObj = new BuiYaki(2, 44, 64, 10);
    const shiroArray = shiroObj.getAjiArray();
    //ガツ
    const gatsuObj = new BuiYaki(29, 6, 9, 0);
    const gatsuArray = gatsuObj.getAjiArray();
    //アブラ
    const aburaObj = new BuiYaki(34, 139, 4, 14);
    const aburaArray = aburaObj.getAjiArray();
    //ナンコツ
    const nankotsuObj = new BuiYaki(52, 12, 22, 0);
    const nankotsuArray = nankotsuObj.getAjiArray();
    //ハツ
    const hatsuObj = new BuiYaki(113, 2, 6, 1);
    const hatsuArray = hatsuObj.getAjiArray();
    //カシラ
    const kashiraObj = new BuiYaki(50, 28, 52, 2);
    const kashiraArray = kashiraObj.getAjiArray();
    //ツル
    const tsuruObj = new BuiYaki(11, 6, 0, 0);
    const tsuruArray = tsuruObj.getAjiArray();

    //BuiNama(レバ, シロ, ガツ, アブラ, ナンコツ, ハツ, テッポウ, コブクロ, タン)
    const namaObj = new BuiNama(79, 27, 58, 42, 20, 18, 28, 13, 87);
    const namaArray = namaObj.getNamaArray();
    
    //Nikomi(煮込み, ホネ)
    const nikomiObj = new Nikomi(62, 36);
    const nikomiArray = nikomiObj.getNikomiArray();

    //Oshinko(お新香, 大根)
    const oshinkoObj = new Oshinko(83, 137);
    const oshinkoArray = oshinkoObj.getOshinkoArray();

    //drinkObj(ウメ, ブドウ, ビール, 小瓶, ウーロン茶)
    const drinkObj = new Drink(526.5, 144, 1, 2, 2);
    const drinkArray = drinkObj.getDrinkArray();

    //レバ焼き
    $('#' + REBA_SHIO).text(rebaArray[0]);
    $('#' + REBA_TARE).text(rebaArray[1]);
    $('#' + REBA_SUYAKI).text(rebaArray[2]); 
    $('#' + REBA_MISO).text(rebaArray[3]);
    $('#' + REBA_TOTAL).text(rebaObj.result);

    //シロ焼き
    $('#' + SHIRO_SHIO).text(shiroArray[0]);
    $('#' + SHIRO_TARE).text(shiroArray[1]);
    $('#' + SHIRO_SUYAKI).text(shiroArray[2]);
    $('#' + SHIRO_MISO).text(shiroArray[3]);
    $('#' + SHIRO_TOTAL).text(shiroObj.result);

    //ガツ焼き
    $('#' + GATSU_SHIO).text(gatsuArray[0]);
    $('#' + GATSU_TARE).text(gatsuArray[1]);
    $('#' + GATSU_SUYAKI).text(gatsuArray[2]);
    $('#' + GATSU_MISO).text(gatsuArray[3]);
    $('#' + GATSU_TOTAL).text(gatsuObj.result);

    //アブラ焼き
    $('#' + ABURA_SHIO).text(aburaArray[0]);
    $('#' + ABURA_TARE).text(aburaArray[1]);
    $('#' + ABURA_SUYAKI).text(aburaArray[2]);
    $('#' + ABURA_MISO).text(aburaArray[3]);
    $('#' + ABURA_TOTAL).text(aburaObj.result);

    //ナンコツ焼き
    $('#' + NANKOTSU_SHIO).text(nankotsuArray[0]);
    $('#' + NANKOTSU_TARE).text(nankotsuArray[1]);
    $('#' + NANKOTSU_SUYAKI).text(nankotsuArray[2]);
    $('#' + NANKOTSU_MISO).text(nankotsuArray[3]);
    $('#' + NANKOTSU_TOTAL).text(nankotsuObj.result);

    //ハツ焼き
    $('#' + HATSU_SHIO).text(hatsuArray[0]);
    $('#' + HATSU_TARE).text(hatsuArray[1]);
    $('#' + HATSU_SUYAKI).text(hatsuArray[2]);
    $('#' + HATSU_MISO).text(hatsuArray[3]);
    $('#' + HATSU_TOTAL).text(hatsuObj.result);

    //カシラ焼き
    $('#' + KASHIRA_SHIO).text(kashiraArray[0]);
    $('#' + KASHIRA_TARE).text(kashiraArray[1]);
    $('#' + KASHIRA_SUYAKI).text(kashiraArray[2]);
    $('#' + KASHIRA_MISO).text(kashiraArray[3]);
    $('#' + KASHIRA_TOTAL).text(kashiraObj.result);

    //ツル焼き
    $('#' + TSURU_SHIO).text(tsuruArray[0]);
    $('#' + TSURU_TARE).text(tsuruArray[1]);
    $('#' + TSURU_SUYAKI).text(tsuruArray[2]);
    $('#' + TSURU_MISO).text(tsuruArray[3]);
    $('#' + TSURU_TOTAL).text(tsuruObj.result);

    //ナマ
    $('#' + REBA_NAMA).text(namaArray[0]);
    $('#' + SHIRO_NAMA).text(namaArray[1]);
    $('#' + GATSU_NAMA).text(namaArray[2]);
    $('#' + ABURA_NAMA).text(namaArray[3]);
    $('#' + NANKOTSU_NAMA).text(namaArray[4]);
    $('#' + HATSU_NAMA).text(namaArray[5]);
    $('#' + TEPPOU_NAMA).text(namaArray[6]);
    $('#' + KOBUKURO_NAMA).text(namaArray[7]);
    $('#' + TAN_NAMA).text(namaArray[8]);

    //煮込み
    $('#' + NIKOMI).text(nikomiArray[0]);
    $('#' + HONE).text(nikomiArray[1]);

    //お新香
    $('#' + OSHINKO).text(oshinkoArray[0]);
    $('#' + DAIKON).text(oshinkoArray[1]);

    //飲み物
    $('#' + UME).text(drinkArray[0]);
    $('#' + BUDO).text(drinkArray[1]);
    $('#' + BEER).text(drinkArray[2]);
    $('#' + KOBIN).text(drinkArray[3]);
    $('#' + OOLONG).text(drinkArray[4]);


    //レバ焼き
    /*
    const reba_tare_elem   = document.getElementById(REBA_TARE);
    const reba_shio_elem   = document.getElementById(REBA_SHIO);
    const reba_suyaki_elem = document.getElementById(REBA_SUYAKI);
    const reba_miso_elem   = document.getElementById(REBA_MISO);
    const reba_total_elem  = document.getElementById(REBA_TOTAL);
    */
    //シロ焼き
    /*
    const shiro_tare_elem   = document.getElementById(SHIRO_TARE);
    const shiro_shio_elem   = document.getElementById(SHIRO_SHIO);
    const shiro_suyaki_elem = document.getElementById(SHIRO_SUYAKI);
    const shiro_miso_elem   = document.getElementById(SHIRO_MISO);
    const shiro_total_elem  = document.getElementById(SHIRO_TOTAL);
    */
    //ガツ焼き
    /*
    const gatsu_tare_elem   = document.getElementById(GATSU_TARE);
    const gatsu_shio_elem   = document.getElementById(GATSU_SHIO);
    const gatsu_suyaki_elem = document.getElementById(GATSU_SUYAKI);
    const gatsu_miso_elem   = document.getElementById(GATSU_MISO);
    const gatsu_total_elem  = document.getElementById(GATSU_TOTAL);
    */
    //アブラ焼き
    /*
    const abura_tare_elem   = document.getElementById(ABURA_TARE);
    const abura_shio_elem   = document.getElementById(ABURA_SHIO);
    const abura_suyaki_elem = document.getElementById(ABURA_SUYAKI);
    const abura_miso_elem   = document.getElementById(ABURA_MISO);
    const abura_total_elem  = document.getElementById(ABURA_TOTAL);
    */
    //ナンコツ焼き
    /*
    const nankotsu_tare_elem   = document.getElementById(NANKOTSU_TARE);
    const nankotsu_shio_elem   = document.getElementById(NANKOTSU_SHIO);
    const nankotsu_suyaki_elem = document.getElementById(NANKOTSU_SUYAKI);
    const nankotsu_miso_elem   = document.getElementById(NANKOTSU_MISO);
    const nankotsu_total_elem  = document.getElementById(NANKOTSU_TOTAL);
    */
    //ハツ焼き
    /*
    const hatsu_tare_elem   = document.getElementById(HATSU_TARE);
    const hatsu_shio_elem   = document.getElementById(HATSU_SHIO);
    const hatsu_suyaki_elem = document.getElementById(HATSU_SUYAKI);
    const hatsu_miso_elem   = document.getElementById(HATSU_MISO);
    const hatsu_total_elem  = document.getElementById(HATSU_TOTAL);
    */
    //カシラ焼き
    /*/
    const kashira_tare_elem   = document.getElementById(KASHIRA_TARE);
    const kashira_shio_elem   = document.getElementById(KASHIRA_SHIO);
    const kashira_suyaki_elem = document.getElementById(KASHIRA_SUYAKI);
    const kashira_miso_elem   = document.getElementById(KASHIRA_MISO);
    const kashira_total_elem  = document.getElementById(KASHIRA_TOTAL);
    */
    //ツル焼き
    /*
    const tsuru_tare_elem   = document.getElementById(TSURU_TARE);
    const tsuru_shio_elem   = document.getElementById(TSURU_SHIO);
    const tsuru_suyaki_elem = document.getElementById(TSURU_SUYAKI);
    const tsuru_miso_elem   = document.getElementById(TSURU_MISO);
    const tsuru_total_elem  = document.getElementById(TSURU_TOTAL);
    */

    //ナマ
    /*
    const reba_nama_elem     = document.getElementById(REBA_NAMA);        //レバ
    const shiro_nama_elem    = document.getElementById(SHIRO_NAMA);       //シロ
    const gatsu_nama_elem    = document.getElementById(GATSU_NAMA);       //ガツ
    const abura_nama_elem    = document.getElementById(ABURA_NAMA);       //アブラ
    const nankotsu_nama_elem = document.getElementById(NANKOTSU_NAMA);    //ナンコツ
    const hatsu_nama_elem    = document.getElementById(HATSU_NAMA);       //ハツ
    const teppou_nama_elem   = document.getElementById(TEPPOU_NAMA);      //テッポウ
    const kobukuro_nama_elem = document.getElementById(KOBUKURO_NAMA);    //コブクロ
    const tan_nama_elem      = document.getElementById(TAN_NAMA);         //タン

    const nikomi_elem      = document.getElementById(NIKOMI);             //煮込み
    const hone_elem        = document.getElementById(HONE);               //ホネ

    const oshinko_elem      = document.getElementById(OSHINKO);           //お新香
    const daikon_elem       = document.getElementById(DAIKON);            //大根

    const ume_elem          = document.getElementById(UME);               //ウメ
    const budo_elem         = document.getElementById(BUDO);              //ブドウ
    const beer_elem         = document.getElementById(BEER);              //ビール
    const kobin_elem        = document.getElementById(KOBIN);             //小瓶
    const oolong_elem       = document.getElementById(OOLONG);            //ウーロン茶
    */

    //レバ焼き
    /*
    reba_shio_elem.innerText   = rebaArray[0];
    reba_tare_elem.innerText   = rebaArray[1];
    reba_suyaki_elem.innerText = rebaArray[2];
    reba_miso_elem.innerText   = rebaArray[3];
    reba_total_elem.innerText  = rebaObj.result;
    */

    //シロ焼き
    /*
    shiro_shio_elem.innerText   = shiroArray[0];
    shiro_tare_elem.innerText   = shiroArray[1];
    shiro_suyaki_elem.innerText = shiroArray[2];
    shiro_miso_elem.innerText   = shiroArray[3];
    shiro_total_elem.innerText  = shiroObj.result;
    */
    //ガツ焼き
    /*
    gatsu_shio_elem.innerText   = gatsuArray[0];
    gatsu_tare_elem.innerText   = gatsuArray[1];
    gatsu_suyaki_elem.innerText = gatsuArray[2];
    gatsu_miso_elem.innerText   = gatsuArray[3];
    gatsu_total_elem.innerText  = gatsuObj.result;
    */
    //アブラ焼き
    /*
    abura_shio_elem.innerText   = aburaArray[0];
    abura_tare_elem.innerText   = aburaArray[1];
    abura_suyaki_elem.innerText = aburaArray[2];
    abura_miso_elem.innerText   = aburaArray[3];
    abura_total_elem.innerText  = aburaObj.result;
    */    
    //ナンコツ焼き
    /*
    nankotsu_shio_elem.innerText   = nankotsuArray[0];
    nankotsu_tare_elem.innerText   = nankotsuArray[1];
    nankotsu_suyaki_elem.innerText = nankotsuArray[2];
    nankotsu_miso_elem.innerText   = nankotsuArray[3];
    nankotsu_total_elem.innerText  = nankotsuObj.result;
    */
    //ハツ焼き
    /*
    hatsu_shio_elem.innerText   = hatsuArray[0];
    hatsu_tare_elem.innerText   = hatsuArray[1];
    hatsu_suyaki_elem.innerText = hatsuArray[2];
    hatsu_miso_elem.innerText   = hatsuArray[3];
    hatsu_total_elem.innerText  = hatsuObj.result;
    */
    //カシラ焼き
    /*
    kashira_shio_elem.innerText   = kashiraArray[0];
    kashira_tare_elem.innerText   = kashiraArray[1];
    kashira_suyaki_elem.innerText = kashiraArray[2];
    kashira_miso_elem.innerText   = kashiraArray[3];
    kashira_total_elem.innerText  = kashiraObj.result;
    */
    //ツル焼き
    /*
    tsuru_shio_elem.innerText   = tsuruArray[0];
    tsuru_tare_elem.innerText   = tsuruArray[1];
    tsuru_suyaki_elem.innerText = tsuruArray[2];
    tsuru_miso_elem.innerText   = tsuruArray[3];
    tsuru_total_elem.innerText  = tsuruObj.result;
    */
    //ナマ
    /*
    reba_nama_elem.innerText      = namaArray[0];
    shiro_nama_elem.innerText     = namaArray[1];
    gatsu_nama_elem.innerText     = namaArray[2];
    abura_nama_elem.innerText     = namaArray[3];
    nankotsu_nama_elem.innerText  = namaArray[4];
    hatsu_nama_elem.innerText     = namaArray[5];
    teppou_nama_elem.innerText    = namaArray[6];
    kobukuro_nama_elem.innerText  = namaArray[7];
    tan_nama_elem.innerText       = namaArray[8];
    */
    //煮込み
    /*
    nikomi_elem.innerText       = nikomiArray[0];
    hone_elem.innerText         = nikomiArray[1];
    */
    //お新香
    /*
    oshinko_elem.innerText      = oshinkoArray[0];
    daikon_elem.innerText       = oshinkoArray[1];
    */
    //飲みもの
    /*
    ume_elem.innerText          = drinkArray[0];
    budo_elem.innerText         = drinkArray[1];
    beer_elem.innerText         = drinkArray[2];
    kobin_elem.innerText        = drinkArray[3];
    oolong_elem.innerText       = drinkArray[4];
    */
}
