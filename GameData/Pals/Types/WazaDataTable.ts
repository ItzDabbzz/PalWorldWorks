export interface WazaDataTable {
    Type:       string;
    Class:      string;
    Properties: Properties;
    Name:       string;
    Rows:       { [key: string]: Row };
}

export interface Properties {
    RowStruct: RowStruct;
}

export interface RowStruct {
    ObjectPath: string;
    ObjectName: string;
}

export interface Row {
    Category:               Category;
    MinRange:               number;
    EffectValue1:           number;
    IsLeanBack:             boolean;
    Element:                Element;
    EffectValue2:           number;
    EffectValueEx1:         number;
    EffectValueEx2:         number;
    bIsWeaponDamage:        boolean;
    IgnoreRandomInherit:    boolean;
    SpecialAttackRateInfos: SpecialAttackRateInfo[];
    ForceRagdollSize:       ForceRagdollSize;
    CoolTime:               number;
    EffectType2:            EffectType;
    EffectType1:            EffectType;
    MaxRange:               number;
    CameraShake:            CameraShake;
    WazaType:               string;
    Power:                  number;
    DisabledData:           boolean;
}

export enum CameraShake {
    EPalPlayerDamageCameraShakeCategoryWazaL = "EPalPlayerDamageCameraShakeCategory::Waza_L",
    EPalPlayerDamageCameraShakeCategoryWazaM = "EPalPlayerDamageCameraShakeCategory::Waza_M",
    EPalPlayerDamageCameraShakeCategoryWazaS = "EPalPlayerDamageCameraShakeCategory::Waza_S",
}

export enum Category {
    EPalWazaCategoryMelee = "EPalWazaCategory::Melee",
    EPalWazaCategoryShot = "EPalWazaCategory::Shot",
}

export enum EffectType {
    EPalAdditionalEffectTypeBurn = "EPalAdditionalEffectType::Burn",
    EPalAdditionalEffectTypeDarkness = "EPalAdditionalEffectType::Darkness",
    EPalAdditionalEffectTypeElectrical = "EPalAdditionalEffectType::Electrical",
    EPalAdditionalEffectTypeFreeze = "EPalAdditionalEffectType::Freeze",
    EPalAdditionalEffectTypeIvyCling = "EPalAdditionalEffectType::IvyCling",
    EPalAdditionalEffectTypeMuddy = "EPalAdditionalEffectType::Muddy",
    EPalAdditionalEffectTypeNone = "EPalAdditionalEffectType::None",
    EPalAdditionalEffectTypePoison = "EPalAdditionalEffectType::Poison",
    EPalAdditionalEffectTypeStun = "EPalAdditionalEffectType::Stun",
    EPalAdditionalEffectTypeWetness = "EPalAdditionalEffectType::Wetness",
}

export enum Element {
    EPalElementTypeDark = "EPalElementType::Dark",
    EPalElementTypeDragon = "EPalElementType::Dragon",
    EPalElementTypeEarth = "EPalElementType::Earth",
    EPalElementTypeElectricity = "EPalElementType::Electricity",
    EPalElementTypeFire = "EPalElementType::Fire",
    EPalElementTypeIce = "EPalElementType::Ice",
    EPalElementTypeLeaf = "EPalElementType::Leaf",
    EPalElementTypeNormal = "EPalElementType::Normal",
    EPalElementTypeWater = "EPalElementType::Water",
}

export enum ForceRagdollSize {
    EPalSizeTypeNone = "EPalSizeType::None",
    EPalSizeTypeS = "EPalSizeType::S",
    EPalSizeTypeXL = "EPalSizeType::XL",
    EPalSizeTypeXS = "EPalSizeType::XS",
}

export interface SpecialAttackRateInfo {
    Type: string;
    Rate: number;
}
