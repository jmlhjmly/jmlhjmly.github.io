//レバ 
const REBA_TARE   = 'reba_tare';
const REBA_SHIO   = 'reba_shio';
const REBA_SUYAKI = 'reba_suyaki';
const REBA_MISO   = 'reba_miso';
const REBA_TOTAL  = 'reba_total';

//塩
const SHIRO_TARE   = 'shiro_tare';
const SHIRO_SHIO   = 'shiro_shio';
const SHIRO_SUYAKI = 'shiro_suyaki';
const SHIRO_MISO   = 'shiro_miso';
const SHIRO_TOTAL  = 'shiro_total';

//ガツ
const GATSU_TARE   = 'gatsu_tare';
const GATSU_SHIO   = 'gatsu_shio';
const GATSU_SUYAKI = 'gatsu_suyaki';
const GATSU_MISO   = 'gatsu_miso';
const GATSU_TOTAL  = 'gatsu_total';

//アブラ
const ABURA_TARE   = 'abura_tare';
const ABURA_SHIO   = 'abura_shio';
const ABURA_SUYAKI = 'abura_suyaki';
const ABURA_MISO   = 'abura_miso';
const ABURA_TOTAL  = 'abura_total';

//ナンコツ
const NANKOTSU_TARE   = 'nankotsu_tare';
const NANKOTSU_SHIO   = 'nankotsu_shio';
const NANKOTSU_SUYAKI = 'nankotsu_suyaki';
const NANKOTSU_MISO   = 'nankotsu_miso';
const NANKOTSU_TOTAL  = 'nankotsu_total';

//ハツ
const HATSU_TARE   = 'hatsu_tare';
const HATSU_SHIO   = 'hatsu_shio';
const HATSU_SUYAKI = 'hatsu_suyaki';
const HATSU_MISO   = 'hatsu_miso';
const HATSU_TOTAL  = 'hatsu_total';

//カシラ
const KASHIRA_TARE   = 'kashira_tare';
const KASHIRA_SHIO   = 'kashira_shio';
const KASHIRA_SUYAKI = 'kashira_suyaki';
const KASHIRA_MISO   = 'kashira_miso';
const KASHIRA_TOTAL  = 'kashira_total';

//ツル
const TSURU_TARE   = 'tsuru_tare';
const TSURU_SHIO   = 'tsuru_shio';
const TSURU_SUYAKI = 'tsuru_suyaki';
const TSURU_MISO   = 'tsuru_miso';
const TSURU_TOTAL  = 'tsuru_total';

//ナマ
const REBA_NAMA     = 'reba_nama';        //レバ
const SHIRO_NAMA    = 'shiro_nama';       //シロ
const GATSU_NAMA    = 'gatsu_nama';       //ガツ
const ABURA_NAMA    = 'abura_nama';       //アブラ
const NANKOTSU_NAMA = 'nankotsu_nama';    //ナンコツ
const HATSU_NAMA    = 'hatsu_nama';       //ハツ
const TEPPOU_NAMA   = 'teppou_nama';      //テッポウ
const KOBUKURO_NAMA = 'kobukuro_nama';    //コブクロ
const TAN_NAMA      = 'tan_nama';         //タン

const NIKOMI        = 'nikomi';           //煮込み
const HONE          = 'hone';             //ホネ

const OSHINKO      = 'oshinko';           //お新香
const DAIKON       = 'daikon';            //大根

const UME          = 'ume';               //ウメ
const BUDO         = 'budo';              //ブドウ
const BEER         = 'beer';              //ビール
const KOBIN        = 'kobin';             //小瓶
const OOLONG       = 'oolong';            //ウーロン茶

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